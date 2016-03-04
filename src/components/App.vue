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
                },
                isDarkTheme: false
            }
        },
        methods: {
            addComponent (component, args) {
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

                    var comID = 'PageArticle_' + index
                    Vue.component(comID, PageArticle)

                    var htmlId = Helper.genHtmlId(index, 'article')
                    if (!this.hasComponent(comID)) {
                        this.addComponent(comID, {index: index, id: id, htmlId: htmlId})
                    }
                    this.$nextTick(() => {
                        $.router.load('#' + htmlId)
                    })
                })
            },

            loadCustomPage (title, url, index) {
                require.ensure(['./PageCustom'], (require) => {
                    var CustomPage = require('./PageCustom')

                    var comID = 'PageCustom_' + index
                    Vue.component(comID, CustomPage)

                    if (lastCustomPageComID) {
                        this.removeComponent(lastCustomPageComID)
                    }
                    lastCustomPageComID = comID
                    var htmlId = Helper.genHtmlId(index, 'custom')
                    this.addComponent(comID, {title: title, url: url, index: index, htmlId: htmlId})

                    this.$nextTick(() => {
                        $.router.load('#' + htmlId)
                    })
                })
            },

            'dark-theme': function (isDarkTheme) {
                console.log('event dark-theme')
                this.isDarkTheme = isDarkTheme
            }

        }
    }
</script>