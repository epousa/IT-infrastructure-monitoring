OpenLayers.Control.EditingToolbar=OpenLayers.Class(OpenLayers.Control.Panel,{initialize:function(a,e){OpenLayers.Control.Panel.prototype.initialize.apply(this,[e]),this.addControls([new OpenLayers.Control.Navigation]);var r=[new OpenLayers.Control.DrawFeature(a,OpenLayers.Handler.Point,{displayClass:"olControlDrawFeaturePoint"}),new OpenLayers.Control.DrawFeature(a,OpenLayers.Handler.Path,{displayClass:"olControlDrawFeaturePath"}),new OpenLayers.Control.DrawFeature(a,OpenLayers.Handler.Polygon,{displayClass:"olControlDrawFeaturePolygon"})];this.addControls(r)},draw:function(){var a=OpenLayers.Control.Panel.prototype.draw.apply(this,arguments);return this.activateControl(this.controls[0]),a},CLASS_NAME:"OpenLayers.Control.EditingToolbar"});