<template>
    <div class="page" id="{{ index | HtmlId 'article' }}">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back" href="/" data-transition='slide-out'>
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">正文</h1>
        </header>
        <div v-if="article" class="content article-content">
            <h2>{{ article.title }}</h2>
            <div class="article-info">
                <span class="article-info-from">{{ article.feed_title }}</span>
                <span class="article-info-time">{{ article.time }}</span>
            </div>
            <article-content :content="article.content"></article-content>
            <span @click="onOriginLinkClick" class="button button-big button-round article-origin">查看原文</span>
        </div>
        <div v-else class="infinite-scroll-preloader my-loading">
            <div class="preloader"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Utils from './../utils/Utils.js'
    import API from './../api/LeanCloud.js'
    import Helper from './helper/Helper.js'
    import ArticleContent from './ArticleContent'

    export default {
        components: {
            ArticleContent
        },

        props: ['args'],

        data () {
            return {
                article: this.args.article
            }
        },

        computed: {
            index () {
                return this.args.index
            },
            id () {
                return this.args.id
            }
        },

        ready () {
            console.log('Article!')

            this.$watch('args.article', (newValue, oldValue) => {
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
            fetchArticle (id) {
                API.getArticle(id).done((article) => {
                    this.article = article
                })
            },

            onOriginLinkClick () {
                var url = this.article.url
                if (url) {
                    this.$dispatch('loadCustomPage', '原文', url, this.index)
                } else {
                    $.toast('原文链接丢失');
                }
            }
        }
    }

</script>

<style lang="less">
    .article-content {
        padding: 0 0.5rem;
        & img {
             max-width: 100%;
        }
    }

    /*.article-content img {*/
        /*max-width: 100%;*/
    /*}*/

    .article-info {
        font-size: 0.8em;
        color: grey;
    }

    .article-info-time {
        margin-left: 1rem;
    }

    .article-origin {
        margin: 1rem 0;
    }
</style>
