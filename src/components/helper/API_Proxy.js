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

let URL_BASE = 'http://api.tuicool.com'
let URL_ARTICLES_HOT = URL_BASE + '/api/articles/hot.json'
let URL_ARTICLE = URL_BASE + '/api/articles/%d.json'

let COMMON_HEADERS = {
    'Authorization': 'Basic MC4wLjAuMDp0dWljb29s',
    'User-Agent': 'iOS/iphone6/2.15.0',
    'Content-Type': 'application/json; charset=UTF-8'
}

export default class {

    static ajaxFail(defer, jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
        var err = JSON.parse(jqXHR.responseText)
        defer.reject({
            code: err.code,
            error: err.error
        })
    }

    static getArticleList(category, page, size) {
        var defer = $.Deferred()

        $.ajax({
            url: URL_PROXY,
            type: 'POST',
            headers: PROXY_HEADERS,
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify({
                url: URL_ARTICLES_HOT,
                method: 'GET',
                headers: COMMON_HEADERS,
                params: {
                    pn: page,
                    size: size || 30,
                    cid: category,   // 技术：20，科技：101000000，创投：101040000，数码：101050000，设计：108000000，营销：114000000
                    lang: 1          // 0：中英文，1：中文，2：英文
                }
            })
        }).done((data, textStatus, jqXHR) => {
            console.log(data)
            data = data.result
            defer.resolve(data.articles, data.has_next)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }

    static getArticle(id) {
        var defer = $.Deferred()

        $.ajax({
            url: URL_PROXY,
            type: 'POST',
            headers: PROXY_HEADERS,
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify({
                url: URL_ARTICLE.replace('%d', id),
                method: 'GET',
                headers: COMMON_HEADERS,
                params: {
                    is_pad: 1,
                    need_image_meta: 1
                }
            })
        }).done((data, textStatus, jqXHR) => {
            console.log(data)
            data = data.result
            defer.resolve(data.article)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }
}
