OpenLayers.Control.Split=OpenLayers.Class(OpenLayers.Control,{EVENT_TYPES:["beforesplit","split","aftersplit"],layer:null,source:null,sourceOptions:null,tolerance:null,edge:!0,deferDelete:!1,mutual:!0,targetFilter:null,sourceFilter:null,handler:null,initialize:function(e){Array.prototype.push.apply(this.EVENT_TYPES,OpenLayers.Control.prototype.EVENT_TYPES),OpenLayers.Control.prototype.initialize.apply(this,[e]),this.options=e||{},this.options.source&&this.setSource(this.options.source)},setSource:function(e){this.active?(this.deactivate(),this.handler&&(this.handler.destroy(),delete this.handler),this.source=e,this.activate()):this.source=e},activate:function(){var e=OpenLayers.Control.prototype.activate.call(this);return e&&(this.source?this.source.events&&this.source.events.on({sketchcomplete:this.onSketchComplete,afterfeaturemodified:this.afterFeatureModified,scope:this}):(this.handler||(this.handler=new OpenLayers.Handler.Path(this,{done:function(e){this.onSketchComplete({feature:new OpenLayers.Feature.Vector(e)})}},{layerOptions:this.sourceOptions})),this.handler.activate())),e},deactivate:function(){var e=OpenLayers.Control.prototype.deactivate.call(this);return e&&this.source&&this.source.events&&this.layer.events.un({sketchcomplete:this.onSketchComplete,afterfeaturemodified:this.afterFeatureModified,scope:this}),e},onSketchComplete:function(e){return this.feature=null,!this.considerSplit(e.feature)},afterFeatureModified:function(e){if(e.modified){var t=e.feature;(t.geometry instanceof OpenLayers.Geometry.LineString||t.geometry instanceof OpenLayers.Geometry.MultiLineString)&&(this.feature=e.feature,this.considerSplit(e.feature))}},removeByGeometry:function(e,t){for(var r=0,s=e.length;r<s;++r)if(e[r].geometry===t){e.splice(r,1);break}},isEligible:function(e){return e.state!==OpenLayers.State.DELETE&&(e.geometry instanceof OpenLayers.Geometry.LineString||e.geometry instanceof OpenLayers.Geometry.MultiLineString)&&this.feature!==e&&(!this.targetFilter||this.targetFilter.evaluate(e.attributes))},considerSplit:function(e){var t=!1,r=!1;if(!this.sourceFilter||this.sourceFilter.evaluate(e.attributes)){for(var s,i,a,n,o,l,h=this.layer&&this.layer.features||[],u=[],p=[],c=this.layer===this.source&&this.mutual,y={edge:this.edge,tolerance:this.tolerance,mutual:c},f=[e.geometry],g=0,d=h.length;g<d;++g)if(a=h[g],this.isEligible(a)){n=[a.geometry];for(var v=0;v<f.length;++v){o=f[v];for(var m=0;m<n.length;++m)s=n[m],o.getBounds().intersectsBounds(s.getBounds())&&(i=o.split(s,y))&&!1!==this.events.triggerEvent("beforesplit",{source:e,target:a})&&(c&&((l=i[0]).length>1&&(l.unshift(v,1),Array.prototype.splice.apply(f,l),v+=l.length-3),i=i[1]),i.length>1&&(i.unshift(m,1),Array.prototype.splice.apply(n,i),m+=i.length-3))}n&&n.length>1&&(this.geomsToFeatures(a,n),this.events.triggerEvent("split",{original:a,features:n}),Array.prototype.push.apply(u,n),p.push(a),r=!0)}if(f&&f.length>1&&(this.geomsToFeatures(e,f),this.events.triggerEvent("split",{original:e,features:f}),Array.prototype.push.apply(u,f),p.push(e),t=!0),t||r){if(this.deferDelete){var S,L=[];for(g=0,d=p.length;g<d;++g)(S=p[g]).state===OpenLayers.State.INSERT?L.push(S):(S.state=OpenLayers.State.DELETE,this.layer.drawFeature(S));this.layer.destroyFeatures(L,{silent:!0});for(g=0,d=u.length;g<d;++g)u[g].state=OpenLayers.State.INSERT}else this.layer.destroyFeatures(p,{silent:!0});this.layer.addFeatures(u,{silent:!0}),this.events.triggerEvent("aftersplit",{source:e,features:u})}}return t},geomsToFeatures:function(e,t){var r,s=e.clone();delete s.geometry;for(var i=0,a=t.length;i<a;++i)(r=s.clone()).geometry=t[i],r.state=OpenLayers.State.INSERT,t[i]=r},destroy:function(){this.active&&this.deactivate(),OpenLayers.Control.prototype.destroy.call(this)},CLASS_NAME:"OpenLayers.Control.Split"});