L.Polygon=L.Polyline.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,n,s,i,l,e,o,r,a,h=this._rings[0],g=h.length;if(!g)return null;for(e=o=r=0,t=0,n=g-1;t<g;n=t++)s=h[t],i=h[n],l=s.y*i.x-i.y*s.x,o+=(s.x+i.x)*l,r+=(s.y+i.y)*l,e+=3*l;return a=0===e?h[0]:[o/e,r/e],this._map.layerPointToLatLng(a)},_convertLatLngs:function(t){var n=L.Polyline.prototype._convertLatLngs.call(this,t),s=n.length;return s>=2&&n[0]instanceof L.LatLng&&n[0].equals(n[s-1])&&n.pop(),n},_setLatLngs:function(t){L.Polyline.prototype._setLatLngs.call(this,t),L.Polyline._flat(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return L.Polyline._flat(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,n=this.options.weight,s=new L.Point(n,n);if(t=new L.Bounds(t.min.subtract(s),t.max.add(s)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var i,l=0,e=this._rings.length;l<e;l++)(i=L.PolyUtil.clipPolygon(this._rings[l],t,!0)).length&&this._parts.push(i)},_updatePath:function(){this._renderer._updatePoly(this,!0)}}),L.polygon=function(t,n){return new L.Polygon(t,n)};