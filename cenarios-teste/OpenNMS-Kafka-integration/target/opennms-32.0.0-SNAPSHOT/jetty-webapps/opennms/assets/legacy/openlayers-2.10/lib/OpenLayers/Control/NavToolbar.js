OpenLayers.Control.NavToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(o){OpenLayers.Control.Panel.prototype.initialize.apply(this,[o]),this.addControls([new OpenLayers.Control.Navigation,new OpenLayers.Control.ZoomBox])},draw:function(){var o=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);return this.activateControl(this.controls[0]),o},CLASS_NAME:"OpenLayers.Control.NavToolbar"});