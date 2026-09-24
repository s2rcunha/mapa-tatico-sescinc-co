var ww=Object.defineProperty;var Tw=(s,e,t)=>e in s?ww(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var q=(s,e,t)=>Tw(s,typeof e!="symbol"?e+"":e,t);const vw=()=>{};var $C={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(s,e){if(!s)throw Ui(e)},Ui=function(s){return new Error("Firebase Database ("+Qm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Aw=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],a=s[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qB={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,a=o?s[r+1]:0,l=r+2<s.length,u=l?s[r+2]:0,h=i>>2,B=(i&3)<<4|a>>4;let C=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(C=64)),n.push(t[h],t[B],t[C],t[g])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray($m(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Aw(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],a=r<s.length?t[s.charAt(r)]:0;++r;const u=r<s.length?t[s.charAt(r)]:64;++r;const B=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||a==null||u==null||B==null)throw new Rw;const C=i<<2|a>>4;if(n.push(C),u!==64){const g=a<<4&240|u>>2;if(n.push(g),B!==64){const E=u<<6&192|B;n.push(E)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ym=function(s){const e=$m(s);return qB.encodeByteArray(e,!0)},Zl=function(s){return Ym(s).replace(/\./g,"")},ec=function(s){try{return qB.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(s){return Xm(void 0,s)}function Xm(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bw(t)||(s[t]=Xm(s[t],e[t]));return s}function bw(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=()=>Zm().__FIREBASE_DEFAULTS__,Nw=()=>{if(typeof process>"u"||typeof $C>"u")return;const s=$C.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ow=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&ec(s[1]);return e&&JSON.parse(e)},jc=()=>{try{return vw()||Pw()||Nw()||Ow()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},e_=s=>{var e,t;return(t=(e=jc())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Fw=s=>{const e=e_(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},t_=()=>{var s;return(s=jc())==null?void 0:s.config},n_=s=>{var e;return(e=jc())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Zl(JSON.stringify(t)),Zl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KB(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function s_(){var e;const s=(e=jc())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function r_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vw(){const s=st();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Mw(){return Qm.NODE_ADMIN===!0}function i_(){return!s_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function o_(){return!s_()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function a_(){try{return typeof indexedDB=="object"}catch{return!1}}function Gw(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="FirebaseError";class zn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Hw,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sa.prototype.create)}}class Sa{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Uw(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new zn(r,a,n)}}function Uw(s,e){try{let t=0,n="";for(;t<s.length;){const r=s.indexOf("{$",t);if(r===-1){n+=s.substring(t);break}const i=s.indexOf("}",r+2);if(i===-1){n+=s.substring(t);break}const o=s.substring(r+2,i),a=e[o];n+=s.substring(t,r)+(a!=null?String(a):`<${o}?>`),t=i+1}return n}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(s){return JSON.parse(s)}function et(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(s){let e={},t={},n={},r="";try{const i=s.split(".");e=ea(ec(i[0])||""),t=ea(ec(i[1])||""),r=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},qw=function(s){const e=l_(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Kw=function(s){const e=l_(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function Dr(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Gh(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function tc(s,e,t){const n={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=e.call(t,s[r],r,s));return n}function As(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(YC(i)&&YC(o)){if(!As(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function YC(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let B=0;B<16;B++)n[B]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let B=0;B<16;B++)n[B]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let B=16;B<80;B++){const C=n[B-3]^n[B-8]^n[B-14]^n[B-16];n[B]=(C<<1|C>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let B=0;B<80;B++){B<40?B<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):B<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const C=(r<<5|r>>>27)+u+l+h+n[B]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=C}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e}}function Jw(s,e){const t=new zw(s,e);return t.subscribe.bind(t)}class zw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Ww(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=hh),r.error===void 0&&(r.error=hh),r.complete===void 0&&(r.complete=hh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ww(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function hh(){}function Jc(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r>=55296&&r<=56319){const i=r-55296;n++,J(n<s.length,"Surrogate pair missing trail surrogate.");const o=s.charCodeAt(n)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zc=function(s){let e=0;for(let t=0;t<s.length;t++){const n=s.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(s){return s&&s._delegate?s._delegate:s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jB(s){return(await fetch(s,{credentials:"include"})).ok}class Rs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qi;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xw(e))try{this.getOrInitializeService({instanceIdentifier:Xs})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=Xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xs){return this.instances.has(e)}getOptions(e=Xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Xs){return this.component?this.component.multipleInstances?e:Xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(s){return s===Xs?void 0:s}function Xw(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $w(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(de||(de={}));const eT={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},tT=de.INFO,nT={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},sT=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=nT[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=tT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const rT=(s,e)=>e.some(t=>s instanceof t);let XC,ZC;function iT(){return XC||(XC=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oT(){return ZC||(ZC=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c_=new WeakMap,Hh=new WeakMap,u_=new WeakMap,Bh=new WeakMap,JB=new WeakMap;function aT(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(ms(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&c_.set(t,s)}).catch(()=>{}),JB.set(e,s),e}function lT(s){if(Hh.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});Hh.set(s,e)}let Uh={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Hh.get(s);if(e==="objectStoreNames")return s.objectStoreNames||u_.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ms(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function cT(s){Uh=s(Uh)}function uT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(dh(this),e,...t);return u_.set(n,e.sort?e.sort():[e]),ms(n)}:oT().includes(s)?function(...e){return s.apply(dh(this),e),ms(c_.get(this))}:function(...e){return ms(s.apply(dh(this),e))}}function hT(s){return typeof s=="function"?uT(s):(s instanceof IDBTransaction&&lT(s),rT(s,iT())?new Proxy(s,Uh):s)}function ms(s){if(s instanceof IDBRequest)return aT(s);if(Bh.has(s))return Bh.get(s);const e=hT(s);return e!==s&&(Bh.set(s,e),JB.set(e,s)),e}const dh=s=>JB.get(s);function BT(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),a=ms(o);return n&&o.addEventListener("upgradeneeded",l=>{n(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dT=["get","getKey","getAll","getAllKeys","count"],fT=["put","add","delete","clear"],fh=new Map;function ep(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=fT.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||dT.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return fh.set(e,i),i}cT(s=>({...s,get:(e,t,n)=>ep(e,t)||s.get(e,t,n),has:(e,t)=>!!ep(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pT(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function pT(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qh="@firebase/app",tp="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Wc("@firebase/app"),gT="@firebase/app-compat",mT="@firebase/analytics-compat",_T="@firebase/analytics",ET="@firebase/app-check-compat",yT="@firebase/app-check",IT="@firebase/auth",DT="@firebase/auth-compat",wT="@firebase/database",TT="@firebase/data-connect",vT="@firebase/database-compat",AT="@firebase/functions",RT="@firebase/functions-compat",ST="@firebase/installations",bT="@firebase/installations-compat",PT="@firebase/messaging",NT="@firebase/messaging-compat",OT="@firebase/performance",FT="@firebase/performance-compat",xT="@firebase/remote-config",LT="@firebase/remote-config-compat",kT="@firebase/storage",VT="@firebase/storage-compat",MT="@firebase/firestore",GT="@firebase/ai",HT="@firebase/firestore-compat",UT="firebase",qT="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="[DEFAULT]",KT={[qh]:"fire-core",[gT]:"fire-core-compat",[_T]:"fire-analytics",[mT]:"fire-analytics-compat",[yT]:"fire-app-check",[ET]:"fire-app-check-compat",[IT]:"fire-auth",[DT]:"fire-auth-compat",[wT]:"fire-rtdb",[TT]:"fire-data-connect",[vT]:"fire-rtdb-compat",[AT]:"fire-fn",[RT]:"fire-fn-compat",[ST]:"fire-iid",[bT]:"fire-iid-compat",[PT]:"fire-fcm",[NT]:"fire-fcm-compat",[OT]:"fire-perf",[FT]:"fire-perf-compat",[xT]:"fire-rc",[LT]:"fire-rc-compat",[kT]:"fire-gcs",[VT]:"fire-gcs-compat",[MT]:"fire-fst",[HT]:"fire-fst-compat",[GT]:"fire-vertex","fire-js":"fire-js",[UT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map,jT=new Map,jh=new Map;function np(s,e){try{s.container.addComponent(e)}catch(t){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function wr(s){const e=s.name;if(jh.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,s);for(const t of nc.values())np(t,s);for(const t of jT.values())np(t,s);return!0}function Qc(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Qt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new Sa("app","Firebase",JT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=qT;function WT(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Kh,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw On.create("bad-app-name",{appName:String(r)});if(t||(t=t_()),!t)throw On.create("no-options");const i=nc.get(r);if(i)if(As(t,i.options)){if(As(n,i.config))return i;throw On.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw On.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Zw(r);for(const l of jh.values())o.addComponent(l);const a=new zT(t,n,o);return nc.set(r,a),a}function h_(s=Kh){const e=nc.get(s);if(!e&&s===Kh&&t_())return WT();if(!e)throw On.create("no-app",{appName:s});return e}function En(s,e,t){let n=KT[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(o.join(" "));return}wr(new Rs(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="firebase-heartbeat-database",$T=1,ta="firebase-heartbeat-store";let Ch=null;function B_(){return Ch||(Ch=BT(QT,$T,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(ta)}catch(t){console.warn(t)}}}}).catch(s=>{throw On.create("idb-open",{originalErrorMessage:s.message})})),Ch}async function YT(s){try{const t=(await B_()).transaction(ta),n=await t.objectStore(ta).get(d_(s));return await t.done,n}catch(e){if(e instanceof zn)Gn.warn(e.message);else{const t=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(t.message)}}}async function sp(s,e){try{const n=(await B_()).transaction(ta,"readwrite");await n.objectStore(ta).put(e,d_(s)),await n.done}catch(t){if(t instanceof zn)Gn.warn(t.message);else{const n=On.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gn.warn(n.message)}}}function d_(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1024,ZT=30;class ev{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>ZT){const o=sv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Gn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rp(),{heartbeatsToSend:n,unsentEntries:r}=tv(this._heartbeatsCache.heartbeats),i=Zl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Gn.warn(t),""}}}function rp(){return new Date().toISOString().substring(0,10)}function tv(s,e=XT){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ip(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ip(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class nv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a_()?Gw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return sp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return sp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function ip(s){return Zl(JSON.stringify({version:2,heartbeats:s})).length}function sv(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(s){wr(new Rs("platform-logger",e=>new CT(e),"PRIVATE")),wr(new Rs("heartbeat",e=>new ev(e),"PRIVATE")),En(qh,tp,s),En(qh,tp,"esm2020"),En("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rv("");function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iv=f_,C_=new Sa("auth","Firebase",f_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Wc("@firebase/auth");function xl(s,...e){sc.logLevel<=de.WARN&&sc.warn(`Auth (${kr}): ${s}`,...e)}function Ll(s,...e){sc.logLevel<=de.ERROR&&sc.error(`Auth (${kr}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(s,...e){throw zB(s,...e)}function rn(s,...e){return zB(s,...e)}function $c(s,e,t){const n={...iv(),[e]:t};return new Sa("auth","Firebase",n).create(e,{appName:s.name})}function fr(s){return $c(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ov(s,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&wn(s,"argument-error"),$c(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zB(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return C_.create(s,...e)}function oe(s,e,...t){if(!s)throw zB(e,...t)}function Fn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Ll(e),new Error(e)}function Hn(s,e){s||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function av(){return op()==="http:"||op()==="https:"}function op(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(av()||kw()||"connection"in navigator)?navigator.onLine:!0}function cv(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hn(t>e,"Short delay should be less than long delay!"),this.isMobile=KB()||r_()}get(){return lv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WB(s,e){Hn(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bv=new ba(3e4,6e4);function QB(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function ji(s,e,t,n,r={}){return g_(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=Ki({...o,key:s.config.apiKey}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const u={method:e,headers:l,...i};return Lw()||(u.referrerPolicy="strict-origin-when-cross-origin"),s.emulatorConfig&&Lr(s.emulatorConfig.host)&&(u.credentials="include"),p_.fetch()(await m_(s,s.config.apiHost,t,a),u)})}async function g_(s,e,t){s._canInitEmulator=!1;const n={...uv,...e};try{const r=new fv(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ml(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ml(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw ml(s,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $c(s,h,u);wn(s,h)}}catch(r){if(r instanceof zn)throw r;wn(s,"network-request-failed",{message:String(r)})}}async function dv(s,e,t,n,r={}){const i=await ji(s,e,t,n,r);return"mfaPendingCredential"in i&&wn(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function m_(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?WB(s.config,r):`${s.config.apiScheme}://${r}`;return hv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class fv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(rn(this.auth,"network-request-failed")),Bv.get())})}}function ml(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=rn(s,e,n);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(s,e){return ji(s,"POST","/v1/accounts:delete",e)}async function rc(s,e){return ji(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pv(s,e=!1){const t=Pe(s),n=await t.getIdToken(e),r=$B(n);oe(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:xo(ph(r.auth_time)),issuedAtTime:xo(ph(r.iat)),expirationTime:xo(ph(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ph(s){return Number(s)*1e3}function $B(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const r=ec(t);return r?JSON.parse(r):(Ll("Failed to decode base64 JWT payload"),null)}catch(r){return Ll("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ap(s){const e=$B(s);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof zn&&gv(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function gv({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(s){var B;const e=s.auth,t=await s.getIdToken(),n=await na(s,rc(e,{idToken:t}));oe(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(B=r.providerUserInfo)!=null&&B.length?__(r.providerUserInfo):[],o=Ev(s.providerData,i),a=s.isAnonymous,l=!(s.email&&r.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new zh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(s,h)}async function _v(s){const e=Pe(s);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ev(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function __(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(s,e){const t=await g_(s,{},async()=>{const n=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await m_(s,r,"/v1/token",`key=${i}`),a=await s._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return s.emulatorConfig&&Lr(s.emulatorConfig.host)&&(l.credentials="include"),p_.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Iv(s,e){return ji(s,"POST","/v2/accounts:revokeToken",QB(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=ap(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await yv(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Bi;return n&&(oe(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(oe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(s,e){oe(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class nn{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new mv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await na(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pv(this,e)}reload(){return _v(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ic(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await na(this,Cv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:B,emailVerified:C,isAnonymous:g,providerData:E,stsTokenManager:P}=t;oe(B&&P,e,"internal-error");const V=Bi.fromJSON(this.name,P);oe(typeof B=="string",e,"internal-error"),ns(n,e.name),ns(r,e.name),oe(typeof C=="boolean",e,"internal-error"),oe(typeof g=="boolean",e,"internal-error"),ns(i,e.name),ns(o,e.name),ns(a,e.name),ns(l,e.name),ns(u,e.name),ns(h,e.name);const W=new nn({uid:B,auth:e,email:r,emailVerified:C,displayName:n,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:V,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(W.providerData=E.map(Z=>({...Z}))),l&&(W._redirectEventId=l),W}static async _fromIdTokenResponse(e,t,n=!1){const r=new Bi;r.updateFromServerResponse(t);const i=new nn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ic(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];oe(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?__(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Bi;a.updateFromIdToken(n);const l=new nn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new zh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Map;function xn(s){Hn(s instanceof Function,"Expected a class definition");let e=lp.get(s);return e?(Hn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,lp.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}E_.type="NONE";const cp=E_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(s,e,t){return`firebase:${s}:${e}:${t}`}class Cr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=kl(this.userKey,r.apiKey,i),this.fullPersistenceKey=kl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await rc(this.auth,{idToken:e}).catch(()=>{});return t?nn._fromGetAccountInfoResponse(this.auth,t,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new Cr(xn(cp),e,n);const r=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let i=r[0]||xn(cp);const o=kl(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let B;if(typeof h=="string"){const C=await rc(e,{idToken:h}).catch(()=>{});if(!C)break;B=await nn._fromGetAccountInfoResponse(e,C,h)}else B=nn._fromJSON(e,h);u!==i&&(a=B),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Cr(i,e,n):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Cr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(A_(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||D_(e))&&!e.includes("edge/"))return"Chrome";if(T_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function y_(s=st()){return/firefox\//i.test(s)}function I_(s=st()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D_(s=st()){return/crios\//i.test(s)}function w_(s=st()){return/iemobile/i.test(s)}function T_(s=st()){return/android/i.test(s)}function v_(s=st()){return/blackberry/i.test(s)}function A_(s=st()){return/webos/i.test(s)}function YB(s=st()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Dv(s=st()){var e;return YB(s)&&!!((e=window.navigator)!=null&&e.standalone)}function wv(){return Vw()&&document.documentMode===10}function R_(s=st()){return YB(s)||T_(s)||A_(s)||v_(s)||/windows phone/i.test(s)||w_(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(s,e=[]){let t;switch(s){case"Browser":t=up(st());break;case"Worker":t=`${up(st())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(s,e={}){return ji(s,"GET","/v2/passwordPolicy",QB(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=6;class Rv{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Av,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new Tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xn(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted){try{this.persistenceManager=await Cr.create(this,e)}catch(o){xl(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Cr.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){xl(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rc(this,{idToken:e}),n=await nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(n=l.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(fr(this));const t=e?Pe(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vv(this),t=new Rv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sa("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Iv(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[xn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(l=>{if(!o)if(typeof t!="function"&&t.error)t.error(l);else if(n)n(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),r=$c(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&xl(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pa(s){return Pe(s)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jw(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XB={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bv(s){XB=s}function Pv(s){return XB.loadJS(s)}function Nv(){return XB.gapiScript}function Ov(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(s,e){const t=Qc(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(As(i,e??{}))return r;wn(r,"already-initialized")}return t.initialize({options:e})}function xv(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(xn);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Lv(s,e,t){const n=Pa(s);oe(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=b_(e),{host:o,port:a}=kv(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){oe(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),oe(As(u,n.config.emulator)&&As(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Lr(o)?jB(`${i}//${o}${l}`):Vv()}function b_(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function kv(s){const e=b_(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:Bp(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Bp(o)}}}function Bp(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Vv(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,t){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(s,e){return dv(s,"POST","/v1/accounts:signInWithIdp",QB(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="http://localhost";class Tr extends P_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Tr(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return di(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,di(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,di(e,t)}buildRequest(){const e={requestUri:Mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ki(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZB{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends ZB{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Na{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tr._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return hs.credential(t,n)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Na{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Bs.PROVIDER_ID,signInMethod:Bs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bs.credentialFromTaggedObject(e)}static credentialFromError(e){return Bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bs.credential(e.oauthAccessToken)}catch{return null}}}Bs.GITHUB_SIGN_IN_METHOD="github.com";Bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Na{constructor(){super("twitter.com")}static credential(e,t){return Tr._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ds.credential(t,n)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await nn._fromIdTokenResponse(e,n,r),o=dp(n);return new gi({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=dp(n);return new gi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function dp(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends zn{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new oc(e,t,n,r)}}function N_(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(s,i,e,n):i})}async function Gv(s,e,t=!1){const n=await na(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return gi._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(s,e,t=!1){const{auth:n}=s;if(Qt(n.app))return Promise.reject(fr(n));const r="reauthenticate";try{const i=await na(s,N_(n,r,e,s),t);oe(i.idToken,n,"internal-error");const o=$B(i.idToken);oe(o,n,"internal-error");const{sub:a}=o;return oe(s.uid===a,n,"user-mismatch"),gi._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(s,e,t=!1){if(Qt(s.app))return Promise.reject(fr(s));const n="signIn",r=await N_(s,n,e),i=await gi._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function tL(s,e){return O_(Pa(s),e)}function Uv(s,e,t,n){return Pe(s).onIdTokenChanged(e,t,n)}function qv(s,e,t){return Pe(s).beforeAuthStateChanged(e,t)}function nL(s,e,t,n){return Pe(s).onAuthStateChanged(e,t,n)}function sL(s){return Pe(s).signOut()}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=1e3,jv=10;class x_ extends F_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);wv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jv):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const Jv=x_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends F_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}L_.type="SESSION";const k_=L_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Yc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await zv(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=ed("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(B){const C=B;if(C.data.eventId===u)switch(C.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(C.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function Qv(s){yn().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function $v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yv(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function Xv(){return V_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="firebaseLocalStorageDb",Zv=1,lc="firebaseLocalStorage",G_="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xc(s,e){return s.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function eA(){const s=indexedDB.deleteDatabase(M_);return new Oa(s).toPromise()}function H_(){const s=indexedDB.open(M_,Zv);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(lc,{keyPath:G_})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(lc)?e(n):(n.close(),await eA(),e(await H_()))})})}async function fp(s,e,t){const n=Xc(s,!0).put({[G_]:e,value:t});return new Oa(n).toPromise()}async function tA(s,e){const t=Xc(s,!1).get(e),n=await new Oa(t).toPromise();return n===void 0?null:n.value}function Cp(s,e){const t=Xc(s,!0).delete(e);return new Oa(t).toPromise()}const nA=800,sA=3;class U_{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=H_(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>sA)throw n;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(Xv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $v(),!this.activeServiceWorker)return;this.sender=new Wv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await fp(e,ac,"1"),await Cp(e,ac)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>fp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>tA(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Xc(r,!1).getAll();return new Oa(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||xl(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}U_.type="LOCAL";const rA=U_;new ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(s,e){return e?xn(e):(oe(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends P_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iA(s){return O_(s.auth,new td(s),s.bypassAuthState)}function oA(s){const{auth:e,user:t}=s;return oe(t,e,"internal-error"),Hv(t,new td(s),s.bypassAuthState)}async function aA(s){const{auth:e,user:t}=s;return oe(t,e,"internal-error"),Gv(t,new td(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iA;case"linkViaPopup":case"linkViaRedirect":return aA;case"reauthViaPopup":case"reauthViaRedirect":return oA;default:wn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new ba(2e3,1e4);async function rL(s,e,t){if(Qt(s.app))return Promise.reject(rn(s,"operation-not-supported-in-this-environment"));const n=Pa(s);ov(s,e,ZB);const r=q_(n,t);return new lr(n,"signInViaPopup",e,r).executeNotNull()}class lr extends K_{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lA.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="pendingRedirect",Vl=new Map;class uA extends K_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const n=await hA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hA(s,e){const t=fA(e),n=dA(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function BA(s,e){Vl.set(s._key(),e)}function dA(s){return xn(s._redirectPersistence)}function fA(s){return kl(cA,s.config.apiKey,s.name)}async function CA(s,e,t=!1){if(Qt(s.app))return Promise.reject(fr(s));const n=Pa(s),r=q_(n,e),o=await new uA(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=600*1e3;class gA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!j_(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(rn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pA&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(e))}saveEventToCache(e){this.cachedEventUids.add(pp(e)),this.lastProcessedEventTime=Date.now()}}function pp(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function j_({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mA(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j_(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(s,e={}){return ji(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yA=/^https?/;async function IA(s){if(s.config.emulator)return;const{authorizedDomains:e}=await _A(s);for(const t of e)try{if(DA(t))return}catch{}wn(s,"unauthorized-domain")}function DA(s){const e=Jh(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!yA.test(t))return!1;if(EA.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new ba(3e4,6e4);function gp(){const s=yn().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function TA(s){return new Promise((e,t)=>{var r,i,o;function n(){gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gp(),t(rn(s,"network-request-failed"))},timeout:wA.get()})}if((i=(r=yn().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=yn().gapi)!=null&&o.load)n();else{const a=Ov("iframefcb");return yn()[a]=()=>{gapi.load?n():t(rn(s,"network-request-failed"))},Pv(`${Nv()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function vA(s){return Ml=Ml||TA(s),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new ba(5e3,15e3),RA="__/auth/iframe",SA="emulator/auth/iframe",bA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(s){const e=s.config;oe(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?WB(e,SA):`https://${s.config.authDomain}/${RA}`,n={apiKey:e.apiKey,appName:s.name,v:kr},r=PA.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Ki(n).slice(1)}`}async function OA(s){const e=await vA(s),t=yn().gapi;return oe(t,s,"internal-error"),e.open({where:document.body,url:NA(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bA,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=rn(s,"network-request-failed"),a=yn().setTimeout(()=>{i(o)},AA.get());function l(){yn().clearTimeout(a),r(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xA=500,LA=600,kA="_blank",VA="http://localhost";class mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MA(s,e,t,n=xA,r=LA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l={...FA,width:n.toString(),height:r.toString(),top:i,left:o},u=st().toLowerCase();t&&(a=D_(u)?kA:t),y_(u)&&(e=e||VA,l.scrollbars="yes");const h=Object.entries(l).reduce((C,[g,E])=>`${C}${g}=${E},`,"");if(Dv(u)&&a!=="_self")return GA(e||"",a),new mp(null);const B=window.open(e||"",a,h);oe(B,s,"popup-blocked");try{B.focus()}catch{}return new mp(B)}function GA(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="__/auth/handler",UA="emulator/auth/handler",qA=encodeURIComponent("fac");async function _p(s,e,t,n,r,i){oe(s.config.authDomain,s,"auth-domain-config-required"),oe(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:kr,eventId:r};if(e instanceof ZB){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Gh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,B]of Object.entries({}))o[h]=B}if(e instanceof Na){const h=e.getScopes().filter(B=>B!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await s._getAppCheckToken(),u=l?`#${qA}=${encodeURIComponent(l)}`:"";return`${KA(s)}?${Ki(a).slice(1)}${u}`}function KA({config:s}){return s.emulator?WB(s,UA):`https://${s.authDomain}/${HA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="webStorageSupport";class jA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=CA,this._overrideRedirectResult=BA}async _openPopup(e,t,n,r){var o;Hn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _p(e,t,n,Jh(),r);return MA(e,i,ed())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await _p(e,t,n,Jh(),r);return Qv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Hn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await OA(e),n=new gA(e);return t.register("authEvent",r=>(oe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gh,{type:gh},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[gh];i!==void 0&&t(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=IA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return R_()||I_()||YB()}}const JA=jA;var Ep="@firebase/auth",yp="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QA(s){wr(new Rs("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:a,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S_(s)},u=new Sv(n,r,i,l);return xv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),wr(new Rs("auth-internal",e=>{const t=Pa(e.getProvider("auth").getImmediate());return(n=>new zA(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Ep,yp,WA(s)),En(Ep,yp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=300,YA=n_("authIdTokenMaxAge")||$A;let Ip=null;const XA=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>YA)return;const r=t==null?void 0:t.token;Ip!==r&&(Ip=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function iL(s=h_()){const e=Qc(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Fv(s,{popupRedirectResolver:JA,persistence:[rA,Jv,k_]}),n=n_("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=XA(i.toString());qv(t,o,()=>o(t.currentUser)),Uv(t,a=>o(a))}}const r=e_("auth");return r&&Lv(t,`http://${r}`),t}function ZA(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}bv({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=rn("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",ZA().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QA("Browser");var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,J_;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function D(){}D.prototype=y.prototype,T.F=y.prototype,T.prototype=new D,T.prototype.constructor=T,T.D=function(R,A,N){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return y.prototype[A].apply(R,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,y,D){D||(D=0);const R=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)R[A]=y.charCodeAt(D++)|y.charCodeAt(D++)<<8|y.charCodeAt(D++)<<16|y.charCodeAt(D++)<<24;else for(A=0;A<16;++A)R[A]=y[D++]|y[D++]<<8|y[D++]<<16|y[D++]<<24;y=T.g[0],D=T.g[1],A=T.g[2];let N=T.g[3],I;I=y+(N^D&(A^N))+R[0]+3614090360&4294967295,y=D+(I<<7&4294967295|I>>>25),I=N+(A^y&(D^A))+R[1]+3905402710&4294967295,N=y+(I<<12&4294967295|I>>>20),I=A+(D^N&(y^D))+R[2]+606105819&4294967295,A=N+(I<<17&4294967295|I>>>15),I=D+(y^A&(N^y))+R[3]+3250441966&4294967295,D=A+(I<<22&4294967295|I>>>10),I=y+(N^D&(A^N))+R[4]+4118548399&4294967295,y=D+(I<<7&4294967295|I>>>25),I=N+(A^y&(D^A))+R[5]+1200080426&4294967295,N=y+(I<<12&4294967295|I>>>20),I=A+(D^N&(y^D))+R[6]+2821735955&4294967295,A=N+(I<<17&4294967295|I>>>15),I=D+(y^A&(N^y))+R[7]+4249261313&4294967295,D=A+(I<<22&4294967295|I>>>10),I=y+(N^D&(A^N))+R[8]+1770035416&4294967295,y=D+(I<<7&4294967295|I>>>25),I=N+(A^y&(D^A))+R[9]+2336552879&4294967295,N=y+(I<<12&4294967295|I>>>20),I=A+(D^N&(y^D))+R[10]+4294925233&4294967295,A=N+(I<<17&4294967295|I>>>15),I=D+(y^A&(N^y))+R[11]+2304563134&4294967295,D=A+(I<<22&4294967295|I>>>10),I=y+(N^D&(A^N))+R[12]+1804603682&4294967295,y=D+(I<<7&4294967295|I>>>25),I=N+(A^y&(D^A))+R[13]+4254626195&4294967295,N=y+(I<<12&4294967295|I>>>20),I=A+(D^N&(y^D))+R[14]+2792965006&4294967295,A=N+(I<<17&4294967295|I>>>15),I=D+(y^A&(N^y))+R[15]+1236535329&4294967295,D=A+(I<<22&4294967295|I>>>10),I=y+(A^N&(D^A))+R[1]+4129170786&4294967295,y=D+(I<<5&4294967295|I>>>27),I=N+(D^A&(y^D))+R[6]+3225465664&4294967295,N=y+(I<<9&4294967295|I>>>23),I=A+(y^D&(N^y))+R[11]+643717713&4294967295,A=N+(I<<14&4294967295|I>>>18),I=D+(N^y&(A^N))+R[0]+3921069994&4294967295,D=A+(I<<20&4294967295|I>>>12),I=y+(A^N&(D^A))+R[5]+3593408605&4294967295,y=D+(I<<5&4294967295|I>>>27),I=N+(D^A&(y^D))+R[10]+38016083&4294967295,N=y+(I<<9&4294967295|I>>>23),I=A+(y^D&(N^y))+R[15]+3634488961&4294967295,A=N+(I<<14&4294967295|I>>>18),I=D+(N^y&(A^N))+R[4]+3889429448&4294967295,D=A+(I<<20&4294967295|I>>>12),I=y+(A^N&(D^A))+R[9]+568446438&4294967295,y=D+(I<<5&4294967295|I>>>27),I=N+(D^A&(y^D))+R[14]+3275163606&4294967295,N=y+(I<<9&4294967295|I>>>23),I=A+(y^D&(N^y))+R[3]+4107603335&4294967295,A=N+(I<<14&4294967295|I>>>18),I=D+(N^y&(A^N))+R[8]+1163531501&4294967295,D=A+(I<<20&4294967295|I>>>12),I=y+(A^N&(D^A))+R[13]+2850285829&4294967295,y=D+(I<<5&4294967295|I>>>27),I=N+(D^A&(y^D))+R[2]+4243563512&4294967295,N=y+(I<<9&4294967295|I>>>23),I=A+(y^D&(N^y))+R[7]+1735328473&4294967295,A=N+(I<<14&4294967295|I>>>18),I=D+(N^y&(A^N))+R[12]+2368359562&4294967295,D=A+(I<<20&4294967295|I>>>12),I=y+(D^A^N)+R[5]+4294588738&4294967295,y=D+(I<<4&4294967295|I>>>28),I=N+(y^D^A)+R[8]+2272392833&4294967295,N=y+(I<<11&4294967295|I>>>21),I=A+(N^y^D)+R[11]+1839030562&4294967295,A=N+(I<<16&4294967295|I>>>16),I=D+(A^N^y)+R[14]+4259657740&4294967295,D=A+(I<<23&4294967295|I>>>9),I=y+(D^A^N)+R[1]+2763975236&4294967295,y=D+(I<<4&4294967295|I>>>28),I=N+(y^D^A)+R[4]+1272893353&4294967295,N=y+(I<<11&4294967295|I>>>21),I=A+(N^y^D)+R[7]+4139469664&4294967295,A=N+(I<<16&4294967295|I>>>16),I=D+(A^N^y)+R[10]+3200236656&4294967295,D=A+(I<<23&4294967295|I>>>9),I=y+(D^A^N)+R[13]+681279174&4294967295,y=D+(I<<4&4294967295|I>>>28),I=N+(y^D^A)+R[0]+3936430074&4294967295,N=y+(I<<11&4294967295|I>>>21),I=A+(N^y^D)+R[3]+3572445317&4294967295,A=N+(I<<16&4294967295|I>>>16),I=D+(A^N^y)+R[6]+76029189&4294967295,D=A+(I<<23&4294967295|I>>>9),I=y+(D^A^N)+R[9]+3654602809&4294967295,y=D+(I<<4&4294967295|I>>>28),I=N+(y^D^A)+R[12]+3873151461&4294967295,N=y+(I<<11&4294967295|I>>>21),I=A+(N^y^D)+R[15]+530742520&4294967295,A=N+(I<<16&4294967295|I>>>16),I=D+(A^N^y)+R[2]+3299628645&4294967295,D=A+(I<<23&4294967295|I>>>9),I=y+(A^(D|~N))+R[0]+4096336452&4294967295,y=D+(I<<6&4294967295|I>>>26),I=N+(D^(y|~A))+R[7]+1126891415&4294967295,N=y+(I<<10&4294967295|I>>>22),I=A+(y^(N|~D))+R[14]+2878612391&4294967295,A=N+(I<<15&4294967295|I>>>17),I=D+(N^(A|~y))+R[5]+4237533241&4294967295,D=A+(I<<21&4294967295|I>>>11),I=y+(A^(D|~N))+R[12]+1700485571&4294967295,y=D+(I<<6&4294967295|I>>>26),I=N+(D^(y|~A))+R[3]+2399980690&4294967295,N=y+(I<<10&4294967295|I>>>22),I=A+(y^(N|~D))+R[10]+4293915773&4294967295,A=N+(I<<15&4294967295|I>>>17),I=D+(N^(A|~y))+R[1]+2240044497&4294967295,D=A+(I<<21&4294967295|I>>>11),I=y+(A^(D|~N))+R[8]+1873313359&4294967295,y=D+(I<<6&4294967295|I>>>26),I=N+(D^(y|~A))+R[15]+4264355552&4294967295,N=y+(I<<10&4294967295|I>>>22),I=A+(y^(N|~D))+R[6]+2734768916&4294967295,A=N+(I<<15&4294967295|I>>>17),I=D+(N^(A|~y))+R[13]+1309151649&4294967295,D=A+(I<<21&4294967295|I>>>11),I=y+(A^(D|~N))+R[4]+4149444226&4294967295,y=D+(I<<6&4294967295|I>>>26),I=N+(D^(y|~A))+R[11]+3174756917&4294967295,N=y+(I<<10&4294967295|I>>>22),I=A+(y^(N|~D))+R[2]+718787259&4294967295,A=N+(I<<15&4294967295|I>>>17),I=D+(N^(A|~y))+R[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+N&4294967295}n.prototype.v=function(T,y){y===void 0&&(y=T.length);const D=y-this.blockSize,R=this.C;let A=this.h,N=0;for(;N<y;){if(A==0)for(;N<=D;)r(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(R[A++]=T.charCodeAt(N++),A==this.blockSize){r(this,R),A=0;break}}else for(;N<y;)if(R[A++]=T[N++],A==this.blockSize){r(this,R),A=0;break}}this.h=A,this.o+=y},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var D=T.length-8;D<T.length;++D)T[D]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)T[y++]=this.g[D]>>>R&255;return T};function i(T,y){var D=a;return Object.prototype.hasOwnProperty.call(D,T)?D[T]:D[T]=y(T)}function o(T,y){this.h=y;const D=[];let R=!0;for(let A=T.length-1;A>=0;A--){const N=T[A]|0;R&&N==y||(D[A]=N,R=!1)}this.g=D}var a={};function l(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return B;if(T<0)return V(u(-T));const y=[];let D=1;for(let R=0;T>=D;R++)y[R]=T/D|0,D*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return V(h(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=u(Math.pow(y,8));let R=B;for(let N=0;N<T.length;N+=8){var A=Math.min(8,T.length-N);const I=parseInt(T.substring(N,N+A),y);A<8?(A=u(Math.pow(y,A)),R=R.j(A).add(u(I))):(R=R.j(D),R=R.add(u(I)))}return R}var B=l(0),C=l(1),g=l(16777216);s=o.prototype,s.m=function(){if(P(this))return-V(this).m();let T=0,y=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);T+=(R>=0?R:4294967296+R)*y,y*=4294967296}return T},s.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(E(this))return"0";if(P(this))return"-"+V(this).toString(T);const y=u(Math.pow(T,6));var D=this;let R="";for(;;){const A=ye(D,y).g;D=W(D,A.j(y));let N=((D.g.length>0?D.g[0]:D.h)>>>0).toString(T);if(D=A,E(D))return N+R;for(;N.length<6;)N="0"+N;R=N+R}},s.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function E(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function P(T){return T.h==-1}s.l=function(T){return T=W(this,T),P(T)?-1:E(T)?0:1};function V(T){const y=T.g.length,D=[];for(let R=0;R<y;R++)D[R]=~T.g[R];return new o(D,~T.h).add(C)}s.abs=function(){return P(this)?V(this):this},s.add=function(T){const y=Math.max(this.g.length,T.g.length),D=[];let R=0;for(let A=0;A<=y;A++){let N=R+(this.i(A)&65535)+(T.i(A)&65535),I=(N>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);R=I>>>16,N&=65535,I&=65535,D[A]=I<<16|N}return new o(D,D[D.length-1]&-2147483648?-1:0)};function W(T,y){return T.add(V(y))}s.j=function(T){if(E(this)||E(T))return B;if(P(this))return P(T)?V(this).j(V(T)):V(V(this).j(T));if(P(T))return V(this.j(V(T)));if(this.l(g)<0&&T.l(g)<0)return u(this.m()*T.m());const y=this.g.length+T.g.length,D=[];for(var R=0;R<2*y;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<T.g.length;A++){const N=this.i(R)>>>16,I=this.i(R)&65535,St=T.i(A)>>>16,Js=T.i(A)&65535;D[2*R+2*A]+=I*Js,Z(D,2*R+2*A),D[2*R+2*A+1]+=N*Js,Z(D,2*R+2*A+1),D[2*R+2*A+1]+=I*St,Z(D,2*R+2*A+1),D[2*R+2*A+2]+=N*St,Z(D,2*R+2*A+2)}for(T=0;T<y;T++)D[T]=D[2*T+1]<<16|D[2*T];for(T=y;T<2*y;T++)D[T]=0;return new o(D,0)};function Z(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function se(T,y){this.g=T,this.h=y}function ye(T,y){if(E(y))throw Error("division by zero");if(E(T))return new se(B,B);if(P(T))return y=ye(V(T),y),new se(V(y.g),V(y.h));if(P(y))return y=ye(T,V(y)),new se(V(y.g),y.h);if(T.g.length>30){if(P(T)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var D=C,R=y;R.l(T)<=0;)D=ge(D),R=ge(R);var A=ue(D,1),N=ue(R,1);for(R=ue(R,2),D=ue(D,2);!E(R);){var I=N.add(R);I.l(T)<=0&&(A=A.add(D),N=I),R=ue(R,1),D=ue(D,1)}return y=W(T,A.j(y)),new se(A,y)}for(A=B;T.l(y)>=0;){for(D=Math.max(1,Math.floor(T.m()/y.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),N=u(D),I=N.j(y);P(I)||I.l(T)>0;)D-=R,N=u(D),I=N.j(y);E(N)&&(N=C),A=A.add(N),T=W(T,I)}return new se(A,T)}s.B=function(T){return ye(this,T).h},s.and=function(T){const y=Math.max(this.g.length,T.g.length),D=[];for(let R=0;R<y;R++)D[R]=this.i(R)&T.i(R);return new o(D,this.h&T.h)},s.or=function(T){const y=Math.max(this.g.length,T.g.length),D=[];for(let R=0;R<y;R++)D[R]=this.i(R)|T.i(R);return new o(D,this.h|T.h)},s.xor=function(T){const y=Math.max(this.g.length,T.g.length),D=[];for(let R=0;R<y;R++)D[R]=this.i(R)^T.i(R);return new o(D,this.h^T.h)};function ge(T){const y=T.g.length+1,D=[];for(let R=0;R<y;R++)D[R]=T.i(R)<<1|T.i(R-1)>>>31;return new o(D,T.h)}function ue(T,y){const D=y>>5;y%=32;const R=T.g.length-D,A=[];for(let N=0;N<R;N++)A[N]=y>0?T.i(N+D)>>>y|T.i(N+D+1)<<32-y:T.i(N+D);return new o(A,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,J_=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,_s=o}).apply(typeof Dp<"u"?Dp:typeof self<"u"?self:typeof window<"u"?window:{});var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z_,bo,W_,Gl,Wh,Q_,$_,Y_;(function(){var s,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof _l=="object"&&_l];for(var d=0;d<c.length;++d){var f=c[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function r(c,d){if(d)e:{var f=n;c=c.split(".");for(var p=0;p<c.length-1;p++){var b=c[p];if(!(b in f))break e;f=f[b]}c=c[c.length-1],p=f[c],d=d(p),d!=p&&d!=null&&e(f,c,{configurable:!0,writable:!0,value:d})}}r("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(c){return c||function(d){var f=[],p;for(p in d)Object.prototype.hasOwnProperty.call(d,p)&&f.push([p,d[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function l(c,d,f){return c.call.apply(c.bind,arguments)}function u(c,d,f){return u=l,u.apply(null,arguments)}function h(c,d){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),c.apply(this,p)}}function B(c,d){function f(){}f.prototype=d.prototype,c.Z=d.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(p,b,O){for(var Q=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)Q[ce-2]=arguments[ce];return d.prototype[b].apply(p,Q)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const d=c.length;if(d>0){const f=Array(d);for(let p=0;p<d;p++)f[p]=c[p];return f}return[]}function E(c,d){for(let p=1;p<arguments.length;p++){const b=arguments[p];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=c.length||0;const O=b.length||0;c.length=f+O;for(let Q=0;Q<O;Q++)c[f+Q]=b[Q]}else c.push(b)}}class P{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function V(c){o.setTimeout(()=>{throw c},0)}function W(){var c=T;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class Z{constructor(){this.h=this.g=null}add(d,f){const p=se.get();p.set(d,f),this.h?this.h.next=p:this.g=p,this.h=p}}var se=new P(()=>new ye,c=>c.reset());class ye{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,ue=!1,T=new Z,y=()=>{const c=Promise.resolve(void 0);ge=()=>{c.then(D)}};function D(){for(var c;c=W();){try{c.h.call(c.g)}catch(f){V(f)}var d=se;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}ue=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var N=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function St(c,d){A.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}B(St,A),St.prototype.init=function(c,d){const f=this.type=c.type,p=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(f=="mouseover"?d=c.fromElement:f=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&St.Z.h.call(this)},St.prototype.h=function(){St.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Js="closure_listenable_"+(Math.random()*1e6|0),JD=0;function zD(c,d,f,p,b){this.listener=c,this.proxy=null,this.src=d,this.type=f,this.capture=!!p,this.ha=b,this.key=++JD,this.da=this.fa=!1}function sl(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function rl(c,d,f){for(const p in c)d.call(f,c[p],p,c)}function WD(c,d){for(const f in c)d.call(void 0,c[f],f,c)}function Qf(c){const d={};for(const f in c)d[f]=c[f];return d}const $f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yf(c,d){let f,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(f in p)c[f]=p[f];for(let O=0;O<$f.length;O++)f=$f[O],Object.prototype.hasOwnProperty.call(p,f)&&(c[f]=p[f])}}function il(c){this.src=c,this.g={},this.h=0}il.prototype.add=function(c,d,f,p,b){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const Q=Uu(c,d,p,b);return Q>-1?(d=c[Q],f||(d.fa=!1)):(d=new zD(d,this.src,O,!!p,b),d.fa=f,c.push(d)),d};function Hu(c,d){const f=d.type;if(f in c.g){var p=c.g[f],b=Array.prototype.indexOf.call(p,d,void 0),O;(O=b>=0)&&Array.prototype.splice.call(p,b,1),O&&(sl(d),c.g[f].length==0&&(delete c.g[f],c.h--))}}function Uu(c,d,f,p){for(let b=0;b<c.length;++b){const O=c[b];if(!O.da&&O.listener==d&&O.capture==!!f&&O.ha==p)return b}return-1}var qu="closure_lm_"+(Math.random()*1e6|0),Ku={};function Xf(c,d,f,p,b){if(Array.isArray(d)){for(let O=0;O<d.length;O++)Xf(c,d[O],f,p,b);return null}return f=tC(f),c&&c[Js]?c.J(d,f,a(p)?!!p.capture:!1,b):QD(c,d,f,!1,p,b)}function QD(c,d,f,p,b,O){if(!d)throw Error("Invalid event type");const Q=a(b)?!!b.capture:!!b;let ce=Ju(c);if(ce||(c[qu]=ce=new il(c)),f=ce.add(d,f,p,Q,O),f.proxy)return f;if(p=$D(),f.proxy=p,p.src=c,p.listener=f,c.addEventListener)N||(b=Q),b===void 0&&(b=!1),c.addEventListener(d.toString(),p,b);else if(c.attachEvent)c.attachEvent(eC(d.toString()),p);else if(c.addListener&&c.removeListener)c.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $D(){function c(f){return d.call(c.src,c.listener,f)}const d=YD;return c}function Zf(c,d,f,p,b){if(Array.isArray(d))for(var O=0;O<d.length;O++)Zf(c,d[O],f,p,b);else p=a(p)?!!p.capture:!!p,f=tC(f),c&&c[Js]?(c=c.i,O=String(d).toString(),O in c.g&&(d=c.g[O],f=Uu(d,f,p,b),f>-1&&(sl(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete c.g[O],c.h--)))):c&&(c=Ju(c))&&(d=c.g[d.toString()],c=-1,d&&(c=Uu(d,f,p,b)),(f=c>-1?d[c]:null)&&ju(f))}function ju(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[Js])Hu(d.i,c);else{var f=c.type,p=c.proxy;d.removeEventListener?d.removeEventListener(f,p,c.capture):d.detachEvent?d.detachEvent(eC(f),p):d.addListener&&d.removeListener&&d.removeListener(p),(f=Ju(d))?(Hu(f,c),f.h==0&&(f.src=null,d[qu]=null)):sl(c)}}}function eC(c){return c in Ku?Ku[c]:Ku[c]="on"+c}function YD(c,d){if(c.da)c=!0;else{d=new St(d,this);const f=c.listener,p=c.ha||c.src;c.fa&&ju(c),c=f.call(p,d)}return c}function Ju(c){return c=c[qu],c instanceof il?c:null}var zu="__closure_events_fn_"+(Math.random()*1e9>>>0);function tC(c){return typeof c=="function"?c:(c[zu]||(c[zu]=function(d){return c.handleEvent(d)}),c[zu])}function Ct(){R.call(this),this.i=new il(this),this.M=this,this.G=null}B(Ct,R),Ct.prototype[Js]=!0,Ct.prototype.removeEventListener=function(c,d,f,p){Zf(this,c,d,f,p)};function Dt(c,d){var f,p=c.G;if(p)for(f=[];p;p=p.G)f.push(p);if(c=c.M,p=d.type||d,typeof d=="string")d=new A(d,c);else if(d instanceof A)d.target=d.target||c;else{var b=d;d=new A(p,c),Yf(d,b)}b=!0;let O,Q;if(f)for(Q=f.length-1;Q>=0;Q--)O=d.g=f[Q],b=ol(O,p,!0,d)&&b;if(O=d.g=c,b=ol(O,p,!0,d)&&b,b=ol(O,p,!1,d)&&b,f)for(Q=0;Q<f.length;Q++)O=d.g=f[Q],b=ol(O,p,!1,d)&&b}Ct.prototype.N=function(){if(Ct.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const f=c.g[d];for(let p=0;p<f.length;p++)sl(f[p]);delete c.g[d],c.h--}}this.G=null},Ct.prototype.J=function(c,d,f,p){return this.i.add(String(c),d,!1,f,p)},Ct.prototype.K=function(c,d,f,p){return this.i.add(String(c),d,!0,f,p)};function ol(c,d,f,p){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let b=!0;for(let O=0;O<d.length;++O){const Q=d[O];if(Q&&!Q.da&&Q.capture==f){const ce=Q.listener,Ze=Q.ha||Q.src;Q.fa&&Hu(c.i,Q),b=ce.call(Ze,p)!==!1&&b}}return b&&!p.defaultPrevented}function XD(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(c,d||0)}function nC(c){c.g=XD(()=>{c.g=null,c.i&&(c.i=!1,nC(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class ZD extends R{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:nC(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function so(c){R.call(this),this.h=c,this.g={}}B(so,R);var sC=[];function rC(c){rl(c.g,function(d,f){this.g.hasOwnProperty(f)&&ju(d)},c),c.g={}}so.prototype.N=function(){so.Z.N.call(this),rC(this)},so.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wu=o.JSON.stringify,ew=o.JSON.parse,tw=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function iC(){}function oC(){}var ro={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qu(){A.call(this,"d")}B(Qu,A);function $u(){A.call(this,"c")}B($u,A);var zs={},aC=null;function al(){return aC=aC||new Ct}zs.Ia="serverreachability";function lC(c){A.call(this,zs.Ia,c)}B(lC,A);function io(c){const d=al();Dt(d,new lC(d))}zs.STAT_EVENT="statevent";function cC(c,d){A.call(this,zs.STAT_EVENT,c),this.stat=d}B(cC,A);function wt(c){const d=al();Dt(d,new cC(d,c))}zs.Ja="timingevent";function uC(c,d){A.call(this,zs.Ja,c),this.size=d}B(uC,A);function oo(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},d)}function ao(){this.g=!0}ao.prototype.ua=function(){this.g=!1};function nw(c,d,f,p,b,O){c.info(function(){if(c.g)if(O){var Q="",ce=O.split("&");for(let Re=0;Re<ce.length;Re++){var Ze=ce[Re].split("=");if(Ze.length>1){const it=Ze[0];Ze=Ze[1];const hn=it.split("_");Q=hn.length>=2&&hn[1]=="type"?Q+(it+"="+Ze+"&"):Q+(it+"=redacted&")}}}else Q=null;else Q=O;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+d+`
`+f+`
`+Q})}function sw(c,d,f,p,b,O,Q){c.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+d+`
`+f+`
`+O+" "+Q})}function Jr(c,d,f,p){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+iw(c,f)+(p?" "+p:"")})}function rw(c,d){c.info(function(){return"TIMEOUT: "+d})}ao.prototype.info=function(){};function iw(c,d){if(!c.g)return d;if(!d)return null;try{const O=JSON.parse(d);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var f=O[c];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let Q=1;Q<p.length;Q++)p[Q]=""}}}}return Wu(O)}catch{return d}}var ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hC={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},BC;function Yu(){}B(Yu,iC),Yu.prototype.g=function(){return new XMLHttpRequest},BC=new Yu;function lo(c){return encodeURIComponent(String(c))}function ow(c){var d=1;c=c.split(":");const f=[];for(;d>0&&c.length;)f.push(c.shift()),d--;return c.length&&f.push(c.join(":")),f}function $n(c,d,f,p){this.j=c,this.i=d,this.l=f,this.S=p||1,this.V=new so(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dC}function dC(){this.i=null,this.g="",this.h=!1}var fC={},Xu={};function Zu(c,d,f){c.M=1,c.A=ul(un(d)),c.u=f,c.R=!0,CC(c,null)}function CC(c,d){c.F=Date.now(),cl(c),c.B=un(c.A);var f=c.B,p=c.S;Array.isArray(p)||(p=[String(p)]),RC(f.i,"t",p),c.C=0,f=c.j.L,c.h=new dC,c.g=JC(c.j,f?d:null,!c.u),c.P>0&&(c.O=new ZD(u(c.Y,c,c.g),c.P)),d=c.V,f=c.g,p=c.ba;var b="readystatechange";Array.isArray(b)||(b&&(sC[0]=b.toString()),b=sC);for(let O=0;O<b.length;O++){const Q=Xf(f,b[O],p||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=c.J?Qf(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),io(),nw(c.i,c.v,c.B,c.l,c.S,c.u)}$n.prototype.ba=function(c){c=c.target;const d=this.O;d&&Zn(c)==3?d.j():this.Y(c)},$n.prototype.Y=function(c){try{if(c==this.g)e:{const ce=Zn(this.g),Ze=this.g.ya(),Re=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||xC(this.g)))){this.K||ce!=4||Ze==7||(Ze==8||Re<=0?io(3):io(2)),eh(this);var d=this.g.ca();this.X=d;var f=aw(this);if(this.o=d==200,sw(this.i,this.v,this.B,this.l,this.S,ce,d),this.o){if(this.U&&!this.L){t:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(p)){var O=p;break t}}O=null}if(c=O)Jr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,th(this,c);else{this.o=!1,this.m=3,wt(12),Ws(this),co(this);break e}}if(this.R){c=!0;let it;for(;!this.K&&this.C<f.length;)if(it=lw(this,f),it==Xu){ce==4&&(this.m=4,wt(14),c=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(it==fC){this.m=4,wt(15),Jr(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else Jr(this.i,this.l,it,null),th(this,it);if(pC(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,wt(16),c=!1),this.o=this.o&&c,!c)Jr(this.i,this.l,f,"[Invalid Chunked Response]"),Ws(this),co(this);else if(f.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ch(Q),Q.P=!0,wt(11))}}else Jr(this.i,this.l,f,null),th(this,f);ce==4&&Ws(this),this.o&&!this.K&&(ce==4?UC(this.j,this):(this.o=!1,cl(this)))}else Iw(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),Ws(this),co(this)}}}catch{}finally{}};function aw(c){if(!pC(c))return c.g.la();const d=xC(c.g);if(d==="")return"";let f="";const p=d.length,b=Zn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Ws(c),co(c),"";c.h.i=new o.TextDecoder}for(let O=0;O<p;O++)c.h.h=!0,f+=c.h.i.decode(d[O],{stream:!(b&&O==p-1)});return d.length=0,c.h.g+=f,c.C=0,c.h.g}function pC(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function lw(c,d){var f=c.C,p=d.indexOf(`
`,f);return p==-1?Xu:(f=Number(d.substring(f,p)),isNaN(f)?fC:(p+=1,p+f>d.length?Xu:(d=d.slice(p,p+f),c.C=p+f,d)))}$n.prototype.cancel=function(){this.K=!0,Ws(this)};function cl(c){c.T=Date.now()+c.H,gC(c,c.H)}function gC(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=oo(u(c.aa,c),d)}function eh(c){c.D&&(o.clearTimeout(c.D),c.D=null)}$n.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(rw(this.i,this.B),this.M!=2&&(io(),wt(17)),Ws(this),this.m=2,co(this)):gC(this,this.T-c)};function co(c){c.j.I==0||c.K||UC(c.j,c)}function Ws(c){eh(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,rC(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function th(c,d){try{var f=c.j;if(f.I!=0&&(f.g==c||nh(f.h,c))){if(!c.L&&nh(f.h,c)&&f.I==3){try{var p=f.Ba.g.parse(d)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)Cl(f),dl(f);else break e;lh(f),wt(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=oo(u(f.Va,f),6e3));EC(f.h)<=1&&f.ta&&(f.ta=void 0)}else $s(f,11)}else if((c.L||f.g==c)&&Cl(f),!I(d))for(b=f.Ba.g.parse(d),d=0;d<b.length;d++){let Re=b[d];const it=Re[0];if(!(it<=f.K))if(f.K=it,Re=Re[1],f.I==2)if(Re[0]=="c"){f.M=Re[1],f.ba=Re[2];const hn=Re[3];hn!=null&&(f.ka=hn,f.j.info("VER="+f.ka));const Ys=Re[4];Ys!=null&&(f.za=Ys,f.j.info("SVER="+f.za));const es=Re[5];es!=null&&typeof es=="number"&&es>0&&(p=1.5*es,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const ts=c.g;if(ts){const gl=ts.g?ts.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gl){var O=p.h;O.g||gl.indexOf("spdy")==-1&&gl.indexOf("quic")==-1&&gl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(sh(O,O.h),O.h=null))}if(p.G){const uh=ts.g?ts.g.getResponseHeader("X-HTTP-Session-Id"):null;uh&&(p.wa=uh,Le(p.J,p.G,uh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var Q=c;if(p.na=jC(p,p.L?p.ba:null,p.W),Q.L){yC(p.h,Q);var ce=Q,Ze=p.O;Ze&&(ce.H=Ze),ce.D&&(eh(ce),cl(ce)),p.g=Q}else GC(p);f.i.length>0&&fl(f)}else Re[0]!="stop"&&Re[0]!="close"||$s(f,7);else f.I==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?$s(f,7):ah(f):Re[0]!="noop"&&f.l&&f.l.qa(Re),f.A=0)}}io(4)}catch{}}var cw=class{constructor(c,d){this.g=c,this.map=d}};function mC(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _C(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function EC(c){return c.h?1:c.g?c.g.size:0}function nh(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function sh(c,d){c.g?c.g.add(d):c.h=d}function yC(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}mC.prototype.cancel=function(){if(this.i=IC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function IC(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const f of c.g.values())d=d.concat(f.G);return d}return g(c.i)}var DC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uw(c,d){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const p=c[f].indexOf("=");let b,O=null;p>=0?(b=c[f].substring(0,p),O=c[f].substring(p+1)):b=c[f],d(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof Yn?(this.l=c.l,uo(this,c.j),this.o=c.o,this.g=c.g,ho(this,c.u),this.h=c.h,rh(this,SC(c.i)),this.m=c.m):c&&(d=String(c).match(DC))?(this.l=!1,uo(this,d[1]||"",!0),this.o=Bo(d[2]||""),this.g=Bo(d[3]||"",!0),ho(this,d[4]),this.h=Bo(d[5]||"",!0),rh(this,d[6]||"",!0),this.m=Bo(d[7]||"")):(this.l=!1,this.i=new Co(null,this.l))}Yn.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(fo(d,wC,!0),":");var f=this.g;return(f||d=="file")&&(c.push("//"),(d=this.o)&&c.push(fo(d,wC,!0),"@"),c.push(lo(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(fo(f,f.charAt(0)=="/"?dw:Bw,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",fo(f,Cw)),c.join("")},Yn.prototype.resolve=function(c){const d=un(this);let f=!!c.j;f?uo(d,c.j):f=!!c.o,f?d.o=c.o:f=!!c.g,f?d.g=c.g:f=c.u!=null;var p=c.h;if(f)ho(d,c.u);else if(f=!!c.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=d.h.lastIndexOf("/");b!=-1&&(p=d.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let Q=0;Q<b.length;){const ce=b[Q++];ce=="."?p&&Q==b.length&&O.push(""):ce==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),p&&Q==b.length&&O.push("")):(O.push(ce),p=!0)}p=O.join("/")}else p=b}return f?d.h=p:f=c.i.toString()!=="",f?rh(d,SC(c.i)):f=!!c.m,f&&(d.m=c.m),d};function un(c){return new Yn(c)}function uo(c,d,f){c.j=f?Bo(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function ho(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function rh(c,d,f){d instanceof Co?(c.i=d,pw(c.i,c.l)):(f||(d=fo(d,fw)),c.i=new Co(d,c.l))}function Le(c,d,f){c.i.set(d,f)}function ul(c){return Le(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Bo(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function fo(c,d,f){return typeof c=="string"?(c=encodeURI(c).replace(d,hw),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function hw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wC=/[#\/\?@]/g,Bw=/[#\?:]/g,dw=/[#\?]/g,fw=/[#\?@]/g,Cw=/#/g;function Co(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Qs(c){c.g||(c.g=new Map,c.h=0,c.i&&uw(c.i,function(d,f){c.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}s=Co.prototype,s.add=function(c,d){Qs(this),this.i=null,c=zr(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(d),this.h+=1,this};function TC(c,d){Qs(c),d=zr(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function vC(c,d){return Qs(c),d=zr(c,d),c.g.has(d)}s.forEach=function(c,d){Qs(this),this.g.forEach(function(f,p){f.forEach(function(b){c.call(d,b,p,this)},this)},this)};function AC(c,d){Qs(c);let f=[];if(typeof d=="string")vC(c,d)&&(f=f.concat(c.g.get(zr(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)f=f.concat(c[d]);return f}s.set=function(c,d){return Qs(this),this.i=null,c=zr(this,c),vC(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},s.get=function(c,d){return c?(c=AC(this,c),c.length>0?String(c[0]):d):d};function RC(c,d,f){TC(c,d),f.length>0&&(c.i=null,c.g.set(zr(c,d),g(f)),c.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let p=0;p<d.length;p++){var f=d[p];const b=lo(f);f=AC(this,f);for(let O=0;O<f.length;O++){let Q=b;f[O]!==""&&(Q+="="+lo(f[O])),c.push(Q)}}return this.i=c.join("&")};function SC(c){const d=new Co;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function zr(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function pw(c,d){d&&!c.j&&(Qs(c),c.i=null,c.g.forEach(function(f,p){const b=p.toLowerCase();p!=b&&(TC(this,p),RC(this,b,f))},c)),c.j=d}function gw(c,d){const f=new ao;if(o.Image){const p=new Image;p.onload=h(Xn,f,"TestLoadImage: loaded",!0,d,p),p.onerror=h(Xn,f,"TestLoadImage: error",!1,d,p),p.onabort=h(Xn,f,"TestLoadImage: abort",!1,d,p),p.ontimeout=h(Xn,f,"TestLoadImage: timeout",!1,d,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=c}else d(!1)}function mw(c,d){const f=new ao,p=new AbortController,b=setTimeout(()=>{p.abort(),Xn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:p.signal}).then(O=>{clearTimeout(b),O.ok?Xn(f,"TestPingServer: ok",!0,d):Xn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),Xn(f,"TestPingServer: error",!1,d)})}function Xn(c,d,f,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(f)}catch{}}function _w(){this.g=new tw}function ih(c){this.i=c.Sb||null,this.h=c.ab||!1}B(ih,iC),ih.prototype.g=function(){return new hl(this.i,this.h)};function hl(c,d){Ct.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}B(hl,Ct),s=hl.prototype,s.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,go(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,po(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bC(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function bC(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?po(this):go(this),this.readyState==3&&bC(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,po(this))},s.Na=function(c){this.g&&(this.response=c,po(this))},s.ga=function(){this.g&&po(this)};function po(c){c.readyState=4,c.l=null,c.j=null,c.B=null,go(c)}s.setRequestHeader=function(c,d){this.A.append(c,d)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=d.next();return c.join(`\r
`)};function go(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function PC(c){let d="";return rl(c,function(f,p){d+=p,d+=":",d+=f,d+=`\r
`}),d}function oh(c,d,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=PC(f),typeof c=="string"?f!=null&&lo(f):Le(c,d,f))}function qe(c){Ct.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}B(qe,Ct);var Ew=/^https?$/i,yw=["POST","PUT"];s=qe.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,d,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():BC.g(),this.g.onreadystatechange=C(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(O){NC(this,O);return}if(c=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)f.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())f.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(yw,d,void 0)>=0)||p||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,Q]of f)this.g.setRequestHeader(O,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){NC(this,O)}};function NC(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,OC(c),Bl(c)}function OC(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Dt(this,"complete"),Dt(this,"abort"),Bl(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bl(this,!0)),qe.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?FC(this):this.Xa())},s.Xa=function(){FC(this)};function FC(c){if(c.h&&typeof i<"u"){if(c.v&&Zn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Dt(c,"readystatechange"),Zn(c)==4){c.h=!1;try{const O=c.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var p;if(p=O===0){let Q=String(c.D).match(DC)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),p=!Ew.test(Q?Q.toLowerCase():"")}f=p}if(f)Dt(c,"complete"),Dt(c,"success");else{c.o=6;try{var b=Zn(c)>2?c.g.statusText:""}catch{b=""}c.l=b+" ["+c.ca()+"]",OC(c)}}finally{Bl(c)}}}}function Bl(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,d||Dt(c,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Zn(c){return c.g?c.g.readyState:0}s.ca=function(){try{return Zn(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),ew(d)}};function xC(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Iw(c){const d={};c=(c.g&&Zn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<c.length;p++){if(I(c[p]))continue;var f=ow(c[p]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=d[b]||[];d[b]=O,O.push(f)}WD(d,function(p){return p.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(c,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||d}function LC(c){this.za=0,this.i=[],this.j=new ao,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mo("baseRetryDelayMs",5e3,c),this.Za=mo("retryDelaySeedMs",1e4,c),this.Ta=mo("forwardChannelMaxRetries",2,c),this.va=mo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new mC(c&&c.concurrentRequestLimit),this.Ba=new _w,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=LC.prototype,s.ka=8,s.I=1,s.connect=function(c,d,f,p){wt(0),this.W=c,this.H=d||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=jC(this,null,this.W),fl(this)};function ah(c){if(kC(c),c.I==3){var d=c.V++,f=un(c.J);if(Le(f,"SID",c.M),Le(f,"RID",d),Le(f,"TYPE","terminate"),_o(c,f),d=new $n(c,c.j,d),d.M=2,d.A=ul(un(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=JC(d.j,null),d.g.ea(d.A)),d.F=Date.now(),cl(d)}KC(c)}function dl(c){c.g&&(ch(c),c.g.cancel(),c.g=null)}function kC(c){dl(c),c.v&&(o.clearTimeout(c.v),c.v=null),Cl(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function fl(c){if(!_C(c.h)&&!c.m){c.m=!0;var d=c.Ea;ge||y(),ue||(ge(),ue=!0),T.add(d,c),c.D=0}}function Dw(c,d){return EC(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=oo(u(c.Ea,c,d),qC(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const b=new $n(this,this.j,c);let O=this.o;if(this.U&&(O?(O=Qf(O),Yf(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(d+=p,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=MC(this,b,d),f=un(this.J),Le(f,"RID",c),Le(f,"CVER",22),this.G&&Le(f,"X-HTTP-Session-Id",this.G),_o(this,f),O&&(this.R?d="headers="+lo(PC(O))+"&"+d:this.u&&oh(f,this.u,O)),sh(this.h,b),this.Ra&&Le(f,"TYPE","init"),this.S?(Le(f,"$req",d),Le(f,"SID","null"),b.U=!0,Zu(b,f,null)):Zu(b,f,d),this.I=2}}else this.I==3&&(c?VC(this,c):this.i.length==0||_C(this.h)||VC(this))};function VC(c,d){var f;d?f=d.l:f=c.V++;const p=un(c.J);Le(p,"SID",c.M),Le(p,"RID",f),Le(p,"AID",c.K),_o(c,p),c.u&&c.o&&oh(p,c.u,c.o),f=new $n(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),d&&(c.i=d.G.concat(c.i)),d=MC(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),sh(c.h,f),Zu(f,p,d)}function _o(c,d){c.H&&rl(c.H,function(f,p){Le(d,p,f)}),c.l&&rl({},function(f,p){Le(d,p,f)})}function MC(c,d,f){f=Math.min(c.i.length,f);const p=c.l?u(c.l.Ka,c.l,c):null;e:{var b=c.i;let ce=-1;for(;;){const Ze=["count="+f];ce==-1?f>0?(ce=b[0].g,Ze.push("ofs="+ce)):ce=0:Ze.push("ofs="+ce);let Re=!0;for(let it=0;it<f;it++){var O=b[it].g;const hn=b[it].map;if(O-=ce,O<0)ce=Math.max(0,b[it].g-100),Re=!1;else try{O="req"+O+"_"||"";try{var Q=hn instanceof Map?hn:Object.entries(hn);for(const[Ys,es]of Q){let ts=es;a(es)&&(ts=Wu(es)),Ze.push(O+Ys+"="+encodeURIComponent(ts))}}catch(Ys){throw Ze.push(O+"type="+encodeURIComponent("_badmap")),Ys}}catch{p&&p(hn)}}if(Re){Q=Ze.join("&");break e}}Q=void 0}return c=c.i.splice(0,f),d.G=c,Q}function GC(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;ge||y(),ue||(ge(),ue=!0),T.add(d,c),c.A=0}}function lh(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=oo(u(c.Da,c),qC(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,HC(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=oo(u(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),dl(this),HC(this))};function ch(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function HC(c){c.g=new $n(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=un(c.na);Le(d,"RID","rpc"),Le(d,"SID",c.M),Le(d,"AID",c.K),Le(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&Le(d,"TO",c.ia),Le(d,"TYPE","xmlhttp"),_o(c,d),c.u&&c.o&&oh(d,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=ul(un(d)),f.u=null,f.R=!0,CC(f,c)}s.Va=function(){this.C!=null&&(this.C=null,dl(this),lh(this),wt(19))};function Cl(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function UC(c,d){var f=null;if(c.g==d){Cl(c),ch(c),c.g=null;var p=2}else if(nh(c.h,d))f=d.G,yC(c.h,d),p=1;else return;if(c.I!=0){if(d.o)if(p==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var b=c.D;p=al(),Dt(p,new uC(p,f)),fl(c)}else GC(c);else if(b=d.m,b==3||b==0&&d.X>0||!(p==1&&Dw(c,d)||p==2&&lh(c)))switch(f&&f.length>0&&(d=c.h,d.i=d.i.concat(f)),b){case 1:$s(c,5);break;case 4:$s(c,10);break;case 3:$s(c,6);break;default:$s(c,2)}}}function qC(c,d){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*d}function $s(c,d){if(c.j.info("Error code "+d),d==2){var f=u(c.bb,c),p=c.Ua;const b=!p;p=new Yn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||uo(p,"https"),ul(p),b?gw(p.toString(),f):mw(p.toString(),f)}else wt(2);c.I=0,c.l&&c.l.pa(d),KC(c),kC(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function KC(c){if(c.I=0,c.ja=[],c.l){const d=IC(c.h);(d.length!=0||c.i.length!=0)&&(E(c.ja,d),E(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function jC(c,d,f){var p=f instanceof Yn?un(f):new Yn(f);if(p.g!="")d&&(p.g=d+"."+p.g),ho(p,p.u);else{var b=o.location;p=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;const O=new Yn(null);p&&uo(O,p),d&&(O.g=d),b&&ho(O,b),f&&(O.h=f),p=O}return f=c.G,d=c.wa,f&&d&&Le(p,f,d),Le(p,"VER",c.ka),_o(c,p),p}function JC(c,d,f){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new qe(new ih({ab:f})):new qe(c.ma),d.Fa(c.L),d}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function zC(){}s=zC.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function pl(){}pl.prototype.g=function(c,d){return new Mt(c,d)};function Mt(c,d){Ct.call(this),this.g=new LC(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!I(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!I(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Wr(this)}B(Mt,Ct),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){ah(this.g)},Mt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=Wu(c),c=f);d.i.push(new cw(d.Ya++,c)),d.I==3&&fl(d)},Mt.prototype.N=function(){this.g.l=null,delete this.j,ah(this.g),delete this.g,Mt.Z.N.call(this)};function WC(c){Qu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const f in d){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}B(WC,Qu);function QC(){$u.call(this),this.status=1}B(QC,$u);function Wr(c){this.g=c}B(Wr,zC),Wr.prototype.ra=function(){Dt(this.g,"a")},Wr.prototype.qa=function(c){Dt(this.g,new WC(c))},Wr.prototype.pa=function(c){Dt(this.g,new QC)},Wr.prototype.oa=function(){Dt(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Y_=function(){return new pl},$_=function(){return al()},Q_=zs,Wh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ll.NO_ERROR=0,ll.TIMEOUT=8,ll.HTTP_ERROR=6,Gl=ll,hC.COMPLETE="complete",W_=hC,oC.EventType=ro,ro.OPEN="a",ro.CLOSE="b",ro.ERROR="c",ro.MESSAGE="d",Ct.prototype.listen=Ct.prototype.J,bo=oC,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,z_=qe}).apply(typeof _l<"u"?_l:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var Se,M=(Se=class{},q(Se,"FOLD_CASE",1),q(Se,"LITERAL",2),q(Se,"CLASS_NL",4),q(Se,"DOT_NL",8),q(Se,"ONE_LINE",16),q(Se,"NON_GREEDY",32),q(Se,"PERL_X",64),q(Se,"UNICODE_GROUPS",128),q(Se,"WAS_DOLLAR",256),q(Se,"LOOKBEHIND",512),q(Se,"MATCH_NL",Se.CLASS_NL|Se.DOT_NL),q(Se,"PERL",Se.CLASS_NL|Se.ONE_LINE|Se.PERL_X|Se.UNICODE_GROUPS),q(Se,"POSIX",0),q(Se,"UNANCHORED",0),q(Se,"ANCHOR_START",1),q(Se,"ANCHOR_BOTH",2),Se);const Qr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},sa=128,Qh=new Int32Array(sa),$h=new Int32Array(sa),El=65535;for(let s=0;s<sa;s++)s>=97&&s<=122?Qh[s]=s-32:Qh[s]=s,s>=65&&s<=90?$h[s]=s+32:$h[s]=s;var Mh,F=(Mh=class{static toUpperCase(s){if(s<sa)return Qh[s];const e=String.fromCodePoint(s).toUpperCase(),t=e.codePointAt(0)>El?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=n.codePointAt(0)>El?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}static toLowerCase(s){if(s<sa)return $h[s];const e=String.fromCodePoint(s).toLowerCase(),t=e.codePointAt(0)>El?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=n.codePointAt(0)>El?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}},q(Mh,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),Mh),m=class{constructor(s,e=!1){this.data=s,this.isStride1=e,this.SIZE=e?2:3}getLo(s){return this.data[s*this.SIZE]}getHi(s){return this.data[s*this.SIZE+1]}getStride(s){return this.isStride1?1:this.data[s*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const X_=new Uint8Array(256);for(let s=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";s<64;s++)X_[e.charCodeAt(s)]=s;const Z_=s=>{const e=[];let t=0,n=0;for(let r=0;r<s.length;r++){let i=X_[s.charCodeAt(r)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},_=(s,e)=>{const t=Z_(s),n=e?t.length/2:t.length/3,r=new Uint32Array(n*3);let i=0,o=0;for(let a=0;a<n;a++)i+=t[o++],r[a*3]=i,i+=t[o++],r[a*3+1]=i,r[a*3+2]=e?1:t[o++];return r},eR=s=>{const e=Z_(s),t=new Map;let n=0;for(let r=0;r<e.length;r+=2){n+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var yl=class{constructor(s){this.initializer=s,this.cache=new Map}has(s){return s in this.initializer}get(s){if(this.cache.has(s))return this.cache.get(s);const e=this.initializer[s],t=e?e():null;return this.cache.set(s,t),t}},ls,Pt=(ls=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=eR("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new m(_("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},q(ls,"_CASE_ORBIT",null),q(ls,"_Print",null),q(ls,"CATEGORIES",new yl({C:()=>new m(_("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new m(_("AfgDgB",!0)),Cf:()=>new m(_("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new m(_("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new m(_("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new m(_("gg2B--B",!0)),L:()=>new m(_("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new m(_("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new m(_("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new m(_("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new m(_("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new m(_("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new m(_("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new m(_("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new m(_("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new m(_("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new m(_("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new m(_("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new m(_("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new m(_("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new m(_("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new m(_("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new m(_("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new m(_("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new m(_("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new m(_("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new m(_("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new m(_("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new m(_("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new m(_("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new m(_("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new m(_("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new m(_("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new m(_("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new m(_("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new m(_("ohIA",!0)),Zp:()=>new m(_("phIA",!0)),Zs:()=>new m(_("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new m(_("wBJIFbF",!0)),Alphabetic:()=>new m(_("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new m(_("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new m(_("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new m(_("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new m(_("7-8DE",!0)),Emoji_Modifier_Base:()=>new m(_("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new m(_("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new m(_("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new m(_("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new m(_("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new m(_("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new m(_("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new m(_("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new m(_("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new m(_("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),q(ls,"SCRIPTS",new yl({Adlam:()=>new m(_("go6DrCFJFB",!0)),Ahom:()=>new m(_("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new m(_("ggxCmS",!0)),Arabic:()=>new m(_("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new m(_("xpBlBDxBDCks9BE",!0)),Avestan:()=>new m(_("g4iC1BEG",!0)),Balinese:()=>new m(_("g4GsCCxB",!0)),Bamum:()=>new m(_("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new m(_("w26CdDF",!0)),Batak:()=>new m(_("g+GzBJD",!0)),Bengali:()=>new m(_("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new m(_("g17CYDY",!0)),Bhaiksuki:()=>new m(_("ggnCICsBCNLc",!0)),Bopomofo:()=>new m(_("qXB6wLqBxDf",!0)),Brahmi:()=>new m(_("ggkCtCFjBKA",!0)),Braille:()=>new m(_("ggK-H",!0)),Buginese:()=>new m(_("gwGbDB",!0)),Buhid:()=>new m(_("g6FT",!0)),Canadian_Aboriginal:()=>new m(_("ggF-TxRlC7tgCP",!0)),Carian:()=>new m(_("g1gCwB",!0)),Caucasian_Albanian:()=>new m(_("wphCzBMA",!0)),Chakma:()=>new m(_("gokC0BCR",!0)),Cham:()=>new m(_("gwqB2BKNDJDD",!0)),Cherokee:()=>new m(_("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new m(_("w9jCb",!0)),Common:()=>new m(_("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new m(_("ifNxkKzDGG",!0)),Cuneiform:()=>new m(_("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new m(_("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new m(_("w8rCiD",!0)),Cyrillic:()=>new m(_("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new m(_("gghCvC",!0)),Devanagari:()=>new m(_("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new m(_("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new m(_("ggmC7B",!0)),Duployan:()=>new m(_("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new m(_("ggsC1iBL68D",!0)),Elbasan:()=>new m(_("gohCnB",!0)),Elymaic:()=>new m(_("g-jCW",!0)),Ethiopic:()=>new m(_("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new m(_("gqjClBEcJB",!0)),Georgian:()=>new m(_("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new m(_("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new m(_("w5gCa",!0)),Grantha:()=>new m(_("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new m(_("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new m(_("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new m(_("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new m(_("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new m(_("go4C5B",!0)),Han:()=>new m(_("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new m(_("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new m(_("gojCnBJJ",!0)),Hanunoo:()=>new m(_("g5FU",!0)),Hatran:()=>new m(_("gniCSCBGE",!0)),Hebrew:()=>new m(_("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new m(_("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new m(_("giiCVCI",!0)),Inherited:()=>new m(_("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new m(_("g7iCSGH",!0)),Inscriptional_Parthian:()=>new m(_("g6iCVDH",!0)),Javanese:()=>new m(_("gsqBtCDJFB",!0)),Kaithi:()=>new m(_("gkkCiCLA",!0)),Kannada:()=>new m(_("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new m(_("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new m(_("g4nCQCoBEc",!0)),Kayah_Li:()=>new m(_("goqBtBCA",!0)),Kharoshthi:()=>new m(_("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new m(_("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new m(_("g8F9CDJHJnPf",!0)),Khojki:()=>new m(_("gwkCRCuB",!0)),Khudawadi:()=>new m(_("w1kC6BGJ",!0)),Kirat_Rai:()=>new m(_("gq7C5B",!0)),Lao:()=>new m(_("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new m(_("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new m(_("ggH3BEOEC",!0)),Limbu:()=>new m(_("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new m(_("gwhC2JKVLH",!0)),Linear_B:()=>new m(_("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new m(_("wmpBvBx1eA",!0)),Lycian:()=>new m(_("g0gCc",!0)),Lydian:()=>new m(_("gpiCZGA",!0)),Mahajani:()=>new m(_("wqkCmB",!0)),Makasar:()=>new m(_("g3nCY",!0)),Malayalam:()=>new m(_("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new m(_("giCbDA",!0)),Manichaean:()=>new m(_("g2iCmBFL",!0)),Marchen:()=>new m(_("wjnCfDVCN",!0)),Masaram_Gondi:()=>new m(_("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new m(_("gy7C6C",!0)),Meetei_Mayek:()=>new m(_("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new m(_("gg6DkGDP",!0)),Meroitic_Cursive:()=>new m(_("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new m(_("gsiCf",!0)),Miao:()=>new m(_("g47CqCF4BIQ",!0)),Modi:()=>new m(_("gwlCkCMJ",!0)),Mongolian:()=>new m(_("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new m(_("gy6CeCJFB",!0)),Multani:()=>new m(_("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new m(_("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new m(_("gkiCeJI",!0)),Nag_Mundari:()=>new m(_("wm5DpB",!0)),Nandinagari:()=>new m(_("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new m(_("gsGrBFZHKEB",!0)),Newa:()=>new m(_("gglC7CCE",!0)),Nko:()=>new m(_("g+B6BDC",!0)),Nushu:()=>new m(_("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new m(_("go4DsBENDJFB",!0)),Ogham:()=>new m(_("g0Fc",!0)),Ol_Chiki:()=>new m(_("wiHvB",!0)),Ol_Onal:()=>new m(_("wu5DqBFA",!0)),Old_Hungarian:()=>new m(_("gkjCyBOyBIF",!0)),Old_Italic:()=>new m(_("g4gCjBKC",!0)),Old_North_Arabian:()=>new m(_("g0iCf",!0)),Old_Permic:()=>new m(_("w6gCqB",!0)),Old_Persian:()=>new m(_("g9gCjBFN",!0)),Old_Sogdian:()=>new m(_("g4jCnB",!0)),Old_South_Arabian:()=>new m(_("gziCf",!0)),Old_Turkic:()=>new m(_("ggjCoC",!0)),Old_Uyghur:()=>new m(_("w7jCZ",!0)),Oriya:()=>new m(_("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new m(_("wlhCjBFjB",!0)),Osmanya:()=>new m(_("gkhCdDJ",!0)),Pahawh_Hmong:()=>new m(_("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new m(_("gjiCf",!0)),Pau_Cin_Hau:()=>new m(_("g2mC4B",!0)),Phags_Pa:()=>new m(_("giqB3B",!0)),Phoenician:()=>new m(_("goiCbEA",!0)),Psalter_Pahlavi:()=>new m(_("g8iCRIDNG",!0)),Rejang:()=>new m(_("wpqBjBMA",!0)),Runic:()=>new m(_("g1FqCEK",!0)),Samaritan:()=>new m(_("ggCtBDO",!0)),Saurashtra:()=>new m(_("gkqBlCJL",!0)),Sharada:()=>new m(_("gskC-ChsCH",!0)),Shavian:()=>new m(_("wihCvB",!0)),Siddham:()=>new m(_("gslC1BDlB",!0)),Sidetic:()=>new m(_("gqiCZ",!0)),SignWriting:()=>new m(_("gg2DrUQECO",!0)),Sinhala:()=>new m(_("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new m(_("w5jCpB",!0)),Sora_Sompeng:()=>new m(_("wmkCYIJ",!0)),Soyombo:()=>new m(_("wymCyC",!0)),Sundanese:()=>new m(_("g8G-BhIH",!0)),Sunuwar:()=>new m(_("g+mChBPJ",!0)),Syloti_Nagri:()=>new m(_("ggqBsB",!0)),Syriac:()=>new m(_("g4BNC7BDCxIK",!0)),Tagalog:()=>new m(_("g4FVKA",!0)),Tagbanwa:()=>new m(_("g7FMCCCB",!0)),Tai_Le:()=>new m(_("wqGdDE",!0)),Tai_Tham:()=>new m(_("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new m(_("g0qBiCZE",!0)),Tai_Yo:()=>new m(_("g25DeCVJB",!0)),Takri:()=>new m(_("g0lC5BHJ",!0)),Tamil:()=>new m(_("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new m(_("wz6CuCCJ",!0)),Tangut:()=>new m(_("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new m(_("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new m(_("g8BxB",!0)),Thai:()=>new m(_("hwD5BGb",!0)),Tibetan:()=>new m(_("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new m(_("wpL3BIBPA",!0)),Tirhuta:()=>new m(_("gklCnCJJ",!0)),Todhri:()=>new m(_("guhCzB",!0)),Tolong_Siki:()=>new m(_("wtnCrBFJ",!0)),Toto:()=>new m(_("w04De",!0)),Tulu_Tigalari:()=>new m(_("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new m(_("g8gCdCA",!0)),Unknown:()=>new m(_("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new m(_("gopBrJ",!0)),Vithkuqi:()=>new m(_("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new m(_("g24D5BGA",!0)),Warang_Citi:()=>new m(_("glmCyCNA",!0)),Yezidi:()=>new m(_("g0jCpBCCDB",!0)),Yi:()=>new m(_("ggoBskBE2B",!0)),Zanabazar_Square:()=>new m(_("gwmCnC",!0))})),q(ls,"FOLD_CATEGORIES",new yl({L:()=>new m(_("laA",!0)),LC:()=>new m(_("laA",!0)),Ll:()=>new m(_("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new m(_("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new m(_("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new m(_("5cgBgBlgHAB",!1)),Mn:()=>new m(_("5cgBgBlgHAB",!1)),Emoji:()=>new m(_("8mJA",!0)),Extended_Pictographic:()=>new m(_("8mJA",!0)),Lowercase:()=>new m(_("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new m(_("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new m(_("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),q(ls,"FOLD_SCRIPT",new yl({Common:()=>new m(_("8cgBgB",!1)),Greek:()=>new m(_("1FwUwU",!1)),Inherited:()=>new m(_("5cgBgBlgHAB",!1))})),ls),be,$=(be=class{static is32(e,t){let n=0,r=e.length;for(;n<r;){const i=n+Math.floor((r-n)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const l=e.getStride(i);return(t-o)%l===0}t<o?r=i:n=i+1}return!1}static is(e,t){if(t<=be.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const r=e.getLo(n);if(t<r)return!1;const i=e.getStride(n);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&be.is32(e,t)}static isUpper(e){if(e<=be.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return be.is(Pt.Upper,e)}static isPrint(e){return e<=be.MAX_LATIN1?e>=32&&e<be.MAX_ASCII||e>=161&&e!==173:be.is(Pt.Print,e)}static simpleFold(e){if(Pt.CASE_ORBIT.has(e))return Pt.CASE_ORBIT.get(e);const t=F.toLowerCase(e);return t!==e?t:F.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=be.MAX_ASCII&&t<=be.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=be.simpleFold(e);n!==e;n=be.simpleFold(n))if(n===t)return!0;return!1}},q(be,"MAX_RUNE",1114111),q(be,"MAX_ASCII",127),q(be,"MAX_LATIN1",255),q(be,"MAX_BMP",65535),q(be,"MIN_FOLD",65),q(be,"MAX_FOLD",125251),q(be,"MIN_HIGH_SURROGATE",55296),q(be,"MAX_HIGH_SURROGATE",56319),q(be,"MIN_LOW_SURROGATE",56320),q(be,"MAX_LOW_SURROGATE",57343),q(be,"MIN_SUPPLEMENTARY_CODE_POINT",65536),be);const nd=256,eE=new Uint8Array(nd);for(let s=0;s<nd;s++)eE[s]=97<=s&&s<=122||65<=s&&s<=90||48<=s&&s<=57||s===95?1:0;let mh=null,_h=null;var Ve,ee=(Ve=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return F.CODES.get("0")<=e&&e<=F.CODES.get("9")||F.CODES.get("a")<=e&&e<=F.CODES.get("z")||F.CODES.get("A")<=e&&e<=F.CODES.get("Z")}static unhex(e){return F.CODES.get("0")<=e&&e<=F.CODES.get("9")?e-F.CODES.get("0"):F.CODES.get("a")<=e&&e<=F.CODES.get("f")?e-F.CODES.get("a")+10:F.CODES.get("A")<=e&&e<=F.CODES.get("F")?e-F.CODES.get("A")+10:-1}static escapeRune(e){let t="";if($.isPrint(e))Ve.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case F.CODES.get('"'):t+='\\"';break;case F.CODES.get("\\"):t+="\\\\";break;case F.CODES.get("	"):t+="\\t";break;case F.CODES.get(`
`):t+="\\n";break;case F.CODES.get("\r"):t+="\\r";break;case F.CODES.get("\b"):t+="\\b";break;case F.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);n.push(i),r+=i>$.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<nd?eE[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Ve.EMPTY_BEGIN_TEXT|Ve.EMPTY_BEGIN_LINE),e===10&&(n|=Ve.EMPTY_BEGIN_LINE),t<0&&(n|=Ve.EMPTY_END_TEXT|Ve.EMPTY_END_LINE),t===10&&(n|=Ve.EMPTY_END_LINE),Ve.isWordRune(e)!==Ve.isWordRune(t)?n|=Ve.EMPTY_WORD_BOUNDARY:n|=Ve.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Ve.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>$.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return mh||(mh=new TextEncoder),mh.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===$.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===$.MIN_LOW_SURROGATE?(i=$.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){_h||(_h=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return _h.decode(t)}else{let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],a=e[n++],l=e[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-$.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode($.MIN_HIGH_SURROGATE+(u>>10)),t[r++]=String.fromCharCode($.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},q(Ve,"METACHARACTERS","\\.+*?()|[]{}^$"),q(Ve,"EMPTY_BEGIN_LINE",1),q(Ve,"EMPTY_END_LINE",2),q(Ve,"EMPTY_BEGIN_TEXT",4),q(Ve,"EMPTY_END_TEXT",8),q(Ve,"EMPTY_WORD_BOUNDARY",16),q(Ve,"EMPTY_NO_WORD_BOUNDARY",32),q(Ve,"EMPTY_ALL",-1),Ve);const tE=(s=[],e=0)=>{const t=Object.create(null);for(let n=0;n<s.length;n++){const r=s[n],i=e+n;t[r]=i,t[i]=r}return Object.freeze(t)};var gs,vr=(gs=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===gs.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===gs.Encoding.UTF_16}},q(gs,"Encoding",tE(["UTF_16","UTF_8"])),gs),wp=class extends vr{constructor(s=null){super(),this.bytes=s}getEncoding(){return vr.Encoding.UTF_8}asCharSequence(){return ee.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},tR=class extends vr{constructor(s=null){super(),this.charSequence=s}getEncoding(){return vr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return ee.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},cr=class{static utf16(s){return new tR(s)}static utf8(s){return ee.isByteArray(s)?new wp(s):new wp(ee.stringToUtf8ByteArray(s))}},Tt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},nR=class extends Tt{constructor(s,e=0,t=s.length){super(),this.bytes=s,this.start=e,this.end=t}hasString(s,e){const t=s.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(s,e){return s.ac8?s.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(s){if(s+=this.start,s>=this.end)return Tt.EOF();const e=this.bytes[s]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&s+1<this.end){const t=this.bytes[s+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&s+2<this.end){const t=this.bytes[s+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[s+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&s+3<this.end){const t=this.bytes[s+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[s+2]&255;if((n&192)!==128)return e<<3|1;const r=this.bytes[s+3]&255;return(r&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|r&63)<<3|4}else return e<<3|1}index(s,e){e+=this.start;const t=this.indexOf(this.bytes,s.prefixUTF8,e);return t<0?t:t-e}context(s){s+=this.start;let e=-1;if(s>this.start&&s<=this.end){let n=s-1;if(e=this.bytes[n--],e>=128){let r=s-4;for(r<this.start&&(r=this.start);n>=r&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=s<this.end?this.step(s-this.start)>>3:-1;return ee.emptyOpContext(e,t)}indexOf(s,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const r=e[0];let i=this.end-n;const o=typeof s.indexOf=="function";let a=t;for(;a<=i;){if(o){if(a=s.indexOf(r,a),a===-1||a>i)return-1}else{for(;a<=i&&s[a]!==r;)a++;if(a>i)return-1}let l=!0;for(let u=1;u<n;u++)if(s[a+u]!==e[u]){l=!1;break}if(l)return a;a++}return-1}prefixLength(s){return s.prefixUTF8.length}},sR=class extends Tt{constructor(s,e=0,t=s.length){super(),this.charSequence=s,this.start=e,this.end=t}hasString(s,e){const t=this.charSequence.indexOf(s.str,this.start+e);return t!==-1&&t<=this.end-s.str.length}hasAnyString(s,e){return s.ac16?s.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(s){if(s+=this.start,s>=this.end)return Tt.EOF();const e=this.charSequence.charCodeAt(s);if(e<$.MIN_HIGH_SURROGATE||e>$.MAX_HIGH_SURROGATE||s+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(s+1);return t>=$.MIN_LOW_SURROGATE&&t<=$.MAX_LOW_SURROGATE?(e-$.MIN_HIGH_SURROGATE)*1024+(t-$.MIN_LOW_SURROGATE)+$.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(s,e){e+=this.start;const t=this.charSequence.indexOf(s.prefix,e);return t<0||t>this.end-s.prefix.length?-1:t-e}context(s){s+=this.start;const e=s>this.start&&s<=this.end?this.charSequence.charCodeAt(s-1):-1,t=s<this.end?this.charSequence.charCodeAt(s):-1;return ee.emptyOpContext(e,t)}prefixLength(s){return s.prefix.length}},ke=class{static fromUTF8(s,e=0,t=s.length){return new nR(s,e,t)}static fromUTF16(s,e=0,t=s.length){return new sR(s,e,t)}},Fa=class extends Error{constructor(s){super(s),this.name="RE2JSException"}},Ne=class extends Fa{constructor(s,e=null){let t=`error parsing regexp: ${s}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=s,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},rR=class extends Fa{constructor(s){super(s),this.name="RE2JSCompileException"}},bt=class extends Fa{constructor(s){super(s),this.name="RE2JSGroupException"}},iR=class extends Fa{constructor(s){super(s),this.name="RE2JSFlagsException"}},Lo=class extends Fa{constructor(s){super(s),this.name="RE2JSInternalException"}},dr,Tp=(dr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const r=n.codePointAt(0);return r===F.CODES.get("\\")||r===F.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===F.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof vr?this.resetMatcherInput(t):ee.isByteArray(t)?this.resetMatcherInput(cr.utf8(t)):this.resetMatcherInput(cr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof vr||(ee.isByteArray(e)?e=cr.utf8(e):e=cr.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new bt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new bt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new bt(`group '${e}' not found`);e=r}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new bt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new bt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new bt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new bt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,M.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,M.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new bt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?ke.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):ke.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,M.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?ee.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),i=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===F.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=r)throw new bt("character to be escaped is missing");n=i,i++;continue}if(o===F.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=r)throw new bt("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(F.CODES.get("0")<=a&&a<=F.CODES.get("9")){let l=a-F.CODES.get("0"),u=i+2;for(;u<r;u++){const B=e.codePointAt(u);if(B<F.CODES.get("0")||B>F.CODES.get("9")||l*10+B-F.CODES.get("0")>this.patternGroupCount)break;l=l*10+B-F.CODES.get("0")}if(l>this.patternGroupCount)throw new bt(`n > number of groups: ${l}`);const h=this.group(l);h!==null&&(t+=h),i=u,n=i}else if(a===F.CODES.get("{")){let l=i+2;for(;l<r&&e.codePointAt(l)!==F.CODES.get("}");)l++;if(l>=r)throw new bt("named capture group is missing trailing '}'");const u=e.substring(i+2,l),h=this.group(u);h!==null&&(t+=h),i=l+1,n=i}else throw new bt("Illegal group reference");continue}i++}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){let t="",n=0;const r=e.length;for(let i=0;i<r-1;i++)if(e.codePointAt(i)===F.CODES.get("$")){let o=e.codePointAt(i+1);if(F.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(F.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,n=i+1;continue}else if(F.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(F.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(F.CODES.get("1")<=o&&o<=F.CODES.get("9")){let a=o-F.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<r&&(o=e.codePointAt(i),!(o<F.CODES.get("0")||o>F.CODES.get("9")||a*10+o-F.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-F.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,n=i,i--;continue}const l=this.group(a);l!==null&&(t+=l),n=i,i--;continue}else if(o===F.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==F.CODES.get(">")&&e.codePointAt(a)!==F.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==F.CODES.get(">")){t+=e.substring(i-1,a+1),n=a+1,i=a;continue}const l=e.substring(i+1,a);if(Object.prototype.hasOwnProperty.call(this.namedGroups,l)){const u=this.group(l);u!==null&&(t+=u)}else t+=`$<${l}>`;n=a+1,i=a;continue}}return n<r&&(t+=e.substring(n,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let r="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=dr.MAX_REPLACER_ARGS)throw new bt("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o,a):this.appendReplacement(e,n),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t,n){let r="";const i=this.start(),o=this.end();this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=o;const a=this.buildReplacerArgs(i,t,n);return r+=String(e(...a)),r}buildReplacerArgs(e,t,n){const r=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const a=this.start(o);a<0?r.push(void 0):r.push(this.substring(a,this.end(o)))}if(r.push(e),r.push(n),t){const o=this.getNamedGroups();for(const a in o)o[a]===null&&(o[a]=void 0);r.push(o)}return r}},q(dr,"MAX_REPLACER_ARGS",65535),dr),me,L=(me=class{static isRuneOp(e){return me.RUNE<=e&&e<=me.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=ee.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?$.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?$.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case me.ALT:return`alt -> ${this.out}, ${this.arg}`;case me.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case me.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case me.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case me.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case me.FAIL:return"fail";case me.NOP:return`nop -> ${this.out}`;case me.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case me.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case me.RUNE:return this.runes===null?"rune <null>":["rune ",me.escapeRunes(this.runes),(this.arg&M.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case me.RUNE1:return`rune1 ${me.escapeRunes(this.runes)} -> ${this.out}`;case me.RUNE_ANY:return`any -> ${this.out}`;case me.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},q(me,"ALT",1),q(me,"ALT_MATCH",2),q(me,"CAPTURE",3),q(me,"EMPTY_WIDTH",4),q(me,"FAIL",5),q(me,"MATCH",6),q(me,"NOP",7),q(me,"RUNE",8),q(me,"RUNE1",9),q(me,"RUNE_ANY",10),q(me,"RUNE_ANY_NOT_NL",11),q(me,"LB_WRITE",12),q(me,"LB_CHECK",13),me),vp=class{constructor(s){this.sparse=new Int32Array(s),this.densePcs=new Int32Array(s),this.denseCaps=null,this.size=0,this.ncap=0}init(s){this.ncap=s;const e=this.densePcs.length*s;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(s){const e=this.sparse[s];return e<this.size&&this.densePcs[e]===s}isEmpty(){return this.size===0}add(s){const e=this.size++;return this.sparse[s]=e,this.densePcs[e]=s,e}clear(){this.size=0}toString(){let s="{";for(let e=0;e<this.size;e++)e!==0&&(s+=", "),s+=this.densePcs[e];return s+="}",s}},oR=class Yh{static fromRE2(e){const t=new Yh;return t.prog=e.prog,t.re2=e,t.q0=new vp(t.prog.numInst()),t.q1=new vp(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return Yh.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?ee.emptyInts():ee.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const r=this.re2.cond;if(r===ee.EMPTY_ALL||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,a=this.q0,l=this.q1,u=e.step(i),h=u>>3,B=u&7,C=-1,g=0;u!==Tt.EOF()&&(u=e.step(i+B),C=u>>3,g=u&7);let E;for(i===0?E=ee.emptyOpContext(-1,h):E=e.context(i);;){if(a.isEmpty()){if((r&ee.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&C!==this.re2.prefixRune&&e.canCheckPrefix()){const W=e.index(this.re2,i);if(W<0)break;i+=W,u=e.step(i),h=u>>3,B=u&7,u=e.step(i+B),C=u>>3,g=u&7,E=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let W=0;W<this.prog.lbStarts.length;W++)this.add(a,this.prog.lbStarts[W],i,this.matchcap,0,E);!this.matched&&(i===0||n===M.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,E));const P=i+B;if(E=e.context(P),this.step(a,l,i,P,h,E,n,i===e.endPos()),B===0||this.ncap===0&&this.matched)break;i+=B,h=C,B=g,h!==-1&&(u=e.step(i+B),C=u>>3,g=u&7);const V=a;a=l,l=V}return l.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===ee.EMPTY_ALL)return[];if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,l=this.q1,u=e.step(i),h=u>>3,B=u&7,C=-1,g=0;u!==Tt.EOF()&&(u=e.step(i+B),C=u>>3,g=u&7);let E=i===0?ee.emptyOpContext(-1,h):e.context(i);const P=new Set;for(;!(a.isEmpty()&&((r&ee.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let Z=0;Z<this.prog.lbStarts.length;Z++)this.add(a,this.prog.lbStarts[Z],i,this.matchcap,0,E);(i===0||n===M.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,E);const V=i+B;E=e.context(V);for(let Z=0;Z<a.size;Z++){const se=a.densePcs[Z],ye=this.prog.inst[se],ge=Z*this.ncap;let ue=!1;switch(ye.op){case L.MATCH:if(n===M.ANCHOR_BOTH&&i!==e.endPos())break;P.add(ye.arg);break;case L.RUNE:ue=ye.matchRune(h);break;case L.RUNE1:ue=h===ye.runes[0];break;case L.RUNE_ANY:ue=!0;break;case L.RUNE_ANY_NOT_NL:ue=h!==10;break;default:continue}ue&&this.add(l,ye.out,V,a.denseCaps,ge,E)}if(a.clear(),B===0)break;i+=B,h=C,B=g,h!==-1&&(u=e.step(i+B),C=u>>3,g=u&7);const W=a;a=l,l=W}return l.clear(),Array.from(P).sort((V,W)=>V-W)}step(e,t,n,r,i,o,a,l){const u=this.re2.longest;for(let h=0;h<e.size;h++){const B=e.densePcs[h],C=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[C])continue;const g=this.prog.inst[B];let E=!1;switch(g.op){case L.MATCH:if(a===M.ANCHOR_BOTH&&!l)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<n)){e.denseCaps[C+1]=n;for(let P=0;P<this.ncap;P++)this.matchcap[P]=e.denseCaps[C+P]}u||(e.size=0),this.matched=!0;break;case L.RUNE:E=g.matchRune(i);break;case L.RUNE1:E=i===g.runes[0];break;case L.RUNE_ANY:E=!0;break;case L.RUNE_ANY_NOT_NL:E=i!==10;break;default:continue}E&&this.add(t,g.out,r,e.denseCaps,C,o)}e.clear()}add(e,t,n,r,i,o){for(;;){if(t===0||e.contains(t))return;const a=e.add(t),l=this.prog.inst[t];switch(l.op){case L.FAIL:return;case L.ALT:case L.ALT_MATCH:this.add(e,l.out,n,r,i,o),t=l.arg;continue;case L.EMPTY_WIDTH:if((l.arg&~o)===0){t=l.out;continue}return;case L.NOP:t=l.out;continue;case L.CAPTURE:if(l.arg<this.ncap){const u=r[i+l.arg];r[i+l.arg]=n,this.add(e,l.out,n,r,i,o),r[i+l.arg]=u;return}else{t=l.out;continue}case L.LB_WRITE:this.lbTable[Math.abs(l.arg)]=n,t=l.out;continue;case L.LB_CHECK:if(l.arg>0){if(this.lbTable[l.arg]===n){t=l.out;continue}}else if(this.lbTable[-l.arg]!==n){t=l.out;continue}return;case L.MATCH:case L.RUNE:case L.RUNE1:case L.RUNE_ANY:case L.RUNE_ANY_NOT_NL:if(this.ncap>0){const u=a*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[u+h]=r[i+h]}return;default:throw new Lo("unhandled")}}}};const Ap=s=>{let e=-2128831035;for(let t=0;t<s.length;t++)e^=s[t],e=Math.imul(e,16777619);return e},aR=(s,e)=>{if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0};var lR=class{constructor(s,e,t=[]){this.nfaStates=s,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array($.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array($.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Nn,cR=(Nn=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Nn.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let r=!1;const i=[];for(;n.length>0;){const a=n.pop();if(t.has(a))continue;t.add(a);const l=this.prog.getInst(a);switch(l.op){case L.MATCH:r=!0,i.includes(l.arg)||i.push(l.arg);break;case L.ALT:case L.ALT_MATCH:n.push(l.out),n.push(l.arg);break;case L.NOP:case L.CAPTURE:n.push(l.out);break;case L.EMPTY_WIDTH:case L.LB_WRITE:case L.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((a,l)=>a-l),{pcs:o,isMatch:r,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,r=Ap(n);let i=this.stateCache.get(r);if(i)for(let a=0;a<i.length;a++){const l=i[a];if(aR(l.nfaStates,n))return l.lastSeen=++this.clock,l}else i=[],this.stateCache.set(r,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Nn.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(r),i||(i=[],this.stateCache.set(r,i))}const o=new lR(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let a=0;a<o.length;a++)e.push(o[a]);e.sort((o,a)=>o.lastSeen-a.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,r=e.slice(n),i=new Set(r);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<r.length;o++){const a=r[o];a.nextLatin1.fill(null),a.nextLatin1Anchored.fill(null),a.transKeys.length=0,a.transVals.length=0;const l=Ap(a.nfaStates);let u=this.stateCache.get(l);u||(u=[],this.stateCache.set(l,u)),u.push(a),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=$.MAX_LATIN1)if(n===M.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===M.UNANCHORED?0:$.MAX_RUNE+1),a=e.transKeys,l=a.length;for(let u=0;u<l;u++)if(a[u]===o)return e.transVals[u]}const r=[];for(let o=0;o<e.nfaStates.length;o++){const a=e.nfaStates[o],l=this.prog.getInst(a);L.isRuneOp(l.op)&&l.matchRune(t)&&r.push(l.out)}n===M.UNANCHORED&&r.push(this.prog.start);const i=this.getState(r);if(t<=$.MAX_LATIN1)n===M.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===M.UNANCHORED?0:$.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;if(i.isMatch)if(n===M.ANCHOR_BOTH){if(t===r)return!0}else return!0;let o=t;for(;o<r;){const a=e.step(o),l=a>>3,u=a&7;if(u===0)break;if(i=n===M.UNANCHORED&&l<=$.MAX_LATIN1&&i.nextLatin1[l]||this.step(i,l,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===M.ANCHOR_BOTH){if(o+u===r)return!0}else return!0;if(i.nfaStates.length===0&&n!==M.UNANCHORED)return!1;o+=u}return!1}matchSet(e,t,n){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;const o=new Set,a=(u,h)=>{u.isMatch&&(n===M.ANCHOR_BOTH?h===r&&u.matchIDs.forEach(B=>o.add(B)):u.matchIDs.forEach(B=>o.add(B)))};a(i,t);let l=t;for(;l<r;){const u=e.step(l),h=u>>3,B=u&7;if(B===0)break;if(i=n===M.UNANCHORED&&h<=$.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,l+=B,a(i,l),i.nfaStates.length===0&&n!==M.UNANCHORED)break}return Array.from(o).sort((u,h)=>u-h)}},q(Nn,"MAX_CACHE_CLEARS",5),q(Nn,"STATE_MEMORY_ESTIMATE",838),Nn);const uR=32,hR=500,Eh=256,BR=256*1024;var dR=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Eh),this.jobArg=new Uint8Array(Eh),this.jobPos=new Int32Array(Eh),this.jobLen=0,this.visited=new Uint32Array(0)}reset(s,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=s.numInst()*(e+1)+uR-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(s,e){const t=s*(this.end+1)+e,n=t>>>5,r=1<<(t&31);return(this.visited[n]&r)!==0?!1:(this.visited[n]|=r,!0)}push(s,e,t,n){if(s.prog.getInst(e).op!==L.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(r);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(s,e,t,n,r){const i=s.longest;for(this.push(s,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,l=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,l));){u=!1;const h=s.prog.getInst(o);switch(h.op){case L.FAIL:throw new Lo("unexpected InstFail");case L.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(s,o,l,!0),o=h.out;continue}case L.ALT_MATCH:{const B=s.prog.getInst(h.out);if(L.isRuneOp(B.op)){this.push(s,h.arg,l,!1),o=h.arg,l=this.end;continue}this.push(s,h.out,this.end,!1),o=h.out;continue}case L.RUNE:{const B=e.step(l);if(B===Tt.EOF()||!h.matchRune(B>>3))break;l+=B&7,o=h.out;continue}case L.RUNE1:{const B=e.step(l);if(B===Tt.EOF()||B>>3!==h.runes[0])break;l+=B&7,o=h.out;continue}case L.RUNE_ANY_NOT_NL:{const B=e.step(l);if(B===Tt.EOF()||B>>3===10)break;l+=B&7,o=h.out;continue}case L.RUNE_ANY:{const B=e.step(l);if(B===Tt.EOF())break;l+=B&7,o=h.out;continue}case L.CAPTURE:if(a){this.cap[h.arg]=l;break}else{h.arg<this.ncap&&(this.push(s,o,this.cap[h.arg],!0),this.cap[h.arg]=l),o=h.out;continue}case L.EMPTY_WIDTH:{const B=e.context(l);if((h.arg&~B)!==0)break;o=h.out;continue}case L.NOP:o=h.out;continue;case L.MATCH:{if(r===M.ANCHOR_BOTH&&l!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=l);const B=this.matchcap[1];if((B===-1||i&&l>0&&l>B)&&this.matchcap.set(this.cap),!i||l===this.end)return!0;break}case L.LB_WRITE:case L.LB_CHECK:throw new Lo("Backtracker cannot evaluate Lookbehind instructions");default:throw new Lo("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Il=[];var Dl=class nE{static shouldBacktrack(e){return e.numInst()<=hR}static maxBitStateLen(e){return nE.shouldBacktrack(e)?Math.floor(BR/e.numInst()):0}static execute(e,t,n,r,i){const o=e.cond;if(o===ee.EMPTY_ALL||(r===M.ANCHOR_START||r===M.ANCHOR_BOTH)&&n!==0||(o&ee.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const a=Il.length>0?Il.pop():new dR,l=t.endPos();a.reset(e.prog,l,i);let u=!1;if((o&ee.EMPTY_BEGIN_TEXT)!==0||r===M.ANCHOR_START||r===M.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)&&(u=!0);else{let B=-1;for(;n<=l&&B!==0;n+=B){if(e.prefix.length>0){const g=t.index(e,n);if(g<0)break;n+=g}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)){u=!0;break}const C=t.step(n);B=C===Tt.EOF()?0:C&7}}if(!u)return Il.push(a),null;const h=i===0?[]:ee.toArray(a.matchcap.subarray(0,i));return Il.push(a),h}},Rp=class{constructor(s){this.sparse=new Uint32Array(s),this.dense=new Uint32Array(s),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(s){return s<this.sparse.length&&this.sparse[s]<this.size&&this.dense[this.sparse[s]]===s}insert(s){this.contains(s)||this.insertNew(s)}insertNew(s){s>=this.sparse.length||(this.sparse[s]=this.size,this.dense[this.size]=s,this.size++)}};const fR=(s,e,t,n)=>{const r=s.length,i=e.length;let o=0,a=0;const l=[],u=[];let h=!0,B=-1;const C=g=>{const E=g?s:e,P=g?o:a,V=g?t:n;return B>0&&E[P]<=l[B]?!1:(l.push(E[P],E[P+1]),g?o+=2:a+=2,B+=2,u.push(V),!0)};for(;o<r||a<i;)if(a>=i?h=C(!0):o>=r||e[a]<s[o]?h=C(!1):h=C(!0),!h)return null;return{merged:l,next:u}};var CR=class{constructor(s){this.start=s.start,this.numCap=s.numCap,this.inst=new Array(s.inst.length);for(let e=0;e<s.inst.length;e++){const t=s.inst[e],n=new L(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const pR=s=>{const e=new CR(s);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==L.ALT&&n.op!==L.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[n[i]];if(o.op!==L.ALT&&o.op!==L.ALT_MATCH&&(r="arg",i="out",o=e.inst[n[i]],o.op!==L.ALT&&o.op!==L.ALT_MATCH))continue;const a=e.inst[n[r]];if(a.op===L.ALT||a.op===L.ALT_MATCH)continue;let l="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,l="arg",u="out"),h&&(o[l]=n[r]),n[r]===o[l]&&(n[i]=o[u])}return e},gR=s=>{if(s.inst.length>=1e3)return null;const e=new Rp(s.inst.length),t=new Rp(s.inst.length),n=new Array(s.inst.length),r=new Array(s.inst.length).fill(!1),i=o=>{let a=!0;const l=s.inst[o];if(t.contains(o))return!0;switch(t.insert(o),l.op){case L.ALT:case L.ALT_MATCH:{a=i(l.out)&&i(l.arg);let u=r[l.out],h=r[l.arg];if(u&&h)return!1;if(h){const E=l.out;l.out=l.arg,l.arg=E;const P=u;u=h,h=P}u&&(r[o]=!0,l.op=L.ALT_MATCH);const B=n[l.out]||[],C=n[l.arg]||[],g=fR(B,C,l.out,l.arg);if(!g)return!1;n[o]=g.merged,l.next=new Uint32Array(g.next);break}case L.CAPTURE:case L.EMPTY_WIDTH:case L.NOP:a=i(l.out),r[o]=r[l.out],n[o]=n[l.out]?n[l.out].slice():[],l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break;case L.MATCH:case L.FAIL:r[o]=l.op===L.MATCH;break;case L.RUNE:{if(r[o]=!1,l.next&&l.next.length>0)break;if(e.insert(l.out),!l.runes||l.runes.length===0){n[o]=[],l.next=new Uint32Array([l.out]);break}let u=[];if(l.runes.length===1&&(l.arg&M.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let B=$.simpleFold(h);B!==h;B=$.simpleFold(B))u.push(B,B);u.sort((B,C)=>B-C)}else for(let h=0;h<l.runes.length;h++)u.push(l.runes[h]);n[o]=u,l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=L.RUNE;break}case L.RUNE1:{if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out);let u=[];if((l.arg&M.FOLD_CASE)!==0){const h=l.runes[0];u.push(h,h);for(let B=$.simpleFold(h);B!==h;B=$.simpleFold(B))u.push(B,B);u.sort((B,C)=>B-C)}else u.push(l.runes[0],l.runes[0]);n[o]=u,l.next=new Uint32Array(Math.floor(u.length/2)+1).fill(l.out),l.op=L.RUNE;break}case L.RUNE_ANY:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=[0,$.MAX_RUNE],l.next=new Uint32Array([l.out]);break;case L.RUNE_ANY_NOT_NL:if(r[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=[0,9,11,$.MAX_RUNE],l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break}return a};for(e.clear(),e.insert(s.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<s.inst.length;o++)n[o]&&(s.inst[o].runes=n[o]);return s},mR=(s,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case L.ALT:case L.ALT_MATCH:case L.RUNE:break;case L.CAPTURE:case L.EMPTY_WIDTH:case L.NOP:case L.MATCH:case L.FAIL:s.inst[t].next=null;break;case L.RUNE1:case L.RUNE_ANY:case L.RUNE_ANY_NOT_NL:s.inst[t].next=null,s.inst[t].op=n.op,s.inst[t].runes=n.runes?n.runes.slice():[];break}}};var Sp=class sE{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==L.EMPTY_WIDTH||(t.arg&ee.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===L.ALT||e.inst[i].op===L.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case L.ALT:case L.ALT_MATCH:if(a===L.MATCH||e.inst[o.arg].op===L.MATCH)return null;break;case L.EMPTY_WIDTH:if(a===L.MATCH){if((o.arg&ee.EMPTY_END_TEXT)===ee.EMPTY_END_TEXT)continue;return null}break;default:if(a===L.MATCH&&n)return null;break}}let r=pR(e);return r=gR(r),r!==null&&mR(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===L.ALT_MATCH?e.out:0}static execute(e,t,n,r,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let l=!1,u=t.step(n),h=u>>3,B=u&7,C=Tt.EOF(),g=-1,E=0;u!==Tt.EOF()&&(C=t.step(n+B),C!==Tt.EOF()&&(g=C>>3,E=C&7));let P=n===0?ee.emptyOpContext(-1,h):t.context(n),V=o.start,W;for(;;){switch(W=o.inst[V],V=W.out,W.op){case L.MATCH:return r===M.ANCHOR_BOTH&&n!==t.endPos()?null:(l=!0,a.length>0&&(a[0]=0,a[1]=n),i===0?[]:ee.toArray(a));case L.RUNE:if(!W.matchRune(h))return null;break;case L.RUNE1:if(h!==W.runes[0])return null;break;case L.RUNE_ANY:break;case L.RUNE_ANY_NOT_NL:if(h===10)return null;break;case L.ALT:case L.ALT_MATCH:V=sE.next(W,h);continue;case L.FAIL:return null;case L.NOP:continue;case L.EMPTY_WIDTH:if((W.arg&~P)!==0)return null;continue;case L.CAPTURE:W.arg<a.length&&(a[W.arg]=n);continue;default:throw new Lo("bad inst")}if(B===0)break;P=ee.emptyOpContext(h,g),n+=B,h=g,B=E,h!==-1&&(C=t.step(n+B),C!==Tt.EOF()?(g=C>>3,E=C&7):(g=-1,E=0))}return l?i===0?[]:ee.toArray(a):null}},te,v=(te=class{static isPseudoOp(e){return e>=te.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===F.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new te(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=te.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=te.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case te.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case te.Op.EMPTY_MATCH:e+="(?:)";break;case te.Op.STAR:case te.Op.PLUS:case te.Op.QUEST:case te.Op.REPEAT:{const t=this.subs[0];switch(t.op>te.Op.CAPTURE||t.op===te.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case te.Op.STAR:e+="*";break;case te.Op.PLUS:e+="+";break;case te.Op.QUEST:e+="?";break;case te.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&M.NON_GREEDY)!==0&&(e+="?");break}case te.Op.CONCAT:for(let t of this.subs)t.op===te.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case te.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case te.Op.LITERAL:(this.flags&M.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=ee.escapeRune(t);(this.flags&M.FOLD_CASE)!==0&&(e+=")");break;case te.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case te.Op.ANY_CHAR:e+="(?s:.)";break;case te.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case te.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case te.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==te.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case te.Op.BEGIN_TEXT:e+="\\A";break;case te.Op.END_TEXT:(this.flags&M.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case te.Op.BEGIN_LINE:e+="^";break;case te.Op.END_LINE:e+="$";break;case te.Op.WORD_BOUNDARY:e+="\\b";break;case te.Op.NO_WORD_BOUNDARY:e+="\\B";break;case te.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===$.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,r=this.runes[t+1]-1;e+=te.quoteIfHyphen(n),e+=ee.escapeRune(n),n!==r&&(e+="-",e+=te.quoteIfHyphen(r),e+=ee.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],r=this.runes[t+1];e+=te.quoteIfHyphen(n),e+=ee.escapeRune(n),n!==r&&(e+="-",e+=te.quoteIfHyphen(r),e+=ee.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===te.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof te)||this.op!==e.op)return!1;switch(this.op){case te.Op.END_TEXT:if((this.flags&M.WAS_DOLLAR)!==(e.flags&M.WAS_DOLLAR))return!1;break;case te.Op.LITERAL:case te.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case te.Op.ALTERNATE:case te.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case te.Op.STAR:case te.Op.PLUS:case te.Op.QUEST:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case te.Op.REPEAT:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case te.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case te.Op.PLB:case te.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},q(te,"Op",tE(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),te),bp=class{constructor(s){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of s){let n=0;for(let r=0;r<t.length;r++){const i=t[r];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const r=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[r]=this.next[i][n]:this.fail[r]=0,this.match[r]=this.match[r]||this.match[this.fail[r]],e.push(r)}}}searchUTF16(s,e,t){let n=0;for(let r=e;r<t;r++){const i=s.charCodeAt(r);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(s,e,t){let n=0;for(let r=e;r<t;r++){const i=s[r];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},_n,Ie=(_n=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case _n.Type.NONE:return!0;case _n.Type.EXACT:return e.hasString(this,t);case _n.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case _n.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},q(_n,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),_n),_R=class Sn{static build(e){const t=Sn.fromRegexp(e);return Sn.simplify(t)}static fromRegexp(e){if(!e)return new Ie(Ie.Type.NONE);switch(e.op){case v.Op.PLB:case v.Op.NLB:case v.Op.NO_MATCH:case v.Op.EMPTY_MATCH:case v.Op.BEGIN_LINE:case v.Op.END_LINE:case v.Op.BEGIN_TEXT:case v.Op.END_TEXT:case v.Op.WORD_BOUNDARY:case v.Op.NO_WORD_BOUNDARY:case v.Op.CHAR_CLASS:case v.Op.ANY_CHAR_NOT_NL:case v.Op.ANY_CHAR:return new Ie(Ie.Type.NONE);case v.Op.LITERAL:{if(e.runes.length===0||(e.flags&M.FOLD_CASE)!==0)return new Ie(Ie.Type.NONE);const t=new Ie(Ie.Type.EXACT);let n="";for(let r=0;r<e.runes.length;r++)n+=String.fromCodePoint(e.runes[r]);return t.str=n,t.bytes=ee.stringToUtf8ByteArray(t.str),t}case v.Op.CAPTURE:case v.Op.PLUS:return Sn.fromRegexp(e.subs[0]);case v.Op.REPEAT:return e.min>=1?Sn.fromRegexp(e.subs[0]):new Ie(Ie.Type.NONE);case v.Op.CONCAT:{const t=new Ie(Ie.Type.AND);for(const n of e.subs)t.subs.push(Sn.fromRegexp(n));return t}case v.Op.ALTERNATE:{const t=new Ie(Ie.Type.OR);for(const n of e.subs)t.subs.push(Sn.fromRegexp(n));return t}default:return new Ie(Ie.Type.NONE)}}static simplify(e){if(e.type===Ie.Type.EXACT||e.type===Ie.Type.NONE)return e;if(e.type===Ie.Type.AND){const t=[];for(const n of e.subs){const r=Sn.simplify(n);if(r.type!==Ie.Type.NONE)if(r.type===Ie.Type.AND)for(let i=0;i<r.subs.length;i++)t.push(r.subs[i]);else t.push(r)}return t.length===0?new Ie(Ie.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===Ie.Type.OR){const t=[];for(const o of e.subs){const a=Sn.simplify(o);if(a.type===Ie.Type.NONE)return new Ie(Ie.Type.NONE);if(a.type===Ie.Type.OR)for(let l=0;l<a.subs.length;l++)t.push(a.subs[l]);else t.push(a)}if(t.length===0)return new Ie(Ie.Type.NONE);if(t.length===1)return t[0];const n=new Set,r=[];for(const o of t)o.type===Ie.Type.EXACT?n.has(o.str)||(n.add(o.str),r.push(o)):r.push(o);e.subs=r;let i=!0;for(const o of r)if(o.type!==Ie.Type.EXACT){i=!1;break}return i&&r.length>1&&(e.ac16=new bp(r.map(o=>{const a=[];for(let l=0;l<o.str.length;l++)a.push(o.str.charCodeAt(l));return a})),e.ac8=new bp(r.map(o=>o.bytes))),e}return e}},Wt=class{constructor(s=0,e=0){this.head=s,this.tail=e}},ER=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(s){return this.inst[s]}numInst(){return this.inst.length}addInst(s){this.inst.push(new L(s))}skipNop(s){let e=this.inst[s];for(;e.op===L.NOP||e.op===L.CAPTURE;)e=this.inst[s],s=e.out;return e}prefix(){let s="",e=this.skipNop(this.start);if(!L.isRuneOp(e.op)||e.runes.length!==1)return[e.op===L.MATCH,s];for(;L.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&M.FOLD_CASE)===0;)s+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===L.MATCH,s]}startCond(){let s=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case L.EMPTY_WIDTH:s|=t.arg;break;case L.FAIL:return-1;case L.CAPTURE:case L.NOP:break;default:break e}e=t.out}return s}patch(s,e){let t=s.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(s,e){if(s.head===0)return e;if(e.head===0)return s;const t=this.inst[s.tail>>1];return(s.tail&1)===0?t.out=e.head:t.arg=e.head,new Wt(s.head,e.tail)}toString(){let s="";for(let e=0;e<this.inst.length;e++){const t=s.length;s+=e,e===this.start&&(s+="*"),s+="        ".substring(s.length-t),s+=this.inst[e],s+=`
`}return s}},wl=class{constructor(s=0,e=new Wt,t=!1){this.i=s,this.out=e,this.nullable=t}},yR=class ri{static ANY_RUNE_NOT_NL(){return[0,F.CODES.get(`
`)-1,F.CODES.get(`
`)+1,$.MAX_RUNE]}static ANY_RUNE(){return[0,$.MAX_RUNE]}static compileRegexp(e){const t=new ri,n=t.compile(e);return t.prog.patch(n.out,t.newInst(L.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new ri;if(e.length===0)return t.prog.start=t.newInst(L.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),a=t.newInst(L.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),n.push(o.i)}let r=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(L.ALT),a=t.prog.getInst(o.i);a.out=r,a.arg=n[i],r=o.i}return t.prog.start=r,t.prog}constructor(){this.prog=new ER,this.newInst(L.FAIL)}newInst(e){return this.prog.addInst(e),new wl(this.prog.numInst()-1,new Wt,!0)}nop(){const e=this.newInst(L.NOP);return e.out=new Wt(e.i<<1,e.i<<1),e}fail(){return new wl}cap(e){const t=this.newInst(L.CAPTURE);return t.out=new Wt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new wl(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(L.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(L.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Wt(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Wt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(L.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Wt(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Wt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new wl(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(L.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Wt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(L.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=M.FOLD_CASE,(e.length!==1||$.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,n.out=new Wt(n.i<<1,n.i<<1),(t&M.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=L.RUNE1:e.length===2&&e[0]===0&&e[1]===$.MAX_RUNE?r.op=L.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===F.CODES.get(`
`)-1&&e[2]===F.CODES.get(`
`)+1&&e[3]===$.MAX_RUNE&&(r.op=L.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(L.LB_WRITE);this.prog.getInst(n.i).arg=t;const r=this.rune(ri.ANY_RUNE(),0),i=this.star(r,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const a=this.newInst(L.LB_CHECK);return this.prog.getInst(a.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),a.out=new Wt(a.i<<1,a.i<<1),a}compile(e){switch(e.op){case v.Op.NO_MATCH:return this.fail();case v.Op.EMPTY_MATCH:return this.nop();case v.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const r=this.rune([n],e.flags);t=t===null?r:this.cat(t,r)}return t}case v.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case v.Op.ANY_CHAR_NOT_NL:return this.rune(ri.ANY_RUNE_NOT_NL(),0);case v.Op.ANY_CHAR:return this.rune(ri.ANY_RUNE(),0);case v.Op.BEGIN_LINE:return this.empty(ee.EMPTY_BEGIN_LINE);case v.Op.END_LINE:return this.empty(ee.EMPTY_END_LINE);case v.Op.BEGIN_TEXT:return this.empty(ee.EMPTY_BEGIN_TEXT);case v.Op.END_TEXT:return this.empty(ee.EMPTY_END_TEXT);case v.Op.WORD_BOUNDARY:return this.empty(ee.EMPTY_WORD_BOUNDARY);case v.Op.NO_WORD_BOUNDARY:return this.empty(ee.EMPTY_NO_WORD_BOUNDARY);case v.Op.PLB:case v.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case v.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),r)}case v.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case v.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case v.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case v.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const r=this.compile(n);t=t===null?r:this.cat(t,r)}return t}case v.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const r=this.compile(n);t=t===null?r:this.alt(t,r)}return t}default:throw new rR("regexp: unhandled case in compile")}}},IR=class Gt{static simplify(e){if(e===null)return null;switch(e.op){case v.Op.PLB:case v.Op.NLB:case v.Op.CAPTURE:{const t=Gt.simplify(e.subs[0]);if(t!==e.subs[0]){const n=v.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case v.Op.CONCAT:case v.Op.ALTERNATE:{const t=[];let n=!1;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],o=Gt.simplify(i);if(o!==i&&(n=!0),e.op===v.Op.CONCAT){if(o.op===v.Op.NO_MATCH)return new v(v.Op.NO_MATCH);if(o.op===v.Op.EMPTY_MATCH){n=!0;continue}if(o.op===v.Op.CONCAT){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}else if(e.op===v.Op.ALTERNATE){if(o.op===v.Op.NO_MATCH){n=!0;continue}if(o.op===v.Op.ALTERNATE){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}t.push(o)}if(n){if(t.length===0)return new v(e.op===v.Op.CONCAT?v.Op.EMPTY_MATCH:v.Op.NO_MATCH);if(t.length===1)return t[0];const r=v.fromRegexp(e);return r.runes=[],r.subs=t,r}return e}case v.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new v(v.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===$.MAX_RUNE?new v(v.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===F.CODES.get(`
`)-1&&e.runes[2]===F.CODES.get(`
`)+1&&e.runes[3]===$.MAX_RUNE?new v(v.Op.ANY_CHAR_NOT_NL):e;case v.Op.STAR:case v.Op.PLUS:case v.Op.QUEST:{const t=Gt.simplify(e.subs[0]);return Gt.simplify1(e.op,e.flags,t,e)}case v.Op.REPEAT:{if(e.min===0&&e.max===0)return new v(v.Op.EMPTY_MATCH);const t=Gt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Gt.simplify1(v.Op.STAR,e.flags,t,null);if(e.min===1)return Gt.simplify1(v.Op.PLUS,e.flags,t,null);const r=new v(v.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Gt.simplify1(v.Op.PLUS,e.flags,t,null)),r.subs=i.slice(0),Gt.simplify(r)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let r=0;r<e.min;r++)n.push(t)}if(e.max>e.min){let r=Gt.simplify1(v.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new v(v.Op.CONCAT);o.subs=[t,r],r=Gt.simplify1(v.Op.QUEST,e.flags,o,null)}if(n===null)return r;n.push(r)}if(n!==null){const r=new v(v.Op.CONCAT);return r.subs=n.slice(0),Gt.simplify(r)}return new v(v.Op.NO_MATCH)}}return e}static simplify1(e,t,n,r){if(n.op===v.Op.EMPTY_MATCH)return n;if(n.op===v.Op.NO_MATCH)return e===v.Op.PLUS?n:new v(v.Op.EMPTY_MATCH);if(e===n.op&&(t&M.NON_GREEDY)===(n.flags&M.NON_GREEDY))return n;if(r!==null&&r.op===e&&(r.flags&M.NON_GREEDY)===(t&M.NON_GREEDY)&&n===r.subs[0])return r;const i=new v(e);return i.flags=t,i.subs=[n],i}},Ee=class{constructor(s,e){this.sign=s,this.cls=e}};const Pp=[48,57],Np=[9,10,12,13,32,32],Op=[48,57,65,90,95,95,97,122],Fp=new Map([["\\d",new Ee(1,Pp)],["\\D",new Ee(-1,Pp)],["\\s",new Ee(1,Np)],["\\S",new Ee(-1,Np)],["\\w",new Ee(1,Op)],["\\W",new Ee(-1,Op)]]),xp=[48,57,65,90,97,122],Lp=[65,90,97,122],kp=[0,127],Vp=[9,9,32,32],Mp=[0,31,127,127],Gp=[48,57],Hp=[33,126],Up=[97,122],qp=[32,126],Kp=[33,47,58,64,91,96,123,126],jp=[9,13,32,32],Jp=[65,90],zp=[48,57,65,90,95,95,97,122],Wp=[48,57,65,70,97,102],Qp=new Map([["[:alnum:]",new Ee(1,xp)],["[:^alnum:]",new Ee(-1,xp)],["[:alpha:]",new Ee(1,Lp)],["[:^alpha:]",new Ee(-1,Lp)],["[:ascii:]",new Ee(1,kp)],["[:^ascii:]",new Ee(-1,kp)],["[:blank:]",new Ee(1,Vp)],["[:^blank:]",new Ee(-1,Vp)],["[:cntrl:]",new Ee(1,Mp)],["[:^cntrl:]",new Ee(-1,Mp)],["[:digit:]",new Ee(1,Gp)],["[:^digit:]",new Ee(-1,Gp)],["[:graph:]",new Ee(1,Hp)],["[:^graph:]",new Ee(-1,Hp)],["[:lower:]",new Ee(1,Up)],["[:^lower:]",new Ee(-1,Up)],["[:print:]",new Ee(1,qp)],["[:^print:]",new Ee(-1,qp)],["[:punct:]",new Ee(1,Kp)],["[:^punct:]",new Ee(-1,Kp)],["[:space:]",new Ee(1,jp)],["[:^space:]",new Ee(-1,jp)],["[:upper:]",new Ee(1,Jp)],["[:^upper:]",new Ee(-1,Jp)],["[:word:]",new Ee(1,zp)],["[:^word:]",new Ee(-1,zp)],["[:xdigit:]",new Ee(1,Wp)],["[:^xdigit:]",new Ee(-1,Wp)]]);var ss=class cs{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const i=e[r],o=e[r+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,r){const i=e[t]-n;return i!==0?i:r-e[t+1]}static qsortIntPair(e,t,n){const r=((t+n)/2|0)&-2,i=e[r],o=e[r+1];let a=t,l=n;for(;a<=l;){for(;a<n&&cs.cmp(e,a,i,o)<0;)a+=2;for(;l>t&&cs.cmp(e,l,i,o)>0;)l-=2;if(a<=l){if(a!==l){let u=e[a];e[a]=e[l],e[l]=u,u=e[a+1],e[a+1]=e[l+1],e[l+1]=u}a+=2,l-=2}}t<l&&cs.qsortIntPair(e,t,l),a<n&&cs.qsortIntPair(e,a,n)}constructor(e=ee.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;cs.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],r=this.r[t+1];if(n<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=n,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&M.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=$.MIN_FOLD&&t>=$.MAX_FOLD)return this.appendRange(e,t);if(t<$.MIN_FOLD||e>$.MAX_FOLD)return this.appendRange(e,t);e<$.MIN_FOLD&&(this.appendRange(e,$.MIN_FOLD-1),e=$.MIN_FOLD),t>$.MAX_FOLD&&(this.appendRange($.MAX_FOLD+1,t),t=$.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let r=$.simpleFold(n);r!==n;r=$.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],i=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=$.MAX_RUNE&&this.appendRange(t,$.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,r);continue}for(let o=n;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let a=r;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=$.MAX_RUNE&&this.appendRange(t,$.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],i=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=$.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=$.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new cs().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return cs.charClassToString(this.r,this.len)}},DR=class{constructor(s){this.str=s,this.position=0}pos(){return this.position}rewindTo(s){this.position=s}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(s){this.position+=s}skipString(s){this.position+=s.length}pop(){const s=this.str.codePointAt(this.position);return this.position+=ee.charCount(s),s}lookingAt(s){return this.str.startsWith(s,this.position)}rest(){return this.str.substring(this.position)}from(s){return this.str.substring(s,this.position)}toString(){return this.rest()}},K,wR=(K=class{static unicodeTable(e){return e==="Any"?{tab:K.ANY_TABLE,fold:K.ANY_TABLE,sign:1}:e==="Ascii"?{tab:K.ASCII_TABLE,fold:K.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Pt.CATEGORIES.get("Cn"),fold:Pt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Pt.CATEGORIES.get("LC"),fold:Pt.FOLD_CATEGORIES.get("LC"),sign:1}:Pt.CATEGORIES.has(e)?{tab:Pt.CATEGORIES.get(e),fold:Pt.FOLD_CATEGORIES.get(e),sign:1}:Pt.SCRIPTS.has(e)?{tab:Pt.SCRIPTS.get(e),fold:Pt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<$.MIN_FOLD||e>$.MAX_FOLD)return e;let t=e;const n=e;for(e=$.simpleFold(e);e!==n;e=$.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===v.Op.EMPTY_MATCH)return null;if(e.op===v.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===v.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new v(v.Op.LITERAL);return n.flags=t,n.runes=ee.stringToRunes(e),n}static parse(e,t){return new K(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=K.parseInt(e);if(n===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=K.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||r===-2||r>1e3||r>=0&&n>r)throw new Ne(K.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|r&$.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==F.CODES.get("_")&&!ee.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=F.CODES.get("0")&&e.peek()<=F.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===F.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===v.Op.LITERAL&&e.runes.length===1||e.op===v.Op.CHAR_CLASS||e.op===v.Op.ANY_CHAR_NOT_NL||e.op===v.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case v.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case v.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case v.Op.ANY_CHAR_NOT_NL:return t!==F.CODES.get(`
`);case v.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case v.Op.ANY_CHAR:break;case v.Op.ANY_CHAR_NOT_NL:K.matchRune(t,F.CODES.get(`
`))&&(e.op=v.Op.ANY_CHAR);break;case v.Op.CHAR_CLASS:t.op===v.Op.LITERAL?e.runes=new ss(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new ss(e.runes).appendClass(t.runes).toArray();break;case v.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=v.Op.CHAR_CLASS,e.runes=new ss().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ne(K.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case F.CODES.get("1"):case F.CODES.get("2"):case F.CODES.get("3"):case F.CODES.get("4"):case F.CODES.get("5"):case F.CODES.get("6"):case F.CODES.get("7"):if(!e.more()||e.peek()<F.CODES.get("0")||e.peek()>F.CODES.get("7"))break;case F.CODES.get("0"):{let r=n-F.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<F.CODES.get("0")||e.peek()>F.CODES.get("7"));i++)r=r*8+e.peek()-F.CODES.get("0"),e.skip(1);return r}case F.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===F.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===F.CODES.get("}"))break;const l=ee.unhex(n);if(l<0||(a=a*16+l,a>$.MAX_RUNE))break e;o++}if(o===0)break e;return a}const r=ee.unhex(n);if(!e.more())break;n=e.pop();const i=ee.unhex(n);if(r<0||i<0)break;return r*16+i}case F.CODES.get("a"):return F.CODES.get("\x07");case F.CODES.get("f"):return F.CODES.get("\f");case F.CODES.get("n"):return F.CODES.get(`
`);case F.CODES.get("r"):return F.CODES.get("\r");case F.CODES.get("t"):return F.CODES.get("	");case F.CODES.get("v"):return F.CODES.get("\v");default:if(n<=$.MAX_ASCII&&!ee.isalnum(n))return n;break}throw new Ne(K.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ne(K.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?K.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===v.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(K.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new v(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>K.MAX_RUNES)throw new Ne(K.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===v.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(K.MAX_SIZE/this.repeats)?this.repeats=K.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(K.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>K.MAX_SIZE)throw new Ne(K.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case v.Op.LITERAL:n=e.runes.length;break;case v.Op.PLB:case v.Op.NLB:case v.Op.CAPTURE:case v.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case v.Op.PLUS:case v.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case v.Op.CONCAT:for(let r of e.subs)n=n+this.calcSize(r);break;case v.Op.ALTERNATE:for(let r of e.subs)n=n+this.calcSize(r);e.subs.length>1&&(n=n+e.subs.length-1);break;case v.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+r:n=1+e.min*r;break}n=e.max*r+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<K.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>K.MAX_HEIGHT)throw new Ne(K.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let r of e.subs){const i=this.calcHeight(r);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!v.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===v.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=v.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===v.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&$.simpleFold(e.runes[0])===e.runes[2]&&$.simpleFold(e.runes[2])===e.runes[0]||e.op===v.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&$.simpleFold(e.runes[0])===e.runes[1]&&$.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|M.FOLD_CASE))return null;e.op=v.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|M.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const r=this.stack[n-1],i=this.stack[n-2];return r.op!==v.Op.LITERAL||i.op!==v.Op.LITERAL||(r.flags&M.FOLD_CASE)!==(i.flags&M.FOLD_CASE)?!1:(i.runes=K.concatRunes(i.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const n=this.newRegexp(v.Op.LITERAL);return n.flags=t,(t&M.FOLD_CASE)!==0&&(e=K.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,r,i,o){let a=this.flags;if((a&M.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=M.NON_GREEDY),o!==-1))throw new Ne(K.ERR_INVALID_REPEAT_OP,i.from(o));const l=this.stack.length;if(l===0)throw new Ne(K.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const u=this.stack[l-1];if(v.isPseudoOp(u.op))throw new Ne(K.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=a,h.subs=[u],this.stack[l-1]=h,this.checkLimits(h),e===v.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new Ne(K.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===v.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(v.Op.EMPTY_MATCH)):this.push(this.collapse(e,v.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(v.Op.NO_MATCH)):this.push(this.collapse(e,v.Op.ALTERNATE))}cleanAlt(e){e.op===v.Op.CHAR_CLASS&&(e.runes=new ss(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===$.MAX_RUNE?(e.runes=[],e.op=v.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===F.CODES.get(`
`)-1&&e.runes[2]===F.CODES.get(`
`)+1&&e.runes[3]===$.MAX_RUNE&&(e.runes=[],e.op=v.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let a of e)n+=a.op===t?a.subs.length:1;let r=new Array(n).fill(null),i=0;for(let a of e)if(a.op===t){for(let l=0;l<a.subs.length;l++)r[i++]=a.subs[l];this.reuse(a)}else r[i++]=a;let o=this.newRegexp(t);if(o.subs=r,t===v.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,r=0,i=null,o=0,a=0,l=0;for(let h=0;h<=n;h++){let B=null,C=0,g=0;if(h<n){let E=e[t+h];if(E.op===v.Op.CONCAT&&E.subs.length>0&&(E=E.subs[0]),E.op===v.Op.LITERAL&&(B=E.runes,C=E.runes.length,g=E.flags&M.FOLD_CASE),g===a){let P=0;for(;P<o&&P<C&&i[P]===B[P];)P++;if(P>0){o=P;continue}}}if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const E=this.newRegexp(v.Op.LITERAL);E.flags=a,E.runes=i.slice(0,o);for(let W=l;W<h;W++)e[t+W]=this.removeLeadingString(e[t+W],o),this.checkLimits(e[t+W]);const P=this.collapse(e.slice(t+l,t+h),v.Op.ALTERNATE),V=this.newRegexp(v.Op.CONCAT);V.subs=[E,P],e[r++]=V}l=h,i=B,o=C,a=g}n=r,t=0,l=0,r=0;let u=null;for(let h=0;h<=n;h++){let B=null;if(!(h<n&&(B=K.leadingRegexp(e[t+h]),u!==null&&u.equals(B)&&(K.isCharClass(u)||u.op===v.Op.REPEAT&&u.min===u.max&&K.isCharClass(u.subs[0]))))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{const C=u;for(let P=l;P<h;P++){const V=P!==l;e[t+P]=this.removeLeadingRegexp(e[t+P],V),this.checkLimits(e[t+P])}const g=this.collapse(e.slice(t+l,t+h),v.Op.ALTERNATE),E=this.newRegexp(v.Op.CONCAT);E.subs=[C,g],e[r++]=E}l=h,u=B}}n=r,t=0,l=0,r=0;for(let h=0;h<=n;h++)if(!(h<n&&K.isCharClass(e[t+h]))){if(h!==l)if(h===l+1)e[r++]=e[t+l];else{let B=l;for(let g=l+1;g<h;g++){const E=e[t+B],P=e[t+g];(E.op<P.op||E.op===P.op&&(E.runes!==null?E.runes.length:0)<(P.runes!==null?P.runes.length:0))&&(B=g)}const C=e[t+l];e[t+l]=e[t+B],e[t+B]=C;for(let g=l+1;g<h;g++)K.mergeCharClass(e[t+l],e[t+g]),this.reuse(e[t+g]);this.cleanAlt(e[t+l]),e[r++]=e[t+l]}h<n&&(e[r++]=e[t+h]),l=h+1}n=r,t=0,l=0,r=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===v.Op.EMPTY_MATCH&&e[t+h+1].op===v.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return n=r,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===v.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===v.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=v.Op.EMPTY_MATCH,e.subs=v.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===v.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=v.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===v.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=v.Op.EMPTY_MATCH,e.subs=v.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(v.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&M.LITERAL)!==0)return K.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const r=new DR(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case F.CODES.get("("):if((this.flags&M.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&M.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(v.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case F.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case F.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case F.CODES.get("^"):(this.flags&M.ONE_LINE)!==0?this.op(v.Op.BEGIN_TEXT):this.op(v.Op.BEGIN_LINE),r.skip(1);break;case F.CODES.get("$"):(this.flags&M.ONE_LINE)!==0?this.op(v.Op.END_TEXT).flags|=M.WAS_DOLLAR:this.op(v.Op.END_LINE),r.skip(1);break;case F.CODES.get("."):(this.flags&M.DOT_NL)!==0?this.op(v.Op.ANY_CHAR):this.op(v.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case F.CODES.get("["):this.parseClass(r);break;case F.CODES.get("*"):case F.CODES.get("+"):case F.CODES.get("?"):{i=r.pos();let o=null;switch(r.pop()){case F.CODES.get("*"):o=v.Op.STAR;break;case F.CODES.get("+"):o=v.Op.PLUS;break;case F.CODES.get("?"):o=v.Op.QUEST;break}this.repeat(o,t,n,i,r,e);break}case F.CODES.get("{"):{i=r.pos();const o=K.parseRepeat(r);if(o<0){r.rewindTo(i),this.literal(r.pop());break}t=o>>16,n=(o&$.MAX_BMP)<<16>>16,this.repeat(v.Op.REPEAT,t,n,i,r,e);break}case F.CODES.get("\\"):{const o=r.pos();if(r.skip(1),(this.flags&M.PERL_X)!==0&&r.more())switch(r.pop()){case F.CODES.get("A"):this.op(v.Op.BEGIN_TEXT);break e;case F.CODES.get("b"):this.op(v.Op.WORD_BOUNDARY);break e;case F.CODES.get("B"):this.op(v.Op.NO_WORD_BOUNDARY);break e;case F.CODES.get("C"):throw new Ne(K.ERR_INVALID_ESCAPE,"\\C");case F.CODES.get("Q"):{let u=r.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),r.skipString(u),r.skipString("\\E")):r.skipString(u);let B=0;for(;B<u.length;){const C=u.codePointAt(B);this.literal(C),B+=ee.charCount(C)}break e}case F.CODES.get("z"):this.op(v.Op.END_TEXT);break e;default:r.rewindTo(o);break}else r.rewindTo(o);const a=this.newRegexp(v.Op.CHAR_CLASS);if(a.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const u=new ss;if(this.parseUnicodeClass(r,u)){a.runes=u.toArray(),this.push(a);break e}}const l=new ss;if(this.parsePerlClassEscape(r,l)){a.runes=l.toArray(),this.push(a);break e}r.rewindTo(o),this.reuse(a),this.literal(K.parseEscape(r));break}default:this.literal(r.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ne(K.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const a=n.charAt(2)==="P"?4:3,l=n.indexOf(">");if(l<0)throw new Ne(K.ERR_INVALID_NAMED_CAPTURE,n);const u=n.substring(a,l);if(e.skipString(u),e.skip(a+1),!K.isValidCaptureName(u))throw new Ne(K.ERR_INVALID_NAMED_CAPTURE,n.substring(0,l+1));const h=this.op(v.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new Ne(K.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case F.CODES.get("i"):r|=M.FOLD_CASE,o=!0;break;case F.CODES.get("m"):r&=-17,o=!0;break;case F.CODES.get("s"):r|=M.DOT_NL,o=!0;break;case F.CODES.get("U"):r|=M.NON_GREEDY,o=!0;break;case F.CODES.get("-"):if(i<0)break e;i=-1,r=~r,o=!1;break;case F.CODES.get(":"):case F.CODES.get(")"):if(i<0){if(!o)break e;r=~r}a===F.CODES.get(":")&&this.op(v.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new Ne(K.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(v.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(v.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(v.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===v.Op.VERTICAL_BAR&&K.isCharClass(this.stack[e-1])&&K.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const r=n;n=t,t=r,this.stack[e-3]=n}return K.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===v.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ne(K.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==v.Op.LEFT_PAREN)throw new Ne(K.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(K.hasCapture(e))throw new Ne(K.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=v.Op.PLB:t.op=v.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=v.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&M.PERL_X)===0||!e.more()||e.pop()!==F.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(n),i=Fp.has(r)?Fp.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&M.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),r=n.indexOf(":]");if(r<0)return!1;const i=n.substring(0,r+2);e.skipString(i);const o=Qp.has(i)?Qp.get(i):null;if(o===null)throw new Ne(K.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&M.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&M.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===F.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(n),new Ne(K.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==F.CODES.get("{"))o=ee.runeToString(i);else{const h=e.rest(),B=h.indexOf("}");if(B<0)throw e.rewindTo(n),new Ne(K.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,B),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===F.CODES.get("^")&&(r=0-r,o=o.substring(1));const a=K.unicodeTable(o);if(a===null)throw new Ne(K.ERR_INVALID_CHAR_RANGE,e.from(n));a.sign<0&&(r=0-r);const l=a.tab,u=a.fold;if((this.flags&M.FOLD_CASE)===0||u===null)t.appendTableWithSign(l,r);else{const h=new ss().appendTable(l).appendTable(u).cleanClass().toArray();t.appendClassWithSign(h,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(v.Op.CHAR_CLASS);n.flags=this.flags;const r=new ss;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&M.CLASS_NL)===0&&r.appendRange(F.CODES.get(`
`),F.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==F.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&M.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new Ne(K.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(a);const l=K.parseClassChar(e,t);let u=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=K.parseClassChar(e,t),u<l)throw new Ne(K.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&M.FOLD_CASE)===0?r.appendRange(l,u):r.appendFoldedRange(l,u)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),n.runes=r.toArray(),this.push(n)}},q(K,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),q(K,"ERR_INVALID_CHAR_RANGE","invalid character class range"),q(K,"ERR_INVALID_ESCAPE","invalid escape sequence"),q(K,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),q(K,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),q(K,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),q(K,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),q(K,"ERR_MISSING_BRACKET","missing closing ]"),q(K,"ERR_MISSING_PAREN","missing closing )"),q(K,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),q(K,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),q(K,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),q(K,"ERR_UNEXPECTED_PAREN","unexpected )"),q(K,"ERR_NESTING_DEPTH","expression nests too deeply"),q(K,"ERR_LARGE","expression too large"),q(K,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),q(K,"MAX_HEIGHT",1e3),q(K,"MAX_SIZE",3355443),q(K,"MAX_RUNES",33554432),q(K,"ANY_TABLE",new m(new Uint32Array([0,$.MAX_RUNE,1]))),q(K,"ASCII_TABLE",new m(new Uint32Array([0,127,1]))),q(K,"ASCII_FOLD_TABLE",new m(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),K),TR=class Zs{static initTest(e){const t=Zs.compile(e),n=new Zs(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return Zs.compileImpl(e,M.PERL,!1)}static compilePOSIX(e){return Zs.compileImpl(e,M.POSIX,!0)}static compileImpl(e,t,n){let r=wR.parse(e,t);const i=r.maxCap();r=IR.simplify(r);const o=_R.build(r),a=yR.compileRegexp(r),l=new Zs(e,a,i,n);l.prefilter=o.type===Ie.Type.NONE?null:o;const[u,h]=a.prefix();return l.prefixComplete=u,l.prefix=h,l.prefixUTF8=ee.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=r.namedGroups,l}static match(e,t){return Zs.compile(e).match(t)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new cR(this.prog),this.onepass=Sp.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,r){if((n===M.ANCHOR_START||n===M.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(n===M.UNANCHORED){const l=e.index(this,t);if(l<0)return null;i=t+l,o=i+a}else if(n===M.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(n===M.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(r>0){const l=new Int32Array(r).fill(-1);return l[0]=i,l[1]=o,Array.from(l)}return[]}executeEngine(e,t,n,r){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,r);if(this.prefilter!==null&&n===M.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Sp.execute(this,e,t,n,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=Dl.maxBitStateLen(this.prog)?Dl.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=Dl.maxBitStateLen(this.prog))return Dl.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r){let i=this.get();i||(i=oR.fromRE2(this)),i.init(r);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(ke.fromUTF16(e),0,M.UNANCHORED,0)!==null}matchWithGroup(e,t,n,r,i){return e instanceof vr||(ee.isByteArray(e)?e=cr.utf8(e):e=cr.utf16(e)),this.matchMachineInput(e,t,n,r,i)}matchMachineInput(e,t,n,r,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?ke.fromUTF16(e.asCharSequence(),0,n):ke.fromUTF8(e.asBytes(),0,n),a=this.executeEngine(o,t,r,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.executeEngine(ke.fromUTF8(e),0,M.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,i=0,o="";const a=ke.fromUTF16(e);let l=0;for(;i<=e.length;){const u=this.executeEngine(a,i,M.UNANCHORED,2);if(u===null||u.length===0)break;o+=e.substring(r,u[0]),(u[1]>r||u[0]===0)&&(o+=t(e.substring(u[0],u[1])),l++),r=u[1];const h=a.step(i)&7;if(i+h>u[1]?i+=h:i+1>u[1]?i++:i=u[1],l>=n)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let r=0;r<e.length;r++)n[r]=e[r];e=n}return e}allMatches(e,t,n=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,l=-1;for(;a<t&&o<=i;){const u=this.executeEngine(e,o,M.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let h=!0;if(u[1]===o){u[0]===l&&(h=!1);const B=e.step(o);B<0?o=i+1:o+=B&7}else o=u[1];l=u[1],h&&(r.push(n(this.pad(u))),a++)}return r}findUTF8(e){const t=this.executeEngine(ke.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(ke.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(ke.fromUTF16(e),0,M.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(ke.fromUTF16(e),0,M.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(ke.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(ke.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(ke.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(ke.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(ke.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(ke.fromUTF8(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(ke.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(ke.fromUTF16(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(ke.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(ke.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(ke.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(ke.fromUTF16(e),t);return n.length===0?null:n}},vR=class ii{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",r=!1,i=e.length;i===0&&(n="(?:)",r=!0);let o=!1,a=0;for(;a<i;){let u=e[a];if(u==="\\"){if(a+1<i)switch(u=e[a+1],u){case"\\":n+="\\\\",a+=2;continue;case"c":if(a+2<i){let C=e[a+2].charCodeAt(0);if(C>=65&&C<=90||C>=97&&C<=122){let g=C%32;n+="\\x",n+=(g>>4).toString(16).toUpperCase(),n+=(g&15).toString(16).toUpperCase(),a+=3,r=!0;continue}}n+="c",a+=2,r=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let C=a+3,g=!1,E=!1;for(;C<i;){const P=e[C];if(P==="}"){E=!0;break}if(!ii.isHexadecimal(P))break;g=!0,C++}if(E&&g){n+="\\x",a+=2,r=!0;continue}}else if(a+5<i){let C=!0;for(let g=0;g<4;g++)if(!ii.isHexadecimal(e[a+2+g])){C=!1;break}if(C){n+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,r=!0;continue}}}n+="u",a+=2,r=!0;continue;case"x":{let C=!1;if(a+2<i&&e[a+2]==="{"){let g=a+3,E=!1,P=!1;for(;g<i;){const V=e[g];if(V==="}"){P=!0;break}if(!ii.isHexadecimal(V))break;E=!0,g++}P&&E&&(C=!0)}else a+3<i&&ii.isHexadecimal(e[a+2])&&ii.isHexadecimal(e[a+3])&&(C=!0);C?(n+="\\x",a+=2):(n+="x",a+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+u,a+=2;continue;default:{let C=e.codePointAt(a+1);if(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122){let g=ee.charCount(C);n+=e.substring(a+1,a+1+g),a+=g+1,r=!0}else{n+="\\";let g=ee.charCount(C);n+=e.substring(a+1,a+1+g),a+=g+1}continue}}}else if(u==="/"){n+="\\/",a+=1,r=!0;continue}else if(u==="[")o=!0;else if(u==="]")o=!1;else if(!o&&u==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){n+="(?P<",a+=3,r=!0;continue}let h=e.codePointAt(a),B=ee.charCount(h);n+=e.substring(a,a+B),a+=B}const l=r?n:e;return t.length>0?`(?${t})${l}`:l}},Qe,sd=(Qe=class{static quote(e){return ee.quoteMeta(e)}static quoteReplacement(e,t=!1){return Tp.quoteReplacement(e,t)}static translateRegExp(e){return vR.translate(e)}static compile(e,t=0){let n=e;if((t&Qe.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&Qe.DOTALL)!==0&&(n=`(?s)${n}`),(t&Qe.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new iR("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let r=M.PERL;(t&Qe.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Qe.LOOKBEHINDS)!==0&&(r|=M.LOOKBEHIND);const i=new Qe(e,t);return i.re2Input=TR.compileImpl(n,r,(t&Qe.LONGEST_MATCH)!==0),i}static matches(e,t){return Qe.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const r=new Qe(e,t);return r.re2Input=n,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return ee.isByteArray(e)&&(e=cr.utf8(e)),new Tp(this,e)}test(e){return ee.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=ee.isByteArray(e)?ke.fromUTF8(e):ke.fromUTF16(e);return this.re2Input.executeEngine(t,0,M.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),r=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&r.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.inputLength()))}return(t!==0||r.length===0&&!(o===n.inputLength()&&o>0))&&r.push(n.substring(o,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},q(Qe,"CASE_INSENSITIVE",Qr.CASE_INSENSITIVE),q(Qe,"DOTALL",Qr.DOTALL),q(Qe,"MULTILINE",Qr.MULTILINE),q(Qe,"DISABLE_UNICODE_GROUPS",Qr.DISABLE_UNICODE_GROUPS),q(Qe,"LONGEST_MATCH",Qr.LONGEST_MATCH),q(Qe,"LOOKBEHINDS",Qr.LOOKBEHINDS),Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji="12.19.0";function AR(s){Ji=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Wc("@firebase/firestore");function oi(){return Ar.logLevel}function G(s,...e){if(Ar.logLevel<=de.DEBUG){const t=e.map(rd);Ar.debug(`Firestore (${Ji}): ${s}`,...t)}}function ze(s,...e){if(Ar.logLevel<=de.ERROR){const t=e.map(rd);Ar.error(`Firestore (${Ji}): ${s}`,...t)}}function ln(s,...e){if(Ar.logLevel<=de.WARN){const t=e.map(rd);Ar.warn(`Firestore (${Ji}): ${s}`,...t)}}function rd(s){if(typeof s=="string")return s;try{return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,rE(s,n,t)}function rE(s,e,t){let n=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ze(n),new Error(n)}function U(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||rE(e,r,n)}function X(s,e){return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=RR(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function ae(s,e){return s<e?-1:s>e?1:0}function Xh(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return yh(r)===yh(i)?ae(r,i):yh(r)?1:-1}return ae(s.length,e.length)}const SR=55296,bR=57343;function yh(s){const e=s.charCodeAt(0);return e>=SR&&e<=bR}function mi(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}function iE(s){return s+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me=class Zh{constructor(e,t){this.comparator=e,this.root=t||Es.EMPTY}insert(e,t){return new Zh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Es.BLACK,null,null))}remove(e){return new Zh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Es.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tl(this.root,e,this.comparator,!0)}},Tl=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Es=class bn{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??bn.RED,this.left=r??bn.EMPTY,this.right=i??bn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new bn(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return bn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}};Es.EMPTY=null,Es.RED=!0,Es.BLACK=!1;Es.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Es(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $p(this.data.getIterator())}getIteratorFrom(e){return new $p(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class $p{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $r(s){return s.hasNext()?s.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="__name__";class Bn{constructor(e,t,n){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Y(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=Bn.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ae(e.length,t.length)}static compareSegments(e,t){const n=Bn.isNumericId(e),r=Bn.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Bn.extractNumericId(e).compare(Bn.extractNumericId(t)):Xh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _s.fromString(e.substring(4,e.length-2))}}class Ce extends Bn{construct(e,t,n){return new Ce(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new H(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Ce(t)}static emptyPath(){return new Ce([])}}const PR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let nt=class ai extends Bn{construct(e,t,n){return new ai(e,t,n)}static isValidIdentifier(e){return PR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ai.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fn}static keyField(){return new ai([fn])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new H(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(i(),r++)}if(i(),o)throw new H(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ai(t)}static emptyPath(){return new ai([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new Te(nt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function Hs(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function NR(s,e){const t=[];for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.push(e(s[n],n,s));return t}function oE(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ce.fromString(e))}static fromName(e){return new z(Ce.fromString(e).popFirst(5))}static empty(){return new z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(s,e,t){if(!t)throw new H(x.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function OR(s,e,t,n){if(e===!0&&n===!0)throw new H(x.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Yp(s){if(!z.isDocumentKey(s))throw new H(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Xp(s){if(z.isDocumentKey(s))throw new H(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function xa(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Zc(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Y(12329,{type:typeof s})}function xt(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new H(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zc(s);throw new H(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(s,e){const t={typeString:s};return e&&(t.value=e),t}function La(s,e){if(!xa(s))throw new H(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new H(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=-62135596800,eg=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*eg);return new De(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new H(x.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return De._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(r+1000000000n))}return new De(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zp)throw new H(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eg}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new H(x.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(La(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:Ye("string",De._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lE("Invalid base64 string: "+i):i}})(e);return new Ge(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const FR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(s){if(U(!!s,39018),typeof s=="string"){let e=0;const t=FR.exec(s);if(U(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Fe(s.seconds),nanos:Fe(s.nanos)}}function Fe(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function qn(s){return typeof s=="string"?Ge.fromBase64String(s):Ge.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="server_timestamp",uE="__type__",hE="__previous_value__",BE="__local_write_time__";function eu(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[uE])==null?void 0:n.stringValue)===cE}function ka(s){const e=s.mapValue.fields[hE];return eu(e)?ka(e):e}function _i(s){const e=Un(s.mapValue.fields[BE].timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,t,n,r,i,o,a,l,u,h,B,C,g){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=B,this._customHeaders=C,this.grpcFlowControlWindow=g}}const uc="(default)";class Rr{constructor(e,t){this.projectId=e,this.database=t||uc}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database===uc}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}function LR(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new H(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(s.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=-1;function tu(s){return s==null}function Ei(s){return s===0&&1/s==-1/0}function dE(s){return typeof s=="number"&&Number.isInteger(s)&&!Ei(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}function kR(s){return typeof s=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="__type__",fE="__max__",Cs={mapValue:{fields:{__type__:{stringValue:fE}}}},ad="__vector__",Sr="value",In={nullValue:"NULL_VALUE"},kt={booleanValue:!0},ct={booleanValue:!1};function Xe(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?eu(s)?4:CE(s)?9007199254740991:br(s)?10:11:Y(28295,{value:s})}function Zt(s,e,t){if(s===e)return!0;const n=Xe(s);if(n!==Xe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return _i(s).isEqual(_i(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Un(i.timestampValue),l=Un(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,o){return qn(i.bytesValue).isEqual(qn(o.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,o){return Fe(i.geoPointValue.latitude)===Fe(o.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(o.geoPointValue.longitude)})(s,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Fe(i.integerValue)===Fe(o.integerValue);let l,u;if("doubleValue"in i&&"doubleValue"in o)l=Fe(i.doubleValue),u=Fe(o.doubleValue);else{if(!(a!=null&&a.i))return!1;l=Fe(i.integerValue??i.doubleValue),u=Fe(o.integerValue??o.doubleValue)}return l===u?!!(a!=null&&a.o)||Ei(l)===Ei(u):!!(a===void 0||a.u)&&isNaN(l)&&isNaN(u)})(s,e,t);case 9:return mi(s.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>Zt(r,i,t)));case 10:case 11:return(function(i,o,a){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(cc(l)!==cc(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!Zt(l[h],u[h],a)))return!1;return!0})(s,e,t);default:return Y(52216,{left:s})}}function ra(s,e){return(s.values||[]).find((t=>Zt(t,e)))!==void 0}function yt(s,e){if(s===e)return 0;const t=Xe(s),n=Xe(e);if(t!==n)return ae(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(s.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(s,e);case 3:return tg(s.timestampValue,e.timestampValue);case 4:return tg(_i(s),_i(e));case 5:return Xh(s.stringValue,e.stringValue);case 6:return(function(i,o){const a=qn(i),l=qn(o);return a.compareTo(l)})(s.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ae(a[u],l[u]);if(h!==0)return h}return ae(a.length,l.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=ae(Fe(i.latitude),Fe(o.latitude));return a!==0?a:ae(Fe(i.longitude),Fe(o.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return ng(s.arrayValue,e.arrayValue);case 10:return(function(i,o){var C,g,E,P;const a=i.fields||{},l=o.fields||{},u=(C=a[Sr])==null?void 0:C.arrayValue,h=(g=l[Sr])==null?void 0:g.arrayValue,B=ae(((E=u==null?void 0:u.values)==null?void 0:E.length)||0,((P=h==null?void 0:h.values)==null?void 0:P.length)||0);return B!==0?B:ng(u,h)})(s.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Cs.mapValue&&o===Cs.mapValue)return 0;if(i===Cs.mapValue)return 1;if(o===Cs.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let B=0;B<l.length&&B<h.length;++B){const C=Xh(l[B],h[B]);if(C!==0)return C;const g=yt(a[l[B]],u[h[B]]);if(g!==0)return g}return ae(l.length,h.length)})(s.mapValue,e.mapValue);default:throw Y(23264,{l:t})}}function tg(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return ae(s,e);const t=Un(s),n=Un(e),r=ae(t.seconds,n.seconds);return r!==0?r:ae(t.nanos,n.nanos)}function ng(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=yt(t[r],n[r]);if(i!==void 0&&i!==0)return i}return ae(t.length,n.length)}function yi(s){return eB(s)}function eB(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=Un(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return qn(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return z.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=eB(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${eB(t.fields[o])}`;return r+"}"})(s.mapValue):Y(61005,{value:s})}function Hl(s){switch(Xe(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ka(s);return e?16+Hl(e):16;case 5:return 2*s.stringValue.length;case 6:return qn(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+Hl(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return Hs(n.fields,((i,o)=>{r+=i.length+Hl(o)})),r})(s.mapValue);default:throw Y(13486,{value:s})}}function ia(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Cn(s){return!!s&&"integerValue"in s}function ur(s){return!!s&&"doubleValue"in s}function Ss(s){return Cn(s)||ur(s)}function bs(s){return!!s&&"arrayValue"in s}function qt(s){return!!s&&"nullValue"in s}function Vt(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function pr(s){return!!s&&"mapValue"in s}function br(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[od])==null?void 0:n.stringValue)===ad}function tB(s){var e,t;return(t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[Sr])==null?void 0:t.arrayValue}function ko(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return Hs(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ko(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ko(s.arrayValue.values[t]);return e}return{...s}}function CE(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===fE}const pE={mapValue:{fields:{[od]:{stringValue:ad},[Sr]:{arrayValue:{}}}}};function VR(s){return"nullValue"in s?In:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?ia(Rr.empty(),z.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?br(s)?pE:{mapValue:{}}:Y(35942,{value:s})}function MR(s){return"nullValue"in s?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?ia(Rr.empty(),z.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?pE:"mapValue"in s?br(s)?{mapValue:{}}:Cs:Y(61959,{value:s})}function sg(s,e){const t=yt(s.value,e.value);return t!==0?t:s.inclusive&&!e.inclusive?-1:!s.inclusive&&e.inclusive?1:0}function rg(s,e){const t=yt(s.value,e.value);return t!==0?t:s.inclusive&&!e.inclusive?1:!s.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(t)}setAll(e){let t=nt.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=ko(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());pr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];pr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Hs(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new Bt(ko(this.value))}}function gE(s){const e=[];return Hs(s.fields,((t,n)=>{const r=new nt([t]);if(pr(n)){const i=gE(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function ld(s){return{integerValue:""+s}}function cd(s,e,t){return dE(e)?ld(e):nu(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this._=void 0}}function GR(s,e,t){return s instanceof oa?(function(r,i){const o={fields:{[uE]:{stringValue:cE},[BE]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&eu(i)&&(i=ka(i)),i&&(o.fields[hE]=i),{mapValue:o}})(t,e):s instanceof Ii?_E(s,e):s instanceof Di?EE(s,e):s instanceof wi?(function(r,i){const o=mE(r,i),a=hc(o)+hc(r.h);return Cn(o)&&Cn(r.h)?ld(a):nu(r.serializer,a)})(s,e):s instanceof aa?(function(r,i){return ig(r,i,Math.min)})(s,e):s instanceof la?(function(r,i){return ig(r,i,Math.max)})(s,e):void 0}function HR(s,e,t){return s instanceof Ii?_E(s,e):s instanceof Di?EE(s,e):t}function mE(s,e){return s instanceof wi?Ss(e)?e:{integerValue:0}:null}class oa extends su{}class Ii extends su{constructor(e){super(),this.elements=e}}function _E(s,e){const t=yE(e);for(const n of s.elements)t.some((r=>Zt(r,n)))||t.push(n);return{arrayValue:{values:t}}}class Di extends su{constructor(e){super(),this.elements=e}}function EE(s,e){let t=yE(e);for(const n of s.elements)t=t.filter((r=>!Zt(r,n)));return{arrayValue:{values:t}}}class ud extends su{constructor(e,t){super(),this.serializer=e,this.h=t}}class wi extends ud{}class aa extends ud{}class la extends ud{}function ig(s,e,t){if(!Ss(e))return s.h;const n=t(hc(e),hc(s.h));return Cn(e)&&Cn(s.h)?ld(n):nu(s.serializer,n)}function hc(s){return Fe(s.integerValue||s.doubleValue)}function yE(s){return bs(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t){this.field=e,this.transform=t}}function qR(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof Ii&&r instanceof Ii||n instanceof Di&&r instanceof Di?mi(n.elements,r.elements,Zt):n instanceof wi&&r instanceof wi||n instanceof aa&&r instanceof aa||n instanceof la&&r instanceof la?Zt(n.h,r.h):n instanceof oa&&r instanceof oa})(s.transform,e.transform)}class KR{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ul(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class ru{}function IE(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Va(s.key,ut.none()):new zi(s.key,s.data,ut.none());{const t=s.data,n=Bt.empty();let r=new Te(nt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new Wn(s.key,n,new Nt(r.toArray()),ut.none())}}function jR(s,e,t){s instanceof zi?(function(r,i,o){const a=r.value.clone(),l=ag(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(s,e,t):s instanceof Wn?(function(r,i,o){if(!Ul(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ag(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(DE(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(s,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Vo(s,e,t,n){return s instanceof zi?(function(i,o,a,l){if(!Ul(i.precondition,o))return a;const u=i.value.clone(),h=lg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(s,e,t,n):s instanceof Wn?(function(i,o,a,l){if(!Ul(i.precondition,o))return a;const u=lg(i.fieldTransforms,l,o),h=o.data;return h.setAll(DE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((B=>B.field)))})(s,e,t,n):(function(i,o,a){return Ul(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(s,e,t)}function JR(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=mE(n.transform,r||null);i!=null&&(t===null&&(t=Bt.empty()),t.set(n.field,i))}return t||null}function og(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mi(n,r,((i,o)=>qR(i,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class zi extends ru{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wn extends ru{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function DE(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function ag(s,e,t){const n=new Map;U(s.length===t.length,32656,{T:t.length,P:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,a=e.data.field(i.field);n.set(i.field,HR(o,a,t[r]))}return n}function lg(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,GR(i,o,e))}return n}class Va extends ru{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wE extends ru{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.position=e,this.inclusive=t}}function cg(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=z.comparator(z.fromName(o.referenceValue),t.key):n=yt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function ug(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Zt(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{}class pe extends TE{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new zR(e,t,n):t==="array-contains"?new $R(e,n):t==="in"?new PE(e,n):t==="not-in"?new YR(e,n):t==="array-contains-any"?new XR(e,n):new pe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new WR(e,n):new QR(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yt(t,this.value)):t!==null&&Xe(this.value)===Xe(t)&&this.matchesComparison(yt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends TE{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new ve(e,t)}matches(e){return vi(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function vi(s){return s.op==="and"}function nB(s){return s.op==="or"}function hd(s){return vE(s)&&vi(s)}function vE(s){for(const e of s.filters)if(e instanceof ve)return!1;return!0}function sB(s){if(s instanceof pe)return s.field.canonicalString()+s.op.toString()+yi(s.value);if(hd(s))return s.filters.map((e=>sB(e))).join(",");{const e=s.filters.map((t=>sB(t))).join(",");return`${s.op}(${e})`}}function AE(s,e){return s instanceof pe?(function(n,r){return r instanceof pe&&n.op===r.op&&n.field.isEqual(r.field)&&Zt(n.value,r.value)})(s,e):s instanceof ve?(function(n,r){return r instanceof ve&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,o,a)=>i&&AE(o,r.filters[a])),!0):!1})(s,e):void Y(19439)}function RE(s,e){const t=s.filters.concat(e);return ve.create(t,s.op)}function SE(s){return s instanceof pe?(function(t){return`${t.field.canonicalString()} ${t.op} ${yi(t.value)}`})(s):s instanceof ve?(function(t){return t.op.toString()+" {"+t.getFilters().map(SE).join(" ,")+"}"})(s):"Filter"}class zR extends pe{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class WR extends pe{constructor(e,t){super(e,"in",t),this.keys=bE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class QR extends pe{constructor(e,t){super(e,"not-in",t),this.keys=bE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bE(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>z.fromName(n.referenceValue)))}class $R extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bs(t)&&ra(t.arrayValue,this.value)}}class PE extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ra(this.value.arrayValue,t)}}class YR extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ra(this.value.arrayValue,t)}}class XR extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>ra(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t="asc"){this.field=e,this.dir=t}}function ZR(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new De(0,0))}static max(){return new ne(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,ne.min(),ne.min(),ne.min(),Bt.empty(),0)}static newFoundDocument(e,t,n,r){return new Ke(e,1,t,ne.min(),n,r,0)}static newNoDocument(e,t){return new Ke(e,2,t,ne.min(),ne.min(),Bt.empty(),0)}static newUnknownDocument(e,t){return new Ke(e,3,t,ne.min(),ne.min(),Bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=-1;class dc{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function rB(s){return s.fields.find((e=>e.kind===2))}function er(s){return s.fields.filter((e=>e.kind!==2))}dc.UNKNOWN_ID=-1;class ql{constructor(e,t){this.fieldPath=e,this.kind=t}}class ca{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ca(0,jt.min())}}function NE(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(n===1e9?new De(t+1,0):new De(t,n));return new jt(r,z.empty(),e)}function OE(s){return new jt(s.readTime,s.key,Ai)}class jt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new jt(ne.min(),z.empty(),Ai)}static max(){return new jt(ne.max(),z.empty(),Ai)}}function Bd(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(s.documentKey,e.documentKey),t!==0?t:ae(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function iB(s,e=null,t=[],n=[],r=null,i=null,o=null){return new eS(s,e,t,n,r,i,o)}function fc(s){const e=X(s);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>sB(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),tu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>yi(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>yi(n))).join(",")),e.R=t}return e.R}function dd(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!ZR(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!AE(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!ug(s.startAt,e.startAt)&&ug(s.endAt,e.endAt)}function Pn(s){return!!s.isCorePipeline}function fd(s){return!!s.path&&z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function Cc(s,e){return s.filters.filter((t=>t instanceof pe&&t.field.isEqual(e)))}function hg(s,e,t){let n=In,r=!0;for(const i of Cc(s,e)){let o=In,a=!0;switch(i.op){case"<":case"<=":o=VR(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=In}sg({value:n,inclusive:r},{value:o,inclusive:a})<0&&(n=o,r=a)}if(t!==null){for(let i=0;i<s.orderBy.length;++i)if(s.orderBy[i].field.isEqual(e)){const o=t.position[i];sg({value:n,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(n=o,r=t.inclusive);break}}return{value:n,inclusive:r}}function Bg(s,e,t){let n=Cs,r=!0;for(const i of Cc(s,e)){let o=Cs,a=!0;switch(i.op){case">=":case">":o=MR(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Cs}rg({value:n,inclusive:r},{value:o,inclusive:a})>0&&(n=o,r=a)}if(t!==null){for(let i=0;i<s.orderBy.length;++i)if(s.orderBy[i].field.isEqual(e)){const o=t.position[i];rg({value:n,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(n=o,r=t.inclusive);break}}return{value:n,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function FE(s,e,t,n,r,i,o,a){return new Ma(s,e,t,n,r,i,o,a)}function Ga(s){return new Ma(s)}function dg(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function tS(s){return z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function xE(s){return s.collectionGroup!==null}function Mo(s){const e=X(s);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Te(nt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new Bc(i,n))})),t.has(nt.keyField().canonicalString())||e.A.push(new Bc(nt.keyField(),n))}return e.A}function Kt(s){const e=X(s);return e.V||(e.V=nS(e,Mo(s))),e.V}function nS(s,e){if(s.limitType==="F")return iB(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Bc(r.field,i)}));const t=s.endAt?new Ti(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Ti(s.startAt.position,s.startAt.inclusive):null;return iB(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function oB(s,e){const t=s.filters.concat([e]);return new Ma(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function aB(s,e,t){return new Ma(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function sS(s,e){return dd(Kt(s),Kt(e))&&s.limitType===e.limitType}function Go(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>SE(r))).join(", ")}]`),tu(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>yi(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>yi(r))).join(",")),`Target(${n})`})(Kt(s))}; limitType=${s.limitType})`}function iu(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of Mo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(o,a,l){const u=cg(o,a,l);return o.inclusive?u<=0:u<0})(n.startAt,Mo(n),r)||n.endAt&&!(function(o,a,l){const u=cg(o,a,l);return o.inclusive?u>=0:u>0})(n.endAt,Mo(n),r))})(s,e)}function Cd(s){return(e,t)=>{let n=!1;for(const r of Mo(s)){const i=rS(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function rS(s,e,t){const n=s.field.isKeyField()?z.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?yt(l,u):Y(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return Y(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,_e;function oS(s){switch(s){case x.OK:return Y(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return Y(15467,{code:s})}}function LE(s){if(s===void 0)return ze("GRPC error has no .code"),x.UNKNOWN;switch(s){case We.OK:return x.OK;case We.CANCELLED:return x.CANCELLED;case We.UNKNOWN:return x.UNKNOWN;case We.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case We.INTERNAL:return x.INTERNAL;case We.UNAVAILABLE:return x.UNAVAILABLE;case We.UNAUTHENTICATED:return x.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case We.NOT_FOUND:return x.NOT_FOUND;case We.ALREADY_EXISTS:return x.ALREADY_EXISTS;case We.PERMISSION_DENIED:return x.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case We.ABORTED:return x.ABORTED;case We.OUT_OF_RANGE:return x.OUT_OF_RANGE;case We.UNIMPLEMENTED:return x.UNIMPLEMENTED;case We.DATA_LOSS:return x.DATA_LOSS;default:return Y(39323,{code:s})}}(_e=We||(We={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return oE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Me(z.comparator);function tt(){return aS}const kE=new Me(z.comparator);function sr(...s){let e=kE;for(const t of s)e=e.insert(t.key,t);return e}function VE(s){let e=kE;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function $t(){return Ho()}function ME(){return Ho()}function Ho(){return new Qn((s=>s.toString()),((s,e)=>s.isEqual(e)))}const lS=new Me(z.comparator),cS=new Te(z.comparator);function le(...s){let e=cS;for(const t of s)e=e.add(t);return e}const uS=new Te(ae);function pd(){return uS}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=new _s([4294967295,4294967295],0);function fg(s){const e=hS().encode(s),t=new J_;return t.update(e),new Uint8Array(t.digest())}function Cg(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([t,n],0),new _s([r,i],0)]}class gd{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Po(`Invalid padding: ${t}`);if(n<0)throw new Po(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Po(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=_s.fromNumber(this.p)}v(e,t,n){let r=e.add(t.multiply(_s.fromNumber(n)));return r.compare(BS)===1&&(r=new _s([r.getBits(0),r.getBits(1)],0)),r.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=fg(e),[n,r]=Cg(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,r,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gd(i,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.p===0)return;const t=fg(e),[n,r]=Cg(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,r,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,n,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Wi(ne.min(),r,new Me(ae),tt(),tt(),le())}}class Ha{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ha(n,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,n,r){this.F=e,this.removedTargetIds=t,this.key=n,this.O=r}}class GE{constructor(e,t){this.targetId=e,this.M=t}}class HE{constructor(e,t,n=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class pg{constructor(e){this.targetId=e,this.N=0,this.L=gg(),this.B=Ge.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=le(),t=le(),n=le();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Y(38017,{changeType:i})}})),new Ha(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=gg()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,U(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const Eo="WatchChangeAggregator";class dS{constructor(e){this.X=e,this.ee=new Map,this.te=tt(),this.ne=vl(),this.re=tt(),this.ie=vl(),this.se=new Me(ae)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:Y(56790,{state:e.state})}else G(Eo,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((n,r)=>{this.ce(r)&&t(r)}))}Ee(e){var t;return Pn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:fd(e)}he(e){const t=e.targetId,n=e.M.count,r=this.Te(t);if(r){const i=r.target;if(this.Ee(i))if(n===0){const o=new z(Pn(i)?Ce.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,Ke.newNoDocument(o,ne.min()))}else U(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const a=this.Ie(e),l=a?this.Re(a,e,o):1;if(l!==0){this.le(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,u)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=qn(n).toUint8Array()}catch(l){if(l instanceof lE)return ln("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new gd(o,r,i)}catch(l){return ln(l instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.p===0?null:a}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const o=this.X.Ve(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ae(t,i,null),r++)})),r}fe(e){const t=new Map;this.ee.forEach(((i,o)=>{const a=this.Te(o);if(a){if(i.current&&this.Ee(a.target)){const l=Pn(a.target)?Ce.fromString(a.target.getPipelineDocuments()[0]):a.target.path,u=new z(l);this.me(u).has(o)||this.pe(o,u)||this.ae(o,u,Ke.newNoDocument(u,e))}i.$&&(t.set(o,i.W()),i.G())}}));let n=le();this.ie.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.Te(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.te.forEach(((i,o)=>o.setReadTime(e))),this.re.forEach(((i,o)=>o.setReadTime(e)));const r=new Wi(e,t,this.se,this.te,this.re,n);return this.te=tt(),this.ne=vl(),this.re=tt(),this.ie=vl(),this.se=new Me(ae),r}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void G(Eo,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.pe(e,t.key)?2:0;n.j(t.key,r),Pn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const r=this.ee.get(e);r&&this.ce(e)?(this.pe(e,t)?r.j(t,1):r.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(Pn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):G(Eo,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(G(Eo,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new pg(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Te(ae),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Te(ae),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||G(Eo,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new pg(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function vl(){return new Me(z.comparator)}function gg(){return new Me(z.comparator)}const fS={asc:"ASCENDING",desc:"DESCENDING"},CS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pS={and:"AND",or:"OR"};class gS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lB(s,e){return s.useProto3Json||tu(e)?e:{value:e}}function gr(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function md(s){const e=Un(s);return new De(e.seconds,e.nanos)}function UE(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function jl(s,e){return gr(s,e.toTimestamp())}function At(s){return U(!!s,49232),ne.fromTimestamp(md(s))}function _d(s,e){return cB(s,e).canonicalString()}function cB(s,e){const t=(function(r){return new Ce(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function qE(s){const e=Ce.fromString(s);return U(ZE(e),10190,{key:e.toString()}),e}function ua(s,e){return _d(s.databaseId,e.path)}function mr(s,e){const t=qE(e);if(t.get(1)!==s.databaseId.projectId)throw new H(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new H(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new z(JE(t))}function KE(s,e){return _d(s.databaseId,e)}function jE(s){const e=qE(s);return e.length===4?Ce.emptyPath():JE(e)}function uB(s){return new Ce(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function JE(s){return U(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function mg(s,e,t){return{name:ua(s,e),fields:t.value.mapValue.fields}}function mS(s,e,t){const n=mr(s,e.name),r=At(e.updateTime),i=e.createTime?At(e.createTime):ne.min(),o=new Bt({mapValue:{fields:e.fields}}),a=Ke.newFoundDocument(n,r,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function _S(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(U(h===void 0||typeof h=="string",58123),Ge.fromBase64String(h||"")):(U(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ge.fromUint8Array(h||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?x.UNKNOWN:LE(u.code);return new H(h,u.message||"")})(o);t=new HE(n,r,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=mr(s,n.document.name),i=At(n.document.updateTime),o=n.document.createTime?At(n.document.createTime):ne.min(),a=new Bt({mapValue:{fields:n.document.fields}}),l=Ke.newFoundDocument(r,i,o,a),u=n.targetIds||[],h=n.removedTargetIds||[];t=new Kl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=mr(s,n.document),i=n.readTime?At(n.readTime):ne.min(),o=Ke.newNoDocument(r,i),a=n.removedTargetIds||[];t=new Kl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=mr(s,n.document),i=n.removedTargetIds||[];t=new Kl([],i,r,null)}else{if(!("filter"in e))return Y(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new iS(r,i),a=n.targetId;t=new GE(a,o)}}return t}function pc(s,e){let t;if(e instanceof zi)t={update:mg(s,e.key,e.value)};else if(e instanceof Va)t={delete:ua(s,e.key)};else if(e instanceof Wn)t={update:mg(s,e.key,e.data),updateMask:TS(e.fieldMask)};else{if(!(e instanceof wE))return Y(16599,{be:e.type});t={verify:ua(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wi)return{fieldPath:o.field.canonicalString(),increment:a.h};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),minimum:a.h};if(a instanceof la)return{fieldPath:o.field.canonicalString(),maximum:a.h};throw Y(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:jl(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)})(s,e.precondition)),t}function hB(s,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?ut.updateTime(At(i.updateTime)):i.exists!==void 0?ut.exists(i.exists):ut.none()})(e.currentDocument):ut.none(),n=e.updateTransforms?e.updateTransforms.map((r=>(function(o,a){let l=null;if("setToServerValue"in a)U(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new oa;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Ii(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new Di(h)}else"increment"in a?l=new wi(o,a.increment):"minimum"in a?l=new aa(o,a.minimum):"maximum"in a?l=new la(o,a.maximum):Y(16584,{proto:a});const u=nt.fromServerFormat(a.fieldPath);return new UR(u,l)})(s,r))):[];if(e.update){e.update.name;const r=mr(s,e.update.name),i=new Bt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new Nt(u.map((h=>nt.fromServerFormat(h))))})(e.updateMask);return new Wn(r,i,o,t,n)}return new zi(r,i,t,n)}if(e.delete){const r=mr(s,e.delete);return new Va(r,t)}if(e.verify){const r=mr(s,e.verify);return new wE(r,t)}return Y(1463,{proto:e})}function ES(s,e){return s&&s.length>0?(U(e!==void 0,14353),s.map((t=>(function(r,i){let o=r.updateTime?At(r.updateTime):At(i);return o.isEqual(ne.min())&&(o=At(i)),new KR(o,r.transformResults||[])})(t,e)))):[]}function zE(s,e){return{documents:[KE(s,e.path)]}}function WE(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=KE(s,r);const i=(function(u){if(u.length!==0)return XE(ve.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(C){return{field:li(C.field),direction:IS(C.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=lB(s,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Se:t,parent:r}}function QE(s){let e=jE(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){U(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(B){const C=YE(B);return C instanceof ve&&hd(C)?C.getFilters():[C]})(t.where));let o=[];t.orderBy&&(o=(function(B){return B.map((C=>(function(E){return new Bc(ci(E.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(C)))})(t.orderBy));let a=null;t.limit&&(a=(function(B){let C;return C=typeof B=="object"?B.value:B,tu(C)?null:C})(t.limit));let l=null;t.startAt&&(l=(function(B){const C=!!B.before,g=B.values||[];return new Ti(g,C)})(t.startAt));let u=null;return t.endAt&&(u=(function(B){const C=!B.before,g=B.values||[];return new Ti(g,C)})(t.endAt)),FE(e,r,o,i,a,"F",l,u)}function yS(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $E(s,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(s)))}}}}function YE(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ci(t.unaryFilter.field);return pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ci(t.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ci(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(t.unaryFilter.field);return pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(s):s.fieldFilter!==void 0?(function(t){return pe.create(ci(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return ve.create(t.compositeFilter.filters.map((n=>YE(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(s):Y(30097,{filter:s})}function IS(s){return fS[s]}function DS(s){return CS[s]}function wS(s){return pS[s]}function li(s){return{fieldPath:s.canonicalString()}}function ci(s){return nt.fromServerFormat(s.fieldPath)}function XE(s){return s instanceof pe?(function(t){if(t.op==="=="){if(Vt(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NAN"}};if(qt(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vt(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NOT_NAN"}};if(qt(t.value))return{unaryFilter:{field:li(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(t.field),op:DS(t.op),value:t.value}}})(s):s instanceof ve?(function(t){const n=t.getFilters().map((r=>XE(r)));return n.length===1?n[0]:{compositeFilter:{op:wS(t.op),filters:n}}})(s):Y(54877,{filter:s})}function TS(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ZE(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function ey(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}function ha(s,e){const t={fields:{}};return e.forEach(((n,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=n._toProto(s)})),{mapValue:t}}function ty(s){return{stringValue:s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(s){return new gS(s,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(Ge.fromBase64String(e))}catch(t){throw new H(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(La(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Ye("string",Yt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function vS(){return new Ua(fn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(La(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:Ye("string",Dn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gt.UNAUTHENTICATED)))}shutdown(){}}class SS{constructor(e){this.De=e,this.currentUser=gt.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.Ce===void 0,42304);let n=this.xe;const r=l=>this.xe!==n?(n=this.xe,t(l)):Promise.resolve();let i=new on;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new on,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.De.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new on)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.xe!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{Oe:n}),new AS(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{Me:e}),new gt(e)}}class bS{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class PS{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new bS(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NS{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Qt(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){U(this.Ce===void 0,3512);const n=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new _g(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new _g(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function ny(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="ConnectivityMonitor";class yg{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){G(Eg,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){G(Eg,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al=null;function BB(){return Al===null?Al=(function(){return 268435456+Math.round(2147483648*Math.random())})():Al++,"0x"+Al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="RestConnection",FS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xS{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${r}`,this.tt=this.databaseId.database===uc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}nt(e,t,n,r,i){const o=BB(),a=this.rt(e,t.toUriEncodedString());G(Ih,`Sending RPC '${e}' ${o}:`,a,n);const l={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(l,r,i);const{host:u}=new URL(a),h=Lr(u);return this.st(e,a,l,n,h).then((B=>(G(Ih,`Received RPC '${e}' ${o}: `,B),B)),(B=>{throw ln(Ih,`RPC '${e}' ${o} failed with error: `,B,"url: ",a,"request:",n),B}))}_t(e,t,n,r,i,o){return this.nt(e,t,n,r,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ji})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const n=FS[e];let r=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection",yo=(s,e,t)=>{s.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class fi extends xS{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!fi.yt){const e=$_();yo(e,Q_.STAT_EVENT,(t=>{t.stat===Wh.PROXY?G(pt,"STAT_EVENT: detected buffering proxy"):t.stat===Wh.NOPROXY&&G(pt,"STAT_EVENT: detected no buffering proxy")})),fi.yt=!0}}st(e,t,n,r,i){const o=BB();return new Promise(((a,l)=>{const u=new z_;u.setWithCredentials(!0),u.listenOnce(W_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Gl.NO_ERROR:const B=u.getResponseJson();G(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(B)),a(B);break;case Gl.TIMEOUT:G(pt,`RPC '${e}' ${o} timed out`),l(new H(x.DEADLINE_EXCEEDED,"Request time out"));break;case Gl.HTTP_ERROR:const C=u.getStatus();if(G(pt,`RPC '${e}' ${o} failed with status:`,C,"response text:",u.getResponseText()),C>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const P=(function(W){const Z=W.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(Z)>=0?Z:x.UNKNOWN})(E.status);l(new H(P,E.message))}else l(new H(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(x.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{wt:e,streamId:o,bt:u.getLastErrorCode(),St:u.getLastError()})}}finally{G(pt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);G(pt,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}vt(e,t,n){const r=BB(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.it(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");G(pt,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=o.createWebChannel(u,a);this.Dt(h);let B=!1,C=!1;const g=new LS({ot:E=>{C?G(pt,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(B||(G(pt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),B=!0),G(pt,`RPC '${e}' stream ${r} sending:`,E),h.send(E))},ut:()=>h.close()});return yo(h,bo.EventType.OPEN,(()=>{C||(G(pt,`RPC '${e}' stream ${r} transport opened.`),g.Rt())})),yo(h,bo.EventType.CLOSE,(()=>{C||(C=!0,G(pt,`RPC '${e}' stream ${r} transport closed`),g.Vt(),this.xt(h))})),yo(h,bo.EventType.ERROR,(E=>{C||(C=!0,ln(pt,`RPC '${e}' stream ${r} transport errored. Name:`,E.name,"Message:",E.message),g.Vt(new H(x.UNAVAILABLE,"The operation could not be completed")))})),yo(h,bo.EventType.MESSAGE,(E=>{var P;if(!C){const V=E.data[0];U(!!V,16349);const W=V,Z=(W==null?void 0:W.error)||((P=W[0])==null?void 0:P.error);if(Z){G(pt,`RPC '${e}' stream ${r} received error:`,Z);const se=Z.status;let ye=(function(T){const y=We[T];if(y!==void 0)return LE(y)})(se),ge=Z.message;se==="NOT_FOUND"&&ge.includes("database")&&ge.includes("does not exist")&&ge.includes(this.databaseId.database)&&ln(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ye===void 0&&(ye=x.INTERNAL,ge="Unknown error status: "+se+" with message "+Z.message),C=!0,g.Vt(new H(ye,ge)),h.close()}else G(pt,`RPC '${e}' stream ${r} received:`,V),g.dt(V)}})),fi.gt(),setTimeout((()=>{g.At()}),0),g}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Y_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(s){return new fi(s)}fi.yt=!1;class sy{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=r,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-n);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="PersistentStream";class ry{constructor(e,t,n,r,i,o,a,l){this.Ct=e,this.Kt=n,this.Qt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new sy(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.Wt===t&&this.un(n,r)}),(n=>{e((()=>{const r=new H(x.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(r)}))}))}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{n((()=>this.listener.ct()))})),this.stream.Et((()=>{n((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((r=>{n((()=>this.cn(r)))})),this.stream.onMessage((r=>{n((()=>++this.jt==1?this.hn(r):this.onNext(r)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return G(Ig,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(G(Ig,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VS extends ry{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=_S(this.serializer,e),n=(function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?At(o.readTime):ne.min()})(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=uB(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=Pn(l)?{pipelineQuery:$E(i,l)}:fd(l)?{documents:zE(i,l)}:{query:WE(i,l).Se},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=UE(i,o.resumeToken);const u=lB(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=gr(i,o.snapshotVersion.toTimestamp());const u=lB(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const n=yS(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=uB(this.serializer),t.removeTarget=e,this.nn(t)}}class MS extends ry{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=ES(e.writeResults,e.commitTime),n=At(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=uB(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>pc(this.serializer,n)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{}class HS extends GS{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new H(x.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,cB(t,n),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(x.UNKNOWN,i.toString())}))}_t(e,t,n,r,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection._t(e,cB(t,n),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(x.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function US(s,e,t,n){return new HS(s,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="ComponentProvider",Dg=new Map;function KS(s,e,t,n,r){return new xR(s,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ny(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n,r._customHeaders,r.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iy=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(iy,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}Ot.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ay{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(s){if(s.code!==x.FAILED_PRECONDITION||s.message!==oy)throw s;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):S.reject(t)}static resolve(e){return new S(((t,n)=>{t(e)}))}static reject(e){return new S(((t,n)=>{n(e)}))}static waitFor(e){return new S(((t,n)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(l=>n(l)))})),o=!0,i===r&&t()}))}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next((r=>r?S.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new S(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++a,a===i&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new S(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="SimpleDb";class au{static open(e,t,n,r){try{return new au(t,e.transaction(r,n))}catch(i){throw new Uo(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.bn=new on,this.transaction.oncomplete=()=>{this.bn.resolve()},this.transaction.onabort=()=>{t.error?this.bn.reject(new Uo(e,t.error)):this.bn.resolve()},this.transaction.onerror=n=>{const r=yd(n.target.error);this.bn.reject(new Uo(e,r))}}get Sn(){return this.bn.promise}abort(e){e&&this.bn.reject(e),this.aborted||(G(Ut,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}vn(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new JS(t)}}class Is{static delete(e){return G(Ut,"Removing database:",e),rr(Zm().indexedDB.deleteDatabase(e)).toPromise()}static Ye(){if(!a_())return!1;if(Is.Dn())return!0;const e=st(),t=Is.xn(e),n=0<t&&t<10,r=ly(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static Dn(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static Cn(e,t){return e.store(t)}static xn(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.Fn=n,this.On=null,Is.xn(st())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async Mn(e){return this.db||(G(Ut,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{n(new Uo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new H(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new H(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Uo(e,o))},r.onupgradeneeded=i=>{G(Ut,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Fn.Nn(o,r.transaction,i.oldVersion,this.version).next((()=>{G(Ut,"Database upgrade to version "+this.version+" complete")}))}}))),this.Ln&&(this.db.onversionchange=t=>this.Ln(t)),this.db}Bn(e){this.Ln=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Mn(e);const a=au.open(this.db,e,i?"readonly":"readwrite",n),l=r(a).next((u=>(a.vn(),u))).catch((u=>(a.abort(u),S.reject(u)))).toPromise();return l.catch((()=>{})),await a.Sn,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(G(Ut,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ly(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class jS{constructor(e){this.Un=e,this.kn=!1,this.qn=null}get isDone(){return this.kn}get $n(){return this.qn}set cursor(e){this.Un=e}done(){this.kn=!0}Kn(e){this.qn=e}delete(){return rr(this.Un.delete())}}class Uo extends H{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function qs(s){return s.name==="IndexedDbTransactionError"}class JS{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(G(Ut,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(G(Ut,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),rr(n)}add(e){return G(Ut,"ADD",this.store.name,e,e),rr(this.store.add(e))}get(e){return rr(this.store.get(e)).next((t=>(t===void 0&&(t=null),G(Ut,"GET",this.store.name,e,t),t)))}delete(e){return G(Ut,"DELETE",this.store.name,e),rr(this.store.delete(e))}count(){return G(Ut,"COUNT",this.store.name),rr(this.store.count())}Qn(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if(typeof r.getAll=="function"){const i=r.getAll(n.range);return new S(((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(n),o=[];return this.Wn(i,((a,l)=>{o.push(l)})).next((()=>o))}}Gn(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new S(((r,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{r(o.target.result)}}))}zn(e,t){G(Ut,"DELETE ALL",this.store.name);const n=this.options(e,t);n.jn=!1;const r=this.cursor(n);return this.Wn(r,((i,o,a)=>a.delete()))}Hn(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Wn(r,t)}Jn(e){const t=this.cursor({});return new S(((n,r)=>{t.onerror=i=>{const o=yd(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():n()})):n()}}))}Wn(e,t){const n=[];return new S(((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const l=new jS(a),u=t(a.primaryKey,a.value,l);if(u instanceof S){const h=u.catch((B=>(l.done(),S.reject(B))));n.push(h)}l.isDone?r():l.$n===null?a.continue():a.continue(l.$n)}})).next((()=>S.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jn?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function rr(s){return new S(((e,t)=>{s.onsuccess=n=>{const r=n.target.result;e(r)},s.onerror=n=>{const r=yd(n.target.error);t(r)}}))}let Tg=!1;function yd(s){const e=Is.xn(st());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(s.message.indexOf(t)>=0){const n=new H("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Tg||(Tg=!0,setTimeout((()=>{throw n}),0)),n}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="LruGarbageCollector",cy=1048576;function Ag([s,e],[t,n]){const r=ae(s,t);return r===0?ae(e,n):r}class zS{constructor(e){this.Yn=e,this.buffer=new Te(Ag),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ag(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uy{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){G(vg,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qs(t)?G(vg,"Ignoring IndexedDB error during garbage collection: ",t):await Us(t)}await this.nr(3e5)}))}}class WS{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ot.wn);const n=new zS(t);return this.rr.forEachTarget(e,(r=>n.er(r.sequenceNumber))).next((()=>this.rr.sr(e,(r=>n.er(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(wg)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wg):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,r,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((B=>(B>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${B}`),r=this.params.maximumSequenceNumbersToCollect):r=B,o=Date.now(),this.nthSequenceNumber(e,r)))).next((B=>(n=B,a=Date.now(),this.removeTargets(e,n,t)))).next((B=>(i=B,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((B=>(u=Date.now(),oi()<=de.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${B} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:B}))))}}function hy(s,e){return new WS(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firestore.googleapis.com",Rg=!0;class Sg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=QS,this.ssl=Rg}else this.host=e.host,this.ssl=e.ssl??Rg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=iy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cy)throw new H(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(OR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ny(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new H(x.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,r){if(n===r)return!0;if(!n||!r)return!1;const i=Object.keys(n),o=Object.keys(r);if(i.length!==o.length)return!1;for(const a of i)if(n[a]!==r[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let Id=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new RS;switch(n.type){case"firstParty":return new PS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Dg.get(t);n&&(G(qS,"Removing Datastore"),Dg.delete(t),n.terminate())})(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class He{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(La(t,He._jsonSchema))return new He(e,n||null,new z(Ce.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Ye("string",He._jsonSchemaVersion),referencePath:Ye("string")};class Ds extends Vr{constructor(e,t,n){super(e,t,Ga(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new z(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function cL(s,e,...t){if(s=Pe(s),aE("collection","path",e),s instanceof Id){const n=Ce.fromString(e,...t);return Xp(n),new Ds(s,null,n)}{if(!(s instanceof He||s instanceof Ds))throw new H(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ce.fromString(e,...t));return Xp(n),new Ds(s.firestore,null,n)}}function uL(s,e,...t){if(s=Pe(s),arguments.length===1&&(e=id.newId()),aE("doc","path",e),s instanceof Id){const n=Ce.fromString(e,...t);return Yp(n),new He(s,null,new z(n))}{if(!(s instanceof He||s instanceof Ds))throw new H(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Ce.fromString(e,...t));return Yp(n),new He(s.firestore,s instanceof Ds?s.converter:null,new z(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(La(e,Lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Lt(e.vectorValues);throw new H(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lt._jsonSchemaVersion="firestore/vectorValue/1.0",Lt._jsonSchema={type:Ye("string",Lt._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=/^__.*__$/;class YS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new zi(e,this.data,t,this.fieldTransforms)}}class By{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dy(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:s})}}class Dd{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Dd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return gc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(dy(this.dataSource)&&$S.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class XS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ou(e)}createContext(e,t,n,r=!1){return new Dd({dataSource:e,methodName:t,targetDoc:n,path:nt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lu(s){const e=s._freezeSettings(),t=ou(s._databaseId);return new XS(s._databaseId,!!e.ignoreUndefinedProperties,t)}function fy(s,e,t,n,r,i={}){const o=s.createContext(i.merge||i.mergeFields?2:0,e,t,r);wd("Data must be an object, but it was:",o,n);const a=gy(n,o);let l,u;if(i.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const B of i.mergeFields){const C=Ns(e,B,t);if(!o.contains(C))throw new H(x.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);yy(h,C)||h.push(C)}l=new Nt(h),u=o.fieldTransforms.filter((B=>l.covers(B.field)))}else l=null,u=o.fieldTransforms;return new YS(new Bt(a),l,u)}class cu extends Ed{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cu}}function Cy(s,e,t,n){const r=s.createContext(1,e,t);wd("Data must be an object, but it was:",r,n);const i=[],o=Bt.empty();Hs(n,((l,u)=>{const h=Ey(e,l,t);u=Pe(u);const B=r.childContextForFieldPath(h);if(u instanceof cu)i.push(h);else{const C=Ps(u,B);C!=null&&(i.push(h),o.set(h,C))}}));const a=new Nt(i);return new By(o,a,r.fieldTransforms)}function py(s,e,t,n,r,i){const o=s.createContext(1,e,t),a=[Ns(e,n,t)],l=[r];if(i.length%2!=0)throw new H(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<i.length;C+=2)a.push(Ns(e,i[C])),l.push(i[C+1]);const u=[],h=Bt.empty();for(let C=a.length-1;C>=0;--C)if(!yy(u,a[C])){const g=a[C];let E=l[C];E=Pe(E);const P=o.childContextForFieldPath(g);if(E instanceof cu)u.push(g);else{const V=Ps(E,P);V!=null&&(u.push(g),h.set(g,V))}}const B=new Nt(u);return new By(h,B,o.fieldTransforms)}function ZS(s,e,t,n=!1){return Ps(t,s.createContext(n?4:3,e))}function Ps(s,e,t){if(_y(s=Pe(s)))return wd("Unsupported field value:",e,s),gy(s,e);if(s instanceof Ed)return(function(r,i){if(!dy(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let u=Ps(l,i.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(s,e)}return(function(r,i,o){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=De.fromDate(r);return{timestampValue:gr(i.serializer,a)}}if(r instanceof De){const a=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gr(i.serializer,a)}}if(my(r)){const a=De.fromInstant(r),l=new De(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:gr(i.serializer,l)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:UE(i.serializer,r._byteString)};if(r instanceof He){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:_d(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lt)return(function(l,u){const h=l instanceof Lt?l.toArray():l;return{mapValue:{fields:{[od]:{stringValue:ad},[Sr]:{arrayValue:{values:h.map((C=>{if(typeof C!="number")throw u.createError("VectorValues must only contain numeric values.");return nu(u.serializer,C)}))}}}}}})(r,i);if(ey(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Zc(r)}`)})(s,e)}function gy(s,e){const t={};return oE(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(s,((n,r)=>{const i=Ps(r,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function my(s){if(typeof s!="object"||s===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&s instanceof Temporal.Instant)return!0;const e=s;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function _y(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof De||s instanceof Dn||s instanceof Yt||s instanceof He||s instanceof Ed||s instanceof Lt||my(s)||ey(s))}function wd(s,e,t){if(!_y(t)||!xa(t)){const n=Zc(t);throw n==="an object"?e.createError(s+" a custom object"):e.createError(s+" "+n)}}function Ns(s,e,t){if((e=Pe(e))instanceof Ua)return e._internalPath;if(typeof e=="string")return Ey(s,e);throw gc("Field path arguments must be of type string or ",s,!1,void 0,t)}const eb=new RegExp("[~\\*/\\[\\]]");function Ey(s,e,t){if(e.search(eb)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Ua(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function gc(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new H(x.INVALID_ARGUMENT,a+s+l)}function yy(s,e){return s.some((t=>t.isEqual(e)))}function Iy(s){return typeof s._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Bt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let a;i.nestedOptions&&xa(o)?a={mapValue:{fields:new It(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Ps(o,t)??void 0),a&&n.set(nt.fromServerFormat(i.serverName),a)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const i=new Map(NR(n,((o,a)=>[nt.fromServerFormat(a),o!==void 0?Ps(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(s){return typeof s=="object"&&s!==null&&!!("nullValue"in s&&(s.nullValue===null||s.nullValue==="NULL_VALUE")||"booleanValue"in s&&(s.booleanValue===null||typeof s.booleanValue=="boolean")||"integerValue"in s&&(s.integerValue===null||typeof s.integerValue=="number"||typeof s.integerValue=="string")||"doubleValue"in s&&(s.doubleValue===null||typeof s.doubleValue=="number")||"timestampValue"in s&&(s.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(s.timestampValue))||"stringValue"in s&&(s.stringValue===null||typeof s.stringValue=="string")||"bytesValue"in s&&(s.bytesValue===null||s.bytesValue instanceof Uint8Array)||"referenceValue"in s&&(s.referenceValue===null||typeof s.referenceValue=="string")||"geoPointValue"in s&&(s.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(s.geoPointValue))||"arrayValue"in s&&(s.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(s.arrayValue))||"mapValue"in s&&(s.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!xa(t.fields))})(s.mapValue))||"fieldReferenceValue"in s&&(s.fieldReferenceValue===null||typeof s.fieldReferenceValue=="string")||"functionValue"in s&&(s.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(s.functionValue))||"pipelineValue"in s&&(s.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(s.pipelineValue)))}function nb(s){return new Lt(s)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(s){let e;return s instanceof Mr?s:(e=xa(s)?ab(s):s instanceof Array?lb(s):Dy(s,void 0),e)}function Dh(s){if(s instanceof Mr)return s;if(s instanceof Lt)return Ba(s);if(Array.isArray(s))return Ba(nb(s));throw new Error("Unsupported value: "+typeof s)}function Td(s){return kR(s)?Jl(s):j(s)}class Mr{constructor(){this._protoValueType="ProtoValue"}add(e){return new k("add",[this,j(e)],"add")}asBoolean(){if(this instanceof Os)return this;if(this instanceof Hr)return new Ty(this);if(this instanceof Gr)return new ob(this);if(this instanceof k)return new wy(this);throw new H("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new k("subtract",[this,j(e)],"subtract")}multiply(e){return new k("multiply",[this,j(e)],"multiply")}divide(e){return new k("divide",[this,j(e)],"divide")}mod(e){return new k("mod",[this,j(e)],"mod")}equal(e){return new k("equal",[this,j(e)],"equal").asBoolean()}notEqual(e){return new k("not_equal",[this,j(e)],"notEqual").asBoolean()}lessThan(e){return new k("less_than",[this,j(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new k("less_than_or_equal",[this,j(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new k("greater_than",[this,j(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new k("greater_than_or_equal",[this,j(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((r=>j(r)));return new k("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new k("array_contains",[this,j(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new No(e.map(j),"arrayContainsAll"):e;return new k("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new No(e.map(j),"arrayContainsAny"):e;return new k("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new k("array_reverse",[this])}arrayLength(){return new k("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new No(e.map(j),"equalAny"):e;return new k("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new No(e.map(j),"notEqualAny"):e;return new k("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new k("exists",[this],"exists").asBoolean()}charLength(){return new k("char_length",[this],"charLength")}like(e){return new k("like",[this,j(e)],"like").asBoolean()}regexContains(e){return new k("regex_contains",[this,j(e)],"regexContains").asBoolean()}regexFind(e){return new k("regex_find",[this,j(e)],"regexFind")}regexFindAll(e){return new k("regex_find_all",[this,j(e)],"regexFindAll")}regexMatch(e){return new k("regex_match",[this,j(e)],"regexMatch").asBoolean()}stringContains(e){return new k("string_contains",[this,j(e)],"stringContains").asBoolean()}startsWith(e){return new k("starts_with",[this,j(e)],"startsWith").asBoolean()}endsWith(e){return new k("ends_with",[this,j(e)],"endsWith").asBoolean()}toLower(){return new k("to_lower",[this],"toLower")}toUpper(){return new k("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(j(e)),new k("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(j(e)),new k("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(j(e)),new k("rtrim",t,"rtrim")}type(){return new k("type",[this])}isType(e){return new k("is_type",[this,Ba(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(j);return new k("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new k("string_index_of",[this,j(e)],"stringIndexOf")}stringRepeat(e){return new k("string_repeat",[this,j(e)],"stringRepeat")}stringReplaceAll(e,t){return new k("string_replace_all",[this,j(e),j(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new k("string_replace_one",[this,j(e),j(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(j);return new k("concat",[this,...n],"concat")}reverse(){return new k("reverse",[this],"reverse")}arrayFilter(e,t){return new k("array_filter",[this,j(e),t],"arrayFilter")}arrayTransform(e,t){return new k("array_transform",[this,j(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new k("array_transform",[this,j(e),j(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,j(e)];return t!==void 0&&n.push(j(t)),new k("array_slice",n,"arraySlice")}arrayFirst(){return new k("array_first",[this],"arrayFirst")}arrayFirstN(e){return new k("array_first_n",[this,j(e)],"arrayFirstN")}arrayLast(){return new k("array_last",[this],"arrayLast")}arrayLastN(e){return new k("array_last_n",[this,j(e)],"arrayLastN")}arrayMaximum(){return new k("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new k("maximum_n",[this,j(e)],"arrayMaximumN")}arrayMinimum(){return new k("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new k("minimum_n",[this,j(e)],"arrayMinimumN")}arrayIndexOf(e){return new k("array_index_of",[this,j(e),j("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new k("array_index_of",[this,j(e),j("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new k("array_index_of_all",[this,j(e)],"arrayIndexOfAll")}byteLength(){return new k("byte_length",[this],"byteLength")}ceil(){return new k("ceil",[this])}floor(){return new k("floor",[this])}abs(){return new k("abs",[this])}exp(){return new k("exp",[this])}mapGet(e){return new k("map_get",[this,Ba(e)],"mapGet")}mapSet(e,t,...n){const r=[this,j(e),j(t),...n.map(j)];return new k("map_set",r,"mapSet")}mapKeys(){return new k("map_keys",[this],"mapKeys")}mapValues(){return new k("map_values",[this],"mapValues")}mapEntries(){return new k("map_entries",[this],"mapEntries")}getField(e){return new k("get_field",[this,j(e)],"get_field")}count(){return Ht._create("count",[this],"count")}sum(){return Ht._create("sum",[this],"sum")}average(){return Ht._create("average",[this],"average")}minimum(){return Ht._create("minimum",[this],"minimum")}maximum(){return Ht._create("maximum",[this],"maximum")}first(){return Ht._create("first",[this],"first")}last(){return Ht._create("last",[this],"last")}arrayAgg(){return Ht._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Ht._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Ht._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new k("maximum",[this,...n.map(j)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new k("minimum",[this,...n.map(j)],"minimum")}vectorLength(){return new k("vector_length",[this],"vectorLength")}cosineDistance(e){return new k("cosine_distance",[this,Dh(e)],"cosineDistance")}dotProduct(e){return new k("dot_product",[this,Dh(e)],"dotProduct")}euclideanDistance(e){return new k("euclidean_distance",[this,Dh(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new k("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new k("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new k("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new k("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new k("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new k("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new k("timestamp_add",[this,j(e),j(t)],"timestampAdd")}timestampSubtract(e,t){return new k("timestamp_subtract",[this,j(e),j(t)],"timestampSubtract")}timestampDiff(e,t){return new k("timestamp_diff",[this,Td(e),j(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,j(e)];return t&&n.push(j(t)),new k("timestamp_extract",n,"timestampExtract")}documentId(){return new k("document_id",[this],"documentId")}parent(){return new k("parent",[this],"parent")}substring(e,t){const n=j(e);return new k("substring",t===void 0?[this,n]:[this,n,j(t)],"substring")}arrayGet(e){return new k("array_get",[this,j(e)],"arrayGet")}isError(){return new k("is_error",[this],"isError").asBoolean()}ifError(e){const t=new k("if_error",[this,j(e)],"ifError");return e instanceof Os?t.asBoolean():t}isAbsent(){return new k("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new k("map_remove",[this,j(e)],"mapRemove")}mapMerge(e,...t){const n=j(e),r=t.map(j);return new k("map_merge",[this,n,...r],"mapMerge")}pow(e){return new k("pow",[this,j(e)])}trunc(e){return e===void 0?new k("trunc",[this]):new k("trunc",[this,j(e)],"trunc")}round(e){return e===void 0?new k("round",[this]):new k("round",[this,j(e)],"round")}collectionId(){return new k("collection_id",[this])}length(){return new k("length",[this])}ln(){return new k("ln",[this])}sqrt(){return new k("sqrt",[this])}stringReverse(){return new k("string_reverse",[this])}ifAbsent(e){return new k("if_absent",[this,j(e)],"ifAbsent")}ifNull(e){return new k("if_null",[this,j(e)],"ifNull")}coalesce(e,...t){return new k("coalesce",[this,j(e),...t.map(j)],"coalesce")}join(e){return new k("join",[this,j(e)],"join")}log10(){return new k("log10",[this])}arraySum(){return new k("sum",[this])}split(e){return new k("split",[this,j(e)])}timestampTruncate(e,t){const n=[this,j(e)];return t&&n.push(j(t)),new k("timestamp_trunc",n)}ascending(){return cb(this)}descending(){return ub(this)}as(e){return new rb(this,e,"as")}}class Ht{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new Ht(e,t);return r._methodName=n,r}as(e){return new sb(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class sb{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class rb{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class No extends Mr{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class Gr extends Mr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new k("geo_distance",[this,j(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Jl(s){return ib(s,"field")}function ib(s,e){return new Gr(typeof s=="string"?fn===s?vS()._internalPath:Ns("field",s):s._internalPath,e)}class Hr extends Mr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Hr(e,void 0);return t._protoValue=e,t}_toProto(e){return U(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,tb(this._protoValue)||(this._protoValue=Ps(this.value,e))}}function Ba(s,e){return Dy(s,"constant")}function Dy(s,e){const t=new Hr(s,e);return typeof s=="boolean"?new Ty(t):t}class k extends Mr{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),r!==void 0&&(this._options=r)}get _optionsUtil(){return new It({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Os extends Mr{get _methodName(){return this._expr._methodName}countIf(){return Ht._create("count_if",[this],"countIf")}not(){return new k("not",[this],"not").asBoolean()}conditional(e,t){return new k("conditional",[this,e,t],"conditional")}ifError(e){const t=j(e),n=new k("if_error",[this,t],"ifError");return t instanceof Os?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class wy extends Os{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Ty extends Os{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class ob extends Os{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function ab(s,e){const t=[];for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n)){const r=s[n];t.push(Ba(n)),t.push(j(r))}return new k("map",t,"map")}function lb(s){return(function(t,n){return new k("array",t.map((r=>j(r))),n)})(s,"array")}function cb(s){return new vd(Td(s),"ascending","ascending")}function ub(s){return new vd(Td(s),"descending","descending")}class vd{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:ty(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class vy extends zt{get _name(){return"add_fields"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ha(e,this.fields)]}}_readUserData(e){super._readUserData(e),xs(this.fields,e)}}class Ay extends zt{get _name(){return"aggregate"}get _optionsUtil(){return new It({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ha(e,this.accumulators),ha(e,this.groups)]}}_readUserData(e){super._readUserData(e),xs(this.groups,e),xs(this.accumulators,e)}}class Ry extends zt{get _name(){return"distinct"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ha(e,this.groups)]}}_readUserData(e){super._readUserData(e),xs(this.groups,e)}}class qa extends zt{get _name(){return"collection"}get _optionsUtil(){return new It({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class Ka extends zt{get _name(){return"collection_group"}get _optionsUtil(){return new It({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class uu extends zt{get _name(){return"database"}get _optionsUtil(){return new It({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class hu extends zt{get _name(){return"documents"}get _optionsUtil(){return new It({})}constructor(e,t){if(super(t),!e||e.length===0)throw new H(x.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(n);if(r.size!==n.length)throw new H(x.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class ja extends zt{get _name(){return"where"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),xs(this.condition,e)}}class Fs extends zt{get _name(){return"limit"}get _optionsUtil(){return new It({})}constructor(e,t){U(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[cd(e,this.limit)]}}}class bg extends zt{get _name(){return"offset"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[cd(e,this.offset)]}}}class hb extends zt{get _name(){return"select"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ha(e,this.selections)]}}_readUserData(e){super._readUserData(e),xs(this.selections,e)}}class pn extends zt{get _name(){return"sort"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),xs(this.orderings,e)}}class Ad extends zt{get _name(){return"replace_with"}get _optionsUtil(){return new It({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),ty(Ad.Ir)]}}_readUserData(e){super._readUserData(e),xs(this.map,e)}}Ad.Ir="full_replace";function xs(s,e){return Iy(s)?s._readUserData(e):Array.isArray(s)?s.forEach((t=>t._readUserData(e))):s instanceof Map?s.forEach((t=>t._readUserData(e))):Object.values(s).forEach((t=>t._readUserData(e))),s}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,n,r){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=r}Vr(e,t){const n=this.userDataReader.createContext(3,e);return Iy(t)?t._readUserData(n):Array.isArray(t)?t.forEach((r=>r._readUserData(n))):t.forEach((r=>r._readUserData(n))),t}where(e){const t=this.stages.map((n=>n));return this.Vr("where",e),t.push(new ja(e,{})),new qo(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((n=>n));return t.push(new Fs(e,{})),new qo(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map((r=>r));return"orderings"in e?n.push(new pn(this.Vr("sort",e.orderings),{})):n.push(new pn(this.Vr("sort",[e,...t]),{})),new qo(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class _t{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Ja(this)}getPipelineCollectionGroup(){return Rd(this)}getPipelineCollectionId(){return Sy(this)}getPipelineDocuments(){return mc(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((r,i)=>{r._name!==Ry.name&&r._name!==Ay.name||(n="keyless"),r._name===hb.name&&n==="exact"&&(n="augmented"),r._name===vy.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return kn(this)}}function kn(s){const e=s.stages[0];return e instanceof qa||e instanceof Ka||e instanceof uu||e instanceof hu?e._name:"unknown"}function Ja(s){if(kn(s)==="collection")return s.stages[0].hr}function Rd(s){if(kn(s)==="collection_group")return s.stages[0].collectionId}function Sy(s){switch(kn(s)){case"collection":return Ce.fromString(Ja(s)).lastSegment();case"collection_group":return Rd(s);default:return}}function mc(s){if(kn(s)==="documents")return s.stages[0].Tr}class w{constructor(e,t){this.type=e,this.value=t}static mr(){return new w("ERROR",void 0)}static pr(){return new w("UNSET",void 0)}static gr(){return new w("NULL",In)}static newValue(e){return qt(e)?new w("NULL",In):(function(n){return!!n&&"booleanValue"in n})(e)?new w("BOOLEAN",e):Cn(e)?new w("INT",e):ur(e)?new w("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new w("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new w("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):bs(e)?new w("ARRAY",e):br(e)?new w("VECTOR",e):pr(e)?new w("MAP",e):new w("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Ko(s){if(!s.yr())return s.value}function by(s){return s instanceof Os?s._expr:s}function re(s){if((s=by(s))instanceof Gr)return new Bb(s);if(s instanceof Hr)return new db(s);if(s instanceof No)return new fb(s);if(s instanceof k){if(s.name==="add")return new gb(s);if(s.name==="subtract")return new mb(s);if(s.name==="multiply")return new _b(s);if(s.name==="divide")return new Eb(s);if(s.name==="mod")return new yb(s);if(s.name==="and")return new Ib(s);if(s.name==="equal")return new Fb(s);if(s.name==="not_equal")return new xb(s);if(s.name==="less_than")return new Lb(s);if(s.name==="less_than_or_equal")return new kb(s);if(s.name==="greater_than")return new Vb(s);if(s.name==="greater_than_or_equal")return new Mb(s);if(s.name==="array_concat")return new Gb(s);if(s.name==="array_reverse")return new Hb(s);if(s.name==="array_contains")return new Ub(s);if(s.name==="array_contains_all")return new qb(s);if(s.name==="array_contains_any")return new Kb(s);if(s.name==="array_length")return new jb(s);if(s.name==="array_element")return new Jb(s);if(s.name==="equal_any")return new Py(s);if(s.name==="not_equal_any")return new wb(s);if(s.name==="is_nan")return new Tb(s);if(s.name==="is_not_nan")return new vb(s);if(s.name==="is_null")return new Ab(s);if(s.name==="is_not_null")return new Rb(s);if(s.name==="is_error")return new Sb(s);if(s.name==="exists")return new bb(s);if(s.name==="not")return new Bu(s);if(s.name==="or")return new Db(s);if(s.name==="xor")return new Sd(s);if(s.name==="conditional")return new Pb(s);if(s.name==="maximum")return new Nb(s);if(s.name==="minimum")return new Ob(s);if(s.name==="reverse")return new zb(s);if(s.name==="replace_first")return new Wb(s);if(s.name==="replace_all")return new Qb(s);if(s.name==="char_length")return new $b(s);if(s.name==="byte_length")return new Yb(s);if(s.name==="like")return new Xb(s);if(s.name==="regex_contains")return new Zb(s);if(s.name==="regex_match")return new eP(s);if(s.name==="string_contains")return new tP(s);if(s.name==="starts_with")return new nP(s);if(s.name==="ends_with")return new sP(s);if(s.name==="to_lower")return new rP(s);if(s.name==="to_upper")return new iP(s);if(s.name==="trim")return new oP(s);if(s.name==="string_concat")return new aP(s);if(s.name==="map_get")return new lP(s);if(s.name==="cosine_distance")return new cP(s);if(s.name==="dot_product")return new uP(s);if(s.name==="euclidean_distance")return new hP(s);if(s.name==="vector_length")return new BP(s);if(s.name==="unix_micros_to_timestamp")return new gP(s);if(s.name==="timestamp_to_unix_micros")return new EP(s);if(s.name==="unix_millis_to_timestamp")return new mP(s);if(s.name==="timestamp_to_unix_millis")return new yP(s);if(s.name==="unix_seconds_to_timestamp")return new _P(s);if(s.name==="timestamp_to_unix_seconds")return new IP(s);if(s.name==="timestamp_add")return new DP(s);if(s.name==="timestamp_subtract")return new wP(s)}throw new Error(`Unknown Expr : ${s}`)}class Bb{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===fn)return w.newValue({referenceValue:ua(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:jl(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:jl(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?eu(n)?w.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:jl(i.serializer,ne.fromTimestamp(_i(o)))};if(i.serverTimestampBehavior==="previous"){const a=ka(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,n)):w.newValue(n):w.pr()}}class db{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class fb{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map((r=>re(r).evaluate(e,t)));return n.some((r=>r.yr()))?w.mr():w.newValue({arrayValue:{values:n.map((r=>r.value))}})}}function dt(s){return ur(s)?Number(s.doubleValue):Number(s.integerValue)}function Tn(s){return BigInt(s.integerValue)}const Cb=BigInt("0x7fffffffffffffff"),pb=-BigInt("0x8000000000000000");class za{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length>=2,24778);const n=re(this.expr.params[0]).evaluate(e,t),r=re(this.expr.params[1]).evaluate(e,t);let i=this.br(n,r);for(const o of this.expr.params.slice(2)){const a=re(o).evaluate(e,t);i=this.br(i,a)}return i}br(e,t){if(e.yr()||t.yr())return w.mr();if(e.wr()||t.wr())return w.gr();const n=e.value,r=t.value;if(!ur(n)&&!Cn(n)||!ur(r)&&!Cn(r))return w.mr();if(ur(n)||ur(r)){const i=this.Sr(n,r);return i?w.newValue(i):w.mr()}if(Cn(n)&&Cn(r)){const i=this.vr(n,r);return i===void 0?w.mr():typeof i=="number"?w.newValue({doubleValue:i}):i<pb||i>Cb?w.mr():w.newValue({integerValue:`${i}`})}return w.mr()}}function Kn(s,e){return Xe(s)!==Xe(e)?"TYPE_MISMATCH":Vt(s)||Vt(e)?"NOT_EQ":qt(s)&&qt(e)?"EQ":qt(s)||qt(e)?"NULL":bs(s)&&bs(e)?(function(n,r){var o,a,l;if(((o=n.values)==null?void 0:o.length)!==((a=r.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((l=n.values)==null?void 0:l.length)??0);u++){const h=n.values[u],B=r.values[u];switch(Kn(h,B)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Y(44609,{Dr:h,Cr:B})}}return i?"NULL":"EQ"})(s.arrayValue,e.arrayValue):br(s)&&br(e)||pr(s)&&pr(e)?(function(n,r){const i=n.fields||{},o=r.fields||{};if(cc(i)!==cc(o))return"NOT_EQ";let a=!1;for(const l in i)if(i.hasOwnProperty(l)){if(o[l]===void 0)return"NOT_EQ";switch(Kn(i[l],o[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(s.mapValue,e.mapValue):(function(n,r){return Zt(n,r,{u:!1,i:!0,o:!0})})(s,e)?"EQ":"NOT_EQ"}class gb extends za{vr(e,t){return Tn(e)+Tn(t)}Sr(e,t){return{doubleValue:dt(e)+dt(t)}}}class mb extends za{constructor(e){super(e),this.expr=e}vr(e,t){return Tn(e)-Tn(t)}Sr(e,t){return{doubleValue:dt(e)-dt(t)}}}class _b extends za{constructor(e){super(e),this.expr=e}vr(e,t){return Tn(e)*Tn(t)}Sr(e,t){return{doubleValue:dt(e)*dt(t)}}}class Eb extends za{constructor(e){super(e),this.expr=e}vr(e,t){const n=Tn(t);if(n!==BigInt(0))return Tn(e)/n}Sr(e,t){const n=dt(t);return n===0?{doubleValue:Ei(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:dt(e)/n}}}class yb extends za{constructor(e){super(e),this.expr=e}vr(e,t){const n=Tn(t);if(n!==BigInt(0))return Tn(e)%n}Sr(e,t){const n=dt(t);if(n!==0)return{doubleValue:dt(e)%n}}}class Ib{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=re(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return w.newValue(ct);break;case"NULL":r=!0;break;default:n=!0}}return n?w.mr():r?w.gr():w.newValue(kt)}}class Bu{constructor(e){this.expr=e}evaluate(e,t){var r;U(this.expr.params.length===1,9634);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return w.newValue({booleanValue:!((r=n.value)!=null&&r.booleanValue)});case"NULL":return w.gr();default:return w.mr()}}}class Db{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=re(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return w.newValue(kt);break;case"NULL":r=!0;break;default:n=!0}}return n?w.mr():r?w.gr():w.newValue(ct)}}class Sd{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,r=!1;for(const o of this.expr.params){const a=re(o).evaluate(e,t);switch(a.type){case"BOOLEAN":n=Sd.xor(n,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return w.mr()}}return r?w.gr():w.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class Py{constructor(e){this.expr=e}evaluate(e,t){var o,a;U(this.expr.params.length===2,55094);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return w.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();for(const l of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(qt(r.value)&&qt(l)?"EQ":Kn(r.value,l)){case"EQ":return w.newValue(kt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44608,{value:r.value,candidate:l})}return n?w.gr():w.newValue(ct)}}class wb{constructor(e){this.expr=e}evaluate(e,t){return new Bu(new k("not",[new k("equal_any",this.expr.params)])).evaluate(e,t)}}class Tb{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,23322);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return w.newValue(ct);case"DOUBLE":return w.newValue({booleanValue:isNaN(dt(n.value))});case"NULL":return w.gr();default:return w.mr()}}}class vb{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,50406),new Bu(new k("not",[new k("is_nan",this.expr.params)])).evaluate(e,t)}}class Ab{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,23123),re(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(kt);case"UNSET":case"ERROR":return w.mr();default:return w.newValue(ct)}}}class Rb{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,23167),new Bu(new k("not",[new k("is_null",this.expr.params)])).evaluate(e,t)}}class Sb{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,5228),re(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(kt):w.newValue(ct)}}class bb{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,6877),re(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.mr();case"UNSET":return w.newValue(ct);default:return w.newValue(kt)}}}class Pb{constructor(e){this.expr=e}evaluate(e,t){var r;U(this.expr.params.length===3,11706);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(r=n.value)!=null&&r.booleanValue?re(this.expr.params[1]).evaluate(e,t):re(this.expr.params[2]).evaluate(e,t);case"NULL":return re(this.expr.params[2]).evaluate(e,t);default:return w.mr()}}}class Nb{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>re(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||yt(i.value,r.value)>0?i:r}return r===void 0?w.gr():r}}class Ob{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>re(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||yt(i.value,r.value)<0?i:r}return r===void 0?w.gr():r}}class Qi{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return w.mr()}const r=re(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return w.mr()}return this.Fr(n,r)}}class Fb extends Qi{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return w.newValue(kt);if(e.wr()||t.wr()||Vt(e.value)||Vt(t.value)||Xe(e.value)!==Xe(t.value))return w.newValue(ct);switch(Kn(e.value,t.value)){case"EQ":return w.newValue(kt);case"NOT_EQ":return w.newValue(ct);case"NULL":return w.gr();default:Y(44615,{left:e,right:t})}}}class xb extends Qi{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Kn(e.value,t.value)){case"EQ":return w.newValue(ct);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(kt);case"NULL":return w.gr();default:Y(44614,{left:e,right:t})}}}class Lb extends Qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||Vt(e.value)||Vt(t.value)?w.newValue(ct):w.newValue({booleanValue:yt(e.value,t.value)<0})}}class kb extends Qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||Vt(e.value)||Vt(t.value)?w.newValue(ct):Kn(e.value,t.value)==="EQ"?w.newValue(kt):w.newValue({booleanValue:yt(e.value,t.value)<0})}}class Vb extends Qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||Vt(e.value)||Vt(t.value)?w.newValue(ct):w.newValue({booleanValue:yt(e.value,t.value)>0})}}class Mb extends Qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||Vt(e.value)||Vt(t.value)?w.newValue(ct):Kn(e.value,t.value)==="EQ"?w.newValue(kt):w.newValue({booleanValue:yt(e.value,t.value)>0})}}class Gb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Hb{constructor(e){this.expr=e}evaluate(e,t){var r;U(this.expr.params.length===1,216);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"ARRAY":{const i=((r=n.value.arrayValue)==null?void 0:r.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.mr()}}}class Ub{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===2,52884),new Py(new k("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class qb{constructor(e){this.expr=e}evaluate(e,t){var l,u,h,B;U(this.expr.params.length===2,1392);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=((u=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:u.values)??[],a=((B=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:B.values)??[];for(const C of o){let g=!1;n=!1;for(const E of a){switch(qt(C)&&qt(E)?"EQ":Kn(C,E)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44613,{value:E,search:C})}if(g)break}if(!g)return w.newValue(ct)}return w.newValue(kt)}}class Kb{constructor(e){this.expr=e}evaluate(e,t){var l,u,h,B;U(this.expr.params.length===2,2680);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=((u=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:u.values)??[],a=((B=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:B.values)??[];for(const C of a)for(const g of o)switch(qt(C)&&qt(g)?"EQ":Kn(C,g)){case"EQ":return w.newValue(kt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(60403,{value:C,search:g})}return n?w.gr():w.newValue(ct)}}class jb{constructor(e){this.expr=e}evaluate(e,t){var r,i,o;U(this.expr.params.length===1,38605);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(r=n.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.mr()}}}class Jb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class zb{constructor(e){this.expr=e}evaluate(e,t){var r,i;U(this.expr.params.length===1,1508);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;if(typeof o=="string"){const a=Ge.fromBase64String(o).toUint8Array();return a.reverse(),w.newValue({bytesValue:Ge.fromUint8Array(a).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),l=Array.from(a,(u=>u.segment)).reverse();return w.newValue({stringValue:l.join("")})}default:return w.mr()}}}class Wb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Qb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class $b{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,19400);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"STRING":{const r=(function(o){let a=0;for(let l=0;l<o.length;l++){const u=o.codePointAt(l);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(l+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,l++):a+=1}else a+=1;else a+=1;else{if(!(u<=1114111))return;a+=1,l++}}return a})(n.value.stringValue);return r===void 0?w.mr():w.newValue({integerValue:r})}default:return w.mr()}}}class Yb{constructor(e){this.expr=e}evaluate(e,t){var r,i;U(this.expr.params.length===1,8486);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(r=n.value)==null?void 0:r.bytesValue;return typeof o=="string"?w.newValue({integerValue:Ge.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(l){let u=0;for(let h=0;h<l.length;h++){const B=l.codePointAt(h);if(B===void 0)return;if(B>=55296&&B<=57343){if(!(B<=56319))return;{const C=l.codePointAt(h+1);if(C===void 0||!(C>=56320&&C<=57343))return;u+=4,h++}}else if(B<=127)u+=1;else if(B<=2047)u+=2;else if(B<=65535)u+=3;else{if(!(B<=1114111))return;u+=4,h++}}return u})((i=n.value)==null?void 0:i.stringValue);return o===void 0?w.mr():w.newValue({integerValue:o})}case"NULL":return w.gr();default:return w.mr()}}}class $i{constructor(e){this.expr=e}evaluate(e,t){var o,a;U(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return w.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return w.mr()}return n?w.gr():this.Or((o=r.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class Xb extends $i{Or(e,t){try{const n=(function(o){let a="";for(let l=0;l<o.length;l++){const u=o.charAt(l);switch(u){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+u;break;default:a+=u}}return"^"+a+"$"})(t),r=sd.compile(n);return w.newValue({booleanValue:r.matches(e)})}catch(n){return ln(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),w.mr()}}}class Zb extends $i{Or(e,t){try{const n=sd.compile(t);return w.newValue({booleanValue:n.test(e)})}catch{return ln(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.mr()}}}class eP extends $i{Or(e,t){try{return w.newValue({booleanValue:sd.compile(t).matches(e)})}catch{return ln(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.mr()}}}class tP extends $i{Or(e,t){return w.newValue({booleanValue:e.includes(t)})}}class nP extends $i{Or(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class sP extends $i{Or(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class rP{constructor(e){this.expr=e}evaluate(e,t){var r,i;U(this.expr.params.length===1,29079);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.gr();default:return w.mr()}}}class iP{constructor(e){this.expr=e}evaluate(e,t){var r,i;U(this.expr.params.length===1,60487);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.gr();default:return w.mr()}}}class oP{constructor(e){this.expr=e}evaluate(e,t){var r,i;U(this.expr.params.length===1,28544);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(r=n.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return w.gr();default:return w.mr()}}}class aP{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>re(o).evaluate(e,t)));let r="",i=!1;for(const o of n)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.mr()}return i?w.gr():w.newValue({stringValue:r})}}class lP{constructor(e){this.expr=e}evaluate(e,t){var o,a,l,u;U(this.expr.params.length===2,4483);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return w.pr();case"MAP":break;default:return w.mr()}const r=re(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return w.mr();const i=(u=(a=(o=n.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:u[(l=r.value)==null?void 0:l.stringValue];return i===void 0?w.pr():w.newValue(i)}}class bd{constructor(e){this.expr=e}evaluate(e,t){var u,h;U(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.mr()}const i=re(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=tB(r.value),a=tB(i.value);if(o===void 0||a===void 0||((u=o.values)==null?void 0:u.length)!==((h=a.values)==null?void 0:h.length))return w.mr();const l=this.Mr(o,a);return l===void 0||isNaN(l)?w.mr():w.newValue({doubleValue:l})}}class cP extends bd{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,a=0;for(let u=0;u<n.length;u++){if(!Ss(n[u])||!Ss(r[u]))return;const h=dt(n[u]),B=dt(r[u]);i+=h*B,o+=h*h,a+=B*B}const l=Math.sqrt(o)*Math.sqrt(a);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class uP extends bd{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Ss(n[o])||!Ss(r[o]))return;i+=dt(n[o])*dt(r[o])}return i}}class hP extends bd{Mr(e,t){const n=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Ss(n[o])||!Ss(r[o]))return;const a=dt(n[o]),l=dt(r[o]);i+=Math.pow(a-l,2)}return Math.sqrt(i)}}class BP{constructor(e){this.expr=e}evaluate(e,t){var r;U(this.expr.params.length===1,39044);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=tB(n.value);return w.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return w.gr();default:return w.mr()}}}const da=BigInt(-62135596800),fa=BigInt(253402300799),_c=BigInt(1e3),ws=BigInt(1e6),dP=da*_c,fP=fa*_c+BigInt(999),CP=da*ws,pP=fa*ws+BigInt(999999);function Pd(s){return s>=CP&&s<=pP}function Ny(s){return s>=da&&s<=fa}function Ca(s,e){const t=BigInt(s);return!(t<da||t>fa)&&!(e<0||e>=1e9)&&(t!==da||e===0)&&!(t===fa&&e>999999999)}function Oy(s,e){return e<0?{seconds:s-1,nanos:e+1e9}:{seconds:s,nanos:e}}function Nd(s){return BigInt(s.seconds)*ws+BigInt(Math.trunc(s.nanoseconds/1e3))}class Od{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return w.gr();default:return w.mr()}}}class gP extends Od{toTimestamp(e){if(!Pd(e))return w.mr();let t=Number(e/ws),n=Number(e%ws*BigInt(1e3));const r=Oy(t,n);return t=r.seconds,n=r.nanos,Ca(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.mr()}}class mP extends Od{toTimestamp(e){if(!(function(o){return o>=dP&&o<=fP})(e))return w.mr();let t=Number(e/_c),n=Number(e%_c*BigInt(1e6));const r=Oy(t,n);return t=r.seconds,n=r.nanos,Ca(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.mr()}}class _P extends Od{toTimestamp(e){if(!Ny(e))return w.mr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class Fd{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=re(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return w.gr();default:return w.mr()}const r=md(n.value.timestampValue);return Ca(r.seconds,r.nanoseconds)?this.Nr(r):w.mr()}}class EP extends Fd{Nr(e){const t=Nd(e);return Pd(t)?w.newValue({integerValue:`${t.toString()}`}):w.mr()}}class yP extends Fd{Nr(e){const t=Nd(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?w.newValue({integerValue:n.toString()}):w.newValue({integerValue:(n-BigInt(1)).toString()})}}class IP extends Fd{Nr(e){const t=BigInt(e.seconds);return Ny(t)?w.newValue({integerValue:t.toString()}):w.mr()}}class Fy{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=re(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return w.mr()}const i=re(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(Z){switch(Z){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return w.mr();break;case"NULL":n=!0;break;default:return w.mr()}const a=re(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const l=BigInt(a.value.integerValue);let u;try{switch(o){case"microsecond":u=l;break;case"millisecond":u=l*BigInt(1e3);break;case"second":u=l*BigInt(1e6);break;case"minute":u=l*BigInt(6e7);break;case"hour":u=l*BigInt(36e8);break;case"day":u=l*BigInt(864e8);break;default:return w.mr()}if(o!=="microsecond"&&l!==BigInt(0)&&u/l!==BigInt(this.Lr(o)))return w.mr()}catch(W){return ln(`Error during timestamp arithmetic: ${W}`),w.mr()}const h=md(r.value.timestampValue);if(!Ca(h.seconds,h.nanoseconds))return w.mr();const B=Nd(h),C=this.Br(B,u);if(!Pd(C))return w.mr();const g=Number(C/ws),E=C%ws,P=Number((E<0?E+ws:E)*BigInt(1e3)),V=E<0?g-1:g;return Ca(V,P)?w.newValue({timestampValue:{seconds:V,nanos:P}}):w.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class DP extends Fy{Br(e,t){return e+t}}class wP extends Fy{Br(e,t){return e-t}}function pa(s){if((s=by(s))instanceof Gr)return`fld(${s.fieldName})`;if(s instanceof Hr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof He?`ref(${t.path})`:t instanceof Lt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(s.value)})`;if(s instanceof k)return`fn(${s.name},[${s.params.map(pa).join(",")}])`;if(s.expressionType==="ListOfExpressions")return`list([${s.cr.map(pa).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(s,null,2)}`)}function TP(s){if(s instanceof vy)return`${s._name}(${Rl(s.fields)})`;if(s instanceof Ay){let e=`${s._name}(${Rl(s.accumulators)})`;return s.groups.size>0&&(e+=`grouping(${Rl(s.groups)})`),e}if(s instanceof Ry)return`${s._name}(${Rl(s.groups)})`;if(s instanceof qa)return`${s._name}(${s.hr})`;if(s instanceof Ka)return`${s._name}(${s.collectionId})`;if(s instanceof uu)return`${s._name}()`;if(s instanceof hu)return`${s._name}(${s.Tr.sort()})`;if(s instanceof ja)return`${s._name}(${pa(s.condition)})`;if(s instanceof Fs)return`${s._name}(${s.limit})`;if(s instanceof pn)return`${s._name}(${(function(t){return t.map((n=>`${pa(n.expr)}${n.direction}`)).join(",")})(s.orderings)})`;throw new Error(`Unrecognized stage ${s._name}`)}function Rl(s){return`${Array.from(s.entries()).sort().map((([e,t])=>`${e}=${pa(t)}`)).join(",")}`}function Vn(s){return s.stages.map((e=>TP(e))).join("|")}function xy(s,e){return Vn(s)===Vn(e)}function je(s){return s instanceof _t}function Pg(s){return je(s)?Vn(s):Go(s)}function Ly(s){return je(s)?Vn(s):(function(t){return`${fc(Kt(t))}|lt:${t.limitType}`})(s)}function du(s,e){return s instanceof _t&&e instanceof _t?xy(s,e):!(s instanceof _t&&!(e instanceof _t)||!(s instanceof _t)&&e instanceof _t)&&sS(s,e)}function fu(s){return Pn(s)?Vn(s):fc(s)}function xd(s,e){return s instanceof _t&&e instanceof _t?xy(s,e):!(s instanceof _t&&!(e instanceof _t)||!(s instanceof _t)&&e instanceof _t)&&dd(s,e)}function vP(s,e){const t=(function(r){let i=!1;const o=[];for(const a of r)if(a instanceof pn)if(i=!0,a.orderings.some((l=>l.expr instanceof Gr&&l.expr.fieldName===fn)))o.push(a);else{const l=a.orderings.map((u=>u));l.push(Jl(fn).ascending()),o.push(new pn(l,{}))}else a instanceof Fs&&(i||(o.push(new pn([Jl(fn).ascending()],{})),i=!0)),o.push(a);return i||o.push(new pn([Jl(fn).ascending()],{})),o})(s.stages);if(s.userDataReader){const n=s.userDataReader.createContext(3,"toCorePipeline");t.forEach((r=>r._readUserData(n)))}return new _t(s.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&jR(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ME();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const l=IE(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),le())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((t,n)=>og(t,n)))&&mi(this.baseMutations,e.baseMutations,((t,n)=>og(t,n)))}}class kd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){U(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let r=(function(){return lS})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new kd(e,t,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="";function Et(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Ng(e)),e=AP(s.get(t),e);return Ng(e)}function AP(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case Ec:t+="";break;default:t+=i}}return t}function Ng(s){return s+Ec+""}function gn(s){const e=s.length;if(U(e>=2,64408,{path:s}),e===2)return U(s.charAt(0)===Ec&&s.charAt(1)==="",56145,{path:s}),Ce.emptyPath();const t=e-2,n=[];let r="";for(let i=0;i<e;){const o=s.indexOf(Ec,i);switch((o<0||o>t)&&Y(50515,{path:s}),s.charAt(o+1)){case"":const a=s.substring(i,o);let l;r.length===0?l=a:(r+=a,l=r,r=""),n.push(l);break;case"":r+=s.substring(i,o),r+="\0";break;case"":r+=s.substring(i,o+1);break;default:Y(61167,{path:s})}i=o+2}return new Ce(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="remoteDocuments",Wa="owner",Yr="owner",ga="mutationQueues",RP="userId",en="mutations",Og="batchId",hr="userMutationsIndex",Fg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(s,e){return[s,Et(e)]}function ky(s,e,t){return[s,Et(e),t]}const SP={},Ri="documentMutations",yc="remoteDocumentsV14",bP=["prefixPath","collectionGroup","readTime","documentId"],Wl="documentKeyIndex",PP=["prefixPath","collectionGroup","documentId"],Vy="collectionGroupIndex",NP=["collectionGroup","readTime","prefixPath","documentId"],ma="remoteDocumentGlobal",dB="remoteDocumentGlobalKey",Si="targets",My="queryTargetsIndex",OP=["canonicalId","targetId"],bi="targetDocuments",FP=["targetId","path"],Vd="documentTargetsIndex",xP=["path","targetId"],Ic="targetGlobalKey",_r="targetGlobal",_a="collectionParents",LP=["collectionId","parent"],Pi="clientMetadata",kP="clientId",Cu="bundles",VP="bundleId",pu="namedQueries",MP="name",Md="indexConfiguration",GP="indexId",fB="collectionGroupIndex",HP="collectionGroup",jo="indexState",UP=["indexId","uid"],Gy="sequenceNumberIndex",qP=["uid","sequenceNumber"],Jo="indexEntries",KP=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Hy="documentKeyIndex",jP=["indexId","uid","orderedDocumentKey"],gu="documentOverlays",JP=["userId","collectionPath","documentId"],CB="collectionPathOverlayIndex",zP=["userId","collectionPath","largestBatchId"],Uy="collectionGroupOverlayIndex",WP=["userId","collectionGroup","largestBatchId"],Gd="globals",QP="name",qy=[ga,en,Ri,tr,Si,Wa,_r,bi,Pi,ma,_a,Cu,pu],$P=[...qy,gu],Ky=[ga,en,Ri,yc,Si,Wa,_r,bi,Pi,ma,_a,Cu,pu,gu],jy=Ky,Hd=[...jy,Md,jo,Jo],YP=Hd,Jy=[...Hd,Gd],XP=Jy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(s,e,t){const n=s.store(en),r=s.store(Ri),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=n.Hn({range:o},((h,B,C)=>(a++,C.delete())));i.push(l.next((()=>{U(a===1,47070,{batchId:t.batchId})})));const u=[];for(const h of t.mutations){const B=ky(e,h.key.path,t.batchId);i.push(r.delete(B)),u.push(h.key)}return S.waitFor(i).next((()=>u))}function Dc(s){if(!s)return 0;let e;if(s.document)e=s.document;else if(s.unknownDocument)e=s.unknownDocument;else{if(!s.noDocument)throw Y(14731);e=s.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pB extends ay{constructor(e,t){super(),this.qr=e,this.currentSequenceNumber=t}}function rt(s,e){const t=X(s);return Is.Cn(t.qr,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n,r,i=ne.min(),o=ne.min(),a=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.$r=e}}function ZP(s,e){let t;if(e.document)t=mS(s.$r,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=z.fromSegments(e.noDocument.path),r=Nr(e.noDocument.readTime);t=Ke.newNoDocument(n,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y(56709);{const n=z.fromSegments(e.unknownDocument.path),r=Nr(e.unknownDocument.version);t=Ke.newUnknownDocument(n,r)}}return e.readTime&&t.setReadTime((function(r){const i=new De(r[0],r[1]);return ne.fromTimestamp(i)})(e.readTime)),t}function xg(s,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:wc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:ua(i,o.key),fields:o.data.value.mapValue.fields,updateTime:gr(i,o.version.toTimestamp()),createTime:gr(i,o.createTime.toTimestamp())}})(s.$r,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Pr(e.version)};else{if(!e.isUnknownDocument())return Y(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Pr(e.version)}}return n}function wc(s){const e=s.toTimestamp();return[e.seconds,e.nanoseconds]}function Pr(s){const e=s.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Nr(s){const e=new De(s.seconds,s.nanoseconds);return ne.fromTimestamp(e)}function ir(s,e){const t=(e.baseMutations||[]).map((i=>hB(s.$r,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>hB(s.$r,i))),r=De.fromMillis(e.localWriteTimeMs);return new Ld(e.batchId,r,t,n)}function Oo(s,e){const t=Nr(e.readTime),n=e.lastLimboFreeSnapshotVersion!==void 0?Nr(e.lastLimboFreeSnapshotVersion):ne.min();let r;return r=(function(o){return o.structuredPipeline!==void 0})(e.query)?(function(o,a){var h,B;const l=o.structuredPipeline;U((((h=l==null?void 0:l.pipeline)==null?void 0:h.stages)??[]).length>0,1845);const u=(B=l==null?void 0:l.pipeline)==null?void 0:B.stages.map(e0);return new _t(a,u)})(e.query,s.$r):(function(o){return o.documents!==void 0})(e.query)?(function(o){const a=o.documents.length;return U(a===1,1966,{count:a}),Kt(Ga(jE(o.documents[0])))})(e.query):(function(o){return Kt(QE(o))})(e.query),new mn(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ge.fromBase64String(e.resumeToken))}function Qy(s,e){const t=Pr(e.snapshotVersion),n=Pr(e.lastLimboFreeSnapshotVersion);let r;r=Pn(e.target)?$E(s.$r,e.target):fd(e.target)?zE(s.$r,e.target):WE(s.$r,e.target).Se;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:fu(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:r}}function $y(s){const e=QE({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?aB(e,e.limit,"L"):e}function Sl(s,e){return new Ud(e.largestBatchId,hB(s.$r,e.overlayMutation))}function Lg(s,e){const t=e.path.lastSegment();return[s,Et(e.path.popLast()),t]}function kg(s,e,t,n){return{indexId:s,uid:e,sequenceNumber:t,readTime:Pr(n.readTime),documentKey:Et(n.documentKey.path),largestBatchId:n.largestBatchId}}function e0(s){switch(s.name){case"collection":return new qa(s.args[0].referenceValue,{});case"collection_group":return new Ka(s.args[1].stringValue,{});case"database":return new uu({});case"documents":return new hu(s.args.map((e=>e.referenceValue)),{});case"where":return new ja(gB(s.args[0]),{});case"limit":{const e=s.args[0].integerValue??s.args[0].doubleValue;return new Fs(typeof e=="number"?e:Number(e),{})}case"sort":return new pn(s.args.map((e=>(function(n){var i,o;const r=(i=n.mapValue)==null?void 0:i.fields;return new vd(gB(r.expression),(o=r.direction)==null?void 0:o.stringValue,"orderingFromProto")})(e))),{});default:throw new Error(`Stage type: ${s.name} not supported.`)}}function gB(s){return s.fieldReferenceValue?new Gr(Ns("_exprFromProto",s.fieldReferenceValue),"_exprFromProto"):s.functionValue?(function(t){var n;return new k(t.functionValue.name,((n=t.functionValue.args)==null?void 0:n.map(gB))||[])})(s):Hr._fromProto(s)}class mu{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Kr={}}static Qr(e,t,n,r){U(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new mu(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rs(e).Hn({index:hr,range:n},((r,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=ui(e),o=rs(e);return o.add({}).next((a=>{U(typeof a=="number",49019);const l=new Ld(a,t,n,r),u=(function(g,E,P){const V=P.baseMutations.map((Z=>pc(g.$r,Z))),W=P.mutations.map((Z=>pc(g.$r,Z)));return{userId:E,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:V,mutations:W}})(this.serializer,this.userId,l),h=[];let B=new Te(((C,g)=>ae(C.canonicalString(),g.canonicalString())));for(const C of r){const g=ky(this.userId,C.key.path,a);B=B.add(C.key.path.popLast()),h.push(o.put(u)),h.push(i.put(g,SP))}return B.forEach((C=>{h.push(this.indexManager.addToCollectionParentIndex(e,C))})),e.addOnCommittedListener((()=>{this.Kr[a]=l.keys()})),S.waitFor(h).next((()=>l))}))}lookupMutationBatch(e,t){return rs(e).get(t).next((n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),ir(this.serializer,n)):null))}Wr(e,t){return this.Kr[t]?S.resolve(this.Kr[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const r=n.keys();return this.Kr[t]=r,r}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return rs(e).Hn({index:hr,range:r},((o,a,l)=>{a.userId===this.userId&&(U(a.batchId>=n,47524,{Gr:n}),i=ir(this.serializer,a)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=ys;return rs(e).Hn({index:hr,range:t,reverse:!0},((r,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ys],[this.userId,Number.POSITIVE_INFINITY]);return rs(e).Qn(hr,t).next((n=>n.map((r=>ir(this.serializer,r)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=zl(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return ui(e).Hn({range:r},((o,a,l)=>{const[u,h,B]=o,C=gn(h);if(u===this.userId&&t.path.isEqual(C))return rs(e).get(B).next((g=>{if(!g)throw Y(61480,{zr:o,batchId:B});U(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:B}),i.push(ir(this.serializer,g))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Te(ae);const r=[];return t.forEach((i=>{const o=zl(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=ui(e).Hn({range:a},((u,h,B)=>{const[C,g,E]=u,P=gn(g);C===this.userId&&i.path.isEqual(P)?n=n.add(E):B.done()}));r.push(l)})),S.waitFor(r).next((()=>this.jr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=zl(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new Te(ae);return ui(e).Hn({range:o},((l,u,h)=>{const[B,C,g]=l,E=gn(C);B===this.userId&&n.isPrefixOf(E)?E.length===r&&(a=a.add(g)):h.done()})).next((()=>this.jr(e,a)))}jr(e,t){const n=[],r=[];return t.forEach((i=>{r.push(rs(e).get(i).next((o=>{if(o===null)throw Y(35274,{batchId:i});U(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(ir(this.serializer,o))})))})),S.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return zy(e.qr,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Hr(t.batchId)})),S.forEach(n,(r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))))}Hr(e){delete this.Kr[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return S.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),r=[];return ui(e).Hn({range:n},((i,o,a)=>{if(i[0]===this.userId){const l=gn(i[1]);r.push(l)}else a.done()})).next((()=>{U(r.length===0,56720,{Jr:r.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Yy(e,this.userId,t)}Yr(e){return Xy(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:ys,lastStreamToken:""}))}}function Yy(s,e,t){const n=zl(e,t.path),r=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return ui(s).Hn({range:i,jn:!0},((a,l,u)=>{const[h,B,C]=a;h===e&&B===r&&(o=!0),u.done()})).next((()=>o))}function rs(s){return rt(s,en)}function ui(s){return rt(s,Ri)}function Xy(s){return rt(s,ga)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{getBundleMetadata(e,t){return Vg(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Nr(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Vg(e).put((function(r){return{bundleId:r.id,createTime:Pr(At(r.createTime)),version:r.version}})(t))}getNamedQuery(e,t){return Mg(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:$y(i.bundledQuery),readTime:Nr(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Mg(e).put((function(r){return{name:r.name,readTime:Pr(At(r.readTime)),bundledQuery:r.bundledQuery}})(t))}}function Vg(s){return rt(s,Cu)}function Mg(s){return rt(s,pu)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.serializer=e,this.userId=t}static Qr(e,t){const n=t.uid||"";return new _u(e,n)}getOverlay(e,t){return Xr(e).get(Lg(this.userId,t)).next((n=>n?Sl(this.serializer,n):null))}getOverlays(e,t){const n=$t();return S.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}getAllOverlays(e,t){const n=$t();return Xr(e).Hn(((r,i)=>{const o=Sl(this.serializer,i);o.largestBatchId>t&&n.set(o.getKey(),o)})).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((i,o)=>{const a=new Ud(t,o);r.push(this.Zr(e,a))})),S.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((o=>r.add(Et(o.getCollectionPath()))));const i=[];return r.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Xr(e).zn(CB,a))})),S.waitFor(i)}getOverlaysForCollection(e,t,n){const r=$t(),i=Et(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Xr(e).Qn(CB,o).next((a=>{for(const l of a){const u=Sl(this.serializer,l);r.set(u.getKey(),u)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=$t();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Xr(e).Hn({index:Uy,range:a},((l,u,h)=>{const B=Sl(this.serializer,u);i.size()<r||B.largestBatchId===o?(i.set(B.getKey(),B),o=B.largestBatchId):h.done()})).next((()=>i))}Zr(e,t){return Xr(e).put((function(r,i,o){const[a,l,u]=Lg(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:pc(r.$r,o.mutation)}})(this.serializer,this.userId,t))}}function Xr(s){return rt(s,gu)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{Xr(e){return rt(e,Gd)}getSessionToken(e){return this.Xr(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?Ge.fromUint8Array(n):Ge.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.Xr(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){}ei(e,t){this.ti(e,t),t.ni()}ti(e,t){if("nullValue"in e)this.ri(t,5);else if("booleanValue"in e)this.ri(t,10),t.ii(e.booleanValue?1:0);else if("integerValue"in e)this.ri(t,15),t.ii(Fe(e.integerValue));else if("doubleValue"in e){const n=Fe(e.doubleValue);isNaN(n)?this.ri(t,13):(this.ri(t,15),Ei(n)?t.ii(0):t.ii(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ri(t,20),typeof n=="string"&&(n=Un(n)),t.si(`${n.seconds||""}`),t.ii(n.nanos||0)}else if("stringValue"in e)this._i(e.stringValue,t),this.oi(t);else if("bytesValue"in e)this.ri(t,30),t.ai(qn(e.bytesValue)),this.oi(t);else if("referenceValue"in e)this.ui(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ri(t,45),t.ii(n.latitude||0),t.ii(n.longitude||0)}else"mapValue"in e?CE(e)?this.ri(t,Number.MAX_SAFE_INTEGER):br(e)?this.ci(e.mapValue,t):(this.li(e.mapValue,t),this.oi(t)):"arrayValue"in e?(this.Ei(e.arrayValue,t),this.oi(t)):Y(19022,{hi:e})}_i(e,t){this.ri(t,25),this.Ti(e,t)}Ti(e,t){t.si(e)}li(e,t){const n=e.fields||{};this.ri(t,55);for(const r of Object.keys(n))this._i(r,t),this.ti(n[r],t)}ci(e,t){var o,a;const n=e.fields||{};this.ri(t,53);const r=Sr,i=((a=(o=n[r].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.ri(t,15),t.ii(Fe(i)),this._i(r,t),this.ti(n[r],t)}Ei(e,t){const n=e.values||[];this.ri(t,50);for(const r of n)this.ti(r,t)}ui(e,t){this.ri(t,37),z.fromName(e).path.forEach((n=>{this.ri(t,60),this.Ti(n,t)}))}ri(e,t){e.ii(t)}oi(e){e.ii(2)}}or.Pi=new or;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=255;function s0(s){if(s===0)return 8;let e=0;return s>>4||(e+=4,s<<=4),s>>6||(e+=2,s<<=2),s>>7||(e+=1),e}function Gg(s){const e=64-(function(n){let r=0;for(let i=0;i<8;++i){const o=s0(255&n[i]);if(r+=o,o!==8)break}return r})(s);return Math.ceil(e/8)}class r0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ii(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ri(n.value),n=t.next();this.Ai()}Vi(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.di(n.value),n=t.next();this.fi()}mi(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ri(n);else if(n<2048)this.Ri(960|n>>>6),this.Ri(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ri(480|n>>>12),this.Ri(128|63&n>>>6),this.Ri(128|63&n);else{const r=t.codePointAt(0);this.Ri(240|r>>>18),this.Ri(128|63&r>>>12),this.Ri(128|63&r>>>6),this.Ri(128|63&r)}}this.Ai()}pi(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.di(n);else if(n<2048)this.di(960|n>>>6),this.di(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.di(480|n>>>12),this.di(128|63&n>>>6),this.di(128|63&n);else{const r=t.codePointAt(0);this.di(240|r>>>18),this.di(128|63&r>>>12),this.di(128|63&r>>>6),this.di(128|63&r)}}this.fi()}gi(e){const t=this.yi(e),n=Gg(t);this.wi(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}bi(e){const t=this.yi(e),n=Gg(t);this.wi(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Si(){this.Di(Zr),this.Di(255)}xi(){this.Ci(Zr),this.Ci(255)}reset(){this.position=0}seed(e){this.wi(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fi(){return this.buffer.slice(0,this.position)}yi(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ri(e){const t=255&e;t===0?(this.Di(0),this.Di(255)):t===Zr?(this.Di(Zr),this.Di(0)):this.Di(t)}di(e){const t=255&e;t===0?(this.Ci(0),this.Ci(255)):t===Zr?(this.Ci(Zr),this.Ci(0)):this.Ci(e)}Ai(){this.Di(0),this.Di(1)}fi(){this.Ci(0),this.Ci(1)}Di(e){this.wi(1),this.buffer[this.position++]=e}Ci(e){this.wi(1),this.buffer[this.position++]=~e}wi(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class i0{constructor(e){this.Oi=e}ai(e){this.Oi.Ii(e)}si(e){this.Oi.mi(e)}ii(e){this.Oi.gi(e)}ni(){this.Oi.Si()}}class o0{constructor(e){this.Oi=e}ai(e){this.Oi.Vi(e)}si(e){this.Oi.pi(e)}ii(e){this.Oi.bi(e)}ni(){this.Oi.xi()}}class Io{constructor(){this.Oi=new r0,this.ascending=new i0(this.Oi),this.descending=new o0(this.Oi)}seed(e){this.Oi.seed(e)}Mi(e){return e===0?this.ascending:this.descending}Fi(){return this.Oi.Fi()}reset(){this.Oi.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,n,r){this.Ni=e,this.Li=t,this.Bi=n,this.Ui=r}ki(){const e=this.Ui.length,t=e===0||this.Ui[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.Ui,0),t!==e?n.set([0],this.Ui.length):++n[n.length-1],new ar(this.Ni,this.Li,this.Bi,n)}qi(e,t,n){return{indexId:this.Ni,uid:e,arrayValue:Ql(this.Bi),directionalValue:Ql(this.Ui),orderedDocumentKey:Ql(t),documentKey:n.path.toArray()}}$i(e,t,n){const r=this.qi(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function is(s,e){let t=s.Ni-e.Ni;return t!==0?t:(t=Hg(s.Bi,e.Bi),t!==0?t:(t=Hg(s.Ui,e.Ui),t!==0?t:z.comparator(s.Li,e.Li)))}function Hg(s,e){for(let t=0;t<s.length&&t<e.length;++t){const n=s[t]-e[t];if(n!==0)return n}return s.length-e.length}function Ql(s){return o_()?(function(t){let n="";for(let r=0;r<t.length;r++)n+=String.fromCharCode(t[r]);return n})(s):s}function Ug(s){return typeof s!="string"?s:(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(s)}class qg{constructor(e){this.Ki=new Te(((t,n)=>nt.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qi=e.orderBy,this.Wi=[];for(const t of e.filters){const n=t;n.isInequality()?this.Ki=this.Ki.add(n):this.Wi.push(n)}}get Gi(){return this.Ki.size>1}zi(e){if(U(e.collectionGroup===this.collectionId,49279),this.Gi)return!1;const t=rB(e);if(t!==void 0&&!this.ji(t))return!1;const n=er(e);let r=new Set,i=0,o=0;for(;i<n.length&&this.ji(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Ki.size>0){const a=this.Ki.getIterator().getNext();if(!r.has(a.field.canonicalString())){const l=n[i];if(!this.Hi(a,l)||!this.Ji(this.Qi[o++],l))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.Qi.length||!this.Ji(this.Qi[o++],a))return!1}return!0}Yi(){if(this.Gi)return null;let e=new Te(nt.comparator);const t=[];for(const n of this.Wi)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ql(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ql(n.field,0))}for(const n of this.Qi)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ql(n.field,n.dir==="asc"?0:1)));return new dc(dc.UNKNOWN_ID,this.collectionId,t,ca.empty())}ji(e){for(const t of this.Wi)if(this.Hi(t,e))return!0;return!1}Hi(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Ji(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(s){var t,n;if(U(s instanceof pe||s instanceof ve,20012),s instanceof pe){if(s instanceof PE){const r=((n=(t=s.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((i=>pe.create(s.field,"==",i))))||[];return ve.create(r,"or")}return s}const e=s.filters.map((r=>Zy(r)));return ve.create(e,s.op)}function a0(s){if(s.getFilters().length===0)return[];const e=EB(Zy(s));return U(eI(e),7391),mB(e)||_B(e)?[e]:e.getFilters()}function mB(s){return s instanceof pe}function _B(s){return s instanceof ve&&hd(s)}function eI(s){return mB(s)||_B(s)||(function(t){if(t instanceof ve&&nB(t)){for(const n of t.getFilters())if(!mB(n)&&!_B(n))return!1;return!0}return!1})(s)}function EB(s){if(U(s instanceof pe||s instanceof ve,34018),s instanceof pe)return s;if(s.filters.length===1)return EB(s.filters[0]);const e=s.filters.map((n=>EB(n)));let t=ve.create(e,s.op);return t=Tc(t),eI(t)?t:(U(t instanceof ve,64498),U(vi(t),40251),U(t.filters.length>1,57927),t.filters.reduce(((n,r)=>qd(n,r))))}function qd(s,e){let t;return U(s instanceof pe||s instanceof ve,38388),U(e instanceof pe||e instanceof ve,25473),t=s instanceof pe?e instanceof pe?(function(r,i){return ve.create([r,i],"and")})(s,e):Kg(s,e):e instanceof pe?Kg(e,s):(function(r,i){if(U(r.filters.length>0&&i.filters.length>0,48005),vi(r)&&vi(i))return RE(r,i.getFilters());const o=nB(r)?r:i,a=nB(r)?i:r,l=o.filters.map((u=>qd(u,a)));return ve.create(l,"or")})(s,e),Tc(t)}function Kg(s,e){if(vi(e))return RE(e,s.getFilters());{const t=e.filters.map((n=>qd(s,n)));return ve.create(t,"or")}}function Tc(s){if(U(s instanceof pe||s instanceof ve,11850),s instanceof pe)return s;const e=s.getFilters();if(e.length===1)return Tc(e[0]);if(vE(s))return s;const t=e.map((r=>Tc(r))),n=[];return t.forEach((r=>{r instanceof pe?n.push(r):r instanceof ve&&(r.op===s.op?n.push(...r.filters):n.push(r))})),n.length===1?n[0]:ve.create(n,s.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.Zi=new Kd}addToCollectionParentIndex(e,t){return this.Zi.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(jt.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Kd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Te(Ce.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Te(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="IndexedDbIndexManager",bl=new Uint8Array(0);class c0{constructor(e,t){this.databaseId=t,this.Xi=new Kd,this.es=new Qn((n=>fc(n)),((n,r)=>dd(n,r))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xi.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Xi.add(t)}));const i={collectionId:n,parent:Et(r)};return Jg(e).put(i)}return S.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[iE(t),""],!1,!0);return Jg(e).Qn(r).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(gn(o.parent))}return n}))}addFieldIndex(e,t){const n=Do(e),r=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete r.indexId;const i=n.add(r);if(t.indexState){const o=ti(e);return i.next((a=>{o.put(kg(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Do(e),r=ti(e),i=ei(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Do(e),n=ei(e),r=ti(e);return t.zn().next((()=>n.zn())).next((()=>r.zn()))}createTargetIndexes(e,t){return S.forEach(this.ts(t),(n=>this.getIndexType(e,n).next((r=>{if(r===0||r===1){const i=new qg(n).Yi();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=ei(e);let r=!0;const i=new Map;return S.forEach(this.ts(t),(o=>this.ns(e,o).next((a=>{r&&(r=!!a),i.set(o,a)})))).next((()=>{if(r){let o=le();const a=[];return S.forEach(i,((l,u)=>{G(jg,`Using index ${(function(se){return`id=${se.indexId}|cg=${se.collectionGroup}|f=${se.fields.map((ye=>`${ye.fieldPath}:${ye.kind}`)).join(",")}`})(l)} to execute ${fc(t)}`);const h=(function(se,ye){const ge=rB(ye);if(ge===void 0)return null;for(const ue of Cc(se,ge.fieldPath))switch(ue.op){case"array-contains-any":return ue.value.arrayValue.values||[];case"array-contains":return[ue.value]}return null})(u,l),B=(function(se,ye){const ge=new Map;for(const ue of er(ye))for(const T of Cc(se,ue.fieldPath))switch(T.op){case"==":case"in":ge.set(ue.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return ge.set(ue.fieldPath.canonicalString(),T.value),Array.from(ge.values())}return null})(u,l),C=(function(se,ye){const ge=[];let ue=!0;for(const T of er(ye)){const y=T.kind===0?hg(se,T.fieldPath,se.startAt):Bg(se,T.fieldPath,se.startAt);ge.push(y.value),ue&&(ue=y.inclusive)}return new Ti(ge,ue)})(u,l),g=(function(se,ye){const ge=[];let ue=!0;for(const T of er(ye)){const y=T.kind===0?Bg(se,T.fieldPath,se.endAt):hg(se,T.fieldPath,se.endAt);ge.push(y.value),ue&&(ue=y.inclusive)}return new Ti(ge,ue)})(u,l),E=this.rs(l,u,C),P=this.rs(l,u,g),V=this.ss(l,u,B),W=this._s(l.indexId,h,E,C.inclusive,P,g.inclusive,V);return S.forEach(W,(Z=>n.Gn(Z,t.limit).next((se=>{se.forEach((ye=>{const ge=z.fromSegments(ye.documentKey);o.has(ge)||(o=o.add(ge),a.push(ge))}))}))))})).next((()=>a))}return S.resolve(null)}))}ts(e){let t=this.es.get(e);return t||(e.filters.length===0?t=[e]:t=a0(ve.create(e.filters,"and")).map((n=>iB(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.es.set(e,t),t)}_s(e,t,n,r,i,o,a){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let B=0;B<l;++B){const C=t?this.us(t[B/u]):bl,g=this.cs(e,C,n[B%u],r),E=this.ls(e,C,i[B%u],o),P=a.map((V=>this.cs(e,C,V,!0)));h.push(...this.createRange(g,E,P))}return h}cs(e,t,n,r){const i=new ar(e,z.empty(),t,n);return r?i:i.ki()}ls(e,t,n,r){const i=new ar(e,z.empty(),t,n);return r?i.ki():i}ns(e,t){const n=new qg(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((i=>{let o=null;for(const a of i)n.zi(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let n=2;const r=this.ts(t);return S.forEach(r,(i=>this.ns(e,i).next((o=>{o?n!==0&&o.fields.length<(function(l){let u=new Te(nt.comparator),h=!1;for(const B of l.filters)for(const C of B.getFlattenedFilters())C.field.isKeyField()||(C.op==="array-contains"||C.op==="array-contains-any"?h=!0:u=u.add(C.field));for(const B of l.orderBy)B.field.isKeyField()||(u=u.add(B.field));return u.size+(h?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&r.length>1&&n===2?1:n))}Es(e,t){const n=new Io;for(const r of er(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=n.Mi(r.kind);or.Pi.ei(i,o)}return n.Fi()}us(e){const t=new Io;return or.Pi.ei(e,t.Mi(0)),t.Fi()}hs(e,t){const n=new Io;return or.Pi.ei(ia(this.databaseId,t),n.Mi((function(i){const o=er(i);return o.length===0?0:o[o.length-1].kind})(e))),n.Fi()}ss(e,t,n){if(n===null)return[];let r=[];r.push(new Io);let i=0;for(const o of er(e)){const a=n[i++];for(const l of r)if(this.Ts(t,o.fieldPath)&&bs(a))r=this.Ps(r,o,a);else{const u=l.Mi(o.kind);or.Pi.ei(a,u)}}return this.Is(r)}rs(e,t,n){return this.ss(e,t,n.position)}Is(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fi();return t}Ps(e,t,n){const r=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of r){const l=new Io;l.seed(a.Fi()),or.Pi.ei(o,l.Mi(t.kind)),i.push(l)}return i}Ts(e,t){return!!e.filters.find((n=>n instanceof pe&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Do(e),r=ti(e);return(t?n.Qn(fB,IDBKeyRange.bound(t,t)):n.Qn()).next((i=>{const o=[];return S.forEach(i,(a=>r.get([a.indexId,this.uid]).next((l=>{o.push((function(h,B){const C=B?new ca(B.sequenceNumber,new jt(Nr(B.readTime),new z(gn(B.documentKey)),B.largestBatchId)):ca.empty(),g=h.fields.map((([E,P])=>new ql(nt.fromServerFormat(E),P)));return new dc(h.indexId,h.collectionGroup,g,C)})(a,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,r)=>{const i=n.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:ae(n.collectionGroup,r.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Do(e),i=ti(e);return this.Rs(e).next((o=>r.Qn(fB,IDBKeyRange.bound(t,t)).next((a=>S.forEach(a,(l=>i.put(kg(l.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return S.forEach(t,((r,i)=>{const o=n.get(r.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next((a=>(n.set(r.collectionGroup,a),S.forEach(a,(l=>this.As(e,r,l).next((u=>{const h=this.Vs(i,l);return u.isEqual(h)?S.resolve():this.ds(e,i,l,u,h)})))))))}))}fs(e,t,n,r){return ei(e).put(r.qi(this.uid,this.hs(n,t.key),t.key))}ps(e,t,n,r){return ei(e).delete(r.$i(this.uid,this.hs(n,t.key),t.key))}As(e,t,n){const r=ei(e);let i=new Te(is);return r.Hn({index:Hy,range:IDBKeyRange.only([n.indexId,this.uid,Ql(this.hs(n,t))])},((o,a)=>{i=i.add(new ar(n.indexId,t,Ug(a.arrayValue),Ug(a.directionalValue)))})).next((()=>i))}Vs(e,t){let n=new Te(is);const r=this.Es(t,e);if(r==null)return n;const i=rB(t);if(i!=null){const o=e.data.field(i.fieldPath);if(bs(o))for(const a of o.arrayValue.values||[])n=n.add(new ar(t.indexId,e.key,this.us(a),r))}else n=n.add(new ar(t.indexId,e.key,bl,r));return n}ds(e,t,n,r,i){G(jg,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,h,B,C){const g=l.getIterator(),E=u.getIterator();let P=$r(g),V=$r(E);for(;P||V;){let W=!1,Z=!1;if(P&&V){const se=h(P,V);se<0?Z=!0:se>0&&(W=!0)}else P!=null?Z=!0:W=!0;W?(B(V),V=$r(E)):Z?(C(P),P=$r(g)):(P=$r(g),V=$r(E))}})(r,i,is,(a=>{o.push(this.fs(e,t,n,a))}),(a=>{o.push(this.ps(e,t,n,a))})),S.waitFor(o)}Rs(e){let t=1;return ti(e).Hn({index:Gy,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,r,i)=>{i.done(),t=r.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,a)=>is(o,a))).filter(((o,a,l)=>!a||is(o,l[a-1])!==0));const r=[];r.push(e);for(const o of n){const a=is(o,e),l=is(o,t);if(a===0)r[0]=e.ki();else if(a>0&&l<0)r.push(o),r.push(o.ki());else if(l>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2){if(this.gs(r[o],r[o+1]))return[];const a=r[o].$i(this.uid,bl,z.empty()),l=r[o+1].$i(this.uid,bl,z.empty());i.push(IDBKeyRange.bound(a,l))}return i}gs(e,t){return is(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(zg)}getMinOffset(e,t){return S.mapArray(this.ts(t),(n=>this.ns(e,n).next((r=>r||Y(44426))))).next(zg)}}function Jg(s){return rt(s,_a)}function ei(s){return rt(s,Jo)}function Do(s){return rt(s,Md)}function ti(s){return rt(s,jo)}function zg(s){U(s.length!==0,28825);let e=s[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<s.length;n++){const r=s[n].indexState.offset;Bd(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new jt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new jn(0)}static bs(){return new jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ss(e).next((t=>{const n=new jn(t.highestTargetId);return t.highestTargetId=n.next(),this.vs(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Ss(e).next((t=>ne.fromTimestamp(new De(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Ss(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Ss(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.vs(e,r))))}addTargetData(e,t){return this.Ds(e,t).next((()=>this.Ss(e).next((n=>(n.targetCount+=1,this.xs(t,n),this.vs(e,n))))))}updateTargetData(e,t){return this.Ds(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>ni(e).delete(t.targetId))).next((()=>this.Ss(e))).next((n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.vs(e,n))))}removeTargets(e,t,n){let r=0;const i=[];return ni(e).Hn(((o,a)=>{const l=Oo(this.serializer,a);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(r++,i.push(this.removeTargetData(e,l)))})).next((()=>S.waitFor(i))).next((()=>r))}forEachTarget(e,t){return ni(e).Hn(((n,r)=>{const i=Oo(this.serializer,r);t(i)}))}Ss(e){return Wg(e).get(Ic).next((t=>(U(t!==null,2888),t)))}vs(e,t){return Wg(e).put(Ic,t)}Ds(e,t){return ni(e).put(Qy(this.serializer,t))}xs(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ss(e).next((t=>t.targetCount))}getTargetData(e,t){const n=fu(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return ni(e).Hn({range:r,index:My},((o,a,l)=>{const u=Oo(this.serializer,a);xd(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=fs(e);return t.forEach((o=>{const a=Et(o.path);r.push(i.put({targetId:n,path:a})),r.push(this.referenceDelegate.addReference(e,n,o))})),S.waitFor(r)}removeMatchingKeys(e,t,n){const r=fs(e);return S.forEach(t,(i=>{const o=Et(i.path);return S.waitFor([r.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=fs(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=fs(e);let i=le();return r.Hn({range:n,jn:!0},((o,a,l)=>{const u=gn(o[1]),h=new z(u);i=i.add(h)})).next((()=>i))}containsKey(e,t){const n=Et(t.path),r=IDBKeyRange.bound([n],[iE(n)],!1,!0);let i=0;return fs(e).Hn({index:Vd,jn:!0,range:r},(([o,a],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}ye(e,t){return ni(e).get(t).next((n=>n?Oo(this.serializer,n):null))}}function ni(s){return rt(s,Si)}function Wg(s){return rt(s,_r)}function fs(s){return rt(s,bi)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t){this.db=e,this.garbageCollector=hy(this,t)}ir(e){const t=this.Cs(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}Cs(e){let t=0;return this.sr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}sr(e,t){return this.Fs(e,((n,r)=>t(r)))}addReference(e,t,n){return Pl(e,n)}removeReference(e,t,n){return Pl(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Pl(e,t)}Os(e,t){return(function(r,i){let o=!1;return Xy(r).Jn((a=>Yy(r,a,i).next((l=>(l&&(o=!0),S.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Fs(e,((o,a)=>{if(a<=t){const l=this.Os(e,o).next((u=>{if(!u)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,ne.min()),fs(e).delete((function(B){return[0,Et(B.path)]})(o)))))}));r.push(l)}})).next((()=>S.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Pl(e,t)}Fs(e,t){const n=fs(e);let r,i=Ot.wn;return n.Hn({index:Vd},(([o,a],{path:l,sequenceNumber:u})=>{o===0?(i!==Ot.wn&&t(new z(gn(r)),i),i=u,r=l):i=Ot.wn})).next((()=>{i!==Ot.wn&&t(new z(gn(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Pl(s,e){return fs(s).put((function(n,r){return{targetId:0,path:Et(n.path),sequenceNumber:r}})(e,s.currentSequenceNumber))}// Copyright 2024 Google LLC* @license
function tI(s,e){var n;let t=e;for(const r of s.stages)t=B0({serializer:s.serializer,serverTimestampBehavior:(n=s.listenOptions)==null?void 0:n.serverTimestampBehavior},r,t);return t}function Eu(s,e){return tI(s,[e]).length>0}function nI(s,e){return je(s)?Eu(s,e):iu(s,e)}function B0(s,e,t){if(e instanceof qa)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof ja)return(function(r,i,o){return o.filter((a=>{const l=Ko(re(i.condition).evaluate(r,a));return l!==void 0&&Zt(l,kt)}))})(s,e,t);if(e instanceof Ka)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof uu)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof hu)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&i.Pr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Fs)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof pn)return(function(r,i,o){const a=i.orderings.map((l=>({Ms:re(l.expr),direction:l.direction})));return[...o].sort(((l,u)=>{for(const{Ms:h,direction:B}of a){const C=Ko(h.evaluate(r,l)),g=Ko(h.evaluate(r,u)),E=yt(C??In,g??In);if(E!==0)return B==="ascending"?E:-E}return 0}))})(s,e,t);throw new Error(`Unknown stage: ${e._name}`)}function yB(s){const e=(function(n){for(let r=n.stages.length-1;r>=0;r--){const i=n.stages[r];if(i instanceof pn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(s);return(t,n)=>{for(const r of e){const i=Ko(re(r.expr).evaluate({serializer:s.serializer},t)),o=Ko(re(r.expr).evaluate({serializer:s.serializer},n)),a=yt(i||In,o||In);if(a!==0)return r.direction==="ascending"?a:-a}return 0}}function wh(s){for(let e=s.stages.length-1;e>=0;e--){const t=s.stages[e];if(t instanceof Fs)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.changes=new Qn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return os(e).put(n)}removeEntry(e,t,n){return os(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],wc(o),a[a.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ns(e,n))))}getEntry(e,t){let n=Ke.newInvalidDocument(t);return os(e).Hn({index:Wl,range:IDBKeyRange.only(wo(t))},((r,i)=>{n=this.Ls(t,i)})).next((()=>n))}Bs(e,t){let n={size:0,document:Ke.newInvalidDocument(t)};return os(e).Hn({index:Wl,range:IDBKeyRange.only(wo(t))},((r,i)=>{n={document:this.Ls(t,i),size:Dc(i)}})).next((()=>n))}getEntries(e,t){let n=tt();return this.Us(e,t,((r,i)=>{const o=this.Ls(r,i);n=n.insert(r,o)})).next((()=>n))}getAllEntries(e){let t=tt();return os(e).Hn(((n,r)=>{const i=this.Ls(z.fromSegments(r.prefixPath.concat(r.collectionGroup,r.documentId)),r);t=t.insert(i.key,i)})).next((()=>t))}ks(e,t){let n=tt(),r=new Me(z.comparator);return this.Us(e,t,((i,o)=>{const a=this.Ls(i,o);n=n.insert(i,a),r=r.insert(i,Dc(o))})).next((()=>({documents:n,qs:r})))}Us(e,t,n){if(t.isEmpty())return S.resolve();let r=new Te(Yg);t.forEach((l=>r=r.add(l)));const i=IDBKeyRange.bound(wo(r.first()),wo(r.last())),o=r.getIterator();let a=o.getNext();return os(e).Hn({index:Wl,range:i},((l,u,h)=>{const B=z.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Yg(a,B)<0;)n(a,null),a=o.getNext();a&&a.isEqual(B)&&(n(a,u),a=o.hasNext()?o.getNext():null),a?h.Kn(wo(a)):h.done()})).next((()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r,i){const o=je(t)?Ce.fromString(Ja(t)):t.path,a=[o.popLast().toArray(),o.lastSegment(),wc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return os(e).Qn(IDBKeyRange.bound(a,l,!0)).next((u=>{i==null||i.incrementDocumentReadCount(u.length);let h=tt();for(const B of u){const C=this.Ls(z.fromSegments(B.prefixPath.concat(B.collectionGroup,B.documentId)),B);C.isFoundDocument()&&(nI(t,C)||r.has(C.key))&&(h=h.insert(C.key,C))}return h}))}getAllFromCollectionGroup(e,t,n,r){let i=tt();const o=$g(t,n),a=$g(t,jt.max());return os(e).Hn({index:Vy,range:IDBKeyRange.bound(o,a,!0)},((l,u,h)=>{const B=this.Ls(z.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(B.key,B),i.size===r&&h.done()})).next((()=>i))}newChangeBuffer(e){return new f0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Qg(e).get(dB).next((t=>(U(!!t,20021),t)))}Ns(e,t){return Qg(e).put(dB,t)}Ls(e,t){if(t){const n=ZP(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(ne.min())))return n}return Ke.newInvalidDocument(e)}}function rI(s){return new d0(s)}class f0 extends sI{constructor(e,t){super(),this.$s=e,this.trackRemovals=t,this.Ks=new Qn((n=>n.toString()),((n,r)=>n.isEqual(r)))}applyChanges(e){const t=[];let n=0,r=new Te(((i,o)=>ae(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Ks.get(i);if(t.push(this.$s.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=xg(this.$s.serializer,o);r=r.add(i.path.popLast());const u=Dc(l);n+=u-a.size,t.push(this.$s.addEntry(e,i,l))}else if(n-=a.size,this.trackRemovals){const l=xg(this.$s.serializer,o.convertToNoDocument(ne.min()));t.push(this.$s.addEntry(e,i,l))}})),r.forEach((i=>{t.push(this.$s.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.$s.updateMetadata(e,n)),S.waitFor(t)}getFromCache(e,t){return this.$s.Bs(e,t).next((n=>(this.Ks.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.$s.ks(e,t).next((({documents:n,qs:r})=>(r.forEach(((i,o)=>{this.Ks.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function Qg(s){return rt(s,ma)}function os(s){return rt(s,yc)}function wo(s){const e=s.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $g(s,e){const t=e.documentKey.path.toArray();return[s,wc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Yg(s,e){const t=s.path.toArray(),n=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(r=ae(t[i],n[i]),r)return r;return r=ae(t.length,n.length),r||(r=ae(t[t.length-2],n[n.length-2]),r||ae(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&Vo(n.mutation,r,Nt.empty(),De.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,le()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=le()){const r=$t();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=sr();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=$t();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,le())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let i=tt();const o=Ho(),a=(function(){return Ho()})();return t.forEach(((l,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Wn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Vo(h.mutation,u,h.mutation.getFieldMask(),De.now())):o.set(u.key,Nt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>a.set(u,new C0(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=Ho();let r=new Me(((o,a)=>o-a)),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=n.get(l)||Nt.empty();h=a.applyToLocalView(u,h),n.set(l,h);const B=(r.get(a.batchId)||le()).add(l);r=r.insert(a.batchId,B)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,B=ME();h.forEach((C=>{if(!i.has(C)){const g=IE(t.get(C),n.get(C));g!==null&&B.set(C,g),i=i.add(C)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,B))}return S.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return je(t)?this.getDocumentsMatchingPipeline(e,t,n,r):tS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):S.resolve($t());let a=Ai,l=i;return o.next((u=>S.forEach(u,((h,B)=>(a<B.largestBatchId&&(a=B.largestBatchId),i.get(h)?S.resolve():this.remoteDocumentCache.getEntry(e,h).next((C=>{l=l.insert(h,C)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,le()))).next((h=>({batchId:a,changes:VE(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next((n=>{let r=sr();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=sr();return this.indexManager.getCollectionParents(e,i).next((a=>S.forEach(a,(l=>{const u=(function(B,C){return new Ma(C,null,B.explicitOrderBy.slice(),B.filters.slice(),B.limit,B.limitType,B.startAt,B.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((B,C)=>{o=o.insert(B,C)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>iu(t,a)))))}getDocumentsMatchingPipeline(e,t,n,r){if(kn(t)==="collection_group"){const i=Rd(t);let o=sr();return this.indexManager.getCollectionParents(e,i).next((a=>S.forEach(a,(l=>{const u=(function(B,C){const g=B.stages.map((E=>E instanceof Ka?new qa(C.canonicalString(),{}):E));return new _t(B.serializer,g)})(t,l.child(i));return this.getDocumentsMatchingPipeline(e,u,n,r).next((h=>{h.forEach(((B,C)=>{o=o.insert(B,C)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,kn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r);case"documents":let a=le();for(const l of mc(t))a=a.add(z.fromPath(l));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new H("invalid-argument",`Invalid pipeline source to execute offline: ${Vn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Eu(t,a)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,Ke.newInvalidDocument(a)))}));let r=sr();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&Vo(a.mutation,o,Nt.empty(),De.now()),n(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,n){switch(kn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ce.fromString(Ja(t)),n);case"collection_group":throw new H("invalid-argument",`Unexpected collection group pipeline: ${Vn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,mc(t).map((r=>z.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new H("invalid-argument",`Failed to get overlays for pipeline: ${Vn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return S.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:At(r.createTime)}})(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(r){return{name:r.name,query:$y(r.bundledQuery),readTime:At(r.readTime)}})(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.overlays=new Me(z.comparator),this.Gs=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$t();return S.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}getAllOverlays(e,t){const n=$t();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&n.set(r,i)})),S.resolve(n)}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.Zr(e,t,i)})),S.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Gs.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const r=$t(),i=t.length+1,o=new z(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&r.set(l.getKey(),l)}return S.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Me(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=i.get(u.largestBatchId);h===null&&(h=$t(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=$t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return S.resolve(a)}Zr(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Gs.get(r.largestBatchId).delete(n.key);this.Gs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ud(t,n));let i=this.Gs.get(t);i===void 0&&(i=le(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.zs=new Te(at.js),this.Hs=new Te(at.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new at(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Zs(new at(e,t))}Xs(e,t){e.forEach((n=>this.removeReference(n,t)))}e_(e){const t=new z(new Ce([])),n=new at(t,e),r=new at(t,e+1),i=[];return this.Hs.forEachInRange([n,r],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new z(new Ce([])),n=new at(t,e),r=new at(t,e+1);let i=le();return this.Hs.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new at(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class at{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return z.comparator(e.key,t.key)||ae(e.r_,t.r_)}static Js(e,t){return ae(e.r_,t.r_)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Te(at.js)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ld(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.i_=this.i_.add(new at(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.__(n),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ys:this.Gr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new at(t,0),r=new at(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,r],(o=>{const a=this.s_(o.r_);i.push(a)})),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Te(ae);return t.forEach((r=>{const i=new at(r,0),o=new at(r,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(a=>{n=n.add(a.r_)}))})),S.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;z.isDocumentKey(i)||(i=i.child(""));const o=new at(new z(i),0);let a=new Te(ae);return this.i_.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.r_)),!0)}),o),S.resolve(this.o_(a))}o_(e){const t=[];return e.forEach((n=>{const r=this.s_(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){U(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return S.forEach(t.mutations,(r=>{const i=new at(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.i_=n}))}Hr(e){}containsKey(e,t){const n=new at(t,0),r=this.i_.firstAfterOrEqual(n);return S.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.u_=e,this.docs=(function(){return new Me(z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():Ke.newInvalidDocument(t))}getEntries(e,t){let n=tt();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Ke.newInvalidDocument(r))})),S.resolve(n)}getAllEntries(e){let t=tt();return this.docs.forEach(((n,r)=>{t=t.insert(n,r.document)})),S.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let i,o;je(t)?(i=Ce.fromString(Ja(t)),o=h=>Eu(t,h)):(i=t.path,o=h=>iu(t,h));let a=tt();const l=new z(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:B}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||Bd(OE(B),n)<=0||(r.has(B.key)||o(B))&&(a=a.insert(B.key,B.mutableCopy()))}return S.resolve(a)}getAllFromCollectionGroup(e,t,n,r){Y(9500)}c_(e,t){return S.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new y0(this)}getSize(e){return S.resolve(this.size)}}class y0 extends sI{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(n)})),S.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.persistence=e,this.l_=new Qn((t=>fu(t)),xd),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.E_=0,this.h_=new jd,this.targetCount=0,this.T_=jn.ws()}forEachTarget(e,t){return this.l_.forEach(((n,r)=>t(r))),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),S.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new jn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Ds(t),S.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.l_.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),S.waitFor(i).next((()=>r))}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),S.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.P_={},this.overlays={},this.I_=new Ot(0),this.R_=!1,this.R_=!0,this.A_=new m0,this.referenceDelegate=e(this),this.V_=new I0(this),this.indexManager=new l0,this.remoteDocumentCache=(function(r){return new E0(r)})((n=>this.referenceDelegate.d_(n))),this.serializer=new Wy(t),this.f_=new p0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new g0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new _0(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){G("MemoryPersistence","Starting transaction:",e);const r=new D0(this.I_.next());return this.referenceDelegate.m_(),n(r).next((i=>this.referenceDelegate.p_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}g_(e,t){return S.or(Object.values(this.P_).map((n=>()=>n.containsKey(e,t))))}}class D0 extends ay{constructor(e){super(),this.currentSequenceNumber=e}}class yu{constructor(e){this.persistence=e,this.y_=new jd,this.w_=null}static b_(e){return new yu(e)}get S_(){if(this.w_)return this.w_;throw Y(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),S.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((r=>this.S_.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.S_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.S_,(n=>{const r=z.fromPath(n);return this.v_(e,r).next((i=>{i||t.removeEntry(r,ne.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return S.or([()=>S.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class vc{constructor(e,t){this.persistence=e,this.D_=new Qn((n=>Et(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=hy(this,t)}static b_(e,t){return new vc(e,t)}m_(){}p_(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}Cs(e){let t=0;return this.sr(e,(n=>{t++})).next((()=>t))}sr(e,t){return S.forEach(this.D_,((n,r)=>this.Os(e,n,r).next((i=>i?S.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.c_(e,(o=>this.Os(e,o,t).next((a=>{a||(n++,i.removeEntry(o,ne.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),S.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),S.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hl(e.data.value)),t}Os(e,t,n){return S.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.D_.get(t);return S.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.serializer=e}Nn(e,t,n,r){const i=new au("createOrUpgrade",t);n<1&&r>=1&&((function(l){l.createObjectStore(Wa)})(e),(function(l){l.createObjectStore(ga,{keyPath:RP}),l.createObjectStore(en,{keyPath:Og,autoIncrement:!0}).createIndex(hr,Fg,{unique:!0}),l.createObjectStore(Ri)})(e),Xg(e),(function(l){l.createObjectStore(tr)})(e));let o=S.resolve();return n<3&&r>=3&&(n!==0&&((function(l){l.deleteObjectStore(bi),l.deleteObjectStore(Si),l.deleteObjectStore(_r)})(e),Xg(e)),o=o.next((()=>(function(l){const u=l.store(_r),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ne.min().toTimestamp(),targetCount:0};return u.put(Ic,h)})(i)))),n<4&&r>=4&&(n!==0&&(o=o.next((()=>(function(l,u){return u.store(en).Qn().next((B=>{l.deleteObjectStore(en),l.createObjectStore(en,{keyPath:Og,autoIncrement:!0}).createIndex(hr,Fg,{unique:!0});const C=u.store(en),g=B.map((E=>C.put(E)));return S.waitFor(g)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(Pi,{keyPath:kP})})(e)}))),n<5&&r>=5&&(o=o.next((()=>this.x_(i)))),n<6&&r>=6&&(o=o.next((()=>((function(l){l.createObjectStore(ma)})(e),this.C_(i))))),n<7&&r>=7&&(o=o.next((()=>this.F_(i)))),n<8&&r>=8&&(o=o.next((()=>this.O_(e,i)))),n<9&&r>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&r>=10&&(o=o.next((()=>this.M_(i)))),n<11&&r>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(Cu,{keyPath:VP})})(e),(function(l){l.createObjectStore(pu,{keyPath:MP})})(e)}))),n<12&&r>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(gu,{keyPath:JP});u.createIndex(CB,zP,{unique:!1}),u.createIndex(Uy,WP,{unique:!1})})(e)}))),n<13&&r>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(yc,{keyPath:bP});u.createIndex(Wl,PP),u.createIndex(Vy,NP)})(e))).next((()=>this.N_(e,i))).next((()=>e.deleteObjectStore(tr)))),n<14&&r>=14&&(o=o.next((()=>this.L_(e,i)))),n<15&&r>=15&&(o=o.next((()=>(function(l){l.createObjectStore(Md,{keyPath:GP,autoIncrement:!0}).createIndex(fB,HP,{unique:!1}),l.createObjectStore(jo,{keyPath:UP}).createIndex(Gy,qP,{unique:!1}),l.createObjectStore(Jo,{keyPath:KP}).createIndex(Hy,jP,{unique:!1})})(e)))),n<16&&r>=16&&(o=o.next((()=>{t.objectStore(jo).clear()})).next((()=>{t.objectStore(Jo).clear()}))),n<17&&r>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(Gd,{keyPath:QP})})(e)}))),n<18&&r>=18&&o_()&&(o=o.next((()=>{t.objectStore(jo).clear()})).next((()=>{t.objectStore(Jo).clear()}))),o}C_(e){let t=0;return e.store(tr).Hn(((n,r)=>{t+=Dc(r)})).next((()=>{const n={byteSize:t};return e.store(ma).put(dB,n)}))}x_(e){const t=e.store(ga),n=e.store(en);return t.Qn().next((r=>S.forEach(r,(i=>{const o=IDBKeyRange.bound([i.userId,ys],[i.userId,i.lastAcknowledgedBatchId]);return n.Qn(hr,o).next((a=>S.forEach(a,(l=>{U(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=ir(this.serializer,l);return zy(e,i.userId,u).next((()=>{}))}))))}))))}F_(e){const t=e.store(bi),n=e.store(tr);return e.store(_r).get(Ic).next((r=>{const i=[];return n.Hn(((o,a)=>{const l=new Ce(o),u=(function(B){return[0,Et(B)]})(l);i.push(t.get(u).next((h=>h?S.resolve():(B=>t.put({targetId:0,path:Et(B),sequenceNumber:r.highestListenSequenceNumber}))(l))))})).next((()=>S.waitFor(i)))}))}O_(e,t){e.createObjectStore(_a,{keyPath:LP});const n=t.store(_a),r=new Kd,i=o=>{if(r.add(o)){const a=o.lastSegment(),l=o.popLast();return n.put({collectionId:a,parent:Et(l)})}};return t.store(tr).Hn({jn:!0},((o,a)=>{const l=new Ce(o);return i(l.popLast())})).next((()=>t.store(Ri).Hn({jn:!0},(([o,a,l],u)=>{const h=gn(a);return i(h.popLast())}))))}M_(e){const t=e.store(Si);return t.Hn(((n,r)=>{const i=Oo(this.serializer,r),o=Qy(this.serializer,i);return t.put(o)}))}N_(e,t){const n=t.store(tr),r=[];return n.Hn(((i,o)=>{const a=t.store(yc),l=(function(B){return B.document?new z(Ce.fromString(B.document.name).popFirst(5)):B.noDocument?z.fromSegments(B.noDocument.path):B.unknownDocument?z.fromSegments(B.unknownDocument.path):Y(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(u))})).next((()=>S.waitFor(r)))}L_(e,t){const n=t.store(en),r=rI(this.serializer),i=new Jd(yu.b_,this.serializer.$r);return n.Qn().next((o=>{const a=new Map;return o.forEach((l=>{let u=a.get(l.userId)??le();ir(this.serializer,l).keys().forEach((h=>u=u.add(h))),a.set(l.userId,u)})),S.forEach(a,((l,u)=>{const h=new gt(u),B=_u.Qr(this.serializer,h),C=i.getIndexManager(h),g=mu.Qr(h,this.serializer,C,i.referenceDelegate);return new iI(r,g,B,C).recalculateAndSaveOverlaysForDocumentKeys(new pB(t,Ot.wn),l).next()}))}))}}function Xg(s){s.createObjectStore(bi,{keyPath:FP}).createIndex(Vd,xP,{unique:!0}),s.createObjectStore(Si,{keyPath:"targetId"}).createIndex(My,OP,{unique:!0}),s.createObjectStore(_r)}const as="IndexedDbPersistence",Th=18e5,vh=5e3,Ah="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",T0="main";class zd{constructor(e,t,n,r,i,o,a,l,u,h,B=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ct=i,this.window=o,this.document=a,this.B_=u,this.U_=h,this.k_=B,this.I_=null,this.R_=!1,this.isPrimary=!1,this.networkEnabled=!0,this.q_=null,this.inForeground=!1,this.K_=null,this.Q_=null,this.W_=Number.NEGATIVE_INFINITY,this.G_=C=>Promise.resolve(),!zd.Ye())throw new H(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new h0(this,r),this.z_=t+T0,this.serializer=new Wy(l),this.j_=new Is(this.z_,this.k_,new w0(this.serializer)),this.A_=new n0,this.V_=new u0(this.referenceDelegate,this.serializer),this.remoteDocumentCache=rI(this.serializer),this.f_=new t0,this.window&&this.window.localStorage?this.H_=this.window.localStorage:(this.H_=null,h===!1&&ze(as,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.J_().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new H(x.FAILED_PRECONDITION,Ah);return this.Y_(),this.Z_(),this.X_(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.V_.getHighestSequenceNumber(e)))})).then((e=>{this.I_=new Ot(e,this.B_)})).then((()=>{this.R_=!0})).catch((e=>(this.j_&&this.j_.close(),Promise.reject(e))))}eo(e){return this.G_=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.j_.Bn((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ct.enqueueAndForget((async()=>{this.started&&await this.J_()})))}J_(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Nl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.no(e).next((t=>{t||(this.isPrimary=!1,this.Ct.enqueueRetryable((()=>this.G_(!1))))}))})).next((()=>this.ro(e))).next((t=>this.isPrimary&&!t?this.io(e).next((()=>!1)):!!t&&this.so(e).next((()=>!0)))))).catch((e=>{if(qs(e))return G(as,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return G(as,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ct.enqueueRetryable((()=>this.G_(e))),this.isPrimary=e}))}no(e){return To(e).get(Yr).next((t=>S.resolve(this._o(t))))}oo(e){return Nl(e).delete(this.clientId)}async ao(){if(this.isPrimary&&!this.uo(this.W_,Th)){this.W_=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=rt(t,Pi);return n.Qn().next((r=>{const i=this.co(r,Th),o=r.filter((a=>i.indexOf(a)===-1));return S.forEach(o,(a=>n.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.H_)for(const t of e)this.H_.removeItem(this.lo(t.clientId))}}X_(){this.Q_=this.Ct.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.J_().then((()=>this.ao())).then((()=>this.X_()))))}_o(e){return!!e&&e.ownerId===this.clientId}ro(e){return this.U_?S.resolve(!0):To(e).get(Yr).next((t=>{if(t!==null&&this.uo(t.leaseTimestampMs,vh)&&!this.Eo(t.ownerId)){if(this._o(t)&&this.networkEnabled)return!0;if(!this._o(t)){if(!t.allowTabSynchronization)throw new H(x.FAILED_PRECONDITION,Ah);return!1}}return!(!this.networkEnabled||!this.inForeground)||Nl(e).Qn().next((n=>this.co(n,vh).find((r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&G(as,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.R_=!1,this.ho(),this.Q_&&(this.Q_.cancel(),this.Q_=null),this.To(),this.Po(),await this.j_.runTransaction("shutdown","readwrite",[Wa,Pi],(e=>{const t=new pB(e,Ot.wn);return this.io(t).next((()=>this.oo(t)))})),this.j_.close(),this.Io()}co(e,t){return e.filter((n=>this.uo(n.updateTimeMs,t)&&!this.Eo(n.clientId)))}Ro(){return this.runTransaction("getActiveClients","readonly",(e=>Nl(e).Qn().next((t=>this.co(t,Th).map((n=>n.clientId))))))}get started(){return this.R_}getGlobalsCache(){return this.A_}getMutationQueue(e,t){return mu.Qr(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new c0(e,this.serializer.$r.databaseId)}getDocumentOverlayCache(e){return _u.Qr(this.serializer,e)}getBundleCache(){return this.f_}runTransaction(e,t,n){G(as,"Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?XP:l===17?Jy:l===16?YP:l===15?Hd:l===14?jy:l===13?Ky:l===12?$P:l===11?qy:void Y(60245)})(this.k_);let o;return this.j_.runTransaction(e,r,i,(a=>(o=new pB(a,this.I_?this.I_.next():Ot.wn),t==="readwrite-primary"?this.no(o).next((l=>!!l||this.ro(o))).next((l=>{if(!l)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ct.enqueueRetryable((()=>this.G_(!1))),new H(x.FAILED_PRECONDITION,oy);return n(o)})).next((l=>this.so(o).next((()=>l)))):this.Ao(o).next((()=>n(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Ao(e){return To(e).get(Yr).next((t=>{if(t!==null&&this.uo(t.leaseTimestampMs,vh)&&!this.Eo(t.ownerId)&&!this._o(t)&&!(this.U_||this.allowTabSynchronization&&t.allowTabSynchronization))throw new H(x.FAILED_PRECONDITION,Ah)}))}so(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return To(e).put(Yr,t)}static Ye(){return Is.Ye()}io(e){const t=To(e);return t.get(Yr).next((n=>this._o(n)?(G(as,"Releasing primary lease."),t.delete(Yr)):S.resolve()))}uo(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ze(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Y_(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.K_=()=>{this.Ct.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.J_())))},this.document.addEventListener("visibilitychange",this.K_),this.inForeground=this.document.visibilityState==="visible")}To(){this.K_&&(this.document.removeEventListener("visibilitychange",this.K_),this.K_=null)}Z_(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.q_=()=>{this.ho();const t=/(?:Version|Mobile)\/1[456]/;i_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ct.enterRestrictedMode(!0),this.Ct.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.q_))}Po(){this.q_&&(this.window.removeEventListener("pagehide",this.q_),this.q_=null)}Eo(e){var t;try{const n=((t=this.H_)==null?void 0:t.getItem(this.lo(e)))!==null;return G(as,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ze(as,"Failed to get zombied client id.",n),!1}}ho(){if(this.H_)try{this.H_.setItem(this.lo(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}Io(){if(this.H_)try{this.H_.removeItem(this.lo(this.clientId))}catch{}}lo(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function To(s){return rt(s,Wa)}function Nl(s){return rt(s,Pi)}function oI(s,e){let t=s.projectId;return s.isDefaultDatabase||(t+="."+s.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=r}static mo(e,t){let n=le(),r=le();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wd(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(s,e){return z.comparator(s.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return i_()?8:ly(st())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,r,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new A0;return this.xo(e,t,o).next((a=>{if(i.result=a,this.yo)return this.Co(e,t,o,a.size)}))})).next((()=>i.result))}Co(e,t,n,r){return je(t)?S.resolve():n.documentReadCount<this.wo?(oi()<=de.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),S.resolve()):(oi()<=de.DEBUG&&G("QueryEngine","Query:",Go(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.bo*r?(oi()<=de.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):S.resolve())}vo(e,t){if(je(t))return S.resolve(null);let n=t;if(dg(n))return S.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=aB(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=le(...o);return this.So.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Fo(n,l);return this.Oo(n,h,a,u.readTime)?this.vo(e,aB(n,null,"F")):this.Mo(e,h,n,u)}))))})))))}Do(e,t,n,r){return(je(t)?(function(o){for(const a of o.stages){if(a instanceof Fs||a instanceof bg)return!1;if(a instanceof ja){if(a.condition instanceof wy&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Gr&&a.condition._expr.params[0].fieldName===fn)continue;return!1}}return!0})(t):dg(t))||r.isEqual(ne.min())?S.resolve(null):this.So.getDocuments(e,n).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,r)?S.resolve(null):(oi()<=de.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pg(t)),this.Mo(e,o,t,NE(r,Ai)).next((a=>a)))}))}Fo(e,t){let n,r;return je(e)?(n=new Te(v0),r=i=>Eu(e,i)):(n=new Te(Cd(e)),r=i=>iu(e,i)),t.forEach(((i,o)=>{r(o)&&(n=n.add(o))})),n}Oo(e,t,n,r){if(je(e))return(function(a){return a.stages.some((l=>l instanceof Fs||l instanceof bg))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}xo(e,t,n){return oi()<=de.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Pg(t)),this.So.getDocumentsMatchingQuery(e,t,jt.min(),n)}Mo(e,t,n,r){return this.So.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="LocalStore",R0=3e8;class S0{constructor(e,t,n,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new Me(ae),this.Bo=new Qn((i=>fu(i)),xd),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iI(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function lI(s,e,t,n){return new S0(s,e,t,n)}async function cI(s,e){const t=X(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let l=le();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next((u=>({$o:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function b0(s,e){const t=X(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const B=u.batch,C=B.keys();let g=S.resolve();return C.forEach((E=>{g=g.next((()=>h.getEntry(l,E))).next((P=>{const V=u.docVersions.get(E);U(V!==null,48541),P.version.compareTo(V)<0&&(B.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(l,B)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let l=le();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function uI(s){const e=X(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function P0(s,e){const t=X(s),n=e.snapshotVersion;let r=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});r=t.Lo;const a=[];e.targetChanges.forEach(((h,B)=>{const C=r.get(B);if(!C)return;a.push(t.V_.removeMatchingKeys(i,h.removedDocuments,B).next((()=>t.V_.addMatchingKeys(i,h.addedDocuments,B))));let g=C.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(B)!==null?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,n)),r=r.insert(B,g),(function(P,V,W){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=R0?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(C,g,h)&&a.push(t.V_.updateTargetData(i,g))}));let l=tt(),u=le();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(N0(i,o,e.documentUpdates).next((h=>{l=h.Ko,u=h.Qo}))),!n.isEqual(ne.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next((B=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(h)}return S.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Lo=r,i)))}function N0(s,e,t){let n=le(),r=le();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=tt();return t.forEach(((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G(Qd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Ko:o,Qo:r}}))}function O0(s,e){const t=X(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=ys),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ac(s,e){const t=X(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.V_.getTargetData(n,e).next((i=>i?(r=i,S.resolve(r)):t.V_.allocateTargetId(n).next((o=>(r=new mn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.Lo.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n}))}async function Ni(s,e,t){const n=X(s),r=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!qs(o))throw o;G(Qd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(r.target)}function IB(s,e,t){const n=X(s);let r=ne.min(),i=le();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const B=X(l),C=B.Bo.get(h);return C!==void 0?S.resolve(B.Lo.get(C)):B.V_.getTargetData(u,h)})(n,o,je(e)?e:Kt(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>n.No.getDocumentsMatchingQuery(o,e,t?r:ne.min(),t?i:le()))).next((a=>(BI(n,a),{documents:a,Wo:i})))))}function hI(s,e){const t=X(s),n=X(t.V_),r=t.Lo.get(e);return r?Promise.resolve(r.target??null):t.persistence.runTransaction("Get target data","readonly",(i=>n.ye(i,e).next((o=>(o==null?void 0:o.target)??null))))}function DB(s,e){const t=X(s),n=t.Uo.get(e)||ne.min();return t.persistence.runTransaction("Get new document changes","readonly",(r=>t.ko.getAllFromCollectionGroup(r,e,NE(n,Ai),Number.MAX_SAFE_INTEGER))).then((r=>(BI(t,r),r)))}function BI(s,e){e.forEach(((t,n)=>{const r=n.key.getCollectionGroup(),i=s.Uo.get(r)||ne.min();n.readTime.compareTo(i)>0&&s.Uo.set(r,n.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(ze(t),this.Xo=!1):G("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="RemoteStore";class x0{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new jn(1e3),this.ca=new jn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{n.enqueueAndForget((async()=>{Ks(this)&&(G(vn,"Restarting streams for network reachability change."),await(async function(l){const u=X(l);u.la.add(4),await Qa(u),u.Ta.set("Unknown"),u.la.delete(4),await Iu(u)})(this))}))})),this.Ta=new F0(n,r)}}async function Iu(s){if(Ks(s))for(const e of s.Ea)await e(!0)}async function Qa(s){for(const e of s.Ea)await e(!1)}function wB(s,e){return s.oa.get(e)||void 0}function Du(s,e){const t=X(s),n=wB(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const r=(function(a,l){const u=wB(a,l);u!==void 0&&a.aa.delete(u);const h=(function(C,g){return g%2!=0?C.ca.next():C.ua.next()})(a,l);return a.oa.set(l,h),a.aa.set(h,l),h})(t,e.targetId);G(vn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new mn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(r,i),Xd(t)?Yd(t):Xi(t).Yt()&&$d(t,i)}function Oi(s,e){const t=X(s),n=Xi(t),r=wB(t,e);G(vn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t._a.delete(r),t.oa.delete(e),t.aa.delete(r),n.Yt()&&dI(t,r),t._a.size===0&&(n.Yt()?n.en():Ks(t)&&t.Ta.set("Unknown"))}function $d(s,e){if(s.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=s.aa.get(e.targetId);if(t===void 0)return void G(vn,"SDK target ID not found for remote ID: "+e.targetId);const n=s.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Xi(s).Pn(e)}function dI(s,e){s.Pa.J(e),Xi(s).In(e)}function Yd(s){s.Pa=new dS({getRemoteKeysForTarget:e=>{const t=s.aa.get(e);return t!==void 0?s.remoteSyncer.getRemoteKeysForTarget(t):le()},ye:e=>s._a.get(e)||null,Ve:()=>s.datastore.serializer.databaseId}),Xi(s).start(),s.Ta.ea()}function Xd(s){return Ks(s)&&!Xi(s).Jt()&&s._a.size>0}function Ks(s){return X(s).la.size===0}function fI(s){s.Pa=void 0}async function L0(s){s.Ta.set("Online")}async function k0(s){s._a.forEach(((e,t)=>{$d(s,e)}))}async function V0(s,e){fI(s),Xd(s)?(s.Ta.ra(e),Yd(s)):s.Ta.set("Unknown")}async function M0(s,e,t){if(s.Ta.set("Online"),e instanceof HE&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds){if(r._a.has(a)){const l=r.aa.get(a);l!==void 0&&(await r.remoteSyncer.rejectListen(l,o),r.oa.delete(l),r.aa.delete(a)),r._a.delete(a)}r.Pa.removeTarget(a)}})(s,e)}catch(n){G(vn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rc(s,n)}else if(e instanceof Kl?s.Pa._e(e):e instanceof GE?s.Pa.he(e):s.Pa.ue(e),!t.isEqual(ne.min()))try{const n=await uI(s.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Pa.fe(o);a.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const B=i._a.get(h);B&&i._a.set(h,B.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,h)=>{const B=i._a.get(u);if(!B)return;i._a.set(u,B.withResumeToken(Ge.EMPTY_BYTE_STRING,B.snapshotVersion)),dI(i,u);const C=new mn(B.target,u,h,B.sequenceNumber);$d(i,C)}));const l=(function(h,B){const C=new Map;B.targetChanges.forEach(((E,P)=>{const V=h.aa.get(P);V!==void 0&&C.set(V,E)}));let g=new Me(ae);return B.targetMismatches.forEach(((E,P)=>{const V=h.aa.get(E);V!==void 0&&(g=g.insert(V,P))})),new Wi(B.snapshotVersion,C,g,B.documentUpdates,B.augmentedDocumentUpdates,B.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(l)})(s,t)}catch(n){G(vn,"Failed to raise snapshot:",n),await Rc(s,n)}}async function Rc(s,e,t){if(!qs(e))throw e;s.la.add(1),await Qa(s),s.Ta.set("Offline"),t||(t=()=>uI(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{G(vn,"Retrying IndexedDB access"),await t(),s.la.delete(1),await Iu(s)}))}function CI(s,e){return e().catch((t=>Rc(s,t,e)))}async function Yi(s){const e=X(s),t=Ls(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:ys;for(;G0(e);)try{const r=await O0(e.localStore,n);if(r===null){e.sa.length===0&&t.en();break}n=r.batchId,H0(e,r)}catch(r){await Rc(e,r)}pI(e)&&gI(e)}function G0(s){return Ks(s)&&s.sa.length<10}function H0(s,e){s.sa.push(e);const t=Ls(s);t.Yt()&&t.Rn&&t.An(e.mutations)}function pI(s){return Ks(s)&&!Ls(s).Jt()&&s.sa.length>0}function gI(s){Ls(s).start()}async function U0(s){Ls(s).fn()}async function q0(s){const e=Ls(s);for(const t of s.sa)e.An(t.mutations)}async function K0(s,e,t){const n=s.sa.shift(),r=kd.from(n,e,t);await CI(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await Yi(s)}async function j0(s,e){e&&Ls(s).Rn&&await(async function(n,r){if((function(o){return oS(o)&&o!==x.ABORTED})(r.code)){const i=n.sa.shift();Ls(n).Xt(),await CI(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Yi(n)}})(s,e),pI(s)&&gI(s)}async function Zg(s,e){const t=X(s);t.asyncQueue.verifyOperationInProgress(),G(vn,"RemoteStore received new credentials");const n=Ks(t);t.la.add(3),await Qa(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Iu(t)}async function TB(s,e){const t=X(s);e?(t.la.delete(2),await Iu(t)):e||(t.la.add(2),await Qa(t),t.Ta.set("Unknown"))}function Xi(s){return s.Ia||(s.Ia=(function(t,n,r){const i=X(t);return i.pn(),new VS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ct:L0.bind(null,s),Et:k0.bind(null,s),Tt:V0.bind(null,s),Tn:M0.bind(null,s)}),s.Ea.push((async e=>{e?(s.Ia.Xt(),Xd(s)?Yd(s):s.Ta.set("Unknown")):(await s.Ia.stop(),fI(s))}))),s.Ia}function Ls(s){return s.Ra||(s.Ra=(function(t,n,r){const i=X(t);return i.pn(),new MS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ct:()=>Promise.resolve(),Et:U0.bind(null,s),Tt:j0.bind(null,s),Vn:q0.bind(null,s),dn:K0.bind(null,s)}),s.Ea.push((async e=>{e?(s.Ra.Xt(),await Yi(s)):(await s.Ra.stop(),s.sa.length>0&&(G(vn,`Stopping write stream with ${s.sa.length} pending writes`),s.sa=[]))}))),s.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new on,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new ef(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(s,e){if(ze("AsyncQueue",`${e}: ${s}`),qs(s))return new H(x.UNAVAILABLE,`${e}: ${s}`);throw s}const zo="IndexBackfiller";class J0{constructor(e,t){this.asyncQueue=e,this.Da=t,this.task=null}start(){this.xa(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}xa(e){G(zo,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.Da.Ca();G(zo,`Documents written: ${t}`)}catch(t){qs(t)?G(zo,"Ignoring IndexedDB error during index backfill: ",t):await Us(t)}await this.xa(6e4)}))}}class z0{constructor(e,t){this.localStore=e,this.persistence=t}async Ca(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.Fa(t,e)))}Fa(e,t){const n=new Set;let r=t,i=!0;return S.doWhile((()=>i===!0&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return G(zo,`Processing collection: ${o}`),this.Oa(e,o,r).next((a=>{r-=a,n.add(o)}));i=!1})))).next((()=>t-r))}Oa(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.Ma(r,i))).next((a=>(G(zo,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}Ma(e,t){let n=e;return t.changes.forEach(((r,i)=>{const o=OE(i);Bd(o,n)>0&&(n=o)})),new jt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firestore_clients";function em(s,e){return`${mI}_${s}_${e}`}const _I="firestore_mutations";function tm(s,e,t){let n=`${_I}_${s}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const EI="firestore_targets";function Rh(s,e){return`${EI}_${s}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="SharedClientState";class Sc{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Na(e,t,n){const r=JSON.parse(n);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new H(r.error.code,r.error.message))),o?new Sc(e,t,r.state,i):(ze(dn,`Failed to parse mutation state for ID '${t}': ${n}`),null)}La(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Na(e,t){const n=JSON.parse(t);let r,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(r=new H(n.error.code,n.error.message))),i?new Wo(e,n.state,r):(ze(dn,`Failed to parse target state for ID '${e}': ${t}`),null)}La(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Na(e,t){const n=JSON.parse(t);let r=typeof n=="object"&&n.activeTargetIds instanceof Array,i=pd();for(let o=0;r&&o<n.activeTargetIds.length;++o)r=dE(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return r?new bc(e,i):(ze(dn,`Failed to parse client data for instance '${e}': ${t}`),null)}}class tf{constructor(e,t){this.clientId=e,this.onlineState=t}static Na(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new tf(t.clientId,t.onlineState):(ze(dn,`Failed to parse online state: ${e}`),null)}}class vB{constructor(){this.activeTargetIds=pd()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sh{constructor(e,t,n,r,i){this.window=e,this.Ct=t,this.persistenceKey=n,this.ka=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.qa=this.$a.bind(this),this.Ka=new Me(ae),this.started=!1,this.Qa=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Wa=em(this.persistenceKey,this.ka),this.Ga=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Ka=this.Ka.insert(this.ka,new vB),this.za=new RegExp(`^${mI}_${o}_([^_]*)$`),this.ja=new RegExp(`^${_I}_${o}_(\\d+)(?:_(.*))?$`),this.Ha=new RegExp(`^${EI}_${o}_(\\d+)$`),this.Ja=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this.Ya=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.qa)}static Ye(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ro();for(const n of e){if(n===this.ka)continue;const r=this.getItem(em(this.persistenceKey,n));if(r){const i=bc.Na(n,r);i&&(this.Ka=this.Ka.insert(i.clientId,i))}}this.Za();const t=this.storage.getItem(this.Ja);if(t){const n=this.Xa(t);n&&this.eu(n)}for(const n of this.Qa)this.$a(n);this.Qa=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ga,JSON.stringify(e))}getAllActiveQueryTargets(){return this.tu(this.Ka)}isActiveQueryTarget(e){let t=!1;return this.Ka.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.nu(e,"pending")}updateMutationState(e,t,n){this.nu(e,t,n),this.ru(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Rh(this.persistenceKey,e));if(r){const i=Wo.Na(e,r);i&&(n=i.state)}}return t&&this.iu.Ba(e),this.Za(),n}removeLocalQueryTarget(e){this.iu.Ua(e),this.Za()}isLocalQueryTarget(e){return this.iu.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rh(this.persistenceKey,e))}updateQueryState(e,t,n){this.su(e,t,n)}handleUserChange(e,t,n){t.forEach((r=>{this.ru(r)})),this.currentUser=e,n.forEach((r=>{this.addPendingMutation(r)}))}setOnlineState(e){this._u(e)}notifyBundleLoaded(e){this.ou(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.qa),this.removeItem(this.Wa),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return G(dn,"READ",e,t),t}setItem(e,t){G(dn,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){G(dn,"REMOVE",e),this.storage.removeItem(e)}$a(e){const t=e;if(t.storageArea===this.storage){if(G(dn,"EVENT",t.key,t.newValue),t.key===this.Wa)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ct.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.za.test(t.key)){if(t.newValue==null){const n=this.au(t.key);return this.uu(n,null)}{const n=this.cu(t.key,t.newValue);if(n)return this.uu(n.clientId,n)}}else if(this.ja.test(t.key)){if(t.newValue!==null){const n=this.lu(t.key,t.newValue);if(n)return this.Eu(n)}}else if(this.Ha.test(t.key)){if(t.newValue!==null){const n=this.hu(t.key,t.newValue);if(n)return this.Tu(n)}}else if(t.key===this.Ja){if(t.newValue!==null){const n=this.Xa(t.newValue);if(n)return this.eu(n)}}else if(t.key===this.Ga){const n=(function(i){let o=Ot.wn;if(i!=null)try{const a=JSON.parse(i);U(typeof a=="number",30636,{Pu:i}),o=a}catch(a){ze(dn,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);n!==Ot.wn&&this.sequenceNumberHandler(n)}else if(t.key===this.Ya){const n=this.Iu(t.newValue);await Promise.all(n.map((r=>this.syncEngine.Ru(r))))}}}else this.Qa.push(t)}))}}get iu(){return this.Ka.get(this.ka)}Za(){this.setItem(this.Wa,this.iu.La())}nu(e,t,n){const r=new Sc(this.currentUser,e,t,n),i=tm(this.persistenceKey,this.currentUser,e);this.setItem(i,r.La())}ru(e){const t=tm(this.persistenceKey,this.currentUser,e);this.removeItem(t)}_u(e){const t={clientId:this.ka,onlineState:e};this.storage.setItem(this.Ja,JSON.stringify(t))}su(e,t,n){const r=Rh(this.persistenceKey,e),i=new Wo(e,t,n);this.setItem(r,i.La())}ou(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ya,t)}au(e){const t=this.za.exec(e);return t?t[1]:null}cu(e,t){const n=this.au(e);return bc.Na(n,t)}lu(e,t){const n=this.ja.exec(e),r=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Sc.Na(new gt(i),r,t)}hu(e,t){const n=this.Ha.exec(e),r=Number(n[1]);return Wo.Na(r,t)}Xa(e){return tf.Na(e)}Iu(e){return JSON.parse(e)}async Eu(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Au(e.batchId,e.state,e.error);G(dn,`Ignoring mutation for non-active user ${e.user.uid}`)}Tu(e){return this.syncEngine.Vu(e.targetId,e.state,e.error)}uu(e,t){const n=t?this.Ka.insert(e,t):this.Ka.remove(e),r=this.tu(this.Ka),i=this.tu(n),o=[],a=[];return i.forEach((l=>{r.has(l)||o.push(l)})),r.forEach((l=>{i.has(l)||a.push(l)})),this.syncEngine.du(o,a).then((()=>{this.Ka=n}))}eu(e){this.Ka.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}tu(e){let t=pd();return e.forEach(((n,r)=>{t=t.unionWith(r.activeTargetIds)})),t}}class yI{constructor(){this.fu=new vB,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new vB,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){return typeof window<"u"?window:null}function $l(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{static emptySet(e){return new Er(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(t,n)=>z.comparator(t.key,n.key),this.keyedMap=sr(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Er;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.pu=new Me(z.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Y(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Fi{constructor(e,t,n,r,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Fi(e,t,Er.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class Q0{constructor(){this.queries=sm(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const r=X(t),i=r.queries;r.queries=sm(),i.forEach(((o,a)=>{for(const l of a.bu)l.onError(n)}))})(this,new H(x.ABORTED,"Firestore shutting down"))}}function sm(){return new Qn((s=>Ly(s)),du)}async function nf(s,e){const t=X(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.Su()&&e.vu()&&(n=2):(i=new W0,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(r,!0);break;case 1:i.wu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=wu(o,`Initialization of query '${je(e.query)?Vn(e.query):Go(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&rf(t)}async function sf(s,e){const t=X(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?r=e.vu()?0:1:!i.Su()&&e.vu()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function $0(s,e){const t=X(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.bu)a.Cu(r)&&(n=!0);o.wu=r}}n&&rf(t)}function Y0(s,e,t){const n=X(s),r=n.queries.get(e);if(r)for(const i of r.bu)i.onError(t);n.queries.delete(e)}function rf(s){s.Du.forEach((e=>{e.next()}))}var AB;(function(s){s.Default="default",s.Cache="cache"})(AB||(AB={}));class of{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new Fi(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==AB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.key=e}}class wI{constructor(e){this.key=e}}class X0{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=le(),this.mutatedKeys=le(),this.Ju=je(e)?yB(e):Cd(e),this.Yu=new Er(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new nm,r=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const[l,u]=this.tc(this.query,r);e.inorderTraversal(((B,C)=>{const g=r.get(B),E=nI(this.query,C)?C:null,P=!!g&&this.mutatedKeys.has(g.key),V=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let W=!1;g&&E?g.data.isEqual(E.data)?P!==V&&(n.track({type:3,doc:E}),W=!0):this.nc(g,E)||(n.track({type:2,doc:E}),W=!0,(l&&this.Ju(E,l)>0||u&&this.Ju(E,u)<0)&&(a=!0)):!g&&E?(n.track({type:0,doc:E}),W=!0):g&&!E&&(n.track({type:1,doc:g}),W=!0,(l||u)&&(a=!0)),W&&(E?(o=o.add(E),i=V?i.add(B):i.delete(B)):(o=o.delete(B),i=i.delete(B)))}));const h=this.rc(this.query);if(h)if(je(this.query)){const B=[];o.forEach((E=>B.push(E)));const C=tI(this.query,B);let g=new Er(yB(this.query));for(const E of C)g=g.add(E);o.forEach((E=>{g.has(E.key)||(i=i.delete(E.key),n.track({type:1,doc:E}))})),o=g}else{const B=this.sc(this.query);for(;o.size>h;){const C=B==="F"?o.last():o.first();o=o.delete(C.key),i=i.delete(C.key),n.track({type:1,doc:C})}}return{Yu:o,ec:n,Oo:a,mutatedKeys:i}}rc(e){var t;return je(e)?(t=wh(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(je(e)){const t=wh(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(je(e)){const r=(n=wh(e))==null?void 0:n.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort(((h,B)=>(function(g,E){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{we:V})}};return P(g)-P(E)})(h.type,B.type)||this.Ju(h.doc,B.doc))),this._c(n),r=r??!1;const a=t&&!r?this.oc():[],l=this.Hu.size===0&&this.current&&!r?1:0,u=l!==this.ju;return this.ju=l,o.length!==0||u?{snapshot:new Fi(this.query,e.Yu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:a}:{ac:a}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new nm,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=le(),this.Yu.forEach((n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))}));const t=[];return e.forEach((n=>{this.Hu.has(n)||t.push(new wI(n))})),this.Hu.forEach((n=>{e.has(n)||t.push(new DI(n))})),t}cc(e){this.zu=e.Wo,this.Hu=le();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Fi.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Ur="SyncEngine";class Z0{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class eN{constructor(e){this.key=e,this.Ec=!1}}class tN{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new Qn((a=>Ly(a)),du),this.Pc=new Map,this.Ic=new Set,this.Rc=new Me(z.comparator),this.Ac=new Map,this.Vc=new jd,this.dc={},this.fc=new Map,this.mc=jn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function nN(s,e,t=!0){const n=Tu(s);let r;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lc()):r=await TI(n,e,t,!0),r}async function sN(s,e){const t=Tu(s);await TI(t,e,!0,!1)}async function TI(s,e,t,n){const r=await Ac(s.localStore,je(e)?e:Kt(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await af(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&Du(s.remoteStore,r),a}async function af(s,e,t,n,r){s.yc=(B,C,g)=>(async function(P,V,W,Z){let se=V.view.Xu(W);se.Oo&&(se=await IB(P.localStore,V.query,!1).then((({documents:T})=>V.view.Xu(T,se))));const ye=Z&&Z.targetChanges.get(V.targetId),ge=Z&&Z.targetMismatches.get(V.targetId)!=null,ue=V.view.applyChanges(se,P.isPrimaryClient,ye,ge);return RB(P,V.targetId,ue.ac),ue.snapshot})(s,B,C,g);const i=await IB(s.localStore,e,!0),o=new X0(e,i.Wo),a=o.Xu(i.documents),l=Ha.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),u=o.applyChanges(a,s.isPrimaryClient,l);RB(s,t,u.ac);const h=new Z0(e,t,o);return s.Tc.set(e,h),s.Pc.has(t)?s.Pc.get(t).push(e):s.Pc.set(t,[e]),u.snapshot}async function rN(s,e,t){const n=X(s),r=n.Tc.get(e),i=n.Pc.get(r.targetId);if(i.length>1)return n.Pc.set(r.targetId,i.filter((o=>!du(o,e)))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ni(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&Oi(n.remoteStore,r.targetId),xi(n,r.targetId)})).catch(Us)):(xi(n,r.targetId),await Ni(n.localStore,r.targetId,!0))}async function iN(s,e){const t=X(s),n=t.Tc.get(e),r=t.Pc.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Oi(t.remoteStore,n.targetId))}async function oN(s,e,t){const n=hf(s);try{const r=await(function(o,a){const l=X(o),u=De.now(),h=a.reduce(((g,E)=>g.add(E.key)),le());let B,C;return l.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let E=tt(),P=le();return l.ko.getEntries(g,h).next((V=>{E=V,E.forEach(((W,Z)=>{Z.isValidDocument()||(P=P.add(W))}))})).next((()=>l.localDocuments.getOverlayedDocuments(g,E))).next((V=>{B=V;const W=[];for(const Z of a){const se=JR(Z,B.get(Z.key).overlayedDocument);se!=null&&W.push(new Wn(Z.key,se,gE(se.value.mapValue),ut.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,W,a)})).next((V=>{C=V;const W=V.applyToLocalDocumentSet(B,P);return l.documentOverlayCache.saveOverlays(g,V.batchId,W)}))})).then((()=>({batchId:C.batchId,changes:VE(B)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,a,l){let u=o.dc[o.currentUser.toKey()];u||(u=new Me(ae)),u=u.insert(a,l),o.dc[o.currentUser.toKey()]=u})(n,r.batchId,t),await js(n,r.changes),await Yi(n.remoteStore)}catch(r){const i=wu(r,"Failed to persist write");t.reject(i)}}async function vI(s,e){const t=X(s);try{const n=await P0(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Ac.get(i);o&&(U(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.Ec=!0:r.modifiedDocuments.size>0?U(o.Ec,14607):r.removedDocuments.size>0&&(U(o.Ec,42227),o.Ec=!1))})),await js(t,n,e)}catch(n){await Us(n)}}function rm(s,e,t){const n=X(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tc.forEach(((i,o)=>{const a=o.view.xu(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const l=X(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,B)=>{for(const C of B.bu)C.xu(a)&&(u=!0)})),u&&rf(l)})(n.eventManager,e),r.length&&n.hc.Tn(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function aN(s,e,t){const n=X(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Ac.get(e),i=r&&r.key;if(i){let o=new Me(z.comparator);o=o.insert(i,Ke.newNoDocument(i,ne.min()));const a=le().add(i),l=new Wi(ne.min(),new Map,new Me(ae),o,tt(),a);await vI(n,l),n.Rc=n.Rc.remove(i),n.Ac.delete(e),uf(n)}else await Ni(n.localStore,e,!1).then((()=>xi(n,e,t))).catch(Us)}async function lN(s,e){const t=X(s),n=e.batch.batchId;try{const r=await b0(t.localStore,e);cf(t,n,null),lf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await js(t,r)}catch(r){await Us(r)}}async function cN(s,e,t){const n=X(s);try{const r=await(function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((B=>(U(B!==null,37113),h=B.keys(),l.mutationQueue.removeMutationBatch(u,B)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(n.localStore,e);cf(n,e,t),lf(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await js(n,r)}catch(r){await Us(r)}}async function uN(s,e){const t=X(s);Ks(t.remoteStore)||G(Ur,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const a=X(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l)))})(t.localStore);if(n===ys)return void e.resolve();const r=t.fc.get(n)||[];r.push(e),t.fc.set(n,r)}catch(n){const r=wu(n,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function lf(s,e){(s.fc.get(e)||[]).forEach((t=>{t.resolve()})),s.fc.delete(e)}function cf(s,e,t){const n=X(s);let r=n.dc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.dc[n.currentUser.toKey()]=r}}function xi(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Pc.get(e))s.Tc.delete(n),t&&s.hc.wc(n,t);s.Pc.delete(e),s.isPrimaryClient&&s.Vc.e_(e).forEach((n=>{s.Vc.containsKey(n)||AI(s,n)}))}function AI(s,e){s.Ic.delete(e.path.canonicalString());const t=s.Rc.get(e);t!==null&&(Oi(s.remoteStore,t),s.Rc=s.Rc.remove(e),s.Ac.delete(t),uf(s))}function RB(s,e,t){for(const n of t)n instanceof DI?(s.Vc.addReference(n.key,e),hN(s,n)):n instanceof wI?(G(Ur,"Document no longer in limbo: "+n.key),s.Vc.removeReference(n.key,e),s.Vc.containsKey(n.key)||AI(s,n.key)):Y(19791,{bc:n})}function hN(s,e){const t=e.key,n=t.path.canonicalString();s.Rc.get(t)||s.Ic.has(n)||(G(Ur,"New document in limbo: "+t),s.Ic.add(n),uf(s))}function uf(s){for(;s.Ic.size>0&&s.Rc.size<s.maxConcurrentLimboResolutions;){const e=s.Ic.values().next().value;s.Ic.delete(e);const t=new z(Ce.fromString(e)),n=s.mc.next();s.Ac.set(n,new eN(t)),s.Rc=s.Rc.insert(t,n),Du(s.remoteStore,new mn(Kt(Ga(t.path)),n,"TargetPurposeLimboResolution",Ot.wn))}}async function js(s,e,t){const n=X(s),r=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach(((a,l)=>{o.push(n.yc(l,e,t).then((u=>{var h;if((u||t)&&n.isPrimaryClient){const B=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,B?"current":"not-current")}if(u){r.push(u);const B=Wd.mo(l.targetId,u);i.push(B)}})))})),await Promise.all(o),n.hc.Tn(r),await(async function(l,u){const h=X(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(B=>S.forEach(u,(C=>S.forEach(C.Vo,(g=>h.persistence.referenceDelegate.addReference(B,C.targetId,g))).next((()=>S.forEach(C.fo,(g=>h.persistence.referenceDelegate.removeReference(B,C.targetId,g)))))))))}catch(B){if(!qs(B))throw B;G(Qd,"Failed to update sequence numbers: "+B)}for(const B of u){const C=B.targetId;if(!B.fromCache){const g=h.Lo.get(C),E=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(E);h.Lo=h.Lo.insert(C,P)}}})(n.localStore,i))}async function BN(s,e){const t=X(s);if(!t.currentUser.isEqual(e)){G(Ur,"User change. New user:",e.toKey());const n=await cI(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((a=>{a.forEach((l=>{l.reject(new H(x.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await js(t,n.$o)}}function dN(s,e){const t=X(s),n=t.Ac.get(e);if(n&&n.Ec)return le().add(n.key);{let r=le();const i=t.Pc.get(e);if(!i)return r;for(const o of i??[]){const a=t.Tc.get(o);r=r.unionWith(a.view.Zu)}return r}}async function fN(s,e){const t=X(s),n=await IB(t.localStore,e.query,!0),r=e.view.cc(n);return t.isPrimaryClient&&RB(t,e.targetId,r.ac),r}async function CN(s,e){const t=X(s);return DB(t.localStore,e).then((n=>js(t,n)))}async function pN(s,e,t,n){const r=X(s),i=await(function(a,l){const u=X(a),h=X(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",(B=>h.Wr(B,l).next((C=>C?u.localDocuments.getDocuments(B,C):S.resolve(null)))))})(r.localStore,e);i!==null?(t==="pending"?await Yi(r.remoteStore):t==="acknowledged"||t==="rejected"?(cf(r,e,n||null),lf(r,e),(function(a,l){X(X(a).mutationQueue).Hr(l)})(r.localStore,e)):Y(6720,"Unknown batchState",{Sc:t}),await js(r,i)):G(Ur,"Cannot apply mutation batch with id: "+e)}async function gN(s,e){const t=X(s);if(Tu(t),hf(t),e===!0&&t.gc!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),r=await im(t,n.toArray());t.gc=!0,await TB(t.remoteStore,!0);for(const i of r)Du(t.remoteStore,i)}else if(e===!1&&t.gc!==!1){const n=[];let r=Promise.resolve();t.Pc.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):r=r.then((()=>(xi(t,o),Ni(t.localStore,o,!0)))),Oi(t.remoteStore,o)})),await r,await im(t,n),(function(o){const a=X(o);a.Ac.forEach(((l,u)=>{Oi(a.remoteStore,u)})),a.Vc.t_(),a.Ac=new Map,a.Rc=new Me(z.comparator)})(t),t.gc=!1,await TB(t.remoteStore,!1)}}async function im(s,e,t){const n=X(s),r=[],i=[];for(const o of e){let a;const l=n.Pc.get(o);if(l&&l.length!==0){a=await Ac(n.localStore,je(l[0])?l[0]:Kt(l[0]));for(const u of l){const h=n.Tc.get(u),B=await fN(n,h);B.snapshot&&i.push(B.snapshot)}}else{const u=await hI(n.localStore,o);a=await Ac(n.localStore,u),await af(n,RI(u),o,!1,a.resumeToken)}r.push(a)}return n.hc.Tn(i),r}function RI(s){return Pn(s)?s:FE(s.path,s.collectionGroup,s.orderBy,s.filters,s.limit,"F",s.startAt,s.endAt)}function mN(s){return(function(t){return X(X(t).persistence).Ro()})(X(s).localStore)}async function _N(s,e,t,n){const r=X(s);if(r.gc)return void G(Ur,"Ignoring unexpected query state notification.");const i=r.Pc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{let o;if(je(i[0]))switch(kn(i[0])){case"collection_group":case"collection":o=await DB(r.localStore,Sy(i[0]));break;case"documents":o=await(function(u,h){const B=X(u),C=le(...mc(h).map((g=>z.fromPath(g))));return B.persistence.runTransaction("Get documents for pipeline","readonly",(g=>B.ko.getEntries(g,C))).then((g=>g))})(r.localStore,i[0]);break;default:ln(""),o=sr()}else o=await DB(r.localStore,(function(u){return u.collectionGroup||(u.path.length%2==1?u.path.lastSegment():u.path.get(u.path.length-2))})(i[0]));const a=Wi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ge.EMPTY_BYTE_STRING);await js(r,o,a);break}case"rejected":await Ni(r.localStore,e,!0),xi(r,e,n);break;default:Y(64155,t)}}async function EN(s,e,t){const n=Tu(s);if(n.gc){for(const r of e){if(n.Pc.has(r)&&n.sharedClientState.isActiveQueryTarget(r)){G(Ur,"Adding an already active target "+r);continue}const i=await hI(n.localStore,r),o=await Ac(n.localStore,i);await af(n,RI(i),o.targetId,!1,o.resumeToken),Du(n.remoteStore,o)}for(const r of t)n.Pc.has(r)&&await Ni(n.localStore,r,!1).then((()=>{Oi(n.remoteStore,r),xi(n,r)})).catch(Us)}}function Tu(s){const e=X(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=vI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aN.bind(null,e),e.hc.Tn=$0.bind(null,e.eventManager),e.hc.wc=Y0.bind(null,e.eventManager),e}function hf(s){const e=X(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cN.bind(null,e),e}class Ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ou(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return lI(this.persistence,new aI,e.initialUser,this.serializer)}Dc(e){return new Jd(yu.b_,this.serializer)}vc(e){return new yI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ea.provider={build:()=>new Ea};class yN extends Ea{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){U(this.persistence.referenceDelegate instanceof vc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new uy(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new Jd((n=>vc.b_(n,t)),this.serializer)}}class SI extends Ea{constructor(e,t,n){super(),this.Oc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Oc.initialize(this,e),await hf(this.Oc.syncEngine),await Yi(this.Oc.remoteStore),await this.persistence.eo((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}xc(e){return lI(this.persistence,new aI,e.initialUser,this.serializer)}Cc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new uy(n,e.asyncQueue,t)}Fc(e,t){const n=new z0(t,this.persistence);return new J0(e.asyncQueue,n)}Dc(e){const t=oI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new zd(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,II(),$l(),this.serializer,this.sharedClientState,!!this.forceOwnership)}vc(e){return new yI}}class IN extends SI{constructor(e,t){super(e,t,!1),this.Oc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Oc.syncEngine;this.sharedClientState instanceof Sh&&(this.sharedClientState.syncEngine={Au:pN.bind(null,t),Vu:_N.bind(null,t),du:EN.bind(null,t),Ro:mN.bind(null,t),Ru:CN.bind(null,t)},await this.sharedClientState.start()),await this.persistence.eo((async n=>{await gN(this.Oc.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}vc(e){const t=II();if(!Sh.Ye(t))throw new H(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=oI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Sh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ya{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>rm(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=BN.bind(null,this.syncEngine),await TB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Q0})()}createDatastore(e){const t=ou(e.databaseInfo.databaseId),n=kS(e.databaseInfo);return US(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,o,a){return new x0(n,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>rm(this.syncEngine,t,0)),(function(){return yg.Ye()?new yg:new OS})())}createSyncEngine(e,t){return(function(r,i,o,a,l,u,h){const B=new tN(r,i,o,a,l,u);return h&&(B.gc=!0),B})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=X(r);G(vn,"RemoteStore shutting down."),i.la.add(5),await Qa(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ya.provider={build:()=>new ya};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="FirestoreClient";class DN{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=gt.UNAUTHENTICATED,this.clientId=id.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{G(ks,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(G(ks,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new on;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=wu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function bh(s,e){s.asyncQueue.verifyOperationInProgress(),G(ks,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await cI(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function om(s,e){s.asyncQueue.verifyOperationInProgress();const t=await wN(s);G(ks,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>Zg(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>Zg(e.remoteStore,r))),s._onlineComponents=e}async function wN(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){G(ks,"Using user provided OfflineComponentProvider");try{await bh(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===x.FAILED_PRECONDITION||r.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;ln("Error using user provided cache. Falling back to memory cache: "+t),await bh(s,new Ea)}}else G(ks,"Using default OfflineComponentProvider"),await bh(s,new yN(void 0));return s._offlineComponents}async function bI(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(G(ks,"Using user provided OnlineComponentProvider"),await om(s,s._uninitializedComponentsProvider._online)):(G(ks,"Using default OnlineComponentProvider"),await om(s,new ya))),s._onlineComponents}function PI(s){return bI(s).then((e=>e.syncEngine))}async function Pc(s){const e=await bI(s),t=e.eventManager;return t.onListen=nN.bind(null,e.syncEngine),t.onUnlisten=rN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iN.bind(null,e.syncEngine),t}function TN(s,e,t,n){const r=new Zd(n),i=new of(e,r,t);return s.asyncQueue.enqueueAndForget((async()=>nf(await Pc(s),i))),()=>{r.Va(),s.asyncQueue.enqueueAndForget((async()=>sf(await Pc(s),i)))}}function vN(s,e,t={}){const n=new on;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new Zd({next:C=>{h.Va(),o.enqueueAndForget((()=>sf(i,B)));const g=C.docs.has(a);!g&&C.fromCache?u.reject(new H(x.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&C.fromCache&&l&&l.source==="server"?u.reject(new H(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(C)},error:C=>u.reject(C)}),B=new of(Ga(a.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return nf(i,B)})(await Pc(s),s.asyncQueue,e,t,n))),n.promise}function AN(s,e,t={}){const n=new on;return s.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,u){const h=new Zd({next:C=>{h.Va(),o.enqueueAndForget((()=>sf(i,B))),C.fromCache&&l.source==="server"?u.reject(new H(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(C)},error:C=>u.reject(C)}),B=new of(a instanceof qo?vP(a):a,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return nf(i,B)})(await Pc(s),s.asyncQueue,e,t,n))),n.promise}function RN(s,e){const t=new on;return s.asyncQueue.enqueueAndForget((async()=>oN(await PI(s),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NI=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ns("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},SN=class extends NI{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{convertValue(e,t="none"){switch(Xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Hs(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[Sr].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>Fe(o.doubleValue)));return new Lt(t)}convertGeoPoint(e){return new Dn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ka(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const t=Un(e);return new De(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ce.fromString(e);U(ZE(n),9688,{name:e});const r=new Rr(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||ze(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="AsyncQueue";class lm{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new sy(this,"async_queue_retry"),this.Hc=()=>{const n=$l();n&&G(am,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=$l();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=$l();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new on;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!qs(e))throw e;G(am,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((n=>{throw this.Wc=n,this.Gc=!1,ze("INTERNAL UNHANDLED ERROR: ",cm(n)),n})).then((n=>(this.Gc=!1,n))))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=ef.createAndSchedule(this,e,t,n,(i=>this.el(i)));return this.Qc.push(r),r}Yc(){this.Wc&&Y(47125,{tl:cm(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function cm(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class An extends Id{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new lm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lm(e),this._firestoreClient=void 0,await e}}}function dL(s,e,t){t||(t=uc);const n=Qc(s,"firestore");if(n.isInitialized(t)){const r=n.getImmediate({identifier:t}),i=n.getOptions(t);if(As(i,e))return r;throw new H(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new H(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cy)throw new H(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Lr(e.host)&&jB(e.host),n.initialize({options:e,instanceIdentifier:t})}function Zi(s){if(s._terminated)throw new H(x.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||PN(s),s._firestoreClient}function PN(s){var n,r,i,o;const e=s._freezeSettings(),t=KS(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,(r=s._app)==null?void 0:r.options.apiKey,e);s._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new DN(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(s._componentsProvider))}function fL(s){return(function(t){const n=new on;return t.asyncQueue.enqueueAndForget((async()=>uN(await PI(t),n))),n.promise})(Zi(s=xt(s,An)))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends bN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}class Fo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yr extends NI{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",yr._jsonSchema={type:Ye("string",yr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Yl extends yr{data(e={}){return super.data(e)}}class Ir{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fo(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Yl(this._firestore,this._userDataWriter,n.key,n,new Fo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{je(r._snapshot.query)?yB(r._snapshot.query):Cd(r.query._query);const l=new Yl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Fo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new Yl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Fo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:NN(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ir._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=id.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NN(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:s})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir._jsonSchemaVersion="firestore/querySnapshot/1.0",Ir._jsonSchema={type:Ye("string",Ir._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new H(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class df{}class ON extends df{}function CL(s,e,...t){let n=[];e instanceof df&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((l=>l instanceof ff)).length,a=i.filter((l=>l instanceof vu)).length;if(o>1||o>0&&a>0)throw new H(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)s=r._apply(s);return s}class vu extends ON{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new vu(e,t,n)}_apply(e){const t=this._parse(e);return xI(e._query,t),new Vr(e.firestore,e.converter,oB(e._query,t))}_parse(e){const t=lu(e.firestore);return(function(i,o,a,l,u,h,B){let C;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new H(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){hm(B,h);const E=[];for(const P of B)E.push(um(l,i,P));C={arrayValue:{values:E}}}else C=um(l,i,B)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||hm(B,h),C=ZS(a,o,B,h==="in"||h==="not-in");return pe.create(u,h,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pL(s,e,t){const n=e,r=Ns("where",s);return vu._create(r,n,t)}class ff extends df{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ff(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)xI(o,l),o=oB(o,l)})(e._query,t),new Vr(e.firestore,e.converter,oB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function um(s,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new H(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xE(e)&&t.indexOf("/")!==-1)throw new H(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Ce.fromString(t));if(!z.isDocumentKey(n))throw new H(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ia(s,new z(n))}if(t instanceof He)return ia(s,t._key);throw new H(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zc(t)}.`)}function hm(s,e){if(!Array.isArray(s)||s.length===0)throw new H(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xI(s,e){const t=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(s.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new H(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(s){return(function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1})(s,["next","error","complete"])}class FN{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=kN(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function gL(s){return new FN(s)}class xN{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ya.provider,this._offlineComponentProvider={build:t=>new SI(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class LN{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ya.provider,this._offlineComponentProvider={build:t=>new IN(t,e==null?void 0:e.cacheSizeBytes)}}}function kN(s){return new xN(s==null?void 0:s.forceOwnership)}function mL(){return new LN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=lu(e)}set(e,t,n){this._verifyNotCommitted();const r=Ph(e,this._firestore),i=OI(r.converter,t,n),o=fy(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,n);return this._mutations.push(o.toMutation(r._key,ut.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Ph(e,this._firestore);let o;return o=typeof(t=Pe(t))=="string"||t instanceof Ua?py(this._dataReader,"WriteBatch.update",i._key,t,n,r):Cy(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,ut.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ph(e,this._firestore);return this._mutations=this._mutations.concat(new Va(t._key,ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ph(s,e){if((s=Pe(s)).firestore!==e)throw new H(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(s){s=xt(s,He);const e=xt(s.firestore,An),t=Zi(e);return vN(t,s._key).then((n=>LI(e,s,n)))}function EL(s){s=xt(s,Vr);const e=xt(s.firestore,An),t=Zi(e),n=new Bf(e);return FI(s._query),AN(t,s._query).then((r=>new Ir(e,n,s,r)))}function yL(s,e,t){s=xt(s,He);const n=xt(s.firestore,An),r=OI(s.converter,e,t),i=lu(n);return Au(n,[fy(i,"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,ut.none())])}function IL(s,e,t,...n){s=xt(s,He);const r=xt(s.firestore,An),i=lu(r);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Ua?py(i,"updateDoc",s._key,e,t,n):Cy(i,"updateDoc",s._key,e),Au(r,[o.toMutation(s._key,ut.exists(!0))])}function DL(s){return Au(xt(s.firestore,An),[new Va(s._key,ut.none())])}function wL(s,...e){var u,h,B;s=Pe(s);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Bm(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Bm(e[n])){const C=e[n];e[n]=(u=C.next)==null?void 0:u.bind(C),e[n+1]=(h=C.error)==null?void 0:h.bind(C),e[n+2]=(B=C.complete)==null?void 0:B.bind(C)}let i,o,a;if(s instanceof He)o=xt(s.firestore,An),a=Ga(s._key.path),i={next:C=>{e[n]&&e[n](LI(o,s,C))},error:e[n+1],complete:e[n+2]};else{const C=xt(s,Vr);o=xt(C.firestore,An),a=C._query;const g=new Bf(o);i={next:E=>{e[n]&&e[n](new Ir(o,g,C,E))},error:e[n+1],complete:e[n+2]},FI(s._query)}const l=Zi(o);return TN(l,a,r,i)}function Au(s,e){const t=Zi(s);return RN(t,e)}function LI(s,e,t){const n=t.docs.get(e._key),r=new Bf(s);return new yr(s,r,e._key,n,new Fo(t.hasPendingWrites,t.fromCache),e.converter)}function TL(s){return s=xt(s,An),Zi(s),new VN(s,(e=>Au(s,e)))}const dm="@firebase/firestore",fm="4.17.2";(function(e,t=!0){AR(kr),wr(new Rs("firestore",((n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new An(new SS(n.getProvider("auth-internal")),new NS(o,n.getProvider("app-check-internal")),LR(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),En(dm,fm,e),En(dm,fm,"esm2020")})();var MN="firebase",GN="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En(MN,GN,"app");var Cm={};const pm="@firebase/database",gm="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kI="";function HN(s){kI=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ea(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UN(e)}}catch{}return new qN},Br=VI("localStorage"),KN=VI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Wc("@firebase/database"),MI=(function(){let s=1;return function(){return s++}})(),GI=function(s){const e=Qw(s),t=new jw;t.update(e);const n=t.digest();return qB.encodeByteArray(n)},$a=function(...s){let e="";for(let t=0;t<s.length;t++){const n=s[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=$a.apply(null,n):typeof n=="object"?e+=et(n):e+=n,e+=" "}return e};let Qo=null,mm=!0;const jN=function(s,e){J(!0,"Can't turn on custom loggers persistently."),Ci.logLevel=de.VERBOSE,Qo=Ci.log.bind(Ci)},ht=function(...s){if(mm===!0&&(mm=!1,Qo===null&&KN.get("logging_enabled")===!0&&jN()),Qo){const e=$a.apply(null,s);Qo(e)}},Ya=function(s){return function(...e){ht(s,...e)}},SB=function(...s){const e="FIREBASE INTERNAL ERROR: "+$a(...s);Ci.error(e)},Jn=function(...s){const e=`FIREBASE FATAL ERROR: ${$a(...s)}`;throw Ci.error(e),new Error(e)},Rt=function(...s){const e="FIREBASE WARNING: "+$a(...s);Ci.warn(e)},JN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cf=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},zN=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Li="[MIN_NAME]",Or="[MAX_NAME]",qr=function(s,e){if(s===e)return 0;if(s===Li||e===Or)return-1;if(e===Li||s===Or)return 1;{const t=_m(s),n=_m(e);return t!==null?n!==null?t-n===0?s.length-e.length:t-n:-1:n!==null?1:s<e?-1:1}},WN=function(s,e){return s===e?0:s<e?-1:1},vo=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+et(e))},pf=function(s){if(typeof s!="object"||s===null)return et(s);const e=[];for(const n in s)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=et(e[n]),t+=":",t+=pf(s[e[n]]);return t+="}",t},HI=function(s,e){const t=s.length;if(t<=e)return[s];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(s.substring(r,t)):n.push(s.substring(r,r+e));return n};function ft(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const UI=function(s){J(!Cf(s),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,i,o,a,l;s===0?(i=0,o=0,r=1/s===-1/0?1:0):(r=s<0,s=Math.abs(s),s>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(s)/Math.LN2),n),i=a+n,o=Math.round(s*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(s/Math.pow(2,1-n-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let B="";for(l=0;l<64;l+=8){let C=parseInt(h.substr(l,8),2).toString(16);C.length===1&&(C="0"+C),B=B+C}return B.toLowerCase()},QN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$N=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YN(s,e){let t="Unknown Error";s==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?t="Client doesn't have permission to access the desired data.":s==="unavailable"&&(t="The service is unavailable");const n=new Error(s+" at "+e._path.toString()+": "+t);return n.code=s.toUpperCase(),n}const XN=new RegExp("^-?(0*)\\d{1,10}$"),ZN=-2147483648,eO=2147483647,_m=function(s){if(XN.test(s)){const e=Number(s);if(e>=ZN&&e<=eO)return e}return null},eo=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Rt("Exception was thrown by user callback.",t),e},Math.floor(0))}},tO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$o=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Qt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(e)}}class Xl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="5",qI="v",KI="s",jI="r",JI="f",zI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WI="ls",QI="p",bB="ac",$I="websocket",YI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t,n,r,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rO(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function ZI(s,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let n;if(e===$I)n=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===YI)n=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rO(s)&&(t.ns=s.namespace);const r=[];return ft(t,(i,o)=>{r.push(i+"="+o)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.counters_={}}incrementCounter(e,t=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Sw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={},Oh={};function mf(s){const e=s.toString();return Nh[e]||(Nh[e]=new iO),Nh[e]}function oO(s,e){const t=s.toString();return Oh[t]||(Oh[t]=e()),Oh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&eo(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="start",lO="close",cO="pLPCommand",uO="pRTLPCB",eD="id",tD="pw",nD="ser",hO="cb",BO="seg",dO="ts",fO="d",CO="dframe",sD=1870,rD=30,pO=sD-rD,gO=25e3,mO=3e4;class hi{constructor(e,t,n,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ya(e),this.stats_=mf(t),this.urlFn=l=>(this.appCheckToken&&(l[bB]=this.appCheckToken),ZI(t,YI,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new aO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mO)),zN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _f((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Em)this.id=a,this.password=l;else if(o===lO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[Em]="t",n[nD]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[hO]=this.scriptTagHolder.uniqueCallbackIdentifier),n[qI]=gf,this.transportSessionId&&(n[KI]=this.transportSessionId),this.lastSessionId&&(n[WI]=this.lastSessionId),this.applicationId&&(n[QI]=this.applicationId),this.appCheckToken&&(n[bB]=this.appCheckToken),typeof location<"u"&&location.hostname&&zI.test(location.hostname)&&(n[jI]=JI);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QN()&&!$N()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ym(t),r=HI(n,pO);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[CO]="t",n[eD]=e,n[tD]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=et(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _f{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MI(),window[cO+this.uniqueCallbackIdentifier]=e,window[uO+this.uniqueCallbackIdentifier]=t,this.myIFrame=_f.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eD]=this.myID,e[tD]=this.myPW,e[nD]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rD+n.length<=sD;){const o=this.pendingSegs.shift();n=n+"&"+BO+r+"="+o.seg+"&"+dO+r+"="+o.ts+"&"+fO+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(gO)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=16384,EO=45e3;let Nc=null;typeof MozWebSocket<"u"?Nc=MozWebSocket:typeof WebSocket<"u"&&(Nc=WebSocket);class tn{constructor(e,t,n,r,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ya(this.connId),this.stats_=mf(t),this.connURL=tn.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[qI]=gf,typeof location<"u"&&location.hostname&&zI.test(location.hostname)&&(o[jI]=JI),t&&(o[KI]=t),n&&(o[WI]=n),r&&(o[bB]=r),i&&(o[QI]=i),ZI(e,$I,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Br.set("previous_websocket_failure",!0);try{let n;Mw(),this.mySock=new Nc(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&Nc!==null&&!tn.forceDisallow_}static previouslyFailed(){return Br.isInMemoryStorage||Br.get("previous_websocket_failure")===!0}markConnectionHealthy(){Br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=ea(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=HI(t,_O);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{static get ALL_TRANSPORTS(){return[hi,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=tn&&tn.isAvailable();let n=t&&!tn.previouslyFailed();if(e.webSocketOnly&&(t||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[tn];else{const r=this.transports_=[];for(const i of Ia.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ia.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ia.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=6e4,IO=5e3,DO=10*1024,wO=100*1024,Fh="t",ym="d",TO="s",Im="r",vO="e",Dm="o",wm="a",Tm="n",vm="p",AO="h";class RO{constructor(e,t,n,r,i,o,a,l,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ya("c:"+this.id+":"),this.transportManager_=new Ia(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=$o(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fh in e){const t=e[Fh];t===wm?this.upgradeIfSecondaryHealthy_():t===Im?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=vo("t",e),n=vo("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=vo("t",e),n=vo("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=vo(Fh,e);if(ym in e){const n=e[ym];if(t===AO){const r={...n};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Tm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===TO?this.onConnectionShutdown_(n):t===Im?this.onReset_(n):t===vO?SB("Server Error: "+n):t===Dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):SB("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gf!==n&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),$o(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$o(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends oD{static getInstance(){return new Oc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!KB()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=32,Rm=768;class Ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function we(){return new Ae("")}function he(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Vs(s){return s.pieces_.length-s.pieceNum_}function xe(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Ae(s.pieces_,e)}function Ef(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function SO(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function Da(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function aD(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new Ae(e,0)}function Je(s,e){const t=[];for(let n=s.pieceNum_;n<s.pieces_.length;n++)t.push(s.pieces_[n]);if(e instanceof Ae)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new Ae(t,0)}function fe(s){return s.pieceNum_>=s.pieces_.length}function vt(s,e){const t=he(s),n=he(e);if(t===null)return e;if(t===n)return vt(xe(s),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function bO(s,e){const t=Da(s,0),n=Da(e,0);for(let r=0;r<t.length&&r<n.length;r++){const i=qr(t[r],n[r]);if(i!==0)return i}return t.length===n.length?0:t.length<n.length?-1:1}function yf(s,e){if(Vs(s)!==Vs(e))return!1;for(let t=s.pieceNum_,n=e.pieceNum_;t<=s.pieces_.length;t++,n++)if(s.pieces_[t]!==e.pieces_[n])return!1;return!0}function Xt(s,e){let t=s.pieceNum_,n=e.pieceNum_;if(Vs(s)>Vs(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class PO{constructor(e,t){this.errorPrefix_=t,this.parts_=Da(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=zc(this.parts_[n]);lD(this)}}function NO(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=zc(e),lD(s)}function OO(s){const e=s.parts_.pop();s.byteLength_-=zc(e),s.parts_.length>0&&(s.byteLength_-=1)}function lD(s){if(s.byteLength_>Rm)throw new Error(s.errorPrefix_+"has a key path longer than "+Rm+" bytes ("+s.byteLength_+").");if(s.parts_.length>Am)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Am+") or object contains a cycle "+nr(s))}function nr(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends oD{static getInstance(){return new If}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=1e3,FO=300*1e3,Sm=30*1e3,xO=1.3,LO=3e4,kO="server_kill",bm=3;class Mn extends iD{constructor(e,t,n,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mn.nextPersistentConnectionId_++,this.log_=Ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ao,this.maxReconnectDelay_=FO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");If.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Oc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(et(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new qi,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;Mn.warnOnListenWarnings_(l,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&cn(e,"w")){const n=Dr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=qw(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=n,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):SB("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LO&&(this.reconnectDelay_=Ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Mn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},u=function(B){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(B)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[B,C]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=B&&B.accessToken,this.appCheckToken_=C&&C.token,a=new RO(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,g=>{Rt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(kO)},i))}catch(B){this.log_("Failed to get token: "+B),o||(this.repoInfo_.nodeAdmin&&Rt(B),l())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gh(this.interruptReasons_)&&(this.reconnectDelay_=Ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>pf(i)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Ae(e).toString();let r;if(this.listens.has(n)){const i=this.listens.get(n);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){ht("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=Sm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ht("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+kI.replace(/\./g,"-")]=1,KB()?e["framework.cordova"]=1:r_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oc.getInstance().currentlyOnline();return Gh(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Be(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Be(Li,e),r=new Be(Li,t);return this.compare(n,r)!==0}minPost(){return Be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class cD extends Ru{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,t){return qr(e.name,t.name)}isDefinedOn(e){throw Ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Be.MIN}maxPost(){return new Be(Or,Ol)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Be(e,Ol)}toString(){return".key"}}const pi=new cD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class lt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??lt.RED,this.left=r??Ft.EMPTY_NODE,this.right=i??Ft.EMPTY_NODE}copy(e,t,n,r,i){return new lt(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Ft.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}lt.RED=!0;lt.BLACK=!1;class VO{copy(e,t,n,r,i){return this}insert(e,t,n){return new lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ft{constructor(e,t=Ft.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ft(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,lt.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fl(this.root_,null,this.comparator_,!0,e)}}Ft.EMPTY_NODE=new VO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(s,e){return qr(s.name,e.name)}function Df(s,e){return qr(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PB;function GO(s){PB=s}const uD=function(s){return typeof s=="number"?"number:"+UI(s):"string:"+s},hD=function(s){if(s.isLeafNode()){const e=s.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else J(s===PB||s.isEmpty(),"priority of unexpected type.");J(s===PB||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pm;class ot{static set __childrenNodeConstructor(e){Pm=e}static get __childrenNodeConstructor(){return Pm}constructor(e,t=ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hD(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:he(e)===".priority"?this.priorityNode_:ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=he(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(J(n!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uD(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=UI(this.value_):e+=this.value_,this.lazyHash_=GI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ot.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=ot.VALUE_TYPE_ORDER.indexOf(t),i=ot.VALUE_TYPE_ORDER.indexOf(n);return J(r>=0,"Unknown leaf type: "+t),J(i>=0,"Unknown leaf type: "+n),r===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BD,dD;function HO(s){BD=s}function UO(s){dD=s}class qO extends Ru{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?qr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Be.MIN}maxPost(){return new Be(Or,new ot("[PRIORITY-POST]",dD))}makePost(e,t){const n=BD(e);return new Be(t,new ot("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ue=new qO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=Math.log(2);class jO{constructor(e){const t=i=>parseInt(Math.log(i)/KO,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fc=function(s,e,t,n){s.sort(e);const r=function(l,u){const h=u-l;let B,C;if(h===0)return null;if(h===1)return B=s[l],C=t?t(B):B,new lt(C,B.node,lt.BLACK,null,null);{const g=parseInt(h/2,10)+l,E=r(l,g),P=r(g+1,u);return B=s[g],C=t?t(B):B,new lt(C,B.node,lt.BLACK,E,P)}},i=function(l){let u=null,h=null,B=s.length;const C=function(E,P){const V=B-E,W=B;B-=E;const Z=r(V+1,W),se=s[V],ye=t?t(se):se;g(new lt(ye,se.node,P,null,Z))},g=function(E){u?(u.left=E,u=E):(h=E,u=E)};for(let E=0;E<l.count;++E){const P=l.nextBitIsOne(),V=Math.pow(2,l.count-(E+1));P?C(V,lt.BLACK):(C(V,lt.BLACK),C(V,lt.RED))}return h},o=new jO(s.length),a=i(o);return new Ft(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;const si={};class Ln{static get Default(){return J(si&&Ue,"ChildrenNode.ts has not been loaded"),xh=xh||new Ln({".priority":si},{".priority":Ue}),xh}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Dr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ft?t:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,t){J(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Be.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;r?a=Fc(n,e.getCompare()):a=si;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new Ln(h,u)}addToIndexes(e,t){const n=tc(this.indexes_,(r,i)=>{const o=Dr(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),r===si)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Be.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Fc(a,o.getCompare())}else return si;else{const a=t.get(e.name);let l=r;return a&&(l=l.remove(new Be(e.name,a))),l.insert(e,e.node)}});return new Ln(n,this.indexSet_)}removeFromIndexes(e,t){const n=tc(this.indexes_,r=>{if(r===si)return r;{const i=t.get(e.name);return i?r.remove(new Be(e.name,i)):r}});return new Ln(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class ie{static get EMPTY_NODE(){return Ro||(Ro=new ie(new Ft(Df),null,Ln.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&hD(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ro}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ro:t}}getChild(e){const t=he(e);return t===null?this:this.getImmediateChild(t).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new Be(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?Ro:this.priorityNode_;return new ie(r,o,i)}}updateChild(e,t){const n=he(e);if(n===null)return t;{J(he(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(xe(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Ue,(o,a)=>{t[o]=a.val(e),n++,i&&ie.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uD(this.getPriority().val())+":"),this.forEachChild(Ue,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":GI(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const i=r.getPredecessorKey(new Be(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Be(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Be.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Be.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xa?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Ue),r=t.getIterator(Ue);let i=n.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JO extends ie{constructor(){super(new Ft(Df),ie.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const Xa=new JO;Object.defineProperties(Be,{MIN:{value:new Be(Li,ie.EMPTY_NODE)},MAX:{value:new Be(Or,Xa)}});cD.__EMPTY_NODE=ie.EMPTY_NODE;ot.__childrenNodeConstructor=ie;GO(Xa);UO(Xa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=!0;function $e(s,e=null){if(s===null)return ie.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new ot(t,$e(e))}if(!(s instanceof Array)&&zO){const t=[];let n=!1;if(ft(s,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(n=n||!l.getPriority().isEmpty(),t.push(new Be(o,l)))}}),t.length===0)return ie.EMPTY_NODE;const i=Fc(t,MO,o=>o.name,Df);if(n){const o=Fc(t,Ue.getCompare());return new ie(i,$e(e),new Ln({".priority":o},{".priority":Ue}))}else return new ie(i,$e(e),Ln.Default)}else{let t=ie.EMPTY_NODE;return ft(s,(n,r)=>{if(cn(s,n)&&n.substring(0,1)!=="."){const i=$e(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority($e(e))}}HO($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO extends Ru{constructor(e){super(),this.indexPath_=e,J(!fe(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?qr(e.name,t.name):i}makePost(e,t){const n=$e(e),r=ie.EMPTY_NODE.updateChild(this.indexPath_,n);return new Be(t,r)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,Xa);return new Be(Or,e)}toString(){return Da(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO extends Ru{compare(e,t){const n=e.node.compareTo(t.node);return n===0?qr(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Be.MIN}maxPost(){return Be.MAX}makePost(e,t){const n=$e(e);return new Be(t,n)}toString(){return".value"}}const $O=new QO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(s){return{type:"value",snapshotNode:s}}function ki(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function wa(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Ta(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function YO(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(wa(t,a)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ki(t,n)):o.trackChildChange(Ta(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Ue,(r,i)=>{t.hasChild(r)||n.trackChildChange(wa(r,i))}),t.isLeafNode()||t.forEachChild(Ue,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||n.trackChildChange(Ta(r,i,o))}else n.trackChildChange(ki(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.indexedFilter_=new wf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=va.getStartPost_(e),this.endPost_=va.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new Be(t,n))||(n=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ie.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(ie.EMPTY_NODE);const i=this;return t.forEachChild(Ue,(o,a)=>{i.matches(new Be(o,a))||(r=r.updateImmediateChild(o,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new va(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Be(t,n))||(n=ie.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=ie.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(ie.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const B=this.index_.getCompare();o=(C,g)=>B(g,C)}else o=this.index_.getCompare();const a=e;J(a.numChildren()===this.limit_,"");const l=new Be(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const B=a.getImmediateChild(t);let C=r.getChildAfterChild(this.index_,u,this.reverse_);for(;C!=null&&(C.name===t||a.hasChild(C.name));)C=r.getChildAfterChild(this.index_,C,this.reverse_);const g=C==null?1:o(C,l);if(h&&!n.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(Ta(t,n,B)),a.updateImmediateChild(t,n);{i!=null&&i.trackChildChange(wa(t,B));const P=a.updateImmediateChild(t,ie.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(i!=null&&i.trackChildChange(ki(C.name,C.node)),P.updateImmediateChild(C.name,C.node)):P}}else return n.isEmpty()?e:h&&o(u,l)>=0?(i!=null&&(i.trackChildChange(wa(u.name,u.node)),i.trackChildChange(ki(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Tf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZO(s){return s.loadsAllData()?new wf(s.getIndex()):s.hasLimit()?new XO(s):new va(s)}function Nm(s){const e={};if(s.isDefault())return e;let t;if(s.index_===Ue?t="$priority":s.index_===$O?t="$value":s.index_===pi?t="$key":(J(s.index_ instanceof WO,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=et(t),s.startSet_){const n=s.startAfterSet_?"startAfter":"startAt";e[n]=et(s.indexStartValue_),s.startNameSet_&&(e[n]+=","+et(s.indexStartName_))}if(s.endSet_){const n=s.endBeforeSet_?"endBefore":"endAt";e[n]=et(s.indexEndValue_),s.endNameSet_&&(e[n]+=","+et(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function Om(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==Ue&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends iD{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ya("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=xc.getListenId_(e,n),a={};this.listens_[o]=a;const l=Nm(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let B=h;if(u===404&&(B=null,u=null),u===null&&this.onDataUpdate_(i,B,!1,n),Dr(this.listens_,o)===a){let C;u?u===401?C="permission_denied":C="rest_error:"+u:C="ok",r(C,null)}})}unlisten(e,t){const n=xc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Nm(e._queryParams),n=e._path.toString(),r=new qi;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ki(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{Rt("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,l)}else a.status!==401&&a.status!==404&&Rt("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(){return{value:null,children:new Map}}function CD(s,e,t){if(fe(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const n=he(e);s.children.has(n)||s.children.set(n,Lc());const r=s.children.get(n);e=xe(e),CD(r,e,t)}}function NB(s,e,t){s.value!==null?t(e,s.value):tF(s,(n,r)=>{const i=new Ae(e.toString()+"/"+n);NB(r,i,t)})}function tF(s,e){s.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ft(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=10*1e3,sF=30*1e3,rF=300*1e3;class iF{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nF(e);const n=Fm+(sF-Fm)*Math.random();$o(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ft(e,(r,i)=>{i>0&&cn(this.statsToReport_,r)&&(t[r]=i,n=!0)}),n&&this.server_.reportStats(t),$o(this.reportStats_.bind(this),Math.floor(Math.random()*2*rF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function vf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Af(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rf(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=sn.ACK_USER_WRITE,this.source=vf()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ae(e));return new kc(we(),t,this.revert)}}else return J(he(this.path)===e,"operationForChild called for unrelated child."),new kc(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.source=e,this.path=t,this.type=sn.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new Aa(this.source,we()):new Aa(this.source,xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=sn.OVERWRITE}operationForChild(e){return fe(this.path)?new Fr(this.source,we(),this.snap.getImmediateChild(e)):new Fr(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=sn.MERGE}operationForChild(e){if(fe(this.path)){const t=this.children.subtree(new Ae(e));return t.isEmpty()?null:t.value?new Fr(this.source,we(),t.value):new Vi(this.source,we(),t)}else return J(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vi(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=he(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aF(s,e,t,n){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&s.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(YO(o.childName,o.snapshotNode))}),So(s,r,"child_removed",e,n,t),So(s,r,"child_added",e,n,t),So(s,r,"child_moved",i,n,t),So(s,r,"child_changed",e,n,t),So(s,r,"value",e,n,t),r}function So(s,e,t,n,r,i){const o=n.filter(a=>a.type===t);o.sort((a,l)=>cF(s,a,l)),o.forEach(a=>{const l=lF(s,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,s.query_))})})}function lF(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function cF(s,e,t){if(e.childName==null||t.childName==null)throw Ui("Should only compare child_ events.");const n=new Be(e.childName,e.snapshotNode),r=new Be(t.childName,t.snapshotNode);return s.index_.compare(n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(s,e){return{eventCache:s,serverCache:e}}function Yo(s,e,t,n){return Su(new Ms(e,t,n),s.serverCache)}function pD(s,e,t,n){return Su(s.eventCache,new Ms(e,t,n))}function Vc(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function xr(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh;const uF=()=>(Lh||(Lh=new Ft(WN)),Lh);class Oe{static fromObject(e){let t=new Oe(null);return ft(e,(n,r)=>{t=t.set(new Ae(n),r)}),t}constructor(e,t=uF()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:we(),value:this.value};if(fe(e))return null;{const n=he(e),r=this.children.get(n);if(r!==null){const i=r.findRootMostMatchingPathAndValue(xe(e),t);return i!=null?{path:Je(new Ae(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const t=he(e),n=this.children.get(t);return n!==null?n.subtree(xe(e)):new Oe(null)}}set(e,t){if(fe(e))return new Oe(t,this.children);{const n=he(e),i=(this.children.get(n)||new Oe(null)).set(xe(e),t),o=this.children.insert(n,i);return new Oe(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const t=he(e),n=this.children.get(t);if(n){const r=n.remove(xe(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Oe(null):new Oe(this.value,i)}else return this}}get(e){if(fe(e))return this.value;{const t=he(e),n=this.children.get(t);return n?n.get(xe(e)):null}}setTree(e,t){if(fe(e))return t;{const n=he(e),i=(this.children.get(n)||new Oe(null)).setTree(xe(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new Oe(this.value,o)}}fold(e){return this.fold_(we(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Je(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,we(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(fe(e))return null;{const i=he(e),o=this.children.get(i);return o?o.findOnPath_(xe(e),Je(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,we(),t)}foreachOnPath_(e,t,n){if(fe(e))return this;{this.value&&n(t,this.value);const r=he(e),i=this.children.get(r);return i?i.foreachOnPath_(xe(e),Je(t,r),n):new Oe(null)}}foreach(e){this.foreach_(we(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Je(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Oe(null))}}function Xo(s,e,t){if(fe(e))return new an(new Oe(t));{const n=s.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let i=n.value;const o=vt(r,e);return i=i.updateChild(o,t),new an(s.writeTree_.set(r,i))}else{const r=new Oe(t),i=s.writeTree_.setTree(e,r);return new an(i)}}}function OB(s,e,t){let n=s;return ft(t,(r,i)=>{n=Xo(n,Je(e,r),i)}),n}function xm(s,e){if(fe(e))return an.empty();{const t=s.writeTree_.setTree(e,new Oe(null));return new an(t)}}function FB(s,e){return Kr(s,e)!=null}function Kr(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(vt(t.path,e)):null}function Lm(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ue,(n,r)=>{e.push(new Be(n,r))}):s.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new Be(n,r.value))}),e}function Ts(s,e){if(fe(e))return s;{const t=Kr(s,e);return t!=null?new an(new Oe(t)):new an(s.writeTree_.subtree(e))}}function xB(s){return s.writeTree_.isEmpty()}function Mi(s,e){return gD(we(),s.writeTree_,e)}function gD(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let n=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=gD(Je(s,r),i,t)}),!t.getChild(s).isEmpty()&&n!==null&&(t=t.updateChild(Je(s,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(s,e){return yD(e,s)}function hF(s,e,t,n,r){J(n>s.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),s.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(s.visibleWrites=Xo(s.visibleWrites,e,t)),s.lastWriteId=n}function BF(s,e,t,n){J(n>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:e,children:t,writeId:n,visible:!0}),s.visibleWrites=OB(s.visibleWrites,e,t),s.lastWriteId=n}function dF(s,e){for(let t=0;t<s.allWrites.length;t++){const n=s.allWrites[t];if(n.writeId===e)return n}return null}function fF(s,e){const t=s.allWrites.findIndex(a=>a.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const n=s.allWrites[t];s.allWrites.splice(t,1);let r=n.visible,i=!1,o=s.allWrites.length-1;for(;r&&o>=0;){const a=s.allWrites[o];a.visible&&(o>=t&&CF(a,n.path)?r=!1:Xt(n.path,a.path)&&(i=!0)),o--}if(r){if(i)return pF(s),!0;if(n.snap)s.visibleWrites=xm(s.visibleWrites,n.path);else{const a=n.children;ft(a,l=>{s.visibleWrites=xm(s.visibleWrites,Je(n.path,l))})}return!0}else return!1}function CF(s,e){if(s.snap)return Xt(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&Xt(Je(s.path,t),e))return!0;return!1}function pF(s){s.visibleWrites=mD(s.allWrites,gF,we()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function gF(s){return s.visible}function mD(s,e,t){let n=an.empty();for(let r=0;r<s.length;++r){const i=s[r];if(e(i)){const o=i.path;let a;if(i.snap)Xt(t,o)?(a=vt(t,o),n=Xo(n,a,i.snap)):Xt(o,t)&&(a=vt(o,t),n=Xo(n,we(),i.snap.getChild(a)));else if(i.children){if(Xt(t,o))a=vt(t,o),n=OB(n,a,i.children);else if(Xt(o,t))if(a=vt(o,t),fe(a))n=OB(n,we(),i.children);else{const l=Dr(i.children,he(a));if(l){const u=l.getChild(xe(a));n=Xo(n,we(),u)}}}else throw Ui("WriteRecord should have .snap or .children")}}return n}function _D(s,e,t,n,r){if(!n&&!r){const i=Kr(s.visibleWrites,e);if(i!=null)return i;{const o=Ts(s.visibleWrites,e);if(xB(o))return t;if(t==null&&!FB(o,we()))return null;{const a=t||ie.EMPTY_NODE;return Mi(o,a)}}}else{const i=Ts(s.visibleWrites,e);if(!r&&xB(i))return t;if(!r&&t==null&&!FB(i,we()))return null;{const o=function(u){return(u.visible||r)&&(!n||!~n.indexOf(u.writeId))&&(Xt(u.path,e)||Xt(e,u.path))},a=mD(s.allWrites,o,e),l=t||ie.EMPTY_NODE;return Mi(a,l)}}}function mF(s,e,t){let n=ie.EMPTY_NODE;const r=Kr(s.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ue,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=Ts(s.visibleWrites,e);return t.forEachChild(Ue,(o,a)=>{const l=Mi(Ts(i,new Ae(o)),a);n=n.updateImmediateChild(o,l)}),Lm(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=Ts(s.visibleWrites,e);return Lm(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function _F(s,e,t,n,r){J(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=Je(e,t);if(FB(s.visibleWrites,i))return null;{const o=Ts(s.visibleWrites,i);return xB(o)?r.getChild(t):Mi(o,r.getChild(t))}}function EF(s,e,t,n){const r=Je(e,t),i=Kr(s.visibleWrites,r);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=Ts(s.visibleWrites,r);return Mi(o,n.getNode().getImmediateChild(t))}else return null}function yF(s,e){return Kr(s.visibleWrites,e)}function IF(s,e,t,n,r,i,o){let a;const l=Ts(s.visibleWrites,e),u=Kr(l,we());if(u!=null)a=u;else if(t!=null)a=Mi(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],B=o.getCompare(),C=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let g=C.getNext();for(;g&&h.length<r;)B(g,n)!==0&&h.push(g),g=C.getNext();return h}else return[]}function DF(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Mc(s,e,t,n){return _D(s.writeTree,s.treePath,e,t,n)}function Sf(s,e){return mF(s.writeTree,s.treePath,e)}function km(s,e,t,n){return _F(s.writeTree,s.treePath,e,t,n)}function Gc(s,e){return yF(s.writeTree,Je(s.treePath,e))}function wF(s,e,t,n,r,i){return IF(s.writeTree,s.treePath,e,t,n,r,i)}function bf(s,e,t){return EF(s.writeTree,s.treePath,e,t)}function ED(s,e){return yD(Je(s.treePath,e),s.writeTree)}function yD(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,Ta(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,wa(n,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,ki(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,Ta(n,e.snapshotNode,r.oldSnap));else throw Ui("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ID=new vF;class Pf{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new Ms(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bf(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=wF(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(s){return{filter:s}}function RF(s,e){J(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function SF(s,e,t,n,r){const i=new TF;let o,a;if(t.type===sn.OVERWRITE){const u=t;u.source.fromUser?o=LB(s,e,u.path,u.snap,n,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!fe(u.path),o=Hc(s,e,u.path,u.snap,n,r,a,i))}else if(t.type===sn.MERGE){const u=t;u.source.fromUser?o=PF(s,e,u.path,u.children,n,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=kB(s,e,u.path,u.children,n,r,a,i))}else if(t.type===sn.ACK_USER_WRITE){const u=t;u.revert?o=FF(s,e,u.path,n,r,i):o=NF(s,e,u.path,u.affectedTree,n,r,i)}else if(t.type===sn.LISTEN_COMPLETE)o=OF(s,e,t.path,n,i);else throw Ui("Unknown operation type: "+t.type);const l=i.getChanges();return bF(e,o,l),{viewCache:o,changes:l}}function bF(s,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=Vc(s);(t.length>0||!s.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(fD(Vc(e)))}}function DD(s,e,t,n,r,i){const o=e.eventCache;if(Gc(n,t)!=null)return e;{let a,l;if(fe(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),h=u instanceof ie?u:ie.EMPTY_NODE,B=Sf(n,h);a=s.filter.updateFullNode(e.eventCache.getNode(),B,i)}else{const u=Mc(n,xr(e));a=s.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=he(t);if(u===".priority"){J(Vs(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const B=km(n,t,h,l);B!=null?a=s.filter.updatePriority(h,B):a=o.getNode()}else{const h=xe(t);let B;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const C=km(n,t,o.getNode(),l);C!=null?B=o.getNode().getImmediateChild(u).updateChild(h,C):B=o.getNode().getImmediateChild(u)}else B=bf(n,u,e.serverCache);B!=null?a=s.filter.updateChild(o.getNode(),u,B,h,r,i):a=o.getNode()}}return Yo(e,a,o.isFullyInitialized()||fe(t),s.filter.filtersNodes())}}function Hc(s,e,t,n,r,i,o,a){const l=e.serverCache;let u;const h=o?s.filter:s.filter.getIndexedFilter();if(fe(t))u=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(t,n);u=h.updateFullNode(l.getNode(),g,null)}else{const g=he(t);if(!l.isCompleteForPath(t)&&Vs(t)>1)return e;const E=xe(t),V=l.getNode().getImmediateChild(g).updateChild(E,n);g===".priority"?u=h.updatePriority(l.getNode(),V):u=h.updateChild(l.getNode(),g,V,E,ID,null)}const B=pD(e,u,l.isFullyInitialized()||fe(t),h.filtersNodes()),C=new Pf(r,B,i);return DD(s,B,t,r,C,a)}function LB(s,e,t,n,r,i,o){const a=e.eventCache;let l,u;const h=new Pf(r,e,i);if(fe(t))u=s.filter.updateFullNode(e.eventCache.getNode(),n,o),l=Yo(e,u,!0,s.filter.filtersNodes());else{const B=he(t);if(B===".priority")u=s.filter.updatePriority(e.eventCache.getNode(),n),l=Yo(e,u,a.isFullyInitialized(),a.isFiltered());else{const C=xe(t),g=a.getNode().getImmediateChild(B);let E;if(fe(C))E=n;else{const P=h.getCompleteChild(B);P!=null?Ef(C)===".priority"&&P.getChild(aD(C)).isEmpty()?E=P:E=P.updateChild(C,n):E=ie.EMPTY_NODE}if(g.equals(E))l=e;else{const P=s.filter.updateChild(a.getNode(),B,E,C,h,o);l=Yo(e,P,a.isFullyInitialized(),s.filter.filtersNodes())}}}return l}function Vm(s,e){return s.eventCache.isCompleteForChild(e)}function PF(s,e,t,n,r,i,o){let a=e;return n.foreach((l,u)=>{const h=Je(t,l);Vm(e,he(h))&&(a=LB(s,a,h,u,r,i,o))}),n.foreach((l,u)=>{const h=Je(t,l);Vm(e,he(h))||(a=LB(s,a,h,u,r,i,o))}),a}function Mm(s,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function kB(s,e,t,n,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;fe(t)?u=n:u=new Oe(null).setTree(t,n);const h=e.serverCache.getNode();return u.children.inorderTraversal((B,C)=>{if(h.hasChild(B)){const g=e.serverCache.getNode().getImmediateChild(B),E=Mm(s,g,C);l=Hc(s,l,new Ae(B),E,r,i,o,a)}}),u.children.inorderTraversal((B,C)=>{const g=!e.serverCache.isCompleteForChild(B)&&C.value===null;if(!h.hasChild(B)&&!g){const E=e.serverCache.getNode().getImmediateChild(B),P=Mm(s,E,C);l=Hc(s,l,new Ae(B),P,r,i,o,a)}}),l}function NF(s,e,t,n,r,i,o){if(Gc(r,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(n.value!=null){if(fe(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Hc(s,e,t,l.getNode().getChild(t),r,i,a,o);if(fe(t)){let u=new Oe(null);return l.getNode().forEachChild(pi,(h,B)=>{u=u.set(new Ae(h),B)}),kB(s,e,t,u,r,i,a,o)}else return e}else{let u=new Oe(null);return n.foreach((h,B)=>{const C=Je(t,h);l.isCompleteForPath(C)&&(u=u.set(h,l.getNode().getChild(C)))}),kB(s,e,t,u,r,i,a,o)}}function OF(s,e,t,n,r){const i=e.serverCache,o=pD(e,i.getNode(),i.isFullyInitialized()||fe(t),i.isFiltered());return DD(s,o,t,n,ID,r)}function FF(s,e,t,n,r,i){let o;if(Gc(n,t)!=null)return e;{const a=new Pf(n,e,r),l=e.eventCache.getNode();let u;if(fe(t)||he(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Mc(n,xr(e));else{const B=e.serverCache.getNode();J(B instanceof ie,"serverChildren would be complete if leaf node"),h=Sf(n,B)}h=h,u=s.filter.updateFullNode(l,h,i)}else{const h=he(t);let B=bf(n,h,e.serverCache);B==null&&e.serverCache.isCompleteForChild(h)&&(B=l.getImmediateChild(h)),B!=null?u=s.filter.updateChild(l,h,B,xe(t),a,i):e.eventCache.getNode().hasChild(h)?u=s.filter.updateChild(l,h,ie.EMPTY_NODE,xe(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mc(n,xr(e)),o.isLeafNode()&&(u=s.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Gc(n,we())!=null,Yo(e,u,o,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new wf(n.getIndex()),i=ZO(n);this.processor_=AF(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(ie.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(ie.EMPTY_NODE,a.getNode(),null),h=new Ms(l,o.isFullyInitialized(),r.filtersNodes()),B=new Ms(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Su(B,h),this.eventGenerator_=new oF(this.query_)}get query(){return this.query_}}function LF(s){return s.viewCache_.serverCache.getNode()}function kF(s){return Vc(s.viewCache_)}function VF(s,e){const t=xr(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!fe(e)&&!t.getImmediateChild(he(e)).isEmpty())?t.getChild(e):null}function Gm(s){return s.eventRegistrations_.length===0}function MF(s,e){s.eventRegistrations_.push(e)}function Hm(s,e,t){const n=[];if(t){J(e==null,"A cancel should cancel all event registrations.");const r=s.query._path;s.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let i=0;i<s.eventRegistrations_.length;++i){const o=s.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(s.eventRegistrations_.slice(i+1));break}}s.eventRegistrations_=r}else s.eventRegistrations_=[];return n}function Um(s,e,t,n){e.type===sn.MERGE&&e.source.queryId!==null&&(J(xr(s.viewCache_),"We should always have a full cache before handling merges"),J(Vc(s.viewCache_),"Missing event cache, even though we have a server cache"));const r=s.viewCache_,i=SF(s.processor_,r,e,t,n);return RF(s.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=i.viewCache,wD(s,i.changes,i.viewCache.eventCache.getNode(),null)}function GF(s,e){const t=s.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ue,(i,o)=>{n.push(ki(i,o))}),t.isFullyInitialized()&&n.push(fD(t.getNode())),wD(s,n,t.getNode(),e)}function wD(s,e,t,n){const r=n?[n]:s.eventRegistrations_;return aF(s.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;class TD{constructor(){this.views=new Map}}function HF(s){J(!Uc,"__referenceConstructor has already been defined"),Uc=s}function UF(){return J(Uc,"Reference.ts has not been loaded"),Uc}function qF(s){return s.views.size===0}function Nf(s,e,t,n){const r=e.source.queryId;if(r!==null){const i=s.views.get(r);return J(i!=null,"SyncTree gave us an op for an invalid query."),Um(i,e,t,n)}else{let i=[];for(const o of s.views.values())i=i.concat(Um(o,e,t,n));return i}}function vD(s,e,t,n,r){const i=e._queryIdentifier,o=s.views.get(i);if(!o){let a=Mc(t,r?n:null),l=!1;a?l=!0:n instanceof ie?(a=Sf(t,n),l=!1):(a=ie.EMPTY_NODE,l=!1);const u=Su(new Ms(a,l,!1),new Ms(n,r,!1));return new xF(e,u)}return o}function KF(s,e,t,n,r,i){const o=vD(s,e,n,r,i);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,o),MF(o,t),GF(o,t)}function jF(s,e,t,n){const r=e._queryIdentifier,i=[];let o=[];const a=Gs(s);if(r==="default")for(const[l,u]of s.views.entries())o=o.concat(Hm(u,t,n)),Gm(u)&&(s.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=s.views.get(r);l&&(o=o.concat(Hm(l,t,n)),Gm(l)&&(s.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Gs(s)&&i.push(new(UF())(e._repo,e._path)),{removed:i,events:o}}function AD(s){const e=[];for(const t of s.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function vs(s,e){let t=null;for(const n of s.views.values())t=t||VF(n,e);return t}function RD(s,e){if(e._queryParams.loadsAllData())return Pu(s);{const n=e._queryIdentifier;return s.views.get(n)}}function SD(s,e){return RD(s,e)!=null}function Gs(s){return Pu(s)!=null}function Pu(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc;function JF(s){J(!qc,"__referenceConstructor has already been defined"),qc=s}function zF(){return J(qc,"Reference.ts has not been loaded"),qc}let WF=1;class qm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=DF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Of(s,e,t,n,r){return hF(s.pendingWriteTree_,e,t,n,r),r?to(s,new Fr(vf(),e,t)):[]}function QF(s,e,t,n){BF(s.pendingWriteTree_,e,t,n);const r=Oe.fromObject(t);return to(s,new Vi(vf(),e,r))}function ps(s,e,t=!1){const n=dF(s.pendingWriteTree_,e);if(fF(s.pendingWriteTree_,e)){let i=new Oe(null);return n.snap!=null?i=i.set(we(),!0):ft(n.children,o=>{i=i.set(new Ae(o),!0)}),to(s,new kc(n.path,i,t))}else return[]}function Za(s,e,t){return to(s,new Fr(Af(),e,t))}function $F(s,e,t){const n=Oe.fromObject(t);return to(s,new Vi(Af(),e,n))}function YF(s,e){return to(s,new Aa(Af(),e))}function XF(s,e,t){const n=Ff(s,t);if(n){const r=xf(n),i=r.path,o=r.queryId,a=vt(i,e),l=new Aa(Rf(o),a);return Lf(s,i,l)}else return[]}function Kc(s,e,t,n,r=!1){const i=e._path,o=s.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||SD(o,e))){const l=jF(o,e,t,n);qF(o)&&(s.syncPointTree_=s.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!r){const h=u.findIndex(C=>C._queryParams.loadsAllData())!==-1,B=s.syncPointTree_.findOnPath(i,(C,g)=>Gs(g));if(h&&!B){const C=s.syncPointTree_.subtree(i);if(!C.isEmpty()){const g=tx(C);for(let E=0;E<g.length;++E){const P=g[E],V=P.query,W=OD(s,P);s.listenProvider_.startListening(Zo(V),Ra(s,V),W.hashFn,W.onComplete)}}}!B&&u.length>0&&!n&&(h?s.listenProvider_.stopListening(Zo(e),null):u.forEach(C=>{const g=s.queryToTagMap.get(Ou(C));s.listenProvider_.stopListening(Zo(C),g)}))}nx(s,u)}return a}function bD(s,e,t,n){const r=Ff(s,n);if(r!=null){const i=xf(r),o=i.path,a=i.queryId,l=vt(o,e),u=new Fr(Rf(a),l,t);return Lf(s,o,u)}else return[]}function ZF(s,e,t,n){const r=Ff(s,n);if(r){const i=xf(r),o=i.path,a=i.queryId,l=vt(o,e),u=Oe.fromObject(t),h=new Vi(Rf(a),l,u);return Lf(s,o,h)}else return[]}function VB(s,e,t,n=!1){const r=e._path;let i=null,o=!1;s.syncPointTree_.foreachOnPath(r,(C,g)=>{const E=vt(C,r);i=i||vs(g,E),o=o||Gs(g)});let a=s.syncPointTree_.get(r);a?(o=o||Gs(a),i=i||vs(a,we())):(a=new TD,s.syncPointTree_=s.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=ie.EMPTY_NODE,s.syncPointTree_.subtree(r).foreachChild((g,E)=>{const P=vs(E,we());P&&(i=i.updateImmediateChild(g,P))}));const u=SD(a,e);if(!u&&!e._queryParams.loadsAllData()){const C=Ou(e);J(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const g=sx();s.queryToTagMap.set(C,g),s.tagToQueryMap.set(g,C)}const h=bu(s.pendingWriteTree_,r);let B=KF(a,e,t,h,i,l);if(!u&&!o&&!n){const C=RD(a,e);B=B.concat(rx(s,e,C))}return B}function Nu(s,e,t){const r=s.pendingWriteTree_,i=s.syncPointTree_.findOnPath(e,(o,a)=>{const l=vt(o,e),u=vs(a,l);if(u)return u});return _D(r,e,i,t,!0)}function ex(s,e){const t=e._path;let n=null;s.syncPointTree_.foreachOnPath(t,(u,h)=>{const B=vt(u,t);n=n||vs(h,B)});let r=s.syncPointTree_.get(t);r?n=n||vs(r,we()):(r=new TD,s.syncPointTree_=s.syncPointTree_.set(t,r));const i=n!=null,o=i?new Ms(n,!0,!1):null,a=bu(s.pendingWriteTree_,e._path),l=vD(r,e,a,i?o.getNode():ie.EMPTY_NODE,i);return kF(l)}function to(s,e){return PD(e,s.syncPointTree_,null,bu(s.pendingWriteTree_,we()))}function PD(s,e,t,n){if(fe(s.path))return ND(s,e,t,n);{const r=e.get(we());t==null&&r!=null&&(t=vs(r,we()));let i=[];const o=he(s.path),a=s.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,h=ED(n,o);i=i.concat(PD(a,l,u,h))}return r&&(i=i.concat(Nf(r,s,n,t))),i}}function ND(s,e,t,n){const r=e.get(we());t==null&&r!=null&&(t=vs(r,we()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=ED(n,o),h=s.operationForChild(o);h&&(i=i.concat(ND(h,a,l,u)))}),r&&(i=i.concat(Nf(r,s,n,t))),i}function OD(s,e){const t=e.query,n=Ra(s,t);return{hashFn:()=>(LF(e)||ie.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?XF(s,t._path,n):YF(s,t._path);{const i=YN(r,t);return Kc(s,t,null,i)}}}}function Ra(s,e){const t=Ou(e);return s.queryToTagMap.get(t)}function Ou(s){return s._path.toString()+"$"+s._queryIdentifier}function Ff(s,e){return s.tagToQueryMap.get(e)}function xf(s){const e=s.indexOf("$");return J(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Ae(s.substr(0,e))}}function Lf(s,e,t){const n=s.syncPointTree_.get(e);J(n,"Missing sync point for query tag that we're tracking");const r=bu(s.pendingWriteTree_,e);return Nf(n,t,r,null)}function tx(s){return s.fold((e,t,n)=>{if(t&&Gs(t))return[Pu(t)];{let r=[];return t&&(r=AD(t)),ft(n,(i,o)=>{r=r.concat(o)}),r}})}function Zo(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(zF())(s._repo,s._path):s}function nx(s,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=Ou(n),i=s.queryToTagMap.get(r);s.queryToTagMap.delete(r),s.tagToQueryMap.delete(i)}}}function sx(){return WF++}function rx(s,e,t){const n=e._path,r=Ra(s,e),i=OD(s,t),o=s.listenProvider_.startListening(Zo(e),r,i.hashFn,i.onComplete),a=s.syncPointTree_.subtree(n);if(r)J(!Gs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,B)=>{if(!fe(u)&&h&&Gs(h))return[Pu(h).query];{let C=[];return h&&(C=C.concat(AD(h).map(g=>g.query))),ft(B,(g,E)=>{C=C.concat(E)}),C}});for(let u=0;u<l.length;++u){const h=l[u];s.listenProvider_.stopListening(Zo(h),Ra(s,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new kf(t)}node(){return this.node_}}class Vf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Je(this.path_,e);return new Vf(this.syncTree_,t)}node(){return Nu(this.syncTree_,this.path_)}}const ix=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},Km=function(s,e,t){if(!s||typeof s!="object")return s;if(J(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return ox(s[".sv"],e,t);if(typeof s[".sv"]=="object")return ax(s[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},ox=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+s)}},ax=function(s,e,t){s.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const n=s.increment;typeof n!="number"&&J(!1,"Unexpected increment value: "+n);const r=e.node();if(J(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},FD=function(s,e,t,n){return Gf(e,new Vf(t,s),n)},Mf=function(s,e,t){return Gf(s,new kf(e),t)};function Gf(s,e,t){const n=s.getPriority().val(),r=Km(n,e.getImmediateChild(".priority"),t);let i;if(s.isLeafNode()){const o=s,a=Km(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new ot(a,$e(r)):s}else{const o=s;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new ot(r))),o.forEachChild(Ue,(a,l)=>{const u=Gf(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Fu(s,e){let t=e instanceof Ae?e:new Ae(e),n=s,r=he(t);for(;r!==null;){const i=Dr(n.node.children,r)||{children:{},childCount:0};n=new Hf(r,n,i),t=xe(t),r=he(t)}return n}function jr(s){return s.node.value}function Uf(s,e){s.node.value=e,MB(s)}function xD(s){return s.node.childCount>0}function lx(s){return jr(s)===void 0&&!xD(s)}function xu(s,e){ft(s.node.children,(t,n)=>{e(new Hf(t,s,n))})}function LD(s,e,t,n){t&&e(s),xu(s,r=>{LD(r,e,!0)})}function cx(s,e,t){let n=s.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function el(s){return new Ae(s.parent===null?s.name:el(s.parent)+"/"+s.name)}function MB(s){s.parent!==null&&ux(s.parent,s.name,s)}function ux(s,e,t){const n=lx(t),r=cn(s.node.children,e);n&&r?(delete s.node.children[e],s.node.childCount--,MB(s)):!n&&!r&&(s.node.children[e]=t.node,s.node.childCount++,MB(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=/[\[\].#$\/\u0000-\u001F\u007F]/,Bx=/[\[\].#$\u0000-\u001F\u007F]/,kh=10*1024*1024,qf=function(s){return typeof s=="string"&&s.length!==0&&!hx.test(s)},kD=function(s){return typeof s=="string"&&s.length!==0&&!Bx.test(s)},dx=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),kD(s)},VD=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Cf(s)||s&&typeof s=="object"&&cn(s,".sv")},fx=function(s,e,t,n){tl(Jc(s,"value"),e,t)},tl=function(s,e,t){const n=t instanceof Ae?new PO(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+nr(n));if(typeof e=="function")throw new Error(s+"contains a function "+nr(n)+" with contents = "+e.toString());if(Cf(e))throw new Error(s+"contains "+e.toString()+" "+nr(n));if(typeof e=="string"&&e.length>kh/3&&zc(e)>kh)throw new Error(s+"contains a string greater than "+kh+" utf8 bytes "+nr(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(ft(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!qf(o)))throw new Error(s+" contains an invalid key ("+o+") "+nr(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NO(n,o),tl(s,a,n),OO(n)}),r&&i)throw new Error(s+' contains ".value" child '+nr(n)+" in addition to actual children.")}},Cx=function(s,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const i=Da(n);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!qf(i[o]))throw new Error(s+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bO);let r=null;for(t=0;t<e.length;t++){if(n=e[t],r!==null&&Xt(r,n))throw new Error(s+"contains a path "+r.toString()+" that is ancestor of another path "+n.toString());r=n}},px=function(s,e,t,n){const r=Jc(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];ft(e,(o,a)=>{const l=new Ae(o);if(tl(r,a,Je(t,l)),Ef(l)===".priority"&&!VD(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),Cx(r,i)},MD=function(s,e,t,n){if(!kD(t))throw new Error(Jc(s,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gx=function(s,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),MD(s,e,t)},Kf=function(s,e){if(he(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},mx=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!dx(t))throw new Error(Jc(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lu(s,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],i=r.getPath();t!==null&&!yf(i,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&s.eventLists_.push(t)}function GD(s,e,t){Lu(s,t),HD(s,n=>yf(n,e))}function Jt(s,e,t){Lu(s,t),HD(s,n=>Xt(n,e)||Xt(e,n))}function HD(s,e){s.recursionDepth_++;let t=!0;for(let n=0;n<s.eventLists_.length;n++){const r=s.eventLists_[n];if(r){const i=r.path;e(i)?(Ex(s.eventLists_[n]),s.eventLists_[n]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function Ex(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const n=t.getEventRunner();Qo&&ht("event: "+t.toString()),eo(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="repo_interrupt",Ix=25;class Dx{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _x,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lc(),this.transactionQueueTree_=new Hf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wx(s,e,t){if(s.stats_=mf(s.repoInfo_),s.forceRestClient_||tO())s.server_=new xc(s.repoInfo_,(n,r,i,o)=>{jm(s,n,r,i,o)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>Jm(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}s.persistentConnection_=new Mn(s.repoInfo_,e,(n,r,i,o)=>{jm(s,n,r,i,o)},n=>{Jm(s,n)},n=>{vx(s,n)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(n=>{s.server_.refreshAuthToken(n)}),s.appCheckProvider_.addTokenChangeListener(n=>{s.server_.refreshAppCheckToken(n.token)}),s.statsReporter_=oO(s.repoInfo_,()=>new iF(s.stats_,s.server_)),s.infoData_=new eF,s.infoSyncTree_=new qm({startListening:(n,r,i,o)=>{let a=[];const l=s.infoData_.getNode(n._path);return l.isEmpty()||(a=Za(s.infoSyncTree_,n._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jf(s,"connected",!1),s.serverSyncTree_=new qm({startListening:(n,r,i,o)=>(s.server_.listen(n,i,r,(a,l)=>{const u=o(a,l);Jt(s.eventQueue_,n._path,u)}),[]),stopListening:(n,r)=>{s.server_.unlisten(n,r)}})}function Tx(s){const t=s.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function nl(s){return ix({timestamp:Tx(s)})}function jm(s,e,t,n,r){s.dataUpdateCount++;const i=new Ae(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const l=tc(t,u=>$e(u));o=ZF(s.serverSyncTree_,i,l,r)}else{const l=$e(t);o=bD(s.serverSyncTree_,i,l,r)}else if(n){const l=tc(t,u=>$e(u));o=$F(s.serverSyncTree_,i,l)}else{const l=$e(t);o=Za(s.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Gi(s,i)),Jt(s.eventQueue_,a,o)}function Jm(s,e){jf(s,"connected",e),e===!1&&bx(s)}function vx(s,e){ft(e,(t,n)=>{jf(s,t,n)})}function jf(s,e,t){const n=new Ae("/.info/"+e),r=$e(t);s.infoData_.updateSnapshot(n,r);const i=Za(s.infoSyncTree_,n,r);Jt(s.eventQueue_,n,i)}function ku(s){return s.nextWriteId_++}function Ax(s,e,t){const n=ex(s.serverSyncTree_,e);return n!=null?Promise.resolve(n):s.server_.get(e).then(r=>{const i=$e(r).withIndex(e._queryParams.getIndex());VB(s.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Za(s.serverSyncTree_,e._path,i);else{const a=Ra(s.serverSyncTree_,e);o=bD(s.serverSyncTree_,e._path,i,a)}return Jt(s.eventQueue_,e._path,o),Kc(s.serverSyncTree_,e,t,null,!0),i},r=>(no(s,"get for query "+et(e)+" failed: "+r),Promise.reject(new Error(r))))}function Rx(s,e,t,n,r){no(s,"set",{path:e.toString(),value:t,priority:n});const i=nl(s),o=$e(t,n),a=Nu(s.serverSyncTree_,e),l=Mf(o,a,i),u=ku(s),h=Of(s.serverSyncTree_,e,l,u,!0);Lu(s.eventQueue_,h),s.server_.put(e.toString(),o.val(!0),(C,g)=>{const E=C==="ok";E||Rt("set at "+e+" failed: "+C);const P=ps(s.serverSyncTree_,u,!E);Jt(s.eventQueue_,e,P),GB(s,r,C,g)});const B=zf(s,e);Gi(s,B),Jt(s.eventQueue_,B,[])}function Sx(s,e,t,n){no(s,"update",{path:e.toString(),value:t});let r=!0;const i=nl(s),o={};if(ft(t,(a,l)=>{r=!1,o[a]=FD(Je(e,a),$e(l),s.serverSyncTree_,i)}),r)ht("update() called with empty data.  Don't do anything."),GB(s,n,"ok",void 0);else{const a=ku(s),l=QF(s.serverSyncTree_,e,o,a);Lu(s.eventQueue_,l),s.server_.merge(e.toString(),t,(u,h)=>{const B=u==="ok";B||Rt("update at "+e+" failed: "+u);const C=ps(s.serverSyncTree_,a,!B),g=C.length>0?Gi(s,e):e;Jt(s.eventQueue_,g,C),GB(s,n,u,h)}),ft(t,u=>{const h=zf(s,Je(e,u));Gi(s,h)}),Jt(s.eventQueue_,e,[])}}function bx(s){no(s,"onDisconnectEvents");const e=nl(s),t=Lc();NB(s.onDisconnect_,we(),(r,i)=>{const o=FD(r,i,s.serverSyncTree_,e);CD(t,r,o)});let n=[];NB(t,we(),(r,i)=>{n=n.concat(Za(s.serverSyncTree_,r,i));const o=zf(s,r);Gi(s,o)}),s.onDisconnect_=Lc(),Jt(s.eventQueue_,we(),n)}function Px(s,e,t){let n;he(e._path)===".info"?n=VB(s.infoSyncTree_,e,t):n=VB(s.serverSyncTree_,e,t),GD(s.eventQueue_,e._path,n)}function zm(s,e,t){let n;he(e._path)===".info"?n=Kc(s.infoSyncTree_,e,t):n=Kc(s.serverSyncTree_,e,t),GD(s.eventQueue_,e._path,n)}function Nx(s){s.persistentConnection_&&s.persistentConnection_.interrupt(yx)}function no(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),ht(t,...e)}function GB(s,e,t,n){e&&eo(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;n&&(i+=": "+n);const o=new Error(i);o.code=r,e(o)}})}function Ox(s,e,t,n,r,i){no(s,"transaction on "+e);const o={path:e,update:t,onComplete:n,status:null,order:MI(),applyLocally:i,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Jf(s,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{tl("transaction failed: Data returned ",l,o.path),o.status=0;const u=Fu(s.transactionQueueTree_,e),h=jr(u)||[];h.push(o),Uf(u,h);let B;typeof l=="object"&&l!==null&&cn(l,".priority")?(B=Dr(l,".priority"),J(VD(B),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):B=(Nu(s.serverSyncTree_,e)||ie.EMPTY_NODE).getPriority().val();const C=nl(s),g=$e(l,B),E=Mf(g,a,C);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=E,o.currentWriteId=ku(s);const P=Of(s.serverSyncTree_,e,E,o.currentWriteId,o.applyLocally);Jt(s.eventQueue_,e,P),Vu(s,s.transactionQueueTree_)}}function Jf(s,e,t){return Nu(s.serverSyncTree_,e,t)||ie.EMPTY_NODE}function Vu(s,e=s.transactionQueueTree_){if(e||Mu(s,e),jr(e)){const t=qD(s,e);J(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&Fx(s,el(e),t)}else xD(e)&&xu(e,t=>{Vu(s,t)})}function Fx(s,e,t){const n=t.map(u=>u.currentWriteId),r=Jf(s,e,n);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const B=vt(e,h.path);i=i.updateChild(B,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;s.server_.put(l.toString(),a,u=>{no(s,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const B=[];for(let C=0;C<t.length;C++)t[C].status=2,h=h.concat(ps(s.serverSyncTree_,t[C].currentWriteId)),t[C].onComplete&&B.push(()=>t[C].onComplete(null,!0,t[C].currentOutputSnapshotResolved)),t[C].unwatcher();Mu(s,Fu(s.transactionQueueTree_,e)),Vu(s,s.transactionQueueTree_),Jt(s.eventQueue_,e,h);for(let C=0;C<B.length;C++)eo(B[C])}else{if(u==="datastale")for(let B=0;B<t.length;B++)t[B].status===3?t[B].status=4:t[B].status=0;else{Rt("transaction at "+l.toString()+" failed: "+u);for(let B=0;B<t.length;B++)t[B].status=4,t[B].abortReason=u}Gi(s,e)}},o)}function Gi(s,e){const t=UD(s,e),n=el(t),r=qD(s,t);return xx(s,r,n),n}function xx(s,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=vt(t,l.path);let h=!1,B;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,B=l.abortReason,r=r.concat(ps(s.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ix)h=!0,B="maxretry",r=r.concat(ps(s.serverSyncTree_,l.currentWriteId,!0));else{const C=Jf(s,l.path,o);l.currentInputSnapshot=C;const g=e[a].update(C.val());if(g!==void 0){tl("transaction failed: Data returned ",g,l.path);let E=$e(g);typeof g=="object"&&g!=null&&cn(g,".priority")||(E=E.updatePriority(C.getPriority()));const V=l.currentWriteId,W=nl(s),Z=Mf(E,C,W);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=Z,l.currentWriteId=ku(s),o.splice(o.indexOf(V),1),r=r.concat(Of(s.serverSyncTree_,l.path,Z,l.currentWriteId,l.applyLocally)),r=r.concat(ps(s.serverSyncTree_,V,!0))}else h=!0,B="nodata",r=r.concat(ps(s.serverSyncTree_,l.currentWriteId,!0))}Jt(s.eventQueue_,t,r),r=[],h&&(e[a].status=2,(function(C){setTimeout(C,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(B==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(B),!1,null))))}Mu(s,s.transactionQueueTree_);for(let a=0;a<n.length;a++)eo(n[a]);Vu(s,s.transactionQueueTree_)}function UD(s,e){let t,n=s.transactionQueueTree_;for(t=he(e);t!==null&&jr(n)===void 0;)n=Fu(n,t),e=xe(e),t=he(e);return n}function qD(s,e){const t=[];return KD(s,e,t),t.sort((n,r)=>n.order-r.order),t}function KD(s,e,t){const n=jr(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);xu(e,r=>{KD(s,r,t)})}function Mu(s,e){const t=jr(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,Uf(e,t.length>0?t:void 0)}xu(e,n=>{Mu(s,n)})}function zf(s,e){const t=el(UD(s,e)),n=Fu(s.transactionQueueTree_,e);return cx(n,r=>{Vh(s,r)}),Vh(s,n),LD(n,r=>{Vh(s,r)}),t}function Vh(s,e){const t=jr(e);if(t){const n=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(J(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(ps(s.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Uf(e,void 0):t.length=i+1,Jt(s.eventQueue_,el(e),r);for(let o=0;o<n.length;o++)eo(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(s){let e="";const t=s.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function kx(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):Rt(`Invalid query segment '${t}' in query '${s}'`)}return e}const Wm=function(s,e){const t=Vx(s),n=t.namespace;t.domain==="firebase.com"&&Jn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||JN();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new XI(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new Ae(t.pathString)}},Vx=function(s){let e="",t="",n="",r="",i="",o=!0,a="https",l=443;if(typeof s=="string"){let u=s.indexOf("//");u>=0&&(a=s.substring(0,u-1),s=s.substring(u+2));let h=s.indexOf("/");h===-1&&(h=s.length);let B=s.indexOf("?");B===-1&&(B=s.length),e=s.substring(0,Math.min(h,B)),h<B&&(r=Lx(s.substring(h,B)));const C=kx(s.substring(Math.min(s.length,B)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const E=e.indexOf(".");n=e.substring(0,E).toLowerCase(),t=e.substring(E+1),i=n}"ns"in C&&(i=C.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class Gx{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return fe(this._path)?null:Ef(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=Om(this._queryParams),t=pf(e);return t==="{}"?"default":t}get _queryObject(){return Om(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Wf))return!1;const t=this._repo===e._repo,n=yf(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+SO(this._path)}}class Rn extends Wf{constructor(e,t){super(e,t,new Tf,!1)}get parent(){const e=aD(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hi{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ae(e),n=HB(this.ref,e);return new Hi(this._node.getChild(t),n,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new Hi(r,HB(this.ref,n),Ue)))}hasChild(e){const t=new Ae(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vL(s,e){return s=Pe(s),s._checkNotDeleted("ref"),e!==void 0?HB(s._root,e):s._root}function HB(s,e){return s=Pe(s),he(s._path)===null?gx("child","path",e):MD("child","path",e),new Rn(s._repo,Je(s._path,e))}function AL(s){return Kf("remove",s._path),Hx(s,null)}function Hx(s,e){s=Pe(s),Kf("set",s._path),fx("set",e,s._path);const t=new qi;return Rx(s._repo,s._path,e,null,t.wrapCallback(()=>{})),t.promise}function RL(s,e){px("update",e,s._path);const t=new qi;return Sx(s._repo,s._path,e,t.wrapCallback(()=>{})),t.promise}function SL(s){s=Pe(s);const e=new jD(()=>{}),t=new Gu(e);return Ax(s._repo,s,t).then(n=>new Hi(n,new Rn(s._repo,s._path),s._queryParams.getIndex()))}class Gu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new Mx("value",this,new Hi(e.snapshotNode,new Rn(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Gx(this,e,t):null}matches(e){return e instanceof Gu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ux(s,e,t,n,r){let i;if(typeof n=="object"&&(i=void 0,r=n),typeof n=="function"&&(i=n),r&&r.onlyOnce){const l=t,u=(h,B)=>{zm(s._repo,s,a),l(h,B)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new jD(t,i||void 0),a=new Gu(o);return Px(s._repo,s,a),()=>zm(s._repo,s,a)}function qx(s,e,t,n){return Ux(s,"value",e,t,n)}HF(Rn);JF(Rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="FIREBASE_DATABASE_EMULATOR_HOST",UB={};let jx=!1;function Jx(s,e,t,n){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=Lr(i);s.repoInfo_=new XI(e,o,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(s.authTokenProvider_=n)}function zx(s,e,t,n,r){let i=n||s.options.databaseURL;i===void 0&&(s.options.projectId||Jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",s.options.projectId),i=`${s.options.projectId}-default-rtdb.firebaseio.com`);let o=Wm(i,r),a=o.repoInfo,l;typeof process<"u"&&Cm&&(l=Cm[Kx]),l?(i=`http://${l}?ns=${a.namespace}`,o=Wm(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new sO(s.name,s.options,e);mx("Invalid Firebase Database URL",o),fe(o.path)||Jn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Qx(a,s,u,new nO(s,t));return new $x(h,s)}function Wx(s,e){const t=UB[e];(!t||t[s.key]!==s)&&Jn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),Nx(s),delete t[s.key]}function Qx(s,e,t,n){let r=UB[e.name];r||(r={},UB[e.name]=r);let i=r[s.toURLString()];return i&&Jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Dx(s,jx,t,n),r[s.toURLString()]=i,i}class $x{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,we())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jn("Cannot call "+e+" on a deleted database.")}}function bL(s=h_(),e){const t=Qc(s,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=Fw("database");n&&Yx(t,...n)}return t}function Yx(s,e,t,n={}){s=Pe(s),s._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=s._repoInternal;if(s._instanceStarted){if(r===s._repoInternal.repoInfo_.host&&As(n,i.repoInfo_.emulatorOptions))return;Jn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&Jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Xl(Xl.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:xw(n.mockUserToken,s.app.options.projectId);o=new Xl(a)}Lr(e)&&jB(e),Jx(i,r,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(s){HN(kr),wr(new Rs("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return zx(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),En(pm,gm,s),En(pm,gm,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function PL(s,e,t){if(s=Pe(s),Kf("Reference.transaction",s._path),s.key===".length"||s.key===".keys")throw"Reference.transaction failed: "+s.key+" is a read-only object.";const n=(t==null?void 0:t.applyLocally)??!0,r=new qi,i=(a,l,u)=>{let h=null;a?r.reject(a):(h=new Hi(u,new Rn(s._repo,s._path),Ue),r.resolve(new Zx(l,h)))},o=qx(s,()=>{});return Ox(s._repo,s._path,e,i,o,n),r.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};Mn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};Xx();export{pL as A,fL as B,TL as C,hs as G,dL as a,iL as b,mL as c,uL as d,wL as e,tL as f,bL as g,rL as h,WT as i,_L as j,yL as k,Hx as l,cL as m,qx as n,nL as o,gL as p,AL as q,vL as r,sL as s,DL as t,RL as u,IL as v,SL as w,PL as x,EL as y,CL as z};
