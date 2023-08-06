"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{8050:function(e,t,n){n.d(t,{JU:function(){return ay},LV:function(){return aE},ad:function(){return ab},cf:function(){return aJ},j5:function(){return a0},r7:function(){return aX}});var r,i,s=n(5568),a=n(8341),o=n(4794),l=n(7365),u=n(8376),h=n(8611);let c="@firebase/firestore";/**
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
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
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
 */let m="10.1.0",f=new o.Yd("@firebase/firestore");function g(){return f.logLevel}function p(e,...t){if(f.logLevel<=o.in.DEBUG){let n=t.map(v);f.debug(`Firestore (${m}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.in.ERROR){let n=t.map(v);f.error(`Firestore (${m}): ${e}`,...n)}}function w(e,...t){if(f.logLevel<=o.in.WARN){let n=t.map(v);f.warn(`Firestore (${m}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function I(e="Unexpected state"){let t=`FIRESTORE (${m}) INTERNAL ASSERTION FAILED: `+e;throw y(t),Error(t)}/**
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
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class x{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||I(),new x(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||I(),new d(e)}}class D{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||I(),this.R=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class R{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function P(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
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
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new V(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new V(0,0))}static max(){return new F(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class L{constructor(e,t,n){void 0===t?t=0:t>e.length&&I(),void 0===n?n=e.length-t:n>e.length-t&&I(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===L.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof L?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends L{construct(e,t,n){return new O(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new b(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends L{construct(e,t,n){return new q(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new b(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new b(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new b(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(O.fromString(e))}static fromName(e){return new B(O.fromString(e).popFirst(5))}static empty(){return new B(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new O(e.slice()))}}/**
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
 */class z{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function K(e){return e.fields.find(e=>2===e.kind)}function G(e){return e.fields.filter(e=>2!==e.kind)}z.UNKNOWN_ID=-1;class ${constructor(e,t){this.fieldPath=e,this.kind=t}}class j{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new j(0,H.min())}}function Q(e){return new H(e.readTime,e.key,-1)}class H{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new H(F.min(),B.empty(),-1)}static max(){return new H(F.max(),B.empty(),-1)}}function W(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=B.comparator(e.documentKey,t.documentKey))?n:P(e.largestBatchId,t.largestBatchId)}/**
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
 */let Y="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function J(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Y)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof Z?t:Z.resolve(t)}catch(e){return Z.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,n)=>{t(e)})}static reject(e){return new Z((t,n)=>{n(e)})}static waitFor(e){return new Z((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Z.resolve(!1);for(let n of e)t=t.next(e=>e?Z.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Z((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Z((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
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
 */class ee{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new T,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new er(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{let n=el(t.target.error);this.m.reject(new er(e,n))}}static open(e,t,n,r){try{return new ee(t,e.transaction(r,n))}catch(e){throw new er(t,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new es(t)}}class et{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===et.D((0,l.z$)())&&y("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),ea(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,l.hl)())return!1;if(et.C())return!0;let e=(0,l.z$)(),t=et.D(e),n=et.F(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==h&&"YES"===(null===(e=h.env)||void 0===e?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static F(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async N(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new er(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new b(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new b(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new er(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.S.B(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.N(e);let t=ee.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.p(),e)).catch(e=>(t.abort(e),Z.reject(e))).toPromise();return s.catch(()=>{}),await t.g,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class en{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return ea(this.q.delete())}}class er extends b{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ei(e){return"IndexedDbTransactionError"===e.name}class es{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ea(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),ea(this.store.add(e))}get(e){return ea(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),ea(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),ea(this.store.count())}G(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let e=this.cursor(n),t=[];return this.j(e,(e,n)=>{t.push(n)}).next(()=>t)}{let e=this.store.getAll(n.range);return new Z((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new Z((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){p("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.Y=!1;let r=this.cursor(n);return this.j(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.j(r,t)}X(e){let t=this.cursor({});return new Z((n,r)=>{t.onerror=e=>{let t=el(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}j(e,t){let n=[];return new Z((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new en(i),a=t(i.primaryKey,i.value,s);if(a instanceof Z){let e=a.catch(e=>(s.done(),Z.reject(e)));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}}).next(()=>Z.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ea(e){return new Z((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=el(e.target.error);n(t)}})}let eo=!1;function el(e){let t=et.D((0,l.z$)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eo||(eo=!0,setTimeout(()=>{throw e},0)),e}}return e}class eu{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(e){ei(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await J(e)}await this.te(6e4)})}}class eh{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){let n=new Set,r=t,i=!0;return Z.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller",`Processing collection: ${t}`),this.ie(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.se(r,n)).next(n=>(p("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}se(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=Q(t);W(r,n)>0&&(n=r)}),new H(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function ed(e){return 0===e&&1/e==-1/0}/**
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
 */function em(e){var t,n;let r="";for(let t=0;t<e.length;t++)r.length>0&&(r+="\x01\x01"),r=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\x00":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(t),r);return r+"\x01\x01"}function ef(e){let t=e.length;if(t>=2||I(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||I(),O.emptyPath();let n=t-2,r=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>n)&&I(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),r.push(a);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:I()}s=t+2}return new O(r)}ec.ae=-1;/**
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
 */let eg=["userId","batchId"],ep={},ey=["prefixPath","collectionGroup","readTime","documentId"],ew=["prefixPath","collectionGroup","documentId"],ev=["collectionGroup","readTime","prefixPath","documentId"],eI=["canonicalId","targetId"],eE=["targetId","path"],eb=["path","targetId"],eT=["collectionId","parent"],ex=["indexId","uid"],e_=["uid","sequenceNumber"],eS=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eC=["indexId","uid","orderedDocumentKey"],eD=["userId","collectionPath","documentId"],ek=["userId","collectionPath","largestBatchId"],eN=["userId","collectionGroup","largestBatchId"],eA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eR=[...eA,"documentOverlays"],eP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],eM=[...eP,"indexConfiguration","indexState","indexEntries"];/**
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
 */class eV extends X{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function eF(e,t){return et.O(e.ue,t)}/**
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
 */function eL(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eO(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eU(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class eq{constructor(e,t){this.comparator=e,this.root=t||ez.EMPTY}insert(e,t){return new eq(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ez.BLACK,null,null))}remove(e){return new eq(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ez.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eB(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eB(this.root,e,this.comparator,!1)}getReverseIterator(){return new eB(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eB(this.root,e,this.comparator,!0)}}class eB{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ez{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ez.RED,this.left=null!=r?r:ez.EMPTY,this.right=null!=i?i:ez.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ez(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ez.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ez.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ez.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ez.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();let e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}ez.EMPTY=null,ez.RED=!0,ez.BLACK=!1,ez.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ez(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class eK{constructor(e){this.comparator=e,this.data=new eq(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eG(this.data.getIterator())}getIteratorFrom(e){return new eG(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eK)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eK(this.comparator);return t.data=e,t}}class eG{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function e$(e){return e.hasNext()?e.getNext():void 0}/**
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
 */class ej{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new ej([])}unionWith(e){let t=new eK(q.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ej(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class eQ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class eH{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eQ("Invalid base64 string: "+e):e}}(e);return new eH(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new eH(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eH.EMPTY_BYTE_STRING=new eH("");let eW=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eY(e){if(e||I(),"string"==typeof e){let t=0,n=eW.exec(e);if(n||I(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:eX(e.seconds),nanos:eX(e.nanos)}}function eX(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eJ(e){return"string"==typeof e?eH.fromBase64String(e):eH.fromUint8Array(e)}/**
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
 */function eZ(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function e0(e){let t=e.mapValue.fields.__previous_value__;return eZ(t)?e0(t):t}function e1(e){let t=eY(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
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
 */class e2{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class e5{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new e5("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof e5&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let e4={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},e8={nullValue:"NULL_VALUE"};function e3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eZ(e)?4:tu(e)?9007199254740991:10:I()}function e6(e,t){if(e===t)return!0;let n=e3(e);if(n!==e3(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return e1(e).isEqual(e1(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eY(e.timestampValue),r=eY(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eJ(e.bytesValue).isEqual(eJ(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eX(e.geoPointValue.latitude)===eX(t.geoPointValue.latitude)&&eX(e.geoPointValue.longitude)===eX(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eX(e.integerValue)===eX(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eX(e.doubleValue),r=eX(t.doubleValue);return n===r?ed(n)===ed(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],e6);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(eL(n)!==eL(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!e6(n[e],r[e])))return!1;return!0}(e,t);default:return I()}}function e9(e,t){return void 0!==(e.values||[]).find(e=>e6(e,t))}function e7(e,t){if(e===t)return 0;let n=e3(e),r=e3(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eX(e.integerValue||e.doubleValue),r=eX(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return te(e.timestampValue,t.timestampValue);case 4:return te(e1(e),e1(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eJ(e),r=eJ(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=P(n[e],r[e]);if(0!==t)return t}return P(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=P(eX(e.latitude),eX(t.latitude));return 0!==n?n:P(eX(e.longitude),eX(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=e7(n[e],r[e]);if(t)return t}return P(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===e4.mapValue&&t===e4.mapValue)return 0;if(e===e4.mapValue)return 1;if(t===e4.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=P(r[e],s[e]);if(0!==t)return t;let a=e7(n[r[e]],i[s[e]]);if(0!==a)return a}return P(r.length,s.length)}(e.mapValue,t.mapValue);default:throw I()}}function te(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);let n=eY(e),r=eY(t),i=P(n.seconds,r.seconds);return 0!==i?i:P(n.nanos,r.nanos)}function tt(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eY(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eJ(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,B.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=tt(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${tt(e.fields[i])}`;return n+"}"}(e.mapValue):I()}function tn(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tr(e){return!!e&&"integerValue"in e}function ti(e){return!!e&&"arrayValue"in e}function ts(e){return!!e&&"nullValue"in e}function ta(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function to(e){return!!e&&"mapValue"in e}function tl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return eO(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tl(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tu(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function th(e,t){let n=e7(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function tc(e,t){let n=e7(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
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
 */class td{constructor(e){this.value=e}static empty(){return new td({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!to(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(t)}setAll(e){let t=q.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tl(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());to(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return e6(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];to(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eO(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new td(tl(this.value))}}/**
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
 */class tm{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tm(e,0,F.min(),F.min(),F.min(),td.empty(),0)}static newFoundDocument(e,t,n,r){return new tm(e,1,t,F.min(),n,r,0)}static newNoDocument(e,t){return new tm(e,2,t,F.min(),F.min(),td.empty(),0)}static newUnknownDocument(e,t){return new tm(e,3,t,F.min(),F.min(),td.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(F.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=td.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=td.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof tm&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tm(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tf{constructor(e,t){this.position=e,this.inclusive=t}}function tg(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?B.comparator(B.fromName(a.referenceValue),n.key):e7(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function tp(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!e6(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ty{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class tw{}class tv extends tw{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tS(e,t,n):"array-contains"===t?new tN(e,n):"in"===t?new tA(e,n):"not-in"===t?new tR(e,n):"array-contains-any"===t?new tP(e,n):new tv(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tC(e,n):new tD(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(e7(t,this.value)):null!==t&&e3(this.value)===e3(t)&&this.matchesComparison(e7(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tI extends tw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tI(e,t)}matches(e){return tE(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function tE(e){return"and"===e.op}function tb(e){return"or"===e.op}function tT(e){return tx(e)&&tE(e)}function tx(e){for(let t of e.filters)if(t instanceof tI)return!1;return!0}function t_(e,t){let n=e.filters.concat(t);return tI.create(n,e.op)}class tS extends tv{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class tC extends tv{constructor(e,t){super(e,"in",t),this.keys=tk("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tD extends tv{constructor(e,t){super(e,"not-in",t),this.keys=tk("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tk(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>B.fromName(e.referenceValue))}class tN extends tv{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ti(t)&&e9(t.arrayValue,this.value)}}class tA extends tv{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&e9(this.value.arrayValue,t)}}class tR extends tv{constructor(e,t){super(e,"not-in",t)}matches(e){if(e9(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!e9(this.value.arrayValue,t)}}class tP extends tv{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ti(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>e9(this.value.arrayValue,e))}}/**
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
 */class tM{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function tV(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tM(e,t,n,r,i,s,a)}function tF(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof tv)return t.field.canonicalString()+t.op.toString()+tt(t.value);if(tT(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>tt(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>tt(e)).join(",")),e.he=t}return e.he}function tL(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof tv?n instanceof tv&&t.op===n.op&&t.field.isEqual(n.field)&&e6(t.value,n.value):t instanceof tI?n instanceof tI&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void I()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tp(e.startAt,t.startAt)&&tp(e.endAt,t.endAt)}function tO(e){return B.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tU(e,t){return e.filters.filter(e=>e instanceof tv&&e.field.isEqual(t))}function tq(e,t,n){let r=e8,i=!0;for(let n of tU(e,t)){let e=e8,t=!0;switch(n.op){case"<":case"<=":var s;e="nullValue"in(s=n.value)?e8:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?tn(e5.empty(),B.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?{mapValue:{}}:I();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=e8}0>th({value:r,inclusive:i},{value:e,inclusive:t})&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];0>th({value:r,inclusive:i},{value:e,inclusive:n.inclusive})&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}function tB(e,t,n){let r=e4,i=!0;for(let n of tU(e,t)){let e=e4,t=!0;switch(n.op){case">=":case">":var s;e="nullValue"in(s=n.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?tn(e5.empty(),B.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?{mapValue:{}}:"mapValue"in s?e4:I(),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=e4}tc({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=n.position[s];tc({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class tz{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function tK(e){return new tz(e)}function tG(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function t$(e){if(null===e.Pe){e.Pe=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),n=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new ty(t)),e.Pe.push(new ty(q.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ty(q.keyField(),t))}}}return e.Pe}function tj(e){if(!e.Ie){if("F"===e.limitType)e.Ie=tV(e.path,e.collectionGroup,t$(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let n of t$(e)){let e="desc"===n.dir?"asc":"desc";t.push(new ty(n.field,e))}let n=e.endAt?new tf(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tf(e.startAt.position,e.startAt.inclusive):null;e.Ie=tV(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}return e.Ie}function tQ(e,t,n){return new tz(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tH(e,t){return tL(tj(e),tj(t))&&e.limitType===t.limitType}function tW(e){return`${tF(tj(e))}|lt:${e.limitType}`}function tY(e){var t;let n;return`Query(target=${n=(t=tj(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof tv?`${t.field.canonicalString()} ${t.op} ${tt(t.value)}`:t instanceof tI?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>tt(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>tt(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tX(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):B.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of t$(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=tg(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,t$(e),t))&&(!e.endAt||!!function(e,t,n){let r=tg(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,t$(e),t))}function tJ(e){return(t,n)=>{let r=!1;for(let i of t$(e)){let e=function(e,t,n){let r=e.field.isKeyField()?B.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?e7(r,i):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return I()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
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
 */class tZ{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eO(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eU(this.inner)}size(){return this.innerSize}}/**
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
 */let t0=new eq(B.comparator),t1=new eq(B.comparator);function t2(...e){let t=t1;for(let n of e)t=t.insert(n.key,n);return t}function t5(e){let t=t1;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function t4(){return new tZ(e=>e.toString(),(e,t)=>e.isEqual(t))}let t8=new eq(B.comparator),t3=new eK(B.comparator);function t6(...e){let t=t3;for(let n of e)t=t.add(n);return t}let t9=new eK(P);/**
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
 */function t7(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ed(t)?"-0":t}}function ne(e){return{integerValue:""+e}}/**
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
 */class nt{constructor(){this._=void 0}}function nn(e,t){return e instanceof nl?tr(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nr extends nt{}class ni extends nt{constructor(e){super(),this.elements=e}}function ns(e,t){let n=nh(t);for(let t of e.elements)n.some(e=>e6(e,t))||n.push(t);return{arrayValue:{values:n}}}class na extends nt{constructor(e){super(),this.elements=e}}function no(e,t){let n=nh(t);for(let t of e.elements)n=n.filter(e=>!e6(e,t));return{arrayValue:{values:n}}}class nl extends nt{constructor(e,t){super(),this.serializer=e,this.Te=t}}function nu(e){return eX(e.integerValue||e.doubleValue)}function nh(e){return ti(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nc{constructor(e,t){this.field=e,this.transform=t}}class nd{constructor(e,t){this.version=e,this.transformResults=t}}class nm{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nm}static exists(e){return new nm(void 0,e)}static updateTime(e){return new nm(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nf(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ng{}function np(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nx(e.key,nm.none()):new nv(e.key,e.data,nm.none());{let n=e.data,r=td.empty(),i=new eK(q.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nI(e.key,r,new ej(i.toArray()),nm.none())}}function ny(e,t,n,r){return e instanceof nv?function(e,t,n,r){if(!nf(e.precondition,t))return n;let i=e.value.clone(),s=nT(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nI?function(e,t,n,r){if(!nf(e.precondition,t))return n;let i=nT(e.fieldTransforms,r,t),s=t.data;return(s.setAll(nE(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):nf(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nw(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&M(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ni&&r instanceof ni||n instanceof na&&r instanceof na?M(n.elements,r.elements,e6):n instanceof nl&&r instanceof nl?e6(n.Te,r.Te):n instanceof nr&&r instanceof nr)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nv extends ng{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nI extends ng{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nE(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function nb(e,t,n){var r;let i=new Map;e.length===n.length||I();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof ni?ns(o,l):o instanceof na?no(o,l):r))}return i}function nT(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof nr?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eZ(t)&&(t=e0(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof ni?ns(e,s):e instanceof na?no(e,s):function(e,t){let n=nn(e,t),r=nu(n)+nu(e.Te);return tr(n)&&tr(e.Te)?ne(r):t7(e.serializer,r)}(e,s))}return r}class nx extends ng{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n_ extends ng{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nS{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nv?function(e,t,n){let r=e.value.clone(),i=nb(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nI?function(e,t,n){if(!nf(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=nb(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nE(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ny(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=ny(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=t4();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=np(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),t6())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>nw(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>nw(e,t))}}class nC{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||I();let r=t8,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nC(e,t,n,r)}}/**
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
 */class nD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nk{constructor(e,t){this.count=e,this.unchangedNames=t}}function nN(e){if(void 0===e)return y("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return I()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class nA{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return nR}static getOrCreateInstance(){return null===nR&&(nR=new nA),nR}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let nR=null,nP=new u.z8([4294967295,4294967295],0);function nM(e){let t=(new TextEncoder).encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function nV(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class nF{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nL(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nL(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nL(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=u.z8.fromNumber(this.de)}Re(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(nP)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.de)return!1;let t=nM(e),[n,r]=nV(t);for(let e=0;e<this.hashCount;e++){let t=this.Re(n,r,e);if(!this.Ve(t))return!1}return!0}static create(e,t,n){let r=new Uint8Array(Math.ceil(e/8)),i=new nF(r,e%8==0?0:8-e%8,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.de)return;let t=nM(e),[n,r]=nV(t);for(let e=0;e<this.hashCount;e++){let t=this.Re(n,r,e);this.me(t)}}me(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nL extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nO{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nU.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nO(F.min(),r,new eq(P),t0,t6())}}class nU{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nU(n,t,t6(),t6(),t6())}}/**
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
 */class nq{constructor(e,t,n,r){this.fe=e,this.removedTargetIds=t,this.key=n,this.ge=r}}class nB{constructor(e,t){this.targetId=e,this.pe=t}}class nz{constructor(e,t,n=eH.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nK{constructor(){this.ye=0,this.we=nj(),this.Se=eH.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=t6(),t=t6(),n=t6();return this.we.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:I()}}),new nU(this.Se,this.be,e,t,n)}xe(){this.De=!1,this.we=nj()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class nG{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=t0,this.$e=n$(),this.Ue=new eq(P)}We(e){for(let t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(let t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{let n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Fe(e.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(e.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(n.ke(),n.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Fe(e.resumeToken));break;default:I()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((e,n)=>{this.Je(n)&&t(n)})}Ze(e){var t,n;let r=e.targetId,i=e.pe.count,s=this.Xe(r);if(s){let a=s.target;if(tO(a)){if(0===i){let e=new B(a.path);this.ze(r,e,tm.newNoDocument(e,F.min()))}else 1===i||I()}else{let s=this.et(r);if(s!==i){let i=this.tt(e,s);if(0!==i.status){this.Ye(r);let e=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,e)}null===(t=nA.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n,r){var i,s,a,o,l,u;let h={localCacheCount:n,existenceFilterCount:r.count},c=r.unchangedNames;return c&&(h.bloomFilter={applied:0===e,hashCount:null!==(i=null==c?void 0:c.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(a=null===(s=null==c?void 0:c.bits)||void 0===s?void 0:s.bitmap)||void 0===a?void 0:a.length)&&void 0!==o?o:0,padding:null!==(u=null===(l=null==c?void 0:c.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0},t&&(h.bloomFilter.mightContain=t)),h}(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,e.pe))}}}}tt(e,t){let n,r;let{unchangedNames:i,count:s}=e.pe;if(!i||!i.bits)return{status:1};let{bits:{bitmap:a="",padding:o=0},hashCount:l=0}=i;try{n=eJ(a).toUint8Array()}catch(e){if(e instanceof eQ)return w("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw e}try{r=new nF(n,o,l)}catch(e){return w(e instanceof nL?"BloomFilter error: ":"Applying bloom filter failed: ",e),{status:1}}let u=e=>{let t=this.qe.rt();return r.mightContain(`projects/${t.projectId}/databases/${t.database}/documents/${e}`)};return 0===r.de?{status:1}:{status:s===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){let n=this.qe.getRemoteKeysForTarget(e),r=0;return n.forEach(n=>{t(n.path.canonicalString())||(this.ze(e,n,null),r++)}),r}st(e){let t=new Map;this.Qe.forEach((n,r)=>{let i=this.Xe(r);if(i){if(n.current&&tO(i.target)){let t=new B(i.target.path);null!==this.Ke.get(t)||this.ot(r,t)||this.ze(r,t,tm.newNoDocument(t,e))}n.Ce&&(t.set(r,n.Me()),n.xe())}});let n=t6();this.$e.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ke.forEach((t,n)=>n.setReadTime(e));let r=new nO(e,t,this.Ue,this.Ke,n);return this.Ke=t0,this.$e=n$(),this.Ue=new eq(P),r}Ge(e,t){if(!this.Je(e))return;let n=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,n),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;let r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),n&&(this.Ke=this.Ke.insert(t,n))}removeTarget(e){this.Qe.delete(e)}et(e){let t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new nK,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new eK(P),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new nK),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function n$(){return new eq(B.comparator)}function nj(){return new eq(B.comparator)}let nQ={asc:"ASCENDING",desc:"DESCENDING"},nH={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nW={and:"AND",or:"OR"};class nY{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nX(e,t){return e.useProto3Json||null==t?t:{value:t}}function nJ(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nZ(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function n0(e){return e||I(),F.fromTimestamp(function(e){let t=eY(e);return new V(t.seconds,t.nanos)}(e))}function n1(e,t){return new O(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function n2(e){let t=O.fromString(e);return ro(t)||I(),t}function n5(e,t){return n1(e.databaseId,t.path)}function n4(e,t){let n=n2(t);if(n.get(1)!==e.databaseId.projectId)throw new b(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new B(n9(n))}function n8(e,t){return n1(e.databaseId,t)}function n3(e){let t=n2(e);return 4===t.length?O.emptyPath():n9(t)}function n6(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function n9(e){return e.length>4&&"documents"===e.get(4)||I(),e.popFirst(5)}function n7(e,t,n){return{name:n5(e,t),fields:n.value.mapValue.fields}}function re(e,t){var n;let r;if(t instanceof nv)r={update:n7(e,t.key,t.value)};else if(t instanceof nx)r={delete:n5(e,t.key)};else if(t instanceof nI)r={update:n7(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof n_))return I();r={verify:n5(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof nr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ni)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof na)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nl)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw I()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nJ(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:I()),r}function rt(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?nm.updateTime(n0(n.updateTime)):void 0!==n.exists?nm.exists(n.exists):nm.none():nm.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)"REQUEST_TIME"===t.setToServerValue||I(),n=new nr;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];n=new ni(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];n=new na(e)}else"increment"in t?n=new nl(e,t.increment):I();let r=q.fromServerFormat(t.fieldPath);return new nc(r,n)})(e,t)):[];if(t.update){t.update.name;let n=n4(e,t.update.name),s=new td({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new ej(t.map(e=>q.fromServerFormat(e)))}(t.updateMask);return new nI(n,s,e,r,i)}return new nv(n,s,r,i)}if(t.delete){let n=n4(e,t.delete);return new nx(n,r)}if(t.verify){let n=n4(e,t.verify);return new n_(n,r)}return I()}function rn(e,t){return{documents:[n8(e,t.path)]}}function rr(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=n8(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=n8(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof tv?function(e){if("=="===e.op){if(ta(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NAN"}};if(ts(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ta(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NAN"}};if(ts(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(e.field),op:nH[e.op],value:e.value}}}(t):t instanceof tI?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nW[t.op],filters:n}}}(t):I()}(tI.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rs(e.field),direction:nQ[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=nX(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}function ri(e){var t,n,r,i,s,a,o,l;let u,h=n3(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,m=null;if(d>0){1===d||I();let e=c.from[0];e.allDescendants?m=e.collectionId:h=h.child(e.collectionId)}let f=[];c.where&&(f=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ra(e.unaryFilter.field);return tv.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=ra(e.unaryFilter.field);return tv.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=ra(e.unaryFilter.field);return tv.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ra(e.unaryFilter.field);return tv.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(t):void 0!==t.fieldFilter?tv.create(ra(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tI.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op)):I()}(e);return t instanceof tI&&tT(t)?t.getFilters():[t]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new ty(ra(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new tf(n,t)}(c.startAt));let w=null;return c.endAt&&(w=function(e){let t=!e.before,n=e.values||[];return new tf(n,t)}(c.endAt)),n=h,r=m,i=g,s=f,a=p,o=y,l=w,new tz(n,r,i,s,a,"F",o,l)}function rs(e){return{fieldPath:e.canonicalString()}}function ra(e){return q.fromServerFormat(e.fieldPath)}function ro(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class rl{constructor(e,t,n,r,i=F.min(),s=F.min(),a=eH.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new rl(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rl(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ru{constructor(e){this.ct=e}}function rh(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;r.document={name:n5(i=e.ct,t.key),fields:t.data.value.mapValue.fields,updateTime:nJ(i,t.version.toTimestamp()),createTime:nJ(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rd(t.version)};else{if(!t.isUnknownDocument())return I();r.unknownDocument={path:n.path.toArray(),version:rd(t.version)}}return r}function rc(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rd(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function rm(e){let t=new V(e.seconds,e.nanoseconds);return F.fromTimestamp(t)}function rf(e,t){let n=(t.baseMutations||[]).map(t=>rt(e.ct,t));for(let e=0;e<t.mutations.length-1;++e){let n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let r=t.mutations.map(t=>rt(e.ct,t)),i=V.fromMillis(t.localWriteTimeMs);return new nS(t.batchId,i,n,r)}function rg(e){var t;let n;let r=rm(e.readTime),i=void 0!==e.lastLimboFreeSnapshotVersion?rm(e.lastLimboFreeSnapshotVersion):F.min();return n=void 0!==e.query.documents?(1===(t=e.query).documents.length||I(),tj(tK(n3(t.documents[0])))):tj(ri(e.query)),new rl(n,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,i,eH.fromBase64String(e.resumeToken))}function rp(e,t){let n;let r=rd(t.snapshotVersion),i=rd(t.lastLimboFreeSnapshotVersion);n=tO(t.target)?rn(e.ct,t.target):rr(e.ct,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:tF(t.target),readTime:r,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:n}}function ry(e){let t=ri({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tQ(t,t.limit,"L"):t}function rw(e,t){return new nD(t.largestBatchId,rt(e.ct,t.overlayMutation))}function rv(e,t){let n=t.path.lastSegment();return[e,em(t.path.popLast()),n]}function rI(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rd(r.readTime),documentKey:em(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class rE{getBundleMetadata(e,t){return rb(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:rm(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return rb(e).put({bundleId:t.id,createTime:rd(n0(t.createTime)),version:t.version})}getNamedQuery(e,t){return rT(e).get(t).next(e=>{if(e)return{name:e.name,query:ry(e.bundledQuery),readTime:rm(e.readTime)}})}saveNamedQuery(e,t){return rT(e).put({name:t.name,readTime:rd(n0(t.readTime)),bundledQuery:t.bundledQuery})}}function rb(e){return eF(e,"bundles")}function rT(e){return eF(e,"namedQueries")}/**
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
 */class rx{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){let n=t.uid||"";return new rx(e,n)}getOverlay(e,t){return r_(e).get(rv(this.userId,t)).next(e=>e?rw(this.serializer,e):null)}getOverlays(e,t){let n=t4();return Z.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new nD(t,i);r.push(this.ht(e,s))}),Z.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(em(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(r_(e).J("collectionPathOverlayIndex",r))}),Z.waitFor(i)}getOverlaysForCollection(e,t,n){let r=t4(),i=em(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return r_(e).G("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let e=rw(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i;let s=t4(),a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return r_(e).Z({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=rw(this.serializer,t);s.size()<r||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):n.done()}).next(()=>s)}ht(e,t){return r_(e).put(function(e,t,n){let[r,i,s]=rv(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:re(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function r_(e){return eF(e,"documentOverlays")}/**
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
 */class rS{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(eX(e.integerValue));else if("doubleValue"in e){let n=eX(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),ed(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(eJ(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?tu(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):I()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),B.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}function rC(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=function(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rS.bt=new rS;class rD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.vt(n.value),n=t.next();this.Ct()}Ft(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Mt(n.value),n=t.next();this.xt()}Ot(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.vt(e);else if(e<2048)this.vt(960|e>>>6),this.vt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.vt(480|e>>>12),this.vt(128|63&e>>>6),this.vt(128|63&e);else{let e=t.codePointAt(0);this.vt(240|e>>>18),this.vt(128|63&e>>>12),this.vt(128|63&e>>>6),this.vt(128|63&e)}}this.Ct()}Nt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Mt(e);else if(e<2048)this.Mt(960|e>>>6),this.Mt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Mt(480|e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e);else{let e=t.codePointAt(0);this.Mt(240|e>>>18),this.Mt(128|63&e>>>12),this.Mt(128|63&e>>>6),this.Mt(128|63&e)}}this.xt()}Bt(e){let t=this.Lt(e),n=rC(t);this.kt(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}qt(e){let t=this.Lt(e),n=rC(t);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}vt(e){let t=255&e;0===t?(this.Kt(0),this.Kt(255)):255===t?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){let t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class rk{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class rN{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class rA{constructor(){this.Gt=new rD,this.zt=new rk(this.Gt),this.jt=new rN(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return 0===e?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class rR{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Jt(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new rR(this.indexId,this.documentKey,this.arrayValue,n)}}function rP(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=rM(e.arrayValue,t.arrayValue))?n:0!==(n=rM(e.directionalValue,t.directionalValue))?n:B.comparator(e.documentKey,t.documentKey)}function rM(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */class rV{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[],e.filters))t.isInequality()?this.Xt=t:this.Zt.push(t)}en(e){e.collectionGroup===this.collectionId||I();let t=K(e);if(void 0!==t&&!this.tn(t))return!1;let n=G(e),r=new Set,i=0,s=0;for(;i<n.length&&this.tn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Xt){if(!r.has(this.Xt.field.canonicalString())){let e=n[i];if(!this.nn(this.Xt,e)||!this.rn(this.Yt[s++],e))return!1}++i}for(;i<n.length;++i){let e=n[i];if(s>=this.Yt.length||!this.rn(this.Yt[s++],e))return!1}return!0}tn(e){for(let t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function rF(e){return e instanceof tv}function rL(e){return e instanceof tI&&tT(e)}function rO(e){return rF(e)||rL(e)||function(e){if(e instanceof tI&&tb(e)){for(let t of e.getFilters())if(!rF(t)&&!rL(t))return!1;return!0}return!1}(e)}function rU(e,t){return e instanceof tv||e instanceof tI||I(),t instanceof tv||t instanceof tI||I(),rB(e instanceof tv?t instanceof tv?tI.create([e,t],"and"):rq(e,t):t instanceof tv?rq(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||I(),tE(e)&&tE(t))return t_(e,t.getFilters());let n=tb(e)?e:t,r=tb(e)?t:e,i=n.filters.map(e=>rU(e,r));return tI.create(i,"or")}(e,t))}function rq(e,t){if(tE(t))return t_(t,e.getFilters());{let n=t.filters.map(t=>rU(e,t));return tI.create(n,"or")}}function rB(e){if(e instanceof tv||e instanceof tI||I(),e instanceof tv)return e;let t=e.getFilters();if(1===t.length)return rB(t[0]);if(tx(e))return e;let n=t.map(e=>rB(e)),r=[];return n.forEach(t=>{t instanceof tv?r.push(t):t instanceof tI&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:tI.create(r,e.op)}/**
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
 */class rz{constructor(){this.sn=new rK}addToCollectionParentIndex(e,t){return this.sn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(H.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(H.min())}updateCollectionGroup(e,t,n){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class rK{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eK(O.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eK(O.comparator)).toArray()}}/**
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
 */let rG=new Uint8Array(0);class r${constructor(e,t){this.user=e,this.databaseId=t,this.on=new rK,this._n=new tZ(e=>tF(e),(e,t)=>tL(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});let i={collectionId:n,parent:em(r)};return rj(e).put(i)}return Z.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return rj(e).G(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(ef(r.parent))}return n})}addFieldIndex(e,t){let n=rH(e),r={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete r.indexId;let i=n.add(r);if(t.indexState){let n=rW(e);return i.next(e=>{n.put(rI(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let n=rH(e),r=rW(e),i=rQ(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=rQ(e),r=!0,i=new Map;return Z.forEach(this.an(t),t=>this.un(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=t6(),r=[];return Z.forEach(i,(i,s)=>{p("IndexedDbIndexManager",`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${tF(t)}`);let a=function(e,t){let n=K(t);if(void 0===n)return null;for(let t of tU(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let n=new Map;for(let r of G(t))for(let t of tU(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){let n=[],r=!0;for(let i of G(t)){let t=0===i.kind?tq(e,i.fieldPath,e.startAt):tB(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new tf(n,r)}(s,i),u=function(e,t){let n=[],r=!0;for(let i of G(t)){let t=0===i.kind?tB(e,i.fieldPath,e.endAt):tq(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new tf(n,r)}(s,i),h=this.cn(i,s,l),c=this.cn(i,s,u),d=this.ln(i,s,o),m=this.hn(i.indexId,a,h,l.inclusive,c,u.inclusive,d);return Z.forEach(m,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{let n=B.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Z.resolve(null)})}an(e){let t=this._n.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof tv||t instanceof tI||I(),t instanceof tv)return t;if(1===t.filters.length)return e(t.filters[0]);let n=t.filters.map(t=>e(t)),r=tI.create(n,t.op);return rO(r=rB(r))?r:(r instanceof tI||I(),tE(r)||I(),r.filters.length>1||I(),r.filters.reduce((e,t)=>rU(e,t)))}(/**
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
 */function e(t){var n,r;if(t instanceof tv||t instanceof tI||I(),t instanceof tv){if(t instanceof tA){let e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>tv.create(t.field,"==",e)))||[];return tI.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return tI.create(i,t.op)}(e));return rO(t)||I(),rF(t)||rL(t)?[t]:t.getFilters()})(tI.create(e.filters,"and")).map(t=>tV(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,t)),t}hn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let h=0;h<o;++h){let o=t?this.Pn(t[h/l]):rG,c=this.In(e,o,n[h%l],r),d=this.Tn(e,o,i[h%l],s),m=a.map(t=>this.In(e,o,t,!0));u.push(...this.createRange(c,d,m))}return u}In(e,t,n,r){let i=new rR(e,B.empty(),t,n);return r?i:i.Jt()}Tn(e,t,n,r){let i=new rR(e,B.empty(),t,n);return r?i.Jt():i}un(e,t){let n=new rV(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.en(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2,r=this.an(t);return Z.forEach(r,t=>this.un(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new eK(q.comparator),n=!1;for(let r of e.filters)for(let e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(let n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}En(e,t){let n=new rA;for(let r of G(e)){let e=t.data.field(r.fieldPath);if(null==e)return null;let i=n.Ht(r.kind);rS.bt.Pt(e,i)}return n.Wt()}Pn(e){let t=new rA;return rS.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){let n=new rA;return rS.bt.Pt(tn(this.databaseId,t),n.Ht(function(e){let t=G(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Wt()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new rA);let i=0;for(let s of G(e)){let e=n[i++];for(let n of r)if(this.An(t,s.fieldPath)&&ti(e))r=this.Rn(r,s,e);else{let t=n.Ht(s.kind);rS.bt.Pt(e,t)}}return this.Vn(r)}cn(e,t,n){return this.ln(e,t,n.position)}Vn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Wt();return t}Rn(e,t,n){let r=[...e],i=[];for(let e of n.arrayValue.values||[])for(let n of r){let r=new rA;r.seed(n.Wt()),rS.bt.Pt(e,r.Ht(t.kind)),i.push(r)}return i}An(e,t){return!!e.filters.find(e=>e instanceof tv&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=rH(e),r=rW(e);return(t?n.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.G()).next(e=>{let t=[];return Z.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new j(t.sequenceNumber,new H(rm(t.readTime),new B(ef(t.documentKey)),t.largestBatchId)):j.empty(),r=e.fields.map(([e,t])=>new $(q.fromServerFormat(e),t));return new z(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:P(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=rH(e),i=rW(e);return this.mn(e).next(e=>r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>Z.forEach(t,t=>i.put(rI(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return Z.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?Z.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),Z.forEach(i,n=>this.fn(e,t,n).next(t=>{let i=this.gn(r,n);return t.isEqual(i)?Z.resolve():this.pn(e,r,n,t,i)}))))})}yn(e,t,n,r){return rQ(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.dn(n,t.key),documentKey:t.key.path.toArray()})}wn(e,t,n,r){return rQ(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.dn(n,t.key),t.key.path.toArray()])}fn(e,t,n){let r=rQ(e),i=new eK(rP);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.dn(n,t)])},(e,r)=>{i=i.add(new rR(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}gn(e,t){let n=new eK(rP),r=this.En(t,e);if(null==r)return n;let i=K(t);if(null!=i){let s=e.data.field(i.fieldPath);if(ti(s))for(let i of s.arrayValue.values||[])n=n.add(new rR(t.indexId,e.key,this.Pn(i),r))}else n=n.add(new rR(t.indexId,e.key,rG,r));return n}pn(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=e$(s),l=e$(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let r=n(o,l);r<0?t=!0:r>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(r(l),l=e$(a)):t?(i(o),o=e$(s)):(o=e$(s),l=e$(a))}}(r,i,rP,r=>{s.push(this.yn(e,t,n,r))},r=>{s.push(this.wn(e,t,n,r))}),Z.waitFor(s)}mn(e){let t=1;return rW(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>rP(e,t)).filter((e,t,n)=>!t||0!==rP(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let n=rP(i,e),s=rP(i,t);if(0===n)r[0]=e.Jt();else if(n>0&&s<0)r.push(i),r.push(i.Jt());else if(s>0)break}r.push(t);let i=[];for(let e=0;e<r.length;e+=2){if(this.Sn(r[e],r[e+1]))return[];let t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,rG,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,rG,[]];i.push(IDBKeyRange.bound(t,n))}return i}Sn(e,t){return rP(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(rY)}getMinOffset(e,t){return Z.mapArray(this.an(t),t=>this.un(e,t).next(e=>e||I())).next(rY)}}function rj(e){return eF(e,"collectionParents")}function rQ(e){return eF(e,"indexEntries")}function rH(e){return eF(e,"indexConfiguration")}function rW(e){return eF(e,"indexState")}function rY(e){0!==e.length||I();let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){let i=e[r].indexState.offset;0>W(i,t)&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new H(t.readTime,t.documentKey,n)}/**
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
 */let rX={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rJ{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new rJ(e,rJ.DEFAULT_COLLECTION_PERCENTILE,rJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function rZ(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.Z({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{1===o||I()}));let u=[];for(let e of n.mutations){var h,c;let r=(h=e.key.path,c=n.batchId,[t,em(h),c]);s.push(i.delete(r)),u.push(e.key)}return Z.waitFor(s).next(()=>u)}function r0(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw I();t=e.noDocument}return JSON.stringify(t).length}/**
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
 */rJ.DEFAULT_COLLECTION_PERCENTILE=10,rJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rJ.DEFAULT=new rJ(41943040,rJ.DEFAULT_COLLECTION_PERCENTILE,rJ.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rJ.DISABLED=new rJ(-1,0,0);class r1{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.bn={}}static lt(e,t,n,r){""!==e.uid||I();let i=e.isAuthenticated()?e.uid:"";return new r1(i,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return r5(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=r4(e),s=r5(e);return s.add({}).next(a=>{"number"==typeof a||I();let o=new nS(a,t,n,r),l=function(e,t,n){let r=n.baseMutations.map(t=>re(e.ct,t)),i=n.mutations.map(t=>re(e.ct,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,o),u=[],h=new eK((e,t)=>P(e.canonicalString(),t.canonicalString()));for(let e of r){let t=[this.userId,em(e.key.path),a];h=h.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,ep))}return h.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.bn[a]=o.keys()}),Z.waitFor(u).next(()=>o)})}lookupMutationBatch(e,t){return r5(e).get(t).next(e=>e?(e.userId===this.userId||I(),rf(this.serializer,e)):null)}Dn(e,t){return this.bn[t]?Z.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.bn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return r5(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(t.batchId>=n||I(),i=rf(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return r5(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return r5(e).G("userMutationsIndex",t).next(e=>e.map(e=>rf(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=[this.userId,em(t.path)],r=IDBKeyRange.lowerBound(n),i=[];return r4(e).Z({range:r},(n,r,s)=>{let[a,o,l]=n,u=ef(o);if(a===this.userId&&t.path.isEqual(u))return r5(e).get(l).next(e=>{if(!e)throw I();e.userId===this.userId||I(),i.push(rf(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eK(P),r=[];return t.forEach(t=>{let i=[this.userId,em(t.path)],s=IDBKeyRange.lowerBound(i),a=r4(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,l=ef(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),Z.waitFor(r).next(()=>this.vn(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=[this.userId,em(n)],s=IDBKeyRange.lowerBound(i),a=new eK(P);return r4(e).Z({range:s},(e,t,i)=>{let[s,o,l]=e,u=ef(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.vn(e,a))}vn(e,t){let n=[],r=[];return t.forEach(t=>{r.push(r5(e).get(t).next(e=>{if(null===e)throw I();e.userId===this.userId||I(),n.push(rf(this.serializer,e))}))}),Z.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return rZ(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),Z.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Z.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return r4(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let t=ef(e[1]);r.push(t)}else n.done()}).next(()=>{0===r.length||I()})})}containsKey(e,t){return r2(e,this.userId,t)}Fn(e){return r8(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function r2(e,t,n){let r=[t,em(n.path)],i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return r4(e).Z({range:s,Y:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function r5(e){return eF(e,"mutations")}function r4(e){return eF(e,"documentMutations")}function r8(e){return eF(e,"mutationQueues")}/**
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
 */class r3{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new r3(0)}static On(){return new r3(-1)}}/**
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
 */class r6{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next(t=>{let n=new r3(t.highestTargetId);return t.highestTargetId=n.next(),this.Bn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(e=>F.fromTimestamp(new V(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Nn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Bn(e,r)))}addTargetData(e,t){return this.Ln(e,t).next(()=>this.Nn(e).next(n=>(n.targetCount+=1,this.kn(t,n),this.Bn(e,n))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>r9(e).delete(t.targetId)).next(()=>this.Nn(e)).next(t=>(t.targetCount>0||I(),t.targetCount-=1,this.Bn(e,t)))}removeTargets(e,t,n){let r=0,i=[];return r9(e).Z((s,a)=>{let o=rg(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>Z.waitFor(i)).next(()=>r)}forEachTarget(e,t){return r9(e).Z((e,n)=>{let r=rg(n);t(r)})}Nn(e){return r7(e).get("targetGlobalKey").next(e=>(null!==e||I(),e))}Bn(e,t){return r7(e).put("targetGlobalKey",t)}Ln(e,t){return r9(e).put(rp(this.serializer,t))}kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Nn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=tF(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return r9(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=rg(n);tL(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=ie(e);return t.forEach(t=>{let s=em(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),Z.waitFor(r)}removeMatchingKeys(e,t,n){let r=ie(e);return Z.forEach(t,t=>{let i=em(t.path);return Z.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=ie(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ie(e),i=t6();return r.Z({range:n,Y:!0},(e,t,n)=>{let r=ef(e[1]),s=new B(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=em(t.path),r=IDBKeyRange.bound([n],[n+"\x00"],!1,!0),i=0;return ie(e).Z({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ut(e,t){return r9(e).get(t).next(e=>e?rg(e):null)}}function r9(e){return eF(e,"targets")}function r7(e){return eF(e,"targetGlobal")}function ie(e){return eF(e,"targetDocuments")}/**
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
 */function it([e,t],[n,r]){let i=P(e,n);return 0===i?P(t,r):i}class ir{constructor(e){this.qn=e,this.buffer=new eK(it),this.Qn=0}Kn(){return++this.Qn}$n(e){let t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>it(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ii{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Un=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return null!==this.Un}Wn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ei(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await J(e)}await this.Wn(3e5)})}}class is{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Z.resolve(ec.ae);let n=new ir(t);return this.Gn.forEachTarget(e,e=>n.$n(e.sequenceNumber)).next(()=>this.Gn.jn(e,e=>n.$n(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Gn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(rX)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rX):this.Hn(e,t))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let n,r,i,s,a,l,u;let h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),g()<=o.in.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-h}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(l-a)+"ms\n"+`	Removed ${e} documents in `+(u-l)+"ms\n"+`Total Duration: ${u-h}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class ia{constructor(e,t){this.db=e,this.garbageCollector=new is(this,t)}zn(e){let t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Jn(e){let t=0;return this.jn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,(e,n)=>t(n))}addReference(e,t,n){return io(e,n)}removeReference(e,t,n){return io(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return io(e,t)}Zn(e,t){let n;return n=!1,r8(e).X(r=>r2(e,r,t).next(e=>(e&&(n=!0),Z.resolve(!e)))).next(()=>n)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Yn(e,(s,a)=>{if(a<=t){let t=this.Zn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,F.min()),ie(e).delete([0,em(s.path)])))});r.push(t)}}).next(()=>Z.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return io(e,t)}Yn(e,t){let n=ie(e),r,i=ec.ae;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==ec.ae&&t(new B(ef(r)),i),i=a,r=s):i=ec.ae}).next(()=>{i!==ec.ae&&t(new B(ef(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function io(e,t){var n;return ie(e).put((n=e.currentSequenceNumber,{targetId:0,path:em(t.path),sequenceNumber:n}))}/**
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
 */class il{constructor(){this.changes=new tZ(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tm.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?Z.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iu{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return id(e).put(n)}removeEntry(e,t,n){return id(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Xn(e,n)))}getEntry(e,t){let n=tm.newInvalidDocument(t);return id(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(im(t))},(e,r)=>{n=this.er(t,r)}).next(()=>n)}tr(e,t){let n={size:0,document:tm.newInvalidDocument(t)};return id(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(im(t))},(e,r)=>{n={document:this.er(t,r),size:r0(r)}}).next(()=>n)}getEntries(e,t){let n=t0;return this.nr(e,t,(e,t)=>{let r=this.er(e,t);n=n.insert(e,r)}).next(()=>n)}rr(e,t){let n=t0,r=new eq(B.comparator);return this.nr(e,t,(e,t)=>{let i=this.er(e,t);n=n.insert(e,i),r=r.insert(e,r0(t))}).next(()=>({documents:n,ir:r}))}nr(e,t,n){if(t.isEmpty())return Z.resolve();let r=new eK(ip);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(im(r.first()),im(r.last())),s=r.getIterator(),a=s.getNext();return id(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=B.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>ip(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.W(im(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){let i=t.path,s=[i.popLast().toArray(),i.lastSegment(),rc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return id(e).G(IDBKeyRange.bound(s,a,!0)).next(e=>{let n=t0;for(let i of e){let e=this.er(B.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(tX(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=t0,s=ig(t,n),a=ig(t,H.max());return id(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.er(B.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ih(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ic(e).get("remoteDocumentGlobalKey").next(e=>(e||I(),e))}Xn(e,t){return ic(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){let e=function(e,t){let n;if(t.document)n=function(e,t,n){let r=n4(e,t.name),i=n0(t.updateTime),s=t.createTime?n0(t.createTime):F.min(),a=new td({mapValue:{fields:t.fields}}),o=tm.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=B.fromSegments(t.noDocument.path),r=rm(t.noDocument.readTime);n=tm.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return I();{let e=B.fromSegments(t.unknownDocument.path),r=rm(t.unknownDocument.version);n=tm.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){let t=new V(e[0],e[1]);return F.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(F.min())))return e}return tm.newInvalidDocument(e)}}class ih extends il{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new tZ(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new eK((e,t)=>P(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this._r.get(i);if(t.push(this.sr.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=rh(this.sr.serializer,s);r=r.add(i.path.popLast());let l=r0(o);n+=l-a.size,t.push(this.sr.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let n=rh(this.sr.serializer,s.convertToNoDocument(F.min()));t.push(this.sr.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.sr.updateMetadata(e,n)),Z.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next(e=>(this._r.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.sr.rr(e,t).next(({documents:e,ir:t})=>(t.forEach((t,n)=>{this._r.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ic(e){return eF(e,"remoteDocumentGlobal")}function id(e){return eF(e,"remoteDocumentsV14")}function im(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ig(e,t){let n=t.documentKey.path.toArray();return[e,rc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ip(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=P(n[e],r[e]))return i;return(i=P(n.length,r.length))||(i=P(n[n.length-2],r[r.length-2]))||P(n[n.length-1],r[r.length-1])}/**
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
 */class iy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iw{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ny(n.mutation,e,ej.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,t6()).next(()=>t))}getLocalViewOfDocuments(e,t,n=t6()){let r=t4();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=t2();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=t4();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,t6()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=t0,s=t4(),a=t4();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nI)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),ny(a.mutation,t,a.mutation.getFieldMask(),V.now())):s.set(t.key,ej.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new iy(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=t4(),r=new eq((e,t)=>e-t),i=t6();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ej.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||t6()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=t4();l.forEach(e=>{if(!i.has(e)){let r=np(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Z.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Z.resolve(t4()),a=-1,o=i;return s.next(t=>Z.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Z.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,t6())).next(e=>({batchId:a,changes:t5(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(e=>{let t=t2();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=t2();return this.indexManager.getCollectionParents(e,r).next(s=>Z.forEach(s,s=>{var a;let o=(a=s.child(r),new tz(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,tm.newInvalidDocument(r)))});let n=t2();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&ny(s.mutation,i,ej.empty(),V.now()),tX(t,i)&&(n=n.insert(e,i))}),n})}}/**
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
 */class iv{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return Z.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,{id:t.id,version:t.version,createTime:n0(t.createTime)}),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,{name:t.name,query:ry(t.bundledQuery),readTime:n0(t.readTime)}),Z.resolve()}}/**
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
 */class iI{constructor(){this.overlays=new eq(B.comparator),this.cr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){let n=t4();return Z.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),Z.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.cr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.cr.delete(n)),Z.resolve()}getOverlaysForCollection(e,t,n){let r=t4(),i=t.length+1,s=new B(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Z.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eq((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=t4(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=t4(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return Z.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nD(t,n));let i=this.cr.get(t);void 0===i&&(i=t6(),this.cr.set(t,i)),this.cr.set(t,i.add(n.key))}}/**
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
 */class iE{constructor(){this.lr=new eK(ib.hr),this.Pr=new eK(ib.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){let n=new ib(e,t);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Er(new ib(e,t))}dr(e,t){e.forEach(e=>this.removeReference(e,t))}Ar(e){let t=new B(new O([])),n=new ib(t,e),r=new ib(t,e+1),i=[];return this.Pr.forEachInRange([n,r],e=>{this.Er(e),i.push(e.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){let t=new B(new O([])),n=new ib(t,e),r=new ib(t,e+1),i=t6();return this.Pr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ib(e,0),n=this.lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ib{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return B.comparator(e.key,t.key)||P(e.mr,t.mr)}static Ir(e,t){return P(e.mr,t.mr)||B.comparator(e.key,t.key)}}/**
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
 */class iT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new eK(ib.hr)}checkEmpty(e){return Z.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nS(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.pr=this.pr.add(new ib(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Z.resolve(s)}lookupMutationBatch(e,t){return Z.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.wr(t+1),r=n<0?0:n;return Z.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ib(t,0),r=new ib(t,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],e=>{let t=this.yr(e.mr);i.push(t)}),Z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eK(P);return t.forEach(e=>{let t=new ib(e,0),r=new ib(e,Number.POSITIVE_INFINITY);this.pr.forEachInRange([t,r],e=>{n=n.add(e.mr)})}),Z.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;B.isDocumentKey(i)||(i=i.child(""));let s=new ib(new B(i),0),a=new eK(P);return this.pr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.mr)),!0)},s),Z.resolve(this.Sr(a))}Sr(e){let t=[];return e.forEach(e=>{let n=this.yr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.br(t.batchId,"removed")||I(),this.mutationQueue.shift();let n=this.pr;return Z.forEach(t.mutations,r=>{let i=new ib(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.pr=n})}Cn(e){}containsKey(e,t){let n=new ib(t,0),r=this.pr.firstAfterOrEqual(n);return Z.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}br(e,t){return this.wr(e)}wr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}yr(e){let t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ix{constructor(e){this.Dr=e,this.docs=new eq(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return Z.resolve(n?n.document.mutableCopy():tm.newInvalidDocument(t))}getEntries(e,t){let n=t0;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():tm.newInvalidDocument(e))}),Z.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=t0,s=t.path,a=new B(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=W(Q(a),n)||(r.has(a.key)||tX(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Z.resolve(i)}getAllFromCollectionGroup(e,t,n,r){I()}vr(e,t){return Z.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new i_(this)}getSize(e){return Z.resolve(this.size)}}class i_ extends il{constructor(e){super(),this.sr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(n)}),Z.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
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
 */class iS{constructor(e){this.persistence=e,this.Cr=new tZ(e=>tF(e),tL),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new iE,this.targetCount=0,this.Or=r3.xn()}forEachTarget(e,t){return this.Cr.forEach((e,n)=>t(n)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fr&&(this.Fr=t),Z.resolve()}Ln(e){this.Cr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Or=new r3(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Ln(t),Z.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Cr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),Z.waitFor(i).next(()=>r)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){let n=this.Cr.get(t)||null;return Z.resolve(n)}addMatchingKeys(e,t,n){return this.Mr.Tr(t,n),Z.resolve()}removeMatchingKeys(e,t,n){this.Mr.dr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Z.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),Z.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Mr.Vr(t);return Z.resolve(n)}containsKey(e,t){return Z.resolve(this.Mr.containsKey(t))}}/**
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
 */class iC{constructor(e,t){this.Nr={},this.overlays={},this.Br=new ec(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new iS(this),this.indexManager=new rz,this.remoteDocumentCache=new ix(e=>this.referenceDelegate.qr(e)),this.serializer=new ru(t),this.Qr=new iv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Nr[e.toKey()];return n||(n=new iT(t,this.referenceDelegate),this.Nr[e.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);let r=new iD(this.Br.next());return this.referenceDelegate.Kr(),n(r).next(e=>this.referenceDelegate.$r(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ur(e,t){return Z.or(Object.values(this.Nr).map(n=>()=>n.containsKey(e,t)))}}class iD extends X{constructor(e){super(),this.currentSequenceNumber=e}}class ik{constructor(e){this.persistence=e,this.Wr=new iE,this.Gr=null}static zr(e){return new ik(e)}get jr(){if(this.Gr)return this.Gr;throw I()}addReference(e,t,n){return this.Wr.addReference(n,t),this.jr.delete(n.toString()),Z.resolve()}removeReference(e,t,n){return this.Wr.removeReference(n,t),this.jr.add(n.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(e=>this.jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.jr,n=>{let r=B.fromPath(n);return this.Hr(e,r).next(e=>{e||t.removeEntry(r,F.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(e=>{e?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return Z.or([()=>Z.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
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
 */class iN{constructor(e){this.serializer=e}B(e,t,n,r){let i=new ee("createOrUpgrade",t);n<1&&r>=1&&(!function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eg,{unique:!0}),e.createObjectStore("documentMutations"),iA(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Z.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),iA(e)),s=s.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>i.store("mutations").G().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",eg,{unique:!0});let n=i.store("mutations"),r=t.map(e=>n.put(e));return Z.waitFor(r)}))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Yr(i))),n<6&&r>=6&&(s=s.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Zr(i)))),n<7&&r>=7&&(s=s.next(()=>this.Xr(i))),n<8&&r>=8&&(s=s.next(()=>this.ei(e,i))),n<9&&r>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(s=s.next(()=>this.ti(i))),n<11&&r>=11&&(s=s.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:eD});t.createIndex("collectionPathOverlayIndex",ek,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",eN,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:ey});t.createIndex("documentKeyIndex",ew),t.createIndex("collectionGroupIndex",ev)})(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.ri(e,i))),n<15&&r>=15&&(s=s.next(()=>{e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:ex}).createIndex("sequenceNumberIndex",e_,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:eS}).createIndex("documentKeyIndex",eC,{unique:!1})})),s}Zr(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=r0(n)}).next(()=>{let n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Yr(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.G().next(t=>Z.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.G("userMutationsIndex",r).next(n=>Z.forEach(n,n=>{n.userId===t.userId||I();let r=rf(this.serializer,n);return rZ(e,t.userId,r).next(()=>{})}))}))}Xr(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{let s=new O(n),a=[0,em(s)];r.push(t.get(a).next(n=>n?Z.resolve():t.put({targetId:0,path:em(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>Z.waitFor(r))})}ei(e,t){e.createObjectStore("collectionParents",{keyPath:eT});let n=t.store("collectionParents"),r=new rK,i=e=>{if(r.add(e)){let t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:em(r)})}};return t.store("remoteDocuments").Z({Y:!0},(e,t)=>{let n=new O(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([e,t,n],r)=>{let s=ef(t);return i(s.popLast())}))}ti(e){let t=e.store("targets");return t.Z((e,n)=>{let r=rg(n),i=rp(this.serializer,r);return t.put(i)})}ni(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new B(O.fromString(n.document.name).popFirst(5)):n.noDocument?B.fromSegments(n.noDocument.path):n.unknownDocument?B.fromSegments(n.unknownDocument.path):I()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>Z.waitFor(r))}ri(e,t){var n;let r=t.store("mutations"),i=(n=this.serializer,new iu(n)),s=new iC(ik.zr,this.serializer.ct);return r.G().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:t6();rf(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),Z.forEach(n,(e,n)=>{let r=new d(n),a=rx.lt(this.serializer,r),o=s.getIndexManager(r),l=r1.lt(r,this.serializer,o,s.referenceDelegate);return new iw(i,l,a,o).recalculateAndSaveOverlaysForDocumentKeys(new eV(t,ec.ae),e).next()})})}}function iA(e){e.createObjectStore("targetDocuments",{keyPath:eE}).createIndex("documentTargetsIndex",eb,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eI,{unique:!0}),e.createObjectStore("targetGlobal")}let iR="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class iP{constructor(e,t,n,r,i,s,a,o,l,u,h=15){var c;if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=a,this.si=l,this.oi=u,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=e=>Promise.resolve(),!iP.v())throw new b(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ia(this,r),this.Pi=t+"main",this.serializer=new ru(o),this.Ii=new et(this.Pi,this._i,new iN(this.serializer)),this.kr=new r6(this.referenceDelegate,this.serializer),this.remoteDocumentCache=(c=this.serializer,new iu(c)),this.Qr=new rE,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,!1===u&&y("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new b(E.FAILED_PRECONDITION,iR);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new ec(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>iV(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.gi(e).next(()=>!1):!!t&&this.pi(e).next(()=>!0))).catch(e=>{if(ei(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return iM(e).get("owner").next(e=>Z.resolve(this.yi(e)))}wi(e){return iV(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=eF(e,"clientMetadata");return t.G().next(e=>{let n=this.Di(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Z.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ti)for(let t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?Z.resolve(!0):iM(e).get("owner").next(t=>{if(null!==t&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new b(E.FAILED_PRECONDITION,iR);return!1}}return!(!this.networkEnabled||!this.inForeground)||iV(e).G().next(e=>void 0===this.Di(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new eV(e,ec.ae);return this.gi(t).next(()=>this.wi(t))}),this.Ii.close(),this.Oi()}Di(e,t){return e.filter(e=>this.bi(e.updateTimeMs,t)&&!this.Ci(e.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>iV(e).G().next(e=>this.Di(e,18e5).map(e=>e.clientId)))}get started(){return this.Lr}getMutationQueue(e,t){return r1.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new r$(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return rx.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,n){var r;let i;p("IndexedDbPersistence","Starting transaction:",e);let s="readonly"===t?"readonly":"readwrite",a=15===(r=this._i)?eM:14===r?eP:13===r?eP:12===r?eR:11===r?eA:void I();return this.Ii.runTransaction(e,s,a,r=>(i=new eV(r,this.Br?this.Br.next():ec.ae),"readwrite-primary"===t?this.mi(i).next(e=>!!e||this.fi(i)).next(t=>{if(!t)throw y(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new b(E.FAILED_PRECONDITION,Y);return n(i)}).next(e=>this.pi(i).next(()=>e)):this.Bi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Bi(e){return iM(e).get("owner").next(e=>{if(null!==e&&this.bi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.yi(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new b(E.FAILED_PRECONDITION,iR)})}pi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return iM(e).put("owner",t)}static v(){return et.v()}gi(e){let t=iM(e);return t.get("owner").next(e=>this.yi(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Z.resolve())}bi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(y(`Detected an update time that is in the future: ${e} > ${n}`),!1))}di(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground="visible"===this.document.visibilityState)}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ai=()=>{this.Fi();let e=/(?:Version|Mobile)\/1[456]/;(0,l.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{let n=null!==(null===(t=this.Ti)||void 0===t?void 0:t.getItem(this.vi(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return y("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){y("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch(e){}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function iM(e){return eF(e,"owner")}function iV(e){return eF(e,"clientMetadata")}/**
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
 */class iF{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Li=n,this.ki=r}static qi(e,t){let n=t6(),r=t6();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new iF(e,t.fromCache,n,r)}}/**
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
 */class iL{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.$i(e,t).next(i=>i||this.Ui(e,t,r,n)).next(n=>n||this.Wi(e,t))}$i(e,t){if(tG(t))return Z.resolve(null);let n=tj(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tj(t=tQ(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=t6(...r);return this.Ki.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Gi(t,r);return this.zi(t,s,i,n.readTime)?this.$i(e,tQ(t,null,"F")):this.ji(e,s,t,n)}))})))}Ui(e,t,n,r){return tG(t)||r.isEqual(F.min())?this.Wi(e,t):this.Ki.getDocuments(e,n).next(i=>{let s=this.Gi(t,i);return this.zi(t,s,n,r)?this.Wi(e,t):(g()<=o.in.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tY(t)),this.ji(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=F.fromTimestamp(1e9===r?new V(n+1,0):new V(n,r));return new H(i,B.empty(),-1)}(r,0)))})}Gi(e,t){let n=new eK(tJ(e));return t.forEach((t,r)=>{tX(e,r)&&(n=n.add(r))}),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(e,t){return g()<=o.in.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",tY(t)),this.Ki.getDocumentsMatchingQuery(e,t,H.min())}ji(e,t,n,r){return this.Ki.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class iO{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new eq(P),this.Yi=new tZ(e=>tF(e),tL),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(n)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iw(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}async function iU(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.es(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=t6();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({ts:e,removedBatchIds:i,addedBatchIds:s}))})})}function iq(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}async function iB(e,t,n){let r=e.Ji.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!ei(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ji=e.Ji.remove(t),e.Yi.delete(r.target)}function iz(e,t,n){let r=F.min(),i=t6();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,n){let r=e.Yi.get(n);return void 0!==r?Z.resolve(e.Ji.get(r)):e.kr.getTargetData(t,n)})(e,s,tj(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Hi.getDocumentsMatchingQuery(s,t,n?r:F.min(),n?i:t6())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Zi.get(r)||F.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Zi.set(r,s),{documents:n,ss:i}}))}class iK{constructor(){this.activeTargetIds=t9}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iG{constructor(){this.Hs=new iK,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,n){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new iK,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class i${Ys(e){}shutdown(){}}/**
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
 */class ij{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ro))e(0)}no(){for(let e of(p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ro))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let iQ=null;function iH(){return null===iQ?iQ=268435456+Math.round(2147483648*Math.random()):iQ++,"0x"+iQ.toString(16)}/**
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
 */let iW={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iY{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */let iX="WebChannelConnection";class iJ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=t+"://"+e.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(e,t,n,r,i){let s=iH(),a=this.mo(e,t);p("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(o,r,i),this.po(e,a,o,n).then(t=>(p("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw w("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}yo(e,t,n,r,i,s){return this.Vo(e,t,n,r,i)}fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+m}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}mo(e,t){let n=iW[e];return`${this.To}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,n,r){let i=iH();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();p(iX,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:p(iX,`RPC '${e}' ${i} timed out`),a(new b(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(p(iX,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new b(E.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{p(iX,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);p(iX,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}wo(e,t,n){let i=iH(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this.fo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let c=s.join("");p(iX,`Creating RPC '${e}' stream ${i}: ${c}`,l);let d=a.createWebChannel(c,l),m=!1,f=!1,g=new iY({so:t=>{f?p(iX,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(m||(p(iX,`Opening RPC '${e}' stream ${i} transport.`),d.open(),m=!0),p(iX,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},oo:()=>d.close()}),y=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return y(d,u.ii.EventType.OPEN,()=>{f||p(iX,`RPC '${e}' stream ${i} transport opened.`)}),y(d,u.ii.EventType.CLOSE,()=>{f||(f=!0,p(iX,`RPC '${e}' stream ${i} transport closed`),g.Po())}),y(d,u.ii.EventType.ERROR,t=>{f||(f=!0,w(iX,`RPC '${e}' stream ${i} transport errored:`,t),g.Po(new b(E.UNAVAILABLE,"The operation could not be completed")))}),y(d,u.ii.EventType.MESSAGE,t=>{var n;if(!f){let s=t.data[0];s||I();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){p(iX,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return nN(t)}(t),s=a.message;void 0===n&&(n=E.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),f=!0,g.Po(new b(n,s)),d.close()}else p(iX,`RPC '${e}' stream ${i} received:`,s),g.Io(s)}}),y(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?p(iX,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&p(iX,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function iZ(){return"undefined"!=typeof document?document:null}/**
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
 */function i0(e){return new nY(e,!0)}/**
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
 */class i1{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();let t=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class i2{constructor(e,t,n,r,i,s,a,o){this.ii=e,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new i1(e,t)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==e?this.Ko.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(y(t.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;let e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.ko===t&&this.e_(e,n)},t=>{e(()=>{let e=new b(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.t_(e)})})}e_(e,t){let n=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{n(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(e=>{n(()=>this.t_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return p("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i5 extends i2{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:I(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||I(),eH.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||I(),eH.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:nN(e.code);return new b(t,e.message||"")}(l);n=new nz(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=n4(e,r.document.name),s=n0(r.document.updateTime),a=r.document.createTime?n0(r.document.createTime):F.min(),o=new td({mapValue:{fields:r.document.fields}}),l=tm.newFoundDocument(i,s,a,o),u=r.targetIds||[],h=r.removedTargetIds||[];n=new nq(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=n4(e,r.document),s=r.readTime?n0(r.readTime):F.min(),a=tm.newNoDocument(i,s),o=r.removedTargetIds||[];n=new nq([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=n4(e,r.document),s=r.removedTargetIds||[];n=new nq([],s,i,null)}else{if(!("filter"in t))return I();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nk(r,i),a=e.targetId;n=new nB(a,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return F.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?n0(t.readTime):F.min()}(e);return this.listener.r_(t,n)}i_(e){let t={};t.database=n6(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tO(r)?{documents:rn(e,r)}:{query:rr(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nZ(e,t.resumeToken);let r=nX(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(F.min())>0){n.readTime=nJ(e,t.snapshotVersion.toTimestamp());let r=nX(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Ho(t)}s_(e){let t={};t.database=n6(this.serializer),t.removeTarget=e,this.Ho(t)}}class i4 extends i2{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||I(),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||I(),t.map(e=>{let t;return(t=e.updateTime?n0(e.updateTime):n0(n)).isEqual(F.min())&&(t=n0(n)),new nd(t,e.transformResults||[])})):[]),i=n0(e.commitTime);return this.listener.u_(i,r)}return e.writeResults&&0!==e.writeResults.length&&I(),this.o_=!0,this.listener.c_()}l_(){let e={};e.database=n6(this.serializer),this.Ho(e)}a_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>re(this.serializer,e))};this.Ho(t)}}/**
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
 */class i8 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new b(E.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Vo(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(E.UNKNOWN,e.toString())})}yo(e,t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.yo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(E.UNKNOWN,e.toString())})}terminate(){this.h_=!0}}class i3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,"Online"===e&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(y(t),this.d_=!1):p("OnlineStateTracker",t)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class i6{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(e=>{n.enqueueAndForget(async()=>{sa(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.y_.add(4),await i7(e),e.b_.set("Unknown"),e.y_.delete(4),await i9(e)}(this))})}),this.b_=new i3(n,r)}}async function i9(e){if(sa(e))for(let t of e.w_)await t(!0)}async function i7(e){for(let t of e.w_)await t(!1)}function se(e,t){e.p_.has(t.targetId)||(e.p_.set(t.targetId,t),ss(e)?si(e):sE(e).Uo()&&sn(e,t))}function st(e,t){let n=sE(e);e.p_.delete(t),n.Uo()&&sr(e,t),0===e.p_.size&&(n.Uo()?n.zo():sa(e)&&e.b_.set("Unknown"))}function sn(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}sE(e).i_(t)}function sr(e,t){e.D_.Be(t),sE(e).s_(t)}function si(e){e.D_=new nG({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),sE(e).start(),e.b_.A_()}function ss(e){return sa(e)&&!sE(e).$o()&&e.p_.size>0}function sa(e){return 0===e.y_.size}async function so(e){e.p_.forEach((t,n)=>{sn(e,t)})}async function sl(e,t){e.D_=void 0,ss(e)?(e.b_.m_(t),si(e)):e.b_.set("Unknown")}async function su(e,t,n){if(e.b_.set("Online"),t instanceof nz&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.p_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.p_.delete(r),e.D_.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sh(e,n)}else if(t instanceof nq?e.D_.We(t):t instanceof nB?e.D_.Ze(t):e.D_.je(t),!n.isEqual(F.min()))try{let t=await iq(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.D_.st(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.p_.get(r);i&&e.p_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.p_.get(t);if(!r)return;e.p_.set(t,r.withResumeToken(eH.EMPTY_BYTE_STRING,r.snapshotVersion)),sr(e,t);let i=new rl(r.target,t,n,r.sequenceNumber);sn(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await sh(e,t)}}async function sh(e,t,n){if(!ei(t))throw t;e.y_.add(1),await i7(e),e.b_.set("Offline"),n||(n=()=>iq(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await i9(e)})}function sc(e,t){return t().catch(n=>sh(e,n,t))}async function sd(e){let t=sb(e),n=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;sa(e)&&e.g_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.g_.length&&t.zo();break}n=r.batchId,function(e,t){e.g_.push(t);let n=sb(e);n.Uo()&&n.__&&n.a_(t.mutations)}(e,r)}catch(t){await sh(e,t)}sm(e)&&sf(e)}function sm(e){return sa(e)&&!sb(e).$o()&&e.g_.length>0}function sf(e){sb(e).start()}async function sg(e){sb(e).l_()}async function sp(e){let t=sb(e);for(let n of e.g_)t.a_(n.mutations)}async function sy(e,t,n){let r=e.g_.shift(),i=nC.from(r,t,n);await sc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sd(e)}async function sw(e,t){t&&sb(e).__&&await async function(e,t){var n;if(function(e){switch(e){default:return I();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}(n=t.code)&&n!==E.ABORTED){let n=e.g_.shift();sb(e).Go(),await sc(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sd(e)}}(e,t),sm(e)&&sf(e)}async function sv(e,t){e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");let n=sa(e);e.y_.add(3),await i7(e),n&&e.b_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.y_.delete(3),await i9(e)}async function sI(e,t){t?(e.y_.delete(2),await i9(e)):t||(e.y_.add(2),await i7(e),e.b_.set("Unknown"))}function sE(e){var t,n,r;return e.v_||(e.v_=(t=e.datastore,n=e.asyncQueue,r={_o:so.bind(null,e),uo:sl.bind(null,e),r_:su.bind(null,e)},t.P_(),new i5(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.w_.push(async t=>{t?(e.v_.Go(),ss(e)?si(e):e.b_.set("Unknown")):(await e.v_.stop(),e.D_=void 0)})),e.v_}function sb(e){var t,n,r;return e.C_||(e.C_=(t=e.datastore,n=e.asyncQueue,r={_o:sg.bind(null,e),uo:sw.bind(null,e),c_:sp.bind(null,e),u_:sy.bind(null,e)},t.P_(),new i4(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.w_.push(async t=>{t?(e.C_.Go(),await sd(e)):(await e.C_.stop(),e.g_.length>0&&(p("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
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
 */class sT{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new sT(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sx(e,t){if(y("AsyncQueue",`${t}: ${e}`),ei(e))return new b(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class s_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(e,t)=>B.comparator(e.key,t.key),this.keyedMap=t2(),this.sortedSet=new eq(this.comparator)}static emptySet(e){return new s_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof s_)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new s_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class sS{constructor(){this.F_=new eq(B.comparator)}track(e){let t=e.doc.key,n=this.F_.get(t);n?0!==e.type&&3===n.type?this.F_=this.F_.insert(t,e):3===e.type&&1!==n.type?this.F_=this.F_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.F_=this.F_.remove(t):1===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):I():this.F_=this.F_.insert(t,e)}M_(){let e=[];return this.F_.inorderTraversal((t,n)=>{e.push(n)}),e}}class sC{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new sC(e,t,s_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tH(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class sD{constructor(){this.x_=void 0,this.listeners=[]}}class sk{constructor(){this.queries=new tZ(e=>tW(e),tH),this.onlineState="Unknown",this.O_=new Set}}async function sN(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new sD),r)try{i.x_=await e.onListen(n)}catch(n){let e=sx(n,`Initialization of query '${tY(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.N_(e.onlineState),i.x_&&t.B_(i.x_)&&sM(e)}async function sA(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function sR(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.B_(r)&&(n=!0);i.x_=r}}n&&sM(e)}function sP(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function sM(e){e.O_.forEach(e=>{e.next()})}class sV{constructor(e,t,n){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new sC(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){return!e.fromCache||(!this.options.W_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Q_(e){if(e.docChanges.length>0)return!0;let t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}U_(e){e=sC.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class sF{constructor(e){this.key=e}}class sL{constructor(e){this.key=e}}class sO{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=t6(),this.mutatedKeys=t6(),this.na=tJ(e),this.ra=new s_(this.na)}get ia(){return this.X_}sa(e,t){let n=t?t.oa:new sS,r=t?t.ra:this.ra,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=tX(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),m=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),m=!0):this._a(u,h)||(n.track({type:2,doc:h}),m=!0,(o&&this.na(h,o)>0||l&&0>this.na(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),m=!0):u&&!h&&(n.track({type:1,doc:u}),m=!0,(o||l)&&(a=!0)),m&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ra:s,oa:n,zi:a,mutatedKeys:i}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;let i=e.oa.M_();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return n(e)-n(t)})(e.type,t.type)||this.na(e.doc,t.doc)),this.aa(n);let s=t?this.ua():[],a=0===this.ta.size&&this.current?1:0,o=a!==this.ea;return(this.ea=a,0!==i.length||o)?{snapshot:new sC(this.query,e.ra,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ra:this.ra,oa:new sS,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(e=>this.X_=this.X_.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.X_=this.X_.delete(e)),this.current=e.current)}ua(){if(!this.current)return[];let e=this.ta;this.ta=t6(),this.ra.forEach(e=>{this.la(e.key)&&(this.ta=this.ta.add(e.key))});let t=[];return e.forEach(e=>{this.ta.has(e)||t.push(new sL(e))}),this.ta.forEach(n=>{e.has(n)||t.push(new sF(n))}),t}ha(e){this.X_=e.ss,this.ta=t6();let t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return sC.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class sU{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sq{constructor(e){this.key=e,this.Ia=!1}}class sB{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new tZ(e=>tW(e),tH),this.da=new Map,this.Aa=new Set,this.Ra=new eq(B.comparator),this.Va=new Map,this.ma=new iE,this.fa={},this.ga=new Map,this.pa=r3.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function sz(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=sj.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=s8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sH.bind(null,e),e.Ta.r_=sR.bind(null,e.eventManager),e.Ta.Sa=sP.bind(null,e.eventManager),e),o=a.Ea.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Pa();else{let e=await (n=a.localStore,r=tj(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.kr.getTargetData(e,r).next(i=>i?(t=i,Z.resolve(t)):n.kr.allocateTargetId(e).next(i=>(t=new rl(r,i,"TargetPurposeListen",e.currentSequenceNumber),n.kr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.Ji.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await sK(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&se(a.remoteStore,e)}return s}async function sK(e,t,n,r,i){e.wa=(t,n,r)=>(async function(e,t,n,r){let i=t.view.sa(n);i.zi&&(i=await iz(e.localStore,t.query,!1).then(({documents:e})=>t.view.sa(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return s1(e,t.targetId,a.ca),a.snapshot})(e,t,n,r);let s=await iz(e.localStore,t,!0),a=new sO(t,s.ss),o=a.sa(s.documents),l=nU.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);s1(e,n,u.ca);let h=new sU(t,n,a);return e.Ea.set(t,h),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function sG(e,t){let n=e.Ea.get(t),r=e.da.get(n.targetId);if(r.length>1)return e.da.set(n.targetId,r.filter(e=>!tH(e,t))),void e.Ea.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await iB(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),st(e.remoteStore,n.targetId),sZ(e,n.targetId)}).catch(J)):(sZ(e,n.targetId),await iB(e.localStore,n.targetId,!0))}async function s$(e,t,n){let r=s3(e);try{var i;let e;let s=await function(e,t){let n,r;let i=V.now(),s=t.reduce((e,t)=>e.add(t.key),t6());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=t0,l=t6();return e.Xi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=nn(r.transform,e||null);null!=i&&(null===n&&(n=td.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nI(e.key,t,function e(t){let n=[];return eO(t.fields,(t,r)=>{let i=new q([t]);if(to(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new ej(n)}(t.value.mapValue),nm.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:t5(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.fa[r.currentUser.toKey()])||(e=new eq(P)),e=e.insert(i,n),r.fa[r.currentUser.toKey()]=e,await s5(r,s.changes),await sd(r.remoteStore)}catch(t){let e=sx(t,"Failed to persist write");n.reject(e)}}async function sj(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Xi.newChangeBuffer({trackRemovals:!0});r=e.Ji;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.kr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.kr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(eH.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,n)),r=r.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.kr.updateTargetData(i,h))});let h=t0,c=t6();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=t6(),o=t6(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=t0;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(F.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{ns:t,rs:o}})).next(e=>{h=e.ns,c=e.rs})),!n.isEqual(F.min())){let t=e.kr.getLastRemoteSnapshotVersion(i).next(t=>e.kr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return Z.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.Ji=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Va.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||I(),t.addedDocuments.size>0?r.Ia=!0:t.modifiedDocuments.size>0?r.Ia||I():t.removedDocuments.size>0&&(r.Ia||I(),r.Ia=!1))}),await s5(e,n,t)}catch(e){await J(e)}}function sQ(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Ea.forEach((e,n)=>{let r=n.view.N_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.N_(t)&&(n=!0)}),n&&sM(r),i.length&&e.Ta.r_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function sH(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Va.get(t),i=r&&r.key;if(i){let n=new eq(B.comparator);n=n.insert(i,tm.newNoDocument(i,F.min()));let r=t6().add(i),s=new nO(F.min(),new Map,new eq(P),n,r);await sj(e,s),e.Ra=e.Ra.remove(i),e.Va.delete(t),s2(e)}else await iB(e.localStore,t,!1).then(()=>sZ(e,t,n)).catch(J)}async function sW(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=Z.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||I(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=t6();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});sJ(e,r,null),sX(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await s5(e,i)}catch(e){await J(e)}}async function sY(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||I(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});sJ(e,t,n),sX(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await s5(e,i)}catch(e){await J(e)}}function sX(e,t){(e.ga.get(t)||[]).forEach(e=>{e.resolve()}),e.ga.delete(t)}function sJ(e,t,n){let r=e.fa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.fa[e.currentUser.toKey()]=r}}function sZ(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.da.get(t)))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(t=>{e.ma.containsKey(t)||s0(e,t)})}function s0(e,t){e.Aa.delete(t.path.canonicalString());let n=e.Ra.get(t);null!==n&&(st(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),s2(e))}function s1(e,t,n){for(let r of n)r instanceof sF?(e.ma.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(p("SyncEngine","New document in limbo: "+n),e.Aa.add(r),s2(e))}(e,r)):r instanceof sL?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||s0(e,r.key)):I()}function s2(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){let t=e.Aa.values().next().value;e.Aa.delete(t);let n=new B(O.fromString(t)),r=e.pa.next();e.Va.set(r,new sq(n)),e.Ra=e.Ra.insert(n,r),se(e.remoteStore,new rl(tj(tK(n.path)),r,"TargetPurposeLimboResolution",ec.ae))}}async function s5(e,t,n){let r=[],i=[],s=[];e.Ea.isEmpty()||(e.Ea.forEach((a,o)=>{s.push(e.wa(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=iF.qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ta.r_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>Z.forEach(t,t=>Z.forEach(t.Li,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>Z.forEach(t.ki,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!ei(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Ji.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Ji=e.Ji.insert(t,i)}}}(e.localStore,i))}async function s4(e,t){if(!e.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());let n=await iU(e.localStore,t);e.currentUser=t,e.ga.forEach(e=>{e.forEach(e=>{e.reject(new b(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ga.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await s5(e,n.ts)}}function s8(e,t){let n=e.Va.get(t);if(n&&n.Ia)return t6().add(n.key);{let n=t6(),r=e.da.get(t);if(!r)return n;for(let t of r){let r=e.Ea.get(t);n=n.unionWith(r.view.ia)}return n}}function s3(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=sW.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sY.bind(null,e),e}class s6{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=i0(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iL,r=e.initialUser,i=this.serializer,new iO(t,n,r,i)}createPersistence(e){return new iC(ik.zr,this.serializer)}createSharedClientState(e){return new iG}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class s9 extends s6{constructor(e,t,n){super(),this.Da=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Da.initialize(this,e),await s3(this.Da.syncEngine),await sd(this.Da.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new iL,r=e.initialUser,i=this.serializer,new iO(t,n,r,i)}createGarbageCollectionScheduler(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new ii(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){let n=new eh(t,this.persistence);return new eu(e.asyncQueue,n)}createPersistence(e){var t,n;let r;let i=(t=e.databaseInfo.databaseId,n=e.databaseInfo.persistenceKey,r=t.projectId,t.isDefaultDatabase||(r+="."+t.database),"firestore/"+n+"/"+r+"/"),s=void 0!==this.cacheSizeBytes?rJ.withCacheSize(this.cacheSizeBytes):rJ.DEFAULT;return new iP(this.synchronizeTabs,i,e.clientId,s,e.asyncQueue,"undefined"!=typeof window?window:null,iZ(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new iG}}class s7{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>sQ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=s4.bind(null,this.syncEngine),await sI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sk}createDatastore(e){var t,n,r;let i=i0(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new iJ(t));return n=e.authCredentials,r=e.appCheckCredentials,new i8(n,r,s,i)}createRemoteStore(e){var t,n,r,i;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=ij.v()?new ij:new i$,new i6(t,n,r,e=>sQ(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new sB(e,t,n,r,i,s);return a&&(o.ya=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){p("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await i7(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class ae{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):y("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class at{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=R.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=sx(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function an(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await iU(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ar(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ai(e);p("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>sv(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>sv(t.remoteStore,n)),e._onlineComponents=t}async function ai(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await an(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;w("Error using user provided cache. Falling back to memory cache: "+t),await an(e,new s6)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await an(e,new s6)}return e._offlineComponents}async function as(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await ar(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await ar(e,new s7))),e._onlineComponents}async function aa(e){let t=await as(e),n=t.eventManager;return n.onListen=sz.bind(null,t.syncEngine),n.onUnlisten=sG.bind(null,t.syncEngine),n}/**
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
 */function ao(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let al=new Map;function au(e){if(!B.isDocumentKey(e))throw new b(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ah(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":I()}function ac(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ah(e);throw new b(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class ad{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new b(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new b(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ao(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new b(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new b(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class am{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ad({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ad(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new _;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=al.get(e);t&&(p("ComponentProvider","Removing Datastore"),al.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class af{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new af(this.firestore,e,this._query)}}class ag{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ap(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ag(this.firestore,e,this._key)}}class ap extends af{constructor(e,t,n){super(e,t,tK(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ag(this.firestore,null,new B(e))}withConverter(e){return new ap(this.firestore,e,this._path)}}function ay(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=R.V()),/**
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
 */function(e,t,n){if(!n)throw new b(E.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof am){let r=O.fromString(t,...n);return au(r),new ag(e,null,new B(r))}{if(!(e instanceof ag||e instanceof ap))throw new b(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(O.fromString(t,...n));return au(r),new ag(e.firestore,e instanceof ap?e.converter:null,new B(r))}}/**
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
 */class aw{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new i1(this,"async_queue_retry"),this.Xa=()=>{let e=iZ();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};let e=iZ();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;let t=iZ();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});let t=new T;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ei(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){let t=this.Wa.then(()=>(this.Ja=!0,e().catch(e=>{let t;this.Ha=e,this.Ja=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw y("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Ja=!1,e))));return this.Wa=t,t}enqueueAfterDelay(e,t,n){this.eu(),this.Za.indexOf(e)>-1&&(t=0);let r=sT.createAndSchedule(this,e,t,n,e=>this.ru(e));return this.ja.push(r),r}eu(){this.Ha&&I()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(let t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{for(let t of(this.ja.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.ja))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){let t=this.ja.indexOf(e);this.ja.splice(t,1)}}function av(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class aI extends am{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new aw,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ax(this),this._firestoreClient.terminate()}}function aE(e,t,n){n||(n="(default)");let r=(0,s.qX)(e,"firestore");if(r.isInitialized(n)){let e=r.getImmediate({identifier:n}),i=r.getOptions(n);if((0,l.vZ)(i,t))return e;throw new b(E.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new b(E.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new b(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function ab(e,t){let n="object"==typeof e?e:(0,s.Mq)(),r=(0,s.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=ac(e,am))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&w("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new b(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new S(new x(t,n))}}(r,...e)}return r}function aT(e){return e._firestoreClient||ax(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ax(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new e2(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,ao(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new at(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
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
 */class a_{constructor(e){this._byteString=e}static fromBase64String(e){try{return new a_(eH.fromBase64String(e))}catch(e){throw new b(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new a_(eH.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class aS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class aC{constructor(e){this._methodName=e}}/**
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
 */class aD{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
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
 */let ak=/^__.*__$/;class aN{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nI(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aA(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class aR{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.au(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new aR(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.Pu(e),r}Iu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.cu({path:n,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return aB(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(0===e.length)throw this.Eu("Document fields must not be empty");if(aA(this.uu)&&ak.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class aP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||i0(e)}Ru(e,t,n,r=!1){return new aR({uu:e,methodName:t,Au:n,path:q.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}class aM extends aC{_toFieldTransform(e){if(2!==e.uu)throw 1===e.uu?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof aM}}function aV(e,t){if(aF(e=(0,l.m9)(e)))return aL("Unsupported field value:",t,e),function(e,t){let n={};return eU(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eO(e,(e,r)=>{let i=aV(r,t.lu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}(e,t);if(e instanceof aC)return function(e,t){if(!aA(t.uu))throw t.Eu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Eu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&4!==t.uu)throw t.Eu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=aV(i,t.Tu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!ed(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?ne(r):t7(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=V.fromDate(e);return{timestampValue:nJ(t.serializer,n)}}if(e instanceof V){let n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nJ(t.serializer,n)}}if(e instanceof aD)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof a_)return{bytesValue:nZ(t.serializer,e._byteString)};if(e instanceof ag){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Eu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:n1(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Eu(`Unsupported field value: ${ah(e)}`)}(e,t)}function aF(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof aD||e instanceof a_||e instanceof ag||e instanceof aC)}function aL(e,t,n){if(!aF(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ah(n);throw"an object"===r?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function aO(e,t,n){if((t=(0,l.m9)(t))instanceof aS)return t._internalPath;if("string"==typeof t)return aq(e,t);throw aB("Field path arguments must be of type string or ",e,!1,void 0,n)}let aU=RegExp("[~\\*/\\[\\]]");function aq(e,t,n){if(t.search(aU)>=0)throw aB(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aS(...t.split("."))._internalPath}catch(r){throw aB(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aB(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new b(E.INVALID_ARGUMENT,o+e+l)}/**
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
 */class az{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ag(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new aK(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(aG("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class aK extends az{data(){return super.data()}}function aG(e,t){return"string"==typeof t?aq(e,t):t instanceof aS?t._internalPath:t._delegate._internalPath}class a${convertValue(e,t="none"){switch(e3(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eX(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eJ(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw I()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eO(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new aD(eX(e.latitude),eX(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=e0(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(e1(e));default:return null}}convertTimestamp(e){let t=eY(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=O.fromString(e);ro(n)||I();let r=new e5(n.get(1),n.get(3)),i=new B(n.popFirst(5));return r.isEqual(t)||y(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class aj{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aQ extends az{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new aH(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(aG("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class aH extends aQ{data(e={}){return super.data(e)}}class aW{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new aj(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new aH(this._firestore,this._userDataWriter,n.key,n,new aj(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new b(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new aH(e._firestore,e._userDataWriter,n.doc.key,n.doc,new aj(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new aH(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aj(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class aY extends a${constructor(e){super(),this.firestore=e}convertBytes(e){return new a_(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ag(this.firestore,null,t)}}function aX(e,t,n,...r){var i;e=ac(e,ag);let s=ac(e.firestore,aI),a=function(e){let t=e._freezeSettings(),n=i0(e._databaseId);return new aP(e._databaseId,!!t.ignoreUndefinedProperties,n)}(s);return i=[("string"==typeof(t=(0,l.m9)(t))||t instanceof aS?function(e,t,n,r,i,s){let a=e.Ru(1,t,n),o=[aO(t,r,n)],u=[i];if(s.length%2!=0)throw new b(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(aO(t,s[e])),u.push(s[e+1]);let h=[],c=td.empty();for(let e=o.length-1;e>=0;--e)if(!function(e,t){return e.some(e=>e.isEqual(t))}(h,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.Iu(t);if(n instanceof aM)h.push(t);else{let e=aV(n,r);null!=e&&(h.push(t),c.set(t,e))}}let d=new ej(h);return new aN(c,d,a.fieldTransforms)}(a,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.Ru(1,t,n);aL("Data must be an object, but it was:",i,r);let s=[],a=td.empty();eO(r,(e,r)=>{let o=aq(t,e,n);r=(0,l.m9)(r);let u=i.Iu(o);if(r instanceof aM)s.push(o);else{let e=aV(r,u);null!=e&&(s.push(o),a.set(o,e))}});let o=new ej(s);return new aN(a,o,i.fieldTransforms)}(a,"updateDoc",e._key,t)).toMutation(e._key,nm.exists(!0))],function(e,t){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>s$(await as(e).then(e=>e.syncEngine),t,n)),n.promise}(aT(s),i)}function aJ(e,...t){var n,r,i;let s,a,o;e=(0,l.m9)(e);let u={includeMetadataChanges:!1},h=0;"object"!=typeof t[0]||av(t[h])||(u=t[h],h++);let c={includeMetadataChanges:u.includeMetadataChanges};if(av(t[h])){let e=t[h];t[h]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[h+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[h+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof ag)a=ac(e.firestore,aI),o=tK(e._key.path),s={next:n=>{t[h]&&t[h](function(e,t,n){let r=n.docs.get(t._key),i=new aY(e);return new aQ(e,i,t._key,r,new aj(n.hasPendingWrites,n.fromCache),t.converter)}(a,e,n))},error:t[h+1],complete:t[h+2]};else{let n=ac(e,af);a=ac(n.firestore,aI),o=n._query;let r=new aY(a);s={next:e=>{t[h]&&t[h](new aW(a,r,n,e))},error:t[h+1],complete:t[h+2]},/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new b(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,r){let i=new ae(r),s=new sV(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>sN(await aa(e),s)),()=>{i.Ca(),e.asyncQueue.enqueueAndForget(async()=>sA(await aa(e),s))}}(aT(a),o,c,s)}class aZ{constructor(e){var t;let n;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),n=e.tabManager):(t=void 0,n=new a1(null==t?void 0:t.forceOwnership))._initialize(e),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function a0(e){return new aZ(e)}class a1{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new s7,this._offlineComponentProvider=new s9(this._onlineComponentProvider,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}!function(e,t=!0){m=s.Jn,(0,s.Xd)(new a.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new aI(new C(e.getProvider("auth-internal")),new A(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new e5(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(c,"4.1.0",void 0),(0,s.KN)(c,"4.1.0","esm2017")}()}}]);