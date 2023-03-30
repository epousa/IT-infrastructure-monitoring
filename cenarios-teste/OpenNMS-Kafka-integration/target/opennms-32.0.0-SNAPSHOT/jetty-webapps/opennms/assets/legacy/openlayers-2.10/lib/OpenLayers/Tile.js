OpenLayers.Tile=OpenLayers.Class({EVENT_TYPES:["loadstart","loadend","reload","unload"],events:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:!1,initialize:function(n,e,s,i,t){this.layer=n,this.position=e.clone(),this.bounds=s.clone(),this.url=i,this.size=t.clone(),this.id=OpenLayers.Util.createUniqueID("Tile_"),this.events=new OpenLayers.Events(this,null,this.EVENT_TYPES)},unload:function(){this.isLoading&&(this.isLoading=!1,this.events.triggerEvent("unload"))},destroy:function(){this.layer=null,this.bounds=null,this.size=null,this.position=null,this.events.destroy(),this.events=null},clone:function(n){return null==n&&(n=new OpenLayers.Tile(this.layer,this.position,this.bounds,this.url,this.size)),OpenLayers.Util.applyDefaults(n,this),n},draw:function(){var n=this.layer.maxExtent,e=n&&this.bounds.intersectsBounds(n,!1);return this.shouldDraw=e||this.layer.displayOutsideMaxExtent,this.clear(),this.shouldDraw},moveTo:function(n,e,s){null==s&&(s=!0),this.bounds=n.clone(),this.position=e.clone(),s&&this.draw()},clear:function(){},getBoundsFromBaseLayer:function(n){var e=OpenLayers.i18n("reprojectDeprecated",{layerName:this.layer.name});OpenLayers.Console.warn(e);var s=this.layer.map.getLonLatFromLayerPx(n),i=n.clone();i.x+=this.size.w,i.y+=this.size.h;var t=this.layer.map.getLonLatFromLayerPx(i);return s.lon>t.lon&&(s.lon<0?s.lon=-180-(s.lon+180):t.lon=180+t.lon+180),new OpenLayers.Bounds(s.lon,t.lat,t.lon,s.lat)},showTile:function(){this.shouldDraw&&this.show()},show:function(){},hide:function(){},CLASS_NAME:"OpenLayers.Tile"});