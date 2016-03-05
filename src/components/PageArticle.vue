<template>
    <div class="page" id="{{ htmlId }}">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back" href="#" data-transition='slide-out'>
                <span class="icon icon-left"></span>
                返回
            </a>
            <a @click="onMoreClick" class="icon icon2 icon2-more pull-right"></a>
            <h1 class="title">正文</h1>
        </header>
        <div v-if="article" class="content full-article">
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



        <div class="popup-settings actions-modal" :class="[showSettings ? 'modal-in' : 'modal-out']">

            <div class="list-block">
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title">字体大小</div>

                        <div class="item-after buttons-row">
                            <label class="label-checkbox button" :class="{'active': fontSelect == -2}">
                                <input type="radio" name="my-radio" value="-2" v-model="fontSelect">
                                <span>较小</span>
                            </label>
                            <label class="label-checkbox button" :class="{'active': fontSelect == 0}">
                                <input type="radio" name="my-radio" value="0" v-model="fontSelect">
                                <span>中等</span>
                            </label>
                            <label class="label-checkbox button" :class="{'active': fontSelect == 2}">
                                <input type="radio" name="my-radio" value="2" v-model="fontSelect">
                                <span>较大</span>
                            </label>
                            <label class="label-checkbox button" :class="{'active': fontSelect == 4}">
                                <input type="radio" name="my-radio" value="4" v-model="fontSelect">
                                <span>最大</span>
                            </label>
                        </div>

                    </div>
                </li>
                <li class="item-content">
                    <div class="item-inner">
                        <div class="item-title">夜间模式</div>
                        <div class="item-after">
                            <label class="label-switch">
                                <input type="checkbox" v-model="isDarkTheme">
                                <div class="checkbox"></div>
                            </label>
                        </div>
                    </div>
                </li>
            </div>
        </div>
        <div @click="onClosePopup" class="modal-overlay" :class="{'modal-overlay-visible': showSettings}"></div>

    </div>
</template>

<script type="text/ecmascript-6">
    require('../css/ratchicons.less')

    import Utils from './../utils/Utils.js'
    import API from './../api/LeanCloud.js'
    import Helper from './helper/Helper.js'
    import ArticleContent from './Article.vue'
    import Store from './Store.js'


    export default {
        components: {
            ArticleContent
        },

        props: ['args'],

        data () {
            return {
                article: this.args.article,
                showSettings: false,
                fontBase: 0,
            }
        },

        computed: {
            index () {
                return this.args.index
            },
            id () {
                return this.args.id
            },
            htmlId () {
                return this.args.htmlId
            },
            fontSize () {
                return (this.fontBase + parseFloat(this.fontSelect)) + 'px'
            },
            isDarkTheme: {
                get() {
                    return Store.isDarkTheme
                },
                set(v) {
                    Store.isDarkTheme = v
                }
            },
            fontSelect: {
                get() {
                    return Store.fontSelect
                },
                set(v) {
                    Store.fontSelect = v
                }
            }
        },

        ready () {
            this.fontBase = parseFloat($(this.$el).css('font-size')) || 20
            console.log('fontBase:' + this.fontBase)
            $(this.$el).css('font-size', this.fontSize)

            this.$watch('fontSelect', (newValue, oldValue) => {
                $(this.$el).css('font-size', this.fontSize)
            })

            this.$watch('args.article', (newValue, oldValue) => {
                this.article = this.args.article
                if (!this.article) {
                    this.fetchArticle(this.id)
                }
            })

            this.$watch('args.id', (newValue, oldValue) => {
                this.fetchArticle(this.id)
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
            },

            onMoreClick () {
                this.showSettings = true
            },

            onClosePopup () {
                this.showSettings = false
            }
        }
    }

</script>

<style lang="less">
    @import "../css/theme-dark.less";

    .full-article {
        padding: 0 0.5rem;
        img {
             max-width: 100%;
        }
    }

    /*.full-article img {*/
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

    .popup-settings {
        background-color: white;
    }

    .popup-settings .content-block {
        /*bottom: 0;*/
    }

    .popup-settings .list-block {
        margin: 1rem 0;
    }
</style>
