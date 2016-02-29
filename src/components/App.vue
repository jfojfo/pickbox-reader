<template>
    <div class="page" id="app">
        <header class="bar bar-nav">
            <a class="icon icon-menu pull-left open-panel" data-panel="#panel-left"></a>
            <h1 class="title">文章</h1>
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
        <div class="content">
            <template v-if="isHome">
                <component :is="currentView" :category="category"></component>
            </template>
        </div>
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
                currentView: '',
                category: 0
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
            }
        },

        ready () {
            console.log('Im ready!')
            $.init()

            this.currentView = 'home'
        }

    }
</script>

<style>
    .my-loading {
        margin-top: 3rem;
    }
</style>
