OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,initialize:function(e,o){OpenLayers.Util.extend(this,o),this.projCode=e,window.Proj4js&&(this.proj=new Proj4js.Proj(e))},getCode:function(){return this.proj?this.proj.srsCode:this.projCode},getUnits:function(){return this.proj?this.proj.units:null},toString:function(){return this.getCode()},equals:function(e){return!(!e||!e.getCode)&&this.getCode()==e.getCode()},destroy:function(){delete this.proj,delete this.projCode},CLASS_NAME:"OpenLayers.Projection"}),OpenLayers.Projection.transforms={},OpenLayers.Projection.addTransform=function(e,o,r){OpenLayers.Projection.transforms[e]||(OpenLayers.Projection.transforms[e]={}),OpenLayers.Projection.transforms[e][o]=r},OpenLayers.Projection.transform=function(e,o,r){return o.proj&&r.proj?e=Proj4js.transform(o.proj,r.proj,e):o&&r&&OpenLayers.Projection.transforms[o.getCode()]&&OpenLayers.Projection.transforms[o.getCode()][r.getCode()]&&OpenLayers.Projection.transforms[o.getCode()][r.getCode()](e),e};