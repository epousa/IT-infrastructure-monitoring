OpenLayers.Layer.Text=OpenLayers.Class(OpenLayers.Layer.Markers,{location:null,features:null,formatOptions:null,selectedFeature:null,initialize:function(e,t){OpenLayers.Layer.Markers.prototype.initialize.apply(this,arguments),this.features=new Array},destroy:function(){OpenLayers.Layer.Markers.prototype.destroy.apply(this,arguments),this.clearFeatures(),this.features=null},loadText:function(){if(!this.loaded&&null!=this.location){this.events.triggerEvent("loadstart"),OpenLayers.Request.GET({url:this.location,success:this.parseData,failure:function(e){this.events.triggerEvent("loadend")},scope:this}),this.loaded=!0}},moveTo:function(e,t,r){OpenLayers.Layer.Markers.prototype.moveTo.apply(this,arguments),this.visibility&&!this.loaded&&this.loadText()},parseData:function(e){var t=e.responseText,r={};OpenLayers.Util.extend(r,this.formatOptions),this.map&&!this.projection.equals(this.map.getProjectionObject())&&(r.externalProjection=this.projection,r.internalProjection=this.map.getProjectionObject());for(var a=new OpenLayers.Format.Text(r).read(t),s=0,i=a.length;s<i;s++){var n,l,o,p={},h=a[s];n=new OpenLayers.LonLat(h.geometry.x,h.geometry.y),h.style.graphicWidth&&h.style.graphicHeight&&(l=new OpenLayers.Size(h.style.graphicWidth,h.style.graphicHeight)),void 0!==h.style.graphicXOffset&&void 0!==h.style.graphicYOffset&&(o=new OpenLayers.Pixel(h.style.graphicXOffset,h.style.graphicYOffset)),null!=h.style.externalGraphic?p.icon=new OpenLayers.Icon(h.style.externalGraphic,l,o):(p.icon=OpenLayers.Marker.defaultIcon(),null!=l&&p.icon.setSize(l)),null!=h.attributes.title&&null!=h.attributes.description&&(p.popupContentHTML="<h2>"+h.attributes.title+"</h2><p>"+h.attributes.description+"</p>"),p.overflow=h.attributes.overflow||"auto";var u=new OpenLayers.Feature(this,n,p);this.features.push(u);var y=u.createMarker();null!=h.attributes.title&&null!=h.attributes.description&&y.events.register("click",u,this.markerClick),this.addMarker(y)}this.events.triggerEvent("loadend")},markerClick:function(e){var t=this==this.layer.selectedFeature;this.layer.selectedFeature=t?null:this;for(var r=0,a=this.layer.map.popups.length;r<a;r++)this.layer.map.removePopup(this.layer.map.popups[r]);t||this.layer.map.addPopup(this.createPopup()),OpenLayers.Event.stop(e)},clearFeatures:function(){if(null!=this.features)for(;this.features.length>0;){var e=this.features[0];OpenLayers.Util.removeItem(this.features,e),e.destroy()}},CLASS_NAME:"OpenLayers.Layer.Text"});