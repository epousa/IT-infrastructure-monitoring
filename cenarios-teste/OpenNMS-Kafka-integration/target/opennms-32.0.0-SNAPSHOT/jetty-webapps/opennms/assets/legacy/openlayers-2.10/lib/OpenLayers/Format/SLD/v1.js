OpenLayers.Format.SLD.v1=OpenLayers.Class(OpenLayers.Format.Filter.v1_0_0,{namespaces:{sld:"http://www.opengis.net/sld",ogc:"http://www.opengis.net/ogc",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"sld",schemaLocation:null,multipleSymbolizers:!1,featureTypeCounter:null,defaultSymbolizer:{fillColor:"#808080",fillOpacity:1,strokeColor:"#000000",strokeOpacity:1,strokeWidth:1,strokeDashstyle:"solid",pointRadius:3,graphicName:"square"},initialize:function(e){OpenLayers.Format.Filter.v1_0_0.prototype.initialize.apply(this,[e])},read:function(e,t){var i={namedLayers:!0===(t=OpenLayers.Util.applyDefaults(t,this.options)).namedLayersAsArray?[]:{}};return this.readChildNodes(e,i),i},readers:OpenLayers.Util.applyDefaults({sld:{StyledLayerDescriptor:function(e,t){t.version=e.getAttribute("version"),this.readChildNodes(e,t)},Name:function(e,t){t.name=this.getChildValue(e)},Title:function(e,t){t.title=this.getChildValue(e)},Abstract:function(e,t){t.description=this.getChildValue(e)},NamedLayer:function(e,t){var i={userStyles:[],namedStyles:[]};this.readChildNodes(e,i);for(var r=0,l=i.userStyles.length;r<l;++r)i.userStyles[r].layerName=i.name;t.namedLayers instanceof Array?t.namedLayers.push(i):t.namedLayers[i.name]=i},NamedStyle:function(e,t){t.namedStyles.push(this.getChildName(e.firstChild))},UserStyle:function(e,t){var i,r={defaultsPerSymbolizer:!0,rules:[]};this.featureTypeCounter=-1,this.readChildNodes(e,r),this.multipleSymbolizers?(delete r.defaultsPerSymbolizer,i=new OpenLayers.Style2(r)):i=new OpenLayers.Style(this.defaultSymbolizer,r),t.userStyles.push(i)},IsDefault:function(e,t){"1"==this.getChildValue(e)&&(t.isDefault=!0)},FeatureTypeStyle:function(e,t){++this.featureTypeCounter;var i={rules:this.multipleSymbolizers?t.rules:[]};this.readChildNodes(e,i),this.multipleSymbolizers||(t.rules=i.rules)},Rule:function(e,t){var i;this.multipleSymbolizers&&(i={symbolizers:[]});var r=new OpenLayers.Rule(i);this.readChildNodes(e,r),t.rules.push(r)},ElseFilter:function(e,t){t.elseFilter=!0},MinScaleDenominator:function(e,t){t.minScaleDenominator=parseFloat(this.getChildValue(e))},MaxScaleDenominator:function(e,t){t.maxScaleDenominator=parseFloat(this.getChildValue(e))},TextSymbolizer:function(e,t){var i={};this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Text(i))):t.symbolizer.Text=OpenLayers.Util.applyDefaults(i,t.symbolizer.Text)},Label:function(e,t){var i={};if(this.readChildNodes(e,i),i.property)t.label="${"+i.property+"}";else{var r=this.readOgcExpression(e);r&&(t.label=r)}},Font:function(e,t){this.readChildNodes(e,t)},Halo:function(e,t){var i={};this.readChildNodes(e,i),t.haloRadius=i.haloRadius,t.haloColor=i.fillColor,t.haloOpacity=i.fillOpacity},Radius:function(e,t){var i=this.readOgcExpression(e);null!=i&&(t.haloRadius=i)},RasterSymbolizer:function(e,t){var i={};this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Raster(i))):t.symbolizer.Raster=OpenLayers.Util.applyDefaults(i,t.symbolizer.Raster)},Geometry:function(e,t){t.geometry={},this.readChildNodes(e,t.geometry)},ColorMap:function(e,t){t.colorMap=[],this.readChildNodes(e,t.colorMap)},ColorMapEntry:function(e,t){var i=e.getAttribute("quantity"),r=e.getAttribute("opacity");t.push({color:e.getAttribute("color"),quantity:null!==i?parseFloat(i):void 0,label:e.getAttribute("label")||void 0,opacity:null!==r?parseFloat(r):void 0})},LineSymbolizer:function(e,t){var i={};this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Line(i))):t.symbolizer.Line=OpenLayers.Util.applyDefaults(i,t.symbolizer.Line)},PolygonSymbolizer:function(e,t){var i={fill:!1,stroke:!1};this.multipleSymbolizers||(i=t.symbolizer.Polygon||i),this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Polygon(i))):t.symbolizer.Polygon=i},PointSymbolizer:function(e,t){var i={fill:!1,stroke:!1,graphic:!1};this.multipleSymbolizers||(i=t.symbolizer.Point||i),this.readChildNodes(e,i),this.multipleSymbolizers?(i.zIndex=this.featureTypeCounter,t.symbolizers.push(new OpenLayers.Symbolizer.Point(i))):t.symbolizer.Point=i},Stroke:function(e,t){t.stroke=!0,this.readChildNodes(e,t)},Fill:function(e,t){t.fill=!0,this.readChildNodes(e,t)},CssParameter:function(e,t){var i=e.getAttribute("name"),r=this.cssMap[i];if(r){var l=this.readOgcExpression(e);l&&(t[r]=l)}},Graphic:function(e,t){t.graphic=!0;var i={};this.readChildNodes(e,i);for(var r,l,s=["stroke","strokeColor","strokeWidth","strokeOpacity","strokeLinecap","fill","fillColor","fillOpacity","graphicName","rotation","graphicFormat"],o=0,a=s.length;o<a;++o)null!=(l=i[r=s[o]])&&(t[r]=l);null!=i.opacity&&(t.graphicOpacity=i.opacity),null!=i.size&&(t.pointRadius=i.size/2),null!=i.href&&(t.externalGraphic=i.href),null!=i.rotation&&(t.rotation=i.rotation)},ExternalGraphic:function(e,t){this.readChildNodes(e,t)},Mark:function(e,t){this.readChildNodes(e,t)},WellKnownName:function(e,t){t.graphicName=this.getChildValue(e)},Opacity:function(e,t){var i=this.readOgcExpression(e);i&&(t.opacity=i)},Size:function(e,t){var i=this.readOgcExpression(e);i&&(t.size=i)},Rotation:function(e,t){var i=this.readOgcExpression(e);i&&(t.rotation=i)},OnlineResource:function(e,t){t.href=this.getAttributeNS(e,this.namespaces.xlink,"href")},Format:function(e,t){t.graphicFormat=this.getChildValue(e)}}},OpenLayers.Format.Filter.v1_0_0.prototype.readers),cssMap:{stroke:"strokeColor","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-dasharray":"strokeDashstyle",fill:"fillColor","fill-opacity":"fillOpacity","font-family":"fontFamily","font-size":"fontSize","font-weight":"fontWeight","font-style":"fontStyle"},getCssProperty:function(e){var t=null;for(var i in this.cssMap)if(this.cssMap[i]==e){t=i;break}return t},getGraphicFormat:function(e){var t;for(var i in this.graphicFormats)if(this.graphicFormats[i].test(e)){t=i;break}return t||this.defautlGraphicFormat},defaultGraphicFormat:"image/png",graphicFormats:{"image/jpeg":/\.jpe?g$/i,"image/gif":/\.gif$/i,"image/png":/\.png$/i},write:function(e){return this.writers.sld.StyledLayerDescriptor.apply(this,[e])},writers:OpenLayers.Util.applyDefaults({sld:{StyledLayerDescriptor:function(e){var t=this.createElementNSPlus("sld:StyledLayerDescriptor",{attributes:{version:this.VERSION,"xsi:schemaLocation":this.schemaLocation}});if(t.setAttribute("xmlns:ogc",this.namespaces.ogc),t.setAttribute("xmlns:gml",this.namespaces.gml),e.name&&this.writeNode("Name",e.name,t),e.title&&this.writeNode("Title",e.title,t),e.description&&this.writeNode("Abstract",e.description,t),e.namedLayers instanceof Array)for(var i=0,r=e.namedLayers.length;i<r;++i)this.writeNode("NamedLayer",e.namedLayers[i],t);else for(var l in e.namedLayers)this.writeNode("NamedLayer",e.namedLayers[l],t);return t},Name:function(e){return this.createElementNSPlus("sld:Name",{value:e})},Title:function(e){return this.createElementNSPlus("sld:Title",{value:e})},Abstract:function(e){return this.createElementNSPlus("sld:Abstract",{value:e})},NamedLayer:function(e){var t=this.createElementNSPlus("sld:NamedLayer");if(this.writeNode("Name",e.name,t),e.namedStyles)for(var i=0,r=e.namedStyles.length;i<r;++i)this.writeNode("NamedStyle",e.namedStyles[i],t);if(e.userStyles)for(i=0,r=e.userStyles.length;i<r;++i)this.writeNode("UserStyle",e.userStyles[i],t);return t},NamedStyle:function(e){var t=this.createElementNSPlus("sld:NamedStyle");return this.writeNode("Name",e,t),t},UserStyle:function(e){var t=this.createElementNSPlus("sld:UserStyle");if(e.name&&this.writeNode("Name",e.name,t),e.title&&this.writeNode("Title",e.title,t),e.description&&this.writeNode("Abstract",e.description,t),e.isDefault&&this.writeNode("IsDefault",e.isDefault,t),this.multipleSymbolizers&&e.rules){for(var i,r,l,s,o,a={0:[]},n=[0],u=0,h=e.rules.length;u<h;++u)if((i=e.rules[u]).symbolizers){r={};for(var y=0,d=i.symbolizers.length;y<d;++y)(s=(l=i.symbolizers[y]).zIndex)in r||((o=i.clone()).symbolizers=[],r[s]=o),r[s].symbolizers.push(l.clone());for(s in r)s in a||(n.push(s),a[s]=[]),a[s].push(r[s])}else a[0].push(i.clone());n.sort();for(u=0,h=n.length;u<h;++u)a[n[u]].length>0&&((o=e.clone()).rules=a[n[u]],this.writeNode("FeatureTypeStyle",o,t))}else this.writeNode("FeatureTypeStyle",e,t);return t},IsDefault:function(e){return this.createElementNSPlus("sld:IsDefault",{value:e?"1":"0"})},FeatureTypeStyle:function(e){for(var t=this.createElementNSPlus("sld:FeatureTypeStyle"),i=0,r=e.rules.length;i<r;++i)this.writeNode("Rule",e.rules[i],t);return t},Rule:function(e){var t,i=this.createElementNSPlus("sld:Rule");if(e.name&&this.writeNode("Name",e.name,i),e.title&&this.writeNode("Title",e.title,i),e.description&&this.writeNode("Abstract",e.description,i),e.elseFilter?this.writeNode("ElseFilter",null,i):e.filter&&this.writeNode("ogc:Filter",e.filter,i),null!=e.minScaleDenominator&&this.writeNode("MinScaleDenominator",e.minScaleDenominator,i),null!=e.maxScaleDenominator&&this.writeNode("MaxScaleDenominator",e.maxScaleDenominator,i),this.multipleSymbolizers&&e.symbolizers)for(var r,l=0,s=e.symbolizers.length;l<s;++l)t=(r=e.symbolizers[l]).CLASS_NAME.split(".").pop(),this.writeNode(t+"Symbolizer",r,i);else for(var o=OpenLayers.Style.SYMBOLIZER_PREFIXES,a=(l=0,o.length);l<a;++l)t=o[l],(r=e.symbolizer[t])&&this.writeNode(t+"Symbolizer",r,i);return i},ElseFilter:function(){return this.createElementNSPlus("sld:ElseFilter")},MinScaleDenominator:function(e){return this.createElementNSPlus("sld:MinScaleDenominator",{value:e})},MaxScaleDenominator:function(e){return this.createElementNSPlus("sld:MaxScaleDenominator",{value:e})},LineSymbolizer:function(e){var t=this.createElementNSPlus("sld:LineSymbolizer");return this.writeNode("Stroke",e,t),t},Stroke:function(e){var t=this.createElementNSPlus("sld:Stroke");return null!=e.strokeColor&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeColor"},t),null!=e.strokeOpacity&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeOpacity"},t),null!=e.strokeWidth&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeWidth"},t),null!=e.strokeDashstyle&&"solid"!==e.strokeDashstyle&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeDashstyle"},t),null!=e.strokeLinecap&&this.writeNode("CssParameter",{symbolizer:e,key:"strokeLinecap"},t),t},CssParameter:function(e){return this.createElementNSPlus("sld:CssParameter",{attributes:{name:this.getCssProperty(e.key)},value:e.symbolizer[e.key]})},TextSymbolizer:function(e){var t=this.createElementNSPlus("sld:TextSymbolizer");return null!=e.label&&this.writeNode("Label",e.label,t),null==e.fontFamily&&null==e.fontSize&&null==e.fontWeight&&null==e.fontStyle||this.writeNode("Font",e,t),null==e.haloRadius&&null==e.haloColor&&null==e.haloOpacity||this.writeNode("Halo",e,t),null==e.fillColor&&null==e.fillOpacity||this.writeNode("Fill",e,t),t},Font:function(e){var t=this.createElementNSPlus("sld:Font");return e.fontFamily&&this.writeNode("CssParameter",{symbolizer:e,key:"fontFamily"},t),e.fontSize&&this.writeNode("CssParameter",{symbolizer:e,key:"fontSize"},t),e.fontWeight&&this.writeNode("CssParameter",{symbolizer:e,key:"fontWeight"},t),e.fontStyle&&this.writeNode("CssParameter",{symbolizer:e,key:"fontStyle"},t),t},Label:function(e){var t,i,r=this.createElementNSPlus("sld:Label"),l=e.split("${");r.appendChild(this.createTextNode(l[0]));for(var s=1,o=l.length;s<o;s++)(i=(t=l[s]).indexOf("}"))>0?(this.writeNode("ogc:PropertyName",{property:t.substring(0,i)},r),r.appendChild(this.createTextNode(t.substring(++i)))):r.appendChild(this.createTextNode("${"+t));return r},Halo:function(e){var t=this.createElementNSPlus("sld:Halo");return e.haloRadius&&this.writeNode("Radius",e.haloRadius,t),(e.haloColor||e.haloOpacity)&&this.writeNode("Fill",{fillColor:e.haloColor,fillOpacity:e.haloOpacity},t),t},Radius:function(e){return this.createElementNSPlus("sld:Radius",{value:e})},RasterSymbolizer:function(e){var t=this.createElementNSPlus("sld:RasterSymbolizer");return e.geometry&&this.writeNode("Geometry",e.geometry,t),e.opacity&&this.writeNode("Opacity",e.opacity,t),e.colorMap&&this.writeNode("ColorMap",e.colorMap,t),t},Geometry:function(e){var t=this.createElementNSPlus("sld:Geometry");return e.property&&this.writeNode("ogc:PropertyName",e,t),t},ColorMap:function(e){for(var t=this.createElementNSPlus("sld:ColorMap"),i=0,r=e.length;i<r;++i)this.writeNode("ColorMapEntry",e[i],t);return t},ColorMapEntry:function(e){var t=this.createElementNSPlus("sld:ColorMapEntry"),i=e;return t.setAttribute("color",i.color),void 0!==i.opacity&&t.setAttribute("opacity",parseFloat(i.opacity)),void 0!==i.quantity&&t.setAttribute("quantity",parseFloat(i.quantity)),void 0!==i.label&&t.setAttribute("label",i.label),t},PolygonSymbolizer:function(e){var t=this.createElementNSPlus("sld:PolygonSymbolizer");return!1!==e.fill&&this.writeNode("Fill",e,t),!1!==e.stroke&&this.writeNode("Stroke",e,t),t},Fill:function(e){var t=this.createElementNSPlus("sld:Fill");return e.fillColor&&this.writeNode("CssParameter",{symbolizer:e,key:"fillColor"},t),null!=e.fillOpacity&&this.writeNode("CssParameter",{symbolizer:e,key:"fillOpacity"},t),t},PointSymbolizer:function(e){var t=this.createElementNSPlus("sld:PointSymbolizer");return this.writeNode("Graphic",e,t),t},Graphic:function(e){var t=this.createElementNSPlus("sld:Graphic");return null!=e.externalGraphic?this.writeNode("ExternalGraphic",e,t):this.writeNode("Mark",e,t),null!=e.graphicOpacity&&this.writeNode("Opacity",e.graphicOpacity,t),null!=e.pointRadius&&this.writeNode("Size",2*e.pointRadius,t),null!=e.rotation&&this.writeNode("Rotation",e.rotation,t),t},ExternalGraphic:function(e){var t=this.createElementNSPlus("sld:ExternalGraphic");this.writeNode("OnlineResource",e.externalGraphic,t);var i=e.graphicFormat||this.getGraphicFormat(e.externalGraphic);return this.writeNode("Format",i,t),t},Mark:function(e){var t=this.createElementNSPlus("sld:Mark");return e.graphicName&&this.writeNode("WellKnownName",e.graphicName,t),!1!==e.fill&&this.writeNode("Fill",e,t),!1!==e.stroke&&this.writeNode("Stroke",e,t),t},WellKnownName:function(e){return this.createElementNSPlus("sld:WellKnownName",{value:e})},Opacity:function(e){return this.createElementNSPlus("sld:Opacity",{value:e})},Size:function(e){return this.createElementNSPlus("sld:Size",{value:e})},Rotation:function(e){return this.createElementNSPlus("sld:Rotation",{value:e})},OnlineResource:function(e){return this.createElementNSPlus("sld:OnlineResource",{attributes:{"xlink:type":"simple","xlink:href":e}})},Format:function(e){return this.createElementNSPlus("sld:Format",{value:e})}}},OpenLayers.Format.Filter.v1_0_0.prototype.writers),CLASS_NAME:"OpenLayers.Format.SLD.v1"});