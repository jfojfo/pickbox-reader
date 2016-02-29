AV.Cloud.define('proxy', function(request, response) {


var params = request.params
console.log(params)

var options = {
    timeout: 15000
}

var method = (params.method || 'GET').toUpperCase()

options.url = params.url
options.method = method
options.headers = params.headers || {}

if (method === 'GET') {
    options.params = params.params
} else if (method === 'POST') {
    options.body = params.params
}


var fields = ['buffer', 'headers', 'status', 'text', 'data']
var flag = params.return
var isSimple = false
if (typeof flag === 'string' && flag.toLowerCase() === 'simple') {
    isSimple = true
    fields = ['data']
} else if (typeof flag === 'object' && flag.hasOwnProperty('length') && flag.length <= 5) {
    fields = flag
}

options.success = function(httpResponse) {
    var ret = {}
    for (var i in fields) {
        var k = fields[i]
        if (httpResponse.hasOwnProperty(k)) {
            ret[k] = httpResponse[k]
        }
    }
    if (isSimple) {
        response.success(ret.data)
    } else {
        response.success(ret)
    }
    // console.log(httpResponse.data)
}

options.error = function(httpResponse) {
    response.error(httpResponse)
    // console.error(httpResponse)
}


AV.Cloud.httpRequest(options)




})
