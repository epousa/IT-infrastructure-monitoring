!function(){var t=window.XMLHttpRequest,e=!!window.controllers,n=window.document.all&&!window.opera,o=n&&window.navigator.userAgent.match(/MSIE ([\.0-9]+)/)&&7==RegExp.$1;function a(){this._object=t&&!o?new t:new window.ActiveXObject("Microsoft.XMLHTTP"),this._listeners=[]}function s(t){a.onreadystatechange&&a.onreadystatechange.apply(t),t.dispatchEvent({type:"readystatechange",bubbles:!1,cancelable:!1,timeStamp:new Date+0})}function r(t){try{t.responseText=t._object.responseText}catch(t){}try{t.responseXML=function(t){var e=t.responseXML,o=t.responseText;return n&&o&&e&&!e.documentElement&&t.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)&&((e=new window.ActiveXObject("Microsoft.XMLDOM")).async=!1,e.validateOnParse=!1,e.loadXML(o)),e&&(n&&0!=e.parseError||!e.documentElement||e.documentElement&&"parsererror"==e.documentElement.tagName)?null:e}(t._object)}catch(t){}try{t.status=t._object.status}catch(t){}try{t.statusText=t._object.statusText}catch(t){}}function i(t){t._object.onreadystatechange=new window.Function}e&&t.wrapped&&(a.wrapped=t.wrapped),a.UNSENT=0,a.OPENED=1,a.HEADERS_RECEIVED=2,a.LOADING=3,a.DONE=4,a.prototype.readyState=a.UNSENT,a.prototype.responseText="",a.prototype.responseXML=null,a.prototype.status=0,a.prototype.statusText="",a.prototype.onreadystatechange=null,a.onreadystatechange=null,a.onopen=null,a.onsend=null,a.onabort=null,a.prototype.open=function(t,o,p,c,d){delete this._headers,arguments.length<3&&(p=!0),this._async=p;var h,u=this,l=this.readyState;n&&p&&(h=function(){l!=a.DONE&&(i(u),u.abort())},window.attachEvent("onunload",h)),a.onopen&&a.onopen.apply(this,arguments),arguments.length>4?this._object.open(t,o,p,c,d):arguments.length>3?this._object.open(t,o,p,c):this._object.open(t,o,p),e||n||(this.readyState=a.OPENED,s(this)),this._object.onreadystatechange=function(){e&&!p||(u.readyState=u._object.readyState,r(u),u._aborted?u.readyState=a.UNSENT:(u.readyState==a.DONE&&(i(u),n&&p&&window.detachEvent("onunload",h)),l!=u.readyState&&s(u),l=u.readyState))}},a.prototype.send=function(t){if(a.onsend&&a.onsend.apply(this,arguments),t&&t.nodeType&&(t=window.XMLSerializer?(new window.XMLSerializer).serializeToString(t):t.xml,this._headers["Content-Type"]||this._object.setRequestHeader("Content-Type","application/xml")),this._object.send(t),e&&!this._async)for(this.readyState=a.OPENED,r(this);this.readyState<a.DONE;)if(this.readyState++,s(this),this._aborted)return},a.prototype.abort=function(){a.onabort&&a.onabort.apply(this,arguments),this.readyState>a.UNSENT&&(this._aborted=!0),this._object.abort(),i(this)},a.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders()},a.prototype.getResponseHeader=function(t){return this._object.getResponseHeader(t)},a.prototype.setRequestHeader=function(t,e){return this._headers||(this._headers={}),this._headers[t]=e,this._object.setRequestHeader(t,e)},a.prototype.addEventListener=function(t,e,n){for(var o,a=0;o=this._listeners[a];a++)if(o[0]==t&&o[1]==e&&o[2]==n)return;this._listeners.push([t,e,n])},a.prototype.removeEventListener=function(t,e,n){for(var o,a=0;(o=this._listeners[a])&&(o[0]!=t||o[1]!=e||o[2]!=n);a++);o&&this._listeners.splice(a,1)},a.prototype.dispatchEvent=function(t){var e={type:t.type,target:this,currentTarget:this,eventPhase:2,bubbles:t.bubbles,cancelable:t.cancelable,timeStamp:t.timeStamp,stopPropagation:function(){},preventDefault:function(){},initEvent:function(){}};"readystatechange"==e.type&&this.onreadystatechange&&(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[e]);for(var n,o=0;n=this._listeners[o];o++)n[0]!=e.type||n[2]||(n[1].handleEvent||n[1]).apply(this,[e])},a.prototype.toString=function(){return"[object XMLHttpRequest]"},a.toString=function(){return"[XMLHttpRequest]"},window.Function.prototype.apply||(window.Function.prototype.apply=function(t,e){e||(e=[]),t.__func=this,t.__func(e[0],e[1],e[2],e[3],e[4]),delete t.__func}),OpenLayers.Request.XMLHttpRequest=a}();