L.Map.mergeOptions({doubleClickZoom:!0}),L.Map.DoubleClickZoom=L.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var i=this._map,e=i.getZoom(),l=i.options.zoomDelta,n=o.originalEvent.shiftKey?e-l:e+l;"center"===i.options.doubleClickZoom?i.setZoom(n):i.setZoomAround(o.containerPoint,n)}}),L.Map.addInitHook("addHandler","doubleClickZoom",L.Map.DoubleClickZoom);