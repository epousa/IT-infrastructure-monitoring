OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:!1,stopDown:!0,dragging:!1,last:null,start:null,oldOnselectstart:null,interval:0,timeoutId:null,documentDrag:!1,documentEvents:null,initialize:function(t,e,s){OpenLayers.Handler.prototype.initialize.apply(this,arguments)},down:function(t){},move:function(t){},up:function(t){},out:function(t){},mousedown:function(t){var e=!0;return this.dragging=!1,this.checkModifiers(t)&&OpenLayers.Event.isLeftClick(t)?(this.started=!0,this.start=t.xy,this.last=t.xy,OpenLayers.Element.addClass(this.map.viewPortDiv,"olDragDown"),this.down(t),this.callback("down",[t.xy]),OpenLayers.Event.stop(t),this.oldOnselectstart||(this.oldOnselectstart=document.onselectstart?document.onselectstart:OpenLayers.Function.True),document.onselectstart=OpenLayers.Function.False,e=!this.stopDown):(this.started=!1,this.start=null,this.last=null),e},mousemove:function(t){return!this.started||this.timeoutId||t.xy.x==this.last.x&&t.xy.y==this.last.y||(!0===this.documentDrag&&this.documentEvents&&(t.element===document?(this.adjustXY(t),this.setEvent(t)):this.destroyDocumentEvents()),this.interval>0&&(this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval)),this.dragging=!0,this.move(t),this.callback("move",[t.xy]),this.oldOnselectstart||(this.oldOnselectstart=document.onselectstart,document.onselectstart=OpenLayers.Function.False),this.last=this.evt.xy),!0},removeTimeout:function(){this.timeoutId=null},mouseup:function(t){if(this.started){!0===this.documentDrag&&this.documentEvents&&(this.adjustXY(t),this.destroyDocumentEvents());var e=this.start!=this.last;this.started=!1,this.dragging=!1,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown"),this.up(t),this.callback("up",[t.xy]),e&&this.callback("done",[t.xy]),document.onselectstart=this.oldOnselectstart}return!0},mouseout:function(t){if(this.started&&OpenLayers.Util.mouseLeft(t,this.map.div))if(!0===this.documentDrag)this.documentEvents=new OpenLayers.Events(this,document,null,null,{includeXY:!0}),this.documentEvents.on({mousemove:this.mousemove,mouseup:this.mouseup}),OpenLayers.Element.addClass(document.body,"olDragDown");else{var e=this.start!=this.last;this.started=!1,this.dragging=!1,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown"),this.out(t),this.callback("out",[]),e&&this.callback("done",[t.xy]),document.onselectstart&&(document.onselectstart=this.oldOnselectstart)}return!0},click:function(t){return this.start==this.last},activate:function(){var t=!1;return OpenLayers.Handler.prototype.activate.apply(this,arguments)&&(this.dragging=!1,t=!0),t},deactivate:function(){var t=!1;return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.started=!1,this.dragging=!1,this.start=null,this.last=null,t=!0,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown")),t},adjustXY:function(t){var e=OpenLayers.Util.pagePosition(this.map.div);t.xy.x-=e[0],t.xy.y-=e[1]},destroyDocumentEvents:function(){OpenLayers.Element.removeClass(document.body,"olDragDown"),this.documentEvents.destroy(),this.documentEvents=null},CLASS_NAME:"OpenLayers.Handler.Drag"});