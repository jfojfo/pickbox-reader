<template>
    <div class="panel-overlay"></div>
    <div class="panel panel-left panel-reveal theme-dark" id='panel-left'>
        <div class="list-block">
            <ul>
                <li v-for="(cat, id) in cats" class="close-panel" @click="onCatClick(cat)">
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title my-active"><span
                                    :class="{ 'my-active': isCat(cat) }">{{ cat }}</span></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!--<div class="content-block-title"></div>-->
        <div class="list-block">
            <ul>
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
            </ul>
        </div>

    </div>
</template>

<style>
    .my-active {
        color: #0894ec;
    }
</style>

<script type="text/ecmascript-6">
    import Store from './Store.js'

    export default{
        data() {
            return {
                cats: {
                    '热门': 0,
                    '技术': 20,
                    '科技': 101000000,
                    '设计': 108000000,
                    '创投': 101040000,
                    '数码': 101050000,
                    '营销': 114000000
                },
                currentCat: '热门'
            }
        },
        computed: {
            currentCatId () {
                return this.cats[this.currentCat]
            },
            isDarkTheme: {
                get() {
                    return Store.isDarkTheme
                },
                set(v) {
                    Store.isDarkTheme = v
                }
            }
        },
        methods: {
            isCat (cat) {
                return this.currentCat === cat
            },
            onCatClick (cat) {
                this.currentCat = cat
                this.$dispatch('categoryChanged', this.currentCatId)
            }
        }
    }
</script>