/*!
 * @project : dataweekly-mobi
 * @version : 0.0.1
 * @author  : mrfangge
 * @update  : 2017-09-18 9:34:28 am
 */
n(o,r,"ajaxError",[i,o,t||e]),l(e,i,o)}function l(t,e,i){var a=i.context;i.complete.call(a,e,t),n(i,a,"ajaxComplete",[e,i]),o(i)}function c(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==z?"html":t==k?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function h(e,n,i,o){return t.isFunction(n)&&(o=i,i=n,n=void 0),t.isFunction(i)||(o=i,i=void 0),{url:e,data:n,success:i,dataType:o}}function m(e,n,i,o){var a,r=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,l){a=t.type(l),o&&(n=i?o:o+"["+(s||"object"==a||"array"==a?n:"")+"]"),!o&&r?e.add(l.name,l.value):"array"==a||!i&&"object"==a?m(e,l,i,n):e.add(n,l)})}var d,g,y=0,b=window.document,v=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,k="application/json",z="text/html",C=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,o,l=e.jsonpCallback,c=(t.isFunction(l)?l():l)||"jsonp"+ ++y,u=b.createElement("script"),f=window[c],p=function(e){t(u).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(u).on("load error",function(a,l){clearTimeout(o),t(u).off().remove(),"error"!=a.type&&i?r(i[0],h,e,n):s(null,l||"error",h,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),a(h,e)===!1?(p("abort"),h):(window[c]=function(){i=arguments},u.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),b.head.appendChild(u),e.timeout>0&&(o=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:k,xml:"application/xml, text/xml",html:z,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(d in t.ajaxSettings)void 0===n[d]&&(n[d]=t.ajaxSettings[d]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),p(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var l=n.dataType,h=/\?.+=\?/.test(n.url);if("jsonp"==l||h)return h||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var m,y=n.accepts[l],b={},v=function(t,e){b[t.toLowerCase()]=[t,e]},w=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),k=x.setRequestHeader;if(o&&o.promise(x),n.crossDomain||v("X-Requested-With","XMLHttpRequest"),v("Accept",y||"*/*"),(y=n.mimeType||y)&&(y.indexOf(",")>-1&&(y=y.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(y)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&v("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)v(g,n.headers[g]);if(x.setRequestHeader=v,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=c,clearTimeout(m);var e,i=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==w){l=l||u(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==l?(0,eval)(e):"xml"==l?e=x.responseXML:"json"==l&&(e=C.test(e)?null:t.parseJSON(e))}catch(a){i=a}i?s(i,"parsererror",x,n,o):r(e,x,n,o)}else s(x.statusText||null,x.status?"error":"abort",x,n,o)}},a(x,n)===!1)return x.abort(),s(null,"abort",x,n,o),x;if(n.xhrFields)for(g in n.xhrFields)x[g]=n.xhrFields[g];var z=!("async"in n)||n.async;x.open(n.type,n.url,z,n.username,n.password);for(g in b)k.apply(x,b[g]);return n.timeout>0&&(m=setTimeout(function(){x.onreadystatechange=c,x.abort(),s(null,"timeout",x,n,o)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var o,a=this,r=e.split(/\s/),s=h(e,n,i),l=s.success;return r.length>1&&(s.url=r[0],o=r[1]),s.success=function(e){a.html(o?t("<div>").html(e.replace(v,"")).find(o):e),l&&l.apply(a,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},m(n,t,e),n.join("&").replace(/%20/g,"+")}}(i),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(i),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return o?o+t:t.toLowerCase()}var o,a,r,s,l,c,u,f,p,h,m="",d={Webkit:"webkit",Moz:"",O:"o"},g=window.document,y=g.createElement("div"),b=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,v={};t.each(d,function(t,n){return y.style[t+"TransitionProperty"]!==e?(m="-"+t.toLowerCase()+"-",o=n,!1):void 0}),a=m+"transform",v[r=m+"transition-property"]=v[s=m+"transition-duration"]=v[c=m+"transition-delay"]=v[l=m+"transition-timing-function"]=v[u=m+"animation-name"]=v[f=m+"animation-duration"]=v[h=m+"animation-delay"]=v[p=m+"animation-timing-function"]="",t.fx={off:o===e&&y.style.transitionProperty===e,speeds:{_7zpo2:400,fast:200,slow:600},cssPrefix:m,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,o,a,r){return t.isFunction(i)&&(a=i,o=e,i=e),t.isFunction(o)&&(a=o,o=e),t.isPlainObject(i)&&(o=i.easing,a=i.complete,r=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._7zpo2)/1e3),r&&(r=parseFloat(r)/1e3),this.anim(n,i,o,a,r)},t.fn.anim=function(i,o,m,d,g){var y,w,x,k={},z="",C=this,S=t.fx.transitionEnd,E=!1;if(o===e&&(o=t.fx.speeds._7zpo2/1e3),g===e&&(g=0),t.fx.off&&(o=0),"string"==typeof i)k[u]=i,k[f]=o+"s",k[h]=g+"s",k[p]=m||"linear",S=t.fx.animationEnd;else{w=[];for(y in i)b.test(y)?z+=y+"("+i[y]+") ":(k[y]=i[y],w.push(n(y)));z&&(k[a]=z,w.push(a)),o>0&&"object"==typeof i&&(k[r]=w.join(", "),k[s]=o+"s",k[c]=g+"s",k[l]=m||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(S,x)}else t(this).unbind(S,x);E=!0,t(this).css(v),d&&d.call(this)},o>0&&(this.bind(S,x),setTimeout(function(){E||x.call(C)},1e3*o+25)),this.size()&&this.get(0).clientLeft,this.css(k),0>=o&&setTimeout(function(){C.each(function(){x.call(this)})},0),this},y=null}(i),n.exports=window.Zepto}.call(e,n,e,t),!(void 0!==i&&(t.exports=i))}).call(e,n(1))}]);