var ui3;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  No: () => (/* reexport */ No),
  UserPermits: () => (/* reexport */ src_UserPermits),
  Yes: () => (/* reexport */ Yes),
  message: () => (/* reexport */ src_message),
  version: () => (/* binding */ version)
});

;// ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n(o,t,s)},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:h,getOwnPropertyNames:reactive_element_r,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,s)=>!reactive_element_i(t,s),b={attribute:!0,type:String,converter:u,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&reactive_element_e(this.prototype,t,h)}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=reactive_element_n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...reactive_element_r(t),...reactive_element_o(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c(s))}else void 0!==s&&i.push(c(s));return i}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=h.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[d("elementProperties")]=new Map,y[d("finalized")]=new Map,p?.({ReactiveElement:y}),(a.reactiveElementVersions??=[]).push("2.1.0");
//# sourceMappingURL=reactive-element.js.map

;// ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_a=Array.isArray,lit_html_u=t=>lit_html_a(t)||"function"==typeof t?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=lit_html_y(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129);function P(t,i){if(!lit_html_a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=lit_html_f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===lit_html_f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??lit_html_f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:lit_html_p):c===g||c===lit_html_p?c=m:c===v||c===_?c=lit_html_f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===lit_html_f?s+lit_html_n:d>=0?(o.push(a),s.slice(0,d)+lit_html_e+s.slice(d)+lit_html_h+x):s+lit_html_h+(-2===d?i:x)}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(lit_html_e)){const i=v[a++],s=r.getAttribute(t).split(lit_html_h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t)}else t.startsWith(lit_html_h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(lit_html_h),s=t.length-1;if(s>0){r.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],lit_html_l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],lit_html_l())}}}else if(8===r.nodeType)if(r.data===lit_html_o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(lit_html_h,t+1));)d.push({type:7,index:c}),t+=lit_html_h.length-1}c++}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s}}function lit_html_S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=lit_html_c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=lit_html_S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??lit_html_r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=C.nextNode(),o++)}return C.currentNode=lit_html_r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=lit_html_S(this,t,i),lit_html_c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):lit_html_u(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=t:this.T(lit_html_r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(lit_html_l()),this.O(lit_html_l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=lit_html_S(this,t,i,0),o=!lit_html_c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=lit_html_S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!lit_html_c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=lit_html_S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){lit_html_S(this,t)}}const Z={M:lit_html_e,P:lit_html_h,A:lit_html_o,C:1,L:V,R:M,D:lit_html_u,V:lit_html_S,I:R,H:k,N:I,U:L,B:H,F:z},j=lit_html_t.litHtmlPolyfillSupport;j?.(N,R),(lit_html_t.litHtmlVersions??=[]).push("3.3.0");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(lit_html_l(),t),t,void 0,s??{})}return h._$AI(t),h};
//# sourceMappingURL=lit-html.js.map

;// ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lit_element_s=globalThis;class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}lit_element_i._$litElement$=!0,lit_element_i["finalized"]=!0,lit_element_s.litElementHydrateSupport?.({LitElement:lit_element_i});const lit_element_o=lit_element_s.litElementPolyfillSupport;lit_element_o?.({LitElement:lit_element_i});const lit_element_n={_$AK:(t,e,r)=>{t._$AK(e,r)},_$AL:t=>t._$AL};(lit_element_s.litElementVersions??=[]).push("4.2.0");
//# sourceMappingURL=lit-element.js.map

;// ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// ./node_modules/@lit/reactive-element/decorators/property.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const property_o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},property_r=(t=property_o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function property_n(t){return(e,o)=>"object"==typeof o?property_r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
//# sourceMappingURL=property.js.map

;// ./node_modules/@lit/reactive-element/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(r){return property_n({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map

;// ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

;// ./src/UserPermits/index.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const data = [
    {
        id: 1,
        title: "1",
        children: [
            {
                id: 10,
                title: "10",
                children: [
                    {
                        id: 100,
                        title: "100",
                        permits: [
                            { key: "a", name: "AAA" },
                            { key: "b", name: "BBB" },
                            { key: "c", name: "CCC" },
                        ],
                    },
                    {
                        id: 101,
                        title: "101",
                        permits: [
                            { key: "a", name: "AAA" },
                            { key: "b", name: "BBB" },
                            { key: "c", name: "CCC" },
                        ],
                    },
                ],
            },
            {
                id: 11,
                title: "11",
                permits: [
                    { key: "a", name: "AAA" },
                    { key: "c", name: "CCC" },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "2",
        permits: [
            { key: "a", name: "AAA" },
            { key: "b", name: "BBB" },
            { key: "c", name: "CCC" },
        ],
    },
];
class UserPermits extends lit_element_i {
    constructor() {
        super(...arguments);
        this.value = {};
        this._value = {
            100: { checked: true, permits: { a: true } },
        };
    }
    onNodeCheck(id) {
        const node = this._value[id];
        let checked = !node || node.checked == false || node.half;
        const callback = (id, keys) => {
            const node = this._value[id];
            if (checked) {
                if (!node)
                    this._value[id] = { checked: true };
                this._value[id] = { checked: true };
            }
            else {
                if (node) {
                    node.checked = false;
                    node.half = false;
                }
            }
        };
        const walk = (tree, matched) => {
            const m = matched || tree.id == id;
            if (tree.children)
                for (let i of tree.children)
                    walk(i, m);
            if (m && tree.permits)
                callback(id, tree.permits?.map((i) => i.key));
        };
        for (let i of data)
            walk(i, false);
        this.updateValue(this._value);
    }
    onPermits(id, key) {
        if (!this._value[id])
            this._value[id] = { checked: true, permits: { [key]: false } };
        this._value[id].permits[key] = !this._value[id].permits[key];
        this.updateValue(this._value);
    }
    updateValue(value) {
        // 自下而上，在这里计算状态联动
        this.onChange?.(value);
        if (!this.value)
            this._value = value;
    }
    isPermitChecked(id, key) {
        const permits = this._value[id];
        if (!permits)
            return false;
        if (Array.isArray(key)) {
            for (let k of key) {
                if (!permits[k])
                    return false;
            }
            return true;
        }
        else
            return permits[key];
    }
    getNodeState(id) {
        const node = this._value[id];
        if (!node)
            return undefined;
        if (node.half)
            return "half";
        if (node.checked)
            return "checked";
        return undefined;
    }
    computeItems() {
        const items = [];
        const walk = (parents, node, indent, isFirst) => {
            const currentNode = {
                id: node.id,
                title: node.title,
                state: this.getNodeState(node.id),
            };
            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    const first = isFirst && i == 0;
                    let ps = [...parents, currentNode];
                    if (!first)
                        ps = [];
                    walk(ps, node.children[i], indent + 1, first);
                }
            }
            else if (node.permits) {
                items.push({
                    id: node.id,
                    indent: isFirst ? 0 : indent,
                    nodes: [...parents, currentNode],
                    permits: node.permits,
                });
            }
        };
        for (let i of data)
            walk([], i, 0, true);
        return items;
    }
    render() {
        const items = this.computeItems();
        return x `<div class="ct-user-permits">
      ${items.map((i) => x `<div class="ct-user-permits-row">
            <div class="ct-user-permits-menu">
              ${new Array(i.indent).fill(1).map(() => x `<div></div>`)}
              ${i.nodes.map((j) => x `<div>
                    <label>
                      <input
                        type="checkbox"
                        value="${i.id}"
                        ?checked=${j.state == "checked"}
                      />
                      ${j.title} (${j.state})
                    </label>
                  </div>`)}
            </div>
            <div class="ct-user-permits-permits">
              ${i.permits.map((j) => x `<label>
                    <input
                      type="checkbox"
                      value="${j.key}"
                      ?checked=${this._value[i.id]?.[j.key]}
                      @click="${() => this.onPermits(i.id, j.key)}"
                    />${j.name}</label
                  >`)}
            </div>
          </div>`)}
    </div>`;
    }
}
__decorate([
    property_n()
], UserPermits.prototype, "tree", void 0);
__decorate([
    property_n()
], UserPermits.prototype, "value", void 0);
__decorate([
    property_n()
], UserPermits.prototype, "onChange", void 0);
__decorate([
    state_r()
], UserPermits.prototype, "_value", void 0);
/* harmony default export */ const src_UserPermits = (UserPermits);

;// ./src/Servity/index.ts

const commonCSS = i `
  :host {
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    font-family: var(--ct-font-family);
    display: inline-block;
    height: auto;
    padding-inline: 7px;
    border-radius: 4px;
    border-color: transparent;
  }
`;
class ServityCritical extends lit_element_i {
    render() {
        return x `<slot>超危</slot>`;
    }
}
ServityCritical.styles = [
    commonCSS,
    i `
      :host {
        color: #ff0000;
        background: #ffdada;
      }
    `,
];
class ServityHigh extends lit_element_i {
    render() {
        return x `<slot>高危</slot>`;
    }
}
ServityHigh.styles = [
    commonCSS,
    i `
      :host {
        color: #d4380d;
        background: #fff2e8;
      }
    `,
];
class ServityMedium extends lit_element_i {
    render() {
        return x `<slot>中危</slot>`;
    }
}
ServityMedium.styles = [
    commonCSS,
    i `
      :host {
        color: #d48806;
        background: #fffbe6;
      }
    `,
];
class ServityLow extends lit_element_i {
    render() {
        return x `<slot>低危</slot>`;
    }
}
ServityLow.styles = [
    commonCSS,
    i `
      :host {
        color: #0958d9;
        background: #e6f4ff;
      }
    `,
];
class ServityInfo extends lit_element_i {
    render() {
        return x `<slot>信息</slot>`;
    }
}
ServityInfo.styles = [
    commonCSS,
    i `
      :host {
        color: rgba(0, 0, 0, 0.88);
        background: rgba(0, 0, 0, 0.06);
      }
    `,
];


;// ./src/YesOrNo/index.ts

class Yes extends lit_element_i {
    render() {
        return x `<slot>是</slot>`;
    }
}
Yes.styles = i `
    :host {
      font-family: var(--ct-font-family);
      color: var(--ct-color-success);
    }
  `;
class No extends lit_element_i {
    render() {
        return x `<slot>否</slot>`;
    }
}
No.styles = i `
    :host {
      font-family: var(--ct-font-family);
      color: var(--ct-color-danger);
    }
  `;


;// ./src/Button/index.ts
var Button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Button extends lit_element_i {
    render() {
        return x `<slot></slot>`;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.hasAttribute("role"))
            this.setAttribute("role", "button");
    }
}
Button_decorate([
    property_n()
], Button.prototype, "type", void 0);
/* harmony default export */ const src_Button = (Button);

;// ./src/message/index.ts
// https://ant-design.antgroup.com/components/message-cn
class Message {
    // timers: Array<NodeJS.Timeout> = [];
    constructor() {
        this.messages = [];
        this.cfg = {
            duration: 3,
            maxCount: 4,
        };
        this.element = document.createElement("div");
        this.element.className = "ct-message";
        document.body.append(this.element);
    }
    config(options) {
        Object.assign(this.cfg, options);
    }
    add(text, type = "info") {
        const id = new Date().getTime();
        this.messages.push({
            text,
            type,
            id,
        });
        this.render();
        // setTimeout(() => this.clear(id), this.cfg.duration * 1000);
    }
    clear(id) {
        this.messages = this.messages.filter((m) => m.id !== id);
        this.render();
    }
    destory() {
        this.messages = [];
    }
    render() {
        this.element.innerHTML = "";
        const start = Math.max(0, this.messages.length - this.cfg.maxCount);
        for (let i = start; i < this.messages.length; i++) {
            const msg = this.messages[i];
            const item = document.createElement("div");
            item.className = "ct-message-item";
            let classType = "ct-message-info";
            if (msg.type === "error")
                classType = "ct-message-error";
            if (msg.type === "success")
                classType = "ct-message-success";
            if (msg.type === "warning")
                classType = "ct-message-warning";
            const cnt = document.createElement("div");
            cnt.className = "ct-message-content " + classType;
            cnt.appendChild(document.createTextNode(msg.text));
            item.appendChild(cnt);
            this.element.appendChild(item);
        }
    }
}
const instance = new Message();
const message = {
    error: (text) => instance.add(text, "error"),
    info: (text) => instance.add(text, "info"),
    success: (text) => instance.add(text, "success"),
    warning: (text) => instance.add(text, "warning"),
    config: instance.config,
};
/* harmony default export */ const src_message = (message);

;// ./src/Breadcrumb/index.ts
var Breadcrumb_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Breadcrumb extends lit_element_i {
    constructor() {
        super();
        this.items = [];
    }
    // 处理面包屑项点击
    handleClick(item, index) {
        // 阻止默认行为和冒泡
        const event = new CustomEvent("item-click", {
            detail: { item, index },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
        console.log("click", item.click);
        if (typeof item.click == "function")
            item.click();
    }
    render() {
        return x `
      <ol class="breadcrumb">
        <li>
          <a
            class="home"
            href="#"
            @click="${(e) => {
            e.preventDefault();
            this.handleClick({ link: "/" }, -1);
        }}"
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path
                d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
              ></path>
            </svg>
            ${this.items.length > 0
            ? x `<span class="separator">/</span>`
            : ""}
          </a>
        </li>
        ${this.items.map((item, index) => {
            const isLast = index == this.items.length - 1;
            return x `
            <li>
              ${isLast
                ? x `<span class="active">${item.text}</span>`
                : x `<a
                    href=${item.link || "#"}
                    @click="${(e) => {
                    if (!item.link)
                        e.preventDefault();
                    this.handleClick(item, index);
                }}"
                    >${item.text}</a
                  >`}
              ${isLast ? "" : x `<span class="separator">/</span>`}
            </li>
          `;
        })}
      </ol>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.hasAttribute("role"))
            this.setAttribute("role", "nav");
    }
}
Breadcrumb.styles = i `
    :host {
      font-size: var(--ct-font-size);
    }
    .breadcrumb {
      display: flex;
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
    }
    .separator {
      padding: 0 16px;
      color: #969696;
    }
    .home {
      display: flex;
      align-items: center;
    }
    svg {
      fill: #969696;
    }
    a {
      text-decoration: none;
      color: #969696;
    }
    a:visited {
      color: #969696;
    }
    a:hover {
      color: #4d77ff;
    }
    span.active {
      color: #4d77ff;
    }
  `;
Breadcrumb_decorate([
    property_n({ type: Array })
], Breadcrumb.prototype, "items", void 0);
/* harmony default export */ const src_Breadcrumb = (Breadcrumb);

;// ./src/index.ts






customElements.define("ct-user-permits", src_UserPermits);
customElements.define("ct-yes", Yes);
customElements.define("ct-no", No);
customElements.define("ct-servity-critical", ServityCritical);
customElements.define("ct-servity-high", ServityHigh);
customElements.define("ct-servity-medium", ServityMedium);
customElements.define("ct-servity-low", ServityLow);
customElements.define("ct-servity-info", ServityInfo);
customElements.define("ct-button", src_Button);
customElements.define("ct-breadcrumb", src_Breadcrumb);
const version = "1.0.0";


ui3 = __webpack_exports__;
/******/ })()
;