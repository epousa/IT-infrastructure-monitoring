OpenLayers.Control.Pan=OpenLayers.Class(OpenLayers.Control,{slideFactor:50,direction:null,type:OpenLayers.Control.TYPE_BUTTON,initialize:function(n,e){this.direction=n,this.CLASS_NAME+=this.direction,OpenLayers.Control.prototype.initialize.apply(this,[e])},trigger:function(){switch(this.direction){case OpenLayers.Control.Pan.NORTH:this.map.pan(0,-this.slideFactor);break;case OpenLayers.Control.Pan.SOUTH:this.map.pan(0,this.slideFactor);break;case OpenLayers.Control.Pan.WEST:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Control.Pan.EAST:this.map.pan(this.slideFactor,0)}},CLASS_NAME:"OpenLayers.Control.Pan"}),OpenLayers.Control.Pan.NORTH="North",OpenLayers.Control.Pan.SOUTH="South",OpenLayers.Control.Pan.EAST="East",OpenLayers.Control.Pan.WEST="West";