L.Browser.vml=!L.Browser.svg&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&"object"==typeof e.adj}catch(t){return!1}}(),L.SVG.include(L.Browser.vml?{_initContainer:function(){this._container=L.DomUtil.create("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(L.Renderer.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=L.SVG.create("shape");L.DomUtil.addClass(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=L.SVG.create("path"),e.appendChild(t._path),this._updateStyle(t)},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;L.DomUtil.remove(e),t.removeInteractiveTarget(e)},_updateStyle:function(t){var e=t._stroke,r=t._fill,a=t.options,n=t._container;n.stroked=!!a.stroke,n.filled=!!a.fill,a.stroke?(e||(e=t._stroke=L.SVG.create("stroke")),n.appendChild(e),e.weight=a.weight+"px",e.color=a.color,e.opacity=a.opacity,a.dashArray?e.dashStyle=L.Util.isArray(a.dashArray)?a.dashArray.join(" "):a.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=a.lineCap.replace("butt","flat"),e.joinstyle=a.lineJoin):e&&(n.removeChild(e),t._stroke=null),a.fill?(r||(r=t._fill=L.SVG.create("fill")),n.appendChild(r),r.color=a.fillColor||a.color,r.opacity=a.fillOpacity):r&&(n.removeChild(r),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),r=Math.round(t._radius),a=Math.round(t._radiusY||r);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+r+","+a+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){L.DomUtil.toFront(t._container)},_bringToBack:function(t){L.DomUtil.toBack(t._container)}}:{}),L.Browser.vml&&(L.SVG.create=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}());