OpenLayers.StyleMap=OpenLayers.Class({styles:null,extendDefault:!0,initialize:function(e,t){if(this.styles={default:new OpenLayers.Style(OpenLayers.Feature.Vector.style.default),select:new OpenLayers.Style(OpenLayers.Feature.Vector.style.select),temporary:new OpenLayers.Style(OpenLayers.Feature.Vector.style.temporary),delete:new OpenLayers.Style(OpenLayers.Feature.Vector.style.delete)},e instanceof OpenLayers.Style)this.styles.default=e,this.styles.select=e,this.styles.temporary=e,this.styles.delete=e;else if("object"==typeof e)for(var s in e)if(e[s]instanceof OpenLayers.Style)this.styles[s]=e[s];else{if("object"!=typeof e[s]){this.styles.default=new OpenLayers.Style(e),this.styles.select=new OpenLayers.Style(e),this.styles.temporary=new OpenLayers.Style(e),this.styles.delete=new OpenLayers.Style(e);break}this.styles[s]=new OpenLayers.Style(e[s])}OpenLayers.Util.extend(this,t)},destroy:function(){for(var e in this.styles)this.styles[e].destroy();this.styles=null},createSymbolizer:function(e,t){e||(e=new OpenLayers.Feature.Vector),this.styles[t]||(t="default"),e.renderIntent=t;var s={};return this.extendDefault&&"default"!=t&&(s=this.styles.default.createSymbolizer(e)),OpenLayers.Util.extend(s,this.styles[t].createSymbolizer(e))},addUniqueValueRules:function(e,t,s,l){var y=[];for(var r in s)y.push(new OpenLayers.Rule({symbolizer:s[r],context:l,filter:new OpenLayers.Filter.Comparison({type:OpenLayers.Filter.Comparison.EQUAL_TO,property:t,value:r})}));this.styles[e].addRules(y)},CLASS_NAME:"OpenLayers.StyleMap"});