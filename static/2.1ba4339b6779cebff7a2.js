webpackJsonp([2,4],{24:function(t,e,n){var o,s;n(55),o=n(61),s=n(72),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},55:function(t,e){},61:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["args"],data:function(){return{loaded:!1}},computed:{index:function(){return this.args.index},title:function(){return this.args.title},url:function(){return this.args.url}},ready:function(){},attached:function(){},detached:function(){},destroyed:function(){},methods:{onContentLoaded:function(){this.loaded=!0}}}},72:function(t,e){t.exports='<div class=page id="{{ index | HtmlId \'custom\' }}"> <header class="bar bar-nav"> <a class="button button-link button-nav pull-left back" href=/ data-transition=slide-out> <span class="icon icon-left"></span> 返回 </a> <h1 class=title>{{ title }}</h1> </header> <div class=content> <iframe :src=url @load=onContentLoaded class=iframe-content security=restricted sandbox=""></iframe> </div> <div v-if=!loaded class="infinite-scroll-preloader my-loading"> <div class=preloader></div> </div> </div>'}});