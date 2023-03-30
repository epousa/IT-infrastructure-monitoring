OpenLayers.Control.WMSGetFeatureInfo=OpenLayers.Class(OpenLayers.Control,{hover:!1,drillDown:!1,maxFeatures:10,clickCallback:"click",layers:null,queryVisible:!1,url:null,layerUrls:null,infoFormat:"text/html",vendorParams:{},format:null,formatOptions:null,handlerOptions:null,handler:null,hoverRequest:null,EVENT_TYPES:["beforegetfeatureinfo","nogetfeatureinfo","getfeatureinfo"],initialize:function(e){if(this.EVENT_TYPES=OpenLayers.Control.WMSGetFeatureInfo.prototype.EVENT_TYPES.concat(OpenLayers.Control.prototype.EVENT_TYPES),(e=e||{}).handlerOptions=e.handlerOptions||{},OpenLayers.Control.prototype.initialize.apply(this,[e]),this.format||(this.format=new OpenLayers.Format.WMSGetFeatureInfo(e.formatOptions)),!0===this.drillDown&&(this.hover=!1),this.hover)this.handler=new OpenLayers.Handler.Hover(this,{move:this.cancelHover,pause:this.getInfoForHover},OpenLayers.Util.extend(this.handlerOptions.hover||{},{delay:250}));else{var t={};t[this.clickCallback]=this.getInfoForClick,this.handler=new OpenLayers.Handler.Click(this,t,this.handlerOptions.click||{})}},activate:function(){return this.active||this.handler.activate(),OpenLayers.Control.prototype.activate.apply(this,arguments)},deactivate:function(){return OpenLayers.Control.prototype.deactivate.apply(this,arguments)},getInfoForClick:function(e){this.events.triggerEvent("beforegetfeatureinfo",{xy:e.xy}),OpenLayers.Element.addClass(this.map.viewPortDiv,"olCursorWait"),this.request(e.xy,{})},getInfoForHover:function(e){this.events.triggerEvent("beforegetfeatureinfo",{xy:e.xy}),this.request(e.xy,{hover:!0})},cancelHover:function(){this.hoverRequest&&(this.hoverRequest.abort(),this.hoverRequest=null)},findLayers:function(){for(var e,t,r=this.layers||this.map.layers,s=[],i=0,n=r.length;i<n;++i)(e=r[i])instanceof OpenLayers.Layer.WMS&&(!this.queryVisible||e.getVisibility())&&(t=e.url instanceof Array?e.url[0]:e.url,!1!==this.drillDown||this.url||(this.url=t),(!0===this.drillDown||this.urlMatches(t))&&s.push(e));return s},urlMatches:function(e){var t=OpenLayers.Util.isEquivalentUrl(this.url,e);if(!t&&this.layerUrls)for(var r=0,s=this.layerUrls.length;r<s;++r)if(OpenLayers.Util.isEquivalentUrl(this.layerUrls[r],e)){t=!0;break}return t},buildWMSOptions:function(e,t,r,s){for(var i=[],n=[],a=0,o=t.length;a<o;a++)i=i.concat(t[a].params.LAYERS),n=n.concat(this.getStyleNames(t[a]));var l=OpenLayers.Util.extend({service:"WMS",version:t[0].params.VERSION,request:"GetFeatureInfo",layers:i,query_layers:i,styles:n,bbox:this.map.getExtent().toBBOX(null,t[0].reverseAxisOrder()),feature_count:this.maxFeatures,height:this.map.getSize().h,width:this.map.getSize().w,format:s,info_format:this.infoFormat},parseFloat(t[0].params.VERSION)>=1.3?{crs:this.map.getProjection(),i:r.x,j:r.y}:{srs:this.map.getProjection(),x:r.x,y:r.y});return OpenLayers.Util.applyDefaults(l,this.vendorParams),{url:e,params:OpenLayers.Util.upperCaseObject(l),callback:function(e){this.handleResponse(r,e)},scope:this}},getStyleNames:function(e){return e.params.STYLES?e.params.STYLES:e.params.LAYERS instanceof Array?new Array(e.params.LAYERS.length):e.params.LAYERS.replace(/[^,]/g,"")},request:function(e,t){if(0==(i=this.findLayers()).length)return this.events.triggerEvent("nogetfeatureinfo"),void OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait");if(t=t||{},!1===this.drillDown){var r=this.buildWMSOptions(this.url,i,e,i[0].params.FORMAT),s=OpenLayers.Request.GET(r);!0===t.hover&&(this.hoverRequest=s)}else{this._requestCount=0,this._numRequests=0,this.features=[];for(var i,n={},a=0,o=i.length;a<o;a++){var l=i[a];(h=l.url instanceof Array?l.url[0]:l.url)in n?n[h].push(l):(this._numRequests++,n[h]=[l])}for(var h in n){i=n[h];r=this.buildWMSOptions(h,i,e,i[0].params.FORMAT);OpenLayers.Request.GET(r)}}},triggerGetFeatureInfo:function(e,t,r){this.events.triggerEvent("getfeatureinfo",{text:e.responseText,features:r,request:e,xy:t}),OpenLayers.Element.removeClass(this.map.viewPortDiv,"olCursorWait")},handleResponse:function(e,t){var r=t.responseXML;r&&r.documentElement||(r=t.responseText);var s=this.format.read(r);!1===this.drillDown?this.triggerGetFeatureInfo(t,e,s):(this._requestCount++,this._features=(this._features||[]).concat(s),this._requestCount===this._numRequests&&(this.triggerGetFeatureInfo(t,e,this._features.concat()),delete this._features,delete this._requestCount,delete this._numRequests))},CLASS_NAME:"OpenLayers.Control.WMSGetFeatureInfo"});