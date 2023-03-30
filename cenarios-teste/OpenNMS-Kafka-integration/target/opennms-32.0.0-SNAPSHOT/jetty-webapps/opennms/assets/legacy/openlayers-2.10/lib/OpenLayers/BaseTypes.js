OpenLayers.String={startsWith:function(e,n){return 0==e.indexOf(n)},contains:function(e,n){return-1!=e.indexOf(n)},trim:function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},camelize:function(e){for(var n=e.split("-"),t=n[0],r=1,i=n.length;r<i;r++){var a=n[r];t+=a.charAt(0).toUpperCase()+a.substring(1)}return t},format:function(e,n,t){n||(n=window);return e.replace(OpenLayers.String.tokenRegEx,(function(e,r){for(var i,a=r.split(/\.+/),o=0;o<a.length;o++)0==o&&(i=n),i=i[a[o]];return"function"==typeof i&&(i=t?i.apply(null,t):i()),void 0===i?"undefined":i}))},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(e){return OpenLayers.String.numberRegEx.test(e)},numericIf:function(e){return OpenLayers.String.isNumeric(e)?parseFloat(e):e}},String.prototype.startsWith||(String.prototype.startsWith=function(e){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.String.startsWith"})),OpenLayers.String.startsWith(this,e)}),String.prototype.contains||(String.prototype.contains=function(e){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.String.contains"})),OpenLayers.String.contains(this,e)}),String.prototype.trim||(String.prototype.trim=function(){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.String.trim"})),OpenLayers.String.trim(this)}),String.prototype.camelize||(String.prototype.camelize=function(){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.String.camelize"})),OpenLayers.String.camelize(this)}),OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(e,n){var t=0;return n>0&&(t=parseFloat(e.toPrecision(n))),t},format:function(e,n,t,r){n=void 0!==n?n:0,t=void 0!==t?t:OpenLayers.Number.thousandsSeparator,r=void 0!==r?r:OpenLayers.Number.decimalSeparator,null!=n&&(e=parseFloat(e.toFixed(n)));var i=e.toString().split(".");1==i.length&&null==n&&(n=0);var a,o=i[0];if(t)for(var s=/(-?[0-9]+)([0-9]{3})/;s.test(o);)o=o.replace(s,"$1"+t+"$2");if(0==n)a=o;else{var p=i.length>1?i[1]:"0";null!=n&&(p+=new Array(n-p.length+1).join("0")),a=o+r+p}return a}},Number.prototype.limitSigDigs||(Number.prototype.limitSigDigs=function(e){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.Number.limitSigDigs"})),OpenLayers.Number.limitSigDigs(this,e)}),OpenLayers.Function={bind:function(e,n){var t=Array.prototype.slice.apply(arguments,[2]);return function(){var r=t.concat(Array.prototype.slice.apply(arguments,[0]));return e.apply(n,r)}},bindAsEventListener:function(e,n){return function(t){return e.call(n,t||window.event)}},False:function(){return!1},True:function(){return!0}},Function.prototype.bind||(Function.prototype.bind=function(){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.Function.bind"})),Array.prototype.unshift.apply(arguments,[this]),OpenLayers.Function.bind.apply(null,arguments)}),Function.prototype.bindAsEventListener||(Function.prototype.bindAsEventListener=function(e){return OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"OpenLayers.Function.bindAsEventListener"})),OpenLayers.Function.bindAsEventListener(this,e)}),OpenLayers.Array={filter:function(e,n,t){var r=[];if(Array.prototype.filter)r=e.filter(n,t);else{var i=e.length;if("function"!=typeof n)throw new TypeError;for(var a=0;a<i;a++)if(a in e){var o=e[a];n.call(t,o,a,e)&&r.push(o)}}return r}},OpenLayers.Date={toISOString:function(){if("toISOString"in Date.prototype)return function(e){return e.toISOString()};{function e(e,n){for(var t=e+"";t.length<n;)t="0"+t;return t}return function(n){return isNaN(n.getTime())?"Invalid Date":n.getUTCFullYear()+"-"+e(n.getUTCMonth()+1,2)+"-"+e(n.getUTCDate(),2)+"T"+e(n.getUTCHours(),2)+":"+e(n.getUTCMinutes(),2)+":"+e(n.getUTCSeconds(),2)+"."+e(n.getUTCMilliseconds(),3)+"Z"}}}(),parse:function(e){var n=Date.parse(e);if(isNaN(n)){var t,r=e.match(/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))?$/);if(r&&(r[1]||r[7])){var i=parseInt(r[1],10)||0,a=parseInt(r[2],10)-1||0,o=parseInt(r[3],10)||1;t=new Date(Date.UTC(i,a,o));var s=r[7];if(s){var p=parseInt(r[4],10),u=parseInt(r[5],10),c=parseFloat(r[6]),l=0|c,y=Math.round(1e3*(c-l));if(t.setUTCHours(p,u,l,y),"Z"!==s){var d=-1e3*(60*parseInt(s,10)*60+60*(parseInt(r[8])||0));t=new Date(t.getTime()+d)}}}else t=new Date("invalid")}else t=new Date(n);return t}};