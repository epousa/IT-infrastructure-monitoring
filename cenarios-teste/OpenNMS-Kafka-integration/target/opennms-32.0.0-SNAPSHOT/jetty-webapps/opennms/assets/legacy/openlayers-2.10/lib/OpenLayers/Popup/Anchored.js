OpenLayers.Popup.Anchored=OpenLayers.Class(OpenLayers.Popup,{relativePosition:null,keepInMap:!0,anchor:null,initialize:function(t,e,i,o,a,n,s){var p=[t,e,i,o,n,s];OpenLayers.Popup.prototype.initialize.apply(this,p),this.anchor=null!=a?a:{size:new OpenLayers.Size(0,0),offset:new OpenLayers.Pixel(0,0)}},destroy:function(){this.anchor=null,this.relativePosition=null,OpenLayers.Popup.prototype.destroy.apply(this,arguments)},show:function(){this.updatePosition(),OpenLayers.Popup.prototype.show.apply(this,arguments)},moveTo:function(t){var e=this.relativePosition;this.relativePosition=this.calculateRelativePosition(t);var i=this.calculateNewPx(t),o=new Array(i);OpenLayers.Popup.prototype.moveTo.apply(this,o),this.relativePosition!=e&&this.updateRelativePosition()},setSize:function(t){if(OpenLayers.Popup.prototype.setSize.apply(this,arguments),this.lonlat&&this.map){var e=this.map.getLayerPxFromLonLat(this.lonlat);this.moveTo(e)}},calculateRelativePosition:function(t){var e=this.map.getLonLatFromLayerPx(t),i=this.map.getExtent().determineQuadrant(e);return OpenLayers.Bounds.oppositeQuadrant(i)},updateRelativePosition:function(){},calculateNewPx:function(t){var e=t.offset(this.anchor.offset),i=this.size||this.contentSize,o="t"==this.relativePosition.charAt(0);e.y+=o?-(i.h+this.anchor.size.h):this.anchor.size.h;var a="l"==this.relativePosition.charAt(1);return e.x+=a?-(i.w+this.anchor.size.w):this.anchor.size.w,e},CLASS_NAME:"OpenLayers.Popup.Anchored"});