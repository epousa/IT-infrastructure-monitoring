OpenLayers.Format.WMC.v1_1_0=OpenLayers.Class(OpenLayers.Format.WMC.v1,{VERSION:"1.1.0",schemaLocation:"http://www.opengis.net/context http://schemas.opengis.net/context/1.1.0/context.xsd",initialize:function(e){OpenLayers.Format.WMC.v1.prototype.initialize.apply(this,[e])},read_sld_MinScaleDenominator:function(e,t){var a=parseFloat(this.getChildValue(t));a>0&&(e.maxScale=a)},read_sld_MaxScaleDenominator:function(e,t){e.minScale=parseFloat(this.getChildValue(t))},write_wmc_Layer:function(e){var t=OpenLayers.Format.WMC.v1.prototype.write_wmc_Layer.apply(this,[e]);if(e.maxScale){var a=this.createElementNS(this.namespaces.sld,"sld:MinScaleDenominator");a.appendChild(this.createTextNode(e.maxScale.toPrecision(16))),t.appendChild(a)}if(e.minScale){var i=this.createElementNS(this.namespaces.sld,"sld:MaxScaleDenominator");i.appendChild(this.createTextNode(e.minScale.toPrecision(16))),t.appendChild(i)}return t.appendChild(this.write_wmc_FormatList(e)),t.appendChild(this.write_wmc_StyleList(e)),t.appendChild(this.write_wmc_LayerExtension(e)),t},CLASS_NAME:"OpenLayers.Format.WMC.v1_1_0"});