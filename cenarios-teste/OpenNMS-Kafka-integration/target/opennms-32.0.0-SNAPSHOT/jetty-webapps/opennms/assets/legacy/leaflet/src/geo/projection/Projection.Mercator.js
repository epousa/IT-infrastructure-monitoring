L.Projection.Mercator={R:6378137,R_MINOR:6356752.314245179,bounds:L.bounds([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var a=Math.PI/180,h=this.R,M=t.lat*a,n=this.R_MINOR/h,o=Math.sqrt(1-n*n),r=o*Math.sin(M),e=Math.tan(Math.PI/4-M/2)/Math.pow((1-r)/(1+r),o/2);return M=-h*Math.log(Math.max(e,1e-10)),new L.Point(t.lng*a*h,M)},unproject:function(t){for(var a,h=180/Math.PI,M=this.R,n=this.R_MINOR/M,o=Math.sqrt(1-n*n),r=Math.exp(-t.y/M),e=Math.PI/2-2*Math.atan(r),s=0,i=.1;s<15&&Math.abs(i)>1e-7;s++)a=o*Math.sin(e),a=Math.pow((1-a)/(1+a),o/2),e+=i=Math.PI/2-2*Math.atan(r*a)-e;return new L.LatLng(e*h,t.x*h/M)}};