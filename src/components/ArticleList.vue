<template>

    <div class="content infinite-scroll infinite-scroll-bottom pull-to-refresh-content"
         data-distance="100" data-ptr-distance="55">

        <!-- 默认的下拉刷新层 -->
        <div class="pull-to-refresh-layer">
            <div class="preloader"></div>
            <div class="pull-to-refresh-arrow"></div>
        </div>

        <div class="list-block article-list">
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
        <div v-show="loadingMore" class="infinite-scroll-preloader offset-loading">
            <div class="preloader"></div>
        </div>
    </div>

</template>

<style>
    .article-list {
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
        margin-top: -20px;
    }

    .toast-bottom {
        top: 85%;
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
                hasMore: true,
                loadingMore: false,
                refreshing: false
            }
        },

        ready () {
            this.initLoading()
//            $.attachInfiniteScroll($('.infinite-scroll'))
            if (this.articles.length === 0) {
                this.fetchData()
            }

            this.$watch('category', (newValue, oldValue) => {
                this.reset()
                this.fetchData()
            })
        },

        methods: {

            initLoading () {
                $(document).on('refresh', (e) => {
                    console.log('refresh')
                    this.refresh()
                })

                $(document).on('infinite', () => {
                    console.log('infinite')
                    this.fetchData()
                })

            },

            reset () {
                this.articles = []
                this.hasMore = true
                this.loadingMore = false
                this.refreshing = false
            },

            fetchData () {
                if (this.loadingMore || this.refreshing) {
                    return
                }
                if (!this.hasMore) {
                    return
                }

                this.loadingMore = true
                var size = 30
                var cat = this.category
                var page = parseInt((this.articles.length + size - 1) / size)
                var lastId = this.articles.length > 0 ? this.articles[this.articles.length - 1].id : undefined

                var seq = ++currSeq
                API.getArticleList(cat, size, page, lastId).done((articles, hasMore) => {
                    if (seq !== currSeq) {
                        console.log(`out of sequence of ${currSeq}: ${seq}`)
                        return
                    }
                    articles = articles || []
                    this.hasMore = hasMore
                    this.articles.push.apply(this.articles, articles)

                    this.$nextTick(() => {
                        // $('.content', this).scroller('refresh')
                        $.refreshScroller();
                    })

                    if (!hasMore) {
                        console.log('detach infinite scroll')
                        $.detachInfiniteScroll($('.infinite-scroll'));
                    }

                }).always(() => {
                    if (seq !== currSeq) {
                        return
                    }
                    this.loadingMore = false
                })
            },

            refresh () {
                if (this.loadingMore || this.refreshing) {
                    return
                }

                this.refreshing = true

                var size = 30
                var cat = this.category
                var page = undefined
                var lastId = undefined

                var firstArticle = this.articles.length > 0 ? this.articles[0] : undefined

                var seq = ++currSeq
                API.getArticleList(cat, size, page, lastId).done((articles, hasMore) => {
                    if (seq !== currSeq) {
                        console.log(`out of sequence of ${currSeq}: ${seq}`)
                        return
                    }
                    this.hasMore = hasMore
                    articles = articles || []
                    this.articles = articles

                    this.$nextTick(() => {
                        $.refreshScroller();
                    })

                    if (!hasMore) {
                        console.log('detach infinite scroll')
                        $.detachInfiniteScroll($('.infinite-scroll'));
                    }

                    if (firstArticle) {
                        var lastId = firstArticle.id
                        var count = 0
                        for (var a of articles) {
                            if (a.id === lastId) {
                                break
                            }
                            count++
                        }

                        if (count > 0) {
                            $.toast(`更新${count}条`, 1000, 'toast-bottom');
                        }
                    }

                }).always(() => {
                    if (seq !== currSeq) {
                        return
                    }
                    $.pullToRefreshDone('.pull-to-refresh-content');
                    this.refreshing = false
                })
            },

            onArticleClick (index, article) {
                var id = article.id
                this.$dispatch('loadArticlePage', index, id)
            }
        }
    }
</script>
