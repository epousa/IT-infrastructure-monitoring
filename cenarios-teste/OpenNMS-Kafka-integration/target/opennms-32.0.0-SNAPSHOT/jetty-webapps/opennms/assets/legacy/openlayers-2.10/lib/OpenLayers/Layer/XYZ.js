OpenLayers.Layer.XYZ=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,sphericalMercator:!1,zoomOffset:0,initialize:function(e,t,r){(r&&r.sphericalMercator||this.sphericalMercator)&&(r=OpenLayers.Util.extend({maxExtent:new OpenLayers.Bounds(-20037508.3392,-20037508.3392,20037508.3392,20037508.3392),maxResolution:156543.0339,numZoomLevels:19,units:"m",projection:"EPSG:900913"},r)),t=t||this.url;var a=[e=e||this.name,t,{},r];OpenLayers.Layer.Grid.prototype.initialize.apply(this,a)},clone:function(e){return null==e&&(e=new OpenLayers.Layer.XYZ(this.name,this.url,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])},getURL:function(e){var t=this.map.getResolution(),r=Math.round((e.left-this.maxExtent.left)/(t*this.tileSize.w)),a=Math.round((this.maxExtent.top-e.top)/(t*this.tileSize.h)),n=this.map.getZoom()+this.zoomOffset,i=this.url,s=""+r+a+n;return i instanceof Array&&(i=this.selectUrl(s,i)),OpenLayers.String.format(i,{x:r,y:a,z:n})},addTile:function(e,t){return new OpenLayers.Tile.Image(this,t,e,null,this.tileSize)},setMap:function(e){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments),this.tileOrigin||(this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.bottom))},CLASS_NAME:"OpenLayers.Layer.XYZ"}),OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.XYZ,{name:"OpenStreetMap",attribution:"Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",sphericalMercator:!0,url:"http://tile.openstreetmap.org/${z}/${x}/${y}.png",clone:function(e){return null==e&&(e=new OpenLayers.Layer.OSM(this.name,this.url,this.getOptions())),e=OpenLayers.Layer.XYZ.prototype.clone.apply(this,[e])},CLASS_NAME:"OpenLayers.Layer.OSM"});