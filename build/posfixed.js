(function(f){typeof define==="function"?define("posfixed",f):f()})(function(require,exports,module){"use strict";!function(e){function t(e,t,i){var s,o=e.uniqueID,f=p[o];if(t=t.toLowerCase(),i=i.toLowerCase(),f||(p[o]=f={}),"position"===t&&"fixed"===i){var n=parseInt(f.left),l=parseInt(f.top),a=parseInt(f.right),u=parseInt(f.bottom);f.fixedleft=isNaN(n)?isNaN(a)?f.left:r.scrollLeft+r.clientWidth-e.offsetWidth-a:r.scrollLeft+n,f.fixedright="auto",f.fixedtop=isNaN(l)?isNaN(u)?f.top:r.scrollTop+r.clientHeight-e.offsetHeight-u:r.scrollTop+l,f.fixedbottom="auto",s="absolute"}else"fixed"===f.position&&(s=f["fixed"+t]);return f[t]=i,s||i}var i='$1:expression(seajs.require("posfixed")(this,"$1","$2"))$3',s=e.stylefix||require("stylefix"),o=e.cssprops||require("cssprops"),r=document.documentElement,f=s.ieVersion,p={};if(7>f){o.push([/^(position)\s*:\s*(\w+)([\};]|$)/i,i]),o.push([/^(left|top|right|bottom)\s*:\s*([\d\.+]*\w*)([\};]|$)/i,i]);try{module.exports=t}catch(n){e.posfixed=t}}}(window);});