OpenLayers.Format.SOSGetObservation=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{ows:"http://www.opengis.net/ows",gml:"http://www.opengis.net/gml",sos:"http://www.opengis.net/sos/1.0",ogc:"http://www.opengis.net/ogc",om:"http://www.opengis.net/om/1.0",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},regExes:{trimSpace:/^\s*|\s*$/g,removeSpace:/\s*/g,splitSpace:/\s+/,trimComma:/\s*,\s*/g},VERSION:"1.0.0",schemaLocation:"http://www.opengis.net/sos/1.0 http://schemas.opengis.net/sos/1.0.0/sosGetObservation.xsd",defaultPrefix:"sos",initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e])},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e])),e&&9==e.nodeType&&(e=e.documentElement);var t={measurements:[]};return this.readNode(e,t),t},write:function(e){var t=this.writeNode("sos:GetObservation",e);return t.setAttribute("xmlns:om",this.namespaces.om),this.setAttributeNS(t,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation),OpenLayers.Format.XML.prototype.write.apply(this,[t])},readers:{om:{ObservationCollection:function(e,t){t.id=this.getAttributeNS(e,this.namespaces.gml,"id"),this.readChildNodes(e,t)},member:function(e,t){this.readChildNodes(e,t)},Measurement:function(e,t){var s={};t.measurements.push(s),this.readChildNodes(e,s)},samplingTime:function(e,t){var s={};t.samplingTime=s,this.readChildNodes(e,s)},observedProperty:function(e,t){t.observedProperty=this.getAttributeNS(e,this.namespaces.xlink,"href"),this.readChildNodes(e,t)},procedure:function(e,t){t.procedure=this.getAttributeNS(e,this.namespaces.xlink,"href"),this.readChildNodes(e,t)},result:function(e,t){var s={};t.result=s,""!==this.getChildValue(e)?(s.value=this.getChildValue(e),s.uom=e.getAttribute("uom")):this.readChildNodes(e,s)}},gml:OpenLayers.Util.applyDefaults({TimeInstant:function(e,t){var s={};t.timeInstant=s,this.readChildNodes(e,s)},timePosition:function(e,t){t.timePosition=this.getChildValue(e)}},OpenLayers.Format.GML.v3.prototype.readers.gml)},writers:{sos:{GetObservation:function(e){var t=this.createElementNSPlus("GetObservation",{attributes:{version:this.VERSION,service:"SOS"}});return this.writeNode("offering",e,t),this.writeNode("eventTime",e,t),this.writeNode("procedure",e,t),this.writeNode("observedProperty",e,t),this.writeNode("responseFormat",e,t),this.writeNode("resultModel",e,t),this.writeNode("responseMode",e,t),t},responseFormat:function(e){return this.createElementNSPlus("responseFormat",{value:e.responseFormat})},procedure:function(e){return this.createElementNSPlus("procedure",{value:e.procedure})},offering:function(e){return this.createElementNSPlus("offering",{value:e.offering})},observedProperty:function(e){return this.createElementNSPlus("observedProperty",{value:e.observedProperty})},eventTime:function(e){var t=this.createElementNSPlus("eventTime");return"latest"===e.eventTime&&this.writeNode("ogc:TM_Equals",e,t),t},resultModel:function(e){return this.createElementNSPlus("resultModel",{value:e.resultModel})},responseMode:function(e){return this.createElementNSPlus("responseMode",{value:e.responseMode})}},ogc:{TM_Equals:function(e){var t=this.createElementNSPlus("ogc:TM_Equals");return this.writeNode("ogc:PropertyName",{property:"urn:ogc:data:time:iso8601"},t),"latest"===e.eventTime&&this.writeNode("gml:TimeInstant",{value:"latest"},t),t},PropertyName:function(e){return this.createElementNSPlus("ogc:PropertyName",{value:e.property})}},gml:{TimeInstant:function(e){var t=this.createElementNSPlus("gml:TimeInstant");return this.writeNode("gml:timePosition",e,t),t},timePosition:function(e){return this.createElementNSPlus("gml:timePosition",{value:e.value})}}},CLASS_NAME:"OpenLayers.Format.SOSGetObservation"});