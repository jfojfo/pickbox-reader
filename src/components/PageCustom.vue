<template>
    <div class="page" id="{{ htmlId }}">
        <header class="bar bar-nav">
            <a class="button button-link button-nav pull-left back" href="#" data-transition='slide-out'>
                <span class="icon icon-left"></span>
                返回
            </a>
            <h1 class="title">{{ title }}</h1>
        </header>

        <div class="content">
            <iframe :src="url" @load="onContentLoaded" class="iframe-content" security="restricted" sandbox=""></iframe>
        </div>
        <div v-if="!loaded" class="infinite-scroll-preloader my-loading">
            <div class="preloader"></div>
        </div>
    </div>
</template>

<style>
    .iframe-content {
        width: 100%;
        height: 100%;
        border: none;
    }
</style>

<script type="text/ecmascript-6">

    export default{
        props: ['args'],
        data(){
            return {
                loaded: false
            }
        },
        computed: {
            index () {
                return this.args.index
            },
            title () {
                return this.args.title
            },
            htmlId () {
                return this.args.htmlId
            },
            url () {
                return this.args.url
            }
        },
        ready () {
            console.log('CustomPage!')
        },
        attached () {
            console.log('CustomPage attached')
        },
        detached () {
            console.log('CustomPage detached')
        },
        destroyed () {
            console.log('CustomPage destroyed')
        },
        methods: {
            onContentLoaded () {
                console.log('iframe loaded')
                this.loaded = true
            }
        }
    }
</script>