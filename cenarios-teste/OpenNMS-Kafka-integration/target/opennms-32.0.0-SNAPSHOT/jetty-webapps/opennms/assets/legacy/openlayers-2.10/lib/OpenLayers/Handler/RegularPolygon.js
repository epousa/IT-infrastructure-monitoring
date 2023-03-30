OpenLayers.Handler.RegularPolygon=OpenLayers.Class(OpenLayers.Handler.Drag,{sides:4,radius:null,snapAngle:null,snapToggle:"shiftKey",layerOptions:null,persist:!1,irregular:!1,angle:null,fixedRadius:!1,feature:null,layer:null,origin:null,initialize:function(e,t,i){i&&i.layerOptions&&i.layerOptions.styleMap||(this.style=OpenLayers.Util.extend(OpenLayers.Feature.Vector.style.default,{})),OpenLayers.Handler.prototype.initialize.apply(this,[e,t,i]),this.options=i||{}},setOptions:function(e){OpenLayers.Util.extend(this.options,e),OpenLayers.Util.extend(this,e)},activate:function(){var e=!1;if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var t=OpenLayers.Util.extend({displayInLayerSwitcher:!1,calculateInRange:OpenLayers.Function.True},this.layerOptions);this.layer=new OpenLayers.Layer.Vector(this.CLASS_NAME,t),this.map.addLayer(this.layer),e=!0}return e},deactivate:function(){var e=!1;return OpenLayers.Handler.Drag.prototype.deactivate.apply(this,arguments)&&(this.dragging&&this.cancel(),null!=this.layer.map&&(this.layer.destroy(!1),this.feature&&this.feature.destroy()),this.layer=null,this.feature=null,e=!0),e},down:function(e){this.fixedRadius=!!this.radius;var t=this.map.getLonLatFromPixel(e.xy);this.origin=new OpenLayers.Geometry.Point(t.lon,t.lat),this.fixedRadius&&!this.irregular||(this.radius=this.map.getResolution()),this.persist&&this.clear(),this.feature=new OpenLayers.Feature.Vector,this.createGeometry(),this.callback("create",[this.origin,this.feature]),this.layer.addFeatures([this.feature],{silent:!0}),this.layer.drawFeature(this.feature,this.style)},move:function(e){var t=this.map.getLonLatFromPixel(e.xy),i=new OpenLayers.Geometry.Point(t.lon,t.lat);if(this.irregular){var s=Math.sqrt(2)*Math.abs(i.y-this.origin.y)/2;this.radius=Math.max(this.map.getResolution()/2,s)}else this.fixedRadius?this.origin=i:(this.calculateAngle(i,e),this.radius=Math.max(this.map.getResolution()/2,i.distanceTo(this.origin)));if(this.modifyGeometry(),this.irregular){var a,r=i.x-this.origin.x,n=i.y-this.origin.y;a=0==n?r/(this.radius*Math.sqrt(2)):r/n,this.feature.geometry.resize(1,this.origin,a),this.feature.geometry.move(r/2,n/2)}this.layer.drawFeature(this.feature,this.style)},up:function(e){this.finalize(),this.start==this.last&&this.callback("done",[e.xy])},out:function(e){this.finalize()},createGeometry:function(){this.angle=Math.PI*(1/this.sides-.5),this.snapAngle&&(this.angle+=this.snapAngle*(Math.PI/180)),this.feature.geometry=OpenLayers.Geometry.Polygon.createRegularPolygon(this.origin,this.radius,this.sides,this.snapAngle)},modifyGeometry:function(){var e,t,i=this.feature.geometry.components[0];i.components.length!=this.sides+1&&(this.createGeometry(),i=this.feature.geometry.components[0]);for(var s=0;s<this.sides;++s)t=i.components[s],e=this.angle+2*s*Math.PI/this.sides,t.x=this.origin.x+this.radius*Math.cos(e),t.y=this.origin.y+this.radius*Math.sin(e),t.clearBounds()},calculateAngle:function(e,t){var i=Math.atan2(e.y-this.origin.y,e.x-this.origin.x);if(this.snapAngle&&this.snapToggle&&!t[this.snapToggle]){var s=Math.PI/180*this.snapAngle;this.angle=Math.round(i/s)*s}else this.angle=i},cancel:function(){this.callback("cancel",null),this.finalize()},finalize:function(){this.origin=null,this.radius=this.options.radius},clear:function(){this.layer&&(this.layer.renderer.clear(),this.layer.destroyFeatures())},callback:function(e,t){this.callbacks[e]&&this.callbacks[e].apply(this.control,[this.feature.geometry.clone()]),this.persist||"done"!=e&&"cancel"!=e||this.clear()},CLASS_NAME:"OpenLayers.Handler.RegularPolygon"});