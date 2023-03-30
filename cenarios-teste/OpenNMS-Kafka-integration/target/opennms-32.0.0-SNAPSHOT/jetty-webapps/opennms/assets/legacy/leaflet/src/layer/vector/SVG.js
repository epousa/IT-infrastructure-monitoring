L.SVG=L.Renderer.extend({getEvents:function(){var t=L.Renderer.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=L.SVG.create("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=L.SVG.create("g"),this._container.appendChild(this._rootGroup)},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){L.Renderer.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),L.DomUtil.setPosition(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=L.SVG.create("path");t.options.className&&L.DomUtil.addClass(e,t.options.className),t.options.interactive&&L.DomUtil.addClass(e,"leaflet-interactive"),this._updateStyle(t),this._layers[L.stamp(t)]=t},_addPath:function(t){this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){L.DomUtil.remove(t._path),t.removeInteractiveTarget(t._path),delete this._layers[L.stamp(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,L.SVG.pointsToPath(t._parts,e))},_updateCircle:function(t){var e=t._point,i=t._radius,o="a"+i+","+(t._radiusY||i)+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+2*-i+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){L.DomUtil.toFront(t._path)},_bringToBack:function(t){L.DomUtil.toBack(t._path)}}),L.extend(L.SVG,{create:function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},pointsToPath:function(t,e){var i,o,r,s,n,a,u="";for(i=0,r=t.length;i<r;i++){for(o=0,s=(n=t[i]).length;o<s;o++)u+=(o?"L":"M")+(a=n[o]).x+" "+a.y;u+=e?L.Browser.svg?"z":"x":""}return u||"M0 0"}}),L.Browser.svg=!(!document.createElementNS||!L.SVG.create("svg").createSVGRect),L.svg=function(t){return L.Browser.svg||L.Browser.vml?new L.SVG(t):null};