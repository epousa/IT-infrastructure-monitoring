L.PolyUtil={},L.PolyUtil.clipPolygon=function(e,o,t){var d,i,n,_,c,g,l,r,h,s=[1,4,2,8],u=L.LineUtil;for(i=0,l=e.length;i<l;i++)e[i]._code=u._getBitCode(e[i],o);for(_=0;_<4;_++){for(r=s[_],d=[],i=0,n=(l=e.length)-1;i<l;n=i++)c=e[i],g=e[n],c._code&r?g._code&r||((h=u._getEdgeIntersection(g,c,r,o,t))._code=u._getBitCode(h,o),d.push(h)):(g._code&r&&((h=u._getEdgeIntersection(g,c,r,o,t))._code=u._getBitCode(h,o),d.push(h)),d.push(c));e=d}return e};