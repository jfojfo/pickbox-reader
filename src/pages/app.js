import Vue from 'vue'
import App from 'src/components/App.vue'
import Helper from 'src/components/helper/Helper'

//Vue.config.debug = true

Vue.filter('HtmlId', (index, prefix) => {
    return Helper.genHtmlId(index, prefix)
})

var lastCustomPageComID;

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {App},
    data: function () {
        return {
            'app': ''
        }
    },
    methods: {
        addComponent (component, args) {
            this.$set(component, args)
        },
        hasComponent (component) {
            return this.$data.hasOwnProperty(component)
        },
        removeComponent (component) {
            this.$delete(component)
        }
    },
    events: {
        loadArticle (index, id) {
            require.ensure(['src/components/Article'], (require) => {
                var Article = require('src/components/Article')

                var comID = 'MyArticle_' + index
                Vue.component(comID, Article)

                if (!this.hasComponent(comID)) {
                    this.addComponent(comID, {index: index, id: id})
                }
                this.$nextTick(() => {
                    $.router.load('#' + Helper.genHtmlId(index, 'article'))
                })
            })
        },

        loadCustomPage (title, url, index) {
            require.ensure(['src/components/CustomPage'], (require) => {
                var CustomPage = require('src/components/CustomPage')

                var comID = 'CustomPage_' + index
                Vue.component(comID, CustomPage)

                if (lastCustomPageComID) {
                    this.removeComponent(lastCustomPageComID)
                }
                lastCustomPageComID = comID
                this.addComponent(comID, {title: title, url: url, index: index})

                this.$nextTick(() => {
                    $.router.load('#' + Helper.genHtmlId(index, 'custom'))
                })
            })
        }
    }
})
