//let demo = {
//    type: Constraint.TYPE_ARRAY,
//    constraint: {
//        id: {
//            type: Constraint.TYPE_STRING,
//            rule: Constraint.notEmpty
//        },
//        timestamp: {
//            type: Constraint.TYPE_NUMBER,
//            rule: or(eq(100), eq(200))
//        },
//        flag: {
//            type: Constraint.TYPE_BOOLEAN,
//            value: true
//        },
//        desc: {
//            type: Constraint.TYPE_STRING,
//            defValue: ''
//        },
//        other: {
//            type: Constraint.TYPE_STRING,
//            rule: function(v) {}
//        }
//    }
//}

var slice = Array.prototype.slice


class Constraint {

    constructor(options) {
        this.options = options
    }

    checkExist(value) {
        if (value === undefined) {
            if (this.options.hasOwnProperty('defValue')) {
                return this.options.defValue
            } else {
                throw new CTValueUndefined(value)//'(${value}) undefined'
            }
        }
        return value
    }

    checkNull(value) {
        if (value === null && this.options.nullable !== true) {
            throw new CTValueNull(value)//`(${value}) null not allowed`
        }
        return value
    }

    checkType(value) {
        if (value === null && this.options.nullable === true) {
            return value
        }

        if (this.options.type === Constraint.TYPE_ARRAY) {
            if (value instanceof Array) {
                return value
            }
        } else if (this.options.type === Constraint.TYPE_OBJECT) {
            if (typeof(value) === 'object' && !(value instanceof Array)) {
                return value
            }
        } else if (typeof(value) === this.options.type) {
            return value
        }

        throw new CTValueType(value, this.options.type)//`(${value}) type error, should be of type "${this.options.type}"`
    }

    checkRule(value) {
        if (this.options.hasOwnProperty('value')) {
            if (value !== this.options.value) {
                throw new CTValueViolate(value, this.options.value)//`(${value}) value violate ${this.options.value}`
            }
        }

        if (!this.options.hasOwnProperty('rule')) {
            return value
        }

        var rule = this.options.rule

        if (typeof(rule) === 'function') {
            throw new CTValueRuleViolate(value, rule)//`(${value}) rule violate`
        } else if (rule instanceof Rule) {
            if (!rule.fn(value)) {
                throw new CTValueRuleViolate(value, rule)//`(${value}) rule violate "${rule.toString()}"`
            } else {
                return value
            }
        }

        throw new CTException(`rule config error "${rule}"`)
    }

    check(value) {
        value = this.checkExist(value)
        this.checkNull(value)
        this.checkType(value)
        this.checkRule(value)

        var opt = this.options
        var type = opt.type
        if (type === Constraint.TYPE_OBJECT) {
            if (value !== null) {
                for (var key in opt.constraint) {
                    try {
                        value[key] = new Constraint(opt.constraint[key]).check(value[key])
                    } catch (e) {
                        throw new CTPathException(opt, key, e)
                        //var msg = '' + e
                        //if (msg.indexOf(':') === -1) {
                        //    msg = key + ': ' + msg
                        //} else {
                        //    if (opt.constraint[key].type === Constraint.TYPE_ARRAY) {
                        //        msg = key + msg
                        //    } else {
                        //        msg = key + '.' + msg
                        //    }
                        //}
                        //throw msg
                    }
                }
            }
        } else if (type === Constraint.TYPE_ARRAY) {
            for (var i in value) {
                try {
                    value[i] = new Constraint(opt.constraint).check(value[i])
                } catch (e) {
                    throw new CTPathException(opt, i, e)
                    //var msg = '' + e
                    //var key = `[${i}]`
                    //if (msg.indexOf(':') === -1) {
                    //    msg = key + ': ' + msg
                    //} else {
                    //    msg = key + '.' + msg
                    //}
                    //throw msg
                }
            }
        }

        return value
    }

}


function str(value) {
    if (typeof(value) === 'string') {
        return `"${value}"`
    } else {
        return `${value}`
    }
}

class Rule {
    constructor(name, f) {
        if (typeof(name) === 'function') {
            this.name = ''
            this.f = name
            this.args = slice.call(arguments, 1)
        } else {
            this.name = name
            this.f = f
            this.args = slice.call(arguments, 2)
        }
    }

    fn(v) {
        var arr = [v].concat(this.args)
        return this.f.apply(this, arr)
    }

    toString() {
        var args = this.args.map((arg) => {
            return str(arg)
        })
        var s = args.join(',')
        if (s.length === 0) {
            return `(${this.name})`
        } else {
            return `(${this.name} ${s})`
        }
    }
}

Constraint.not = function (rule) {
    return new Rule('not', function (value) {
        return !rule.fn(value)
    }, rule)
}

Constraint.and = function (rule1, rule2) {
    return new Rule('and', function (value) {
        return rule1.fn(value) && rule2.fn(value)
    }, rule1, rule2)
}

Constraint.or = function (rule1, rule2) {
    return new Rule('or', function (value) {
        return rule1.fn(value) || rule2.fn(value)
    }, rule1, rule2)
}

Constraint.empty = new Rule('empty', function (value) {
    if (value === null || value === undefined) {
        throw new CTRuleArgsExcption(this, value)//`bad value "${value}"`
    }

    var type = typeof(value)
    if (type === 'string') {
        return value.length === 0
    } else if (type === 'object') {
        if (value instanceof Array) {
            return value.length === 0
        } else if (value instanceof Object) {
            return Object.keys(value).length === 0
        }
    }

    return false
})

Constraint.notEmpty = Constraint.not(Constraint.empty)

//function bind() {
//    var args = [].concat.apply([], arguments)
//    var op = args.shift()
//    var f = function (v) {
//        args.unshift(v)
//        return op.apply(null, args)
//    }
//    return f
//}

Constraint.eq = function (other) {
    return new Rule('eq', function (v, o) {
        if (typeof(v) !== typeof(o)) {
            throw new CTRuleArgsExcption(this, v, o)
        }
        return v === o
    }, other)
}

Constraint.gt = function (other) {
    return new Rule('gt', function (v, o) {
        if (typeof(v) !== typeof(o)) {
            throw new CTRuleArgsExcption(this, v, o)
        }
        return v > o
    }, other)
}

Constraint.lt = function (other) {
    return new Rule('lt', function (v, o) {
        if (typeof(v) !== typeof(o)) {
            throw new CTRuleArgsExcption(this, v, o)
        }
        return v < o
    }, other)
}

Constraint.TYPE_BOOLEAN = 'boolean'
Constraint.TYPE_STRING = 'string'
Constraint.TYPE_NUMBER = 'number'
Constraint.TYPE_OBJECT = 'object'
Constraint.TYPE_ARRAY = 'array'


class CTException {
    constructor(desc) {
        this.desc = desc || ''
    }

    toString() {
        return '' + this.desc
    }
}

class CTValueException extends CTException {
    constructor(value, desc) {
        super(desc)
        this.value = value
    }

    toString() {
        return `${str(this.value)}, ${this.desc}`
    }
}

class CTValueUndefined extends CTValueException {
    constructor(value) {
        super(value, 'undefined not allowed, try setting "defValue"')
    }
}

class CTValueNull extends CTValueException {
    constructor(value) {
        super(value, 'null not allowed, try setting "nullable: true"')
    }
}

class CTValueType extends CTValueException {
    constructor(value, type) {
        super(value, `type error should be of type "${type}"`)
        this.type = type
    }
}

class CTValueViolate extends CTValueException {
    constructor(value, correctValue) {
        super(value, `value violate:${str(correctValue)}`)
        this.correctValue = correctValue
    }
}

class CTValueRuleViolate extends CTValueException {
    constructor(value, rule) {
        super(value, `rule violate:${rule.toString()}`)
        this.rule = rule
    }
}

class CTRuleArgsExcption extends CTException {
    constructor(rule) {
        var args = slice.call(arguments, 1).map((arg) => {
            return str(arg)
        })
        var msg = args.join(',')
        super(`rule ${rule} bad arguments:(${msg})`)
        this.rule = rule
    }
}

class CTPathException extends CTException {
    constructor(options, key, exception) {
        var type = options.type
        var constraint = options.constraint
        var path = ''

        if (!(exception instanceof CTPathException)) {
            path = ':' + path
        } else if (type === Constraint.TYPE_ARRAY ||
            type === Constraint.TYPE_OBJECT && constraint[key].type !== Constraint.TYPE_ARRAY) {
            path = '.' + path
        }

        if (type === Constraint.TYPE_ARRAY) {
            key = '[' + key + ']'
        }

        path = key + path

        super(path + exception.toString())
        this.options = options
        this.exception = exception
    }
}


export default Constraint
