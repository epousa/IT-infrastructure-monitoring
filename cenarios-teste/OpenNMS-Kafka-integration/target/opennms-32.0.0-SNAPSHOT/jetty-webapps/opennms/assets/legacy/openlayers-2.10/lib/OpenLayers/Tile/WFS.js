OpenLayers.Tile.WFS=OpenLayers.Class(OpenLayers.Tile,{features:null,url:null,request:null,initialize:function(e,t,s,r,i){OpenLayers.Tile.prototype.initialize.apply(this,arguments),this.url=r,this.features=[]},destroy:function(){OpenLayers.Tile.prototype.destroy.apply(this,arguments),this.destroyAllFeatures(),this.features=null,this.url=null,this.request&&(this.request.abort(),this.request=null)},clear:function(){this.destroyAllFeatures()},draw:function(){OpenLayers.Tile.prototype.draw.apply(this,arguments)&&(this.isLoading?this.events.triggerEvent("reload"):(this.isLoading=!0,this.events.triggerEvent("loadstart")),this.loadFeaturesForRegion(this.requestSuccess))},loadFeaturesForRegion:function(e,t){this.request&&this.request.abort(),this.request=OpenLayers.Request.GET({url:this.url,success:e,failure:t,scope:this})},requestSuccess:function(e){if(this.features){var t=e.responseXML;if(t&&t.documentElement||(t=e.responseText),this.layer.vectorMode)this.layer.addFeatures(this.layer.formatObject.read(t));else{var s=new OpenLayers.Format.XML;"string"==typeof t&&(t=s.read(t));var r=s.getElementsByTagNameNS(t,"http://www.opengis.net/gml","featureMember");this.addResults(r)}}this.events&&this.events.triggerEvent("loadend"),this.request=null},addResults:function(e){for(var t=0;t<e.length;t++){var s=new this.layer.featureClass(this.layer,e[t]);this.features.push(s)}},destroyAllFeatures:function(){for(;this.features.length>0;){this.features.shift().destroy()}},CLASS_NAME:"OpenLayers.Tile.WFS"});