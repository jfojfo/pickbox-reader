import Proxy from './Proxy.js'
import Config from '../Config.js'
import Constraint from '../utils/Constraint.js'


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
        //var err = JSON.parse(jqXHR.responseText)
        //defer.reject({
        //    code: err.code,
        //    error: err.error
        //})
    }

    static getArticleList(category, size, page, lastId) {
        var defer = $.Deferred()

        var params = {
            cid: category,  // 热点：0，技术：20，科技：101000000，创投：101040000，数码：101050000，设计：108000000，营销：114000000
            size: size,
            lang: 1         // 0：中英文，1：中文，2：英文
        }
        if (page !== undefined) {
            params.pn = page
        }
        if (lastId !== undefined) {
            params.last_id = lastId
        }

        Proxy.request({
            url: URL_ARTICLES_HOT,
            method: 'GET',
            headers: COMMON_HEADERS,
            params: params,
            'return': 'simple'
        }).done((data, textStatus, jqXHR) => {
            console.log(data)

            try {
                data = new Constraint(Config.api_article_list).check(data)
            } catch (e) {
                console.warn('' + e)
            }
            defer.resolve(data.articles, data.has_next)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }

    static getArticle(id) {
        var defer = $.Deferred()

        Proxy.request({
            url: URL_ARTICLE.replace('%d', id),
            method: 'GET',
            headers: COMMON_HEADERS,
            params: {
                is_pad: 1,
                need_image_meta: 1
            },
            'return': 'simple'
        }).done((data, textStatus, jqXHR) => {
            console.log(data)
            try {
                data = new Constraint(Config.api_article).check(data)
            } catch (e) {
                console.warn('' + e)
            }
            defer.resolve(data.article)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }

    static fetchImgData(imgurl) {
        var defer = $.Deferred()

        Proxy.request({
            url: imgurl,
            method: 'GET',
            'return': ['headers', 'data', 'status']
        }).done((data, textStatus, jqXHR) => {
            console.log(data)
            defer.resolve(data)

        }).fail((jqXHR, textStatus, errorThrown) => {
            this.ajaxFail(defer, jqXHR, textStatus, errorThrown)
        })

        return defer.promise()
    }

}
