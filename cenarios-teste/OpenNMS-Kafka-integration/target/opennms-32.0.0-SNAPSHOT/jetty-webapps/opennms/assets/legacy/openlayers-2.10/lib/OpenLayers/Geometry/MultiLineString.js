OpenLayers.Geometry.MultiLineString=OpenLayers.Class(OpenLayers.Geometry.Collection,{componentTypes:["OpenLayers.Geometry.LineString"],initialize:function(e){OpenLayers.Geometry.Collection.prototype.initialize.apply(this,arguments)},split:function(e,n){for(var t,i,l,r,o,p=null,s=n&&n.mutual,a=[],h=[e],g=0,y=this.components.length;g<y;++g){i=this.components[g],r=!1;for(var m=0;m<h.length;++m)if(t=i.split(h[m],n)){if(s){for(var u=0,L=(l=t[0]).length;u<L;++u)0===u&&a.length?a[a.length-1].addComponent(l[u]):a.push(new OpenLayers.Geometry.MultiLineString([l[u]]));r=!0,t=t[1]}if(t.length){t.unshift(m,1),Array.prototype.splice.apply(h,t);break}}r||(a.length?a[a.length-1].addComponent(i.clone()):a=[new OpenLayers.Geometry.MultiLineString(i.clone())])}return a&&a.length>1?r=!0:a=[],h&&h.length>1?o=!0:h=[],(r||o)&&(p=s?[a,h]:h),p},splitWith:function(e,n){var t,i,l,r,o,p,s,a=null,h=n&&n.mutual;if(e instanceof OpenLayers.Geometry.LineString){s=[],p=[e];for(var g=0,y=this.components.length;g<y;++g){o=!1,i=this.components[g];for(var m=0;m<p.length;++m)if(t=p[m].split(i,n)){h&&((l=t[0]).length&&(l.unshift(m,1),Array.prototype.splice.apply(p,l),m+=l.length-2),0===(t=t[1]).length&&(t=[i.clone()]));for(var u=0,L=t.length;u<L;++u)0===u&&s.length?s[s.length-1].addComponent(t[u]):s.push(new OpenLayers.Geometry.MultiLineString([t[u]]));o=!0}o||(s.length?s[s.length-1].addComponent(i.clone()):s=[new OpenLayers.Geometry.MultiLineString([i.clone()])])}}else a=e.split(this);return p&&p.length>1?r=!0:p=[],s&&s.length>1?o=!0:s=[],(r||o)&&(a=h?[p,s]:s),a},CLASS_NAME:"OpenLayers.Geometry.MultiLineString"});