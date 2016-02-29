<template>

    <div class="infinite-scroll infinite-scroll-bottom" data-distance="100">
        <div class="list-block home-list">
            <ul class="list-container">

                <div v-for="article in articles"
                     @click="onArticleClick($index, article)"
                     class="dis-box box-horizontal align-center article-item">
                    <div class="dis-box box-vertical flex">
                        <div class="article-item-title">{{ article.title }}</div>
                        <div class="article-item-info dis-box box-horizontal">
                            <span class="flex">{{ article.feed_title }}</span>
                            <span>{{ article.rectime }}</span>
                        </div>
                    </div>
                    <div v-if="article.img" class="dis-box align-center article-item-img">
                        <img :src="article.img" width="66">
                    </div>
                </div>
            </ul>
        </div>
        <!-- 加载提示符 -->
        <div v-show="loading" class="infinite-scroll-preloader offset-loading">
            <div class="preloader"></div>
        </div>
    </div>

</template>

<style>
    .home-list {
        margin-top: 0;
    }

    .article-item {
        padding: 0.4rem;
        min-height: 2.2rem;
        position: relative;
        transition-duration: 300ms;
    }

    .article-item:active {
        transition-duration: 0ms;
        background-color: #d9d9d9;
    }

    .article-item:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: auto;
        right: auto;
        height: 1px;
        width: 100%;
        background-color: #e1e1e1;
        display: block;
        z-index: 15;
        transform-origin: 50% 0%;
    }

    .article-item-title {
        color: black;
    }

    .article-item-info {
        font-size: 0.618em;
        color: grey;
    }

    .article-item-img {
        padding-left: 0.4rem;
    }

    .article-item-img img {
    }

    .offset-loading {
        margin-top:-20px;
    }
</style>

<script type="text/ecmascript-6">
    require('../css/flexbox.css')
    import API from './../api/LeanCloud'

    var currSeq = 0

    var safeIndex = (function () {
        var lastIndex = 0
        var indexMap = {}
        return function (id) {
            if (indexMap[id] === undefined) {
                indexMap[id] = lastIndex++
            }
            return indexMap[id]
        }
    })()

    export default {
        props: ['category'],

        data () {
            return {
                articles: [],
                loading: false,
                hasMore: true
            }
        },

        ready () {
            console.log('Home!')

            this.initInfinite()
            $.attachInfiniteScroll($('.infinite-scroll'))
            if (this.articles.length === 0) {
                this.fetchData()
            }

            this.$watch('category', (newValue, oldValue) => {
                this.articles = []
                this.loading = false
                this.hasMore = true
                this.fetchData()
            })
        },

        methods: {

            initInfinite () {
                $(document).on('infinite', () => {
                    console.log('infinite')
                    this.fetchData()
                })

            },

            fetchData () {
                if (!this.hasMore) {
                    return
                }
                if (this.loading) {
                    return
                }
                this.loading = true
                var size = 30
                var page = this.articles.length / size
                var cat = this.category

                var seq = ++currSeq

                API.getArticleList(cat, page, size).done((articles, hasMore) => {
                    if (seq !== currSeq) {
                        console.log(`out of sequence of ${currSeq}: ${seq}`)
                        return
                    }
                    this.hasMore = hasMore
                    this.articles.push.apply(this.articles, articles)

                    if (!hasMore) {
                        console.log('detach infinite scroll')
                        $.detachInfiniteScroll($('.infinite-scroll'));
                    }

                }).always(() => {
                    if (seq !== currSeq) {
                        return
                    }
                    this.loading = false
                })
            },

            onArticleClick (index, article) {
                var id = article.id
                this.$dispatch('loadArticle', safeIndex(id), id)
            }
        }
    }
</script>
