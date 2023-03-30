L.PosAnimation=L.Evented.extend({run:function(t,i,s,e){this.stop(),this._el=t,this._inProgress=!0,this._duration=s||.25,this._easeOutPower=1/Math.max(e||.5,.2),this._startPos=L.DomUtil.getPosition(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=L.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,s=1e3*this._duration;i<s?this._runFrame(this._easeOut(i/s),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var s=this._startPos.add(this._offset.multiplyBy(t));i&&s._round(),L.DomUtil.setPosition(this._el,s),this.fire("step")},_complete:function(){L.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}});