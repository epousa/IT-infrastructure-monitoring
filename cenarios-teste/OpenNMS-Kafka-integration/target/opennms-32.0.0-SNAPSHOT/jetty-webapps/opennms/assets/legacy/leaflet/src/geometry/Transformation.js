L.Transformation=function(t,n,i,r){this._a=t,this._b=n,this._c=i,this._d=r},L.Transformation.prototype={transform:function(t,n){return this._transform(t.clone(),n)},_transform:function(t,n){return n=n||1,t.x=n*(this._a*t.x+this._b),t.y=n*(this._c*t.y+this._d),t},untransform:function(t,n){return n=n||1,new L.Point((t.x/n-this._b)/this._a,(t.y/n-this._d)/this._c)}};