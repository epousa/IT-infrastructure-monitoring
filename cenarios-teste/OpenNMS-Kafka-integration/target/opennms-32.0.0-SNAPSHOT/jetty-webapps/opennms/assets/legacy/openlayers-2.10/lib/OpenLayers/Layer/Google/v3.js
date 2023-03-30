OpenLayers.Layer.Google.v3={DEFAULTS:{maxExtent:new OpenLayers.Bounds(-20037508.3392,-20037508.3392,20037508.3392,20037508.3392),sphericalMercator:!0,maxResolution:156543.0339,units:"m",projection:"EPSG:900913"},loadMapObject:function(){var e;this.type||(this.type=google.maps.MapTypeId.ROADMAP);var t=OpenLayers.Layer.Google.cache[this.map.id];if(t)e=t.mapObject,++t.count;else{var i=this.map.viewPortDiv,s=document.createElement("div");s.id=this.map.id+"_GMapContainer",s.style.position="absolute",s.style.width="100%",s.style.height="100%",i.appendChild(s);var o=this.map.getCenter();t={mapObject:e=new google.maps.Map(s,{center:o?new google.maps.LatLng(o.lat,o.lon):new google.maps.LatLng(0,0),zoom:this.map.getZoom()||0,mapTypeId:this.type,disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1}),count:1},OpenLayers.Layer.Google.cache[this.map.id]=t,this.repositionListener=google.maps.event.addListenerOnce(e,"center_changed",OpenLayers.Function.bind(this.repositionMapElements,this))}this.mapObject=e,this.setGMapVisibility(this.visibility)},repositionMapElements:function(){google.maps.event.trigger(this.mapObject,"resize");var e=this.mapObject.getDiv().firstChild;if(!e||e.childNodes.length<3)return this.repositionTimer=window.setTimeout(OpenLayers.Function.bind(this.repositionMapElements,this),250),!1;var t=OpenLayers.Layer.Google.cache[this.map.id],i=this.map.viewPortDiv,s=e.lastChild;i.appendChild(s),s.style.zIndex="1100",s.style.bottom="",s.className="olLayerGoogleCopyright olLayerGoogleV3",s.style.display="",t.termsOfUse=s;var o=e.lastChild;i.appendChild(o),o.style.zIndex="1100",o.style.bottom="",o.className="olLayerGooglePoweredBy olLayerGoogleV3 gmnoprint",o.style.display="",t.poweredBy=o,this.setGMapVisibility(this.visibility)},onMapResize:function(){if(this.visibility)google.maps.event.trigger(this.mapObject,"resize");else{if(!this._resized){var e=this;google.maps.event.addListenerOnce(this.mapObject,"tilesloaded",(function(){delete e._resized,google.maps.event.trigger(e.mapObject,"resize"),e.moveTo(e.map.getCenter(),e.map.getZoom())}))}this._resized=!0}},setGMapVisibility:function(e){var t=OpenLayers.Layer.Google.cache[this.map.id];if(t){for(var i,s=this.type,o=this.map.layers,a=o.length-1;a>=0;--a)if((i=o[a])instanceof OpenLayers.Layer.Google&&!0===i.visibility&&!0===i.inRange){s=i.type,e=!0;break}var n=this.mapObject.getDiv();!0===e?(this.mapObject.setMapTypeId(s),n.style.left="",t.termsOfUse&&t.termsOfUse.style&&(t.termsOfUse.style.left="",t.termsOfUse.style.display="",t.poweredBy.style.display=""),t.displayed=this.id):(delete t.displayed,n.style.left="-9999px",t.termsOfUse&&t.termsOfUse.style&&(t.termsOfUse.style.display="none",t.termsOfUse.style.left="-9999px",t.poweredBy.style.display="none"))}},getMapContainer:function(){return this.mapObject.getDiv()},getMapObjectBoundsFromOLBounds:function(e){var t=null;if(null!=e){var i=this.sphericalMercator?this.inverseMercator(e.bottom,e.left):new OpenLayers.LonLat(e.bottom,e.left),s=this.sphericalMercator?this.inverseMercator(e.top,e.right):new OpenLayers.LonLat(e.top,e.right);t=new google.maps.LatLngBounds(new google.maps.LatLng(i.lat,i.lon),new google.maps.LatLng(s.lat,s.lon))}return t},getMapObjectLonLatFromMapObjectPixel:function(e){var t=this.map.getSize(),i=this.getLongitudeFromMapObjectLonLat(this.mapObject.center),s=this.getLatitudeFromMapObjectLonLat(this.mapObject.center),o=this.map.getResolution(),a=e.x-t.w/2,n=e.y-t.h/2,r=new OpenLayers.LonLat(i+a*o,s-n*o);return this.wrapDateLine&&(r=r.wrapDateLine(this.maxExtent)),this.getMapObjectLonLatFromLonLat(r.lon,r.lat)},getMapObjectPixelFromMapObjectLonLat:function(e){var t=this.getLongitudeFromMapObjectLonLat(e),i=this.getLatitudeFromMapObjectLonLat(e),s=this.map.getResolution(),o=this.map.getExtent(),a=new OpenLayers.Pixel(1/s*(t-o.left),1/s*(o.top-i));return this.getMapObjectPixelFromXY(a.x,a.y)},setMapObjectCenter:function(e,t){this.mapObject.setOptions({center:e,zoom:t})},getMapObjectZoomFromMapObjectBounds:function(e){return this.mapObject.getBoundsZoomLevel(e)},getMapObjectLonLatFromLonLat:function(e,t){var i;if(this.sphericalMercator){var s=this.inverseMercator(e,t);i=new google.maps.LatLng(s.lat,s.lon)}else i=new google.maps.LatLng(t,e);return i},getMapObjectPixelFromXY:function(e,t){return new google.maps.Point(e,t)},destroy:function(){this.repositionListener&&google.maps.event.removeListener(this.repositionListener),this.repositionTimer&&window.clearTimeout(this.repositionTimer),OpenLayers.Layer.Google.prototype.destroy.apply(this,arguments)}};