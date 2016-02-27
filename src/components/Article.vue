<template>
    <div class="page" id="{{ index | HtmlId }}">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back" href="/" data-transition='slide-out'>
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">正文</h1>
        </header>
        <div v-if="article" class="content article-content">
            {{{ article.content }}}
        </div>
        <div v-else class="infinite-scroll-preloader article-loading">
            <div class="preloader"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Utils from './helper/Utils.js'
    import API from './helper/API_tuicool.js'
    import Helper from './helper/Helper.js'

    Vue.filter('HtmlId', index => {
        return Helper.genHtmlId(index, 'article')
    })

    export default {
        components: {},

        props: ['args'],

        data () {
            return {
                index: this.args.index,
                id: this.args.id,
                article: this.args.article
            }
        },

        ready () {
            console.log('Article!')

            this.$watch('args', (newValue, oldValue) => {
                this.index = this.args.index
                this.id = this.args.id
                this.article = this.args.article
                if (!this.article) {
                    this.fetchArticle(this.id)
                }
            })

            if (!this.article) {
                this.fetchArticle(this.id)
            }
        },

        methods: {
            fetchArticle(id) {
                API.getArticle(id).done((article) => {
                    this.article = article
                })
            }
        }
    }

</script>

<style>
    .article-content {
        padding: 0 0.5rem;
    }

    .article-loading {
        margin-top: 3rem;
    }

    .article-content img {
        max-width: 100%;
    }
</style>
