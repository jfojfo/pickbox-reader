export default class {

    static getLocation(href) {
        var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)?(\?[^#]*|)(#.*|)$/);

        var query = {}
        if (match[6]) {
            var arr = match[6].slice(1).split('&')
            arr.forEach((elem) => {
                var parts = elem.split('=')
                query[parts[0]] = parts[1]
            })
        }

        return match && {
                protocol: match[1],
                host: match[2],
                hostname: match[3],
                port: match[4],
                pathname: match[5],
                search: match[6],
                hash: match[7],
                query: query
            }
    }

}