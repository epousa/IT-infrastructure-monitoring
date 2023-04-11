OpenLayers.Control.MousePosition=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,element:null,prefix:"",separator:", ",suffix:"",numDigits:5,granularity:10,emptyString:null,lastXy:null,displayProjection:null,initialize:function(t){OpenLayers.Control.prototype.initialize.apply(this,arguments)},destroy:function(){this.deactivate(),OpenLayers.Control.prototype.destroy.apply(this,arguments)},activate:function(){return!!OpenLayers.Control.prototype.activate.apply(this,arguments)&&(this.map.events.register("mousemove",this,this.redraw),this.map.events.register("mouseout",this,this.reset),this.redraw(),!0)},deactivate:function(){return!!OpenLayers.Control.prototype.deactivate.apply(this,arguments)&&(this.map.events.unregister("mousemove",this,this.redraw),this.map.events.unregister("mouseout",this,this.reset),this.element.innerHTML="",!0)},draw:function(){return OpenLayers.Control.prototype.draw.apply(this,arguments),this.element||(this.div.left="",this.div.top="",this.element=this.div),this.div},redraw:function(t){var e;if(null!=t){if(null==this.lastXy||Math.abs(t.xy.x-this.lastXy.x)>this.granularity||Math.abs(t.xy.y-this.lastXy.y)>this.granularity)this.lastXy=t.xy;else if(e=this.map.getLonLatFromPixel(t.xy)){this.displayProjection&&e.transform(this.map.getProjectionObject(),this.displayProjection),this.lastXy=t.xy;var i=this.formatOutput(e);i!=this.element.innerHTML&&(this.element.innerHTML=i)}}else this.reset()},reset:function(t){null!=this.emptyString&&(this.element.innerHTML=this.emptyString)},formatOutput:function(t){var e=parseInt(this.numDigits);return this.prefix+t.lon.toFixed(e)+this.separator+t.lat.toFixed(e)+this.suffix},CLASS_NAME:"OpenLayers.Control.MousePosition"});