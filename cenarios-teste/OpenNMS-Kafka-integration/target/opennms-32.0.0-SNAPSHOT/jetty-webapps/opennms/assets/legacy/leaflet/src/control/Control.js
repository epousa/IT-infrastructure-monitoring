L.Control=L.Class.extend({options:{position:"topright"},initialize:function(t){L.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var o=this._map;return o&&o.removeControl(this),this.options.position=t,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var o=this._container=this.onAdd(t),n=this.getPosition(),i=t._controlCorners[n];return L.DomUtil.addClass(o,"leaflet-control"),-1!==n.indexOf("bottom")?i.insertBefore(o,i.firstChild):i.appendChild(o),this},remove:function(){return this._map?(L.DomUtil.remove(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),L.control=function(t){return new L.Control(t)},L.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},o="leaflet-",n=this._controlContainer=L.DomUtil.create("div",o+"control-container",this._container);function i(i,e){var r=o+i+" "+o+e;t[i+e]=L.DomUtil.create("div",r,n)}i("top","left"),i("top","right"),i("bottom","left"),i("bottom","right")},_clearControlPos:function(){L.DomUtil.remove(this._controlContainer)}});