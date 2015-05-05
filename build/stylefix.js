(function(f){typeof define==="function"?define("stylefix",f):f()})(function(require,exports,module){"use strict";!function(e,t){function n(){}function r(t,n){n=n||q;var r=[];for(var o in b){var c,a,i=e;if(e[o]){for(c=b[o].replace("*",o).split(".");(a=c.shift())&&(i=i[a]););if("function"==typeof i)try{if(r=i(t,n),r&&r.length)break}catch(s){}}}try{r=[].slice.call(r||n.querySelectorAll(t),0)}catch(s){}return r}function o(t,r,c){N=!1;var a,i,s,l,u,f,d=/^\w+:\/\/[^\/]+/;if(c=c||n,u=C[t])g(function(){r(u)},0);else if(l=O[t])l.push(r);else{O[t]=[r],a=S?new S:new ActiveXObject("Microsoft.XMLHTTP"),a.onreadystatechange=function(){4===a.readyState&&s()},s=function(){var e=a.responseText.replace(/(^\s+|\s+$)/g,"");e&&(!a.status||a.status<400||a.status>600)?(C[t]=e,O[t].forEach(function(t){t(e)})):c(a)};try{a.open("GET",t),a.send()}catch(y){M?(a=new M,a.onerror=c,a.onprogress=n,a.onload=s,a.open("GET",t),a.send()):(f=function(e){S=(i||e).XMLHttpRequest,o(t,r,c)},(i=e.mOxie)?f():require?require.async(["mOxie"],f):d.test(t)?o(t.replace(d,""),r,c):c(a))}}}function c(e,n){var r=e.textContent;return n===t?r||(e.textContent=e.innerText):(e.styleSheet&&n!==r&&(e.styleSheet.cssText=n),void(e.textContent=n))}function a(e,t){t=t||{};var n=e.replace(/[^\/]+$/,""),r=(/^[a-z]{3,10}:/.exec(n)||[""])[0],a=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(n)||[""])[0],i=/^([^?]*)\??/.exec(e)[1],s=t.style||q.createElement("style"),l=t.callback,u=t.before;o(e,function(t){n&&(t=t.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,o){return/^([a-z]{3,10}:|#)/i.test(o)?e:/^\/\//.test(o)?'url("'+r+o+'")':/^\//.test(o)?'url("'+a+o+'")':/^\?/.test(o)?'url("'+i+o+'")':'url("'+n+o+'")'}));var o=n.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");t=t.replace(new RegExp("\\b(behavior:\\s*?url\\('?\"?)"+o,"gi"),"$1"),v=s,s.setAttribute("data-href",e),u&&u.parentNode?u.parentNode.insertBefore(s,u):q.documentElement.childNodes[0].appendChild(s),t=d(t,!0,s),c(s,t),l&&l(s),v=null},function(){if(!u){var t=q.createElement("link");t.rel="stylesheet",t.href=e,q.documentElement.childNodes[0].appendChild(t)}})}function i(e){function t(){var t=e.href,n=o.style,r=e.parentNode;!n||r&&n.getAttribute("data-href")===t||(n.remove?n.remove():n.parentNode&&n.parentNode.removeChild(n)),r&&a(t,o)}function n(){clearTimeout(r),r=g(t,0)}var r,o={callback:function(t){t.media=e.media,t.disabled=e.disabled,o.style=t},before:e};!e[A]&&/^stylesheet$/i.test(e.rel)&&(t(),h(e,"DOMAttrModified",n),h(e,"DOMNodeRemoved",n),e.attachEvent&&e.attachEvent("onpropertychange",n))}function s(e){var t=e.disabled;c(e,d(c(e),!0,e)),e.disabled=t}function l(e){var t,n;8>T?(t=e.style.cssText,n=d(t,!1,e),t!==n&&(e.style.cssText=n)):(t=e.getAttribute("style"),n=d(t,!1,e),t!==n&&e.setAttribute("style",n))}function u(){x.length>1?(r('link[rel="stylesheet"]').forEach(i),r("style").forEach(s),r("[style]").forEach(l),h(q,"DOMNodeInserted",function(e){var t=e.target;switch(t.tagName){case"STYLE":t!==v&&s(t);break;case"LINK":/^stylesheet$/i.test(t.rel)&&i(t);break;default:t.style&&l(t)}})):g(u,50)}function f(e,n){x.splice(n===t?x.length:n,0,e)}function d(e,t,n){return x.forEach(function(r){e=r(e,t,n)||e}),e}function y(){p(function(){k.forEach(function(e){e()}),g(u,0)})}function h(e){var t=e.addEventListener;return t?(t.apply(e,[].slice.call(arguments,1)),!0):void 0}function p(t){function n(){w||(w=!0,t())}try{return $(n)}catch(r){}if(m())g(n,0);else if(!h(q,"DOMContentLoaded",n)){q.attachEvent("onreadystatechange",function(){m()&&n()});var o;try{o=!e.frameElement&&q.documentElement}catch(c){}o&&o.doScroll&&!function a(){if(!w){try{o.doScroll("left")}catch(e){return g(a,50)}n()}}()}}function m(){return/^(complete|interactive)$/.test(q.readyState)}var v,E,g=e.setTimeout,b={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},x=[function(e){return e.replace(/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,"")}],q=e.document,M=e.XDomainRequest,S=e.XMLHttpRequest,T=q.querySelector?q.documentMode:"CSS1Compat"===q.compatMode?"XMLHttpRequest"in e?7:6:5,N=q.querySelector||M,A="data-ignore",C={},O={},k=[],w=!1;require&&![].filter?require.async(["es5-shim"],y):y(),E={query:r,get:o,cssContent:c,load:a,linkElement:i,styleElement:s,styleAttribute:l,ieVersion:T,process:u,register:f,fix:d,ready:function(e){w?e():k.push(e)}};try{module.exports=E}catch(L){e.stylefix=E}}(window);});