<template>
    <div class="page" :class="{'dark-themm': isDarkTheme}" id="app">
        <header class="bar bar-nav">
            <a class="icon icon-menu pull-left open-panel" data-panel="#panel-left"></a>
            <h1 @click="onTitleClick" class="title">文章</h1>
        </header>
        <nav class="bar bar-tab">
            <a class="tab-item" :class="{ 'active': isHome }" href="#">
                <span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
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
        <template v-if="isHome">
            <component :is="currentView" :category="category"></component>
        </template>
        <!--<home :category="category"></home>-->
    </div>

    <home-left-panel v-ref:left-panel></home-left-panel>

</template>

<script>
    import Home from './Home'
    import HomeLeftPanel from './HomeLeftPanel'

    export default {
        components: {
            Home, HomeLeftPanel
        },

        data () {
            return {
                currentView: 'home',
                category: 0,
                isDarkTheme: false
            }
        },

        computed: {
            isHome () {
                return this.currentView === 'home'
            }
        },

        events: {
            categoryChanged (cat) {
                this.category = cat
            },
            'dark-theme': function (isDarkTheme) {
                console.log('event dark-theme')
                this.isDarkTheme = isDarkTheme
            }
        },

        ready () {
            console.log('Im ready!')
            $.init()

            this.currentView = 'home'
        },

        methods: {
            onTitleClick () {
                console.log('title click')
                $('.content').scrollTop(0, 2000)
            }
        }

    }
</script>

<style>
    .my-loading {
        margin-top: 3rem;
    }
</style>
