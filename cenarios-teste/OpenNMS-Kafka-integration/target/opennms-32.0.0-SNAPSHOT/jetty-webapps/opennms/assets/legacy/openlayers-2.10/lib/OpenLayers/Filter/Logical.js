OpenLayers.Filter.Logical=OpenLayers.Class(OpenLayers.Filter,{filters:null,type:null,initialize:function(e){this.filters=[],OpenLayers.Filter.prototype.initialize.apply(this,[e])},destroy:function(){this.filters=null,OpenLayers.Filter.prototype.destroy.apply(this)},evaluate:function(e){switch(this.type){case OpenLayers.Filter.Logical.AND:for(var t=0,i=this.filters.length;t<i;t++)if(0==this.filters[t].evaluate(e))return!1;return!0;case OpenLayers.Filter.Logical.OR:for(t=0,i=this.filters.length;t<i;t++)if(1==this.filters[t].evaluate(e))return!0;return!1;case OpenLayers.Filter.Logical.NOT:return!this.filters[0].evaluate(e)}},clone:function(){for(var e=[],t=0,i=this.filters.length;t<i;++t)e.push(this.filters[t].clone());return new OpenLayers.Filter.Logical({type:this.type,filters:e})},CLASS_NAME:"OpenLayers.Filter.Logical"}),OpenLayers.Filter.Logical.AND="&&",OpenLayers.Filter.Logical.OR="||",OpenLayers.Filter.Logical.NOT="!";