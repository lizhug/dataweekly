/*!
 * @project : dataweekly-mobi
 * @version : 0.0.1
 * @author  : mrfangge
 * @update  : 2017-09-15 9:33:36 pm
 */!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="./js/",e(0)}([function(t,e,n){(function($){function t(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes.style?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes.style.value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function e(t){n();var e=t.slides[t.activeIndex].querySelectorAll(".ani");for(i=0;i<e.length;i++)e[i].style.visibility="visible",effect=e[i].attributes["swiper-animate-effect"]?e[i].attributes["swiper-animate-effect"].value:"",e[i].className=e[i].className+"  "+effect+" animated",style=e[i].attributes.style.value,duration=e[i].attributes["swiper-animate-duration"]?e[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=e[i].attributes["swiper-animate-delay"]?e[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),e[i].setAttribute("style",style)}function n(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}!function(){var n=function(){var n=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURIComponent(n[2]):null},i=[],o=[],a={series:[{type:"graph",layout:"force",animation:!0,animationEasing:"cubicln",animationDurationUpdate:function(t){return 100*t},data:[{symbolSize:130,itemStyle:{normal:{color:"#ffc63f"}},label:{normal:{show:!0,color:"#060a10",fontSize:20,fontWeight:600}}},{symbolSize:80,itemStyle:{normal:{color:"#06080d",borderColor:"#ffc63f",borderWidth:1}},label:{normal:{show:!0,color:"#f0cc01",fontSize:18}}},{symbolSize:80,itemStyle:{normal:{color:"#06080d",borderColor:"#ffc63f",borderWidth:1}},label:{normal:{show:!0,color:"#f0cc01",fontSize:18}}},{symbolSize:70,itemStyle:{normal:{color:"#06080d",borderColor:"#ffc63f",borderWidth:1}},label:{normal:{show:!0,color:"#f0cc01",fontSize:14}}},{symbolSize:80,itemStyle:{normal:{color:"#06080d",borderColor:"#ffc63f",borderWidth:1}},label:{normal:{show:!0,color:"#f0cc01",fontSize:14}}}],links:[],lineStyle:{normal:{color:"#e6c301",width:1}},force:{initLayout:"circular",edgeLength:[120,220],repulsion:300,gravity:.1}}]},r=0,s=document.getElementById("loading-line"),l=s.getContext("2d"),c,u,f=n("month"),p=n("week"),h=n("name"),m=0,d=0,g,y=function(t){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.amozRequestAnimationFrame||function(t){setTimeout(t,16.666)},window.requestAnimationFrame(t)},b=function(){var t=document.documentElement.clientWidth;s.setAttribute("width",t+"px"),l.save(),l.beginPath,l.rect(0,0,r,185),l.clip(),l.beginPath(),l.lineWidth=2,l.lineCap="round",l.strokeStyle="#ffc63f",l.translate(0,100),l.scale(.55,.8);for(var e=[{x:0,y:0},{x:190,y:0},{x:202,y:-43},{x:216,y:66},{x:219,y:0},{x:233,y:0},{x:243,y:-80},{x:260,y:74},{x:273,y:0},{x:290,y:0},{x:295,y:-18},{x:303,y:25},{x:308,y:0},{x:316,y:35},{x:334,y:-92},{x:340,y:72},{x:358,y:-15},{x:365,y:0},{x:438,y:0},{x:454,y:-35},{x:470,y:56},{x:490,y:-82},{x:500,y:0},{x:505,y:-16},{x:518,y:72},{x:526,y:-40},{x:530,y:0},{x:720,y:0}],n=0;n<e.length;n++)l.lineTo(e[n].x,e[n].y);l.stroke(),l.restore(),l.fillStyle="#ffc63f",r<600?(r+=1,l.fillStyle="#ffc63f",y(b)):r=0},v=setInterval(function(){b()},2e3),w=function(t){d=t.length;for(var e=0;e<d;e++)x(t[e])},x=function(t){var e=new Image;e.onload=function(){m++,k()},e.onerror=function(){m++,k()},e.src=t},k=function(){var t=parseInt(100*m/d);$("#loading-num").html(t+"%"),m==d&&($(".loading").hide(),clearInterval(v))},z=function(t,e){function n(t,e,o){if(0===o)return void(i[i.length]=t);for(var a=0,r=e.length-o;a<=r;a++){var s=t.slice();s.push(e[a]),n(s,e.slice(a+1),o-1)}}var i=[];return n([],t,e),i},C=function(){var t=[];$.ajax({url:"http://dataweekly.z1025.com/index.php?c=index&f=get_data_jsonp&month="+f+"&week="+p+"&name="+h,dataType:"jsonp",type:"POST",success:function(e){g=JSON.parse(e.data.data),$(".actor-img").attr("src",g.image),$(".actor-name").text(g.name),$(".bg1-title").html(f+" "+p+" Report<br><span>"+g.period+"</span>"),$(".bg7-sub-page h2").html(g.qa),$(".bg7-sub-page .qa").html(g.qa_rule),$(".bg7-sub-page img").attr("src",g.qa_image),$(".bg8 .sub-btn").text(g.qa_btn),$("#art-num").text(g.article),$("#article_txt").html(g.article_txt),i[0]={value:g.platform,name:"platform"},i[1]={value:g.media,name:"media"},i[2]={value:g.social,name:"social"},i[3]={value:g.uc,name:"uc"},$("#eng-num").text(g.engagement),$("#engagement_txt").html(g.engagement_txt),o[0]={value:g.euc,name:"euc"},o[1]={value:g.emedia,name:"emedia"},o[2]={value:g.eother,name:"eother"},g.hotComment.length<=5&&$(".bg6-btn").remove();var n=[];for(var r in g.hotComment)n.push('<div class="bg6-col ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.8s"><div class="zan"><i></i>'+g.hotComment[r].like+"</div><h4>"+g.hotComment[r].name+"</h4><p>"+g.hotComment[r].content+"</p></div>");$(".bg6-col-wrap").html(n.join("")),S(g);for(var s in g.hotkey)a.series[0].data[s].name=g.hotkey[s][0],t.push(g.hotkey[s][0]);var l=z(t,2);for(var c in l)a.series[0].links.push({source:l[c][0],target:l[c][1]})}}),$.ajax({url:"http://dataweekly.z1025.com/index.php?c=index&f=get_data_list_jsonp",dataType:"jsonp",type:"POST",success:function(t){var e=[],n;for(var i in t){n=JSON.parse(t[i].data),e.push('<section class="bg2-col"><h2>'+n.period+" "+n.month+' 2017</h2><div class="bg2-c2">');for(var o=0;o<(n.hotkey.length>5?5:n.hotkey.length);o++)3==n.hotkey.length&&o>1?e.push(' <div class="circle5">'+n.hotkey[o][0]+"</div>"):e.push(' <div class="circle'+(1*o+1)+'">'+n.hotkey[o][0]+"</div>");e.push("</div></section>")}$(".history-wrap").append(e.join(""))}})},S=function(n){c=new Swiper("#swiper",{direction:"vertical",mousewheelControl:!0,onInit:function(n){t(n),e(n)},onSlideChangeEnd:function(t){if(e(t),clearInterval(u),1==t.activeIndex){var o=echarts.init(document.getElementById("graph")),r={grid:{left:"16%",top:10,right:"5%",bottom:25}};o.setOption(Object.assign(r,a)),u=setInterval(function(){var t=parseInt(100*Math.random()+200);o.setOption({force:{repulsion:t}})},500)}if(2==t.activeIndex){var s=echarts.init(document.getElementById("echart4")),l={tooltip:{trigger:"item",formatter:"{b} : {d}%"},visualMap:{show:!1,min:n.social,max:n.media,inRange:{colorAlpha:[.1,.68]}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","50%"],data:i,label:{normal:{formatter:"{b}",textStyle:{color:"#ffc63f"}}},labelLine:{normal:{lineStyle:{color:"#ffc63f"}}},itemStyle:{normal:{color:"#ffc63f"}},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]};s.setOption(l)}},onProgress:function(t){for(var e=0;e<t.slides.length;e++){var n=t.slides[e],i=n.progress,o,a;o=i*t.height*.8,scale=1-Math.min(Math.abs(.2*i),1),boxShadowOpacity=0,n.style.boxShadow="0px 0px 10px rgba(0,0,0,"+boxShadowOpacity+")",e==t.myactive?(es=n.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="translate3d(0,"+o+"px,0) scale("+scale+")",es.zIndex=0):(es=n.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="",es.zIndex=1)}},onTransitionEnd:function(t,e){t.myactive=t.activeIndex},onSetTransition:function(t,e){for(var n=0;n<t.slides.length;n++)es=t.slides[n].style,es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=e+"ms"}})},E=function(){$(".btn").on("touchstart",function(){var t=$(this).attr("open-page");$("."+t).addClass("sub-page-on"),($(this).hasClass("bg6-btn")||$(this).hasClass("bg7-btn")||$(this).hasClass("bg2-btn"))&&c.disableTouchControl()}),$(".back").on("touchstart",function(){$(this).parent().removeClass("sub-page-on"),($(this).hasClass("bg6-back")||$(this).hasClass("bg7-back")||$(this).hasClass("bg2-back"))&&c.enableTouchControl()}),$(".bg3-btn").on("touchstart",function(){$(this).addClass("bg3-btn-on").siblings(".bg3-btn").removeClass("bg3-btn-on");var t=$(this).attr("data-open");$(".bg3-tab-con").addClass("hide").eq(t).removeClass("hide")}),$(".bg5-btn2").on("touchstart",function(){$(this).addClass("bg5-tab-on"),$(".bg5-btn1").removeClass("bg5-tab-on"),$(".tab-cont2").removeClass("hide"),$(".tab-cont1").addClass("hide");var t=echarts.init(document.getElementById("echart5")),e={grid:{left:"16%",top:10,right:"5%",bottom:25},visualMap:{show:!1,min:g.euc,max:g.eother,inRange:{colorAlpha:[.1,.68]}},tooltip:{trigger:"item",formatter:"{b} : {d}%"},series:[{type:"pie",radius:"60%",center:["50%","50%"],data:o,label:{normal:{formatter:"{b}",textStyle:{color:"#92a6c4"}}},labelLine:{normal:{lineStyle:{color:"#489aee"}}},itemStyle:{normal:{color:"#1f4578"}}}]};t.setOption(e)}),$(".bg5-btn1").on("touchstart",function(){$(this).addClass("bg5-tab-on"),$(".bg5-btn2").removeClass("bg5-tab-on"),$(".tab-cont1").removeClass("hide"),$(".tab-cont2").addClass("hide")}),$(".share,.share-btn").on("touchstart",function(){window.location="http://www.facebook.com/sharer.php?u="+encodeURIComponent(window.location.href)+"&t="+encodeURIComponent(document.title),"center"})},T=function(){b(),C(),w(["http://dataweekly.z1025.com/templates/mobi/img/back.png","http://dataweekly.z1025.com/templates/mobi/img/bg1-logo-bg.png","http://dataweekly.z1025.com/templates/mobi/img/bg1-logo.png","http://dataweekly.z1025.com/templates/mobi/img/bg1.jpg","http://dataweekly.z1025.com/templates/mobi/img/bg2-logo.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-btn1-hov.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-btn1.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-btn2-hov.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-btn2.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-btn3-hov.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-btn3.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-logo.png","http://dataweekly.z1025.com/templates/mobi/img/bg3-up.png","http://dataweekly.z1025.com/templates/mobi/img/bg3.jpg","http://dataweekly.z1025.com/templates/mobi/img/bg4-icon1.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-line1.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-line2.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-line3.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-line4.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-line5.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-line6.png","http://dataweekly.z1025.com/templates/mobi/img/bg4-logo.png","http://dataweekly.z1025.com/templates/mobi/img/bg4.jpg","http://dataweekly.z1025.com/templates/mobi/img/bg5-c.png","http://dataweekly.z1025.com/templates/mobi/img/bg5-tab-hov.png","http://dataweekly.z1025.com/templates/mobi/img/bg5-tab.png","http://dataweekly.z1025.com/templates/mobi/img/bg5.jpg","http://dataweekly.z1025.com/templates/mobi/img/bg6-logo.png","http://dataweekly.z1025.com/templates/mobi/img/bg6.jpg","http://dataweekly.z1025.com/templates/mobi/img/bg7.jpg","http://dataweekly.z1025.com/templates/mobi/img/c-name.png","http://dataweekly.z1025.com/templates/mobi/img/c1.png","http://dataweekly.z1025.com/templates/mobi/img/c2.png","http://dataweekly.z1025.com/templates/mobi/img/c3.png","http://dataweekly.z1025.com/templates/mobi/img/down.png","http://dataweekly.z1025.com/templates/mobi/img/line1.png","http://dataweekly.z1025.com/templates/mobi/img/line2.png","http://dataweekly.z1025.com/templates/mobi/img/loading-line.png","http://dataweekly.z1025.com/templates/mobi/img/loading.jpg","http://dataweekly.z1025.com/templates/mobi/img/logo.png","http://dataweekly.z1025.com/templates/mobi/img/ques.png","http://dataweekly.z1025.com/templates/mobi/img/share.png","http://dataweekly.z1025.com/templates/mobi/img/slide.png","http://dataweekly.z1025.com/templates/mobi/img/slide2.png","http://dataweekly.z1025.com/templates/mobi/img/sub-logo.png","http://dataweekly.z1025.com/templates/mobi/img/sub-logo2.png","http://dataweekly.z1025.com/templates/mobi/img/sub-title.png","http://dataweekly.z1025.com/templates/mobi/img/zan.png"]),E()};return{init:T}}();n.init()}()}).call(e,n(1))},function(t,e,n){var i;(function($){i=function(t,e,n){var i=function(){function t(t){return null==t?String(t):H[V.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(e){return"object"==t(e)}function a(t){return o(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function r(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function l(t){return t.length>0?z.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"index.html").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||$[c(t)]?e:e+"px"}function p(t){var e,n;return P[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]}function h(t){return"children"in t?j.call(t.children):z.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e,n){for(k in e)n&&(a(e[k])||G(e[k]))?(a(e[k])&&!a(t[k])&&(t[k]={}),G(e[k])&&!G(t[k])&&(t[k]=[]),m(t[k],e[k],n)):e[k]!==x&&(t[k]=e[k])}function d(t,e){return null==e?z(t):z(t).filter(e)}function g(t,n,i,o){return e(n)?n.call(t,i,o):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,i=n&&n.baseVal!==x;return e===x?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function v(t){var e;try{return t?"true"==t||"false"!=t&&("null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?z.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var x,k,z,C,S,E,T=[],j=T.slice,O=T.filter,N=window.document,P={},A={},$={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,B=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,M=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],D=["after","prepend","before","append"],R=N.createElement("table"),F=N.createElement("tr"),Z={tr:N.createElement("tbody"),tbody:R,thead:R,tfoot:R,td:F,th:F,"*":N.createElement("div")},U=/complete|loaded|interactive/,W=/^[\w-]*$/,H={},V=H.toString,J={},X=N.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,o=t.parentNode,a=!o;return a&&(o=X).appendChild(t),i=~J.qsa(o,e).indexOf(t),a&&X.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){var i,o,r;return I.test(t)&&(i=z(N.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(B,"<$1></$2>")),e===x&&(e=_.test(t)&&RegExp.$1),e in Z||(e="*"),r=Z[e],r.innerHTML=""+t,i=z.each(j.call(r.childNodes),function(){r.removeChild(this)})),a(n)&&(o=z(i),z.each(n,function(t,e){q.indexOf(t)>-1?o[t](e):o.attr(t,e)})),i},J.Z=function(t,e){return t=t||[],t.__proto__=z.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){var i;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&_.test(t))i=J.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return z(n).find(t);i=J.qsa(N,t)}else{if(e(t))return z(N).ready(t);if(J.isZ(t))return t;if(G(t))i=s(t);else if(o(t))i=[t],t=null;else if(_.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return z(n).find(t);i=J.qsa(N,t)}}return J.Z(i,t)},z=function(t,e){return J.init(t,e)},z.extend=function(t){var e,n=j.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},J.qsa=function(t,e){var n,o="#"==e[0],a=!o&&"."==e[0],r=o||a?e.slice(1):e,s=W.test(r);return i(t)&&s&&o?(n=t.getElementById(r))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:j.call(s&&!o?a?t.getElementsByClassName(r):t.getElementsByTagName(e):t.querySelectorAll(e))},z.contains=function(t,e){return t!==e&&t.contains(e)},z.type=t,z.isFunction=e,z.isWindow=n,z.isArray=G,z.isPlainObject=a,z.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},z.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},z.camelCase=S,z.trim=function(t){return null==t?"":String.prototype.trim.call(t)},z.uuid=0,z.support={},z.expr={},z.map=function(t,e){var n,i,o,a=[];if(r(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&a.push(n);else for(o in t)n=e(t[o],o),null!=n&&a.push(n);return l(a)},z.each=function(t,e){var n,i;if(r(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},z.grep=function(t,e){return O.call(t,e)},window.JSON&&(z.parseJSON=JSON.parse),z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),z.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return z(z.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return z(j.apply(this,arguments))},ready:function(t){return U.test(N.readyState)&&N.body?t(z):N.addEventListener("DOMContentLoaded",function(){t(z)},!1),this},get:function(t){return t===x?j.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):z(O.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return z(E(this.concat(z(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):r(t)&&e(t.item)?j.call(t):z(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return z(n)},has:function(t){return this.filter(function(){return o(t)?z.contains(this,t):z(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:z(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:z(t)},find:function(t){var e,n=this;return e="object"==typeof t?z(t).filter(function(){var t=this;return T.some.call(n,function(e){return z.contains(e,t)})}):1==this.length?z(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)})},closest:function(t,e){var n=this[0],o=!1;for("object"==typeof t&&(o=z(t));n&&!(o?o.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return z(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=z.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return d(e,t)},parent:function(t){return d(E(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return O.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return z.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=z(t).get(0),o=i.parentNode||this.length>1;return this.each(function(e){z(this).wrapAll(n?t.call(this,e):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){z(this[0]).before(t=z(t));for(var e;(e=t.children()).length;)t=e.first();z(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=z(this),o=i.contents(),a=n?t.call(this,e):t;o.length?o.wrapAll(a):i.append(a)})},unwrap:function(){return this.parent().each(function(){z(this).replaceWith(z(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=z(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return z(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return z(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;z(this).empty().append(g(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===x?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(o(t))for(k in t)y(this,k,t[k]);else y(this,t,g(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return t=Y[t]||t,e===x?this[0]&&this[0][t]:this.each(function(n){this[t]=g(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(M,"-$1").toLowerCase(),e);return null!==n?v(n):x},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?z(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=g(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=z(this),i=g(this,t,e,n.offset()),o=n.offsetParent().offset(),a={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(a.position="relative"),n.css(a)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],o=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[S(e)]||o.getPropertyValue(e);if(G(e)){var a={};return z.each(G(e)?e:[e],function(t,e){a[e]=i.style[S(e)]||o.getPropertyValue(e)}),a}}var r="";if("string"==t(e))n||0===n?r=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(k in e)e[k]||0===e[k]?r+=c(k)+":"+f(k,e[k])+";":this.each(function(){this.style.removeProperty(c(k))});return this.each(function(){this.style.cssText+=";"+r})},index:function(t){return t?this.indexOf(z(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&T.some.call(this,function(t){return this.test(b(t))},u(t))},addClass:function(t){return t?this.each(function(e){C=[];var n=b(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){z(this).hasClass(t)||C.push(t)},this),C.length&&b(this,n+(n?" ":"")+C.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===x?b(this,""):(C=b(this),g(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(u(t)," ")}),void b(this,C.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=z(this),o=g(this,t,n,b(this));o.split(/\s+/g).forEach(function(t){(e===x?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(z(t).css("margin-top"))||0,n.left-=parseFloat(z(t).css("margin-left"))||0,i.top+=parseFloat(z(e[0]).css("border-top-width"))||0,i.left+=parseFloat(z(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!L.test(t.nodeName)&&"static"==z(t).css("position");)t=t.offsetParent;return t})}},z.fn.detach=z.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});z.fn[t]=function(o){var a,r=this[0];return o===x?n(r)?r["inner"+e]:i(r)?r.documentElement["scroll"+e]:(a=this.offset())&&a[t]:this.each(function(e){r=z(this),r.css(t,g(this,o,e,r[t]()))})}}),D.forEach(function(e,n){var i=n%2;z.fn[e]=function(){var e,o,a=z.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),r=this.length>1;return a.length<1?this:this.each(function(t,e){o=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,a.forEach(function(t){if(r)t=t.cloneNode(!0);else if(!o)return z(t).remove();w(o.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},z.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return z(t)[e](this),this}}),J.Z.prototype=z.fn,J.uniq=E,J.deserializeValue=v,z.zepto=J,z}();window.Zepto=i,void 0===window.$&&(window.$=i),function(t){function e(t){return t._3zpo0||(t._3zpo0=p++)}function n(t,n,a,r){if(n=i(n),n.ns)var s=o(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||a&&e(t.fn)!==e(a)||r&&t.sel!=r)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(t,e){return t.del&&!b&&t.e in v||!!e}function r(t){return w[t]||b&&v[t]||t}function s(n,o,s,l,u,p,h){var m=e(n),d=g[m]||(g[m]=[]);o.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var o=i(e);o.fn=s,o.sel=u,o.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=p;var m=p||s;o.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=l;var e=m.apply(n,t._4zpo1==f?[t]:[t].concat(t._4zpo1));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},o.i=d.length,d.push(o),"addEventListener"in n&&n.addEventListener(r(o.e),o.proxy,a(o,h))})}function l(t,i,o,s,l){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,o,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(r(e.e),e.proxy,a(e,l))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(C,function(t,i){var o=n[t];e[t]=function(){return this[i]=x,o&&o.apply(n,arguments)},e[i]=k}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function u(t){var e,n={originalEvent:t};for(e in t)z.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,p=1,h=Array.prototype.slice,m=t.isFunction,d=function(t){return"string"==typeof t},g={},y={},b="onfocusin"in window,v={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",t.event={add:s,remove:l},t.proxy=function(n,i){if(m(n)){var o=function(){return n.apply(i,arguments)};return o._3zpo0=e(n),o}if(d(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},k=function(){return!1},z=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,o,a){var r,c,p=this;return e&&!d(e)?(t.each(e,function(t,e){p.on(t,n,i,e,a)}),p):(d(n)||m(o)||o===!1||(o=i,i=n,n=f),(m(i)||i===!1)&&(o=i,i=f),o===!1&&(o=k),p.each(function(f,p){a&&(r=function(t){return l(p,t.type,o),o.apply(this,arguments)}),n&&(c=function(e){var i,a=t(e.target).closest(n,p).get(0);return a&&a!==p?(i=t.extend(u(e),{currentTarget:a,liveFired:p}),(r||o).apply(a,[i].concat(h.call(arguments,1)))):void 0}),s(p,e,o,i,n,c||r)}))},t.fn.off=function(e,n,i){var o=this;return e&&!d(e)?(t.each(e,function(t,e){o.off(t,n,e)}),o):(d(n)||m(i)||i===!1||(i=n,n=f),i===!1&&(i=k),o.each(function(){l(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=d(e)||t.isPlainObject(e)?t.Event(e):c(e),e._4zpo1=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var o,a;return this.each(function(r,s){o=u(d(e)?t.Event(e):e),o._4zpo1=i,o.target=s,t.each(n(s,e.type||e),function(t,e){return a=e.proxy(o),!o.isImmediatePropagationStopped()&&void 0})}),a},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){d(t)||(e=t,t=e.type);var n=document.createEvent(y[t]||"Events"),i=!0;if(e)for(var o in e)"bubbles"==o?i=!!e[o]:n[o]=e[o];return n.initEvent(t,i,!0),c(n)}}(i),function(t){function e(e,n,i){var o=t.Event(n);return t(e).trigger(o,i),!o.isDefaultPrevented()}function n(t,n,i,o){return t.global?e(n||b,i,o):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function o(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function a(t,e){var i=e.context;return e.beforeSend.call(i,t,e)!==!1&&n(e,i,"ajaxBeforeSend",[t,e])!==!1&&void n(e,i,"ajaxSend",[t,e])}function r(t,e,i,o){var a=i.context,r="success";i.success.call(a,t,r,e),o&&o.resolveWith(a,[t,r,e]),n(i,a,"ajaxSuccess",[e,i,t]),l(r,e,i)}function s(t,e,i,o,a){var r=o.context;o.error.call(r,i,e,t),a&&a.rejectWith(r,[i,e,t]),
n(o,r,"ajaxError",[i,o,t||e]),l(e,i,o)}function l(t,e,i){var a=i.context;i.complete.call(a,e,t),n(i,a,"ajaxComplete",[e,i]),o(i)}function c(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==z?"html":t==k?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function h(e,n,i,o){return t.isFunction(n)&&(o=i,i=n,n=void 0),t.isFunction(i)||(o=i,i=void 0),{url:e,data:n,success:i,dataType:o}}function m(e,n,i,o){var a,r=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,l){a=t.type(l),o&&(n=i?o:o+"["+(s||"object"==a||"array"==a?n:"")+"]"),!o&&r?e.add(l.name,l.value):"array"==a||!i&&"object"==a?m(e,l,i,n):e.add(n,l)})}var d,g,y=0,b=window.document,v=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,k="application/json",z="text/html",C=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,o,l=e.jsonpCallback,c=(t.isFunction(l)?l():l)||"jsonp"+ ++y,u=b.createElement("script"),f=window[c],p=function(e){t(u).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(u).on("load error",function(a,l){clearTimeout(o),t(u).off().remove(),"error"!=a.type&&i?r(i[0],h,e,n):s(null,l||"error",h,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),a(h,e)===!1?(p("abort"),h):(window[c]=function(){i=arguments},u.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),b.head.appendChild(u),e.timeout>0&&(o=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:k,xml:"application/xml, text/xml",html:z,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(d in t.ajaxSettings)void 0===n[d]&&(n[d]=t.ajaxSettings[d]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),p(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var l=n.dataType,h=/\?.+=\?/.test(n.url);if("jsonp"==l||h)return h||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var m,y=n.accepts[l],b={},v=function(t,e){b[t.toLowerCase()]=[t,e]},w=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),k=x.setRequestHeader;if(o&&o.promise(x),n.crossDomain||v("X-Requested-With","XMLHttpRequest"),v("Accept",y||"*/*"),(y=n.mimeType||y)&&(y.indexOf(",")>-1&&(y=y.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(y)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&v("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)v(g,n.headers[g]);if(x.setRequestHeader=v,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(m);var e,i=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==w){l=l||u(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==l?(0,eval)(e):"xml"==l?e=x.responseXML:"json"==l&&(e=C.test(e)?null:t.parseJSON(e))}catch(a){i=a}i?s(i,"parsererror",x,n,o):r(e,x,n,o)}else s(x.statusText||null,x.status?"error":"abort",x,n,o)}},a(x,n)===!1)return x.abort(),s(null,"abort",x,n,o),x;if(n.xhrFields)for(g in n.xhrFields)x[g]=n.xhrFields[g];var z=!("async"in n)||n.async;x.open(n.type,n.url,z,n.username,n.password);for(g in b)k.apply(x,b[g]);return n.timeout>0&&(m=setTimeout(function(){x.onreadystatechange=c,x.abort(),s(null,"timeout",x,n,o)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var o,a=this,r=e.split(/\s/),s=h(e,n,i),l=s.success;return r.length>1&&(s.url=r[0],o=r[1]),s.success=function(e){a.html(o?t("<div>").html(e.replace(v,"")).find(o):e),l&&l.apply(a,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},m(n,t,e),n.join("&").replace(/%20/g,"+")}}(i),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(i),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return o?o+t:t.toLowerCase()}var o,a,r,s,l,c,u,f,p,h,m="",d={Webkit:"webkit",Moz:"",O:"o"},g=window.document,y=g.createElement("div"),b=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,v={};t.each(d,function(t,n){return y.style[t+"TransitionProperty"]!==e?(m="-"+t.toLowerCase()+"-",o=n,!1):void 0}),a=m+"transform",v[r=m+"transition-property"]=v[s=m+"transition-duration"]=v[c=m+"transition-delay"]=v[l=m+"transition-timing-function"]=v[u=m+"animation-name"]=v[f=m+"animation-duration"]=v[h=m+"animation-delay"]=v[p=m+"animation-timing-function"]="",t.fx={off:o===e&&y.style.transitionProperty===e,speeds:{_7zpo2:400,fast:200,slow:600},cssPrefix:m,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,o,a,r){return t.isFunction(i)&&(a=i,o=e,i=e),t.isFunction(o)&&(a=o,o=e),t.isPlainObject(i)&&(o=i.easing,a=i.complete,r=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._7zpo2)/1e3),r&&(r=parseFloat(r)/1e3),this.anim(n,i,o,a,r)},t.fn.anim=function(i,o,m,d,g){var y,w,x,k={},z="",C=this,S=t.fx.transitionEnd,E=!1;if(o===e&&(o=t.fx.speeds._7zpo2/1e3),g===e&&(g=0),t.fx.off&&(o=0),"string"==typeof i)k[u]=i,k[f]=o+"s",k[h]=g+"s",k[p]=m||"linear",S=t.fx.animationEnd;else{w=[];for(y in i)b.test(y)?z+=y+"("+i[y]+") ":(k[y]=i[y],w.push(n(y)));z&&(k[a]=z,w.push(a)),o>0&&"object"==typeof i&&(k[r]=w.join(", "),k[s]=o+"s",k[c]=g+"s",k[l]=m||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,x)}else t(this).unbind(S,x);E=!0,t(this).css(v),d&&d.call(this)},o>0&&(this.bind(S,x),setTimeout(function(){E||x.call(C)},1e3*o+25)),this.size()&&this.get(0).clientLeft,this.css(k),0>=o&&setTimeout(function(){C.each(function(){x.call(this)})},0),this},y=null}(i),n.exports=window.Zepto}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}).call(e,n(1))}]);