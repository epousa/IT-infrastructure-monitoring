L.MarkerCluster=L.Marker.extend({initialize:function(t,e,s,i){L.Marker.prototype.initialize.call(this,s?s._cLatLng||s.getLatLng():new L.LatLng(0,0),{icon:this}),this._group=t,this._zoom=e,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,s&&this._addChild(s),i&&this._addChild(i)},getAllChildMarkers:function(t){t=t||[];for(var e=this._childClusters.length-1;e>=0;e--)this._childClusters[e].getAllChildMarkers(t);for(var s=this._markers.length-1;s>=0;s--)t.push(this._markers[s]);return t},getChildCount:function(){return this._childCount},zoomToBounds:function(){for(var t,e=this._childClusters.slice(),s=this._group._map,i=s.getBoundsZoom(this._bounds),n=this._zoom+1,r=s.getZoom();e.length>0&&i>n;){n++;var o=[];for(t=0;t<e.length;t++)o=o.concat(e[t]._childClusters);e=o}i>n?this._group._map.setView(this._latlng,n):i<=r?this._group._map.setView(this._latlng,r+1):this._group._map.fitBounds(this._bounds)},getBounds:function(){var t=new L.LatLngBounds;return t.extend(this._bounds),t},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(t,e){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(t),t instanceof L.MarkerCluster?(e||(this._childClusters.push(t),t.__parent=this),this._childCount+=t._childCount):(e||this._markers.push(t),this._childCount++),this.__parent&&this.__parent._addChild(t,!0)},_setClusterCenter:function(t){this._cLatLng||(this._cLatLng=t._cLatLng||t._latlng)},_resetBounds:function(){var t=this._bounds;t._southWest&&(t._southWest.lat=1/0,t._southWest.lng=1/0),t._northEast&&(t._northEast.lat=-1/0,t._northEast.lng=-1/0)},_recalculateBounds:function(){var t,e,s,i,n=this._markers,r=this._childClusters,o=0,h=0,l=this._childCount;if(0!==l){for(this._resetBounds(),t=0;t<n.length;t++)s=n[t]._latlng,this._bounds.extend(s),o+=s.lat,h+=s.lng;for(t=0;t<r.length;t++)(e=r[t])._boundsNeedUpdate&&e._recalculateBounds(),this._bounds.extend(e._bounds),s=e._wLatLng,i=e._childCount,o+=s.lat*i,h+=s.lng*i;this._latlng=this._wLatLng=new L.LatLng(o/l,h/l),this._boundsNeedUpdate=!1}},_addToMap:function(t){t&&(this._backupLatlng=this._latlng,this.setLatLng(t)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(t,e,s){this._recursively(t,0,s-1,(function(t){var s,i,n=t._markers;for(s=n.length-1;s>=0;s--)(i=n[s])._icon&&(i._setPos(e),i.clusterHide())}),(function(t){var s,i,n=t._childClusters;for(s=n.length-1;s>=0;s--)(i=n[s])._icon&&(i._setPos(e),i.clusterHide())}))},_recursivelyAnimateChildrenInAndAddSelfToMap:function(t,e,s){this._recursively(t,s,0,(function(i){i._recursivelyAnimateChildrenIn(t,i._group._map.latLngToLayerPoint(i.getLatLng()).round(),e),i._isSingleParent()&&e-1===s?(i.clusterShow(),i._recursivelyRemoveChildrenFromMap(t,e)):i.clusterHide(),i._addToMap()}))},_recursivelyBecomeVisible:function(t,e){this._recursively(t,0,e,null,(function(t){t.clusterShow()}))},_recursivelyAddChildrenToMap:function(t,e,s){this._recursively(s,-1,e,(function(i){if(e!==i._zoom)for(var n=i._markers.length-1;n>=0;n--){var r=i._markers[n];s.contains(r._latlng)&&(t&&(r._backupLatlng=r.getLatLng(),r.setLatLng(t),r.clusterHide&&r.clusterHide()),i._group._featureGroup.addLayer(r))}}),(function(e){e._addToMap(t)}))},_recursivelyRestoreChildPositions:function(t){for(var e=this._markers.length-1;e>=0;e--){var s=this._markers[e];s._backupLatlng&&(s.setLatLng(s._backupLatlng),delete s._backupLatlng)}if(t-1===this._zoom)for(var i=this._childClusters.length-1;i>=0;i--)this._childClusters[i]._restorePosition();else for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._recursivelyRestoreChildPositions(t)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(t,e,s){var i,n;this._recursively(t,-1,e-1,(function(t){for(n=t._markers.length-1;n>=0;n--)i=t._markers[n],s&&s.contains(i._latlng)||(t._group._featureGroup.removeLayer(i),i.clusterShow&&i.clusterShow())}),(function(t){for(n=t._childClusters.length-1;n>=0;n--)i=t._childClusters[n],s&&s.contains(i._latlng)||(t._group._featureGroup.removeLayer(i),i.clusterShow&&i.clusterShow())}))},_recursively:function(t,e,s,i,n){var r,o,h=this._childClusters,l=this._zoom;if(e<=l&&(i&&i(this),n&&l===s&&n(this)),l<e||l<s)for(r=h.length-1;r>=0;r--)o=h[r],t.intersects(o._bounds)&&o._recursively(t,e,s,i,n)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});