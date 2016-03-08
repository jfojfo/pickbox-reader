<template>
    <div class="page-group" :class="{'theme-dark': isDarkTheme}">
        <component v-for="(page, args) in $data.pages" :is="page" :args="args"></component>
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

    Vue.component('PageHome', (resolve, reject) => {
        require.ensure(['./PageHome.vue'], function () {
            resolve(require('./PageHome.vue'))
        })
    })


    var lastCustomPageComID;
    var appData = {
        pages: {},
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
            return appData
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
            console.log('ready', 'isEmpty:' + this.isEmpty)
            $(() => {
                console.log('$.init()', 'isEmpty:' + this.isEmpty)
                $.init()

                // after $.init() to make sure there is at least one page element exists in dom tree
                this.route()
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
                var hash = window.location.hash
                var parts = hash.split('_')
                var page = parts[0]
                if (page) {
                    var b58Id = parts[1]
                    if (b58Id) {
                        var id = new Buffer(bs58.decode(b58Id)).toString();
                        if (page === '#article') {

                            require.ensure(['./PageArticle.vue'], (require) => {
                                var PageArticle = require('./PageArticle.vue')
                                this.regArticlePageComponent(PageArticle, -1, id)
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
                    this.setComponent('PageHome', {})
                }
            },
            regArticlePageComponent (PageArticle, index, id) {
                var b58Id = bs58.encode(new Buffer(id))

                //var comID = 'PageArticle_' + index
                var comID = 'PageArticle_' + b58Id
                Vue.component(comID, PageArticle)

                //var htmlId = Helper.genHtmlId(index, 'article')
                var htmlId = Helper.genHtmlId(b58Id, 'article')
                this.setComponent(comID, {index: index, id: id, htmlId: htmlId})

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