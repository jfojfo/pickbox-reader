import bs58 from 'bs58'

let APP_ID = 'ofk0Kl7wqrTUkHKKn5uPo6GS-gzGzoHsz'
let APP_KEY = 'BvDz0V2KpbJlT5zPSankYQ9h'
let HEADER_KEY_ID = 'x-avoscloud-application-id'
let HEADER_KEY_KEY = 'x-avoscloud-application-key'
let HEADER_KEY_PRODUCT = 'x-avoscloud-application-production'

let URL_PROXY = 'https://leancloud.cn/1.1/functions/proxy'
let PROXY_HEADERS = {
    [HEADER_KEY_ID]: APP_ID,
    [HEADER_KEY_KEY]: APP_KEY,
    [HEADER_KEY_PRODUCT]: '1'
}

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
            headers: PROXY_HEADERS,
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify({req:_data})
        }).done((data, textStatus, jqXHR) => {
            defer.resolve(data.result, textStatus, jqXHR)
        }).fail(defer.reject)

        return defer.promise()
    }
}