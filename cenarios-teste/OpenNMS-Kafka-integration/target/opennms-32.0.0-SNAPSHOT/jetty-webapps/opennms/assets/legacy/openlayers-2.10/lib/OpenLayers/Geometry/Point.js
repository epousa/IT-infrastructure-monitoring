OpenLayers.Geometry.Point=OpenLayers.Class(OpenLayers.Geometry,{x:null,y:null,initialize:function(t,s){OpenLayers.Geometry.prototype.initialize.apply(this,arguments),this.x=parseFloat(t),this.y=parseFloat(s)},clone:function(t){return null==t&&(t=new OpenLayers.Geometry.Point(this.x,this.y)),OpenLayers.Util.applyDefaults(t,this),t},calculateBounds:function(){this.bounds=new OpenLayers.Bounds(this.x,this.y,this.x,this.y)},distanceTo:function(t,s){var i,e,n,r,a,o,h=!(s&&!1===s.edge)&&s&&s.details;return t instanceof OpenLayers.Geometry.Point?(e=this.x,n=this.y,r=t.x,a=t.y,i=Math.sqrt(Math.pow(e-r,2)+Math.pow(n-a,2)),o=h?{x0:e,y0:n,x1:r,y1:a,distance:i}:i):(o=t.distanceTo(this,s),h&&(o={x0:o.x1,y0:o.y1,x1:o.x0,y1:o.y0,distance:o.distance})),o},equals:function(t){var s=!1;return null!=t&&(s=this.x==t.x&&this.y==t.y||isNaN(this.x)&&isNaN(this.y)&&isNaN(t.x)&&isNaN(t.y)),s},toShortString:function(){return this.x+", "+this.y},move:function(t,s){this.x=this.x+t,this.y=this.y+s,this.clearBounds()},rotate:function(t,s){t*=Math.PI/180;var i=this.distanceTo(s),e=t+Math.atan2(this.y-s.y,this.x-s.x);this.x=s.x+i*Math.cos(e),this.y=s.y+i*Math.sin(e),this.clearBounds()},getCentroid:function(){return new OpenLayers.Geometry.Point(this.x,this.y)},resize:function(t,s,i){return i=null==i?1:i,this.x=s.x+t*i*(this.x-s.x),this.y=s.y+t*(this.y-s.y),this.clearBounds(),this},intersects:function(t){return"OpenLayers.Geometry.Point"==t.CLASS_NAME?this.equals(t):t.intersects(this)},transform:function(t,s){return t&&s&&(OpenLayers.Projection.transform(this,t,s),this.bounds=null),this},getVertices:function(t){return[this]},CLASS_NAME:"OpenLayers.Geometry.Point"});