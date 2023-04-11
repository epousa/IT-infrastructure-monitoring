if(OpenLayers.Event={observers:!1,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(e){return e.target||e.srcElement},isLeftClick:function(e){return e.which&&1==e.which||e.button&&1==e.button},isRightClick:function(e){return e.which&&3==e.which||e.button&&2==e.button},stop:function(e,t){t||(e.preventDefault?e.preventDefault():e.returnValue=!1),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},findElement:function(e,t){for(var n=OpenLayers.Event.element(e);n.parentNode&&(!n.tagName||n.tagName.toUpperCase()!=t.toUpperCase());)n=n.parentNode;return n},observe:function(e,t,n,s){var r=OpenLayers.Util.getElement(e);if(s=s||!1,"keypress"==t&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||r.attachEvent)&&(t="keydown"),this.observers||(this.observers={}),!r._eventCacheID){var l="eventCacheID_";r.id&&(l=r.id+"_"+l),r._eventCacheID=OpenLayers.Util.createUniqueID(l)}var i=r._eventCacheID;this.observers[i]||(this.observers[i]=[]),this.observers[i].push({element:r,name:t,observer:n,useCapture:s}),r.addEventListener?r.addEventListener(t,n,s):r.attachEvent&&r.attachEvent("on"+t,n)},stopObservingElement:function(e){var t=OpenLayers.Util.getElement(e)._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[t])},_removeElementObservers:function(e){if(e)for(var t=e.length-1;t>=0;t--){var n=e[t],s=new Array(n.element,n.name,n.observer,n.useCapture);OpenLayers.Event.stopObserving.apply(this,s)}},stopObserving:function(e,t,n,s){s=s||!1;var r=OpenLayers.Util.getElement(e),l=r._eventCacheID;"keypress"==t&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||r.detachEvent)&&(t="keydown");var i=!1,o=OpenLayers.Event.observers[l];if(o)for(var a=0;!i&&a<o.length;){var h=o[a];if(h.name==t&&h.observer==n&&h.useCapture==s){o.splice(a,1),0==o.length&&delete OpenLayers.Event.observers[l],i=!0;break}a++}return i&&(r.removeEventListener?r.removeEventListener(t,n,s):r&&r.detachEvent&&r.detachEvent("on"+t,n)),i},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var e in OpenLayers.Event.observers){var t=OpenLayers.Event.observers[e];OpenLayers.Event._removeElementObservers.apply(this,[t])}OpenLayers.Event.observers=!1}},CLASS_NAME:"OpenLayers.Event"},OpenLayers.Event.observe(window,"unload",OpenLayers.Event.unloadCache,!1),window.Event)OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);else var Event=OpenLayers.Event;OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","rightclick","dblrightclick","resize","focus","blur"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,includeXY:!1,clearMouseListener:null,initialize:function(e,t,n,s,r){if(OpenLayers.Util.extend(this,r),this.object=e,this.fallThrough=s,this.listeners={},this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this),this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this),this.eventTypes=[],null!=n)for(var l=0,i=n.length;l<i;l++)this.addEventType(n[l]);null!=t&&this.attachToElement(t)},destroy:function(){this.element&&(OpenLayers.Event.stopObservingElement(this.element),this.element.hasScrollEvent&&OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener)),this.element=null,this.listeners=null,this.object=null,this.eventTypes=null,this.fallThrough=null,this.eventHandler=null},addEventType:function(e){this.listeners[e]||(this.eventTypes.push(e),this.listeners[e]=[])},attachToElement:function(e){this.element&&OpenLayers.Event.stopObservingElement(this.element),this.element=e;for(var t=0,n=this.BROWSER_EVENTS.length;t<n;t++){var s=this.BROWSER_EVENTS[t];this.addEventType(s),OpenLayers.Event.observe(e,s,this.eventHandler)}OpenLayers.Event.observe(e,"dragstart",OpenLayers.Event.stop)},on:function(e){for(var t in e)"scope"!=t&&this.register(t,e.scope,e[t])},register:function(e,t,n){null!=n&&-1!=OpenLayers.Util.indexOf(this.eventTypes,e)&&(null==t&&(t=this.object),this.listeners[e].push({obj:t,func:n}))},registerPriority:function(e,t,n){if(null!=n){null==t&&(t=this.object);var s=this.listeners[e];null!=s&&s.unshift({obj:t,func:n})}},un:function(e){for(var t in e)"scope"!=t&&this.unregister(t,e.scope,e[t])},unregister:function(e,t,n){null==t&&(t=this.object);var s=this.listeners[e];if(null!=s)for(var r=0,l=s.length;r<l;r++)if(s[r].obj==t&&s[r].func==n){s.splice(r,1);break}},remove:function(e){null!=this.listeners[e]&&(this.listeners[e]=[])},triggerEvent:function(e,t){if((n=this.listeners[e])&&0!=n.length){null==t&&(t={}),t.object=this.object,t.element=this.element,t.type||(t.type=e);for(var n,s,r=0,l=(n=n.slice()).length;r<l;r++){var i=n[r];if(null!=(s=i.func.apply(i.obj,[t]))&&0==s)break}return this.fallThrough||OpenLayers.Event.stop(t,!0),s}},handleBrowserEvent:function(e){this.includeXY&&(e.xy=this.getMousePosition(e)),this.triggerEvent(e.type,e)},clearMouseCache:function(){this.element.scrolls=null,this.element.lefttop=null,this.element.offsets=null},getMousePosition:function(e){return this.includeXY?this.element.hasScrollEvent||(OpenLayers.Event.observe(window,"scroll",this.clearMouseListener),this.element.hasScrollEvent=!0):this.clearMouseCache(),this.element.scrolls||(this.element.scrolls=[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]),this.element.lefttop||(this.element.lefttop=[document.documentElement.clientLeft||0,document.documentElement.clientTop||0]),this.element.offsets||(this.element.offsets=OpenLayers.Util.pagePosition(this.element),this.element.offsets[0]+=this.element.scrolls[0],this.element.offsets[1]+=this.element.scrolls[1]),new OpenLayers.Pixel(e.clientX+this.element.scrolls[0]-this.element.offsets[0]-this.element.lefttop[0],e.clientY+this.element.scrolls[1]-this.element.offsets[1]-this.element.lefttop[1])},CLASS_NAME:"OpenLayers.Events"});