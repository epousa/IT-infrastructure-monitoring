OpenLayers.Layer.TileCache=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,format:"image/png",serverResolutions:null,initialize:function(e,t,i,n){this.layername=i,OpenLayers.Layer.Grid.prototype.initialize.apply(this,[e,t,{},n]),this.extension=this.format.split("/")[1].toLowerCase(),this.extension="jpg"==this.extension?"jpeg":this.extension},clone:function(e){return null==e&&(e=new OpenLayers.Layer.TileCache(this.name,this.url,this.layername,this.getOptions())),e=OpenLayers.Layer.Grid.prototype.clone.apply(this,[e])},getURL:function(e){var t=this.map.getResolution(),i=this.maxExtent,n=this.tileSize,s=Math.round((e.left-i.left)/(t*n.w)),r=Math.round((e.bottom-i.bottom)/(t*n.h)),a=null!=this.serverResolutions?OpenLayers.Util.indexOf(this.serverResolutions,t):this.map.getZoom();function o(e,t){e=String(e);for(var i=[],n=0;n<t;++n)i.push("0");return i.join("").substring(0,t-e.length)+e}var l=[this.layername,o(a,2),o(parseInt(s/1e6),3),o(parseInt(s/1e3)%1e3,3),o(parseInt(s)%1e3,3),o(parseInt(r/1e6),3),o(parseInt(r/1e3)%1e3,3),o(parseInt(r)%1e3,3)+"."+this.extension].join("/"),h=this.url;return h instanceof Array&&(h=this.selectUrl(l,h)),(h="/"==h.charAt(h.length-1)?h:h+"/")+l},addTile:function(e,t){var i=this.getURL(e);return new OpenLayers.Tile.Image(this,t,e,i,this.tileSize)},CLASS_NAME:"OpenLayers.Layer.TileCache"});