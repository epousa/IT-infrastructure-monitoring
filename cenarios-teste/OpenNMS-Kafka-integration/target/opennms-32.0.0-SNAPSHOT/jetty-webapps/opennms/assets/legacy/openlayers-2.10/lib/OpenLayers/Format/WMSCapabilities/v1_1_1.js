OpenLayers.Format.WMSCapabilities.v1_1_1=OpenLayers.Class(OpenLayers.Format.WMSCapabilities.v1_1,{version:"1.1.1",initialize:function(a){OpenLayers.Format.WMSCapabilities.v1_1.prototype.initialize.apply(this,[a])},readers:{wms:OpenLayers.Util.applyDefaults({SRS:function(a,e){e.srs[this.getChildValue(a)]=!0}},OpenLayers.Format.WMSCapabilities.v1_1.prototype.readers.wms)},CLASS_NAME:"OpenLayers.Format.WMSCapabilities.v1_1_1"});