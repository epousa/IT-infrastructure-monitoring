L.Rectangle=L.Polygon.extend({initialize:function(t,n){L.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),n)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=L.latLngBounds(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),L.rectangle=function(t,n){return new L.Rectangle(t,n)};