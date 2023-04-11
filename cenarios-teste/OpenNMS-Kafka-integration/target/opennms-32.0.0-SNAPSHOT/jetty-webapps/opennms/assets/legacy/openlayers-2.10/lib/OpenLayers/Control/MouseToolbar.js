OpenLayers.Control.MouseToolbar=OpenLayers.Class(OpenLayers.Control.MouseDefaults,{mode:null,buttons:null,direction:"vertical",buttonClicked:null,initialize:function(t,e){OpenLayers.Control.prototype.initialize.apply(this,arguments),this.position=new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X,OpenLayers.Control.MouseToolbar.Y),t&&(this.position=t),e&&(this.direction=e),this.measureDivs=[]},destroy:function(){for(var t in this.buttons){var e=this.buttons[t];e.map=null,e.events.destroy()}OpenLayers.Control.MouseDefaults.prototype.destroy.apply(this,arguments)},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments),OpenLayers.Control.MouseDefaults.prototype.draw.apply(this,arguments),this.buttons={};var t=new OpenLayers.Size(28,28),e=new OpenLayers.Pixel(OpenLayers.Control.MouseToolbar.X,0);return this._addButton("zoombox","drag-rectangle-off.png","drag-rectangle-on.png",e,t,"Shift->Drag to zoom to area"),e=e.add("vertical"==this.direction?0:t.w,"vertical"==this.direction?t.h:0),this._addButton("pan","panning-hand-off.png","panning-hand-on.png",e,t,"Drag the map to pan."),e=e.add("vertical"==this.direction?0:t.w,"vertical"==this.direction?t.h:0),this.switchModeTo("pan"),this.div},_addButton:function(t,e,s,o,i,a){var r=OpenLayers.Util.getImagesLocation()+e,n=OpenLayers.Util.getImagesLocation()+s,h=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MouseToolbar_"+t,o,i,r,"absolute");return this.div.appendChild(h),h.imgLocation=r,h.activeImgLocation=n,h.events=new OpenLayers.Events(this,h,null,!0),h.events.on({mousedown:this.buttonDown,mouseup:this.buttonUp,dblclick:OpenLayers.Event.stop,scope:this}),h.action=t,h.title=a,h.alt=a,h.map=this.map,this.buttons[t]=h,h},buttonDown:function(t){OpenLayers.Event.isLeftClick(t)&&(this.buttonClicked=t.element.action,OpenLayers.Event.stop(t))},buttonUp:function(t){OpenLayers.Event.isLeftClick(t)&&null!=this.buttonClicked&&(this.buttonClicked==t.element.action&&this.switchModeTo(t.element.action),OpenLayers.Event.stop(t),this.buttonClicked=null)},defaultDblClick:function(t){this.switchModeTo("pan"),this.performedDrag=!1;var e=this.map.getLonLatFromViewPortPx(t.xy);return this.map.setCenter(e,this.map.zoom+1),OpenLayers.Event.stop(t),!1},defaultMouseDown:function(t){if(OpenLayers.Event.isLeftClick(t)){switch(this.mouseDragStart=t.xy.clone(),this.performedDrag=!1,this.startViaKeyboard=!1,t.shiftKey&&"zoombox"!=this.mode?(this.switchModeTo("zoombox"),this.startViaKeyboard=!0):t.altKey&&"measure"!=this.mode?this.switchModeTo("measure"):this.mode||this.switchModeTo("pan"),this.mode){case"zoombox":this.map.div.style.cursor="crosshair",this.zoomBox=OpenLayers.Util.createDiv("zoomBox",this.mouseDragStart,null,null,"absolute","2px solid red"),this.zoomBox.style.backgroundColor="white",this.zoomBox.style.filter="alpha(opacity=50)",this.zoomBox.style.opacity="0.50",this.zoomBox.style.fontSize="1px",this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE.Popup-1,this.map.viewPortDiv.appendChild(this.zoomBox),this.performedDrag=!0;break;case"measure":var e="";if(this.measureStart){var s=this.map.getLonLatFromViewPortPx(this.mouseDragStart);e=OpenLayers.Util.distVincenty(this.measureStart,s),e=Math.round(100*e)/100,e+="km",this.measureStartBox=this.measureBox}this.measureStart=this.map.getLonLatFromViewPortPx(this.mouseDragStart),this.measureBox=OpenLayers.Util.createDiv(null,this.mouseDragStart.add(-2-parseInt(this.map.layerContainerDiv.style.left),-2-parseInt(this.map.layerContainerDiv.style.top)),null,null,"absolute"),this.measureBox.style.width="4px",this.measureBox.style.height="4px",this.measureBox.style.fontSize="1px",this.measureBox.style.backgroundColor="red",this.measureBox.style.zIndex=this.map.Z_INDEX_BASE.Popup-1,this.map.layerContainerDiv.appendChild(this.measureBox),e&&(this.measureBoxDistance=OpenLayers.Util.createDiv(null,this.mouseDragStart.add(-2-parseInt(this.map.layerContainerDiv.style.left),2-parseInt(this.map.layerContainerDiv.style.top)),null,null,"absolute"),this.measureBoxDistance.innerHTML=e,this.measureBoxDistance.style.zIndex=this.map.Z_INDEX_BASE.Popup-1,this.map.layerContainerDiv.appendChild(this.measureBoxDistance),this.measureDivs.push(this.measureBoxDistance)),this.measureBox.style.zIndex=this.map.Z_INDEX_BASE.Popup-1,this.map.layerContainerDiv.appendChild(this.measureBox),this.measureDivs.push(this.measureBox);break;default:this.map.div.style.cursor="move"}document.onselectstart=OpenLayers.Function.False,OpenLayers.Event.stop(t)}},switchModeTo:function(t){if(t!=this.mode){if(this.mode&&this.buttons[this.mode]&&OpenLayers.Util.modifyAlphaImageDiv(this.buttons[this.mode],null,null,null,this.buttons[this.mode].imgLocation),"measure"==this.mode&&"measure"!=t){for(var e=0,s=this.measureDivs.length;e<s;e++)this.measureDivs[e]&&this.map.layerContainerDiv.removeChild(this.measureDivs[e]);this.measureDivs=[],this.measureStart=null}if(this.mode=t,this.buttons[t]&&OpenLayers.Util.modifyAlphaImageDiv(this.buttons[t],null,null,null,this.buttons[t].activeImgLocation),"zoombox"===this.mode)this.map.div.style.cursor="crosshair";else this.map.div.style.cursor=""}},leaveMode:function(){this.switchModeTo("pan")},defaultMouseMove:function(t){if(null!=this.mouseDragStart){if("zoombox"===this.mode){var e=Math.abs(this.mouseDragStart.x-t.xy.x),s=Math.abs(this.mouseDragStart.y-t.xy.y);this.zoomBox.style.width=Math.max(1,e)+"px",this.zoomBox.style.height=Math.max(1,s)+"px",t.xy.x<this.mouseDragStart.x&&(this.zoomBox.style.left=t.xy.x+"px"),t.xy.y<this.mouseDragStart.y&&(this.zoomBox.style.top=t.xy.y+"px")}else{e=this.mouseDragStart.x-t.xy.x,s=this.mouseDragStart.y-t.xy.y;var o=this.map.getSize(),i=new OpenLayers.Pixel(o.w/2+e,o.h/2+s),a=this.map.getLonLatFromViewPortPx(i);this.map.setCenter(a,null,!0),this.mouseDragStart=t.xy.clone()}this.performedDrag=!0}},defaultMouseUp:function(t){if(OpenLayers.Event.isLeftClick(t)){switch(this.mode){case"zoombox":this.zoomBoxEnd(t),this.startViaKeyboard&&this.leaveMode();break;case"pan":this.performedDrag&&this.map.setCenter(this.map.center)}document.onselectstart=null,this.mouseDragStart=null,this.map.div.style.cursor="default"}},defaultMouseOut:function(t){null!=this.mouseDragStart&&OpenLayers.Util.mouseLeft(t,this.map.div)&&(this.zoomBox&&(this.removeZoomBox(),this.startViaKeyboard&&this.leaveMode()),this.mouseDragStart=null,this.map.div.style.cursor="default")},defaultClick:function(t){if(this.performedDrag)return this.performedDrag=!1,!1},CLASS_NAME:"OpenLayers.Control.MouseToolbar"}),OpenLayers.Control.MouseToolbar.X=6,OpenLayers.Control.MouseToolbar.Y=300;