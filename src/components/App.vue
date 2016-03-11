<template>
    <div class="page-group" :class="{'theme-dark': isDarkTheme}">
        <component v-for="(page, args) in pages" :is="page" :args="args"></component>
        <div v-if="isEmpty" class="page" id="{{ id_placeholder }}"></div>
    </div>
</template>

<style>
    .my-loading {
        margin-top: 3rem;
    }
</style>

<script type="text/ecmascript-6">
    import Helper from './helper/Helper.js'
    import Store from './Store.js'
    import bs58 from 'bs58'


    Vue.filter('HtmlId', (index, prefix) => {
        return Helper.genHtmlId(index, prefix)
    })


    var lastCustomPageComID
    var appData = {
        id_placeholder: 'home'
    }

    export default{
        init(){
            // before this.$data initialized
            var hash = window.location.hash
            var id = hash.substr(1)
            if (id) {
                appData.id_placeholder = id
            }
        },
        data () {
            return {
                id_placeholder: appData.id_placeholder,
                pages: {}
            }
        },
        computed: {
            isDarkTheme () {
                return Store.isDarkTheme
            },
            isEmpty() {
                return Object.keys(this.pages).length === 0
            }
        },
        ready () {
            $(() => {
                // sm.js通过$(function(){...})注册了一些初始化函数,用到了.page页面
                // 这些初始化函数在dom产生ready事件时被调用
                // 因此当component为空时,使用id为id_placeholder的.page页面,让sm.js正常初始化
                // id_placeholder要与后续马上要加载的页面的id一致,否则进入子页面后back会找不到页面
                this.route().done(() => {
                    // route异步加载完真正page后,才调用$.init()初始化page
                    this.$nextTick(() => $.init())
                })
            })
        },
        methods: {
            setComponent (component, args) {
                this.$set('pages.' + component, args)
            },
            hasComponent (component) {
                return this.pages.hasOwnProperty(component)
            },
            removeComponent (component) {
                Vue.delete(this.pages, component)
            },
            route () {
                var defer = $.Deferred()

                var hash = window.location.hash
                var parts = hash.split('_')
                var page = parts[0]
                if (page) {
                    var b58Id = parts[1]
                    if (b58Id) {
                        var id = new Buffer(bs58.decode(b58Id)).toString()
                        if (page === '#article') {

                            require.ensure(['./PageArticle.vue'], (require) => {
                                var PageArticle = require('./PageArticle.vue')
                                this.regArticlePageComponent(PageArticle, -1, id, true)
                                defer.resolve()
                            })

                        } else if (page === '#custom') {
                            // go to home page
                            window.location.href = '/'

                        } else {
                            window.location.href = '/'
                        }
                    } else {
                        window.location.href = '/'
                    }
                } else {
                    require.ensure(['./PageHome.vue'], (require) => {
                        var PageHome = require('./PageHome.vue')
                        Vue.component('PageHome', PageHome)
                        this.setComponent('PageHome', {})
                        defer.resolve()
                    })
                }

                return defer.promise()
            },
            regArticlePageComponent (PageArticle, index, id, backToHome) {
                var b58Id = bs58.encode(new Buffer(id))

                //var comID = 'PageArticle_' + index
                var comID = 'PageArticle_' + b58Id
                Vue.component(comID, PageArticle)

                //var htmlId = Helper.genHtmlId(index, 'article')
                var htmlId = Helper.genHtmlId(b58Id, 'article')
                this.setComponent(comID, {index: index, id: id, htmlId: htmlId, backToHome: backToHome})

                return htmlId
            },
            regCustomPageComponent (PageCustom, title, url, index, id) {
                var b58Id = bs58.encode(new Buffer(id))

                //var comID = 'PageCustom_' + index
                var comID = 'PageCustom_' + b58Id
                Vue.component(comID, PageCustom)

                if (lastCustomPageComID) {
                    this.removeComponent(lastCustomPageComID)
                }
                lastCustomPageComID = comID
                //var htmlId = Helper.genHtmlId(index, 'custom')
                var htmlId = Helper.genHtmlId(b58Id, 'custom')
                this.setComponent(comID, {title: title, url: url, index: index, htmlId: htmlId})

                return htmlId
            }
        },
        events: {
            loadArticlePage (index, id) {
                require.ensure(['./PageArticle.vue'], (require) => {
                    var PageArticle = require('./PageArticle.vue')
                    var htmlId = this.regArticlePageComponent(PageArticle, index, id)
                    this.$nextTick(() => {
                        $.router.load('#' + htmlId)
                    })
                })
            },

            loadCustomPage (title, url, index, id) {
                require.ensure(['./PageCustom.vue'], (require) => {
                    var PageCustom = require('./PageCustom.vue')
                    var htmlId = this.regCustomPageComponent(PageCustom, title, url, index, id)
                    this.$nextTick(() => {
                        $.router.load('#' + htmlId)
                    })
                })
            }
        }
    }
</script>