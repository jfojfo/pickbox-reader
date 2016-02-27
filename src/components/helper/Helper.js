export default class {

    static genHtmlId(id, prefix) {
        return (prefix ? prefix + '_' : '') + id
    }

}