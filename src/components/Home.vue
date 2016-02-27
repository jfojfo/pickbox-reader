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
        <div v-show="loading" class="infinite-scroll-preloader">
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
</style>

<script type="text/ecmascript-6">
    require('src/css/flexbox.css')
    import API from './helper/API_tuicool'

    export default {
        data () {
            return {
                articles: [],
                loading: false,
                hasMore: true
            }
        },

        ready () {
            this.initInfinite()
            if (this.articles.length === 0) {
                this.fetchData()
            }
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
                API.getArticleList(page, size).done((articles, hasMore) => {
                    this.hasMore = hasMore
                    this.articles.push.apply(this.articles, articles)

                    if (!hasMore) {
                        $.detachInfiniteScroll($('.infinite-scroll'));
                    }

                }).always(() => {
                    this.loading = false
                })
            },

            onArticleClick (index, article) {
                var id = article.id
                this.$dispatch('loadArticle', index, id)
            }
        }
    }
</script>
