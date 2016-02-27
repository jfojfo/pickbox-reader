let URL_BASE = 'http://api.tuicool.com'
let URL_ARTICLES_HOT = URL_BASE + '/api/articles/hot.json'
let URL_ARTICLE = URL_BASE + '/api/articles/%d.json'

let COMMON_HEADERS = {
    //'User-Agent': 'iOS/iphone6/2.15.0',
    'Authorization': 'Basic MC4wLjAuMDp0dWljb29s'
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

    static getArticleList(page, size) {
        var defer = $.Deferred()

        $.ajax({
            url: URL_ARTICLES_HOT,
            headers: COMMON_HEADERS,
            data: {
                cid: 0,
                pn: page,
                size: size || 30
            }
        }).done((data, textStatus, jqXHR) => {
            console.log(data)
            defer.resolve(data.articles, data.has_next)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }

    static getArticle(id) {
        var defer = $.Deferred()

        $.ajax({
            url: URL_ARTICLE.replace('%d', id),
            headers: COMMON_HEADERS,
            data: {
                is_pad: 1,
                need_image_meta: 1
            }
        }).done((data, textStatus, jqXHR) => {
            console.log(data)
            defer.resolve(data.article)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }
}
