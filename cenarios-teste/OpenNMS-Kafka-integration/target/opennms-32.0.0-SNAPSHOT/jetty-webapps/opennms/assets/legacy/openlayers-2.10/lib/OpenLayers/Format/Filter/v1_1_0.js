OpenLayers.Format.Filter.v1_1_0=OpenLayers.Class(OpenLayers.Format.GML.v3,OpenLayers.Format.Filter.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/ogc/filter/1.1.0/filter.xsd",initialize:function(e){OpenLayers.Format.GML.v3.prototype.initialize.apply(this,[e])},readers:{ogc:OpenLayers.Util.applyDefaults({PropertyIsEqualTo:function(e,t){var r=e.getAttribute("matchCase"),a=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,matchCase:!("false"===r||"0"===r)});this.readChildNodes(e,a),t.filters.push(a)},PropertyIsNotEqualTo:function(e,t){var r=e.getAttribute("matchCase"),a=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.NOT_EQUAL_TO,matchCase:!("false"===r||"0"===r)});this.readChildNodes(e,a),t.filters.push(a)},PropertyIsLike:function(e,t){var r=new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.LIKE});this.readChildNodes(e,r);var a=e.getAttribute("wildCard"),i=e.getAttribute("singleChar"),s=e.getAttribute("escapeChar");r.value2regex(a,i,s),t.filters.push(r)}},OpenLayers.Format.Filter.v1.prototype.readers.ogc),gml:OpenLayers.Format.GML.v3.prototype.readers.gml,feature:OpenLayers.Format.GML.v3.prototype.readers.feature},writers:{ogc:OpenLayers.Util.applyDefaults({PropertyIsEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsEqualTo",{attributes:{matchCase:e.matchCase}});return this.writeNode("PropertyName",e,t),this.writeNode("Literal",e.value,t),t},PropertyIsNotEqualTo:function(e){var t=this.createElementNSPlus("ogc:PropertyIsNotEqualTo",{attributes:{matchCase:e.matchCase}});return this.writeNode("PropertyName",e,t),this.writeNode("Literal",e.value,t),t},PropertyIsLike:function(e){var t=this.createElementNSPlus("ogc:PropertyIsLike",{attributes:{wildCard:"*",singleChar:".",escapeChar:"!"}});return this.writeNode("PropertyName",e,t),this.writeNode("Literal",e.regex2value(),t),t},BBOX:function(e){var t=this.createElementNSPlus("ogc:BBOX");this.writeNode("PropertyName",e,t);var r=this.writeNode("gml:Envelope",e.value);return e.projection&&r.setAttribute("srsName",e.projection),t.appendChild(r),t}},OpenLayers.Format.Filter.v1.prototype.writers.ogc),gml:OpenLayers.Format.GML.v3.prototype.writers.gml,feature:OpenLayers.Format.GML.v3.prototype.writers.feature},writeSpatial:function(e,t){var r,a=this.createElementNSPlus("ogc:"+t);return this.writeNode("PropertyName",e,a),r=e.value instanceof OpenLayers.Geometry?this.writeNode("feature:_geometry",e.value).firstChild:this.writeNode("gml:Envelope",e.value),e.projection&&r.setAttribute("srsName",e.projection),a.appendChild(r),a},CLASS_NAME:"OpenLayers.Format.Filter.v1_1_0"});