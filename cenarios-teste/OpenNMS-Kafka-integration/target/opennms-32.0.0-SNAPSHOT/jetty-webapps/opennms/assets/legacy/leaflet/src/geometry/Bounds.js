L.Bounds=function(n,t){if(n)for(var i=t?[n,t]:n,s=0,x=i.length;s<x;s++)this.extend(i[s])},L.Bounds.prototype={extend:function(n){return n=L.point(n),this.min||this.max?(this.min.x=Math.min(n.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(n.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)):(this.min=n.clone(),this.max=n.clone()),this},getCenter:function(n){return new L.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return new L.Point(this.min.x,this.max.y)},getTopRight:function(){return new L.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var t,i;return(n="number"==typeof n[0]||n instanceof L.Point?L.point(n):L.bounds(n))instanceof L.Bounds?(t=n.min,i=n.max):t=i=n,t.x>=this.min.x&&i.x<=this.max.x&&t.y>=this.min.y&&i.y<=this.max.y},intersects:function(n){n=L.bounds(n);var t=this.min,i=this.max,s=n.min,x=n.max,m=x.x>=t.x&&s.x<=i.x,h=x.y>=t.y&&s.y<=i.y;return m&&h},overlaps:function(n){n=L.bounds(n);var t=this.min,i=this.max,s=n.min,x=n.max,m=x.x>t.x&&s.x<i.x,h=x.y>t.y&&s.y<i.y;return m&&h},isValid:function(){return!(!this.min||!this.max)}},L.bounds=function(n,t){return!n||n instanceof L.Bounds?n:new L.Bounds(n,t)};