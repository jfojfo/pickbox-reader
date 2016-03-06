<template>
    <div class="page-group" :class="{'theme-dark': isDarkTheme}">
        <component v-for="(page, args) in $data.pages" :is="page" :args="args"></component>
    </div>
</template>

<style>
    .my-loading {
        margin-top: 3rem;
    }
</style>

<script type="text/ecmascript-6">
    import Helper from './helper/Helper.js'
    import PageHome from './PageHome.vue'
    import Store from './Store.js'
    import bs58 from 'bs58'


    Vue.filter('HtmlId', (index, prefix) => {
        return Helper.genHtmlId(index, prefix)
    })

    var lastCustomPageComID;

    export default{
        components : { PageHome },
        data: function () {
            return {
                pages: {
                    'page-home': '',
                }
            }
        },
        computed: {
            isDarkTheme () {
                return Store.isDarkTheme
            }
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
            }
        },
        events: {
            loadArticlePage (index, id) {
                require.ensure(['./PageArticle'], (require) => {
                    var PageArticle = require('./PageArticle')

                    var b58Id = bs58.encode(new Buffer(id))

                    //var comID = 'PageArticle_' + index
                    var comID = 'PageArticle_' + b58Id
                    Vue.component(comID, PageArticle)

                    //var htmlId = Helper.genHtmlId(index, 'article')
                    var htmlId = Helper.genHtmlId(b58Id, 'article')
                    this.setComponent(comID, {index: index, id: id, htmlId: htmlId})
                    this.$nextTick(() => {
                        $.router.load('#' + htmlId)
                    })
                })
            },

            loadCustomPage (title, url, index, id) {
                require.ensure(['./PageCustom'], (require) => {
                    var CustomPage = require('./PageCustom')

                    var b58Id = bs58.encode(new Buffer(id))

                    //var comID = 'PageCustom_' + index
                    var comID = 'PageCustom_' + b58Id
                    Vue.component(comID, CustomPage)

                    if (lastCustomPageComID) {
                        this.removeComponent(lastCustomPageComID)
                    }
                    lastCustomPageComID = comID
                    //var htmlId = Helper.genHtmlId(index, 'custom')
                    var htmlId = Helper.genHtmlId(b58Id, 'custom')
                    this.setComponent(comID, {title: title, url: url, index: index, htmlId: htmlId})

                    this.$nextTick(() => {
                        $.router.load('#' + htmlId)
                    })
                })
            }
        }
    }
</script>