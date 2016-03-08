webpackJsonp([0,5],{8:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t){return"string"==typeof t?'"'+t+'"':"function"==typeof t?"function "+t.name:""+t}Object.defineProperty(e,"__esModule",{value:!0});var a=n(20),l=i(a),r=n(25),u=i(r),c=n(24),s=i(c),f=n(21),d=i(f),p=n(5),h=i(p),v=n(3),y=i(v),_=n(4),m=i(_),b=Array.prototype.slice,T=function(){function t(e){(0,y["default"])(this,t),this.options=e}return(0,m["default"])(t,[{key:"checkExist",value:function(t){if(void 0===t){if(this.options.hasOwnProperty("defValue"))return this.options.defValue;throw new E(t)}return t}},{key:"checkNull",value:function(t){if(null===t&&this.options.nullable!==!0)throw new P(t);return t}},{key:"checkType",value:function(e){if(null===e&&this.options.nullable===!0)return e;if(this.options.type===t.TYPE_ARRAY){if(e instanceof Array)return e}else if(this.options.type===t.TYPE_OBJECT){if("object"===("undefined"==typeof e?"undefined":(0,h["default"])(e))&&!(e instanceof Array))return e}else if(("undefined"==typeof e?"undefined":(0,h["default"])(e))===this.options.type)return e;throw new S(e,this.options.type)}},{key:"checkRule",value:function(t){if(this.options.hasOwnProperty("value")&&t!==this.options.value)throw new x(t,this.options.value);if(!this.options.hasOwnProperty("rule"))return t;var e=this.options.rule;if("function"==typeof e)throw new Y(t,e);if(e instanceof g){if(e.fn(t))return t;throw new Y(t,e)}throw new w('rule config error "'+e+'"')}},{key:"check",value:function(e){e=this.checkExist(e),this.checkNull(e),this.checkType(e),this.checkRule(e);var n=this.options,i=n.type;if(i===t.TYPE_OBJECT){if(null!==e)for(var o in n.constraint)try{e[o]=new t(n.constraint[o]).check(e[o])}catch(a){throw new A(n,o,a)}}else if(i===t.TYPE_ARRAY)for(var l in e)try{e[l]=new t(n.constraint).check(e[l])}catch(a){throw new A(n,l,a)}return e}}]),t}(),g=function(){function t(e,n){(0,y["default"])(this,t),"function"==typeof e?(this.name="",this.f=e,this.args=b.call(arguments,1)):(this.name=e,this.f=n,this.args=b.call(arguments,2))}return(0,m["default"])(t,[{key:"fn",value:function(t){var e=[t].concat(this.args);return this.f.apply(this,e)}},{key:"toString",value:function(){var t=this.args.map(function(t){return o(t)}),e=t.join(",");return 0===e.length?"("+this.name+")":"("+this.name+" "+e+")"}}]),t}();T.not=function(t){return new g("not",function(e){return!t.fn(e)},t)},T.and=function(t,e){return new g("and",function(n){return t.fn(n)&&e.fn(n)},t,e)},T.or=function(t,e){return new g("or",function(n){return t.fn(n)||e.fn(n)},t,e)},T.empty=new g("empty",function(t){if(null===t||void 0===t)throw new O(this,t);var e="undefined"==typeof t?"undefined":(0,h["default"])(t);if("string"===e)return 0===t.length;if("object"===e){if(t instanceof Array)return 0===t.length;if(t instanceof Object)return 0===(0,d["default"])(t).length}return!1}),T.notEmpty=T.not(T.empty),T.eq=function(t){return new g("eq",function(t,e){if(("undefined"==typeof t?"undefined":(0,h["default"])(t))!==("undefined"==typeof e?"undefined":(0,h["default"])(e)))throw new O(this,t,e);return t===e},t)},T.gt=function(t){return new g("gt",function(t,e){if(("undefined"==typeof t?"undefined":(0,h["default"])(t))!==("undefined"==typeof e?"undefined":(0,h["default"])(e)))throw new O(this,t,e);return t>e},t)},T.lt=function(t){return new g("lt",function(t,e){if(("undefined"==typeof t?"undefined":(0,h["default"])(t))!==("undefined"==typeof e?"undefined":(0,h["default"])(e)))throw new O(this,t,e);return e>t},t)},T.TYPE_BOOLEAN="boolean",T.TYPE_STRING="string",T.TYPE_NUMBER="number",T.TYPE_OBJECT="object",T.TYPE_ARRAY="array";var w=function(){function t(e){(0,y["default"])(this,t),this.desc=e||""}return(0,m["default"])(t,[{key:"toString",value:function(){return""+this.desc}}]),t}(),k=function(t){function e(t,n){(0,y["default"])(this,e);var i=(0,u["default"])(this,(0,l["default"])(e).call(this,n));return i.value=t,i}return(0,s["default"])(e,t),(0,m["default"])(e,[{key:"toString",value:function(){return o(this.value)+", "+this.desc}}]),e}(w),E=function(t){function e(t){return(0,y["default"])(this,e),(0,u["default"])(this,(0,l["default"])(e).call(this,t,'undefined not allowed, try setting "defValue"'))}return(0,s["default"])(e,t),e}(k),P=function(t){function e(t){return(0,y["default"])(this,e),(0,u["default"])(this,(0,l["default"])(e).call(this,t,'null not allowed, try setting "nullable: true"'))}return(0,s["default"])(e,t),e}(k),S=function(t){function e(t,n){(0,y["default"])(this,e);var i=(0,u["default"])(this,(0,l["default"])(e).call(this,t,'type error should be of type "'+n+'"'));return i.type=n,i}return(0,s["default"])(e,t),e}(k),x=function(t){function e(t,n){(0,y["default"])(this,e);var i=(0,u["default"])(this,(0,l["default"])(e).call(this,t,"value violate:"+o(n)));return i.correctValue=n,i}return(0,s["default"])(e,t),e}(k),Y=function(t){function e(t,n){(0,y["default"])(this,e);var i=n.toString();"function"==typeof n&&(i="function "+n.name);var o=(0,u["default"])(this,(0,l["default"])(e).call(this,t,"rule violate:"+i));return o.rule=n,o}return(0,s["default"])(e,t),e}(k),O=function(t){function e(t){(0,y["default"])(this,e);var n=b.call(arguments,1).map(function(t){return o(t)}),i=n.join(","),a=(0,u["default"])(this,(0,l["default"])(e).call(this,"rule "+t+" bad arguments:("+i+")"));return a.rule=t,a}return(0,s["default"])(e,t),e}(w),A=function(t){function e(t,n,i){(0,y["default"])(this,e);var o=t.type,a=t.constraint,r="";i instanceof e?(o===T.TYPE_ARRAY||o===T.TYPE_OBJECT&&a[n].type!==T.TYPE_ARRAY)&&(r="."+r):r=":"+r,o===T.TYPE_ARRAY&&(n="["+n+"]"),r=n+r;var c=(0,u["default"])(this,(0,l["default"])(e).call(this,r+i.toString()));return c.options=t,c.exception=i,c}return(0,s["default"])(e,t),e}(w);e["default"]=T},14:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),a=i(o);e["default"]={category:{"热门":0,"技术":20,"科技":101e6,"设计":108e6,"创投":10104e4,"数码":10105e4,"营销":114e6},defCategory:"热门",api_article_list:{type:a["default"].TYPE_OBJECT,constraint:{success:{type:a["default"].TYPE_BOOLEAN,value:!0},has_next:{type:a["default"].TYPE_BOOLEAN},articles:{type:a["default"].TYPE_ARRAY,constraint:{type:a["default"].TYPE_OBJECT,constraint:{id:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},title:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},feed_title:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},img:{type:a["default"].TYPE_STRING,defValue:null,nullable:!0},rectime:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty}}}}}},api_article:{type:a["default"].TYPE_OBJECT,constraint:{success:{type:a["default"].TYPE_BOOLEAN,value:!0},article:{type:a["default"].TYPE_OBJECT,constraint:{id:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},title:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},content:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},feed_title:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},time:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty},url:{type:a["default"].TYPE_STRING,rule:a["default"].notEmpty}}}}}}},15:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),a=i(o),l=n(4),r=i(l),u=n(39),c=i(u),s=n(14),f=i(s),d=n(8),p=i(d),h="http://api.tuicool.com",v=h+"/api/articles/hot.json",y=h+"/api/articles/%d.json",_={Authorization:"Basic MC4wLjAuMDp0dWljb29s","User-Agent":"iOS/iphone6/2.15.0","Content-Type":"application/json; charset=UTF-8"},m=function(){function t(){(0,a["default"])(this,t)}return(0,r["default"])(t,null,[{key:"ajaxFail",value:function(t,e,n,i){}},{key:"getArticleList",value:function(t,e,n,i){var o=this,a=$.Deferred(),l={cid:t,size:e,lang:1};return void 0!==n&&(l.pn=n),void 0!==i&&(l.last_id=i),c["default"].request({url:v,method:"GET",headers:_,params:l,"return":"simple"}).done(function(t,e,n){try{t=new p["default"](f["default"].api_article_list).check(t)}catch(i){}a.resolve(t.articles,t.has_next)}).fail(function(t,e,n){o.ajaxFail(a,t,e,n)}),a.promise()}},{key:"getArticle",value:function(t){var e=this,n=$.Deferred();return c["default"].request({url:y.replace("%d",t),method:"GET",headers:_,params:{is_pad:1,need_image_meta:1},"return":"simple"}).done(function(t,e,i){try{t=new p["default"](f["default"].api_article).check(t)}catch(o){}n.resolve(t.article)}).fail(function(t,i,o){e.ajaxFail(n,t,i,o)}),n.promise()}},{key:"fetchImgData",value:function(t){var e=this,n=$.Deferred();return c["default"].request({url:t,method:"GET","return":["headers","data","status"]}).done(function(t,e,i){n.resolve(t)}).fail(function(t,i,o){e.ajaxFail(n,t,i,o)}),n.promise()}}]),t}();e["default"]=m},16:function(t,e,n){var i,o;n(88),i=n(98),o=n(109),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},18:function(t,e,n){t.exports={"default":n(26),__esModule:!0}},22:function(t,e,n){t.exports={"default":n(27),__esModule:!0}},23:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(19),a=i(o);e["default"]=function(t,e,n){return e in t?(0,a["default"])(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},24:function(t,e,n){"use strict";var i=n(18)["default"],o=n(22)["default"];e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=i(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o?o(t,e):t.__proto__=e)},e.__esModule=!0},25:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(5),a=i(o);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,a["default"])(e))&&"function"!=typeof e?t:e}},26:function(t,e,n){var i=n(1);t.exports=function(t,e){return i.create(t,e)}},27:function(t,e,n){n(38),t.exports=n(2).Object.setPrototypeOf},36:function(t,e,n){var i=n(1).getDesc,o=n(34),a=n(10),l=function(t,e){if(a(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(29)(Function.call,i(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return l(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:l}},38:function(t,e,n){var i=n(7);i(i.S,"Object",{setPrototypeOf:n(36).set})},39:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(17),l=i(a),r=n(3),u=i(r),c=n(4),s=i(c),f=n(23),d=i(f),p="ofk0Kl7wqrTUkHKKn5uPo6GS-gzGzoHsz",h="BvDz0V2KpbJlT5zPSankYQ9h",v="x-avoscloud-application-id",y="x-avoscloud-application-key",_="x-avoscloud-application-production",m="https://leancloud.cn/1.1/functions/proxy",b=(o={},(0,d["default"])(o,v,p),(0,d["default"])(o,y,h),(0,d["default"])(o,_,"1"),o),T=function(){function t(){(0,u["default"])(this,t)}return(0,s["default"])(t,null,[{key:"request",value:function(t){var e=$.Deferred();return $.ajax({url:m,type:"POST",headers:b,contentType:"application/json; charset=UTF-8",data:(0,l["default"])(t)}).done(function(t,n,i){e.resolve(t.result,n,i)}).fail(e.reject),e.promise()}}]),t}();e["default"]=T},87:function(t,e){},88:function(t,e){},90:function(t,e){},95:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),a=i(o);e["default"]={props:["content"],attached:function(){$("img",this.$el).one("error",function(t){var e=t.currentTarget,n=e.src;n&&a["default"].fetchImgData(n).done(function(t){var n=t.headers,i=t.data.data,o=n["content-type"]||"image/jpeg",a=new Uint8Array(i),l=new Blob([a],{type:o}),r=window.URL||window.webkitURL,u=r.createObjectURL(l);e.src=u})})}}},98:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(104),a=(i(o),n(15)),l=i(a),r=n(49),u=(i(r),n(113)),c=i(u),s=n(40),f=i(s);n(87),e["default"]={components:{ArticleContent:c["default"]},props:["args"],data:function(){return{article:this.args.article,showSettings:!1,hideCtlPanel:!1,fontBase:0}},computed:{index:function(){return this.args.index},id:function(){return this.args.id},htmlId:function(){return this.args.htmlId},fontSize:function(){return this.fontBase+parseFloat(this.fontSelect)+"px"},isDarkTheme:{get:function(){return f["default"].isDarkTheme},set:function(t){f["default"].isDarkTheme=t}},fontSelect:{get:function(){return f["default"].fontSelect},set:function(t){f["default"].fontSelect=t}}},ready:function(){var t=this;this.fontBase=parseFloat($(this.$el).css("font-size"))||20,$(this.$el).css("font-size",this.fontSize),this.$watch("fontSelect",function(e,n){$(t.$el).css("font-size",t.fontSize)}),this.$watch("args.article",function(e,n){t.article=t.args.article,t.article||t.fetchArticle(t.id)}),this.$watch("args.id",function(e,n){t.fetchArticle(t.id)}),this.article||this.fetchArticle(this.id)},methods:{fetchArticle:function(t){var e=this;l["default"].getArticle(t).done(function(t){e.article=t})},onOriginLinkClick:function(){var t=this.article.url;t?this.$dispatch("loadCustomPage","原文",t,this.index,this.id):$.toast("原文链接丢失")},onBackClick:function(){$.router.back()},onMoreClick:function(){this.showSettings=!0},onClosePopup:function(){this.showSettings=!1},onScroll:function(t){var e=t.currentTarget.scrollTop;void 0!==this.lastScrollTop&&(this.hideCtlPanel=e-this.lastScrollTop>0),this.lastScrollTop=e}}}},104:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),a=i(o),l=n(4),r=i(l),u=function(){function t(){(0,a["default"])(this,t)}return(0,r["default"])(t,null,[{key:"getLocation",value:function(t){var e=t.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)?(\?[^#]*|)(#.*|)$/),n={};if(e[6]){var i=e[6].slice(1).split("&");i.forEach(function(t){var e=t.split("=");n[e[0]]=e[1]})}return e&&{protocol:e[1],host:e[2],hostname:e[3],port:e[4],pathname:e[5],search:e[6],hash:e[7],query:n}}}]),t}();e["default"]=u},106:function(t,e){t.exports="<div class=article-content>{{{ content }}}</div>"},109:function(t,e){t.exports='<div class="page page-current" id="{{ htmlId }}"> <header v-if=false class="bar bar-nav"> <a class="button button-link button-nav pull-left back" href=# data-transition=slide-out> <span class="icon icon-left"></span> 返回 </a> <a @click=onMoreClick class="icon myicon myicon-more pull-right"></a> <h1 class=title>正文</h1> </header> <div v-if=article @scroll=onScroll($event) class="content full-article"> <h2>{{ article.title }}</h2> <div class=article-info> <span class=article-info-from>{{ article.feed_title }}</span> <span class=article-info-time>{{ article.time }}</span> </div> <article-content :content=article.content></article-content> <span @click=onOriginLinkClick class="button button-big button-round article-origin">查看原文</span> </div> <div v-else class="infinite-scroll-preloader my-loading"> <div class=preloader></div> </div> <div v-if=!hideCtlPanel class="bar bar-footer ctl-group pull-right" transition=ctl-group-fade> <i @click=onBackClick class="myicon myicon-back"></i> <i @click=onMoreClick class="myicon myicon-more"></i> </div> <div class="popup-settings actions-modal" :class="[showSettings ? \'modal-in\' : \'modal-out\']"> <div class=list-block> <li class=item-content> <div class=item-inner> <div class=item-title>字体大小</div> <div class="item-after buttons-row"> <label class="label-checkbox button" :class="{\'active\': fontSelect == -2}"> <input type=radio name=my-radio value=-2 v-model=fontSelect> <span>较小</span> </label> <label class="label-checkbox button" :class="{\'active\': fontSelect == 0}"> <input type=radio name=my-radio value=0 v-model=fontSelect> <span>中等</span> </label> <label class="label-checkbox button" :class="{\'active\': fontSelect == 2}"> <input type=radio name=my-radio value=2 v-model=fontSelect> <span>较大</span> </label> <label class="label-checkbox button" :class="{\'active\': fontSelect == 4}"> <input type=radio name=my-radio value=4 v-model=fontSelect> <span>最大</span> </label> </div> </div> </li> <li class=item-content> <div class=item-inner> <div class=item-title>夜间模式</div> <div class=item-after> <label class=label-switch> <input type=checkbox v-model=isDarkTheme> <div class=checkbox></div> </label> </div> </div> </li> </div> </div> <div @click=onClosePopup class=modal-overlay :class="{\'modal-overlay-visible\': showSettings}"></div> </div>'},113:function(t,e,n){var i,o;n(90),i=n(95),o=n(106),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}});