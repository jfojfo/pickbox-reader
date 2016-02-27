import Vue from 'vue'
import App from 'src/components/App.vue'
import API from 'src/components/helper/API_tuicool'
import Helper from 'src/components/helper/Helper'

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {App},
    data: function () {
        return {
            pages: {'app': ''}
        }
    },
    methods: {
        addPage (page, args) {
            this.$set('pages.' + page, args)
        },
        removePage (page) {
        }
    },
    events: {
        loadArticle (index, id) {
            require.ensure(['src/components/Article'], (require) => {
                var Article = require('src/components/Article')

                var comID = 'MyArticle_' + index
                Vue.component(comID, Article)

                if (!this.pages[comID]) {
                    this.addPage(comID, {index: index, id: id})
                }
                this.$nextTick(() => {
                    $.router.load('#' + Helper.genHtmlId(index, 'article'))
                })
            })
        }
    }
})
