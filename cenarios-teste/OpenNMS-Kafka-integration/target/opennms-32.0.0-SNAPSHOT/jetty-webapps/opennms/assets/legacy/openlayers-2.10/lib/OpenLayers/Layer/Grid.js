OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,grid:null,singleTile:!1,ratio:1.5,buffer:2,numLoadingTiles:0,initialize:function(t,i,e,s){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments),this.events.addEventType("tileloaded"),this.grid=[]},destroy:function(){this.clearGrid(),this.grid=null,this.tileSize=null,OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments)},clearGrid:function(){if(this.grid){for(var t=0,i=this.grid.length;t<i;t++)for(var e=this.grid[t],s=0,n=e.length;s<n;s++){var o=e[s];this.removeTileMonitoringHooks(o),o.destroy()}this.grid=[]}},clone:function(t){return null==t&&(t=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.getOptions())),t=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[t]),null!=this.tileSize&&(t.tileSize=this.tileSize.clone()),t.grid=[],t},moveTo:function(t,i,e){if(OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments),null!=(t=t||this.map.getExtent())){var s=!this.grid.length||i,n=this.getTilesBounds();this.singleTile?(s||!e&&!n.containsBounds(t))&&this.initSingleTile(t):s||!n.containsBounds(t,!0)?this.initGriddedTiles(t):this.moveGriddedTiles(t)}},setTileSize:function(t){this.singleTile&&((t=this.map.getSize()).h=parseInt(t.h*this.ratio),t.w=parseInt(t.w*this.ratio)),OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[t])},getGridBounds:function(){return OpenLayers.Console.warn("The getGridBounds() function is deprecated. It will be removed in 3.0. Please use getTilesBounds() instead."),this.getTilesBounds()},getTilesBounds:function(){var t=null;if(this.grid.length){var i=this.grid.length-1,e=this.grid[i][0],s=this.grid[0].length-1,n=this.grid[0][s];t=new OpenLayers.Bounds(e.bounds.left,e.bounds.bottom,n.bounds.right,n.bounds.top)}return t},initSingleTile:function(t){var i=t.getCenterLonLat(),e=t.getWidth()*this.ratio,s=t.getHeight()*this.ratio,n=new OpenLayers.Bounds(i.lon-e/2,i.lat-s/2,i.lon+e/2,i.lat+s/2),o=new OpenLayers.LonLat(n.left,n.top),r=this.map.getLayerPxFromLonLat(o);this.grid.length||(this.grid[0]=[]);var l=this.grid[0][0];l?l.moveTo(n,r):(l=this.addTile(n,r),this.addTileMonitoringHooks(l),l.draw(),this.grid[0][0]=l),this.removeExcessTiles(1,1)},calculateGridLayout:function(t,i,e){var s=e*this.tileSize.w,n=e*this.tileSize.h,o=t.left-i.left,r=Math.floor(o/s)-this.buffer,l=-(o/s-r)*this.tileSize.w,h=i.left+r*s,a=t.top-(i.bottom+n),d=Math.ceil(a/n)+this.buffer,g=-(d-a/n)*this.tileSize.h;return{tilelon:s,tilelat:n,tileoffsetlon:h,tileoffsetlat:i.bottom+d*n,tileoffsetx:l,tileoffsety:g}},initGriddedTiles:function(t){var i=this.map.getSize(),e=Math.ceil(i.h/this.tileSize.h)+Math.max(1,2*this.buffer),s=Math.ceil(i.w/this.tileSize.w)+Math.max(1,2*this.buffer),n=this.getMaxExtent(),o=this.map.getResolution(),r=this.calculateGridLayout(t,n,o),l=Math.round(r.tileoffsetx),h=Math.round(r.tileoffsety),a=r.tileoffsetlon,d=r.tileoffsetlat,g=r.tilelon,u=r.tilelat;this.origin=new OpenLayers.Pixel(l,h);var f=l,p=a,v=0,y=parseInt(this.map.layerContainerDiv.style.left),T=parseInt(this.map.layerContainerDiv.style.top);do{var L=this.grid[v++];L||(L=[],this.grid.push(L)),a=p,l=f;var c=0;do{var m=new OpenLayers.Bounds(a,d,a+g,d+u),S=l;S-=y;var w=h;w-=T;var z=new OpenLayers.Pixel(S,w),b=L[c++];b?b.moveTo(m,z,!1):(b=this.addTile(m,z),this.addTileMonitoringHooks(b),L.push(b)),a+=g,l+=this.tileSize.w}while(a<=t.right+g*this.buffer||c<s);d-=u,h+=this.tileSize.h}while(d>=t.bottom-u*this.buffer||v<e);this.removeExcessTiles(v,c),this.spiralTileLoad()},getMaxExtent:function(){return this.maxExtent},spiralTileLoad:function(){for(var t=[],i=["right","down","left","up"],e=0,s=-1,n=OpenLayers.Util.indexOf(i,"right"),o=0;o<i.length;){var r=e,l=s;switch(i[n]){case"right":l++;break;case"down":r++;break;case"left":l--;break;case"up":r--}var h=null;r<this.grid.length&&r>=0&&l<this.grid[0].length&&l>=0&&(h=this.grid[r][l]),null==h||h.queued?(n=(n+1)%4,o++):(t.unshift(h),h.queued=!0,o=0,e=r,s=l)}for(var a=0,d=t.length;a<d;a++){(h=t[a]).draw(),h.queued=!1}},addTile:function(t,i){},addTileMonitoringHooks:function(t){t.onLoadStart=function(){0==this.numLoadingTiles&&this.events.triggerEvent("loadstart"),this.numLoadingTiles++},t.events.register("loadstart",this,t.onLoadStart),t.onLoadEnd=function(){this.numLoadingTiles--,this.events.triggerEvent("tileloaded"),0==this.numLoadingTiles&&this.events.triggerEvent("loadend")},t.events.register("loadend",this,t.onLoadEnd),t.events.register("unload",this,t.onLoadEnd)},removeTileMonitoringHooks:function(t){t.unload(),t.events.un({loadstart:t.onLoadStart,loadend:t.onLoadEnd,unload:t.onLoadEnd,scope:this})},moveGriddedTiles:function(t){for(var i=this.buffer||1;;){var e=this.grid[0][0].position,s=this.map.getViewPortPxFromLayerPx(e);if(s.x>-this.tileSize.w*(i-1))this.shiftColumn(!0);else if(s.x<-this.tileSize.w*i)this.shiftColumn(!1);else if(s.y>-this.tileSize.h*(i-1))this.shiftRow(!0);else{if(!(s.y<-this.tileSize.h*i))break;this.shiftRow(!1)}}},shiftRow:function(t){for(var i=t?0:this.grid.length-1,e=this.grid,s=e[i],n=this.map.getResolution(),o=t?-this.tileSize.h:this.tileSize.h,r=n*-o,l=t?e.pop():e.shift(),h=0,a=s.length;h<a;h++){var d=s[h],g=d.bounds.clone(),u=d.position.clone();g.bottom=g.bottom+r,g.top=g.top+r,u.y=u.y+o,l[h].moveTo(g,u)}t?e.unshift(l):e.push(l)},shiftColumn:function(t){for(var i=t?-this.tileSize.w:this.tileSize.w,e=this.map.getResolution()*i,s=0,n=this.grid.length;s<n;s++){var o=this.grid[s],r=o[t?0:o.length-1],l=r.bounds.clone(),h=r.position.clone();l.left=l.left+e,l.right=l.right+e,h.x=h.x+i;var a=t?this.grid[s].pop():this.grid[s].shift();a.moveTo(l,h),t?o.unshift(a):o.push(a)}},removeExcessTiles:function(t,i){for(;this.grid.length>t;)for(var e=0,s=(o=this.grid.pop()).length;e<s;e++){var n=o[e];this.removeTileMonitoringHooks(n),n.destroy()}for(;this.grid[0].length>i;)for(e=0,s=this.grid.length;e<s;e++){var o;n=(o=this.grid[e]).pop();this.removeTileMonitoringHooks(n),n.destroy()}},onMapResize:function(){this.singleTile&&(this.clearGrid(),this.setTileSize())},getTileBounds:function(t){var i=this.maxExtent,e=this.getResolution(),s=e*this.tileSize.w,n=e*this.tileSize.h,o=this.getLonLatFromViewPortPx(t),r=i.left+s*Math.floor((o.lon-i.left)/s),l=i.bottom+n*Math.floor((o.lat-i.bottom)/n);return new OpenLayers.Bounds(r,l,r+s,l+n)},CLASS_NAME:"OpenLayers.Layer.Grid"});