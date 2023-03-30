OpenLayers.Layer.Image=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:!0,url:null,extent:null,size:null,tile:null,aspectRatio:null,initialize:function(t,e,i,n,s){this.url=e,this.extent=i,this.maxExtent=i,this.size=n,OpenLayers.Layer.prototype.initialize.apply(this,[t,s]),this.aspectRatio=this.extent.getHeight()/this.size.h/(this.extent.getWidth()/this.size.w)},destroy:function(){this.tile&&(this.removeTileMonitoringHooks(this.tile),this.tile.destroy(),this.tile=null),OpenLayers.Layer.prototype.destroy.apply(this,arguments)},clone:function(t){return null==t&&(t=new OpenLayers.Layer.Image(this.name,this.url,this.extent,this.size,this.getOptions())),t=OpenLayers.Layer.prototype.clone.apply(this,[t])},setMap:function(t){null==this.options.maxResolution&&(this.options.maxResolution=this.aspectRatio*this.extent.getWidth()/this.size.w),OpenLayers.Layer.prototype.setMap.apply(this,arguments)},moveTo:function(t,e,i){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);var n=null==this.tile;if(e||n){this.setTileSize();var s=new OpenLayers.LonLat(this.extent.left,this.extent.top),o=this.map.getLayerPxFromLonLat(s);n?(this.tile=new OpenLayers.Tile.Image(this,o,this.extent,null,this.tileSize),this.addTileMonitoringHooks(this.tile)):(this.tile.size=this.tileSize.clone(),this.tile.position=o.clone()),this.tile.draw()}},setTileSize:function(){var t=this.extent.getWidth()/this.map.getResolution(),e=this.extent.getHeight()/this.map.getResolution();this.tileSize=new OpenLayers.Size(t,e)},addTileMonitoringHooks:function(t){t.onLoadStart=function(){this.events.triggerEvent("loadstart")},t.events.register("loadstart",this,t.onLoadStart),t.onLoadEnd=function(){this.events.triggerEvent("loadend")},t.events.register("loadend",this,t.onLoadEnd),t.events.register("unload",this,t.onLoadEnd)},removeTileMonitoringHooks:function(t){t.unload(),t.events.un({loadstart:t.onLoadStart,loadend:t.onLoadEnd,unload:t.onLoadEnd,scope:this})},setUrl:function(t){this.url=t,this.tile.draw()},getURL:function(t){return this.url},CLASS_NAME:"OpenLayers.Layer.Image"});