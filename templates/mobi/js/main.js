/*!
 * @project : dataweekly-mobi
 * @version : 0.0.1
 * @author  : mrfangge
 * @update  : 2017-09-05 6:44:34 pm
 */!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="./js/",e(0)}([function(t,e,n){(function($){function t(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes.style?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes.style.value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function e(t){n();var e=t.slides[t.activeIndex].querySelectorAll(".ani");for(i=0;i<e.length;i++)e[i].style.visibility="visible",effect=e[i].attributes["swiper-animate-effect"]?e[i].attributes["swiper-animate-effect"].value:"",e[i].className=e[i].className+"  "+effect+" animated",style=e[i].attributes.style.value,duration=e[i].attributes["swiper-animate-duration"]?e[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=e[i].attributes["swiper-animate-delay"]?e[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),e[i].setAttribute("style",style)}function n(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}!function(){var n=0,i=document.getElementById("loading-line"),r=i.getContext("2d"),o,a,s=function(t){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.amozRequestAnimationFrame||function(t){setTimeout(t,16.666)},window.requestAnimationFrame(t)},l=function(){var t=document.documentElement.clientWidth;i.setAttribute("width",t+"px"),r.save(),r.beginPath,r.rect(0,0,n,185),r.clip(),r.beginPath(),r.lineWidth=2,r.lineCap="round",r.strokeStyle="#ffc63f",r.translate(0,100),r.scale(.55,.8);for(var e=[{x:0,y:0},{x:190,y:0},{x:202,y:-43},{x:216,y:66},{x:219,y:0},{x:233,y:0},{x:243,y:-80},{x:260,y:74},{x:273,y:0},{x:290,y:0},{x:295,y:-18},{x:303,y:25},{x:308,y:0},{x:316,y:35},{x:334,y:-92},{x:340,y:72},{x:358,y:-15},{x:365,y:0},{x:438,y:0},{x:454,y:-35},{x:470,y:56},{x:490,y:-82},{x:500,y:0},{x:505,y:-16},{x:518,y:72},{x:526,y:-40},{x:530,y:0},{x:720,y:0}],o=0;o<e.length;o++)r.lineTo(e[o].x,e[o].y);r.stroke(),r.restore(),r.fillStyle="#ffc63f",n<600?(n+=1,r.fillStyle="#ffc63f",s(l)):n=0};l();var c=setInterval(function(){l()},2e3),u=0,f=0,h=function(t){f=t.length;for(var e=0;e<f;e++)p(t[e])},p=function(t){var e=new Image;e.onload=function(){u++,d()},e.onerror=function(){u++,d()},e.src=t},d=function(){var n=parseInt(100*u/f);$("#loading-num").html(n+"%"),u==f&&($(".loading").hide(),clearInterval(c),o=new Swiper("#swiper",{initialSlide:2,direction:"vertical",mousewheelControl:!0,onInit:function(n){t(n),e(n)},onSlideChangeEnd:function(t){if(e(t),clearInterval(a),1==t.activeIndex){var n=echarts.init(document.getElementById("graph")),i={grid:{left:"16%",top:10,right:"5%",bottom:25}};n.setOption(Object.assign(i,graph_data)),a=setInterval(function(){var t=parseInt(100*Math.random()+200);n.setOption({force:{repulsion:t}})},30)}if(2==t.activeIndex){var r=echarts.init(document.getElementById("echart4")),o={tooltip:{trigger:"item",formatter:"{b} : {d}%"},visualMap:{show:!1,min:1e4,max:35e4,inRange:{colorLightness:[0,1]}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","50%"],data:pie1_data,label:{normal:{formatter:"{b}",textStyle:{color:"#ffc63f"}}},labelLine:{normal:{lineStyle:{color:"#ffc63f"}}},itemStyle:{normal:{color:"#ffc63f"}},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]};r.setOption(o)}},onProgress:function(t){for(var e=0;e<t.slides.length;e++){var n=t.slides[e],i=n.progress,r,o;r=i*t.height*.8,scale=1-Math.min(Math.abs(.2*i),1),boxShadowOpacity=0,n.style.boxShadow="0px 0px 10px rgba(0,0,0,"+boxShadowOpacity+")",e==t.myactive?(es=n.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="translate3d(0,"+r+"px,0) scale("+scale+")",es.zIndex=0):(es=n.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="",es.zIndex=1)}},onTransitionEnd:function(t,e){t.myactive=t.activeIndex},onSetTransition:function(t,e){for(var n=0;n<t.slides.length;n++)es=t.slides[n].style,es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=e+"ms"}}))};h(["img/back.png","img/bg1-logo-bg.png","img/bg1-logo.png","img/bg1.jpg","img/bg2-logo.png","img/bg3-btn1-hov.png","img/bg3-btn1.png","img/bg3-btn2-hov.png","img/bg3-btn2.png","img/bg3-btn3-hov.png","img/bg3-btn3.png","img/bg3-logo.png","img/bg3-up.png","img/bg3.jpg","img/bg4-icon1.png","img/bg4-line1.png","img/bg4-line2.png","img/bg4-line3.png","img/bg4-line4.png","img/bg4-line5.png","img/bg4-line6.png","img/bg4-logo.png","img/bg4.jpg","img/bg5-c.png","img/bg5-tab-hov.png","img/bg5-tab.png","img/bg5.jpg","img/bg6-logo.png","img/bg6.jpg","img/bg7.jpg","img/c-name.png","img/c1.png","img/c2.png","img/c3.png","img/down.png","img/line1.png","img/line2.png","img/loading-line.png","img/loading.jpg","img/logo.png","img/ques.png","img/share.png","img/slide.png","img/slide2.png","img/sub-logo.png","img/sub-logo2.png","img/sub-title.png","img/zan.png"]),$(".btn").on("touchstart",function(){var t=$(this).attr("open-page");$("."+t).addClass("sub-page-on"),($(this).hasClass("bg6-btn")||$(this).hasClass("bg7-btn"))&&o.disableTouchControl()}),$(".back").on("touchstart",function(){$(this).parent().removeClass("sub-page-on"),($(this).hasClass("bg6-back")||$(this).hasClass("bg7-back"))&&o.enableTouchControl()}),$(".bg3-btn").on("touchstart",function(){$(this).addClass("bg3-btn-on").siblings(".bg3-btn").removeClass("bg3-btn-on");var t=$(this).attr("data-open");$(".bg3-tab-con").addClass("hide").eq(t).removeClass("hide")}),$(".bg5-btn2").on("touchstart",function(){$(this).addClass("bg5-tab-on"),$(".bg5-btn1").removeClass("bg5-tab-on"),$(".tab-cont2").removeClass("hide"),$(".tab-cont1").addClass("hide");var t=echarts.init(document.getElementById("echart5")),e={grid:{left:"16%",top:10,right:"5%",bottom:25},visualMap:{show:!1,min:2e6,max:6e7,inRange:{colorLightness:[0,1]}},tooltip:{trigger:"item",formatter:"{b} : {d}%"},series:[{type:"pie",radius:"60%",center:["50%","50%"],data:pie2_data,label:{normal:{formatter:"{b}",textStyle:{color:"#92a6c4"}}},labelLine:{normal:{lineStyle:{color:"#489aee"}}},itemStyle:{normal:{color:"#1f4578"}}}]};t.setOption(e)}),$(".bg5-btn1").on("touchstart",function(){$(this).addClass("bg5-tab-on"),$(".bg5-btn2").removeClass("bg5-tab-on"),$(".tab-cont1").removeClass("hide"),$(".tab-cont2").addClass("hide")}),$(".share,.share-btn").on("touchstart",function(){window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(window.location.href)+"&t="+encodeURIComponent(document.title),"newWindow","width=800, height=400","center")})}()}).call(e,n(1))},function(t,e,n){var i;(function($){i=function(t,e,n){var i=function(){function t(t){return null==t?String(t):V[W.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return P.call(t,function(t){return null!=t})}function l(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"index.html").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in z?z[t]:z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||$[c(t)]?e:e+"px"}function h(t){var e,n;return k[t]||(e=A.createElement(t),A.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function p(t){return"children"in t?O.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||G(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),G(e[E])&&!G(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?T(t):T(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function b(t){var e;try{return t?"true"==t||"false"!=t&&("null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?T.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n in t.childNodes)x(t.childNodes[n],e)}var w,E,T,C,S,j,N=[],O=N.slice,P=N.filter,A=window.document,k={},z={},$={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},B=/^\s*<(\w+|!)[^>]*>/,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,_=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],q=A.createElement("table"),F=A.createElement("tr"),Z={tr:A.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:F,th:F,"*":A.createElement("div")},H=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},W=V.toString,X={},J=A.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},j=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,a;return I.test(t)&&(i=T(A.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(L,"<$1></$2>")),e===w&&(e=B.test(t)&&RegExp.$1),e in Z||(e="*"),a=Z[e],a.innerHTML=""+t,i=T.each(O.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=T(i),T.each(n,function(t,e){D.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=T.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&B.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return T(n).find(t);i=X.qsa(A,t)}else{if(e(t))return T(A).ready(t);if(X.isZ(t))return t;if(G(t))i=s(t);else if(r(t))i=[t],t=null;else if(B.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return T(n).find(t);i=X.qsa(A,t)}}return X.Z(i,t)},T=function(t,e){return X.init(t,e)},T.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=U.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=function(t,e){return t!==e&&t.contains(e)},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=G,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return N.indexOf.call(e,t,n)},T.camelCase=S,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return l(o)},T.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},T.grep=function(t,e){return P.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),T.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(O.apply(this,arguments))},ready:function(t){return H.test(A.readyState)&&A.body?t(T):A.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===w?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return N.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(P.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return T(j(this.concat(T(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):T(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return r(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:T(t)},find:function(t){var e,n=this;return e="object"==typeof t?T(t).filter(function(){var t=this;return N.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=T(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(j(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=T(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=T(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;T(this).empty().append(g(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===w?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)v(this,E,t[E]);else v(this,t,g(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&v(this,t)})},prop:function(t,e){return t=Y[t]||t,e===w?this[0]&&this[0][t]:this.each(function(n){this[t]=g(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(_,"-$1").toLowerCase(),e);return null!==n?b(n):w},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=g(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=T(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[S(e)]||r.getPropertyValue(e);if(G(e)){var o={};return T.each(G(e)?e:[e],function(t,e){o[e]=i.style[S(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?a+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&N.some.call(this,function(t){return this.test(y(t))},u(t))},addClass:function(t){return t?this.each(function(e){C=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||C.push(t)},this),C.length&&y(this,n+(n?" ":"")+C.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===w?y(this,""):(C=y(this),g(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(u(t)," ")}),void y(this,C.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=T(this),r=g(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=M.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,i.top+=parseFloat(T(e[0]).css("border-top-width"))||0,i.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!M.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(r){var o,a=this[0];return r===w?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,g(this,r,e,a[t]()))})}}),R.forEach(function(e,n){var i=n%2;T.fn[e]=function(){var e,r,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return T(t).remove();x(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),X.Z.prototype=T.fn,X.uniq=j,X.deserializeValue=b,T.zepto=X,T}();window.Zepto=i,void 0===window.$&&(window.$=i),function(t){function e(t){return t._3zpo0||(t._3zpo0=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,r,s,l,u,h,p){var d=e(n),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=u,r.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=l;var e=d.apply(n,t._4zpo1==f?[t]:[t].concat(t._4zpo1));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function l(t,i,r,s,l){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,l))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function u(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:l},t.proxy=function(n,i){if(d(n)){var r=function(){return n.apply(i,arguments)};return r._3zpo0=e(n),r}if(m(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},E=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(a=function(t){return l(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(u(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){l(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._4zpo1=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=u(m(e)?t.Event(e):e),r._4zpo1=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(i),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)!==!1&&n(e,i,"ajaxBeforeSend",[t,e])!==!1&&void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),l(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),l(e,i,r)}function l(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,l){o=t.type(l),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(l.name,l.value):"array"==o||!i&&"object"==o?d(e,l,i,n):e.add(n,l)})}var m,g,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",T="text/html",C=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,l=e.jsonpCallback,c=(t.isFunction(l)?l():l)||"jsonp"+ ++v,u=y.createElement("script"),f=window[c],h=function(e){t(u).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(u).on("load error",function(o,l){clearTimeout(r),t(u).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,l||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},u.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(u),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var l=n.dataType,p=/\?.+=\?/.test(n.url);if("jsonp"==l||p)return p||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var d,v=n.accepts[l],y={},b=function(t,e){y[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=n.xhr(),E=w.setRequestHeader;if(r&&r.promise(w),n.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",v||"*/*"),(v=n.mimeType||v)&&(v.indexOf(",")>-1&&(v=v.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(v)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&b("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)b(g,n.headers[g]);if(w.setRequestHeader=b,w.onreadystatechange=function(){if(4==w.readyState){w.onreadystatechange=c,clearTimeout(d);var e,i=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==x){l=l||u(n.mimeType||w.getResponseHeader("content-type")),e=w.responseText;try{"script"==l?(0,eval)(e):"xml"==l?e=w.responseXML:"json"==l&&(e=C.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",w,n,r):a(e,w,n,r)}else s(w.statusText||null,w.status?"error":"abort",w,n,r)}},o(w,n)===!1)return w.abort(),s(null,"abort",w,n,r),w;if(n.xhrFields)for(g in n.xhrFields)w[g]=n.xhrFields[g];var T=!("async"in n)||n.async;w.open(n.type,n.url,T,n.username,n.password);for(g in y)E.apply(w,y[g]);return n.timeout>0&&(d=setTimeout(function(){w.onreadystatechange=c,w.abort(),s(null,"timeout",w,n,r)},n.timeout)),w.send(n.data?n.data:null),w},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),l=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),l&&l.apply(o,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},d(n,t,e),n.join("&").replace(/%20/g,"+")}}(i),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0);
}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(i),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,a,s,l,c,u,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},g=window.document,v=g.createElement("div"),y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(m,function(t,n){return v.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",b[a=d+"transition-property"]=b[s=d+"transition-duration"]=b[c=d+"transition-delay"]=b[l=d+"transition-timing-function"]=b[u=d+"animation-name"]=b[f=d+"animation-duration"]=b[p=d+"animation-delay"]=b[h=d+"animation-timing-function"]="",t.fx={off:r===e&&v.style.transitionProperty===e,speeds:{_7zpo2:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._7zpo2)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(i,r,d,m,g){var v,x,w,E={},T="",C=this,S=t.fx.transitionEnd,j=!1;if(r===e&&(r=t.fx.speeds._7zpo2/1e3),g===e&&(g=0),t.fx.off&&(r=0),"string"==typeof i)E[u]=i,E[f]=r+"s",E[p]=g+"s",E[h]=d||"linear",S=t.fx.animationEnd;else{x=[];for(v in i)y.test(v)?T+=v+"("+i[v]+") ":(E[v]=i[v],x.push(n(v)));T&&(E[o]=T,x.push(o)),r>0&&"object"==typeof i&&(E[a]=x.join(", "),E[s]=r+"s",E[c]=g+"s",E[l]=d||"linear")}return w=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,w)}else t(this).unbind(S,w);j=!0,t(this).css(b),m&&m.call(this)},r>0&&(this.bind(S,w),setTimeout(function(){j||w.call(C)},1e3*r+25)),this.size()&&this.get(0).clientLeft,this.css(E),0>=r&&setTimeout(function(){C.each(function(){w.call(this)})},0),this},v=null}(i),n.exports=window.Zepto}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}).call(e,n(1))}]);