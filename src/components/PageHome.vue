<template>
<div>
    <div class="page page-current" id="home">
        <header class="bar bar-nav">
            <a class="icon icon-menu pull-right open-panel" data-panel="#panel-left"></a>
            <h1 @click="onTitleClick" class="title">文章</h1>
        </header>
        <nav v-if="false" class="bar bar-tab">
            <a class="tab-item" :class="{ 'active': isArticleList }" href="#">
                <span class="icon icon-home"></span>
                <span class="tab-label">文章</span>
            </a>
            <a class="tab-item" href="#">
                <span class="icon icon-me"></span>
                <span class="tab-label">我</span>
            </a>
            <a class="tab-item" href="#">
                <span class="icon icon-star"></span>
                <span class="tab-label">收藏</span>
            </a>
            <a class="tab-item" href="#">
                <span class="icon icon-settings"></span>
                <span class="tab-label">设置</span>
            </a>
        </nav>
        <template v-if="isArticleList">
            <component :is="currentView" :category="category"></component>
        </template>
        <!--<article-list :category="category"></article-list>-->
    </div>

    <home-left-panel v-ref:left-panel></home-left-panel>
</div>
</template>

<script>
    import ArticleList from './ArticleList.vue'
    import HomeLeftPanel from './HomeLeftPanel'

    export default {
        components: {
            ArticleList, HomeLeftPanel
        },

        props: ['args'],

        data () {
            return {
                currentView: 'article-list',
                category: 0
            }
        },

        computed: {
            isArticleList () {
                return this.currentView === 'article-list'
            }
        },

        events: {
            categoryChanged (cat) {
                this.category = cat
            }
        },

        ready () {
            this.currentView = 'article-list'
        },

        methods: {
            onTitleClick () {
                console.log('title click')
                $('.content').scrollTop(0, 1000)
            }
        }

    }
</script>
