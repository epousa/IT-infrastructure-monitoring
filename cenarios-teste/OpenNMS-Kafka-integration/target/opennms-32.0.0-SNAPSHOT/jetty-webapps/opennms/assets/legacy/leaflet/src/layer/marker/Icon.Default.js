L.Icon.Default=L.Icon.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return L.Icon.Default.imagePath||(L.Icon.Default.imagePath=this._detectIconPath()),(this.options.imagePath||L.Icon.Default.imagePath)+L.Icon.prototype._getIconUrl.call(this,e)},_detectIconPath:function(){var e=L.DomUtil.create("div","leaflet-default-icon-path",document.body),o=L.DomUtil.getStyle(e,"background-image")||L.DomUtil.getStyle(e,"backgroundImage");return document.body.removeChild(e),0===o.indexOf("url")?o.replace(/^url\([\"\']?/,"").replace(/marker-icon\.png[\"\']?\)$/,""):""}});