(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function LS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ed={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function NS(){if(vx)return Co;vx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var _x;function PS(){return _x||(_x=1,ed.exports=NS()),ed.exports}var se=PS(),td={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx;function OS(){if(Sx)return ft;Sx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(D,J,ye){this.props=D,this.context=J,this.refs=A,this.updater=ye||y}S.prototype.isReactComponent={},S.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(D,J,ye){this.props=D,this.context=J,this.refs=A,this.updater=ye||y}var U=L.prototype=new v;U.constructor=L,M(U,S.prototype),U.isPureReactComponent=!0;var I=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function G(D,J,ye,be,Ce,Be){return ye=Be.ref,{$$typeof:s,type:D,key:J,ref:ye!==void 0?ye:null,props:Be}}function ne(D,J){return G(D.type,J,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function w(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ye){return J[ye]})}var B=/\/+/g;function X(D,J){return typeof D=="object"&&D!==null&&D.key!=null?w(""+D.key):J.toString(36)}function te(){}function oe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(te,te):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function le(D,J,ye,be,Ce){var Be=typeof D;(Be==="undefined"||Be==="boolean")&&(D=null);var Q=!1;if(D===null)Q=!0;else switch(Be){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(D.$$typeof){case s:case e:Q=!0;break;case x:return Q=D._init,le(Q(D._payload),J,ye,be,Ce)}}if(Q)return Ce=Ce(D),Q=be===""?"."+X(D,0):be,I(Ce)?(ye="",Q!=null&&(ye=Q.replace(B,"$&/")+"/"),le(Ce,J,ye,"",function(Xe){return Xe})):Ce!=null&&(C(Ce)&&(Ce=ne(Ce,ye+(Ce.key==null||D&&D.key===Ce.key?"":(""+Ce.key).replace(B,"$&/")+"/")+Q)),J.push(Ce)),1;Q=0;var pe=be===""?".":be+":";if(I(D))for(var Ee=0;Ee<D.length;Ee++)be=D[Ee],Be=pe+X(be,Ee),Q+=le(be,J,ye,Be,Ce);else if(Ee=_(D),typeof Ee=="function")for(D=Ee.call(D),Ee=0;!(be=D.next()).done;)be=be.value,Be=pe+X(be,Ee++),Q+=le(be,J,ye,Be,Ce);else if(Be==="object"){if(typeof D.then=="function")return le(oe(D),J,ye,be,Ce);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Q}function O(D,J,ye){if(D==null)return D;var be=[],Ce=0;return le(D,be,"","",function(Be){return J.call(ye,Be,Ce++)}),be}function q(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(ye){(D._status===0||D._status===-1)&&(D._status=1,D._result=ye)},function(ye){(D._status===0||D._status===-1)&&(D._status=2,D._result=ye)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var Y=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function de(){}return ft.Children={map:O,forEach:function(D,J,ye){O(D,function(){J.apply(this,arguments)},ye)},count:function(D){var J=0;return O(D,function(){J++}),J},toArray:function(D){return O(D,function(J){return J})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ft.Component=S,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=L,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ft.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},ft.cache=function(D){return function(){return D.apply(null,arguments)}},ft.cloneElement=function(D,J,ye){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var be=M({},D.props),Ce=D.key,Be=void 0;if(J!=null)for(Q in J.ref!==void 0&&(Be=void 0),J.key!==void 0&&(Ce=""+J.key),J)!P.call(J,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&J.ref===void 0||(be[Q]=J[Q]);var Q=arguments.length-2;if(Q===1)be.children=ye;else if(1<Q){for(var pe=Array(Q),Ee=0;Ee<Q;Ee++)pe[Ee]=arguments[Ee+2];be.children=pe}return G(D.type,Ce,void 0,void 0,Be,be)},ft.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ft.createElement=function(D,J,ye){var be,Ce={},Be=null;if(J!=null)for(be in J.key!==void 0&&(Be=""+J.key),J)P.call(J,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ce[be]=J[be]);var Q=arguments.length-2;if(Q===1)Ce.children=ye;else if(1<Q){for(var pe=Array(Q),Ee=0;Ee<Q;Ee++)pe[Ee]=arguments[Ee+2];Ce.children=pe}if(D&&D.defaultProps)for(be in Q=D.defaultProps,Q)Ce[be]===void 0&&(Ce[be]=Q[be]);return G(D,Be,void 0,void 0,null,Ce)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(D){return{$$typeof:h,render:D}},ft.isValidElement=C,ft.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:q}},ft.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},ft.startTransition=function(D){var J=z.T,ye={};z.T=ye;try{var be=D(),Ce=z.S;Ce!==null&&Ce(ye,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(de,Y)}catch(Be){Y(Be)}finally{z.T=J}},ft.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ft.use=function(D){return z.H.use(D)},ft.useActionState=function(D,J,ye){return z.H.useActionState(D,J,ye)},ft.useCallback=function(D,J){return z.H.useCallback(D,J)},ft.useContext=function(D){return z.H.useContext(D)},ft.useDebugValue=function(){},ft.useDeferredValue=function(D,J){return z.H.useDeferredValue(D,J)},ft.useEffect=function(D,J,ye){var be=z.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(D,J)},ft.useId=function(){return z.H.useId()},ft.useImperativeHandle=function(D,J,ye){return z.H.useImperativeHandle(D,J,ye)},ft.useInsertionEffect=function(D,J){return z.H.useInsertionEffect(D,J)},ft.useLayoutEffect=function(D,J){return z.H.useLayoutEffect(D,J)},ft.useMemo=function(D,J){return z.H.useMemo(D,J)},ft.useOptimistic=function(D,J){return z.H.useOptimistic(D,J)},ft.useReducer=function(D,J,ye){return z.H.useReducer(D,J,ye)},ft.useRef=function(D){return z.H.useRef(D)},ft.useState=function(D){return z.H.useState(D)},ft.useSyncExternalStore=function(D,J,ye){return z.H.useSyncExternalStore(D,J,ye)},ft.useTransition=function(){return z.H.useTransition()},ft.version="19.1.1",ft}var yx;function Lh(){return yx||(yx=1,td.exports=OS()),td.exports}var he=Lh();const Xc=LS(he);var nd={exports:{}},Do={},id={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx;function FS(){return bx||(bx=1,(function(s){function e(O,q){var Y=O.length;O.push(q);e:for(;0<Y;){var de=Y-1>>>1,D=O[de];if(0<l(D,q))O[de]=q,O[Y]=D,Y=de;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],Y=O.pop();if(Y!==q){O[0]=Y;e:for(var de=0,D=O.length,J=D>>>1;de<J;){var ye=2*(de+1)-1,be=O[ye],Ce=ye+1,Be=O[Ce];if(0>l(be,Y))Ce<D&&0>l(Be,be)?(O[de]=Be,O[Ce]=Y,de=Ce):(O[de]=be,O[ye]=Y,de=ye);else if(Ce<D&&0>l(Be,Y))O[de]=Be,O[Ce]=Y,de=Ce;else break e}}return q}function l(O,q){var Y=O.sortIndex-q.sortIndex;return Y!==0?Y:O.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,g=null,_=3,y=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(O){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=O)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function z(O){if(A=!1,I(O),!M)if(i(m)!==null)M=!0,P||(P=!0,X());else{var q=i(p);q!==null&&le(z,q.startTime-O)}}var P=!1,G=-1,ne=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<ne)}function B(){if(S=!1,P){var O=s.unstable_now();C=O;var q=!0;try{e:{M=!1,A&&(A=!1,L(G),G=-1),y=!0;var Y=_;try{t:{for(I(O),g=i(m);g!==null&&!(g.expirationTime>O&&w());){var de=g.callback;if(typeof de=="function"){g.callback=null,_=g.priorityLevel;var D=de(g.expirationTime<=O);if(O=s.unstable_now(),typeof D=="function"){g.callback=D,I(O),q=!0;break t}g===i(m)&&r(m),I(O)}else r(m);g=i(m)}if(g!==null)q=!0;else{var J=i(p);J!==null&&le(z,J.startTime-O),q=!1}}break e}finally{g=null,_=Y,y=!1}q=void 0}}finally{q?X():P=!1}}}var X;if(typeof U=="function")X=function(){U(B)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,oe=te.port2;te.port1.onmessage=B,X=function(){oe.postMessage(null)}}else X=function(){v(B,0)};function le(O,q){G=v(function(){O(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var Y=_;_=q;try{return O()}finally{_=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=_;_=O;try{return q()}finally{_=Y}},s.unstable_scheduleCallback=function(O,q,Y){var de=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,O={id:x++,callback:q,priorityLevel:O,startTime:Y,expirationTime:D,sortIndex:-1},Y>de?(O.sortIndex=Y,e(p,O),i(m)===null&&O===i(p)&&(A?(L(G),G=-1):A=!0,le(z,Y-de))):(O.sortIndex=D,e(m,O),M||y||(M=!0,P||(P=!0,X()))),O},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(O){var q=_;return function(){var Y=_;_=q;try{return O.apply(this,arguments)}finally{_=Y}}}})(ad)),ad}var Mx;function IS(){return Mx||(Mx=1,id.exports=FS()),id.exports}var rd={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function BS(){if(Ex)return Cn;Ex=1;var s=Lh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Cn.flushSync=function(m){var p=f.T,x=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=x,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var Tx;function zS(){if(Tx)return rd.exports;Tx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rd.exports=BS(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function HS(){if(Ax)return Do;Ax=1;var s=IS(),e=Lh(),i=zS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),t;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,T=u.child;T;){if(T===a){b=!0,a=u,o=d;break}if(T===o){b=!0,o=u,a=d;break}T=T.sibling}if(!b){for(T=d.child;T;){if(T===a){b=!0,a=d,o=u;break}if(T===o){b=!0,o=d,a=u;break}T=T.sibling}if(!b)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case U:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case I:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:oe(t.type)||"Memo";case ne:n=t._payload,t=t._init;try{return oe(t(n))}catch{}}return null}var le=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},de=[],D=-1;function J(t){return{current:t}}function ye(t){0>D||(t.current=de[D],de[D]=null,D--)}function be(t,n){D++,de[D]=t.current,t.current=n}var Ce=J(null),Be=J(null),Q=J(null),pe=J(null);function Ee(t,n){switch(be(Q,n),be(Be,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?qm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=qm(n),t=Ym(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Ce),be(Ce,t)}function Xe(){ye(Ce),ye(Be),ye(Q)}function We(t){t.memoizedState!==null&&be(pe,t);var n=Ce.current,a=Ym(n,t.type);n!==a&&(be(Be,t),be(Ce,a))}function ct(t){Be.current===t&&(ye(Ce),ye(Be)),pe.current===t&&(ye(pe),Eo._currentValue=Y)}var Jt=Object.prototype.hasOwnProperty,ut=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,H=s.unstable_shouldYield,mt=s.unstable_requestPaint,st=s.unstable_now,Ft=s.unstable_getCurrentPriorityLevel,Ve=s.unstable_ImmediatePriority,kt=s.unstable_UserBlockingPriority,qe=s.unstable_NormalPriority,ot=s.unstable_LowPriority,N=s.unstable_IdlePriority,E=s.log,ee=s.unstable_setDisableYieldValue,xe=null,ve=null;function ue(t){if(typeof E=="function"&&ee(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(xe,t)}catch{}}var Fe=Math.clz32?Math.clz32:ke,Ne=Math.log,$e=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(Ne(t)/$e|0)|0}var Me=256,Re=4194304;function Ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Je(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=Ze(o):(b&=T,b!==0?u=Ze(b):a||(a=T&~t,a!==0&&(u=Ze(a))))):(T=o&~d,T!==0?u=Ze(T):b!==0?u=Ze(b):a||(a=o&~t,a!==0&&(u=Ze(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Le(){var t=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function we(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,F=t.expirationTimes,$=t.hiddenUpdates;for(a=b&~a;0<a;){var me=31-Fe(a),_e=1<<me;T[me]=0,F[me]=-1;var ie=$[me];if(ie!==null)for($[me]=null,me=0;me<ie.length;me++){var ae=ie[me];ae!==null&&(ae.lane&=-536870913)}a&=~_e}o!==0&&Se(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function Se(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function He(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ct(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:dx(t.type))}function ti(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var sn=Math.random().toString(36).slice(2),gn="__reactFiber$"+sn,Mn="__reactProps$"+sn,Oi="__reactContainer$"+sn,hi="__reactEvents$"+sn,Ns="__reactListeners$"+sn,$o="__reactHandles$"+sn,Ps="__reactResources$"+sn,Ei="__reactMarker$"+sn;function Cr(t){delete t[gn],delete t[Mn],delete t[hi],delete t[Ns],delete t[$o]}function pi(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Qm(t);t!==null;){if(a=t[gn])return a;t=Qm(t)}return n}t=a,a=t.parentNode}return null}function Fi(t){if(t=t[gn]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ga(t){var n=t[Ps];return n||(n=t[Ps]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(t){t[Ei]=!0}var el=new Set,tl={};function Ii(t,n){va(t,n),va(t+"Capture",n)}function va(t,n){for(tl[t]=n,t=0;t<n.length;t++)el.add(n[t])}var R=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),j={},re={};function ce(t){return Jt.call(re,t)?!0:Jt.call(j,t)?!1:R.test(t)?re[t]=!0:(j[t]=!0,!1)}function Z(t,n,a){if(ce(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ue(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var ze,Ie;function Ke(t){if(ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ze=n&&n[1]||"",Ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+t+Ie}var et=!1;function Ye(t,n){if(!t||et)return"";et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ae){var ie=ae}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ae){ie=ae}t.call(_e.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],T=d[1];if(b&&T){var F=b.split(`
`),$=T.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===$.length)for(o=F.length-1,u=$.length-1;1<=o&&0<=u&&F[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==$[u]){var me=`
`+F[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ke(a):""}function xt(t){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return Ye(t.type,!1);case 11:return Ye(t.type.render,!1);case 1:return Ye(t.type,!0);case 31:return Ke("Activity");default:return""}}function Rt(t){try{var n="";do n+=xt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dt(t){var n=qt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Dt(t))}function Xt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=qt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nn=/[\n"\\]/g;function dn(t){return t.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(t,n,a,o,u,d,b,T){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+yt(n)):t.value!==""+yt(n)&&(t.value=""+yt(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?Gt(t,b,yt(n)):a!=null?Gt(t,b,yt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+yt(T):t.removeAttribute("name")}function _a(t,n,a,o,u,d,b,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function Gt(t,n,a){n==="number"&&vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $t(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pn(t,n,a){if(n!=null&&(n=""+yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+yt(a):""}function vn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(le(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function en(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Os=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Os.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Yh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ti(t,d,n[d])}function Jc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return Uv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $c=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Ur=null;function jh(t){var n=Fi(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Mn]||null;if(!u)throw Error(r(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Xt(o)}break e;case"textarea":Pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$t(t,!!a.multiple,n,!1)}}}var tu=!1;function Zh(t,n,a){if(tu)return t(n,a);tu=!0;try{var o=t(n);return o}finally{if(tu=!1,(Dr!==null||Ur!==null)&&(Gl(),Dr&&(n=Dr,t=Ur,Ur=Dr=null,jh(n),t)))for(n=0;n<t.length;n++)jh(t[n])}}function Fs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Bi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{nu=!1}var Sa=null,iu=null,il=null;function Kh(){if(il)return il;var t,n=iu,a=n.length,o,u="value"in Sa?Sa.value:Sa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return il=u.slice(t,1<o?1-o:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Qh(){return!1}function In(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?rl:Qh,this.isPropagationStopped=Qh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=In($a),Bs=x({},$a,{view:0,detail:0}),Lv=In(Bs),au,ru,zs,ol=x({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(au=t.screenX-zs.screenX,ru=t.screenY-zs.screenY):ru=au=0,zs=t),au)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Jh=In(ol),Nv=x({},ol,{dataTransfer:0}),Pv=In(Nv),Ov=x({},Bs,{relatedTarget:0}),su=In(Ov),Fv=x({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=In(Fv),Bv=x({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zv=In(Bv),Hv=x({},$a,{data:0}),$h=In(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function ou(){return Xv}var Wv=x({},Bs,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=In(Wv),Yv=x({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=In(Yv),jv=x({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Zv=In(jv),Kv=x({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=In(Kv),Jv=x({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=In(Jv),e_=x({},$a,{newState:0,oldState:0}),t_=In(e_),n_=[9,13,27,32],lu=Bi&&"CompositionEvent"in window,Hs=null;Bi&&"documentMode"in document&&(Hs=document.documentMode);var i_=Bi&&"TextEvent"in window&&!Hs,tp=Bi&&(!lu||Hs&&8<Hs&&11>=Hs),np=" ",ip=!1;function ap(t,n){switch(t){case"keyup":return n_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function a_(t,n){switch(t){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return t=n.data,t===np&&ip?null:t;default:return null}}function r_(t,n){if(Lr)return t==="compositionend"||!lu&&ap(t,n)?(t=Kh(),il=iu=Sa=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var s_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!s_[t.type]:n==="textarea"}function op(t,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=Yl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function o_(t){Gm(t,0)}function ll(t){var n=xa(t);if(Xt(n))return t}function lp(t,n){if(t==="change")return n}var cp=!1;if(Bi){var cu;if(Bi){var uu="oninput"in document;if(!uu){var up=document.createElement("div");up.setAttribute("oninput","return;"),uu=typeof up.oninput=="function"}cu=uu}else cu=!1;cp=cu&&(!document.documentMode||9<document.documentMode)}function fp(){Gs&&(Gs.detachEvent("onpropertychange",dp),Vs=Gs=null)}function dp(t){if(t.propertyName==="value"&&ll(Vs)){var n=[];op(n,Vs,t,eu(t)),Zh(o_,n)}}function l_(t,n,a){t==="focusin"?(fp(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",dp)):t==="focusout"&&fp()}function c_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(Vs)}function u_(t,n){if(t==="click")return ll(n)}function f_(t,n){if(t==="input"||t==="change")return ll(n)}function d_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:d_;function ks(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Jt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,n){var a=hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hp(a)}}function mp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vt(t.document)}return n}function fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var h_=Bi&&"documentMode"in document&&11>=document.documentMode,Nr=null,du=null,Xs=null,hu=!1;function gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Nr==null||Nr!==vt(o)||(o=Nr,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xs&&ks(Xs,o)||(Xs=o,o=Yl(du,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Nr)))}function er(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Pr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},pu={},vp={};Bi&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function tr(t){if(pu[t])return pu[t];if(!Pr[t])return t;var n=Pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return pu[t]=n[a];return t}var _p=tr("animationend"),Sp=tr("animationiteration"),yp=tr("animationstart"),p_=tr("transitionrun"),m_=tr("transitionstart"),x_=tr("transitioncancel"),bp=tr("transitionend"),Mp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function mi(t,n){Mp.set(t,n),Ii(n,[t])}var Ep=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=Ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Rt(n)},Ep.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var ii=[],Or=0,xu=0;function cl(){for(var t=Or,n=xu=Or=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&Tp(a,u,d)}}function ul(t,n,a,o){ii[Or++]=t,ii[Or++]=n,ii[Or++]=a,ii[Or++]=o,xu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function gu(t,n,a,o){return ul(t,n,a,o),fl(t)}function Fr(t,n){return ul(t,null,null,n),fl(t)}function Tp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function fl(t){if(50<xo)throw xo=0,Ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function g_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new g_(t,n,a,o)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")vu(t)&&(b=1);else if(typeof t=="string")b=_S(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Wn(31,a,n,u),t.elementType=C,t.lanes=d,t;case M:return nr(a.children,u,d,n);case A:b=8,u|=24;break;case S:return t=Wn(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case z:return t=Wn(13,a,n,u),t.elementType=z,t.lanes=d,t;case P:return t=Wn(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case U:b=10;break e;case L:b=9;break e;case I:b=11;break e;case G:b=14;break e;case ne:b=16,o=null;break e}b=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Wn(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function nr(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function _u(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Su(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Br=[],zr=0,hl=null,pl=0,ai=[],ri=0,ir=null,Hi=1,Gi="";function ar(t,n){Br[zr++]=pl,Br[zr++]=hl,hl=t,pl=n}function Rp(t,n,a){ai[ri++]=Hi,ai[ri++]=Gi,ai[ri++]=ir,ir=t;var o=Hi;t=Gi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Hi=1<<32-Fe(n)+u|a<<u|o,Gi=d+t}else Hi=1<<d|a<<u|o,Gi=t}function yu(t){t.return!==null&&(ar(t,1),Rp(t,1,0))}function bu(t){for(;t===hl;)hl=Br[--zr],Br[zr]=null,pl=Br[--zr],Br[zr]=null;for(;t===ir;)ir=ai[--ri],ai[ri]=null,Gi=ai[--ri],ai[ri]=null,Hi=ai[--ri],ai[ri]=null}var On=null,Kt=null,wt=!1,rr=null,Ai=!1,Mu=Error(r(519));function sr(t){var n=Error(r(418,""));throw Ys(ni(n,t)),Mu}function wp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[Mn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)St(vo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),_a(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Qe(n);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),vn(n,o.value,o.defaultValue,o.children),Qe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Wm(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=jl),n=!0):n=!1,n||sr(t)}function Cp(t){for(On=t.return;On;)switch(On.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:On=On.return}}function Ws(t){if(t!==On)return!1;if(!wt)return Cp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&Kt&&sr(t),Cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Kt=gi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Kt=null}}else n===27?(n=Kt,Fa(t.type)?(t=Xf,Xf=null,Kt=t):Kt=n):Kt=On?gi(t.stateNode.nextSibling):null;return!0}function qs(){Kt=On=null,wt=!1}function Dp(){var t=rr;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),rr=null),t}function Ys(t){rr===null?rr=[t]:rr.push(t)}var Eu=J(null),or=null,Vi=null;function ya(t,n,a){be(Eu,n._currentValue),n._currentValue=a}function ki(t){t._currentValue=Eu.current,ye(Eu)}function Tu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Au(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Tu(d.return,a,t),o||(b=null);break e}d=T.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(r(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),Tu(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function js(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var T=u.type;Xn(u.pendingProps.value,b.value)||(t!==null?t.push(T):t=[T])}}else if(u===pe.current){if(b=u.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}u=u.return}t!==null&&Au(n,t,a,o),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Up(or,t)}function xl(t,n){return or===null&&lr(t),Up(t,n)}function Up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(r(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var v_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},__=s.unstable_scheduleCallback,S_=s.unstable_NormalPriority,hn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new v_,data:new Map,refCount:0}}function Zs(t){t.refCount--,t.refCount===0&&__(S_,function(){t.controller.abort()})}var Ks=null,wu=0,Hr=0,Gr=null;function y_(t,n){if(Ks===null){var a=Ks=[];wu=0,Hr=Uf(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wu++,n.then(Lp,Lp),n}function Lp(){if(--wu===0&&Ks!==null){Gr!==null&&(Gr.status="fulfilled");var t=Ks;Ks=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function b_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Np=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&y_(t,n),Np!==null&&Np(t,n)};var cr=J(null);function Cu(){var t=cr.current;return t!==null?t:Wt.pooledCache}function gl(t,n){n===null?be(cr,cr.current):be(cr,n.pool)}function Pp(){var t=Cu();return t===null?null:{parent:hn._currentValue,pool:t}}var Qs=Error(r(460)),Op=Error(r(474)),vl=Error(r(542)),Du={then:function(){}};function Fp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _l(){}function Ip(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t;default:if(typeof n.status=="string")n.then(_l,_l);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t}throw Js=n,Qs}}var Js=null;function Bp(){if(Js===null)throw Error(r(459));var t=Js;return Js=null,t}function zp(t){if(t===Qs||t===vl)throw Error(r(483))}var ba=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fl(t),Tp(t,null,a),n}return ul(t,o,n,a),fl(t)}function $s(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}function Nu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function eo(){if(Pu){var t=Gr;if(t!==null)throw t}}function to(t,n,a,o){Pu=!1;var u=t.updateQueue;ba=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,$=F.next;F.next=null,b===null?d=$:b.next=$,b=F;var me=t.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==b&&(T===null?me.firstBaseUpdate=$:T.next=$,me.lastBaseUpdate=F))}if(d!==null){var _e=u.baseState;b=0,me=$=F=null,T=d;do{var ie=T.lane&-536870913,ae=ie!==T.lane;if(ae?(Mt&ie)===ie:(o&ie)===ie){ie!==0&&ie===Hr&&(Pu=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var rt=t,tt=T;ie=n;var zt=a;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){_e=rt.call(zt,_e,ie);break e}_e=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ie=typeof rt=="function"?rt.call(zt,_e,ie):rt,ie==null)break e;_e=x({},_e,ie);break e;case 2:ba=!0}}ie=T.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=u.callbacks,ae===null?u.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?($=me=ae,F=_e):me=me.next=ae,b|=ie;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ae=T,T=ae.next,ae.next=null,u.lastBaseUpdate=ae,u.shared.pending=null}}while(!0);me===null&&(F=_e),u.baseState=F,u.firstBaseUpdate=$,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),La|=b,t.lanes=b,t.memoizedState=_e}}function Hp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Hp(a[t],n)}var Vr=J(null),Sl=J(0);function Vp(t,n){t=Ki,be(Sl,t),be(Vr,n),Ki=t|n.baseLanes}function Ou(){be(Sl,Ki),be(Vr,Vr.current)}function Fu(){Ki=Sl.current,ye(Vr),ye(Sl)}var Ta=0,pt=null,It=null,ln=null,yl=!1,kr=!1,ur=!1,bl=0,no=0,Xr=null,M_=0;function tn(){throw Error(r(321))}function Iu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Bu(t,n,a,o,u,d){return Ta=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?T0:A0,ur=!1,d=a(o,u),ur=!1,kr&&(d=Xp(n,a,o,u)),kp(t),d}function kp(t){O.H=wl;var n=It!==null&&It.next!==null;if(Ta=0,ln=It=pt=null,yl=!1,no=0,Xr=null,n)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&ml(t)&&(_n=!0))}function Xp(t,n,a,o){pt=t;var u=0;do{if(kr&&(Xr=null),no=0,kr=!1,25<=u)throw Error(r(301));if(u+=1,ln=It=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=D_,d=n(a,o)}while(kr);return d}function E_(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?io(n):n,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(pt.flags|=1024),n}function zu(){var t=bl!==0;return bl=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gu(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}Ta=0,ln=It=pt=null,kr=!1,no=bl=0,Xr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?pt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(It===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var n=ln===null?pt.memoizedState:ln.next;if(n!==null)ln=n,It=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},ln===null?pt.memoizedState=ln=t:ln=ln.next=t}return ln}function Vu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(t){var n=no;return no+=1,Xr===null&&(Xr=[]),t=Ip(Xr,t,n),n=pt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?T0:A0),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return io(t);if(t.$$typeof===U)return wn(t)}throw Error(r(438,String(t)))}function ku(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vu(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function El(t){var n=cn();return Xu(n,It,t)}function Xu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var T=b=null,F=null,$=n,me=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(Mt&_e)===_e:(Ta&_e)===_e){var ie=$.revertLane;if(ie===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===Hr&&(me=!0);else if((Ta&ie)===ie){$=$.next,ie===Hr&&(me=!0);continue}else _e={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(T=F=_e,b=d):F=F.next=_e,pt.lanes|=ie,La|=ie;_e=$.action,ur&&a(d,_e),d=$.hasEagerState?$.eagerState:a(d,_e)}else ie={lane:_e,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(T=F=ie,b=d):F=F.next=ie,pt.lanes|=_e,La|=_e;$=$.next}while($!==null&&$!==n);if(F===null?b=d:F.next=T,!Xn(d,t.memoizedState)&&(_n=!0,me&&(a=Gr,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wu(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);Xn(d,n.memoizedState)||(_n=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Wp(t,n,a){var o=pt,u=cn(),d=wt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var b=!Xn((It||u).memoizedState,a);b&&(u.memoizedState=a,_n=!0),u=u.queue;var T=jp.bind(null,o,u,t);if(ao(2048,8,T,[t]),u.getSnapshot!==n||b||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Wr(9,Tl(),Yp.bind(null,o,u,a,n),null),Wt===null)throw Error(r(349));d||(Ta&124)!==0||qp(o,n,a)}return a}function qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Vu(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Yp(t,n,a,o){n.value=a,n.getSnapshot=o,Zp(n)&&Kp(t)}function jp(t,n,a){return a(function(){Zp(n)&&Kp(t)})}function Zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Kp(t){var n=Fr(t,2);n!==null&&Kn(n,t,2)}function qu(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),ur){ue(!0);try{a()}finally{ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function Qp(t,n,a,o){return t.baseState=a,Xu(t,It,typeof o=="function"?o:Xi)}function T_(t,n,a,o,u){if(Rl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Jp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Jp(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,b={};O.T=b;try{var T=a(u,o),F=O.S;F!==null&&F(b,T),$p(t,n,T)}catch($){Yu(t,n,$)}finally{O.T=d}}else try{d=a(u,o),$p(t,n,d)}catch($){Yu(t,n,$)}}function $p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){e0(t,n,o)},function(o){return Yu(t,n,o)}):e0(t,n,a)}function e0(t,n,a){n.status="fulfilled",n.value=a,t0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Jp(t,a)))}function Yu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,t0(n),n=n.next;while(n!==o)}t.action=null}function t0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function n0(t,n){return n}function i0(t,n){if(wt){var a=Wt.formState;if(a!==null){e:{var o=pt;if(wt){if(Kt){t:{for(var u=Kt,d=Ai;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=gi(u.nextSibling),o=u.data==="F!";break e}}sr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n0,lastRenderedState:n},a.queue=o,a=b0.bind(null,pt,o),o.dispatch=a,o=qu(!1),d=Ju.bind(null,pt,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=T_.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function a0(t){var n=cn();return r0(n,It,t)}function r0(t,n,a){if(n=Xu(t,n,n0)[0],t=El(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=io(n)}catch(b){throw b===Qs?vl:b}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,Wr(9,Tl(),A_.bind(null,u,a),null)),[o,d,t]}function A_(t,n){t.action=n}function s0(t){var n=cn(),a=It;if(a!==null)return r0(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Wr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Vu(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Tl(){return{destroy:void 0,resource:void 0}}function o0(){return cn().memoizedState}function Al(t,n,a,o){var u=Bn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=Wr(1|n,Tl(),a,o)}function ao(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;It!==null&&o!==null&&Iu(o,It.memoizedState.deps)?u.memoizedState=Wr(n,d,a,o):(pt.flags|=t,u.memoizedState=Wr(1|n,d,a,o))}function l0(t,n){Al(8390656,8,t,n)}function c0(t,n){ao(2048,8,t,n)}function u0(t,n){return ao(4,2,t,n)}function f0(t,n){return ao(4,4,t,n)}function d0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function h0(t,n,a){a=a!=null?a.concat([t]):null,ao(4,4,d0.bind(null,n,t),a)}function ju(){}function p0(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Iu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function m0(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Iu(n,o[1]))return o[0];if(o=t(),ur){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[o,n],o}function Zu(t,n,a){return a===void 0||(Ta&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=vm(),pt.lanes|=t,La|=t,a)}function x0(t,n,a,o){return Xn(a,n)?a:Vr.current!==null?(t=Zu(t,a,o),Xn(t,n)||(_n=!0),t):(Ta&42)===0?(_n=!0,t.memoizedState=a):(t=vm(),pt.lanes|=t,La|=t,n)}function g0(t,n,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var b=O.T,T={};O.T=T,Ju(t,!1,n,a);try{var F=u(),$=O.S;if($!==null&&$(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var me=b_(F,o);ro(t,n,me,Zn(t))}else ro(t,n,o,Zn(t))}catch(_e){ro(t,n,{then:function(){},status:"rejected",reason:_e},Zn())}finally{q.p=d,O.T=b}}function R_(){}function Ku(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=v0(t).queue;g0(t,u,n,Y,a===null?R_:function(){return _0(t),a(o)})}function v0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _0(t){var n=v0(t).next.queue;ro(t,n,{},Zn())}function Qu(){return wn(Eo)}function S0(){return cn().memoizedState}function y0(){return cn().memoizedState}function w_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=Ma(a);var o=Ea(n,t,a);o!==null&&(Kn(o,n,a),$s(o,n,a)),n={cache:Ru()},t.payload=n;return}n=n.return}}function C_(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?M0(n,a):(a=gu(t,n,a,o),a!==null&&(Kn(a,t,o),E0(a,n,o)))}function b0(t,n,a){var o=Zn();ro(t,n,a,o)}function ro(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))M0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,T=d(b,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,b))return ul(t,n,u,0),Wt===null&&cl(),!1}catch{}finally{}if(a=gu(t,n,u,o),a!==null)return Kn(a,t,o),E0(a,n,o),!0}return!1}function Ju(t,n,a,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(r(479))}else n=gu(t,a,o,2),n!==null&&Kn(n,t,2)}function Rl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function M0(t,n){kr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function E0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}var wl={readContext:wn,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},T0={readContext:wn,use:Ml,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:l0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,d0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(ur){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(ur){ue(!0);try{a(n)}finally{ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=C_.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=qu(t);var n=t.queue,a=b0.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(t,n){var a=Bn();return Zu(a,t,n)},useTransition:function(){var t=qu(!1);return t=g0.bind(null,pt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Bn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(Mt&124)!==0||qp(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,l0(jp.bind(null,o,d,t),[t]),o.flags|=2048,Wr(9,Tl(),Yp.bind(null,o,d,a,n),null),a},useId:function(){var t=Bn(),n=Wt.identifierPrefix;if(wt){var a=Gi,o=Hi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=M_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Qu,useFormState:i0,useActionState:i0,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return Bn().memoizedState=w_.bind(null,pt)}},A0={readContext:wn,use:Ml,useCallback:p0,useContext:wn,useEffect:c0,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:El,useRef:o0,useState:function(){return El(Xi)},useDebugValue:ju,useDeferredValue:function(t,n){var a=cn();return x0(a,It.memoizedState,t,n)},useTransition:function(){var t=El(Xi)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:Wp,useId:S0,useHostTransitionStatus:Qu,useFormState:a0,useActionState:a0,useOptimistic:function(t,n){var a=cn();return Qp(a,It,t,n)},useMemoCache:ku,useCacheRefresh:y0},D_={readContext:wn,use:Ml,useCallback:p0,useContext:wn,useEffect:c0,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:Wu,useRef:o0,useState:function(){return Wu(Xi)},useDebugValue:ju,useDeferredValue:function(t,n){var a=cn();return It===null?Zu(a,t,n):x0(a,It.memoizedState,t,n)},useTransition:function(){var t=Wu(Xi)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:io(t),n]},useSyncExternalStore:Wp,useId:S0,useHostTransitionStatus:Qu,useFormState:s0,useActionState:s0,useOptimistic:function(t,n){var a=cn();return It!==null?Qp(a,It,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:y0},qr=null,so=0;function Cl(t){var n=so;return so+=1,qr===null&&(qr=[]),Ip(qr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function R0(t){var n=t._init;return n(t._payload)}function w0(t){function n(W,k){if(t){var K=W.deletions;K===null?(W.deletions=[k],W.flags|=16):K.push(k)}}function a(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function o(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function u(W,k){return W=zi(W,k),W.index=0,W.sibling=null,W}function d(W,k,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<k?(W.flags|=67108866,k):K):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function b(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,k,K,ge){return k===null||k.tag!==6?(k=_u(K,W.mode,ge),k.return=W,k):(k=u(k,K),k.return=W,k)}function F(W,k,K,ge){var Ge=K.type;return Ge===M?me(W,k,K.props.children,ge,K.key):k!==null&&(k.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ne&&R0(Ge)===k.type)?(k=u(k,K.props),oo(k,K),k.return=W,k):(k=dl(K.type,K.key,K.props,null,W.mode,ge),oo(k,K),k.return=W,k)}function $(W,k,K,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==K.containerInfo||k.stateNode.implementation!==K.implementation?(k=Su(K,W.mode,ge),k.return=W,k):(k=u(k,K.children||[]),k.return=W,k)}function me(W,k,K,ge,Ge){return k===null||k.tag!==7?(k=nr(K,W.mode,ge,Ge),k.return=W,k):(k=u(k,K),k.return=W,k)}function _e(W,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,W.mode,K),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return K=dl(k.type,k.key,k.props,null,W.mode,K),oo(K,k),K.return=W,K;case y:return k=Su(k,W.mode,K),k.return=W,k;case ne:var ge=k._init;return k=ge(k._payload),_e(W,k,K)}if(le(k)||X(k))return k=nr(k,W.mode,K,null),k.return=W,k;if(typeof k.then=="function")return _e(W,Cl(k),K);if(k.$$typeof===U)return _e(W,xl(W,k),K);Dl(W,k)}return null}function ie(W,k,K,ge){var Ge=k!==null?k.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ge!==null?null:T(W,k,""+K,ge);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case _:return K.key===Ge?F(W,k,K,ge):null;case y:return K.key===Ge?$(W,k,K,ge):null;case ne:return Ge=K._init,K=Ge(K._payload),ie(W,k,K,ge)}if(le(K)||X(K))return Ge!==null?null:me(W,k,K,ge,null);if(typeof K.then=="function")return ie(W,k,Cl(K),ge);if(K.$$typeof===U)return ie(W,k,xl(W,K),ge);Dl(W,K)}return null}function ae(W,k,K,ge,Ge){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return W=W.get(K)||null,T(k,W,""+ge,Ge);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case _:return W=W.get(ge.key===null?K:ge.key)||null,F(k,W,ge,Ge);case y:return W=W.get(ge.key===null?K:ge.key)||null,$(k,W,ge,Ge);case ne:var gt=ge._init;return ge=gt(ge._payload),ae(W,k,K,ge,Ge)}if(le(ge)||X(ge))return W=W.get(K)||null,me(k,W,ge,Ge,null);if(typeof ge.then=="function")return ae(W,k,K,Cl(ge),Ge);if(ge.$$typeof===U)return ae(W,k,K,xl(k,ge),Ge);Dl(k,ge)}return null}function rt(W,k,K,ge){for(var Ge=null,gt=null,je=k,nt=k=0,yn=null;je!==null&&nt<K.length;nt++){je.index>nt?(yn=je,je=null):yn=je.sibling;var Et=ie(W,je,K[nt],ge);if(Et===null){je===null&&(je=yn);break}t&&je&&Et.alternate===null&&n(W,je),k=d(Et,k,nt),gt===null?Ge=Et:gt.sibling=Et,gt=Et,je=yn}if(nt===K.length)return a(W,je),wt&&ar(W,nt),Ge;if(je===null){for(;nt<K.length;nt++)je=_e(W,K[nt],ge),je!==null&&(k=d(je,k,nt),gt===null?Ge=je:gt.sibling=je,gt=je);return wt&&ar(W,nt),Ge}for(je=o(je);nt<K.length;nt++)yn=ae(je,W,nt,K[nt],ge),yn!==null&&(t&&yn.alternate!==null&&je.delete(yn.key===null?nt:yn.key),k=d(yn,k,nt),gt===null?Ge=yn:gt.sibling=yn,gt=yn);return t&&je.forEach(function(Ga){return n(W,Ga)}),wt&&ar(W,nt),Ge}function tt(W,k,K,ge){if(K==null)throw Error(r(151));for(var Ge=null,gt=null,je=k,nt=k=0,yn=null,Et=K.next();je!==null&&!Et.done;nt++,Et=K.next()){je.index>nt?(yn=je,je=null):yn=je.sibling;var Ga=ie(W,je,Et.value,ge);if(Ga===null){je===null&&(je=yn);break}t&&je&&Ga.alternate===null&&n(W,je),k=d(Ga,k,nt),gt===null?Ge=Ga:gt.sibling=Ga,gt=Ga,je=yn}if(Et.done)return a(W,je),wt&&ar(W,nt),Ge;if(je===null){for(;!Et.done;nt++,Et=K.next())Et=_e(W,Et.value,ge),Et!==null&&(k=d(Et,k,nt),gt===null?Ge=Et:gt.sibling=Et,gt=Et);return wt&&ar(W,nt),Ge}for(je=o(je);!Et.done;nt++,Et=K.next())Et=ae(je,W,nt,Et.value,ge),Et!==null&&(t&&Et.alternate!==null&&je.delete(Et.key===null?nt:Et.key),k=d(Et,k,nt),gt===null?Ge=Et:gt.sibling=Et,gt=Et);return t&&je.forEach(function(US){return n(W,US)}),wt&&ar(W,nt),Ge}function zt(W,k,K,ge){if(typeof K=="object"&&K!==null&&K.type===M&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case _:e:{for(var Ge=K.key;k!==null;){if(k.key===Ge){if(Ge=K.type,Ge===M){if(k.tag===7){a(W,k.sibling),ge=u(k,K.props.children),ge.return=W,W=ge;break e}}else if(k.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ne&&R0(Ge)===k.type){a(W,k.sibling),ge=u(k,K.props),oo(ge,K),ge.return=W,W=ge;break e}a(W,k);break}else n(W,k);k=k.sibling}K.type===M?(ge=nr(K.props.children,W.mode,ge,K.key),ge.return=W,W=ge):(ge=dl(K.type,K.key,K.props,null,W.mode,ge),oo(ge,K),ge.return=W,W=ge)}return b(W);case y:e:{for(Ge=K.key;k!==null;){if(k.key===Ge)if(k.tag===4&&k.stateNode.containerInfo===K.containerInfo&&k.stateNode.implementation===K.implementation){a(W,k.sibling),ge=u(k,K.children||[]),ge.return=W,W=ge;break e}else{a(W,k);break}else n(W,k);k=k.sibling}ge=Su(K,W.mode,ge),ge.return=W,W=ge}return b(W);case ne:return Ge=K._init,K=Ge(K._payload),zt(W,k,K,ge)}if(le(K))return rt(W,k,K,ge);if(X(K)){if(Ge=X(K),typeof Ge!="function")throw Error(r(150));return K=Ge.call(K),tt(W,k,K,ge)}if(typeof K.then=="function")return zt(W,k,Cl(K),ge);if(K.$$typeof===U)return zt(W,k,xl(W,K),ge);Dl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,k!==null&&k.tag===6?(a(W,k.sibling),ge=u(k,K),ge.return=W,W=ge):(a(W,k),ge=_u(K,W.mode,ge),ge.return=W,W=ge),b(W)):a(W,k)}return function(W,k,K,ge){try{so=0;var Ge=zt(W,k,K,ge);return qr=null,Ge}catch(je){if(je===Qs||je===vl)throw je;var gt=Wn(29,je,null,W.mode);return gt.lanes=ge,gt.return=W,gt}finally{}}}var Yr=w0(!0),C0=w0(!1),si=J(null),Ri=null;function Aa(t){var n=t.alternate;be(pn,pn.current&1),be(si,t),Ri===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(Ri=t)}function D0(t){if(t.tag===22){if(be(pn,pn.current),be(si,t),Ri===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ri=t)}}else Ra()}function Ra(){be(pn,pn.current),be(si,si.current)}function Wi(t){ye(si),Ri===t&&(Ri=null),ye(pn)}var pn=J(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||kf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function $u(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=Ma(o);u.payload=n,a!=null&&(u.callback=a),n=Ea(t,u,o),n!==null&&(Kn(n,t,o),$s(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),u=Ma(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ea(t,u,o),n!==null&&(Kn(n,t,o),$s(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(t,o,a),n!==null&&(Kn(n,t,a),$s(n,t,a))}};function U0(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!ks(a,o)||!ks(u,d):!0}function L0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ef.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function N0(t){Ll(t)}function P0(t){console.error(t)}function O0(t){Ll(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function F0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function tf(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function I0(t){return t=Ma(t),t.tag=3,t}function B0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){F0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){F0(n,a,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function U_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&js(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ri===null?Af():a.alternate===null&&Qt===0&&(Qt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(t,o,u)),!1}throw Error(r(435,a.tag))}return wf(t,o,u),Af(),!1}if(wt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mu&&(t=Error(r(422),{cause:o}),Ys(ni(t,a)))):(o!==Mu&&(n=Error(r(423),{cause:o}),Ys(ni(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ni(o,a),u=tf(t.stateNode,o,u),Nu(t,u),Qt!==4&&(Qt=2)),!1;var d=Error(r(520),{cause:o});if(d=ni(d,a),mo===null?mo=[d]:mo.push(d),Qt!==4&&(Qt=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=tf(a.stateNode,o,t),Nu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Na===null||!Na.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=I0(u),B0(u,t,a,o),Nu(a,u),!1}a=a.return}while(a!==null);return!1}var z0=Error(r(461)),_n=!1;function Tn(t,n,a,o){n.child=t===null?C0(n,null,a,o):Yr(n,t.child,a,o)}function H0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var T in o)T!=="ref"&&(b[T]=o[T])}else b=o;return lr(n),o=Bu(t,n,a,b,d,u),T=zu(),t!==null&&!_n?(Hu(t,n,u),qi(t,n,u)):(wt&&T&&yu(n),n.flags|=1,Tn(t,n,o,u),n.child)}function G0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!vu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,V0(t,n,d,o,u)):(t=dl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!uf(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(b,o)&&t.ref===n.ref)return qi(t,n,u)}return n.flags|=1,t=zi(d,o),t.ref=n.ref,t.return=n,n.child=t}function V0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ks(d,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=d,uf(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,qi(t,n,u)}return nf(t,n,a,o,u)}function k0(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return X0(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,d!==null?d.cachePool:null),d!==null?Vp(n,d):Ou(),D0(n);else return n.lanes=n.childLanes=536870912,X0(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(gl(n,d.cachePool),Vp(n,d),Ra(),n.memoizedState=null):(t!==null&&gl(n,null),Ou(),Ra());return Tn(t,n,u,a),n.child}function X0(t,n,a,o){var u=Cu();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&gl(n,null),Ou(),D0(n),t!==null&&js(t,n,o,!0),null}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nf(t,n,a,o,u){return lr(n),a=Bu(t,n,a,o,void 0,u),o=zu(),t!==null&&!_n?(Hu(t,n,u),qi(t,n,u)):(wt&&o&&yu(n),n.flags|=1,Tn(t,n,a,u),n.child)}function W0(t,n,a,o,u,d){return lr(n),n.updateQueue=null,a=Xp(n,o,a,u),kp(t),o=zu(),t!==null&&!_n?(Hu(t,n,d),qi(t,n,d)):(wt&&o&&yu(n),n.flags|=1,Tn(t,n,a,d),n.child)}function q0(t,n,a,o,u){if(lr(n),n.stateNode===null){var d=Ir,b=a.contextType;typeof b=="object"&&b!==null&&(d=wn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Uu(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?wn(b):Ir,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&($u(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&ef.enqueueReplaceState(d,d.state,null),to(n,o,d,u),eo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,F=fr(a,T);d.props=F;var $=d.context,me=a.contextType;b=Ir,typeof me=="object"&&me!==null&&(b=wn(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||$!==b)&&L0(n,d,o,b),ba=!1;var ie=n.memoizedState;d.state=ie,to(n,o,d,u),eo(),$=n.memoizedState,T||ie!==$||ba?(typeof _e=="function"&&($u(n,a,_e,o),$=n.memoizedState),(F=ba||U0(n,a,F,o,ie,$,b))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=b,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Lu(t,n),b=n.memoizedProps,me=fr(a,b),d.props=me,_e=n.pendingProps,ie=d.context,$=a.contextType,F=Ir,typeof $=="object"&&$!==null&&(F=wn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==_e||ie!==F)&&L0(n,d,o,F),ba=!1,ie=n.memoizedState,d.state=ie,to(n,o,d,u),eo();var ae=n.memoizedState;b!==_e||ie!==ae||ba||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof T=="function"&&($u(n,a,T,o),ae=n.memoizedState),(me=ba||U0(n,a,me,o,ie,ae,F)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ae,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ae,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ae),d.props=o,d.state=ae,d.context=F,o=me):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Pl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Yr(n,t.child,null,u),n.child=Yr(n,null,a,u)):Tn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=qi(t,n,u),t}function Y0(t,n,a,o){return qs(),n.flags|=256,Tn(t,n,a,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(t){return{baseLanes:t,cachePool:Pp()}}function sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function j0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Aa(n):Ra(),wt){var T=Kt,F;if(F=T){e:{for(F=T,T=Ai;F.nodeType!==8;){if(!T){T=null;break e}if(F=gi(F.nextSibling),F===null){T=null;break e}}T=F}T!==null?(n.memoizedState={dehydrated:T,treeContext:ir!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},F=Wn(18,null,null,0),F.stateNode=T,F.return=n,n.child=F,On=n,Kt=null,F=!0):F=!1}F||sr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return kf(T)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return T=o.children,o=o.fallback,u?(Ra(),u=n.mode,T=Ol({mode:"hidden",children:T},u),o=nr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=rf(a),u.childLanes=sf(t,b,a),n.memoizedState=af,o):(Aa(n),of(n,T))}if(F=t.memoizedState,F!==null&&(T=F.dehydrated,T!==null)){if(d)n.flags&256?(Aa(n),n.flags&=-257,n=lf(t,n,a)):n.memoizedState!==null?(Ra(),n.child=t.child,n.flags|=128,n=null):(Ra(),u=o.fallback,T=n.mode,o=Ol({mode:"visible",children:o.children},T),u=nr(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Yr(n,t.child,null,a),o=n.child,o.memoizedState=rf(a),o.childLanes=sf(t,b,a),n.memoizedState=af,n=u);else if(Aa(n),kf(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var $=b.dgst;b=$,o=Error(r(419)),o.stack="",o.digest=b,Ys({value:o,source:null,stack:null}),n=lf(t,n,a)}else if(_n||js(t,n,a,!1),b=(a&t.childLanes)!==0,_n||b){if(b=Wt,b!==null&&(o=a&-a,o=(o&42)!==0?1:at(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Fr(t,o),Kn(b,t,o),z0;T.data==="$?"||Af(),n=lf(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Kt=gi(T.nextSibling),On=n,wt=!0,rr=null,Ai=!1,t!==null&&(ai[ri++]=Hi,ai[ri++]=Gi,ai[ri++]=ir,Hi=t.id,Gi=t.overflow,ir=n),n=of(n,o.children),n.flags|=4096);return n}return u?(Ra(),u=o.fallback,T=n.mode,F=t.child,$=F.sibling,o=zi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,$!==null?u=zi($,u):(u=nr(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=t.child.memoizedState,T===null?T=rf(a):(F=T.cachePool,F!==null?($=hn._currentValue,F=F.parent!==$?{parent:$,pool:$}:F):F=Pp(),T={baseLanes:T.baseLanes|a,cachePool:F}),u.memoizedState=T,u.childLanes=sf(t,b,a),n.memoizedState=af,o):(Aa(n),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function of(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function lf(t,n,a){return Yr(n,t.child,null,a),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Z0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Tu(t.return,n,a)}function cf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function K0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Tn(t,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Z0(t,a,n);else if(t.tag===19)Z0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}cf(n,!0,a,null,d);break;case"together":cf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function L_(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),ya(n,hn,t.memoizedState.cache),qs();break;case 27:case 5:We(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?j0(t,n,a):(Aa(n),t=qi(t,n,a),t!==null?t.sibling:null);Aa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(js(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return K0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,k0(t,n,a);case 24:ya(n,hn,t.memoizedState.cache)}return qi(t,n,a)}function Q0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!uf(t,a)&&(n.flags&128)===0)return _n=!1,L_(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,wt&&(n.flags&1048576)!==0&&Rp(n,pl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")vu(o)?(t=fr(o,t),n.tag=1,n=q0(null,n,o,t,a)):(n.tag=0,n=nf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===I){n.tag=11,n=H0(null,n,o,t,a);break e}else if(u===G){n.tag=14,n=G0(null,n,o,t,a);break e}}throw n=oe(o)||o,Error(r(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=fr(o,n.pendingProps),q0(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Lu(t,n),to(n,o,null,a);var b=n.memoizedState;if(o=b.cache,ya(n,hn,o),o!==d.cache&&Au(n,[hn],a,!0),eo(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Y0(t,n,o,a);break e}else if(o!==u){u=ni(Error(r(424)),n),Ys(u),n=Y0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=gi(t.firstChild),On=n,wt=!0,rr=null,Ai=!0,a=C0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qs(),o===u){n=qi(t,n,a);break e}Tn(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=tx(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=Zl(Q.current).createElement(a),o[gn]=n,o[Mn]=t,Rn(o,a,t),on(o),n.stateNode=o):n.memoizedState=tx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&wt&&(o=n.stateNode=Jm(n.type,n.pendingProps,Q.current),On=n,Ai=!0,u=Kt,Fa(n.type)?(Xf=u,Kt=gi(o.firstChild)):Kt=u),Tn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Kt)&&(o=sS(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,On=n,Kt=gi(o.firstChild),Ai=!1,u=!0):u=!1),u||sr(n)),We(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,Hf(u,d)?o=null:b!==null&&Hf(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(t,n,E_,null,null,a),Eo._currentValue=u),Pl(t,n),Tn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Kt)&&(a=oS(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,On=n,Kt=null,t=!0):t=!1),t||sr(n)),null;case 13:return j0(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Yr(n,null,o,a):Tn(t,n,o,a),n.child;case 11:return H0(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),Tn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=wn(u),o=o(u),n.flags|=1,Tn(t,n,o,a),n.child;case 14:return G0(t,n,n.type,n.pendingProps,a);case 15:return V0(t,n,n.type,n.pendingProps,a);case 19:return K0(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Ol(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return k0(t,n,a);case 24:return lr(n),o=wn(hn),t===null?(u=Cu(),u===null&&(u=Wt,d=Ru(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Uu(n),ya(n,hn,u)):((t.lanes&a)!==0&&(Lu(t,n),to(n,null,null,a),eo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ya(n,hn,o)):(o=d.cache,ya(n,hn,o),o!==u.cache&&Au(n,[hn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(t){t.flags|=4}function J0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sx(n)){if(n=si.current,n!==null&&((Mt&4194048)===Mt?Ri!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Ri))throw Js=Du,Op;t.flags|=8192}}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,Qr|=n)}function lo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function N_(t,n,a){var o=n.pendingProps;switch(bu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(hn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ws(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Dp())),jt(n),null;case 26:return a=n.memoizedState,t===null?(Yi(n),a!==null?(jt(n),J0(n,a)):(jt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Yi(n),jt(n),J0(n,a)):(jt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Yi(n),jt(n),n.flags&=-16777217),null;case 27:ct(n),a=Q.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=Ce.current,Ws(n)?wp(n):(t=Jm(u,o,a),n.stateNode=t,Yi(n))}return jt(n),null;case 5:if(ct(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(t=Ce.current,Ws(n))wp(n);else{switch(u=Zl(Q.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[gn]=n,t[Mn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Rn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Yi(n)}}return jt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Q.current,Ws(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Wm(t.nodeValue,a)),t||sr(n)}else t=Zl(t).createTextNode(o),t[gn]=n,n.stateNode=t}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ws(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[gn]=n}else qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Dp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),jt(n),null;case 4:return Xe(),t===null&&Of(n.stateNode.containerInfo),jt(n),null;case 10:return ki(n.type),jt(n),null;case 19:if(ye(pn),u=n.memoizedState,u===null)return jt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)lo(u,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ul(t),d!==null){for(n.flags|=128,lo(u,!1),t=d.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ap(a,t),a=a.sibling;return be(pn,pn.current&1|2),n.child}t=t.sibling}u.tail!==null&&st()>zl&&(n.flags|=128,o=!0,lo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Ul(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),lo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!wt)return jt(n),null}else 2*st()-u.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,o=!0,lo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=st(),n.sibling=null,t=pn.current,be(pn,o?t&1|2:t&1),n):(jt(n),null);case 22:case 23:return Wi(n),Fu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(hn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function P_(t,n){switch(bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ki(hn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 13:if(Wi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(pn),null;case 4:return Xe(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),Fu(),t!==null&&ye(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ki(hn),null;case 25:return null;default:return null}}function $0(t,n){switch(bu(n),n.tag){case 3:ki(hn),Xe();break;case 26:case 27:case 5:ct(n);break;case 4:Xe();break;case 13:Wi(n);break;case 19:ye(pn);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),Fu(),t!==null&&ye(cr);break;case 24:ki(hn)}}function co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(T){Vt(n,n.return,T)}}function wa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,u=n;var F=a,$=T;try{$()}catch(me){Vt(u,F,me)}}}o=o.next}while(o!==d)}}catch(me){Vt(n,n.return,me)}}function em(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Gp(n,a)}catch(o){Vt(t,t.return,o)}}}function tm(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function wi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function nm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function ff(t,n,a){try{var o=t.stateNode;tS(o,t.type,a,n),o[Mn]=n}catch(u){Vt(t,t.return,u)}}function im(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=jl));else if(o!==4&&(o===27&&Fa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Il(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function am(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[gn]=t,n[Mn]=a}catch(d){Vt(t,t.return,d)}}var ji=!1,nn=!1,pf=!1,rm=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function O_(t,n){if(t=t.containerInfo,Bf=tc,t=xp(t),fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,T=-1,F=-1,$=0,me=0,_e=t,ie=null;t:for(;;){for(var ae;_e!==a||u!==0&&_e.nodeType!==3||(T=b+u),_e!==d||o!==0&&_e.nodeType!==3||(F=b+o),_e.nodeType===3&&(b+=_e.nodeValue.length),(ae=_e.firstChild)!==null;)ie=_e,_e=ae;for(;;){if(_e===t)break t;if(ie===a&&++$===u&&(T=b),ie===d&&++me===o&&(F=b),(ae=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=ae}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:t,selectionRange:a},tc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var rt=fr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(rt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Vt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function sm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(t,a),o&4&&co(5,a);break;case 1:if(Ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){Vt(a,a.return,b)}else{var u=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Vt(a,a.return,b)}}o&64&&em(a),o&512&&uo(a,a.return);break;case 3:if(Ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(t,n)}catch(b){Vt(a,a.return,b)}}break;case 27:n===null&&o&4&&am(a);case 26:case 5:Ca(t,a),n===null&&o&4&&nm(a),o&512&&uo(a,a.return);break;case 12:Ca(t,a);break;case 13:Ca(t,a),o&4&&cm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=X_.bind(null,a),lS(t,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||nn,u=ji;var d=nn;ji=o,(nn=n)&&!d?Da(t,a,(a.subtreeFlags&8772)!==0):Ca(t,a),ji=u,nn=d}break;case 30:break;default:Ca(t,a)}}function om(t){var n=t.alternate;n!==null&&(t.alternate=null,om(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Cr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,zn=!1;function Zi(t,n,a){for(a=a.child;a!==null;)lm(t,n,a),a=a.sibling}function lm(t,n,a){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(xe,a)}catch{}switch(a.tag){case 26:nn||wi(a,n),Zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||wi(a,n);var o=Yt,u=zn;Fa(a.type)&&(Yt=a.stateNode,zn=!1),Zi(t,n,a),So(a.stateNode),Yt=o,zn=u;break;case 5:nn||wi(a,n);case 6:if(o=Yt,u=zn,Yt=null,Zi(t,n,a),Yt=o,zn=u,Yt!==null)if(zn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{Yt.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:Yt!==null&&(zn?(t=Yt,Km(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wo(t)):Km(Yt,a.stateNode));break;case 4:o=Yt,u=zn,Yt=a.stateNode.containerInfo,zn=!0,Zi(t,n,a),Yt=o,zn=u;break;case 0:case 11:case 14:case 15:nn||wa(2,a,n),nn||wa(4,a,n),Zi(t,n,a);break;case 1:nn||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tm(a,n,o)),Zi(t,n,a);break;case 21:Zi(t,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Zi(t,n,a),nn=o;break;default:Zi(t,n,a)}}function cm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wo(t)}catch(a){Vt(n,n.return,a)}}function F_(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new rm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new rm),n;default:throw Error(r(435,t.tag))}}function mf(t,n){var a=F_(t);n.forEach(function(o){var u=W_.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(Fa(T.type)){Yt=T.stateNode,zn=!1;break e}break;case 5:Yt=T.stateNode,zn=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,zn=!0;break e}T=T.return}if(Yt===null)throw Error(r(160));lm(d,b,u),Yt=null,zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)um(n,t),n=n.sibling}var xi=null;function um(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(wa(3,t,t.return),co(3,t),wa(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(nn||a===null||wi(a,a.return)),o&64&&ji&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(qn(n,t),Yn(t),o&512&&(nn||a===null||wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ei]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[gn]=t,on(d),o=d;break e;case"link":var b=ax("link","href",u).get(o+(a.href||""));if(b){for(var T=0;T<b.length;T++)if(d=b[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(T,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=ax("meta","content",u).get(o+(a.content||""))){for(T=0;T<b.length;T++)if(d=b[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(T,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[gn]=t,on(d),o=d}t.stateNode=o}else rx(u,t.type,t.stateNode);else t.stateNode=ix(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?rx(u,t.type,t.stateNode):ix(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(nn||a===null||wi(a,a.return)),a!==null&&o&4&&ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(nn||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{en(u,"")}catch(ae){Vt(t,t.return,ae)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,ff(t,u,a!==null?a.memoizedProps:u)),o&1024&&(pf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ae){Vt(t,t.return,ae)}}break;case 3:if(Jl=null,u=xi,xi=Kl(n.containerInfo),qn(n,t),xi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ae){Vt(t,t.return,ae)}pf&&(pf=!1,fm(t));break;case 4:o=xi,xi=Kl(t.stateNode.containerInfo),qn(n,t),Yn(t),xi=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yf=st()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mf(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=ji,me=nn;if(ji=$||u,nn=me||F,qn(n,t),nn=me,ji=$,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ji||nn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(d=F.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=F.stateNode;var _e=F.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Vt(F,F.return,ae)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ae){Vt(F,F.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,mf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(im(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=df(t);Il(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(en(b,""),a.flags&=-33);var T=df(t);Il(t,T,b);break;case 3:case 4:var F=a.stateNode.containerInfo,$=df(t);hf(t,$,F);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function fm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;fm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sm(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),dr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tm(n,n.return,a),dr(n);break;case 27:So(n.stateNode);case 26:case 5:wi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:Da(u,d,a),co(4,d);break;case 1:if(Da(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Vt(o,o.return,$)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Hp(F[u],T)}catch($){Vt(o,o.return,$)}}a&&b&64&&em(d),uo(d,d.return);break;case 27:am(d);case 26:case 5:Da(u,d,a),a&&o===null&&b&4&&nm(d),uo(d,d.return);break;case 12:Da(u,d,a);break;case 13:Da(u,d,a),a&&b&4&&cm(u,d);break;case 22:d.memoizedState===null&&Da(u,d,a),uo(d,d.return);break;case 30:break;default:Da(u,d,a)}n=n.sibling}}function xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zs(a))}function gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dm(t,n,a,o),n=n.sibling}function dm(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&co(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zs(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,T=d.onPostCommit;typeof T=="function"&&T(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Vt(n,n.return,F)}}else Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(t,n,a,o):fo(t,n):d._visibility&2?Ci(t,n,a,o):(d._visibility|=2,jr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&xf(b,n);break;case 24:Ci(t,n,a,o),u&2048&&gf(n.alternate,n);break;default:Ci(t,n,a,o)}}function jr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,b=n,T=a,F=o,$=b.flags;switch(b.tag){case 0:case 11:case 15:jr(d,b,T,F,u),co(8,b);break;case 23:break;case 22:var me=b.stateNode;b.memoizedState!==null?me._visibility&2?jr(d,b,T,F,u):fo(d,b):(me._visibility|=2,jr(d,b,T,F,u)),u&&$&2048&&xf(b.alternate,b);break;case 24:jr(d,b,T,F,u),u&&$&2048&&gf(b.alternate,b);break;default:jr(d,b,T,F,u)}n=n.sibling}}function fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:fo(a,o),u&2048&&xf(o.alternate,o);break;case 24:fo(a,o),u&2048&&gf(o.alternate,o);break;default:fo(a,o)}n=n.sibling}}var ho=8192;function Zr(t){if(t.subtreeFlags&ho)for(t=t.child;t!==null;)hm(t),t=t.sibling}function hm(t){switch(t.tag){case 26:Zr(t),t.flags&ho&&t.memoizedState!==null&&yS(xi,t.memoizedState,t.memoizedProps);break;case 5:Zr(t);break;case 3:case 4:var n=xi;xi=Kl(t.stateNode.containerInfo),Zr(t),xi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ho,ho=16777216,Zr(t),ho=n):Zr(t));break;default:Zr(t)}}function pm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,xm(o,t)}pm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mm(t),t=t.sibling}function mm(t){switch(t.tag){case 0:case 11:case 15:po(t),t.flags&2048&&wa(9,t,t.return);break;case 3:po(t);break;case 12:po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):po(t);break;default:po(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,xm(o,t)}pm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function xm(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(om(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var I_={getCacheForType:function(t){var n=wn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},B_=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Wt=null,_t=null,Mt=0,Lt=0,jn=null,Ua=!1,Kr=!1,vf=!1,Ki=0,Qt=0,La=0,hr=0,_f=0,oi=0,Qr=0,mo=null,Hn=null,Sf=!1,yf=0,zl=1/0,Hl=null,Na=null,An=0,Pa=null,Jr=null,$r=0,bf=0,Mf=null,gm=null,xo=0,Ef=null;function Zn(){if((Ut&2)!==0&&Mt!==0)return Mt&-Mt;if(O.T!==null){var t=Hr;return t!==0?t:Uf()}return At()}function vm(){oi===0&&(oi=(Mt&536870912)===0||wt?V():536870912);var t=si.current;return t!==null&&(t.flags|=32),oi}function Kn(t,n,a){(t===Wt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(es(t,0),Oa(t,Mt,oi,!1)),we(t,a),((Ut&2)===0||t!==Wt)&&(t===Wt&&((Ut&2)===0&&(hr|=a),Qt===4&&Oa(t,Mt,oi,!1)),Di(t))}function _m(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=o?G_(t,n):Rf(t,n,!0),d=o;do{if(u===0){Kr&&!o&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!z_(a)){u=Rf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var T=t;u=mo;var F=T.current.memoizedState.isDehydrated;if(F&&(es(T,b).flags|=256),b=Rf(T,b,!1),b!==2){if(vf&&!F){T.errorRecoveryDisabledLanes|=d,hr|=d,u=4;break e}d=Hn,Hn=u,d!==null&&(Hn===null?Hn=d:Hn.push.apply(Hn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){es(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,oi,!Ua);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=yf+300-st(),10<u)){if(Oa(o,n,oi,!Ua),Je(o,0,!0)!==0)break e;o.timeoutHandle=jm(Sm.bind(null,o,a,Hn,Hl,Sf,n,oi,hr,Qr,Ua,d,2,-0,0),u);break e}Sm(o,a,Hn,Hl,Sf,n,oi,hr,Qr,Ua,d,0,-0,0)}}break}while(!0);Di(t)}function Sm(t,n,a,o,u,d,b,T,F,$,me,_e,ie,ae){if(t.timeoutHandle=-1,_e=n.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:SS},hm(n),_e=bS(),_e!==null)){t.cancelPendingCommit=_e(Rm.bind(null,t,n,d,a,o,u,b,T,F,me,1,ie,ae)),Oa(t,d,b,!$);return}Rm(t,n,d,a,o,u,b,T,F)}function z_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Xn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,o){n&=~_f,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&Se(t,a,n)}function Gl(){return(Ut&6)===0?(go(0),!1):!0}function Tf(){if(_t!==null){if(Lt===0)var t=_t.return;else t=_t,Vi=or=null,Gu(t),qr=null,so=0,t=_t;for(;t!==null;)$0(t.alternate,t),t=t.return;_t=null}}function es(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Tf(),Wt=t,_t=a=zi(t.current,null),Mt=n,Lt=0,jn=null,Ua=!1,Kr=Oe(t,n),vf=!1,Qr=oi=_f=hr=La=Qt=0,Hn=mo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return Ki=n,cl(),a}function ym(t,n){pt=null,O.H=wl,n===Qs||n===vl?(n=Bp(),Lt=3):n===Op?(n=Bp(),Lt=4):Lt=n===z0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,_t===null&&(Qt=1,Nl(t,ni(n,t.current)))}function bm(){var t=O.H;return O.H=wl,t===null?wl:t}function Mm(){var t=O.A;return O.A=I_,t}function Af(){Qt=4,Ua||(Mt&4194048)!==Mt&&si.current!==null||(Kr=!0),(La&134217727)===0&&(hr&134217727)===0||Wt===null||Oa(Wt,Mt,oi,!1)}function Rf(t,n,a){var o=Ut;Ut|=2;var u=bm(),d=Mm();(Wt!==t||Mt!==n)&&(Hl=null,es(t,n)),n=!1;var b=Qt;e:do try{if(Lt!==0&&_t!==null){var T=_t,F=jn;switch(Lt){case 8:Tf(),b=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var $=Lt;if(Lt=0,jn=null,ts(t,T,F,$),a&&Kr){b=0;break e}break;default:$=Lt,Lt=0,jn=null,ts(t,T,F,$)}}H_(),b=Qt;break}catch(me){ym(t,me)}while(!0);return n&&t.shellSuspendCounter++,Vi=or=null,Ut=o,O.H=u,O.A=d,_t===null&&(Wt=null,Mt=0,cl()),b}function H_(){for(;_t!==null;)Em(_t)}function G_(t,n){var a=Ut;Ut|=2;var o=bm(),u=Mm();Wt!==t||Mt!==n?(Hl=null,zl=st()+500,es(t,n)):Kr=Oe(t,n);e:do try{if(Lt!==0&&_t!==null){n=_t;var d=jn;t:switch(Lt){case 1:Lt=0,jn=null,ts(t,n,d,1);break;case 2:case 9:if(Fp(d)){Lt=0,jn=null,Tm(n);break}n=function(){Lt!==2&&Lt!==9||Wt!==t||(Lt=7),Di(t)},d.then(n,n);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:Fp(d)?(Lt=0,jn=null,Tm(n)):(Lt=0,jn=null,ts(t,n,d,7));break;case 5:var b=null;switch(_t.tag){case 26:b=_t.memoizedState;case 5:case 27:var T=_t;if(!b||sx(b)){Lt=0,jn=null;var F=T.sibling;if(F!==null)_t=F;else{var $=T.return;$!==null?(_t=$,Vl($)):_t=null}break t}}Lt=0,jn=null,ts(t,n,d,5);break;case 6:Lt=0,jn=null,ts(t,n,d,6);break;case 8:Tf(),Qt=6;break e;default:throw Error(r(462))}}V_();break}catch(me){ym(t,me)}while(!0);return Vi=or=null,O.H=o,O.A=u,Ut=a,_t!==null?0:(Wt=null,Mt=0,cl(),Qt)}function V_(){for(;_t!==null&&!H();)Em(_t)}function Em(t){var n=Q0(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Vl(t):_t=n}function Tm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=W0(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=W0(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Gu(n);default:$0(a,n),n=_t=Ap(n,Ki),n=Q0(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Vl(t):_t=n}function ts(t,n,a,o){Vi=or=null,Gu(n),qr=null,so=0;var u=n.return;try{if(U_(t,u,n,a,Mt)){Qt=1,Nl(t,ni(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;Qt=1,Nl(t,ni(a,t.current)),_t=null;return}n.flags&32768?(wt||o===1?t=!0:Kr||(Mt&536870912)!==0?t=!1:(Ua=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Am(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){Am(n,Ua);return}t=n.return;var a=N_(n.alternate,n,Ki);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);Qt===0&&(Qt=5)}function Am(t,n){do{var a=P_(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);Qt=6,_t=null}function Rm(t,n,a,o,u,d,b,T,F){t.cancelPendingCommit=null;do kl();while(An!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=xu,Te(t,a,d,b,T,F),t===Wt&&(_t=Wt=null,Mt=0),Jr=n,Pa=t,$r=a,bf=d,Mf=u,gm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,q_(qe,function(){return Lm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=q.p,q.p=2,b=Ut,Ut|=4;try{O_(t,n,a)}finally{Ut=b,q.p=u,O.T=o}}An=1,wm(),Cm(),Dm()}}function wm(){if(An===1){An=0;var t=Pa,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=q.p;q.p=2;var u=Ut;Ut|=4;try{um(n,t);var d=zf,b=xp(t.containerInfo),T=d.focusedElem,F=d.selectionRange;if(b!==T&&T&&T.ownerDocument&&mp(T.ownerDocument.documentElement,T)){if(F!==null&&fu(T)){var $=F.start,me=F.end;if(me===void 0&&(me=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(me,T.value.length);else{var _e=T.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),rt=T.textContent.length,tt=Math.min(F.start,rt),zt=F.end===void 0?tt:Math.min(F.end,rt);!ae.extend&&tt>zt&&(b=zt,zt=tt,tt=b);var W=pp(T,tt),k=pp(T,zt);if(W&&k&&(ae.rangeCount!==1||ae.anchorNode!==W.node||ae.anchorOffset!==W.offset||ae.focusNode!==k.node||ae.focusOffset!==k.offset)){var K=_e.createRange();K.setStart(W.node,W.offset),ae.removeAllRanges(),tt>zt?(ae.addRange(K),ae.extend(k.node,k.offset)):(K.setEnd(k.node,k.offset),ae.addRange(K))}}}}for(_e=[],ae=T;ae=ae.parentNode;)ae.nodeType===1&&_e.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var ge=_e[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}tc=!!Bf,zf=Bf=null}finally{Ut=u,q.p=o,O.T=a}}t.current=n,An=2}}function Cm(){if(An===2){An=0;var t=Pa,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=q.p;q.p=2;var u=Ut;Ut|=4;try{sm(t,n.alternate,n)}finally{Ut=u,q.p=o,O.T=a}}An=3}}function Dm(){if(An===4||An===3){An=0,mt();var t=Pa,n=Jr,a=$r,o=gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,Jr=Pa=null,Um(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Na=null),Ct(a),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(xe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=q.p,q.p=2,O.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var T=o[b];d(T.value,{componentStack:T.stack})}}finally{O.T=n,q.p=u}}($r&3)!==0&&kl(),Di(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Ef?xo++:(xo=0,Ef=t):xo=0,go(0)}}function Um(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zs(n)))}function kl(t){return wm(),Cm(),Dm(),Lm()}function Lm(){if(An!==5)return!1;var t=Pa,n=bf;bf=0;var a=Ct($r),o=O.T,u=q.p;try{q.p=32>a?32:a,O.T=null,a=Mf,Mf=null;var d=Pa,b=$r;if(An=0,Jr=Pa=null,$r=0,(Ut&6)!==0)throw Error(r(331));var T=Ut;if(Ut|=4,mm(d.current),dm(d,d.current,b,a),Ut=T,go(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(xe,d)}catch{}return!0}finally{q.p=u,O.T=o,Um(t,n)}}function Nm(t,n,a){n=ni(a,n),n=tf(t.stateNode,n,2),t=Ea(t,n,2),t!==null&&(we(t,2),Di(t))}function Vt(t,n,a){if(t.tag===3)Nm(t,t,a);else for(;n!==null;){if(n.tag===3){Nm(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){t=ni(a,t),a=I0(2),o=Ea(n,a,2),o!==null&&(B0(a,o,n,t),we(o,2),Di(o));break}}n=n.return}}function wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new B_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(vf=!0,u.add(a),t=k_.bind(null,t,n,a),n.then(t,t))}function k_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(Mt&a)===a&&(Qt===4||Qt===3&&(Mt&62914560)===Mt&&300>st()-yf?(Ut&2)===0&&es(t,0):_f|=a,Qr===Mt&&(Qr=0)),Di(t)}function Pm(t,n){n===0&&(n=Le()),t=Fr(t,n),t!==null&&(we(t,n),Di(t))}function X_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Pm(t,a)}function W_(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Pm(t,a)}function q_(t,n){return ut(t,n)}var Xl=null,ns=null,Cf=!1,Wl=!1,Df=!1,pr=0;function Di(t){t!==ns&&t.next===null&&(ns===null?Xl=ns=t:ns=ns.next=t),Wl=!0,Cf||(Cf=!0,j_())}function go(t,n){if(!Df&&Wl){Df=!0;do for(var a=!1,o=Xl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(b&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Bm(o,d))}else d=Mt,d=Je(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Oe(o,d)||(a=!0,Bm(o,d));o=o.next}while(a);Df=!1}}function Y_(){Om()}function Om(){Wl=Cf=!1;var t=0;pr!==0&&(nS()&&(t=pr),pr=0);for(var n=st(),a=null,o=Xl;o!==null;){var u=o.next,d=Fm(o,n);d===0?(o.next=null,a===null?Xl=u:a.next=u,u===null&&(ns=a)):(a=o,(t!==0||(d&3)!==0)&&(Wl=!0)),o=u}go(t)}function Fm(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-Fe(d),T=1<<b,F=u[b];F===-1?((T&a)===0||(T&o)!==0)&&(u[b]=it(T,n)):F<=n&&(t.expiredLanes|=T),d&=~T}if(n=Wt,a=Mt,a=Je(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Ct(a)){case 2:case 8:a=kt;break;case 32:a=qe;break;case 268435456:a=N;break;default:a=qe}return o=Im.bind(null,t),a=ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function Im(t,n){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kl()&&t.callbackNode!==a)return null;var o=Mt;return o=Je(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(_m(t,o,n),Fm(t,st()),t.callbackNode!=null&&t.callbackNode===a?Im.bind(null,t):null)}function Bm(t,n){if(kl())return null;_m(t,n,!0)}function j_(){aS(function(){(Ut&6)!==0?ut(Ve,Y_):Om()})}function Uf(){return pr===0&&(pr=V()),pr}function zm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function Hm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Z_(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=zm((u[Mn]||null).action),b=o.submitter;b&&(n=(n=b[Mn]||null)?zm(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var T=new sl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var F=b?Hm(u,b):new FormData(u);Ku(a,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(T.preventDefault(),F=b?Hm(u,b):new FormData(u),Ku(a,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var Lf=0;Lf<mu.length;Lf++){var Nf=mu[Lf],K_=Nf.toLowerCase(),Q_=Nf[0].toUpperCase()+Nf.slice(1);mi(K_,"on"+Q_)}mi(_p,"onAnimationEnd"),mi(Sp,"onAnimationIteration"),mi(yp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(p_,"onTransitionRun"),mi(m_,"onTransitionStart"),mi(x_,"onTransitionCancel"),mi(bp,"onTransitionEnd"),va("onMouseEnter",["mouseout","mouseover"]),va("onMouseLeave",["mouseout","mouseover"]),va("onPointerEnter",["pointerout","pointerover"]),va("onPointerLeave",["pointerout","pointerover"]),Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Gm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var T=o[b],F=T.instance,$=T.currentTarget;if(T=T.listener,F!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=$;try{d(u)}catch(me){Ll(me)}u.currentTarget=null,d=F}else for(b=0;b<o.length;b++){if(T=o[b],F=T.instance,$=T.currentTarget,T=T.listener,F!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=$;try{d(u)}catch(me){Ll(me)}u.currentTarget=null,d=F}}}}function St(t,n){var a=n[hi];a===void 0&&(a=n[hi]=new Set);var o=t+"__bubble";a.has(o)||(Vm(n,t,2,!1),a.add(o))}function Pf(t,n,a){var o=0;n&&(o|=4),Vm(a,t,o,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Of(t){if(!t[ql]){t[ql]=!0,el.forEach(function(a){a!=="selectionchange"&&(J_.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,Pf("selectionchange",!1,n))}}function Vm(t,n,a,o){switch(dx(n)){case 2:var u=TS;break;case 8:u=AS;break;default:u=Zf}a=u.bind(null,n,a,t),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var T=o.stateNode.containerInfo;if(T===u)break;if(b===4)for(b=o.return;b!==null;){var F=b.tag;if((F===3||F===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;T!==null;){if(b=pi(T),b===null)return;if(F=b.tag,F===5||F===6||F===26||F===27){o=d=b;continue e}T=T.parentNode}}o=o.return}Zh(function(){var $=d,me=eu(a),_e=[];e:{var ie=Mp.get(t);if(ie!==void 0){var ae=sl,rt=t;switch(t){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":ae=qv;break;case"focusin":rt="focus",ae=su;break;case"focusout":rt="blur",ae=su;break;case"beforeblur":case"afterblur":ae=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=Zv;break;case _p:case Sp:case yp:ae=Iv;break;case bp:ae=Qv;break;case"scroll":case"scrollend":ae=Lv;break;case"wheel":ae=$v;break;case"copy":case"cut":case"paste":ae=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=ep;break;case"toggle":case"beforetoggle":ae=t_}var tt=(n&4)!==0,zt=!tt&&(t==="scroll"||t==="scrollend"),W=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var k=$,K;k!==null;){var ge=k;if(K=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||K===null||W===null||(ge=Fs(k,W),ge!=null&&tt.push(_o(k,ge,K))),zt)break;k=k.return}0<tt.length&&(ie=new ae(ie,rt,null,a,me),_e.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&a!==$c&&(rt=a.relatedTarget||a.fromElement)&&(pi(rt)||rt[Oi]))break e;if((ae||ie)&&(ie=me.window===me?me:(ie=me.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(rt=a.relatedTarget||a.toElement,ae=$,rt=rt?pi(rt):null,rt!==null&&(zt=c(rt),tt=rt.tag,rt!==zt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(ae=null,rt=$),ae!==rt)){if(tt=Jh,ge="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=ep,ge="onPointerLeave",W="onPointerEnter",k="pointer"),zt=ae==null?ie:xa(ae),K=rt==null?ie:xa(rt),ie=new tt(ge,k+"leave",ae,a,me),ie.target=zt,ie.relatedTarget=K,ge=null,pi(me)===$&&(tt=new tt(W,k+"enter",rt,a,me),tt.target=K,tt.relatedTarget=zt,ge=tt),zt=ge,ae&&rt)t:{for(tt=ae,W=rt,k=0,K=tt;K;K=is(K))k++;for(K=0,ge=W;ge;ge=is(ge))K++;for(;0<k-K;)tt=is(tt),k--;for(;0<K-k;)W=is(W),K--;for(;k--;){if(tt===W||W!==null&&tt===W.alternate)break t;tt=is(tt),W=is(W)}tt=null}else tt=null;ae!==null&&km(_e,ie,ae,tt,!1),rt!==null&&zt!==null&&km(_e,zt,rt,tt,!0)}}e:{if(ie=$?xa($):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var Ge=lp;else if(sp(ie))if(cp)Ge=f_;else{Ge=c_;var gt=l_}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Jc($.elementType)&&(Ge=lp):Ge=u_;if(Ge&&(Ge=Ge(t,$))){op(_e,Ge,a,me);break e}gt&&gt(t,ie,$),t==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&Gt(ie,"number",ie.value)}switch(gt=$?xa($):window,t){case"focusin":(sp(gt)||gt.contentEditable==="true")&&(Nr=gt,du=$,Xs=null);break;case"focusout":Xs=du=Nr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,gp(_e,a,me);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":gp(_e,a,me)}var je;if(lu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Lr?ap(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(tp&&a.locale!=="ko"&&(Lr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Lr&&(je=Kh()):(Sa=me,iu="value"in Sa?Sa.value:Sa.textContent,Lr=!0)),gt=Yl($,nt),0<gt.length&&(nt=new $h(nt,t,null,a,me),_e.push({event:nt,listeners:gt}),je?nt.data=je:(je=rp(a),je!==null&&(nt.data=je)))),(je=i_?a_(t,a):r_(t,a))&&(nt=Yl($,"onBeforeInput"),0<nt.length&&(gt=new $h("onBeforeInput","beforeinput",null,a,me),_e.push({event:gt,listeners:nt}),gt.data=je)),Z_(_e,t,$,a,me)}Gm(_e,n)})}function _o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fs(t,a),u!=null&&o.unshift(_o(t,u,d)),u=Fs(t,n),u!=null&&o.push(_o(t,u,d))),t.tag===3)return o;t=t.return}return[]}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function km(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var T=a,F=T.alternate,$=T.stateNode;if(T=T.tag,F!==null&&F===o)break;T!==5&&T!==26&&T!==27||$===null||(F=$,u?($=Fs(a,d),$!=null&&b.unshift(_o(a,$,F))):u||($=Fs(a,d),$!=null&&b.push(_o(a,$,F)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var $_=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Xm(t){return(typeof t=="string"?t:""+t).replace($_,`
`).replace(eS,"")}function Wm(t,n){return n=Xm(n),Xm(t)===n}function jl(){}function Bt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||en(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&en(t,""+o);break;case"className":Ae(t,"class",o);break;case"tabIndex":Ae(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,o);break;case"style":Yh(t,o,d);break;case"data":if(n!=="object"){Ae(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=nl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",u.name,u,null),Bt(t,n,"formEncType",u.formEncType,u,null),Bt(t,n,"formMethod",u.formMethod,u,null),Bt(t,n,"formTarget",u.formTarget,u,null)):(Bt(t,n,"encType",u.encType,u,null),Bt(t,n,"method",u.method,u,null),Bt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=nl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=jl);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Z(t,"popover",o);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Z(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dv.get(a)||a,Z(t,a,o))}}function If(t,n,a,o,u,d){switch(a){case"style":Yh(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?en(t,o):(typeof o=="number"||typeof o=="bigint")&&en(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Z(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,d,b,a,null)}}u&&Bt(t,n,"srcSet",a.srcSet,a,null),o&&Bt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var T=d=b=u=null,F=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":b=me;break;case"checked":F=me;break;case"defaultChecked":$=me;break;case"value":d=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Bt(t,n,o,me,a,null)}}_a(t,d,T,F,$,b,u,!1),Qe(t);return;case"select":St("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":b=T;break;case"multiple":o=T;default:Bt(t,n,u,T,a,null)}n=d,a=b,t.multiple=!!o,n!=null?$t(t,!!o,n,!1):a!=null&&$t(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(T=a[b],T!=null))switch(b){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Bt(t,n,b,T,a,null)}vn(t,o,u,d),Qe(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,n,F,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<vo.length;o++)St(vo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,$,o,a,null)}return;default:if(Jc(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&If(t,n,me,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Bt(t,n,T,o,a,null))}function tS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,T=null,F=null,$=null,me=null;for(ae in a){var _e=a[ae];if(a.hasOwnProperty(ae)&&_e!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":F=_e;default:o.hasOwnProperty(ae)||Bt(t,n,ae,null,o,_e)}}for(var ie in o){var ae=o[ie];if(_e=a[ie],o.hasOwnProperty(ie)&&(ae!=null||_e!=null))switch(ie){case"type":d=ae;break;case"name":u=ae;break;case"checked":$=ae;break;case"defaultChecked":me=ae;break;case"value":b=ae;break;case"defaultValue":T=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:ae!==_e&&Bt(t,n,ie,ae,o,_e)}}En(t,b,T,F,$,me,d,u);return;case"select":ae=b=T=ie=null;for(d in a)if(F=a[d],a.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":ae=F;default:o.hasOwnProperty(d)||Bt(t,n,d,null,o,F)}for(u in o)if(d=o[u],F=a[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":ie=d;break;case"defaultValue":T=d;break;case"multiple":b=d;default:d!==F&&Bt(t,n,u,d,o,F)}n=T,a=b,o=ae,ie!=null?$t(t,!!a,ie,!1):!!o!=!!a&&(n!=null?$t(t,!!a,n,!0):$t(t,!!a,a?[]:"",!1));return;case"textarea":ae=ie=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Bt(t,n,T,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":ie=u;break;case"defaultValue":ae=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Bt(t,n,b,u,o,d)}Pn(t,ie,ae);return;case"option":for(var rt in a)if(ie=a[rt],a.hasOwnProperty(rt)&&ie!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Bt(t,n,rt,null,o,ie)}for(F in o)if(ie=o[F],ae=a[F],o.hasOwnProperty(F)&&ie!==ae&&(ie!=null||ae!=null))switch(F){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Bt(t,n,F,ie,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Bt(t,n,tt,null,o,ie);for($ in o)if(ie=o[$],ae=a[$],o.hasOwnProperty($)&&ie!==ae&&(ie!=null||ae!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Bt(t,n,$,ie,o,ae)}return;default:if(Jc(n)){for(var zt in a)ie=a[zt],a.hasOwnProperty(zt)&&ie!==void 0&&!o.hasOwnProperty(zt)&&If(t,n,zt,void 0,o,ie);for(me in o)ie=o[me],ae=a[me],!o.hasOwnProperty(me)||ie===ae||ie===void 0&&ae===void 0||If(t,n,me,ie,o,ae);return}}for(var W in a)ie=a[W],a.hasOwnProperty(W)&&ie!=null&&!o.hasOwnProperty(W)&&Bt(t,n,W,null,o,ie);for(_e in o)ie=o[_e],ae=a[_e],!o.hasOwnProperty(_e)||ie===ae||ie==null&&ae==null||Bt(t,n,_e,ie,o,ae)}var Bf=null,zf=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function qm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function nS(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(rS)}:jm;function rS(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Km(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&So(b.documentElement),a&2&&So(b.body),a&4)for(a=b.head,So(a),b=a.firstChild;b;){var T=b.nextSibling,F=b.nodeName;b[Ei]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=T}}if(u===0){t.removeChild(d),wo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);wo(n)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Cr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ei])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function oS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function lS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Xf=null;function Qm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Jm(t,n,a){switch(n=Zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function So(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Cr(t)}var li=new Map,$m=new Set;function Kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=q.d;q.d={f:cS,r:uS,D:fS,C:dS,L:hS,m:pS,X:xS,S:mS,M:gS};function cS(){var t=Qi.f(),n=Gl();return t||n}function uS(t){var n=Fi(t);n!==null&&n.tag===5&&n.type==="form"?_0(n):Qi.r(t)}var as=typeof document>"u"?null:document;function ex(t,n,a){var o=as;if(o&&typeof n=="string"&&n){var u=dn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$m.has(u)||($m.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),on(n),o.head.appendChild(n)))}}function fS(t){Qi.D(t),ex("dns-prefetch",t,null)}function dS(t,n){Qi.C(t,n),ex("preconnect",t,n)}function hS(t,n,a){Qi.L(t,n,a);var o=as;if(o&&t&&n){var u='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+dn(a.imageSizes)+'"]')):u+='[href="'+dn(t)+'"]';var d=u;switch(n){case"style":d=rs(t);break;case"script":d=ss(t)}li.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(yo(d))||n==="script"&&o.querySelector(bo(d))||(n=o.createElement("link"),Rn(n,"link",t),on(n),o.head.appendChild(n)))}}function pS(t,n){Qi.m(t,n);var a=as;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ss(t)}if(!li.has(d)&&(t=x({rel:"modulepreload",href:t},n),li.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(d)))return}o=a.createElement("link"),Rn(o,"link",t),on(o),a.head.appendChild(o)}}}function mS(t,n,a){Qi.S(t,n,a);var o=as;if(o&&t){var u=ga(o).hoistableStyles,d=rs(t);n=n||"default";var b=u.get(d);if(!b){var T={loading:0,preload:null};if(b=o.querySelector(yo(d)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(d))&&Wf(t,a);var F=b=o.createElement("link");on(F),Rn(F,"link",t),F._p=new Promise(function($,me){F.onload=$,F.onerror=me}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ql(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:T},u.set(d,b)}}}function xS(t,n){Qi.X(t,n);var a=as;if(a&&t){var o=ga(a).hoistableScripts,u=ss(t),d=o.get(u);d||(d=a.querySelector(bo(u)),d||(t=x({src:t,async:!0},n),(n=li.get(u))&&qf(t,n),d=a.createElement("script"),on(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function gS(t,n){Qi.M(t,n);var a=as;if(a&&t){var o=ga(a).hoistableScripts,u=ss(t),d=o.get(u);d||(d=a.querySelector(bo(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=li.get(u))&&qf(t,n),d=a.createElement("script"),on(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function tx(t,n,a,o){var u=(u=Q.current)?Kl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rs(a.href);var d=ga(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(yo(t)))&&!d._p&&(b.instance=d,b.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),d||vS(u,t,a,b.state))),n&&o===null)throw Error(r(528,""));return b}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function rs(t){return'href="'+dn(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function nx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function vS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),on(n),t.head.appendChild(n))}function ss(t){return'[src="'+dn(t)+'"]'}function bo(t){return"script[async]"+t}function ix(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(o)return n.instance=o,on(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),on(o),Rn(o,"style",u),Ql(o,a.precedence,t),n.instance=o;case"stylesheet":u=rs(a.href);var d=t.querySelector(yo(u));if(d)return n.state.loading|=4,n.instance=d,on(d),d;o=nx(a),(u=li.get(u))&&Wf(o,u),d=(t.ownerDocument||t).createElement("link"),on(d);var b=d;return b._p=new Promise(function(T,F){b.onload=T,b.onerror=F}),Rn(d,"link",o),n.state.loading|=4,Ql(d,a.precedence,t),n.instance=d;case"script":return d=ss(a.src),(u=t.querySelector(bo(d)))?(n.instance=u,on(u),u):(o=a,(u=li.get(d))&&(o=x({},a),qf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),on(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ql(o,a.precedence,t));return n.instance}function Ql(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var T=o[b];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Jl=null;function ax(t,n,a){if(Jl===null){var o=new Map,u=Jl=new Map;u.set(a,o)}else u=Jl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ei]||d[gn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var T=o.get(b);T?T.push(d):o.set(b,[d])}}return o}function rx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _S(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Mo=null;function SS(){}function yS(t,n,a){if(Mo===null)throw Error(r(475));var o=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=rs(a.href),d=t.querySelector(yo(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=$l.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,on(d);return}d=t.ownerDocument||t,a=nx(a),(u=li.get(u))&&Wf(a,u),d=d.createElement("link"),on(d);var b=d;b._p=new Promise(function(T,F){b.onload=T,b.onerror=F}),Rn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=$l.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function bS(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&Yf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Yf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function $l(){if(this.count--,this.count===0){if(this.stylesheets)Yf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function Yf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(MS,t),ec=null,$l.call(t))}function MS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var o=a.get(null);else{a=new Map,ec.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=$l.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ES(t,n,a,o,u,d,b,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function ox(t,n,a,o,u,d,b,T,F,$,me,_e){return t=new ES(t,n,a,b,T,F,$,_e),n=1,d===!0&&(n|=24),d=Wn(3,null,null,n),t.current=d,d.stateNode=t,n=Ru(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Uu(d),t}function lx(t){return t?(t=Ir,t):Ir}function cx(t,n,a,o,u,d){u=lx(u),o.context===null?o.context=u:o.pendingContext=u,o=Ma(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ea(t,o,n),a!==null&&(Kn(a,t,n),$s(a,t,n))}function ux(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jf(t,n){ux(t,n),(t=t.alternate)&&ux(t,n)}function fx(t){if(t.tag===13){var n=Fr(t,67108864);n!==null&&Kn(n,t,67108864),jf(t,67108864)}}var tc=!0;function TS(t,n,a,o){var u=O.T;O.T=null;var d=q.p;try{q.p=2,Zf(t,n,a,o)}finally{q.p=d,O.T=u}}function AS(t,n,a,o){var u=O.T;O.T=null;var d=q.p;try{q.p=8,Zf(t,n,a,o)}finally{q.p=d,O.T=u}}function Zf(t,n,a,o){if(tc){var u=Kf(o);if(u===null)Ff(t,n,o,nc,a),hx(t,o);else if(wS(u,t,n,a,o))o.stopPropagation();else if(hx(t,o),n&4&&-1<RS.indexOf(t)){for(;u!==null;){var d=Fi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Ze(d.pendingLanes);if(b!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var F=1<<31-Fe(b);T.entanglements[1]|=F,b&=~F}Di(d),(Ut&6)===0&&(zl=st()+500,go(0))}}break;case 13:T=Fr(d,2),T!==null&&Kn(T,d,2),Gl(),jf(d,2)}if(d=Kf(o),d===null&&Ff(t,n,o,nc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Ff(t,n,o,null,a)}}function Kf(t){return t=eu(t),Qf(t)}var nc=null;function Qf(t){if(nc=null,t=pi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function dx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case Ve:return 2;case kt:return 8;case qe:case ot:return 32;case N:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ia=null,Ba=null,za=null,To=new Map,Ao=new Map,Ha=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hx(t,n){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Fi(n),n!==null&&fx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wS(t,n,a,o,u){switch(n){case"focusin":return Ia=Ro(Ia,t,n,a,o,u),!0;case"dragenter":return Ba=Ro(Ba,t,n,a,o,u),!0;case"mouseover":return za=Ro(za,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return To.set(d,Ro(To.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ao.set(d,Ro(Ao.get(d)||null,t,n,a,o,u)),!0}return!1}function px(t){var n=pi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ti(t.priority,function(){if(a.tag===13){var o=Zn();o=at(o);var u=Fr(a,o);u!==null&&Kn(u,a,o),jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);$c=o,a.target.dispatchEvent(o),$c=null}else return n=Fi(a),n!==null&&fx(n),t.blockedOn=a,!1;n.shift()}return!0}function mx(t,n,a){ic(t)&&a.delete(n)}function CS(){Jf=!1,Ia!==null&&ic(Ia)&&(Ia=null),Ba!==null&&ic(Ba)&&(Ba=null),za!==null&&ic(za)&&(za=null),To.forEach(mx),Ao.forEach(mx)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,Jf||(Jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,CS)))}var rc=null;function xx(t){rc!==t&&(rc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Qf(o||a)===null)continue;break}var d=Fi(a);d!==null&&(t.splice(n,3),n-=3,Ku(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wo(t){function n(F){return ac(F,t)}Ia!==null&&ac(Ia,t),Ba!==null&&ac(Ba,t),za!==null&&ac(za,t),To.forEach(n),Ao.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)px(a),a.blockedOn===null&&Ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[Mn]||null;if(typeof d=="function")b||xx(a);else if(b){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[Mn]||null)T=b.formAction;else if(Qf(u)!==null)continue}else T=b.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),xx(a)}}}function $f(t){this._internalRoot=t}sc.prototype.render=$f.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();cx(a,o,t,n,null,null)},sc.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cx(t.current,2,null,t,null,null),Gl(),n[Oi]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,t),a===0&&px(t)}};var gx=e.version;if(gx!=="19.1.1")throw Error(r(527,gx,"19.1.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var DS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{xe=oc.inject(DS),ve=oc}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=N0,d=P0,b=O0,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=ox(t,1,!1,null,null,a,o,u,d,b,T,null),t[Oi]=n.current,Of(t),new $f(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=N0,b=P0,T=O0,F=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=ox(t,1,!0,n,a??null,o,u,d,b,T,F,$),n.context=lx(null),a=n.current,o=Zn(),o=at(o),u=Ma(o),u.callback=null,Ea(a,u,o),a=o,n.current.lanes=a,we(n,a),Di(n),t[Oi]=n.current,Of(t),new sc(n)},Do.version="19.1.1",Do}var Rx;function GS(){if(Rx)return nd.exports;Rx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),nd.exports=HS(),nd.exports}var VS=GS();/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wx="popstate";function kS(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return Bd("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:zo(l)}return WS(e,i,null,s)}function Zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Mi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XS(){return Math.random().toString(36).substring(2,10)}function Cx(s,e){return{usr:s.state,key:s.key,idx:e}}function Bd(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?ws(e):e,state:i,key:e&&e.key||r||XS()}}function zo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ws(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function WS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=x(),v=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:v})}function _(S,v){h="PUSH";let L=Bd(A.location,S,v);p=x()+1;let U=Cx(L,p),I=A.createHref(L);try{f.pushState(U,"",I)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(I)}c&&m&&m({action:h,location:A.location,delta:1})}function y(S,v){h="REPLACE";let L=Bd(A.location,S,v);p=x();let U=Cx(L,p),I=A.createHref(L);f.replaceState(U,"",I),c&&m&&m({action:h,location:A.location,delta:0})}function M(S){return qS(S)}let A={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(wx,g),m=S,()=>{l.removeEventListener(wx,g),m=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let v=M(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:y,go(S){return f.go(S)}};return A}function qS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Zt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:zo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Ug(s,e,i="/"){return YS(s,e,i,!1)}function YS(s,e,i,r){let l=typeof e=="string"?ws(e):e,c=fa(l.pathname||"/",i);if(c==null)return null;let f=Lg(s);jS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=ry(c);h=iy(f[m],p,r)}return h}function Lg(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&m)return;Zt(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let g=la([r,x.relativePath]),_=i.concat(x);f.children&&f.children.length>0&&(Zt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Lg(f.children,e,_,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:ty(g,f.index),routesMeta:_})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Ng(f.path))c(f,h,!0,m)}),e}function Ng(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Ng(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function jS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:ny(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var ZS=/^:[\w-]+$/,KS=3,QS=2,JS=1,$S=10,ey=-2,Dx=s=>s==="*";function ty(s,e){let i=s.split("/"),r=i.length;return i.some(Dx)&&(r+=ey),e&&(r+=QS),i.filter(l=>!Dx(l)).reduce((l,c)=>l+(ZS.test(c)?KS:c===""?JS:$S),r)}function ny(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function iy(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=Hc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),_=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=Hc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:la([c,g.pathname]),pathnameBase:uy(la([c,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(c=la([c,g.pathnameBase]))}return f}function Hc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=ay(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:x,isOptional:g},_)=>{if(x==="*"){let M=h[_]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=h[_];return g&&!y?p[x]=void 0:p[x]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function ay(s,e=!1,i=!0){Mi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function ry(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function fa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oy=s=>sy.test(s);function ly(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?ws(s):s,c;if(i)if(oy(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Mi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Ux(i.substring(1),"/"):c=Ux(i,e)}else c=e;return{pathname:c,search:fy(r),hash:dy(l)}}function Ux(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Pg(s){let e=cy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Og(s,e,i,r=!1){let l;typeof s=="string"?l=ws(s):(l={...s},Zt(!l.pathname||!l.pathname.includes("?"),sd("?","pathname","search",l)),Zt(!l.pathname||!l.pathname.includes("#"),sd("#","pathname","hash",l)),Zt(!l.search||!l.search.includes("#"),sd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),g-=1;l.pathname=_.join("/")}h=g>=0?e[g]:"/"}let m=ly(l,h),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var la=s=>s.join("/").replace(/\/\/+/g,"/"),uy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),fy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,dy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function hy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fg=["POST","PUT","PATCH","DELETE"];new Set(Fg);var py=["GET",...Fg];new Set(py);var Cs=he.createContext(null);Cs.displayName="DataRouter";var Wc=he.createContext(null);Wc.displayName="DataRouterState";he.createContext(!1);var Ig=he.createContext({isTransitioning:!1});Ig.displayName="ViewTransition";var my=he.createContext(new Map);my.displayName="Fetchers";var xy=he.createContext(null);xy.displayName="Await";var Ni=he.createContext(null);Ni.displayName="Navigation";var Wo=he.createContext(null);Wo.displayName="Location";var ma=he.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var Nh=he.createContext(null);Nh.displayName="RouteError";function gy(s,{relative:e}={}){Zt(qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(Ni),{hash:l,pathname:c,search:f}=Yo(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:la([i,c])),r.createHref({pathname:h,search:f,hash:l})}function qo(){return he.useContext(Wo)!=null}function wr(){return Zt(qo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(Wo).location}var Bg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zg(s){he.useContext(Ni).static||he.useLayoutEffect(s)}function Hg(){let{isDataRoute:s}=he.useContext(ma);return s?Dy():vy()}function vy(){Zt(qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Cs),{basename:e,navigator:i}=he.useContext(Ni),{matches:r}=he.useContext(ma),{pathname:l}=wr(),c=JSON.stringify(Pg(r)),f=he.useRef(!1);return zg(()=>{f.current=!0}),he.useCallback((m,p={})=>{if(Mi(f.current,Bg),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=Og(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:la([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,s])}he.createContext(null);function Yo(s,{relative:e}={}){let{matches:i}=he.useContext(ma),{pathname:r}=wr(),l=JSON.stringify(Pg(i));return he.useMemo(()=>Og(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function _y(s,e){return Gg(s,e)}function Gg(s,e,i,r,l){Zt(qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=he.useContext(Ni),{matches:f}=he.useContext(ma),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let L=g&&g.path||"";Vg(p,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let _=wr(),y;if(e){let L=typeof e=="string"?ws(e):e;Zt(x==="/"||L.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${L.pathname}" was given in the \`location\` prop.`),y=L}else y=_;let M=y.pathname||"/",A=M;if(x!=="/"){let L=x.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=Ug(s,{pathname:A});Mi(g||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Mi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Ey(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:la([x,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?x:la([x,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,r,l);return e&&v?he.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function Sy(){let s=Cy(),e=hy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,f)}var yy=he.createElement(Sy,null),by=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?he.createElement(ma.Provider,{value:this.props.routeContext},he.createElement(Nh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function My({routeContext:s,match:e,children:i}){let r=he.useContext(Cs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(ma.Provider,{value:s},i)}function Ey(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let x=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Zt(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,m=-1;if(i)for(let x=0;x<c.length;x++){let g=c[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=x),g.route.id){let{loaderData:_,errors:y}=i,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||M){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(x,g)=>{r(x,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:g})}:void 0;return c.reduceRight((x,g,_)=>{let y,M=!1,A=null,S=null;i&&(y=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||yy,h&&(m<0&&_===0?(Vg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,S=null):m===_&&(M=!0,S=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,_+1)),L=()=>{let U;return y?U=A:M?U=S:g.route.Component?U=he.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=x,he.createElement(My,{match:g,routeContext:{outlet:x,matches:v,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?he.createElement(by,{location:i.location,revalidation:i.revalidation,component:A,error:y,children:L(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):L()},null)}function Ph(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ty(s){let e=he.useContext(Cs);return Zt(e,Ph(s)),e}function Ay(s){let e=he.useContext(Wc);return Zt(e,Ph(s)),e}function Ry(s){let e=he.useContext(ma);return Zt(e,Ph(s)),e}function Oh(s){let e=Ry(s),i=e.matches[e.matches.length-1];return Zt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function wy(){return Oh("useRouteId")}function Cy(){let s=he.useContext(Nh),e=Ay("useRouteError"),i=Oh("useRouteError");return s!==void 0?s:e.errors?.[i]}function Dy(){let{router:s}=Ty("useNavigate"),e=Oh("useNavigate"),i=he.useRef(!1);return zg(()=>{i.current=!0}),he.useCallback(async(l,c={})=>{Mi(i.current,Bg),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Lx={};function Vg(s,e,i){!e&&!Lx[s]&&(Lx[s]=!0,Mi(!1,i))}he.memo(Uy);function Uy({routes:s,future:e,state:i,unstable_onError:r}){return Gg(s,void 0,i,r,e)}function zd(s){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ly({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Zt(!qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=he.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=ws(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:_="default"}=i,y=he.useMemo(()=>{let M=fa(m,f);return M==null?null:{location:{pathname:M,search:p,hash:x,state:g,key:_},navigationType:r}},[f,m,p,x,g,_,r]);return Mi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:he.createElement(Ni.Provider,{value:h},he.createElement(Wo.Provider,{children:e,value:y}))}function Ny({children:s,location:e}){return _y(Hd(s),e)}function Hd(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let c=[...e,l];if(r.type===he.Fragment){i.push.apply(i,Hd(r.props.children,c));return}Zt(r.type===zd,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Hd(r.props.children,c)),i.push(f)}),i}var Nc="get",Pc="application/x-www-form-urlencoded";function qc(s){return s!=null&&typeof s.tagName=="string"}function Py(s){return qc(s)&&s.tagName.toLowerCase()==="button"}function Oy(s){return qc(s)&&s.tagName.toLowerCase()==="form"}function Fy(s){return qc(s)&&s.tagName.toLowerCase()==="input"}function Iy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function By(s,e){return s.button===0&&(!e||e==="_self")&&!Iy(s)}var lc=null;function zy(){if(lc===null)try{new FormData(document.createElement("form"),0),lc=!1}catch{lc=!0}return lc}var Hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function od(s){return s!=null&&!Hy.has(s)?(Mi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pc}"`),null):s}function Gy(s,e){let i,r,l,c,f;if(Oy(s)){let h=s.getAttribute("action");r=h?fa(h,e):null,i=s.getAttribute("method")||Nc,l=od(s.getAttribute("enctype"))||Pc,c=new FormData(s)}else if(Py(s)||Fy(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?fa(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Nc,l=od(s.getAttribute("formenctype"))||od(h.getAttribute("enctype"))||Pc,c=new FormData(h,s),!zy()){let{name:p,type:x,value:g}=s;if(x==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,g)}}else{if(qc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nc,r=null,l=Pc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Vy(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&fa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function ky(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Wy(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await ky(c,i);return f.links?f.links():[]}return[]}));return Zy(r.flat(1).filter(Xy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Nx(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=r.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function qy(s,e,{includeHydrateFallback:i}={}){return Yy(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Yy(s){return[...new Set(s)]}function jy(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function Zy(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(jy(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function kg(){let s=he.useContext(Cs);return Fh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Ky(){let s=he.useContext(Wc);return Fh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ih=he.createContext(void 0);Ih.displayName="FrameworkContext";function Xg(){let s=he.useContext(Ih);return Fh(s,"You must render this element inside a <HydratedRouter> element"),s}function Qy(s,e){let i=he.useContext(Ih),[r,l]=he.useState(!1),[c,f]=he.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,_=he.useRef(null);he.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=v=>{v.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),he.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Uo(h,y),onBlur:Uo(m,M),onMouseEnter:Uo(p,y),onMouseLeave:Uo(x,M),onTouchStart:Uo(g,y)}]:[!1,_,{}]}function Uo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Jy({page:s,...e}){let{router:i}=kg(),r=he.useMemo(()=>Ug(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?he.createElement(eb,{page:s,matches:r,...e}):null}function $y(s){let{manifest:e,routeModules:i}=Xg(),[r,l]=he.useState([]);return he.useEffect(()=>{let c=!1;return Wy(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function eb({page:s,matches:e,...i}){let r=wr(),{manifest:l,routeModules:c}=Xg(),{basename:f}=kg(),{loaderData:h,matches:m}=Ky(),p=he.useMemo(()=>Nx(s,e,m,l,r,"data"),[s,e,m,l,r]),x=he.useMemo(()=>Nx(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let M=new Set,A=!1;if(e.forEach(v=>{let L=l.routes[v.route.id];!L||!L.hasLoader||(!p.some(U=>U.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:M.add(v.route.id))}),M.size===0)return[];let S=Vy(s,f,"data");return A&&M.size>0&&S.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),_=he.useMemo(()=>qy(x,l),[x,l]),y=$y(x);return he.createElement(he.Fragment,null,g.map(M=>he.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),_.map(M=>he.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:A})=>he.createElement("link",{key:M,nonce:i.nonce,...A})))}function tb(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wg&&(window.__reactRouterVersion="7.9.6")}catch{}function nb({basename:s,children:e,window:i}){let r=he.useRef();r.current==null&&(r.current=kS({window:i,v5Compat:!0}));let l=r.current,[c,f]=he.useState({action:l.action,location:l.location}),h=he.useCallback(m=>{he.startTransition(()=>f(m))},[f]);return he.useLayoutEffect(()=>l.listen(h),[l,h]),he.createElement(Ly,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yg=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,..._},y){let{basename:M}=he.useContext(Ni),A=typeof p=="string"&&qg.test(p),S,v=!1;if(typeof p=="string"&&A&&(S=p,Wg))try{let C=new URL(window.location.href),w=p.startsWith("//")?new URL(C.protocol+p):new URL(p),B=fa(w.pathname,M);w.origin===C.origin&&B!=null?p=B+w.search+w.hash:v=!0}catch{Mi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=gy(p,{relative:l}),[U,I,z]=Qy(r,_),P=sb(p,{replace:f,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g});function G(C){e&&e(C),C.defaultPrevented||P(C)}let ne=he.createElement("a",{..._,...z,href:S||L,onClick:v||c?e:G,ref:tb(y,I),target:m,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?he.createElement(he.Fragment,null,ne,he.createElement(Jy,{page:L})):ne});Yg.displayName="Link";var ib=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},x){let g=Yo(f,{relative:p.relative}),_=wr(),y=he.useContext(Wc),{navigator:M,basename:A}=he.useContext(Ni),S=y!=null&&fb(g)&&h===!0,v=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,L=_.pathname,U=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&A&&(U=fa(U,A)||U);const I=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=L===v||!l&&L.startsWith(v)&&L.charAt(I)==="/",P=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),G={isActive:z,isPending:P,isTransitioning:S},ne=z?e:void 0,C;typeof r=="function"?C=r(G):C=[r,z?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(G):c;return he.createElement(Yg,{...p,"aria-current":ne,className:C,ref:x,style:w,to:f,viewTransition:h},typeof m=="function"?m(G):m)});ib.displayName="NavLink";var ab=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Nc,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,..._},y)=>{let M=cb(),A=ub(h,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&qg.test(h),L=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let I=U.nativeEvent.submitter,z=I?.getAttribute("formmethod")||f;M(I||U.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return he.createElement("form",{ref:y,method:S,action:A,onSubmit:r?m:L,..._,"data-discover":!v&&s==="render"?"true":void 0})});ab.displayName="Form";function rb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(s){let e=he.useContext(Cs);return Zt(e,rb(s)),e}function sb(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=Hg(),m=wr(),p=Yo(s,{relative:c});return he.useCallback(x=>{if(By(x,e)){x.preventDefault();let g=i!==void 0?i:zo(m)===zo(p);h(s,{replace:g,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,r,e,s,l,c,f])}var ob=0,lb=()=>`__${String(++ob)}__`;function cb(){let{router:s}=jg("useSubmit"),{basename:e}=he.useContext(Ni),i=wy();return he.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=Gy(r,e);if(l.navigate===!1){let x=l.fetcherKey||lb();await s.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function ub(s,{relative:e}={}){let{basename:i}=he.useContext(Ni),r=he.useContext(ma);Zt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Yo(s||".",{relative:e})},f=wr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:la([i,c.pathname])),zo(c)}function fb(s,{relative:e}={}){let i=he.useContext(Ig);Zt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jg("useViewTransitionState"),l=Yo(s,{relative:e});if(!i.isTransitioning)return!1;let c=fa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=fa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Hc(l.pathname,f)!=null||Hc(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="181",db=0,Px=1,hb=2,Zg=1,pb=2,aa=3,Qa=0,Vn=1,ra=2,ca=0,ys=1,Gd=2,Ox=3,Fx=4,mb=5,br=100,xb=101,gb=102,vb=103,_b=104,Sb=200,yb=201,bb=202,Mb=203,Vd=204,kd=205,Eb=206,Tb=207,Ab=208,Rb=209,wb=210,Cb=211,Db=212,Ub=213,Lb=214,Xd=0,Wd=1,qd=2,Ms=3,Yd=4,jd=5,Zd=6,Kd=7,Kg=0,Nb=1,Pb=2,Ka=0,Ob=1,Fb=2,Ib=3,Bb=4,zb=5,Hb=6,Gb=7,Qg=300,Es=301,Ts=302,Qd=303,Jd=304,Yc=306,$d=1e3,sa=1001,eh=1002,$n=1003,Vb=1004,cc=1005,di=1006,ld=1007,Er=1008,da=1009,Jg=1010,$g=1011,Ho=1012,zh=1013,Ar=1014,oa=1015,Ds=1016,Hh=1017,Gh=1018,Go=1020,ev=35902,tv=35899,nv=1021,iv=1022,bi=1023,Vo=1026,ko=1027,av=1028,Vh=1029,kh=1030,Xh=1031,Wh=1033,Oc=33776,Fc=33777,Ic=33778,Bc=33779,th=35840,nh=35841,ih=35842,ah=35843,rh=36196,sh=37492,oh=37496,lh=37808,ch=37809,uh=37810,fh=37811,dh=37812,hh=37813,ph=37814,mh=37815,xh=37816,gh=37817,vh=37818,_h=37819,Sh=37820,yh=37821,bh=36492,Mh=36494,Eh=36495,Th=36283,Ah=36284,Rh=36285,wh=36286,kb=3200,Xb=3201,Wb=0,qb=1,ja="",ui="srgb",As="srgb-linear",Gc="linear",Ht="srgb",os=7680,Ix=519,Yb=512,jb=513,Zb=514,rv=515,Kb=516,Qb=517,Jb=518,$b=519,Bx=35044,zx="300 es",Li=2e3,Vc=2001;function sv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eM(){const s=kc("canvas");return s.style.display="block",s}const Hx={};function Gx(...s){const e="THREE."+s.shift();console.log(e,...s)}function lt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function an(...s){const e="THREE."+s.shift();console.error(e,...s)}function Xo(...s){const e=s.join(" ");e in Hx||(Hx[e]=!0,lt(...s))}function tM(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Us{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Ch=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function bt(s,e,i){return Math.max(e,Math.min(i,s))}function nM(s,e){return(s%e+e)%e}function ud(s,e,i){return(1-i)*s+i*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,i=0){Pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],_=c[f+0],y=c[f+1],M=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=_,e[i+1]=y,e[i+2]=M,e[i+3]=A;return}if(g!==A||m!==_||p!==y||x!==M){let S=m*_+p*y+x*M+g*A;S<0&&(_=-_,y=-y,M=-M,A=-A,S=-S);let v=1-h;if(S<.9995){const L=Math.acos(S),U=Math.sin(L);v=Math.sin(v*L)/U,h=Math.sin(h*L)/U,m=m*v+_*h,p=p*v+y*h,x=x*v+M*h,g=g*v+A*h}else{m=m*v+_*h,p=p*v+y*h,x=x*v+M*h,g=g*v+A*h;const L=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=L,p*=L,x*=L,g*=L}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[f],_=c[f+1],y=c[f+2],M=c[f+3];return e[i]=h*M+x*g+m*y-p*_,e[i+1]=m*M+x*_+p*g-h*y,e[i+2]=p*M+x*y+h*_-m*g,e[i+3]=x*M-h*g-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),_=m(r/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=_*x*g+p*y*M,this._y=p*y*g-_*x*M,this._z=p*x*M+_*y*g,this._w=p*x*g-_*y*M;break;case"YXZ":this._x=_*x*g+p*y*M,this._y=p*y*g-_*x*M,this._z=p*x*M-_*y*g,this._w=p*x*g+_*y*M;break;case"ZXY":this._x=_*x*g-p*y*M,this._y=p*y*g+_*x*M,this._z=p*x*M+_*y*g,this._w=p*x*g-_*y*M;break;case"ZYX":this._x=_*x*g-p*y*M,this._y=p*y*g+_*x*M,this._z=p*x*M-_*y*g,this._w=p*x*g+_*y*M;break;case"YZX":this._x=_*x*g+p*y*M,this._y=p*y*g+_*x*M,this._z=p*x*M-_*y*g,this._w=p*x*g-_*y*M;break;case"XZY":this._x=_*x*g-p*y*M,this._y=p*y*g-_*x*M,this._z=p*x*M+_*y*g,this._w=p*x*g+_*y*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],_=r+h+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-r*p,this._z=c*x+f*p+r*m-l*h,this._w=f*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,i=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Vx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Vx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),x=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new fe,Vx=new Zo;class dt{constructor(e,i,r,l,c,f,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],_=r[2],y=r[5],M=r[8],A=l[0],S=l[3],v=l[6],L=l[1],U=l[4],I=l[7],z=l[2],P=l[5],G=l[8];return c[0]=f*A+h*L+m*z,c[3]=f*S+h*U+m*P,c[6]=f*v+h*I+m*G,c[1]=p*A+x*L+g*z,c[4]=p*S+x*U+g*P,c[7]=p*v+x*I+g*G,c[2]=_*A+y*L+M*z,c[5]=_*S+y*U+M*P,c[8]=_*v+y*I+M*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*h*p-r*c*x+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*f-h*p,_=h*m-x*c,y=p*c-f*m,M=i*g+r*_+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(l*p-x*r)*A,e[2]=(h*r-l*f)*A,e[3]=_*A,e[4]=(x*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=y*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(dd.makeScale(e,i)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new dt,kx=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xx=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[As]:{primaries:e,whitePoint:r,transfer:Gc,toXYZ:kx,fromXYZ:Xx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:kx,fromXYZ:Xx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Tt=iM();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class aM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=kc("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=kc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ua(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rM=0;class qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(hd(l[f].image)):c.push(hd(l[f]))}else c=hd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function hd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let sM=0;const pd=new fe;class Ln extends Us{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=sa,l=sa,c=di,f=Er,h=bi,m=da,p=Ln.DEFAULT_ANISOTROPY,x=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=jo(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Qg;Ln.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],_=m[1],y=m[5],M=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(g-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+A)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,I=(y+1)/2,z=(v+1)/2,P=(x+_)/4,G=(g+A)/4,ne=(M+S)/4;return U>I&&U>z?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=P/r,c=G/r):I>z?I<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(I),r=P/l,c=ne/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=G/c,l=ne/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-M)*(S-M)+(g-A)*(g-A)+(_-x)*(_-x));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-A)/L,this.z=(_-x)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Us{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Ln(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new qh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends oM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ov extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Ln{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),fc.subVectors(this.max,No),cs.subVectors(e.a,No),us.subVectors(e.b,No),fs.subVectors(e.c,No),Va.subVectors(us,cs),ka.subVectors(fs,us),mr.subVectors(cs,fs);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-mr.z,mr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,mr.z,0,-mr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-mr.y,mr.x,0];return!md(i,cs,us,fs,fc)||(i=[1,0,0,0,1,0,0,0,1],!md(i,cs,us,fs,fc))?!1:(dc.crossVectors(Va,ka),i=[dc.x,dc.y,dc.z],md(i,cs,us,fs,fc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],vi=new fe,uc=new Ko,cs=new fe,us=new fe,fs=new fe,Va=new fe,ka=new fe,mr=new fe,No=new fe,fc=new fe,dc=new fe,xr=new fe;function md(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){xr.fromArray(s,c);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),x=r.dot(xr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const cM=new Ko,Po=new fe,xd=new fe;class jc{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(xd)),this.expandByPoint(Po.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new fe,gd=new fe,hc=new fe,Xa=new fe,vd=new fe,pc=new fe,_d=new fe;class lv{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){gd.copy(e).add(i).multiplyScalar(.5),hc.copy(i).sub(e).normalize(),Xa.copy(this.origin).sub(gd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(hc),h=Xa.dot(this.direction),m=-Xa.dot(hc),p=Xa.lengthSq(),x=Math.abs(1-f*f);let g,_,y,M;if(x>0)if(g=f*m-h,_=f*h-m,M=c*x,g>=0)if(_>=-M)if(_<=M){const A=1/x;g*=A,_*=A,y=g*(g+f*_+2*h)+_*(f*g+_+2*m)+p}else _=c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*m)+p;else _<=-M?(g=Math.max(0,-(-f*c+h)),_=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+_*(_+2*m)+p):_<=M?(g=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(g=Math.max(0,-(f*c+h)),_=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+_*(_+2*m)+p);else _=f>0?-c:c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(gd).addScaledVector(hc,_),y}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),x>=0?(c=(e.min.y-_.y)*x,f=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,f=(e.min.y-_.y)*x),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(h=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,c){vd.subVectors(i,e),pc.subVectors(r,e),_d.crossVectors(vd,pc);let f=this.direction.dot(_d),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Xa.subVectors(this.origin,e);const m=h*this.direction.dot(pc.crossVectors(Xa,pc));if(m<0)return null;const p=h*this.direction.dot(vd.cross(Xa));if(p<0||m+p>f)return null;const x=-h*Xa.dot(_d);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,i,r,l,c,f,h,m,p,x,g,_,y,M,A,S){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,x,g,_,y,M,A,S)}set(e,i,r,l,c,f,h,m,p,x,g,_,y,M,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=_,v[3]=y,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ds.setFromMatrixColumn(e,0).length(),c=1/ds.setFromMatrixColumn(e,1).length(),f=1/ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=f*x,y=f*g,M=h*x,A=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+M*p,i[5]=_-A*p,i[9]=-h*m,i[2]=A-_*p,i[6]=M+y*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*x,y=m*g,M=p*x,A=p*g;i[0]=_+A*h,i[4]=M*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-h,i[2]=y*h-M,i[6]=A+_*h,i[10]=f*m}else if(e.order==="ZXY"){const _=m*x,y=m*g,M=p*x,A=p*g;i[0]=_-A*h,i[4]=-f*g,i[8]=M+y*h,i[1]=y+M*h,i[5]=f*x,i[9]=A-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const _=f*x,y=f*g,M=h*x,A=h*g;i[0]=m*x,i[4]=M*p-y,i[8]=_*p+A,i[1]=m*g,i[5]=A*p+_,i[9]=y*p-M,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,y=f*p,M=h*m,A=h*p;i[0]=m*x,i[4]=A-_*g,i[8]=M*g+y,i[1]=g,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*g+M,i[10]=_-A*g}else if(e.order==="XZY"){const _=f*m,y=f*p,M=h*m,A=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=_*g+A,i[5]=f*x,i[9]=y*g-M,i[2]=M*g-y,i[6]=h*x,i[10]=A*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,fM)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Wa.crossVectors(r,Qn),Wa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Wa.crossVectors(r,Qn)),Wa.normalize(),mc.crossVectors(Qn,Wa),l[0]=Wa.x,l[4]=mc.x,l[8]=Qn.x,l[1]=Wa.y,l[5]=mc.y,l[9]=Qn.y,l[2]=Wa.z,l[6]=mc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],_=r[9],y=r[13],M=r[2],A=r[6],S=r[10],v=r[14],L=r[3],U=r[7],I=r[11],z=r[15],P=l[0],G=l[4],ne=l[8],C=l[12],w=l[1],B=l[5],X=l[9],te=l[13],oe=l[2],le=l[6],O=l[10],q=l[14],Y=l[3],de=l[7],D=l[11],J=l[15];return c[0]=f*P+h*w+m*oe+p*Y,c[4]=f*G+h*B+m*le+p*de,c[8]=f*ne+h*X+m*O+p*D,c[12]=f*C+h*te+m*q+p*J,c[1]=x*P+g*w+_*oe+y*Y,c[5]=x*G+g*B+_*le+y*de,c[9]=x*ne+g*X+_*O+y*D,c[13]=x*C+g*te+_*q+y*J,c[2]=M*P+A*w+S*oe+v*Y,c[6]=M*G+A*B+S*le+v*de,c[10]=M*ne+A*X+S*O+v*D,c[14]=M*C+A*te+S*q+v*J,c[3]=L*P+U*w+I*oe+z*Y,c[7]=L*G+U*B+I*le+z*de,c[11]=L*ne+U*X+I*O+z*D,c[15]=L*C+U*te+I*q+z*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],_=e[10],y=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+c*m*g-l*p*g-c*h*_+r*p*_+l*h*y-r*m*y)+A*(+i*m*y-i*p*_+c*f*_-l*f*y+l*p*x-c*m*x)+S*(+i*p*g-i*h*y-c*f*g+r*f*y+c*h*x-r*p*x)+v*(-l*h*x-i*m*g+i*h*_+l*f*g-r*f*_+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],_=e[10],y=e[11],M=e[12],A=e[13],S=e[14],v=e[15],L=g*S*p-A*_*p+A*m*y-h*S*y-g*m*v+h*_*v,U=M*_*p-x*S*p-M*m*y+f*S*y+x*m*v-f*_*v,I=x*A*p-M*g*p+M*h*y-f*A*y-x*h*v+f*g*v,z=M*g*m-x*A*m-M*h*_+f*A*_+x*h*S-f*g*S,P=i*L+r*U+l*I+c*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return e[0]=L*G,e[1]=(A*_*c-g*S*c-A*l*y+r*S*y+g*l*v-r*_*v)*G,e[2]=(h*S*c-A*m*c+A*l*p-r*S*p-h*l*v+r*m*v)*G,e[3]=(g*m*c-h*_*c-g*l*p+r*_*p+h*l*y-r*m*y)*G,e[4]=U*G,e[5]=(x*S*c-M*_*c+M*l*y-i*S*y-x*l*v+i*_*v)*G,e[6]=(M*m*c-f*S*c-M*l*p+i*S*p+f*l*v-i*m*v)*G,e[7]=(f*_*c-x*m*c+x*l*p-i*_*p-f*l*y+i*m*y)*G,e[8]=I*G,e[9]=(M*g*c-x*A*c-M*r*y+i*A*y+x*r*v-i*g*v)*G,e[10]=(f*A*c-M*h*c+M*r*p-i*A*p-f*r*v+i*h*v)*G,e[11]=(x*h*c-f*g*c-x*r*p+i*g*p+f*r*y-i*h*y)*G,e[12]=z*G,e[13]=(x*A*l-M*g*l+M*r*_-i*A*_-x*r*S+i*g*S)*G,e[14]=(M*h*l-f*A*l-M*r*m+i*A*m+f*r*S-i*h*S)*G,e[15]=(f*g*l-x*h*l+x*r*m-i*g*m-f*r*_+i*h*_)*G,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,x=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,g=h+h,_=c*p,y=c*x,M=c*g,A=f*x,S=f*g,v=h*g,L=m*p,U=m*x,I=m*g,z=r.x,P=r.y,G=r.z;return l[0]=(1-(A+v))*z,l[1]=(y+I)*z,l[2]=(M-U)*z,l[3]=0,l[4]=(y-I)*P,l[5]=(1-(_+v))*P,l[6]=(S+L)*P,l[7]=0,l[8]=(M+U)*G,l[9]=(S-L)*G,l[10]=(1-(_+A))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ds.set(l[0],l[1],l[2]).length();const f=ds.set(l[4],l[5],l[6]).length(),h=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/c,x=1/f,g=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Li,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(r-l),_=(i+e)/(i-e),y=(r+l)/(r-l);let M,A;if(m)M=c/(f-c),A=f*c/(f-c);else if(h===Li)M=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===Vc)M=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Li,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),_=-(i+e)/(i-e),y=-(r+l)/(r-l);let M,A;if(m)M=1/(f-c),A=f/(f-c);else if(h===Li)M=-2/(f-c),A=-(f+c)/(f-c);else if(h===Vc)M=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ds=new fe,_i=new fn,uM=new fe(0,0,0),fM=new fe(1,1,1),Wa=new fe,mc=new fe,Qn=new fe,Wx=new fn,qx=new Zo;class ha{constructor(e=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Wx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return qx.setFromEuler(this),this.setFromQuaternion(qx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const Yx=new fe,hs=new Zo,ea=new fn,xc=new fe,Oo=new fe,hM=new fe,pM=new Zo,jx=new fe(1,0,0),Zx=new fe(0,1,0),Kx=new fe(0,0,1),Qx={type:"added"},mM={type:"removed"},ps={type:"childadded",child:null},Sd={type:"childremoved",child:null};class kn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new fe,i=new ha,r=new Zo,l=new fe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new dt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(jx,e)}rotateY(e){return this.rotateOnAxis(Zx,e)}rotateZ(e){return this.rotateOnAxis(Kx,e)}translateOnAxis(e,i){return Yx.copy(e).applyQuaternion(this.quaternion),this.position.add(Yx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(jx,e)}translateY(e){return this.translateOnAxis(Zx,e)}translateZ(e){return this.translateOnAxis(Kx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?xc.copy(e):xc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,xc,this.up):ea.lookAt(xc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ea),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(an("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qx),ps.child=e,this.dispatchEvent(ps),ps.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mM),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qx),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),_=f(e.skeletons),y=f(e.animations),M=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new fe(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new fe,ta=new fe,yd=new fe,na=new fe,ms=new fe,xs=new fe,Jx=new fe,bd=new fe,Md=new fe,Ed=new fe,Td=new rn,Ad=new rn,Rd=new rn;class yi{constructor(e=new fe,i=new fe,r=new fe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Si.subVectors(l,i),ta.subVectors(r,i),yd.subVectors(e,i);const f=Si.dot(Si),h=Si.dot(ta),m=Si.dot(yd),p=ta.dot(ta),x=ta.dot(yd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(p*m-h*x)*_,M=(f*x-h*m)*_;return c.set(1-y-M,M,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,na.x),m.addScaledVector(f,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,r),Rd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Td,c.x),f.addScaledVector(Ad,c.y),f.addScaledVector(Rd,c.z),f}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),ta.subVectors(e,i),Si.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),Si.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;ms.subVectors(l,r),xs.subVectors(c,r),bd.subVectors(e,r);const m=ms.dot(bd),p=xs.dot(bd);if(m<=0&&p<=0)return i.copy(r);Md.subVectors(e,l);const x=ms.dot(Md),g=xs.dot(Md);if(x>=0&&g<=x)return i.copy(l);const _=m*g-x*p;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(r).addScaledVector(ms,f);Ed.subVectors(e,c);const y=ms.dot(Ed),M=xs.dot(Ed);if(M>=0&&y<=M)return i.copy(c);const A=y*p-m*M;if(A<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(r).addScaledVector(xs,h);const S=x*M-y*g;if(S<=0&&g-x>=0&&y-M>=0)return Jx.subVectors(c,l),h=(g-x)/(g-x+(y-M)),i.copy(l).addScaledVector(Jx,h);const v=1/(S+A+_);return f=A*v,h=_*v,i.copy(r).addScaledVector(ms,f).addScaledVector(xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},gc={h:0,s:0,l:0};function wd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=nM(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=wd(f,c,e+1/3),this.g=wd(f,c,e),this.b=wd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=uv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Tt.workingToColorSpace(Un.copy(this),e),Math.round(bt(Un.r*255,0,255))*65536+Math.round(bt(Un.g*255,0,255))*256+Math.round(bt(Un.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=x<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ui){Tt.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(gc);const r=ud(qa.h,gc.h,i),l=ud(qa.s,gc.s,i),c=ud(qa.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Nt;Nt.NAMES=uv;let xM=0;class Qo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=ys,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=kd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ix,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vd&&(r.blendSrc=this.blendSrc),this.blendDst!==kd&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ix&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fv extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new fe,vc=new Pt;let gM=0;class ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Bx,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bx&&(e.usage=this.usage),e}}class dv extends ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class hv extends ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Tr extends ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vM=0;const ci=new fn,Cd=new kn,gs=new fe,Jn=new Ko,Fo=new Ko,bn=new fe;class Pi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?hv:dv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(Jn.min,Fo.min),Jn.expandByPoint(bn),bn.addVectors(Jn.max,Fo.max),Jn.expandByPoint(bn)):(Jn.expandByPoint(Fo.min),Jn.expandByPoint(Fo.max))}Jn.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)bn.fromBufferAttribute(h,p),m&&(gs.fromBufferAttribute(e,p),bn.add(gs)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<r.count;ne++)h[ne]=new fe,m[ne]=new fe;const p=new fe,x=new fe,g=new fe,_=new Pt,y=new Pt,M=new Pt,A=new fe,S=new fe;function v(ne,C,w){p.fromBufferAttribute(r,ne),x.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),_.fromBufferAttribute(c,ne),y.fromBufferAttribute(c,C),M.fromBufferAttribute(c,w),x.sub(p),g.sub(p),y.sub(_),M.sub(_);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(A.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(B),S.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(B),h[ne].add(A),h[C].add(A),h[w].add(A),m[ne].add(S),m[C].add(S),m[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let ne=0,C=L.length;ne<C;++ne){const w=L[ne],B=w.start,X=w.count;for(let te=B,oe=B+X;te<oe;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const U=new fe,I=new fe,z=new fe,P=new fe;function G(ne){z.fromBufferAttribute(l,ne),P.copy(z);const C=h[ne];U.copy(C),U.sub(z.multiplyScalar(z.dot(C))).normalize(),I.crossVectors(P,C);const B=I.dot(m[ne])<0?-1:1;f.setXYZW(ne,U.x,U.y,U.z,B)}for(let ne=0,C=L.length;ne<C;++ne){const w=L[ne],B=w.start,X=w.count;for(let te=B,oe=B+X;te<oe;te+=3)G(e.getX(te+0)),G(e.getX(te+1)),G(e.getX(te+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new fe,c=new fe,f=new fe,h=new fe,m=new fe,p=new fe,x=new fe,g=new fe;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),h.add(x),m.add(x),p.add(x),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,_=new p.constructor(m.length*x);let y=0,M=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*x;for(let v=0;v<x;v++)_[M++]=p[y++]}return new ei(_,x,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const _=p[x],y=e(_,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,_=p.length;g<_;g++){const y=p[g];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let _=0,y=g.length;_<y;_++)x.push(g[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $x=new fn,gr=new lv,_c=new jc,eg=new fe,Sc=new fe,yc=new fe,bc=new fe,Dd=new fe,Mc=new fe,tg=new fe,Ec=new fe;class Ja extends kn{constructor(e=new Pi,i=new fv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Dd.fromBufferAttribute(g,e),f?Mc.addScaledVector(Dd,x):Mc.addScaledVector(Dd.sub(i),x))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(c),gr.copy(e.ray).recast(e.near),!(_c.containsPoint(gr.origin)===!1&&(gr.intersectSphere(_c,eg)===null||gr.origin.distanceToSquared(eg)>(e.far-e.near)**2))&&($x.copy(c).invert(),gr.copy(e.ray).applyMatrix4($x),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,gr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const S=_[M],v=f[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let I=L,z=U;I<z;I+=3){const P=h.getX(I),G=h.getX(I+1),ne=h.getX(I+2);l=Tc(this,v,e,r,p,x,g,P,G,ne),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const L=h.getX(S),U=h.getX(S+1),I=h.getX(S+2);l=Tc(this,f,e,r,p,x,g,L,U,I),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const S=_[M],v=f[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let I=L,z=U;I<z;I+=3){const P=I,G=I+1,ne=I+2;l=Tc(this,v,e,r,p,x,g,P,G,ne),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const L=S,U=S+1,I=S+2;l=Tc(this,f,e,r,p,x,g,L,U,I),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function _M(s,e,i,r,l,c,f,h){let m;if(e.side===Vn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===Qa,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:s}}function Tc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Sc),s.getVertexPosition(m,yc),s.getVertexPosition(p,bc);const x=_M(s,e,i,r,Sc,yc,bc,tg);if(x){const g=new fe;yi.getBarycoord(tg,Sc,yc,bc,g),l&&(x.uv=yi.getInterpolatedAttribute(l,h,m,p,g,new Pt)),c&&(x.uv1=yi.getInterpolatedAttribute(c,h,m,p,g,new Pt)),f&&(x.normal=yi.getInterpolatedAttribute(f,h,m,p,g,new fe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new fe,materialIndex:0};yi.getNormal(Sc,yc,bc,_.normal),x.face=_,x.barycoord=g}return x}class Jo extends Pi{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,r,i,e,f,c,0),M("z","y","x",1,-1,r,i,-e,f,c,1),M("x","z","y",1,1,e,r,i,l,f,2),M("x","z","y",1,-1,e,r,-i,l,f,3),M("x","y","z",1,-1,e,i,r,l,c,4),M("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(x,3)),this.setAttribute("uv",new Tr(g,2));function M(A,S,v,L,U,I,z,P,G,ne,C){const w=I/G,B=z/ne,X=I/2,te=z/2,oe=P/2,le=G+1,O=ne+1;let q=0,Y=0;const de=new fe;for(let D=0;D<O;D++){const J=D*B-te;for(let ye=0;ye<le;ye++){const be=ye*w-X;de[A]=be*L,de[S]=J*U,de[v]=oe,p.push(de.x,de.y,de.z),de[A]=0,de[S]=0,de[v]=P>0?1:-1,x.push(de.x,de.y,de.z),g.push(ye/G),g.push(1-D/ne),q+=1}}for(let D=0;D<ne;D++)for(let J=0;J<G;J++){const ye=_+J+le*D,be=_+J+le*(D+1),Ce=_+(J+1)+le*(D+1),Be=_+(J+1)+le*D;m.push(ye,be,Be),m.push(be,Ce,Be),Y+=6}h.addGroup(y,Y,C),y+=Y,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Rs(s[i]);for(const l in r)e[l]=r[l]}return e}function SM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function pv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const yM={clone:Rs,merge:Fn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=SM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class mv extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new fe,ng=new Pt,ig=new Pt;class fi extends mv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,i){return this.getViewBounds(e,ng,ig),i.subVectors(ig,ng)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class EM extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(vs,_s,e,i);l.layers=this.layers,this.add(l);const c=new fi(vs,_s,e,i);c.layers=this.layers,this.add(c);const f=new fi(vs,_s,e,i);f.layers=this.layers,this.add(f);const h=new fi(vs,_s,e,i);h.layers=this.layers,this.add(h);const m=new fi(vs,_s,e,i);m.layers=this.layers,this.add(m);const p=new fi(vs,_s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class xv extends Ln{constructor(e=[],i=Es,r,l,c,f,h,m,p,x){super(e,i,r,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TM extends Rr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Jo(5,5,5),c=new pa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ca});c.uniforms.tEquirect.value=i;const f=new Ja(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=di),new EM(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Ac extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=x.position.distanceTo(g.position),y=.02,M=.005;p.inputState.pinching&&_>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class RM extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM extends Ln{constructor(e=null,i=1,r=1,l,c,f,h,m,p=$n,x=$n,g,_){super(null,f,h,m,p,x,l,c,g,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new fe,CM=new fe,DM=new dt;class yr{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ld.subVectors(r,i).cross(CM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ld),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(Ld).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new jc,UM=new Pt(.5,.5),Rc=new fe;class gv{constructor(e=new yr,i=new yr,r=new yr,l=new yr,c=new yr,f=new yr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Li,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],_=c[6],y=c[7],M=c[8],A=c[9],S=c[10],v=c[11],L=c[12],U=c[13],I=c[14],z=c[15];if(l[0].setComponents(p-f,y-x,v-M,z-L).normalize(),l[1].setComponents(p+f,y+x,v+M,z+L).normalize(),l[2].setComponents(p+h,y+g,v+A,z+U).normalize(),l[3].setComponents(p-h,y-g,v-A,z-U).normalize(),r)l[4].setComponents(m,_,S,I).normalize(),l[5].setComponents(p-m,y-_,v-S,z-I).normalize();else if(l[4].setComponents(p-m,y-_,v-S,z-I).normalize(),i===Li)l[5].setComponents(p+m,y+_,v+S,z+I).normalize();else if(i===Vc)l[5].setComponents(m,_,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const i=UM.distanceTo(e.center);return vr.radius=.7071067811865476+i,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends Qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ag=new fn,Dh=new lv,wc=new jc,Cc=new fe;class LM extends kn{constructor(e=new Pi,i=new vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;ag.copy(l).invert(),Dh.copy(e.ray).applyMatrix4(ag);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let M=_,A=y;M<A;M++){const S=p.getX(M);Cc.fromBufferAttribute(g,S),rg(Cc,S,m,l,e,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let M=_,A=y;M<A;M++)Cc.fromBufferAttribute(g,M),rg(Cc,M,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function rg(s,e,i,r,l,c,f){const h=Dh.distanceSqToPoint(s);if(h<i){const m=new fe;Dh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class NM extends Ln{constructor(e,i,r,l,c,f,h,m,p){super(e,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _v extends Ln{constructor(e,i,r=Ar,l,c,f,h=$n,m=$n,p,x=Vo,g=1){if(x!==Vo&&x!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:g};super(_,l,c,f,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sv extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zc extends Pi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=e/h,_=i/m,y=[],M=[],A=[],S=[];for(let v=0;v<x;v++){const L=v*_-f;for(let U=0;U<p;U++){const I=U*g-c;M.push(I,-L,0),A.push(0,0,1),S.push(U/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<h;L++){const U=L+p*v,I=L+p*(v+1),z=L+1+p*(v+1),P=L+1+p*v;y.push(U,I,P),y.push(I,z,P)}this.setIndex(y),this.setAttribute("position",new Tr(M,3)),this.setAttribute("normal",new Tr(A,3)),this.setAttribute("uv",new Tr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class PM extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class FM extends mv{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sg(s,e,i,r){const l=BM(r);switch(i){case nv:return s*e;case av:return s*e/l.components*l.byteLength;case Vh:return s*e/l.components*l.byteLength;case kh:return s*e*2/l.components*l.byteLength;case Xh:return s*e*2/l.components*l.byteLength;case iv:return s*e*3/l.components*l.byteLength;case bi:return s*e*4/l.components*l.byteLength;case Wh:return s*e*4/l.components*l.byteLength;case Oc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:case ah:return Math.max(s,16)*Math.max(e,8)/4;case th:case ih:return Math.max(s,8)*Math.max(e,8)/2;case rh:case sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bh:case Mh:case Eh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Th:case Ah:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rh:case wh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function BM(s){switch(s){case da:case Jg:return{byteLength:1,components:1};case Ho:case $g:case Ds:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Ar:case zh:case oa:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function zM(s){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,x);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],A=g[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++_,g[_]=A)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const A=g[y];s.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$M=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:VM,alphamap_pars_fragment:kM,alphatest_fragment:XM,alphatest_pars_fragment:WM,aomap_fragment:qM,aomap_pars_fragment:YM,batching_pars_vertex:jM,batching_vertex:ZM,begin_vertex:KM,beginnormal_vertex:QM,bsdfs:JM,iridescence_fragment:$M,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:a1,color_fragment:r1,color_pars_fragment:s1,color_pars_vertex:o1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:f1,displacementmap_pars_vertex:d1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:x1,colorspace_pars_fragment:g1,envmap_fragment:v1,envmap_common_pars_fragment:_1,envmap_pars_fragment:S1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:L1,envmap_vertex:b1,fog_vertex:M1,fog_pars_vertex:E1,fog_fragment:T1,fog_pars_fragment:A1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:w1,lights_lambert_fragment:C1,lights_lambert_pars_fragment:D1,lights_pars_begin:U1,lights_toon_fragment:N1,lights_toon_pars_fragment:P1,lights_phong_fragment:O1,lights_phong_pars_fragment:F1,lights_physical_fragment:I1,lights_physical_pars_fragment:B1,lights_fragment_begin:z1,lights_fragment_maps:H1,lights_fragment_end:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:X1,logdepthbuf_vertex:W1,map_fragment:q1,map_pars_fragment:Y1,map_particle_fragment:j1,map_particle_pars_fragment:Z1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:J1,morphcolor_vertex:$1,morphnormal_vertex:e3,morphtarget_pars_vertex:t3,morphtarget_vertex:n3,normal_fragment_begin:i3,normal_fragment_maps:a3,normal_pars_fragment:r3,normal_pars_vertex:s3,normal_vertex:o3,normalmap_pars_fragment:l3,clearcoat_normal_fragment_begin:c3,clearcoat_normal_fragment_maps:u3,clearcoat_pars_fragment:f3,iridescence_pars_fragment:d3,opaque_fragment:h3,packing:p3,premultiplied_alpha_fragment:m3,project_vertex:x3,dithering_fragment:g3,dithering_pars_fragment:v3,roughnessmap_fragment:_3,roughnessmap_pars_fragment:S3,shadowmap_pars_fragment:y3,shadowmap_pars_vertex:b3,shadowmap_vertex:M3,shadowmask_pars_fragment:E3,skinbase_vertex:T3,skinning_pars_vertex:A3,skinning_vertex:R3,skinnormal_vertex:w3,specularmap_fragment:C3,specularmap_pars_fragment:D3,tonemapping_fragment:U3,tonemapping_pars_fragment:L3,transmission_fragment:N3,transmission_pars_fragment:P3,uv_pars_fragment:O3,uv_pars_vertex:F3,uv_vertex:I3,worldpos_vertex:B3,background_vert:z3,background_frag:H3,backgroundCube_vert:G3,backgroundCube_frag:V3,cube_vert:k3,cube_frag:X3,depth_vert:W3,depth_frag:q3,distanceRGBA_vert:Y3,distanceRGBA_frag:j3,equirect_vert:Z3,equirect_frag:K3,linedashed_vert:Q3,linedashed_frag:J3,meshbasic_vert:$3,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:aE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:oE,meshphong_frag:lE,meshphysical_vert:cE,meshphysical_frag:uE,meshtoon_vert:fE,meshtoon_frag:dE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:xE,sprite_vert:gE,sprite_frag:vE},Pe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Fn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Fn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Fn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Fn([Pe.lights,Pe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ui.physical={uniforms:Fn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Dc={r:0,b:0,g:0},_r=new ha,_E=new fn;function SE(s,e,i,r,l,c,f){const h=new Nt(0);let m=c===!0?0:1,p,x,g=null,_=0,y=null;function M(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?i:e).get(I)),I}function A(U){let I=!1;const z=M(U);z===null?v(h,m):z&&z.isColor&&(v(z,1),I=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,I){const z=M(I);z&&(z.isCubeTexture||z.mapping===Yc)?(x===void 0&&(x=new Ja(new Jo(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:Rs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(P,G,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),_r.copy(I.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(_r)),x.material.toneMapped=Tt.getTransfer(z.colorSpace)!==Ht,(g!==z||_!==z.version||y!==s.toneMapping)&&(x.material.needsUpdate=!0,g=z,_=z.version,y=s.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ja(new Zc(2,2),new pa({name:"BackgroundMaterial",uniforms:Rs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(z.colorSpace)!==Ht,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||_!==z.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=z,_=z.version,y=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,I){U.getRGB(Dc,pv(s)),r.buffers.color.setClear(Dc.r,Dc.g,Dc.b,I,f)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,I=1){h.set(U),m=I,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:A,addToRenderList:S,dispose:L}}function yE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function h(w,B,X,te,oe){let le=!1;const O=g(te,X,B);c!==O&&(c=O,p(c.object)),le=y(w,te,X,oe),le&&M(w,te,X,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(le||f)&&(f=!1,I(w,B,X,te),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function x(w){return s.deleteVertexArray(w)}function g(w,B,X){const te=X.wireframe===!0;let oe=r[w.id];oe===void 0&&(oe={},r[w.id]=oe);let le=oe[B.id];le===void 0&&(le={},oe[B.id]=le);let O=le[te];return O===void 0&&(O=_(m()),le[te]=O),O}function _(w){const B=[],X=[],te=[];for(let oe=0;oe<i;oe++)B[oe]=0,X[oe]=0,te[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:te,object:w,attributes:{},index:null}}function y(w,B,X,te){const oe=c.attributes,le=B.attributes;let O=0;const q=X.getAttributes();for(const Y in q)if(q[Y].location>=0){const D=oe[Y];let J=le[Y];if(J===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;O++}return c.attributesNum!==O||c.index!==te}function M(w,B,X,te){const oe={},le=B.attributes;let O=0;const q=X.getAttributes();for(const Y in q)if(q[Y].location>=0){let D=le[Y];D===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),oe[Y]=J,O++}c.attributes=oe,c.attributesNum=O,c.index=te}function A(){const w=c.newAttributes;for(let B=0,X=w.length;B<X;B++)w[B]=0}function S(w){v(w,0)}function v(w,B){const X=c.newAttributes,te=c.enabledAttributes,oe=c.attributeDivisors;X[w]=1,te[w]===0&&(s.enableVertexAttribArray(w),te[w]=1),oe[w]!==B&&(s.vertexAttribDivisor(w,B),oe[w]=B)}function L(){const w=c.newAttributes,B=c.enabledAttributes;for(let X=0,te=B.length;X<te;X++)B[X]!==w[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function U(w,B,X,te,oe,le,O){O===!0?s.vertexAttribIPointer(w,B,X,oe,le):s.vertexAttribPointer(w,B,X,te,oe,le)}function I(w,B,X,te){A();const oe=te.attributes,le=X.getAttributes(),O=B.defaultAttributeValues;for(const q in le){const Y=le[q];if(Y.location>=0){let de=oe[q];if(de===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const D=de.normalized,J=de.itemSize,ye=e.get(de);if(ye===void 0)continue;const be=ye.buffer,Ce=ye.type,Be=ye.bytesPerElement,Q=Ce===s.INT||Ce===s.UNSIGNED_INT||de.gpuType===zh;if(de.isInterleavedBufferAttribute){const pe=de.data,Ee=pe.stride,Xe=de.offset;if(pe.isInstancedInterleavedBuffer){for(let We=0;We<Y.locationSize;We++)v(Y.location+We,pe.meshPerAttribute);w.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<Y.locationSize;We++)S(Y.location+We);s.bindBuffer(s.ARRAY_BUFFER,be);for(let We=0;We<Y.locationSize;We++)U(Y.location+We,J/Y.locationSize,Ce,D,Ee*Be,(Xe+J/Y.locationSize*We)*Be,Q)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe,de.meshPerAttribute);w.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<Y.locationSize;pe++)S(Y.location+pe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let pe=0;pe<Y.locationSize;pe++)U(Y.location+pe,J/Y.locationSize,Ce,D,J*Be,J/Y.locationSize*pe*Be,Q)}}else if(O!==void 0){const D=O[q];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(Y.location,D);break;case 3:s.vertexAttrib3fv(Y.location,D);break;case 4:s.vertexAttrib4fv(Y.location,D);break;default:s.vertexAttrib1fv(Y.location,D)}}}}L()}function z(){ne();for(const w in r){const B=r[w];for(const X in B){const te=B[X];for(const oe in te)x(te[oe].object),delete te[oe];delete B[X]}delete r[w]}}function P(w){if(r[w.id]===void 0)return;const B=r[w.id];for(const X in B){const te=B[X];for(const oe in te)x(te[oe].object),delete te[oe];delete B[X]}delete r[w.id]}function G(w){for(const B in r){const X=r[B];if(X[w.id]===void 0)continue;const te=X[w.id];for(const oe in te)x(te[oe].object),delete te[oe];delete X[w.id]}}function ne(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:G,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function bE(s,e,i){let r;function l(p){r=p}function c(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function f(p,x,g){g!==0&&(s.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];i.update(y,r,1)}function m(p,x,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)f(p[M],x[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,_,0,g);let M=0;for(let A=0;A<g;A++)M+=x[A]*_[A];i.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ME(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(G){return!(G!==bi&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(G){const ne=G===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==da&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==oa&&!ne)}function m(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(lt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:z,maxSamples:P}}function EE(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new yr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||l;return l=_,r=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=x(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,v=s.get(g);if(!l||M===null||M.length===0||c&&!S)c?x(null):p();else{const L=c?0:r,U=L*4;let I=v.clippingState||null;m.value=I,I=x(M,_,U,y);for(let z=0;z!==U;++z)I[z]=i[z];v.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,_,y,M){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,M!==!0||S===null){const v=y+A*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,I=y;U!==A;++U,I+=4)f.copy(g[U]).applyMatrix4(L,h),f.normal.toArray(S,I),S[I+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function TE(s){let e=new WeakMap;function i(f,h){return h===Qd?f.mapping=Es:h===Jd&&(f.mapping=Ts),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Qd||h===Jd)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new TM(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Za=4,og=[.125,.215,.35,.446,.526,.582],Mr=20,AE=256,Io=new FM,lg=new Nt;let Nd=null,Pd=0,Od=0,Fd=!1;const RE=new fe;class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=RE}=c;Nd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Pd,Od),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ds,format:bi,colorSpace:As,depthBuffer:!1},l=ug(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wE(c)),this._blurMaterial=DE(c,e,i),this._ggxMaterial=CE(c,e,i)}return l}_compileMaterial(e){const i=new Ja(new Pi,e);this._renderer.compile(i,Io)}_sceneToCubeUV(e,i,r,l,c){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(lg),g.toneMapping=Ka,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ja(new Jo,new fv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(lg),v=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):I===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const z=this._cubeSize;Ss(l,I*z,U>2?z:0,z,z),g.setRenderTarget(l),v&&g.render(A,m),g.render(e,m)}g.toneMapping=y,g.autoClear=_,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Es||e.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ss(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Io)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),_=.05+p*.95,y=g*_,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-Za?r-M+Za:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-i,Ss(c,S,v,3*A,2*A),l.setRenderTarget(c),l.render(h,Io),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-r,Ss(e,S,v,3*A,2*A),l.setRenderTarget(e),l.render(h,Io)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),A=c/M,S=isFinite(c)?1+Math.floor(x*A):Mr;S>Mr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Mr}`);const v=[];let L=0;for(let G=0;G<Mr;++G){const ne=G/A,C=Math.exp(-ne*ne/2);v.push(C),G===0?L+=C:G<S&&(L+=2*C)}for(let G=0;G<v.length;G++)v[G]=v[G]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=M,_.mipInt.value=U-r;const I=this._sizeLods[l],z=3*I*(l>U-Za?l-U+Za:0),P=4*(this._cubeSize-I);Ss(i,z,P,3*I,2*I),m.setRenderTarget(i),m.render(g,Io)}}function wE(s){const e=[],i=[],r=[];let l=s;const c=s-Za+1+og.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-Za?m=og[f-s+Za-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,_=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,A=3,S=2,v=1,L=new Float32Array(A*M*y),U=new Float32Array(S*M*y),I=new Float32Array(v*M*y);for(let P=0;P<y;P++){const G=P%3*2/3-1,ne=P>2?0:-1,C=[G,ne,0,G+2/3,ne,0,G+2/3,ne+1,0,G,ne,0,G+2/3,ne+1,0,G,ne+1,0];L.set(C,A*M*P),U.set(_,S*M*P);const w=[P,P,P,P,P,P];I.set(w,v*M*P)}const z=new Pi;z.setAttribute("position",new ei(L,A)),z.setAttribute("uv",new ei(U,S)),z.setAttribute("faceIndex",new ei(I,v)),r.push(new Ja(z,null)),l>Za&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function ug(s,e,i){const r=new Rr(s,e,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ss(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function CE(s,e,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function DE(s,e,i){const r=new Float32Array(Mr),l=new fe(0,1,0);return new pa({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function fg(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function dg(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UE(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Qd||m===Jd,x=m===Es||m===Ts;if(p||x){let g=e.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new cg(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new cg(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function LE(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Xo("WebGLRenderer: "+r+" extension not supported."),l}}}function NE(s,e,i,r){const l={},c=new WeakMap;function f(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function p(g){const _=[],y=g.index,M=g.attributes.position;let A=0;if(y!==null){const L=y.array;A=y.version;for(let U=0,I=L.length;U<I;U+=3){const z=L[U+0],P=L[U+1],G=L[U+2];_.push(z,P,P,G,G,z)}}else if(M!==void 0){const L=M.array;A=M.version;for(let U=0,I=L.length/3-1;U<I;U+=3){const z=U+0,P=U+1,G=U+2;_.push(z,P,P,G,G,z)}}else return;const S=new(sv(_)?hv:dv)(_,1);S.version=A;const v=c.get(g);v&&e.remove(v),c.set(g,S)}function x(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function PE(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,y){s.drawElements(r,y,c,_*f),i.update(y,r,1)}function p(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,c,_*f,M),i.update(y,r,M))}function x(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];i.update(S,r,1)}function g(_,y,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)p(_[v]/f,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,A,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*A[L];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function OE(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:an("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function FE(s,e,i){const r=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let w=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var y=w;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let I=0;M===!0&&(I=1),A===!0&&(I=2),S===!0&&(I=3);let z=h.attributes.position.count*I,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const G=new Float32Array(z*P*4*g),ne=new ov(G,z,P,g);ne.type=oa,ne.needsUpdate=!0;const C=I*4;for(let B=0;B<g;B++){const X=v[B],te=L[B],oe=U[B],le=z*P*4*B;for(let O=0;O<X.count;O++){const q=O*C;M===!0&&(l.fromBufferAttribute(X,O),G[le+q+0]=l.x,G[le+q+1]=l.y,G[le+q+2]=l.z,G[le+q+3]=0),A===!0&&(l.fromBufferAttribute(te,O),G[le+q+4]=l.x,G[le+q+5]=l.y,G[le+q+6]=l.z,G[le+q+7]=0),S===!0&&(l.fromBufferAttribute(oe,O),G[le+q+8]=l.x,G[le+q+9]=l.y,G[le+q+10]=l.z,G[le+q+11]=oe.itemSize===4?l.w:1)}}_={count:g,texture:ne,size:new Pt(z,P)},r.set(h,_),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const A=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function IE(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const bv=new Ln,hg=new _v(1,1),Mv=new ov,Ev=new lM,Tv=new xv,pg=[],mg=[],xg=new Float32Array(16),gg=new Float32Array(9),vg=new Float32Array(4);function Ls(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=pg[l];if(c===void 0&&(c=new Float32Array(l),pg[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Qc(s,e){let i=mg[e];i===void 0&&(i=new Int32Array(e),mg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function BE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function zE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function HE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function GE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function VE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;vg.set(r),s.uniformMatrix2fv(this.addr,!1,vg),xn(i,r)}}function kE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;gg.set(r),s.uniformMatrix3fv(this.addr,!1,gg),xn(i,r)}}function XE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;xg.set(r),s.uniformMatrix4fv(this.addr,!1,xg),xn(i,r)}}function WE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function qE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function YE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function jE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function ZE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function KE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function QE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function JE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function $E(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(hg.compareFunction=rv,c=hg):c=bv,i.setTexture2D(e||c,l)}function eT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ev,l)}function tT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Tv,l)}function nT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Mv,l)}function iT(s){switch(s){case 5126:return BE;case 35664:return zE;case 35665:return HE;case 35666:return GE;case 35674:return VE;case 35675:return kE;case 35676:return XE;case 5124:case 35670:return WE;case 35667:case 35671:return qE;case 35668:case 35672:return YE;case 35669:case 35673:return jE;case 5125:return ZE;case 36294:return KE;case 36295:return QE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}function aT(s,e){s.uniform1fv(this.addr,e)}function rT(s,e){const i=Ls(e,this.size,2);s.uniform2fv(this.addr,i)}function sT(s,e){const i=Ls(e,this.size,3);s.uniform3fv(this.addr,i)}function oT(s,e){const i=Ls(e,this.size,4);s.uniform4fv(this.addr,i)}function lT(s,e){const i=Ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function cT(s,e){const i=Ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function uT(s,e){const i=Ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function fT(s,e){s.uniform1iv(this.addr,e)}function dT(s,e){s.uniform2iv(this.addr,e)}function hT(s,e){s.uniform3iv(this.addr,e)}function pT(s,e){s.uniform4iv(this.addr,e)}function mT(s,e){s.uniform1uiv(this.addr,e)}function xT(s,e){s.uniform2uiv(this.addr,e)}function gT(s,e){s.uniform3uiv(this.addr,e)}function vT(s,e){s.uniform4uiv(this.addr,e)}function _T(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||bv,c[f])}function ST(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ev,c[f])}function yT(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Tv,c[f])}function bT(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);mn(r,c)||(s.uniform1iv(this.addr,c),xn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Mv,c[f])}function MT(s){switch(s){case 5126:return aT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return xT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return bT}}class ET{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=iT(i.type)}}class TT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=MT(i.type)}}class AT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function _g(s,e){s.seq.push(e),s.map[e.id]=e}function RT(s,e,i){const r=s.name,l=r.length;for(Id.lastIndex=0;;){const c=Id.exec(r),f=Id.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){_g(i,p===void 0?new ET(h,s,e):new TT(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new AT(h),_g(i,g)),i=g}}}class zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);RT(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Sg(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const wT=37297;let CT=0;function DT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const yg=new dt;function UT(s){Tt._getMatrix(yg,Tt.workingColorSpace,s);const e=`mat3( ${yg.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Gc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bg(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+DT(s.getShaderSource(e),h)}else return c}function LT(s,e){const i=UT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function NT(s,e){let i;switch(e){case Ob:i="Linear";break;case Fb:i="Reinhard";break;case Ib:i="Cineon";break;case Bb:i="ACESFilmic";break;case Hb:i="AgX";break;case Gb:i="Neutral";break;case zb:i="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new fe;function PT(){Tt.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function FT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function IT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Bo(s){return s!==""}function Mg(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(s){return s.replace(BT,HT)}const zT=new Map;function HT(s,e){let i=ht[e];if(i===void 0){const r=zT.get(e);if(r!==void 0)i=ht[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uh(i)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(s){return s.replace(GT,VT)}function VT(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ag(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function XT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function qT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kg:e="ENVMAP_BLENDING_MULTIPLY";break;case Nb:e="ENVMAP_BLENDING_MIX";break;case Pb:e="ENVMAP_BLENDING_ADD";break}return e}function YT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function jT(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=kT(i),p=XT(i),x=WT(i),g=qT(i),_=YT(i),y=OT(i),M=FT(c),A=l.createProgram();let S,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Bo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(S=[Ag(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),v=[Ag(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?ht.tonemapping_pars_fragment:"",i.toneMapping!==Ka?NT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,LT("linearToOutputTexel",i.outputColorSpace),PT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),f=Uh(f),f=Mg(f,i),f=Eg(f,i),h=Uh(h),h=Mg(h,i),h=Eg(h,i),f=Tg(f),h=Tg(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===zx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+S+f,I=L+v+h,z=Sg(l,l.VERTEX_SHADER,U),P=Sg(l,l.FRAGMENT_SHADER,I);l.attachShader(A,z),l.attachShader(A,P),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function G(B){if(s.debug.checkShaderErrors){const X=l.getProgramInfoLog(A)||"",te=l.getShaderInfoLog(z)||"",oe=l.getShaderInfoLog(P)||"",le=X.trim(),O=te.trim(),q=oe.trim();let Y=!0,de=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,z,P);else{const D=bg(l,z,"vertex"),J=bg(l,P,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+D+`
`+J)}else le!==""?lt("WebGLProgram: Program Info Log:",le):(O===""||q==="")&&(de=!1);de&&(B.diagnostics={runnable:Y,programLog:le,vertexShader:{log:O,prefix:S},fragmentShader:{log:q,prefix:v}})}l.deleteShader(z),l.deleteShader(P),ne=new zc(l,A),C=IT(l,A)}let ne;this.getUniforms=function(){return ne===void 0&&G(this),ne};let C;this.getAttributes=function(){return C===void 0&&G(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,wT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=P,this}let ZT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new QT(e),i.set(e,r)),r}}class QT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function JT(s,e,i,r,l,c,f){const h=new cv,m=new KT,p=new Set,x=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,B,X,te){const oe=X.fog,le=te.geometry,O=C.isMeshStandardMaterial?X.environment:null,q=(C.isMeshStandardMaterial?i:e).get(C.envMap||O),Y=q&&q.mapping===Yc?q.image.height:null,de=M[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&lt("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const D=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,J=D!==void 0?D.length:0;let ye=0;le.morphAttributes.position!==void 0&&(ye=1),le.morphAttributes.normal!==void 0&&(ye=2),le.morphAttributes.color!==void 0&&(ye=3);let be,Ce,Be,Q;if(de){const At=Ui[de];be=At.vertexShader,Ce=At.fragmentShader}else be=C.vertexShader,Ce=C.fragmentShader,m.update(C),Be=m.getVertexShaderID(C),Q=m.getFragmentShaderID(C);const pe=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,ct=!!C.map,Jt=!!C.matcap,ut=!!q,Ot=!!C.aoMap,H=!!C.lightMap,mt=!!C.bumpMap,st=!!C.normalMap,Ft=!!C.displacementMap,Ve=!!C.emissiveMap,kt=!!C.metalnessMap,qe=!!C.roughnessMap,ot=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,ee=C.iridescence>0,xe=C.sheen>0,ve=C.transmission>0,ue=ot&&!!C.anisotropyMap,Fe=N&&!!C.clearcoatMap,Ne=N&&!!C.clearcoatNormalMap,$e=N&&!!C.clearcoatRoughnessMap,ke=ee&&!!C.iridescenceMap,Me=ee&&!!C.iridescenceThicknessMap,Re=xe&&!!C.sheenColorMap,Ze=xe&&!!C.sheenRoughnessMap,Je=!!C.specularMap,Oe=!!C.specularColorMap,it=!!C.specularIntensityMap,V=ve&&!!C.transmissionMap,Le=ve&&!!C.thicknessMap,De=!!C.gradientMap,we=!!C.alphaMap,Te=C.alphaTest>0,Se=!!C.alphaHash,He=!!C.extensions;let at=Ka;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ct={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:be,fragmentShader:Ce,defines:C.defines,customVertexShaderID:Be,customFragmentShaderID:Q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:As,alphaToCoverage:!!C.alphaToCoverage,map:ct,matcap:Jt,envMap:ut,envMapMode:ut&&q.mapping,envMapCubeUVHeight:Y,aoMap:Ot,lightMap:H,bumpMap:mt,normalMap:st,displacementMap:_&&Ft,emissiveMap:Ve,normalMapObjectSpace:st&&C.normalMapType===qb,normalMapTangentSpace:st&&C.normalMapType===Wb,metalnessMap:kt,roughnessMap:qe,anisotropy:ot,anisotropyMap:ue,clearcoat:N,clearcoatMap:Fe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:$e,dispersion:E,iridescence:ee,iridescenceMap:ke,iridescenceThicknessMap:Me,sheen:xe,sheenColorMap:Re,sheenRoughnessMap:Ze,specularMap:Je,specularColorMap:Oe,specularIntensityMap:it,transmission:ve,transmissionMap:V,thicknessMap:Le,gradientMap:De,opaque:C.transparent===!1&&C.blending===ys&&C.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Se,combine:C.combine,mapUv:ct&&A(C.map.channel),aoMapUv:Ot&&A(C.aoMap.channel),lightMapUv:H&&A(C.lightMap.channel),bumpMapUv:mt&&A(C.bumpMap.channel),normalMapUv:st&&A(C.normalMap.channel),displacementMapUv:Ft&&A(C.displacementMap.channel),emissiveMapUv:Ve&&A(C.emissiveMap.channel),metalnessMapUv:kt&&A(C.metalnessMap.channel),roughnessMapUv:qe&&A(C.roughnessMap.channel),anisotropyMapUv:ue&&A(C.anisotropyMap.channel),clearcoatMapUv:Fe&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&A(C.sheenRoughnessMap.channel),specularMapUv:Je&&A(C.specularMap.channel),specularColorMapUv:Oe&&A(C.specularColorMap.channel),specularIntensityMapUv:it&&A(C.specularIntensityMap.channel),transmissionMapUv:V&&A(C.transmissionMap.channel),thicknessMapUv:Le&&A(C.thicknessMap.channel),alphaMapUv:we&&A(C.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(st||ot),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!le.attributes.uv&&(ct||we),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ee,skinning:te.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Ve&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ra,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(L(w,C),U(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function I(C){const w=M[C.type];let B;if(w){const X=Ui[w];B=yM.clone(X.uniforms)}else B=C.uniforms;return B}function z(C,w){let B;for(let X=0,te=x.length;X<te;X++){const oe=x[X];if(oe.cacheKey===w){B=oe,++B.usedTimes;break}}return B===void 0&&(B=new jT(s,w,C,c),x.push(B)),B}function P(C){if(--C.usedTimes===0){const w=x.indexOf(C);x[w]=x[x.length-1],x.pop(),C.destroy()}}function G(C){m.remove(C)}function ne(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:I,acquireProgram:z,releaseProgram:P,releaseShaderCache:G,programs:x,dispose:ne}}function $T(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function eA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wg(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,_,y,M,A,S){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:A,group:S},s[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=A,v.group=S),e++,v}function h(g,_,y,M,A,S){const v=f(g,_,y,M,A,S);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,_,y,M,A,S){const v=f(g,_,y,M,A,S);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,_){i.length>1&&i.sort(g||eA),r.length>1&&r.sort(_||Rg),l.length>1&&l.sort(_||Rg)}function x(){for(let g=e,_=s.length;g<_;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function tA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new wg,s.set(r,[f])):l>=c.length?(f=new wg,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function nA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new Nt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=i,i}}}function iA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let aA=0;function rA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sA(s){const e=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new fe);const l=new fe,c=new fn,f=new fn;function h(p){let x=0,g=0,_=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,M=0,A=0,S=0,v=0,L=0,U=0,I=0,z=0,P=0,G=0;p.sort(rA);for(let C=0,w=p.length;C<w;C++){const B=p[C],X=B.color,te=B.intensity,oe=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=X.r*te,g+=X.g*te,_+=X.b*te;else if(B.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(B.sh.coefficients[O],te);G++}else if(B.isDirectionalLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,Y=i.get(B);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=le,r.directionalShadowMatrix[y]=B.shadow.matrix,L++}r.directional[y]=O,y++}else if(B.isSpotLight){const O=e.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(X).multiplyScalar(te),O.distance=oe,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,r.spot[A]=O;const q=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,q.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[A]=q.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=le,I++}A++}else if(B.isRectAreaLight){const O=e.get(B);O.color.copy(X).multiplyScalar(te),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=O,S++}else if(B.isPointLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),O.distance=B.distance,O.decay=B.decay,B.castShadow){const q=B.shadow,Y=i.get(B);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=le,r.pointShadowMatrix[M]=B.shadow.matrix,U++}r.point[M]=O,M++}else if(B.isHemisphereLight){const O=e.get(B);O.skyColor.copy(B.color).multiplyScalar(te),O.groundColor.copy(B.groundColor).multiplyScalar(te),r.hemi[v]=O,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=_;const ne=r.hash;(ne.directionalLength!==y||ne.pointLength!==M||ne.spotLength!==A||ne.rectAreaLength!==S||ne.hemiLength!==v||ne.numDirectionalShadows!==L||ne.numPointShadows!==U||ne.numSpotShadows!==I||ne.numSpotMaps!==z||ne.numLightProbes!==G)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=I+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=G,ne.directionalLength=y,ne.pointLength=M,ne.spotLength=A,ne.rectAreaLength=S,ne.hemiLength=v,ne.numDirectionalShadows=L,ne.numPointShadows=U,ne.numSpotShadows=I,ne.numSpotMaps=z,ne.numLightProbes=G,r.version=aA++)}function m(p,x){let g=0,_=0,y=0,M=0,A=0;const S=x.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const U=p[v];if(U.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(S),g++}else if(U.isSpotLight){const I=r.spot[y];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const I=r.rectArea[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(S),f.identity(),c.copy(U.matrixWorld),c.premultiply(S),f.extractRotation(c),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(f),I.halfHeight.applyMatrix4(f),M++}else if(U.isPointLight){const I=r.point[_];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(S),_++}else if(U.isHemisphereLight){const I=r.hemi[A];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:r}}function Cg(s){const e=new sA(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function f(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function oA(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Cg(s),e.set(l,[h])):c>=f.length?(h=new Cg(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uA(s,e,i){let r=new gv;const l=new Pt,c=new Pt,f=new rn,h=new PM({depthPacking:Xb}),m=new OM,p={},x=i.maxTextureSize,g={[Qa]:Vn,[Vn]:Qa,[ra]:ra},_=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Pi;M.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ja(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let v=this.type;this.render=function(P,G,ne){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),X=s.state;X.setBlending(ca),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=v!==aa&&this.type===aa,oe=v===aa&&this.type!==aa;for(let le=0,O=P.length;le<O;le++){const q=P[le],Y=q.shadow;if(Y===void 0){lt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const de=Y.getFrameExtents();if(l.multiply(de),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/de.x),l.x=c.x*de.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/de.y),l.y=c.y*de.y,Y.mapSize.y=c.y)),Y.map===null||te===!0||oe===!0){const J=this.type!==aa?{minFilter:$n,magFilter:$n}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rr(l.x,l.y,J),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const D=Y.getViewportCount();for(let J=0;J<D;J++){const ye=Y.getViewport(J);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),X.viewport(f),Y.updateMatrices(q,J),r=Y.getFrustum(),I(G,ne,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&L(Y,ne),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,B)};function L(P,G){const ne=e.update(A);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Rr(l.x,l.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(G,null,ne,_,A,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(G,null,ne,y,A,null)}function U(P,G,ne,C){let w=null;const B=ne.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)w=B;else if(w=ne.isPointLight===!0?m:h,s.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const X=w.uuid,te=G.uuid;let oe=p[X];oe===void 0&&(oe={},p[X]=oe);let le=oe[te];le===void 0&&(le=w.clone(),oe[te]=le,G.addEventListener("dispose",z)),w=le}if(w.visible=G.visible,w.wireframe=G.wireframe,C===aa?w.side=G.shadowSide!==null?G.shadowSide:G.side:w.side=G.shadowSide!==null?G.shadowSide:g[G.side],w.alphaMap=G.alphaMap,w.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,w.map=G.map,w.clipShadows=G.clipShadows,w.clippingPlanes=G.clippingPlanes,w.clipIntersection=G.clipIntersection,w.displacementMap=G.displacementMap,w.displacementScale=G.displacementScale,w.displacementBias=G.displacementBias,w.wireframeLinewidth=G.wireframeLinewidth,w.linewidth=G.linewidth,ne.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=s.properties.get(w);X.light=ne}return w}function I(P,G,ne,C,w){if(P.visible===!1)return;if(P.layers.test(G.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===aa)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld);const te=e.update(P),oe=P.material;if(Array.isArray(oe)){const le=te.groups;for(let O=0,q=le.length;O<q;O++){const Y=le[O],de=oe[Y.materialIndex];if(de&&de.visible){const D=U(P,de,C,w);P.onBeforeShadow(s,P,G,ne,te,D,Y),s.renderBufferDirect(ne,null,te,D,P,Y),P.onAfterShadow(s,P,G,ne,te,D,Y)}}}else if(oe.visible){const le=U(P,oe,C,w);P.onBeforeShadow(s,P,G,ne,te,le,null),s.renderBufferDirect(ne,null,te,le,P,null),P.onAfterShadow(s,P,G,ne,te,le,null)}}const X=P.children;for(let te=0,oe=X.length;te<oe;te++)I(X[te],G,ne,C,w)}function z(P){P.target.removeEventListener("dispose",z);for(const ne in p){const C=p[ne],w=P.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const fA={[Xd]:Wd,[qd]:Zd,[Yd]:Kd,[Ms]:jd,[Wd]:Xd,[Zd]:qd,[Kd]:Yd,[jd]:Ms};function dA(s,e){function i(){let V=!1;const Le=new rn;let De=null;const we=new rn(0,0,0,0);return{setMask:function(Te){De!==Te&&!V&&(s.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){V=Te},setClear:function(Te,Se,He,at,Ct){Ct===!0&&(Te*=at,Se*=at,He*=at),Le.set(Te,Se,He,at),we.equals(Le)===!1&&(s.clearColor(Te,Se,He,at),we.copy(Le))},reset:function(){V=!1,De=null,we.set(-1,0,0,0)}}}function r(){let V=!1,Le=!1,De=null,we=null,Te=null;return{setReversed:function(Se){if(Le!==Se){const He=e.get("EXT_clip_control");Se?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const at=Te;Te=null,this.setClear(at)}},getReversed:function(){return Le},setTest:function(Se){Se?pe(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Se){De!==Se&&!V&&(s.depthMask(Se),De=Se)},setFunc:function(Se){if(Le&&(Se=fA[Se]),we!==Se){switch(Se){case Xd:s.depthFunc(s.NEVER);break;case Wd:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Zd:s.depthFunc(s.GREATER);break;case Kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Se}},setLocked:function(Se){V=Se},setClear:function(Se){Te!==Se&&(Le&&(Se=1-Se),s.clearDepth(Se),Te=Se)},reset:function(){V=!1,De=null,we=null,Te=null,Le=!1}}}function l(){let V=!1,Le=null,De=null,we=null,Te=null,Se=null,He=null,at=null,Ct=null;return{setTest:function(At){V||(At?pe(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(At){Le!==At&&!V&&(s.stencilMask(At),Le=At)},setFunc:function(At,ti,sn){(De!==At||we!==ti||Te!==sn)&&(s.stencilFunc(At,ti,sn),De=At,we=ti,Te=sn)},setOp:function(At,ti,sn){(Se!==At||He!==ti||at!==sn)&&(s.stencilOp(At,ti,sn),Se=At,He=ti,at=sn)},setLocked:function(At){V=At},setClear:function(At){Ct!==At&&(s.clearStencil(At),Ct=At)},reset:function(){V=!1,Le=null,De=null,we=null,Te=null,Se=null,He=null,at=null,Ct=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},_=new WeakMap,y=[],M=null,A=!1,S=null,v=null,L=null,U=null,I=null,z=null,P=null,G=new Nt(0,0,0),ne=0,C=!1,w=null,B=null,X=null,te=null,oe=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=q>=2);let de=null,D={};const J=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),be=new rn().fromArray(J),Ce=new rn().fromArray(ye);function Be(V,Le,De,we){const Te=new Uint8Array(4),Se=s.createTexture();s.bindTexture(V,Se),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<De;He++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Le+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Se}const Q={};Q[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),pe(s.DEPTH_TEST),f.setFunc(Ms),mt(!1),st(Px),pe(s.CULL_FACE),Ot(ca);function pe(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function Ee(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Xe(V,Le){return g[V]!==Le?(s.bindFramebuffer(V,Le),g[V]=Le,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(V,Le){let De=y,we=!1;if(V){De=_.get(Le),De===void 0&&(De=[],_.set(Le,De));const Te=V.textures;if(De.length!==Te.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,He=Te.length;Se<He;Se++)De[Se]=s.COLOR_ATTACHMENT0+Se;De.length=Te.length,we=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,we=!0);we&&s.drawBuffers(De)}function ct(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const Jt={[br]:s.FUNC_ADD,[xb]:s.FUNC_SUBTRACT,[gb]:s.FUNC_REVERSE_SUBTRACT};Jt[vb]=s.MIN,Jt[_b]=s.MAX;const ut={[Sb]:s.ZERO,[yb]:s.ONE,[bb]:s.SRC_COLOR,[Vd]:s.SRC_ALPHA,[wb]:s.SRC_ALPHA_SATURATE,[Ab]:s.DST_COLOR,[Eb]:s.DST_ALPHA,[Mb]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[Rb]:s.ONE_MINUS_DST_COLOR,[Tb]:s.ONE_MINUS_DST_ALPHA,[Cb]:s.CONSTANT_COLOR,[Db]:s.ONE_MINUS_CONSTANT_COLOR,[Ub]:s.CONSTANT_ALPHA,[Lb]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(V,Le,De,we,Te,Se,He,at,Ct,At){if(V===ca){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(pe(s.BLEND),A=!0),V!==mb){if(V!==S||At!==C){if((v!==br||I!==br)&&(s.blendEquation(s.FUNC_ADD),v=br,I=br),At)switch(V){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gd:s.blendFunc(s.ONE,s.ONE);break;case Ox:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:an("WebGLState: Invalid blending: ",V);break}else switch(V){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ox:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fx:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",V);break}L=null,U=null,z=null,P=null,G.set(0,0,0),ne=0,S=V,C=At}return}Te=Te||Le,Se=Se||De,He=He||we,(Le!==v||Te!==I)&&(s.blendEquationSeparate(Jt[Le],Jt[Te]),v=Le,I=Te),(De!==L||we!==U||Se!==z||He!==P)&&(s.blendFuncSeparate(ut[De],ut[we],ut[Se],ut[He]),L=De,U=we,z=Se,P=He),(at.equals(G)===!1||Ct!==ne)&&(s.blendColor(at.r,at.g,at.b,Ct),G.copy(at),ne=Ct),S=V,C=!1}function H(V,Le){V.side===ra?Ee(s.CULL_FACE):pe(s.CULL_FACE);let De=V.side===Vn;Le&&(De=!De),mt(De),V.blending===ys&&V.transparent===!1?Ot(ca):Ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const we=V.stencilWrite;h.setTest(we),we&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ve(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){w!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),w=V)}function st(V){V!==db?(pe(s.CULL_FACE),V!==B&&(V===Px?s.cullFace(s.BACK):V===hb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),B=V}function Ft(V){V!==X&&(O&&s.lineWidth(V),X=V)}function Ve(V,Le,De){V?(pe(s.POLYGON_OFFSET_FILL),(te!==Le||oe!==De)&&(s.polygonOffset(Le,De),te=Le,oe=De)):Ee(s.POLYGON_OFFSET_FILL)}function kt(V){V?pe(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function qe(V){V===void 0&&(V=s.TEXTURE0+le-1),de!==V&&(s.activeTexture(V),de=V)}function ot(V,Le,De){De===void 0&&(de===null?De=s.TEXTURE0+le-1:De=de);let we=D[De];we===void 0&&(we={type:void 0,texture:void 0},D[De]=we),(we.type!==V||we.texture!==Le)&&(de!==De&&(s.activeTexture(De),de=De),s.bindTexture(V,Le||Q[V]),we.type=V,we.texture=Le)}function N(){const V=D[de];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function xe(){try{s.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ve(){try{s.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Fe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ne(){try{s.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $e(){try{s.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ke(){try{s.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Me(){try{s.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Re(V){be.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function Ze(V){Ce.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ce.copy(V))}function Je(V,Le){let De=p.get(Le);De===void 0&&(De=new WeakMap,p.set(Le,De));let we=De.get(V);we===void 0&&(we=s.getUniformBlockIndex(Le,V.name),De.set(V,we))}function Oe(V,Le){const we=p.get(Le).get(V);m.get(Le)!==we&&(s.uniformBlockBinding(Le,we,V.__bindingPointIndex),m.set(Le,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},de=null,D={},g={},_=new WeakMap,y=[],M=null,A=!1,S=null,v=null,L=null,U=null,I=null,z=null,P=null,G=new Nt(0,0,0),ne=0,C=!1,w=null,B=null,X=null,te=null,oe=null,be.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:pe,disable:Ee,bindFramebuffer:Xe,drawBuffers:We,useProgram:ct,setBlending:Ot,setMaterial:H,setFlipSided:mt,setCullFace:st,setLineWidth:Ft,setPolygonOffset:Ve,setScissorTest:kt,activeTexture:qe,bindTexture:ot,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:ee,texImage2D:ke,texImage3D:Me,updateUBOMapping:Je,uniformBlockBinding:Oe,texStorage2D:Ne,texStorage3D:$e,texSubImage2D:xe,texSubImage3D:ve,compressedTexSubImage2D:ue,compressedTexSubImage3D:Fe,scissor:Re,viewport:Ze,reset:it}}function hA(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,x=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,E){return y?new OffscreenCanvas(N,E):kc("canvas")}function A(N,E,ee){let xe=1;const ve=ot(N);if((ve.width>ee||ve.height>ee)&&(xe=ee/Math.max(ve.width,ve.height)),xe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(xe*ve.width),Fe=Math.floor(xe*ve.height);g===void 0&&(g=M(ue,Fe));const Ne=E?M(ue,Fe):g;return Ne.width=ue,Ne.height=Fe,Ne.getContext("2d").drawImage(N,0,0,ue,Fe),lt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ue+"x"+Fe+")."),Ne}else return"data"in N&&lt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,E,ee,xe,ve=!1){if(N!==null){if(s[N]!==void 0)return s[N];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=E;if(E===s.RED&&(ee===s.FLOAT&&(ue=s.R32F),ee===s.HALF_FLOAT&&(ue=s.R16F),ee===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.R8UI),ee===s.UNSIGNED_SHORT&&(ue=s.R16UI),ee===s.UNSIGNED_INT&&(ue=s.R32UI),ee===s.BYTE&&(ue=s.R8I),ee===s.SHORT&&(ue=s.R16I),ee===s.INT&&(ue=s.R32I)),E===s.RG&&(ee===s.FLOAT&&(ue=s.RG32F),ee===s.HALF_FLOAT&&(ue=s.RG16F),ee===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.RG8UI),ee===s.UNSIGNED_SHORT&&(ue=s.RG16UI),ee===s.UNSIGNED_INT&&(ue=s.RG32UI),ee===s.BYTE&&(ue=s.RG8I),ee===s.SHORT&&(ue=s.RG16I),ee===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),ee===s.UNSIGNED_INT&&(ue=s.RGB32UI),ee===s.BYTE&&(ue=s.RGB8I),ee===s.SHORT&&(ue=s.RGB16I),ee===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),ee===s.UNSIGNED_INT&&(ue=s.RGBA32UI),ee===s.BYTE&&(ue=s.RGBA8I),ee===s.SHORT&&(ue=s.RGBA16I),ee===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(ee===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const Fe=ve?Gc:Tt.getTransfer(xe);ee===s.FLOAT&&(ue=s.RGBA32F),ee===s.HALF_FLOAT&&(ue=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ue=Fe===Ht?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(N,E){let ee;return N?E===null||E===Ar||E===Go?ee=s.DEPTH24_STENCIL8:E===oa?ee=s.DEPTH32F_STENCIL8:E===Ho&&(ee=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===Go?ee=s.DEPTH_COMPONENT24:E===oa?ee=s.DEPTH_COMPONENT32F:E===Ho&&(ee=s.DEPTH_COMPONENT16),ee}function z(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==$n&&N.minFilter!==di?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function P(N){const E=N.target;E.removeEventListener("dispose",P),ne(E),E.isVideoTexture&&x.delete(E)}function G(N){const E=N.target;E.removeEventListener("dispose",G),w(E)}function ne(N){const E=r.get(N);if(E.__webglInit===void 0)return;const ee=N.source,xe=_.get(ee);if(xe){const ve=xe[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(N),Object.keys(xe).length===0&&_.delete(ee)}r.remove(N)}function C(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const ee=N.source,xe=_.get(ee);delete xe[E.__cacheKey],f.memory.textures--}function w(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let ve=0;ve<E.__webglFramebuffer[xe].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[xe][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[xe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=N.textures;for(let xe=0,ve=ee.length;xe<ve;xe++){const ue=r.get(ee[xe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(ee[xe])}r.remove(N)}let B=0;function X(){B=0}function te(){const N=B;return N>=l.maxTextures&&lt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),B+=1,N}function oe(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function le(N,E){const ee=r.get(N);if(N.isVideoTexture&&kt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const xe=N.image;if(xe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ee,N,E);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+E)}function O(N,E){const ee=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Q(ee,N,E);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+E)}function q(N,E){const ee=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Q(ee,N,E);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+E)}function Y(N,E){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){pe(ee,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+E)}const de={[$d]:s.REPEAT,[sa]:s.CLAMP_TO_EDGE,[eh]:s.MIRRORED_REPEAT},D={[$n]:s.NEAREST,[Vb]:s.NEAREST_MIPMAP_NEAREST,[cc]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[ld]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},J={[Yb]:s.NEVER,[$b]:s.ALWAYS,[jb]:s.LESS,[rv]:s.LEQUAL,[Zb]:s.EQUAL,[Jb]:s.GEQUAL,[Kb]:s.GREATER,[Qb]:s.NOTEQUAL};function ye(N,E){if(E.type===oa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===di||E.magFilter===ld||E.magFilter===cc||E.magFilter===Er||E.minFilter===di||E.minFilter===ld||E.minFilter===cc||E.minFilter===Er)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,de[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,de[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,de[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,D[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$n||E.minFilter!==cc&&E.minFilter!==Er||E.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function be(N,E){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",P));const xe=E.source;let ve=_.get(xe);ve===void 0&&(ve={},_.set(xe,ve));const ue=oe(E);if(ue!==N.__cacheKey){ve[ue]===void 0&&(ve[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ee=!0),ve[ue].usedTimes++;const Fe=ve[N.__cacheKey];Fe!==void 0&&(ve[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(E)),N.__cacheKey=ue,N.__webglTexture=ve[ue].texture}return ee}function Ce(N,E,ee){return Math.floor(Math.floor(N/ee)/E)}function Be(N,E,ee,xe){const ue=N.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ee,xe,E.data);else{ue.sort((Me,Re)=>Me.start-Re.start);let Fe=0;for(let Me=1;Me<ue.length;Me++){const Re=ue[Fe],Ze=ue[Me],Je=Re.start+Re.count,Oe=Ce(Ze.start,E.width,4),it=Ce(Re.start,E.width,4);Ze.start<=Je+1&&Oe===it&&Ce(Ze.start+Ze.count-1,E.width,4)===Oe?Re.count=Math.max(Re.count,Ze.start+Ze.count-Re.start):(++Fe,ue[Fe]=Ze)}ue.length=Fe+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),$e=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Re=ue.length;Me<Re;Me++){const Ze=ue[Me],Je=Math.floor(Ze.start/4),Oe=Math.ceil(Ze.count/4),it=Je%E.width,V=Math.floor(Je/E.width),Le=Oe,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),i.texSubImage2D(s.TEXTURE_2D,0,it,V,Le,De,ee,xe,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function Q(N,E,ee){let xe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=s.TEXTURE_3D);const ve=be(N,E),ue=E.source;i.bindTexture(xe,N.__webglTexture,s.TEXTURE0+ee);const Fe=r.get(ue);if(ue.version!==Fe.__version||ve===!0){i.activeTexture(s.TEXTURE0+ee);const Ne=Tt.getPrimaries(Tt.workingColorSpace),$e=E.colorSpace===ja?null:Tt.getPrimaries(E.colorSpace),ke=E.colorSpace===ja||Ne===$e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Me=A(E.image,!1,l.maxTextureSize);Me=qe(E,Me);const Re=c.convert(E.format,E.colorSpace),Ze=c.convert(E.type);let Je=U(E.internalFormat,Re,Ze,E.colorSpace,E.isVideoTexture);ye(xe,E);let Oe;const it=E.mipmaps,V=E.isVideoTexture!==!0,Le=Fe.__version===void 0||ve===!0,De=ue.dataReady,we=z(E,Me);if(E.isDepthTexture)Je=I(E.format===ko,E.type),Le&&(V?i.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Re,Ze,null));else if(E.isDataTexture)if(it.length>0){V&&Le&&i.texStorage2D(s.TEXTURE_2D,we,Je,it[0].width,it[0].height);for(let Te=0,Se=it.length;Te<Se;Te++)Oe=it[Te],V?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Re,Ze,Oe.data):i.texImage2D(s.TEXTURE_2D,Te,Je,Oe.width,Oe.height,0,Re,Ze,Oe.data);E.generateMipmaps=!1}else V?(Le&&i.texStorage2D(s.TEXTURE_2D,we,Je,Me.width,Me.height),De&&Be(E,Me,Re,Ze)):i.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Re,Ze,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Je,it[0].width,it[0].height,Me.depth);for(let Te=0,Se=it.length;Te<Se;Te++)if(Oe=it[Te],E.format!==bi)if(Re!==null)if(V){if(De)if(E.layerUpdates.size>0){const He=sg(Oe.width,Oe.height,E.format,E.type);for(const at of E.layerUpdates){const Ct=Oe.data.subarray(at*He/Oe.data.BYTES_PER_ELEMENT,(at+1)*He/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,at,Oe.width,Oe.height,1,Re,Ct)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Me.depth,Re,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Je,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Me.depth,Re,Ze,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Je,Oe.width,Oe.height,Me.depth,0,Re,Ze,Oe.data)}else{V&&Le&&i.texStorage2D(s.TEXTURE_2D,we,Je,it[0].width,it[0].height);for(let Te=0,Se=it.length;Te<Se;Te++)Oe=it[Te],E.format!==bi?Re!==null?V?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Re,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Je,Oe.width,Oe.height,0,Oe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Re,Ze,Oe.data):i.texImage2D(s.TEXTURE_2D,Te,Je,Oe.width,Oe.height,0,Re,Ze,Oe.data)}else if(E.isDataArrayTexture)if(V){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Je,Me.width,Me.height,Me.depth),De)if(E.layerUpdates.size>0){const Te=sg(Me.width,Me.height,E.format,E.type);for(const Se of E.layerUpdates){const He=Me.data.subarray(Se*Te/Me.data.BYTES_PER_ELEMENT,(Se+1)*Te/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Me.width,Me.height,1,Re,Ze,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Re,Ze,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Re,Ze,Me.data);else if(E.isData3DTexture)V?(Le&&i.texStorage3D(s.TEXTURE_3D,we,Je,Me.width,Me.height,Me.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Re,Ze,Me.data)):i.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Re,Ze,Me.data);else if(E.isFramebufferTexture){if(Le)if(V)i.texStorage2D(s.TEXTURE_2D,we,Je,Me.width,Me.height);else{let Te=Me.width,Se=Me.height;for(let He=0;He<we;He++)i.texImage2D(s.TEXTURE_2D,He,Je,Te,Se,0,Re,Ze,null),Te>>=1,Se>>=1}}else if(it.length>0){if(V&&Le){const Te=ot(it[0]);i.texStorage2D(s.TEXTURE_2D,we,Je,Te.width,Te.height)}for(let Te=0,Se=it.length;Te<Se;Te++)Oe=it[Te],V?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,Ze,Oe):i.texImage2D(s.TEXTURE_2D,Te,Je,Re,Ze,Oe);E.generateMipmaps=!1}else if(V){if(Le){const Te=ot(Me);i.texStorage2D(s.TEXTURE_2D,we,Je,Te.width,Te.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ze,Me)}else i.texImage2D(s.TEXTURE_2D,0,Je,Re,Ze,Me);S(E)&&v(xe),Fe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function pe(N,E,ee){if(E.image.length!==6)return;const xe=be(N,E),ve=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const ue=r.get(ve);if(ve.version!==ue.__version||xe===!0){i.activeTexture(s.TEXTURE0+ee);const Fe=Tt.getPrimaries(Tt.workingColorSpace),Ne=E.colorSpace===ja?null:Tt.getPrimaries(E.colorSpace),$e=E.colorSpace===ja||Fe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let Se=0;Se<6;Se++)!ke&&!Me?Re[Se]=A(E.image[Se],!0,l.maxCubemapSize):Re[Se]=Me?E.image[Se].image:E.image[Se],Re[Se]=qe(E,Re[Se]);const Ze=Re[0],Je=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type),it=U(E.internalFormat,Je,Oe,E.colorSpace),V=E.isVideoTexture!==!0,Le=ue.__version===void 0||xe===!0,De=ve.dataReady;let we=z(E,Ze);ye(s.TEXTURE_CUBE_MAP,E);let Te;if(ke){V&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ze.width,Ze.height);for(let Se=0;Se<6;Se++){Te=Re[Se].mipmaps;for(let He=0;He<Te.length;He++){const at=Te[He];E.format!==bi?Je!==null?V?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,at.width,at.height,Je,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,it,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,at.width,at.height,Je,Oe,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,it,at.width,at.height,0,Je,Oe,at.data)}}}else{if(Te=E.mipmaps,V&&Le){Te.length>0&&we++;const Se=ot(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Me){V?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Re[Se].width,Re[Se].height,Je,Oe,Re[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Re[Se].width,Re[Se].height,0,Je,Oe,Re[Se].data);for(let He=0;He<Te.length;He++){const Ct=Te[He].image[Se].image;V?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,Ct.width,Ct.height,Je,Oe,Ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,it,Ct.width,Ct.height,0,Je,Oe,Ct.data)}}else{V?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Je,Oe,Re[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Je,Oe,Re[Se]);for(let He=0;He<Te.length;He++){const at=Te[He];V?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,Je,Oe,at.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,it,Je,Oe,at.image[Se])}}}S(E)&&v(s.TEXTURE_CUBE_MAP),ue.__version=ve.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ee(N,E,ee,xe,ve,ue){const Fe=c.convert(ee.format,ee.colorSpace),Ne=c.convert(ee.type),$e=U(ee.internalFormat,Fe,Ne,ee.colorSpace),ke=r.get(E),Me=r.get(ee);if(Me.__renderTarget=E,!ke.__hasExternalTextures){const Re=Math.max(1,E.width>>ue),Ze=Math.max(1,E.height>>ue);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?i.texImage3D(ve,ue,$e,Re,Ze,E.depth,0,Fe,Ne,null):i.texImage2D(ve,ue,$e,Re,Ze,0,Fe,Ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ve(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ve,Me.__webglTexture,0,Ft(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,ve,Me.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(N,E,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const xe=E.depthTexture,ve=xe&&xe.isDepthTexture?xe.type:null,ue=I(E.stencilBuffer,ve),Fe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Ft(E);Ve(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ue,E.width,E.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,N)}else{const xe=E.textures;for(let ve=0;ve<xe.length;ve++){const ue=xe[ve],Fe=c.convert(ue.format,ue.colorSpace),Ne=c.convert(ue.type),$e=U(ue.internalFormat,Fe,Ne,ue.colorSpace),ke=Ft(E);ee&&Ve(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,$e,E.width,E.height):Ve(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,$e,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,$e,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(E.depthTexture);xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le(E.depthTexture,0);const ve=xe.__webglTexture,ue=Ft(E);if(E.depthTexture.format===Vo)Ve(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===ko)Ve(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ct(N){const E=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const xe=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",ve)};xe.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=xe}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const xe=N.texture.mipmaps;xe&&xe.length>0?We(E.__webglFramebuffer[0],N):We(E.__webglFramebuffer,N)}else if(ee){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=s.createRenderbuffer(),Xe(E.__webglDepthbuffer[xe],N,!1);else{const ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,ue)}}else{const xe=N.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xe(E.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(N,E,ee){const xe=r.get(N);E!==void 0&&Ee(xe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&ct(N)}function ut(N){const E=N.texture,ee=r.get(N),xe=r.get(E);N.addEventListener("dispose",G);const ve=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Fe=ve.length>1;if(Fe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=E.version,f.memory.textures++),ue){ee.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[Ne]=[];for(let $e=0;$e<E.mipmaps.length;$e++)ee.__webglFramebuffer[Ne][$e]=s.createFramebuffer()}else ee.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)ee.__webglFramebuffer[Ne]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Ne=0,$e=ve.length;Ne<$e;Ne++){const ke=r.get(ve[Ne]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Ve(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ve.length;Ne++){const $e=ve[Ne];ee.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne]);const ke=c.convert($e.format,$e.colorSpace),Me=c.convert($e.type),Re=U($e.internalFormat,ke,Me,$e.colorSpace,N.isXRRenderTarget===!0),Ze=Ft(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Re,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(ee.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(s.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let $e=0;$e<E.mipmaps.length;$e++)Ee(ee.__webglFramebuffer[Ne][$e],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,$e);else Ee(ee.__webglFramebuffer[Ne],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let Ne=0,$e=ve.length;Ne<$e;Ne++){const ke=ve[Ne],Me=r.get(ke);let Re=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Me.__webglTexture),ye(Re,ke),Ee(ee.__webglFramebuffer,N,ke,s.COLOR_ATTACHMENT0+Ne,Re,0),S(ke)&&v(Re)}i.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,xe.__webglTexture),ye(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let $e=0;$e<E.mipmaps.length;$e++)Ee(ee.__webglFramebuffer[$e],N,E,s.COLOR_ATTACHMENT0,Ne,$e);else Ee(ee.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Ne,0);S(E)&&v(Ne),i.unbindTexture()}N.depthBuffer&&ct(N)}function Ot(N){const E=N.textures;for(let ee=0,xe=E.length;ee<xe;ee++){const ve=E[ee];if(S(ve)){const ue=L(N),Fe=r.get(ve).__webglTexture;i.bindTexture(ue,Fe),v(ue),i.unbindTexture()}}}const H=[],mt=[];function st(N){if(N.samples>0){if(Ve(N)===!1){const E=N.textures,ee=N.width,xe=N.height;let ve=s.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(N),Ne=E.length>1;if(Ne)for(let ke=0;ke<E.length;ke++)i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const $e=N.texture.mipmaps;$e&&$e.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Me=r.get(E[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,ee,xe,0,0,ee,xe,ve,s.NEAREST),m===!0&&(H.length=0,mt.length=0,H.push(s.COLOR_ATTACHMENT0+ke),N.depthBuffer&&N.resolveDepthBuffer===!1&&(H.push(ue),mt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let ke=0;ke<E.length;ke++){i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Me=r.get(E[ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Me,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ft(N){return Math.min(l.maxSamples,N.samples)}function Ve(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(N){const E=f.render.frame;x.get(N)!==E&&(x.set(N,E),N.update())}function qe(N,E){const ee=N.colorSpace,xe=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==As&&ee!==ja&&(Tt.getTransfer(ee)===Ht?(xe!==bi||ve!==da)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",ee)),E}function ot(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=X,this.setTexture2D=le,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Jt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ve}function pA(s,e){function i(r,l=ja){let c;const f=Tt.getTransfer(l);if(r===da)return s.UNSIGNED_BYTE;if(r===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ev)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jg)return s.BYTE;if(r===$g)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===zh)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===oa)return s.FLOAT;if(r===Ds)return s.HALF_FLOAT;if(r===nv)return s.ALPHA;if(r===iv)return s.RGB;if(r===bi)return s.RGBA;if(r===Vo)return s.DEPTH_COMPONENT;if(r===ko)return s.DEPTH_STENCIL;if(r===av)return s.RED;if(r===Vh)return s.RED_INTEGER;if(r===kh)return s.RG;if(r===Xh)return s.RG_INTEGER;if(r===Wh)return s.RGBA_INTEGER;if(r===Oc||r===Fc||r===Ic||r===Bc)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===th||r===nh||r===ih||r===ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rh||r===sh||r===oh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===rh||r===sh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===oh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===xh||r===gh||r===vh||r===_h||r===Sh||r===yh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===lh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ch)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ph)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_h)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bh||r===Mh||r===Eh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===bh)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Eh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Th||r===Ah||r===Rh||r===wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Th)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ah)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Sv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new pa({vertexShader:mA,fragmentShader:xA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ja(new Zc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends Us{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,g=null,_=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new gA,v={},L=i.getContextAttributes();let U=null,I=null;const z=[],P=[],G=new Pt;let ne=null;const C=new fi;C.viewport=new rn;const w=new fi;w.viewport=new rn;const B=[C,w],X=new IM;let te=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=z[Q];return pe===void 0&&(pe=new Ud,z[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=z[Q];return pe===void 0&&(pe=new Ud,z[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=z[Q];return pe===void 0&&(pe=new Ud,z[Q]=pe),pe.getHandSpace()};function le(Q){const pe=P.indexOf(Q.inputSource);if(pe===-1)return;const Ee=z[pe];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,p||f),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){l.removeEventListener("select",le),l.removeEventListener("selectstart",le),l.removeEventListener("selectend",le),l.removeEventListener("squeeze",le),l.removeEventListener("squeezestart",le),l.removeEventListener("squeezeend",le),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",q);for(let Q=0;Q<z.length;Q++){const pe=P[Q];pe!==null&&(P[Q]=null,z[Q].disconnect(pe))}te=null,oe=null,S.reset();for(const Q in v)delete v[Q];e.setRenderTarget(U),y=null,_=null,g=null,l=null,I=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(ne),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",le),l.addEventListener("selectstart",le),l.addEventListener("selectend",le),l.addEventListener("squeeze",le),l.addEventListener("squeezestart",le),l.addEventListener("squeezeend",le),l.addEventListener("end",O),l.addEventListener("inputsourceschange",q),L.xrCompatible!==!0&&await i.makeXRCompatible(),ne=e.getPixelRatio(),e.getSize(G),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Xe=null,We=null;L.depth&&(We=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=L.stencil?ko:Vo,Xe=L.stencil?Go:Ar);const ct={colorFormat:i.RGBA8,depthFormat:We,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(ct),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new Rr(_.textureWidth,_.textureHeight,{format:bi,type:da,depthTexture:new _v(_.textureWidth,_.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new Rr(y.framebufferWidth,y.framebufferHeight,{format:bi,type:da,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(Q){for(let pe=0;pe<Q.removed.length;pe++){const Ee=Q.removed[pe],Xe=P.indexOf(Ee);Xe>=0&&(P[Xe]=null,z[Xe].disconnect(Ee))}for(let pe=0;pe<Q.added.length;pe++){const Ee=Q.added[pe];let Xe=P.indexOf(Ee);if(Xe===-1){for(let ct=0;ct<z.length;ct++)if(ct>=P.length){P.push(Ee),Xe=ct;break}else if(P[ct]===null){P[ct]=Ee,Xe=ct;break}if(Xe===-1)break}const We=z[Xe];We&&We.connect(Ee)}}const Y=new fe,de=new fe;function D(Q,pe,Ee){Y.setFromMatrixPosition(pe.matrixWorld),de.setFromMatrixPosition(Ee.matrixWorld);const Xe=Y.distanceTo(de),We=pe.projectionMatrix.elements,ct=Ee.projectionMatrix.elements,Jt=We[14]/(We[10]-1),ut=We[14]/(We[10]+1),Ot=(We[9]+1)/We[5],H=(We[9]-1)/We[5],mt=(We[8]-1)/We[0],st=(ct[8]+1)/ct[0],Ft=Jt*mt,Ve=Jt*st,kt=Xe/(-mt+st),qe=kt*-mt;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qe),Q.translateZ(kt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),We[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ot=Jt+kt,N=ut+kt,E=Ft-qe,ee=Ve+(Xe-qe),xe=Ot*ut/N*ot,ve=H*ut/N*ot;Q.projectionMatrix.makePerspective(E,ee,xe,ve,ot,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function J(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pe=Q.near,Ee=Q.far;S.texture!==null&&(S.depthNear>0&&(pe=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),X.near=w.near=C.near=pe,X.far=w.far=C.far=Ee,(te!==X.near||oe!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),te=X.near,oe=X.far),X.layers.mask=Q.layers.mask|6,C.layers.mask=X.layers.mask&3,w.layers.mask=X.layers.mask&5;const Xe=Q.parent,We=X.cameras;J(X,Xe);for(let ct=0;ct<We.length;ct++)J(We[ct],Xe);We.length===2?D(X,C,w):X.projectionMatrix.copy(C.projectionMatrix),ye(Q,X,Xe)};function ye(Q,pe,Ee){Ee===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ch*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(Q){m=Q,_!==null&&(_.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(Q){return v[Q]};let be=null;function Ce(Q,pe){if(x=pe.getViewerPose(p||f),M=pe,x!==null){const Ee=x.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Xe=!1;Ee.length!==X.cameras.length&&(X.cameras.length=0,Xe=!0);for(let ut=0;ut<Ee.length;ut++){const Ot=Ee[ut];let H=null;if(y!==null)H=y.getViewport(Ot);else{const st=g.getViewSubImage(_,Ot);H=st.viewport,ut===0&&(e.setRenderTargetTextures(I,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(I))}let mt=B[ut];mt===void 0&&(mt=new fi,mt.layers.enable(ut),mt.viewport=new rn,B[ut]=mt),mt.matrix.fromArray(Ot.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ot.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(H.x,H.y,H.width,H.height),ut===0&&(X.matrix.copy(mt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Xe===!0&&X.cameras.push(mt)}const We=l.enabledFeatures;if(We&&We.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const ut=g.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,l.renderState)}if(We&&We.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let ut=0;ut<Ee.length;ut++){const Ot=Ee[ut].camera;if(Ot){let H=v[Ot];H||(H=new Sv,v[Ot]=H);const mt=g.getCameraImage(Ot);H.sourceTexture=mt}}}}for(let Ee=0;Ee<z.length;Ee++){const Xe=P[Ee],We=z[Ee];Xe!==null&&We!==void 0&&We.update(Xe,pe,p||f)}be&&be(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Be=new yv;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){be=Q},this.dispose=function(){}}}const Sr=new ha,_A=new fn;function SA(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,pv(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,L,U,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),g(S,v)):v.isMeshPhongMaterial?(c(S,v),x(S,v)):v.isMeshStandardMaterial?(c(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,I)):v.isMeshMatcapMaterial?(c(S,v),M(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,L,U):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Vn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Vn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),U=L.envMap,I=L.envMapRotation;U&&(S.envMap.value=U,Sr.copy(I),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),S.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Sr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=U*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function x(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yA(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const I=U.program;r.uniformBlockBinding(L,I)}function p(L,U){let I=l[L.id];I===void 0&&(M(L),I=x(L),l[L.id]=I,L.addEventListener("dispose",S));const z=U.program;r.updateUBOMapping(L,z);const P=e.render.frame;c[L.id]!==P&&(_(L),c[L.id]=P)}function x(L){const U=g();L.__bindingPointIndex=U;const I=s.createBuffer(),z=L.__size,P=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,I),I}function g(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const U=l[L.id],I=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let P=0,G=I.length;P<G;P++){const ne=Array.isArray(I[P])?I[P]:[I[P]];for(let C=0,w=ne.length;C<w;C++){const B=ne[C];if(y(B,P,C,z)===!0){const X=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let oe=0;for(let le=0;le<te.length;le++){const O=te[le],q=A(O);typeof O=="number"||typeof O=="boolean"?(B.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,X+oe,B.__data)):O.isMatrix3?(B.__data[0]=O.elements[0],B.__data[1]=O.elements[1],B.__data[2]=O.elements[2],B.__data[3]=0,B.__data[4]=O.elements[3],B.__data[5]=O.elements[4],B.__data[6]=O.elements[5],B.__data[7]=0,B.__data[8]=O.elements[6],B.__data[9]=O.elements[7],B.__data[10]=O.elements[8],B.__data[11]=0):(O.toArray(B.__data,oe),oe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,U,I,z){const P=L.value,G=U+"_"+I;if(z[G]===void 0)return typeof P=="number"||typeof P=="boolean"?z[G]=P:z[G]=P.clone(),!0;{const ne=z[G];if(typeof P=="number"||typeof P=="boolean"){if(ne!==P)return z[G]=P,!0}else if(ne.equals(P)===!1)return ne.copy(P),!0}return!1}function M(L){const U=L.uniforms;let I=0;const z=16;for(let G=0,ne=U.length;G<ne;G++){const C=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,B=C.length;w<B;w++){const X=C[w],te=Array.isArray(X.value)?X.value:[X.value];for(let oe=0,le=te.length;oe<le;oe++){const O=te[oe],q=A(O),Y=I%z,de=Y%q.boundary,D=Y+de;I+=de,D!==0&&z-D<q.storage&&(I+=z-D),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=I,I+=q.storage}}}const P=I%z;return P>0&&(I+=z-P),L.__size=I,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const I=f.indexOf(U.__bindingPointIndex);f.splice(I,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const bA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ia=null;function MA(){return ia===null&&(ia=new wM(bA,32,32,kh,Ds),ia.minFilter=di,ia.magFilter=di,ia.wrapS=sa,ia.wrapT=sa,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class EA{constructor(e={}){const{canvas:i=eM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const M=new Set([Wh,Xh,Vh]),A=new Set([da,Ar,Ho,Go,Hh,Gh]),S=new Uint32Array(4),v=new Int32Array(4);let L=null,U=null;const I=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let G=!1;this._outputColorSpace=ui;let ne=0,C=0,w=null,B=-1,X=null;const te=new rn,oe=new rn;let le=null;const O=new Nt(0);let q=0,Y=i.width,de=i.height,D=1,J=null,ye=null;const be=new rn(0,0,Y,de),Ce=new rn(0,0,Y,de);let Be=!1;const Q=new gv;let pe=!1,Ee=!1;const Xe=new fn,We=new fe,ct=new rn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ot(){return w===null?D:1}let H=r;function mt(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bh}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",He,!1),H===null){const j="webgl2";if(H=mt(j,R),H===null)throw mt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let st,Ft,Ve,kt,qe,ot,N,E,ee,xe,ve,ue,Fe,Ne,$e,ke,Me,Re,Ze,Je,Oe,it,V,Le;function De(){st=new LE(H),st.init(),it=new pA(H,st),Ft=new ME(H,st,e,it),Ve=new dA(H,st),Ft.reversedDepthBuffer&&_&&Ve.buffers.depth.setReversed(!0),kt=new OE(H),qe=new $T,ot=new hA(H,st,Ve,qe,Ft,it,kt),N=new TE(P),E=new UE(P),ee=new zM(H),V=new yE(H,ee),xe=new NE(H,ee,kt,V),ve=new IE(H,xe,ee,kt),Ze=new FE(H,Ft,ot),ke=new EE(qe),ue=new JT(P,N,E,st,Ft,V,ke),Fe=new SA(P,qe),Ne=new tA,$e=new oA(st),Re=new SE(P,N,E,Ve,ve,y,m),Me=new uA(P,ve,Ft),Le=new yA(H,kt,Ft,Ve),Je=new bE(H,st,kt),Oe=new PE(H,st,kt),kt.programs=ue.programs,P.capabilities=Ft,P.extensions=st,P.properties=qe,P.renderLists=Ne,P.shadowMap=Me,P.state=Ve,P.info=kt}De();const we=new vA(P,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(Y,de,!1))},this.getSize=function(R){return R.set(Y,de)},this.setSize=function(R,j,re=!0){if(we.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,de=j,i.width=Math.floor(R*D),i.height=Math.floor(j*D),re===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(Y*D,de*D).floor()},this.setDrawingBufferSize=function(R,j,re){Y=R,de=j,D=re,i.width=Math.floor(R*re),i.height=Math.floor(j*re),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(te)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,j,re,ce){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,j,re,ce),Ve.viewport(te.copy(be).multiplyScalar(D).round())},this.getScissor=function(R){return R.copy(Ce)},this.setScissor=function(R,j,re,ce){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,j,re,ce),Ve.scissor(oe.copy(Ce).multiplyScalar(D).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){Ve.setScissorTest(Be=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){ye=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,re=!0){let ce=0;if(R){let Z=!1;if(w!==null){const Ae=w.texture.format;Z=M.has(Ae)}if(Z){const Ae=w.texture.type,Ue=A.has(Ae),ze=Re.getClearColor(),Ie=Re.getClearAlpha(),Ke=ze.r,et=ze.g,Ye=ze.b;Ue?(S[0]=Ke,S[1]=et,S[2]=Ye,S[3]=Ie,H.clearBufferuiv(H.COLOR,0,S)):(v[0]=Ke,v[1]=et,v[2]=Ye,v[3]=Ie,H.clearBufferiv(H.COLOR,0,v))}else ce|=H.COLOR_BUFFER_BIT}j&&(ce|=H.DEPTH_BUFFER_BIT),re&&(ce|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",He,!1),Re.dispose(),Ne.dispose(),$e.dispose(),qe.dispose(),N.dispose(),E.dispose(),ve.dispose(),V.dispose(),Le.dispose(),ue.dispose(),we.dispose(),we.removeEventListener("sessionstart",Mn),we.removeEventListener("sessionend",Oi),hi.stop()};function Te(R){R.preventDefault(),Gx("WebGLRenderer: Context Lost."),G=!0}function Se(){Gx("WebGLRenderer: Context Restored."),G=!1;const R=kt.autoReset,j=Me.enabled,re=Me.autoUpdate,ce=Me.needsUpdate,Z=Me.type;De(),kt.autoReset=R,Me.enabled=j,Me.autoUpdate=re,Me.needsUpdate=ce,Me.type=Z}function He(R){an("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const j=R.target;j.removeEventListener("dispose",at),Ct(j)}function Ct(R){At(R),qe.remove(R)}function At(R){const j=qe.get(R).programs;j!==void 0&&(j.forEach(function(re){ue.releaseProgram(re)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,re,ce,Z,Ae){j===null&&(j=Jt);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,ze=ga(R,j,re,ce,Z);Ve.setMaterial(ce,Ue);let Ie=re.index,Ke=1;if(ce.wireframe===!0){if(Ie=xe.getWireframeAttribute(re),Ie===void 0)return;Ke=2}const et=re.drawRange,Ye=re.attributes.position;let xt=et.start*Ke,Rt=(et.start+et.count)*Ke;Ae!==null&&(xt=Math.max(xt,Ae.start*Ke),Rt=Math.min(Rt,(Ae.start+Ae.count)*Ke)),Ie!==null?(xt=Math.max(xt,0),Rt=Math.min(Rt,Ie.count)):Ye!=null&&(xt=Math.max(xt,0),Rt=Math.min(Rt,Ye.count));const yt=Rt-xt;if(yt<0||yt===1/0)return;V.setup(Z,ce,ze,re,Ie);let qt,Dt=Je;if(Ie!==null&&(qt=ee.get(Ie),Dt=Oe,Dt.setIndex(qt)),Z.isMesh)ce.wireframe===!0?(Ve.setLineWidth(ce.wireframeLinewidth*Ot()),Dt.setMode(H.LINES)):Dt.setMode(H.TRIANGLES);else if(Z.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),Ve.setLineWidth(Qe*Ot()),Z.isLineSegments?Dt.setMode(H.LINES):Z.isLineLoop?Dt.setMode(H.LINE_LOOP):Dt.setMode(H.LINE_STRIP)}else Z.isPoints?Dt.setMode(H.POINTS):Z.isSprite&&Dt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Xo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,Xt=Z._multiDrawCounts,vt=Z._multiDrawCount,Nn=Ie?ee.get(Ie).bytesPerElement:1,dn=qe.get(ce).currentProgram.getUniforms();for(let En=0;En<vt;En++)dn.setValue(H,"_gl_DrawID",En),Dt.render(Qe[En]/Nn,Xt[En])}else if(Z.isInstancedMesh)Dt.renderInstances(xt,yt,Z.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,Qe);Dt.renderInstances(xt,yt,Xt)}else Dt.render(xt,yt)};function ti(R,j,re){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,pi(R,j,re),R.side=Qa,R.needsUpdate=!0,pi(R,j,re),R.side=ra):pi(R,j,re)}this.compile=function(R,j,re=null){re===null&&(re=R),U=$e.get(re),U.init(j),z.push(U),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const ce=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const ze=Ae[Ue];ti(ze,re,Z),ce.add(ze)}else ti(Ae,re,Z),ce.add(Ae)}),U=z.pop(),ce},this.compileAsync=function(R,j,re=null){const ce=this.compile(R,j,re);return new Promise(Z=>{function Ae(){if(ce.forEach(function(Ue){qe.get(Ue).currentProgram.isReady()&&ce.delete(Ue)}),ce.size===0){Z(R);return}setTimeout(Ae,10)}st.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let sn=null;function gn(R){sn&&sn(R)}function Mn(){hi.stop()}function Oi(){hi.start()}const hi=new yv;hi.setAnimationLoop(gn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(R){sn=R,we.setAnimationLoop(R),R===null?hi.stop():hi.start()},we.addEventListener("sessionstart",Mn),we.addEventListener("sessionend",Oi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,j,w),U=$e.get(R,z.length),U.init(j),z.push(U),Xe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Xe,Li,j.reversedDepth),Ee=this.localClippingEnabled,pe=ke.init(this.clippingPlanes,Ee),L=Ne.get(R,I.length),L.init(),I.push(L),we.enabled===!0&&we.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Ns(Ae,j,-1/0,P.sortObjects)}Ns(R,j,0,P.sortObjects),L.finish(),P.sortObjects===!0&&L.sort(J,ye),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Re.addToRenderList(L,R),this.info.render.frame++,pe===!0&&ke.beginShadows();const re=U.state.shadowsArray;Me.render(re,R,j),pe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=L.opaque,Z=L.transmissive;if(U.setupLights(),j.isArrayCamera){const Ae=j.cameras;if(Z.length>0)for(let Ue=0,ze=Ae.length;Ue<ze;Ue++){const Ie=Ae[Ue];Ps(ce,Z,R,Ie)}ut&&Re.render(R);for(let Ue=0,ze=Ae.length;Ue<ze;Ue++){const Ie=Ae[Ue];$o(L,R,Ie,Ie.viewport)}}else Z.length>0&&Ps(ce,Z,R,j),ut&&Re.render(R),$o(L,R,j);w!==null&&C===0&&(ot.updateMultisampleRenderTarget(w),ot.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(P,R,j),V.resetDefaultState(),B=-1,X=null,z.pop(),z.length>0?(U=z[z.length-1],pe===!0&&ke.setGlobalState(P.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function Ns(R,j,re,ce){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ce&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xe);const Ue=ve.update(R),ze=R.material;ze.visible&&L.push(R,Ue,ze,re,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ue=ve.update(R),ze=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ct.copy(Ue.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Xe)),Array.isArray(ze)){const Ie=Ue.groups;for(let Ke=0,et=Ie.length;Ke<et;Ke++){const Ye=Ie[Ke],xt=ze[Ye.materialIndex];xt&&xt.visible&&L.push(R,Ue,xt,re,ct.z,Ye)}}else ze.visible&&L.push(R,Ue,ze,re,ct.z,null)}}const Ae=R.children;for(let Ue=0,ze=Ae.length;Ue<ze;Ue++)Ns(Ae[Ue],j,re,ce)}function $o(R,j,re,ce){const{opaque:Z,transmissive:Ae,transparent:Ue}=R;U.setupLightsView(re),pe===!0&&ke.setGlobalState(P.clippingPlanes,re),ce&&Ve.viewport(te.copy(ce)),Z.length>0&&Ei(Z,j,re),Ae.length>0&&Ei(Ae,j,re),Ue.length>0&&Ei(Ue,j,re),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ps(R,j,re,ce){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[ce.id]===void 0&&(U.state.transmissionRenderTarget[ce.id]=new Rr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ds:da,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ae=U.state.transmissionRenderTarget[ce.id],Ue=ce.viewport||te;Ae.setSize(Ue.z*P.transmissionResolutionScale,Ue.w*P.transmissionResolutionScale);const ze=P.getRenderTarget(),Ie=P.getActiveCubeFace(),Ke=P.getActiveMipmapLevel();P.setRenderTarget(Ae),P.getClearColor(O),q=P.getClearAlpha(),q<1&&P.setClearColor(16777215,.5),P.clear(),ut&&Re.render(re);const et=P.toneMapping;P.toneMapping=Ka;const Ye=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),U.setupLightsView(ce),pe===!0&&ke.setGlobalState(P.clippingPlanes,ce),Ei(R,re,ce),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Rt=0,yt=j.length;Rt<yt;Rt++){const qt=j[Rt],{object:Dt,geometry:Qe,material:Xt,group:vt}=qt;if(Xt.side===ra&&Dt.layers.test(ce.layers)){const Nn=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,Cr(Dt,re,ce,Qe,Xt,vt),Xt.side=Nn,Xt.needsUpdate=!0,xt=!0}}xt===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}P.setRenderTarget(ze,Ie,Ke),P.setClearColor(O,q),Ye!==void 0&&(ce.viewport=Ye),P.toneMapping=et}function Ei(R,j,re){const ce=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Ae=R.length;Z<Ae;Z++){const Ue=R[Z],{object:ze,geometry:Ie,group:Ke}=Ue;let et=Ue.material;et.allowOverride===!0&&ce!==null&&(et=ce),ze.layers.test(re.layers)&&Cr(ze,j,re,Ie,et,Ke)}}function Cr(R,j,re,ce,Z,Ae){R.onBeforeRender(P,j,re,ce,Z,Ae),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(P,j,re,ce,R,Ae),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,P.renderBufferDirect(re,j,ce,Z,R,Ae),Z.side=Qa,Z.needsUpdate=!0,P.renderBufferDirect(re,j,ce,Z,R,Ae),Z.side=ra):P.renderBufferDirect(re,j,ce,Z,R,Ae),R.onAfterRender(P,j,re,ce,Z,Ae)}function pi(R,j,re){j.isScene!==!0&&(j=Jt);const ce=qe.get(R),Z=U.state.lights,Ae=U.state.shadowsArray,Ue=Z.state.version,ze=ue.getParameters(R,Z.state,Ae,j,re),Ie=ue.getProgramCacheKey(ze);let Ke=ce.programs;ce.environment=R.isMeshStandardMaterial?j.environment:null,ce.fog=j.fog,ce.envMap=(R.isMeshStandardMaterial?E:N).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",at),Ke=new Map,ce.programs=Ke);let et=Ke.get(Ie);if(et!==void 0){if(ce.currentProgram===et&&ce.lightsStateVersion===Ue)return xa(R,ze),et}else ze.uniforms=ue.getUniforms(R),R.onBeforeCompile(ze,P),et=ue.acquireProgram(ze,Ie),Ke.set(Ie,et),ce.uniforms=ze.uniforms;const Ye=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=ke.uniform),xa(R,ze),ce.needsLights=el(R),ce.lightsStateVersion=Ue,ce.needsLights&&(Ye.ambientLightColor.value=Z.state.ambient,Ye.lightProbe.value=Z.state.probe,Ye.directionalLights.value=Z.state.directional,Ye.directionalLightShadows.value=Z.state.directionalShadow,Ye.spotLights.value=Z.state.spot,Ye.spotLightShadows.value=Z.state.spotShadow,Ye.rectAreaLights.value=Z.state.rectArea,Ye.ltc_1.value=Z.state.rectAreaLTC1,Ye.ltc_2.value=Z.state.rectAreaLTC2,Ye.pointLights.value=Z.state.point,Ye.pointLightShadows.value=Z.state.pointShadow,Ye.hemisphereLights.value=Z.state.hemi,Ye.directionalShadowMap.value=Z.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ye.spotShadowMap.value=Z.state.spotShadowMap,Ye.spotLightMatrix.value=Z.state.spotLightMatrix,Ye.spotLightMap.value=Z.state.spotLightMap,Ye.pointShadowMap.value=Z.state.pointShadowMap,Ye.pointShadowMatrix.value=Z.state.pointShadowMatrix),ce.currentProgram=et,ce.uniformsList=null,et}function Fi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function xa(R,j){const re=qe.get(R);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function ga(R,j,re,ce,Z){j.isScene!==!0&&(j=Jt),ot.resetTextureUnits();const Ae=j.fog,Ue=ce.isMeshStandardMaterial?j.environment:null,ze=w===null?P.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:As,Ie=(ce.isMeshStandardMaterial?E:N).get(ce.envMap||Ue),Ke=ce.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ye=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,Rt=!!re.morphAttributes.color;let yt=Ka;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=P.toneMapping);const qt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Dt=qt!==void 0?qt.length:0,Qe=qe.get(ce),Xt=U.state.lights;if(pe===!0&&(Ee===!0||R!==X)){const vn=R===X&&ce.id===B;ke.setState(ce,R,vn)}let vt=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Xt.state.version||Qe.outputColorSpace!==ze||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Ie||ce.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==Ke||Qe.vertexTangents!==et||Qe.morphTargets!==Ye||Qe.morphNormals!==xt||Qe.morphColors!==Rt||Qe.toneMapping!==yt||Qe.morphTargetsCount!==Dt)&&(vt=!0):(vt=!0,Qe.__version=ce.version);let Nn=Qe.currentProgram;vt===!0&&(Nn=pi(ce,j,Z));let dn=!1,En=!1,_a=!1;const Gt=Nn.getUniforms(),$t=Qe.uniforms;if(Ve.useProgram(Nn.program)&&(dn=!0,En=!0,_a=!0),ce.id!==B&&(B=ce.id,En=!0),dn||X!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(H,"projectionMatrix",R.projectionMatrix),Gt.setValue(H,"viewMatrix",R.matrixWorldInverse);const en=Gt.map.cameraPosition;en!==void 0&&en.setValue(H,We.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,En=!0,_a=!0)}if(Z.isSkinnedMesh){Gt.setOptional(H,Z,"bindMatrix"),Gt.setOptional(H,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Gt.setValue(H,"boneTexture",vn.boneTexture,ot))}Z.isBatchedMesh&&(Gt.setOptional(H,Z,"batchingTexture"),Gt.setValue(H,"batchingTexture",Z._matricesTexture,ot),Gt.setOptional(H,Z,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",Z._indirectTexture,ot),Gt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",Z._colorsTexture,ot));const Pn=re.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ze.update(Z,re,Nn),(En||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Gt.setValue(H,"receiveShadow",Z.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&($t.envMap.value=Ie,$t.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&j.environment!==null&&($t.envMapIntensity.value=j.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=MA()),En&&(Gt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Qe.needsLights&&on($t,_a),Ae&&ce.fog===!0&&Fe.refreshFogUniforms($t,Ae),Fe.refreshMaterialUniforms($t,ce,D,de,U.state.transmissionRenderTarget[R.id]),zc.upload(H,Fi(Qe),$t,ot)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(zc.upload(H,Fi(Qe),$t,ot),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Gt.setValue(H,"center",Z.center),Gt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Gt.setValue(H,"normalMatrix",Z.normalMatrix),Gt.setValue(H,"modelMatrix",Z.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const vn=ce.uniformsGroups;for(let en=0,Os=vn.length;en<Os;en++){const Ti=vn[en];Le.update(Ti,Nn),Le.bind(Ti,Nn)}}return Nn}function on(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function el(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,j,re){const ce=qe.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),qe.get(R.texture).__webglTexture=j,qe.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:re,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const re=qe.get(R);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const tl=H.createFramebuffer();this.setRenderTarget=function(R,j=0,re=0){w=R,ne=j,C=re;let ce=!0,Z=null,Ae=!1,Ue=!1;if(R){const Ie=qe.get(R);if(Ie.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(H.FRAMEBUFFER,null),ce=!1;else if(Ie.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ot.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Ie.__boundDepthTexture!==Ye){if(Ye!==null&&qe.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const et=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[j])?Z=et[j][re]:Z=et[j],Ae=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?Z=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?Z=et[re]:Z=et,te.copy(R.viewport),oe.copy(R.scissor),le=R.scissorTest}else te.copy(be).multiplyScalar(D).floor(),oe.copy(Ce).multiplyScalar(D).floor(),le=Be;if(re!==0&&(Z=tl),Ve.bindFramebuffer(H.FRAMEBUFFER,Z)&&ce&&Ve.drawBuffers(R,Z),Ve.viewport(te),Ve.scissor(oe),Ve.setScissorTest(le),Ae){const Ie=qe.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,re)}else if(Ue){const Ie=j;for(let Ke=0;Ke<R.textures.length;Ke++){const et=qe.get(R.textures[Ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ke,et.__webglTexture,re,Ie)}}else if(R!==null&&re!==0){const Ie=qe.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,re)}B=-1},this.readRenderTargetPixels=function(R,j,re,ce,Z,Ae,Ue,ze=0){if(!(R&&R.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){Ve.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const Ke=R.textures[ze],et=Ke.format,Ye=Ke.type;if(!Ft.textureFormatReadable(et)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ye)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ce&&re>=0&&re<=R.height-Z&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze),H.readPixels(j,re,ce,Z,it.convert(et),it.convert(Ye),Ae))}finally{const Ke=w!==null?qe.get(w).__webglFramebuffer:null;Ve.bindFramebuffer(H.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,j,re,ce,Z,Ae,Ue,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie)if(j>=0&&j<=R.width-ce&&re>=0&&re<=R.height-Z){Ve.bindFramebuffer(H.FRAMEBUFFER,Ie);const Ke=R.textures[ze],et=Ke.format,Ye=Ke.type;if(!Ft.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze),H.readPixels(j,re,ce,Z,it.convert(et),it.convert(Ye),0);const Rt=w!==null?qe.get(w).__webglFramebuffer:null;Ve.bindFramebuffer(H.FRAMEBUFFER,Rt);const yt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await tM(H,yt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(xt),H.deleteSync(yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,re=0){const ce=Math.pow(2,-re),Z=Math.floor(R.image.width*ce),Ae=Math.floor(R.image.height*ce),Ue=j!==null?j.x:0,ze=j!==null?j.y:0;ot.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Ue,ze,Z,Ae),Ve.unbindTexture()};const Ii=H.createFramebuffer(),va=H.createFramebuffer();this.copyTextureToTexture=function(R,j,re=null,ce=null,Z=0,Ae=null){Ae===null&&(Z!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Z,Z=0):Ae=0);let Ue,ze,Ie,Ke,et,Ye,xt,Rt,yt;const qt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(re!==null)Ue=re.max.x-re.min.x,ze=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,Ke=re.min.x,et=re.min.y,Ye=re.isBox3?re.min.z:0;else{const Pn=Math.pow(2,-Z);Ue=Math.floor(qt.width*Pn),ze=Math.floor(qt.height*Pn),R.isDataArrayTexture?Ie=qt.depth:R.isData3DTexture?Ie=Math.floor(qt.depth*Pn):Ie=1,Ke=0,et=0,Ye=0}ce!==null?(xt=ce.x,Rt=ce.y,yt=ce.z):(xt=0,Rt=0,yt=0);const Dt=it.convert(j.format),Qe=it.convert(j.type);let Xt;j.isData3DTexture?(ot.setTexture3D(j,0),Xt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ot.setTexture2DArray(j,0),Xt=H.TEXTURE_2D_ARRAY):(ot.setTexture2D(j,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),Nn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),dn=H.getParameter(H.UNPACK_SKIP_PIXELS),En=H.getParameter(H.UNPACK_SKIP_ROWS),_a=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,qt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,qt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ye);const Gt=R.isDataArrayTexture||R.isData3DTexture,$t=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Pn=qe.get(R),vn=qe.get(j),en=qe.get(Pn.__renderTarget),Os=qe.get(vn.__renderTarget);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,en.__webglFramebuffer),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let Ti=0;Ti<Ie;Ti++)Gt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,Z,Ye+Ti),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.get(j).__webglTexture,Ae,yt+Ti)),H.blitFramebuffer(Ke,et,Ue,ze,xt,Rt,Ue,ze,H.DEPTH_BUFFER_BIT,H.NEAREST);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||qe.has(R)){const Pn=qe.get(R),vn=qe.get(j);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,Ii),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,va);for(let en=0;en<Ie;en++)Gt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,Z,Ye+en):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,Z),$t?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vn.__webglTexture,Ae,yt+en):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vn.__webglTexture,Ae),Z!==0?H.blitFramebuffer(Ke,et,Ue,ze,xt,Rt,Ue,ze,H.COLOR_BUFFER_BIT,H.NEAREST):$t?H.copyTexSubImage3D(Xt,Ae,xt,Rt,yt+en,Ke,et,Ue,ze):H.copyTexSubImage2D(Xt,Ae,xt,Rt,Ke,et,Ue,ze);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else $t?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xt,Ae,xt,Rt,yt,Ue,ze,Ie,Dt,Qe,qt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Ae,xt,Rt,yt,Ue,ze,Ie,Dt,qt.data):H.texSubImage3D(Xt,Ae,xt,Rt,yt,Ue,ze,Ie,Dt,Qe,qt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,xt,Rt,Ue,ze,Dt,Qe,qt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,xt,Rt,qt.width,qt.height,Dt,qt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,xt,Rt,Ue,ze,Dt,Qe,qt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,dn),H.pixelStorei(H.UNPACK_SKIP_ROWS,En),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_a),Ae===0&&j.generateMipmaps&&H.generateMipmap(Xt),Ve.unbindTexture()},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){ne=0,C=0,w=null,Ve.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const TA=({project:s})=>{if(!s)return se.jsx("div",{children:"Project not found."});const{title:e,category:i,owner:r,duration:l,competencies:c,awards:f,projectDesc:h,youtubeId:m,pdfURL:p,overview:x}=s;let g=null,_=!1;p?(_=!0,g=se.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:p,title:`${e} Project Document`,frameBorder:"0"})):m&&(g=se.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:`https://www.youtube.com/embed/${m}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}));const y=_?{height:"0",paddingTop:"133.33%",position:"relative",width:"100%",backgroundColor:"#f3f4f6",margin:"20px 0",overflow:"hidden"}:{height:"0",paddingTop:"56.25%",position:"relative",width:"100%",backgroundColor:"#f3f4f6",margin:"20px 0",overflow:"hidden"};return se.jsx("div",{className:"detail-page-container",children:se.jsxs("div",{className:"detail-page-content",children:[se.jsx("div",{className:"detail-page-header",children:se.jsx("h1",{className:"detail-page-title",dangerouslySetInnerHTML:{__html:e}})}),se.jsx("div",{className:"detail-page-inner-grid",children:se.jsxs("div",{className:"detail-page-left-area",children:[se.jsxs("div",{className:"detail-page-info-table",children:[h&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Project"}),h]}),se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Category"}),i]}),r&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Owner"}),r]}),l&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Duration"}),l]}),c&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Competencies"}),c.map((M,A)=>se.jsx("span",{className:"competency-tag",children:M},A))]}),f&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Awards"}),f]}),x&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Overview"}),se.jsx("span",{className:"info-content-long",children:x})]})]}),se.jsx("div",{className:"detail-page-youtube-box",style:y,children:g})]})})]})})},AA=[{id:1,title:"Melt 0°C",category:"Interactive Media Art",imageURL:"./melt_IMG.png",youtubeId:"gt-N_yxbw9A",tags:["Research","Ideation","Unity"],projectDesc:"기후변화로 인한 영구동토층 해빙의 위험을 인식시키는 인터랙티브 미디어 아트",owner:"Team6.5 - 유예은 김민지 임서현 장주원 김시은 연수현",duration:"2025.09.02 ~ 2025.11.24",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Unity Development","Custom Shader","Motion Design","Glitch Transition","UI Implementation","Asset Integration & Optimization"],awards:"2025학년도 전공학사과정 졸업작품 ESG 우수작 선정 (ESG 전시 출품)",overview:"[Melt 0℃] 는 얼음이 녹는 ‘변화의 순간’을 상징하며, 영구동토층 해빙이라는 환경적 변화를 통해 인간의 감각과 의식이 깨어나는 과정을 시각적으로 탐구한 인터랙션 미디어 아트입니다. 영구동토층 해빙과 감수성의 확산을 감각적으로 연결하여, 관객이 몰입형 체험 속에서 기후 위기를 직접 인식하도록 설계되었습니다. 이를 통해 기후 감수성을 확산시키고, 개인의 행동 변화를 유도하는 것을 목표로 합니다."},{id:2,title:"<영구동토층 : 깨어나는 땅의 기억>",category:"Video - Interactive Media Art Prototype",imageURL:"./Melt_1.png",youtubeId:"JLtdKFgQtNU",tags:["Research","Narrative Flow Design","Photoshop","AE","HTML/CSS","JS"],projectDesc:"기후 변화로 인한 환경 붕괴와 그 속에서 발견되는 희망을 탐구하는 인터랙티브 미디어 아트 기획서/프로토타입",owner:"Team6.5 - 유예은 장주원 연수현",duration:"2025.03.03 ~ 2025.06.11",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],awards:"2025 커뮤니케이션디자인 국제 공모전 입선, 2025 2학년 1학기 학과 연합 PT",overview:"<영구동토층 : 깨어나는 땅의 기억>은 기후 변화로 인한 환경 붕괴와 그 속에서 발견되는 희망을 탐구하는 인터랙티브 미디어 아트 작품입니다. 관객은 녹아내리는 얼음벽, 고립된 생태계, 잊혀진 문명의 유물 등디스토피아적 요소들과 상호작용하며 작은 희망의 씨앗을 찾게 됩니다. 작품은 관객의 선택에 따라 변화하는 환경을 통해 '디스토피아 속에서도 희망은 존재한다'는 메시지를 전달합니다. 희망을 키우는 과정에서, 관객은 어두운 미래 속에서 빛을 발견하게 됩니다."},{id:3,title:"<심연>",category:"(XR) short-form drama",imageURL:"./XR_IMG.png",youtubeId:"Tc6m-3mFRFU",tags:["Story Flow Design","AE","Prop Selection & Production"],projectDesc:"외도와 고독으로 억압된 주인공의 심연을 언리얼 엔진 기반의 환상 세계로 구현하여, 관객에게 내면의 분노와 해방을 경험하게 하는 몰입형 심리 스릴러 XR 콘텐츠.",owner:"어른아이 - 문주은 이수영 연수현 장주원 한아름",duration:"2025.03.03 ~ 2025.06.11",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"숏폼 드라마 <심연>은 외도한 남자친구와 헤어진 후 깊은 고독에 빠진 주인공이 꿈(환상) 속에서 겪는 내면의 갈등과 해방을 다룹니다. 어두운 동굴에서 전 남자친구를 총으로 쏴 살해하는 환상을 겪은 후, 몽환적이면서도 으슥한 무덤 공간에서 그의 관을 마주합니다. 주인공은 국화꽃을 던지고 당당히 떠나는 행위를 통해 심리적 억압을 해소하며, 현실로 돌아온 후 전 남자친구의 사망 소식을 듣게 됩니다. 이처럼 현실의 고난과 환상 속의 극복을 결합하여, 주인공의 자기 해방 과정을 시적으로 구현한 몰입형 콘텐츠입니다."},{id:4,title:"Sensor-Based Interactive Display ",category:"Video - Interactive Media Art Prototype",imageURL:"./SBIMA_IMG.png",youtubeId:"q0UtBDAsNUs",tags:["MVP Prototyping","Premiere Pro"],projectDesc:"스페인 길거리 쓰레기 악취 문제 해결을 위해, 분리수거 행동에 따라 긍정/부정 그래픽 피드백을 제공하는 미디어월 부착 인터랙티브 쓰레기통 솔루션 제안",owner:"Team 7 - 신아연, 연수현, 김기주, 최영호",duration:"2025.06.18 ~ 2025.07.10",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],awards:"Innovation Prize (장려상)",overview:"스페인 길거리 쓰레기 악취 문제 해결을 위해 실감 미디어(인터렉티브 미디어월)를 활용한 솔루션을 제안합니다. 쓰레기통 상단에 설치된 미디어월에 액체류 분류 배출 여부에 따라 긍정적/부정적 그래픽 피드백을 즉각 제공하여, 시민들의 올바른 분리수거 행동을 유도하고 도시 환경을 개선하는 MVP를 구현했습니다."},{id:5,title:"Eco Fairy Friend",category:"Project Proposal - App Ideation",imageURL:"./EFF_IMG.png",tags:["Ideation","Logo & Icon Design(AI)"],pdfURL:"./EcoFairyFriend_PPT.pdf",projectDesc:"솔방울 요정(Eco Fairy Friend)과 함께 AR, 드론 등 기술을 활용하여 일상 속 친환경 미션을 수행하고 보상을 얻는 환경 보호 게이미피케이션 앱 개발 제안",owner:"Group 4 - 김인수, 연수현, Jarne Jost, Rebeka Szalay",duration:"2025.07.01 ~ 2025.07.04",overview:"산에서 발견한 솔방울에서 영감을 얻어, 솔방울 속 요정이 자연의 모습과 역사를 보여주며 쓰레기 줍기나 나무 심기 같은 친환경 행동(eco-actions)을 유도하고 보상을 제공하는 모바일 기반의 기술 솔루션을 제안합니다. 이를 통해 사용자는 마법적이고 놀이 같은 경험을 하며 실제 환경에 긍정적인 변화를 만드는 사람으로 성장하는 것을 목표로 합니다."},{id:6,title:"WRAPTIQUE",category:"Project Proposal - Service Planning",description:"예술적 감각과 친환경 소재가 결합된 맞춤형 패키지 디자인 서비스 제안서",imageURL:"./Wraptique_IMG.png",tags:["Startup Planning"],overview:"프로젝트 개요 6"},{id:7,title:"My Shelf AR",description:"AR 기술을 활용한 구매내역 연동 책장 어플리케이션 제안서",imageURL:"./MyShelfAR_IMG.png",tags:["Trand Research","Ideation"],overview:"프로젝트 개요 7"},{id:8,title:"RoundAround - 02 : Wild Flower Hill",category:"Promotional Video",projectDesc:"RoundAround 브랜드 디퓨저 02 : Wild Flower Hill의 홍보 영상",imageURL:"./RoundAround_IMG.png",youtubeId:"f1juw_DRXBY",tags:["AE"],owner:"연수현",duration:"2024.10.30 ~ 2025.12.18",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"숲에 정취에서 영감을 받아 만들어진 라운드어라운드 브랜드의 포레스트 디퓨저 라인 중 02 와일드 플라워 힐 제품의 특징과 분위기를 소개한다. 에프터이펙트를 활용하여 영상 제작/편집을 진행하였다."},{id:9,title:"Rosa Novella",category:"Promotional Video - Perfume",projectDesc:"산타마리아노벨라 브랜드의 Rosa Novella 향수 홍보 영상",imageURL:"./RosaNovella_IMG.png",youtubeId:"98VdgmHv-jI",tags:["AE","Adobe Illustrator 2024"],owner:"연수현",duration:"2024.09.05 ~ 2025.10.23",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"피렌체 산타 마리아 노벨라 정원에 퍼지는 5월의 향기를 표현한 향수인 산타마리아노벨라의 로사노벨라 향수를 홍보하는 영상입니다. 고풍스럽고 클래식한 분위기의 패키지와 제품 디자인에서 고전적인 미감을 유지하고 예술품 같은 느낌을 준다고 판단하여 스케치 느낌의 2D 일러스트, 빈티지 색감, 클래식 사운드, 고전 느낌의 폰트 등을 활용했습니다."},{id:10,title:"The Spa Lodge",category:"Video - Space Design Concept Video",projectDesc:"3D MAX를 이용한 모델링/렌더링을 통해 자연 경관 속에 위치한 2층 구조의 개방형 Spa Lodge를 구현하고, 1층 거실/식사 공간과 2층 현대식 욕실 및 야외 스파/휴식 공간을 시각적으로 제시한 공간 디자인 프로젝트.",imageURL:"./TSL_IMG.png",youtubeId:"wEGLbMSx30w",tags:["3D MAX","AE"],owner:"연수현",duration:"2024.09.02 ~ 2024.12.07",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"자연으로 둘러싸인 2층 Spa Lodge를 3D MAX로 디자인했습니다. 1층은 자연 야외로 개방되어 거실 및 식사 공간으로 활용되며, 2층에는 실내 현대식 욕실과 자연 경관이 보이는 야외 스파 및 소파/테이블 휴식 공간을 배치하여 자연 속 힐링 공간을 보여줍니다."},{id:11,title:"Caffeine Nightmare",category:"3D Game",imageURL:"./CN_IMG.png",tags:["Unity","MagicaVoxel"],overview:"프로젝트 개요 11"},{id:12,title:"냉장고를 지켜라!",category:"3D Game",imageURL:"./SSG_IMG.png",tags:["Unity","MagicaVoxel"],overview:"프로젝트 개요 12"},{id:13,title:"Hamster Delivery",category:"Web Game",description:"새벽배송을 인한 과대포장 사회 문제를 인식시키는 웹 게임",imageURL:"./HD_IMG.png",tags:["Adobe Illustrator 2024","HTML/CSS","JS"],overview:"프로젝트 개요 13"}],RA=()=>{const s=AA.find(e=>e.id===1);return se.jsx(TA,{project:s})},wA=[{id:"main",title:"HOME",label:"Home"},{id:"about",title:"ABOUT",label:"About"},{id:"skills",title:"SKILLS",label:"Skills"},{id:"works",title:"WORKS",label:"Works"},{id:"contact",title:"CONTACT",label:"Contact"}],CA={Planning:{label:"Planning",items:[{title:"Word",content:["문서 앞 커버 페이지를 제작 및 목차 텍스트 정렬, 이미지 삽입 등 문서의 기본 구조를 체계적으로 구성할 수 있습니다.","머리글 추가를 할 수 있고, 텍스트의 굵기, 폰트, 크기 조절 기능을 활용하여 시각적 계층 구조를 확립하고 중요한 정보를 효과적으로 강조할 수 있습니다."]},{title:"PowerPoint",content:["이미지 및 테마 적용을 통해 시각 자료를 제작하고, 도형 움직이기와 같은 애니메이션 효과를 추가할 수 있습니다.","하이퍼링크 기능을 활용하여 발표 중 특정 이미지나 도형 클릭 시 원하는 페이지나 외부 링크로 즉시 이동하는 인터랙티브한 프레젠테이션을 구성할 수 있습니다."]},{title:"Notion",content:["프로젝트 공동 페이지를 활용하여 팀원들과 주차별 과제 업로드 및 실시간 협업을 원활하게 진행할 수 있습니다.","개인 용도로 문서를 체계적으로 분류하고 작성하여 지식 관리 및 일정 관리에 활용할 수 있습니다."]},{title:"Figma",content:["피그마의 협업 기능을 활용하여 팀원들과 실시간 공동 작업을 할 수 있습니다.","PPT 프레젠테이션 및 간단한 2D 그래픽 제작을 할 수 있습니다.","이미지의 노출, 대비, 채도 등의 조절을 통한 색감 보정이 가능합니다."]}]},"Graphics & Video":{label:"Graphics & Video",items:[{title:"Photoshop",content:["클리핑 마스크를 활용해 도형 안에 이미지를 삽입하거나 블렌딩 모드(스크린, 발광 닷지)를 통해 시각적 분위기를 조절할 수 있습니다.","이미지 누끼 추출 후 다른 배경에 자연스럽게 합성하고, 색감이 어우러지도록 보정할 수 있습니다.","스팟 복구 브러시와 복제 도장을 사용해 피부 결과 잔머리를 정리하고, 픽셀 유동화 기능으로 눈·코·입·턱선 등 얼굴 형태를 자연스럽게 보정할 수 있습니다."]},{title:"Illustrator",content:["브러시를 활용해 2D 광고 영상에 필요한 그래픽 요소를 제작해본 경험이 있습니다.","펜 툴과 베지어 곡선을 활용해 다양한 형태의 벡터 일러스트를 제작할 수 있습니다.","2D 포스터 제작 프로젝트를 진행하며 레이아웃 구성 및 디자인 작업을 수행한 경험이 있습니다.","패스파인더 기능을 사용해 오브젝트의 합치기, 빼기, 나누기 등 형태 편집 작업을 자유롭게 다룰 수 있습니다.","2D 햄스터 캐릭터를 직접 디자인·제작해본 경험이 있습니다."]},{title:"Premiere Pro",content:["영상 소스의 컷 편집 및 텍스트 삽입을 할 수 있습니다.","음악 및 효과음의 사운드 크기 조절을 할 수 있습니다.","색감 보정 기능을 활용하여 원하는 영상 톤을 연출하고 디졸브, 교차 디졸브 등 화면 전환 효과를 적용할 수 있습니다."]},{title:"After Effect",content:["그래픽 요소에 이동, 회전, 크기 조절 등의 핵심 모션 값을 적용하여 애니메이션을 추가할 수 있습니다.","마스크 효과를 활용하여 특정 영역만 노출시키거나, 트래킹을 통해 움직이는 대상에 필터나 효과를 적용할 수 있습니다.","텍스트 입력 효과 및 원하는 경로를 따르는 모션, 카메라 이동 등을 구현할 수 있습니다."]},{title:"3D MAX",content:["실내 인테리어 디자인에 필요한 가구 및 다양한 오브젝트를 모델링하고 텍스쳐 작업을 할 수 있습니다.","모델링된 오브젝트에 회전, 이동, 축소, 확대, 기울임 등의 기본적인 3D 애니메이션을 적용하여 동적인 연출을 구현할 수 있습니다.","기본 텍스쳐 조정 및 이미지 맵핑을 활용하여 최종 렌더링을 통해 고품질의 영상 결과물을 제작할 수 있습니다."]}]},Development:{label:"Development",items:[{title:"HTML, CSS",content:["시청각, 이동성, 인지도를 고려한 웹 접근성 준수 고려사항을 숙지하고, 이를 바탕으로 페이지를 구현할 수 있습니다.","화면 확대 도구 사용 시에도 레이아웃이 깨지지 않도록 페이지를 제작합니다.","CSS의 keyframe을 활용하여 애니메이션 효과를 구현할 수 있습니다."]},{title:"JavaScript",content:["DOM 조작을 통해 CSS 속성을 동적으로 변경하여 웹 페이지 인터랙티브한 기능을 구현할 수 있습니다.","사용자 이벤트(클릭, 스크롤 등)와 연계하여 CSS 애니메이션을 제어하고, 시작과 종료 타이밍을 정교하게 조절할 수 있습니다."]},{title:"React",content:["React Hooks(useState, useEffect 등)를 활용하여 상태(State)를 효율적으로 관리하고 데이터 흐름을 제어합니다.","여러 뷰를 유기적으로 연결하는 단일 페이지 애플리케이션(SPA)을 구축할 수 있습니다."]},{title:"Unity",content:["Unity에서 AI Navigation을 활용해 오브젝트가 플레이어나 특정 타깃을 추적하도록 구현할 수 있습니다.","원하는 오브젝트에 원하는 위치에 Instantiation·Destroy 등의 기능을 추가할 수 있고 아이템 수 나 생명을 표시하는 UI 등을 추가해 3D 슈팅 게임 구조를 만들 수 있습니다.","C# 스크립트를 기반으로 커스텀 셰이더를 제작하여 포인트 클라우드 시스템에서 반짝거리는 파티클로 나타나게 해본 경험이 있습니다.","애니메이션 기능을 활용해 트리거 발생 시 색상 변화를 구현해본 경험이 있습니다.","튜토리얼을 참고하여 화면에 노이즈 효과를 적용해본 경험이 있습니다.","스텐실(Buffer) 기법을 통한 레이어 기반 가림 처리를 할 수 있습니다.","Meta Quest 3의 공간 인식 기능을 활용해 실제 환경의 장애물을 인지하고, 그 안에서 특정 오브젝트가 카메라(사용자)를 추적하도록 구현해본 경험이 있습니다."]}]}},Dg=[{id:1,title:"Melt 0°C",category:"Interactive Media Art",imageURL:"./melt_IMG.png",youtubeId:"gt-N_yxbw9A",tags:["Research","Ideation","Unity"],projectDesc:"기후변화로 인한 영구동토층 해빙의 위험을 인식시키는 인터랙티브 미디어 아트",owner:"Team6.5 - 유예은 김민지 임서현 장주원 김시은 연수현",duration:"2025.09.02 ~ 2025.11.24",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Unity Development","Custom Shader","Motion Design","Glitch Transition","UI Implementation","Asset Integration & Optimization"],awards:"2025학년도 전공학사과정 졸업작품 ESG 우수작 선정 (ESG 전시 출품)",overview:"[Melt 0℃] 는 얼음이 녹는 ‘변화의 순간’을 상징하며, 영구동토층 해빙이라는 환경적 변화를 통해 인간의 감각과 의식이 깨어나는 과정을 시각적으로 탐구한 인터랙션 미디어 아트입니다. 영구동토층 해빙과 감수성의 확산을 감각적으로 연결하여, 관객이 몰입형 체험 속에서 기후 위기를 직접 인식하도록 설계되었습니다. 이를 통해 기후 감수성을 확산시키고, 개인의 행동 변화를 유도하는 것을 목표로 합니다."},{id:2,title:"<영구동토층 : 깨어나는 땅의 기억>",category:"Video - Interactive Media Art Prototype",imageURL:"./Melt_1.png",youtubeId:"JLtdKFgQtNU",tags:["Research","Narrative Flow Design","Photoshop","AE","HTML/CSS","JS"],projectDesc:"기후 변화로 인한 환경 붕괴와 그 속에서 발견되는 희망을 탐구하는 인터랙티브 미디어 아트 기획서/프로토타입",owner:"Team6.5 - 유예은 장주원 연수현",duration:"2025.03.03 ~ 2025.06.11",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],awards:"2025 커뮤니케이션디자인 국제 공모전 입선, 2025 2학년 1학기 학과 연합 PT",overview:"<영구동토층 : 깨어나는 땅의 기억>은 기후 변화로 인한 환경 붕괴와 그 속에서 발견되는 희망을 탐구하는 인터랙티브 미디어 아트 작품입니다. 관객은 녹아내리는 얼음벽, 고립된 생태계, 잊혀진 문명의 유물 등디스토피아적 요소들과 상호작용하며 작은 희망의 씨앗을 찾게 됩니다. 작품은 관객의 선택에 따라 변화하는 환경을 통해 '디스토피아 속에서도 희망은 존재한다'는 메시지를 전달합니다. 희망을 키우는 과정에서, 관객은 어두운 미래 속에서 빛을 발견하게 됩니다."},{id:3,title:"<심연>",category:"(XR) short-form drama",imageURL:"./XR_IMG.png",youtubeId:"Tc6m-3mFRFU",tags:["Story Flow Design","AE","Prop Selection & Production"],projectDesc:"외도와 고독으로 억압된 주인공의 심연을 언리얼 엔진 기반의 환상 세계로 구현하여, 관객에게 내면의 분노와 해방을 경험하게 하는 몰입형 심리 스릴러 XR 콘텐츠.",owner:"어른아이 - 문주은 이수영 연수현 장주원 한아름",duration:"2025.03.03 ~ 2025.06.11",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"숏폼 드라마 <심연>은 외도한 남자친구와 헤어진 후 깊은 고독에 빠진 주인공이 꿈(환상) 속에서 겪는 내면의 갈등과 해방을 다룹니다. 어두운 동굴에서 전 남자친구를 총으로 쏴 살해하는 환상을 겪은 후, 몽환적이면서도 으슥한 무덤 공간에서 그의 관을 마주합니다. 주인공은 국화꽃을 던지고 당당히 떠나는 행위를 통해 심리적 억압을 해소하며, 현실로 돌아온 후 전 남자친구의 사망 소식을 듣게 됩니다. 이처럼 현실의 고난과 환상 속의 극복을 결합하여, 주인공의 자기 해방 과정을 시적으로 구현한 몰입형 콘텐츠입니다."},{id:4,title:"Sensor-Based Interactive Display ",category:"Video - Interactive Media Art Prototype",imageURL:"./SBIMA_IMG.png",youtubeId:"q0UtBDAsNUs",tags:["MVP Prototyping","Premiere Pro"],projectDesc:"스페인 길거리 쓰레기 악취 문제 해결을 위해, 분리수거 행동에 따라 긍정/부정 그래픽 피드백을 제공하는 미디어월 부착 인터랙티브 쓰레기통 솔루션 제안",owner:"Group 7 - 신아연, 연수현, 김기주, 최영호",duration:"2025.06.18 ~ 2025.07.10",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],awards:"Innovation Prize",overview:"스페인 길거리 쓰레기 악취 문제 해결을 위해 실감 미디어(인터렉티브 미디어월)를 활용한 솔루션을 제안합니다. 쓰레기통 상단에 설치된 미디어월에 액체류 분류 배출 여부에 따라 긍정적/부정적 그래픽 피드백을 즉각 제공하여, 시민들의 올바른 분리수거 행동을 유도하고 도시 환경을 개선하는 MVP를 구현했습니다."},{id:5,title:"Eco Fairy Friend",category:"Project Proposal - App Ideation",imageURL:"./EFF_IMG.png",tags:["Ideation","Logo & Icon Design(AI)"],pdfURL:"./EcoFairyFriend_PPT.pdf",projectDesc:"솔방울 요정(Eco Fairy Friend)과 함께 AR, 드론 등 기술을 활용하여 일상 속 친환경 미션을 수행하고 보상을 얻는 환경 보호 게이미피케이션 앱 개발 제안",owner:"Group 4 - 김인수, 연수현, Jarne Jost, Rebeka Szalay",duration:"2025.07.01 ~ 2025.07.04",overview:"산에서 발견한 솔방울에서 영감을 얻어, 솔방울 속 요정이 자연의 모습과 역사를 보여주며 쓰레기 줍기나 나무 심기 같은 친환경 행동(eco-actions)을 유도하고 보상을 제공하는 모바일 기반의 기술 솔루션을 제안합니다. 이를 통해 사용자는 마법적이고 놀이 같은 경험을 하며 실제 환경에 긍정적인 변화를 만드는 사람으로 성장하는 것을 목표로 합니다."},{id:6,title:"WRAPTIQUE",category:"Project Proposal - Service Planning",description:"예술적 감각과 친환경 소재가 결합된 맞춤형 패키지 디자인 서비스 제안서",imageURL:"./Wraptique_IMG.png",tags:["Startup Planning"],overview:"프로젝트 개요 6"},{id:7,title:"My Shelf AR",description:"AR 기술을 활용한 구매내역 연동 책장 어플리케이션 제안서",imageURL:"./MyShelfAR_IMG.png",tags:["Trand Research","Ideation"],overview:"프로젝트 개요 7"},{id:8,title:"RoundAround - 02 : Wild Flower Hill",category:"Promotional Video",projectDesc:"RoundAround 브랜드 디퓨저 02 : Wild Flower Hill의 홍보 영상",imageURL:"./RoundAround_IMG.png",youtubeId:"f1juw_DRXBY",tags:["AE"],owner:"연수현",duration:"2024.10.30 ~ 2025.12.18",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"숲에 정취에서 영감을 받아 만들어진 라운드어라운드 브랜드의 포레스트 디퓨저 라인 중 02 와일드 플라워 힐 제품의 특징과 분위기를 소개한다. 에프터이펙트를 활용하여 영상 제작/편집을 진행하였다."},{id:9,title:"Rosa Novella",category:"Promotional Video - Perfume",projectDesc:"산타마리아노벨라 브랜드의 Rosa Novella 향수 홍보 영상",imageURL:"./RosaNovella_IMG.png",youtubeId:"98VdgmHv-jI",tags:["AE","Adobe Illustrator 2024"],owner:"연수현",duration:"2024.09.05 ~ 2025.10.23",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"피렌체 산타 마리아 노벨라 정원에 퍼지는 5월의 향기를 표현한 향수인 산타마리아노벨라의 로사노벨라 향수를 홍보하는 영상입니다. 고풍스럽고 클래식한 분위기의 패키지와 제품 디자인에서 고전적인 미감을 유지하고 예술품 같은 느낌을 준다고 판단하여 스케치 느낌의 2D 일러스트, 빈티지 색감, 클래식 사운드, 고전 느낌의 폰트 등을 활용했습니다."},{id:10,title:"The Spa Lodge",category:"Video - Space Design Concept Video",projectDesc:"3D MAX를 이용한 모델링/렌더링을 통해 자연 경관 속에 위치한 2층 구조의 개방형 Spa Lodge를 구현하고, 1층 거실/식사 공간과 2층 현대식 욕실 및 야외 스파/휴식 공간을 시각적으로 제시한 공간 디자인 프로젝트.",imageURL:"./TSL_IMG.png",youtubeId:"wEGLbMSx30w",tags:["3D MAX","AE"],owner:"연수현",duration:"2024.09.02 ~ 2024.12.07",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],overview:"자연으로 둘러싸인 2층 Spa Lodge를 3D MAX로 디자인했습니다. 1층은 자연 야외로 개방되어 거실 및 식사 공간으로 활용되며, 2층에는 실내 현대식 욕실과 자연 경관이 보이는 야외 스파 및 소파/테이블 휴식 공간을 배치하여 자연 속 힐링 공간을 보여줍니다."},{id:11,title:"Caffeine Nightmare",category:"3D Game",imageURL:"./CN_IMG.png",tags:["Unity","MagicaVoxel"],overview:"프로젝트 개요 11"},{id:12,title:"냉장고를 지켜라!",category:"3D Game",imageURL:"./SSG_IMG.png",tags:["Unity","MagicaVoxel"],overview:"프로젝트 개요 12"},{id:13,title:"Hamster Delivery",category:"Web Game",description:"새벽배송을 인한 과대포장 사회 문제를 인식시키는 웹 게임",imageURL:"./HD_IMG.png",tags:["Adobe Illustrator 2024","HTML/CSS","JS"],overview:"프로젝트 개요 13"}],Lc={header:{position:"fixed",top:0,right:0,left:0,zIndex:50,backgroundColor:"transparent",transition:"none"},headerContent:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2vw 0"},navMenu:{display:"flex",backgroundColor:"rgba(220,220,255, 0.62)",borderRadius:"10vw",padding:"0.6vw 1.5vw",gap:"2vw"},navButton:{fontSize:"1vw",fontWeight:350,textTransform:"capitalize",color:"#ffffffff",padding:"0.2vw 0",background:"none",border:"none",cursor:"pointer",transition:"color 150ms",whiteSpace:"nowrap"}},DA=({scrollToSection:s,sections:e})=>{const i=Array.isArray(e)?e:[],r=()=>{s("main")};return se.jsx("header",{style:Lc.header,children:se.jsx("div",{style:Lc.headerContent,children:se.jsx("nav",{style:Lc.navMenu,children:i.map(l=>se.jsx("button",{onClick:()=>l.id==="main"?r():s(l.id),className:"nav-button",style:Lc.navButton,children:l.label},l.id))})})})},UA=({scrollToSection:s})=>{const e=he.useRef(null),i=he.useRef(!1);return he.useEffect(()=>{if(!e.current||i.current)return;i.current=!0;let r,l,c,f;const h="YEONSUHYEON";let m=1500;const p=100,x=[],g=[],_=[],y={};let M=!1,A=new Pt;const S=e.current;function v(B){const X=document.createElement("canvas"),te=64;X.width=te,X.height=te;const oe=X.getContext("2d");oe.fillStyle="rgba(0, 0, 0, 0)",oe.fillRect(0,0,te,te),oe.fillStyle="#CEEAB6",oe.font="bold 50px Arial",oe.textAlign="center",oe.textBaseline="middle",oe.fillText(B,te/2,te/2+5);const le=new NM(X);return le.needsUpdate=!0,le}function L(){for(let de=0;de<h.length;de++){const D=h[de];y[D]||(y[D]=v(D))}const B=new Pi,X=new Float32Array(m*3),te=new Float32Array(m*3),oe=new Float32Array(m),le=[];let O=0,q=0;for(let de=0;de<m;de++){const D=Math.random(),J=Math.random(),ye=D*Math.PI*2,be=Math.acos(2*J-1),Ce=Math.cbrt(Math.random())*p,Be=Ce*Math.sin(be)*Math.cos(ye),Q=Ce*Math.sin(be)*Math.sin(ye),pe=Ce*Math.cos(be),Ee=de*3;X[Ee]=Be,X[Ee+1]=Q,X[Ee+2]=pe,x.push(Be,Q,pe),g.push(Be,Q,pe),te[Ee]=.808,te[Ee+1]=.918,te[Ee+2]=.714,oe[de]=3+Math.random()*2;const Xe=h[O];_.push(Xe),O=(O+1)%h.length}B.setAttribute("position",new ei(X,3)),B.setAttribute("color",new ei(te,3)),B.setAttribute("size",new ei(oe,1));let Y=0;for(let de=0;de<m;de++){const D=_[de];if(de===0||_[de]!==_[de-1]){de>0&&(B.addGroup(q,de-q,Y),Y++),q=de;const J=new vv({size:8,map:y[D],vertexColors:!0,transparent:!0,blending:Gd,sizeAttenuation:!0,alphaTest:.5});le.push(J)}}B.addGroup(q,m-q,Y),f=new LM(B,le),r.add(f)}function U(){r=new RM,c=new EA({antialias:!0,alpha:!0}),c.setSize(S.clientWidth,S.clientHeight),c.domElement.style.position="absolute",c.domElement.style.top="0",c.domElement.style.left="0",c.domElement.style.zIndex="10",S.appendChild(c.domElement),l=new fi(75,S.clientWidth/S.clientHeight,.1,1e3),l.position.z=200,L(),window.addEventListener("resize",I,!1),S.addEventListener("mousemove",z,!1),S.addEventListener("mousedown",P,!1),S.addEventListener("mouseup",G,!1)}function I(){!l||!c||!S||(l.aspect=S.clientWidth/S.clientHeight,l.updateProjectionMatrix(),c.setSize(S.clientWidth,S.clientHeight))}function z(B){const X=S.getBoundingClientRect();A.x=(B.clientX-X.left)/X.width*2-1,A.y=-((B.clientY-X.top)/X.height)*2+1}function P(){M=!0,ne()}function G(){M=!1,C()}function ne(){const B=f.geometry.attributes.position.array;for(let X=0;X<m;X++){const te=X*3;g[te]=B[te]+(Math.random()-.5)*500,g[te+1]=B[te+1]+(Math.random()-.5)*500,g[te+2]=B[te+2]+(Math.random()-.5)*500}}function C(){for(let B=0;B<m;B++){const X=B*3;g[X]=x[X],g[X+1]=x[X+1],g[X+2]=x[X+2]}}function w(){if(!f||!c||!r||!l)return;requestAnimationFrame(w);const B=f.geometry.attributes.position.array,X=f.geometry.attributes.size.array;f.rotation.y+=.001;for(let te=0;te<m;te++){const oe=te*3,le=x[oe],O=x[oe+1],q=x[oe+2],Y=Math.sqrt(le*le+O*O+q*q),J=Math.sin(Y*.05+performance.now()*.003)*5,ye=Math.sqrt(le*le+O*O+q*q),be=ye>0?(ye+J)/ye:1,Ce=le*be,Be=O*be,Q=q*be;let pe,Ee,Xe;M?(pe=g[oe]-B[oe],Ee=g[oe+1]-B[oe+1],Xe=g[oe+2]-B[oe+2],B[oe]+=pe*.05,B[oe+1]+=Ee*.05,B[oe+2]+=Xe*.05,X[te]=10):(pe=Ce-B[oe],Ee=Be-B[oe+1],Xe=Q-B[oe+2],B[oe]+=pe*.05,B[oe+1]+=Ee*.05,B[oe+2]+=Xe*.05,X[te]=3+Math.random()*2)}f.geometry.attributes.position.needsUpdate=!0,f.geometry.attributes.color.needsUpdate=!0,f.geometry.attributes.size.needsUpdate=!0,c.render(r,l)}return U(),w(),()=>{i.current=!1,window.removeEventListener("resize",I),S&&(S.removeEventListener("mousemove",z),S.removeEventListener("mousedown",P),S.removeEventListener("mouseup",G)),c&&(c.dispose(),c.domElement&&S.removeChild(c.domElement)),r&&r.clear()}},[s]),se.jsx("div",{ref:e,style:{width:"100%",height:"100vh",position:"relative",backgroundColor:"transparent"},children:se.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})})},LA=({scrollToSection:s})=>se.jsxs("section",{id:"main",className:"main-section",style:{paddingTop:0,paddingBottom:0,position:"relative",backgroundColor:"#000000",overflow:"hidden"},children:[se.jsx(UA,{scrollToSection:s}),se.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:20,pointerEvents:"none",color:"#FEDAF1",padding:"2vw 3vw",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[se.jsxs("div",{style:{alignSelf:"flex-start",paddingLeft:0},children:[se.jsx("h1",{style:{fontSize:"4vw",fontWeight:"800",margin:0,lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"Atelier"}),se.jsx("h1",{style:{fontSize:"4vw",fontWeight:"800",margin:0,lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left",paddingBottom:"1vw"},children:"Suhyeon"}),se.jsx("h2",{style:{fontSize:"1.2vw",fontWeight:"330",margin:0,lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"The Desk of Thought Pieces"})]}),se.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",width:"100%",paddingTop:"19vw",paddingBottom:"4vw",pointerEvents:"none"},children:[se.jsxs("div",{style:{alignSelf:"flex-start",maxWidth:"40%",paddingLeft:0},children:[se.jsx("h3",{style:{fontSize:"2vw",fontWeight:"600",margin:"0 0 0.5rem 0",lineHeight:"1",fontFamily:'"Noto Sans", sans-serif',color:"#FEDAF1",textAlign:"left"},children:"New Media"}),se.jsx("h2",{style:{fontSize:"2vw",fontWeight:"600",margin:"0 0 1rem 0",lineHeight:"1",fontFamily:'"Noto Sans", sans-serif',color:"#FEDAF1",textAlign:"left"},children:"Contents Creator"}),se.jsx("p",{style:{fontSize:"1vw",fontWeight:"380",margin:"0 0 0.5rem 0",lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"Designing experiences that move people at the intersection of emotion and technology."}),se.jsx("p",{style:{fontSize:"1vw",fontWeight:"380",margin:"0 0 0.5rem 0",lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"I treat new media not just as a tool, but as a medium for emotion, planning content that delivers positive shift and inspiration."})]}),se.jsx("div",{style:{alignSelf:"flex-end",paddingRight:"3vw",paddingBottom:0,color:"#FEDAF1",pointerEvents:"auto"},children:se.jsx("h3",{style:{fontSize:"2vw",fontWeight:"600",margin:0,fontFamily:'"Noto Sans", sans-serif',textAlign:"right",pointerEvents:"auto",paddingRight:"3vw",color:"#FEDAF1"},children:"Welcome to my workspace"})})]})]})]}),Av=Xc.forwardRef(({id:s,label:e,children:i},r)=>se.jsx("section",{id:s,ref:r,className:"content-section",children:se.jsx("div",{className:"content-wrapper",children:se.jsxs("h2",{className:"section-title",children:[e,se.jsx("div",{className:"section-content",children:i})]})})}));Av.displayName="ContentSection";const Rv=Xc.forwardRef(({id:s,ref:e})=>{const i=[{id:"identity",title:"Identitiy",imageURL:"./TestGraphic.png"},{id:"what_i_create",title:"What I Create",imageURL:"./TestGraphic.png"},{id:"how_i_work",title:"How I Work",imageURL:"./TestGraphic.png"},{id:"communication",title:"Communication",imageURL:"./TestGraphic.png"}];return se.jsxs("section",{id:s,ref:e,className:"content-section",style:{paddingTop:"10vw",paddingBottom:"5vw",minHeight:"100vh",backgroundColor:"#000000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",color:"#FEDAF1"},children:[se.jsxs("div",{className:"about-header-text",children:[se.jsx("h2",{className:"about-title",children:"Pieces"}),se.jsx("p",{className:"about-subtitle",children:"That Define Suhyeon"}),se.jsx("p",{className:"about-intro",children:"수현의 성향과 관심사를 소개합니다."})]}),se.jsx("div",{className:"about-card-grid",children:i.map(r=>se.jsxs("div",{className:"about-card",children:[se.jsx("h3",{className:"about-card-title",children:r.title}),se.jsx("div",{className:"about-card-image-box",children:se.jsx("img",{src:r.imageURL,alt:r.title,className:"about-card-image"})})]},r.id))})]})});Rv.displayName="AboutSection";const wv=Xc.forwardRef(({id:s,label:e,sectionsData:i},r)=>{const[l,c]=he.useState("Planning"),f=i[l]?.items||[],h=Object.keys(i);return se.jsx("section",{id:s,ref:r,className:"content-section",style:{paddingLeft:"3vw",paddingRight:"3vw",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:se.jsxs("div",{className:"skills-wrapper",children:[se.jsx("h2",{className:"skills-section-title",children:e}),se.jsx("div",{className:"tab-menu",children:h.map(m=>se.jsx("button",{onClick:()=>c(m),className:`tab-button ${l===m?"active-tab":""}`,children:m},m))}),se.jsx("div",{className:"tab-content-area",children:f.map((m,p)=>se.jsxs("div",{className:"skill-card",children:[se.jsx("h3",{className:"skill-card-title",children:m.title}),se.jsx("div",{className:"skill-card-content",children:m.content.map((x,g)=>se.jsx("p",{children:x},g))})]},p))})]})})});wv.displayName="SkillsSection";const NA=({project:s,openModal:e})=>{const i=s.tags||[];return se.jsx("div",{className:"project-card-container",children:se.jsxs("div",{className:"project-card",onClick:()=>e(s),children:[se.jsx("div",{className:"project-image-box",children:se.jsx("img",{src:s.imageURL,alt:s.title,className:"project-image"})}),se.jsxs("div",{className:"project-info",children:[se.jsx("h3",{className:"project-title",children:s.title}),se.jsx("p",{className:"project-category",children:s.category})]}),se.jsx("div",{style:{padding:"0 10px 10px",display:"flex",flexWrap:"wrap",gap:"5px"},children:i.map((r,l)=>se.jsx("div",{className:"project-card-badge",children:r},l))})]})})},Cv=Xc.forwardRef(({id:s,label:e,worksData:i,openModal:r},l)=>se.jsx("section",{id:s,ref:l,className:"content-section",style:{paddingLeft:"3vw",paddingRight:"3vw",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:se.jsxs("div",{className:"works-wrapper",children:[se.jsx("h2",{className:"works-section-title",children:e}),se.jsx("div",{className:"project-grid",children:i.map(c=>se.jsx(NA,{project:c,openModal:r},c.id))})]})}));Cv.displayName="WorksSection";const PA=({project:s,onClose:e,navigate:i})=>{if(!s)return null;const{title:r,category:l,owner:c,duration:f,competencies:h,awards:m,projectDesc:p,youtubeId:x,pdfURL:g,overview:_="프로젝트에 대한 추가 개요 설명이 여기에 들어갑니다."}=s;let y=null,M=!1;g?(M=!0,y=se.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:g,title:`${r} Project Document`,frameBorder:"0"})):x?y=se.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:`https://www.youtube.com/embed/${x}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):y=se.jsx("span",{className:"media-placeholder",children:"(미디어 콘텐츠 없음)"});const A=M?{height:"0",paddingTop:"133.33%",position:"relative",width:"100%",backgroundColor:"#f3f4f6",margin:"20px 0",overflow:"hidden"}:{height:"0",paddingTop:"56.25%",position:"relative",width:"100%",backgroundColor:"#f3f4f6",margin:"20px 0",overflow:"hidden"};return se.jsx("div",{className:"modal-backdrop",children:se.jsxs("div",{className:"modal-content-new",children:[se.jsxs("div",{className:"modal-sticky-header",children:[se.jsx("h1",{className:"modal-left-title",dangerouslySetInnerHTML:{__html:r}}),se.jsx("button",{className:"modal-close-button-new",onClick:e,children:"×"})]}),se.jsx("div",{className:"modal-inner-grid",children:se.jsxs("div",{className:"modal-left-area",children:[se.jsxs("div",{className:"modal-info-table",children:[p&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Project"}),p]}),se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Category"}),l]}),c&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Owner"}),c]}),f&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Duration"}),f]}),h&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Competencies"}),h.map((S,v)=>se.jsx("span",{className:"competency-tag",children:S},v))]}),m&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Awards"}),m]}),_&&se.jsxs("p",{children:[se.jsx("span",{className:"info-label",children:"Overview"}),se.jsx("span",{className:"info-content-long",children:_})]})]}),se.jsx("div",{className:"modal-youtube-box",style:A,children:y}),s.id===1&&se.jsx("button",{className:"more-button",onClick:()=>{i("/melt-detail"),e()},children:"more"})]})})]})})},OA=()=>{const[s,e]=he.useState(!1),[i,r]=he.useState(null),l=Hg(),c={main:he.useRef(null),about:he.useRef(null),skills:he.useRef(null),works:he.useRef(null),contact:he.useRef(null)};he.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[s]);const f=he.useCallback(p=>{const x=Dg.find(g=>g.id===p.id)||p;r(x),e(!0)},[]),h=he.useCallback(()=>{e(!1),r(null)},[]),m=he.useCallback(p=>{if(p==="main"){window.scrollTo({top:0,behavior:"smooth"});return}const x=c[p];if(x&&x.current){const _=window.innerWidth*10/100,M=x.current.getBoundingClientRect().top+window.pageYOffset-_;window.scrollTo({top:M,behavior:"smooth"})}},[c]);return se.jsxs(se.Fragment,{children:[se.jsx("style",{children:`
          /* 전역 스타일 */
          html { scroll-behavior: smooth; }
          .app-container {
            font-family: 'Noto Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            min-height: 100vh;
            background-color: #F9F8F6;
          }
          /* Header & Navigation */
          .nav-button:hover { color: #FFFFFF; } 
          .nav-button:focus { outline: none; }
          
          /* Main Section */
          .main-section {
            min-height: 100vh;
            padding-bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: #000000;
            position: relative; 
            overflow: hidden; 
          }
          
          /* CSS 배경 입자 효과를 위한 엘리먼트 */
          .css-star-background {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1; 
              pointer-events: none;
              
              /* 밝은 배경에 대비되는 어두운 box-shadow 색상 */
              box-shadow: 
                  10px 10px 1px #555, 
                  50px 150px 0.5px #333, 
                  150px 200px 1.5px #111, 
                  250px 50px 0.8px #444,
                  300px 350px 1px #222,
                  400px 10px 0.5px #444,
                  550px 250px 1.2px #111,
                  650px 80px 0.7px #555,
                  750px 400px 1px #444,
                  850px 180px 0.9px #111;
              
              /* 애니메이션 적용 */
              animation: move-stars 200s linear infinite;
              width: 110%; 
              height: 110%;
          }
          
          /* 키프레임 애니메이션 정의 */
          @keyframes move-stars {
              from { transform: translate(0, 0); }
              to { transform: translate(-10%, -10%); }
          }
          
          .main-content-box { display: none; } 
          
          .main-button {
            background-color: #76CFFF;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-size: 1.125rem;
            font-weight: 600;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
            transition: all 300ms;
            border: none;
            cursor: pointer;
            z-index: 20; 
          }
          .main-button:hover { background-color: #4338ca; transform: scale(1.05); }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          /* Content Sections */
          .content-section {
            min-height: 100vh;
            /* 고정 헤더에 의해 콘텐츠가 가려지는 것을 방지하기 위해 상단 패딩 추가 */
            padding-top: 10vw; 
            padding-bottom: 5vw;
            background-color: #F9F8F6;
            padding-left: 3vw;
          }
          .content-wrapper { max-width: 1600px; margin-left: auto; margin-right: auto; margin-top: 1.5rem; }
          .section-title { font-size: 2.7vw; font-weight: normal; color: #696967; }
          .section-slogan { font-size: 1.7vw; font-weight: 400; color: #B36BFF; line-height: 1.6; margin: 0.5rem 0; padding-left: 0; }
          .section-slogan_small { font-size: 1vw; font-weight: 400; color: #696967; line-height: 1.6; margin: 0.5rem 0; padding-left: 0; }
          .section-slogan_small_wrapper { padding-top: 0.5rem; }
          
          /* ⭐⭐⭐ About Section Styles (새로 추가) ⭐⭐⭐ */
          .content-section#about {
            /* 기존 content-section 오버라이드 */
            padding-top: 10vw;
            background-color: #000000;
            color: #FEDAF1;
            text-align: center; 
            padding-right: 3vw;
          }
          .about-header-text {
              margin-bottom: 5vw;
              padding-top: 2vw;
          }
          .about-title {
              font-size: 3.5vw; 
              font-weight: 800;
              margin: 0;
              line-height: 1.2;
              color: #FEDAF1;
              font-family: 'Noto Sans', sans-serif;
          }
          .about-subtitle {
              font-size: 1.2vw;
              font-weight: 400;
              margin: 0;
              color: #FEDAF1; /* 민트 계열 색상으로 주제색 적용 */
              font-family: 'Noto Sans', sans-serif;
          }
          .about-intro {
              font-size: 1vw;
              font-weight: 300;
              margin-top: 1vw;
              color: #FEDAF1; /* 라벤더 계열 색상으로 주제색 적용 */
              font-family: 'Noto Sans', sans-serif;
          }
          .about-card-grid {
              display: flex;
              justify-content: center;
              gap: 3vw; /* 카드 간격 조정 */
              width: 90%;
              max-width: 1400px;
              margin: 0 auto;
          }
          .about-card {
              width: 40%; 
              min-width: 15vw; 
              aspect-ratio: 1 / 1.7; /* 카드 비율 설정 (세로 길게) */
              background-color: #1A1A1A; /* 카드 배경은 짙은 회색 */
              border-radius: 0.8vw;
              padding: 1.5vw;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
              display: flex;
              flex-direction: column;
              alignItems: center;
              transition: transform 0.3s, box-shadow 0.3s;
          }
          .about-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
          }
          .about-card-title {
              font-size: 3vw;
              font-weight: 400;
              color: #ffffffff; /* 민트색 */
              margin: 0 0 1vw 0;
              padding-bottom: 0.5vw;
              // border-bottom: 1px solid rgba(182, 231, 183, 0.3);
              word-break: break-word;
              text-align: left;
              padding-left: 1vw;
              padding-right: 1vw;
          }
          .about-card-image-box {
              width: 100%;
              padding-top: 100%; /* 정사각형 비율 유지 */
              position: relative;
              overflow: hidden;
              /* 카드 디자인과 동일하게 이미지 컨테이너에도 라운딩 적용 */
              border-radius: 10px; 
              // background-color: #000000; 
          }
          .about-card-image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover; /* 이미지가 박스에 맞게 채워지도록 설정 */
          }
          


          /* Skills Section */
          .skills-section-title { font-size: 2.7vw; font-weight: normal; color: #1f2937; margin-bottom: 2rem; padding-left: 0; margin-top: 2rem; }
          .skills-wrapper { display: flex; flex-direction: column; width: 100%; max-width: 1600px; margin: 0px auto; }
          .tab-menu { display: flex; gap: 10px; margin-bottom: 30px; }
          .tab-button {
            padding: 8px 20px;
            border: 1px solid #ddd;
            border-radius: 9999px;
            background-color: transparent;
            color: #696967;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1vw;
            font-weight: 500;
            text-transform: capitalize;
          }
          .tab-button.active-tab { background-color: #76CFFF; color: #fff; border-color: #A99EFE; }
          .tab-content-area { display: flex; flex-wrap: wrap; gap: 1vw; width: 100%; }
          .skill-card {
            flex: 1 1 calc(33.333% - 5vw);
            min-width: 280px;
            padding: 1.5vw;
            background-color: #F0EDFD;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s;
            display: flex;
            flex-direction: column;
          }
          .skill-card:hover { transform: translateY(-5px); }
          .skill-card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #696967;
            margin-top: 0;
            margin-bottom: 15px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
          }
          .skill-card-content p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #4b5563;
            margin: 0 0 10px 0;
          }
          /* Works Section */
          .works-wrapper { width: 100%; max-width: 1600px; margin: 0 auto; }
          .works-section-title { font-size: 2.7vw; font-weight: normal; color: #1f2937; margin-bottom: 2rem; padding-left: 0; margin-top: 2rem; }
          .project-grid { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 1.5rem; padding-right: 3vw; }
          .project-card-container { width: calc(33.333% - 14px); min-width: 300px; }
          .project-card {
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: all 0.3s;
            cursor: pointer;
            overflow: hidden;
            background-color: #fff;
            padding: 10px;
            display: flex;
            flex-direction: column;
          }
          .project-card-badge {
            background-color: #F0EDFD;
            color: #B36BFF;
            padding: 0.3vw 0.5vw;
            border-radius: 0.5vw;
            font-size: 0.8vw;
            margin-right: 5px;
            margin-bottom: 5px;
            display: inline-block;
            width: auto;
            flex-shrink: 0;
            font-weight: 500;
          }
          .project-card:hover { transform: scale(1.03); box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); }
          .project-image-box {
            width: 100%;
            padding-top: 65%;
            background-color: #f3f4f6;
            margin-bottom: 10px;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
          }
          .project-image-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ccc;
            font-size: 1.5rem;
          }
          .project-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }
          .project-info { padding: 5px 10px 10px 10px; text-align: center; flex-grow: 0; }
          .project-title { font-size: 1.1rem; font-weight: 600; margin: 0; color: #1f2937; }
          .project-category { font-size: 0.9rem; color: #696967; margin: 5px 0 0 0; }
          /* Modal */
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 3vw;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .modal-content-new {
            background-color: #fff;
            border-radius: 1vw;
            width: 70vw;
            max-width: 100vw;
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            position: relative;
            padding-top: 0;
          }
          .modal-content-new::-webkit-scrollbar { width: 0.5vw; height: 0.5vw; }
          .modal-content-new::-webkit-scrollbar-track { background: transparent; border-radius: 1vw; }
          .modal-sticky-header {
            position: sticky;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5vw 1.5vw 1.5vw 2.8vw;
            background-color: #fff;
            z-index: 10;
            border-bottom: 1px solid #eee;
          }
          .modal-inner-grid {
            gap: 2vw;
            padding: 2vw 4vw 4vw 3vw;
          }
          .modal-close-button-new {
            background: none;
            border: none;
            font-size: 2.5vw;
            line-height: 1;
            cursor: pointer;
            color: #696967;
            padding: 0;
          }
          .modal-close-button-new:hover { color: #B36BFF; }
          .modal-left-area { display: flex; flex-direction: column; gap: 2vw; }
          .modal-left-title { font-size: 3rem; font-weight: 800; color: #1f2937; margin: 0; }
          .modal-info-table {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 1rem;
            line-height: 1.5;
          }
          .modal-info-table p {
            margin: 0;
            align-items: flex-start;
            color: #4b5563;
            flex-wrap: wrap;
            display: flex;
            gap: 0.5vw;
          }
          .modal-info-table p:has(.competency-tag) { margin-bottom: 0.8vw; }
          .info-label { font-weight: 500; color: #1f2937; width: 5vw; flex-shrink: 0; margin-right: 3vw; }
          .competency-tag {
            background-color: #F0EDFD;
            color: #B36BFF;
            padding: 0.3vw 0.5vw;
            border-radius: 0.3vw;
            font-size: 0.8vw;
            margin: 0.2vw 0.5vw 0.2vw 0;
            display: inline-block;
            width: auto;
            flex-shrink: 0;
          }
          .media-placeholder { font-size: 1.5rem; color: #aaaaaa; z-index: 1; }
          .modal-youtube-box {
            height: 0;
            padding-top: 56.25%;
            width: 100%;
            background-color: #f3f4f6;
            position: relative;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            overflow: hidden;
          }
          .more-button {
            background-color: #B36BFF;
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            font-size: 1rem;
            font-weight: 600;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 300ms;
            border: none;
            cursor: pointer;
            margin-top: 1rem;
            align-self: center;
          }
          .more-button:hover { background-color: #4338ca; transform: scale(1.05); }
          @media (max-width: 900px) {
            .modal-inner-grid { grid-template-columns: 1fr; padding: 30px 5vw; }
            .modal-content-new { width: 90vw; max-height: 90vh; }
            .modal-left-title { font-size: 2.5rem; }
            .modal-close-button-new { font-size: 8vw; }
          }
          /* Contact & Footer */
          .contact-info a { color: #696967; text-decoration: underline; }
          .contact-info a:hover { color: #B36BFF; }
          .footer {
            padding-top: 2rem;
            padding-bottom: 2rem;
            background-color: #111827;
            text-align: center;
            color: #9ca3af;
            font-size: 0.875rem;
          }
        `}),se.jsxs("div",{className:"app-container",children:[se.jsx(DA,{scrollToSection:m,sections:wA}),se.jsxs("main",{children:[se.jsx(LA,{scrollToSection:m}),se.jsx(Rv,{id:"about",ref:c.about}),se.jsx(wv,{id:"skills",label:"SKILLS",ref:c.skills,sectionsData:CA}),se.jsx(Cv,{id:"works",label:"Projects & Works",ref:c.works,worksData:Dg,openModal:f}),se.jsxs(Av,{id:"contact",label:"Contact",ref:c.contact,children:[se.jsx("div",{className:"section-slogan_small",children:"함께 프로젝트를 진행하거나 아래 연락처로 연락주세요."}),se.jsxs("div",{className:"contact-info",children:[se.jsxs("div",{className:"section-slogan_small",children:["Email: ",se.jsx("a",{href:"mailto:yeonsh030@gmail.com",children:"yeonsh030@gmail.com"})]}),se.jsxs("div",{className:"section-slogan_small",children:["Instagram: ",se.jsx("a",{href:"https://www.instagram.com/s_u_hy/",children:"@s_u_hy"})]})]})]})]}),se.jsx("footer",{className:"footer",children:"© 2025 SuhyY Portfolio. All rights reserved."})]}),s&&se.jsx(PA,{project:i,onClose:h,navigate:l})]})},FA=()=>se.jsxs(Ny,{children:[se.jsx(zd,{path:"/",element:se.jsx(OA,{})}),se.jsx(zd,{path:"/melt-detail",element:se.jsx(RA,{})})]});VS.createRoot(document.getElementById("root")).render(se.jsx(he.StrictMode,{children:se.jsx(nb,{basename:"/react-portfolio",children:se.jsx(FA,{})})}));
