OpenLayers.Layer.Vector=OpenLayers.Class(OpenLayers.Layer,{EVENT_TYPES:["beforefeatureadded","beforefeaturesadded","featureadded","featuresadded","beforefeatureremoved","beforefeaturesremoved","featureremoved","featuresremoved","beforefeatureselected","featureselected","featureunselected","beforefeaturemodified","featuremodified","afterfeaturemodified","vertexmodified","sketchstarted","sketchmodified","sketchcomplete","refresh"],isBaseLayer:!1,isFixed:!1,isVector:!0,features:null,filter:null,selectedFeatures:null,unrenderedFeatures:null,reportError:!0,style:null,styleMap:null,strategies:null,protocol:null,renderers:["SVG","VML","Canvas"],renderer:null,rendererOptions:null,geometryType:null,drawn:!1,initialize:function(e,t){if(this.EVENT_TYPES=OpenLayers.Layer.Vector.prototype.EVENT_TYPES.concat(OpenLayers.Layer.prototype.EVENT_TYPES),OpenLayers.Layer.prototype.initialize.apply(this,arguments),this.renderer&&this.renderer.supported()||this.assignRenderer(),this.renderer&&this.renderer.supported()||(this.renderer=null,this.displayError()),this.styleMap||(this.styleMap=new OpenLayers.StyleMap),this.features=[],this.selectedFeatures=[],this.unrenderedFeatures={},this.strategies)for(var r=0,s=this.strategies.length;r<s;r++)this.strategies[r].setLayer(this)},destroy:function(){if(this.strategies){var e,t,r;for(t=0,r=this.strategies.length;t<r;t++)(e=this.strategies[t]).autoDestroy&&e.destroy();this.strategies=null}this.protocol&&(this.protocol.autoDestroy&&this.protocol.destroy(),this.protocol=null),this.destroyFeatures(),this.features=null,this.selectedFeatures=null,this.unrenderedFeatures=null,this.renderer&&this.renderer.destroy(),this.renderer=null,this.geometryType=null,this.drawn=null,OpenLayers.Layer.prototype.destroy.apply(this,arguments)},clone:function(e){null==e&&(e=new OpenLayers.Layer.Vector(this.name,this.getOptions())),e=OpenLayers.Layer.prototype.clone.apply(this,[e]);for(var t=this.features,r=t.length,s=new Array(r),i=0;i<r;++i)s[i]=t[i].clone();return e.features=s,e},refresh:function(e){this.calculateInRange()&&this.visibility&&this.events.triggerEvent("refresh",e)},assignRenderer:function(){for(var e=0,t=this.renderers.length;e<t;e++){var r=this.renderers[e],s="function"==typeof r?r:OpenLayers.Renderer[r];if(s&&s.prototype.supported()){this.renderer=new s(this.div,this.rendererOptions);break}}},displayError:function(){this.reportError&&OpenLayers.Console.userError(OpenLayers.i18n("browserNotSupported",{renderers:this.renderers.join("\n")}))},setMap:function(e){OpenLayers.Layer.prototype.setMap.apply(this,arguments),this.renderer?(this.renderer.map=this.map,this.renderer.setSize(this.map.getSize())):this.map.removeLayer(this)},afterAdd:function(){var e,t,r;if(this.strategies)for(t=0,r=this.strategies.length;t<r;t++)(e=this.strategies[t]).autoActivate&&e.activate()},removeMap:function(e){var t,r,s;if(this.drawn=!1,this.strategies)for(r=0,s=this.strategies.length;r<s;r++)(t=this.strategies[r]).autoActivate&&t.deactivate()},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize.apply(this,arguments),this.renderer.setSize(this.map.getSize())},moveTo:function(e,t,r){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);var s=!0;if(!r){this.renderer.root.style.visibility="hidden",this.div.style.left=-parseInt(this.map.layerContainerDiv.style.left)+"px",this.div.style.top=-parseInt(this.map.layerContainerDiv.style.top)+"px";var i=this.map.getExtent();if(s=this.renderer.setExtent(i,t),this.renderer.root.style.visibility="visible",-1!=navigator.userAgent.toLowerCase().indexOf("gecko")&&(this.div.scrollLeft=this.div.scrollLeft),!t&&s)for(var n in this.unrenderedFeatures){var a=this.unrenderedFeatures[n];this.drawFeature(a)}}if(!this.drawn||t||!s){this.drawn=!0;n=0;for(var o=this.features.length;n<o;n++)this.renderer.locked=n!==o-1,a=this.features[n],this.drawFeature(a)}},display:function(e){OpenLayers.Layer.prototype.display.apply(this,arguments);var t=this.div.style.display;t!=this.renderer.root.style.display&&(this.renderer.root.style.display=t)},addFeatures:function(e,t){e instanceof Array||(e=[e]);var r=!t||!t.silent;if(r){var s={features:e};if(!1===this.events.triggerEvent("beforefeaturesadded",s))return;e=s.features}for(var i=[],n=0,a=e.length;n<a;n++){n!=e.length-1?this.renderer.locked=!0:this.renderer.locked=!1;var o=e[n];if(this.geometryType&&!(o.geometry instanceof this.geometryType))throw OpenLayers.i18n("componentShouldBe",{geomType:this.geometryType.prototype.CLASS_NAME});if(o.layer=this,!o.style&&this.style&&(o.style=OpenLayers.Util.extend({},this.style)),r){if(!1===this.events.triggerEvent("beforefeatureadded",{feature:o}))continue;this.preFeatureInsert(o)}i.push(o),this.features.push(o),this.drawFeature(o),r&&(this.events.triggerEvent("featureadded",{feature:o}),this.onFeatureInsert(o))}r&&this.events.triggerEvent("featuresadded",{features:i})},removeFeatures:function(e,t){if(e&&0!==e.length){if(e===this.features)return this.removeAllFeatures(t);e instanceof Array||(e=[e]),e===this.selectedFeatures&&(e=e.slice());var r=!t||!t.silent;r&&this.events.triggerEvent("beforefeaturesremoved",{features:e});for(var s=e.length-1;s>=0;s--){0!=s&&e[s-1].geometry?this.renderer.locked=!0:this.renderer.locked=!1;var i=e[s];delete this.unrenderedFeatures[i.id],r&&this.events.triggerEvent("beforefeatureremoved",{feature:i}),this.features=OpenLayers.Util.removeItem(this.features,i),i.layer=null,i.geometry&&this.renderer.eraseFeatures(i),-1!=OpenLayers.Util.indexOf(this.selectedFeatures,i)&&OpenLayers.Util.removeItem(this.selectedFeatures,i),r&&this.events.triggerEvent("featureremoved",{feature:i})}r&&this.events.triggerEvent("featuresremoved",{features:e})}},removeAllFeatures:function(e){var t,r=!e||!e.silent,s=this.features;r&&this.events.triggerEvent("beforefeaturesremoved",{features:s});for(var i=s.length-1;i>=0;i--)t=s[i],r&&this.events.triggerEvent("beforefeatureremoved",{feature:t}),t.layer=null,r&&this.events.triggerEvent("featureremoved",{feature:t});this.renderer.clear(),this.features=[],this.unrenderedFeatures={},this.selectedFeatures=[],r&&this.events.triggerEvent("featuresremoved",{features:s})},destroyFeatures:function(e,t){if(null==e&&(e=this.features),e){this.removeFeatures(e,t);for(var r=e.length-1;r>=0;r--)e[r].destroy()}},drawFeature:function(e,t){if(this.drawn){if("object"!=typeof t){t||e.state!==OpenLayers.State.DELETE||(t="delete");var r=t||e.renderIntent;(t=e.style||this.style)||(t=this.styleMap.createSymbolizer(e,r))}this.renderer.drawFeature(e,t)?delete this.unrenderedFeatures[e.id]:this.unrenderedFeatures[e.id]=e}},eraseFeatures:function(e){this.renderer.eraseFeatures(e)},getFeatureFromEvent:function(e){if(!this.renderer)return OpenLayers.Console.error(OpenLayers.i18n("getFeatureError")),null;var t=this.renderer.getFeatureIdFromEvent(e);return this.getFeatureById(t)},getFeatureBy:function(e,t){for(var r=null,s=0,i=this.features.length;s<i;++s)if(this.features[s][e]==t){r=this.features[s];break}return r},getFeatureById:function(e){return this.getFeatureBy("id",e)},getFeatureByFid:function(e){return this.getFeatureBy("fid",e)},onFeatureInsert:function(e){},preFeatureInsert:function(e){},getDataExtent:function(){var e=null,t=this.features;if(t&&t.length>0){e=new OpenLayers.Bounds;for(var r=null,s=0,i=t.length;s<i;s++)(r=t[s].geometry)&&e.extend(r.getBounds())}return e},CLASS_NAME:"OpenLayers.Layer.Vector"});