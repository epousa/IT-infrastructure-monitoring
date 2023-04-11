OpenLayers.Geometry.Collection=OpenLayers.Class(OpenLayers.Geometry,{components:null,componentTypes:null,initialize:function(n){OpenLayers.Geometry.prototype.initialize.apply(this,arguments),this.components=[],null!=n&&this.addComponents(n)},destroy:function(){this.components.length=0,this.components=null,OpenLayers.Geometry.prototype.destroy.apply(this,arguments)},clone:function(){for(var geometry=eval("new "+this.CLASS_NAME+"()"),i=0,len=this.components.length;i<len;i++)geometry.addComponent(this.components[i].clone());return OpenLayers.Util.applyDefaults(geometry,this),geometry},getComponentsString:function(){for(var n=[],t=0,e=this.components.length;t<e;t++)n.push(this.components[t].toShortString());return n.join(",")},calculateBounds:function(){if(this.bounds=null,this.components&&this.components.length>0){this.setBounds(this.components[0].getBounds());for(var n=1,t=this.components.length;n<t;n++)this.extendBounds(this.components[n].getBounds())}},addComponents:function(n){n instanceof Array||(n=[n]);for(var t=0,e=n.length;t<e;t++)this.addComponent(n[t])},addComponent:function(n,t){var e=!1;if(n&&(null==this.componentTypes||OpenLayers.Util.indexOf(this.componentTypes,n.CLASS_NAME)>-1)){if(null!=t&&t<this.components.length){var o=this.components.slice(0,t),s=this.components.slice(t,this.components.length);o.push(n),this.components=o.concat(s)}else this.components.push(n);n.parent=this,this.clearBounds(),e=!0}return e},removeComponents:function(n){n instanceof Array||(n=[n]);for(var t=n.length-1;t>=0;--t)this.removeComponent(n[t])},removeComponent:function(n){OpenLayers.Util.removeItem(this.components,n),this.clearBounds()},getLength:function(){for(var n=0,t=0,e=this.components.length;t<e;t++)n+=this.components[t].getLength();return n},getArea:function(){for(var n=0,t=0,e=this.components.length;t<e;t++)n+=this.components[t].getArea();return n},getGeodesicArea:function(n){for(var t=0,e=0,o=this.components.length;e<o;e++)t+=this.components[e].getGeodesicArea(n);return t},getCentroid:function(n){if(!n)return this.components.length&&this.components[0].getCentroid();var t=this.components.length;if(!t)return!1;for(var e,o=[],s=[],i=0,r=Number.MAX_VALUE,h=0;h<t;++h){var c=(e=this.components[h]).getArea(),p=e.getCentroid(!0);isNaN(c)||isNaN(p.x)||isNaN(p.y)||(o.push(c),i+=c,r=c<r&&c>0?c:r,s.push(p))}if(t=o.length,0===i){for(h=0;h<t;++h)o[h]=1;i=o.length}else{for(h=0;h<t;++h)o[h]/=r;i/=r}var m=0,a=0;for(h=0;h<t;++h)p=s[h],c=o[h],m+=p.x*c,a+=p.y*c;return new OpenLayers.Geometry.Point(m/i,a/i)},getGeodesicLength:function(n){for(var t=0,e=0,o=this.components.length;e<o;e++)t+=this.components[e].getGeodesicLength(n);return t},move:function(n,t){for(var e=0,o=this.components.length;e<o;e++)this.components[e].move(n,t)},rotate:function(n,t){for(var e=0,o=this.components.length;e<o;++e)this.components[e].rotate(n,t)},resize:function(n,t,e){for(var o=0;o<this.components.length;++o)this.components[o].resize(n,t,e);return this},distanceTo:function(n,t){for(var e,o,s,i=!(t&&!1===t.edge)&&t&&t.details,r=Number.POSITIVE_INFINITY,h=0,c=this.components.length;h<c&&(e=this.components[h].distanceTo(n,t),!((s=i?e.distance:e)<r&&(o=e,0==(r=s))));++h);return o},equals:function(n){var t=!0;if(n&&n.CLASS_NAME&&this.CLASS_NAME==n.CLASS_NAME)if(n.components instanceof Array&&n.components.length==this.components.length){for(var e=0,o=this.components.length;e<o;++e)if(!this.components[e].equals(n.components[e])){t=!1;break}}else t=!1;else t=!1;return t},transform:function(n,t){if(n&&t){for(var e=0,o=this.components.length;e<o;e++){this.components[e].transform(n,t)}this.bounds=null}return this},intersects:function(n){for(var t=!1,e=0,o=this.components.length;e<o&&!(t=n.intersects(this.components[e]));++e);return t},getVertices:function(n){for(var t=[],e=0,o=this.components.length;e<o;++e)Array.prototype.push.apply(t,this.components[e].getVertices(n));return t},CLASS_NAME:"OpenLayers.Geometry.Collection"});