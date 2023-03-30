import{d as yP,q as vP,r as bP,v as Kp,w as xP,b as wP,o as $P,j as kP,k as no,B as SP,u as AP,ab as OP,L as EP,_ as TP}from"./index.5d30604a.js";/*! RapiDoc 9.3.3 | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */(()=>{var Rr,Lr,Zn={448:(J,Z,N)=>{const I=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),ie=new Map;class ue{constructor(t,r){if(this._$cssResult$=!0,r!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ie.get(this.cssText);return I&&t===void 0&&(ie.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const fe=e=>new ue(typeof e=="string"?e:e+"",K),B=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,a,o)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new ue(r,K)},W=I?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return fe(r)})(e):e;var de;const ve=window.trustedTypes,ge=ve?ve.emptyScript:"",Se=window.reactiveElementPolyfillSupport,be={toAttribute(e,t){switch(t){case Boolean:e=e?ge:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},se=(e,t)=>t!==e&&(t==t||e==e),ae={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:se};class X extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const a=this._$Eh(n,r);a!==void 0&&(this._$Eu.set(a,n),t.push(a))}),t}static createProperty(t,r=ae){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,a=this.getPropertyDescriptor(t,n,r);a!==void 0&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(a){const o=this[t];this[r]=a,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ae}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const a of n)this.createProperty(a,r[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const a of n)r.unshift(W(a))}else t!==void 0&&r.push(W(t));return r}static _$Eh(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return((n,a)=>{I?n.adoptedStyleSheets=a.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):a.forEach(o=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,n.appendChild(i)})})(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ES(t,r,n=ae){var a,o;const i=this.constructor._$Eh(t,n);if(i!==void 0&&n.reflect===!0){const s=((o=(a=n.converter)===null||a===void 0?void 0:a.toAttribute)!==null&&o!==void 0?o:be.toAttribute)(r,n.type);this._$Ei=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(t,r){var n,a,o;const i=this.constructor,s=i._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){const l=i.getPropertyOptions(s),c=l.converter,d=(o=(a=(n=c)===null||n===void 0?void 0:n.fromAttribute)!==null&&a!==void 0?a:typeof c=="function"?c:null)!==null&&o!==void 0?o:be.fromAttribute;this._$Ei=s,this[s]=d(r,l.type),this._$Ei=null}}requestUpdate(t,r,n){let a=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||se)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((a,o)=>this[o]=a),this._$Et=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$Eg)===null||t===void 0||t.forEach(a=>{var o;return(o=a.hostUpdate)===null||o===void 0?void 0:o.call(a)}),this.update(n)):this._$EU()}catch(a){throw r=!1,this._$EU(),a}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$Eg)===null||r===void 0||r.forEach(n=>{var a;return(a=n.hostUpdated)===null||a===void 0?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$ES(n,this[n],r)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var q;X.finalized=!0,X.elementProperties=new Map,X.elementStyles=[],X.shadowRootOptions={mode:"open"},Se?.({ReactiveElement:X}),((de=globalThis.reactiveElementVersions)!==null&&de!==void 0?de:globalThis.reactiveElementVersions=[]).push("1.3.0");const R=globalThis.trustedTypes,F=R?R.createPolicy("lit-html",{createHTML:e=>e}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,G="?"+H,D=`<${G}>`,M=document,te=(e="")=>M.createComment(e),me=e=>e===null||typeof e!="object"&&typeof e!="function",Le=Array.isArray,Ee=e=>{var t;return Le(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Me=/>/g,qe=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ve=/'/g,_e=/"/g,je=/^(?:script|style|textarea|title)$/i,Je=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),m=Je(1),$e=Symbol.for("lit-noChange"),ke=Symbol.for("lit-nothing"),st=new WeakMap,rt=M.createTreeWalker(M,129,null,!1),Rt=(e,t)=>{const r=e.length-1,n=[];let a,o=t===2?"<svg>":"",i=we;for(let l=0;l<r;l++){const c=e[l];let d,p,h=-1,f=0;for(;f<c.length&&(i.lastIndex=f,p=i.exec(c),p!==null);)f=i.lastIndex,i===we?p[1]==="!--"?i=Te:p[1]!==void 0?i=Me:p[2]!==void 0?(je.test(p[2])&&(a=RegExp("</"+p[2],"g")),i=qe):p[3]!==void 0&&(i=qe):i===qe?p[0]===">"?(i=a??we,h=-1):p[1]===void 0?h=-2:(h=i.lastIndex-p[2].length,d=p[1],i=p[3]===void 0?qe:p[3]==='"'?_e:Ve):i===_e||i===Ve?i=qe:i===Te||i===Me?i=we:(i=qe,a=void 0);const g=i===qe&&e[l+1].startsWith("/>")?" ":"";o+=i===we?c+D:h>=0?(n.push(d),c.slice(0,h)+"$lit$"+c.slice(h)+H+g):c+H+(h===-2?(n.push(void 0),l):g)}const s=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[F!==void 0?F.createHTML(s):s,n]};class vt{constructor({strings:t,_$litType$:r},n){let a;this.parts=[];let o=0,i=0;const s=t.length-1,l=this.parts,[c,d]=Rt(t,r);if(this.el=vt.createElement(c,n),rt.currentNode=this.el.content,r===2){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(a=rt.nextNode())!==null&&l.length<s;){if(a.nodeType===1){if(a.hasAttributes()){const p=[];for(const h of a.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(H)){const f=d[i++];if(p.push(h),f!==void 0){const g=a.getAttribute(f.toLowerCase()+"$lit$").split(H),x=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:x[2],strings:g,ctor:x[1]==="."?Xn:x[1]==="?"?yb:x[1]==="@"?vb:or})}else l.push({type:6,index:o})}for(const h of p)a.removeAttribute(h)}if(je.test(a.tagName)){const p=a.textContent.split(H),h=p.length-1;if(h>0){a.textContent=R?R.emptyScript:"";for(let f=0;f<h;f++)a.append(p[f],te()),rt.nextNode(),l.push({type:2,index:++o});a.append(p[h],te())}}}else if(a.nodeType===8)if(a.data===G)l.push({type:2,index:o});else{let p=-1;for(;(p=a.data.indexOf(H,p+1))!==-1;)l.push({type:7,index:o}),p+=H.length-1}o++}}static createElement(t,r){const n=M.createElement("template");return n.innerHTML=t,n}}function Ye(e,t,r=e,n){var a,o,i,s;if(t===$e)return t;let l=n!==void 0?(a=r._$Cl)===null||a===void 0?void 0:a[n]:r._$Cu;const c=me(t)?void 0:t._$litDirective$;return l?.constructor!==c&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Cl)!==null&&i!==void 0?i:s._$Cl=[])[n]=l:r._$Cu=l),l!==void 0&&(t=Ye(e,l._$AS(e,t.values),l,n)),t}class Vt{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:n},parts:a}=this._$AD,o=((r=t?.creationScope)!==null&&r!==void 0?r:M).importNode(n,!0);rt.currentNode=o;let i=rt.nextNode(),s=0,l=0,c=a[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new ar(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new bb(i,this,t)),this.v.push(d),c=a[++l]}s!==c?.index&&(i=rt.nextNode(),s++)}return o}m(t){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ar{constructor(t,r,n,a){var o;this.type=2,this._$AH=ke,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=a,this._$Cg=(o=a?.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ye(this,t,r),me(t)?t===ke||t==null||t===""?(this._$AH!==ke&&this._$AR(),this._$AH=ke):t!==this._$AH&&t!==$e&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ee(t)?this.S(t):this.$(t)}A(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==ke&&me(this._$AH)?this._$AA.nextSibling.data=t:this.k(M.createTextNode(t)),this._$AH=t}T(t){var r;const{values:n,_$litType$:a}=t,o=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=vt.createElement(a.h,this.options)),a);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.m(n);else{const i=new Vt(o,this),s=i.p(this.options);i.m(n),this.k(s),this._$AH=i}}_$AC(t){let r=st.get(t.strings);return r===void 0&&st.set(t.strings,r=new vt(t)),r}S(t){Le(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,a=0;for(const o of t)a===r.length?r.push(n=new ar(this.A(te()),this.A(te()),this,this.options)):n=r[a],n._$AI(o),a++;a<r.length&&(this._$AR(n&&n._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const a=t.nextSibling;t.remove(),t=a}}setConnected(t){var r;this._$AM===void 0&&(this._$Cg=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class or{constructor(t,r,n,a,o){this.type=1,this._$AH=ke,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ke}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,a){const o=this.strings;let i=!1;if(o===void 0)t=Ye(this,t,r,0),i=!me(t)||t!==this._$AH&&t!==$e,i&&(this._$AH=t);else{const s=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Ye(this,s[n+l],r,l),c===$e&&(c=this._$AH[l]),i||(i=!me(c)||c!==this._$AH[l]),c===ke?t=ke:t!==ke&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}i&&!a&&this.C(t)}C(t){t===ke?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xn extends or{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===ke?void 0:t}}const gb=R?R.emptyScript:"";class yb extends or{constructor(){super(...arguments),this.type=4}C(t){t&&t!==ke?this.element.setAttribute(this.name,gb):this.element.removeAttribute(this.name)}}class vb extends or{constructor(t,r,n,a,o){super(t,r,n,a,o),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ye(this,t,r,0))!==null&&n!==void 0?n:ke)===$e)return;const a=this._$AH,o=t===ke&&a!==ke||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,i=t!==ke&&(a===ke||o);o&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class bb{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ye(this,t)}}const Jp=window.litHtmlPolyfillSupport;var es,ts;Jp?.(vt,ar),((q=globalThis.litHtmlVersions)!==null&&q!==void 0?q:globalThis.litHtmlVersions=[]).push("2.2.0");class St extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((n,a,o)=>{var i,s;const l=(i=o?.renderBefore)!==null&&i!==void 0?i:a;let c=l._$litPart$;if(c===void 0){const d=(s=o?.renderBefore)!==null&&s!==void 0?s:null;l._$litPart$=c=new ar(a.insertBefore(te(),d),d,void 0,o??{})}return c._$AI(n),c})(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return $e}}St.finalized=!0,St._$litElement$=!0,(es=globalThis.litElementHydrateSupport)===null||es===void 0||es.call(globalThis,{LitElement:St});const Yp=globalThis.litElementPolyfillSupport;Yp?.({LitElement:St});function xb(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}((ts=globalThis.litElementVersions)!==null&&ts!==void 0?ts:globalThis.litElementVersions=[]).push("3.2.0");let dn={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const wb=/[&<>"']/,$b=/[&<>"']/g,kb=/[<>"']|&(?!#?\w+;)/,Sb=/[<>"']|&(?!#?\w+;)/g,Ab={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zp=e=>Ab[e];function dt(e,t){if(t){if(wb.test(e))return e.replace($b,Zp)}else if(kb.test(e))return e.replace(Sb,Zp);return e}const Ob=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Qp(e){return e.replace(Ob,(t,r)=>(r=r.toLowerCase())==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):"")}const Eb=/(^|[^\[])\^/g;function Ue(e,t){e=typeof e=="string"?e:e.source,t=t||"";const r={replace:(n,a)=>(a=(a=a.source||a).replace(Eb,"$1"),e=e.replace(n,a),r),getRegex:()=>new RegExp(e,t)};return r}const Tb=/[^\w:]/g,Cb=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Xp(e,t,r){if(e){let n;try{n=decodeURIComponent(Qp(r)).replace(Tb,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!Cb.test(r)&&(r=function(n,a){ao[" "+n]||(_b.test(n)?ao[" "+n]=n+"/":ao[" "+n]=io(n,"/",!0));const o=(n=ao[" "+n]).indexOf(":")===-1;return a.substring(0,2)==="//"?o?a:n.replace(jb,"$1")+a:a.charAt(0)==="/"?o?a:n.replace(Ib,"$1")+a:n+a}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const ao={},_b=/^[^:]+:\/*[^/]*$/,jb=/^([^:]+:)[\s\S]*$/,Ib=/^([^:]+:\/*[^/]*)[\s\S]*$/,oo={exec:function(){}};function Bt(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function ed(e,t){const r=e.replace(/\|/g,(a,o,i)=>{let s=!1,l=o;for(;--l>=0&&i[l]==="\\";)s=!s;return s?"|":" |"}).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function io(e,t,r){const n=e.length;if(n===0)return"";let a=0;for(;a<n;){const o=e.charAt(n-a-1);if(o!==t||r){if(o===t||!r)break;a++}else a++}return e.slice(0,n-a)}function td(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function rd(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function nd(e,t,r,n){const a=t.href,o=t.title?dt(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){n.state.inLink=!0;const s={type:"link",raw:r,href:a,title:o,text:i,tokens:n.inlineTokens(i,[])};return n.state.inLink=!1,s}return{type:"image",raw:r,href:a,title:o,text:dt(i)}}class rs{constructor(t){this.options=t||dn}space(t){const r=this.rules.block.newline.exec(t);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(t){const r=this.rules.block.code.exec(t);if(r){const n=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?n:io(n,`
`)}}}fences(t){const r=this.rules.block.fences.exec(t);if(r){const n=r[0],a=function(o,i){const s=o.match(/^(\s+)(?:```)/);if(s===null)return i;const l=s[1];return i.split(`
`).map(c=>{const d=c.match(/^\s+/);if(d===null)return c;const[p]=d;return p.length>=l.length?c.slice(l.length):c}).join(`
`)}(n,r[3]||"");return{type:"code",raw:n,lang:r[2]?r[2].trim():r[2],text:a}}}heading(t){const r=this.rules.block.heading.exec(t);if(r){let n=r[2].trim();if(/#$/.test(n)){const o=io(n,"#");this.options.pedantic?n=o.trim():o&&!/ $/.test(o)||(n=o.trim())}const a={type:"heading",raw:r[0],depth:r[1].length,text:n,tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}hr(t){const r=this.rules.block.hr.exec(t);if(r)return{type:"hr",raw:r[0]}}blockquote(t){const r=this.rules.block.blockquote.exec(t);if(r){const n=r[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:r[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(t){let r=this.rules.block.list.exec(t);if(r){let n,a,o,i,s,l,c,d,p,h,f,g,x=r[1].trim();const v=x.length>1,u={type:"list",raw:"",ordered:v,start:v?+x.slice(0,-1):"",loose:!1,items:[]};x=v?`\\d{1,9}\\${x.slice(-1)}`:`\\${x}`,this.options.pedantic&&(x=v?x:"[*+-]");const O=new RegExp(`^( {0,3}${x})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(g=!1,r=O.exec(t))&&!this.rules.block.hr.test(t);){if(n=r[0],t=t.substring(n.length),d=r[2].split(`
`,1)[0],p=t.split(`
`,1)[0],this.options.pedantic?(i=2,f=d.trimLeft()):(i=r[2].search(/[^ ]/),i=i>4?1:i,f=d.slice(i),i+=r[1].length),l=!1,!d&&/^ *$/.test(p)&&(n+=p+`
`,t=t.substring(p.length+1),g=!0),!g){const T=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),j=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),$=new RegExp(`^( {0,${Math.min(3,i-1)}})(\`\`\`|~~~)`);for(;t&&(h=t.split(`
`,1)[0],d=h,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!$.test(d))&&!this.rules.block.heading.test(d)&&!T.test(d)&&!j.test(t);){if(d.search(/[^ ]/)>=i||!d.trim())f+=`
`+d.slice(i);else{if(l)break;f+=`
`+d}l||d.trim()||(l=!0),n+=h+`
`,t=t.substring(h.length+1)}}u.loose||(c?u.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(f),a&&(o=a[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:n,task:!!a,checked:o,loose:!1,text:f}),u.raw+=n}u.items[u.items.length-1].raw=n.trimRight(),u.items[u.items.length-1].text=f.trimRight(),u.raw=u.raw.trimRight();const A=u.items.length;for(s=0;s<A;s++){this.lexer.state.top=!1,u.items[s].tokens=this.lexer.blockTokens(u.items[s].text,[]);const T=u.items[s].tokens.filter($=>$.type==="space"),j=T.every($=>{const P=$.raw.split("");let b=0;for(const k of P)if(k===`
`&&(b+=1),b>1)return!0;return!1});!u.loose&&T.length&&j&&(u.loose=!0,u.items[s].loose=!0)}return u}}html(t){const r=this.rules.block.html.exec(t);if(r){const n={type:"html",raw:r[0],pre:!this.options.sanitizer&&(r[1]==="pre"||r[1]==="script"||r[1]==="style"),text:r[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(r[0]):dt(r[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(t){const r=this.rules.block.def.exec(t);if(r)return r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),{type:"def",tag:r[1].toLowerCase().replace(/\s+/g," "),raw:r[0],href:r[2],title:r[3]}}table(t){const r=this.rules.block.table.exec(t);if(r){const n={type:"table",header:ed(r[1]).map(a=>({text:a})),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]&&r[3].trim()?r[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=r[0];let a,o,i,s,l=n.align.length;for(a=0;a<l;a++)/^ *-+: *$/.test(n.align[a])?n.align[a]="right":/^ *:-+: *$/.test(n.align[a])?n.align[a]="center":/^ *:-+ *$/.test(n.align[a])?n.align[a]="left":n.align[a]=null;for(l=n.rows.length,a=0;a<l;a++)n.rows[a]=ed(n.rows[a],n.header.length).map(c=>({text:c}));for(l=n.header.length,o=0;o<l;o++)n.header[o].tokens=[],this.lexer.inline(n.header[o].text,n.header[o].tokens);for(l=n.rows.length,o=0;o<l;o++)for(s=n.rows[o],i=0;i<s.length;i++)s[i].tokens=[],this.lexer.inline(s[i].text,s[i].tokens);return n}}}lheading(t){const r=this.rules.block.lheading.exec(t);if(r){const n={type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(t){const r=this.rules.block.paragraph.exec(t);if(r){const n={type:"paragraph",raw:r[0],text:r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(t){const r=this.rules.block.text.exec(t);if(r){const n={type:"text",raw:r[0],text:r[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(t){const r=this.rules.inline.escape.exec(t);if(r)return{type:"escape",raw:r[0],text:dt(r[1])}}tag(t){const r=this.rules.inline.tag.exec(t);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):dt(r[0]):r[0]}}link(t){const r=this.rules.inline.link.exec(t);if(r){const n=r[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=io(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{const i=function(s,l){if(s.indexOf(l[1])===-1)return-1;const c=s.length;let d=0,p=0;for(;p<c;p++)if(s[p]==="\\")p++;else if(s[p]===l[0])d++;else if(s[p]===l[1]&&(d--,d<0))return p;return-1}(r[2],"()");if(i>-1){const s=(r[0].indexOf("!")===0?5:4)+r[1].length+i;r[2]=r[2].substring(0,i),r[0]=r[0].substring(0,s).trim(),r[3]=""}}let a=r[2],o="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);i&&(a=i[1],o=i[3])}else o=r[3]?r[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(n)?a.slice(1):a.slice(1,-1)),nd(r,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},r[0],this.lexer)}}reflink(t,r){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let a=(n[2]||n[1]).replace(/\s+/g," ");if(a=r[a.toLowerCase()],!a||!a.href){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return nd(n,a,n[0],this.lexer)}}emStrong(t,r,n=""){let a=this.rules.inline.emStrong.lDelim.exec(t);if(!a||a[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=a[1]||a[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const i=a[0].length-1;let s,l,c=i,d=0;const p=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(p.lastIndex=0,r=r.slice(-1*t.length+i);(a=p.exec(r))!=null;){if(s=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!s)continue;if(l=s.length,a[3]||a[4]){c+=l;continue}if((a[5]||a[6])&&i%3&&!((i+l)%3)){d+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+d),Math.min(i,l)%2){const f=t.slice(1,i+a.index+l);return{type:"em",raw:t.slice(0,i+a.index+l+1),text:f,tokens:this.lexer.inlineTokens(f,[])}}const h=t.slice(2,i+a.index+l-1);return{type:"strong",raw:t.slice(0,i+a.index+l+1),text:h,tokens:this.lexer.inlineTokens(h,[])}}}}codespan(t){const r=this.rules.inline.code.exec(t);if(r){let n=r[2].replace(/\n/g," ");const a=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return a&&o&&(n=n.substring(1,n.length-1)),n=dt(n,!0),{type:"codespan",raw:r[0],text:n}}}br(t){const r=this.rules.inline.br.exec(t);if(r)return{type:"br",raw:r[0]}}del(t){const r=this.rules.inline.del.exec(t);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2],[])}}autolink(t,r){const n=this.rules.inline.autolink.exec(t);if(n){let a,o;return n[2]==="@"?(a=dt(this.options.mangle?r(n[1]):n[1]),o="mailto:"+a):(a=dt(n[1]),o=a),{type:"link",raw:n[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}url(t,r){let n;if(n=this.rules.inline.url.exec(t)){let a,o;if(n[2]==="@")a=dt(this.options.mangle?r(n[0]):n[0]),o="mailto:"+a;else{let i;do i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(i!==n[0]);a=dt(n[0]),o=n[1]==="www."?"http://"+a:a}return{type:"link",raw:n[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(t,r){const n=this.rules.inline.text.exec(t);if(n){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):dt(n[0]):n[0]:dt(this.options.smartypants?r(n[0]):n[0]),{type:"text",raw:n[0],text:a}}}}const he={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:oo,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};he.def=Ue(he.def).replace("label",he._label).replace("title",he._title).getRegex(),he.bullet=/(?:[*+-]|\d{1,9}[.)])/,he.listItemStart=Ue(/^( *)(bull) */).replace("bull",he.bullet).getRegex(),he.list=Ue(he.list).replace(/bull/g,he.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+he.def.source+")").getRegex(),he._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",he._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,he.html=Ue(he.html,"i").replace("comment",he._comment).replace("tag",he._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),he.paragraph=Ue(he._paragraph).replace("hr",he.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",he._tag).getRegex(),he.blockquote=Ue(he.blockquote).replace("paragraph",he.paragraph).getRegex(),he.normal=Bt({},he),he.gfm=Bt({},he.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),he.gfm.table=Ue(he.gfm.table).replace("hr",he.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",he._tag).getRegex(),he.gfm.paragraph=Ue(he._paragraph).replace("hr",he.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",he.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",he._tag).getRegex(),he.pedantic=Bt({},he.normal,{html:Ue(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",he._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:oo,paragraph:Ue(he.normal._paragraph).replace("hr",he.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",he.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const ne={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:oo,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:oo,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Pb(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function ad(e){let t,r,n="";const a=e.length;for(t=0;t<a;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}ne._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",ne.punctuation=Ue(ne.punctuation).replace(/punctuation/g,ne._punctuation).getRegex(),ne.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,ne.escapedEmSt=/\\\*|\\_/g,ne._comment=Ue(he._comment).replace("(?:-->|$)","-->").getRegex(),ne.emStrong.lDelim=Ue(ne.emStrong.lDelim).replace(/punct/g,ne._punctuation).getRegex(),ne.emStrong.rDelimAst=Ue(ne.emStrong.rDelimAst,"g").replace(/punct/g,ne._punctuation).getRegex(),ne.emStrong.rDelimUnd=Ue(ne.emStrong.rDelimUnd,"g").replace(/punct/g,ne._punctuation).getRegex(),ne._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,ne._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,ne._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,ne.autolink=Ue(ne.autolink).replace("scheme",ne._scheme).replace("email",ne._email).getRegex(),ne._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,ne.tag=Ue(ne.tag).replace("comment",ne._comment).replace("attribute",ne._attribute).getRegex(),ne._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ne._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,ne._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,ne.link=Ue(ne.link).replace("label",ne._label).replace("href",ne._href).replace("title",ne._title).getRegex(),ne.reflink=Ue(ne.reflink).replace("label",ne._label).replace("ref",he._label).getRegex(),ne.nolink=Ue(ne.nolink).replace("ref",he._label).getRegex(),ne.reflinkSearch=Ue(ne.reflinkSearch,"g").replace("reflink",ne.reflink).replace("nolink",ne.nolink).getRegex(),ne.normal=Bt({},ne),ne.pedantic=Bt({},ne.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ue(/^!?\[(label)\]\((.*?)\)/).replace("label",ne._label).getRegex(),reflink:Ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ne._label).getRegex()}),ne.gfm=Bt({},ne.normal,{escape:Ue(ne.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),ne.gfm.url=Ue(ne.gfm.url,"i").replace("email",ne.gfm._extended_email).getRegex(),ne.breaks=Bt({},ne.gfm,{br:Ue(ne.br).replace("{2,}","*").getRegex(),text:Ue(ne.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class ir{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||dn,this.options.tokenizer=this.options.tokenizer||new rs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:he.normal,inline:ne.normal};this.options.pedantic?(r.block=he.pedantic,r.inline=ne.pedantic):this.options.gfm&&(r.block=he.gfm,this.options.breaks?r.inline=ne.breaks:r.inline=ne.gfm),this.tokenizer.rules=r}static get rules(){return{block:he,inline:ne}}static lex(t,r){return new ir(r).lex(t)}static lexInline(t,r){return new ir(r).inlineTokens(t)}lex(t){let r;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens}blockTokens(t,r=[]){let n,a,o,i;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,(s,l,c)=>l+"    ".repeat(c.length));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>!!(n=s.call({lexer:this},t,r))&&(t=t.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),a=r[r.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?r.push(n):(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),a=r[r.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(a.raw+=`
`+n.raw,a.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),r.push(n);else{if(o=t,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const l=t.slice(1);let c;this.options.extensions.startBlock.forEach(function(d){c=d.call({lexer:this},l),typeof c=="number"&&c>=0&&(s=Math.min(s,c))}),s<1/0&&s>=0&&(o=t.substring(0,s+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o)))a=r[r.length-1],i&&a.type==="paragraph"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):r.push(n),i=o.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),a=r[r.length-1],a&&a.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):r.push(n);else if(t){const s="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}}return this.state.top=!0,r}inline(t,r){this.inlineQueue.push({src:t,tokens:r})}inlineTokens(t,r=[]){let n,a,o,i,s,l,c=t;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)d.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,i.index)+"["+rd("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,i.index)+"["+rd("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,i.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(s||(l=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>!!(n=d.call({lexer:this},t,r))&&(t=t.substring(n.raw.length),r.push(n),!0))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),a=r[r.length-1],a&&n.type==="text"&&a.type==="text"?(a.raw+=n.raw,a.text+=n.text):r.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),a=r[r.length-1],a&&n.type==="text"&&a.type==="text"?(a.raw+=n.raw,a.text+=n.text):r.push(n);else if(n=this.tokenizer.emStrong(t,c,l))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),r.push(n);else if(n=this.tokenizer.autolink(t,ad))t=t.substring(n.raw.length),r.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,ad))){if(o=t,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const p=t.slice(1);let h;this.options.extensions.startInline.forEach(function(f){h=f.call({lexer:this},p),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(o=t.substring(0,d+1))}if(n=this.tokenizer.inlineText(o,Pb))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(l=n.raw.slice(-1)),s=!0,a=r[r.length-1],a&&a.type==="text"?(a.raw+=n.raw,a.text+=n.text):r.push(n);else if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}else t=t.substring(n.raw.length),r.push(n);return r}}class ns{constructor(t){this.options=t||dn}code(t,r,n){const a=(r||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(t,a);o!=null&&o!==t&&(n=!0,t=o)}return t=t.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+dt(a,!0)+'">'+(n?t:dt(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:dt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,r,n,a){return this.options.headerIds?`<h${r} id="${this.options.headerPrefix+a.slug(n)}">${t}</h${r}>
`:`<h${r}>${t}</h${r}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,r,n){const a=r?"ol":"ul";return"<"+a+(r&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+a+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,r){return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,r){const n=r.header?"th":"td";return(r.align?`<${n} align="${r.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,r,n){if((t=Xp(this.options.sanitize,this.options.baseUrl,t))===null)return n;let a='<a href="'+dt(t)+'"';return r&&(a+=' title="'+r+'"'),a+=">"+n+"</a>",a}image(t,r,n){if((t=Xp(this.options.sanitize,this.options.baseUrl,t))===null)return n;let a=`<img src="${t}" alt="${n}"`;return r&&(a+=` title="${r}"`),a+=this.options.xhtml?"/>":">",a}text(t){return t}}class od{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,r,n){return""+n}image(t,r,n){return""+n}br(){return""}}class id{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,r){let n=t,a=0;if(this.seen.hasOwnProperty(n)){a=this.seen[t];do a++,n=t+"-"+a;while(this.seen.hasOwnProperty(n))}return r||(this.seen[t]=a,this.seen[n]=0),n}slug(t,r={}){const n=this.serialize(t);return this.getNextSafeSlug(n,r.dryrun)}}class sr{constructor(t){this.options=t||dn,this.options.renderer=this.options.renderer||new ns,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new od,this.slugger=new id}static parse(t,r){return new sr(r).parse(t)}static parseInline(t,r){return new sr(r).parseInline(t)}parse(t,r=!0){let n,a,o,i,s,l,c,d,p,h,f,g,x,v,u,O,A,T,j,$="";const P=t.length;for(n=0;n<P;n++)if(h=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(j=this.options.extensions.renderers[h.type].call({parser:this},h),j!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))$+=j||"";else switch(h.type){case"space":continue;case"hr":$+=this.renderer.hr();continue;case"heading":$+=this.renderer.heading(this.parseInline(h.tokens),h.depth,Qp(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":$+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(d="",c="",i=h.header.length,a=0;a<i;a++)c+=this.renderer.tablecell(this.parseInline(h.header[a].tokens),{header:!0,align:h.align[a]});for(d+=this.renderer.tablerow(c),p="",i=h.rows.length,a=0;a<i;a++){for(l=h.rows[a],c="",s=l.length,o=0;o<s;o++)c+=this.renderer.tablecell(this.parseInline(l[o].tokens),{header:!1,align:h.align[o]});p+=this.renderer.tablerow(c)}$+=this.renderer.table(d,p);continue;case"blockquote":p=this.parse(h.tokens),$+=this.renderer.blockquote(p);continue;case"list":for(f=h.ordered,g=h.start,x=h.loose,i=h.items.length,p="",a=0;a<i;a++)u=h.items[a],O=u.checked,A=u.task,v="",u.task&&(T=this.renderer.checkbox(O),x?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=T+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=T+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:T}):v+=T),v+=this.parse(u.tokens,x),p+=this.renderer.listitem(v,A,O);$+=this.renderer.list(p,f,g);continue;case"html":$+=this.renderer.html(h.text);continue;case"paragraph":$+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(p=h.tokens?this.parseInline(h.tokens):h.text;n+1<P&&t[n+1].type==="text";)h=t[++n],p+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);$+=r?this.renderer.paragraph(p):p;continue;default:{const b='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(b);throw new Error(b)}}return $}parseInline(t,r){r=r||this.renderer;let n,a,o,i="";const s=t.length;for(n=0;n<s;n++)if(a=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(o=this.options.extensions.renderers[a.type].call({parser:this},a),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))i+=o||"";else switch(a.type){case"escape":i+=r.text(a.text);break;case"html":i+=r.html(a.text);break;case"link":i+=r.link(a.href,a.title,this.parseInline(a.tokens,r));break;case"image":i+=r.image(a.href,a.title,a.text);break;case"strong":i+=r.strong(this.parseInline(a.tokens,r));break;case"em":i+=r.em(this.parseInline(a.tokens,r));break;case"codespan":i+=r.codespan(a.text);break;case"br":i+=r.br();break;case"del":i+=r.del(this.parseInline(a.tokens,r));break;case"text":i+=r.text(a.text);break;default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return i}}function Y(e,t,r){if(e==null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(r=t,t=null),td(t=Bt({},Y.defaults,t||{})),r){const n=t.highlight;let a;try{a=ir.lex(e,t)}catch(s){return r(s)}const o=function(s){let l;if(!s)try{t.walkTokens&&Y.walkTokens(a,t.walkTokens),l=sr.parse(a,t)}catch(c){s=c}return t.highlight=n,s?r(s):r(null,l)};if(!n||n.length<3||(delete t.highlight,!a.length))return o();let i=0;return Y.walkTokens(a,function(s){s.type==="code"&&(i++,setTimeout(()=>{n(s.text,s.lang,function(l,c){if(l)return o(l);c!=null&&c!==s.text&&(s.text=c,s.escaped=!0),i--,i===0&&o()})},0))}),void(i===0&&o())}try{const n=ir.lex(e,t);return t.walkTokens&&Y.walkTokens(n,t.walkTokens),sr.parse(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+dt(n.message+"",!0)+"</pre>";throw n}}Y.options=Y.setOptions=function(e){var t;return Bt(Y.defaults,e),t=Y.defaults,dn=t,Y},Y.getDefaults=xb,Y.defaults=dn,Y.use=function(...e){const t=Bt({},...e),r=Y.defaults.extensions||{renderers:{},childTokens:{}};let n;e.forEach(a=>{if(a.extensions&&(n=!0,a.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const i=r.renderers?r.renderers[o.name]:null;r.renderers[o.name]=i?function(...s){let l=o.renderer.apply(this,s);return l===!1&&(l=i.apply(this,s)),l}:o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[o.level]?r[o.level].unshift(o.tokenizer):r[o.level]=[o.tokenizer],o.start&&(o.level==="block"?r.startBlock?r.startBlock.push(o.start):r.startBlock=[o.start]:o.level==="inline"&&(r.startInline?r.startInline.push(o.start):r.startInline=[o.start]))}o.childTokens&&(r.childTokens[o.name]=o.childTokens)})),a.renderer){const o=Y.defaults.renderer||new ns;for(const i in a.renderer){const s=o[i];o[i]=(...l)=>{let c=a.renderer[i].apply(o,l);return c===!1&&(c=s.apply(o,l)),c}}t.renderer=o}if(a.tokenizer){const o=Y.defaults.tokenizer||new rs;for(const i in a.tokenizer){const s=o[i];o[i]=(...l)=>{let c=a.tokenizer[i].apply(o,l);return c===!1&&(c=s.apply(o,l)),c}}t.tokenizer=o}if(a.walkTokens){const o=Y.defaults.walkTokens;t.walkTokens=function(i){a.walkTokens.call(this,i),o&&o.call(this,i)}}n&&(t.extensions=r),Y.setOptions(t)})},Y.walkTokens=function(e,t){for(const r of e)switch(t.call(Y,r),r.type){case"table":for(const n of r.header)Y.walkTokens(n.tokens,t);for(const n of r.rows)for(const a of n)Y.walkTokens(a.tokens,t);break;case"list":Y.walkTokens(r.items,t);break;default:Y.defaults.extensions&&Y.defaults.extensions.childTokens&&Y.defaults.extensions.childTokens[r.type]?Y.defaults.extensions.childTokens[r.type].forEach(function(n){Y.walkTokens(r[n],t)}):r.tokens&&Y.walkTokens(r.tokens,t)}},Y.parseInline=function(e,t){if(e==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");td(t=Bt({},Y.defaults,t||{}));try{const r=ir.lexInline(e,t);return t.walkTokens&&Y.walkTokens(r,t.walkTokens),sr.parseInline(r,t)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+dt(r.message+"",!0)+"</pre>";throw r}},Y.Parser=sr,Y.parser=sr.parse,Y.Renderer=ns,Y.TextRenderer=od,Y.Lexer=ir,Y.lexer=ir.lex,Y.Tokenizer=rs,Y.Slugger=id,Y.parse=Y,Y.options,Y.setOptions,Y.use,Y.walkTokens,Y.parseInline,sr.parse,ir.lex;var Rb=N(660),Ze=N.n(Rb);N(251),N(358),N(46),N(503),N(277),N(874),N(366),N(57),N(16);const mr=B`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 400px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`,un=B`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`,ea=B`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`,ta=B`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`,as=B`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`,so=B`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`,ra=B`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`,os=B`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`,is=B`
#api-info {
  font-size:calc(var(--font-size-regular) - 1px);margin-top:8px
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`,hn=B`

`,na=/[\s#:?&={}]/g,Fr="_rapidoc_api_key";function lo(e){return new Promise(t=>setTimeout(t,e))}function aa(e,t){const r=t.currentTarget,n=document.createElement("textarea");n.value=e,n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout(()=>{r.innerText="Copy"},5e3)}catch(a){console.error("Unable to copy",a)}document.body.removeChild(n)}function oa(e,t,r="includes"){return r==="includes"?`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase()):new RegExp(e,"i").test(`${t.method} ${t.path}`)}function ss(e,t=new Set){return e&&Object.keys(e).forEach(r=>{var n;if(t.add(r),e[r].properties)ss(e[r].properties,t);else if((n=e[r].items)!==null&&n!==void 0&&n.properties){var a;ss((a=e[r].items)===null||a===void 0?void 0:a.properties,t)}}),t}function sd(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function ld(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}function Lb(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),t}var co=function(e){return e&&e.Math==Math&&e},ce=co(typeof globalThis=="object"&&globalThis)||co(typeof window=="object"&&window)||co(typeof self=="object"&&self)||co(typeof ce=="object"&&ce)||function(){return this}()||Function("return this")(),He=function(e){try{return!!e()}catch{return!0}},po=!He(function(){var e=function(){}.bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),Fb=po,cd=Function.prototype,pd=cd.apply,dd=cd.call,ia=typeof Reflect=="object"&&Reflect.apply||(Fb?dd.bind(pd):function(){return dd.apply(pd,arguments)}),ud=po,hd=Function.prototype,Db=hd.bind,ls=hd.call,Nb=ud&&Db.bind(ls,ls),Be=ud?function(e){return e&&Nb(e)}:function(e){return e&&function(){return ls.apply(e,arguments)}},nt=function(e){return typeof e=="function"},Dr={},bt=!He(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),zb=po,uo=Function.prototype.call,At=zb?uo.bind(uo):function(){return uo.apply(uo,arguments)},sa={},fd={}.propertyIsEnumerable,md=Object.getOwnPropertyDescriptor,qb=md&&!fd.call({1:2},1);sa.f=qb?function(e){var t=md(this,e);return!!t&&t.enumerable}:fd;var gr,ho,yr=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},gd=Be,Bb=gd({}.toString),Ub=gd("".slice),Nr=function(e){return Ub(Bb(e),8,-1)},Mb=Be,Hb=He,Wb=Nr,cs=ce.Object,Vb=Mb("".split),ps=Hb(function(){return!cs("z").propertyIsEnumerable(0)})?function(e){return Wb(e)=="String"?Vb(e,""):cs(e)}:cs,Gb=ce.TypeError,la=function(e){if(e==null)throw Gb("Can't call method on "+e);return e},Kb=ps,Jb=la,Ut=function(e){return Kb(Jb(e))},Yb=nt,lt=function(e){return typeof e=="object"?e!==null:Yb(e)},ct={},ds=ct,us=ce,Zb=nt,yd=function(e){return Zb(e)?e:void 0},Lt=function(e,t){return arguments.length<2?yd(ds[e])||yd(us[e]):ds[e]&&ds[e][t]||us[e]&&us[e][t]},xt=Be({}.isPrototypeOf),fo=Lt("navigator","userAgent")||"",vd=ce,hs=fo,bd=vd.process,xd=vd.Deno,wd=bd&&bd.versions||xd&&xd.version,$d=wd&&wd.v8;$d&&(ho=(gr=$d.split("."))[0]>0&&gr[0]<4?1:+(gr[0]+gr[1])),!ho&&hs&&(!(gr=hs.match(/Edge\/(\d+)/))||gr[1]>=74)&&(gr=hs.match(/Chrome\/(\d+)/))&&(ho=+gr[1]);var mo=ho,kd=mo,Qb=He,fs=!!Object.getOwnPropertySymbols&&!Qb(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&kd&&kd<41}),Sd=fs&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Xb=Lt,e0=nt,t0=xt,r0=Sd,n0=ce.Object,ms=r0?function(e){return typeof e=="symbol"}:function(e){var t=Xb("Symbol");return e0(t)&&t0(t.prototype,n0(e))},a0=ce.String,go=function(e){try{return a0(e)}catch{return"Object"}},o0=nt,i0=go,s0=ce.TypeError,zr=function(e){if(o0(e))return e;throw s0(i0(e)+" is not a function")},l0=zr,gs=function(e,t){var r=e[t];return r==null?void 0:l0(r)},ys=At,vs=nt,bs=lt,c0=ce.TypeError,yo={exports:{}},Ad=ce,p0=Object.defineProperty,d0=function(e,t){try{p0(Ad,e,{value:t,configurable:!0,writable:!0})}catch{Ad[e]=t}return t},Od="__core-js_shared__",xs=ce[Od]||d0(Od,{}),Ed=xs;(yo.exports=function(e,t){return Ed[e]||(Ed[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.21.1",mode:"pure",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var u0=la,h0=ce.Object,lr=function(e){return h0(u0(e))},f0=lr,m0=Be({}.hasOwnProperty),mt=Object.hasOwn||function(e,t){return m0(f0(e),t)},g0=Be,y0=0,v0=Math.random(),b0=g0(1 .toString),vo=function(e){return"Symbol("+(e===void 0?"":e)+")_"+b0(++y0+v0,36)},x0=ce,w0=yo.exports,Td=mt,$0=vo,Cd=fs,_d=Sd,ca=w0("wks"),qr=x0.Symbol,jd=qr&&qr.for,k0=_d?qr:qr&&qr.withoutSetter||$0,Ge=function(e){if(!Td(ca,e)||!Cd&&typeof ca[e]!="string"){var t="Symbol."+e;Cd&&Td(qr,e)?ca[e]=qr[e]:ca[e]=_d&&jd?jd(t):k0(t)}return ca[e]},S0=At,Id=lt,Pd=ms,A0=gs,O0=function(e,t){var r,n;if(t==="string"&&vs(r=e.toString)&&!bs(n=ys(r,e))||vs(r=e.valueOf)&&!bs(n=ys(r,e))||t!=="string"&&vs(r=e.toString)&&!bs(n=ys(r,e)))return n;throw c0("Can't convert object to primitive value")},E0=Ge,T0=ce.TypeError,C0=E0("toPrimitive"),_0=function(e,t){if(!Id(e)||Pd(e))return e;var r,n=A0(e,C0);if(n){if(t===void 0&&(t="default"),r=S0(n,e,t),!Id(r)||Pd(r))return r;throw T0("Can't convert object to primitive value")}return t===void 0&&(t="number"),O0(e,t)},j0=ms,bo=function(e){var t=_0(e,"string");return j0(t)?t:t+""},Rd=lt,ws=ce.document,I0=Rd(ws)&&Rd(ws.createElement),$s=function(e){return I0?ws.createElement(e):{}},P0=$s,Ld=!bt&&!He(function(){return Object.defineProperty(P0("div"),"a",{get:function(){return 7}}).a!=7}),R0=bt,L0=At,F0=sa,D0=yr,N0=Ut,z0=bo,q0=mt,B0=Ld,Fd=Object.getOwnPropertyDescriptor;Dr.f=R0?Fd:function(e,t){if(e=N0(e),t=z0(t),B0)try{return Fd(e,t)}catch{}if(q0(e,t))return D0(!L0(F0.f,e,t),e[t])};var U0=He,M0=nt,H0=/#|\.prototype\./,pa=function(e,t){var r=V0[W0(e)];return r==K0||r!=G0&&(M0(t)?U0(t):!!t)},W0=pa.normalize=function(e){return String(e).replace(H0,".").toLowerCase()},V0=pa.data={},G0=pa.NATIVE="N",K0=pa.POLYFILL="P",Dd=pa,J0=zr,Y0=po,Z0=Be(Be.bind),Br=function(e,t){return J0(e),t===void 0?e:Y0?Z0(e,t):function(){return e.apply(t,arguments)}},Ct={},Nd=bt&&He(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),zd=ce,Q0=lt,X0=zd.String,ex=zd.TypeError,Ot=function(e){if(Q0(e))return e;throw ex(X0(e)+" is not an object")},tx=bt,rx=Ld,nx=Nd,xo=Ot,qd=bo,ax=ce.TypeError,ks=Object.defineProperty,ox=Object.getOwnPropertyDescriptor,ix="enumerable",sx="configurable",lx="writable";Ct.f=tx?nx?function(e,t,r){if(xo(e),t=qd(t),xo(r),typeof e=="function"&&t==="prototype"&&"value"in r&&lx in r&&!r.writable){var n=ox(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:sx in r?r.configurable:n.configurable,enumerable:ix in r?r.enumerable:n.enumerable,writable:!1})}return ks(e,t,r)}:ks:function(e,t,r){if(xo(e),t=qd(t),xo(r),rx)try{return ks(e,t,r)}catch{}if("get"in r||"set"in r)throw ax("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var cx=Ct,px=yr,vr=bt?function(e,t,r){return cx.f(e,t,px(1,r))}:function(e,t,r){return e[t]=r,e},wo=ce,dx=ia,ux=Be,hx=nt,fx=Dr.f,mx=Dd,fn=ct,gx=Br,mn=vr,Bd=mt,yx=function(e){var t=function(r,n,a){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,a)}return dx(e,this,arguments)};return t.prototype=e.prototype,t},Ie=function(e,t){var r,n,a,o,i,s,l,c,d=e.target,p=e.global,h=e.stat,f=e.proto,g=p?wo:h?wo[d]:(wo[d]||{}).prototype,x=p?fn:fn[d]||mn(fn,d,{})[d],v=x.prototype;for(a in t)r=!mx(p?a:d+(h?".":"#")+a,e.forced)&&g&&Bd(g,a),i=x[a],r&&(s=e.noTargetGet?(c=fx(g,a))&&c.value:g[a]),o=r&&s?s:t[a],r&&typeof i==typeof o||(l=e.bind&&r?gx(o,wo):e.wrap&&r?yx(o):f&&hx(o)?ux(o):o,(e.sham||o&&o.sham||i&&i.sham)&&mn(l,"sham",!0),mn(x,a,l),f&&(Bd(fn,n=d+"Prototype")||mn(fn,n,{}),mn(fn[n],a,o),e.real&&v&&!v[a]&&mn(v,a,o)))},vx=Math.ceil,bx=Math.floor,$o=function(e){var t=+e;return t!=t||t===0?0:(t>0?bx:vx)(t)},xx=$o,wx=Math.max,$x=Math.min,ko=function(e,t){var r=xx(e);return r<0?wx(r+t,0):$x(r,t)},kx=$o,Sx=Math.min,Ud=function(e){return e>0?Sx(kx(e),9007199254740991):0},Ax=Ud,br=function(e){return Ax(e.length)},Ox=Ut,Ex=ko,Tx=br,Md=function(e){return function(t,r,n){var a,o=Ox(t),i=Tx(o),s=Ex(n,i);if(e&&r!=r){for(;i>s;)if((a=o[s++])!=a)return!0}else for(;i>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},Ss={includes:Md(!0),indexOf:Md(!1)},da={},As=mt,Cx=Ut,_x=Ss.indexOf,jx=da,Hd=Be([].push),Wd=function(e,t){var r,n=Cx(e),a=0,o=[];for(r in n)!As(jx,r)&&As(n,r)&&Hd(o,r);for(;t.length>a;)As(n,r=t[a++])&&(~_x(o,r)||Hd(o,r));return o},Os=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ix=Wd,Px=Os,ua=Object.keys||function(e){return Ix(e,Px)},Rx=lr,Vd=ua;Ie({target:"Object",stat:!0,forced:He(function(){Vd(1)})},{keys:function(e){return Vd(Rx(e))}});var Gd=ct.Object.keys,Kd=Gd,Lx=Nr,ha=Array.isArray||function(e){return Lx(e)=="Array"},Jd={};Jd[Ge("toStringTag")]="z";var Es=String(Jd)==="[object z]",Fx=ce,Dx=Es,Nx=nt,So=Nr,zx=Ge("toStringTag"),qx=Fx.Object,Bx=So(function(){return arguments}())=="Arguments",xr=Dx?So:function(e){var t,r,n;return e===void 0?"Undefined":e===null?"Null":typeof(r=function(a,o){try{return a[o]}catch{}}(t=qx(e),zx))=="string"?r:Bx?So(t):(n=So(t))=="Object"&&Nx(t.callee)?"Arguments":n},Ux=xr,Mx=ce.String,Ur=function(e){if(Ux(e)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return Mx(e)},Ao={},Hx=bt,Wx=Nd,Vx=Ct,Gx=Ot,Kx=Ut,Jx=ua;Ao.f=Hx&&!Wx?Object.defineProperties:function(e,t){Gx(e);for(var r,n=Kx(t),a=Jx(t),o=a.length,i=0;o>i;)Vx.f(e,r=a[i++],n[r]);return e};var Oo,Yd=Lt("document","documentElement"),Yx=yo.exports,Zx=vo,Zd=Yx("keys"),Eo=function(e){return Zd[e]||(Zd[e]=Zx(e))},Qx=Ot,Xx=Ao,Qd=Os,ew=da,tw=Yd,rw=$s,Xd=Eo("IE_PROTO"),Ts=function(){},eu=function(e){return"<script>"+e+"<\/script>"},tu=function(e){e.write(eu("")),e.close();var t=e.parentWindow.Object;return e=null,t},To=function(){try{Oo=new ActiveXObject("htmlfile")}catch{}var e,t;To=typeof document<"u"?document.domain&&Oo?tu(Oo):((t=rw("iframe")).style.display="none",tw.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(eu("document.F=Object")),e.close(),e.F):tu(Oo);for(var r=Qd.length;r--;)delete To.prototype[Qd[r]];return To()};ew[Xd]=!0;var fa=Object.create||function(e,t){var r;return e!==null?(Ts.prototype=Qx(e),r=new Ts,Ts.prototype=null,r[Xd]=e):r=To(),t===void 0?r:Xx.f(r,t)},ma={},nw=Wd,aw=Os.concat("length","prototype");ma.f=Object.getOwnPropertyNames||function(e){return nw(e,aw)};var Cs={},ow=bo,iw=Ct,sw=yr,gn=function(e,t,r){var n=ow(t);n in e?iw.f(e,n,sw(0,r)):e[n]=r},ru=ko,lw=br,cw=gn,pw=ce.Array,dw=Math.max,nu=function(e,t,r){for(var n=lw(e),a=ru(t,n),o=ru(r===void 0?n:r,n),i=pw(dw(o-a,0)),s=0;a<o;a++,s++)cw(i,s,e[a]);return i.length=s,i},uw=Nr,hw=Ut,au=ma.f,fw=nu,ou=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Cs.f=function(e){return ou&&uw(e)=="Window"?function(t){try{return au(t)}catch{return fw(ou)}}(e):au(hw(e))};var Co={};Co.f=Object.getOwnPropertySymbols;var _s=Be([].slice),mw=vr,ga=function(e,t,r,n){n&&n.enumerable?e[t]=r:mw(e,t,r)},_o={},gw=Ge;_o.f=gw;var iu=ct,yw=mt,vw=_o,bw=Ct.f,et=function(e){var t=iu.Symbol||(iu.Symbol={});yw(t,e)||bw(t,e,{value:vw.f(e)})},xw=xr,ww=Es?{}.toString:function(){return"[object "+xw(this)+"]"},$w=Es,kw=Ct.f,Sw=vr,Aw=mt,Ow=ww,su=Ge("toStringTag"),Mr=function(e,t,r,n){if(e){var a=r?e:e.prototype;Aw(a,su)||kw(a,su,{configurable:!0,value:t}),n&&!$w&&Sw(a,"toString",Ow)}},Ew=nt,js=xs,Tw=Be(Function.toString);Ew(js.inspectSource)||(js.inspectSource=function(e){return Tw(e)});var jo,ya,Io,Is=js.inspectSource,Cw=nt,_w=Is,lu=ce.WeakMap,cu=Cw(lu)&&/native code/.test(_w(lu)),jw=cu,pu=ce,Ps=Be,Iw=lt,Pw=vr,Rs=mt,Ls=xs,Rw=Eo,Lw=da,du="Object already initialized",Fs=pu.TypeError,Fw=pu.WeakMap;if(jw||Ls.state){var Hr=Ls.state||(Ls.state=new Fw),Dw=Ps(Hr.get),uu=Ps(Hr.has),Nw=Ps(Hr.set);jo=function(e,t){if(uu(Hr,e))throw new Fs(du);return t.facade=e,Nw(Hr,e,t),t},ya=function(e){return Dw(Hr,e)||{}},Io=function(e){return uu(Hr,e)}}else{var yn=Rw("state");Lw[yn]=!0,jo=function(e,t){if(Rs(e,yn))throw new Fs(du);return t.facade=e,Pw(e,yn,t),t},ya=function(e){return Rs(e,yn)?e[yn]:{}},Io=function(e){return Rs(e,yn)}}var Gt={set:jo,get:ya,has:Io,enforce:function(e){return Io(e)?ya(e):jo(e,{})},getterFor:function(e){return function(t){var r;if(!Iw(t)||(r=ya(t)).type!==e)throw Fs("Incompatible receiver, "+e+" required");return r}}},zw=Be,qw=He,hu=nt,Bw=xr,Uw=Is,fu=function(){},Mw=[],mu=Lt("Reflect","construct"),Ds=/^\s*(?:class|function)\b/,Hw=zw(Ds.exec),Ww=!Ds.exec(fu),va=function(e){if(!hu(e))return!1;try{return mu(fu,Mw,e),!0}catch{return!1}},gu=function(e){if(!hu(e))return!1;switch(Bw(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ww||!!Hw(Ds,Uw(e))}catch{return!0}};gu.sham=!0;var Po=!mu||qw(function(){var e;return va(va.call)||!va(Object)||!va(function(){e=!0})||e})?gu:va,Vw=ce,yu=ha,Gw=Po,Kw=lt,Jw=Ge("species"),vu=Vw.Array,Yw=function(e){var t;return yu(e)&&(t=e.constructor,(Gw(t)&&(t===vu||yu(t.prototype))||Kw(t)&&(t=t[Jw])===null)&&(t=void 0)),t===void 0?vu:t},Ns=function(e,t){return new(Yw(e))(t===0?0:t)},Zw=Br,Qw=ps,Xw=lr,e1=br,t1=Ns,bu=Be([].push),wr=function(e){var t=e==1,r=e==2,n=e==3,a=e==4,o=e==6,i=e==7,s=e==5||o;return function(l,c,d,p){for(var h,f,g=Xw(l),x=Qw(g),v=Zw(c,d),u=e1(x),O=0,A=p||t1,T=t?A(l,u):r||i?A(l,0):void 0;u>O;O++)if((s||O in x)&&(f=v(h=x[O],O,g),e))if(t)T[O]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return O;case 2:bu(T,h)}else switch(e){case 4:return!1;case 7:bu(T,h)}return o?-1:n||a?a:T}},$r={forEach:wr(0),map:wr(1),filter:wr(2),some:wr(3),every:wr(4),find:wr(5),findIndex:wr(6),filterReject:wr(7)},vn=Ie,zs=ce,r1=Lt,n1=ia,ba=At,a1=Be,bn=bt,Wr=fs,qs=He,at=mt,o1=ha,i1=nt,s1=lt,l1=xt,Bs=ms,Us=Ot,c1=lr,Ro=Ut,Ms=bo,xu=Ur,Hs=yr,xa=fa,wu=ua,p1=ma,$u=Cs,Ws=Co,ku=Dr,Su=Ct,d1=Ao,Au=sa,u1=_s,Vs=ga,wa=yo.exports,Ou=da,Eu=vo,Tu=Ge,h1=_o,f1=et,m1=Mr,Cu=Gt,Lo=$r.forEach,Et=Eo("hidden"),Fo="Symbol",_u=Tu("toPrimitive"),g1=Cu.set,ju=Cu.getterFor(Fo),Mt=Object.prototype,kr=zs.Symbol,Vr=kr&&kr.prototype,Iu=zs.TypeError,Gs=zs.QObject,$a=r1("JSON","stringify"),Pu=ku.f,Sr=Su.f,Ru=$u.f,y1=Au.f,Lu=a1([].push),cr=wa("symbols"),ka=wa("op-symbols"),Ks=wa("string-to-symbol-registry"),Js=wa("symbol-to-string-registry"),v1=wa("wks"),Ys=!Gs||!Gs.prototype||!Gs.prototype.findChild,Zs=bn&&qs(function(){return xa(Sr({},"a",{get:function(){return Sr(this,"a",{value:7}).a}})).a!=7})?function(e,t,r){var n=Pu(Mt,t);n&&delete Mt[t],Sr(e,t,r),n&&e!==Mt&&Sr(Mt,t,n)}:Sr,Qs=function(e,t){var r=cr[e]=xa(Vr);return g1(r,{type:Fo,tag:e,description:t}),bn||(r.description=t),r},Do=function(e,t,r){e===Mt&&Do(ka,t,r),Us(e);var n=Ms(t);return Us(r),at(cr,n)?(r.enumerable?(at(e,Et)&&e[Et][n]&&(e[Et][n]=!1),r=xa(r,{enumerable:Hs(0,!1)})):(at(e,Et)||Sr(e,Et,Hs(1,{})),e[Et][n]=!0),Zs(e,n,r)):Sr(e,n,r)},Xs=function(e,t){Us(e);var r=Ro(t),n=wu(r).concat(el(r));return Lo(n,function(a){bn&&!ba(Fu,r,a)||Do(e,a,r[a])}),e},Fu=function(e){var t=Ms(e),r=ba(y1,this,t);return!(this===Mt&&at(cr,t)&&!at(ka,t))&&(!(r||!at(this,t)||!at(cr,t)||at(this,Et)&&this[Et][t])||r)},Du=function(e,t){var r=Ro(e),n=Ms(t);if(r!==Mt||!at(cr,n)||at(ka,n)){var a=Pu(r,n);return!a||!at(cr,n)||at(r,Et)&&r[Et][n]||(a.enumerable=!0),a}},Nu=function(e){var t=Ru(Ro(e)),r=[];return Lo(t,function(n){at(cr,n)||at(Ou,n)||Lu(r,n)}),r},el=function(e){var t=e===Mt,r=Ru(t?ka:Ro(e)),n=[];return Lo(r,function(a){!at(cr,a)||t&&!at(Mt,a)||Lu(n,cr[a])}),n};if(Wr||(Vs(Vr=(kr=function(){if(l1(Vr,this))throw Iu("Symbol is not a constructor");var e=arguments.length&&arguments[0]!==void 0?xu(arguments[0]):void 0,t=Eu(e),r=function(n){this===Mt&&ba(r,ka,n),at(this,Et)&&at(this[Et],t)&&(this[Et][t]=!1),Zs(this,t,Hs(1,n))};return bn&&Ys&&Zs(Mt,t,{configurable:!0,set:r}),Qs(t,e)}).prototype,"toString",function(){return ju(this).tag}),Vs(kr,"withoutSetter",function(e){return Qs(Eu(e),e)}),Au.f=Fu,Su.f=Do,d1.f=Xs,ku.f=Du,p1.f=$u.f=Nu,Ws.f=el,h1.f=function(e){return Qs(Tu(e),e)},bn&&Sr(Vr,"description",{configurable:!0,get:function(){return ju(this).description}})),vn({global:!0,wrap:!0,forced:!Wr,sham:!Wr},{Symbol:kr}),Lo(wu(v1),function(e){f1(e)}),vn({target:Fo,stat:!0,forced:!Wr},{for:function(e){var t=xu(e);if(at(Ks,t))return Ks[t];var r=kr(t);return Ks[t]=r,Js[r]=t,r},keyFor:function(e){if(!Bs(e))throw Iu(e+" is not a symbol");if(at(Js,e))return Js[e]},useSetter:function(){Ys=!0},useSimple:function(){Ys=!1}}),vn({target:"Object",stat:!0,forced:!Wr,sham:!bn},{create:function(e,t){return t===void 0?xa(e):Xs(xa(e),t)},defineProperty:Do,defineProperties:Xs,getOwnPropertyDescriptor:Du}),vn({target:"Object",stat:!0,forced:!Wr},{getOwnPropertyNames:Nu,getOwnPropertySymbols:el}),vn({target:"Object",stat:!0,forced:qs(function(){Ws.f(1)})},{getOwnPropertySymbols:function(e){return Ws.f(c1(e))}}),$a&&vn({target:"JSON",stat:!0,forced:!Wr||qs(function(){var e=kr();return $a([e])!="[null]"||$a({a:e})!="{}"||$a(Object(e))!="{}"})},{stringify:function(e,t,r){var n=u1(arguments),a=t;if((s1(t)||e!==void 0)&&!Bs(e))return o1(t)||(t=function(o,i){if(i1(a)&&(i=ba(a,this,o,i)),!Bs(i))return i}),n[1]=t,n1($a,null,n)}}),!Vr[_u]){var b1=Vr.valueOf;Vs(Vr,_u,function(e){return ba(b1,this)})}m1(kr,Fo),Ou[Et]=!0;var No=ct.Object.getOwnPropertySymbols,x1=He,w1=mo,$1=Ge("species"),Sa=function(e){return w1>=51||!x1(function(){var t=[];return(t.constructor={})[$1]=function(){return{foo:1}},t[e](Boolean).foo!==1})},k1=$r.filter;Ie({target:"Array",proto:!0,forced:!Sa("filter")},{filter:function(e){return k1(this,e,arguments.length>1?arguments[1]:void 0)}});var S1=ct,Ft=function(e){return S1[e+"Prototype"]},A1=Ft("Array").filter,O1=xt,E1=A1,tl=Array.prototype,zu=function(e){var t=e.filter;return e===tl||O1(tl,e)&&t===tl.filter?E1:t},T1=zu,qu={exports:{}},C1=Ie,_1=He,j1=Ut,Bu=Dr.f,Uu=bt,I1=_1(function(){Bu(1)});C1({target:"Object",stat:!0,forced:!Uu||I1,sham:!Uu},{getOwnPropertyDescriptor:function(e,t){return Bu(j1(e),t)}});var Mu=ct.Object,P1=qu.exports=function(e,t){return Mu.getOwnPropertyDescriptor(e,t)};Mu.getOwnPropertyDescriptor.sham&&(P1.sham=!0);var Gr,Hu,Wu,Vu=qu.exports,xn={},rl=bt,R1=mt,Gu=Function.prototype,L1=rl&&Object.getOwnPropertyDescriptor,nl=R1(Gu,"name"),F1={EXISTS:nl,PROPER:nl&&function(){}.name==="something",CONFIGURABLE:nl&&(!rl||rl&&L1(Gu,"name").configurable)},D1=!He(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),N1=ce,z1=mt,q1=nt,B1=lr,U1=D1,Ku=Eo("IE_PROTO"),al=N1.Object,M1=al.prototype,ol=U1?al.getPrototypeOf:function(e){var t=B1(e);if(z1(t,Ku))return t[Ku];var r=t.constructor;return q1(r)&&t instanceof r?r.prototype:t instanceof al?M1:null},H1=He,W1=nt,V1=fa,Ju=ol,G1=ga,il=Ge("iterator"),Yu=!1;[].keys&&("next"in(Wu=[].keys())?(Hu=Ju(Ju(Wu)))!==Object.prototype&&(Gr=Hu):Yu=!0);var K1=Gr==null||H1(function(){var e={};return Gr[il].call(e)!==e});W1((Gr=K1?{}:V1(Gr))[il])||G1(Gr,il,function(){return this});var Zu={IteratorPrototype:Gr,BUGGY_SAFARI_ITERATORS:Yu},J1=Zu.IteratorPrototype,Y1=fa,Z1=yr,Q1=Mr,X1=xn,e$=function(){return this},Qu=function(e,t,r,n){var a=t+" Iterator";return e.prototype=Y1(J1,{next:Z1(+!n,r)}),Q1(e,a,!1,!0),X1[a]=e$,e},Xu=ce,t$=nt,r$=Xu.String,n$=Xu.TypeError,a$=Be,o$=Ot,i$=function(e){if(typeof e=="object"||t$(e))return e;throw n$("Can't set "+r$(e)+" as a prototype")},s$=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=a$(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch{}return function(n,a){return o$(n),i$(a),t?e(n,a):n.__proto__=a,n}}():void 0),l$=Ie,c$=At,p$=Qu,d$=ol,u$=Mr,eh=ga,th=xn,h$=F1.PROPER,zo=Zu.BUGGY_SAFARI_ITERATORS,sl=Ge("iterator"),rh="keys",qo="values",nh="entries",f$=function(){return this},ah=function(e,t,r,n,a,o,i){p$(r,t,n);var s,l,c,d=function(u){if(u===a&&x)return x;if(!zo&&u in f)return f[u];switch(u){case rh:case qo:case nh:return function(){return new r(this,u)}}return function(){return new r(this)}},p=t+" Iterator",h=!1,f=e.prototype,g=f[sl]||f["@@iterator"]||a&&f[a],x=!zo&&g||d(a),v=t=="Array"&&f.entries||g;if(v&&(s=d$(v.call(new e)))!==Object.prototype&&s.next&&(u$(s,p,!0,!0),th[p]=f$),h$&&a==qo&&g&&g.name!==qo&&(h=!0,x=function(){return c$(g,this)}),a)if(l={values:d(qo),keys:o?x:d(rh),entries:d(nh)},i)for(c in l)(zo||h||!(c in f))&&eh(f,c,l[c]);else l$({target:t,proto:!0,forced:zo||h},l);return i&&f[sl]!==x&&eh(f,sl,x,{name:a}),th[t]=x,l},m$=Ut,oh=xn,ih=Gt;Ct.f;var g$=ah,sh="Array Iterator",y$=ih.set,v$=ih.getterFor(sh);g$(Array,"Array",function(e,t){y$(this,{type:sh,target:m$(e),index:0,kind:t})},function(){var e=v$(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):r=="keys"?{value:n,done:!1}:r=="values"?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}},"values"),oh.Arguments=oh.Array;var b$={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},x$=ce,w$=xr,$$=vr,lh=xn,ch=Ge("toStringTag");for(var ll in b$){var ph=x$[ll],cl=ph&&ph.prototype;cl&&w$(cl)!==ch&&$$(cl,ch,ll),lh[ll]=lh.Array}var k$=He,dh=function(e,t){var r=[][e];return!!r&&k$(function(){r.call(null,t||function(){return 1},1)})},S$=$r.forEach,uh=dh("forEach")?[].forEach:function(e){return S$(this,e,arguments.length>1?arguments[1]:void 0)};Ie({target:"Array",proto:!0,forced:[].forEach!=uh},{forEach:uh});var A$=Ft("Array").forEach,O$=xr,E$=mt,T$=xt,C$=A$,pl=Array.prototype,_$={DOMTokenList:!0,NodeList:!0},hh=function(e){var t=e.forEach;return e===pl||T$(pl,e)&&t===pl.forEach||E$(_$,O$(e))?C$:t},j$=Lt,I$=ma,P$=Co,R$=Ot,L$=Be([].concat),fh=j$("Reflect","ownKeys")||function(e){var t=I$.f(R$(e)),r=P$.f;return r?L$(t,r(e)):t},F$=fh,D$=Ut,N$=Dr,z$=gn;Ie({target:"Object",stat:!0,sham:!bt},{getOwnPropertyDescriptors:function(e){for(var t,r,n=D$(e),a=N$.f,o=F$(n),i={},s=0;o.length>s;)(r=a(n,t=o[s++]))!==void 0&&z$(i,t,r);return i}});var mh=ct.Object.getOwnPropertyDescriptors,gh={exports:{}},q$=Ie,B$=bt,yh=Ao.f;q$({target:"Object",stat:!0,forced:Object.defineProperties!==yh,sham:!B$},{defineProperties:yh});var vh=ct.Object,U$=gh.exports=function(e,t){return vh.defineProperties(e,t)};vh.defineProperties.sham&&(U$.sham=!0);var M$=gh.exports,bh={exports:{}},H$=Ie,W$=bt,xh=Ct.f;H$({target:"Object",stat:!0,forced:Object.defineProperty!==xh,sham:!W$},{defineProperty:xh});var wh=ct.Object,V$=bh.exports=function(e,t,r){return wh.defineProperty(e,t,r)};wh.defineProperty.sham&&(V$.sham=!0);var Bo=bh.exports;function G$(e,t,r){return t in e?Bo(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $h(e,t){var r=Kd(e);if(No){var n=No(e);t&&(n=T1(n).call(n,function(a){return Vu(e,a).enumerable})),r.push.apply(r,n)}return r}function Ke(e){for(var t=1;t<arguments.length;t++){var r,n,a=arguments[t]!=null?arguments[t]:{};t%2?hh(r=$h(Object(a),!0)).call(r,function(o){G$(e,o,a[o])}):mh?M$(e,mh(a)):hh(n=$h(Object(a))).call(n,function(o){Bo(e,o,Vu(a,o))})}return e}var kh=bt,K$=Be,J$=At,Y$=He,dl=ua,Z$=Co,Q$=sa,X$=lr,ek=ps,wn=Object.assign,Sh=Object.defineProperty,tk=K$([].concat),Ah=!wn||Y$(function(){if(kh&&wn({b:1},wn(Sh({},"a",{enumerable:!0,get:function(){Sh(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(a){t[a]=a}),wn({},e)[r]!=7||dl(wn({},t)).join("")!=n})?function(e,t){for(var r=X$(e),n=arguments.length,a=1,o=Z$.f,i=Q$.f;n>a;)for(var s,l=ek(arguments[a++]),c=o?tk(dl(l),o(l)):dl(l),d=c.length,p=0;d>p;)s=c[p++],kh&&!J$(i,l,s)||(r[s]=l[s]);return r}:wn;Ie({target:"Object",stat:!0,forced:Object.assign!==Ah},{assign:Ah});var Dt=ct.Object.assign,rk=lt,nk=Nr,ak=Ge("match"),ok=function(e){var t;return rk(e)&&((t=e[ak])!==void 0?!!t:nk(e)=="RegExp")},ik=ce.TypeError,Oh=function(e){if(ok(e))throw ik("The method doesn't accept regular expressions");return e},sk=Ge("match"),Eh=function(e){var t=/./;try{"/./"[e](t)}catch{try{return t[sk]=!1,"/./"[e](t)}catch{}}return!1},lk=Ie,Th=Be,ck=Ud,Ch=Ur,pk=Oh,dk=la,uk=Eh,_h=Th("".startsWith),hk=Th("".slice),fk=Math.min;lk({target:"String",proto:!0,forced:!uk("startsWith")},{startsWith:function(e){var t=Ch(dk(this));pk(e);var r=ck(fk(arguments.length>1?arguments[1]:void 0,t.length)),n=Ch(e);return _h?_h(t,n,r):hk(t,r,r+n.length)===n}});var mk=Ft("String").startsWith,gk=xt,yk=mk,ul=String.prototype,jh=function(e){var t=e.startsWith;return typeof e=="string"||e===ul||gk(ul,e)&&t===ul.startsWith?yk:t},_t={},hl={exports:{}};(function(e,t){(function(r){var n=t&&!t.nodeType&&t,a=e&&!e.nodeType&&e,o=typeof N.g=="object"&&N.g;o.global!==o&&o.window!==o&&o.self!==o||(r=o);var i,s,l=2147483647,c=36,d=/^xn--/,p=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},g=Math.floor,x=String.fromCharCode;function v(k){throw RangeError(f[k])}function u(k,E){for(var w=k.length,y=[];w--;)y[w]=E(k[w]);return y}function O(k,E){var w=k.split("@"),y="";return w.length>1&&(y=w[0]+"@",k=w[1]),y+u((k=k.replace(h,".")).split("."),E).join(".")}function A(k){for(var E,w,y=[],S=0,L=k.length;S<L;)(E=k.charCodeAt(S++))>=55296&&E<=56319&&S<L?(64512&(w=k.charCodeAt(S++)))==56320?y.push(((1023&E)<<10)+(1023&w)+65536):(y.push(E),S--):y.push(E);return y}function T(k){return u(k,function(E){var w="";return E>65535&&(w+=x((E-=65536)>>>10&1023|55296),E=56320|1023&E),w+=x(E)}).join("")}function j(k,E){return k+22+75*(k<26)-((E!=0)<<5)}function $(k,E,w){var y=0;for(k=w?g(k/700):k>>1,k+=g(k/E);k>455;y+=c)k=g(k/35);return g(y+36*k/(k+38))}function P(k){var E,w,y,S,L,z,V,_,C,U,re,Q=[],xe=k.length,ye=0,De=128,Ce=72;for((w=k.lastIndexOf("-"))<0&&(w=0),y=0;y<w;++y)k.charCodeAt(y)>=128&&v("not-basic"),Q.push(k.charCodeAt(y));for(S=w>0?w+1:0;S<xe;){for(L=ye,z=1,V=c;S>=xe&&v("invalid-input"),((_=(re=k.charCodeAt(S++))-48<10?re-22:re-65<26?re-65:re-97<26?re-97:c)>=c||_>g((l-ye)/z))&&v("overflow"),ye+=_*z,!(_<(C=V<=Ce?1:V>=Ce+26?26:V-Ce));V+=c)z>g(l/(U=c-C))&&v("overflow"),z*=U;Ce=$(ye-L,E=Q.length+1,L==0),g(ye/E)>l-De&&v("overflow"),De+=g(ye/E),ye%=E,Q.splice(ye++,0,De)}return T(Q)}function b(k){var E,w,y,S,L,z,V,_,C,U,re,Q,xe,ye,De,Ce=[];for(Q=(k=A(k)).length,E=128,w=0,L=72,z=0;z<Q;++z)(re=k[z])<128&&Ce.push(x(re));for(y=S=Ce.length,S&&Ce.push("-");y<Q;){for(V=l,z=0;z<Q;++z)(re=k[z])>=E&&re<V&&(V=re);for(V-E>g((l-w)/(xe=y+1))&&v("overflow"),w+=(V-E)*xe,E=V,z=0;z<Q;++z)if((re=k[z])<E&&++w>l&&v("overflow"),re==E){for(_=w,C=c;!(_<(U=C<=L?1:C>=L+26?26:C-L));C+=c)De=_-U,ye=c-U,Ce.push(x(j(U+De%ye,0))),_=g(De/ye);Ce.push(x(j(_,0))),L=$(w,xe,y==S),w=0,++y}++w,++E}return Ce.join("")}if(i={version:"1.3.2",ucs2:{decode:A,encode:T},decode:P,encode:b,toASCII:function(k){return O(k,function(E){return p.test(E)?"xn--"+b(E):E})},toUnicode:function(k){return O(k,function(E){return d.test(E)?P(E.slice(4).toLowerCase()):E})}},n&&a)if(e.exports==n)a.exports=i;else for(s in i)i.hasOwnProperty(s)&&(n[s]=i[s]);else r.punycode=i})(this)})(hl,hl.exports);var Aa={};function vk(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Oa=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};Aa.decode=Aa.parse=function(e,t,r,n){t=t||"&",r=r||"=";var a={};if(typeof e!="string"||e.length===0)return a;var o=/\+/g;e=e.split(t);var i=1e3;n&&typeof n.maxKeys=="number"&&(i=n.maxKeys);var s=e.length;i>0&&s>i&&(s=i);for(var l=0;l<s;++l){var c,d,p,h,f=e[l].replace(o,"%20"),g=f.indexOf(r);g>=0?(c=f.substr(0,g),d=f.substr(g+1)):(c=f,d=""),p=decodeURIComponent(c),h=decodeURIComponent(d),vk(a,p)?Array.isArray(a[p])?a[p].push(h):a[p]=[a[p],h]:a[p]=h}return a},Aa.encode=Aa.stringify=function(e,t,r,n){return t=t||"&",r=r||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(a){var o=encodeURIComponent(Oa(a))+r;return Array.isArray(e[a])?e[a].map(function(i){return o+encodeURIComponent(Oa(i))}).join(t):o+encodeURIComponent(Oa(e[a]))}).join(t):n?encodeURIComponent(Oa(n))+r+encodeURIComponent(Oa(e)):""};var bk=hl.exports,Kt={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}};function Nt(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}_t.parse=Ea,_t.resolve=function(e,t){return Ea(e,!1,!0).resolve(t)},_t.resolveObject=function(e,t){return e?Ea(e,!1,!0).resolveObject(t):t},_t.format=function(e){return Kt.isString(e)&&(e=Ea(e)),e instanceof Nt?e.format():Nt.prototype.format.call(e)},_t.Url=Nt;var xk=/^([a-z0-9.+-]+:)/i,wk=/:[0-9]*$/,$k=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,kk=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r",`
`,"	"]),fl=["'"].concat(kk),Ih=["%","/","?",";","#"].concat(fl),Ph=["/","?","#"],Rh=/^[+a-z0-9A-Z_-]{0,63}$/,Sk=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ak={javascript:!0,"javascript:":!0},ml={javascript:!0,"javascript:":!0},$n={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},gl=Aa;function Ea(e,t,r){if(e&&Kt.isObject(e)&&e instanceof Nt)return e;var n=new Nt;return n.parse(e,t,r),n}Nt.prototype.parse=function(e,t,r){if(!Kt.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),a=n!==-1&&n<e.indexOf("#")?"?":"#",o=e.split(a);o[0]=o[0].replace(/\\/g,"/");var i=e=o.join(a);if(i=i.trim(),!r&&e.split("#").length===1){var s=$k.exec(i);if(s)return this.path=i,this.href=i,this.pathname=s[1],s[2]?(this.search=s[2],this.query=t?gl.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var l=xk.exec(i);if(l){var c=(l=l[0]).toLowerCase();this.protocol=c,i=i.substr(l.length)}if(r||l||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var d=i.substr(0,2)==="//";!d||l&&ml[l]||(i=i.substr(2),this.slashes=!0)}if(!ml[l]&&(d||l&&!$n[l])){for(var p,h,f=-1,g=0;g<Ph.length;g++)(x=i.indexOf(Ph[g]))!==-1&&(f===-1||x<f)&&(f=x);for((h=f===-1?i.lastIndexOf("@"):i.lastIndexOf("@",f))!==-1&&(p=i.slice(0,h),i=i.slice(h+1),this.auth=decodeURIComponent(p)),f=-1,g=0;g<Ih.length;g++){var x;(x=i.indexOf(Ih[g]))!==-1&&(f===-1||x<f)&&(f=x)}f===-1&&(f=i.length),this.host=i.slice(0,f),i=i.slice(f),this.parseHost(),this.hostname=this.hostname||"";var v=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!v)for(var u=this.hostname.split(/\./),O=(g=0,u.length);g<O;g++){var A=u[g];if(A&&!A.match(Rh)){for(var T="",j=0,$=A.length;j<$;j++)A.charCodeAt(j)>127?T+="x":T+=A[j];if(!T.match(Rh)){var P=u.slice(0,g),b=u.slice(g+1),k=A.match(Sk);k&&(P.push(k[1]),b.unshift(k[2])),b.length&&(i="/"+b.join(".")+i),this.hostname=P.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),v||(this.hostname=bk.toASCII(this.hostname));var E=this.port?":"+this.port:"",w=this.hostname||"";this.host=w+E,this.href+=this.host,v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),i[0]!=="/"&&(i="/"+i))}if(!Ak[c])for(g=0,O=fl.length;g<O;g++){var y=fl[g];if(i.indexOf(y)!==-1){var S=encodeURIComponent(y);S===y&&(S=escape(y)),i=i.split(y).join(S)}}var L=i.indexOf("#");L!==-1&&(this.hash=i.substr(L),i=i.slice(0,L));var z=i.indexOf("?");if(z!==-1?(this.search=i.substr(z),this.query=i.substr(z+1),t&&(this.query=gl.parse(this.query)),i=i.slice(0,z)):t&&(this.search="",this.query={}),i&&(this.pathname=i),$n[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){E=this.pathname||"";var V=this.search||"";this.path=E+V}return this.href=this.format(),this},Nt.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",a=!1,o="";this.host?a=e+this.host:this.hostname&&(a=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&Kt.isObject(this.query)&&Object.keys(this.query).length&&(o=gl.stringify(this.query));var i=this.search||o&&"?"+o||"";return t&&t.substr(-1)!==":"&&(t+=":"),this.slashes||(!t||$n[t])&&a!==!1?(a="//"+(a||""),r&&r.charAt(0)!=="/"&&(r="/"+r)):a||(a=""),n&&n.charAt(0)!=="#"&&(n="#"+n),i&&i.charAt(0)!=="?"&&(i="?"+i),t+a+(r=r.replace(/[?#]/g,function(s){return encodeURIComponent(s)}))+(i=i.replace("#","%23"))+n},Nt.prototype.resolve=function(e){return this.resolveObject(Ea(e,!1,!0)).format()},Nt.prototype.resolveObject=function(e){if(Kt.isString(e)){var t=new Nt;t.parse(e,!1,!0),e=t}for(var r=new Nt,n=Object.keys(this),a=0;a<n.length;a++){var o=n[a];r[o]=this[o]}if(r.hash=e.hash,e.href==="")return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),s=0;s<i.length;s++){var l=i[s];l!=="protocol"&&(r[l]=e[l])}return $n[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!$n[e.protocol]){for(var c=Object.keys(e),d=0;d<c.length;d++){var p=c[d];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||ml[e.protocol])r.pathname=e.pathname;else{for(var h=(e.pathname||"").split("/");h.length&&!(e.host=h.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),h[0]!==""&&h.unshift(""),h.length<2&&h.unshift(""),r.pathname=h.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var f=r.pathname||"",g=r.search||"";r.path=f+g}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var x=r.pathname&&r.pathname.charAt(0)==="/",v=e.host||e.pathname&&e.pathname.charAt(0)==="/",u=v||x||r.host&&e.pathname,O=u,A=r.pathname&&r.pathname.split("/")||[],T=(h=e.pathname&&e.pathname.split("/")||[],r.protocol&&!$n[r.protocol]);if(T&&(r.hostname="",r.port=null,r.host&&(A[0]===""?A[0]=r.host:A.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(h[0]===""?h[0]=e.host:h.unshift(e.host)),e.host=null),u=u&&(h[0]===""||A[0]==="")),v)r.host=e.host||e.host===""?e.host:r.host,r.hostname=e.hostname||e.hostname===""?e.hostname:r.hostname,r.search=e.search,r.query=e.query,A=h;else if(h.length)A||(A=[]),A.pop(),A=A.concat(h),r.search=e.search,r.query=e.query;else if(!Kt.isNullOrUndefined(e.search))return T&&(r.hostname=r.host=A.shift(),(k=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=k.shift(),r.host=r.hostname=k.shift())),r.search=e.search,r.query=e.query,Kt.isNull(r.pathname)&&Kt.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!A.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var j=A.slice(-1)[0],$=(r.host||e.host||A.length>1)&&(j==="."||j==="..")||j==="",P=0,b=A.length;b>=0;b--)(j=A[b])==="."?A.splice(b,1):j===".."?(A.splice(b,1),P++):P&&(A.splice(b,1),P--);if(!u&&!O)for(;P--;P)A.unshift("..");!u||A[0]===""||A[0]&&A[0].charAt(0)==="/"||A.unshift(""),$&&A.join("/").substr(-1)!=="/"&&A.push("");var k,E=A[0]===""||A[0]&&A[0].charAt(0)==="/";return T&&(r.hostname=r.host=E?"":A.length?A.shift():"",(k=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=k.shift(),r.host=r.hostname=k.shift())),(u=u||r.host&&A.length)&&!E&&A.unshift(""),A.length?r.pathname=A.join("/"):(r.pathname=null,r.path=null),Kt.isNull(r.pathname)&&Kt.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},Nt.prototype.parseHost=function(){var e=this.host,t=wk.exec(e);t&&((t=t[0])!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var Ok=Ie,Ek=ce,Tk=He,Ck=ha,_k=lt,jk=lr,Ik=br,Lh=gn,Pk=Ns,Rk=Sa,Lk=mo,Fh=Ge("isConcatSpreadable"),Dh=9007199254740991,Nh="Maximum allowed index exceeded",zh=Ek.TypeError,Fk=Lk>=51||!Tk(function(){var e=[];return e[Fh]=!1,e.concat()[0]!==e}),Dk=Rk("concat"),Nk=function(e){if(!_k(e))return!1;var t=e[Fh];return t!==void 0?!!t:Ck(e)};Ok({target:"Array",proto:!0,forced:!Fk||!Dk},{concat:function(e){var t,r,n,a,o,i=jk(this),s=Pk(i,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(Nk(o=t===-1?i:arguments[t])){if(l+(a=Ik(o))>Dh)throw zh(Nh);for(r=0;r<a;r++,l++)r in o&&Lh(s,l,o[r])}else{if(l>=Dh)throw zh(Nh);Lh(s,l++,o)}return s.length=l,s}}),et("asyncIterator"),et("hasInstance"),et("isConcatSpreadable"),et("iterator"),et("match"),et("matchAll"),et("replace"),et("search"),et("species"),et("split"),et("toPrimitive"),et("toStringTag"),et("unscopables"),Mr(ce.JSON,"JSON",!0);var zk=ct.Symbol;et("asyncDispose"),et("dispose"),et("matcher"),et("metadata"),et("observable"),et("patternMatch"),et("replaceAll");var Kr=zk,yl=Be,qk=$o,Bk=Ur,Uk=la,Mk=yl("".charAt),qh=yl("".charCodeAt),Hk=yl("".slice),Bh=function(e){return function(t,r){var n,a,o=Bk(Uk(t)),i=qk(r),s=o.length;return i<0||i>=s?e?"":void 0:(n=qh(o,i))<55296||n>56319||i+1===s||(a=qh(o,i+1))<56320||a>57343?e?Mk(o,i):n:e?Hk(o,i,i+2):a-56320+(n-55296<<10)+65536}},Wk={codeAt:Bh(!1),charAt:Bh(!0)}.charAt,Vk=Ur,Uh=Gt,Gk=ah,Mh="String Iterator",Kk=Uh.set,Jk=Uh.getterFor(Mh);Gk(String,"String",function(e){Kk(this,{type:Mh,string:Vk(e),index:0})},function(){var e,t=Jk(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=Wk(r,n),t.index+=e.length,{value:e,done:!1})});var Yk=xr,Hh=gs,Zk=xn,Qk=Ge("iterator"),Ta=function(e){if(e!=null)return Hh(e,Qk)||Hh(e,"@@iterator")||Zk[Yk(e)]},vl=Ta;Ie({target:"Array",stat:!0},{isArray:ha});var bl=ct.Array.isArray,Xk=Ie,eS=ce,Wh=ha,tS=Po,rS=lt,Vh=ko,nS=br,aS=Ut,oS=gn,iS=Ge,sS=_s,lS=Sa("slice"),cS=iS("species"),xl=eS.Array,pS=Math.max;Xk({target:"Array",proto:!0,forced:!lS},{slice:function(e,t){var r,n,a,o=aS(this),i=nS(o),s=Vh(e,i),l=Vh(t===void 0?i:t,i);if(Wh(o)&&(r=o.constructor,(tS(r)&&(r===xl||Wh(r.prototype))||rS(r)&&(r=r[cS])===null)&&(r=void 0),r===xl||r===void 0))return sS(o,s,l);for(n=new(r===void 0?xl:r)(pS(l-s,0)),a=0;s<l;s++,a++)s in o&&oS(n,a,o[s]);return n.length=a,n}});var dS=Ft("Array").slice,uS=xt,hS=dS,wl=Array.prototype,Gh=function(e){var t=e.slice;return e===wl||uS(wl,e)&&t===wl.slice?hS:t},fS=Gh,mS=At,Kh=Ot,gS=gs,Jh=function(e,t,r){var n,a;Kh(e);try{if(!(n=gS(e,"return"))){if(t==="throw")throw r;return r}n=mS(n,e)}catch(o){a=!0,n=o}if(t==="throw")throw r;if(a)throw n;return Kh(n),r},yS=Ot,vS=Jh,bS=xn,xS=Ge("iterator"),wS=Array.prototype,Yh=function(e){return e!==void 0&&(bS.Array===e||wS[xS]===e)},$S=At,kS=zr,SS=Ot,AS=go,OS=Ta,ES=ce.TypeError,$l=function(e,t){var r=arguments.length<2?OS(e):t;if(kS(r))return SS($S(r,e));throw ES(AS(e)+" is not iterable")},TS=Br,CS=At,_S=lr,jS=function(e,t,r,n){try{return n?t(yS(r)[0],r[1]):t(r)}catch(a){vS(e,"throw",a)}},IS=Yh,PS=Po,RS=br,Zh=gn,LS=$l,FS=Ta,Qh=ce.Array,Xh=Ge("iterator"),ef=!1;try{var DS=0,tf={next:function(){return{done:!!DS++}},return:function(){ef=!0}};tf[Xh]=function(){return this},Array.from(tf,function(){throw 2})}catch{}var rf=function(e,t){if(!t&&!ef)return!1;var r=!1;try{var n={};n[Xh]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch{}return r},NS=function(e){var t=_S(e),r=PS(this),n=arguments.length,a=n>1?arguments[1]:void 0,o=a!==void 0;o&&(a=TS(a,n>2?arguments[2]:void 0));var i,s,l,c,d,p,h=FS(t),f=0;if(!h||this==Qh&&IS(h))for(i=RS(t),s=r?new this(i):Qh(i);i>f;f++)p=o?a(t[f],f):t[f],Zh(s,f,p);else for(d=(c=LS(t,h)).next,s=r?new this:[];!(l=CS(d,c)).done;f++)p=o?jS(c,a,[l.value,f],!0):l.value,Zh(s,f,p);return s.length=f,s};Ie({target:"Array",stat:!0,forced:!rf(function(e){Array.from(e)})},{from:NS});var nf=ct.Array.from,af=nf;function kl(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Sl(e,t){var r;if(e){if(typeof e=="string")return kl(e,t);var n=fS(r=Object.prototype.toString.call(e)).call(r,8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?af(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kl(e,t):void 0}}function Jr(e,t){var r=Kr!==void 0&&vl(e)||e["@@iterator"];if(!r){if(bl(e)||(r=Sl(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var l=r.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||r.return==null||r.return()}finally{if(s)throw o}}}}var zS=_o.f("iterator");function We(e){return(We=typeof Kr=="function"&&typeof zS=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Kr=="function"&&t.constructor===Kr&&t!==Kr.prototype?"symbol":typeof t})(e)}function Ht(e,t){return function(r){if(bl(r))return r}(e)||function(r,n){var a=r==null?null:Kr!==void 0&&vl(r)||r["@@iterator"];if(a!=null){var o,i,s=[],l=!0,c=!1;try{for(a=a.call(r);!(l=(o=a.next()).done)&&(s.push(o.value),!n||s.length!==n);l=!0);}catch(d){c=!0,i=d}finally{try{l||a.return==null||a.return()}finally{if(c)throw i}}return s}}(e,t)||Sl(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var of=mt,qS=fh,BS=Dr,US=Ct,MS=Be("".replace),HS=String(Error("zxcasd").stack),sf=/\n\s*at [^:]*:[^\n]*/,WS=sf.test(HS),VS=lt,GS=vr,KS=Br,JS=At,YS=Ot,ZS=go,QS=Yh,XS=br,lf=xt,eA=$l,tA=Ta,cf=Jh,rA=ce.TypeError,Uo=function(e,t){this.stopped=e,this.result=t},pf=Uo.prototype,kn=function(e,t,r){var n,a,o,i,s,l,c,d=r&&r.that,p=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_ITERATOR),f=!(!r||!r.INTERRUPTED),g=KS(t,d),x=function(u){return n&&cf(n,"normal",u),new Uo(!0,u)},v=function(u){return p?(YS(u),f?g(u[0],u[1],x):g(u[0],u[1])):f?g(u,x):g(u)};if(h)n=e;else{if(!(a=tA(e)))throw rA(ZS(e)+" is not iterable");if(QS(a)){for(o=0,i=XS(e);i>o;o++)if((s=v(e[o]))&&lf(pf,s))return s;return new Uo(!1)}n=eA(e,a)}for(l=n.next;!(c=JS(l,n)).done;){try{s=v(c.value)}catch(u){cf(n,"throw",u)}if(typeof s=="object"&&s&&lf(pf,s))return s}return new Uo(!1)},nA=Ur,aA=yr,oA=!He(function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",aA(1,7)),e.stack!==7)}),iA=Ie,sA=ce,lA=xt,cA=ol,Mo=s$,pA=function(e,t,r){for(var n=qS(t),a=US.f,o=BS.f,i=0;i<n.length;i++){var s=n[i];of(e,s)||r&&of(r,s)||a(e,s,o(t,s))}},df=fa,Ho=vr,Al=yr,dA=function(e,t){if(WS&&typeof e=="string")for(;t--;)e=MS(e,sf,"");return e},uA=function(e,t){VS(t)&&"cause"in t&&GS(e,"cause",t.cause)},hA=kn,fA=function(e,t){return e===void 0?arguments.length<2?"":t:nA(e)},mA=oA,gA=Ge("toStringTag"),Wo=sA.Error,yA=[].push,Ca=function(e,t){var r,n=arguments.length>2?arguments[2]:void 0,a=lA(Ol,this);Mo?r=Mo(new Wo,a?cA(this):Ol):(r=a?this:df(Ol),Ho(r,gA,"Error")),t!==void 0&&Ho(r,"message",fA(t)),mA&&Ho(r,"stack",dA(r.stack,1)),uA(r,n);var o=[];return hA(e,yA,{that:o}),Ho(r,"errors",o),r};Mo?Mo(Ca,Wo):pA(Ca,Wo,{name:!0});var Ol=Ca.prototype=df(Wo.prototype,{constructor:Al(1,Ca),message:Al(1,""),name:Al(1,"AggregateError")});iA({global:!0},{AggregateError:Ca});var _a,Sn,uf,El,hf=ce.Promise,vA=ga,Vo=function(e,t,r){for(var n in t)r&&r.unsafe&&e[n]?e[n]=t[n]:vA(e,n,t[n],r);return e},bA=Lt,xA=Ct,wA=bt,ff=Ge("species"),$A=xt,kA=ce.TypeError,Go=function(e,t){if($A(t,e))return e;throw kA("Incorrect invocation")},SA=Po,AA=go,OA=ce.TypeError,mf=Ot,EA=function(e){if(SA(e))return e;throw OA(AA(e)+" is not a constructor")},TA=Ge("species"),gf=function(e,t){var r,n=mf(e).constructor;return n===void 0||(r=mf(n)[TA])==null?t:EA(r)},CA=ce.TypeError,yf=function(e,t){if(e<t)throw CA("Not enough arguments");return e},vf=/(?:ipad|iphone|ipod).*applewebkit/i.test(fo),Tl=Nr(ce.process)=="process",jt=ce,_A=ia,jA=Br,bf=nt,IA=mt,PA=He,xf=Yd,RA=_s,wf=$s,LA=yf,FA=vf,DA=Tl,Cl=jt.setImmediate,_l=jt.clearImmediate,NA=jt.process,jl=jt.Dispatch,zA=jt.Function,$f=jt.MessageChannel,qA=jt.String,Il=0,ja={},BA="onreadystatechange";try{_a=jt.location}catch{}var Pl=function(e){if(IA(ja,e)){var t=ja[e];delete ja[e],t()}},Rl=function(e){return function(){Pl(e)}},kf=function(e){Pl(e.data)},Sf=function(e){jt.postMessage(qA(e),_a.protocol+"//"+_a.host)};Cl&&_l||(Cl=function(e){LA(arguments.length,1);var t=bf(e)?e:zA(e),r=RA(arguments,1);return ja[++Il]=function(){_A(t,void 0,r)},Sn(Il),Il},_l=function(e){delete ja[e]},DA?Sn=function(e){NA.nextTick(Rl(e))}:jl&&jl.now?Sn=function(e){jl.now(Rl(e))}:$f&&!FA?(El=(uf=new $f).port2,uf.port1.onmessage=kf,Sn=jA(El.postMessage,El)):jt.addEventListener&&bf(jt.postMessage)&&!jt.importScripts&&_a&&_a.protocol!=="file:"&&!PA(Sf)?(Sn=Sf,jt.addEventListener("message",kf,!1)):Sn=BA in wf("script")?function(e){xf.appendChild(wf("script")).onreadystatechange=function(){xf.removeChild(this),Pl(e)}}:function(e){setTimeout(Rl(e),0)});var Ia,Yr,Pa,An,Ll,Fl,Dl,Af,Of={set:Cl,clear:_l},UA=ce,MA=/ipad|iphone|ipod/i.test(fo)&&UA.Pebble!==void 0,HA=/web0s(?!.*chrome)/i.test(fo),Zr=ce,Ef=Br,WA=Dr.f,Nl=Of.set,VA=vf,GA=MA,KA=HA,zl=Tl,Tf=Zr.MutationObserver||Zr.WebKitMutationObserver,Cf=Zr.document,_f=Zr.process,Ko=Zr.Promise,jf=WA(Zr,"queueMicrotask"),If=jf&&jf.value;If||(Ia=function(){var e,t;for(zl&&(e=_f.domain)&&e.exit();Yr;){t=Yr.fn,Yr=Yr.next;try{t()}catch(r){throw Yr?An():Pa=void 0,r}}Pa=void 0,e&&e.enter()},VA||zl||KA||!Tf||!Cf?!GA&&Ko&&Ko.resolve?((Dl=Ko.resolve(void 0)).constructor=Ko,Af=Ef(Dl.then,Dl),An=function(){Af(Ia)}):zl?An=function(){_f.nextTick(Ia)}:(Nl=Ef(Nl,Zr),An=function(){Nl(Ia)}):(Ll=!0,Fl=Cf.createTextNode(""),new Tf(Ia).observe(Fl,{characterData:!0}),An=function(){Fl.data=Ll=!Ll}));var JA=If||function(e){var t={fn:e,next:void 0};Pa&&(Pa.next=t),Yr||(Yr=t,An()),Pa=t},On={},Pf=zr,YA=function(e){var t,r;this.promise=new e(function(n,a){if(t!==void 0||r!==void 0)throw TypeError("Bad Promise constructor");t=n,r=a}),this.resolve=Pf(t),this.reject=Pf(r)};On.f=function(e){return new YA(e)};var ZA=Ot,QA=lt,XA=On,Rf=function(e,t){if(ZA(e),QA(t)&&t.constructor===e)return t;var r=XA.f(e);return(0,r.resolve)(t),r.promise},eO=ce,Jo=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}},Lf=function(){this.head=null,this.tail=null};Lf.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var ql,Ff,Bl,tO=typeof window=="object",Yo=Ie,pr=ce,rO=Lt,Ar=At,Ul=hf,nO=Vo,aO=Mr,oO=function(e){var t=bA(e),r=xA.f;wA&&t&&!t[ff]&&r(t,ff,{configurable:!0,get:function(){return this}})},Ml=zr,Zo=nt,iO=lt,sO=Go,lO=Is,Df=kn,cO=rf,pO=gf,Nf=Of.set,Hl=JA,dO=Rf,uO=function(e,t){var r=eO.console;r&&r.error&&(arguments.length==1?r.error(e):r.error(e,t))},zf=On,Wl=Jo,hO=Lf,Vl=Gt,fO=Dd,mO=tO,Qo=Tl,qf=mo,gO=Ge("species"),Jt="Promise",Bf=Vl.getterFor(Jt),yO=Vl.set,vO=Vl.getterFor(Jt),bO=Ul&&Ul.prototype,Yt=Ul,Xo=bO,Uf=pr.TypeError,Gl=pr.document,Kl=pr.process,En=zf.f,xO=En,wO=!!(Gl&&Gl.createEvent&&pr.dispatchEvent),Mf=Zo(pr.PromiseRejectionEvent),Hf="unhandledrejection",ei=fO(Jt,function(){var e=lO(Yt),t=e!==String(Yt);if(!t&&qf===66||!Xo.finally)return!0;if(qf>=51&&/native code/.test(e))return!1;var r=new Yt(function(a){a(1)}),n=function(a){a(function(){},function(){})};return(r.constructor={})[gO]=n,!(r.then(function(){})instanceof n)||!t&&mO&&!Mf}),$O=ei||!cO(function(e){Yt.all(e).catch(function(){})}),Wf=function(e){var t;return!(!iO(e)||!Zo(t=e.then))&&t},Vf=function(e,t){var r,n,a,o=t.value,i=t.state==1,s=i?e.ok:e.fail,l=e.resolve,c=e.reject,d=e.domain;try{s?(i||(t.rejection===2&&SO(t),t.rejection=1),s===!0?r=o:(d&&d.enter(),r=s(o),d&&(d.exit(),a=!0)),r===e.promise?c(Uf("Promise-chain cycle")):(n=Wf(r))?Ar(n,r,l,c):l(r)):c(o)}catch(p){d&&!a&&d.exit(),c(p)}},Gf=function(e,t){e.notified||(e.notified=!0,Hl(function(){for(var r,n=e.reactions;r=n.get();)Vf(r,e);e.notified=!1,t&&!e.rejection&&kO(e)}))},Kf=function(e,t,r){var n,a;wO?((n=Gl.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),pr.dispatchEvent(n)):n={promise:t,reason:r},!Mf&&(a=pr["on"+e])?a(n):e===Hf&&uO("Unhandled promise rejection",r)},kO=function(e){Ar(Nf,pr,function(){var t,r=e.facade,n=e.value;if(Jf(e)&&(t=Wl(function(){Qo?Kl.emit("unhandledRejection",n,r):Kf(Hf,r,n)}),e.rejection=Qo||Jf(e)?2:1,t.error))throw t.value})},Jf=function(e){return e.rejection!==1&&!e.parent},SO=function(e){Ar(Nf,pr,function(){var t=e.facade;Qo?Kl.emit("rejectionHandled",t):Kf("rejectionhandled",t,e.value)})},Tn=function(e,t,r){return function(n){e(t,n,r)}},Cn=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,Gf(e,!0))},Jl=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw Uf("Promise can't be resolved itself");var n=Wf(t);n?Hl(function(){var a={done:!1};try{Ar(n,t,Tn(Jl,a,e),Tn(Cn,a,e))}catch(o){Cn(a,o,e)}}):(e.value=t,e.state=1,Gf(e,!1))}catch(a){Cn({done:!1},a,e)}}};ei&&(Xo=(Yt=function(e){sO(this,Xo),Ml(e),Ar(ql,this);var t=Bf(this);try{e(Tn(Jl,t),Tn(Cn,t))}catch(r){Cn(t,r)}}).prototype,(ql=function(e){yO(this,{type:Jt,done:!1,notified:!1,parent:!1,reactions:new hO,rejection:!1,state:0,value:void 0})}).prototype=nO(Xo,{then:function(e,t){var r=vO(this),n=En(pO(this,Yt));return r.parent=!0,n.ok=!Zo(e)||e,n.fail=Zo(t)&&t,n.domain=Qo?Kl.domain:void 0,r.state==0?r.reactions.add(n):Hl(function(){Vf(n,r)}),n.promise},catch:function(e){return this.then(void 0,e)}}),Ff=function(){var e=new ql,t=Bf(e);this.promise=e,this.resolve=Tn(Jl,t),this.reject=Tn(Cn,t)},zf.f=En=function(e){return e===Yt||e===Bl?new Ff(e):xO(e)}),Yo({global:!0,wrap:!0,forced:ei},{Promise:Yt}),aO(Yt,Jt,!1,!0),oO(Jt),Bl=rO(Jt),Yo({target:Jt,stat:!0,forced:ei},{reject:function(e){var t=En(this);return Ar(t.reject,void 0,e),t.promise}}),Yo({target:Jt,stat:!0,forced:!0},{resolve:function(e){return dO(this===Bl?Yt:this,e)}}),Yo({target:Jt,stat:!0,forced:$O},{all:function(e){var t=this,r=En(t),n=r.resolve,a=r.reject,o=Wl(function(){var i=Ml(t.resolve),s=[],l=0,c=1;Df(e,function(d){var p=l++,h=!1;c++,Ar(i,t,d).then(function(f){h||(h=!0,s[p]=f,--c||n(s))},a)}),--c||n(s)});return o.error&&a(o.value),r.promise},race:function(e){var t=this,r=En(t),n=r.reject,a=Wl(function(){var o=Ml(t.resolve);Df(e,function(i){Ar(o,t,i).then(r.resolve,n)})});return a.error&&n(a.value),r.promise}});var AO=At,OO=zr,EO=On,TO=Jo,CO=kn;Ie({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=EO.f(t),n=r.resolve,a=r.reject,o=TO(function(){var i=OO(t.resolve),s=[],l=0,c=1;CO(e,function(d){var p=l++,h=!1;c++,AO(i,t,d).then(function(f){h||(h=!0,s[p]={status:"fulfilled",value:f},--c||n(s))},function(f){h||(h=!0,s[p]={status:"rejected",reason:f},--c||n(s))})}),--c||n(s)});return o.error&&a(o.value),r.promise}});var _O=zr,jO=Lt,IO=At,PO=On,RO=Jo,LO=kn,Yf="No one promise resolved";Ie({target:"Promise",stat:!0},{any:function(e){var t=this,r=jO("AggregateError"),n=PO.f(t),a=n.resolve,o=n.reject,i=RO(function(){var s=_O(t.resolve),l=[],c=0,d=1,p=!1;LO(e,function(h){var f=c++,g=!1;d++,IO(s,t,h).then(function(x){g||p||(p=!0,a(x))},function(x){g||p||(g=!0,l[f]=x,--d||o(new r(l,Yf)))})}),--d||o(new r(l,Yf))});return i.error&&o(i.value),n.promise}});var Zf=hf,FO=Lt,DO=nt,NO=gf,Qf=Rf;Ie({target:"Promise",proto:!0,real:!0,forced:!!Zf&&He(function(){Zf.prototype.finally.call({then:function(){}},function(){})})},{finally:function(e){var t=NO(this,FO("Promise")),r=DO(e);return this.then(r?function(n){return Qf(t,e()).then(function(){return n})}:e,r?function(n){return Qf(t,e()).then(function(){throw n})}:e)}});var Xf=ct.Promise,zO=Xf,qO=On,BO=Jo;Ie({target:"Promise",stat:!0,forced:!0},{try:function(e){var t=qO.f(this),r=BO(e);return(r.error?t.reject:t.resolve)(r.value),t.promise}});var em=zO;function tm(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void r(c)}s.done?t(l):em.resolve(l).then(n,a)}function Yl(e){return function(){var t=this,r=arguments;return new em(function(n,a){var o=e.apply(t,r);function i(l){tm(o,n,a,i,s,"next",l)}function s(l){tm(o,n,a,i,s,"throw",l)}i(void 0)})}}var rm={exports:{}};(function(e){var t=function(r){var n,a=Object.prototype,o=a.hasOwnProperty,i=typeof Symbol=="function"?Symbol:{},s=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function d(_,C,U){return Object.defineProperty(_,C,{value:U,enumerable:!0,configurable:!0,writable:!0}),_[C]}try{d({},"")}catch{d=function(C,U,re){return C[U]=re}}function p(_,C,U,re){var Q=C&&C.prototype instanceof O?C:O,xe=Object.create(Q.prototype),ye=new L(re||[]);return xe._invoke=function(De,Ce,Oe){var ft=f;return function(Xe,nr){if(ft===x)throw new Error("Generator is already running");if(ft===v){if(Xe==="throw")throw nr;return V()}for(Oe.method=Xe,Oe.arg=nr;;){var Xi=Oe.delegate;if(Xi){var to=w(Xi,Oe);if(to){if(to===u)continue;return to}}if(Oe.method==="next")Oe.sent=Oe._sent=Oe.arg;else if(Oe.method==="throw"){if(ft===f)throw ft=v,Oe.arg;Oe.dispatchException(Oe.arg)}else Oe.method==="return"&&Oe.abrupt("return",Oe.arg);ft=x;var ro=h(De,Ce,Oe);if(ro.type==="normal"){if(ft=Oe.done?v:g,ro.arg===u)continue;return{value:ro.arg,done:Oe.done}}ro.type==="throw"&&(ft=v,Oe.method="throw",Oe.arg=ro.arg)}}}(_,U,ye),xe}function h(_,C,U){try{return{type:"normal",arg:_.call(C,U)}}catch(re){return{type:"throw",arg:re}}}r.wrap=p;var f="suspendedStart",g="suspendedYield",x="executing",v="completed",u={};function O(){}function A(){}function T(){}var j={};d(j,s,function(){return this});var $=Object.getPrototypeOf,P=$&&$($(z([])));P&&P!==a&&o.call(P,s)&&(j=P);var b=T.prototype=O.prototype=Object.create(j);function k(_){["next","throw","return"].forEach(function(C){d(_,C,function(U){return this._invoke(C,U)})})}function E(_,C){function U(Q,xe,ye,De){var Ce=h(_[Q],_,xe);if(Ce.type!=="throw"){var Oe=Ce.arg,ft=Oe.value;return ft&&typeof ft=="object"&&o.call(ft,"__await")?C.resolve(ft.__await).then(function(Xe){U("next",Xe,ye,De)},function(Xe){U("throw",Xe,ye,De)}):C.resolve(ft).then(function(Xe){Oe.value=Xe,ye(Oe)},function(Xe){return U("throw",Xe,ye,De)})}De(Ce.arg)}var re;this._invoke=function(Q,xe){function ye(){return new C(function(De,Ce){U(Q,xe,De,Ce)})}return re=re?re.then(ye,ye):ye()}}function w(_,C){var U=_.iterator[C.method];if(U===n){if(C.delegate=null,C.method==="throw"){if(_.iterator.return&&(C.method="return",C.arg=n,w(_,C),C.method==="throw"))return u;C.method="throw",C.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var re=h(U,_.iterator,C.arg);if(re.type==="throw")return C.method="throw",C.arg=re.arg,C.delegate=null,u;var Q=re.arg;return Q?Q.done?(C[_.resultName]=Q.value,C.next=_.nextLoc,C.method!=="return"&&(C.method="next",C.arg=n),C.delegate=null,u):Q:(C.method="throw",C.arg=new TypeError("iterator result is not an object"),C.delegate=null,u)}function y(_){var C={tryLoc:_[0]};1 in _&&(C.catchLoc=_[1]),2 in _&&(C.finallyLoc=_[2],C.afterLoc=_[3]),this.tryEntries.push(C)}function S(_){var C=_.completion||{};C.type="normal",delete C.arg,_.completion=C}function L(_){this.tryEntries=[{tryLoc:"root"}],_.forEach(y,this),this.reset(!0)}function z(_){if(_){var C=_[s];if(C)return C.call(_);if(typeof _.next=="function")return _;if(!isNaN(_.length)){var U=-1,re=function Q(){for(;++U<_.length;)if(o.call(_,U))return Q.value=_[U],Q.done=!1,Q;return Q.value=n,Q.done=!0,Q};return re.next=re}}return{next:V}}function V(){return{value:n,done:!0}}return A.prototype=T,d(b,"constructor",T),d(T,"constructor",A),A.displayName=d(T,c,"GeneratorFunction"),r.isGeneratorFunction=function(_){var C=typeof _=="function"&&_.constructor;return!!C&&(C===A||(C.displayName||C.name)==="GeneratorFunction")},r.mark=function(_){return Object.setPrototypeOf?Object.setPrototypeOf(_,T):(_.__proto__=T,d(_,c,"GeneratorFunction")),_.prototype=Object.create(b),_},r.awrap=function(_){return{__await:_}},k(E.prototype),d(E.prototype,l,function(){return this}),r.AsyncIterator=E,r.async=function(_,C,U,re,Q){Q===void 0&&(Q=Promise);var xe=new E(p(_,C,U,re),Q);return r.isGeneratorFunction(C)?xe:xe.next().then(function(ye){return ye.done?ye.value:xe.next()})},k(b),d(b,c,"Generator"),d(b,s,function(){return this}),d(b,"toString",function(){return"[object Generator]"}),r.keys=function(_){var C=[];for(var U in _)C.push(U);return C.reverse(),function re(){for(;C.length;){var Q=C.pop();if(Q in _)return re.value=Q,re.done=!1,re}return re.done=!0,re}},r.values=z,L.prototype={constructor:L,reset:function(_){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!_)for(var C in this)C.charAt(0)==="t"&&o.call(this,C)&&!isNaN(+C.slice(1))&&(this[C]=n)},stop:function(){this.done=!0;var _=this.tryEntries[0].completion;if(_.type==="throw")throw _.arg;return this.rval},dispatchException:function(_){if(this.done)throw _;var C=this;function U(Ce,Oe){return xe.type="throw",xe.arg=_,C.next=Ce,Oe&&(C.method="next",C.arg=n),!!Oe}for(var re=this.tryEntries.length-1;re>=0;--re){var Q=this.tryEntries[re],xe=Q.completion;if(Q.tryLoc==="root")return U("end");if(Q.tryLoc<=this.prev){var ye=o.call(Q,"catchLoc"),De=o.call(Q,"finallyLoc");if(ye&&De){if(this.prev<Q.catchLoc)return U(Q.catchLoc,!0);if(this.prev<Q.finallyLoc)return U(Q.finallyLoc)}else if(ye){if(this.prev<Q.catchLoc)return U(Q.catchLoc,!0)}else{if(!De)throw new Error("try statement without catch or finally");if(this.prev<Q.finallyLoc)return U(Q.finallyLoc)}}}},abrupt:function(_,C){for(var U=this.tryEntries.length-1;U>=0;--U){var re=this.tryEntries[U];if(re.tryLoc<=this.prev&&o.call(re,"finallyLoc")&&this.prev<re.finallyLoc){var Q=re;break}}Q&&(_==="break"||_==="continue")&&Q.tryLoc<=C&&C<=Q.finallyLoc&&(Q=null);var xe=Q?Q.completion:{};return xe.type=_,xe.arg=C,Q?(this.method="next",this.next=Q.finallyLoc,u):this.complete(xe)},complete:function(_,C){if(_.type==="throw")throw _.arg;return _.type==="break"||_.type==="continue"?this.next=_.arg:_.type==="return"?(this.rval=this.arg=_.arg,this.method="return",this.next="end"):_.type==="normal"&&C&&(this.next=C),u},finish:function(_){for(var C=this.tryEntries.length-1;C>=0;--C){var U=this.tryEntries[C];if(U.finallyLoc===_)return this.complete(U.completion,U.afterLoc),S(U),u}},catch:function(_){for(var C=this.tryEntries.length-1;C>=0;--C){var U=this.tryEntries[C];if(U.tryLoc===_){var re=U.completion;if(re.type==="throw"){var Q=re.arg;S(U)}return Q}}throw new Error("illegal catch attempt")},delegateYield:function(_,C,U){return this.delegate={iterator:z(_),resultName:C,nextLoc:U},this.method==="next"&&(this.arg=n),u}},r}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(rm);var Zt=rm.exports,UO=Ss.includes;Ie({target:"Array",proto:!0},{includes:function(e){return UO(this,e,arguments.length>1?arguments[1]:void 0)}});var MO=Ft("Array").includes,HO=Ie,WO=Oh,VO=la,nm=Ur,GO=Eh,KO=Be("".indexOf);HO({target:"String",proto:!0,forced:!GO("includes")},{includes:function(e){return!!~KO(nm(VO(this)),nm(WO(e)),arguments.length>1?arguments[1]:void 0)}});var JO=Ft("String").includes,am=xt,YO=MO,ZO=JO,Zl=Array.prototype,Ql=String.prototype,Ra=function(e){var t=e.includes;return e===Zl||am(Zl,e)&&t===Zl.includes?YO:typeof e=="string"||e===Ql||am(Ql,e)&&t===Ql.includes?ZO:t},QO=Ft("Array").entries,XO=xr,eE=mt,tE=xt,rE=QO,Xl=Array.prototype,nE={DOMTokenList:!0,NodeList:!0},om=function(e){var t=e.entries;return e===Xl||tE(Xl,e)&&t===Xl.entries||eE(nE,XO(e))?rE:t},im=nf,aE=Ie,oE=Lt,iE=ia,La=Be,sE=He,lE=ce.Array,ti=oE("JSON","stringify"),ri=La(/./.exec),sm=La("".charAt),cE=La("".charCodeAt),pE=La("".replace),dE=La(1 .toString),uE=/[\uD800-\uDFFF]/g,lm=/^[\uD800-\uDBFF]$/,cm=/^[\uDC00-\uDFFF]$/,hE=function(e,t,r){var n=sm(r,t-1),a=sm(r,t+1);return ri(lm,e)&&!ri(cm,a)||ri(cm,e)&&!ri(lm,n)?"\\u"+dE(cE(e,0),16):e},fE=sE(function(){return ti("\uDF06\uD834")!=='"\\udf06\\ud834"'||ti("\uDEAD")!=='"\\udead"'});ti&&aE({target:"JSON",stat:!0,forced:fE},{stringify:function(e,t,r){for(var n=0,a=arguments.length,o=lE(a);n<a;n++)o[n]=arguments[n];var i=iE(ti,null,o);return typeof i=="string"?pE(i,uE,hE):i}});var ec=ct,mE=ia;ec.JSON||(ec.JSON={stringify:JSON.stringify});var ni=function(e,t,r){return mE(ec.JSON.stringify,null,arguments)},gE=$r.map;Ie({target:"Array",proto:!0,forced:!Sa("map")},{map:function(e){return gE(this,e,arguments.length>1?arguments[1]:void 0)}});var yE=Ft("Array").map,vE=xt,bE=yE,tc=Array.prototype,Fe=function(e){var t=e.map;return e===tc||vE(tc,e)&&t===tc.map?bE:t},Pe=Gd,xE=Ft("Array").concat,wE=xt,$E=xE,rc=Array.prototype,oe=function(e){var t=e.concat;return e===rc||wE(rc,e)&&t===rc.concat?$E:t},kE=bt,pm=Be,SE=ua,AE=Ut,OE=pm(sa.f),EE=pm([].push),dm=function(e){return function(t){for(var r,n=AE(t),a=SE(n),o=a.length,i=0,s=[];o>i;)r=a[i++],kE&&!OE(n,r)||EE(s,e?[r,n[r]]:n[r]);return s}},TE={entries:dm(!0),values:dm(!1)}.entries;Ie({target:"Object",stat:!0},{entries:function(e){return TE(e)}});var um=ct.Object.entries,zt=zu;(function(e){(function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,a="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch{return!1}}(),o="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(b){return b&&s.indexOf(Object.prototype.toString.call(b))>-1};function c(b){if(typeof b!="string"&&(b=String(b)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))throw new TypeError("Invalid character in header field name");return b.toLowerCase()}function d(b){return typeof b!="string"&&(b=String(b)),b}function p(b){var k={next:function(){var E=b.shift();return{done:E===void 0,value:E}}};return n&&(k[Symbol.iterator]=function(){return k}),k}function h(b){this.map={},b instanceof h?b.forEach(function(k,E){this.append(E,k)},this):Array.isArray(b)?b.forEach(function(k){this.append(k[0],k[1])},this):b&&Object.getOwnPropertyNames(b).forEach(function(k){this.append(k,b[k])},this)}function f(b){if(b.bodyUsed)return Promise.reject(new TypeError("Already read"));b.bodyUsed=!0}function g(b){return new Promise(function(k,E){b.onload=function(){k(b.result)},b.onerror=function(){E(b.error)}})}function x(b){var k=new FileReader,E=g(k);return k.readAsArrayBuffer(b),E}function v(b){if(b.slice)return b.slice(0);var k=new Uint8Array(b.byteLength);return k.set(new Uint8Array(b)),k.buffer}function u(){return this.bodyUsed=!1,this._initBody=function(b){var k;this._bodyInit=b,b?typeof b=="string"?this._bodyText=b:a&&Blob.prototype.isPrototypeOf(b)?this._bodyBlob=b:o&&FormData.prototype.isPrototypeOf(b)?this._bodyFormData=b:r&&URLSearchParams.prototype.isPrototypeOf(b)?this._bodyText=b.toString():i&&a&&(k=b)&&DataView.prototype.isPrototypeOf(k)?(this._bodyArrayBuffer=v(b.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(b)||l(b))?this._bodyArrayBuffer=v(b):this._bodyText=b=Object.prototype.toString.call(b):this._bodyText="",this.headers.get("content-type")||(typeof b=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(b)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var b=f(this);if(b)return b;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(x)}),this.text=function(){var b=f(this);if(b)return b;if(this._bodyBlob)return function(k){var E=new FileReader,w=g(E);return E.readAsText(k),w}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(k){for(var E=new Uint8Array(k),w=new Array(E.length),y=0;y<E.length;y++)w[y]=String.fromCharCode(E[y]);return w.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(b,k){b=c(b),k=d(k);var E=this.map[b];this.map[b]=E?E+", "+k:k},h.prototype.delete=function(b){delete this.map[c(b)]},h.prototype.get=function(b){return b=c(b),this.has(b)?this.map[b]:null},h.prototype.has=function(b){return this.map.hasOwnProperty(c(b))},h.prototype.set=function(b,k){this.map[c(b)]=d(k)},h.prototype.forEach=function(b,k){for(var E in this.map)this.map.hasOwnProperty(E)&&b.call(k,this.map[E],E,this)},h.prototype.keys=function(){var b=[];return this.forEach(function(k,E){b.push(E)}),p(b)},h.prototype.values=function(){var b=[];return this.forEach(function(k){b.push(k)}),p(b)},h.prototype.entries=function(){var b=[];return this.forEach(function(k,E){b.push([E,k])}),p(b)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var O=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function A(b,k){var E=(k=k||{}).body;if(b instanceof A){if(b.bodyUsed)throw new TypeError("Already read");this.url=b.url,this.credentials=b.credentials,k.headers||(this.headers=new h(b.headers)),this.method=b.method,this.mode=b.mode,this.signal=b.signal,E||b._bodyInit==null||(E=b._bodyInit,b.bodyUsed=!0)}else this.url=String(b);if(this.credentials=k.credentials||this.credentials||"same-origin",!k.headers&&this.headers||(this.headers=new h(k.headers)),this.method=function(w){var y=w.toUpperCase();return O.indexOf(y)>-1?y:w}(k.method||this.method||"GET"),this.mode=k.mode||this.mode||null,this.signal=k.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&E)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(E)}function T(b){var k=new FormData;return b.trim().split("&").forEach(function(E){if(E){var w=E.split("="),y=w.shift().replace(/\+/g," "),S=w.join("=").replace(/\+/g," ");k.append(decodeURIComponent(y),decodeURIComponent(S))}}),k}function j(b,k){k||(k={}),this.type="default",this.status=k.status===void 0?200:k.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in k?k.statusText:"OK",this.headers=new h(k.headers),this.url=k.url||"",this._initBody(b)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},u.call(A.prototype),u.call(j.prototype),j.prototype.clone=function(){return new j(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},j.error=function(){var b=new j(null,{status:0,statusText:""});return b.type="error",b};var $=[301,302,303,307,308];j.redirect=function(b,k){if($.indexOf(k)===-1)throw new RangeError("Invalid status code");return new j(null,{status:k,headers:{location:b}})},t.DOMException=e.DOMException;try{new t.DOMException}catch{t.DOMException=function(k,E){this.message=k,this.name=E;var w=Error(k);this.stack=w.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function P(b,k){return new Promise(function(E,w){var y=new A(b,k);if(y.signal&&y.signal.aborted)return w(new t.DOMException("Aborted","AbortError"));var S=new XMLHttpRequest;function L(){S.abort()}S.onload=function(){var z,V,_={status:S.status,statusText:S.statusText,headers:(z=S.getAllResponseHeaders()||"",V=new h,z.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(U){var re=U.split(":"),Q=re.shift().trim();if(Q){var xe=re.join(":").trim();V.append(Q,xe)}}),V)};_.url="responseURL"in S?S.responseURL:_.headers.get("X-Request-URL");var C="response"in S?S.response:S.responseText;E(new j(C,_))},S.onerror=function(){w(new TypeError("Network request failed"))},S.ontimeout=function(){w(new TypeError("Network request failed"))},S.onabort=function(){w(new t.DOMException("Aborted","AbortError"))},S.open(y.method,y.url,!0),y.credentials==="include"?S.withCredentials=!0:y.credentials==="omit"&&(S.withCredentials=!1),"responseType"in S&&a&&(S.responseType="blob"),y.headers.forEach(function(z,V){S.setRequestHeader(V,z)}),y.signal&&(y.signal.addEventListener("abort",L),S.onreadystatechange=function(){S.readyState===4&&y.signal.removeEventListener("abort",L)}),S.send(y._bodyInit===void 0?null:y._bodyInit)})}P.polyfill=!0,e.fetch||(e.fetch=P,e.Headers=h,e.Request=A,e.Response=j),t.Headers=h,t.Request=A,t.Response=j,t.fetch=P,Object.defineProperty(t,"__esModule",{value:!0})})({})})(typeof self<"u"?self:globalThis);var Re,hm=typeof Symbol<"u"&&Symbol,CE=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),r=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;for(t in e[t]=42,e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var n=Object.getOwnPropertySymbols(e);if(n.length!==1||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(e,t);if(a.value!==42||a.enumerable!==!0)return!1}return!0},_E="Function.prototype.bind called on incompatible ",nc=Array.prototype.slice,jE=Object.prototype.toString,IE="[object Function]",PE=function(e){var t=this;if(typeof t!="function"||jE.call(t)!==IE)throw new TypeError(_E+t);for(var r,n=nc.call(arguments,1),a=function(){if(this instanceof r){var c=t.apply(this,n.concat(nc.call(arguments)));return Object(c)===c?c:this}return t.apply(e,n.concat(nc.call(arguments)))},o=Math.max(0,t.length-n.length),i=[],s=0;s<o;s++)i.push("$"+s);if(r=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var l=function(){};l.prototype=t.prototype,r.prototype=new l,l.prototype=null}return r},ac=Function.prototype.bind||PE,RE=ac.call(Function.call,Object.prototype.hasOwnProperty),Fa=SyntaxError,fm=Function,_n=TypeError,oc=function(e){try{return fm('"use strict"; return ('+e+").constructor;")()}catch{}},Qr=Object.getOwnPropertyDescriptor;if(Qr)try{Qr({},"")}catch{Qr=null}var ic=function(){throw new _n},LE=Qr?function(){try{return ic}catch{try{return Qr(arguments,"callee").get}catch{return ic}}}():ic,jn=typeof hm=="function"&&typeof Symbol=="function"&&typeof hm("foo")=="symbol"&&typeof Symbol("bar")=="symbol"&&CE(),Or=Object.getPrototypeOf||function(e){return e.__proto__},In={},FE=typeof Uint8Array>"u"?Re:Or(Uint8Array),Pn={"%AggregateError%":typeof AggregateError>"u"?Re:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?Re:ArrayBuffer,"%ArrayIteratorPrototype%":jn?Or([][Symbol.iterator]()):Re,"%AsyncFromSyncIteratorPrototype%":Re,"%AsyncFunction%":In,"%AsyncGenerator%":In,"%AsyncGeneratorFunction%":In,"%AsyncIteratorPrototype%":In,"%Atomics%":typeof Atomics>"u"?Re:Atomics,"%BigInt%":typeof BigInt>"u"?Re:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?Re:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?Re:Float32Array,"%Float64Array%":typeof Float64Array>"u"?Re:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?Re:FinalizationRegistry,"%Function%":fm,"%GeneratorFunction%":In,"%Int8Array%":typeof Int8Array>"u"?Re:Int8Array,"%Int16Array%":typeof Int16Array>"u"?Re:Int16Array,"%Int32Array%":typeof Int32Array>"u"?Re:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":jn?Or(Or([][Symbol.iterator]())):Re,"%JSON%":typeof JSON=="object"?JSON:Re,"%Map%":typeof Map>"u"?Re:Map,"%MapIteratorPrototype%":typeof Map<"u"&&jn?Or(new Map()[Symbol.iterator]()):Re,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?Re:Promise,"%Proxy%":typeof Proxy>"u"?Re:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?Re:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?Re:Set,"%SetIteratorPrototype%":typeof Set<"u"&&jn?Or(new Set()[Symbol.iterator]()):Re,"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?Re:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":jn?Or(""[Symbol.iterator]()):Re,"%Symbol%":jn?Symbol:Re,"%SyntaxError%":Fa,"%ThrowTypeError%":LE,"%TypedArray%":FE,"%TypeError%":_n,"%Uint8Array%":typeof Uint8Array>"u"?Re:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?Re:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?Re:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?Re:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?Re:WeakMap,"%WeakRef%":typeof WeakRef>"u"?Re:WeakRef,"%WeakSet%":typeof WeakSet>"u"?Re:WeakSet},DE=function e(t){var r;if(t==="%AsyncFunction%")r=oc("async function () {}");else if(t==="%GeneratorFunction%")r=oc("function* () {}");else if(t==="%AsyncGeneratorFunction%")r=oc("async function* () {}");else if(t==="%AsyncGenerator%"){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(t==="%AsyncIteratorPrototype%"){var a=e("%AsyncGenerator%");a&&(r=Or(a.prototype))}return Pn[t]=r,r},mm={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ai=ac,oi=RE,NE=ai.call(Function.call,Array.prototype.concat),zE=ai.call(Function.apply,Array.prototype.splice),gm=ai.call(Function.call,String.prototype.replace),ii=ai.call(Function.call,String.prototype.slice),qE=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,BE=/\\(\\)?/g,UE=function(e){var t=ii(e,0,1),r=ii(e,-1);if(t==="%"&&r!=="%")throw new Fa("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&t!=="%")throw new Fa("invalid intrinsic syntax, expected opening `%`");var n=[];return gm(e,qE,function(a,o,i,s){n[n.length]=i?gm(s,BE,"$1"):o||a}),n},ME=function(e,t){var r,n=e;if(oi(mm,n)&&(n="%"+(r=mm[n])[0]+"%"),oi(Pn,n)){var a=Pn[n];if(a===In&&(a=DE(n)),a===void 0&&!t)throw new _n("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:a}}throw new Fa("intrinsic "+e+" does not exist!")},sc=function(e,t){if(typeof e!="string"||e.length===0)throw new _n("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new _n('"allowMissing" argument must be a boolean');var r=UE(e),n=r.length>0?r[0]:"",a=ME("%"+n+"%",t),o=a.name,i=a.value,s=!1,l=a.alias;l&&(n=l[0],zE(r,NE([0,1],l)));for(var c=1,d=!0;c<r.length;c+=1){var p=r[c],h=ii(p,0,1),f=ii(p,-1);if((h==='"'||h==="'"||h==="`"||f==='"'||f==="'"||f==="`")&&h!==f)throw new Fa("property names with quotes must have matching quotes");if(p!=="constructor"&&d||(s=!0),oi(Pn,o="%"+(n+="."+p)+"%"))i=Pn[o];else if(i!=null){if(!(p in i)){if(!t)throw new _n("base intrinsic for "+e+" exists, but the property is not available.");return}if(Qr&&c+1>=r.length){var g=Qr(i,p);i=(d=!!g)&&"get"in g&&!("originalValue"in g.get)?g.get:i[p]}else d=oi(i,p),i=i[p];d&&!s&&(Pn[o]=i)}}return i},ym={exports:{}};(function(e){var t=ac,r=sc,n=r("%Function.prototype.apply%"),a=r("%Function.prototype.call%"),o=r("%Reflect.apply%",!0)||t.call(a,n),i=r("%Object.getOwnPropertyDescriptor%",!0),s=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(s)try{s({},"a",{value:1})}catch{s=null}e.exports=function(d){var p=o(t,a,arguments);if(i&&s){var h=i(p,"length");h.configurable&&s(p,"length",{value:1+l(0,d.length-(arguments.length-1))})}return p};var c=function(){return o(t,n,arguments)};s?s(e.exports,"apply",{value:c}):e.exports.apply=c})(ym);var vm=sc,bm=ym.exports,HE=bm(vm("String.prototype.indexOf")),WE=Lb(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{}})),lc=typeof Map=="function"&&Map.prototype,cc=Object.getOwnPropertyDescriptor&&lc?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,si=lc&&cc&&typeof cc.get=="function"?cc.get:null,VE=lc&&Map.prototype.forEach,pc=typeof Set=="function"&&Set.prototype,dc=Object.getOwnPropertyDescriptor&&pc?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,li=pc&&dc&&typeof dc.get=="function"?dc.get:null,GE=pc&&Set.prototype.forEach,Da=typeof WeakMap=="function"&&WeakMap.prototype?WeakMap.prototype.has:null,Na=typeof WeakSet=="function"&&WeakSet.prototype?WeakSet.prototype.has:null,xm=typeof WeakRef=="function"&&WeakRef.prototype?WeakRef.prototype.deref:null,KE=Boolean.prototype.valueOf,JE=Object.prototype.toString,YE=Function.prototype.toString,ZE=String.prototype.match,uc=String.prototype.slice,Er=String.prototype.replace,QE=String.prototype.toUpperCase,wm=String.prototype.toLowerCase,$m=RegExp.prototype.test,km=Array.prototype.concat,Qt=Array.prototype.join,XE=Array.prototype.slice,Sm=Math.floor,hc=typeof BigInt=="function"?BigInt.prototype.valueOf:null,fc=Object.getOwnPropertySymbols,mc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="object",wt=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Rn||"symbol")?Symbol.toStringTag:null,Am=Object.prototype.propertyIsEnumerable,Om=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function Em(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||$m.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var n=e<0?-Sm(-e):Sm(e);if(n!==e){var a=String(n),o=uc.call(t,a.length+1);return Er.call(a,r,"$&_")+"."+Er.call(Er.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Er.call(t,r,"$&_")}var gc=WE.custom,yc=gc&&Cm(gc)?gc:null;function Tm(e,t,r){var n=(r.quoteStyle||t)==="double"?'"':"'";return n+e+n}function eT(e){return Er.call(String(e),/"/g,"&quot;")}function vc(e){return!(Cr(e)!=="[object Array]"||wt&&typeof e=="object"&&wt in e)}function Cm(e){if(Rn)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!mc)return!1;try{return mc.call(e),!0}catch{}return!1}var tT=Object.prototype.hasOwnProperty||function(e){return e in this};function Tr(e,t){return tT.call(e,t)}function Cr(e){return JE.call(e)}function _m(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function jm(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return jm(uc.call(e,0,t.maxStringLength),t)+n}return Tm(Er.call(Er.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,rT),"single",t)}function rT(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+QE.call(t.toString(16))}function za(e){return"Object("+e+")"}function bc(e){return e+" { ? }"}function Im(e,t,r,n){return e+" ("+t+") {"+(n?xc(r,n):Qt.call(r,", "))+"}"}function xc(e,t){if(e.length===0)return"";var r=`
`+t.prev+t.base;return r+Qt.call(e,","+r)+`
`+t.prev}function ci(e,t){var r=vc(e),n=[];if(r){n.length=e.length;for(var a=0;a<e.length;a++)n[a]=Tr(e,a)?t(e[a],e):""}var o,i=typeof fc=="function"?fc(e):[];if(Rn){o={};for(var s=0;s<i.length;s++)o["$"+i[s]]=i[s]}for(var l in e)Tr(e,l)&&(r&&String(Number(l))===l&&l<e.length||Rn&&o["$"+l]instanceof Symbol||($m.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if(typeof fc=="function")for(var c=0;c<i.length;c++)Am.call(e,i[c])&&n.push("["+t(i[c])+"]: "+t(e[i[c]],e));return n}var wc=sc,Ln=function(e,t){var r=vm(e,!!t);return typeof r=="function"&&HE(e,".prototype.")>-1?bm(r):r},nT=function e(t,r,n,a){var o=r||{};if(Tr(o,"quoteStyle")&&o.quoteStyle!=="single"&&o.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Tr(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=!Tr(o,"customInspect")||o.customInspect;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Tr(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Tr(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=o.numericSeparator;if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return jm(t,o);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var l=String(t);return s?Em(t,l):l}if(typeof t=="bigint"){var c=String(t)+"n";return s?Em(t,c):c}var d=o.depth===void 0?5:o.depth;if(n===void 0&&(n=0),n>=d&&d>0&&typeof t=="object")return vc(t)?"[Array]":"[Object]";var p=function(y,S){var L;if(y.indent==="	")L="	";else{if(!(typeof y.indent=="number"&&y.indent>0))return null;L=Qt.call(Array(y.indent+1)," ")}return{base:L,prev:Qt.call(Array(S+1),L)}}(o,n);if(a===void 0)a=[];else if(_m(a,t)>=0)return"[Circular]";function h(y,S,L){if(S&&(a=XE.call(a)).push(S),L){var z={depth:o.depth};return Tr(o,"quoteStyle")&&(z.quoteStyle=o.quoteStyle),e(y,z,n+1,a)}return e(y,o,n+1,a)}if(typeof t=="function"){var f=function(y){if(y.name)return y.name;var S=ZE.call(YE.call(y),/^function\s*([\w$]+)/);return S?S[1]:null}(t),g=ci(t,h);return"[Function"+(f?": "+f:" (anonymous)")+"]"+(g.length>0?" { "+Qt.call(g,", ")+" }":"")}if(Cm(t)){var x=Rn?Er.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):mc.call(t);return typeof t!="object"||Rn?x:za(x)}if(function(y){return!y||typeof y!="object"?!1:typeof HTMLElement<"u"&&y instanceof HTMLElement?!0:typeof y.nodeName=="string"&&typeof y.getAttribute=="function"}(t)){for(var v="<"+wm.call(String(t.nodeName)),u=t.attributes||[],O=0;O<u.length;O++)v+=" "+u[O].name+"="+Tm(eT(u[O].value),"double",o);return v+=">",t.childNodes&&t.childNodes.length&&(v+="..."),v+="</"+wm.call(String(t.nodeName))+">"}if(vc(t)){if(t.length===0)return"[]";var A=ci(t,h);return p&&!function(y){for(var S=0;S<y.length;S++)if(_m(y[S],`
`)>=0)return!1;return!0}(A)?"["+xc(A,p)+"]":"[ "+Qt.call(A,", ")+" ]"}if(function(y){return!(Cr(y)!=="[object Error]"||wt&&typeof y=="object"&&wt in y)}(t)){var T=ci(t,h);return"cause"in t&&!Am.call(t,"cause")?"{ ["+String(t)+"] "+Qt.call(km.call("[cause]: "+h(t.cause),T),", ")+" }":T.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+Qt.call(T,", ")+" }"}if(typeof t=="object"&&i){if(yc&&typeof t[yc]=="function")return t[yc]();if(i!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(function(y){if(!si||!y||typeof y!="object")return!1;try{si.call(y);try{li.call(y)}catch{return!0}return y instanceof Map}catch{}return!1}(t)){var j=[];return VE.call(t,function(y,S){j.push(h(S,t,!0)+" => "+h(y,t))}),Im("Map",si.call(t),j,p)}if(function(y){if(!li||!y||typeof y!="object")return!1;try{li.call(y);try{si.call(y)}catch{return!0}return y instanceof Set}catch{}return!1}(t)){var $=[];return GE.call(t,function(y){$.push(h(y,t))}),Im("Set",li.call(t),$,p)}if(function(y){if(!Da||!y||typeof y!="object")return!1;try{Da.call(y,Da);try{Na.call(y,Na)}catch{return!0}return y instanceof WeakMap}catch{}return!1}(t))return bc("WeakMap");if(function(y){if(!Na||!y||typeof y!="object")return!1;try{Na.call(y,Na);try{Da.call(y,Da)}catch{return!0}return y instanceof WeakSet}catch{}return!1}(t))return bc("WeakSet");if(function(y){if(!xm||!y||typeof y!="object")return!1;try{return xm.call(y),!0}catch{}return!1}(t))return bc("WeakRef");if(function(y){return!(Cr(y)!=="[object Number]"||wt&&typeof y=="object"&&wt in y)}(t))return za(h(Number(t)));if(function(y){if(!y||typeof y!="object"||!hc)return!1;try{return hc.call(y),!0}catch{}return!1}(t))return za(h(hc.call(t)));if(function(y){return!(Cr(y)!=="[object Boolean]"||wt&&typeof y=="object"&&wt in y)}(t))return za(KE.call(t));if(function(y){return!(Cr(y)!=="[object String]"||wt&&typeof y=="object"&&wt in y)}(t))return za(h(String(t)));if(!function(y){return!(Cr(y)!=="[object Date]"||wt&&typeof y=="object"&&wt in y)}(t)&&!function(y){return!(Cr(y)!=="[object RegExp]"||wt&&typeof y=="object"&&wt in y)}(t)){var P=ci(t,h),b=Om?Om(t)===Object.prototype:t instanceof Object||t.constructor===Object,k=t instanceof Object?"":"null prototype",E=!b&&wt&&Object(t)===t&&wt in t?uc.call(Cr(t),8,-1):k?"Object":"",w=(b||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"")+(E||k?"["+Qt.call(km.call([],E||[],k||[]),": ")+"] ":"");return P.length===0?w+"{}":p?w+"{"+xc(P,p)+"}":w+"{ "+Qt.call(P,", ")+" }"}return String(t)},aT=wc("%TypeError%"),pi=wc("%WeakMap%",!0),di=wc("%Map%",!0),oT=Ln("WeakMap.prototype.get",!0),iT=Ln("WeakMap.prototype.set",!0),sT=Ln("WeakMap.prototype.has",!0),lT=Ln("Map.prototype.get",!0),cT=Ln("Map.prototype.set",!0),pT=Ln("Map.prototype.has",!0),$c=function(e,t){for(var r,n=e;(r=n.next)!==null;n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},dT=String.prototype.replace,uT=/%20/g,Pm="RFC3986",kc={default:Pm,formatters:{RFC1738:function(e){return dT.call(e,uT,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:Pm},hT=kc,Sc=Object.prototype.hasOwnProperty,Xr=Array.isArray,Xt=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Rm=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)e[n]!==void 0&&(r[n]=e[n]);return r},Lm={arrayToObject:Rm,assign:function(e,t){return Object.keys(t).reduce(function(r,n){return r[n]=t[n],r},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],o=a.obj[a.prop],i=Object.keys(o),s=0;s<i.length;++s){var l=i[s],c=o[l];typeof c=="object"&&c!==null&&r.indexOf(c)===-1&&(t.push({obj:o,prop:l}),r.push(c))}return function(d){for(;d.length>1;){var p=d.pop(),h=p.obj[p.prop];if(Xr(h)){for(var f=[],g=0;g<h.length;++g)h[g]!==void 0&&f.push(h[g]);p.obj[p.prop]=f}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},encode:function(e,t,r,n,a){if(e.length===0)return e;var o=e;if(typeof e=="symbol"?o=Symbol.prototype.toString.call(e):typeof e!="string"&&(o=String(e)),r==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var i="",s=0;s<o.length;++s){var l=o.charCodeAt(s);l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||a===hT.RFC1738&&(l===40||l===41)?i+=o.charAt(s):l<128?i+=Xt[l]:l<2048?i+=Xt[192|l>>6]+Xt[128|63&l]:l<55296||l>=57344?i+=Xt[224|l>>12]+Xt[128|l>>6&63]+Xt[128|63&l]:(s+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(s)),i+=Xt[240|l>>18]+Xt[128|l>>12&63]+Xt[128|l>>6&63]+Xt[128|63&l])}return i},isBuffer:function(e){return!(!e||typeof e!="object")&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},maybeMap:function(e,t){if(Xr(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if(typeof r!="object"){if(Xr(t))t.push(r);else{if(!t||typeof t!="object")return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!Sc.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||typeof t!="object")return[t].concat(r);var a=t;return Xr(t)&&!Xr(r)&&(a=Rm(t,n)),Xr(t)&&Xr(r)?(r.forEach(function(o,i){if(Sc.call(t,i)){var s=t[i];s&&typeof s=="object"&&o&&typeof o=="object"?t[i]=e(s,o,n):t.push(o)}else t[i]=o}),t):Object.keys(r).reduce(function(o,i){var s=r[i];return Sc.call(o,i)?o[i]=e(o[i],s,n):o[i]=s,o},a)}},Fm=function(){var e,t,r,n={assert:function(a){if(!n.has(a))throw new aT("Side channel does not contain "+nT(a))},get:function(a){if(pi&&a&&(typeof a=="object"||typeof a=="function")){if(e)return oT(e,a)}else if(di){if(t)return lT(t,a)}else if(r)return function(o,i){var s=$c(o,i);return s&&s.value}(r,a)},has:function(a){if(pi&&a&&(typeof a=="object"||typeof a=="function")){if(e)return sT(e,a)}else if(di){if(t)return pT(t,a)}else if(r)return function(o,i){return!!$c(o,i)}(r,a);return!1},set:function(a,o){pi&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new pi),iT(e,a,o)):di?(t||(t=new di),cT(t,a,o)):(r||(r={key:{},next:null}),function(i,s,l){var c=$c(i,s);c?c.value=l:i.next={key:s,next:i.next,value:l}}(r,a,o))}};return n},Ac=Lm,qa=kc,fT=Object.prototype.hasOwnProperty,Dm={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},en=Array.isArray,mT=String.prototype.split,gT=Array.prototype.push,Nm=function(e,t){gT.apply(e,en(t)?t:[t])},yT=Date.prototype.toISOString,zm=qa.default,gt={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Ac.encode,encodeValuesOnly:!1,format:zm,formatter:qa.formatters[zm],indices:!1,serializeDate:function(e){return yT.call(e)},skipNulls:!1,strictNullHandling:!1},Oc={},vT=function e(t,r,n,a,o,i,s,l,c,d,p,h,f,g,x){for(var v=t,u=x,O=0,A=!1;(u=u.get(Oc))!==void 0&&!A;){var T=u.get(t);if(O+=1,T!==void 0){if(T===O)throw new RangeError("Cyclic object value");A=!0}u.get(Oc)===void 0&&(O=0)}if(typeof s=="function"?v=s(r,v):v instanceof Date?v=d(v):n==="comma"&&en(v)&&(v=Ac.maybeMap(v,function(_){return _ instanceof Date?d(_):_})),v===null){if(a)return i&&!f?i(r,gt.encoder,g,"key",p):r;v=""}if(function(_){return typeof _=="string"||typeof _=="number"||typeof _=="boolean"||typeof _=="symbol"||typeof _=="bigint"}(v)||Ac.isBuffer(v)){if(i){var j=f?r:i(r,gt.encoder,g,"key",p);if(n==="comma"&&f){for(var $=mT.call(String(v),","),P="",b=0;b<$.length;++b)P+=(b===0?"":",")+h(i($[b],gt.encoder,g,"value",p));return[h(j)+"="+P]}return[h(j)+"="+h(i(v,gt.encoder,g,"value",p))]}return[h(r)+"="+h(String(v))]}var k,E=[];if(v===void 0)return E;if(n==="comma"&&en(v))k=[{value:v.length>0?v.join(",")||null:void 0}];else if(en(s))k=s;else{var w=Object.keys(v);k=l?w.sort(l):w}for(var y=0;y<k.length;++y){var S=k[y],L=typeof S=="object"&&S.value!==void 0?S.value:v[S];if(!o||L!==null){var z=en(v)?typeof n=="function"?n(r,S):r:r+(c?"."+S:"["+S+"]");x.set(t,O);var V=Fm();V.set(Oc,x),Nm(E,e(L,z,n,a,o,i,s,l,c,d,p,h,f,g,V))}}return E},Fn=Lm,Ec=Object.prototype.hasOwnProperty,bT=Array.isArray,ut={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:Fn.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},xT=function(e){return e.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},qm=function(e,t){return e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1?e.split(","):e},wT=function(e,t,r,n){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(a),s=i?a.slice(0,i.index):a,l=[];if(s){if(!r.plainObjects&&Ec.call(Object.prototype,s)&&!r.allowPrototypes)return;l.push(s)}for(var c=0;r.depth>0&&(i=o.exec(a))!==null&&c<r.depth;){if(c+=1,!r.plainObjects&&Ec.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+a.slice(i.index)+"]"),function(d,p,h,f){for(var g=f?p:qm(p,h),x=d.length-1;x>=0;--x){var v,u=d[x];if(u==="[]"&&h.parseArrays)v=[].concat(g);else{v=h.plainObjects?Object.create(null):{};var O=u.charAt(0)==="["&&u.charAt(u.length-1)==="]"?u.slice(1,-1):u,A=parseInt(O,10);h.parseArrays||O!==""?!isNaN(A)&&u!==O&&String(A)===O&&A>=0&&h.parseArrays&&A<=h.arrayLimit?(v=[])[A]=g:O!=="__proto__"&&(v[O]=g):v={0:g}}g=v}return g}(l,t,r,n)}},Tc={formats:kc,parse:function(e,t){var r=function(c){if(!c)return ut;if(c.decoder!==null&&c.decoder!==void 0&&typeof c.decoder!="function")throw new TypeError("Decoder has to be a function.");if(c.charset!==void 0&&c.charset!=="utf-8"&&c.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var d=c.charset===void 0?ut.charset:c.charset;return{allowDots:c.allowDots===void 0?ut.allowDots:!!c.allowDots,allowPrototypes:typeof c.allowPrototypes=="boolean"?c.allowPrototypes:ut.allowPrototypes,allowSparse:typeof c.allowSparse=="boolean"?c.allowSparse:ut.allowSparse,arrayLimit:typeof c.arrayLimit=="number"?c.arrayLimit:ut.arrayLimit,charset:d,charsetSentinel:typeof c.charsetSentinel=="boolean"?c.charsetSentinel:ut.charsetSentinel,comma:typeof c.comma=="boolean"?c.comma:ut.comma,decoder:typeof c.decoder=="function"?c.decoder:ut.decoder,delimiter:typeof c.delimiter=="string"||Fn.isRegExp(c.delimiter)?c.delimiter:ut.delimiter,depth:typeof c.depth=="number"||c.depth===!1?+c.depth:ut.depth,ignoreQueryPrefix:c.ignoreQueryPrefix===!0,interpretNumericEntities:typeof c.interpretNumericEntities=="boolean"?c.interpretNumericEntities:ut.interpretNumericEntities,parameterLimit:typeof c.parameterLimit=="number"?c.parameterLimit:ut.parameterLimit,parseArrays:c.parseArrays!==!1,plainObjects:typeof c.plainObjects=="boolean"?c.plainObjects:ut.plainObjects,strictNullHandling:typeof c.strictNullHandling=="boolean"?c.strictNullHandling:ut.strictNullHandling}}(t);if(e===""||e==null)return r.plainObjects?Object.create(null):{};for(var n=typeof e=="string"?function(c,d){var p,h={},f=d.ignoreQueryPrefix?c.replace(/^\?/,""):c,g=d.parameterLimit===1/0?void 0:d.parameterLimit,x=f.split(d.delimiter,g),v=-1,u=d.charset;if(d.charsetSentinel)for(p=0;p<x.length;++p)x[p].indexOf("utf8=")===0&&(x[p]==="utf8=%E2%9C%93"?u="utf-8":x[p]==="utf8=%26%2310003%3B"&&(u="iso-8859-1"),v=p,p=x.length);for(p=0;p<x.length;++p)if(p!==v){var O,A,T=x[p],j=T.indexOf("]="),$=j===-1?T.indexOf("="):j+1;$===-1?(O=d.decoder(T,ut.decoder,u,"key"),A=d.strictNullHandling?null:""):(O=d.decoder(T.slice(0,$),ut.decoder,u,"key"),A=Fn.maybeMap(qm(T.slice($+1),d),function(P){return d.decoder(P,ut.decoder,u,"value")})),A&&d.interpretNumericEntities&&u==="iso-8859-1"&&(A=xT(A)),T.indexOf("[]=")>-1&&(A=bT(A)?[A]:A),Ec.call(h,O)?h[O]=Fn.combine(h[O],A):h[O]=A}return h}(e,r):e,a=r.plainObjects?Object.create(null):{},o=Object.keys(n),i=0;i<o.length;++i){var s=o[i],l=wT(s,n[s],r,typeof e=="string");a=Fn.merge(a,l,r)}return r.allowSparse===!0?a:Fn.compact(a)},stringify:function(e,t){var r,n=e,a=function(f){if(!f)return gt;if(f.encoder!==null&&f.encoder!==void 0&&typeof f.encoder!="function")throw new TypeError("Encoder has to be a function.");var g=f.charset||gt.charset;if(f.charset!==void 0&&f.charset!=="utf-8"&&f.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var x=qa.default;if(f.format!==void 0){if(!fT.call(qa.formatters,f.format))throw new TypeError("Unknown format option provided.");x=f.format}var v=qa.formatters[x],u=gt.filter;return(typeof f.filter=="function"||en(f.filter))&&(u=f.filter),{addQueryPrefix:typeof f.addQueryPrefix=="boolean"?f.addQueryPrefix:gt.addQueryPrefix,allowDots:f.allowDots===void 0?gt.allowDots:!!f.allowDots,charset:g,charsetSentinel:typeof f.charsetSentinel=="boolean"?f.charsetSentinel:gt.charsetSentinel,delimiter:f.delimiter===void 0?gt.delimiter:f.delimiter,encode:typeof f.encode=="boolean"?f.encode:gt.encode,encoder:typeof f.encoder=="function"?f.encoder:gt.encoder,encodeValuesOnly:typeof f.encodeValuesOnly=="boolean"?f.encodeValuesOnly:gt.encodeValuesOnly,filter:u,format:x,formatter:v,serializeDate:typeof f.serializeDate=="function"?f.serializeDate:gt.serializeDate,skipNulls:typeof f.skipNulls=="boolean"?f.skipNulls:gt.skipNulls,sort:typeof f.sort=="function"?f.sort:null,strictNullHandling:typeof f.strictNullHandling=="boolean"?f.strictNullHandling:gt.strictNullHandling}}(t);typeof a.filter=="function"?n=(0,a.filter)("",n):en(a.filter)&&(r=a.filter);var o,i=[];if(typeof n!="object"||n===null)return"";o=t&&t.arrayFormat in Dm?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var s=Dm[o];r||(r=Object.keys(n)),a.sort&&r.sort(a.sort);for(var l=Fm(),c=0;c<r.length;++c){var d=r[c];a.skipNulls&&n[d]===null||Nm(i,vT(n[d],d,s,a.strictNullHandling,a.skipNulls,a.encode?a.encoder:null,a.filter,a.sort,a.allowDots,a.serializeDate,a.format,a.formatter,a.encodeValuesOnly,a.charset,l))}var p=i.join(a.delimiter),h=a.addQueryPrefix===!0?"?":"";return a.charsetSentinel&&(a.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),p.length>0?h+p:""}};function Bm(e){return e==null}var pt={isNothing:Bm,isObject:function(e){return typeof e=="object"&&e!==null},toArray:function(e){return Array.isArray(e)?e:Bm(e)?[]:[e]},repeat:function(e,t){var r,n="";for(r=0;r<t;r+=1)n+=e;return n},isNegativeZero:function(e){return e===0&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,n,a,o;if(t)for(r=0,n=(o=Object.keys(t)).length;r<n;r+=1)e[a=o[r]]=t[a];return e}};function Um(e,t){var r="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+=`

`+e.mark.snippet),n+" "+r):n}function Ba(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Um(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ba.prototype=Object.create(Error.prototype),Ba.prototype.constructor=Ba,Ba.prototype.toString=function(e){return this.name+": "+Um(this,e)};var kt=Ba;function Cc(e,t,r,n,a){var o="",i="",s=Math.floor(a/2)-1;return n-t>s&&(t=n-s+(o=" ... ").length),r-n>s&&(r=n+s-(i=" ...").length),{str:o+e.slice(t,r).replace(/\t/g,"\u2192")+i,pos:n-t+o.length}}function _c(e,t){return pt.repeat(" ",t-e.length)+e}var $T=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!="number"&&(t.indent=1),typeof t.linesBefore!="number"&&(t.linesBefore=3),typeof t.linesAfter!="number"&&(t.linesAfter=2);for(var r,n=/\r?\n|\r|\0/g,a=[0],o=[],i=-1;r=n.exec(e.buffer);)o.push(r.index),a.push(r.index+r[0].length),e.position<=r.index&&i<0&&(i=a.length-2);i<0&&(i=a.length-1);var s,l,c="",d=Math.min(e.line+t.linesAfter,o.length).toString().length,p=t.maxLength-(t.indent+d+3);for(s=1;s<=t.linesBefore&&!(i-s<0);s++)l=Cc(e.buffer,a[i-s],o[i-s],e.position-(a[i]-a[i-s]),p),c=pt.repeat(" ",t.indent)+_c((e.line-s+1).toString(),d)+" | "+l.str+`
`+c;for(l=Cc(e.buffer,a[i],o[i],e.position,p),c+=pt.repeat(" ",t.indent)+_c((e.line+1).toString(),d)+" | "+l.str+`
`,c+=pt.repeat("-",t.indent+d+3+l.pos)+`^
`,s=1;s<=t.linesAfter&&!(i+s>=o.length);s++)l=Cc(e.buffer,a[i+s],o[i+s],e.position-(a[i]-a[i+s]),p),c+=pt.repeat(" ",t.indent)+_c((e.line+s+1).toString(),d)+" | "+l.str+`
`;return c.replace(/\n$/,"")},kT=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ST=["scalar","sequence","mapping"],yt=function(e,t){if(t=t||{},Object.keys(t).forEach(function(r){if(kT.indexOf(r)===-1)throw new kt('Unknown option "'+r+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(r){return r},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(r){var n={};return r!==null&&Object.keys(r).forEach(function(a){r[a].forEach(function(o){n[String(o)]=a})}),n}(t.styleAliases||null),ST.indexOf(this.kind)===-1)throw new kt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function Mm(e,t){var r=[];return e[t].forEach(function(n){var a=r.length;r.forEach(function(o,i){o.tag===n.tag&&o.kind===n.kind&&o.multi===n.multi&&(a=i)}),r[a]=n}),r}function jc(e){return this.extend(e)}jc.prototype.extend=function(e){var t=[],r=[];if(e instanceof yt)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new kt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach(function(a){if(!(a instanceof yt))throw new kt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new kt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new kt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof yt))throw new kt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(jc.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(r),n.compiledImplicit=Mm(n,"implicit"),n.compiledExplicit=Mm(n,"explicit"),n.compiledTypeMap=function(){var a,o,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function s(l){l.multi?(i.multi[l.kind].push(l),i.multi.fallback.push(l)):i[l.kind][l.tag]=i.fallback[l.tag]=l}for(a=0,o=arguments.length;a<o;a+=1)arguments[a].forEach(s);return i}(n.compiledImplicit,n.compiledExplicit),n};var Hm=jc,Wm=new yt("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Vm=new yt("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Gm=new yt("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Km=new Hm({explicit:[Wm,Vm,Gm]}),Jm=new yt("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")},construct:function(){return null},predicate:function(e){return e===null},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),Ym=new yt("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")},construct:function(e){return e==="true"||e==="True"||e==="TRUE"},predicate:function(e){return Object.prototype.toString.call(e)==="[object Boolean]"},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function AT(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function OT(e){return 48<=e&&e<=55}function ET(e){return 48<=e&&e<=57}var Zm=new yt("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t,r=e.length,n=0,a=!1;if(!r)return!1;if((t=e[n])!=="-"&&t!=="+"||(t=e[++n]),t==="0"){if(n+1===r)return!0;if((t=e[++n])==="b"){for(n++;n<r;n++)if((t=e[n])!=="_"){if(t!=="0"&&t!=="1")return!1;a=!0}return a&&t!=="_"}if(t==="x"){for(n++;n<r;n++)if((t=e[n])!=="_"){if(!AT(e.charCodeAt(n)))return!1;a=!0}return a&&t!=="_"}if(t==="o"){for(n++;n<r;n++)if((t=e[n])!=="_"){if(!OT(e.charCodeAt(n)))return!1;a=!0}return a&&t!=="_"}}if(t==="_")return!1;for(;n<r;n++)if((t=e[n])!=="_"){if(!ET(e.charCodeAt(n)))return!1;a=!0}return!(!a||t==="_")},construct:function(e){var t,r=e,n=1;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),(t=r[0])!=="-"&&t!=="+"||(t==="-"&&(n=-1),t=(r=r.slice(1))[0]),r==="0")return 0;if(t==="0"){if(r[1]==="b")return n*parseInt(r.slice(2),2);if(r[1]==="x")return n*parseInt(r.slice(2),16);if(r[1]==="o")return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1==0&&!pt.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),TT=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),CT=/^[-+]?[0-9]+e/,Qm=new yt("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return e!==null&&!(!TT.test(e)||e[e.length-1]==="_")},construct:function(e){var t,r;return r=(t=e.replace(/_/g,"").toLowerCase())[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:r*parseFloat(t,10)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!=0||pt.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(pt.isNegativeZero(e))return"-0.0";return r=e.toString(10),CT.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),Xm=Km.extend({implicit:[Jm,Ym,Zm,Qm]}),eg=Xm,tg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),rg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),ng=new yt("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return e!==null&&(tg.exec(e)!==null||rg.exec(e)!==null)},construct:function(e){var t,r,n,a,o,i,s,l,c=0,d=null;if((t=tg.exec(e))===null&&(t=rg.exec(e)),t===null)throw new Error("Date resolve error");if(r=+t[1],n=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(r,n,a));if(o=+t[4],i=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),t[9]==="-"&&(d=-d)),l=new Date(Date.UTC(r,n,a,o,i,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),ag=new yt("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return e==="<<"||e===null}}),Ic=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`,og=new yt("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(e===null)return!1;var t,r,n=0,a=e.length,o=Ic;for(r=0;r<a;r++)if(!((t=o.indexOf(e.charAt(r)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),a=n.length,o=Ic,i=0,s=[];for(t=0;t<a;t++)t%4==0&&t&&(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)),i=i<<6|o.indexOf(n.charAt(t));return(r=a%4*6)===0?(s.push(i>>16&255),s.push(i>>8&255),s.push(255&i)):r===18?(s.push(i>>10&255),s.push(i>>2&255)):r===12&&s.push(i>>4&255),new Uint8Array(s)},predicate:function(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"},represent:function(e){var t,r,n="",a=0,o=e.length,i=Ic;for(t=0;t<o;t++)t%3==0&&t&&(n+=i[a>>18&63],n+=i[a>>12&63],n+=i[a>>6&63],n+=i[63&a]),a=(a<<8)+e[t];return(r=o%3)===0?(n+=i[a>>18&63],n+=i[a>>12&63],n+=i[a>>6&63],n+=i[63&a]):r===2?(n+=i[a>>10&63],n+=i[a>>4&63],n+=i[a<<2&63],n+=i[64]):r===1&&(n+=i[a>>2&63],n+=i[a<<4&63],n+=i[64],n+=i[64]),n}}),_T=Object.prototype.hasOwnProperty,jT=Object.prototype.toString,ig=new yt("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(e===null)return!0;var t,r,n,a,o,i=[],s=e;for(t=0,r=s.length;t<r;t+=1){if(n=s[t],o=!1,jT.call(n)!=="[object Object]")return!1;for(a in n)if(_T.call(n,a)){if(o)return!1;o=!0}if(!o||i.indexOf(a)!==-1)return!1;i.push(a)}return!0},construct:function(e){return e!==null?e:[]}}),IT=Object.prototype.toString,sg=new yt("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(e===null)return!0;var t,r,n,a,o,i=e;for(o=new Array(i.length),t=0,r=i.length;t<r;t+=1){if(n=i[t],IT.call(n)!=="[object Object]"||(a=Object.keys(n)).length!==1)return!1;o[t]=[a[0],n[a[0]]]}return!0},construct:function(e){if(e===null)return[];var t,r,n,a,o,i=e;for(o=new Array(i.length),t=0,r=i.length;t<r;t+=1)n=i[t],a=Object.keys(n),o[t]=[a[0],n[a[0]]];return o}}),PT=Object.prototype.hasOwnProperty,lg=new yt("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(e===null)return!0;var t,r=e;for(t in r)if(PT.call(r,t)&&r[t]!==null)return!1;return!0},construct:function(e){return e!==null?e:{}}}),Pc=eg.extend({implicit:[ng,ag],explicit:[og,ig,sg,lg]}),_r=Object.prototype.hasOwnProperty,RT=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,LT=/[\x85\u2028\u2029]/,FT=/[,\[\]\{\}]/,cg=/^(?:!|!!|![a-z\-]+!)$/i,pg=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function dg(e){return Object.prototype.toString.call(e)}function er(e){return e===10||e===13}function tn(e){return e===9||e===32}function Tt(e){return e===9||e===32||e===10||e===13}function Dn(e){return e===44||e===91||e===93||e===123||e===125}function DT(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function NT(e){return e===120?2:e===117?4:e===85?8:0}function zT(e){return 48<=e&&e<=57?e-48:-1}function ug(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function qT(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var hg=new Array(256),fg=new Array(256),Nn=0;Nn<256;Nn++)hg[Nn]=ug(Nn)?1:0,fg[Nn]=ug(Nn);function BT(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Pc,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function mg(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=$T(r),new kt(t,r)}function le(e,t){throw mg(e,t)}function ui(e,t){e.onWarning&&e.onWarning.call(null,mg(e,t))}var gg={YAML:function(e,t,r){var n,a,o;e.version!==null&&le(e,"duplication of %YAML directive"),r.length!==1&&le(e,"YAML directive accepts exactly one argument"),(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))===null&&le(e,"ill-formed argument of the YAML directive"),a=parseInt(n[1],10),o=parseInt(n[2],10),a!==1&&le(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=o<2,o!==1&&o!==2&&ui(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,a;r.length!==2&&le(e,"TAG directive accepts exactly two arguments"),n=r[0],a=r[1],cg.test(n)||le(e,"ill-formed tag handle (first argument) of the TAG directive"),_r.call(e.tagMap,n)&&le(e,'there is a previously declared suffix for "'+n+'" tag handle'),pg.test(a)||le(e,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{le(e,"tag prefix is malformed: "+a)}e.tagMap[n]=a}};function jr(e,t,r,n){var a,o,i,s;if(t<r){if(s=e.input.slice(t,r),n)for(a=0,o=s.length;a<o;a+=1)(i=s.charCodeAt(a))===9||32<=i&&i<=1114111||le(e,"expected valid JSON character");else RT.test(s)&&le(e,"the stream contains non-printable characters");e.result+=s}}function yg(e,t,r,n){var a,o,i,s;for(pt.isObject(r)||le(e,"cannot merge mappings; the provided source object is unacceptable"),i=0,s=(a=Object.keys(r)).length;i<s;i+=1)o=a[i],_r.call(t,o)||(t[o]=r[o],n[o]=!0)}function zn(e,t,r,n,a,o,i,s,l){var c,d;if(Array.isArray(a))for(c=0,d=(a=Array.prototype.slice.call(a)).length;c<d;c+=1)Array.isArray(a[c])&&le(e,"nested arrays are not supported inside keys"),typeof a=="object"&&dg(a[c])==="[object Object]"&&(a[c]="[object Object]");if(typeof a=="object"&&dg(a)==="[object Object]"&&(a="[object Object]"),a=String(a),t===null&&(t={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(c=0,d=o.length;c<d;c+=1)yg(e,t,o[c],r);else yg(e,t,o,r);else e.json||_r.call(r,a)||!_r.call(t,a)||(e.line=i||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,le(e,"duplicated mapping key")),a==="__proto__"?Object.defineProperty(t,a,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[a]=o,delete r[a];return t}function Rc(e){var t;(t=e.input.charCodeAt(e.position))===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):le(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ot(e,t,r){for(var n=0,a=e.input.charCodeAt(e.position);a!==0;){for(;tn(a);)a===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(t&&a===35)do a=e.input.charCodeAt(++e.position);while(a!==10&&a!==13&&a!==0);if(!er(a))break;for(Rc(e),a=e.input.charCodeAt(e.position),n++,e.lineIndent=0;a===32;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return r!==-1&&n!==0&&e.lineIndent<r&&ui(e,"deficient indentation"),n}function hi(e){var t,r=e.position;return!((t=e.input.charCodeAt(r))!==45&&t!==46||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,(t=e.input.charCodeAt(r))!==0&&!Tt(t)))}function Lc(e,t){t===1?e.result+=" ":t>1&&(e.result+=pt.repeat(`
`,t-1))}function vg(e,t){var r,n,a=e.tag,o=e.anchor,i=[],s=!1;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=i),n=e.input.charCodeAt(e.position);n!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,le(e,"tab characters must not be used in indentation")),n===45)&&Tt(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,ot(e,!0,-1)&&e.lineIndent<=t)i.push(null),n=e.input.charCodeAt(e.position);else if(r=e.line,qn(e,t,3,!1,!0),i.push(e.result),ot(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&n!==0)le(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=a,e.anchor=o,e.kind="sequence",e.result=i,!0)}function UT(e){var t,r,n,a,o=!1,i=!1;if((a=e.input.charCodeAt(e.position))!==33)return!1;if(e.tag!==null&&le(e,"duplication of a tag property"),(a=e.input.charCodeAt(++e.position))===60?(o=!0,a=e.input.charCodeAt(++e.position)):a===33?(i=!0,r="!!",a=e.input.charCodeAt(++e.position)):r="!",t=e.position,o){do a=e.input.charCodeAt(++e.position);while(a!==0&&a!==62);e.position<e.length?(n=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):le(e,"unexpected end of the stream within a verbatim tag")}else{for(;a!==0&&!Tt(a);)a===33&&(i?le(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),cg.test(r)||le(e,"named tag handle cannot contain such characters"),i=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),FT.test(n)&&le(e,"tag suffix cannot contain flow indicator characters")}n&&!pg.test(n)&&le(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch{le(e,"tag name is malformed: "+n)}return o?e.tag=n:_r.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:r==="!"?e.tag="!"+n:r==="!!"?e.tag="tag:yaml.org,2002:"+n:le(e,'undeclared tag handle "'+r+'"'),!0}function MT(e){var t,r;if((r=e.input.charCodeAt(e.position))!==38)return!1;for(e.anchor!==null&&le(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;r!==0&&!Tt(r)&&!Dn(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&le(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function qn(e,t,r,n,a){var o,i,s,l,c,d,p,h,f,g=1,x=!1,v=!1;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=i=s=r===4||r===3,n&&ot(e,!0,-1)&&(x=!0,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)),g===1)for(;UT(e)||MT(e);)ot(e,!0,-1)?(x=!0,s=o,e.lineIndent>t?g=1:e.lineIndent===t?g=0:e.lineIndent<t&&(g=-1)):s=!1;if(s&&(s=x||a),g!==1&&r!==4||(h=r===1||r===2?t:t+1,f=e.position-e.lineStart,g===1?s&&(vg(e,f)||function(u,O,A){var T,j,$,P,b,k,E,w=u.tag,y=u.anchor,S={},L=Object.create(null),z=null,V=null,_=null,C=!1,U=!1;if(u.firstTabInLine!==-1)return!1;for(u.anchor!==null&&(u.anchorMap[u.anchor]=S),E=u.input.charCodeAt(u.position);E!==0;){if(C||u.firstTabInLine===-1||(u.position=u.firstTabInLine,le(u,"tab characters must not be used in indentation")),T=u.input.charCodeAt(u.position+1),$=u.line,E!==63&&E!==58||!Tt(T)){if(P=u.line,b=u.lineStart,k=u.position,!qn(u,A,2,!1,!0))break;if(u.line===$){for(E=u.input.charCodeAt(u.position);tn(E);)E=u.input.charCodeAt(++u.position);if(E===58)Tt(E=u.input.charCodeAt(++u.position))||le(u,"a whitespace character is expected after the key-value separator within a block mapping"),C&&(zn(u,S,L,z,V,null,P,b,k),z=V=_=null),U=!0,C=!1,j=!1,z=u.tag,V=u.result;else{if(!U)return u.tag=w,u.anchor=y,!0;le(u,"can not read an implicit mapping pair; a colon is missed")}}else{if(!U)return u.tag=w,u.anchor=y,!0;le(u,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else E===63?(C&&(zn(u,S,L,z,V,null,P,b,k),z=V=_=null),U=!0,C=!0,j=!0):C?(C=!1,j=!0):le(u,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),u.position+=1,E=T;if((u.line===$||u.lineIndent>O)&&(C&&(P=u.line,b=u.lineStart,k=u.position),qn(u,O,4,!0,j)&&(C?V=u.result:_=u.result),C||(zn(u,S,L,z,V,_,P,b,k),z=V=_=null),ot(u,!0,-1),E=u.input.charCodeAt(u.position)),(u.line===$||u.lineIndent>O)&&E!==0)le(u,"bad indentation of a mapping entry");else if(u.lineIndent<O)break}return C&&zn(u,S,L,z,V,null,P,b,k),U&&(u.tag=w,u.anchor=y,u.kind="mapping",u.result=S),U}(e,f,h))||function(u,O){var A,T,j,$,P,b,k,E,w,y,S,L,z=!0,V=u.tag,_=u.anchor,C=Object.create(null);if((L=u.input.charCodeAt(u.position))===91)P=93,E=!1,$=[];else{if(L!==123)return!1;P=125,E=!0,$={}}for(u.anchor!==null&&(u.anchorMap[u.anchor]=$),L=u.input.charCodeAt(++u.position);L!==0;){if(ot(u,!0,O),(L=u.input.charCodeAt(u.position))===P)return u.position++,u.tag=V,u.anchor=_,u.kind=E?"mapping":"sequence",u.result=$,!0;z?L===44&&le(u,"expected the node content, but found ','"):le(u,"missed comma between flow collection entries"),S=null,b=k=!1,L===63&&Tt(u.input.charCodeAt(u.position+1))&&(b=k=!0,u.position++,ot(u,!0,O)),A=u.line,T=u.lineStart,j=u.position,qn(u,O,1,!1,!0),y=u.tag,w=u.result,ot(u,!0,O),L=u.input.charCodeAt(u.position),!k&&u.line!==A||L!==58||(b=!0,L=u.input.charCodeAt(++u.position),ot(u,!0,O),qn(u,O,1,!1,!0),S=u.result),E?zn(u,$,C,y,w,S,A,T,j):b?$.push(zn(u,null,C,y,w,S,A,T,j)):$.push(w),ot(u,!0,O),(L=u.input.charCodeAt(u.position))===44?(z=!0,L=u.input.charCodeAt(++u.position)):z=!1}le(u,"unexpected end of the stream within a flow collection")}(e,h)?v=!0:(i&&function(u,O){var A,T,j,$,P=1,b=!1,k=!1,E=O,w=0,y=!1;if(($=u.input.charCodeAt(u.position))===124)T=!1;else{if($!==62)return!1;T=!0}for(u.kind="scalar",u.result="";$!==0;)if(($=u.input.charCodeAt(++u.position))===43||$===45)P===1?P=$===43?3:2:le(u,"repeat of a chomping mode identifier");else{if(!((j=zT($))>=0))break;j===0?le(u,"bad explicit indentation width of a block scalar; it cannot be less than one"):k?le(u,"repeat of an indentation width identifier"):(E=O+j-1,k=!0)}if(tn($)){do $=u.input.charCodeAt(++u.position);while(tn($));if($===35)do $=u.input.charCodeAt(++u.position);while(!er($)&&$!==0)}for(;$!==0;){for(Rc(u),u.lineIndent=0,$=u.input.charCodeAt(u.position);(!k||u.lineIndent<E)&&$===32;)u.lineIndent++,$=u.input.charCodeAt(++u.position);if(!k&&u.lineIndent>E&&(E=u.lineIndent),er($))w++;else{if(u.lineIndent<E){P===3?u.result+=pt.repeat(`
`,b?1+w:w):P===1&&b&&(u.result+=`
`);break}for(T?tn($)?(y=!0,u.result+=pt.repeat(`
`,b?1+w:w)):y?(y=!1,u.result+=pt.repeat(`
`,w+1)):w===0?b&&(u.result+=" "):u.result+=pt.repeat(`
`,w):u.result+=pt.repeat(`
`,b?1+w:w),b=!0,k=!0,w=0,A=u.position;!er($)&&$!==0;)$=u.input.charCodeAt(++u.position);jr(u,A,u.position,!1)}}return!0}(e,h)||function(u,O){var A,T,j;if((A=u.input.charCodeAt(u.position))!==39)return!1;for(u.kind="scalar",u.result="",u.position++,T=j=u.position;(A=u.input.charCodeAt(u.position))!==0;)if(A===39){if(jr(u,T,u.position,!0),(A=u.input.charCodeAt(++u.position))!==39)return!0;T=u.position,u.position++,j=u.position}else er(A)?(jr(u,T,j,!0),Lc(u,ot(u,!1,O)),T=j=u.position):u.position===u.lineStart&&hi(u)?le(u,"unexpected end of the document within a single quoted scalar"):(u.position++,j=u.position);le(u,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(u,O){var A,T,j,$,P,b;if((b=u.input.charCodeAt(u.position))!==34)return!1;for(u.kind="scalar",u.result="",u.position++,A=T=u.position;(b=u.input.charCodeAt(u.position))!==0;){if(b===34)return jr(u,A,u.position,!0),u.position++,!0;if(b===92){if(jr(u,A,u.position,!0),er(b=u.input.charCodeAt(++u.position)))ot(u,!1,O);else if(b<256&&hg[b])u.result+=fg[b],u.position++;else if((P=NT(b))>0){for(j=P,$=0;j>0;j--)(P=DT(b=u.input.charCodeAt(++u.position)))>=0?$=($<<4)+P:le(u,"expected hexadecimal character");u.result+=qT($),u.position++}else le(u,"unknown escape sequence");A=T=u.position}else er(b)?(jr(u,A,T,!0),Lc(u,ot(u,!1,O)),A=T=u.position):u.position===u.lineStart&&hi(u)?le(u,"unexpected end of the document within a double quoted scalar"):(u.position++,T=u.position)}le(u,"unexpected end of the stream within a double quoted scalar")}(e,h)?v=!0:function(u){var O,A,T;if((T=u.input.charCodeAt(u.position))!==42)return!1;for(T=u.input.charCodeAt(++u.position),O=u.position;T!==0&&!Tt(T)&&!Dn(T);)T=u.input.charCodeAt(++u.position);return u.position===O&&le(u,"name of an alias node must contain at least one character"),A=u.input.slice(O,u.position),_r.call(u.anchorMap,A)||le(u,'unidentified alias "'+A+'"'),u.result=u.anchorMap[A],ot(u,!0,-1),!0}(e)?(v=!0,e.tag===null&&e.anchor===null||le(e,"alias node should not have any properties")):function(u,O,A){var T,j,$,P,b,k,E,w,y=u.kind,S=u.result;if(Tt(w=u.input.charCodeAt(u.position))||Dn(w)||w===35||w===38||w===42||w===33||w===124||w===62||w===39||w===34||w===37||w===64||w===96||(w===63||w===45)&&(Tt(T=u.input.charCodeAt(u.position+1))||A&&Dn(T)))return!1;for(u.kind="scalar",u.result="",j=$=u.position,P=!1;w!==0;){if(w===58){if(Tt(T=u.input.charCodeAt(u.position+1))||A&&Dn(T))break}else if(w===35){if(Tt(u.input.charCodeAt(u.position-1)))break}else{if(u.position===u.lineStart&&hi(u)||A&&Dn(w))break;if(er(w)){if(b=u.line,k=u.lineStart,E=u.lineIndent,ot(u,!1,-1),u.lineIndent>=O){P=!0,w=u.input.charCodeAt(u.position);continue}u.position=$,u.line=b,u.lineStart=k,u.lineIndent=E;break}}P&&(jr(u,j,$,!1),Lc(u,u.line-b),j=$=u.position,P=!1),tn(w)||($=u.position+1),w=u.input.charCodeAt(++u.position)}return jr(u,j,$,!1),!!u.result||(u.kind=y,u.result=S,!1)}(e,h,r===1)&&(v=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):g===0&&(v=s&&vg(e,f))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&le(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((p=e.implicitTypes[l]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(_r.call(e.typeMap[e.kind||"fallback"],e.tag))p=e.typeMap[e.kind||"fallback"][e.tag];else for(p=null,l=0,c=(d=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,d[l].tag.length)===d[l].tag){p=d[l];break}p||le(e,"unknown tag !<"+e.tag+">"),e.result!==null&&p.kind!==e.kind&&le(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result,e.tag)?(e.result=p.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):le(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||v}function HT(e){var t,r,n,a,o=e.position,i=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(a=e.input.charCodeAt(e.position))!==0&&(ot(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||a!==37));){for(i=!0,a=e.input.charCodeAt(++e.position),t=e.position;a!==0&&!Tt(a);)a=e.input.charCodeAt(++e.position);for(n=[],(r=e.input.slice(t,e.position)).length<1&&le(e,"directive name must not be less than one character in length");a!==0;){for(;tn(a);)a=e.input.charCodeAt(++e.position);if(a===35){do a=e.input.charCodeAt(++e.position);while(a!==0&&!er(a));break}if(er(a))break;for(t=e.position;a!==0&&!Tt(a);)a=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}a!==0&&Rc(e),_r.call(gg,r)?gg[r](e,r,n):ui(e,'unknown document directive "'+r+'"')}ot(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,ot(e,!0,-1)):i&&le(e,"directives end mark is expected"),qn(e,e.lineIndent-1,4,!1,!0),ot(e,!0,-1),e.checkLineBreaks&&LT.test(e.input.slice(o,e.position))&&ui(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&hi(e)?e.input.charCodeAt(e.position)===46&&(e.position+=3,ot(e,!0,-1)):e.position<e.length-1&&le(e,"end of the stream or a document separator is expected")}function bg(e,t){t=t||{},(e=String(e)).length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var r=new BT(e,t),n=e.indexOf("\0");for(n!==-1&&(r.position=n,le(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)HT(r);return r.documents}var xg={loadAll:function(e,t,r){t!==null&&typeof t=="object"&&r===void 0&&(r=t,t=null);var n=bg(e,r);if(typeof t!="function")return n;for(var a=0,o=n.length;a<o;a+=1)t(n[a])},load:function(e,t){var r=bg(e,t);if(r.length!==0){if(r.length===1)return r[0];throw new kt("expected a single document in the stream, but found more")}}},wg=Object.prototype.toString,$g=Object.prototype.hasOwnProperty,Fc=65279,WT={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},VT=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],GT=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function KT(e){var t,r,n;if(t=e.toString(16).toUpperCase(),e<=255)r="x",n=2;else if(e<=65535)r="u",n=4;else{if(!(e<=4294967295))throw new kt("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+pt.repeat("0",n-t.length)+t}function JT(e){this.schema=e.schema||Pc,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=pt.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(t,r){var n,a,o,i,s,l,c;if(r===null)return{};for(n={},o=0,i=(a=Object.keys(r)).length;o<i;o+=1)s=a[o],l=String(r[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),(c=t.compiledTypeMap.fallback[s])&&$g.call(c.styleAliases,l)&&(l=c.styleAliases[l]),n[s]=l;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function kg(e,t){for(var r,n=pt.repeat(" ",t),a=0,o=-1,i="",s=e.length;a<s;)(o=e.indexOf(`
`,a))===-1?(r=e.slice(a),a=s):(r=e.slice(a,o+1),a=o+1),r.length&&r!==`
`&&(i+=n),i+=r;return i}function Dc(e,t){return`
`+pt.repeat(" ",e.indent*t)}function fi(e){return e===32||e===9}function Ua(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==Fc||65536<=e&&e<=1114111}function Sg(e){return Ua(e)&&e!==Fc&&e!==13&&e!==10}function Ag(e,t,r){var n=Sg(e),a=n&&!fi(e);return(r?n:n&&e!==44&&e!==91&&e!==93&&e!==123&&e!==125)&&e!==35&&!(t===58&&!a)||Sg(t)&&!fi(t)&&e===35||t===58&&a}function Ma(e,t){var r,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function Og(e){return/^\n* /.test(e)}function YT(e,t,r,n,a,o,i,s){var l,c=0,d=null,p=!1,h=!1,f=n!==-1,g=-1,x=function(v){return Ua(v)&&v!==Fc&&!fi(v)&&v!==45&&v!==63&&v!==58&&v!==44&&v!==91&&v!==93&&v!==123&&v!==125&&v!==35&&v!==38&&v!==42&&v!==33&&v!==124&&v!==61&&v!==62&&v!==39&&v!==34&&v!==37&&v!==64&&v!==96}(Ma(e,0))&&function(v){return!fi(v)&&v!==58}(Ma(e,e.length-1));if(t||i)for(l=0;l<e.length;c>=65536?l+=2:l++){if(!Ua(c=Ma(e,l)))return 5;x=x&&Ag(c,d,s),d=c}else{for(l=0;l<e.length;c>=65536?l+=2:l++){if((c=Ma(e,l))===10)p=!0,f&&(h=h||l-g-1>n&&e[g+1]!==" ",g=l);else if(!Ua(c))return 5;x=x&&Ag(c,d,s),d=c}h=h||f&&l-g-1>n&&e[g+1]!==" "}return p||h?r>9&&Og(e)?5:i?o===2?5:2:h?4:3:!x||i||a(e)?o===2?5:2:1}function ZT(e,t,r,n,a){e.dump=function(){if(t.length===0)return e.quotingType===2?'""':"''";if(!e.noCompatMode&&(VT.indexOf(t)!==-1||GT.test(t)))return e.quotingType===2?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,r),i=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=n||e.flowLevel>-1&&r>=e.flowLevel;switch(YT(t,s,e.indent,i,function(l){return function(c,d){var p,h;for(p=0,h=c.implicitTypes.length;p<h;p+=1)if(c.implicitTypes[p].resolve(d))return!0;return!1}(e,l)},e.quotingType,e.forceQuotes&&!n,a)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Eg(t,e.indent)+Tg(kg(t,o));case 4:return">"+Eg(t,e.indent)+Tg(kg(function(l,c){for(var d,p,h=/(\n+)([^\n]*)/g,f=(x=l.indexOf(`
`),x=x!==-1?x:l.length,h.lastIndex=x,Cg(l.slice(0,x),c)),g=l[0]===`
`||l[0]===" ",x;p=h.exec(l);){var v=p[1],u=p[2];d=u[0]===" ",f+=v+(g||d||u===""?"":`
`)+Cg(u,c),g=d}return f}(t,i),o));case 5:return'"'+function(l){for(var c,d="",p=0,h=0;h<l.length;p>=65536?h+=2:h++)p=Ma(l,h),!(c=WT[p])&&Ua(p)?(d+=l[h],p>=65536&&(d+=l[h+1])):d+=c||KT(p);return d}(t)+'"';default:throw new kt("impossible error: invalid scalar style")}}()}function Eg(e,t){var r=Og(e)?String(t):"",n=e[e.length-1]===`
`;return r+(n&&(e[e.length-2]===`
`||e===`
`)?"+":n?"":"-")+`
`}function Tg(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Cg(e,t){if(e===""||e[0]===" ")return e;for(var r,n,a=/ [^ ]/g,o=0,i=0,s=0,l="";r=a.exec(e);)(s=r.index)-o>t&&(n=i>o?i:s,l+=`
`+e.slice(o,n),o=n+1),i=s;return l+=`
`,e.length-o>t&&i>o?l+=e.slice(o,i)+`
`+e.slice(i+1):l+=e.slice(o),l.slice(1)}function _g(e,t,r,n){var a,o,i,s="",l=e.tag;for(a=0,o=r.length;a<o;a+=1)i=r[a],e.replacer&&(i=e.replacer.call(r,String(a),i)),(dr(e,t+1,i,!0,!0,!1,!0)||i===void 0&&dr(e,t+1,null,!0,!0,!1,!0))&&(n&&s===""||(s+=Dc(e,t)),e.dump&&e.dump.charCodeAt(0)===10?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function jg(e,t,r){var n,a,o,i,s,l;for(o=0,i=(a=r?e.explicitTypes:e.implicitTypes).length;o<i;o+=1)if(((s=a[o]).instanceOf||s.predicate)&&(!s.instanceOf||typeof t=="object"&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(r?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(l=e.styleMap[s.tag]||s.defaultStyle,wg.call(s.represent)==="[object Function]")n=s.represent(t,l);else{if(!$g.call(s.represent,l))throw new kt("!<"+s.tag+'> tag resolver accepts not "'+l+'" style');n=s.represent[l](t,l)}e.dump=n}return!0}return!1}function dr(e,t,r,n,a,o,i){e.tag=null,e.dump=r,jg(e,r,!1)||jg(e,r,!0);var s,l=wg.call(e.dump),c=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var d,p,h=l==="[object Object]"||l==="[object Array]";if(h&&(p=(d=e.duplicates.indexOf(r))!==-1),(e.tag!==null&&e.tag!=="?"||p||e.indent!==2&&t>0)&&(a=!1),p&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(h&&p&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),l==="[object Object]")n&&Object.keys(e.dump).length!==0?(function(f,g,x,v){var u,O,A,T,j,$,P="",b=f.tag,k=Object.keys(x);if(f.sortKeys===!0)k.sort();else if(typeof f.sortKeys=="function")k.sort(f.sortKeys);else if(f.sortKeys)throw new kt("sortKeys must be a boolean or a function");for(u=0,O=k.length;u<O;u+=1)$="",v&&P===""||($+=Dc(f,g)),T=x[A=k[u]],f.replacer&&(T=f.replacer.call(x,A,T)),dr(f,g+1,A,!0,!0,!0)&&((j=f.tag!==null&&f.tag!=="?"||f.dump&&f.dump.length>1024)&&(f.dump&&f.dump.charCodeAt(0)===10?$+="?":$+="? "),$+=f.dump,j&&($+=Dc(f,g)),dr(f,g+1,T,!0,j)&&(f.dump&&f.dump.charCodeAt(0)===10?$+=":":$+=": ",P+=$+=f.dump));f.tag=b,f.dump=P||"{}"}(e,t,e.dump,a),p&&(e.dump="&ref_"+d+e.dump)):(function(f,g,x){var v,u,O,A,T,j="",$=f.tag,P=Object.keys(x);for(v=0,u=P.length;v<u;v+=1)T="",j!==""&&(T+=", "),f.condenseFlow&&(T+='"'),A=x[O=P[v]],f.replacer&&(A=f.replacer.call(x,O,A)),dr(f,g,O,!1,!1)&&(f.dump.length>1024&&(T+="? "),T+=f.dump+(f.condenseFlow?'"':"")+":"+(f.condenseFlow?"":" "),dr(f,g,A,!1,!1)&&(j+=T+=f.dump));f.tag=$,f.dump="{"+j+"}"}(e,t,e.dump),p&&(e.dump="&ref_"+d+" "+e.dump));else if(l==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!i&&t>0?_g(e,t-1,e.dump,a):_g(e,t,e.dump,a),p&&(e.dump="&ref_"+d+e.dump)):(function(f,g,x){var v,u,O,A="",T=f.tag;for(v=0,u=x.length;v<u;v+=1)O=x[v],f.replacer&&(O=f.replacer.call(x,String(v),O)),(dr(f,g,O,!1,!1)||O===void 0&&dr(f,g,null,!1,!1))&&(A!==""&&(A+=","+(f.condenseFlow?"":" ")),A+=f.dump);f.tag=T,f.dump="["+A+"]"}(e,t,e.dump),p&&(e.dump="&ref_"+d+" "+e.dump));else{if(l!=="[object String]"){if(l==="[object Undefined]"||e.skipInvalid)return!1;throw new kt("unacceptable kind of an object to dump "+l)}e.tag!=="?"&&ZT(e,e.dump,t,o,c)}e.tag!==null&&e.tag!=="?"&&(s=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s=e.tag[0]==="!"?"!"+s:s.slice(0,18)==="tag:yaml.org,2002:"?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function QT(e,t){var r,n,a=[],o=[];for(Nc(e,a,o),r=0,n=o.length;r<n;r+=1)t.duplicates.push(a[o[r]]);t.usedDuplicates=new Array(n)}function Nc(e,t,r){var n,a,o;if(e!==null&&typeof e=="object")if((a=t.indexOf(e))!==-1)r.indexOf(a)===-1&&r.push(a);else if(t.push(e),Array.isArray(e))for(a=0,o=e.length;a<o;a+=1)Nc(e[a],t,r);else for(a=0,o=(n=Object.keys(e)).length;a<o;a+=1)Nc(e[n[a]],t,r)}function zc(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var Ig={Type:yt,Schema:Hm,FAILSAFE_SCHEMA:Km,JSON_SCHEMA:Xm,CORE_SCHEMA:eg,DEFAULT_SCHEMA:Pc,load:xg.load,loadAll:xg.loadAll,dump:function(e,t){var r=new JT(t=t||{});r.noRefs||QT(e,r);var n=e;return r.replacer&&(n=r.replacer.call({"":n},"",n)),dr(r,0,n,!0,!0)?r.dump+`
`:""},YAMLException:kt,types:{binary:og,float:Qm,map:Gm,null:Jm,pairs:sg,set:lg,timestamp:ng,bool:Ym,int:Zm,merge:ag,omap:ig,seq:Vm,str:Wm},safeLoad:zc("safeLoad","load"),safeLoadAll:zc("safeLoadAll","loadAll"),safeDump:zc("safeDump","dump")};const XT=typeof globalThis<"u"?globalThis:typeof self<"u"?self:window,{FormData:Pg,Blob:mi,File:Rg}=XT;function rn(e){return function(t){if(bl(t))return kl(t)}(e)||function(t){if(Kr!==void 0&&vl(t)!=null||t["@@iterator"]!=null)return af(t)}(e)||Sl(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var Wt=Gh,eC=function(e){return":/?#[]@!$&'()*+,;=".indexOf(e)>-1},tC=function(e){return/^[a-z0-9\-._~]+$/i.test(e)};function Bn(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.escape,a=arguments.length>2?arguments[2]:void 0;return typeof e=="number"&&(e=e.toString()),typeof e=="string"&&e.length&&n?a?JSON.parse(e):Fe(t=rn(e)).call(t,function(o){var i,s;if(tC(o)||eC(o)&&n==="unsafe")return o;var l=new TextEncoder;return Fe(i=Fe(s=im(l.encode(o))).call(s,function(c){var d;return Wt(d="0".concat(c.toString(16).toUpperCase())).call(d,-2)})).call(i,function(c){return"%".concat(c)}).join("")}).join(""):e}function qc(e){var t=e.value;return Array.isArray(t)?function(r){var n=r.key,a=r.value,o=r.style,i=r.explode,s=r.escape,l=function(h){return Bn(h,{escape:s})};if(o==="simple")return Fe(a).call(a,function(h){return l(h)}).join(",");if(o==="label")return".".concat(Fe(a).call(a,function(h){return l(h)}).join("."));if(o==="matrix")return Fe(a).call(a,function(h){return l(h)}).reduce(function(h,f){var g,x,v;return!h||i?oe(x=oe(v="".concat(h||"",";")).call(v,n,"=")).call(x,f):oe(g="".concat(h,",")).call(g,f)},"");if(o==="form"){var c=i?"&".concat(n,"="):",";return Fe(a).call(a,function(h){return l(h)}).join(c)}if(o==="spaceDelimited"){var d=i?"".concat(n,"="):"";return Fe(a).call(a,function(h){return l(h)}).join(" ".concat(d))}if(o==="pipeDelimited"){var p=i?"".concat(n,"="):"";return Fe(a).call(a,function(h){return l(h)}).join("|".concat(p))}}(e):We(t)==="object"?function(r){var n=r.key,a=r.value,o=r.style,i=r.explode,s=r.escape,l=function(d){return Bn(d,{escape:s})},c=Pe(a);if(o==="simple")return c.reduce(function(d,p){var h,f,g,x=l(a[p]),v=i?"=":",",u=d?"".concat(d,","):"";return oe(h=oe(f=oe(g="".concat(u)).call(g,p)).call(f,v)).call(h,x)},"");if(o==="label")return c.reduce(function(d,p){var h,f,g,x=l(a[p]),v=i?"=":".",u=d?"".concat(d,"."):".";return oe(h=oe(f=oe(g="".concat(u)).call(g,p)).call(f,v)).call(h,x)},"");if(o==="matrix"&&i)return c.reduce(function(d,p){var h,f,g=l(a[p]),x=d?"".concat(d,";"):";";return oe(h=oe(f="".concat(x)).call(f,p,"=")).call(h,g)},"");if(o==="matrix")return c.reduce(function(d,p){var h,f,g=l(a[p]),x=d?"".concat(d,","):";".concat(n,"=");return oe(h=oe(f="".concat(x)).call(f,p,",")).call(h,g)},"");if(o==="form")return c.reduce(function(d,p){var h,f,g,x,v=l(a[p]),u=d?oe(h="".concat(d)).call(h,i?"&":","):"",O=i?"=":",";return oe(f=oe(g=oe(x="".concat(u)).call(x,p)).call(g,O)).call(f,v)},"")}(e):function(r){var n,a=r.key,o=r.value,i=r.style,s=r.escape,l=function(c){return Bn(c,{escape:s})};if(i==="simple")return l(o);if(i==="label")return".".concat(l(o));if(i==="matrix")return oe(n=";".concat(a,"=")).call(n,l(o));if(i==="form"||i==="deepObject")return l(o)}(e)}var rC=function(e,t){t.body=e},Bc={serializeRes:Fg,mergeInQueryOrForm:Ug};function gi(e){return Lg.apply(this,arguments)}function Lg(){return(Lg=Yl(Zt.mark(function e(t){var r,n,a,o,i,s=arguments;return Zt.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(r=s.length>1&&s[1]!==void 0?s[1]:{},We(t)==="object"&&(t=(r=t).url),r.headers=r.headers||{},Bc.mergeInQueryOrForm(r),r.headers&&Pe(r.headers).forEach(function(c){var d=r.headers[c];typeof d=="string"&&(r.headers[c]=d.replace(/\n+/g," "))}),!r.requestInterceptor){l.next=12;break}return l.next=8,r.requestInterceptor(r);case 8:if(l.t0=l.sent,l.t0){l.next=11;break}l.t0=r;case 11:r=l.t0;case 12:return n=r.headers["content-type"]||r.headers["Content-Type"],/multipart\/form-data/i.test(n)&&r.body instanceof Pg&&(delete r.headers["content-type"],delete r.headers["Content-Type"]),l.prev=14,l.next=17,(r.userFetch||fetch)(r.url,r);case 17:return a=l.sent,l.next=20,Bc.serializeRes(a,t,r);case 20:if(a=l.sent,!r.responseInterceptor){l.next=28;break}return l.next=24,r.responseInterceptor(a);case 24:if(l.t1=l.sent,l.t1){l.next=27;break}l.t1=a;case 27:a=l.t1;case 28:l.next=39;break;case 30:if(l.prev=30,l.t2=l.catch(14),a){l.next=34;break}throw l.t2;case 34:throw(o=new Error(a.statusText||"response status is ".concat(a.status))).status=a.status,o.statusCode=a.status,o.responseError=l.t2,o;case 39:if(a.ok){l.next=45;break}throw(i=new Error(a.statusText||"response status is ".concat(a.status))).status=a.status,i.statusCode=a.status,i.response=a,i;case 45:return l.abrupt("return",a);case 46:case"end":return l.stop()}},e,null,[[14,30]])}))).apply(this,arguments)}var nC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/(json|xml|yaml|text)\b/.test(e)};function aC(e,t){return t&&(t.indexOf("application/json")===0||t.indexOf("+json")>0)?JSON.parse(e):Ig.load(e)}function Fg(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.loadSpec,a=n!==void 0&&n,o={ok:e.ok,url:e.url||t,status:e.status,statusText:e.statusText,headers:Dg(e.headers)},i=o.headers["content-type"],s=a||nC(i),l=s?e.text:e.blob||e.buffer;return l.call(e).then(function(c){if(o.text=c,o.data=c,s)try{var d=aC(c,i);o.body=d,o.obj=d}catch(p){o.parseError=p}return o})}function oC(e){return Ra(e).call(e,", ")?e.split(", "):e}function Dg(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return typeof om(e)!="function"?{}:im(om(e).call(e)).reduce(function(t,r){var n=Ht(r,2),a=n[0],o=n[1];return t[a]=oC(o),t},{})}function Uc(e,t){return t||typeof navigator>"u"||(t=navigator),t&&t.product==="ReactNative"?!(!e||We(e)!=="object"||typeof e.uri!="string"):Rg!==void 0&&e instanceof Rg||mi!==void 0&&e instanceof mi||!!ArrayBuffer.isView(e)||e!==null&&We(e)==="object"&&typeof e.pipe=="function"}function Ng(e,t){return Array.isArray(e)&&e.some(function(r){return Uc(r,t)})}var iC={form:",",spaceDelimited:"%20",pipeDelimited:"|"},sC={csv:",",ssv:"%20",tsv:"%09",pipes:"|"};function zg(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=t.collectionFormat,a=t.allowEmptyValue,o=t.serializationOption,i=t.encoding,s=We(t)!=="object"||Array.isArray(t)?t:t.value,l=r?function(g){return g.toString()}:function(g){return encodeURIComponent(g)},c=l(e);if(s===void 0&&a)return[[c,""]];if(Uc(s)||Ng(s))return[[c,s]];if(o)return qg(e,s,r,o);if(i){if([We(i.style),We(i.explode),We(i.allowReserved)].some(function(g){return g!=="undefined"})){var d=i.style,p=i.explode,h=i.allowReserved;return qg(e,s,r,{style:d,explode:p,allowReserved:h})}if(i.contentType){if(i.contentType==="application/json"){var f=typeof s=="string"?s:ni(s);return[[c,l(f)]]}return[[c,l(s.toString())]]}return We(s)!=="object"?[[c,l(s)]]:Array.isArray(s)&&s.every(function(g){return We(g)!=="object"})?[[c,Fe(s).call(s,l).join(",")]]:[[c,l(ni(s))]]}return We(s)!=="object"?[[c,l(s)]]:Array.isArray(s)?n==="multi"?[[c,Fe(s).call(s,l)]]:[[c,Fe(s).call(s,l).join(sC[n||"csv"])]]:[[c,""]]}function qg(e,t,r,n){var a,o,i,s=n.style||"form",l=n.explode===void 0?s==="form":n.explode,c=!r&&(n&&n.allowReserved?"unsafe":"reserved"),d=function(h){return Bn(h,{escape:c})},p=r?function(h){return h}:function(h){return Bn(h,{escape:c})};return We(t)!=="object"?[[p(e),d(t)]]:Array.isArray(t)?l?[[p(e),Fe(t).call(t,d)]]:[[p(e),Fe(t).call(t,d).join(iC[s])]]:s==="deepObject"?Fe(o=Pe(t)).call(o,function(h){var f;return[p(oe(f="".concat(e,"[")).call(f,h,"]")),d(t[h])]}):l?Fe(i=Pe(t)).call(i,function(h){return[p(h),d(t[h])]}):[[p(e),Fe(a=Pe(t)).call(a,function(h){var f;return[oe(f="".concat(p(h),",")).call(f,d(t[h]))]}).join(",")]]}function lC(e){return um(e).reduce(function(t,r){var n,a=Ht(r,2),o=Jr(zg(a[0],a[1],!0));try{for(o.s();!(n=o.n()).done;){var i=Ht(n.value,2),s=i[0],l=i[1];if(Array.isArray(l)){var c,d=Jr(l);try{for(d.s();!(c=d.n()).done;){var p=c.value;if(ArrayBuffer.isView(p)){var h=new mi([p]);t.append(s,h)}else t.append(s,p)}}catch(g){d.e(g)}finally{d.f()}}else if(ArrayBuffer.isView(l)){var f=new mi([l]);t.append(s,f)}else t.append(s,l)}}catch(g){o.e(g)}finally{o.f()}return t},new Pg)}function Bg(e){var t=Pe(e).reduce(function(r,n){var a,o=Jr(zg(n,e[n]));try{for(o.s();!(a=o.n()).done;){var i=Ht(a.value,2),s=i[0],l=i[1];r[s]=l}}catch(c){o.e(c)}finally{o.f()}return r},{});return Tc.stringify(t,{encode:!1,indices:!1})||""}function Ug(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.url,r=t===void 0?"":t,n=e.query,a=e.form,o=function(){for(var u=arguments.length,O=new Array(u),A=0;A<u;A++)O[A]=arguments[A];var T=zt(O).call(O,function(j){return j}).join("&");return T?"?".concat(T):""};if(a){var i=Pe(a).some(function(u){var O=a[u].value;return Uc(O)||Ng(O)}),s=e.headers["content-type"]||e.headers["Content-Type"];if(i||/multipart\/form-data/i.test(s)){var l=lC(e.form);rC(l,e)}else e.body=Bg(a);delete e.form}if(n){var c=r.split("?"),d=Ht(c,2),p=d[0],h=d[1],f="";if(h){var g=Tc.parse(h),x=Pe(n);x.forEach(function(u){return delete g[u]}),f=Tc.stringify(g,{encode:!0})}var v=o(f,Bg(n));e.url=p+v,delete e.query}return e}function Mg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hg(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Bo(e,n.key,n)}}function Wg(e,t,r){return t&&Hg(e.prototype,t),r&&Hg(e,r),Bo(e,"prototype",{writable:!1}),e}var cC=Ie,pC=$r.find,dC="find",Vg=!0;dC in[]&&Array(1).find(function(){Vg=!1}),cC({target:"Array",proto:!0,forced:Vg},{find:function(e){return pC(this,e,arguments.length>1?arguments[1]:void 0)}});var uC=Ft("Array").find,hC=xt,fC=uC,Mc=Array.prototype,mC=function(e){var t=e.find;return e===Mc||hC(Mc,e)&&t===Mc.find?fC:t},nn=Xf,gC=Ie,yC=ce,vC=ko,bC=$o,xC=br,wC=lr,$C=Ns,kC=gn,SC=Sa("splice"),AC=yC.TypeError,OC=Math.max,EC=Math.min,TC=9007199254740991,CC="Maximum allowed length exceeded";gC({target:"Array",proto:!0,forced:!SC},{splice:function(e,t){var r,n,a,o,i,s,l=wC(this),c=xC(l),d=vC(e,c),p=arguments.length;if(p===0?r=n=0:p===1?(r=0,n=c-d):(r=p-2,n=EC(OC(bC(t),0),c-d)),c+r-n>TC)throw AC(CC);for(a=$C(l,n),o=0;o<n;o++)(i=d+o)in l&&kC(a,o,l[i]);if(a.length=n,r<n){for(o=d;o<c-n;o++)s=o+r,(i=o+n)in l?l[s]=l[i]:delete l[s];for(o=c;o>c-n+r;o--)delete l[o-1]}else if(r>n)for(o=c-n;o>d;o--)s=o+r-1,(i=o+n-1)in l?l[s]=l[i]:delete l[s];for(o=0;o<r;o++)l[o+d]=arguments[o+2];return l.length=c-n+r,a}});var Hc,_C=Ft("Array").splice,jC=xt,IC=_C,Wc=Array.prototype,PC=function(e){var t=e.splice;return e===Wc||jC(Wc,e)&&t===Wc.splice?IC:t},RC=globalThis&&globalThis.__extends||(Hc=function(e,t){return(Hc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a])})(e,t)},function(e,t){function r(){this.constructor=e}Hc(e,t),e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}),LC=Object.prototype.hasOwnProperty;function Vc(e,t){return LC.call(e,t)}function Gc(e){if(Array.isArray(e)){for(var t=new Array(e.length),r=0;r<t.length;r++)t[r]=""+r;return t}if(Object.keys)return Object.keys(e);t=[];for(var n in e)Vc(e,n)&&t.push(n);return t}function It(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function Kc(e){for(var t,r=0,n=e.length;r<n;){if(!((t=e.charCodeAt(r))>=48&&t<=57))return!1;r++}return!0}function an(e){return e.indexOf("/")===-1&&e.indexOf("~")===-1?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function Gg(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function Jc(e){if(e===void 0)return!0;if(e){if(Array.isArray(e)){for(var t=0,r=e.length;t<r;t++)if(Jc(e[t]))return!0}else if(typeof e=="object"){var n=Gc(e),a=n.length;for(t=0;t<a;t++)if(Jc(e[n[t]]))return!0}}return!1}function Kg(e,t){var r=[e];for(var n in t){var a=typeof t[n]=="object"?JSON.stringify(t[n],null,2):t[n];a!==void 0&&r.push(n+": "+a)}return r.join(`
`)}var Jg=function(e){function t(r,n,a,o,i){var s=this.constructor,l=e.call(this,Kg(r,{name:n,index:a,operation:o,tree:i}))||this;return l.name=n,l.index=a,l.operation=o,l.tree=i,Object.setPrototypeOf(l,s.prototype),l.message=Kg(r,{name:n,index:a,operation:o,tree:i}),l}return RC(t,e),t}(Error),Qe=Jg,FC=It,Un={add:function(e,t,r){return e[t]=this.value,{newDocument:r}},remove:function(e,t,r){var n=e[t];return delete e[t],{newDocument:r,removed:n}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:function(e,t,r){var n=Ha(r,this.path);n&&(n=It(n));var a=on(r,{op:"remove",path:this.from}).removed;return on(r,{op:"add",path:this.path,value:a}),{newDocument:r,removed:n}},copy:function(e,t,r){var n=Ha(r,this.from);return on(r,{op:"add",path:this.path,value:It(n)}),{newDocument:r}},test:function(e,t,r){return{newDocument:r,test:Wa(e[t],this.value)}},_get:function(e,t,r){return this.value=e[t],{newDocument:r}}},DC={add:function(e,t,r){return Kc(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,r){return{newDocument:r,removed:e.splice(t,1)[0]}},replace:function(e,t,r){var n=e[t];return e[t]=this.value,{newDocument:r,removed:n}},move:Un.move,copy:Un.copy,test:Un.test,_get:Un._get};function Ha(e,t){if(t=="")return e;var r={op:"_get",path:t};return on(e,r),r.value}function on(e,t,r,n,a,o){if(r===void 0&&(r=!1),n===void 0&&(n=!0),a===void 0&&(a=!0),o===void 0&&(o=0),r&&(typeof r=="function"?r(t,0,e,t.path):yi(t,0)),t.path===""){var i={newDocument:e};if(t.op==="add")return i.newDocument=t.value,i;if(t.op==="replace")return i.newDocument=t.value,i.removed=e,i;if(t.op==="move"||t.op==="copy")return i.newDocument=Ha(e,t.from),t.op==="move"&&(i.removed=e),i;if(t.op==="test"){if(i.test=Wa(e,t.value),i.test===!1)throw new Qe("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i.newDocument=e,i}if(t.op==="remove")return i.removed=e,i.newDocument=null,i;if(t.op==="_get")return t.value=e,i;if(r)throw new Qe("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",o,t,e);return i}n||(e=It(e));var s=(t.path||"").split("/"),l=e,c=1,d=s.length,p=void 0,h=void 0,f=void 0;for(f=typeof r=="function"?r:yi;;){if((h=s[c])&&h.indexOf("~")!=-1&&(h=Gg(h)),a&&h=="__proto__")throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&p===void 0&&(l[h]===void 0?p=s.slice(0,c).join("/"):c==d-1&&(p=t.path),p!==void 0&&f(t,0,e,p)),c++,Array.isArray(l)){if(h==="-")h=l.length;else{if(r&&!Kc(h))throw new Qe("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",o,t,e);Kc(h)&&(h=~~h)}if(c>=d){if(r&&t.op==="add"&&h>l.length)throw new Qe("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",o,t,e);if((i=DC[t.op].call(t,l,h,e)).test===!1)throw new Qe("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i}}else if(c>=d){if((i=Un[t.op].call(t,l,h,e)).test===!1)throw new Qe("Test operation failed","TEST_OPERATION_FAILED",o,t,e);return i}if(l=l[h],r&&c<d&&(!l||typeof l!="object"))throw new Qe("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",o,t,e)}}function Ir(e,t,r,n,a){if(n===void 0&&(n=!0),a===void 0&&(a=!0),r&&!Array.isArray(t))throw new Qe("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(e=It(e));for(var o=new Array(t.length),i=0,s=t.length;i<s;i++)o[i]=on(e,t[i],r,!0,a,i),e=o[i].newDocument;return o.newDocument=e,o}function yi(e,t,r,n){if(typeof e!="object"||e===null||Array.isArray(e))throw new Qe("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,r);if(!Un[e.op])throw new Qe("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,r);if(typeof e.path!="string")throw new Qe("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,r);if(e.path.indexOf("/")!==0&&e.path.length>0)throw new Qe('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,r);if((e.op==="move"||e.op==="copy")&&typeof e.from!="string")throw new Qe("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,r);if((e.op==="add"||e.op==="replace"||e.op==="test")&&e.value===void 0)throw new Qe("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,r);if((e.op==="add"||e.op==="replace"||e.op==="test")&&Jc(e.value))throw new Qe("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,r);if(r){if(e.op=="add"){var a=e.path.split("/").length,o=n.split("/").length;if(a!==o+1&&a!==o)throw new Qe("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,r)}else if(e.op==="replace"||e.op==="remove"||e.op==="_get"){if(e.path!==n)throw new Qe("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,r)}else if(e.op==="move"||e.op==="copy"){var i=Yg([{op:"_get",path:e.from,value:void 0}],r);if(i&&i.name==="OPERATION_PATH_UNRESOLVABLE")throw new Qe("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,r)}}}function Yg(e,t,r){try{if(!Array.isArray(e))throw new Qe("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)Ir(It(t),It(e),r||!0);else{r=r||yi;for(var n=0;n<e.length;n++)r(e[n],n,t,void 0)}}catch(a){if(a instanceof Qe)return a;throw a}}function Wa(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r,n,a,o=Array.isArray(e),i=Array.isArray(t);if(o&&i){if((n=e.length)!=t.length)return!1;for(r=n;r--!=0;)if(!Wa(e[r],t[r]))return!1;return!0}if(o!=i)return!1;var s=Object.keys(e);if((n=s.length)!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!t.hasOwnProperty(s[r]))return!1;for(r=n;r--!=0;)if(!Wa(e[a=s[r]],t[a]))return!1;return!0}return e!=e&&t!=t}var NC=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",JsonPatchError:Qe,deepClone:FC,getValueByPointer:Ha,applyOperation:on,applyPatch:Ir,applyReducer:function(e,t,r){var n=on(e,t);if(n.test===!1)throw new Qe("Test operation failed","TEST_OPERATION_FAILED",r,t,e);return n.newDocument},validator:yi,validate:Yg,_areEquals:Wa}),Yc=new WeakMap,zC=function(e){this.observers=new Map,this.obj=e},qC=function(e,t){this.callback=e,this.observer=t};function Zc(e,t){t===void 0&&(t=!1);var r=Yc.get(e.object);Qc(r.value,e.object,e.patches,"",t),e.patches.length&&Ir(r.value,e.patches);var n=e.patches;return n.length>0&&(e.patches=[],e.callback&&e.callback(n)),n}function Qc(e,t,r,n,a){if(t!==e){typeof t.toJSON=="function"&&(t=t.toJSON());for(var o=Gc(t),i=Gc(e),s=!1,l=i.length-1;l>=0;l--){var c=e[p=i[l]];if(!Vc(t,p)||t[p]===void 0&&c!==void 0&&Array.isArray(t)===!1)Array.isArray(e)===Array.isArray(t)?(a&&r.push({op:"test",path:n+"/"+an(p),value:It(c)}),r.push({op:"remove",path:n+"/"+an(p)}),s=!0):(a&&r.push({op:"test",path:n,value:e}),r.push({op:"replace",path:n,value:t}));else{var d=t[p];typeof c=="object"&&c!=null&&typeof d=="object"&&d!=null&&Array.isArray(c)===Array.isArray(d)?Qc(c,d,r,n+"/"+an(p),a):c!==d&&(a&&r.push({op:"test",path:n+"/"+an(p),value:It(c)}),r.push({op:"replace",path:n+"/"+an(p),value:It(d)}))}}if(s||o.length!=i.length)for(l=0;l<o.length;l++){var p;Vc(e,p=o[l])||t[p]===void 0||r.push({op:"add",path:n+"/"+an(p),value:It(t[p])})}}}var BC=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",unobserve:function(e,t){t.unobserve()},observe:function(e,t){var r,n=function(s){return Yc.get(s)}(e);if(n){var a=function(s,l){return s.observers.get(l)}(n,t);r=a&&a.observer}else n=new zC(e),Yc.set(e,n);if(r)return r;if(r={},n.value=It(e),t){r.callback=t,r.next=null;var o=function(){Zc(r)},i=function(){clearTimeout(r.next),r.next=setTimeout(o)};typeof window<"u"&&(window.addEventListener("mouseup",i),window.addEventListener("keyup",i),window.addEventListener("mousedown",i),window.addEventListener("keydown",i),window.addEventListener("change",i))}return r.patches=[],r.object=e,r.unobserve=function(){Zc(r),clearTimeout(r.next),function(s,l){s.observers.delete(l.callback)}(n,r),typeof window<"u"&&(window.removeEventListener("mouseup",i),window.removeEventListener("keyup",i),window.removeEventListener("mousedown",i),window.removeEventListener("keydown",i),window.removeEventListener("change",i))},n.observers.set(t,new qC(t,r)),r},generate:Zc,compare:function(e,t,r){r===void 0&&(r=!1);var n=[];return Qc(e,t,n,"",r),n}});Object.assign({},NC,BC,{JsonPatchError:Jg,deepClone:It,escapePathComponent:an,unescapePathComponent:Gg});var UC=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var r=Object.prototype.toString.call(t);return r==="[object RegExp]"||r==="[object Date]"||function(n){return n.$$typeof===MC}(t)}(e)},MC=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Va(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Mn((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function HC(e,t,r){return e.concat(t).map(function(n){return Va(n,r)})}function Zg(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(r){return t.propertyIsEnumerable(r)}):[]}(e))}function Qg(e,t){try{return t in e}catch{return!1}}function WC(e,t,r){var n={};return r.isMergeableObject(e)&&Zg(e).forEach(function(a){n[a]=Va(e[a],r)}),Zg(t).forEach(function(a){(function(o,i){return Qg(o,i)&&!(Object.hasOwnProperty.call(o,i)&&Object.propertyIsEnumerable.call(o,i))})(e,a)||(Qg(e,a)&&r.isMergeableObject(t[a])?n[a]=function(o,i){if(!i.customMerge)return Mn;var s=i.customMerge(o);return typeof s=="function"?s:Mn}(a,r)(e[a],t[a],r):n[a]=Va(t[a],r))}),n}function Mn(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||HC,r.isMergeableObject=r.isMergeableObject||UC,r.cloneUnlessOtherwiseSpecified=Va;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):WC(e,t,r):Va(t,r)}Mn.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,n){return Mn(r,n,t)},{})};var VC=Mn,Ne={add:function(e,t){return{op:"add",path:e,value:t}},replace:vi,remove:function(e){return{op:"remove",path:e}},merge:function(e,t){return{type:"mutation",op:"merge",path:e,value:t}},mergeDeep:function(e,t){return{type:"mutation",op:"mergeDeep",path:e,value:t}},context:function(e,t){return{type:"context",path:e,value:t}},getIn:function(e,t){return t.reduce(function(r,n){return n!==void 0&&r?r[n]:r},e)},applyPatch:function(e,t,r){if(r=r||{},(t=Ke(Ke({},t),{},{path:t.path&&Xg(t.path)})).op==="merge"){var n=tp(e,t.path);Dt(n,t.value),Ir(e,[vi(t.path,n)])}else if(t.op==="mergeDeep"){var a=tp(e,t.path),o=VC(a,t.value);e=Ir(e,[vi(t.path,o)]).newDocument}else if(t.op==="add"&&t.path===""&&sn(t.value)){var i=Pe(t.value).reduce(function(c,d){return c.push({op:"add",path:"/".concat(Xg(d)),value:t.value[d]}),c},[]);Ir(e,i)}else if(t.op==="replace"&&t.path===""){var s=t.value;r.allowMetaPatches&&t.meta&&bi(t)&&(Array.isArray(t.value)||sn(t.value))&&(s=Ke(Ke({},s),t.meta)),e=s}else if(Ir(e,[t]),r.allowMetaPatches&&t.meta&&bi(t)&&(Array.isArray(t.value)||sn(t.value))){var l=Ke(Ke({},tp(e,t.path)),t.meta);Ir(e,[vi(t.path,l)])}return e},parentPathMatch:function(e,t){if(!Array.isArray(t))return!1;for(var r=0,n=t.length;r<n;r+=1)if(t[r]!==e[r])return!1;return!0},flatten:Ga,fullyNormalizeArray:function(e){return ry(Ga(ty(e)))},normalizeArray:ty,isPromise:function(e){return sn(e)&&ny(e.then)},forEachNew:function(e,t){try{return ey(e,ep,t)}catch(r){return r}},forEachNewPrimitive:function(e,t){try{return ey(e,Xc,t)}catch(r){return r}},isJsonPatch:ay,isContextPatch:function(e){return xi(e)&&e.type==="context"},isPatch:xi,isMutation:oy,isAdditiveMutation:bi,isGenerator:function(e){return Object.prototype.toString.call(e)==="[object GeneratorFunction]"},isFunction:ny,isObject:sn,isError:function(e){return e instanceof Error}};function Xg(e){return Array.isArray(e)?e.length<1?"":"/".concat(Fe(e).call(e,function(t){return(t+"").replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")):e}function vi(e,t,r){return{op:"replace",path:e,value:t,meta:r}}function ey(e,t,r){var n;return ry(Ga(Fe(n=zt(e).call(e,bi)).call(n,function(a){return t(a.value,r,a.path)})||[]))}function Xc(e,t,r){return r=r||[],Array.isArray(e)?Fe(e).call(e,function(a,o){return Xc(a,t,oe(r).call(r,o))}):sn(e)?Fe(n=Pe(e)).call(n,function(a){return Xc(e[a],t,oe(r).call(r,a))}):t(e,r[r.length-1],r);var n}function ep(e,t,r){var n=[];if((r=r||[]).length>0){var a=t(e,r[r.length-1],r);a&&(n=oe(n).call(n,a))}if(Array.isArray(e)){var o=Fe(e).call(e,function(l,c){return ep(l,t,oe(r).call(r,c))});o&&(n=oe(n).call(n,o))}else if(sn(e)){var i,s=Fe(i=Pe(e)).call(i,function(l){return ep(e[l],t,oe(r).call(r,l))});s&&(n=oe(n).call(n,s))}return n=Ga(n)}function ty(e){return Array.isArray(e)?e:[e]}function Ga(e){var t;return oe(t=[]).apply(t,rn(Fe(e).call(e,function(r){return Array.isArray(r)?Ga(r):r})))}function ry(e){return zt(e).call(e,function(t){return t!==void 0})}function sn(e){return e&&We(e)==="object"}function ny(e){return e&&typeof e=="function"}function ay(e){if(xi(e)){var t=e.op;return t==="add"||t==="remove"||t==="replace"}return!1}function oy(e){return ay(e)||xi(e)&&e.type==="mutation"}function bi(e){return oy(e)&&(e.op==="add"||e.op==="replace"||e.op==="merge"||e.op==="mergeDeep")}function xi(e){return e&&We(e)==="object"}function tp(e,t){try{return Ha(e,t)}catch(r){return console.error(r),{}}}var wi={exports:{}},GC=He(function(){if(typeof ArrayBuffer=="function"){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}),KC=He,JC=lt,YC=Nr,iy=GC,$i=Object.isExtensible,sy=KC(function(){$i(1)})||iy?function(e){return!!JC(e)&&(!iy||YC(e)!="ArrayBuffer")&&(!$i||$i(e))}:$i,ZC=!He(function(){return Object.isExtensible(Object.preventExtensions({}))}),QC=Ie,XC=Be,e2=da,t2=lt,rp=mt,r2=Ct.f,ly=ma,n2=Cs,np=sy,a2=ZC,cy=!1,ur=vo("meta"),o2=0,ap=function(e){r2(e,ur,{value:{objectID:"O"+o2++,weakData:{}}})},i2=wi.exports={enable:function(){i2.enable=function(){},cy=!0;var e=ly.f,t=XC([].splice),r={};r[ur]=1,e(r).length&&(ly.f=function(n){for(var a=e(n),o=0,i=a.length;o<i;o++)if(a[o]===ur){t(a,o,1);break}return a},QC({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:n2.f}))},fastKey:function(e,t){if(!t2(e))return typeof e=="symbol"?e:(typeof e=="string"?"S":"P")+e;if(!rp(e,ur)){if(!np(e))return"F";if(!t)return"E";ap(e)}return e[ur].objectID},getWeakData:function(e,t){if(!rp(e,ur)){if(!np(e))return!0;if(!t)return!1;ap(e)}return e[ur].weakData},onFreeze:function(e){return a2&&cy&&np(e)&&!rp(e,ur)&&ap(e),e}};e2[ur]=!0;var s2=Ie,l2=ce,c2=wi.exports,p2=He,d2=vr,u2=kn,h2=Go,f2=nt,m2=lt,g2=Mr,y2=Ct.f,v2=$r.forEach,b2=bt,x2=Gt.set,w2=Gt.getterFor,$2=Be,py=Vo,ki=wi.exports.getWeakData,k2=Ot,op=lt,S2=Go,A2=kn,dy=mt,O2=Gt.set,E2=Gt.getterFor,T2=$r.find,C2=$r.findIndex,_2=$2([].splice),j2=0,Si=function(e){return e.frozen||(e.frozen=new uy)},uy=function(){this.entries=[]},ip=function(e,t){return T2(e.entries,function(r){return r[0]===t})};uy.prototype={get:function(e){var t=ip(this,e);if(t)return t[1]},has:function(e){return!!ip(this,e)},set:function(e,t){var r=ip(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=C2(this.entries,function(r){return r[0]===e});return~t&&_2(this.entries,t,1),!!~t}};var Ka,I2={getConstructor:function(e,t,r,n){var a=e(function(l,c){S2(l,o),O2(l,{type:t,id:j2++,frozen:void 0}),c!=null&&A2(c,l[n],{that:l,AS_ENTRIES:r})}),o=a.prototype,i=E2(t),s=function(l,c,d){var p=i(l),h=ki(k2(c),!0);return h===!0?Si(p).set(c,d):h[p.id]=d,l};return py(o,{delete:function(l){var c=i(this);if(!op(l))return!1;var d=ki(l);return d===!0?Si(c).delete(l):d&&dy(d,c.id)&&delete d[c.id]},has:function(l){var c=i(this);if(!op(l))return!1;var d=ki(l);return d===!0?Si(c).has(l):d&&dy(d,c.id)}}),py(o,r?{get:function(l){var c=i(this);if(op(l)){var d=ki(l);return d===!0?Si(c).get(l):d?d[c.id]:void 0}},set:function(l,c){return s(this,l,c)}}:{add:function(l){return s(this,l,!0)}}),a}},hy=ce,Ai=Be,P2=Vo,R2=wi.exports,L2=function(e,t,r){var n,a=e.indexOf("Map")!==-1,o=e.indexOf("Weak")!==-1,i=a?"set":"add",s=l2[e],l=s&&s.prototype,c={};if(b2&&f2(s)&&(o||l.forEach&&!p2(function(){new s().entries().next()}))){var d=(n=t(function(h,f){x2(h2(h,d),{type:e,collection:new s}),f!=null&&u2(f,h[i],{that:h,AS_ENTRIES:a})})).prototype,p=w2(e);v2(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(h){var f=h=="add"||h=="set";!(h in l)||o&&h=="clear"||d2(d,h,function(g,x){var v=p(this).collection;if(!f&&o&&!m2(g))return h=="get"&&void 0;var u=v[h](g===0?0:g,x);return f?this:u})}),o||y2(d,"size",{configurable:!0,get:function(){return p(this).collection.size}})}else n=r.getConstructor(t,e,a,i),c2.enable();return g2(n,e,!1,!0),c[e]=n,s2({global:!0,forced:!0},c),o||r.setStrong(n,e,a),n},fy=I2,Oi=lt,Ei=sy,Ti=Gt.enforce,F2=cu,D2=!hy.ActiveXObject&&"ActiveXObject"in hy,my=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},N2=L2("WeakMap",my,fy);if(F2&&D2){Ka=fy.getConstructor(my,"WeakMap",!0),R2.enable();var Ja=N2.prototype,gy=Ai(Ja.delete),Ci=Ai(Ja.has),yy=Ai(Ja.get),vy=Ai(Ja.set);P2(Ja,{delete:function(e){if(Oi(e)&&!Ei(e)){var t=Ti(this);return t.frozen||(t.frozen=new Ka),gy(this,e)||t.frozen.delete(e)}return gy(this,e)},has:function(e){if(Oi(e)&&!Ei(e)){var t=Ti(this);return t.frozen||(t.frozen=new Ka),Ci(this,e)||t.frozen.has(e)}return Ci(this,e)},get:function(e){if(Oi(e)&&!Ei(e)){var t=Ti(this);return t.frozen||(t.frozen=new Ka),Ci(this,e)?yy(this,e):t.frozen.get(e)}return yy(this,e)},set:function(e,t){if(Oi(e)&&!Ei(e)){var r=Ti(this);r.frozen||(r.frozen=new Ka),Ci(this,e)?vy(this,e,t):r.frozen.set(e,t)}else vy(this,e,t);return this}})}var z2=ct.WeakMap,q2=He,B2=Ge("iterator"),U2=!q2(function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach(function(n,a){t.delete("b"),r+=a+n}),!e.toJSON||!t.sort||e.href!=="http://a/c%20d?a=1&c=3"||t.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!t[B2]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("http://\u0442\u0435\u0441\u0442").host!=="xn--e1aybc"||new URL("http://a#\u0431").hash!=="#%D0%B1"||r!=="a1c3"||new URL("http://x",void 0).host!=="x"}),by=nu,M2=Math.floor,sp=function(e,t){var r=e.length,n=M2(r/2);return r<8?H2(e,t):W2(e,sp(by(e,0,n),t),sp(by(e,n),t),t)},H2=function(e,t){for(var r,n,a=e.length,o=1;o<a;){for(n=o,r=e[o];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==o++&&(e[n]=r)}return e},W2=function(e,t,r,n){for(var a=t.length,o=r.length,i=0,s=0;i<a||s<o;)e[i+s]=i<a&&s<o?n(t[i],r[s])<=0?t[i++]:r[s++]:i<a?t[i++]:r[s++];return e},lp=Ie,_i=ce,cp=Lt,ji=At,tr=Be,xy=U2,wy=ga,V2=Vo,G2=Mr,K2=Qu,pp=Gt,$y=Go,dp=nt,J2=mt,Y2=Br,Z2=xr,Q2=Ot,ky=lt,Pt=Ur,X2=fa,Sy=yr,up=$l,e_=Ta,Hn=yf,t_=sp,r_=Ge("iterator"),Ii="URLSearchParams",Ay="URLSearchParamsIterator",Oy=pp.set,rr=pp.getterFor(Ii),n_=pp.getterFor(Ay),Ey=cp("fetch"),Pi=cp("Request"),Ya=cp("Headers"),hp=Pi&&Pi.prototype,Ty=Ya&&Ya.prototype,a_=_i.RegExp,o_=_i.TypeError,Cy=_i.decodeURIComponent,i_=_i.encodeURIComponent,s_=tr("".charAt),_y=tr([].join),ln=tr([].push),fp=tr("".replace),l_=tr([].shift),jy=tr([].splice),Iy=tr("".split),c_=tr("".slice),p_=/\+/g,Py=Array(4),d_=function(e){return Py[e-1]||(Py[e-1]=a_("((?:%[\\da-f]{2}){"+e+"})","gi"))},u_=function(e){try{return Cy(e)}catch{return e}},Ry=function(e){var t=fp(e,p_," "),r=4;try{return Cy(t)}catch{for(;r;)t=fp(t,d_(r--),u_);return t}},h_=/[!'()~]|%20/g,f_={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},m_=function(e){return f_[e]},Ly=function(e){return fp(i_(e),h_,m_)},mp=K2(function(e,t){Oy(this,{type:Ay,iterator:up(rr(e).entries),kind:t})},"Iterator",function(){var e=n_(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value=t==="keys"?n.key:t==="values"?n.value:[n.key,n.value]),r},!0),Fy=function(e){this.entries=[],this.url=null,e!==void 0&&(ky(e)?this.parseObject(e):this.parseQuery(typeof e=="string"?s_(e,0)==="?"?c_(e,1):e:Pt(e)))};Fy.prototype={type:Ii,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,o,i,s,l=e_(e);if(l)for(r=(t=up(e,l)).next;!(n=ji(r,t)).done;){if(o=(a=up(Q2(n.value))).next,(i=ji(o,a)).done||(s=ji(o,a)).done||!ji(o,a).done)throw o_("Expected sequence with length 2");ln(this.entries,{key:Pt(i.value),value:Pt(s.value)})}else for(var c in e)J2(e,c)&&ln(this.entries,{key:c,value:Pt(e[c])})},parseQuery:function(e){if(e)for(var t,r,n=Iy(e,"&"),a=0;a<n.length;)(t=n[a++]).length&&(r=Iy(t,"="),ln(this.entries,{key:Ry(l_(r)),value:Ry(_y(r,"="))}))},serialize:function(){for(var e,t=this.entries,r=[],n=0;n<t.length;)e=t[n++],ln(r,Ly(e.key)+"="+Ly(e.value));return _y(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var gp=function(){$y(this,Za);var e=arguments.length>0?arguments[0]:void 0;Oy(this,new Fy(e))},Za=gp.prototype;if(V2(Za,{append:function(e,t){Hn(arguments.length,2);var r=rr(this);ln(r.entries,{key:Pt(e),value:Pt(t)}),r.updateURL()},delete:function(e){Hn(arguments.length,1);for(var t=rr(this),r=t.entries,n=Pt(e),a=0;a<r.length;)r[a].key===n?jy(r,a,1):a++;t.updateURL()},get:function(e){Hn(arguments.length,1);for(var t=rr(this).entries,r=Pt(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){Hn(arguments.length,1);for(var t=rr(this).entries,r=Pt(e),n=[],a=0;a<t.length;a++)t[a].key===r&&ln(n,t[a].value);return n},has:function(e){Hn(arguments.length,1);for(var t=rr(this).entries,r=Pt(e),n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){Hn(arguments.length,1);for(var r,n=rr(this),a=n.entries,o=!1,i=Pt(e),s=Pt(t),l=0;l<a.length;l++)(r=a[l]).key===i&&(o?jy(a,l--,1):(o=!0,r.value=s));o||ln(a,{key:i,value:s}),n.updateURL()},sort:function(){var e=rr(this);t_(e.entries,function(t,r){return t.key>r.key?1:-1}),e.updateURL()},forEach:function(e){for(var t,r=rr(this).entries,n=Y2(e,arguments.length>1?arguments[1]:void 0),a=0;a<r.length;)n((t=r[a++]).value,t.key,this)},keys:function(){return new mp(this,"keys")},values:function(){return new mp(this,"values")},entries:function(){return new mp(this,"entries")}},{enumerable:!0}),wy(Za,r_,Za.entries,{name:"entries"}),wy(Za,"toString",function(){return rr(this).serialize()},{enumerable:!0}),G2(gp,Ii),lp({global:!0,forced:!xy},{URLSearchParams:gp}),!xy&&dp(Ya)){var g_=tr(Ty.has),y_=tr(Ty.set),Dy=function(e){if(ky(e)){var t,r=e.body;if(Z2(r)===Ii)return t=e.headers?new Ya(e.headers):new Ya,g_(t,"content-type")||y_(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),X2(e,{body:Sy(0,Pt(r)),headers:Sy(0,t)})}return e};if(dp(Ey)&&lp({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Ey(e,arguments.length>1?Dy(arguments[1]):{})}}),dp(Pi)){var yp=function(e){return $y(this,hp),new Pi(e,arguments.length>1?Dy(arguments[1]):{})};hp.constructor=yp,yp.prototype=hp,lp({global:!0,forced:!0},{Request:yp})}}var Ny=ct.URLSearchParams;function zy(e,t){function r(){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];this.message=a[0],t&&t.apply(this,a)}return r.prototype=new Error,r.prototype.name=e,r.prototype.constructor=r,r}var qy={exports:{}},v_=qy.exports=function(e){return new qt(e)};function qt(e){this.value=e}function By(e,t,r){var n=[],a=[],o=!0;return function i(s){var l=r?Uy(s):s,c={},d=!0,p={node:l,node_:s,path:[].concat(n),parent:a[a.length-1],parents:a,key:n.slice(-1)[0],isRoot:n.length===0,level:n.length,circular:null,update:function(g,x){p.isRoot||(p.parent.node[p.key]=g),p.node=g,x&&(d=!1)},delete:function(g){delete p.parent.node[p.key],g&&(d=!1)},remove:function(g){My(p.parent.node)?p.parent.node.splice(p.key,1):delete p.parent.node[p.key],g&&(d=!1)},keys:null,before:function(g){c.before=g},after:function(g){c.after=g},pre:function(g){c.pre=g},post:function(g){c.post=g},stop:function(){o=!1},block:function(){d=!1}};if(!o)return p;function h(){if(typeof p.node=="object"&&p.node!==null){p.keys&&p.node_===p.node||(p.keys=Ri(p.node)),p.isLeaf=p.keys.length==0;for(var g=0;g<a.length;g++)if(a[g].node_===s){p.circular=a[g];break}}else p.isLeaf=!0,p.keys=null;p.notLeaf=!p.isLeaf,p.notRoot=!p.isRoot}h();var f=t.call(p,p.node);return f!==void 0&&p.update&&p.update(f),c.before&&c.before.call(p,p.node),d&&(typeof p.node!="object"||p.node===null||p.circular||(a.push(p),h(),Li(p.keys,function(g,x){n.push(g),c.pre&&c.pre.call(p,p.node[g],g);var v=i(p.node[g]);r&&Fi.call(p.node,g)&&(p.node[g]=v.node),v.isLast=x==p.keys.length-1,v.isFirst=x==0,c.post&&c.post.call(p,v),n.pop()}),a.pop()),c.after&&c.after.call(p,p.node)),p}(e).node}function Uy(e){if(typeof e=="object"&&e!==null){var t;if(My(e))t=[];else if(Wn(e)==="[object Date]")t=new Date(e.getTime?e.getTime():e);else if(function(a){return Wn(a)==="[object RegExp]"}(e))t=new RegExp(e);else if(function(a){return Wn(a)==="[object Error]"}(e))t={message:e.message};else if(function(a){return Wn(a)==="[object Boolean]"}(e))t=new Boolean(e);else if(function(a){return Wn(a)==="[object Number]"}(e))t=new Number(e);else if(function(a){return Wn(a)==="[object String]"}(e))t=new String(e);else if(Object.create&&Object.getPrototypeOf)t=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)t={};else{var r=e.constructor&&e.constructor.prototype||e.__proto__||{},n=function(){};n.prototype=r,t=new n}return Li(Ri(e),function(a){t[a]=e[a]}),t}return e}qt.prototype.get=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!Fi.call(t,n)){t=void 0;break}t=t[n]}return t},qt.prototype.has=function(e){for(var t=this.value,r=0;r<e.length;r++){var n=e[r];if(!t||!Fi.call(t,n))return!1;t=t[n]}return!0},qt.prototype.set=function(e,t){for(var r=this.value,n=0;n<e.length-1;n++){var a=e[n];Fi.call(r,a)||(r[a]={}),r=r[a]}return r[e[n]]=t,t},qt.prototype.map=function(e){return By(this.value,e,!0)},qt.prototype.forEach=function(e){return this.value=By(this.value,e,!1),this.value},qt.prototype.reduce=function(e,t){var r=arguments.length===1,n=r?this.value:t;return this.forEach(function(a){this.isRoot&&r||(n=e.call(this,n,a))}),n},qt.prototype.paths=function(){var e=[];return this.forEach(function(t){e.push(this.path)}),e},qt.prototype.nodes=function(){var e=[];return this.forEach(function(t){e.push(this.node)}),e},qt.prototype.clone=function(){var e=[],t=[];return function r(n){for(var a=0;a<e.length;a++)if(e[a]===n)return t[a];if(typeof n=="object"&&n!==null){var o=Uy(n);return e.push(n),t.push(o),Li(Ri(n),function(i){o[i]=r(n[i])}),e.pop(),t.pop(),o}return n}(this.value)};var Ri=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};function Wn(e){return Object.prototype.toString.call(e)}var My=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},Li=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)};Li(Ri(qt.prototype),function(e){v_[e]=function(t){var r=[].slice.call(arguments,1),n=new qt(t);return n[e].apply(n,r)}});var Fi=Object.hasOwnProperty||function(e,t){return t in e},b_=qy.exports,x_=["properties"],w_=["properties"],$_=["definitions","parameters","responses","securityDefinitions","components/schemas","components/responses","components/parameters","components/securitySchemes"],k_=["schema/example","items/example"];function Hy(e){var t=e[e.length-1],r=e[e.length-2],n=e.join("/");return x_.indexOf(t)>-1&&w_.indexOf(r)===-1||$_.indexOf(n)>-1||k_.some(function(a){return n.indexOf(a)>-1})}function vp(e,t){var r,n=Ht(e.split("#"),2),a=n[0],o=n[1],i=_t.resolve(a||"",t||"");return o?oe(r="".concat(i,"#")).call(r,o):i}var Wy="application/json, application/yaml",S_=/^([a-z]+:\/\/|\/\/)/i,Vn=zy("JSONRefError",function(e,t,r){this.originalError=r,Dt(this,t||{})}),hr={},Vy=new z2,A_=[function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="examples"},function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="content"&&e[7]==="example"},function(e){return e[0]==="paths"&&e[3]==="responses"&&e[5]==="content"&&e[7]==="examples"&&e[9]==="value"},function(e){return e[0]==="paths"&&e[3]==="requestBody"&&e[4]==="content"&&e[6]==="example"},function(e){return e[0]==="paths"&&e[3]==="requestBody"&&e[4]==="content"&&e[6]==="examples"&&e[8]==="value"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="example"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="example"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="examples"&&e[6]==="value"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="examples"&&e[7]==="value"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="content"&&e[6]==="example"},function(e){return e[0]==="paths"&&e[2]==="parameters"&&e[4]==="content"&&e[6]==="examples"&&e[8]==="value"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[4]==="content"&&e[7]==="example"},function(e){return e[0]==="paths"&&e[3]==="parameters"&&e[5]==="content"&&e[7]==="examples"&&e[9]==="value"}],Gy=Dt({key:"$ref",plugin:function(e,t,r,n){var a=n.getInstance(),o=Wt(r).call(r,0,-1);if(!Hy(o)&&!function(v){return A_.some(function(u){return u(v)})}(o)){var i=n.getContext(r).baseDoc;if(typeof e!="string")return new Vn("$ref: must be a string (JSON-Ref)",{$ref:e,baseDoc:i,fullPath:r});var s,l,c,d=Jy(e),p=d[0],h=d[1]||"";try{s=i||p?Ky(p,i):null}catch(v){return bp(v,{pointer:h,$ref:e,basePath:s,fullPath:r})}if(function(v,u,O,A){var T,j,$=Vy.get(A);$||($={},Vy.set(A,$));var P=function(y){return y.length===0?"":"/".concat(Fe(y).call(y,Xy).join("/"))}(O),b=oe(T="".concat(u||"<specmap-base>","#")).call(T,v),k=P.replace(/allOf\/\d+\/?/g,""),E=A.contextTree.get([]).baseDoc;if(u===E&&$p(k,v))return!0;var w="";return O.some(function(y){var S;return w=oe(S="".concat(w,"/")).call(S,Xy(y)),$[w]&&$[w].some(function(L){return $p(L,b)||$p(b,L)})})?!0:void($[k]=oe(j=$[k]||[]).call(j,b))}(h,s,o,n)&&!a.useCircularStructures){var f=vp(e,s);return e===f?null:Ne.replace(r,f)}if(s==null?(c=wp(h),(l=n.get(c))===void 0&&(l=new Vn("Could not resolve reference: ".concat(e),{pointer:h,$ref:e,baseDoc:i,fullPath:r}))):l=(l=Yy(s,h)).__value!=null?l.__value:l.catch(function(v){throw bp(v,{pointer:h,$ref:e,baseDoc:i,fullPath:r})}),l instanceof Error)return[Ne.remove(r),l];var g=vp(e,s),x=Ne.replace(o,l,{$$ref:g});if(s&&s!==i)return[x,Ne.context(o,{baseDoc:s})];try{if(!function(v,u){var O=[v];return u.path.reduce(function(T,j){return O.push(T[j]),T[j]},v),A(u.value);function A(T){return Ne.isObject(T)&&(O.indexOf(T)>=0||Pe(T).some(function(j){return A(T[j])}))}}(n.state,x)||a.useCircularStructures)return x}catch{return null}}}},{docCache:hr,absoluteify:Ky,clearCache:function(e){e!==void 0?delete hr[e]:Pe(hr).forEach(function(t){delete hr[t]})},JSONRefError:Vn,wrapError:bp,getDoc:Zy,split:Jy,extractFromDoc:Yy,fetchJSON:function(e){return fetch(e,{headers:{Accept:Wy},loadSpec:!0}).then(function(t){return t.text()}).then(function(t){return Ig.load(t)})},extract:xp,jsonPointerToArray:wp,unescapeJsonPointerToken:Qy});function Ky(e,t){if(!S_.test(e)){var r;if(!t)throw new Vn(oe(r="Tried to resolve a relative URL, without having a basePath. path: '".concat(e,"' basePath: '")).call(r,t,"'"));return _t.resolve(t,e)}return e}function bp(e,t){var r,n;return e&&e.response&&e.response.body?r=oe(n="".concat(e.response.body.code," ")).call(n,e.response.body.message):r=e.message,new Vn("Could not resolve reference: ".concat(r),t,e)}function Jy(e){return(e+"").split("#")}function Yy(e,t){var r=hr[e];if(r&&!Ne.isPromise(r))try{var n=xp(t,r);return Dt(nn.resolve(n),{__value:n})}catch(a){return nn.reject(a)}return Zy(e).then(function(a){return xp(t,a)})}function Zy(e){var t=hr[e];return t?Ne.isPromise(t)?t:nn.resolve(t):(hr[e]=Gy.fetchJSON(e).then(function(r){return hr[e]=r,r}),hr[e])}function xp(e,t){var r=wp(e);if(r.length<1)return t;var n=Ne.getIn(t,r);if(n===void 0)throw new Vn("Could not resolve pointer: ".concat(e," does not exist in document"),{pointer:e});return n}function wp(e){var t;if(typeof e!="string")throw new TypeError("Expected a string, got a ".concat(We(e)));return e[0]==="/"&&(e=e.substr(1)),e===""?[]:Fe(t=e.split("/")).call(t,Qy)}function Qy(e){return typeof e!="string"?e:new Ny("=".concat(e.replace(/~1/g,"/").replace(/~0/g,"~"))).get("")}function Xy(e){var t,r=new Ny([["",e.replace(/~/g,"~0").replace(/\//g,"~1")]]);return Wt(t=r.toString()).call(t,1)}function $p(e,t){if(function(a){return!a||a==="/"||a==="#"}(t))return!0;var r=e.charAt(t.length),n=Wt(t).call(t,-1);return e.indexOf(t)===0&&(!r||r==="/"||r==="#")&&n!=="#"}var O_={key:"allOf",plugin:function(e,t,r,n,a){if(!a.meta||!a.meta.$$ref){var o=Wt(r).call(r,0,-1);if(!Hy(o)){if(!Array.isArray(e)){var i=new TypeError("allOf must be an array");return i.fullPath=r,i}var s=!1,l=a.value;if(o.forEach(function(h){l&&(l=l[h])}),l=Ke({},l),Pe(l).length!==0){delete l.allOf;var c,d,p=[];return p.push(n.replace(o,{})),e.forEach(function(h,f){if(!n.isObject(h)){if(s)return null;s=!0;var g=new TypeError("Elements in allOf must be objects");return g.fullPath=r,p.push(g)}p.push(n.mergeDeep(o,h));var x=function(v,u){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},A=O.specmap,T=O.getBaseUrlForNodePath,j=T===void 0?function(k){var E;return A.getContext(oe(E=[]).call(E,rn(u),rn(k))).baseDoc}:T,$=O.targetKeys,P=$===void 0?["$ref","$$ref"]:$,b=[];return b_(v).forEach(function(){if(Ra(P).call(P,this.key)&&typeof this.node=="string"){var k=this.path,E=oe(u).call(u,this.path),w=vp(this.node,j(k));b.push(A.replace(E,w))}}),b}(h,Wt(r).call(r,0,-1),{getBaseUrlForNodePath:function(v){var u;return n.getContext(oe(u=[]).call(u,rn(r),[f],rn(v))).baseDoc},specmap:n});p.push.apply(p,rn(x))}),l.example&&p.push(n.remove(oe(c=[]).call(c,o,"example"))),p.push(n.mergeDeep(o,l)),!l.$$ref&&p.push(n.remove(oe(d=[]).call(d,o,"$$ref"))),p}}}}},E_={key:"parameters",plugin:function(e,t,r,n){if(Array.isArray(e)&&e.length){var a=Dt([],e),o=Wt(r).call(r,0,-1),i=Ke({},Ne.getIn(n.spec,o));return e.forEach(function(s,l){try{a[l].default=n.parameterMacro(i,s)}catch(d){var c=new Error(d);return c.fullPath=r,c}}),Ne.replace(r,a)}return Ne.replace(r,e)}},T_={key:"properties",plugin:function(e,t,r,n){var a=Ke({},e);for(var o in e)try{a[o].default=n.modelPropertyMacro(a[o])}catch(s){var i=new Error(s);return i.fullPath=r,i}return Ne.replace(r,a)}},C_=function(){function e(t){Mg(this,e),this.root=kp(t||{})}return Wg(e,[{key:"set",value:function(t,r){var n=this.getParent(t,!0);if(n){var a=t[t.length-1],o=n.children;o[a]?Di(o[a],r,n):o[a]=kp(r,n)}else Di(this.root,r,null)}},{key:"get",value:function(t){if((t=t||[]).length<1)return this.root.value;for(var r,n,a=this.root,o=0;o<t.length&&(n=t[o],(r=a.children)[n]);o+=1)a=r[n];return a&&a.protoValue}},{key:"getParent",value:function(t,r){return!t||t.length<1?null:t.length<2?this.root:Wt(t).call(t,0,-1).reduce(function(n,a){if(!n)return n;var o=n.children;return!o[a]&&r&&(o[a]=kp(null,n)),o[a]},this.root)}}]),e}();function kp(e,t){return Di({children:{}},e,t)}function Di(e,t,r){return e.value=t||{},e.protoValue=r?Ke(Ke({},r.protoValue),e.value):e.value,Pe(e.children).forEach(function(n){var a=e.children[n];e.children[n]=Di(a,a.value,e)}),e}var ev=function(){},__=function(){function e(t){var r,n,a=this;Mg(this,e),Dt(this,{spec:"",debugLevel:"info",plugins:[],pluginHistory:{},errors:[],mutations:[],promisedPatches:[],state:{},patches:[],context:{},contextTree:new C_,showDebug:!1,allPatches:[],pluginProp:"specMap",libMethods:Dt(Object.create(this),Ne,{getInstance:function(){return a}}),allowMetaPatches:!1},t),this.get=this._get.bind(this),this.getContext=this._getContext.bind(this),this.hasRun=this._hasRun.bind(this),this.wrappedPlugins=zt(r=Fe(n=this.plugins).call(n,this.wrapPlugin.bind(this))).call(r,Ne.isFunction),this.patches.push(Ne.add([],this.spec)),this.patches.push(Ne.context([],this.context)),this.updatePatches(this.patches)}return Wg(e,[{key:"debug",value:function(t){if(this.debugLevel===t){for(var r,n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];(r=console).log.apply(r,a)}}},{key:"verbose",value:function(t){if(this.debugLevel==="verbose"){for(var r,n,a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];(r=console).log.apply(r,oe(n=["[".concat(t,"]   ")]).call(n,o))}}},{key:"wrapPlugin",value:function(t,r){var n,a,o,i=this.pathDiscriminator,s=null;return t[this.pluginProp]?(s=t,n=t[this.pluginProp]):Ne.isFunction(t)?n=t:Ne.isObject(t)&&(a=t,o=function(l,c){return!Array.isArray(l)||l.every(function(d,p){return d===c[p]})},n=Zt.mark(function l(c,d){var p,h,f,g,x,v;return Zt.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:v=function(O,A,T){var j,$,P,b,k,E,w,y,S,L,z,V,_;return Zt.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(Ne.isObject(O)){C.next=6;break}if(a.key!==A[A.length-1]){C.next=4;break}return C.next=4,a.plugin(O,a.key,A,d);case 4:C.next=30;break;case 6:j=A.length-1,$=A[j],P=A.indexOf("properties"),b=$==="properties"&&j===P,k=d.allowMetaPatches&&h[O.$$ref],E=0,w=Pe(O);case 12:if(!(E<w.length)){C.next=30;break}if(y=w[E],S=O[y],L=oe(A).call(A,y),z=Ne.isObject(S),V=O.$$ref,k){C.next=22;break}if(!z){C.next=22;break}return d.allowMetaPatches&&V&&(h[V]=!0),C.delegateYield(v(S,L,T),"t0",22);case 22:if(b||y!==a.key){C.next=27;break}if(_=o(i,A),i&&!_){C.next=27;break}return C.next=27,a.plugin(S,y,L,d,T);case 27:E++,C.next=12;break;case 30:case"end":return C.stop()}},p)},p=Zt.mark(v),h={},f=Jr(zt(c).call(c,Ne.isAdditiveMutation)),u.prev=4,f.s();case 6:if((g=f.n()).done){u.next=11;break}return x=g.value,u.delegateYield(v(x.value,x.path,x),"t0",9);case 9:u.next=6;break;case 11:u.next=16;break;case 13:u.prev=13,u.t1=u.catch(4),f.e(u.t1);case 16:return u.prev=16,f.f(),u.finish(16);case 19:case"end":return u.stop()}},l,null,[[4,13,16,19]])})),Dt(n.bind(s),{pluginName:t.name||r,isGenerator:Ne.isGenerator(n)})}},{key:"nextPlugin",value:function(){var t,r=this;return mC(t=this.wrappedPlugins).call(t,function(n){return r.getMutationsForPlugin(n).length>0})}},{key:"nextPromisedPatch",value:function(){var t;if(this.promisedPatches.length>0)return nn.race(Fe(t=this.promisedPatches).call(t,function(r){return r.value}))}},{key:"getPluginHistory",value:function(t){var r=this.constructor.getPluginName(t);return this.pluginHistory[r]||[]}},{key:"getPluginRunCount",value:function(t){return this.getPluginHistory(t).length}},{key:"getPluginHistoryTip",value:function(t){var r=this.getPluginHistory(t);return r&&r[r.length-1]||{}}},{key:"getPluginMutationIndex",value:function(t){var r=this.getPluginHistoryTip(t).mutationIndex;return typeof r!="number"?-1:r}},{key:"updatePluginHistory",value:function(t,r){var n=this.constructor.getPluginName(t);this.pluginHistory[n]=this.pluginHistory[n]||[],this.pluginHistory[n].push(r)}},{key:"updatePatches",value:function(t){var r=this;Ne.normalizeArray(t).forEach(function(n){if(n instanceof Error)r.errors.push(n);else try{if(!Ne.isObject(n))return void r.debug("updatePatches","Got a non-object patch",n);if(r.showDebug&&r.allPatches.push(n),Ne.isPromise(n.value))return r.promisedPatches.push(n),void r.promisedPatchThen(n);if(Ne.isContextPatch(n))return void r.setContext(n.path,n.value);if(Ne.isMutation(n))return void r.updateMutations(n)}catch(a){console.error(a),r.errors.push(a)}})}},{key:"updateMutations",value:function(t){We(t.value)==="object"&&!Array.isArray(t.value)&&this.allowMetaPatches&&(t.value=Ke({},t.value));var r=Ne.applyPatch(this.state,t,{allowMetaPatches:this.allowMetaPatches});r&&(this.mutations.push(t),this.state=r)}},{key:"removePromisedPatch",value:function(t){var r,n=this.promisedPatches.indexOf(t);n<0?this.debug("Tried to remove a promisedPatch that isn't there!"):PC(r=this.promisedPatches).call(r,n,1)}},{key:"promisedPatchThen",value:function(t){var r=this;return t.value=t.value.then(function(n){var a=Ke(Ke({},t),{},{value:n});r.removePromisedPatch(t),r.updatePatches(a)}).catch(function(n){r.removePromisedPatch(t),r.updatePatches(n)}),t.value}},{key:"getMutations",value:function(t,r){var n;return t=t||0,typeof r!="number"&&(r=this.mutations.length),Wt(n=this.mutations).call(n,t,r)}},{key:"getCurrentMutations",value:function(){return this.getMutationsForPlugin(this.getCurrentPlugin())}},{key:"getMutationsForPlugin",value:function(t){var r=this.getPluginMutationIndex(t);return this.getMutations(r+1)}},{key:"getCurrentPlugin",value:function(){return this.currentPlugin}},{key:"getLib",value:function(){return this.libMethods}},{key:"_get",value:function(t){return Ne.getIn(this.state,t)}},{key:"_getContext",value:function(t){return this.contextTree.get(t)}},{key:"setContext",value:function(t,r){return this.contextTree.set(t,r)}},{key:"_hasRun",value:function(t){return this.getPluginRunCount(this.getCurrentPlugin())>(t||0)}},{key:"dispatch",value:function(){var t,r=this,n=this,a=this.nextPlugin();if(!a){var o=this.nextPromisedPatch();if(o)return o.then(function(){return r.dispatch()}).catch(function(){return r.dispatch()});var i={spec:this.state,errors:this.errors};return this.showDebug&&(i.patches=this.allPatches),nn.resolve(i)}if(n.pluginCount=n.pluginCount||{},n.pluginCount[a]=(n.pluginCount[a]||0)+1,n.pluginCount[a]>100)return nn.resolve({spec:n.state,errors:oe(t=n.errors).call(t,new Error("We've reached a hard limit of ".concat(100," plugin runs")))});if(a!==this.currentPlugin&&this.promisedPatches.length){var s,l=Fe(s=this.promisedPatches).call(s,function(d){return d.value});return nn.all(Fe(l).call(l,function(d){return d.then(ev,ev)})).then(function(){return r.dispatch()})}return function(){n.currentPlugin=a;var d=n.getCurrentMutations(),p=n.mutations.length-1;try{if(a.isGenerator){var h,f=Jr(a(d,n.getLib()));try{for(f.s();!(h=f.n()).done;)c(h.value)}catch(g){f.e(g)}finally{f.f()}}else c(a(d,n.getLib()))}catch(g){console.error(g),c([Dt(Object.create(g),{plugin:a})])}finally{n.updatePluginHistory(a,{mutationIndex:p})}return n.dispatch()}();function c(d){d&&(d=Ne.fullyNormalizeArray(d),n.updatePatches(d,a))}}}],[{key:"getPluginName",value:function(t){return t.pluginName}},{key:"getPatchesOfType",value:function(t,r){return zt(t).call(t,r)}}]),e}(),cn={refs:Gy,allOf:O_,parameters:E_,properties:T_},tv=function(e){return String.prototype.toLowerCase.call(e)},rv=function(e){return e.replace(/[^\w]/gi,"_")};function nv(e){var t=e.openapi;return!!t&&jh(t).call(t,"3")}function Ni(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=n.v2OperationIdCompatibilityMode;if(!e||We(e)!=="object")return null;var o=(e.operationId||"").replace(/\s/g,"");return o.length?rv(e.operationId):j_(t,r,{v2OperationIdCompatibilityMode:a})}function j_(e,t){var r,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.v2OperationIdCompatibilityMode;if(a){var o,i,s=oe(o="".concat(t.toLowerCase(),"_")).call(o,e).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g,"_");return(s=s||oe(i="".concat(e.substring(1),"_")).call(i,t)).replace(/((_){2,})/g,"_").replace(/^(_)*/g,"").replace(/([_])*$/g,"")}return oe(r="".concat(tv(t))).call(r,rv(e))}function av(e,t){var r;return oe(r="".concat(tv(t),"-")).call(r,e)}function I_(e,t){return e&&e.paths?function(r,n){return ov(r,n,!0)||null}(e,function(r){var n=r.pathName,a=r.method,o=r.operation;if(!o||We(o)!=="object")return!1;var i=o.operationId;return[Ni(o,n,a),av(n,a),i].some(function(s){return s&&s===t})}):null}function ov(e,t,r){if(!e||We(e)!=="object"||!e.paths||We(e.paths)!=="object")return null;var n=e.paths;for(var a in n)for(var o in n[a])if(o.toUpperCase()!=="PARAMETERS"){var i=n[a][o];if(i&&We(i)==="object"){var s={spec:e,pathName:a,method:o.toUpperCase(),operation:i},l=t(s);if(r&&l)return s}}}function iv(e){var t=e.spec,r=t.paths,n={};if(!r||t.$$normalized)return e;for(var a in r){var o,i=r[a];if(i!=null&&Ra(o=["object","function"]).call(o,We(i))){var s=i.parameters,l=function(d){var p,h=i[d];if(h==null||!Ra(p=["object","function"]).call(p,We(h)))return"continue";var f=Ni(h,a,d);if(f){n[f]?n[f].push(h):n[f]=[h];var g=n[f];if(g.length>1)g.forEach(function(E,w){var y;E.__originalOperationId=E.__originalOperationId||E.operationId,E.operationId=oe(y="".concat(f)).call(y,w+1)});else if(h.operationId!==void 0){var x=g[0];x.__originalOperationId=x.__originalOperationId||h.operationId,x.operationId=f}}if(d!=="parameters"){var v=[],u={};for(var O in t)O!=="produces"&&O!=="consumes"&&O!=="security"||(u[O]=t[O],v.push(u));if(s&&(u.parameters=s,v.push(u)),v.length){var A,T=Jr(v);try{for(T.s();!(A=T.n()).done;){var j=A.value;for(var $ in j)if(h[$]){if($==="parameters"){var P,b=Jr(j[$]);try{var k=function(){var E=P.value;h[$].some(function(w){return w.name&&w.name===E.name||w.$ref&&w.$ref===E.$ref||w.$$ref&&w.$$ref===E.$$ref||w===E})||h[$].push(E)};for(b.s();!(P=b.n()).done;)k()}catch(E){b.e(E)}finally{b.f()}}}else h[$]=j[$]}}catch(E){T.e(E)}finally{T.f()}}}};for(var c in i)l(c)}}return t.$$normalized=!0,e}function sv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.requestInterceptor,n=t.responseInterceptor,a=e.withCredentials?"include":"same-origin";return function(o){return e({url:o,loadSpec:!0,requestInterceptor:r,responseInterceptor:n,headers:{Accept:Wy},credentials:a}).then(function(i){return i.body})}}function lv(e){var t=e.fetch,r=e.spec,n=e.url,a=e.mode,o=e.allowMetaPatches,i=o===void 0||o,s=e.pathDiscriminator,l=e.modelPropertyMacro,c=e.parameterMacro,d=e.requestInterceptor,p=e.responseInterceptor,h=e.skipNormalization,f=e.useCircularStructures,g=e.http,x=e.baseDoc;return x=x||n,g=t||g||gi,r?v(r):sv(g,{requestInterceptor:d,responseInterceptor:p})(x).then(v);function v(u){x&&(cn.refs.docCache[x]=u),cn.refs.fetchJSON=sv(g,{requestInterceptor:d,responseInterceptor:p});var O,A=[cn.refs];return typeof c=="function"&&A.push(cn.parameters),typeof l=="function"&&A.push(cn.properties),a!=="strict"&&A.push(cn.allOf),(O={spec:u,context:{baseDoc:x},plugins:A,allowMetaPatches:i,pathDiscriminator:s,parameterMacro:c,modelPropertyMacro:l,useCircularStructures:f},new __(O).dispatch()).then(h?function(){var T=Yl(Zt.mark(function j($){return Zt.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",$);case 1:case"end":return P.stop()}},j)}));return function(j){return T.apply(this,arguments)}}():iv)}}var Sp=Array.isArray,P_=typeof N.g=="object"&&N.g&&N.g.Object===Object&&N.g,R_=typeof self=="object"&&self&&self.Object===Object&&self,Ap=P_||R_||Function("return this")(),Qa=Ap.Symbol,cv=Qa,pv=Object.prototype,L_=pv.hasOwnProperty,F_=pv.toString,Xa=cv?cv.toStringTag:void 0,D_=function(e){var t=L_.call(e,Xa),r=e[Xa];try{e[Xa]=void 0;var n=!0}catch{}var a=F_.call(e);return n&&(t?e[Xa]=r:delete e[Xa]),a},N_=Object.prototype.toString,z_=D_,q_=function(e){return N_.call(e)},dv=Qa?Qa.toStringTag:void 0,uv=function(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":dv&&dv in Object(e)?z_(e):q_(e)},B_=uv,U_=function(e){return e!=null&&typeof e=="object"},Op=function(e){return typeof e=="symbol"||U_(e)&&B_(e)=="[object Symbol]"},M_=Sp,H_=Op,W_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V_=/^\w*$/,G_=function(e,t){if(M_(e))return!1;var r=typeof e;return!(r!="number"&&r!="symbol"&&r!="boolean"&&e!=null&&!H_(e))||V_.test(e)||!W_.test(e)||t!=null&&e in Object(t)},hv=function(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")},K_=uv,J_=hv,Y_=function(e){if(!J_(e))return!1;var t=K_(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Ep=Ap["__core-js_shared__"],fv=function(){var e=/[^.]+$/.exec(Ep&&Ep.keys&&Ep.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Z_=function(e){return!!fv&&fv in e},Q_=Function.prototype.toString,X_=Y_,ej=Z_,tj=hv,rj=function(e){if(e!=null){try{return Q_.call(e)}catch{}try{return e+""}catch{}}return""},nj=/^\[object .+?Constructor\]$/,aj=Function.prototype,oj=Object.prototype,ij=aj.toString,sj=oj.hasOwnProperty,lj=RegExp("^"+ij.call(sj).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),cj=function(e){return!(!tj(e)||ej(e))&&(X_(e)?lj:nj).test(rj(e))},pj=function(e,t){return e?.[t]},mv=function(e,t){var r=pj(e,t);return cj(r)?r:void 0},zi=mv(Object,"create"),gv=zi,dj=function(){this.__data__=gv?gv(null):{},this.size=0},uj=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},hj=zi,fj=Object.prototype.hasOwnProperty,mj=function(e){var t=this.__data__;if(hj){var r=t[e];return r==="__lodash_hash_undefined__"?void 0:r}return fj.call(t,e)?t[e]:void 0},gj=zi,yj=Object.prototype.hasOwnProperty,vj=zi,bj=dj,xj=uj,wj=mj,$j=function(e){var t=this.__data__;return gj?t[e]!==void 0:yj.call(t,e)},kj=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=vj&&t===void 0?"__lodash_hash_undefined__":t,this};function Gn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Gn.prototype.clear=bj,Gn.prototype.delete=xj,Gn.prototype.get=wj,Gn.prototype.has=$j,Gn.prototype.set=kj;var Sj=Gn,Aj=function(){this.__data__=[],this.size=0},Oj=function(e,t){return e===t||e!=e&&t!=t},qi=function(e,t){for(var r=e.length;r--;)if(Oj(e[r][0],t))return r;return-1},Ej=qi,Tj=Array.prototype.splice,Cj=qi,_j=qi,jj=qi,Ij=Aj,Pj=function(e){var t=this.__data__,r=Ej(t,e);return!(r<0)&&(r==t.length-1?t.pop():Tj.call(t,r,1),--this.size,!0)},Rj=function(e){var t=this.__data__,r=Cj(t,e);return r<0?void 0:t[r][1]},Lj=function(e){return _j(this.__data__,e)>-1},Fj=function(e,t){var r=this.__data__,n=jj(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Kn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Kn.prototype.clear=Ij,Kn.prototype.delete=Pj,Kn.prototype.get=Rj,Kn.prototype.has=Lj,Kn.prototype.set=Fj;var Dj=Kn,Nj=mv(Ap,"Map"),yv=Sj,zj=Dj,qj=Nj,Bj=function(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null},Bi=function(e,t){var r=e.__data__;return Bj(t)?r[typeof t=="string"?"string":"hash"]:r.map},Uj=Bi,Mj=Bi,Hj=Bi,Wj=Bi,Vj=function(){this.size=0,this.__data__={hash:new yv,map:new(qj||zj),string:new yv}},Gj=function(e){var t=Uj(this,e).delete(e);return this.size-=t?1:0,t},Kj=function(e){return Mj(this,e).get(e)},Jj=function(e){return Hj(this,e).has(e)},Yj=function(e,t){var r=Wj(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Jn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Jn.prototype.clear=Vj,Jn.prototype.delete=Gj,Jn.prototype.get=Kj,Jn.prototype.has=Jj,Jn.prototype.set=Yj;var vv=Jn;function Tp(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Tp.Cache||vv),r}Tp.Cache=vv;var Zj=Tp,Qj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xj=/\\(\\)?/g,eI=function(e){var t=Zj(e,function(n){return r.size===500&&r.clear(),n}),r=t.cache;return t}(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Qj,function(r,n,a,o){t.push(a?o.replace(Xj,"$1"):n||r)}),t}),tI=function(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},rI=Sp,nI=Op,bv=Qa?Qa.prototype:void 0,xv=bv?bv.toString:void 0,aI=function e(t){if(typeof t=="string")return t;if(rI(t))return tI(t,e)+"";if(nI(t))return xv?xv.call(t):"";var r=t+"";return r=="0"&&1/t==-1/0?"-0":r},oI=Sp,iI=G_,sI=eI,lI=function(e){return e==null?"":aI(e)},cI=Op,pI=function(e,t){return oI(e)?e:iI(e,t)?[e]:sI(lI(e))},dI=function(e){if(typeof e=="string"||cI(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},uI=function(e,t){for(var r=0,n=(t=pI(t,e)).length;e!=null&&r<n;)e=e[dI(t[r++])];return r&&r==n?e:void 0},eo=function(e,t,r){var n=e==null?void 0:uI(e,t);return n===void 0?r:n};function wv(){return(wv=Yl(Zt.mark(function e(t,r){var n,a,o,i,s,l,c,d,p,h,f,g,x=arguments;return Zt.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return n=x.length>2&&x[2]!==void 0?x[2]:{},a=n.returnEntireTree,o=n.baseDoc,i=n.requestInterceptor,s=n.responseInterceptor,l=n.parameterMacro,c=n.modelPropertyMacro,d=n.useCircularStructures,p={pathDiscriminator:r,baseDoc:o,requestInterceptor:i,responseInterceptor:s,parameterMacro:l,modelPropertyMacro:c,useCircularStructures:d},h=iv({spec:t}),f=h.spec,v.next=6,lv(Ke(Ke({},p),{},{spec:f,allowMetaPatches:!0,skipNormalization:!0}));case 6:return g=v.sent,!a&&Array.isArray(r)&&r.length&&(g.spec=eo(g.spec,r)||null),v.abrupt("return",g);case 9:case"end":return v.stop()}},e)}))).apply(this,arguments)}var hI=function(){return null},$v={mapTagOperations:function(e){var t=e.spec,r=e.cb,n=r===void 0?hI:r,a=e.defaultTag,o=a===void 0?"default":a,i=e.v2OperationIdCompatibilityMode,s={},l={};return ov(t,function(c){var d,p=c.pathName,h=c.method,f=c.operation;(f.tags?(d=f.tags,Array.isArray(d)?d:[d]):[o]).forEach(function(g){if(typeof g=="string"){l[g]=l[g]||{};var x,v=l[g],u=Ni(f,p,h,{v2OperationIdCompatibilityMode:i}),O=n({spec:t,pathName:p,method:h,operation:f,operationId:u});if(s[u])s[u]+=1,v[oe(x="".concat(u)).call(x,s[u])]=O;else if(v[u]!==void 0){var A,T,j=s[u]||1;s[u]=j+1,v[oe(A="".concat(u)).call(A,s[u])]=O;var $=v[u];delete v[u],v[oe(T="".concat(u)).call(T,j)]=$}else v[u]=O}})}),l},makeExecute:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){var r=t.pathName,n=t.method,a=t.operationId;return function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.requestInterceptor,l=e.responseInterceptor,c=e.userFetch;return e.execute(Ke({spec:e.spec,requestInterceptor:s,responseInterceptor:l,userFetch:c,pathName:r,method:n,parameters:o,operationId:a},i))}}}},fI=Ie,mI=Ss.indexOf,gI=dh,Cp=Be([].indexOf),kv=!!Cp&&1/Cp([1],1,-0)<0,yI=gI("indexOf");fI({target:"Array",proto:!0,forced:kv||!yI},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return kv?Cp(this,e,t)||0:mI(this,e,t)}});var vI=Ft("Array").indexOf,bI=xt,xI=vI,_p=Array.prototype,Sv=function(e){var t=e.indexOf;return e===_p||bI(_p,e)&&t===_p.indexOf?xI:t};function wI(e,t){if(e==null)return{};var r,n,a=function(i,s){if(i==null)return{};var l,c,d={},p=Kd(i);for(c=0;c<p.length;c++)l=p[c],Sv(s).call(s,l)>=0||(d[l]=i[l]);return d}(e,t);if(No){var o=No(e);for(n=0;n<o.length;n++)r=o[n],Sv(t).call(t,r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var $I={parse:function(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=(t||{}).decode||SI,a=0;a<e.length;){var o=e.indexOf("=",a);if(o===-1)break;var i=e.indexOf(";",a);if(i===-1)i=e.length;else if(i<o){a=e.lastIndexOf(";",o-1)+1;continue}var s=e.slice(a,o).trim();if(r[s]===void 0){var l=e.slice(o+1,i).trim();l.charCodeAt(0)===34&&(l=l.slice(1,-1)),r[s]=OI(l,n)}a=i+1}return r},serialize:function(e,t,r){var n=r||{},a=n.encode||AI;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!Ui.test(e))throw new TypeError("argument name is invalid");var o=a(t);if(o&&!Ui.test(o))throw new TypeError("argument val is invalid");var i=e+"="+o;if(n.maxAge!=null){var s=n.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(n.domain){if(!Ui.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!Ui.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){var l=n.expires;if(!function(c){return kI.call(c)==="[object Date]"||c instanceof Date}(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():n.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}},kI=Object.prototype.toString,Ui=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function SI(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function AI(e){return encodeURIComponent(e)}function OI(e,t){try{return t(e)}catch{return e}}function Av(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ov(e){var t,r;return Av(e)!==!1&&((t=e.constructor)===void 0||Av(r=t.prototype)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1)}var EI={body:function(e){var t=e.req,r=e.value;t.body=r},header:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{},n!==void 0&&(t.headers[r.name]=n)},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},r===!1&&n.type==="boolean"&&(r="false"),r===0&&["number","integer"].indexOf(n.type)>-1&&(r="0"),r)t.query[n.name]={collectionFormat:n.collectionFormat,value:r};else if(n.allowEmptyValue&&r!==void 0){var a=n.name;t.query[a]=t.query[a]||{},t.query[a].allowEmptyValue=!0}},path:function(e){var t=e.req,r=e.value,n=e.parameter;t.url=t.url.split("{".concat(n.name,"}")).join(encodeURIComponent(r))},formData:function(e){var t=e.req,r=e.value,n=e.parameter;(r||n.allowEmptyValue)&&(t.form=t.form||{},t.form[n.name]={value:r,allowEmptyValue:n.allowEmptyValue,collectionFormat:n.collectionFormat})}};function Mi(e,t){return Ra(t).call(t,"application/json")?typeof e=="string"?e:ni(e):e.toString()}var TI=["accept","authorization","content-type"],CI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",path:function(e){var t=e.req,r=e.value,n=e.parameter,a=n.name,o=n.style,i=n.explode,s=n.content;if(s){var l=Pe(s)[0];t.url=t.url.split("{".concat(a,"}")).join(Bn(Mi(r,l),{escape:!0}))}else{var c=qc({key:n.name,value:r,style:o||"simple",explode:i||!1,escape:!0});t.url=t.url.split("{".concat(a,"}")).join(c)}},query:function(e){var t=e.req,r=e.value,n=e.parameter;if(t.query=t.query||{},n.content){var a=Pe(n.content)[0];t.query[n.name]=Mi(r,a)}else if(r===!1&&(r="false"),r===0&&(r="0"),r){var o=n.style,i=n.explode,s=n.allowReserved;t.query[n.name]={value:r,serializationOption:{style:o,explode:i,allowReserved:s}}}else if(n.allowEmptyValue&&r!==void 0){var l=n.name;t.query[l]=t.query[l]||{},t.query[l].allowEmptyValue=!0}},header:function(e){var t=e.req,r=e.parameter,n=e.value;if(t.headers=t.headers||{},!(TI.indexOf(r.name.toLowerCase())>-1))if(r.content){var a=Pe(r.content)[0];t.headers[r.name]=Mi(n,a)}else n!==void 0&&(t.headers[r.name]=qc({key:r.name,value:n,style:r.style||"simple",explode:r.explode!==void 0&&r.explode,escape:!1}))},cookie:function(e){var t=e.req,r=e.parameter,n=e.value;t.headers=t.headers||{};var a=We(n);if(r.content){var o,i=Pe(r.content)[0];t.headers.Cookie=oe(o="".concat(r.name,"=")).call(o,Mi(n,i))}else if(a!=="undefined"){var s=a==="object"&&!Array.isArray(n)&&r.explode?"":"".concat(r.name,"=");t.headers.Cookie=s+qc({key:r.name,value:n,escape:!1,style:r.style||"form",explode:r.explode!==void 0&&r.explode})}}});Ie({global:!0},{globalThis:ce});var Ev=(ce!==void 0?ce:typeof self<"u"?self:window).btoa;function _I(e,t){var r=e.operation,n=e.requestBody,a=e.securities,o=e.spec,i=e.attachContentTypeForEmptyPayload,s=e.requestContentType;t=function(x){var v=x.request,u=x.securities,O=u===void 0?{}:u,A=x.operation,T=A===void 0?{}:A,j=x.spec,$=Ke({},v),P=O.authorized,b=P===void 0?{}:P,k=T.security||j.security||[],E=b&&!!Pe(b).length,w=eo(j,["components","securitySchemes"])||{};return $.headers=$.headers||{},$.query=$.query||{},!Pe(O).length||!E||!k||Array.isArray(T.security)&&!T.security.length?v:(k.forEach(function(y){Pe(y).forEach(function(S){var L=b[S],z=w[S];if(L){var V=L.value||L,_=z.type;if(L){if(_==="apiKey")z.in==="query"&&($.query[z.name]=V),z.in==="header"&&($.headers[z.name]=V),z.in==="cookie"&&($.cookies[z.name]=V);else if(_==="http"){if(/^basic$/i.test(z.scheme)){var C,U=V.username||"",re=V.password||"",Q=Ev(oe(C="".concat(U,":")).call(C,re));$.headers.Authorization="Basic ".concat(Q)}/^bearer$/i.test(z.scheme)&&($.headers.Authorization="Bearer ".concat(V))}else if(_==="oauth2"||_==="openIdConnect"){var xe,ye=L.token||{},De=ye[z["x-tokenName"]||"access_token"],Ce=ye.token_type;Ce&&Ce.toLowerCase()!=="bearer"||(Ce="Bearer"),$.headers.Authorization=oe(xe="".concat(Ce," ")).call(xe,De)}}}})}),$)}({request:t,securities:a,operation:r,spec:o});var l=r.requestBody||{},c=Pe(l.content||{}),d=s&&c.indexOf(s)>-1;if(n||i){if(s&&d)t.headers["Content-Type"]=s;else if(!s){var p=c[0];p&&(t.headers["Content-Type"]=p,s=p)}}else s&&d&&(t.headers["Content-Type"]=s);if(!e.responseContentType&&r.responses){var h,f=zt(h=um(r.responses)).call(h,function(x){var v=Ht(x,2),u=v[0],O=v[1],A=parseInt(u,10);return A>=200&&A<300&&Ov(O.content)}).reduce(function(x,v){var u=Ht(v,2)[1];return oe(x).call(x,Pe(u.content))},[]);f.length>0&&(t.headers.accept=f.join(", "))}if(n)if(s){if(c.indexOf(s)>-1)if(s==="application/x-www-form-urlencoded"||s==="multipart/form-data")if(We(n)==="object"){var g=(l.content[s]||{}).encoding||{};t.form={},Pe(n).forEach(function(x){t.form[x]={value:n[x],encoding:g[x]||{}}})}else t.form=n;else t.body=n}else t.body=n;return t}function jI(e,t){var r,n,a=e.spec,o=e.operation,i=e.securities,s=e.requestContentType,l=e.responseContentType,c=e.attachContentTypeForEmptyPayload;if((t=function(v){var u=v.request,O=v.securities,A=O===void 0?{}:O,T=v.operation,j=T===void 0?{}:T,$=v.spec,P=Ke({},u),b=A.authorized,k=b===void 0?{}:b,E=A.specSecurity,w=E===void 0?[]:E,y=j.security||w,S=k&&!!Pe(k).length,L=$.securityDefinitions;return P.headers=P.headers||{},P.query=P.query||{},!Pe(A).length||!S||!y||Array.isArray(j.security)&&!j.security.length?u:(y.forEach(function(z){Pe(z).forEach(function(V){var _=k[V];if(_){var C=_.token,U=_.value||_,re=L[V],Q=re.type,xe=re["x-tokenName"]||"access_token",ye=C&&C[xe],De=C&&C.token_type;if(_){if(Q==="apiKey"){var Ce=re.in==="query"?"query":"headers";P[Ce]=P[Ce]||{},P[Ce][re.name]=U}else if(Q==="basic")if(U.header)P.headers.authorization=U.header;else{var Oe,ft=U.username||"",Xe=U.password||"";U.base64=Ev(oe(Oe="".concat(ft,":")).call(Oe,Xe)),P.headers.authorization="Basic ".concat(U.base64)}else if(Q==="oauth2"&&ye){var nr;De=De&&De.toLowerCase()!=="bearer"?De:"Bearer",P.headers.authorization=oe(nr="".concat(De," ")).call(nr,ye)}}}})}),P)}({request:t,securities:i,operation:o,spec:a})).body||t.form||c)if(s)t.headers["Content-Type"]=s;else if(Array.isArray(o.consumes)){var d=Ht(o.consumes,1);t.headers["Content-Type"]=d[0]}else if(Array.isArray(a.consumes)){var p=Ht(a.consumes,1);t.headers["Content-Type"]=p[0]}else o.parameters&&zt(r=o.parameters).call(r,function(v){return v.type==="file"}).length?t.headers["Content-Type"]="multipart/form-data":o.parameters&&zt(n=o.parameters).call(n,function(v){return v.in==="formData"}).length&&(t.headers["Content-Type"]="application/x-www-form-urlencoded");else if(s){var h,f,g=o.parameters&&zt(h=o.parameters).call(h,function(v){return v.in==="body"}).length>0,x=o.parameters&&zt(f=o.parameters).call(f,function(v){return v.in==="formData"}).length>0;(g||x)&&(t.headers["Content-Type"]=s)}return!l&&Array.isArray(o.produces)&&o.produces.length>0&&(t.headers.accept=o.produces.join(", ")),t}var II=["http","fetch","spec","operationId","pathName","method","parameters","securities"],Tv=function(e){return Array.isArray(e)?e:[]},PI=zy("OperationNotFoundError",function(e,t,r){this.originalError=r,Dt(this,t||{})}),RI={buildRequest:Cv};function Cv(e){var t,r,n=e.spec,a=e.operationId,o=e.responseContentType,i=e.scheme,s=e.requestInterceptor,l=e.responseInterceptor,c=e.contextUrl,d=e.userFetch,p=e.server,h=e.serverVariables,f=e.http,g=e.signal,x=e.parameters,v=e.parameterBuilders,u=nv(n);v||(v=u?CI:EI);var O={url:"",credentials:f&&f.withCredentials?"include":"same-origin",headers:{},cookies:{}};g&&(O.signal=g),s&&(O.requestInterceptor=s),l&&(O.responseInterceptor=l),d&&(O.userFetch=d);var A=I_(n,a);if(!A)throw new PI("Operation ".concat(a," not found"));var T=A.operation,j=T===void 0?{}:T,$=A.method,P=A.pathName;if(O.url+=_v({spec:n,scheme:i,contextUrl:c,server:p,serverVariables:h,pathName:P,method:$}),!a)return delete O.cookies,O;O.url+=P,O.method="".concat($).toUpperCase(),x=x||{};var b=n.paths[P]||{};o&&(O.headers.accept=o);var k=function(y){var S={};y.forEach(function(z){S[z.in]||(S[z.in]={}),S[z.in][z.name]=z});var L=[];return Pe(S).forEach(function(z){Pe(S[z]).forEach(function(V){L.push(S[z][V])})}),L}(oe(t=oe(r=[]).call(r,Tv(j.parameters))).call(t,Tv(b.parameters)));k.forEach(function(y){var S,L,z=v[y.in];if(y.in==="body"&&y.schema&&y.schema.properties&&(S=x),(S=y&&y.name&&x[y.name])===void 0)S=y&&y.name&&x[oe(L="".concat(y.in,".")).call(L,y.name)];else if(function(_,C){return zt(C).call(C,function(U){return U.name===_})}(y.name,k).length>1){var V;console.warn(oe(V="Parameter '".concat(y.name,"' is ambiguous because the defined spec has more than one parameter with the name: '")).call(V,y.name,"' and the passed-in parameter values did not define an 'in' value."))}if(S!==null){if(y.default!==void 0&&S===void 0&&(S=y.default),S===void 0&&y.required&&!y.allowEmptyValue)throw new Error("Required parameter ".concat(y.name," is not provided"));if(u&&y.schema&&y.schema.type==="object"&&typeof S=="string")try{S=JSON.parse(S)}catch{throw new Error("Could not parse object parameter value string as JSON")}z&&z({req:O,parameter:y,value:S,operation:j,spec:n})}});var E=Ke(Ke({},e),{},{operation:j});if((O=u?_I(E,O):jI(E,O)).cookies&&Pe(O.cookies).length){var w=Pe(O.cookies).reduce(function(y,S){var L=O.cookies[S];return y+(y?"&":"")+$I.serialize(S,L)},"");O.headers.Cookie=w}return O.cookies&&delete O.cookies,Ug(O),O}var jp=function(e){return e?e.replace(/\W/g,""):null};function _v(e){return nv(e.spec)?function(t){var r=t.spec,n=t.pathName,a=t.method,o=t.server,i=t.contextUrl,s=t.serverVariables,l=s===void 0?{}:s,c=eo(r,["paths",n,(a||"").toLowerCase(),"servers"])||eo(r,["paths",n,"servers"])||eo(r,["servers"]),d="",p=null;if(o&&c&&c.length){var h=Fe(c).call(c,function(g){return g.url});h.indexOf(o)>-1&&(d=o,p=c[h.indexOf(o)])}if(!d&&c&&c.length){d=c[0].url;var f=Ht(c,1);p=f[0]}return d.indexOf("{")>-1&&function(g){for(var x,v=[],u=/{([^}]+)}/g;x=u.exec(g);)v.push(x[1]);return v}(d).forEach(function(g){if(p.variables&&p.variables[g]){var x=p.variables[g],v=l[g]||x.default,u=new RegExp("{".concat(g,"}"),"g");d=d.replace(u,v)}}),function(){var g,x,v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",O=v&&u?_t.parse(_t.resolve(u,v)):_t.parse(v),A=_t.parse(u),T=jp(O.protocol)||jp(A.protocol)||"",j=O.host||A.host,$=O.pathname||"";return g=T&&j?oe(x="".concat(T,"://")).call(x,j+$):$,g[g.length-1]==="/"?Wt(g).call(g,0,-1):g}(d,i)}(e):function(t){var r,n,a=t.spec,o=t.scheme,i=t.contextUrl,s=i===void 0?"":i,l=_t.parse(s),c=Array.isArray(a.schemes)?a.schemes[0]:null,d=o||c||jp(l.protocol)||"http",p=a.host||l.host||"",h=a.basePath||"";return r=d&&p?oe(n="".concat(d,"://")).call(n,p+h):h,r[r.length-1]==="/"?Wt(r).call(r,0,-1):r}(e)}function tt(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e=="string"?r.url=e:r=e,!(this instanceof tt))return new tt(r);Dt(this,r);var n=this.resolve().then(function(){return t.disableInterfaces||Dt(t,tt.makeApisTagOperation(t)),t});return n.client=this,n}tt.http=gi,tt.makeHttp=function(e,t,r){return r=r||function(n){return n},t=t||function(n){return n},function(n){return typeof n=="string"&&(n={url:n}),Bc.mergeInQueryOrForm(n),n=t(n),r(e(n))}}.bind(null,tt.http),tt.resolve=lv,tt.resolveSubtree=function(e,t){return wv.apply(this,arguments)},tt.execute=function(e){var t=e.http,r=e.fetch,n=e.spec,a=e.operationId,o=e.pathName,i=e.method,s=e.parameters,l=e.securities,c=wI(e,II),d=t||r||gi;o&&i&&!a&&(a=av(o,i));var p=RI.buildRequest(Ke({spec:n,operationId:a,parameters:s,securities:l,http:d},c));return p.body&&(Ov(p.body)||Array.isArray(p.body))&&(p.body=ni(p.body)),d(p)},tt.serializeRes=Fg,tt.serializeHeaders=Dg,tt.clearCache=function(){cn.refs.clearCache()},tt.makeApisTagOperation=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=$v.makeExecute(e);return{apis:$v.mapTagOperations({v2OperationIdCompatibilityMode:e.v2OperationIdCompatibilityMode,spec:e.spec,cb:t})}},tt.buildRequest=Cv,tt.helpers={opId:Ni},tt.getBaseUrl=_v,tt.prototype={http:gi,execute:function(e){return this.applyDefaults(),tt.execute(Ke({spec:this.spec,http:this.http,securities:{authorized:this.authorizations},contextUrl:typeof this.url=="string"?this.url:void 0,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null},e))},resolve:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt.resolve(Ke({spec:this.spec,url:this.url,http:this.http||this.fetch,allowMetaPatches:this.allowMetaPatches,useCircularStructures:this.useCircularStructures,requestInterceptor:this.requestInterceptor||null,responseInterceptor:this.responseInterceptor||null,skipNormalization:this.skipNormalization||!1},t)).then(function(r){return e.originalSpec=e.spec,e.spec=r.spec,e.errors=r.errors,e})}},tt.prototype.applyDefaults=function(){var e=this.spec,t=this.url;if(t&&jh(t).call(t,"http")){var r=_t.parse(t);e.host||(e.host=r.host),e.schemes||(e.schemes=[r.protocol.replace(":","")]),e.basePath||(e.basePath="/")}};function jv(e){const t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}var ze={parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],uniqueOnly:function(e,t,r){return r.indexOf(e)===t},createHash:function(e){let t,r=0;if(e.length===0)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},sanitise:jv,sanitiseAll:function(e){return jv(e.split("/").join("_"))},camelize:function(e){return e.toLowerCase().replace(/[-_ \/\.](.)/g,(t,r)=>r.toUpperCase())},clone:function(e){return JSON.parse(JSON.stringify(e))},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);let n;try{n=new t.constructor}catch{n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map(a=>({[a]:e(t[a],r)})))}};function Iv(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}var LI={getDefaultState:Iv,walkSchema:function e(t,r,n,a){if(n.depth===void 0&&(n=Iv()),t==null||(n.combine&&(t.allOf&&Array.isArray(t.allOf)&&t.allOf.length===1&&delete(t={...t.allOf[0],...t}).allOf,t.anyOf&&Array.isArray(t.anyOf)&&t.anyOf.length===1&&delete(t={...t.anyOf[0],...t}).anyOf,t.oneOf&&Array.isArray(t.oneOf)&&t.oneOf.length===1&&delete(t={...t.oneOf[0],...t}).oneOf),a(t,r,n),n.seen.has(t)))return t;if(typeof t=="object"&&t!==null&&n.seen.set(t,!0),n.top=!1,n.depth++,t.items!==void 0&&(n.property="items",e(t.items,t,n,a)),t.additionalItems&&typeof t.additionalItems=="object"&&(n.property="additionalItems",e(t.additionalItems,t,n,a)),t.additionalProperties&&typeof t.additionalProperties=="object"&&(n.property="additionalProperties",e(t.additionalProperties,t,n,a)),t.properties)for(const o in t.properties){const i=t.properties[o];n.property=`properties/${o}`,e(i,t,n,a)}if(t.patternProperties)for(const o in t.patternProperties){const i=t.patternProperties[o];n.property=`patternProperties/${o}`,e(i,t,n,a)}if(t.allOf)for(const o in t.allOf){const i=t.allOf[o];n.property=`allOf/${o}`,e(i,t,n,a)}if(t.anyOf)for(const o in t.anyOf){const i=t.anyOf[o];n.property=`anyOf/${o}`,e(i,t,n,a)}if(t.oneOf)for(const o in t.oneOf){const i=t.oneOf[o];n.property=`oneOf/${o}`,e(i,t,n,a)}return t.not&&(n.property="not",e(t.not,t,n,a)),n.depth--,t}};function Ip(e,t,r){if(t||(t={depth:0}),t.depth||(t={path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1,...t}),typeof e!="object")return;const n=t.path;for(const a in e){if(t.key=a,t.path=`${t.path}/${encodeURIComponent(a)}`,t.identityPath=t.seen.get(e[a]),t.identity=t.identityPath!==void 0,e.hasOwnProperty(a)&&r(e,a,t),typeof e[a]=="object"&&!t.identity){t.identityDetection&&!Array.isArray(e[a])&&e[a]!==null&&t.seen.set(e[a],t.path);const o={};o.parent=e,o.path=t.path,o.depth=t.depth?t.depth+1:1,o.pkey=a,o.payload=t.payload,o.seen=t.seen,o.identity=!1,o.identityDetection=t.identityDetection,Ip(e[a],o,r)}t.path=n}}let Pv;function Pp(e,t){for(const r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function Hi(e,t){LI.walkSchema(e,{},{},(r,n)=>{(function(a){if(a["x-required"]&&Array.isArray(a["x-required"])&&(a.required||(a.required=[]),a.required=a.required.concat(a["x-required"]),delete a["x-required"]),a["x-anyOf"]&&(a.anyOf=a["x-anyOf"],delete a["x-anyOf"]),a["x-oneOf"]&&(a.oneOf=a["x-oneOf"],delete a["x-oneOf"]),a["x-not"]&&(a.not=a["x-not"],delete a["x-not"]),typeof a["x-nullable"]=="boolean"&&(a.nullable=a["x-nullable"],delete a["x-nullable"]),typeof a["x-discriminator"]=="object"&&typeof a["x-discriminator"].propertyName=="string"){a.discriminator=a["x-discriminator"],delete a["x-discriminator"];for(const o in a.discriminator.mapping){const i=a.discriminator.mapping[o];i.startsWith("#/definitions/")&&(a.discriminator.mapping[o]=i.replace("#/definitions/","#/components/schemas/"))}}})(r),function(a,o,i){if(a.nullable&&i.patches++,a.discriminator&&typeof a.discriminator=="string"&&(a.discriminator={propertyName:a.discriminator}),a.items&&Array.isArray(a.items)&&(a.items.length===0?a.items={}:a.items.length===1?a.items=a.items[0]:a.items={anyOf:a.items}),a.type&&Array.isArray(a.type)){if(i.patches++,i.warnings.push("(Patchable) schema type must not be an array"),a.type.length===0)delete a.type;else{a.oneOf||(a.oneOf=[]);for(const s of a.type){const l={};if(s==="null")a.nullable=!0;else{l.type=s;for(const c of ze.arrayProperties)a.prop!==void 0&&(l[c]=a[c],delete a[c])}l.type&&a.oneOf.push(l)}delete a.type,a.oneOf.length===0?delete a.oneOf:a.oneOf.length<2&&(a.type=a.oneOf[0].type,Object.keys(a.oneOf[0]).length>1&&(i.patches++,i.warnings.push("Lost properties from oneOf")),delete a.oneOf)}a.type&&Array.isArray(a.type)&&a.type.length===1&&(a.type=a.type[0])}a.type&&a.type==="null"&&(delete a.type,a.nullable=!0),a.type!=="array"||a.items||(a.items={}),a.type==="file"&&(a.type="string",a.format="binary"),typeof a.required=="boolean"&&(a.required&&a.name&&(o.required===void 0&&(o.required=[]),Array.isArray(o.required)&&o.required.push(a.name)),delete a.required),a.xml&&typeof a.xml.namespace=="string"&&(a.xml.namespace||delete a.xml.namespace),a.allowEmptyValue&&(delete a.allowEmptyValue,i.patches++,i.warnings.push("(Patchable): deleted schema.allowEmptyValue"))}(r,n,t)})}function Rv(e){for(const t in e)for(const r in e[t]){const n=ze.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function FI(e,t){if(e.type==="basic"&&(e.type="http",e.scheme="basic"),e.type==="oauth2"){const r={};let n=e.flow;e.flow==="application"&&(n="clientCredentials"),e.flow==="accessCode"&&(n="authorizationCode"),typeof e.authorizationUrl=="string"&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),typeof e.tokenUrl=="string"&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,e.name&&(delete e.name,t.patches++,t.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"))}}function Lv(e){return e&&!e["x-s2o-delete"]}function Fv(e,t){if(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&e.items.type!=="array"){if(e.items.collectionFormat!==e.collectionFormat)return t.errCount++,void t.errors.push({message:"Nested collectionFormats are not supported",pointer:"/.../responses/header"});delete e.items.collectionFormat}e.type==="array"?(e.collectionFormat==="ssv"?(t.patches++,t.warnings.push("collectionFormat:ssv is no longer supported for headers")):e.collectionFormat==="pipes"?(t.patches++,t.warnings.push("collectionFormat:pipes is no longer supported for headers")):e.collectionFormat==="multi"?e.explode=!0:e.collectionFormat==="tsv"?(e["x-collectionFormat"]="tsv",t.patches++,t.warnings.push("collectionFormat:tsv is no longer supported")):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(delete e.collectionFormat,t.patches++,t.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")),delete e.type;for(const r of ze.parameterTypeProperties)e[r]!==void 0&&(e.schema[r]=e[r],delete e[r]);for(const r of ze.arrayProperties)e[r]!==void 0&&(e.schema[r]=e[r],delete e[r])}function Wi(e,t,r,n,a,o,i){const s={};let l,c=!0;t&&t.consumes&&typeof t.consumes=="string"&&(t.consumes=[t.consumes],i.patches++,i.warnings.push("(Patchable) operation.consumes must be an array")),Array.isArray(o.consumes)||delete o.consumes;const d=((t?t.consumes:null)||o.consumes||[]).filter(ze.uniqueOnly);if(e&&(e.name||e.in)){typeof e["x-deprecated"]=="boolean"&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),e["x-example"]!==void 0&&(e.example=e["x-example"],delete e["x-example"]),e.in==="body"||e.type||(e.type="string",i.patches++,i.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")),e.type==="file"&&(e["x-s2o-originalType"]=e.type,l=e.type),e.description===null&&delete e.description;let p=e.collectionFormat;if(e.type!=="array"||p||(p="csv"),p&&(e.type!=="array"&&(delete e.collectionFormat,i.patches++,i.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")),p!=="csv"||e.in!=="query"&&e.in!=="cookie"||(e.style="form",e.explode=!1),p!=="csv"||e.in!=="path"&&e.in!=="header"||(e.style="simple"),p==="ssv"&&(e.in==="query"?e.style="spaceDelimited":i.warnings.push(`${e.name} collectionFormat:ssv is no longer supported except for in:query parameters`)),p==="pipes"&&(e.in==="query"?e.style="pipeDelimited":i.warnings.push(`${e.name} collectionFormat:pipes is no longer supported except for in:query parameters`)),p==="multi"&&(e.explode=!0),p==="tsv"&&(i.warnings.push("collectionFormat:tsv is no longer supported"),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&e.type!=="body"&&e.in!=="formData")if(e.items&&e.schema)i.warnings.push(`${e.name} parameter has array,items and schema`);else{e.schema&&i.patches++,e.schema&&typeof e.schema=="object"||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,Ip(e.schema.items,null,(h,f)=>{f==="collectionFormat"&&typeof h[f]=="string"&&(p&&h[f]!==p&&i.warnings.push(`${e.name} Nested collectionFormats are not supported`),delete h[f])}));for(const h of ze.parameterTypeProperties)e[h]!==void 0&&(e.schema[h]=e[h]),delete e[h]}e.schema&&Hi(e.schema,i),e["x-ms-skip-url-encoding"]&&e.in==="query"&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&e.in==="formData"){c=!1,s.content={};let p="application/x-www-form-urlencoded";if(d.length&&d.indexOf("multipart/form-data")>=0&&(p="multipart/form-data"),s.content[p]={},e.schema)s.content[p].schema=e.schema;else{s.content[p].schema={},s.content[p].schema.type="object",s.content[p].schema.properties={},s.content[p].schema.properties[e.name]={};const h=s.content[p].schema,f=s.content[p].schema.properties[e.name];e.description&&(f.description=e.description),e.example&&(f.example=e.example),e.type&&(f.type=e.type);for(const g of ze.parameterTypeProperties)e[g]!==void 0&&(f[g]=e[g]);e.required===!0&&(h.required||(h.required=[]),h.required.push(e.name),s.required=!0),e.default!==void 0&&(f.default=e.default),f.properties&&(f.properties=e.properties),e.allOf&&(f.allOf=e.allOf),e.type==="array"&&e.items&&(f.items=e.items,f.items.collectionFormat&&delete f.items.collectionFormat),l!=="file"&&e["x-s2o-originalType"]!=="file"||(f.type="string",f.format="binary"),Pp(e,f)}}else e&&e.type==="file"&&(e.required&&(s.required=e.required),s.content={},s.content["application/octet-stream"]={},s.content["application/octet-stream"].schema={},s.content["application/octet-stream"].schema.type="string",s.content["application/octet-stream"].schema.format="binary",Pp(e,s));if(e&&e.in==="body"){s.content={},e.name&&(s["x-s2o-name"]=(t&&t.operationId?ze.sanitiseAll(t.operationId):"")+ze.camelize(`_${e.name}`)),e.description&&(s.description=e.description),e.required&&(s.required=e.required),d.length||d.push("application/json");for(const p of d)s.content[p]={},s.content[p].schema=ze.clone(e.schema||{}),Hi(s.content[p].schema,i);Pp(e,s)}if(Object.keys(s).length>0&&(e["x-s2o-delete"]=!0,t))if(t.requestBody&&c){t.requestBody["x-s2o-overloaded"]=!0;const p=t.operationId||a;i.warnings.push(`Operation ${p} has multiple requestBodies`)}else t.requestBody||(t=function(p,h){const f={};for(const g of Object.keys(p))f[g]=p[g],g==="parameters"&&(f.requestBody={},h.rbname&&(f[h.rbname]=""));return f.requestBody={},f}(t,i),r[n]=t),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&s.content["multipart/form-data"]&&s.content["multipart/form-data"].schema&&s.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,s.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(s.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&s.content["application/x-www-form-urlencoded"]&&s.content["application/x-www-form-urlencoded"].schema&&s.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,s.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(s.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,s),t.requestBody["x-s2o-name"]||t.operationId&&(t.requestBody["x-s2o-name"]=ze.sanitiseAll(t.operationId)));if(e&&!e["x-s2o-delete"]){delete e.type;for(const p of ze.parameterTypeProperties)delete e[p];e.in!=="path"||e.required!==void 0&&e.required===!0||(e.required=!0,i.patches++,i.warnings.push(`(Patchable) path parameters must be required:true [${e.name} in ${a}]`))}return t}function Dv(e,t,r,n,a){if(!e)return!1;if(e.description||typeof e!="object"||Array.isArray(e)||(a.patches++,a.warnings.push("(Patchable) response.description is mandatory")),e.schema!==void 0){Hi(e.schema,a),r&&r.produces&&typeof r.produces=="string"&&(r.produces=[r.produces],a.patches++,a.warnings.push("(Patchable) operation.produces must be an array")),n.produces&&!Array.isArray(n.produces)&&delete n.produces;const o=((r?r.produces:null)||n.produces||[]).filter(ze.uniqueOnly);o.length||o.push("*/*"),e.content={};for(const i of o){if(e.content[i]={},e.content[i].schema=ze.clone(e.schema),e.examples&&e.examples[i]){const s={};s.value=e.examples[i],e.content[i].examples={},e.content[i].examples.response=s,delete e.examples[i]}e.content[i].schema.type==="file"&&(e.content[i].schema={type:"string",format:"binary"})}delete e.schema}for(const o in e.examples)e.content||(e.content={}),e.content[o]||(e.content[o]={}),e.content[o].examples={},e.content[o].examples.response={},e.content[o].examples.response.value=e.examples[o];if(delete e.examples,e.headers)for(const o in e.headers)o.toLowerCase()==="status code"?(delete e.headers[o],a.patches++,a.warnings.push('(Patchable) "Status Code" is not a valid header')):Fv(e.headers[o],a)}function Nv(e,t,r,n,a){for(const o in e){const i=e[o];i&&i["x-trace"]&&typeof i["x-trace"]=="object"&&(i.trace=i["x-trace"],delete i["x-trace"]),i&&i["x-summary"]&&typeof i["x-summary"]=="string"&&(i.summary=i["x-summary"],delete i["x-summary"]),i&&i["x-description"]&&typeof i["x-description"]=="string"&&(i.description=i["x-description"],delete i["x-description"]),i&&i["x-servers"]&&Array.isArray(i["x-servers"])&&(i.servers=i["x-servers"],delete i["x-servers"]);for(const s in i)if(ze.httpMethods.indexOf(s)>=0||s==="x-amazon-apigateway-any-method"){let l=i[s];if(l&&l.parameters&&Array.isArray(l.parameters)){if(i.parameters)for(const c of i.parameters)l.parameters.find(d=>d.name===c.name&&d.in===c.in)||c.in!=="formData"&&c.in!=="body"&&c.type!=="file"||(l=Wi(c,l,i,s,o,a,r));for(const c of l.parameters)l=Wi(c,l,i,s,`${s}: ${o}`,a,r);l.parameters&&(l.parameters=l.parameters.filter(Lv))}if(l&&l.security&&Rv(l.security),typeof l=="object"){if(!l.responses){const c={description:"Default response"};l.responses={default:c}}for(const c in l.responses)Dv(l.responses[c],0,l,a,r)}if(l&&l["x-servers"]&&Array.isArray(l["x-servers"]))l.servers=l["x-servers"],delete l["x-servers"];else if(l&&l.schemes&&l.schemes.length){for(const c of l.schemes)if((!a.schemes||a.schemes.indexOf(c)<0)&&(l.servers||(l.servers=[]),Array.isArray(a.servers)))for(const d of a.servers){const p=ze.clone(d);l.servers.push(p)}}if(l){if(delete l.consumes,delete l.produces,delete l.schemes,l["x-ms-examples"]){for(const c in l["x-ms-examples"]){const d=l["x-ms-examples"][c],p=ze.sanitiseAll(c);if(d.parameters)for(const h in d.parameters){const f=d.parameters[h];for(const g of(l.parameters||[]).concat(i.parameters||[]))g.name!==h||g.example||(g.examples||(g.examples={}),g.examples[c]={value:f})}if(d.responses)for(const h in d.responses){if(d.responses[h].headers)for(const f in d.responses[h].headers){const g=d.responses[h].headers[f];for(const x in l.responses[h].headers)x===f&&(l.responses[h].headers[x].example=g)}if(d.responses[h].body&&(a.components.examples[p]={value:ze.clone(d.responses[h].body)},l.responses[h]&&l.responses[h].content))for(const f in l.responses[h].content){const g=l.responses[h].content[f];g.examples||(g.examples={}),g.examples[c]={$ref:`#/components/examples/${p}`}}}}delete l["x-ms-examples"]}if(l.parameters&&l.parameters.length===0&&delete l.parameters,l.requestBody){const c=l.operationId?ze.sanitiseAll(l.operationId):ze.camelize(ze.sanitiseAll(s+o)),d=ze.sanitise(l.requestBody["x-s2o-name"]||c||"");delete l.requestBody["x-s2o-name"];const p=JSON.stringify(l.requestBody),h=ze.createHash(p);if(!n[h]){const g={};g.name=d,g.body=l.requestBody,g.refs=[],n[h]=g}const f=`#/${t}/${encodeURIComponent(o)}/${s}/requestBody`;n[h].refs.push(f)}}}if(i&&i.parameters){for(const s in i.parameters)Wi(i.parameters[s],null,i,null,o,a,r);Array.isArray(i.parameters)&&(i.parameters=i.parameters.filter(Lv))}}}function zv(e){return e&&e.url&&typeof e.url=="string"&&(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,(t,r)=>{e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e}function qv(e,t){e.info!==void 0&&e.info!==null||(e.info={version:"",title:""},t.patches++,t.warnings.push("(Patchable) info object is mandatory")),(typeof e.info!="object"||Array.isArray(e.info))&&(t.errCount++,t.errors.push({message:"info must be an object",pointer:"/info"})),e.info&&(e.info.title===void 0&&(t.patches++,e.info.title="",t.warnings.push({message:"(Patchable) info.title cannot be null",pointer:"/info/title",patchable:!0})),e.info.version===void 0?(t.patches++,e.info.version="",t.warnings.push("(Patchable) info.version cannot be null")):typeof e.info.version!="string"&&(t.patches++,e.info.version=e.info.version.toString(),t.warnings.push("(Patchable) info.version must be a string")))}function Bv(e,t){e.paths||(t.patches++,e.paths={},t.warnings.push("(Patchable) paths object is mandatory"))}function Uv(e={}){const t={original:e,openapi:{},patches:0,warnings:[],errCount:0,errors:[]};if(e.openapi&&typeof e.openapi=="string"&&e.openapi.startsWith("3."))return t.openapi=ze.circularClone(e),qv(t.openapi,t),Bv(t.openapi,t),t;if(e.swagger!=="2.0")return t.errCount++,t.errors.push({message:`Unsupported swagger/OpenAPI version: ${e.openapi?e.openapi:e.swagger}`,pointer:"/swagger"}),t;if(t.openapi=ze.circularClone(e),t.openapi.openapi="3.0.0",delete t.openapi.swagger,Ip(t.openapi,{},(r,n,a)=>{r[n]===null&&!n.startsWith("x-")&&n!=="default"&&a.path.indexOf("/example")<0&&delete r[n]}),e.host)(e.schemes||[]).forEach(r=>{const n={},a=(e.basePath||"").replace(/\/$/,"");n.url=`${r?`${r}:`:""}//${e.host}${a}`,zv(n),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(n)});else if(e.basePath){const r={};r.url=e.basePath,zv(r),t.openapi.servers||(t.openapi.servers=[]),t.openapi.servers.push(r)}if(delete t.openapi.host,delete t.openapi.basePath,e["x-ms-parameterized-host"]){const r=e["x-ms-parameterized-host"],n={};n.url=r.hostTemplate+(e.basePath?e.basePath:""),n.variables={};const a=n.url.match(/\{\w+\}/g);for(const o in r.parameters){const i=r.parameters[o];o.startsWith("x-")||(delete i.required,delete i.type,delete i.in,i.default===void 0&&(i.enum?i.default=i.enum[0]:i.default="none"),i.name||(i.name=a[o].replace("{","").replace("}","")),n.variables[i.name]=i,delete i.name)}t.openapi.servers||(t.openapi.servers=[]),r.useSchemePrefix===!1?t.openapi.servers.push(n):e.schemes.forEach(o=>{t.openapi.servers.push({...n,url:`${o}://${n.url}`})}),delete t.openapi["x-ms-parameterized-host"]}return qv(t.openapi,t),Bv(t.openapi,t),typeof t.openapi.consumes=="string"&&(t.openapi.consumes=[t.openapi.consumes]),typeof t.openapi.produces=="string"&&(t.openapi.produces=[t.openapi.produces]),t.openapi.components={},t.openapi["x-callbacks"]&&(t.openapi.components.callbacks=t.openapi["x-callbacks"],delete t.openapi["x-callbacks"]),t.openapi.components.examples={},t.openapi.components.headers={},t.openapi["x-links"]&&(t.openapi.components.links=t.openapi["x-links"],delete t.openapi["x-links"]),t.openapi.components.parameters=t.openapi.parameters||{},t.openapi.components.responses=t.openapi.responses||{},t.openapi.components.requestBodies={},t.openapi.components.securitySchemes=t.openapi.securityDefinitions||{},t.openapi.components.schemas=t.openapi.definitions||{},delete t.openapi.definitions,delete t.openapi.responses,delete t.openapi.parameters,delete t.openapi.securityDefinitions,function(r){const n=r.openapi,a={};Pv={schemas:{}},n.security&&Rv(n.security);for(const o in n.components.securitySchemes){const i=ze.sanitise(o);if(o!==i){if(n.components.securitySchemes[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised securityScheme name ${i}`,pointer:`/components/securitySchemes/${i}`}),r;n.components.securitySchemes[i]=n.components.securitySchemes[o],delete n.components.securitySchemes[o]}FI(n.components.securitySchemes[i],r)}for(const o in n.components.schemas){const i=ze.sanitiseAll(o);let s="";if(o!==i){for(;n.components.schemas[i+s];)s=s?++s:2;n.components.schemas[i+s]=n.components.schemas[o],delete n.components.schemas[o]}Pv.schemas[o]=i+s,Hi(n.components.schemas[`${i}${s}`],r)}for(const o in n.components.parameters){const i=ze.sanitise(o);if(o!==i){if(n.components.parameters[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised parameter name ${i}`,pointer:`/components/parameters/${i}`}),r;n.components.parameters[i]=n.components.parameters[o],delete n.components.parameters[o]}Wi(n.components.parameters[i],null,null,null,i,n,r)}for(const o in n.components.responses){const i=ze.sanitise(o);if(o!==i){if(n.components.responses[i])return r.errCount++,r.errors.push({message:`Duplicate sanitised response name ${i}`,pointer:`/components/responses/${i}`}),r;n.components.responses[i]=n.components.responses[o],delete n.components.responses[o]}const s=n.components.responses[i];if(Dv(s,0,null,n,r),s.headers)for(const l in s.headers)l.toLowerCase()==="status code"?(delete s.headers[l],r.patches++,r.warnings.push('(Patchable) "Status Code" is not a valid header')):Fv(s.headers[l],r)}for(const o in n.components.requestBodies){const i=n.components.requestBodies[o],s=JSON.stringify(i),l=ze.createHash(s),c={};c.name=o,c.body=i,c.refs=[],a[l]=c}Nv(n.paths,"paths",r,a,n),n["x-ms-paths"]&&Nv(n["x-ms-paths"],"x-ms-paths",r,a,n);for(const o in n.components.parameters)n.components.parameters[o]["x-s2o-delete"]&&delete n.components.parameters[o];return delete n.consumes,delete n.produces,delete n.schemes,n.components.requestBodies={},n.components.responses&&Object.keys(n.components.responses).length===0&&delete n.components.responses,n.components.parameters&&Object.keys(n.components.parameters).length===0&&delete n.components.parameters,n.components.examples&&Object.keys(n.components.examples).length===0&&delete n.components.examples,n.components.requestBodies&&Object.keys(n.components.requestBodies).length===0&&delete n.components.requestBodies,n.components.securitySchemes&&Object.keys(n.components.securitySchemes).length===0&&delete n.components.securitySchemes,n.components.headers&&Object.keys(n.components.headers).length===0&&delete n.components.headers,n.components.schemas&&Object.keys(n.components.schemas).length===0&&delete n.components.schemas,n.components&&Object.keys(n.components).length===0&&delete n.components,r}(t)}function DI(e){return e.ok&&e.text&&e.parseError&&e.parseError.name==="YAMLException"&&(!e.headers["content-type"]||e.headers["content-type"].match("text/plain"))&&(e.body=e.text),e}var Mv={convertObj:Uv,resolve:function(e){return new Promise(async t=>{try{const r=await tt.resolve(e,DI);if(r.errors&&r.errors.length>0)t(r);else{r.spec.openapi&&(r.resolvedSpec=r.spec,t(r));const n=Uv(r.spec);n.errors&&n.errors.length>0&&(Array.isArray(r.errors)?r.errors.concat(r.errors):r.errors=n.errors),n.warnings&&n.warnings.length>0&&(r.warnings=n.warnings),r.resolvedSpec=r.spec,r.spec=n.openapi,t(r)}}catch(r){t(r)}})}};async function Rp(e,t=!1,r=!1,n="",a="",o="",i="",s=""){var l,c;let d;try{var p,h;let $;if(this.requestUpdate(),$=typeof e=="string"?await Mv.resolve({url:e,allowMetaPatches:!1}):await Mv.resolve({spec:e,allowMetaPatches:!1}),await lo(0),(p=$.resolvedSpec)!==null&&p!==void 0&&p.jsonSchemaViewer&&(h=$.resolvedSpec)!==null&&h!==void 0&&h.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:$.resolvedSpec}}));const P=Object.entries($.resolvedSpec.schemaAndExamples).map(b=>({show:!0,expanded:!0,selectedExample:null,name:b[0],elementId:b[0].replace(na,"-"),...b[1]}));return{specLoadError:!1,isSpecLoading:!1,info:$.resolvedSpec.info,schemaAndExamples:P}}var f,g,x,v;if(!$.spec||!($.spec.components||$.spec.info||$.spec.servers||$.spec.tags||$.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",$),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:(f=$.response)!==null&&f!==void 0&&f.url?`${(g=$.response)===null||g===void 0?void 0:g.url} \u2503 ${(x=$.response)===null||x===void 0?void 0:x.status}  ${(v=$.response)===null||v===void 0?void 0:v.statusText}`:"Unable to load the Spec",version:" "},tags:[]};d=$.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:d}}))}catch($){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",$)}const u=function($,P,b=!1,k=!1){const E=["get","put","post","delete","patch","head","options"],w=$.tags&&Array.isArray($.tags)?$.tags.map(L=>({show:!0,elementId:`tag--${L.name.replace(na,"-")}`,name:L.name,description:L.description||"",headers:L.description?Lp(L.description):[],paths:[],expanded:L["x-tag-expanded"]!==!1})):[],y=$.paths||{};if($.webhooks)for(const[L,z]of Object.entries($.webhooks))z._type="webhook",y[L]=z;for(const L in y){const z=y[L].parameters,V={servers:y[L].servers||[],parameters:y[L].parameters||[]},_=y[L]._type==="webhook";E.forEach(C=>{if(y[L][C]){const U=$.paths[L][C],re=U.tags||[];if(re.length===0)if(b){const Q=L.replace(/^\/+|\/+$/g,""),xe=Q.indexOf("/");xe===-1?re.push(Q):re.push(Q.substr(0,xe))}else re.push("General \u2982");re.forEach(Q=>{let xe,ye;var De,Ce;$.tags&&(ye=$.tags.find(Xe=>Xe.name.toLowerCase()===Q.toLowerCase())),xe=w.find(Xe=>Xe.name===Q),xe||(xe={show:!0,elementId:`tag--${Q.replace(na,"-")}`,name:Q,description:((De=ye)===null||De===void 0?void 0:De.description)||"",headers:(Ce=ye)!==null&&Ce!==void 0&&Ce.description?Lp(ye.description):[],paths:[],expanded:!ye||ye["x-tag-expanded"]!==!1},w.push(xe));let Oe=(U.summary||U.description||`${C.toUpperCase()} ${L}`).trim();Oe.length>100&&([Oe]=Oe.split(/[.|!|?]\s|[\r?\n]/));let ft=[];if(ft=z?U.parameters?z.filter(Xe=>{if(!U.parameters.some(nr=>Xe.name===nr.name&&Xe.in===nr.in))return Xe}).concat(U.parameters):z.slice(0):U.parameters?U.parameters.slice(0):[],U.callbacks)for(const[Xe,nr]of Object.entries(U.callbacks)){const Xi=Object.entries(nr).filter(to=>typeof to[1]=="object")||[];U.callbacks[Xe]=Object.fromEntries(Xi)}xe.paths.push({show:!0,expanded:!1,isWebhook:_,expandedAtLeastOnce:!1,summary:U.summary||"",description:U.description||"",shortSummary:Oe,method:C,path:L,operationId:U.operationId,elementId:`${C}-${L.replace(na,"-")}`,servers:U.servers?V.servers.concat(U.servers):V.servers,parameters:ft,requestBody:U.requestBody,responses:U.responses,callbacks:U.callbacks,deprecated:U.deprecated,security:U.security,xBadges:U["x-badges"]||void 0,xCodeSamples:U["x-codeSamples"]||U["x-code-samples"]||""})})}})}const S=w.filter(L=>L.paths&&L.paths.length>0);return S.forEach(L=>{P==="method"?L.paths.sort((z,V)=>E.indexOf(z.method).toString().localeCompare(E.indexOf(V.method))):P==="summary"?L.paths.sort((z,V)=>z.shortSummary.localeCompare(V.shortSummary)):P==="path"&&L.paths.sort((z,V)=>z.path.localeCompare(V.path)),L.firstPathId=L.paths[0].elementId}),k?S.sort((L,z)=>L.name.localeCompare(z.name)):S}(d,n,t,r),O=function($){if(!$.components)return[];const P=[];for(const b in $.components){const k=[];for(const S in $.components[b]){const L={show:!0,id:`${b.toLowerCase()}-${S.toLowerCase()}`.replace(na,"-"),name:S,component:$.components[b][S]};k.push(L)}let E=b,w=b;switch(b){case"schemas":w="Schemas",E="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":w="Responses",E="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":w="Parameters",E="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":w="Examples",E="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":w="Request Bodies",E="Describes common request bodies that are used across the API operations.";break;case"headers":w="Headers",E='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":w="Security Schemes",E="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":w="Links",E="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":w="Callbacks",E="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:w=b,E=b}const y={show:!0,name:w,description:E,subComponents:k};P.push(y)}return P||[]}(d),A=(l=d.info)!==null&&l!==void 0&&l.description?Lp(d.info.description):[],T=[];if((c=d.components)!==null&&c!==void 0&&c.securitySchemes){const $=new Set;Object.entries(d.components.securitySchemes).forEach(P=>{if(!$.has(P[0])){$.add(P[0]);const b={securitySchemeId:P[0],...P[1]};b.value="",b.finalKeyValue="",P[1].type==="apiKey"||P[1].type==="http"?(b.in=P[1].in||"header",b.name=P[1].name||"Authorization",b.user="",b.password=""):P[1].type==="oauth2"&&(b.in="header",b.name="Authorization",b.clientId="",b.clientSecret=""),T.push(b)}})}a&&o&&i&&T.push({securitySchemeId:Fr,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:a,in:o,value:i,finalKeyValue:i}),T.forEach($=>{$.type==="http"?$.typeDisplay=$.scheme==="basic"?"HTTP Basic":"HTTP Bearer":$.type==="apiKey"?$.typeDisplay=`API Key (${$.name})`:$.type==="oauth2"?$.typeDisplay=`OAuth (${$.securitySchemeId})`:$.typeDisplay=$.type||"None"});let j=[];return d.servers&&Array.isArray(d.servers)?(d.servers.forEach($=>{let P=$.url.trim();P.startsWith("http")||P.startsWith("//")||P.startsWith("{")||window.location.origin.startsWith("http")&&($.url=window.location.origin+$.url,P=$.url),$.variables&&Object.entries($.variables).forEach(b=>{const k=new RegExp(`{${b[0]}}`,"g");P=P.replace(k,b[1].default||""),b[1].value=b[1].default||""}),$.computedUrl=P}),s&&d.servers.push({url:s,computedUrl:s})):s?d.servers=[{url:s,computedUrl:s}]:window.location.origin.startsWith("http")?d.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:d.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],j=d.servers,{specLoadError:!1,isSpecLoading:!1,info:d.info,infoDescriptionHeaders:A,tags:u,components:O,externalDocs:d.externalDocs,securitySchemes:T,servers:j}}function Lp(e){return Y.lexer(e).filter(t=>t.type==="heading"&&t.depth<=2)||[]}const Hv=1,NI=2,Wv=3,Vv=4,Fp=e=>(...t)=>({_$litDirective$:e,values:t});class Dp{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}class Np extends Dp{constructor(t){if(super(t),this.it=ke,t.type!==NI)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ke||t==null)return this.ft=void 0,this.it=t;if(t===$e)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Np.directiveName="unsafeHTML",Np.resultType=1;const Ae=Fp(Np),Gv="rapidoc";function pn(e,t="",r="",n=""){var a,o;const i=(a=this.resolvedSpec.securitySchemes)===null||a===void 0?void 0:a.find(c=>c.securitySchemeId===e);if(!i)return!1;let s="";if(((o=i.scheme)===null||o===void 0?void 0:o.toLowerCase())==="basic")t&&(s=`Basic ${btoa(`${t}:${r}`)}`);else if(n){var l;i.value=n,s=`${((l=i.scheme)===null||l===void 0?void 0:l.toLowerCase())==="bearer"?"Bearer ":""}${n}`}return!!s&&(i.finalKeyValue=s,this.requestUpdate(),!0)}function zp(){var e;(e=this.resolvedSpec.securitySchemes)===null||e===void 0||e.forEach(t=>{t.user="",t.password="",t.value="",t.finalKeyValue=""}),this.requestUpdate()}function qp(){return JSON.parse(localStorage.getItem(Gv))||{}}function Kv(e){localStorage.setItem(Gv,JSON.stringify(e))}function zI(){const e=qp.call(this);Object.values(e).forEach(t=>{pn.call(this,t.securitySchemeId,t.username,t.password,t.value)})}function Jv(e){let t="";const r=this.resolvedSpec.securitySchemes.find(n=>n.securitySchemeId===e);if(r){const n=this.shadowRoot.getElementById(`security-scheme-${e}`);if(n){if(r.type&&r.scheme&&r.type==="http"&&r.scheme.toLowerCase()==="basic"){const a=n.querySelector(".api-key-user").value.trim(),o=n.querySelector(".api-key-password").value.trim();pn.call(this,e,a,o)}else t=n.querySelector(".api-key-input").value.trim(),pn.call(this,e,"","",t);if(this.persistAuth==="true"){const a=qp.call(this);a[e]=r,Kv.call(this,a)}}}}function Yv(e,t,r="Bearer"){this.resolvedSpec.securitySchemes.find(n=>n.securitySchemeId===e).finalKeyValue=`${r.toLowerCase()==="bearer"?"Bearer":r.toLowerCase()==="mac"?"MAC":r} ${t}`,this.requestUpdate()}async function Bp(e,t,r,n,a,o,i,s,l="header",c=null,d=null,p=null){const h=s?s.querySelector(".oauth-resp-display"):void 0,f=new URLSearchParams,g=new Headers;f.append("grant_type",a),a!=="client_credentials"&&a!=="password"&&f.append("redirect_uri",n),o&&(f.append("code",o),f.append("code_verifier","731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890")),l==="header"?g.set("Authorization",`Basic ${btoa(`${t}:${r}`)}`):(f.append("client_id",t),f.append("client_secret",r)),a==="password"&&(f.append("username",d),f.append("password",p)),c&&f.append("scope",c);try{const x=await fetch(e,{method:"POST",headers:g,body:f}),v=await x.json();if(!x.ok)return h&&(h.innerHTML=`<span style="color:var(--red)">${v.error_description||v.error_description||"Unable to get access token"}</span>`),!1;if(v.token_type&&v.access_token)return Yv.call(this,i,v.access_token,v.token_type),h&&(h.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch{return h&&(h.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function qI(e,t,r,n,a,o,i,s,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&(e.data.responseType==="code"?Bp.call(this,r,n,a,o,i,e.data.code,l,c,s):e.data.responseType==="token"&&Yv.call(this,l,e.data.access_token,e.data.token_type)))}async function BI(e,t,r,n,a){const o=a.target.closest(".oauth-flow"),i=o.querySelector(".oauth-client-id")?o.querySelector(".oauth-client-id").value.trim():"",s=o.querySelector(".oauth-client-secret")?o.querySelector(".oauth-client-secret").value.trim():"",l=o.querySelector(".api-key-user")?o.querySelector(".api-key-user").value.trim():"",c=o.querySelector(".api-key-password")?o.querySelector(".api-key-password").value.trim():"",d=o.querySelector(".oauth-send-client-secret-in")?o.querySelector(".oauth-send-client-secret-in").value.trim():"header",p=[...o.querySelectorAll(".scope-checkbox:checked")],h=o.querySelector(`#${e}-pkce`),f=`${Math.random().toString(36)}random`.slice(2,9),g=`${Math.random().toString(36)}random`.slice(2,9),x=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let v,u="",O="";if([...o.parentNode.querySelectorAll(".oauth-resp-display")].forEach(A=>{A.innerHTML=""}),t==="authorizationCode"||t==="implicit"){const A=new URL(r);t==="authorizationCode"?(u="authorization_code",O="code"):t==="implicit"&&(O="token");const T=new URLSearchParams(A.search),j=p.map($=>$.value).join(" ");j&&T.set("scope",j),T.set("client_id",i),T.set("redirect_uri",x.toString()),T.set("response_type",O),T.set("state",f),T.set("nonce",g),h&&h.checked&&(T.set("code_challenge","4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc"),T.set("code_challenge_method","S256")),T.set("show_dialog",!0),A.search=T.toString(),sessionStorage.getItem("winMessageEventActive")==="true"&&window.postMessage({fake:!0},this),setTimeout(()=>{v=window.open(A.toString()),v?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",$=>qI.call(this,$,v,n,i,s,x.toString(),u,d,e,o),{once:!0})):console.error(`RapiDoc: Unable to open ${A.toString()} in a new window`)},10)}else if(t==="clientCredentials"){u="client_credentials";const A=p.map(T=>T.value).join(" ");Bp.call(this,n,i,s,x.toString(),u,"",e,o,d,A)}else if(t==="password"){u="password";const A=p.map(T=>T.value).join(" ");Bp.call(this,n,i,s,x.toString(),u,"",e,o,d,A,l,c)}}function UI(e,t,r,n,a,o=[],i="header"){let{authorizationUrl:s,tokenUrl:l,refreshUrl:c}=a;const d=h=>h.indexOf("://")>0||h.indexOf("//")===0;let p;return c&&!d(c)&&(c=`${this.selectedServer.computedUrl}/${c.replace(/^\//,"")}`),l&&!d(l)&&(l=`${this.selectedServer.computedUrl}/${l.replace(/^\//,"")}`),s&&!d(s)&&(s=`${this.selectedServer.computedUrl}/${s.replace(/^\//,"")}`),p=e==="authorizationCode"?"Authorization Code Flow":e==="clientCredentials"?"Client Credentials Flow":e==="implicit"?"Implicit Flow":e==="password"?"Password Flow":e,m`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${p}</div>
      ${s?m`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${s} </span></div>`:""}
      ${l?m`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${l}</span></div>`:""}
      ${c?m`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${c}</span></div>`:""}
      ${e==="authorizationCode"||e==="clientCredentials"||e==="implicit"||e==="password"?m`
          ${a.scopes?m`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(a.scopes).map((h,f)=>m`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${n}${e}${f}" ?checked="${o.includes(h[0])}" value="${h[0]}">
                    <label for="${n}${e}${f}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${h[0]}</span>
                        ${h[0]!==h[1]?` - ${h[1]||""}`:""}
                    </label>
                  </div>
                `)}
              </div>
            `:""}
          ${e==="password"?m`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${n} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${n} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${e==="authorizationCode"?m`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${n}-pkce" checked>
                  <label for="${n}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-id">
            ${e==="authorizationCode"||e==="clientCredentials"||e==="password"?m`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${r||""}" placeholder="client-secret" spellcheck="false" class="oauth2 ${e} ${n} oauth-client-secret" style = "margin:0 5px;">
                ${e==="authorizationCode"||e==="clientCredentials"||e==="password"?m`
                    <select style="margin-right:5px;" class="${e} ${n} oauth-send-client-secret-in">
                      <option value = 'header' .selected = ${i==="header"} > Authorization Header </option>
                      <option value = 'request-body' .selected = ${i==="request-body"}> Request Body </option>
                    </select>`:""}`:""}
            ${e==="authorizationCode"||e==="clientCredentials"||e==="implicit"||e==="password"?m`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${h=>{BI.call(this,n,e,s,l,h)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function MI(e){var t;const r=(t=this.resolvedSpec.securitySchemes)===null||t===void 0?void 0:t.find(n=>n.securitySchemeId===e);if(r.user="",r.password="",r.value="",r.finalKeyValue="",this.persistAuth==="true"){const n=qp.call(this);delete n[r.securitySchemeId],Kv.call(this,n)}this.requestUpdate()}function Zv(){var e;if(!this.resolvedSpec)return"";const t=(e=this.resolvedSpec.securitySchemes)===null||e===void 0?void 0:e.filter(r=>r.finalKeyValue);return t?m`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?m`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{zp.call(this)}}>CLEAR ALL API KEYS</button>`:m`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?m`
        <table id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map(r=>m`
            <tr id="security-scheme-${r.securitySchemeId}" class="${r.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${r.typeDisplay}</span>
                  ${r.finalKeyValue?m`
                      <span class='blue-text'>  ${r.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{MI.call(this,r.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${r.description?m`
                    <div class="m-markdown">
                      ${Ae(Y(r.description||""))}
                    </div>`:""}

                ${r.type.toLowerCase()==="apikey"||r.type.toLowerCase()==="http"&&r.scheme.toLowerCase()==="bearer"?m`
                    <div style="margin-bottom:5px">
                      ${r.type.toLowerCase()==="apikey"?m`Send <code>${r.name}</code> in <code>${r.in}</code>`:m`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${r.in!=="cookie"?m`
                          <input type = "text" value = "${r.value}" class="${r.type} ${r.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${n=>{Jv.call(this,r.securitySchemeId,n)}}">
                            ${r.finalKeyValue?"UPDATE":"SET"}
                          </button>`:m`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${r.type.toLowerCase()==="http"&&r.scheme.toLowerCase()==="basic"?m`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${r.user}" placeholder="username" spellcheck="false" class="${r.type} ${r.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${r.password}" placeholder="password" spellcheck="false" class="${r.type} ${r.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${n=>{Jv.call(this,r.securitySchemeId,n)}}"
                        part = "btn btn-outline"
                      >
                        ${r.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${r.type.toLowerCase()==="oauth2"?m`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(r.flows).map(n=>UI.call(this,n,r["x-client-id"],r["x-client-secret"],r.securitySchemeId,r.flows[n],r["x-default-scopes"],r["x-receive-token-in"]))}
                  </td>
                </tr>
                `:""}
          `)}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function Qv(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return e.forEach(r=>{const n=[],a=[];Object.keys(r).length===0?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(r).forEach(o=>{let i="";const s=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===o);r[o]&&Array.isArray(r[o])&&(i=r[o].join(", ")),s&&(a.push(s.typeDisplay),n.push({...s,scopes:i}))}),t.push({securityTypes:a.length>1?`${a[0]} + ${a.length-1} more`:a[0],securityDefs:n}))}),m`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${t.map((r,n)=>m`

          ${r.securityTypes?m`
              ${n!==0?m`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${this.updateRoute==="true"&&this.allowAuthentication==="true"?m`<a part="anchor anchor-operation-security" href="#auth"> ${r.securityTypes} </a>`:m`${r.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${r.securityDefs.length>1?m`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${r.securityDefs.map((a,o)=>{const i=m`${a.scopes!==""?m`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${a.scopes.split(",").map((s,l)=>m`${l===0?"":"\u2503"}<span>${s}</span>`)}
                            </div>
                          </div>`:""}`;return m`
                      ${a.type==="oauth2"?m`
                          <div>
                            ${r.securityDefs.length>1?m`<b>${o+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${a.securitySchemeId}</span> in <b>Authorization header</b>
                            ${i}
                          </div>`:a.type==="http"?m`
                            <div>
                              ${r.securityDefs.length>1?m`<b>${o+1}.</b> &nbsp;`:m`Requires`}
                              ${a.scheme==="basic"?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${i}
                            </div>`:m`
                            <div>
                              ${r.securityDefs.length>1?m`<b>${o+1}.</b> &nbsp;`:m`Requires`}
                              Token in <b>${a.name} ${a.in}</b>
                              ${i}
                            </div>`}`})}
                  </div>
                </div>
              </div>
            `:""}
        `)}
      </div>
    `}return""}function Xv(e){return m`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${t=>{if(!t.target.classList.contains("tab-btn"))return;const r=t.target.dataset.tab,n=[...t.currentTarget.querySelectorAll(".tab-btn")],a=[...t.currentTarget.querySelectorAll(".tab-content")];n.forEach(o=>o.classList[o.dataset.tab===r?"add":"remove"]("active")),a.forEach(o=>{o.style.display=o.dataset.tab===r?"block":"none"})}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map((t,r)=>m`<button class="tab-btn ${r===0?"active":""}" data-tab = '${t.lang}${r}'> ${t.label||t.lang} </button>`)}
    </div>
    ${e.map((t,r)=>{var n,a,o;return m`
      <div class="tab-content m-markdown" style= "display:${r===0?"block":"none"}" data-tab = '${t.lang}${r}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${i=>{aa(t.source,i)}}'> Copy </button>
        <pre><code class="language">${Ze().languages[(n=t.lang)===null||n===void 0?void 0:n.toLowerCase()]?Ae(Ze().highlight(t.source,Ze().languages[(a=t.lang)===null||a===void 0?void 0:a.toLowerCase()],(o=t.lang)===null||o===void 0?void 0:o.toLowerCase())):t.source}</code></pre>
      </div>`})}
  </section>`}function eb(e){return m`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map(t=>m`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${t[0]}
        ${Object.entries(t[1]).map(r=>m`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div style="width:100%"> 
              ${Object.entries(r[1]).map(n=>{var a,o,i;return m`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${n[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${n[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${r[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${n[0]||""}", 
                      path = "${r[0]||""}" 
                      .parameters = "${((a=n[1])===null||a===void 0?void 0:a.parameters)||""}" 
                      .request_body = "${((o=n[1])===null||o===void 0?void 0:o.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${this.schemaHideWriteOnly==="never"?"false":"true"}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${(i=n[1])===null||i===void 0?void 0:i.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${this.schemaHideReadOnly==="never"?"false":"true"}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `})}
            </div>  
          </div>  
        `)}
      </div>  
    `)}
  `}const HI={},Vi=Fp(class extends Dp{constructor(){super(...arguments),this.nt=HI}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every((n,a)=>n===this.nt[a]))return $e}else if(this.nt===t)return $e;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),WI={},Up=Fp(class extends Dp{constructor(e){if(super(e),e.type!==Wv&&e.type!==Hv&&e.type!==Vv)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>t.strings===void 0)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===$e||t===ke)return t;const r=e.element,n=e.name;if(e.type===Wv){if(t===r[n])return $e}else if(e.type===Vv){if(!!t===r.hasAttribute(n))return $e}else if(e.type===Hv&&r.getAttribute(n)===t+"")return $e;return((a,o=WI)=>{a._$AH=o})(e),t}});var VI=N(131),GI=N.n(VI);const Gi=B`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`;function Pr(e){if(!e)return;let t="",r="";if(e.$ref){const s=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(s+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(e.length===2?" or ":"\u2503"):e.type,(e.format||e.enum)&&(t=t.replace("string",e.enum?"enum":e.format)),e.nullable&&(t+="\u2503null")):t=Object.keys(e).length===0?"any":"{missing-type-info}";const n={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"\u{1F181}":e.writeOnly?"\u{1F186}":"",deprecated:e.deprecated?"\u274C":"",examples:e.examples||e.example,default:e.default!=null?`${e.default}`:"",description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if(n.type==="{recursive}"?n.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):n.type!=="{missing-type-info}"&&n.type!=="any"||(n.description=n.description||""),n.allowedValues=Array.isArray(e.enum)?e.enum.join("\u2503"):"",t==="array"&&e.items){var a,o,i;const s=(a=e.items)===null||a===void 0?void 0:a.type,l=((o=e.items)===null||o===void 0?void 0:o.default)!==void 0?e.items.default:"";n.arrayType=`${e.type} of ${Array.isArray(s)?s.join(""):s}`,n.default=l,n.allowedValues=Array.isArray((i=e.items)===null||i===void 0?void 0:i.enum)?e.items.enum.join("\u2503"):""}return t.match(/integer|number/g)&&(e.minimum===void 0&&e.exclusiveMinimum===void 0||(r+=e.minimum!==void 0?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),e.maximum===void 0&&e.exclusiveMaximum===void 0||(r+=e.maximum!==void 0?`${r?"\u2503":""}Max ${e.maximum}`:`${r?"\u2503":""}Less than ${e.exclusiveMaximum}`),e.multipleOf!==void 0&&(r+=`${r?"\u2503":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(e.minLength!==void 0&&e.maxLength!==void 0?r+=`${r?"\u2503":""}${e.minLength} to ${e.maxLength} chars`:e.minLength!==void 0?r+=`${r?"\u2503":""}Min ${e.minLength} chars`:e.maxLength!==void 0&&(r+=`Max ${r?"\u2503":""}${e.maxLength} chars`)),n.constrain=r,n.html=`${n.type}~|~${n.readOrWriteOnly}~|~${n.constrain}~|~${n.default}~|~${n.allowedValues}~|~${n.pattern}~|~${n.description}~|~${e.title||""}~|~${n.deprecated?"deprecated":""}`,n}function Mp(e){return typeof e=="boolean"?{Example:{value:`${e}`}}:e===""?{Example:{value:""}}:e&&{Example:{value:e}}}function tb(e,t="string"){if(!e)return{exampleVal:"",exampleList:[]};if(e.constructor===Object){const r=Object.values(e);return{exampleVal:r.length>0?typeof r[0].value=="boolean"||typeof r[0].value=="number"?r[0].value.toString():r[0].value:"",exampleList:Object.values(e).map(n=>({value:typeof n.value=="boolean"||typeof n.value=="number"?n.value.toString():n.value,summary:n.summary,description:n.description}))}}if(Array.isArray(e)||(e=e?[e]:[]),e.length===0)return{exampleVal:"",exampleList:[]};if(t==="array"){const[r]=e;return{exampleVal:r,exampleList:e.map(n=>({value:n}))}}return{exampleVal:e[0].toString(),exampleList:e.map(r=>({value:r.toString()}))}}function Ki(e){const t=e.examples?e.examples[0]:e.example===null?null:e.example||void 0;if(t==="")return"";if(t===null)return null;if(t===0)return 0;if(t)return t;if(Object.keys(e).length===0)return null;if(e.$ref)return e.$ref;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const n=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),a=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),o=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?a||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return n?n>=o?n:o%n==0?o:Math.ceil(o/n)*n:o}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.pattern)return e.pattern;if(!e.format){const n=Number.isNaN(e.minLength)?void 0:Number(e.minLength),a=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),o=n||(a>6?6:a||void 0);return o?"A".repeat(o):"string"}{const n=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[n.substr(0,8),n.substr(8,4),`4000-8${n.substr(13,3)}`,n.substr(16,12)].join("-");default:return""}}}return"?"}function Hp(e,t=1){const r="  ".repeat(t);let n="";if(t===1&&typeof e!="object")return`
${r}${e.toString()}`;for(const a in e)n=Array.isArray(e[a])||typeof e[a]=="object"?`${n}
${r}<${a}> ${Hp(e[a],t+1)}
${r}</${a}>`:`${n}
${r}<${a}> ${e[a].toString()} </${a}>`;return n}function Ji(e,t){typeof t=="object"&&t!==null&&(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description))}function rb(e){if(typeof e=="object"&&e!==null){delete e["::TITLE"],delete e["::DESCRIPTION"];for(const t in e)rb(e[t])}}function nb(e,t,r){for(const n in t)t[n][r]=e}function Wp(e,t,r){let n=0;const a={};for(const o in e){for(const i in r)if(a[`example-${n}`]={...e[o]},a[`example-${n}`][t]=r[i],n++,n>=10)break;if(n>=10)break}return a}function fr(e,t={}){let r={};if(e){if(e.allOf){const p={};if(e.allOf.length===1&&!e.allOf[0].properties&&!e.allOf[0].items)return e.allOf[0].$ref?"{  }":e.allOf[0].readOnly&&t.includeReadOnly?Ki(e.allOf[0]):void 0;e.allOf.forEach(h=>{if(h.type==="object"||h.properties||h.allOf||h.anyOf||h.oneOf){const f=fr(h,t);Object.assign(p,f)}else if(h.type==="array"||h.items){const f=[fr(h,t)];Object.assign(p,f)}else{if(!h.type)return"";{const f=`prop${Object.keys(p).length}`;p[f]=Ki(h)}}}),r=p}else if(e.oneOf){const p={};if(e.properties)for(const h in e.properties)p[h]=Ki(e.properties[h]);if(e.oneOf.length>0){let h=0;for(const f in e.oneOf){const g=fr(e.oneOf[f],t);for(const x in g){let v;if(Object.keys(p).length>0){if(g[x]===null||typeof g[x]!="object")continue;v=Object.assign(g[x],p)}else v=g[x];r[`example-${h}`]=v,Ji(e.oneOf[f],r[`example-${h}`]),h++}}}}else if(e.anyOf){let p;if(e.type==="object"||e.properties){p={"example-0":{}};for(const f in e.properties){if(e.example){p=e;break}e.properties[f].deprecated&&!t.includeDeprecated||e.properties[f].readOnly&&!t.includeReadOnly||e.properties[f].writeOnly&&!t.includeWriteOnly||(p=Wp(p,f,fr(e.properties[f],t)))}}let h=0;for(const f in e.anyOf){const g=fr(e.anyOf[f],t);for(const x in g){if(p!==void 0)for(const v in p)r[`example-${h}`]={...p[v],...g[x]};else r[`example-${h}`]=g[x];Ji(e.anyOf[f],r[`example-${h}`]),h++}}}else if(e.type==="object"||e.properties)if(r["example-0"]={},Ji(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const p in e.properties){var n,a,o,i,s,l,c;if(((n=e.properties[p])===null||n===void 0||!n.deprecated||t.includeDeprecated)&&((a=e.properties[p])===null||a===void 0||!a.readOnly||t.includeReadOnly)&&((o=e.properties[p])===null||o===void 0||!o.writeOnly||t.includeWriteOnly))if(((i=e.properties[p])===null||i===void 0?void 0:i.type)==="array"||(s=e.properties[p])!==null&&s!==void 0&&s.items)if(e.properties[p].example)nb(e.properties[p].example,r,p);else if((l=e.properties[p])!==null&&l!==void 0&&(c=l.items)!==null&&c!==void 0&&c.example)nb([e.properties[p].items.example],r,p);else{const h=fr(e.properties[p].items,t),f=[];for(const g in h)f[g]=[h[g]];r=Wp(r,p,f)}else r=Wp(r,p,fr(e.properties[p],t))}else{if(e.type!=="array"&&!e.items)return{"example-0":Ki(e)};var d;if(e.items||e.example)if(e.example)r["example-0"]=e.example;else if((d=e.items)!==null&&d!==void 0&&d.example)r["example-0"]=[e.items.example];else{const p=fr(e.items,t);let h=0;for(const f in p)r[`example-${h}`]=[p[f]],Ji(e.items,r[`example-${h}`]),h++}else r["example-0"]=[]}return r}}function ab(e,t=0){var r;let n="";if(e.title&&(n=`**${e.title}:** `),e.description&&(n=`${n} ${e.description} ${e.minItems||e.maxItems?'<span class="more-content">\u2935</span><br/>':""}`),e.minItems&&(n=`${n} **Min Items:** ${e.minItems}`),e.maxItems&&(n=`${n} **Max Items:** ${e.maxItems}`),t>0&&(r=e.items)!==null&&r!==void 0&&r.description){let a="";e.items.minProperties&&(a=`**Min Properties:** ${e.items.minProperties}`),e.items.maxProperties&&(a=`${a} **Max Properties:** ${e.items.maxProperties}`),n=`${n} \u2B95 ${a} [ ${e.items.description} ] `}return n}function it(e,t,r=0,n=""){if(e){if(e.allOf){const s={};if(e.allOf.length===1&&!e.allOf[0].properties&&!e.allOf[0].items)return`${Pr(e.allOf[0]).html}`;e.allOf.map((l,c)=>{if(l.type==="object"||l.properties||l.allOf||l.anyOf||l.oneOf){const d=(l.anyOf||l.oneOf)&&c>0?c:"",p=it(l,{},r+1,d);Object.assign(s,p)}else if(l.type==="array"||l.items){const d=it(l,{},r+1);Object.assign(s,d)}else{if(!l.type)return"";{const d=`prop${Object.keys(s).length}`,p=Pr(l);s[d]=`${p.html}`}}}),t=s}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"",e.type==="object"||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const c in e.properties)e.required&&e.required.includes(c)?t[`${c}*`]=it(e.properties[c],{},r+1):t[c]=it(e.properties[c],{},r+1)}const s={},l=e.anyOf?"anyOf":"oneOf";e[l].forEach((c,d)=>{if(c.type==="object"||c.properties||c.allOf||c.anyOf||c.oneOf){const p=it(c,{});s[`::OPTION~${d+1}${c.title?`~${c.title}`:""}`]=p,s["::type"]="xxx-of-option"}else if(c.type==="array"||c.items){const p=it(c,{});s[`::OPTION~${d+1}${c.title?`~${c.title}`:""}`]=p,s["::type"]="xxx-of-array"}else{const p=`::OPTION~${d+1}${c.title?`~${c.title}`:""}`;s[p]=`${Pr(c).html}`,s["::type"]="xxx-of-option"}}),t[e.anyOf?`::ANY~OF ${n}`:`::ONE~OF ${n}`]=s,t["::type"]="xxx-of"}else if(Array.isArray(e.type)){const s=JSON.parse(JSON.stringify(e)),l=[],c=[];let d;var a;if(s.type.forEach(p=>{var h,f;p.match(/integer|number|string|null|boolean/g)?l.push(p):p==="array"&&typeof((h=s.items)===null||h===void 0?void 0:h.type)=="string"&&(f=s.items)!==null&&f!==void 0&&f.type.match(/integer|number|string|null|boolean/g)?s.items.type==="string"&&s.items.format?l.push(`[${s.items.format}]`):l.push(`[${s.items.type}]`):c.push(p)}),l.length>0&&(s.type=l.join(l.length===2?" or ":"\u2503"),d=Pr(s),c.length===0))return`${((a=d)===null||a===void 0?void 0:a.html)||""}`;if(c.length>0){var o;t["::type"]="xxx-of";const p={"::type":"xxx-of-option"};c.forEach((h,f)=>{if(h==="null")p[`::OPTION~${f+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${h},`)){s.type=Array.isArray(h)?h.join("\u2503"):h;const g=Pr(s);p[`::OPTION~${f+1}`]=g.html}else if(h==="object"){const g={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const x in e.properties)e.required&&e.required.includes(x)?g[`${x}*`]=it(e.properties[x],{},r+1):g[x]=it(e.properties[x],{},r+1);p[`::OPTION~${f+1}`]=g}else h==="array"&&(p[`::OPTION~${f+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":it(e.items,{},r+1)})}),p[`::OPTION~${c.length+1}`]=((o=d)===null||o===void 0?void 0:o.html)||"",t["::ONE~OF"]=p}}else if(e.type==="object"||e.properties){t["::title"]=e.title||"",t["::description"]=ab(e,r),t["::type"]="object",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="object or null"),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const s in e.properties)e.required&&e.required.includes(s)?t[`${s}*`]=it(e.properties[s],{},r+1):t[s]=it(e.properties[s],{},r+1);e.additionalProperties&&(t["<any-key>"]=it(e.additionalProperties,{}))}else{if(e.type!=="array"&&!e.items){const s=Pr(e);return s!=null&&s.html?`${s.html}`:""}var i;t["::title"]=e.title||"",t["::description"]=ab(e,r),t["::type"]="array",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="array or null"),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",(i=e.items)!==null&&i!==void 0&&i.items&&(t["::array-type"]=e.items.items.type),t["::props"]=it(e.items,{},r+1)}return t}}function Yn(e,t,r="",n="",a=!0,o=!0,i="json",s=!1){const l=[];if(r)for(const c in r){let d="",p="json";if(t!=null&&t.toLowerCase().includes("json")){if(i==="text")d=typeof r[c].value=="string"?r[c].value:JSON.stringify(r[c].value,void 0,2),p="text";else if(d=r[c].value,typeof r[c].value=="string")try{const h=r[c].value.replace(/([\w]+)(:)/g,'"$1"$2').replace(/'/g,'"');d=JSON.parse(h),p="json"}catch{p="text",d=r[c].value}}else d=r[c].value,p="text";l.push({exampleId:c,exampleSummary:r[c].summary||c,exampleDescription:r[c].description||"",exampleType:t,exampleValue:d,exampleFormat:p})}else if(n){let c="",d="json";if(t!=null&&t.toLowerCase().includes("json")){if(i==="text")c=typeof n=="string"?n:JSON.stringify(n,void 0,2),d="text";else if(typeof n=="object")c=n,d="json";else if(typeof n=="string")try{c=JSON.parse(n),d="json"}catch{d="text",c=n}}else c=n,d="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:c,exampleFormat:d})}if(l.length===0||s===!0)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:t!=null&&t.toLowerCase().includes("json")&&typeof e.example=="object"?"json":"text"});else if(t!=null&&t.toLowerCase().includes("json")||t!=null&&t.toLowerCase().includes("text")||t!=null&&t.toLowerCase().includes("*/*")||t!=null&&t.toLowerCase().includes("xml")){let c="",d="",p="",h="";t!=null&&t.toLowerCase().includes("xml")?(c=e.xml&&e.xml.name?`<${e.xml.name}>`:"<root>",d=e.xml&&e.xml.name?`</${e.xml.name}>`:"</root>",p="text"):p=i;const f=fr(e,{includeReadOnly:a,includeWriteOnly:o,deprecated:!0});let g=0;for(const x in f){if(!f[x])continue;const v=f[x]["::TITLE"]||"Example "+ ++g,u=f[x]["::DESCRIPTION"]||"";rb(f[x]),h=t!=null&&t.toLowerCase().includes("xml")?`${c}${Hp(f[x])}
${d}`:i==="text"?JSON.stringify(f[x],null,2):f[x],l.push({exampleId:x,exampleSummary:v,exampleDescription:u,exampleType:t,exampleFormat:p,exampleValue:h})}}else t!=null&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function KI(e){return e==="application/json"?"json":e==="application/xml"?"xml":null}function JI(e){if(e.schema)return[e.schema,null,null];if(e.content){for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,KI(t),e.content[t]]}return[null,null,null]}customElements.define("json-tree",class extends St{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[mr,Gi,un,B`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`,hn]}render(){return m`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill btn-copy" @click='${e=>{aa(JSON.stringify(this.data,null,2),e)}}'> Copy </button>
        </div>
        ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(e===null)return m`<div class="null" style="display:inline;">null</div>`;if(typeof e=="object"&&!(e instanceof Date)){const r=Array.isArray(e)?"array":"pure_object";return Object.keys(e).length===0?m`${Array.isArray(e)?"[ ],":"{ },"}`:m`
      <div class="open-bracket expanded ${r==="array"?"array":"object"} " @click="${this.toggleExpand}" > ${r==="array"?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map((n,a,o)=>m`
          <div class="item"> 
            ${r==="pure_object"?m`"${n}":`:""}
            ${this.generateTree(e[n],a===o.length-1)}
          </div>`)}
      </div>
      <div class="close-bracket">${r==="array"?"]":"}"}${t?"":","}</div>
      `}return typeof e=="string"||e instanceof Date?m`<span class="${typeof e}">"${e}"</span>${t?"":","}`:m`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{")}});const ob=B`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key {
  overflow:hidden;
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`;customElements.define("schema-tree",class extends St{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[mr,ob,Gi,B`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`,hn]}render(){var e,t,r;return m`
      <div class="tree ${this.schemaDescriptionExpanded==="true"?"expanded-descr":"collapsed-descr"}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${((e=this.data)===null||e===void 0?void 0:e["::type"])||""} "> ${((t=this.data)===null||t===void 0?void 0:t["::type"])||""} </div>
          ${this.allowSchemaDescriptionExpandToggle==="true"?m`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded=this.schemaDescriptionExpanded==="true"?"false":"true"}}'> 
                ${this.schemaDescriptionExpanded==="true"?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${(r=this.data)!==null&&r!==void 0&&r["::description"]?m`<span part="schema-description" class='m-markdown'> ${Ae(Y(this.data["::description"]||""))}</span>`:""}
        ${this.data?m`
            ${this.generateTree(this.data["::type"]==="array"?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:m`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",n="",a="",o=0,i=0,s=""){var l;if(this.schemaHideReadOnly==="true"&&(t==="array"&&s==="readonly"||e&&e["::readwrite"]==="readonly")||this.schemaHideWriteOnly==="true"&&(t==="array"&&s==="writeonly"||e&&e["::readwrite"]==="writeonly"))return;if(!e)return m`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${t==="array"?m`<span class='mono-font'> [ ] </span>`:t==="object"?m`<span class='mono-font'> { } </span>`:m`<span class='mono-font'> schema undefined </span>`}
      </div>`;if(Object.keys(e).length===0)return m`<span class="key object">${n}:{ }</span>`;let c="",d="";if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))c=n.replace("::","").replace("~"," ");else if(n.startsWith("::OPTION")){const S=n.split("~");c=S[1],d=S[2]}else c=n;const p=400-12*i;let h="",f="";const g=(l=e["::type"])!==null&&l!==void 0&&l.startsWith("xxx-of")?o:o+1,x=t==="xxx-of-option"||e["::type"]==="xxx-of-option"||n.startsWith("::OPTION")?i:i+1;if(e["::type"]==="object")t==="array"?(h=o<this.schemaExpandLevel?m`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`:m`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`,f="}]"):(h=o<this.schemaExpandLevel?m`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`:m`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`,f="}");else if(e["::type"]==="array")if(t==="array"){const S=r!=="object"?r:"";h=o<this.schemaExpandLevel?m`<span class="open-bracket array-of-array" data-array-type="${S}" @click="${this.toggleObjectExpand}">[[ ${S} </span>`:m`<span class="open-bracket array-of-array"  data-array-type="${S}" @click="${this.toggleObjectExpand}">[[...]]</span>`,f="]]"}else h=o<this.schemaExpandLevel?m`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`:m`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`,f="]";var v;if(typeof e=="object")return m`
        <div class="tr ${o<this.schemaExpandLevel||(v=e["::type"])!==null&&v!==void 0&&v.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}" title="${e["::deprecated"]?"Deprecated":""}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${p}px'>
            ${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"||n.startsWith("::OPTION")?m`<span class='key-label xxx-of-key'> ${c}</span><span class="xxx-of-descr">${d}</span>`:c==="::props"||c==="::ARRAY~OF"?"":o>0?m`<span class="key-label" title="${s==="readonly"?"Read-Only":s==="writeonly"?"Write-Only":""}">
                      ${e["::deprecated"]?"\u2717":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?m`<span style="color:var(--red)">*</span>`:""}${s==="readonly"?m` 🆁`:s==="writeonly"?m` 🆆`:s}:
                    </span>`:""}
            ${e["::type"]==="xxx-of"&&t==="array"?m`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
            ${h}
          </div>
          <div class='td key-descr m-markdown-small'>${Ae(Y(a||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"?0:12}px;'>
          ${Array.isArray(e)&&e[0]?m`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",g,x,e[0]["::readwrite"])}`:m`
              ${Object.keys(e).map(S=>m`
                ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel"].includes(S)?e[S]["::type"]==="array"||e[S]["::type"]==="object"?m`${this.generateTree(e[S]["::type"]==="array"?e[S]["::props"]:e[S],e[S]["::type"],e[S]["::array-type"]||"",S,e[S]["::description"],g,x,e[S]["::readwrite"]?e[S]["::readwrite"]:"")}`:"":m`${this.generateTree(e[S]["::type"]==="array"?e[S]["::props"]:e[S],e[S]["::type"],e[S]["::array-type"]||"",S,e[S]["::description"],g,x,e[S]["::readwrite"]?e[S]["::readwrite"]:"")}`}
              `)}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":m`<div class='close-bracket'> ${f} </div>`}
      `;const[u,O,A,T,j,$,P,b,k]=e.split("~|~");if(O==="\u{1F181}"&&this.schemaHideReadOnly==="true"||O==="\u{1F186}"&&this.schemaHideWriteOnly==="true")return;const E=u.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let w="",y="";return t==="array"?s==="readonly"?(w="\u{1F181}",y="Read-Only"):s==="writeonly"&&(w="\u{1F186}",y="Write-Only"):O==="\u{1F181}"?(w="\u{1F181}",y="Read-Only"):O==="\u{1F186}"&&(w="\u{1F186}",y="Write-Only"),m`
      <div class = "tr primitive" title="${k?"Deprecated":""}">
        <div class="td key ${k}" style='min-width:${p}px'>
          ${k?m`<span style='color:var(--red);'>✗</span>`:""}
          ${c.endsWith("*")?m`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:n.startsWith("::OPTION")?m`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${d}</span>`:m`<span class="key-label">${c}:</span>`}
          <span class="${E}" title="${y}"> 
            ${t==="array"?`[${u}]`:`${u}`}
            ${w}
          </span>
        </div>
        <div class='td key-descr'>
          ${t==="array"?m`<span class="m-markdown-small">${Ae(Y(a))}</span>`:""}
          ${P?m`<span class="m-markdown-small">
              ${Ae(Y(`${b?`**${b}:**`:""} ${P} ${A||T||j||$?'<span class="more-content">\u2935</span>':""}`))}
              </span>`:b?m`${b} ${A||T||j||$?m`<span class="more-content">⤵</span>`:""}`:""}
          ${A?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${A}</div>`:""}
          ${T?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${T}</div>`:""}
          ${j?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${j}</div>`:""}
          ${$?m`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?"{":"[")}}),customElements.define("tag-input",class extends St{render(){let e="";return Array.isArray(this.value)&&(e=m`${this.value.filter(t=>t.trim()!=="").map(t=>m`<span class='tag'>${t}</span>`)}`),m`
      <div class='tags' tabindex="0">
        ${e}
        <input type="text" class='editor' @paste="${t=>this.afterPaste(t)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){e==="value"&&r&&t!==r&&(this.value=r.split(",").filter(n=>n.trim()!=="")),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter(n=>n.trim()!==""):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){e.keyCode===13?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):e.keyCode===8&&e.target.value.length===0&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[B`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `]}}),customElements.define("api-request",class extends St{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},webhook:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[ta,un,mr,ea,Gi,ra,so,B`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `,hn]}render(){return m`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||this.callback==="true"?"read-mode":"view-mode"}">
      <div class=" ${this.callback==="true"?"tiny-title":"req-res-title"} "> 
        ${this.callback==="true"?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${Vi([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("path"))}
        ${Vi([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("query"))}
        ${this.requestBodyTemplate()}
        ${Vi([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("header"))}
        ${Vi([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],()=>this.inputParametersTemplate("cookie"))}
        ${this.allowTry==="false"?"":m`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}async saveExampleState(){this.renderStyle==="focused"&&([...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach(e=>{e.dataset.user_example=e.value}),[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach(e=>{e.dataset.user_example=e.value}),this.requestUpdate())}async updateExamplesFromDataAttr(){this.renderStyle==="focused"&&([...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach(e=>{e.value=e.dataset.user_example||e.dataset.example}),[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach(e=>{e.value=e.dataset.user_example||e.dataset.example}),this.requestUpdate())}renderExample(e,t,r){var n,a;return m`
      ${t==="array"?"[":""}
      <a
        part="anchor anchor-param-example"
        class="${this.allowTry==="true"?"":"inactive-link"}"
        data-example-type="${t==="array"?t:"string"}"
        data-example="${e.value&&Array.isArray(e.value)?(n=e.value)===null||n===void 0?void 0:n.join("~|~"):e.value||""}"
        @click="${o=>{const i=o.target.closest("table").querySelector(`[data-pname="${r}"]`);i&&(o.target.dataset.exampleType==="array"?i.value=o.target.dataset.example.split("~|~"):i.value=o.target.dataset.example)}}"
      >
        ${e.value&&Array.isArray(e.value)?(a=e.value)===null||a===void 0?void 0:a.join(", "):e.value||"\u2205"}
      </a>
      ${t==="array"?"] ":""}
    `}renderShortFormatExamples(e,t,r){return m`${e.map((n,a)=>m`
      ${a===0?"":"\u2503"}
      ${this.renderExample(n,t,r)}`)}`}renderLongFormatExamples(e,t,r){return m` <ul style="list-style-type: disclosure-closed;">
      ${e.map(n=>{var a,o;return m`
          <li>
            ${this.renderExample(n,t,r)}
            ${((a=n.summary)===null||a===void 0?void 0:a.length)>0?m`<span>&lpar;${n.summary}&rpar;</span>`:""}
            ${((o=n.description)===null||o===void 0?void 0:o.length)>0?m`<p>${Ae(Y(n.description))}</p>`:""}
          </li>
        `})}
    </ul>`}exampleListTemplate(e,t,r=[]){return m` ${r.length>0?m`<span style="font-weight:bold">Examples: </span>
          ${n=r,n.some(a=>{var o,i;return((o=a.summary)===null||o===void 0?void 0:o.length)>0||((i=a.description)===null||i===void 0?void 0:i.length)>0})?this.renderLongFormatExamples(r,t,e):this.renderShortFormatExamples(r,t,e)}`:""}`;var n}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter(a=>a.in===e):[];if(t.length===0)return"";let r="";e==="path"?r="PATH PARAMETERS":e==="query"?r="QUERY-STRING PARAMETERS":e==="header"?r="REQUEST HEADERS":e==="cookie"&&(r="COOKIES");const n=[];for(const a of t){const[o,i,s]=JI(a);if(!o)continue;const l=Pr(o);if(!l)continue;const c=it(o,{});let d="form",p=!0,h=!1;e==="query"&&(a.style&&"form spaceDelimited pipeDelimited".includes(a.style)?d=a.style:i&&(d=i),typeof a.explode=="boolean"&&(p=a.explode),typeof a.allowReserved=="boolean"&&(h=a.allowReserved));const f=tb(a.examples||Mp(a.example)||Mp(s?.example)||s?.examples||l.examples||Mp(l.example),l.type);f.exampleVal||l.type!=="object"||(f.exampleVal=Yn(o,i||"json","","",this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true",!0,"text")[0].exampleValue);const g="read focused".includes(this.renderStyle)?"200px":"160px";n.push(m`
      <tr title="${a.deprecated?"Deprecated":""}"> 
        <td rowspan="${this.allowTry==="true"?"1":"2"}" style="width:${g}; min-width:100px;">
          <div class="param-name ${a.deprecated?"deprecated":""}" >
            ${a.deprecated?m`<span style='color:var(--red);'>✗</span>`:""}
            ${a.required?m`<span style='color:var(--red)'>*</span>`:""}
            ${a.name}
          </div>
          <div class="param-type">
            ${l.type==="array"?`${l.arrayType}`:`${l.format?l.format:l.type}`}
          </div>
        </td>  
        ${this.allowTry==="true"?m`
            <td style="min-width:100px;" colspan="${l.default||l.constrain||l.allowedValues||l.pattern?"1":"2"}">
              ${l.type==="array"?m`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${a.name}"
                    data-example = "${Array.isArray(f.exampleVal)?f.exampleVal.join("~|~"):f.exampleVal}"
                    data-param-serialize-style = "${d}"
                    data-param-serialize-explode = "${p}"
                    data-param-allow-reserved = "${h}"
                    data-x-fill-example = "${a["x-fill-example"]||"yes"}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value="${a["x-fill-example"]==="no"?[]:Up(this.fillRequestFieldsWithExample==="true"?Array.isArray(f.exampleVal)?f.exampleVal:[f.exampleVal]:[])}"
                  >
                  </tag-input>`:l.type==="object"?m`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${x=>{if(x.target.tagName.toLowerCase()==="button"){const v={...this.activeParameterSchemaTabs};v[a.name]=x.target.dataset.tab,this.activeParameterSchemaTabs=v}}}">
                        <button class="tab-btn ${this.activeParameterSchemaTabs[a.name]==="example"?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${this.activeParameterSchemaTabs[a.name]!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${this.activeParameterSchemaTabs[a.name]==="example"?m`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${a.name}"
                            data-example = "${f.exampleVal}"
                            data-param-serialize-style = "${d}"
                            data-param-serialize-explode = "${p}"
                            data-param-allow-reserved = "${h}"
                            data-x-fill-example = "${a["x-fill-example"]||"yes"}"
                            spellcheck = "false"
                            .textContent="${a["x-fill-example"]==="no"?"":Up(this.fillRequestFieldsWithExample==="true"?f.exampleVal:"")}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                          ></textarea>
                        </div>`:m`
                          <div class="tab-content col">
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${c}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>`:m`
                    <input type="${l.format==="password"?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${a.name}" 
                      data-example="${Array.isArray(f.exampleVal)?f.exampleVal.join("~|~"):f.exampleVal}"
                      data-param-allow-reserved = "${h}"
                      data-x-fill-example = "${a["x-fill-example"]||"yes"}"
                      data-array="false"
                      .value="${a["x-fill-example"]==="no"?"":Up(this.fillRequestFieldsWithExample==="true"?f.exampleVal:"")}"
                    />`}
            </td>`:""}
        ${l.default||l.constrain||l.allowedValues||l.pattern?m`
            <td colspan="${this.allowTry==="true"?"1":"2"}">
              <div class="param-constraint">
                ${l.default?m`<span style="font-weight:bold">Default: </span>${l.default}<br/>`:""}
                ${l.pattern?m`<span style="font-weight:bold">Pattern: </span>${l.pattern}<br/>`:""}
                ${l.constrain?m`${l.constrain}<br/>`:""}
                ${l.allowedValues&&l.allowedValues.split("\u2503").map((x,v)=>m`
                  ${v>0?"\u2503":m`<span style="font-weight:bold">Allowed: </span>`}
                  ${m`
                    <a part="anchor anchor-param-constraint" class = "${this.allowTry==="true"?"":"inactive-link"}"
                      data-type="${l.type==="array"?l.type:"string"}"
                      data-enum="${x.trim()}"
                      @click="${u=>{const O=u.target.closest("table").querySelector(`[data-pname="${a.name}"]`);O&&(u.target.dataset.type==="array"?O.value=[u.target.dataset.enum]:O.value=u.target.dataset.enum)}}"
                    >${x}</a>`}`)}
              </div>
            </td>`:m`<td></td>`}
      </tr>
      <tr>
        ${this.allowTry==="true"?m`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${Ae(Y(a.description||""))}</span>
          ${this.exampleListTemplate.call(this,a.name,l.type,f.exampleList)}
        </td>
      </tr>
    `)}return m`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table class="m-table" style="width:100%; word-break:break-word;">
        ${n}
      </table>
    </div>`}async beforerNavigationFocusedMode(){}async afterNavigationFocusedMode(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.updateExamplesFromDataAttr(),this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout(r=>{const n=r.closest(".example-panel").querySelector(".request-body-param");r.closest(".example-panel").querySelector(".request-body-param-user-input").value=n.innerText},0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout(r=>{const n=r.closest(".request-body-container").querySelector(".request-body-param");n&&(r.closest(".request-body-container").querySelector(".request-body-param-user-input").value=n.innerText)},0,t)}requestBodyTemplate(){if(!this.request_body||Object.keys(this.request_body).length===0)return"";let e="",t="",r="",n="",a="";const o=[],{content:i}=this.request_body;for(const s in i)o.push({mimeType:s,schema:i[s].schema,example:i[s].example,examples:i[s].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=s);return e=o.length===1?"":m`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${s=>this.onMimeTypeChange(s)}'>
          ${o.map(s=>m`
            <option value = '${s.mimeType}' ?selected = '${s.mimeType===this.selectedRequestBodyType}'>
              ${s.mimeType}
            </option> `)}
        </select>
      `,o.forEach(s=>{let l,c=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))s.mimeType===this.selectedRequestBodyType&&(c=Yn(s.schema,s.mimeType,s.examples,s.example,this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true","text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=c.length>0?c[0].exampleId:""),a=m`
            ${a}
            <div class = 'example-panel border-top pad-top-8'>
              ${c.length===1?"":m`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${d=>this.onSelectExample(d)}'>
                    ${c.map(d=>m`<option value="${d.exampleId}" ?selected=${d.exampleId===this.selectedRequestBodyExample} > 
                      ${d.exampleSummary.length>80?d.exampleId:d.exampleSummary?d.exampleSummary:d.exampleId} 
                    </option>`)}
                  </select>
                `}
              ${c.filter(d=>d.exampleId===this.selectedRequestBodyExample).map(d=>m`
                <div class="example ${d.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${d.exampleId}'>
                  ${d.exampleSummary&&d.exampleSummary.length>80?m`<div style="padding: 4px 0"> ${d.exampleSummary} </div>`:""}
                  ${d.exampleDescription?m`<div class="m-markdown-small" style="padding: 4px 0"> ${Ae(Y(d.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${s.mimeType.substring(s.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${s.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${d.exampleFormat==="text"?d.exampleValue:JSON.stringify(d.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${s.mimeType}" 
                    data-example = "${d.exampleFormat==="text"?d.exampleValue:JSON.stringify(d.exampleValue,null,2)}"
                    data-example-format = "${d.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${this.fillRequestFieldsWithExample==="true"?d.exampleFormat==="text"?d.exampleValue:JSON.stringify(d.exampleValue,null,2):""}"
                  ></textarea>
                </div>  
              `)}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(s.mimeType===this.selectedRequestBodyType){const d=Yn(s.schema,s.mimeType,s.examples,s.example,this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true","text",!1);s.schema&&(r=this.formDataTemplate(s.schema,s.mimeType,d[0]?d[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&s.mimeType===this.selectedRequestBodyType&&(t=m`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${s.mimeType}" spellcheck="false" />
            </div>  
          `);(s.mimeType.includes("json")||s.mimeType.includes("xml")||s.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(l=it(s.schema,{}),this.schemaStyle==="table"?n=m`
            ${n}
            <schema-table
              class = '${s.mimeType.substring(s.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===s.mimeType?"block":"none"};'
              .data = '${l}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `:this.schemaStyle==="tree"&&(n=m`
            ${n}
            <schema-tree
              class = "${s.mimeType.substring(s.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===s.mimeType?"block":"none"};"
              .data = "${l}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `))}),m`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?m`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?m`<div class="m-markdown" style="margin-bottom:12px">${Ae(Y(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?m`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${s=>{s.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=s.target.dataset.tab)}}">
                <button class="tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${m`<div class="tab-content col" style="display:${this.activeSchemaTab==="example"?"block":"none"};"> ${a}</div>`}
              ${m`<div class="tab-content col" style="display:${this.activeSchemaTab==="example"?"none":"block"};"> ${n}</div>`}
            </div>`:m`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var n;const a=it(t,{}),o=Yn(t,"json",t.examples,t.example,this.callback==="true"||this.webhook==="true",this.callback!=="true"&&this.webhook!=="true","text",!1);return m`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${i=>{if(i.target.classList.contains("v-tab-btn")){const{tab:s}=i.target.dataset;if(s){const l=i.target.closest(".tab-panel"),c=l.querySelector(`.v-tab-btn[data-tab="${s}"]`),d=[...l.querySelectorAll(`.v-tab-btn:not([data-tab="${s}"])`)],p=l.querySelector(`.tab-content[data-tab="${s}"]`),h=[...l.querySelectorAll(`.tab-content:not([data-tab="${s}"])`)];c.classList.add("active"),p.style.display="block",d.forEach(f=>{f.classList.remove("active")}),h.forEach(f=>{f.style.display="none"})}}i.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=i.target.dataset.tab)}}">
          <button class="v-tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${m`
        <div class="tab-content col" data-tab = 'example' style="display:${this.activeSchemaTab==="example"?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${((n=o[0])===null||n===void 0?void 0:n.exampleValue)||""}"
            .textContent = "${this.fillRequestFieldsWithExample==="true"?o[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
        </div>`}
      ${m`
        <div class="tab-content col" data-tab = 'schema' style="display:${this.activeSchemaTab!=="example"?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${a}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const n=[];if(e.properties){for(const i in e.properties){var a,o;const s=e.properties[i];if(s.readOnly)continue;const l=s.examples||s.example||"",c=s.type,d=Pr(s),p="read focused".includes(this.renderStyle)?"200px":"160px",h=tb(d.examples||d.example,d.type);n.push(m`
        <tr title="${s.deprecated?"Deprecated":""}"> 
          <td style="width:${p}; min-width:100px;">
            <div class="param-name ${s.deprecated?"deprecated":""}">
              ${i}${(a=e.required)!==null&&a!==void 0&&a.includes(i)||s.required?m`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${d.type}</div>
          </td>  
          <td 
            style="${c==="object"?"width:100%; padding:0;":this.allowTry==="true"?"":"display:none;"} min-width:100px;" 
            colspan="${c==="object"?2:1}">
            ${c==="array"?((o=s.items)===null||o===void 0?void 0:o.format)==="binary"?m`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${f=>this.onAddRemoveFileInput(f,i,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${i}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:m`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${i}"
                    data-example = "${Array.isArray(l)?l.join("~|~"):l}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(l)?Array.isArray(l[0])?l[0]:[l[0]]:[l]}"
                  >
                  </tag-input>
                `:m`
                ${c==="object"?this.formDataParamAsObjectTemplate.call(this,i,s,t):m`
                    ${this.allowTry==="true"?m`<input
                          .value = "${this.fillRequestFieldsWithExample==="true"?h.exampleVal:""}"
                          spellcheck = "false"
                          type = "${s.format==="binary"?"file":s.format==="password"?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${i}"
                          data-example = "${Array.isArray(l)?l[0]:l}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${c==="object"?"":m`
              <td>
                ${d.default||d.constrain||d.allowedValues||d.pattern?m`
                    <div class="param-constraint">
                      ${d.default?m`<span style="font-weight:bold">Default: </span>${d.default}<br/>`:""}
                      ${d.pattern?m`<span style="font-weight:bold">Pattern: </span>${d.pattern}<br/>`:""}
                      ${d.constrain?m`${d.constrain}<br/>`:""}
                      ${d.allowedValues&&d.allowedValues.split("\u2503").map((f,g)=>m`
                        ${g>0?"\u2503":m`<span style="font-weight:bold">Allowed: </span>`}
                        ${m`
                          <a part="anchor anchor-param-constraint" class = "${this.allowTry==="true"?"":"inactive-link"}"
                            data-type="${d.type==="array"?d.type:"string"}"
                            data-enum="${f.trim()}"
                            @click="${x=>{const v=x.target.closest("table").querySelector(`[data-pname="${i}"]`);v&&(x.target.dataset.type==="array"?v.value=[x.target.dataset.enum]:v.value=x.target.dataset.enum)}}"
                          > 
                            ${f} 
                          </a>`}`)}
                    </div>`:""}
              </td>`}
        </tr>
        ${c==="object"?"":m`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${Ae(Y(s.description||""))}</span>
                ${this.exampleListTemplate.call(this,i,d.type,h.exampleList)}
              </td>
            </tr>
          `}`)}return m`
        <table style="width:100%;" class="m-table">
          ${n}
        </table>
      `}return m`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?m`<span class="m-markdown-small">${Ae(Y(e.description))}</span>`:""}
    `}apiResponseTabTemplate(){let e="",t="";if(!this.responseIsBlob)if(this.responseHeaders.includes("application/x-ndjson")){e="json";const r=this.responseText.split(`
`).map(n=>Ze().highlight(n,Ze().languages[e],e)).join(`
`);t=m`<code>${Ae(r)}</code>`}else this.responseHeaders.includes("json")?(e="json",t=m`<code>${Ae(Ze().highlight(this.responseText,Ze().languages[e],e))}</code>`):this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?(e="html",t=m`<code>${Ae(Ze().highlight(this.responseText,Ze().languages[e],e))}</code>`):(e="text",t=m`<code>${this.responseText}</code>`);return m`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${r=>{r.target.classList.contains("tab-btn")!==!1&&(this.activeResponseTab=r.target.dataset.tab)}}">
          <button class="tab-btn ${this.activeResponseTab==="response"?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${this.activeResponseTab==="headers"?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${this.activeResponseTab==="curl"?"active":""}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob?m`
            <div class="tab-content col" style="flex:1; display:${this.activeResponseTab==="response"?"flex":"none"};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${r=>{sd(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${this.responseBlobType==="view"?m`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${r=>{ld(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:m`
            <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab==="response"?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${r=>{aa(this.responseText,r)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto">${t}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab==="headers"?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${r=>{aa(this.responseHeaders,r)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${Ae(Ze().highlight(this.responseHeaders,Ze().languages.css,"css"))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab==="curl"?"flex":"none"};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${r=>{aa(this.curlSyntax.replace(/\\$/,""),r)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${Ae(Ze().highlight(this.curlSyntax.trim().replace(/\\$/,""),Ze().languages.shell,"shell"))}</code></pre>
        </div>
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=m`
        <select style="min-width:100px;" @change='${a=>{this.serverUrl=a.target.value}}'>
          ${this.servers.map(a=>m`<option value = "${a.url}"> ${a.url} - ${a.description} </option>`)}
        </select>
      `);const n=m`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?m`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return m`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${n}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${((e=this.security)===null||e===void 0?void 0:e.length)>0?m`
              ${this.api_keys.length>0?m`<div style="color:var(--blue); overflow:hidden;"> 
                    ${this.api_keys.length===1?`${(t=this.api_keys[0])===null||t===void 0?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:m`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:m`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length>0||this.request_body?m`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    ${this.responseMessage===""?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(t=>{t.dataset.example&&(t.tagName.toUpperCase()==="TAG-INPUT"?t.value=t.dataset.example.split("~|~"):t.value=t.dataset.example)})}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach(t=>{t.value=""})}async onTryClick(e){var t;const r=e.target;let n,a,o="",i="",s="",l="";const c=(t=this.closest(".expanded-req-resp-container, .req-resp-container"))===null||t===void 0?void 0:t.getElementsByTagName("api-response")[0],d=c?.selectedMimeType,p=e.target.closest(".request-panel"),h=[...p.querySelectorAll("[data-ptype='path']")],f=[...p.querySelectorAll("[data-ptype='query']")],g=[...p.querySelectorAll("[data-ptype='query-object']")],x=[...p.querySelectorAll("[data-ptype='header']")],v=p.querySelector(".request-body-container");n=this.path;const u={method:this.method.toUpperCase()};h.map(w=>{n=n.replace(`{${w.dataset.pname}}`,encodeURIComponent(w.value))});const O=new Map,A=[];f.length>0&&f.forEach(w=>{const y=new URLSearchParams;if(w.dataset.paramAllowReserved==="true"&&A.push(w.dataset.pname),w.dataset.array==="false")w.value!==""&&y.append(w.dataset.pname,w.value);else{const{paramSerializeStyle:S,paramSerializeExplode:L}=w.dataset;let z=w.value&&Array.isArray(w.value)?w.value:[];z=Array.isArray(z)?z.filter(V=>V!==""):[],z.length>0&&(S==="spaceDelimited"?y.append(w.dataset.pname,z.join(" ").replace(/^\s|\s$/g,"")):S==="pipeDelimited"?y.append(w.dataset.pname,z.join("|").replace(/^\||\|$/g,"")):L==="true"?z.forEach(V=>{y.append(w.dataset.pname,V)}):y.append(w.dataset.pname,z.join(",").replace(/^,|,$/g,"")))}y.toString()&&O.set(w.dataset.pname,y)}),g.length>0&&g.map(w=>{const y=new URLSearchParams;try{let S={};const{paramSerializeStyle:L,paramSerializeExplode:z}=w.dataset;if(S=Object.assign(S,JSON.parse(w.value.replace(/\s+/g," "))),w.dataset.paramAllowReserved==="true"&&A.push(w.dataset.pname),"json xml".includes(L))L==="json"?y.append(w.dataset.pname,JSON.stringify(S)):L==="xml"&&y.append(w.dataset.pname,Hp(S));else for(const V in S)typeof S[V]=="object"?Array.isArray(S[V])&&(L==="spaceDelimited"?y.append(V,S[V].join(" ")):L==="pipeDelimited"?y.append(V,S[V].join("|")):z==="true"?S[V].forEach(_=>{y.append(V,_)}):y.append(V,S[V])):y.append(V,S[V])}catch{console.log("RapiDoc: unable to parse %s into object",w.value)}y.toString()&&O.set(w.dataset.pname,y)});let T="";O.size&&(T="?",O.forEach((w,y)=>{A.includes(y)?(T+=`${y}=`,T+=w.getAll(y).join(`&${y}=`),T+="&"):T+=`${w.toString()}&`}),T=T.slice(0,-1)),n=`${n}${T}`,this.api_keys.filter(w=>w.in==="query").forEach(w=>{n=`${n}${n.includes("?")?"&":"?"}${w.name}=${encodeURIComponent(w.finalKeyValue)}`}),n=`${this.serverUrl.replace(/\/$/,"")}${n}`,n.startsWith("http")===!1?a=new URL(n,window.location.href).href:a=n,o=`curl -X ${this.method.toUpperCase()} "${a}" \\
`;const j=new Headers;if(d?(j.append("Accept",d),i+=` -H "Accept: ${d}" \\
`):this.accept&&(j.append("Accept",this.accept),i+=` -H "Accept: ${this.accept}" \\
`),this.api_keys.filter(w=>w.in==="header").forEach(w=>{j.append(w.name,w.finalKeyValue),i+=` -H "${w.name}: ${w.finalKeyValue}" \\
`}),x.map(w=>{w.value&&(j.append(w.dataset.pname,w.value),i+=` -H "${w.dataset.pname}: ${w.value}" \\
`)}),v){const w=v.dataset.selectedRequestBodyType;if(w.includes("form-urlencoded")){const y=p.querySelector("[data-ptype='dynamic-form']");if(y){const S=y.value,L=new URLSearchParams;let z,V=!0;if(S)try{z=JSON.parse(S)}catch(_){V=!1,console.warn("RapiDoc: Invalid JSON provided",_)}else V=!1;if(V){for(const _ in z)L.append(_,JSON.stringify(z[_]));u.body=L,s=` -d ${L.toString()} \\
`}}else{const S=[...p.querySelectorAll("[data-ptype='form-urlencode']")],L=new URLSearchParams;S.filter(z=>z.type!=="file").forEach(z=>{if(z.dataset.array==="false")z.value&&L.append(z.dataset.pname,z.value);else{const V=z.value&&Array.isArray(z.value)?z.value.join(","):"";L.append(z.dataset.pname,V)}}),u.body=L,s=` -d ${L.toString()} \\
`}}else if(w.includes("form-data")){const y=new FormData;[...p.querySelectorAll("[data-ptype='form-data']")].forEach(S=>{S.dataset.array==="false"?S.type==="file"&&S.files[0]?(y.append(S.dataset.pname,S.files[0],S.files[0].name),l+=` -F "${S.dataset.pname}=@${S.files[0].name}" \\
`):S.value&&(y.append(S.dataset.pname,S.value),l+=` -F "${S.dataset.pname}=${S.value}" \\
`):S.value&&Array.isArray(S.value)&&(S.value.forEach(L=>{l=`${l} -F "${S.dataset.pname}[]=${L}" \\
`}),y.append(S.dataset.pname,S.value.join(",")))}),u.body=y}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(w)){const y=p.querySelector(".request-body-param-file");y!=null&&y.files[0]&&(u.body=y.files[0],s=` --data-binary @${y.files[0].name} \\
`)}else if(w.includes("json")||w.includes("xml")||w.includes("text")){const y=p.querySelector(".request-body-param-user-input");if(y!=null&&y.value){if(u.body=y.value,w.includes("json"))try{s=` -d '${JSON.stringify(JSON.parse(y.value))}' \\
`}catch{}s||(s=` -d '${y.value.replace(/'/g,`'"'"'`)}' \\
`)}}w.includes("form-data")||j.append("Content-Type",w),i+=` -H "Content-Type: ${w}" \\
`}this.responseUrl="",this.responseHeaders=[],this.curlSyntax="",this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.curlSyntax=`${o}${i}${s}${l}`,this.fetchCredentials&&(u.credentials=this.fetchCredentials);const $=new AbortController,{signal:P}=$;u.headers=j;const b=new Request(n,u);let k,E;this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:b,controller:$}}));try{let w,y,S;r.disabled=!0,this.responseText="\u231B",this.responseMessage="",this.requestUpdate();const L=performance.now();k=await fetch(b,{signal:P});const z=performance.now();E=k.clone(),r.disabled=!1,this.responseMessage=m`${k.statusText?`${k.statusText}:${k.status}`:k.status} <div style="color:var(--light-fg)"> Took ${Math.round(z-L)} milliseconds </div>`,this.responseUrl=k.url;const V={};k.headers.forEach((C,U)=>{V[U]=C,this.responseHeaders=`${this.responseHeaders}${U}: ${C}
`});const _=k.headers.get("content-type");if((await k.clone().text()).length===0)this.responseText="";else if(_){if(_==="application/x-ndjson")this.responseText=await k.text();else if(_.includes("json"))if(/charset=[^"']+/.test(_)){const C=_.split("charset=")[1],U=await k.arrayBuffer();try{S=new TextDecoder(C).decode(U)}catch{S=new TextDecoder("utf-8").decode(U)}try{y=JSON.parse(S),this.responseText=JSON.stringify(y,null,2)}catch{this.responseText=S}}else y=await k.json(),this.responseText=JSON.stringify(y,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(_)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^audio|^image|^video/.test(_)?(this.responseIsBlob=!0,this.responseBlobType="view"):(S=await k.text(),_.includes("xml")?this.responseText=GI()(S,{textNodesOnSameLine:!0,indentor:"  "}):this.responseText=S);if(this.responseIsBlob){const C=k.headers.get("content-disposition");this.respContentDisposition=C?C.split("filename=")[1].replace(/"|'/g,""):"filename",w=await k.blob(),this.responseBlobUrl=URL.createObjectURL(w)}}else S=await k.text(),this.responseText=S;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:b,response:E,responseHeaders:V,responseBody:y||S||w,responseStatus:E.ok}}))}catch(w){r.disabled=!1,w.name==="AbortError"?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:w,request:b}})),this.responseMessage="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:w,request:b}})),this.responseMessage=`${w.message} (CORS or Network Issue)`)}this.requestUpdate()}onAddRemoveFileInput(e,t,r){if(e.target.tagName.toLowerCase()!=="button")return;if(e.target.classList.contains("file-input-remove-btn"))return void e.target.closest(".input-set").remove();const n=e.target.closest(".file-input-container"),a=document.createElement("div");a.setAttribute("class","input-set row");const o=document.createElement("input");o.type="file",o.style="width:200px; margin-top:2px;",o.setAttribute("data-pname",t),o.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),o.setAttribute("data-array","false"),o.setAttribute("data-file-array","true");const i=document.createElement("button");i.setAttribute("class","file-input-remove-btn"),i.innerHTML="&#x2715;",a.appendChild(o),a.appendChild(i),n.insertBefore(a,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}}),customElements.define("schema-table",class extends St{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[mr,ob,B`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`,hn]}render(){var e,t,r;return m`
      <div class="table ${this.schemaDescriptionExpanded==="true"?"expanded-descr":"collapsed-descr"}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${((e=this.data)===null||e===void 0?void 0:e["::type"])||""} "> ${((t=this.data)===null||t===void 0?void 0:t["::type"])||""} </div>
          ${this.allowSchemaDescriptionExpandToggle==="true"?m`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item' @click='${()=>{this.schemaDescriptionExpanded=this.schemaDescriptionExpanded==="true"?"false":"true"}}'> 
                ${this.schemaDescriptionExpanded==="true"?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        ${(r=this.data)!==null&&r!==void 0&&r["::description"]?m`<span part="schema-description" class='m-markdown'> ${Ae(Y(this.data["::description"]||""))}</span>`:""}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?m`
              ${this.generateTree(this.data["::type"]==="array"?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",n="",a="",o=0,i=0,s=""){var l,c;if(this.schemaHideReadOnly==="true"&&(t==="array"&&s==="readonly"||e&&e["::readwrite"]==="readonly")||this.schemaHideWriteOnly==="true"&&(t==="array"&&s==="writeonly"||e&&e["::readwrite"]==="writeonly"))return;if(!e)return m`<div class="null" style="display:inline;">
        <span style='margin-left:${16*(o+1)}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${n.replace("::OPTION~","")}</span>
        ${t==="array"?m`<span class='mono-font'> [ ] </span>`:t==="object"?m`<span class='mono-font'> { } </span>`:m`<span class='mono-font'> schema undefined </span>`}
      </div>`;const d=(l=e["::type"])!==null&&l!==void 0&&l.startsWith("xxx-of")?o:o+1,p=t==="xxx-of-option"||e["::type"]==="xxx-of-option"||n.startsWith("::OPTION")?i:i+1,h=16*p;if(Object.keys(e).length===0)return m`<span class="td key object" style='padding-left:${h}px'>${n}</span>`;let f="",g="",x=!1;if(n.startsWith("::ONE~OF")||n.startsWith("::ANY~OF"))f=n.replace("::","").replace("~"," "),x=!0;else if(n.startsWith("::OPTION")){const y=n.split("~");f=y[1],g=y[2]}else f=n;let v="";if(e["::type"]==="object"?v=t==="array"?"array of object":e["::dataTypeLabel"]||e["::type"]:e["::type"]==="array"&&(v=t==="array"?"array of array "+(r!=="object"?`of ${r}`:""):e["::dataTypeLabel"]||e["::type"]),typeof e=="object")return m`
        ${d>=0&&n?m`
            <div class='tr ${d<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${f}' title="${e["::deprecated"]?"Deprecated":""}">
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${h}px'>
                ${f||g?m`
                    <span 
                      class='obj-toggle ${d<this.schemaExpandLevel?"expanded":"collapsed"}'
                      data-obj='${f}'
                      @click= ${y=>this.toggleObjectExpand(y,f)} 
                    >
                      ${o<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${e["::type"]==="xxx-of-option"||e["::type"]==="xxx-of-array"||n.startsWith("::OPTION")?m`<span class="xxx-of-key" style="margin-left:-6px">${f}</span><span class="${x?"xxx-of-key":"xxx-of-descr"}">${g}</span>`:f.endsWith("*")?m`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"\u2717":""} ${f.substring(0,f.length-1)}</span><span style='color:var(--red);'>*</span>`:m`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"\u2717":""} ${f==="::props"?"":f}</span>`}
                ${e["::type"]==="xxx-of"&&t==="array"?m`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${e["::readwrite"]==="readonly"?"Read-Only":e["::readwrite"]==="writeonly"?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":v}
                ${e["::readwrite"]==="readonly"?" \u{1F181}":e["::readwrite"]==="writeonly"?" \u{1F186}":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${Ae(Y(a||""))}</div>
            </div>`:m`
              ${e["::type"]==="array"&&t==="array"?m`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'>
                      ${r&&r!=="object"?`${t} of ${r}`:t}
                    </div> 
                    <div class='td key-descr'></div> 
                  </div>`:""}
          `}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?m`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",d,p,"")}`:m`
            ${Object.keys(e).map(y=>m`
              ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel"].includes(y)?e[y]["::type"]==="array"||e[y]["::type"]==="object"?m`${this.generateTree(e[y]["::type"]==="array"?e[y]["::props"]:e[y],e[y]["::type"],e[y]["::array-type"]||"",y,e[y]["::description"],d,p,e[y]["::readwrite"]?e[y]["::readwrite"]:"")}`:"":m`${this.generateTree(e[y]["::type"]==="array"?e[y]["::props"]:e[y],e[y]["::type"],e[y]["::array-type"]||"",y,e[y]["::description"],d,p,e[y]["::readwrite"]?e[y]["::readwrite"]:"")}`}
            `)}
          `}
        <div>
      `;const[u,O,A,T,j,$,P,b,k]=e.split("~|~");if(O==="\u{1F181}"&&this.schemaHideReadOnly==="true"||O==="\u{1F186}"&&this.schemaHideWriteOnly==="true")return;const E=u.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase();let w="";return w=t==="array"?m` 
        <div class='td key-type ${E}' title="${s==="readonly"?"Read-Only":O==="writeonly"?"Write-Only":""}">
          [${u}] ${s==="readonly"?"\u{1F181}":s==="writeonly"?"\u{1F186}":""}
        </div>`:m` 
        <div class='td key-type ${E}' title="${O==="\u{1F181}"?"Read-Only":O==="\u{1F186}"?"Write-Only":""}">
          ${u} ${O}
        </div>`,m`
      <div class = "tr primitive" title="${k?"Deprecated":""}">
        <div class="td key ${k}" style='padding-left:${h}px'>
          ${k?m`<span style='color:var(--red);'>✗</span>`:""}
          ${(c=f)!==null&&c!==void 0&&c.endsWith("*")?m`
              <span class="key-label">${f.substring(0,f.length-1)}</span>
              <span style='color:var(--red);'>*</span>`:n.startsWith("::OPTION")?m`<span class='xxx-of-key'>${f}</span><span class="xxx-of-descr">${g}</span>`:m`${f?m`<span class="key-label"> ${f}</span>`:m`<span class="xxx-of-descr">${b}</span>`}`}
        </div>
        ${w}
        <div class='td key-descr' @click="${()=>{this.schemaDescriptionExpanded="true"}}">
          ${t==="array"?m`<span class="m-markdown-small">${Ae(Y(a))}</span>`:""}
          ${P?m`<span class="m-markdown-small">
              ${Ae(Y(`${b?`**${b}:**`:""} ${P} ${A||T||j||$?'<span  class="more-content">\u2935</span>':""}`))}
              </span>`:b?m`${b} ${A||T||j||$?m`<span class="more-content">⤵</span>`:""}`:""}
          ${A?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${A}</div>`:""}
          ${T?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${T}</div>`:""}
          ${j?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${j}</div>`:""}
          ${$?m`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}});function YI(e){const t=new Y.Renderer;return t.heading=(r,n,a,o)=>`<h${n} class="observe-me" id="${e}--${o.slug(a)}">${r}</h${n}>`,t}function Vp(e,t=""){var r,n,a;const o=new Set;for(const p in e.responses)for(const h in(i=e.responses[p])===null||i===void 0?void 0:i.content){var i;o.add(h.trim())}const s=[...o].join(", "),l=this.resolvedSpec.securitySchemes.filter(p=>{var h;return p.finalKeyValue&&((h=e.security)===null||h===void 0?void 0:h.some(f=>p.securitySchemeId in f))})||[],c=this.resolvedSpec.securitySchemes.find(p=>p.securitySchemeId===Fr&&p.value!=="-");c&&l.push(c);const d=e.xCodeSamples?Xv.call(this,e.xCodeSamples):"";return m`
    ${this.renderStyle==="read"?m`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
      ${this.renderStyle==="focused"&&t!=="General \u2982"?m`<h3 class="upper" style="font-weight:bold" part="section-operation-tag"> ${t} </h3>`:""}
      ${e.deprecated?m`<div class="bold-text red-text"> DEPRECATED </div>`:""}
      ${m`
        ${e.xBadges&&((r=e.xBadges)===null||r===void 0?void 0:r.length)>0?m`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${e.xBadges.map(p=>m`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${p.color}, var(--input-bg)); color:var(--${p.color}); border:1px solid var(--${p.color})">${p.label}</span>`)}
            </div>
            `:""}
        <h2 part="section-operation-summary"> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
        ${e.isWebhook?m`<span part="section-operation-webhook style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:m`
            <div class='mono-font part="section-operation-webhook-method" regular-font-size' style='text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)'> 
              <span part="label-operation-method" class='regular-font upper method-fg bold-text ${e.method}'>${e.method}</span> 
              <span part="label-operation-path">${e.path}</span>
            </div>
          `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?m`<div class="m-markdown"> ${Ae(Y(e.description))}</div>`:""}
      ${Qv.call(this,e.security)}
      ${d}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${l}"
          .servers = "${e.servers}"
          server-url = "${((n=e.servers)===null||n===void 0||(a=n[0])===null||a===void 0?void 0:a.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${s}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${e.callbacks?eb.call(this,e.callbacks):""}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          .responses = "${e.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"||e.isWebhook?"false":"true"}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `}function ZI(){return this.resolvedSpec?m`
  ${this.resolvedSpec.tags.map(e=>m`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${Ae(`
          <div class="m-markdown regular-font">
          ${Y(e.description||"",this.infoDescriptionHeadingsInNavBar==="true"?{renderer:YI(e.elementId)}:void 0)}
        </div>`)}
      </div>
    </section>
    <section class='regular-font section-gap--read-mode' part="section-operations-in-tag">
      ${e.paths.map(t=>Vp.call(this,t,"BBB"))}
    </section>
    `)}
`:""}function QI(e){return m`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${this.schemaStyle==="table"?m`
      <schema-table
        render-style = '${this.renderStyle}'
        .data = '${it(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree> `:m`
      <schema-tree
        render-style = '${this.renderStyle}'
        .data = '${it(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`}function XI(e,t){return e.id.indexOf("schemas-")!==-1?QI.call(this,e):m`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${m`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?m`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function eP(){return this.resolvedSpec?m`
  ${this.resolvedSpec.components.map(e=>m`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${Ae(`<div class='m-markdown regular-font'>${Y(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter(t=>t.expanded!==!1).map(t=>XI.call(this,t,e.name))}
    </div>
    `)}
`:""}function tP(){const e=new Y.Renderer;return e.heading=(t,r,n,a)=>`<h${r} class="observe-me" id="overview--${a.slug(n)}">${t}</h${r}>`,e}function Yi(){var e,t,r,n;return m`
    <section id="overview" part="section-overview"
      class="observe-me ${this.renderStyle==="view"?"section-gap":"section-gap--read-mode"}">
      ${(e=this.resolvedSpec)!==null&&e!==void 0&&e.info?m`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?m`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${(t=this.resolvedSpec.info.contact)!==null&&t!==void 0&&t.email?m`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${(r=this.resolvedSpec.info.contact)!==null&&r!==void 0&&r.url?m`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?m`<span>License: 
                ${this.resolvedSpec.info.license.url?m`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?m`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&this.allowSpecFileDownload==="true"?m`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${a=>{sd(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${(n=this.specUrl)!==null&&n!==void 0&&n.trim().toLowerCase().endsWith("json")?m`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${a=>{ld(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?m`${Ae(`
                <div class="m-markdown regular-font">
                ${Y(this.resolvedSpec.info.description,this.infoDescriptionHeadingsInNavBar==="true"?{renderer:tP()}:void 0)}
              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function Gp(e){var t;const r=(t=this.resolvedSpec)===null||t===void 0?void 0:t.servers.find(n=>n.url===e);return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function ib(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let n=t.url;r.forEach(a=>{const o=new RegExp(`{${a.dataset.var}}`,"g");n=n.replace(o,a.value)}),t.computedUrl=n,this.requestUpdate()}function rP(){return this.selectedServer&&this.selectedServer.variables?m`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table'>
      ${Object.entries(this.selectedServer.variables).map(e=>m`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?m`
            <select
              data-var = "${e[0]}"
              @input = ${t=>{ib.call(this,t,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map(t=>e[1].default===t[1]?m`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:m`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`)}
            </select>`:m`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${t=>{ib.call(this,t,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?m`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${Ae(Y(e[1].description))} </span></td></tr>`:""}
      `)}
    </table>
    `:""}function sb(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":m`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&((e=this.resolvedSpec.servers)===null||e===void 0?void 0:e.length)!==0?m`
          ${(t=this.resolvedSpec)===null||t===void 0?void 0:t.servers.map((n,a)=>m`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${a}'
              value = '${n.url}'
              @change = ${()=>{Gp.call(this,n.url)}}
              .checked = '${this.selectedServer.url===n.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${a}'>
                ${n.url} ${n.description?m`- <span class='regular-font'>${n.description} </span>`:""}
              </label>
            <br/>
          `)}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${((r=this.selectedServer)===null||r===void 0?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${rP.call(this)}
  </section>`}function lb(e,t="toggle"){const r=e?.closest(".nav-bar-tag-and-paths");if(r){const n=r.classList.contains("expanded");!n||t!=="toggle"&&t!=="collapse"?n||t!=="toggle"&&t!=="expand"||r.classList.replace("collapsed","expanded"):r.classList.replace("expanded","collapsed")}}function cb(e){lb(e.target,"toggle")}function pb(e,t="expand-all"){(function(r,n="expand-all"){const a=[...r.querySelectorAll(".nav-bar-tag-and-paths")];n==="expand-all"?a.map(o=>{o.classList.replace("collapsed","expanded")}):a.map(o=>{o.classList.replace("expanded","collapsed")})})(e.target.closest(".nav-scroll"),t)}function nP(){var e,t,r,n;return!this.resolvedSpec||this.resolvedSpec.specLoadError?m`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `:m`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${this.allowSearch==="false"&&this.allowAdvancedSearch==="false"?"":m`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${this.allowAdvancedSearch==="false"?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}" part="section-navbar-search">
          ${this.allowSearch==="false"?"":m`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths?m`
                  <button @click = '${this.onClearSearch}' class="m-btn thin-border" style="margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;" part="btn btn-outline btn-clear-filter">
                    CLEAR
                  </button>`:""}
            `}
          ${this.allowAdvancedSearch==="false"||this.matchPaths?"":m`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px; padding:6px 8px; width:75px" @click="${this.onShowSearchModalClicked}">
                SEARCH
              </button>
            `}
        </div>
      `}
    ${m`<nav class='nav-scroll' part="section-navbar-scroll">
      ${this.showInfo!=="false"&&this.resolvedSpec.info?m`
          ${this.infoDescriptionHeadingsInNavBar==="true"?m`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?m`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${a=>this.scrollToEventTarget(a,!1)}'> 
                    ${((e=this.resolvedSpec.info)===null||e===void 0||(t=e.title)===null||t===void 0?void 0:t.trim())||"Overview"}
                  </div>`:""}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map(a=>m`
                  <div 
                    class='nav-bar-h${a.depth}' 
                    id="link-overview--${new Y.Slugger().slug(a.text)}"  
                    data-content-id='overview--${new Y.Slugger().slug(a.text)}' 
                    @click='${o=>this.scrollToEventTarget(o,!1)}'
                  >
                    ${a.text}
                  </div>`)}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?m`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:m`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${a=>this.scrollToEventTarget(a,!1)}'> 
            ${((r=this.resolvedSpec.info)===null||r===void 0||(n=r.title)===null||n===void 0?void 0:n.trim())||"Overview"} 
              </div>`}
        `:""}
    
      ${this.allowServerSelection==="false"?"":m`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${a=>this.scrollToEventTarget(a,!1)}'> API Servers </div>`}
      ${this.allowAuthentication!=="false"&&this.resolvedSpec.securitySchemes?m`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${a=>this.scrollToEventTarget(a,!1)}'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${a=>this.scrollToEventTarget(a,!1)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${this.renderStyle==="focused"?m`
              <div @click="${a=>{pb.call(this,a,"expand-all")}}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${a=>{pb.call(this,a,"collapse-all")}}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter(a=>a.paths.filter(o=>oa(this.matchPaths,o,this.matchType)).length).map(a=>m`
          <div class='nav-bar-tag-and-paths ${a.expanded?"expanded":"collapsed"}'>
            ${a.name==="General \u2982"?m`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>`:m`
                <div 
                  class='nav-bar-tag' 
                  id="link-${a.elementId}" 
                  data-content-id='${a.elementId}'
                  data-first-path-id='${a.firstPathId}'
                  @click='${o=>{this.renderStyle==="focused"&&this.onNavTagClick==="expand-collapse"?cb.call(this,o):this.scrollToEventTarget(o,!1)}}'
                >
                  <div>${a.name}</div>
                  <div class="nav-bar-tag-icon" @click="${o=>{this.renderStyle==="focused"&&this.onNavTagClick==="show-description"&&cb.call(this,o)}}">
                  </div>
                </div>
              `}
            ${this.infoDescriptionHeadingsInNavBar==="true"?m`
                ${this.renderStyle==="focused"&&this.onNavTagClick==="expand-collapse"?"":m`
                    <div class='tag-headers'>
                      ${a.headers.map(o=>m`
                      <div 
                        class='nav-bar-h${o.depth}' 
                        id="link-${a.elementId}--${new Y.Slugger().slug(o.text)}"  
                        data-content-id='${a.elementId}--${new Y.Slugger().slug(o.text)}' 
                        @click='${i=>this.scrollToEventTarget(i,!1)}'
                      > ${o.text}</div>`)}
                    </div>`}`:""}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${a.paths.filter(o=>!this.matchPaths||oa(this.matchPaths,o,this.matchType)).map(o=>m`
              <div 
                class='nav-bar-path
                ${this.usePathInNavBar==="true"?"small-font":""}'
                data-content-id='${o.elementId}'
                id='link-${o.elementId}'
                @click = '${i=>{this.scrollToEventTarget(i,!1)}}'
              >
                <span style = "display:flex; align-items:start; ${o.deprecated?"filter:opacity(0.5)":""}">
                  ${m`<span class="nav-method ${this.showMethodInNavBar} ${o.method}">
                      ${this.showMethodInNavBar==="as-colored-block"?o.method.substring(0,3).toUpperCase():o.method.toUpperCase()}
                    </span>`}
                  ${o.isWebhook?m`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>`:""}
                  ${this.usePathInNavBar==="true"?m`<span class='mono-font'>${o.path}</span>`:o.summary||o.shortSummary}
                </span>
              </div>`)}
            </div>
          </div>
        `)}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&this.showComponents==="true"&&this.renderStyle==="focused"?m`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map(a=>a.subComponents.length?m`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${a.name.toLowerCase()}' 
                id='link-cmp--${a.name.toLowerCase()}' 
                @click='${o=>this.scrollToEventTarget(o,!1)}'>
                ${a.name}
              </div>
              ${a.subComponents.filter(o=>o.expanded!==!1).map(o=>m`
                <div class='nav-bar-path' data-content-id='cmp--${o.id}' id='link-cmp--${o.id}' @click='${i=>this.scrollToEventTarget(i,!1)}'>
                  <span> ${o.name} </span>
                </div>`)}`:"")}`:""}
    </nav>`}
</nav>
`}function aP(e){const t=new Y.Renderer;return t.heading=(r,n,a,o)=>`<h${n} class="observe-me" id="${e}--${o.slug(a)}">${r}</h${n}>`,t}function Zi(e){return m`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function db(){var e;if(this.showInfo==="true")return Zi(Yi.call(this));const t=this.resolvedSpec.tags[0],r=(e=this.resolvedSpec.tags[0])===null||e===void 0?void 0:e.paths[0];return Zi(t&&r?Vp.call(this,r,t.name):"")}function oP(e){return m`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${this.onNavTagClick==="show-description"&&e.description?m`
        <div class="m-markdown">
          ${Ae(`
            <div class="m-markdown regular-font">
              ${Y(e.description||"",this.infoDescriptionHeadingsInNavBar==="true"?{renderer:aP(e.elementId)}:void 0)}
            </div>`)}
        </div>`:""}
  `}function iP(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,n=null,a=0;if(e.startsWith("overview")&&this.showInfo==="true")t=Yi.call(this);else if(e==="auth"&&this.allowAuthentication==="true")t=Zv.call(this);else if(e==="servers"&&this.allowServerSelection==="true")t=sb.call(this);else if(e==="operations-top")t=m`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&this.showComponents==="true")t=eP.call(this);else if(e.startsWith("tag--")){const o=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;n=this.resolvedSpec.tags.find(i=>i.elementId===o),t=n?Zi.call(this,oP.call(this,n)):db.call(this)}else{for(a=0;a<this.resolvedSpec.tags.length&&(n=this.resolvedSpec.tags[a],r=this.resolvedSpec.tags[a].paths.find(o=>`${o.elementId}`===e),!r);a+=1);r?(lb(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=Zi.call(this,Vp.call(this,r,n.name))):t=db.call(this)}return t}function sP(e){if(e.expanded)e.expanded=!1,this.updateRoute==="true"&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix==="#"?"":`${this.routePrefix}`}`);else if(e.expanded=!0,this.updateRoute==="true"){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${t}`)}this.requestUpdate()}function lP(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];t==="expand-all"?r.map(n=>{n.classList.replace("collapsed","expanded")}):r.map(n=>{n.classList.replace("expanded","collapsed")})}function ub(e,t="expand-all"){lP.call(this,e.target.closest(".operations-root"),t)}function hb(e,t=!1){return m`
  <summary @click="${r=>{sP.call(this,e,r)}}" part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div part="section-endpoint-head-method" class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?m`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?m`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?m`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function fb(e){var t;const r=new Set;for(const l in e.responses)for(const c in(n=e.responses[l])===null||n===void 0?void 0:n.content){var n;r.add(c.trim())}const a=[...r].join(", "),o=this.resolvedSpec.securitySchemes.filter(l=>{var c;return l.finalKeyValue&&((c=e.security)===null||c===void 0?void 0:c.some(d=>l.securitySchemeId in d))})||[],i=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===Fr&&l.value!=="-");i&&o.push(i);const s=e.xCodeSamples?Xv(e.xCodeSamples):"";return m`
  <div part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}" class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?m`<div class="title" part="section-endpoint-body-title">${e.summary}<div>`:e.shortSummary!==e.description?m`<div class="title" part="section-endpoint-body-title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&((t=e.xBadges)===null||t===void 0?void 0:t.length)>0?m`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map(l=>m`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${l.color}, var(--input-bg)); color:var(--${l.color}); border:1px solid var(--${l.color})">${l.label}</span>`)}
          </div>
          `:""}

      ${e.description?m`<div part="section-endpoint-body-description" class="m-markdown"> ${Ae(Y(e.description))}</div>`:""}
      <slot name="${e.elementId}"></slot>
      ${Qv.call(this,e.security)}
      ${s}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}", 
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${o}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${a}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly==="never"||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${this.schemaHideWriteOnly==="never"?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

          ${e.callbacks?eb.call(this,e.callbacks):""}
      </div>  

      <api-response
        class = "${this.renderStyle}-mode"
        style = "width:100%;"
        webhook = "${e.isWebhook}"
        .responses="${e.responses}"
        active-schema-tab = "${this.defaultSchemaTab}" 
        render-style="${this.renderStyle}" 
        schema-style="${this.schemaStyle}"
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "${this.schemaHideReadOnly==="never"?"false":e.isWebhook?"true":"false"}"
        schema-hide-write-only = "${this.schemaHideWriteOnly==="never"||e.isWebhook?"false":"true"}"
        selected-status = "${Object.keys(e.responses||{})[0]||""}"
        exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
        textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
        schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </api-response>
    </div>
  </div>`}function cP(e=!0,t=!0,r=!1){return this.resolvedSpec?m`
    ${e?m`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${n=>ub(n,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${n=>ub(n,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map(n=>m`
      ${t?m` 
          <div class='regular-font section-gap section-tag ${n.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{n.expanded=!n.expanded,this.requestUpdate()}}">
              <div id='${n.elementId}' class="sub-title tag" style="color:var(--primary-color)">${n.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${n.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${Ae(Y(n.description||""))}
              </div>
              ${n.paths.filter(a=>!this.matchPaths||oa(this.matchPaths,a,this.matchType)).map(a=>m`
                <section part="section-endpoint" id='${a.elementId}' class='m-endpoint regular-font ${a.method} ${r||a.expanded?"expanded":"collapsed"}'>
                  ${hb.call(this,a,r)}      
                  ${r||a.expanded?fb.call(this,a):""}
                </section>`)}
            </div>
          </div>`:m`
          <div class='section-tag-body'>
          ${n.paths.filter(a=>!this.matchPaths||oa(this.matchPaths,a,this.matchType)).map(a=>m`
            <section id='${a.elementId}' class='m-endpoint regular-font ${a.method} ${r||a.expanded?"expanded":"collapsed"}'>
              ${hb.call(this,a,r)}      
              ${r||a.expanded?fb.call(this,a):""}
            </section>`)}
          </div>
        `}
  `)}`:""}function Qi(){return m`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${e="height:36px;width:36px;margin-left:5px",m`
  <div style=${e}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${this.allowSpecUrlLoad==="false"?"":m`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${this.allowSpecFileLoad==="false"?"":m`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${this.allowSearch==="false"||"read focused".includes(this.renderStyle)?"":m`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${this.allowAdvancedSearch==="false"||"read focused".includes(this.renderStyle)?"":m`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;var e}customElements.define("api-response",class extends St{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},webhook:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[mr,ea,ra,ta,un,Gi,B`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`,hn]}render(){return m`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${this.callback==="true"?"tiny-title":"req-res-title"} "> 
        ${this.callback==="true"?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const n in this.responses){this.selectedStatus||(this.selectedStatus=n);const a={};for(const i in(e=this.responses[n])===null||e===void 0?void 0:e.content){var e,t;const s=this.responses[n].content[i];this.selectedMimeType||(this.selectedMimeType=i);const l=it(s.schema,{}),c=Yn(s.schema,i,s.examples,s.example,this.callback!=="true"&&this.webhook!=="true",this.callback==="true"||this.webhook==="true",i.includes("json")?"json":"text");a[i]={description:this.responses[n].description,examples:c,selectedExample:((t=c[0])===null||t===void 0?void 0:t.exampleId)||"",schemaTree:l}}const o=[];for(const i in(r=this.responses[n])===null||r===void 0?void 0:r.headers){var r;o.push({name:i,...this.responses[n].headers[i]})}this.headersForEachRespStatus[n]=o,this.mimeResponsesForEachStatus[n]=a}return m`
      ${Object.keys(this.responses).length>1?m`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map(n=>m`
            ${n==="$$ref"?"":m`
                <button 
                  @click="${()=>{this.selectedStatus=n,this.responses[n].content&&Object.keys(this.responses[n].content)[0]?this.selectedMimeType=Object.keys(this.responses[n].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===n?"primary":""}'
                  part="btn ${this.selectedStatus===n?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${n} 
                </button>`}`)}`:m`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map(n=>{var a,o;return m`
        <div style = 'display: ${n===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${Ae(Y(((a=this.responses[n])===null||a===void 0?void 0:a.description)||""))}</span>
            ${this.headersForEachRespStatus[n]&&((o=this.headersForEachRespStatus[n])===null||o===void 0?void 0:o.length)>0?m`${this.responseHeaderListTemplate(this.headersForEachRespStatus[n])}`:""}
          </div>
          ${Object.keys(this.mimeResponsesForEachStatus[n]).length===0?"":m`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${i=>{i.target.tagName.toLowerCase()==="button"&&(this.activeSchemaTab=i.target.dataset.tab)}}" >
                  <button class="tab-btn ${this.activeSchemaTab==="example"?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${this.activeSchemaTab!=="example"?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${Object.keys(this.mimeResponsesForEachStatus[n]).length===1?m`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[n])[0]} </span>`:m`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[n]))}`}
                </div>
                ${this.activeSchemaTab==="example"?m`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[n][this.selectedMimeType])}
                    </div>`:m`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[n][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`})}
    `}responseHeaderListTemplate(e){return m`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map(t=>m`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.schema.type||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${Ae(Y(t.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${t.schema.example||""}
            </td>
          </tr>
        `)}
    </table>`}mimeTypeDropdownTemplate(e){return m`
      <select @change="${t=>{this.selectedMimeType=t.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map(t=>m`<option value='${t}' ?selected = '${t===this.selectedMimeType}'> ${t} </option>`)}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"})}mimeExampleTemplate(e){return e?m`
      ${e.examples.length===1?m`
          ${e.examples[0].exampleFormat==="json"?m`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?m`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?m`<div class="m-markdown-small" style="padding: 4px 0"> ${Ae(Y(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:m`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?m`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?m`<div class="m-markdown-small" style="padding: 4px 0"> ${Ae(Y(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:m`
          <span class = 'example-panel ${this.renderStyle==="read"?"border pad-8-16":"border-top pad-top-8"}'>
            <select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t)}'>
              ${e.examples.map(t=>m`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`)}
            </select>
            ${e.examples.map(t=>m`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?m`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?m`<div class="m-markdown-small"  style="padding: 4px 0"> ${Ae(Y(t.exampleDescription||""))} </div>`:""}
                ${t.exampleFormat==="json"?m`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:m`<pre>${t.exampleValue}</pre>`}
              </div>  
            `)}
          </span>  
        `}
    `:m`
        <pre style='color:var(--red)' class = '${this.renderStyle==="read"?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?m`
      ${this.schemaStyle==="table"?m`
          <schema-table
            render-style = "${this.renderStyle}"
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree> `:m`
          <schema-tree
            render-style = "${this.renderStyle}"
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree>`}`:m`
        <pre style='color:var(--red)' class = '${this.renderStyle==="read"?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const pP=B`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`;function dP(){var e;return document.addEventListener("close",()=>{this.showAdvancedSearchDialog=!1}),document.addEventListener("open",this.onOpenSearchDialog),m`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${t=>this.onAdvancedSearch(t,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${t=>this.onAdvancedSearch(t,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${(e=this.advancedSearchMatches)===null||e===void 0?void 0:e.map(t=>m`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${t.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${t.elementId}'
        tabindex = '0'
        @click="${r=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(r,!0)}}"
      > 
        <span class="upper bold-text method-fg ${t.method}">${t.method}</span> 
        <span>${t.path}</span>
        <span class="regular-font gray-text">${t.summary}</span>
      </div>
    `)}
    </dialog-box>
  `}customElements.define("dialog-box",class extends St{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[pP]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",e=>{e.code==="Escape"&&this.onClose()})}attributeChangedCallback(e,t,r){t!==r&&(e==="heading"&&(this.heading=r),e==="show"&&(this.show=r,r==="true"&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return m`
    ${this.show==="true"?m`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const pe={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(e.indexOf("#")===0&&(e=e.slice(1,7)),e.length!==3&&e.length!==4||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e.length!==6)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return .299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function ht(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function $t(e,t={}){let r={};const n=t.primaryColor?t.primaryColor:e==="dark"?"#f76b39":"#ff591e",a=pe.color.invert(n),o=pe.color.opacity(n,"0.8");if(e==="dark"){const i=t.bg1?t.bg1:"#2a2b2c",s=t.fg1?t.fg1:"#bbb",l=t.bg2?t.bg2:pe.color.brightness(i,5),c=t.bg3?t.bg3:pe.color.brightness(i,17),d=t.bg3?t.bg3:pe.color.brightness(i,35),p=t.fg2?t.fg2:pe.color.brightness(s,-15),h=t.fg3?t.fg3:pe.color.brightness(s,-20),f=t.fg3?t.fg3:pe.color.brightness(s,-65),g=t.inlineCodeFg?t.inlineCodeFg:"#aaa",x="#bbb",v="#eee",u=t.headerColor?t.headerColor:pe.color.brightness(i,10),O=t.navBgColor?t.navBgColor:pe.color.brightness(i,10);r={bg1:i,bg2:l,bg3:c,lightBg:d,fg1:s,fg2:p,fg3:h,lightFg:f,inlineCodeFg:g,primaryColor:n,primaryColorTrans:o,primaryColorInvert:a,selectionBg:x,selectionFg:v,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:O,navTextColor:t.navTextColor?t.navTextColor:pe.color.opacity(pe.color.invert(O),"0.50"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:pe.color.brightness(O,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:pe.color.invert(O),navAccentColor:t.navAccentColor?t.navAccentColor:pe.color.brightness(n,25),headerColor:u,headerColorInvert:pe.color.invert(u),headerColorDarker:pe.color.brightness(u,-20),headerColorBorder:pe.color.brightness(u,10),borderColor:t.borderColor||pe.color.brightness(i,20),lightBorderColor:t.lightBorderColor||pe.color.brightness(i,15),codeBorderColor:t.codeBorderColor||pe.color.brightness(i,30),inputBg:t.inputBg||pe.color.brightness(i,-5),placeHolder:t.placeHolder||pe.color.opacity(s,"0.3"),hoverColor:t.hoverColor||pe.color.brightness(i,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:pe.color.brightness(i,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||pe.color.brightness(i,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||pe.color.brightness(i,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||pe.color.brightness(i,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||pe.color.brightness(i,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||pe.color.brightness(i,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||pe.color.opacity(pe.color.brightness(i,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const i=t.bg1?t.bg1:"#fafbfc",s=t.fg1?t.fg1:"#444444",l=t.bg2?t.bg2:pe.color.brightness(i,-5),c=t.bg3?t.bg3:pe.color.brightness(i,-15),d=t.bg3?t.bg3:pe.color.brightness(i,-45),p=t.fg2?t.fg2:pe.color.brightness(s,17),h=t.fg3?t.fg3:pe.color.brightness(s,30),f=t.fg3?t.fg3:pe.color.brightness(s,70),g=t.inlineCodeFg?t.inlineCodeFg:"brown",x="#444",v="#eee",u=t.headerColor?t.headerColor:pe.color.brightness(i,-180),O=t.navBgColor?t.navBgColor:pe.color.brightness(i,-200);r={bg1:i,bg2:l,bg3:c,lightBg:d,fg1:s,fg2:p,fg3:h,lightFg:f,inlineCodeFg:g,primaryColor:n,primaryColorTrans:o,primaryColorInvert:a,selectionBg:x,selectionFg:v,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:O,navTextColor:t.navTextColor?t.navTextColor:pe.color.opacity(pe.color.invert(O),"0.65"),navHoverBgColor:t.navHoverBgColor?t.navHoverBgColor:pe.color.brightness(O,-15),navHoverTextColor:t.navHoverTextColor?t.navHoverTextColor:pe.color.invert(O),navAccentColor:t.navAccentColor?t.navAccentColor:pe.color.brightness(n,25),headerColor:u,headerColorInvert:pe.color.invert(u),headerColorDarker:pe.color.brightness(u,-20),headerColorBorder:pe.color.brightness(u,10),borderColor:t.borderColor||pe.color.brightness(i,-38),lightBorderColor:t.lightBorderColor||pe.color.brightness(i,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||pe.color.brightness(i,10),placeHolder:t.placeHolder||pe.color.brightness(f,20),hoverColor:t.hoverColor||pe.color.brightness(i,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||pe.color.opacity(pe.color.brightness(i,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return m`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${this.navItemSpacing==="relaxed"?"10px 16px 10px 10px":this.navItemSpacing==="compact"?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small: ${this.fontSize==="default"?"12px":this.fontSize==="large"?"13px":"14px"};
    --font-size-mono: ${this.fontSize==="default"?"13px":this.fontSize==="large"?"14px":"15px"};
    --font-size-regular: ${this.fontSize==="default"?"14px":this.fontSize==="large"?"15px":"16px"};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};

    /* Nav API Method Colors*/
    --nav-get-color:${r.blue};
    --nav-put-color:${r.orange};
    --nav-post-color:${r.green};
    --nav-delete-color:${r.red};
    --nav-head-color:${r.yellow};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function mb(e=!1,t=!0,r=!0,n=!1){if(!this.resolvedSpec)return"";this.persistAuth==="true"&&zI.call(this);const a={bg1:ht(this.bgColor)?this.bgColor:"",fg1:ht(this.textColor)?this.textColor:"",headerColor:ht(this.headerColor)?this.headerColor:"",primaryColor:ht(this.primaryColor)?this.primaryColor:"",navBgColor:ht(this.navBgColor)?this.navBgColor:"",navTextColor:ht(this.navTextColor)?this.navTextColor:"",navHoverBgColor:ht(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:ht(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:ht(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?m`
        ${this.theme==="dark"?$t.call(this,"dark",a):$t.call(this,"light",a)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:m`
      ${this.theme==="dark"?$t.call(this,"dark",a):$t.call(this,"light",a)}
      <!-- Header -->
      ${Qi.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?m`
      ${this.theme==="dark"?$t.call(this,"dark",a):$t.call(this,"light",a)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:m`
    ${this.theme==="dark"?$t.call(this,"dark",a):$t.call(this,"light",a)}

    <!-- Header -->
    ${this.showHeader==="false"?"":Qi.call(this)}
    
    <!-- Advanced Search -->
    ${this.allowAdvancedSearch==="false"?"":dP.call(this)}

    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection} >
      <!-- Side Nav -->
      ${this.renderStyle!=="read"&&this.renderStyle!=="focused"||this.showSideNav!=="true"||!this.resolvedSpec?"":nP.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading===!0?m`<div class="loader"></div>`:m`
              ${this.loadFailed===!0?m`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:m`
                  <div class="operations-root" @click="${o=>{this.handleHref(o)}}">
                  ${this.renderStyle==="focused"?m`${iP.call(this)}`:m`
                      ${this.showInfo==="true"?Yi.call(this):""}
                      ${this.allowServerSelection==="true"?sb.call(this):""}
                      ${this.allowAuthentication==="true"?Zv.call(this):""}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${this.renderStyle==="read"?ZI.call(this):cP.call(this,t,r,n)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}class uP extends St{constructor(){super();const t={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!0,this.intersectionObserver=new IntersectionObserver(r=>{this.onIntersect(r)},t)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[mr,un,ea,ta,as,so,ra,os,is,B`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${fe(this.fontSize==="default"?"300px":this.fontSize==="large"?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,hn]}connectedCallback(){super.connectedCallback();const t=this.parentElement;if(t&&(t.offsetWidth===0&&t.style.width===""&&(t.style.width="100vw"),t.offsetHeight===0&&t.style.height===""&&(t.style.height="100vh"),t.tagName==="BODY"&&(t.style.marginTop||(t.style.marginTop="0"),t.style.marginRight||(t.style.marginRight="0"),t.style.marginBottom||(t.style.marginBottom="0"),t.style.marginLeft||(t.style.marginLeft="0"))),this.loadFonts!=="false"){const r={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},n=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",r);r.weight="600";const a=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",r);n.load().then(o=>{document.fonts.add(o)}),a.load().then(o=>{document.fonts.add(o)})}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="read"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?this.defaultSchemaTab==="model"&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"default, never,".includes(`${this.schemaHideReadOnly},`)||(this.schemaHideReadOnly="default"),this.schemaHideWriteOnly&&"default, never,".includes(`${this.schemaHideWriteOnly},`)||(this.schemaHideWriteOnly="default"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.responseAreaHeight||(this.responseAreaHeight="400px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(`${this.showMethodInNavBar},`)||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),Y.setOptions({highlight:(r,n)=>Ze().languages[n]?Ze().highlight(r,Ze().languages[n],n):r}),window.addEventListener("hashchange",()=>{const r=new RegExp(`^${this.routePrefix}`,"i"),n=window.location.hash.replace(r,"");this.scrollTo(n)},!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const t=new Y.Renderer;return t.heading=(r,n,a,o)=>`<h${n} class="observe-me" id="${o.slug(a)}">${r}</h${n}>`,t}render(){const t=document.querySelector(`link[href*="${this.cssFile}"]`);return t&&this.shadowRoot.appendChild(t.cloneNode()),mb.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach(t=>{this.intersectionObserver.observe(t)})}attributeChangedCallback(t,r,n){if(t==="spec-url"&&r!==n&&window.setTimeout(async()=>{await this.loadSpec(n),this.gotoPath&&!window.location.hash&&this.scrollTo(this.gotoPath)},0),t==="render-style"&&(n==="read"?window.setTimeout(()=>{this.observeExpandedContent()},100):this.intersectionObserver.disconnect()),t==="api-key-name"||t==="api-key-location"||t==="api-key-value"){let a=!1,o="",i="",s="";if(t==="api-key-name"?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(o=n,i=this.getAttribute("api-key-location"),s=this.getAttribute("api-key-value"),a=!0):t==="api-key-location"?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(i=n,o=this.getAttribute("api-key-name"),s=this.getAttribute("api-key-value"),a=!0):t==="api-key-value"&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(s=n,i=this.getAttribute("api-key-location"),o=this.getAttribute("api-key-name"),a=!0),a&&this.resolvedSpec){const l=this.resolvedSpec.securitySchemes.find(c=>c.securitySchemeId===Fr);l?(l.name=o,l.in=i,l.value=s,l.finalKeyValue=s):this.resolvedSpec.securitySchemes.push({securitySchemeId:Fr,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:o,in:i,value:s,finalKeyValue:s}),this.requestUpdate()}}super.attributeChangedCallback(t,r,n)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSepcFileChange(t){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const r=t.target.files[0],n=new FileReader;n.onload=()=>{try{const a=JSON.parse(n.result);this.loadSpec(a),this.shadowRoot.getElementById("spec-url").value=""}catch{console.error("RapiDoc: Unable to read or parse json")}},n.readAsText(r)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(t){this.matchPaths=t.target.value,this.resolvedSpec.tags.forEach(r=>r.paths.filter(n=>{this.matchPaths&&oa(this.matchPaths,n,this.matchType)&&(r.expanded=!0)})),this.resolvedSpec.components.forEach(r=>r.subComponents.filter(n=>{n.expanded=!1,this.matchPaths&&!function(a,o){return o.name.toLowerCase().includes(a.toLowerCase())}(this.matchPaths,n)||(n.expanded=!0)})),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach(t=>t.subComponents.filter(r=>{r.expanded=!0}))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(t){const r=t.detail.querySelector("input");await lo(0),r&&r.focus()}async loadSpec(t){if(t){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const r=await Rp.call(this,t,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(r)}catch(r){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${r.message}`)}}}async afterSpecParsedAndValidated(t){var r;for(this.resolvedSpec=t,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(o=>o.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const n=new CustomEvent("spec-loaded",{detail:t});if(this.dispatchEvent(n),this.intersectionObserver.disconnect(),this.renderStyle==="read"&&(await lo(100),this.observeExpandedContent()),!((r=window.location.hash)===null||r===void 0)&&r.substring(1)){const o=new RegExp(`^${this.routePrefix}`,"i"),i=window.location.hash.replace(o,"");this.renderStyle==="view"?this.expandAndGotoOperation(i,!0,!0):this.scrollTo(i)}else if(this.renderStyle==="focused"&&!this.gotoPath){var a;const o=this.showInfo?"overview":(a=this.resolvedSpec.tags[0])===null||a===void 0?void 0:a.paths[0];this.scrollTo(o)}}expandAndGotoOperation(t,r=!0){if(!this.resolvedSpec)return;let n=!0;const a=t.indexOf("#")===-1?t:t.substring(1);if(a.startsWith("overview")||a==="servers"||a==="auth")n=!1;else for(let s=0;s<((o=this.resolvedSpec.tags)===null||o===void 0?void 0:o.length);s++){var o,i;const l=this.resolvedSpec.tags[s],c=(i=l.paths)===null||i===void 0?void 0:i.find(d=>d.elementId===t);c&&(c.expanded&&l.expanded?n=!1:(c.expanded=!0,l.expanded=!0))}r&&(n&&this.requestUpdate(),window.setTimeout(()=>{const s=this.shadowRoot.getElementById(a);s&&(s.scrollIntoView({behavior:"auto",block:"start"}),this.updateRoute==="true"&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${a}`))},n?150:0))}isValidTopId(t){return t.startsWith("overview")||t==="servers"||t==="auth"}isValidPathId(t){var r,n,a,o;return!(t!=="overview"||!this.showInfo)||!(t!=="servers"||!this.allowServerSelection)||!(t!=="auth"||!this.allowAuthentication)||(t.startsWith("tag--")?(a=this.resolvedSpec)===null||a===void 0||(o=a.tags)===null||o===void 0?void 0:o.find(i=>i.elementId===t):(r=this.resolvedSpec)===null||r===void 0||(n=r.tags)===null||n===void 0?void 0:n.find(i=>i.paths.find(s=>s.elementId===t)))}onIntersect(t){this.isIntersectionObserverActive!==!1&&t.forEach(r=>{if(r.isIntersecting&&r.intersectionRatio>0){const n=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),a=this.shadowRoot.getElementById(`link-${r.target.id}`);a&&(this.updateRoute==="true"&&window.history.replaceState(null,null,`${window.location.href.split("#")[0]}${this.routePrefix||"#"}${r.target.id}`),a.scrollIntoView({behavior:"auto",block:"center"}),a.classList.add("active")),n&&n.classList.remove("active")}})}handleHref(t){if(t.target.tagName.toLowerCase()==="a"&&t.target.getAttribute("href").startsWith("#")){const r=this.shadowRoot.getElementById(t.target.getAttribute("href").replace("#",""));r&&r.scrollIntoView({behavior:"auto",block:"start"})}}async scrollToEventTarget(t,r=!0){const n=t.currentTarget;if(n.dataset.contentId){if(this.isIntersectionObserverActive=!1,this.renderStyle==="focused"){const a=this.shadowRoot.querySelector("api-request");a&&a.beforerNavigationFocusedMode()}this.scrollTo(n.dataset.contentId,!0,r),setTimeout(()=>{this.isIntersectionObserverActive=!0},300)}}async scrollTo(t,r=!0,n=!0){if(this.renderStyle==="focused"&&(this.focusedElementId=t),this.renderStyle==="view")this.expandAndGotoOperation(t,r,!0);else{let a=!1;const o=this.shadowRoot.getElementById(t);if(o?(a=!0,o.scrollIntoView({behavior:"auto",block:"start"})):a=!1,a){if(this.renderStyle==="focused"){const s=this.shadowRoot.querySelector("api-request");s&&s.afterNavigationFocusedMode();const l=this.shadowRoot.querySelector("api-response");l&&l.resetSelection()}this.updateRoute==="true"&&window.history.replaceState(null,null,`${this.routePrefix||"#"}${t}`);const i=this.shadowRoot.getElementById(`link-${t}`);if(i){n&&i.scrollIntoView({behavior:"auto",block:"center"}),await lo(0);const s=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");s&&s.classList.remove("active"),i.classList.add("active")}}}}setHttpUserNameAndPassword(t,r,n){return pn.call(this,t,r,n)}setApiKey(t,r){return pn.call(this,t,"","",r)}removeAllSecurityKeys(){return zp.call(this)}setApiServer(t){return Gp.call(this,t)}onAdvancedSearch(t,r){const n=t.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{let a;a=n.type==="text"?n:n.closest(".advanced-search-options").querySelector("input[type=text]");const o=[...n.closest(".advanced-search-options").querySelectorAll("input:checked")].map(i=>i.id);this.advancedSearchMatches=function(i,s,l=[]){if(!i.trim()||l.length===0)return;const c=[];return s.forEach(d=>{d.paths.forEach(p=>{let h="";var f;if(l.includes("search-api-path")&&(h=p.path),l.includes("search-api-descr")&&(h=`${h} ${p.summary||p.description||""}`),l.includes("search-api-params")&&(h=`${h} ${((f=p.parameters)===null||f===void 0?void 0:f.map(u=>u.name).join(" "))||""}`),l.includes("search-api-request-body")&&p.requestBody){let u=new Set;for(const O in(g=p.requestBody)===null||g===void 0?void 0:g.content){var g,x,v;(x=p.requestBody.content[O].schema)!==null&&x!==void 0&&x.properties&&(u=ss((v=p.requestBody.content[O].schema)===null||v===void 0?void 0:v.properties)),h=`${h} ${[...u].join(" ")}`}}l.includes("search-api-resp-descr")&&(h=`${h} ${Object.values(p.responses).map(u=>u.description||"").join(" ")}`),h.toLowerCase().includes(i.trim().toLowerCase())&&c.push({elementId:p.elementId,method:p.method,path:p.path,summary:p.summary||p.description||"",deprecated:p.deprecated})})}),c}(a.value,this.resolvedSpec.tags,o)},r)}}customElements.define("rapi-doc",uP),customElements.define("rapi-doc-mini",class extends St{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[mr,un,ea,ta,as,so,ra,os,is,B`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){if(super.connectedCallback(),this.loadFonts!=="false"){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then(n=>{document.fonts.add(n)}),r.load().then(n=>{document.fonts.add(n)})}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?this.defaultSchemaTab==="model"&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded=this.pathsExpanded==="true",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),Y.setOptions({highlight:(e,t)=>Ze().languages[t]?Ze().highlight(e,Ze().languages[t],t):e})}render(){return mb.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if(e==="spec-url"&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),e==="api-key-name"||e==="api-key-location"||e==="api-key-value"){let n=!1,a="",o="",i="";if(e==="api-key-name"?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(a=r,o=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),n=!0):e==="api-key-location"?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(o=r,a=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),n=!0):e==="api-key-value"&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,o=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-name"),n=!0),n&&this.resolvedSpec){const s=this.resolvedSpec.securitySchemes.find(l=>l.securitySchemeId===Fr);s?(s.name=a,s.in=o,s.value=i,s.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:Fr,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:a,in:o,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await Rp.call(this,e,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(t){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${t.message}`)}}setHttpUserNameAndPassword(e,t,r){return pn.call(this,e,t,r)}setApiKey(e,t){return pn.call(this,e,"","",t)}removeAllSecurityKeys(){return zp.call(this)}setApiServer(e){return Gp.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find(r=>r.url===this.defaultApiServerUrl))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if(e.target.tagName.toLowerCase()==="a"&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class hP extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",t=>this.receiveStorage(t),!0)}receiveAuthParms(){let t={};if(document.location.search){const r=new URLSearchParams(document.location.search);t={code:r.get("code"),error:r.get("error"),state:r.get("state"),responseType:"code"}}else window.location.hash&&(t={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"});window.opener?window.opener.postMessage(t,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(t))}relayAuthParams(t){if(window.parent&&t.key==="rapidoc-oauth-data"){const r=JSON.parse(t.newValue);window.parent.postMessage(r,this.target)}}parseQueryString(t,r){const n=t.split("&");for(let a=0;a<n.length;a++){const o=n[a].split("=");if(decodeURIComponent(o[0])===r)return decodeURIComponent(o[1])}}}function fP(){return m`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map(e=>m`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${t=>{this.scrollToEventTarget(t,!1)}}'
        > 
          ${e.name}
        </div>`)}
    </nav>  
  </nav>
  `}function mP(){return m`
    ${this.showInfo==="true"?Yi.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map(e=>{var t;const r=Yn(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=(t=r[0])===null||t===void 0?void 0:t.exampleId,m`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${Ae(Y(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${it(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?m`<select style="min-width:100px; max-width:100%" @change='${n=>this.onSelectExample(n,e)}'>
                    ${r.map(n=>m`
                      <option value="${n.exampleId}" ?selected=${n.exampleId===e.selectedExample}> 
                        ${n.exampleSummary.length>80?n.exampleId:n.exampleSummary}
                      </option>`)}
                  </select>`:m`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map(n=>m`
                <json-tree 
                  .data = "${n.exampleValue}"
                  data-example = "${n.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${n.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`)}
            </div>
          </div>
        </section>`})}
    </div>
  `}function gP(e=!1){if(!this.resolvedSpec)return"";const t={bg1:ht(this.bgColor)?this.bgColor:"",fg1:ht(this.textColor)?this.textColor:"",headerColor:ht(this.headerColor)?this.headerColor:"",primaryColor:ht(this.primaryColor)?this.primaryColor:"",navBgColor:ht(this.navBgColor)?this.navBgColor:"",navTextColor:ht(this.navTextColor)?this.navTextColor:"",navHoverBgColor:ht(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:ht(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:ht(this.navAccentColor)?this.navAccentColor:""};return this.resolvedSpec.specLoadError?e?m`
        ${this.theme==="dark"?$t.call(this,"dark",t):$t.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:m`
      ${this.theme==="dark"?$t.call(this,"dark",t):$t.call(this,"light",t)}
      <!-- Header -->
      ${Qi.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?m`
      ${this.theme==="dark"?$t.call(this,"dark",t):$t.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:m`
    ${this.theme==="dark"?$t.call(this,"dark",t):$t.call(this,"light",t)}

    <!-- Header -->
    ${this.showHeader==="false"?"":Qi.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${fP.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading===!0?m`<div class="loader"></div>`:m`
              ${this.loadFailed===!0?m`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:m`
                  <div class="operations-root" @click="${r=>{this.handleHref(r)}}">
                    ${mP.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",hP),customElements.define("json-schema-viewer",class extends St{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[mr,un,ea,ta,as,so,ra,os,is,B`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(e.offsetWidth===0&&e.style.width===""&&(e.style.width="100vw"),e.offsetHeight===0&&e.style.height===""&&(e.style.height="100vh"),e.tagName==="BODY"&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),this.loadFonts!=="false"){const t={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",t);t.weight="600";const n=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",t);r.load().then(a=>{document.fonts.add(a)}),n.load().then(a=>{document.fonts.add(a)})}this.renderStyle="focused",this.pathsExpanded=this.pathsExpanded==="true",this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),Y.setOptions({highlight:(t,r)=>Ze().languages[r]?Ze().highlight(t,Ze().languages[r],r):t})}render(){return gP.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){e==="spec-url"&&t!==r&&window.setTimeout(async()=>{await this.loadSpec(r)},0),super.attributeChangedCallback(e,t,r)}onSepcUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await Rp.call(this,e,this.generateMissingTags==="true",this.sortTags==="true",this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(t){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${t.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if(e.target.tagName.toLowerCase()==="a"&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach(t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"})}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},874:()=>{(function(J){var Z="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",N={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},I={bash:N,environment:{pattern:RegExp("\\$"+Z),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+Z),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};J.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+Z),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:I},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:N}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:I},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:I.entity}}],environment:{pattern:RegExp("\\$?"+Z),alias:"constant"},variable:I.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},N.inside=J.languages.bash;for(var K=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],ie=I.variable[1].inside,ue=0;ue<K.length;ue++)ie[K[ue]]=J.languages.bash[K[ue]];J.languages.shell=J.languages.bash})(Prism)},16:()=>{(function(J){function Z($e,ke){return $e.replace(/<<(\d+)>>/g,function(st,rt){return"(?:"+ke[+rt]+")"})}function N($e,ke,st){return RegExp(Z($e,ke),st||"")}function I($e,ke){for(var st=0;st<ke;st++)$e=$e.replace(/<<self>>/g,function(){return"(?:"+$e+")"});return $e.replace(/<<self>>/g,"[^\\s\\S]")}var K="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",ie="class enum interface record struct",ue="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",fe="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function B($e){return"\\b(?:"+$e.trim().replace(/ /g,"|")+")\\b"}var W=B(ie),de=RegExp(B(K+" "+ie+" "+ue+" "+fe)),ve=B(ie+" "+ue+" "+fe),ge=B(K+" "+ie+" "+fe),Se=I(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),be=I(/\((?:[^()]|<<self>>)*\)/.source,2),se=/@?\b[A-Za-z_]\w*\b/.source,ae=Z(/<<0>>(?:\s*<<1>>)?/.source,[se,Se]),X=Z(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[ve,ae]),q=/\[\s*(?:,\s*)*\]/.source,R=Z(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[X,q]),F=Z(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[Se,be,q]),H=Z(/\(<<0>>+(?:,<<0>>+)+\)/.source,[F]),G=Z(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[H,X,q]),D={keyword:de,punctuation:/[<>()?,.:[\]]/},M=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,te=/"(?:\\.|[^\\"\r\n])*"/.source,me=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;J.languages.csharp=J.languages.extend("clike",{string:[{pattern:N(/(^|[^$\\])<<0>>/.source,[me]),lookbehind:!0,greedy:!0},{pattern:N(/(^|[^@$\\])<<0>>/.source,[te]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:N(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[X]),lookbehind:!0,inside:D},{pattern:N(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[se,G]),lookbehind:!0,inside:D},{pattern:N(/(\busing\s+)<<0>>(?=\s*=)/.source,[se]),lookbehind:!0},{pattern:N(/(\b<<0>>\s+)<<1>>/.source,[W,ae]),lookbehind:!0,inside:D},{pattern:N(/(\bcatch\s*\(\s*)<<0>>/.source,[X]),lookbehind:!0,inside:D},{pattern:N(/(\bwhere\s+)<<0>>/.source,[se]),lookbehind:!0},{pattern:N(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[R]),lookbehind:!0,inside:D},{pattern:N(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[G,ge,se]),inside:D}],keyword:de,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),J.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),J.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:N(/([(,]\s*)<<0>>(?=\s*:)/.source,[se]),lookbehind:!0,alias:"punctuation"}}),J.languages.insertBefore("csharp","class-name",{namespace:{pattern:N(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[se]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:N(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[be]),lookbehind:!0,alias:"class-name",inside:D},"return-type":{pattern:N(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[G,X]),inside:D,alias:"class-name"},"constructor-invocation":{pattern:N(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[G]),lookbehind:!0,inside:D,alias:"class-name"},"generic-method":{pattern:N(/<<0>>\s*<<1>>(?=\s*\()/.source,[se,Se]),inside:{function:N(/^<<0>>/.source,[se]),generic:{pattern:RegExp(Se),alias:"class-name",inside:D}}},"type-list":{pattern:N(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[W,ae,se,G,de.source,be,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:N(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[ae,be]),lookbehind:!0,greedy:!0,inside:J.languages.csharp},keyword:de,"class-name":{pattern:RegExp(G),greedy:!0,inside:D},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var Le=te+"|"+M,Ee=Z(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[Le]),we=I(Z(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[Ee]),2),Te=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,Me=Z(/<<0>>(?:\s*\(<<1>>*\))?/.source,[X,we]);J.languages.insertBefore("csharp","class-name",{attribute:{pattern:N(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[Te,Me]),lookbehind:!0,greedy:!0,inside:{target:{pattern:N(/^<<0>>(?=\s*:)/.source,[Te]),alias:"keyword"},"attribute-arguments":{pattern:N(/\(<<0>>*\)/.source,[we]),inside:J.languages.csharp},"class-name":{pattern:RegExp(X),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var qe=/:[^}\r\n]+/.source,Ve=I(Z(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[Ee]),2),_e=Z(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[Ve,qe]),je=I(Z(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[Le]),2),Je=Z(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[je,qe]);function m($e,ke){return{interpolation:{pattern:N(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[$e]),lookbehind:!0,inside:{"format-string":{pattern:N(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[ke,qe]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:J.languages.csharp}}},string:/[\s\S]+/}}J.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:N(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[_e]),lookbehind:!0,greedy:!0,inside:m(_e,Ve)},{pattern:N(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[Je]),lookbehind:!0,greedy:!0,inside:m(Je,je)}],char:{pattern:RegExp(M),greedy:!0}}),J.languages.dotnet=J.languages.cs=J.languages.csharp})(Prism)},251:()=>{(function(J){var Z=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;J.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+Z.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+Z.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+Z.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:Z,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},J.languages.css.atrule.inside.rest=J.languages.css;var N=J.languages.markup;N&&(N.tag.addInlined("style","css"),N.tag.addAttribute("style","css"))})(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{(function(J){function Z(W){return RegExp("(^(?:"+W+"):[ 	]*(?![ 	]))[^]+","i")}J.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:J.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:Z(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:J.languages.csp},{pattern:Z(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:J.languages.hpkp},{pattern:Z(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:J.languages.hsts},{pattern:Z(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var N,I=J.languages,K={"application/javascript":I.javascript,"application/json":I.json||I.javascript,"application/xml":I.xml,"text/xml":I.xml,"text/html":I.html,"text/css":I.css,"text/plain":I.plain},ie={"application/json":!0,"application/xml":!0};function ue(W){var de=W.replace(/^[a-z]+\//,"");return"(?:"+W+"|"+("\\w+/(?:[\\w.-]+\\+)+"+de+"(?![+\\w.-])")+")"}for(var fe in K)if(K[fe]){N=N||{};var B=ie[fe]?ue(fe):fe;N[fe.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+B+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:K[fe]}}N&&J.languages.insertBefore("http","header",N)})(Prism)},503:()=>{(function(J){var Z=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,N=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,I={pattern:RegExp(/(^|[^\w.])/.source+N+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};J.languages.java=J.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[I,{pattern:RegExp(/(^|[^\w.])/.source+N+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:I.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+N+/[A-Z]\w*\b/.source),lookbehind:!0,inside:I.inside}],keyword:Z,function:[J.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),J.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),J.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":I,keyword:Z,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+N+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:I.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+N+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:I.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return Z.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{(function(J){var Z=/[*&][^\s[\]{},]+/,N=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,I="(?:"+N.source+"(?:[ 	]+"+Z.source+")?|"+Z.source+"(?:[ 	]+"+N.source+")?)",K=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),ie=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function ue(fe,B){B=(B||"").replace(/m/g,"")+"m";var W=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return I}).replace(/<<value>>/g,function(){return fe});return RegExp(W,B)}J.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return I})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return I}).replace(/<<key>>/g,function(){return"(?:"+K+"|"+ie+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:ue(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:ue(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:ue(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:ue(ie),lookbehind:!0,greedy:!0},number:{pattern:ue(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:N,important:Z,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},J.languages.yml=J.languages.yaml})(Prism)},660:(J,Z,N)=>{var I=function(K){var ie=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,ue=0,fe={},B={manual:K.Prism&&K.Prism.manual,disableWorkerMessageHandler:K.Prism&&K.Prism.disableWorkerMessageHandler,util:{encode:function q(R){return R instanceof W?new W(R.type,q(R.content),R.alias):Array.isArray(R)?R.map(q):R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(q){return Object.prototype.toString.call(q).slice(8,-1)},objId:function(q){return q.__id||Object.defineProperty(q,"__id",{value:++ue}),q.__id},clone:function q(R,F){var H,G;switch(F=F||{},B.util.type(R)){case"Object":if(G=B.util.objId(R),F[G])return F[G];for(var D in H={},F[G]=H,R)R.hasOwnProperty(D)&&(H[D]=q(R[D],F));return H;case"Array":return G=B.util.objId(R),F[G]?F[G]:(H=[],F[G]=H,R.forEach(function(M,te){H[te]=q(M,F)}),H);default:return R}},getLanguage:function(q){for(;q;){var R=ie.exec(q.className);if(R)return R[1].toLowerCase();q=q.parentElement}return"none"},setLanguage:function(q,R){q.className=q.className.replace(RegExp(ie,"gi"),""),q.classList.add("language-"+R)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(H){var q=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(H.stack)||[])[1];if(q){var R=document.getElementsByTagName("script");for(var F in R)if(R[F].src==q)return R[F]}return null}},isActive:function(q,R,F){for(var H="no-"+R;q;){var G=q.classList;if(G.contains(R))return!0;if(G.contains(H))return!1;q=q.parentElement}return!!F}},languages:{plain:fe,plaintext:fe,text:fe,txt:fe,extend:function(q,R){var F=B.util.clone(B.languages[q]);for(var H in R)F[H]=R[H];return F},insertBefore:function(q,R,F,H){var G=(H=H||B.languages)[q],D={};for(var M in G)if(G.hasOwnProperty(M)){if(M==R)for(var te in F)F.hasOwnProperty(te)&&(D[te]=F[te]);F.hasOwnProperty(M)||(D[M]=G[M])}var me=H[q];return H[q]=D,B.languages.DFS(B.languages,function(Le,Ee){Ee===me&&Le!=q&&(this[Le]=D)}),D},DFS:function q(R,F,H,G){G=G||{};var D=B.util.objId;for(var M in R)if(R.hasOwnProperty(M)){F.call(R,M,R[M],H||M);var te=R[M],me=B.util.type(te);me!=="Object"||G[D(te)]?me!=="Array"||G[D(te)]||(G[D(te)]=!0,q(te,F,M,G)):(G[D(te)]=!0,q(te,F,null,G))}}},plugins:{},highlightAll:function(q,R){B.highlightAllUnder(document,q,R)},highlightAllUnder:function(q,R,F){var H={callback:F,container:q,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};B.hooks.run("before-highlightall",H),H.elements=Array.prototype.slice.apply(H.container.querySelectorAll(H.selector)),B.hooks.run("before-all-elements-highlight",H);for(var G,D=0;G=H.elements[D++];)B.highlightElement(G,R===!0,H.callback)},highlightElement:function(q,R,F){var H=B.util.getLanguage(q),G=B.languages[H];B.util.setLanguage(q,H);var D=q.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&B.util.setLanguage(D,H);var M={element:q,language:H,grammar:G,code:q.textContent};function te(Le){M.highlightedCode=Le,B.hooks.run("before-insert",M),M.element.innerHTML=M.highlightedCode,B.hooks.run("after-highlight",M),B.hooks.run("complete",M),F&&F.call(M.element)}if(B.hooks.run("before-sanity-check",M),(D=M.element.parentElement)&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!M.code)return B.hooks.run("complete",M),void(F&&F.call(M.element));if(B.hooks.run("before-highlight",M),M.grammar)if(R&&K.Worker){var me=new Worker(B.filename);me.onmessage=function(Le){te(Le.data)},me.postMessage(JSON.stringify({language:M.language,code:M.code,immediateClose:!0}))}else te(B.highlight(M.code,M.grammar,M.language));else te(B.util.encode(M.code))},highlight:function(q,R,F){var H={code:q,grammar:R,language:F};if(B.hooks.run("before-tokenize",H),!H.grammar)throw new Error('The language "'+H.language+'" has no grammar.');return H.tokens=B.tokenize(H.code,H.grammar),B.hooks.run("after-tokenize",H),W.stringify(B.util.encode(H.tokens),H.language)},tokenize:function(q,R){var F=R.rest;if(F){for(var H in F)R[H]=F[H];delete R.rest}var G=new ge;return Se(G,G.head,q),ve(q,G,R,G.head,0),function(D){for(var M=[],te=D.head.next;te!==D.tail;)M.push(te.value),te=te.next;return M}(G)},hooks:{all:{},add:function(q,R){var F=B.hooks.all;F[q]=F[q]||[],F[q].push(R)},run:function(q,R){var F=B.hooks.all[q];if(F&&F.length)for(var H,G=0;H=F[G++];)H(R)}},Token:W};function W(q,R,F,H){this.type=q,this.content=R,this.alias=F,this.length=0|(H||"").length}function de(q,R,F,H){q.lastIndex=R;var G=q.exec(F);if(G&&H&&G[1]){var D=G[1].length;G.index+=D,G[0]=G[0].slice(D)}return G}function ve(q,R,F,H,G,D){for(var M in F)if(F.hasOwnProperty(M)&&F[M]){var te=F[M];te=Array.isArray(te)?te:[te];for(var me=0;me<te.length;++me){if(D&&D.cause==M+","+me)return;var Le=te[me],Ee=Le.inside,we=!!Le.lookbehind,Te=!!Le.greedy,Me=Le.alias;if(Te&&!Le.pattern.global){var qe=Le.pattern.toString().match(/[imsuy]*$/)[0];Le.pattern=RegExp(Le.pattern.source,qe+"g")}for(var Ve=Le.pattern||Le,_e=H.next,je=G;_e!==R.tail&&!(D&&je>=D.reach);je+=_e.value.length,_e=_e.next){var Je=_e.value;if(R.length>q.length)return;if(!(Je instanceof W)){var m,$e=1;if(Te){if(!(m=de(Ve,je,q,we))||m.index>=q.length)break;var ke=m.index,st=m.index+m[0].length,rt=je;for(rt+=_e.value.length;ke>=rt;)rt+=(_e=_e.next).value.length;if(je=rt-=_e.value.length,_e.value instanceof W)continue;for(var Rt=_e;Rt!==R.tail&&(rt<st||typeof Rt.value=="string");Rt=Rt.next)$e++,rt+=Rt.value.length;$e--,Je=q.slice(je,rt),m.index-=je}else if(!(m=de(Ve,0,Je,we)))continue;ke=m.index;var vt=m[0],Ye=Je.slice(0,ke),Vt=Je.slice(ke+vt.length),ar=je+Je.length;D&&ar>D.reach&&(D.reach=ar);var or=_e.prev;if(Ye&&(or=Se(R,or,Ye),je+=Ye.length),be(R,or,$e),_e=Se(R,or,new W(M,Ee?B.tokenize(vt,Ee):vt,Me,vt)),Vt&&Se(R,_e,Vt),$e>1){var Xn={cause:M+","+me,reach:ar};ve(q,R,F,_e.prev,je,Xn),D&&Xn.reach>D.reach&&(D.reach=Xn.reach)}}}}}}function ge(){var q={value:null,prev:null,next:null},R={value:null,prev:q,next:null};q.next=R,this.head=q,this.tail=R,this.length=0}function Se(q,R,F){var H=R.next,G={value:F,prev:R,next:H};return R.next=G,H.prev=G,q.length++,G}function be(q,R,F){for(var H=R.next,G=0;G<F&&H!==q.tail;G++)H=H.next;R.next=H,H.prev=R,q.length-=G}if(K.Prism=B,W.stringify=function q(R,F){if(typeof R=="string")return R;if(Array.isArray(R)){var H="";return R.forEach(function(me){H+=q(me,F)}),H}var G={type:R.type,content:q(R.content,F),tag:"span",classes:["token",R.type],attributes:{},language:F},D=R.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(G.classes,D):G.classes.push(D)),B.hooks.run("wrap",G);var M="";for(var te in G.attributes)M+=" "+te+'="'+(G.attributes[te]||"").replace(/"/g,"&quot;")+'"';return"<"+G.tag+' class="'+G.classes.join(" ")+'"'+M+">"+G.content+"</"+G.tag+">"},!K.document)return K.addEventListener&&(B.disableWorkerMessageHandler||K.addEventListener("message",function(q){var R=JSON.parse(q.data),F=R.language,H=R.code,G=R.immediateClose;K.postMessage(B.highlight(H,B.languages[F],F)),G&&K.close()},!1)),B;var se=B.util.currentScript();function ae(){B.manual||B.highlightAll()}if(se&&(B.filename=se.src,se.hasAttribute("data-manual")&&(B.manual=!0)),!B.manual){var X=document.readyState;X==="loading"||X==="interactive"&&se&&se.defer?document.addEventListener("DOMContentLoaded",ae):window.requestAnimationFrame?window.requestAnimationFrame(ae):window.setTimeout(ae,16)}return B}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});J.exports&&(J.exports=I),N.g!==void 0&&(N.g.Prism=I),I.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},I.languages.markup.tag.inside["attr-value"].inside.entity=I.languages.markup.entity,I.languages.markup.doctype.inside["internal-subset"].inside=I.languages.markup,I.hooks.add("wrap",function(K){K.type==="entity"&&(K.attributes.title=K.content.replace(/&amp;/,"&"))}),Object.defineProperty(I.languages.markup.tag,"addInlined",{value:function(K,ie){var ue={};ue["language-"+ie]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:I.languages[ie]},ue.cdata=/^<!\[CDATA\[|\]\]>$/i;var fe={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:ue}};fe["language-"+ie]={pattern:/[\s\S]+/,inside:I.languages[ie]};var B={};B[K]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return K}),"i"),lookbehind:!0,greedy:!0,inside:fe},I.languages.insertBefore("markup","cdata",B)}}),Object.defineProperty(I.languages.markup.tag,"addAttribute",{value:function(K,ie){I.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+K+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[ie,"language-"+ie],inside:I.languages[ie]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),I.languages.html=I.languages.markup,I.languages.mathml=I.languages.markup,I.languages.svg=I.languages.markup,I.languages.xml=I.languages.extend("markup",{}),I.languages.ssml=I.languages.xml,I.languages.atom=I.languages.xml,I.languages.rss=I.languages.xml,function(K){var ie=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;K.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+ie.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+ie.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+ie.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:ie,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},K.languages.css.atrule.inside.rest=K.languages.css;var ue=K.languages.markup;ue&&(ue.tag.addInlined("style","css"),ue.tag.addAttribute("style","css"))}(I),I.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},I.languages.javascript=I.languages.extend("clike",{"class-name":[I.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),I.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,I.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:I.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:I.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:I.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:I.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:I.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),I.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:I.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),I.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),I.languages.markup&&(I.languages.markup.tag.addInlined("script","javascript"),I.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),I.languages.js=I.languages.javascript,function(){if(I!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var K={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},ie="data-src-status",ue="loading",fe="loaded",B='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';I.hooks.add("before-highlightall",function(de){de.selector+=", "+B}),I.hooks.add("before-sanity-check",function(de){var ve=de.element;if(ve.matches(B)){de.code="",ve.setAttribute(ie,ue);var ge=ve.appendChild(document.createElement("CODE"));ge.textContent="Loading\u2026";var Se=ve.getAttribute("data-src"),be=de.language;if(be==="none"){var se=(/\.(\w+)$/.exec(Se)||[,"none"])[1];be=K[se]||se}I.util.setLanguage(ge,be),I.util.setLanguage(ve,be);var ae=I.plugins.autoloader;ae&&ae.loadLanguages(be),function(X,q,R){var F=new XMLHttpRequest;F.open("GET",X,!0),F.onreadystatechange=function(){F.readyState==4&&(F.status<400&&F.responseText?q(F.responseText):F.status>=400?R("\u2716 Error "+F.status+" while fetching file: "+F.statusText):R("\u2716 Error: File does not exist or is empty"))},F.send(null)}(Se,function(X){ve.setAttribute(ie,fe);var q=function(G){var D=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(G||"");if(D){var M=Number(D[1]),te=D[2],me=D[3];return te?me?[M,Number(me)]:[M,void 0]:[M,M]}}(ve.getAttribute("data-range"));if(q){var R=X.split(/\r\n?|\n/g),F=q[0],H=q[1]==null?R.length:q[1];F<0&&(F+=R.length),F=Math.max(0,Math.min(F-1,R.length)),H<0&&(H+=R.length),H=Math.max(0,Math.min(H,R.length)),X=R.slice(F,H).join(`
`),ve.hasAttribute("data-start")||ve.setAttribute("data-start",String(F+1))}ge.textContent=X,I.highlightElement(ge)},function(X){ve.setAttribute(ie,"failed"),ge.textContent=X})}}),I.plugins.fileHighlight={highlight:function(de){for(var ve,ge=(de||document).querySelectorAll(B),Se=0;ve=ge[Se++];)I.highlightElement(ve)}};var W=!1;I.fileHighlight=function(){W||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),W=!0),I.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},464:J=>{var Z,N="";J.exports=function(I,K){if(typeof I!="string")throw new TypeError("expected a string");if(K===1)return I;if(K===2)return I+I;var ie=I.length*K;if(Z!==I||Z===void 0)Z=I,N="";else if(N.length>=ie)return N.substr(0,ie);for(;ie>N.length&&K>1;)1&K&&(N+=I),K>>=1,I+=I;return N=(N+=I).substr(0,ie)}},131:(J,Z,N)=>{var I=N(464),K=function(B){return/<\/+[^>]+>/.test(B)},ie=function(B){return/<[^>]+\/>/.test(B)};function ue(B){return B.split(/(<\/?[^>]+>)/g).filter(function(W){return W.trim()!==""}).map(function(W){return{value:W,type:fe(W)}})}function fe(B){return K(B)?"ClosingTag":function(W){return function(de){return/<[^>!]+>/.test(de)}(W)&&!K(W)&&!ie(W)}(B)?"OpeningTag":ie(B)?"SelfClosingTag":"Text"}J.exports=function(B){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},de=W.indentor,ve=W.textNodesOnSameLine,ge=0,Se=[];de=de||"    ";var be=ue(B).map(function(se,ae,X){var q=se.value,R=se.type;R==="ClosingTag"&&ge--;var F=I(de,ge),H=F+q;if(R==="OpeningTag"&&ge++,ve){var G=X[ae-1],D=X[ae-2];R==="ClosingTag"&&G.type==="Text"&&D.type==="OpeningTag"&&(H=""+F+D.value+G.value+q,Se.push(ae-2,ae-1))}return H});return Se.forEach(function(se){return be[se]=null}),be.filter(function(se){return!!se}).join(`
`)}}},Qn={};function ee(J){var Z=Qn[J];if(Z!==void 0){if(Z.error!==void 0)throw Z.error;return Z.exports}var N=Qn[J]={exports:{}};try{var I={id:J,module:N,factory:Zn[J],require:ee};ee.i.forEach(function(K){K(I)}),N=I.module,I.factory.call(N.exports,N,N.exports,I.require)}catch(K){throw N.error=K,K}return N.exports}ee.m=Zn,ee.c=Qn,ee.i=[],ee.n=J=>{var Z=J&&J.__esModule?()=>J.default:()=>J;return ee.d(Z,{a:Z}),Z},ee.d=(J,Z)=>{for(var N in Z)ee.o(Z,N)&&!ee.o(J,N)&&Object.defineProperty(J,N,{enumerable:!0,get:Z[N]})},ee.hu=J=>J+"."+ee.h()+".hot-update.js",ee.hmrF=()=>"main."+ee.h()+".hot-update.json",ee.h=()=>"86e05890ecd1b58be1fc",ee.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),ee.o=(J,Z)=>Object.prototype.hasOwnProperty.call(J,Z),Rr={},Lr="rapidoc:",ee.l=(J,Z,N,I)=>{if(Rr[J])Rr[J].push(Z);else{var K,ie;if(N!==void 0)for(var ue=document.getElementsByTagName("script"),fe=0;fe<ue.length;fe++){var B=ue[fe];if(B.getAttribute("src")==J||B.getAttribute("data-webpack")==Lr+N){K=B;break}}K||(ie=!0,(K=document.createElement("script")).charset="utf-8",K.timeout=120,ee.nc&&K.setAttribute("nonce",ee.nc),K.setAttribute("data-webpack",Lr+N),K.src=J),Rr[J]=[Z];var W=(ve,ge)=>{K.onerror=K.onload=null,clearTimeout(de);var Se=Rr[J];if(delete Rr[J],K.parentNode&&K.parentNode.removeChild(K),Se&&Se.forEach(be=>be(ge)),ve)return ve(ge)},de=setTimeout(W.bind(null,void 0,{type:"timeout",target:K}),12e4);K.onerror=W.bind(null,K.onerror),K.onload=W.bind(null,K.onload),ie&&document.head.appendChild(K)}},(()=>{var J,Z,N,I={},K=ee.c,ie=[],ue=[],fe="idle",B=0,W=[];function de(ae){fe=ae;for(var X=[],q=0;q<ue.length;q++)X[q]=ue[q].call(null,ae);return Promise.all(X)}function ve(){--B==0&&de("ready").then(function(){if(B===0){var ae=W;W=[];for(var X=0;X<ae.length;X++)ae[X]()}})}function ge(ae){if(fe!=="idle")throw new Error("check() is only allowed in idle status");return de("check").then(ee.hmrM).then(function(X){return X?de("prepare").then(function(){var q=[];return Z=[],Promise.all(Object.keys(ee.hmrC).reduce(function(R,F){return ee.hmrC[F](X.c,X.r,X.m,R,Z,q),R},[])).then(function(){return R=function(){return ae?be(ae):de("ready").then(function(){return q})},B===0?R():new Promise(function(F){W.push(function(){F(R())})});var R})}):de(se()?"ready":"idle").then(function(){return null})})}function Se(ae){return fe!=="ready"?Promise.resolve().then(function(){throw new Error("apply() is only allowed in ready status (state: "+fe+")")}):be(ae)}function be(ae){ae=ae||{},se();var X=Z.map(function(M){return M(ae)});Z=void 0;var q=X.map(function(M){return M.error}).filter(Boolean);if(q.length>0)return de("abort").then(function(){throw q[0]});var R=de("dispose");X.forEach(function(M){M.dispose&&M.dispose()});var F,H=de("apply"),G=function(M){F||(F=M)},D=[];return X.forEach(function(M){if(M.apply){var te=M.apply(G);if(te)for(var me=0;me<te.length;me++)D.push(te[me])}}),Promise.all([R,H]).then(function(){return F?de("fail").then(function(){throw F}):N?be(ae).then(function(M){return D.forEach(function(te){M.indexOf(te)<0&&M.push(te)}),M}):de("idle").then(function(){return D})})}function se(){if(N)return Z||(Z=[]),Object.keys(ee.hmrI).forEach(function(ae){N.forEach(function(X){ee.hmrI[ae](X,Z)})}),N=void 0,!0}ee.hmrD=I,ee.i.push(function(ae){var X,q,R,F,H=ae.module,G=function(D,M){var te=K[M];if(!te)return D;var me=function(we){if(te.hot.active){if(K[we]){var Te=K[we].parents;Te.indexOf(M)===-1&&Te.push(M)}else ie=[M],J=we;te.children.indexOf(we)===-1&&te.children.push(we)}else console.warn("[HMR] unexpected require("+we+") from disposed module "+M),ie=[];return D(we)},Le=function(we){return{configurable:!0,enumerable:!0,get:function(){return D[we]},set:function(Te){D[we]=Te}}};for(var Ee in D)Object.prototype.hasOwnProperty.call(D,Ee)&&Ee!=="e"&&Object.defineProperty(me,Ee,Le(Ee));return me.e=function(we){return function(Te){switch(fe){case"ready":de("prepare");case"prepare":return B++,Te.then(ve,ve),Te;default:return Te}}(D.e(we))},me}(ae.require,ae.id);H.hot=(X=ae.id,q=H,F={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:R=J!==X,_requireSelf:function(){ie=q.parents.slice(),J=R?void 0:X,ee(X)},active:!0,accept:function(D,M,te){if(D===void 0)F._selfAccepted=!0;else if(typeof D=="function")F._selfAccepted=D;else if(typeof D=="object"&&D!==null)for(var me=0;me<D.length;me++)F._acceptedDependencies[D[me]]=M||function(){},F._acceptedErrorHandlers[D[me]]=te;else F._acceptedDependencies[D]=M||function(){},F._acceptedErrorHandlers[D]=te},decline:function(D){if(D===void 0)F._selfDeclined=!0;else if(typeof D=="object"&&D!==null)for(var M=0;M<D.length;M++)F._declinedDependencies[D[M]]=!0;else F._declinedDependencies[D]=!0},dispose:function(D){F._disposeHandlers.push(D)},addDisposeHandler:function(D){F._disposeHandlers.push(D)},removeDisposeHandler:function(D){var M=F._disposeHandlers.indexOf(D);M>=0&&F._disposeHandlers.splice(M,1)},invalidate:function(){switch(this._selfInvalidated=!0,fe){case"idle":Z=[],Object.keys(ee.hmrI).forEach(function(D){ee.hmrI[D](X,Z)}),de("ready");break;case"ready":Object.keys(ee.hmrI).forEach(function(D){ee.hmrI[D](X,Z)});break;case"prepare":case"check":case"dispose":case"apply":(N=N||[]).push(X)}},check:ge,apply:Se,status:function(D){if(!D)return fe;ue.push(D)},addStatusHandler:function(D){ue.push(D)},removeStatusHandler:function(D){var M=ue.indexOf(D);M>=0&&ue.splice(M,1)},data:I[X]},J=void 0,F),H.parents=ie,H.children=[],ie=[],ae.require=G}),ee.hmrC={},ee.hmrI={}})(),ee.p="",(()=>{var J,Z,N,I,K,ie=ee.hmrS_jsonp=ee.hmrS_jsonp||{179:0},ue={};function fe(W,de){return J=de,new Promise((ve,ge)=>{ue[W]=ve;var Se=ee.p+ee.hu(W),be=new Error;ee.l(Se,se=>{if(ue[W]){ue[W]=void 0;var ae=se&&(se.type==="load"?"missing":se.type),X=se&&se.target&&se.target.src;be.message="Loading hot update chunk "+W+` failed.
(`+ae+": "+X+")",be.name="ChunkLoadError",be.type=ae,be.request=X,ge(be)}})})}function B(W){function de(Ee){for(var we=[Ee],Te={},Me=we.map(function(ke){return{chain:[ke],id:ke}});Me.length>0;){var qe=Me.pop(),Ve=qe.id,_e=qe.chain,je=ee.c[Ve];if(je&&(!je.hot._selfAccepted||je.hot._selfInvalidated)){if(je.hot._selfDeclined)return{type:"self-declined",chain:_e,moduleId:Ve};if(je.hot._main)return{type:"unaccepted",chain:_e,moduleId:Ve};for(var Je=0;Je<je.parents.length;Je++){var m=je.parents[Je],$e=ee.c[m];if($e){if($e.hot._declinedDependencies[Ve])return{type:"declined",chain:_e.concat([m]),moduleId:Ve,parentId:m};we.indexOf(m)===-1&&($e.hot._acceptedDependencies[Ve]?(Te[m]||(Te[m]=[]),ve(Te[m],[Ve])):(delete Te[m],we.push(m),Me.push({chain:_e.concat([m]),id:m})))}}}}return{type:"accepted",moduleId:Ee,outdatedModules:we,outdatedDependencies:Te}}function ve(Ee,we){for(var Te=0;Te<we.length;Te++){var Me=we[Te];Ee.indexOf(Me)===-1&&Ee.push(Me)}}ee.f&&delete ee.f.jsonpHmr,Z=void 0;var ge={},Se=[],be={},se=function(Ee){console.warn("[HMR] unexpected require("+Ee.id+") to disposed module")};for(var ae in N)if(ee.o(N,ae)){var X,q=N[ae],R=!1,F=!1,H=!1,G="";switch((X=q?de(ae):{type:"disposed",moduleId:ae}).chain&&(G=`
Update propagation: `+X.chain.join(" -> ")),X.type){case"self-declined":W.onDeclined&&W.onDeclined(X),W.ignoreDeclined||(R=new Error("Aborted because of self decline: "+X.moduleId+G));break;case"declined":W.onDeclined&&W.onDeclined(X),W.ignoreDeclined||(R=new Error("Aborted because of declined dependency: "+X.moduleId+" in "+X.parentId+G));break;case"unaccepted":W.onUnaccepted&&W.onUnaccepted(X),W.ignoreUnaccepted||(R=new Error("Aborted because "+ae+" is not accepted"+G));break;case"accepted":W.onAccepted&&W.onAccepted(X),F=!0;break;case"disposed":W.onDisposed&&W.onDisposed(X),H=!0;break;default:throw new Error("Unexception type "+X.type)}if(R)return{error:R};if(F)for(ae in be[ae]=q,ve(Se,X.outdatedModules),X.outdatedDependencies)ee.o(X.outdatedDependencies,ae)&&(ge[ae]||(ge[ae]=[]),ve(ge[ae],X.outdatedDependencies[ae]));H&&(ve(Se,[X.moduleId]),be[ae]=se)}N=void 0;for(var D,M=[],te=0;te<Se.length;te++){var me=Se[te],Le=ee.c[me];Le&&(Le.hot._selfAccepted||Le.hot._main)&&be[me]!==se&&!Le.hot._selfInvalidated&&M.push({module:me,require:Le.hot._requireSelf,errorHandler:Le.hot._selfAccepted})}return{dispose:function(){var Ee;I.forEach(function(m){delete ie[m]}),I=void 0;for(var we,Te=Se.slice();Te.length>0;){var Me=Te.pop(),qe=ee.c[Me];if(qe){var Ve={},_e=qe.hot._disposeHandlers;for(te=0;te<_e.length;te++)_e[te].call(null,Ve);for(ee.hmrD[Me]=Ve,qe.hot.active=!1,delete ee.c[Me],delete ge[Me],te=0;te<qe.children.length;te++){var je=ee.c[qe.children[te]];je&&(Ee=je.parents.indexOf(Me))>=0&&je.parents.splice(Ee,1)}}}for(var Je in ge)if(ee.o(ge,Je)&&(qe=ee.c[Je]))for(D=ge[Je],te=0;te<D.length;te++)we=D[te],(Ee=qe.children.indexOf(we))>=0&&qe.children.splice(Ee,1)},apply:function(Ee){for(var we in be)ee.o(be,we)&&(ee.m[we]=be[we]);for(var Te=0;Te<K.length;Te++)K[Te](ee);for(var Me in ge)if(ee.o(ge,Me)){var qe=ee.c[Me];if(qe){D=ge[Me];for(var Ve=[],_e=[],je=[],Je=0;Je<D.length;Je++){var m=D[Je],$e=qe.hot._acceptedDependencies[m],ke=qe.hot._acceptedErrorHandlers[m];if($e){if(Ve.indexOf($e)!==-1)continue;Ve.push($e),_e.push(ke),je.push(m)}}for(var st=0;st<Ve.length;st++)try{Ve[st].call(null,D)}catch(Ye){if(typeof _e[st]=="function")try{_e[st](Ye,{moduleId:Me,dependencyId:je[st]})}catch(Vt){W.onErrored&&W.onErrored({type:"accept-error-handler-errored",moduleId:Me,dependencyId:je[st],error:Vt,originalError:Ye}),W.ignoreErrored||(Ee(Vt),Ee(Ye))}else W.onErrored&&W.onErrored({type:"accept-errored",moduleId:Me,dependencyId:je[st],error:Ye}),W.ignoreErrored||Ee(Ye)}}}for(var rt=0;rt<M.length;rt++){var Rt=M[rt],vt=Rt.module;try{Rt.require(vt)}catch(Ye){if(typeof Rt.errorHandler=="function")try{Rt.errorHandler(Ye,{moduleId:vt,module:ee.c[vt]})}catch(Vt){W.onErrored&&W.onErrored({type:"self-accept-error-handler-errored",moduleId:vt,error:Vt,originalError:Ye}),W.ignoreErrored||(Ee(Vt),Ee(Ye))}else W.onErrored&&W.onErrored({type:"self-accept-errored",moduleId:vt,error:Ye}),W.ignoreErrored||Ee(Ye)}}return Se}}}self.webpackHotUpdaterapidoc=(W,de,ve)=>{for(var ge in de)ee.o(de,ge)&&(N[ge]=de[ge],J&&J.push(ge));ve&&K.push(ve),ue[W]&&(ue[W](),ue[W]=void 0)},ee.hmrI.jsonp=function(W,de){N||(N={},K=[],I=[],de.push(B)),ee.o(N,W)||(N[W]=ee.m[W])},ee.hmrC.jsonp=function(W,de,ve,ge,Se,be){Se.push(B),Z={},I=de,N=ve.reduce(function(se,ae){return se[ae]=!1,se},{}),K=[],W.forEach(function(se){ee.o(ie,se)&&ie[se]!==void 0?(ge.push(fe(se,be)),Z[se]=!0):Z[se]=!1}),ee.f&&(ee.f.jsonpHmr=function(se,ae){Z&&ee.o(Z,se)&&!Z[se]&&(ae.push(fe(se)),Z[se]=!0)})},ee.hmrM=()=>{if(typeof fetch>"u")throw new Error("No browser support: need fetch API");return fetch(ee.p+ee.hmrF()).then(W=>{if(W.status!==404){if(!W.ok)throw new Error("Failed to fetch update manifest "+W.statusText);return W.json()}})}})(),ee(448)})();const CP={class:"feather-row"},_P={class:"feather-col-12"},jP={class:"feather-row doc-row"},IP={class:"feather-col-12"},PP=yP({__name:"OpenAPI",setup(Rr){const Lr=vP(),Zn=bP(),Qn=Kp(()=>Lr.state.menuModule.mainMenu?.homeUrl),ee=Kp(()=>[{label:"Home",to:Qn.value,isAbsoluteLink:!0},{label:"Endpoints",to:"#",position:"last"}]),J=Kp(()=>Lr.state.appModule.theme==="open-dark"?"dark":"light"),Z=async()=>{const N=J.value,I=document.getElementById("thedoc"),K="http",ie="https";let ue=await Lr.dispatch("helpModule/getOpenApi");if(window.location.protocol.slice(0,-1)===ie){const W=JSON.stringify(ue).replaceAll(K,ie);ue=JSON.parse(W)}Zn.value.loadSpec(ue),I&&(N==="light"?(I.setAttribute("theme","light"),I.setAttribute("bg-color","#fff"),I.setAttribute("nav-bg-color","#f4f7fc"),I.setAttribute("nav-text-color","#131736"),I.setAttribute("nav-hover-bg-color","#fff"),I.setAttribute("nav-hover-text-color","#00BFCB"),I.setAttribute("nav-accent-color","#00BFCB"),I.setAttribute("primary-color","#00BFCB")):(I.setAttribute("theme","dark"),I.setAttribute("bg-color","#15182B"),I.setAttribute("nav-bg-color","#0a0c1b"),I.setAttribute("nav-text-color","#fff"),I.setAttribute("nav-hover-bg-color","#3a3d4d"),I.setAttribute("nav-hover-text-color","#fff"),I.setAttribute("nav-accent-color","#b5eff3"),I.setAttribute("primary-color","#00BFCB")))};return xP(J,()=>Z()),wP(()=>{Z()}),(N,I)=>($P(),kP(EP,null,[no("div",CP,[no("div",_P,[SP(OP,{items:AP(ee)},null,8,["items"])])]),no("div",jP,[no("div",IP,[no("rapi-doc",{id:"thedoc",ref_key:"doc",ref:Zn,class:"doc","render-style":"read","fetch-credentials":"include","update-route":"false","allow-authentication":"false","show-header":"false"},null,512)])])],64))}});const LP=TP(PP,[["__scopeId","data-v-282daaab"]]);export{LP as default};
