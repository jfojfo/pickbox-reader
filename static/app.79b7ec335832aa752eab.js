webpackJsonp([3,4],[function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=n(95),r=e(i);new t({el:"body",components:{App:r["default"]}})}).call(e,n(3))},,,,,function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(22),a=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},,function(t,e){t.exports={}},,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),a=i(r),o=n(6),s=i(o),l=n(86),c=i(l),u="http://api.tuicool.com",f=u+"/api/articles/hot.json",d=u+"/api/articles/%d.json",p={Authorization:"Basic MC4wLjAuMDp0dWljb29s","User-Agent":"iOS/iphone6/2.15.0","Content-Type":"application/json; charset=UTF-8"},h=function(){function t(){(0,a["default"])(this,t)}return(0,s["default"])(t,null,[{key:"ajaxFail",value:function(t,e,n,i){}},{key:"getArticleList",value:function(t,e,n,i){var r=this,a=$.Deferred(),o={cid:t,size:e,lang:1};return void 0!==n&&(o.pn=n),void 0!==i&&(o.last_id=i),c["default"].request({url:f,method:"GET",headers:p,params:o,"return":"simple"}).done(function(t,e,n){a.resolve(t.articles,t.has_next)}).fail(function(t,e,n){r.ajaxFail(a,t,e,n)}),a.promise()}},{key:"getArticle",value:function(t){var e=this,n=$.Deferred();return c["default"].request({url:d.replace("%d",t),method:"GET",headers:p,params:{is_pad:1,need_image_meta:1},"return":"simple"}).done(function(t,e,i){n.resolve(t.article)}).fail(function(t,i,r){e.ajaxFail(n,t,i,r)}),n.promise()}},{key:"fetchImgData",value:function(t){var e=this,n=$.Deferred();return c["default"].request({url:t,method:"GET","return":["headers","data","status"]}).done(function(t,e,i){n.resolve(t)}).fail(function(t,i,r){e.ajaxFail(n,t,i,r)}),n.promise()}}]),t}();e["default"]=h},function(t,e,n){(function(t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=window.localStorage,i=n.getItem("isDarkTheme"),r=n.getItem("fontSelect"),a={isDarkTheme:null!=i&&"0"!=i,fontSelect:r},o=new t({data:a});o.$watch("isDarkTheme",function(t,e){n.setItem("isDarkTheme",t?"1":"0")}),o.$watch("fontSelect",function(t,e){n.setItem("fontSelect",t)}),e["default"]=a}).call(e,n(3))},,function(t,e,n){t.exports={"default":n(39),__esModule:!0}},,,function(t,e,n){"use strict";var i=n(26),r=n(13),a=n(27),o=n(16),s=n(15),l=n(8),c=n(51),u=n(18),f=n(1).getProto,d=n(4)("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",m="values",g=function(){return this};t.exports=function(t,e,n,x,_,y,b){c(n,e,x);var k,M,T=function(t){if(!p&&t in A)return A[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",C=_==m,$=!1,A=t.prototype,D=A[d]||A[h]||_&&A[_],j=D||T(_);if(D){var I=f(j.call(new t));u(I,w,!0),!i&&s(A,h)&&o(I,d,g),C&&D.name!==m&&($=!0,j=function(){return D.call(this)})}if(i&&!b||!p&&!$&&A[d]||o(A,d,j),l[e]=j,l[w]=g,_)if(k={values:C?j:T(m),keys:y?j:T(v),entries:C?T("entries"):j},b)for(M in k)M in A||a(A,M,k[M]);else r(r.P+r.F*(p||$),e,k);return k}},,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),a=i(r),o=n(6),s=i(o),l=function(){function t(){(0,a["default"])(this,t)}return(0,s["default"])(t,null,[{key:"genHtmlId",value:function(t,e){return(e?e+"_":"")+t}}]),t}();e["default"]=l},,,function(t,e,n){t.exports={"default":n(37),__esModule:!0}},,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(22),a=i(r);e["default"]=function(t,e,n){return e in t?(0,a["default"])(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(65),n(63),t.exports=n(59)},,function(t,e,n){var i=n(1);t.exports=function(t,e,n){return i.setDesc(t,e,n)}},,,,function(t,e){t.exports=function(){}},function(t,e,n){var i=n(11),r=n(4)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[r])?n:a?i(e):"Object"==(o=i(e))&&"function"==typeof e.callee?"Arguments":o}},,,,,,,function(t,e,n){"use strict";var i=n(1),r=n(17),a=n(18),o={};n(16)(o,n(4)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i.create(o,{next:r(1,n)}),a(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},,,function(t,e,n){var i=n(56),r=n(12);t.exports=function(t){return function(e,n){var a,o,s=String(r(e)),l=i(n),c=s.length;return 0>l||l>=c?t?"":void 0:(a=s.charCodeAt(l),55296>a||a>56319||l+1===c||(o=s.charCodeAt(l+1))<56320||o>57343?t?s.charAt(l):a:t?s.slice(l,l+2):(a-55296<<10)+(o-56320)+65536)}}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},,function(t,e,n){var i=n(44),r=n(4)("iterator"),a=n(8);t.exports=n(2).getIteratorMethod=function(t){return void 0!=t?t[r]||t["@@iterator"]||a[i(t)]:void 0}},function(t,e,n){var i=n(23),r=n(58);t.exports=n(2).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},function(t,e,n){"use strict";var i=n(43),r=n(52),a=n(8),o=n(9);t.exports=n(25)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},,,function(t,e,n){"use strict";var i=n(55)(!0);n(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},,function(t,e,n){n(60);var i=n(8);i.NodeList=i.HTMLCollection=i.Array},,,function(t,e){},,,function(t,e){},,function(t,e){},function(t,e){},,function(t,e,n){(function(t){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(30),a=i(r),o=n(99),s=i(o),l=n(20),c=i(l);t.filter("HtmlId",function(t,e){return a["default"].genHtmlId(t,e)});var u;e["default"]={components:{PageHome:s["default"]},data:function(){return{pages:{"page-home":""}}},computed:{isDarkTheme:function(){return c["default"].isDarkTheme}},methods:{setComponent:function(t,e){this.$set("pages."+t,e)},hasComponent:function(t){return this.pages.hasOwnProperty(t)},removeComponent:function(e){t["delete"](this.pages,e)}},events:{loadArticlePage:function(t,e){var i=this;n.e(1,function(r){(function(r){var o=n(31),s="PageArticle_"+t;r.component(s,o);var l=a["default"].genHtmlId(t,"article");i.setComponent(s,{index:t,id:e,htmlId:l}),i.$nextTick(function(){$.router.load("#"+l)})}).call(this,n(3))})},loadCustomPage:function(t,e,i){var r=this;n.e(2,function(o){(function(o){var s=n(32),l="PageCustom_"+i;o.component(l,s),u&&r.removeComponent(u),u=l;var c=a["default"].genHtmlId(i,"custom");r.setComponent(l,{title:t,url:e,index:i,htmlId:c}),r.$nextTick(function(){$.router.load("#"+c)})}).call(this,n(3))})}}}}).call(e,n(3))},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(33),a=i(r),o=n(19),s=i(o);n(68);var l=0,c=function(){var t=0,e={};return function(n){return void 0===e[n]&&(e[n]=t++),e[n]}}();e["default"]={props:["category"],data:function(){return{articles:[],hasMore:!0,loadingMore:!1,refreshing:!1}},ready:function(){var t=this;this.initLoading(),0===this.articles.length&&this.fetchData(),this.$watch("category",function(e,n){t.reset(),t.fetchData()})},methods:{initLoading:function(){var t=this;$(document).on("refresh",function(e){t.refresh()}),$(document).on("infinite",function(){t.fetchData()})},reset:function(){this.articles=[],this.hasMore=!0,this.loadingMore=!1,this.refreshing=!1},fetchData:function(){var t=this;if(!this.loadingMore&&!this.refreshing&&this.hasMore){this.loadingMore=!0;var e=30,n=this.category,i=parseInt((this.articles.length+e-1)/e),r=this.articles.length>0?this.articles[this.articles.length-1].id:void 0,a=++l;s["default"].getArticleList(n,e,i,r).done(function(e,n){a===l&&(e=e||[],t.hasMore=n,t.articles.push.apply(t.articles,e),t.$nextTick(function(){$.refreshScroller()}),n||$.detachInfiniteScroll($(".infinite-scroll")))}).always(function(){a===l&&(t.loadingMore=!1)})}},refresh:function(){var t=this;if(!this.loadingMore&&!this.refreshing){this.refreshing=!0;var e=30,n=this.category,i=void 0,r=void 0,o=this.articles.length>0?this.articles[0]:void 0,c=++l;s["default"].getArticleList(n,e,i,r).done(function(e,n){if(c===l&&(t.hasMore=n,e=e||[],t.articles=e,t.$nextTick(function(){$.refreshScroller()}),n||$.detachInfiniteScroll($(".infinite-scroll")),o)){var i=o.id,r=0,s=!0,u=!1,f=void 0;try{for(var d,p=(0,a["default"])(e);!(s=(d=p.next()).done);s=!0){var h=d.value;if(h.id===i)break;r++}}catch(v){u=!0,f=v}finally{try{!s&&p["return"]&&p["return"]()}finally{if(u)throw f}}r>0&&$.toast("更新"+r+"条",1e3,"toast-bottom")}}).always(function(){c===l&&($.pullToRefreshDone(".pull-to-refresh-content"),t.refreshing=!1)})}},onArticleClick:function(t,e){var n=e.id;this.$dispatch("loadArticlePage",c(n),n)}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(20),a=i(r);e["default"]={data:function(){return{cats:{"热门":0,"技术":20,"科技":101e6,"设计":108e6,"创投":10104e4,"数码":10105e4,"营销":114e6},currentCat:"热门"}},computed:{currentCatId:function(){return this.cats[this.currentCat]},isDarkTheme:{get:function(){return a["default"].isDarkTheme},set:function(t){a["default"].isDarkTheme=t}}},methods:{isCat:function(t){return this.currentCat===t},onCatClick:function(t){this.currentCat=t,this.$dispatch("categoryChanged",this.currentCatId)}}}},,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(97),a=i(r),o=n(98),s=i(o);e["default"]={components:{ArticleList:a["default"],HomeLeftPanel:s["default"]},props:["args"],data:function(){return{currentView:"article-list",category:0}},computed:{isArticleList:function(){return"article-list"===this.currentView}},events:{categoryChanged:function(t){this.category=t}},ready:function(){$.init(),this.currentView="article-list"},methods:{onTitleClick:function(){$(".content").scrollTop(0,1e3)}}}},,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(21),o=i(a),s=n(5),l=i(s),c=n(6),u=i(c),f=n(36),d=i(f),p="ofk0Kl7wqrTUkHKKn5uPo6GS-gzGzoHsz",h="BvDz0V2KpbJlT5zPSankYQ9h",v="x-avoscloud-application-id",m="x-avoscloud-application-key",g="x-avoscloud-application-production",x="https://leancloud.cn/1.1/functions/proxy",_=(r={},(0,d["default"])(r,v,p),(0,d["default"])(r,m,h),(0,d["default"])(r,g,"1"),r),y=function(){function t(){(0,l["default"])(this,t)}return(0,u["default"])(t,null,[{key:"request",value:function(t){var e=$.Deferred();return $.ajax({url:x,type:"POST",headers:_,contentType:"application/json; charset=UTF-8",data:(0,o["default"])(t)}).done(function(t,n,i){e.resolve(t.result,n,i)}).fail(e.reject),e.promise()}}]),t}();e["default"]=y},,function(t,e){t.exports='<div class=page-group :class="{\'theme-dark\': isDarkTheme}"> <component v-for="(page, args) in $data.pages" :is=page :args=args></component> </div>'},,function(t,e){t.exports='<div class="content infinite-scroll infinite-scroll-bottom pull-to-refresh-content" data-distance=100 data-ptr-distance=55> <div class=pull-to-refresh-layer> <div class=preloader></div> <div class=pull-to-refresh-arrow></div> </div> <div class="list-block article-list"> <ul class=list-container> <div v-for="article in articles" @click="onArticleClick($index, article)" class="dis-box box-horizontal align-center article-item"> <div class="dis-box box-vertical flex"> <div class=article-item-title>{{ article.title }}</div> <div class="article-item-info dis-box box-horizontal"> <span class=flex>{{ article.feed_title }}</span> <span>{{ article.rectime }}</span> </div> </div> <div v-if=article.img class="dis-box align-center article-item-img"> <img :src=article.img width=66> </div> </div> </ul> </div> <div v-show=loadingMore class="infinite-scroll-preloader offset-loading"> <div class=preloader></div> </div> </div>'},function(t,e){t.exports='<div class=panel-overlay></div> <div class="panel panel-left panel-reveal theme-dark" id=panel-left> <div class=list-block> <ul> <li v-for="(cat, id) in cats" class=close-panel @click=onCatClick(cat)> <div class=item-content> <div class=item-inner> <div class="item-title my-active"><span :class="{ \'my-active\': isCat(cat) }">{{ cat }}</span></div> </div> </div> </li> </ul> </div> <div class=list-block> <ul> <li class=item-content> <div class=item-inner> <div class=item-title>夜间模式</div> <div class=item-after> <label class=label-switch> <input type=checkbox v-model=isDarkTheme> <div class=checkbox></div> </label> </div> </div> </li> </ul> </div> </div>'},,,function(t,e){t.exports='<div> <div class=page id=home> <header class="bar bar-nav"> <a class="icon icon-menu pull-left open-panel" data-panel=#panel-left></a> <h1 @click=onTitleClick class=title>文章</h1> </header> <nav class="bar bar-tab"> <a class=tab-item :class="{ \'active\': isArticleList }" href=#> <span class="icon icon-home"></span> <span class=tab-label>文章</span> </a> <a class=tab-item href=#> <span class="icon icon-me"></span> <span class=tab-label>我</span> </a> <a class=tab-item href=#> <span class="icon icon-star"></span> <span class=tab-label>收藏</span> </a> <a class=tab-item href=#> <span class="icon icon-settings"></span> <span class=tab-label>设置</span> </a> </nav> <template v-if=isArticleList> <component :is=currentView :category=category></component> </template> </div> <home-left-panel v-ref:left-panel></home-left-panel> </div>'},function(t,e,n){var i,r;n(71),i=n(76),r=n(88),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},,function(t,e,n){var i,r;n(73),i=n(78),r=n(90),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var i,r;n(74),i=n(79),r=n(91),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var i,r;i=n(82),r=n(94),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}]);