OpenLayers.Format.WMTSCapabilities=OpenLayers.Class(OpenLayers.Format.XML,{defaultVersion:"1.0.0",version:null,parser:null,yx:{"urn:ogc:def:crs:EPSG::4326":!0},initialize:function(e){OpenLayers.Format.XML.prototype.initialize.apply(this,[e]),this.options=e},read:function(e){"string"==typeof e&&(e=OpenLayers.Format.XML.prototype.read.apply(this,[e]));var r=e.documentElement,t=this.version||r.getAttribute("version")||this.defaultVersion;if(!this.parser||this.parser.version!==t){var a=OpenLayers.Format.WMTSCapabilities["v"+t.replace(/\./g,"_")];if(!a)throw new Error("Can't find a WMTS capabilities parser for version "+t);this.parser=new a(this.options)}return this.parser.read(e)},createLayer:function(e,r){var t;for(var a in{layer:!0,matrixSet:!0})if(!(a in r))throw new Error("Missing property '"+a+"' in layer configuration.");for(var i,s=e.contents,n=s.tileMatrixSets[r.matrixSet],o=(s.layers,0),p=s.layers.length;o<p;++o)if(s.layers[o].identifier===r.layer){i=s.layers[o];break}if(i&&n){var l;for(o=0,p=i.styles.length;o<p&&!(l=i.styles[o]).isDefault;++o);t=new OpenLayers.Layer.WMTS(OpenLayers.Util.applyDefaults(r,{url:e.operationsMetadata.GetTile.dcp.http.get,name:i.title,style:l,matrixIds:n.matrixIds}))}return t},CLASS_NAME:"OpenLayers.Format.WMTSCapabilities"});