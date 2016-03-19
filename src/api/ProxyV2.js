import bs58 from 'bs58'

let URL_PROXY = 'https://apibox.leanapp.cn/p'
//let URL_PROXY = 'https://stg-apibox.leanapp.cn/p'
//let URL_PROXY = 'http://192.168.1.6:3000/p'

export default class {

    /**
     * make a proxy request
     * @param params json object
     * {
     *     "url": "http://api.tuicool.com/api/articles/hot.json",
     *     "method": "GET",
     *     "headers": {
     *         "Authorization": "Basic MC4wLjAuMDp0dWljb29s",
     *         "User-Agent": "iOS/iphone6/2.15.0",
     *         "Content-Type": "application/json; charset=UTF-8"
     *     },
     *     "params": {
     *         "pn": 0,
     *         "size": 30,
     *         "lang": 1,
     *         "cid": 0
     *     },
     *     "return": "simple" or ["buffer", "headers", "status", "text", "data"]
     *
     *     "simple": will return {result: realdata_xxx
     *     ["headers","data"]: will return {result: {headers: {...}, data: realdata_xxx }}
     * }
     */
    static request(params) {
        var defer = $.Deferred()

        var _data = JSON.stringify(params)
        var _data = bs58.encode(new Buffer(_data))

        $.ajax({
            url: URL_PROXY,
            type: 'POST',
            contentType: 'text/plain',
            data: _data
        }).done((data, textStatus, jqXHR) => {
            defer.resolve(data, textStatus, jqXHR)
        }).fail(defer.reject)

        return defer.promise()
    }

    static get URL() {
        return URL_PROXY
    }

}