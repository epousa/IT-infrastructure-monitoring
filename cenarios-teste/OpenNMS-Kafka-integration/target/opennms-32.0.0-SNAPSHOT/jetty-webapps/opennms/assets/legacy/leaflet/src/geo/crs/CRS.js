L.CRS={latLngToPoint:function(t,n){var r=this.projection.project(t),o=this.scale(n);return this.transformation._transform(r,o)},pointToLatLng:function(t,n){var r=this.scale(n),o=this.transformation.untransform(t,r);return this.projection.unproject(o)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var n=this.projection.bounds,r=this.scale(t),o=this.transformation.transform(n.min,r),i=this.transformation.transform(n.max,r);return L.bounds(o,i)},infinite:!1,wrapLatLng:function(t){var n=this.wrapLng?L.Util.wrapNum(t.lng,this.wrapLng,!0):t.lng,r=this.wrapLat?L.Util.wrapNum(t.lat,this.wrapLat,!0):t.lat,o=t.alt;return L.latLng(r,n,o)}};