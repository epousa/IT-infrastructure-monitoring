OpenLayers.Layer.Yahoo=OpenLayers.Class(OpenLayers.Layer.EventPane,OpenLayers.Layer.FixedZoomLevels,{MIN_ZOOM_LEVEL:0,MAX_ZOOM_LEVEL:17,RESOLUTIONS:[1.40625,.703125,.3515625,.17578125,.087890625,.0439453125,.02197265625,.010986328125,.0054931640625,.00274658203125,.001373291015625,.0006866455078125,.00034332275390625,.000171661376953125,858306884765625e-19,4291534423828125e-20,2145767211914062e-20,1072883605957031e-20],type:null,wrapDateLine:!0,sphericalMercator:!1,initialize:function(e,t){OpenLayers.Layer.EventPane.prototype.initialize.apply(this,arguments),OpenLayers.Layer.FixedZoomLevels.prototype.initialize.apply(this,arguments),this.sphericalMercator&&(OpenLayers.Util.extend(this,OpenLayers.Layer.SphericalMercator),this.initMercatorParameters())},loadMapObject:function(){try{var e=this.getMapObjectSizeFromOLSize(this.map.getSize());this.mapObject=new YMap(this.div,this.type,e),this.mapObject.disableKeyControls(),this.mapObject.disableDragMap(),this.mapObject.moveByXY&&"function"==typeof this.mapObject.moveByXY||(this.dragPanMapObject=null)}catch(e){}},onMapResize:function(){try{var e=this.getMapObjectSizeFromOLSize(this.map.getSize());this.mapObject.resizeTo(e)}catch(e){}},setMap:function(e){OpenLayers.Layer.EventPane.prototype.setMap.apply(this,arguments),this.map.events.register("moveend",this,this.fixYahooEventPane)},fixYahooEventPane:function(){var e=OpenLayers.Util.getElement("ygddfdiv");null!=e&&(null!=e.parentNode&&e.parentNode.removeChild(e),this.map.events.unregister("moveend",this,this.fixYahooEventPane))},getWarningHTML:function(){return OpenLayers.i18n("getLayerWarning",{layerType:"Yahoo",layerLib:"Yahoo"})},getOLZoomFromMapObjectZoom:function(e){var t=null;return null!=e&&(t=18-(t=OpenLayers.Layer.FixedZoomLevels.prototype.getOLZoomFromMapObjectZoom.apply(this,[e]))),t},getMapObjectZoomFromOLZoom:function(e){var t=null;return null!=e&&(t=18-(t=OpenLayers.Layer.FixedZoomLevels.prototype.getMapObjectZoomFromOLZoom.apply(this,[e]))),t},setMapObjectCenter:function(e,t){this.mapObject.drawZoomAndCenter(e,t)},getMapObjectCenter:function(){return this.mapObject.getCenterLatLon()},dragPanMapObject:function(e,t){this.mapObject.moveByXY({x:-e,y:t})},getMapObjectZoom:function(){return this.mapObject.getZoomLevel()},getMapObjectLonLatFromMapObjectPixel:function(e){return this.mapObject.convertXYLatLon(e)},getMapObjectPixelFromMapObjectLonLat:function(e){return this.mapObject.convertLatLonXY(e)},getLongitudeFromMapObjectLonLat:function(e){return this.sphericalMercator?this.forwardMercator(e.Lon,e.Lat).lon:e.Lon},getLatitudeFromMapObjectLonLat:function(e){return this.sphericalMercator?this.forwardMercator(e.Lon,e.Lat).lat:e.Lat},getMapObjectLonLatFromLonLat:function(e,t){var a;if(this.sphericalMercator){var n=this.inverseMercator(e,t);a=new YGeoPoint(n.lat,n.lon)}else a=new YGeoPoint(t,e);return a},getXFromMapObjectPixel:function(e){return e.x},getYFromMapObjectPixel:function(e){return e.y},getMapObjectPixelFromXY:function(e,t){return new YCoordPoint(e,t)},getMapObjectSizeFromOLSize:function(e){return new YSize(e.w,e.h)},CLASS_NAME:"OpenLayers.Layer.Yahoo"});