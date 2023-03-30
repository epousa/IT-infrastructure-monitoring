L.Control.Zoom=L.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(o){var t="leaflet-control-zoom",i=L.DomUtil.create("div",t+" leaflet-bar"),e=this.options;return this._zoomInButton=this._createButton(e.zoomInText,e.zoomInTitle,t+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(e.zoomOutText,e.zoomOutTitle,t+"-out",i,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,t,i,e,n){var s=L.DomUtil.create("a",i,e);return s.innerHTML=o,s.href="#",s.title=t,s.setAttribute("role","button"),s.setAttribute("aria-label",t),L.DomEvent.on(s,"mousedown dblclick",L.DomEvent.stopPropagation).on(s,"click",L.DomEvent.stop).on(s,"click",n,this).on(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var o=this._map,t="leaflet-disabled";L.DomUtil.removeClass(this._zoomInButton,t),L.DomUtil.removeClass(this._zoomOutButton,t),(this._disabled||o._zoom===o.getMinZoom())&&L.DomUtil.addClass(this._zoomOutButton,t),(this._disabled||o._zoom===o.getMaxZoom())&&L.DomUtil.addClass(this._zoomInButton,t)}}),L.Map.mergeOptions({zoomControl:!0}),L.Map.addInitHook((function(){this.options.zoomControl&&(this.zoomControl=new L.Control.Zoom,this.addControl(this.zoomControl))})),L.control.zoom=function(o){return new L.Control.Zoom(o)};