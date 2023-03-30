L.Handler.MarkerDrag=L.Handler.extend({initialize:function(a){this._marker=a},addHooks:function(){var a=this._marker._icon;this._draggable||(this._draggable=new L.Draggable(a,a,!0)),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),L.DomUtil.addClass(a,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&L.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(a){var r=this._marker,t=r._shadow,e=L.DomUtil.getPosition(r._icon),i=r._map.layerPointToLatLng(e);t&&L.DomUtil.setPosition(t,e),r._latlng=i,a.latlng=i,a.oldLatLng=this._oldLatLng,r.fire("move",a).fire("drag",a)},_onDragEnd:function(a){delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",a)}});