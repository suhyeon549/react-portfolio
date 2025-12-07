(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function GS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ud={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx;function VS(){if(Rx)return Bo;Rx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var wx;function kS(){return wx||(wx=1,ud.exports=VS()),ud.exports}var R=kS(),fd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function XS(){if(Cx)return ft;Cx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(U,$,ye){this.props=U,this.context=$,this.refs=A,this.updater=ye||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(U,$,ye){this.props=U,this.context=$,this.refs=A,this.updater=ye||y}var N=L.prototype=new v;N.constructor=L,M(N,S.prototype),N.isPureReactComponent=!0;var F=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function V(U,$,ye,be,Ce,ze){return ye=ze.ref,{$$typeof:s,type:U,key:$,ref:ye!==void 0?ye:null,props:ze}}function ie(U,$){return V(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function C(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ye){return $[ye]})}var B=/\/+/g;function j(U,$){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):$.toString(36)}function ne(){}function le(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ne,ne):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ce(U,$,ye,be,Ce){var ze=typeof U;(ze==="undefined"||ze==="boolean")&&(U=null);var J=!1;if(U===null)J=!0;else switch(ze){case"bigint":case"string":case"number":J=!0;break;case"object":switch(U.$$typeof){case s:case e:J=!0;break;case x:return J=U._init,ce(J(U._payload),$,ye,be,Ce)}}if(J)return Ce=Ce(U),J=be===""?"."+j(U,0):be,F(Ce)?(ye="",J!=null&&(ye=J.replace(B,"$&/")+"/"),ce(Ce,$,ye,"",function(Xe){return Xe})):Ce!=null&&(D(Ce)&&(Ce=ie(Ce,ye+(Ce.key==null||U&&U.key===Ce.key?"":(""+Ce.key).replace(B,"$&/")+"/")+J)),$.push(Ce)),1;J=0;var pe=be===""?".":be+":";if(F(U))for(var Ee=0;Ee<U.length;Ee++)be=U[Ee],ze=pe+j(be,Ee),J+=ce(be,$,ye,ze,Ce);else if(Ee=_(U),typeof Ee=="function")for(U=Ee.call(U),Ee=0;!(be=U.next()).done;)be=be.value,ze=pe+j(be,Ee++),J+=ce(be,$,ye,ze,Ce);else if(ze==="object"){if(typeof U.then=="function")return ce(le(U),$,ye,be,Ce);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return J}function I(U,$,ye){if(U==null)return U;var be=[],Ce=0;return ce(U,be,"","",function(ze){return $.call(ye,ze,Ce++)}),be}function q(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(ye){(U._status===0||U._status===-1)&&(U._status=1,U._result=ye)},function(ye){(U._status===0||U._status===-1)&&(U._status=2,U._result=ye)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function he(){}return ft.Children={map:I,forEach:function(U,$,ye){I(U,function(){$.apply(this,arguments)},ye)},count:function(U){var $=0;return I(U,function(){$++}),$},toArray:function(U){return I(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=S,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=L,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ft.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},ft.cache=function(U){return function(){return U.apply(null,arguments)}},ft.cloneElement=function(U,$,ye){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var be=M({},U.props),Ce=U.key,ze=void 0;if($!=null)for(J in $.ref!==void 0&&(ze=void 0),$.key!==void 0&&(Ce=""+$.key),$)!O.call($,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&$.ref===void 0||(be[J]=$[J]);var J=arguments.length-2;if(J===1)be.children=ye;else if(1<J){for(var pe=Array(J),Ee=0;Ee<J;Ee++)pe[Ee]=arguments[Ee+2];be.children=pe}return V(U.type,Ce,void 0,void 0,ze,be)},ft.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ft.createElement=function(U,$,ye){var be,Ce={},ze=null;if($!=null)for(be in $.key!==void 0&&(ze=""+$.key),$)O.call($,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ce[be]=$[be]);var J=arguments.length-2;if(J===1)Ce.children=ye;else if(1<J){for(var pe=Array(J),Ee=0;Ee<J;Ee++)pe[Ee]=arguments[Ee+2];Ce.children=pe}if(U&&U.defaultProps)for(be in J=U.defaultProps,J)Ce[be]===void 0&&(Ce[be]=J[be]);return V(U,ze,void 0,void 0,null,Ce)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:h,render:U}},ft.isValidElement=D,ft.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:q}},ft.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ft.startTransition=function(U){var $=H.T,ye={};H.T=ye;try{var be=U(),Ce=H.S;Ce!==null&&Ce(ye,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(he,Y)}catch(ze){Y(ze)}finally{H.T=$}},ft.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ft.use=function(U){return H.H.use(U)},ft.useActionState=function(U,$,ye){return H.H.useActionState(U,$,ye)},ft.useCallback=function(U,$){return H.H.useCallback(U,$)},ft.useContext=function(U){return H.H.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U,$){return H.H.useDeferredValue(U,$)},ft.useEffect=function(U,$,ye){var be=H.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(U,$)},ft.useId=function(){return H.H.useId()},ft.useImperativeHandle=function(U,$,ye){return H.H.useImperativeHandle(U,$,ye)},ft.useInsertionEffect=function(U,$){return H.H.useInsertionEffect(U,$)},ft.useLayoutEffect=function(U,$){return H.H.useLayoutEffect(U,$)},ft.useMemo=function(U,$){return H.H.useMemo(U,$)},ft.useOptimistic=function(U,$){return H.H.useOptimistic(U,$)},ft.useReducer=function(U,$,ye){return H.H.useReducer(U,$,ye)},ft.useRef=function(U){return H.H.useRef(U)},ft.useState=function(U){return H.H.useState(U)},ft.useSyncExternalStore=function(U,$,ye){return H.H.useSyncExternalStore(U,$,ye)},ft.useTransition=function(){return H.H.useTransition()},ft.version="19.1.1",ft}var Dx;function Gh(){return Dx||(Dx=1,fd.exports=XS()),fd.exports}var se=Gh();const eu=GS(se);var dd={exports:{}},Ho={},hd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux;function jS(){return Ux||(Ux=1,(function(s){function e(I,q){var Y=I.length;I.push(q);e:for(;0<Y;){var he=Y-1>>>1,U=I[he];if(0<l(U,q))I[he]=q,I[Y]=U,Y=he;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var q=I[0],Y=I.pop();if(Y!==q){I[0]=Y;e:for(var he=0,U=I.length,$=U>>>1;he<$;){var ye=2*(he+1)-1,be=I[ye],Ce=ye+1,ze=I[Ce];if(0>l(be,Y))Ce<U&&0>l(ze,be)?(I[he]=ze,I[Ce]=Y,he=Ce):(I[he]=be,I[ye]=Y,he=ye);else if(Ce<U&&0>l(ze,Y))I[he]=ze,I[Ce]=Y,he=Ce;else break e}}return q}function l(I,q){var Y=I.sortIndex-q.sortIndex;return Y!==0?Y:I.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,g=null,_=3,y=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function F(I){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=I)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function H(I){if(A=!1,F(I),!M)if(i(m)!==null)M=!0,O||(O=!0,j());else{var q=i(p);q!==null&&ce(H,q.startTime-I)}}var O=!1,V=-1,ie=5,D=-1;function C(){return S?!0:!(s.unstable_now()-D<ie)}function B(){if(S=!1,O){var I=s.unstable_now();D=I;var q=!0;try{e:{M=!1,A&&(A=!1,L(V),V=-1),y=!0;var Y=_;try{t:{for(F(I),g=i(m);g!==null&&!(g.expirationTime>I&&C());){var he=g.callback;if(typeof he=="function"){g.callback=null,_=g.priorityLevel;var U=he(g.expirationTime<=I);if(I=s.unstable_now(),typeof U=="function"){g.callback=U,F(I),q=!0;break t}g===i(m)&&r(m),F(I)}else r(m);g=i(m)}if(g!==null)q=!0;else{var $=i(p);$!==null&&ce(H,$.startTime-I),q=!1}}break e}finally{g=null,_=Y,y=!1}q=void 0}}finally{q?j():O=!1}}}var j;if(typeof N=="function")j=function(){N(B)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,le=ne.port2;ne.port1.onmessage=B,j=function(){le.postMessage(null)}}else j=function(){v(B,0)};function ce(I,q){V=v(function(){I(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(I){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var Y=_;_=q;try{return I()}finally{_=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=_;_=I;try{return q()}finally{_=Y}},s.unstable_scheduleCallback=function(I,q,Y){var he=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?he+Y:he):Y=he,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,I={id:x++,callback:q,priorityLevel:I,startTime:Y,expirationTime:U,sortIndex:-1},Y>he?(I.sortIndex=Y,e(p,I),i(m)===null&&I===i(p)&&(A?(L(V),V=-1):A=!0,ce(H,Y-he))):(I.sortIndex=U,e(m,I),M||y||(M=!0,O||(O=!0,j()))),I},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(I){var q=_;return function(){var Y=_;_=q;try{return I.apply(this,arguments)}finally{_=Y}}}})(pd)),pd}var Nx;function WS(){return Nx||(Nx=1,hd.exports=jS()),hd.exports}var md={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function qS(){if(Lx)return Un;Lx=1;var s=Gh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Un.flushSync=function(m){var p=f.T,x=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=x,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.1.1",Un}var Px;function YS(){if(Px)return md.exports;Px=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),md.exports=qS(),md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox;function ZS(){if(Ox)return Ho;Ox=1;var s=WS(),e=Gh(),i=YS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),t;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,T=u.child;T;){if(T===a){b=!0,a=u,o=d;break}if(T===o){b=!0,o=u,a=d;break}T=T.sibling}if(!b){for(T=d.child;T;){if(T===a){b=!0,a=d,o=u;break}if(T===o){b=!0,o=d,a=u;break}T=T.sibling}if(!b)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:le(t.type)||"Memo";case ie:n=t._payload,t=t._init;try{return le(t(n))}catch{}}return null}var ce=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},he=[],U=-1;function $(t){return{current:t}}function ye(t){0>U||(t.current=he[U],he[U]=null,U--)}function be(t,n){U++,he[U]=t.current,t.current=n}var Ce=$(null),ze=$(null),J=$(null),pe=$(null);function Ee(t,n){switch(be(J,n),be(ze,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tx(n),t=nx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Ce),be(Ce,t)}function Xe(){ye(Ce),ye(ze),ye(J)}function je(t){t.memoizedState!==null&&be(pe,t);var n=Ce.current,a=nx(n,t.type);n!==a&&(be(ze,t),be(Ce,a))}function ct(t){ze.current===t&&(ye(Ce),ye(ze)),pe.current===t&&(ye(pe),Po._currentValue=Y)}var $t=Object.prototype.hasOwnProperty,ut=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,G=s.unstable_shouldYield,mt=s.unstable_requestPaint,st=s.unstable_now,Ft=s.unstable_getCurrentPriorityLevel,Ve=s.unstable_ImmediatePriority,kt=s.unstable_UserBlockingPriority,We=s.unstable_NormalPriority,ot=s.unstable_LowPriority,P=s.unstable_IdlePriority,E=s.log,te=s.unstable_setDisableYieldValue,xe=null,ve=null;function fe(t){if(typeof E=="function"&&te(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(xe,t)}catch{}}var Fe=Math.clz32?Math.clz32:ke,Le=Math.log,$e=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(Le(t)/$e|0)|0}var Me=256,Re=4194304;function Ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Je(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~d,o!==0?u=Ze(o):(b&=T,b!==0?u=Ze(b):a||(a=T&~t,a!==0&&(u=Ze(a))))):(T=o&~d,T!==0?u=Ze(T):b!==0?u=Ze(b):a||(a=o&~t,a!==0&&(u=Ze(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Ne(){var t=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function we(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,z=t.expirationTimes,ee=t.hiddenUpdates;for(a=b&~a;0<a;){var me=31-Fe(a),_e=1<<me;T[me]=0,z[me]=-1;var ae=ee[me];if(ae!==null)for(ee[me]=null,me=0;me<ae.length;me++){var re=ae[me];re!==null&&(re.lane&=-536870913)}a&=~_e}o!==0&&Se(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function Se(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function He(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ct(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:yx(t.type))}function ii(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var on=Math.random().toString(36).slice(2),_n="__reactFiber$"+on,Tn="__reactProps$"+on,zi="__reactContainer$"+on,xi="__reactEvents$"+on,ks="__reactListeners$"+on,cl="__reactHandles$"+on,Xs="__reactResources$"+on,Ri="__reactMarker$"+on;function Or(t){delete t[_n],delete t[Tn],delete t[xi],delete t[ks],delete t[cl]}function gi(t){var n=t[_n];if(n)return n;for(var a=t.parentNode;a;){if(n=a[zi]||a[_n]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=sx(t);t!==null;){if(a=t[_n])return a;t=sx(t)}return n}t=a,a=t.parentNode}return null}function Bi(t){if(t=t[_n]||t[zi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ba(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Xs];return n||(n=t[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(t){t[Ri]=!0}var ul=new Set,fl={};function Hi(t,n){Ea(t,n),Ea(t+"Capture",n)}function Ea(t,n){for(fl[t]=n,t=0;t<n.length;t++)ul.add(n[t])}var w=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Z={},oe={};function ue(t){return $t.call(oe,t)?!0:$t.call(Z,t)?!1:w.test(t)?oe[t]=!0:(Z[t]=!0,!1)}function K(t,n,a){if(ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ue(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Be,Ie;function Ke(t){if(Be===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Be=n&&n[1]||"",Ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+Ie}var et=!1;function qe(t,n){if(!t||et)return"";et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(re){var ae=re}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(re){ae=re}t.call(_e.prototype)}}else{try{throw Error()}catch(re){ae=re}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(re){if(re&&ae&&typeof re.stack=="string")return[re.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],T=d[1];if(b&&T){var z=b.split(`
`),ee=T.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ee.length)for(o=z.length-1,u=ee.length-1;1<=o&&0<=u&&z[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ee[u]){var me=`
`+z[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ke(a):""}function xt(t){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return Ke("Activity");default:return""}}function Rt(t){try{var n="";do n+=xt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dt(t){var n=Wt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Dt(t))}function Xt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Wt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var On=/[\n"\\]/g;function pn(t){return t.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,o,u,d,b,T){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+yt(n)):t.value!==""+yt(n)&&(t.value=""+yt(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?Gt(t,b,yt(n)):a!=null?Gt(t,b,yt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+yt(T):t.removeAttribute("name")}function Ta(t,n,a,o,u,d,b,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function Gt(t,n,a){n==="number"&&vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Fn(t,n,a){if(n!=null&&(n=""+yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+yt(a):""}function Sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function tn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var js=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wi(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||js.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function np(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wi(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&wi(t,d,n[d])}function lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return Hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Ir=null;function ip(t){var n=Bi(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(r(90));An(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Xt(o)}break e;case"textarea":Fn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var fu=!1;function ap(t,n,a){if(fu)return t(n,a);fu=!0;try{var o=t(n);return o}finally{if(fu=!1,(Fr!==null||Ir!==null)&&(Ql(),Fr&&(n=Fr,t=Ir,Ir=Fr=null,ip(n),t)))for(n=0;n<t.length;n++)ip(t[n])}}function Ws(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Gi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){du=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{du=!1}var Aa=null,hu=null,hl=null;function rp(){if(hl)return hl;var t,n=hu,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return hl=u.slice(t,1<o?1-o:void 0)}function pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function sp(){return!1}function Bn(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ml:sp,this.isPropagationStopped=sp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Bn(rr),Ys=x({},rr,{view:0,detail:0}),Gv=Bn(Ys),pu,mu,Zs,gl=x({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(pu=t.screenX-Zs.screenX,mu=t.screenY-Zs.screenY):mu=pu=0,Zs=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),op=Bn(gl),Vv=x({},gl,{dataTransfer:0}),kv=Bn(Vv),Xv=x({},Ys,{relatedTarget:0}),xu=Bn(Xv),jv=x({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=Bn(jv),qv=x({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=Bn(qv),Zv=x({},rr,{data:0}),lp=Bn(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jv[t])?!!n[t]:!1}function gu(){return $v}var e_=x({},Ys,{key:function(t){if(t.key){var n=Kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t_=Bn(e_),n_=x({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Bn(n_),i_=x({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),a_=Bn(i_),r_=x({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s_=Bn(r_),o_=x({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=Bn(o_),c_=x({},rr,{newState:0,oldState:0}),u_=Bn(c_),f_=[9,13,27,32],vu=Gi&&"CompositionEvent"in window,Ks=null;Gi&&"documentMode"in document&&(Ks=document.documentMode);var d_=Gi&&"TextEvent"in window&&!Ks,up=Gi&&(!vu||Ks&&8<Ks&&11>=Ks),fp=" ",dp=!1;function hp(t,n){switch(t){case"keyup":return f_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function h_(t,n){switch(t){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(dp=!0,fp);case"textInput":return t=n.data,t===fp&&dp?null:t;default:return null}}function p_(t,n){if(zr)return t==="compositionend"||!vu&&hp(t,n)?(t=rp(),hl=hu=Aa=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!m_[t.type]:n==="textarea"}function xp(t,n,a,o){Fr?Ir?Ir.push(o):Ir=[o]:Fr=o,n=ic(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function x_(t){K0(t,0)}function vl(t){var n=ba(t);if(Xt(n))return t}function gp(t,n){if(t==="change")return n}var vp=!1;if(Gi){var _u;if(Gi){var Su="oninput"in document;if(!Su){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Su=typeof _p.oninput=="function"}_u=Su}else _u=!1;vp=_u&&(!document.documentMode||9<document.documentMode)}function Sp(){Qs&&(Qs.detachEvent("onpropertychange",yp),Js=Qs=null)}function yp(t){if(t.propertyName==="value"&&vl(Js)){var n=[];xp(n,Js,t,uu(t)),ap(x_,n)}}function g_(t,n,a){t==="focusin"?(Sp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",yp)):t==="focusout"&&Sp()}function v_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Js)}function __(t,n){if(t==="click")return vl(n)}function S_(t,n){if(t==="input"||t==="change")return vl(n)}function y_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:y_;function $s(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$t.call(n,u)||!Wn(t[u],n[u]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,n){var a=bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vt(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var b_=Gi&&"documentMode"in document&&11>=document.documentMode,Br=null,bu=null,eo=null,Mu=!1;function Ap(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Br==null||Br!==vt(o)||(o=Br,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=ic(bu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Eu={},Rp={};Gi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function or(t){if(Eu[t])return Eu[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return Eu[t]=n[a];return t}var wp=or("animationend"),Cp=or("animationiteration"),Dp=or("animationstart"),M_=or("transitionrun"),E_=or("transitionstart"),T_=or("transitioncancel"),Up=or("transitionend"),Np=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function vi(t,n){Np.set(t,n),Hi(n,[t])}var Lp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Lp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Rt(n)},Lp.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var ri=[],Gr=0,Au=0;function _l(){for(var t=Gr,n=Au=Gr=0;n<t;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var d=ri[n];if(ri[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&Pp(a,u,d)}}function Sl(t,n,a,o){ri[Gr++]=t,ri[Gr++]=n,ri[Gr++]=a,ri[Gr++]=o,Au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ru(t,n,a,o){return Sl(t,n,a,o),yl(t)}function Vr(t,n){return Sl(t,null,null,n),yl(t)}function Pp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function yl(t){if(50<Ao)throw Ao=0,Pf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var kr={};function A_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new A_(t,n,a,o)}function wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Op(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")wu(t)&&(b=1);else if(typeof t=="string")b=wS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=qn(31,a,n,u),t.elementType=D,t.lanes=d,t;case M:return lr(a.children,u,d,n);case A:b=8,u|=24;break;case S:return t=qn(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case H:return t=qn(13,a,n,u),t.elementType=H,t.lanes=d,t;case O:return t=qn(19,a,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case N:b=10;break e;case L:b=9;break e;case F:b=11;break e;case V:b=14;break e;case ie:b=16,o=null;break e}b=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=qn(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function lr(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function Cu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Du(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xr=[],jr=0,Ml=null,El=0,si=[],oi=0,cr=null,ki=1,Xi="";function ur(t,n){Xr[jr++]=El,Xr[jr++]=Ml,Ml=t,El=n}function Fp(t,n,a){si[oi++]=ki,si[oi++]=Xi,si[oi++]=cr,cr=t;var o=ki;t=Xi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,ki=1<<32-Fe(n)+u|a<<u|o,Xi=d+t}else ki=1<<d|a<<u|o,Xi=t}function Uu(t){t.return!==null&&(ur(t,1),Fp(t,1,0))}function Nu(t){for(;t===Ml;)Ml=Xr[--jr],Xr[jr]=null,El=Xr[--jr],Xr[jr]=null;for(;t===cr;)cr=si[--oi],si[oi]=null,Xi=si[--oi],si[oi]=null,ki=si[--oi],si[oi]=null}var In=null,Qt=null,wt=!1,fr=null,Ci=!1,Lu=Error(r(519));function dr(t){var n=Error(r(418,""));throw io(ai(n,t)),Lu}function Ip(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[_n]=t,n[Tn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)St(wo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Qe(n);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Sn(n,o.value,o.defaultValue,o.children),Qe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ex(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ac),n=!0):n=!1,n||dr(t)}function zp(t){for(In=t.return;In;)switch(In.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:In=In.return}}function to(t){if(t!==In)return!1;if(!wt)return zp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&Qt&&dr(t),zp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Qt=Si(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Qt=null}}else n===27?(n=Qt,Va(t.type)?(t=ed,ed=null,Qt=t):Qt=n):Qt=In?Si(t.stateNode.nextSibling):null;return!0}function no(){Qt=In=null,wt=!1}function Bp(){var t=fr;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),fr=null),t}function io(t){fr===null?fr=[t]:fr.push(t)}var Pu=$(null),hr=null,ji=null;function Ra(t,n,a){be(Pu,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=Pu.current,ye(Pu)}function Ou(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Fu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Ou(d.return,a,t),o||(b=null);break e}d=T.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(r(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),Ou(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function ao(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var T=u.type;Wn(u.pendingProps.value,b.value)||(t!==null?t.push(T):t=[T])}}else if(u===pe.current){if(b=u.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Fu(n,t,a,o),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Hp(hr,t)}function Al(t,n){return hr===null&&pr(t),Hp(t,n)}function Hp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var R_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},w_=s.unstable_scheduleCallback,C_=s.unstable_NormalPriority,mn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new R_,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&w_(C_,function(){t.controller.abort()})}var so=null,zu=0,Wr=0,qr=null;function D_(t,n){if(so===null){var a=so=[];zu=0,Wr=Gf(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Gp,Gp),n}function Gp(){if(--zu===0&&so!==null){qr!==null&&(qr.status="fulfilled");var t=so;so=null,Wr=0,qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function U_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&D_(t,n),Vp!==null&&Vp(t,n)};var mr=$(null);function Bu(){var t=mr.current;return t!==null?t:jt.pooledCache}function Rl(t,n){n===null?be(mr,mr.current):be(mr,n.pool)}function kp(){var t=Bu();return t===null?null:{parent:mn._currentValue,pool:t}}var oo=Error(r(460)),Xp=Error(r(474)),wl=Error(r(542)),Hu={then:function(){}};function jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cl(){}function Wp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Cl,Cl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t;default:if(typeof n.status=="string")n.then(Cl,Cl);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t}throw lo=n,oo}}var lo=null;function qp(){if(lo===null)throw Error(r(459));var t=lo;return lo=null,t}function Yp(t){if(t===oo||t===wl)throw Error(r(483))}var wa=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),Pp(t,null,a),n}return Sl(t,o,n,a),yl(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}function ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Xu=!1;function uo(){if(Xu){var t=qr;if(t!==null)throw t}}function fo(t,n,a,o){Xu=!1;var u=t.updateQueue;wa=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,ee=z.next;z.next=null,b===null?d=ee:b.next=ee,b=z;var me=t.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==b&&(T===null?me.firstBaseUpdate=ee:T.next=ee,me.lastBaseUpdate=z))}if(d!==null){var _e=u.baseState;b=0,me=ee=z=null,T=d;do{var ae=T.lane&-536870913,re=ae!==T.lane;if(re?(Mt&ae)===ae:(o&ae)===ae){ae!==0&&ae===Wr&&(Xu=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var rt=t,tt=T;ae=n;var Bt=a;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){_e=rt.call(Bt,_e,ae);break e}_e=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ae=typeof rt=="function"?rt.call(Bt,_e,ae):rt,ae==null)break e;_e=x({},_e,ae);break e;case 2:wa=!0}}ae=T.callback,ae!==null&&(t.flags|=64,re&&(t.flags|=8192),re=u.callbacks,re===null?u.callbacks=[ae]:re.push(ae))}else re={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?(ee=me=re,z=_e):me=me.next=re,b|=ae;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;re=T,T=re.next,re.next=null,u.lastBaseUpdate=re,u.shared.pending=null}}while(!0);me===null&&(z=_e),u.baseState=z,u.firstBaseUpdate=ee,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),za|=b,t.lanes=b,t.memoizedState=_e}}function Zp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Kp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zp(a[t],n)}var Yr=$(null),Dl=$(0);function Qp(t,n){t=$i,be(Dl,t),be(Yr,n),$i=t|n.baseLanes}function ju(){be(Dl,$i),be(Yr,Yr.current)}function Wu(){$i=Dl.current,ye(Yr),ye(Dl)}var Ua=0,pt=null,It=null,cn=null,Ul=!1,Zr=!1,xr=!1,Nl=0,ho=0,Kr=null,N_=0;function nn(){throw Error(r(321))}function qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Yu(t,n,a,o,u,d){return Ua=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Pm:Om,xr=!1,d=a(o,u),xr=!1,Zr&&(d=$p(n,a,o,u)),Jp(t),d}function Jp(t){I.H=zl;var n=It!==null&&It.next!==null;if(Ua=0,cn=It=pt=null,Ul=!1,ho=0,Kr=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&Tl(t)&&(yn=!0))}function $p(t,n,a,o){pt=t;var u=0;do{if(Zr&&(Kr=null),ho=0,Zr=!1,25<=u)throw Error(r(301));if(u+=1,cn=It=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=B_,d=n(a,o)}while(Zr);return d}function L_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(pt.flags|=1024),n}function Zu(){var t=Nl!==0;return Nl=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qu(t){if(Ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ul=!1}Ua=0,cn=It=pt=null,Zr=!1,ho=Nl=0,Kr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?pt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(It===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var n=cn===null?pt.memoizedState:cn.next;if(n!==null)cn=n,It=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},cn===null?pt.memoizedState=cn=t:cn=cn.next=t}return cn}function Ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,Kr===null&&(Kr=[]),t=Wp(Kr,t,n),n=pt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Pm:Om),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===N)return Dn(t)}throw Error(r(438,String(t)))}function $u(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ju(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function qi(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=un();return ef(n,It,t)}function ef(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var T=b=null,z=null,ee=n,me=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(Mt&_e)===_e:(Ua&_e)===_e){var ae=ee.revertLane;if(ae===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===Wr&&(me=!0);else if((Ua&ae)===ae){ee=ee.next,ae===Wr&&(me=!0);continue}else _e={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},z===null?(T=z=_e,b=d):z=z.next=_e,pt.lanes|=ae,za|=ae;_e=ee.action,xr&&a(d,_e),d=ee.hasEagerState?ee.eagerState:a(d,_e)}else ae={lane:_e,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},z===null?(T=z=ae,b=d):z=z.next=ae,pt.lanes|=_e,za|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(z===null?b=d:z.next=T,!Wn(d,t.memoizedState)&&(yn=!0,me&&(a=qr,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function tf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);Wn(d,n.memoizedState)||(yn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function em(t,n,a){var o=pt,u=un(),d=wt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var b=!Wn((It||u).memoizedState,a);b&&(u.memoizedState=a,yn=!0),u=u.queue;var T=im.bind(null,o,u,t);if(mo(2048,8,T,[t]),u.getSnapshot!==n||b||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Qr(9,Ol(),nm.bind(null,o,u,a,n),null),jt===null)throw Error(r(349));d||(Ua&124)!==0||tm(o,n,a)}return a}function tm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Ju(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function nm(t,n,a,o){n.value=a,n.getSnapshot=o,am(n)&&rm(t)}function im(t,n,a){return a(function(){am(n)&&rm(t)})}function am(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function rm(t){var n=Vr(t,2);n!==null&&Jn(n,t,2)}function nf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),xr){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},n}function sm(t,n,a,o){return t.baseState=a,ef(t,It,typeof o=="function"?o:qi)}function P_(t,n,a,o,u){if(Il(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function om(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,b={};I.T=b;try{var T=a(u,o),z=I.S;z!==null&&z(b,T),lm(t,n,T)}catch(ee){af(t,n,ee)}finally{I.T=d}}else try{d=a(u,o),lm(t,n,d)}catch(ee){af(t,n,ee)}}function lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(t,n,o)},function(o){return af(t,n,o)}):cm(t,n,a)}function cm(t,n,a){n.status="fulfilled",n.value=a,um(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,om(t,a)))}function af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,um(n),n=n.next;while(n!==o)}t.action=null}function um(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function fm(t,n){return n}function dm(t,n){if(wt){var a=jt.formState;if(a!==null){e:{var o=pt;if(wt){if(Qt){t:{for(var u=Qt,d=Ci;u.nodeType!==8;){if(!d){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=Si(u.nextSibling),o=u.data==="F!";break e}}dr(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:n},a.queue=o,a=Um.bind(null,pt,o),o.dispatch=a,o=nf(!1),d=cf.bind(null,pt,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=P_.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function hm(t){var n=un();return pm(n,It,t)}function pm(t,n,a){if(n=ef(t,n,fm)[0],t=Pl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(b){throw b===oo?wl:b}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,Qr(9,Ol(),O_.bind(null,u,a),null)),[o,d,t]}function O_(t,n){t.action=n}function mm(t){var n=un(),a=It;if(a!==null)return pm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Qr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Ju(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ol(){return{destroy:void 0,resource:void 0}}function xm(){return un().memoizedState}function Fl(t,n,a,o){var u=Hn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=Qr(1|n,Ol(),a,o)}function mo(t,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;It!==null&&o!==null&&qu(o,It.memoizedState.deps)?u.memoizedState=Qr(n,d,a,o):(pt.flags|=t,u.memoizedState=Qr(1|n,d,a,o))}function gm(t,n){Fl(8390656,8,t,n)}function vm(t,n){mo(2048,8,t,n)}function _m(t,n){return mo(4,2,t,n)}function Sm(t,n){return mo(4,4,t,n)}function ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bm(t,n,a){a=a!=null?a.concat([t]):null,mo(4,4,ym.bind(null,n,t),a)}function rf(){}function Mm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&qu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Em(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&qu(n,o[1]))return o[0];if(o=t(),xr){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o}function sf(t,n,a){return a===void 0||(Ua&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=R0(),pt.lanes|=t,za|=t,a)}function Tm(t,n,a,o){return Wn(a,n)?a:Yr.current!==null?(t=sf(t,a,o),Wn(t,n)||(yn=!0),t):(Ua&42)===0?(yn=!0,t.memoizedState=a):(t=R0(),pt.lanes|=t,za|=t,n)}function Am(t,n,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var b=I.T,T={};I.T=T,cf(t,!1,n,a);try{var z=u(),ee=I.S;if(ee!==null&&ee(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var me=U_(z,o);xo(t,n,me,Qn(t))}else xo(t,n,o,Qn(t))}catch(_e){xo(t,n,{then:function(){},status:"rejected",reason:_e},Qn())}finally{q.p=d,I.T=b}}function F_(){}function of(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Rm(t).queue;Am(t,u,n,Y,a===null?F_:function(){return wm(t),a(o)})}function Rm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wm(t){var n=Rm(t).next.queue;xo(t,n,{},Qn())}function lf(){return Dn(Po)}function Cm(){return un().memoizedState}function Dm(){return un().memoizedState}function I_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ca(a);var o=Da(n,t,a);o!==null&&(Jn(o,n,a),co(o,n,a)),n={cache:Iu()},t.payload=n;return}n=n.return}}function z_(t,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?Nm(n,a):(a=Ru(t,n,a,o),a!==null&&(Jn(a,t,o),Lm(a,n,o)))}function Um(t,n,a){var o=Qn();xo(t,n,a,o)}function xo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))Nm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,T=d(b,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,b))return Sl(t,n,u,0),jt===null&&_l(),!1}catch{}finally{}if(a=Ru(t,n,u,o),a!==null)return Jn(a,t,o),Lm(a,n,o),!0}return!1}function cf(t,n,a,o){if(o={lane:2,revertLane:Gf(),action:o,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(r(479))}else n=Ru(t,a,o,2),n!==null&&Jn(n,t,2)}function Il(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Nm(t,n){Zr=Ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,He(t,a)}}var zl={readContext:Dn,use:Ll,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},Pm={readContext:Dn,use:Ll,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:gm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(xr){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(xr){fe(!0);try{a(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=z_.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=nf(t);var n=t.queue,a=Um.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(t,n){var a=Hn();return sf(a,t,n)},useTransition:function(){var t=nf(!1);return t=Am.bind(null,pt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Hn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(Mt&124)!==0||tm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,gm(im.bind(null,o,d,t),[t]),o.flags|=2048,Qr(9,Ol(),nm.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=jt.identifierPrefix;if(wt){var a=Xi,o=ki;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=N_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:lf,useFormState:dm,useActionState:dm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:$u,useCacheRefresh:function(){return Hn().memoizedState=I_.bind(null,pt)}},Om={readContext:Dn,use:Ll,useCallback:Mm,useContext:Dn,useEffect:vm,useImperativeHandle:bm,useInsertionEffect:_m,useLayoutEffect:Sm,useMemo:Em,useReducer:Pl,useRef:xm,useState:function(){return Pl(qi)},useDebugValue:rf,useDeferredValue:function(t,n){var a=un();return Tm(a,It.memoizedState,t,n)},useTransition:function(){var t=Pl(qi)[0],n=un().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:em,useId:Cm,useHostTransitionStatus:lf,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=un();return sm(a,It,t,n)},useMemoCache:$u,useCacheRefresh:Dm},B_={readContext:Dn,use:Ll,useCallback:Mm,useContext:Dn,useEffect:vm,useImperativeHandle:bm,useInsertionEffect:_m,useLayoutEffect:Sm,useMemo:Em,useReducer:tf,useRef:xm,useState:function(){return tf(qi)},useDebugValue:rf,useDeferredValue:function(t,n){var a=un();return It===null?sf(a,t,n):Tm(a,It.memoizedState,t,n)},useTransition:function(){var t=tf(qi)[0],n=un().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:em,useId:Cm,useHostTransitionStatus:lf,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=un();return It!==null?sm(a,It,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Dm},Jr=null,go=0;function Bl(t){var n=go;return go+=1,Jr===null&&(Jr=[]),Wp(Jr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Hl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){var n=t._init;return n(t._payload)}function Im(t){function n(W,X){if(t){var Q=W.deletions;Q===null?(W.deletions=[X],W.flags|=16):Q.push(X)}}function a(W,X){if(!t)return null;for(;X!==null;)n(W,X),X=X.sibling;return null}function o(W){for(var X=new Map;W!==null;)W.key!==null?X.set(W.key,W):X.set(W.index,W),W=W.sibling;return X}function u(W,X){return W=Vi(W,X),W.index=0,W.sibling=null,W}function d(W,X,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<X?(W.flags|=67108866,X):Q):(W.flags|=67108866,X)):(W.flags|=1048576,X)}function b(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,X,Q,ge){return X===null||X.tag!==6?(X=Cu(Q,W.mode,ge),X.return=W,X):(X=u(X,Q),X.return=W,X)}function z(W,X,Q,ge){var Ge=Q.type;return Ge===M?me(W,X,Q.props.children,ge,Q.key):X!==null&&(X.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ie&&Fm(Ge)===X.type)?(X=u(X,Q.props),vo(X,Q),X.return=W,X):(X=bl(Q.type,Q.key,Q.props,null,W.mode,ge),vo(X,Q),X.return=W,X)}function ee(W,X,Q,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Du(Q,W.mode,ge),X.return=W,X):(X=u(X,Q.children||[]),X.return=W,X)}function me(W,X,Q,ge,Ge){return X===null||X.tag!==7?(X=lr(Q,W.mode,ge,Ge),X.return=W,X):(X=u(X,Q),X.return=W,X)}function _e(W,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Cu(""+X,W.mode,Q),X.return=W,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return Q=bl(X.type,X.key,X.props,null,W.mode,Q),vo(Q,X),Q.return=W,Q;case y:return X=Du(X,W.mode,Q),X.return=W,X;case ie:var ge=X._init;return X=ge(X._payload),_e(W,X,Q)}if(ce(X)||j(X))return X=lr(X,W.mode,Q,null),X.return=W,X;if(typeof X.then=="function")return _e(W,Bl(X),Q);if(X.$$typeof===N)return _e(W,Al(W,X),Q);Hl(W,X)}return null}function ae(W,X,Q,ge){var Ge=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ge!==null?null:T(W,X,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Ge?z(W,X,Q,ge):null;case y:return Q.key===Ge?ee(W,X,Q,ge):null;case ie:return Ge=Q._init,Q=Ge(Q._payload),ae(W,X,Q,ge)}if(ce(Q)||j(Q))return Ge!==null?null:me(W,X,Q,ge,null);if(typeof Q.then=="function")return ae(W,X,Bl(Q),ge);if(Q.$$typeof===N)return ae(W,X,Al(W,Q),ge);Hl(W,Q)}return null}function re(W,X,Q,ge,Ge){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return W=W.get(Q)||null,T(X,W,""+ge,Ge);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case _:return W=W.get(ge.key===null?Q:ge.key)||null,z(X,W,ge,Ge);case y:return W=W.get(ge.key===null?Q:ge.key)||null,ee(X,W,ge,Ge);case ie:var gt=ge._init;return ge=gt(ge._payload),re(W,X,Q,ge,Ge)}if(ce(ge)||j(ge))return W=W.get(Q)||null,me(X,W,ge,Ge,null);if(typeof ge.then=="function")return re(W,X,Q,Bl(ge),Ge);if(ge.$$typeof===N)return re(W,X,Q,Al(X,ge),Ge);Hl(X,ge)}return null}function rt(W,X,Q,ge){for(var Ge=null,gt=null,Ye=X,nt=X=0,Mn=null;Ye!==null&&nt<Q.length;nt++){Ye.index>nt?(Mn=Ye,Ye=null):Mn=Ye.sibling;var Et=ae(W,Ye,Q[nt],ge);if(Et===null){Ye===null&&(Ye=Mn);break}t&&Ye&&Et.alternate===null&&n(W,Ye),X=d(Et,X,nt),gt===null?Ge=Et:gt.sibling=Et,gt=Et,Ye=Mn}if(nt===Q.length)return a(W,Ye),wt&&ur(W,nt),Ge;if(Ye===null){for(;nt<Q.length;nt++)Ye=_e(W,Q[nt],ge),Ye!==null&&(X=d(Ye,X,nt),gt===null?Ge=Ye:gt.sibling=Ye,gt=Ye);return wt&&ur(W,nt),Ge}for(Ye=o(Ye);nt<Q.length;nt++)Mn=re(Ye,W,nt,Q[nt],ge),Mn!==null&&(t&&Mn.alternate!==null&&Ye.delete(Mn.key===null?nt:Mn.key),X=d(Mn,X,nt),gt===null?Ge=Mn:gt.sibling=Mn,gt=Mn);return t&&Ye.forEach(function(qa){return n(W,qa)}),wt&&ur(W,nt),Ge}function tt(W,X,Q,ge){if(Q==null)throw Error(r(151));for(var Ge=null,gt=null,Ye=X,nt=X=0,Mn=null,Et=Q.next();Ye!==null&&!Et.done;nt++,Et=Q.next()){Ye.index>nt?(Mn=Ye,Ye=null):Mn=Ye.sibling;var qa=ae(W,Ye,Et.value,ge);if(qa===null){Ye===null&&(Ye=Mn);break}t&&Ye&&qa.alternate===null&&n(W,Ye),X=d(qa,X,nt),gt===null?Ge=qa:gt.sibling=qa,gt=qa,Ye=Mn}if(Et.done)return a(W,Ye),wt&&ur(W,nt),Ge;if(Ye===null){for(;!Et.done;nt++,Et=Q.next())Et=_e(W,Et.value,ge),Et!==null&&(X=d(Et,X,nt),gt===null?Ge=Et:gt.sibling=Et,gt=Et);return wt&&ur(W,nt),Ge}for(Ye=o(Ye);!Et.done;nt++,Et=Q.next())Et=re(Ye,W,nt,Et.value,ge),Et!==null&&(t&&Et.alternate!==null&&Ye.delete(Et.key===null?nt:Et.key),X=d(Et,X,nt),gt===null?Ge=Et:gt.sibling=Et,gt=Et);return t&&Ye.forEach(function(HS){return n(W,HS)}),wt&&ur(W,nt),Ge}function Bt(W,X,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:e:{for(var Ge=Q.key;X!==null;){if(X.key===Ge){if(Ge=Q.type,Ge===M){if(X.tag===7){a(W,X.sibling),ge=u(X,Q.props.children),ge.return=W,W=ge;break e}}else if(X.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===ie&&Fm(Ge)===X.type){a(W,X.sibling),ge=u(X,Q.props),vo(ge,Q),ge.return=W,W=ge;break e}a(W,X);break}else n(W,X);X=X.sibling}Q.type===M?(ge=lr(Q.props.children,W.mode,ge,Q.key),ge.return=W,W=ge):(ge=bl(Q.type,Q.key,Q.props,null,W.mode,ge),vo(ge,Q),ge.return=W,W=ge)}return b(W);case y:e:{for(Ge=Q.key;X!==null;){if(X.key===Ge)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(W,X.sibling),ge=u(X,Q.children||[]),ge.return=W,W=ge;break e}else{a(W,X);break}else n(W,X);X=X.sibling}ge=Du(Q,W.mode,ge),ge.return=W,W=ge}return b(W);case ie:return Ge=Q._init,Q=Ge(Q._payload),Bt(W,X,Q,ge)}if(ce(Q))return rt(W,X,Q,ge);if(j(Q)){if(Ge=j(Q),typeof Ge!="function")throw Error(r(150));return Q=Ge.call(Q),tt(W,X,Q,ge)}if(typeof Q.then=="function")return Bt(W,X,Bl(Q),ge);if(Q.$$typeof===N)return Bt(W,X,Al(W,Q),ge);Hl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(W,X.sibling),ge=u(X,Q),ge.return=W,W=ge):(a(W,X),ge=Cu(Q,W.mode,ge),ge.return=W,W=ge),b(W)):a(W,X)}return function(W,X,Q,ge){try{go=0;var Ge=Bt(W,X,Q,ge);return Jr=null,Ge}catch(Ye){if(Ye===oo||Ye===wl)throw Ye;var gt=qn(29,Ye,null,W.mode);return gt.lanes=ge,gt.return=W,gt}finally{}}}var $r=Im(!0),zm=Im(!1),li=$(null),Di=null;function Na(t){var n=t.alternate;be(xn,xn.current&1),be(li,t),Di===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Di=t)}function Bm(t){if(t.tag===22){if(be(xn,xn.current),be(li,t),Di===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Di=t)}}else La()}function La(){be(xn,xn.current),be(li,li.current)}function Yi(t){ye(li),Di===t&&(Di=null),ye(xn)}var xn=$(0);function Gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||$f(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function uf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Qn(),u=Ca(o);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(Jn(n,t,o),co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Qn(),u=Ca(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,o),n!==null&&(Jn(n,t,o),co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),o=Ca(a);o.tag=2,n!=null&&(o.callback=n),n=Da(t,o,a),n!==null&&(Jn(n,t,a),co(n,t,a))}};function Hm(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,d):!0}function Gm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ff.enqueueReplaceState(n,n.state,null)}function gr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Vm(t){Vl(t)}function km(t){console.error(t)}function Xm(t){Vl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function jm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function df(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function Wm(t){return t=Ca(t),t.tag=3,t}function qm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){jm(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){jm(n,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function H_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 13:return Di===null?Ff():a.alternate===null&&Jt===0&&(Jt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(t,o,u)),!1;case 22:return a.flags|=65536,o===Hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(t,o,u)),!1}throw Error(r(435,a.tag))}return zf(t,o,u),Ff(),!1}if(wt)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(t=Error(r(422),{cause:o}),io(ai(t,a)))):(o!==Lu&&(n=Error(r(423),{cause:o}),io(ai(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ai(o,a),u=df(t.stateNode,o,u),ku(t,u),Jt!==4&&(Jt=2)),!1;var d=Error(r(520),{cause:o});if(d=ai(d,a),To===null?To=[d]:To.push(d),Jt!==4&&(Jt=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=df(a.stateNode,o,t),ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ba===null||!Ba.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Wm(u),qm(u,t,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var Ym=Error(r(461)),yn=!1;function Rn(t,n,a,o){n.child=t===null?zm(n,null,a,o):$r(n,t.child,a,o)}function Zm(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var T in o)T!=="ref"&&(b[T]=o[T])}else b=o;return pr(n),o=Yu(t,n,a,b,d,u),T=Zu(),t!==null&&!yn?(Ku(t,n,u),Zi(t,n,u)):(wt&&T&&Uu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Km(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!wu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Qm(t,n,d,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Sf(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(b,o)&&t.ref===n.ref)return Zi(t,n,u)}return n.flags|=1,t=Vi(d,o),t.ref=n.ref,t.return=n,n.child=t}function Qm(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if($s(d,o)&&t.ref===n.ref)if(yn=!1,n.pendingProps=o=d,Sf(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,Zi(t,n,u)}return hf(t,n,a,o,u)}function Jm(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return $m(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(n,d!==null?d.cachePool:null),d!==null?Qp(n,d):ju(),Bm(n);else return n.lanes=n.childLanes=536870912,$m(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Rl(n,d.cachePool),Qp(n,d),La(),n.memoizedState=null):(t!==null&&Rl(n,null),ju(),La());return Rn(t,n,u,a),n.child}function $m(t,n,a,o){var u=Bu();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Rl(n,null),ju(),Bm(n),t!==null&&ao(t,n,o,!0),null}function Xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,o,u){return pr(n),a=Yu(t,n,a,o,void 0,u),o=Zu(),t!==null&&!yn?(Ku(t,n,u),Zi(t,n,u)):(wt&&o&&Uu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function e0(t,n,a,o,u,d){return pr(n),n.updateQueue=null,a=$p(n,o,a,u),Jp(t),o=Zu(),t!==null&&!yn?(Ku(t,n,d),Zi(t,n,d)):(wt&&o&&Uu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function t0(t,n,a,o,u){if(pr(n),n.stateNode===null){var d=kr,b=a.contextType;typeof b=="object"&&b!==null&&(d=Dn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ff,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Gu(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Dn(b):kr,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(uf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&ff.enqueueReplaceState(d,d.state,null),fo(n,o,d,u),uo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var T=n.memoizedProps,z=gr(a,T);d.props=z;var ee=d.context,me=a.contextType;b=kr,typeof me=="object"&&me!==null&&(b=Dn(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||ee!==b)&&Gm(n,d,o,b),wa=!1;var ae=n.memoizedState;d.state=ae,fo(n,o,d,u),uo(),ee=n.memoizedState,T||ae!==ee||wa?(typeof _e=="function"&&(uf(n,a,_e,o),ee=n.memoizedState),(z=wa||Hm(n,a,z,o,ae,ee,b))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=b,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Vu(t,n),b=n.memoizedProps,me=gr(a,b),d.props=me,_e=n.pendingProps,ae=d.context,ee=a.contextType,z=kr,typeof ee=="object"&&ee!==null&&(z=Dn(ee)),T=a.getDerivedStateFromProps,(ee=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==_e||ae!==z)&&Gm(n,d,o,z),wa=!1,ae=n.memoizedState,d.state=ae,fo(n,o,d,u),uo();var re=n.memoizedState;b!==_e||ae!==re||wa||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof T=="function"&&(uf(n,a,T,o),re=n.memoizedState),(me=wa||Hm(n,a,me,o,ae,re,z)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,re,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,re,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=re),d.props=o,d.state=re,d.context=z,o=me):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Xl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=$r(n,t.child,null,u),n.child=$r(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Zi(t,n,u),t}function n0(t,n,a,o){return no(),n.flags|=256,Rn(t,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:kp()}}function xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function i0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Na(n):La(),wt){var T=Qt,z;if(z=T){e:{for(z=T,T=Ci;z.nodeType!==8;){if(!T){T=null;break e}if(z=Si(z.nextSibling),z===null){T=null;break e}}T=z}T!==null?(n.memoizedState={dehydrated:T,treeContext:cr!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},z=qn(18,null,null,0),z.stateNode=T,z.return=n,n.child=z,In=n,Qt=null,z=!0):z=!1}z||dr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return $f(T)?n.lanes=32:n.lanes=536870912,null;Yi(n)}return T=o.children,o=o.fallback,u?(La(),u=n.mode,T=jl({mode:"hidden",children:T},u),o=lr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=mf(a),u.childLanes=xf(t,b,a),n.memoizedState=pf,o):(Na(n),gf(n,T))}if(z=t.memoizedState,z!==null&&(T=z.dehydrated,T!==null)){if(d)n.flags&256?(Na(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),u=o.fallback,T=n.mode,o=jl({mode:"visible",children:o.children},T),u=lr(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,$r(n,t.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=xf(t,b,a),n.memoizedState=pf,n=u);else if(Na(n),$f(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var ee=b.dgst;b=ee,o=Error(r(419)),o.stack="",o.digest=b,io({value:o,source:null,stack:null}),n=vf(t,n,a)}else if(yn||ao(t,n,a,!1),b=(a&t.childLanes)!==0,yn||b){if(b=jt,b!==null&&(o=a&-a,o=(o&42)!==0?1:at(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Vr(t,o),Jn(b,t,o),Ym;T.data==="$?"||Ff(),n=vf(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Qt=Si(T.nextSibling),In=n,wt=!0,fr=null,Ci=!1,t!==null&&(si[oi++]=ki,si[oi++]=Xi,si[oi++]=cr,ki=t.id,Xi=t.overflow,cr=n),n=gf(n,o.children),n.flags|=4096);return n}return u?(La(),u=o.fallback,T=n.mode,z=t.child,ee=z.sibling,o=Vi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ee!==null?u=Vi(ee,u):(u=lr(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=t.child.memoizedState,T===null?T=mf(a):(z=T.cachePool,z!==null?(ee=mn._currentValue,z=z.parent!==ee?{parent:ee,pool:ee}:z):z=kp(),T={baseLanes:T.baseLanes|a,cachePool:z}),u.memoizedState=T,u.childLanes=xf(t,b,a),n.memoizedState=pf,o):(Na(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=qn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function vf(t,n,a){return $r(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function a0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ou(t.return,n,a)}function _f(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function r0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Rn(t,n,o.children,a),o=xn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a0(t,a,n);else if(t.tag===19)a0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(be(xn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Gl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Gl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function G_(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ra(n,mn,t.memoizedState.cache),no();break;case 27:case 5:je(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?i0(t,n,a):(Na(n),t=Zi(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ao(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return r0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(xn,xn.current),o)break;return null;case 22:case 23:return n.lanes=0,Jm(t,n,a);case 24:Ra(n,mn,t.memoizedState.cache)}return Zi(t,n,a)}function s0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!Sf(t,a)&&(n.flags&128)===0)return yn=!1,G_(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,wt&&(n.flags&1048576)!==0&&Fp(n,El,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")wu(o)?(t=gr(o,t),n.tag=1,n=t0(null,n,o,t,a)):(n.tag=0,n=hf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===F){n.tag=11,n=Zm(null,n,o,t,a);break e}else if(u===V){n.tag=14,n=Km(null,n,o,t,a);break e}}throw n=le(o)||o,Error(r(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=gr(o,n.pendingProps),t0(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Vu(t,n),fo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Ra(n,mn,o),o!==d.cache&&Fu(n,[mn],a,!0),uo(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=n0(t,n,o,a);break e}else if(o!==u){u=ai(Error(r(424)),n),io(u),n=n0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=Si(t.firstChild),In=n,wt=!0,fr=null,Ci=!0,a=zm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(no(),o===u){n=Zi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Xl(t,n),t===null?(a=ux(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=rc(J.current).createElement(a),o[_n]=n,o[Tn]=t,Cn(o,a,t),ln(o),n.stateNode=o):n.memoizedState=ux(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return je(n),t===null&&wt&&(o=n.stateNode=ox(n.type,n.pendingProps,J.current),In=n,Ci=!0,u=Qt,Va(n.type)?(ed=u,Qt=Si(o.firstChild)):Qt=u),Rn(t,n,n.pendingProps.children,a),Xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Qt)&&(o=mS(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,In=n,Qt=Si(o.firstChild),Ci=!1,u=!0):u=!1),u||dr(n)),je(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,Kf(u,d)?o=null:b!==null&&Kf(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(t,n,L_,null,null,a),Po._currentValue=u),Xl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Qt)&&(a=xS(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,In=n,Qt=null,t=!0):t=!1),t||dr(n)),null;case 13:return i0(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=$r(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Zm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ra(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=Dn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Km(t,n,n.type,n.pendingProps,a);case 15:return Qm(t,n,n.type,n.pendingProps,a);case 19:return r0(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Jm(t,n,a);case 24:return pr(n),o=Dn(mn),t===null?(u=Bu(),u===null&&(u=jt,d=Iu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Gu(n),Ra(n,mn,u)):((t.lanes&a)!==0&&(Vu(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,mn,o)):(o=d.cache,Ra(n,mn,o),o!==u.cache&&Fu(n,[mn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ki(t){t.flags|=4}function o0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mx(n)){if(n=li.current,n!==null&&((Mt&4194048)===Mt?Di!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Di))throw lo=Hu,Xp;t.flags|=8192}}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,is|=n)}function _o(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function V_(t,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(mn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(to(n)?Ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bp())),Yt(n),null;case 26:return a=n.memoizedState,t===null?(Ki(n),a!==null?(Yt(n),o0(n,a)):(Yt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ki(n),Yt(n),o0(n,a)):(Yt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Ki(n),Yt(n),n.flags&=-16777217),null;case 27:ct(n),a=J.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Ce.current,to(n)?Ip(n):(t=ox(u,o,a),n.stateNode=t,Ki(n))}return Yt(n),null;case 5:if(ct(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(t=Ce.current,to(n))Ip(n);else{switch(u=rc(J.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[_n]=n,t[Tn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Cn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ki(n)}}return Yt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,to(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[_n]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ex(t.nodeValue,a)),t||dr(n)}else t=rc(t).createTextNode(o),t[_n]=n,n.stateNode=t}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_n]=n}else no(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Bp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yi(n),n):(Yi(n),null)}if(Yi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Yt(n),null;case 4:return Xe(),t===null&&jf(n.stateNode.containerInfo),Yt(n),null;case 10:return Wi(n.type),Yt(n),null;case 19:if(ye(xn),u=n.memoizedState,u===null)return Yt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)_o(u,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Gl(t),d!==null){for(n.flags|=128,_o(u,!1),t=d.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Op(a,t),a=a.sibling;return be(xn,xn.current&1|2),n.child}t=t.sibling}u.tail!==null&&st()>Zl&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304)}else{if(!o)if(t=Gl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),_o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!wt)return Yt(n),null}else 2*st()-u.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=st(),n.sibling=null,t=xn.current,be(xn,o?t&1|2:t&1),n):(Yt(n),null);case 22:case 23:return Yi(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(mn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function k_(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(mn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 13:if(Yi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));no()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(xn),null;case 4:return Xe(),null;case 10:return Wi(n.type),null;case 22:case 23:return Yi(n),Wu(),t!==null&&ye(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(mn),null;case 25:return null;default:return null}}function l0(t,n){switch(Nu(n),n.tag){case 3:Wi(mn),Xe();break;case 26:case 27:case 5:ct(n);break;case 4:Xe();break;case 13:Yi(n);break;case 19:ye(xn);break;case 10:Wi(n.type);break;case 22:case 23:Yi(n),Wu(),t!==null&&ye(mr);break;case 24:Wi(mn)}}function So(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(T){Vt(n,n.return,T)}}function Pa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,u=n;var z=a,ee=T;try{ee()}catch(me){Vt(u,z,me)}}}o=o.next}while(o!==d)}}catch(me){Vt(n,n.return,me)}}function c0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Kp(n,a)}catch(o){Vt(t,t.return,o)}}}function u0(t,n,a){a.props=gr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function f0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function yf(t,n,a){try{var o=t.stateNode;uS(o,t.type,a,n),o[Tn]=n}catch(u){Vt(t,t.return,u)}}function d0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ac));else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function h0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[_n]=t,n[Tn]=a}catch(d){Vt(t,t.return,d)}}var Qi=!1,an=!1,Ef=!1,p0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function X_(t,n){if(t=t.containerInfo,Yf=fc,t=Tp(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,T=-1,z=-1,ee=0,me=0,_e=t,ae=null;t:for(;;){for(var re;_e!==a||u!==0&&_e.nodeType!==3||(T=b+u),_e!==d||o!==0&&_e.nodeType!==3||(z=b+o),_e.nodeType===3&&(b+=_e.nodeValue.length),(re=_e.firstChild)!==null;)ae=_e,_e=re;for(;;){if(_e===t)break t;if(ae===a&&++ee===u&&(T=b),ae===d&&++me===o&&(z=b),(re=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=re}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},fc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var rt=gr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(rt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Vt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function m0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(t,a),o&4&&So(5,a);break;case 1:if(Oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){Vt(a,a.return,b)}else{var u=gr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Vt(a,a.return,b)}}o&64&&c0(a),o&512&&yo(a,a.return);break;case 3:if(Oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(t,n)}catch(b){Vt(a,a.return,b)}}break;case 27:n===null&&o&4&&h0(a);case 26:case 5:Oa(t,a),n===null&&o&4&&f0(a),o&512&&yo(a,a.return);break;case 12:Oa(t,a);break;case 13:Oa(t,a),o&4&&v0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$_.bind(null,a),gS(t,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||an,u=Qi;var d=an;Qi=o,(an=n)&&!d?Fa(t,a,(a.subtreeFlags&8772)!==0):Oa(t,a),Qi=u,an=d}break;case 30:break;default:Oa(t,a)}}function x0(t){var n=t.alternate;n!==null&&(t.alternate=null,x0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Or(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,Gn=!1;function Ji(t,n,a){for(a=a.child;a!==null;)g0(t,n,a),a=a.sibling}function g0(t,n,a){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(xe,a)}catch{}switch(a.tag){case 26:an||Ui(a,n),Ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Ui(a,n);var o=qt,u=Gn;Va(a.type)&&(qt=a.stateNode,Gn=!1),Ji(t,n,a),Do(a.stateNode),qt=o,Gn=u;break;case 5:an||Ui(a,n);case 6:if(o=qt,u=Gn,qt=null,Ji(t,n,a),qt=o,Gn=u,qt!==null)if(Gn)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{qt.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:qt!==null&&(Gn?(t=qt,rx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zo(t)):rx(qt,a.stateNode));break;case 4:o=qt,u=Gn,qt=a.stateNode.containerInfo,Gn=!0,Ji(t,n,a),qt=o,Gn=u;break;case 0:case 11:case 14:case 15:an||Pa(2,a,n),an||Pa(4,a,n),Ji(t,n,a);break;case 1:an||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&u0(a,n,o)),Ji(t,n,a);break;case 21:Ji(t,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,Ji(t,n,a),an=o;break;default:Ji(t,n,a)}}function v0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zo(t)}catch(a){Vt(n,n.return,a)}}function j_(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new p0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new p0),n;default:throw Error(r(435,t.tag))}}function Tf(t,n){var a=j_(t);n.forEach(function(o){var u=eS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(Va(T.type)){qt=T.stateNode,Gn=!1;break e}break;case 5:qt=T.stateNode,Gn=!1;break e;case 3:case 4:qt=T.stateNode.containerInfo,Gn=!0;break e}T=T.return}if(qt===null)throw Error(r(160));g0(d,b,u),qt=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)_0(n,t),n=n.sibling}var _i=null;function _0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(Pa(3,t,t.return),So(3,t),Pa(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(an||a===null||Ui(a,a.return)),o&64&&Qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Yn(n,t),Zn(t),o&512&&(an||a===null||Ui(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ri]||d[_n]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[_n]=t,ln(d),o=d;break e;case"link":var b=hx("link","href",u).get(o+(a.href||""));if(b){for(var T=0;T<b.length;T++)if(d=b[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(T,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=hx("meta","content",u).get(o+(a.content||""))){for(T=0;T<b.length;T++)if(d=b[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(T,1);break t}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[_n]=t,ln(d),o=d}t.stateNode=o}else px(u,t.type,t.stateNode);else t.stateNode=dx(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?px(u,t.type,t.stateNode):dx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(an||a===null||Ui(a,a.return)),a!==null&&o&4&&yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(an||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{tn(u,"")}catch(re){Vt(t,t.return,re)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,yf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ef=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(re){Vt(t,t.return,re)}}break;case 3:if(lc=null,u=_i,_i=sc(n.containerInfo),Yn(n,t),_i=u,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(n.containerInfo)}catch(re){Vt(t,t.return,re)}Ef&&(Ef=!1,S0(t));break;case 4:o=_i,_i=sc(t.stateNode.containerInfo),Yn(n,t),Zn(t),_i=o;break;case 12:Yn(n,t),Zn(t);break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Uf=st()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ee=Qi,me=an;if(Qi=ee||u,an=me||z,Yn(n,t),an=me,Qi=ee,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Qi||an||vr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=z.stateNode;var _e=z.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(re){Vt(z,z.return,re)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(re){Vt(z,z.return,re)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tf(t,a))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tf(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(d0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=bf(t);ql(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(tn(b,""),a.flags&=-33);var T=bf(t);ql(t,T,b);break;case 3:case 4:var z=a.stateNode.containerInfo,ee=bf(t);Mf(t,ee,z);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function S0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;S0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)m0(t,n.alternate,n),n=n.sibling}function vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),vr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&u0(n,n.return,a),vr(n);break;case 27:Do(n.stateNode);case 26:case 5:Ui(n,n.return),vr(n);break;case 22:n.memoizedState===null&&vr(n);break;case 30:vr(n);break;default:vr(n)}t=t.sibling}}function Fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:Fa(u,d,a),So(4,d);break;case 1:if(Fa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Vt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var T=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Zp(z[u],T)}catch(ee){Vt(o,o.return,ee)}}a&&b&64&&c0(d),yo(d,d.return);break;case 27:h0(d);case 26:case 5:Fa(u,d,a),a&&o===null&&b&4&&f0(d),yo(d,d.return);break;case 12:Fa(u,d,a);break;case 13:Fa(u,d,a),a&&b&4&&v0(u,d);break;case 22:d.memoizedState===null&&Fa(u,d,a),yo(d,d.return);break;case 30:break;default:Fa(u,d,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)y0(t,n,a,o),n=n.sibling}function y0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&So(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,T=d.onPostCommit;typeof T=="function"&&T(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Vt(n,n.return,z)}}else Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Ni(t,n,a,o):bo(t,n):d._visibility&2?Ni(t,n,a,o):(d._visibility|=2,es(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Af(b,n);break;case 24:Ni(t,n,a,o),u&2048&&Rf(n.alternate,n);break;default:Ni(t,n,a,o)}}function es(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,b=n,T=a,z=o,ee=b.flags;switch(b.tag){case 0:case 11:case 15:es(d,b,T,z,u),So(8,b);break;case 23:break;case 22:var me=b.stateNode;b.memoizedState!==null?me._visibility&2?es(d,b,T,z,u):bo(d,b):(me._visibility|=2,es(d,b,T,z,u)),u&&ee&2048&&Af(b.alternate,b);break;case 24:es(d,b,T,z,u),u&&ee&2048&&Rf(b.alternate,b);break;default:es(d,b,T,z,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&Af(o.alternate,o);break;case 24:bo(a,o),u&2048&&Rf(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var Mo=8192;function ts(t){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)b0(t),t=t.sibling}function b0(t){switch(t.tag){case 26:ts(t),t.flags&Mo&&t.memoizedState!==null&&DS(_i,t.memoizedState,t.memoizedProps);break;case 5:ts(t);break;case 3:case 4:var n=_i;_i=sc(t.stateNode.containerInfo),ts(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Mo,Mo=16777216,ts(t),Mo=n):ts(t));break;default:ts(t)}}function M0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,T0(o,t)}M0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E0(t),t=t.sibling}function E0(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):Eo(t);break;default:Eo(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,T0(o,t)}M0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function T0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(x0(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var W_={getCacheForType:function(t){var n=Dn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},q_=typeof WeakMap=="function"?WeakMap:Map,Ut=0,jt=null,_t=null,Mt=0,Nt=0,Kn=null,Ia=!1,ns=!1,wf=!1,$i=0,Jt=0,za=0,_r=0,Cf=0,ci=0,is=0,To=null,Vn=null,Df=!1,Uf=0,Zl=1/0,Kl=null,Ba=null,wn=0,Ha=null,as=null,rs=0,Nf=0,Lf=null,A0=null,Ao=0,Pf=null;function Qn(){if((Ut&2)!==0&&Mt!==0)return Mt&-Mt;if(I.T!==null){var t=Wr;return t!==0?t:Gf()}return At()}function R0(){ci===0&&(ci=(Mt&536870912)===0||wt?k():536870912);var t=li.current;return t!==null&&(t.flags|=32),ci}function Jn(t,n,a){(t===jt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(ss(t,0),Ga(t,Mt,ci,!1)),we(t,a),((Ut&2)===0||t!==jt)&&(t===jt&&((Ut&2)===0&&(_r|=a),Jt===4&&Ga(t,Mt,ci,!1)),Li(t))}function w0(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=o?K_(t,n):If(t,n,!0),d=o;do{if(u===0){ns&&!o&&Ga(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Y_(a)){u=If(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var T=t;u=To;var z=T.current.memoizedState.isDehydrated;if(z&&(ss(T,b).flags|=256),b=If(T,b,!1),b!==2){if(wf&&!z){T.errorRecoveryDisabledLanes|=d,_r|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){ss(t,0),Ga(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,ci,!Ia);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Uf+300-st(),10<u)){if(Ga(o,n,ci,!Ia),Je(o,0,!0)!==0)break e;o.timeoutHandle=ix(C0.bind(null,o,a,Vn,Kl,Df,n,ci,_r,is,Ia,d,2,-0,0),u);break e}C0(o,a,Vn,Kl,Df,n,ci,_r,is,Ia,d,0,-0,0)}}break}while(!0);Li(t)}function C0(t,n,a,o,u,d,b,T,z,ee,me,_e,ae,re){if(t.timeoutHandle=-1,_e=n.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:CS},b0(n),_e=US(),_e!==null)){t.cancelPendingCommit=_e(F0.bind(null,t,n,d,a,o,u,b,T,z,me,1,ae,re)),Ga(t,d,b,!ee);return}F0(t,n,d,a,o,u,b,T,z)}function Y_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Wn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,a,o){n&=~Cf,n&=~_r,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&Se(t,a,n)}function Ql(){return(Ut&6)===0?(Ro(0),!1):!0}function Of(){if(_t!==null){if(Nt===0)var t=_t.return;else t=_t,ji=hr=null,Qu(t),Jr=null,go=0,t=_t;for(;t!==null;)l0(t.alternate,t),t=t.return;_t=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Of(),jt=t,_t=a=Vi(t.current,null),Mt=n,Nt=0,Kn=null,Ia=!1,ns=Oe(t,n),wf=!1,is=ci=Cf=_r=za=Jt=0,Vn=To=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return $i=n,_l(),a}function D0(t,n){pt=null,I.H=zl,n===oo||n===wl?(n=qp(),Nt=3):n===Xp?(n=qp(),Nt=4):Nt=n===Ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,_t===null&&(Jt=1,kl(t,ai(n,t.current)))}function U0(){var t=I.H;return I.H=zl,t===null?zl:t}function N0(){var t=I.A;return I.A=W_,t}function Ff(){Jt=4,Ia||(Mt&4194048)!==Mt&&li.current!==null||(ns=!0),(za&134217727)===0&&(_r&134217727)===0||jt===null||Ga(jt,Mt,ci,!1)}function If(t,n,a){var o=Ut;Ut|=2;var u=U0(),d=N0();(jt!==t||Mt!==n)&&(Kl=null,ss(t,n)),n=!1;var b=Jt;e:do try{if(Nt!==0&&_t!==null){var T=_t,z=Kn;switch(Nt){case 8:Of(),b=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var ee=Nt;if(Nt=0,Kn=null,os(t,T,z,ee),a&&ns){b=0;break e}break;default:ee=Nt,Nt=0,Kn=null,os(t,T,z,ee)}}Z_(),b=Jt;break}catch(me){D0(t,me)}while(!0);return n&&t.shellSuspendCounter++,ji=hr=null,Ut=o,I.H=u,I.A=d,_t===null&&(jt=null,Mt=0,_l()),b}function Z_(){for(;_t!==null;)L0(_t)}function K_(t,n){var a=Ut;Ut|=2;var o=U0(),u=N0();jt!==t||Mt!==n?(Kl=null,Zl=st()+500,ss(t,n)):ns=Oe(t,n);e:do try{if(Nt!==0&&_t!==null){n=_t;var d=Kn;t:switch(Nt){case 1:Nt=0,Kn=null,os(t,n,d,1);break;case 2:case 9:if(jp(d)){Nt=0,Kn=null,P0(n);break}n=function(){Nt!==2&&Nt!==9||jt!==t||(Nt=7),Li(t)},d.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:jp(d)?(Nt=0,Kn=null,P0(n)):(Nt=0,Kn=null,os(t,n,d,7));break;case 5:var b=null;switch(_t.tag){case 26:b=_t.memoizedState;case 5:case 27:var T=_t;if(!b||mx(b)){Nt=0,Kn=null;var z=T.sibling;if(z!==null)_t=z;else{var ee=T.return;ee!==null?(_t=ee,Jl(ee)):_t=null}break t}}Nt=0,Kn=null,os(t,n,d,5);break;case 6:Nt=0,Kn=null,os(t,n,d,6);break;case 8:Of(),Jt=6;break e;default:throw Error(r(462))}}Q_();break}catch(me){D0(t,me)}while(!0);return ji=hr=null,I.H=o,I.A=u,Ut=a,_t!==null?0:(jt=null,Mt=0,_l(),Jt)}function Q_(){for(;_t!==null&&!G();)L0(_t)}function L0(t){var n=s0(t.alternate,t,$i);t.memoizedProps=t.pendingProps,n===null?Jl(t):_t=n}function P0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=e0(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=e0(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Qu(n);default:l0(a,n),n=_t=Op(n,$i),n=s0(a,n,$i)}t.memoizedProps=t.pendingProps,n===null?Jl(t):_t=n}function os(t,n,a,o){ji=hr=null,Qu(n),Jr=null,go=0;var u=n.return;try{if(H_(t,u,n,a,Mt)){Jt=1,kl(t,ai(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;Jt=1,kl(t,ai(a,t.current)),_t=null;return}n.flags&32768?(wt||o===1?t=!0:ns||(Mt&536870912)!==0?t=!1:(Ia=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){O0(n,Ia);return}t=n.return;var a=V_(n.alternate,n,$i);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);Jt===0&&(Jt=5)}function O0(t,n){do{var a=k_(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);Jt=6,_t=null}function F0(t,n,a,o,u,d,b,T,z){t.cancelPendingCommit=null;do $l();while(wn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Au,Te(t,a,d,b,T,z),t===jt&&(_t=jt=null,Mt=0),as=n,Ha=t,rs=a,Nf=d,Lf=u,A0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tS(We,function(){return G0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=q.p,q.p=2,b=Ut,Ut|=4;try{X_(t,n,a)}finally{Ut=b,q.p=u,I.T=o}}wn=1,I0(),z0(),B0()}}function I0(){if(wn===1){wn=0;var t=Ha,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=q.p;q.p=2;var u=Ut;Ut|=4;try{_0(n,t);var d=Zf,b=Tp(t.containerInfo),T=d.focusedElem,z=d.selectionRange;if(b!==T&&T&&T.ownerDocument&&Ep(T.ownerDocument.documentElement,T)){if(z!==null&&yu(T)){var ee=z.start,me=z.end;if(me===void 0&&(me=ee),"selectionStart"in T)T.selectionStart=ee,T.selectionEnd=Math.min(me,T.value.length);else{var _e=T.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var re=ae.getSelection(),rt=T.textContent.length,tt=Math.min(z.start,rt),Bt=z.end===void 0?tt:Math.min(z.end,rt);!re.extend&&tt>Bt&&(b=Bt,Bt=tt,tt=b);var W=Mp(T,tt),X=Mp(T,Bt);if(W&&X&&(re.rangeCount!==1||re.anchorNode!==W.node||re.anchorOffset!==W.offset||re.focusNode!==X.node||re.focusOffset!==X.offset)){var Q=_e.createRange();Q.setStart(W.node,W.offset),re.removeAllRanges(),tt>Bt?(re.addRange(Q),re.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),re.addRange(Q))}}}}for(_e=[],re=T;re=re.parentNode;)re.nodeType===1&&_e.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var ge=_e[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}fc=!!Yf,Zf=Yf=null}finally{Ut=u,q.p=o,I.T=a}}t.current=n,wn=2}}function z0(){if(wn===2){wn=0;var t=Ha,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=q.p;q.p=2;var u=Ut;Ut|=4;try{m0(t,n.alternate,n)}finally{Ut=u,q.p=o,I.T=a}}wn=3}}function B0(){if(wn===4||wn===3){wn=0,mt();var t=Ha,n=as,a=rs,o=A0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,as=Ha=null,H0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),Ct(a),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(xe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=q.p,q.p=2,I.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var T=o[b];d(T.value,{componentStack:T.stack})}}finally{I.T=n,q.p=u}}(rs&3)!==0&&$l(),Li(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Pf?Ao++:(Ao=0,Pf=t):Ao=0,Ro(0)}}function H0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function $l(t){return I0(),z0(),B0(),G0()}function G0(){if(wn!==5)return!1;var t=Ha,n=Nf;Nf=0;var a=Ct(rs),o=I.T,u=q.p;try{q.p=32>a?32:a,I.T=null,a=Lf,Lf=null;var d=Ha,b=rs;if(wn=0,as=Ha=null,rs=0,(Ut&6)!==0)throw Error(r(331));var T=Ut;if(Ut|=4,E0(d.current),y0(d,d.current,b,a),Ut=T,Ro(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(xe,d)}catch{}return!0}finally{q.p=u,I.T=o,H0(t,n)}}function V0(t,n,a){n=ai(a,n),n=df(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(we(t,2),Li(t))}function Vt(t,n,a){if(t.tag===3)V0(t,t,a);else for(;n!==null;){if(n.tag===3){V0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){t=ai(a,t),a=Wm(2),o=Da(n,a,2),o!==null&&(qm(a,o,n,t),we(o,2),Li(o));break}}n=n.return}}function zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new q_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(wf=!0,u.add(a),t=J_.bind(null,t,n,a),n.then(t,t))}function J_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(Mt&a)===a&&(Jt===4||Jt===3&&(Mt&62914560)===Mt&&300>st()-Uf?(Ut&2)===0&&ss(t,0):Cf|=a,is===Mt&&(is=0)),Li(t)}function k0(t,n){n===0&&(n=Ne()),t=Vr(t,n),t!==null&&(we(t,n),Li(t))}function $_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),k0(t,a)}function eS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),k0(t,a)}function tS(t,n){return ut(t,n)}var ec=null,ls=null,Bf=!1,tc=!1,Hf=!1,Sr=0;function Li(t){t!==ls&&t.next===null&&(ls===null?ec=ls=t:ls=ls.next=t),tc=!0,Bf||(Bf=!0,iS())}function Ro(t,n){if(!Hf&&tc){Hf=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,T=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(b&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,q0(o,d))}else d=Mt,d=Je(o,o===jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Oe(o,d)||(a=!0,q0(o,d));o=o.next}while(a);Hf=!1}}function nS(){X0()}function X0(){tc=Bf=!1;var t=0;Sr!==0&&(fS()&&(t=Sr),Sr=0);for(var n=st(),a=null,o=ec;o!==null;){var u=o.next,d=j0(o,n);d===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(ls=a)):(a=o,(t!==0||(d&3)!==0)&&(tc=!0)),o=u}Ro(t)}function j0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-Fe(d),T=1<<b,z=u[b];z===-1?((T&a)===0||(T&o)!==0)&&(u[b]=it(T,n)):z<=n&&(t.expiredLanes|=T),d&=~T}if(n=jt,a=Mt,a=Je(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Ct(a)){case 2:case 8:a=kt;break;case 32:a=We;break;case 268435456:a=P;break;default:a=We}return o=W0.bind(null,t),a=ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,n){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=Mt;return o=Je(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(w0(t,o,n),j0(t,st()),t.callbackNode!=null&&t.callbackNode===a?W0.bind(null,t):null)}function q0(t,n){if($l())return null;w0(t,n,!0)}function iS(){hS(function(){(Ut&6)!==0?ut(Ve,nS):X0()})}function Gf(){return Sr===0&&(Sr=k()),Sr}function Y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function Z0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function aS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Y0((u[Tn]||null).action),b=o.submitter;b&&(n=(n=b[Tn]||null)?Y0(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var T=new xl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Sr!==0){var z=b?Z0(u,b):new FormData(u);of(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(T.preventDefault(),z=b?Z0(u,b):new FormData(u),of(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Vf=0;Vf<Tu.length;Vf++){var kf=Tu[Vf],rS=kf.toLowerCase(),sS=kf[0].toUpperCase()+kf.slice(1);vi(rS,"on"+sS)}vi(wp,"onAnimationEnd"),vi(Cp,"onAnimationIteration"),vi(Dp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(M_,"onTransitionRun"),vi(E_,"onTransitionStart"),vi(T_,"onTransitionCancel"),vi(Up,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function K0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var T=o[b],z=T.instance,ee=T.currentTarget;if(T=T.listener,z!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=ee;try{d(u)}catch(me){Vl(me)}u.currentTarget=null,d=z}else for(b=0;b<o.length;b++){if(T=o[b],z=T.instance,ee=T.currentTarget,T=T.listener,z!==d&&u.isPropagationStopped())break e;d=T,u.currentTarget=ee;try{d(u)}catch(me){Vl(me)}u.currentTarget=null,d=z}}}}function St(t,n){var a=n[xi];a===void 0&&(a=n[xi]=new Set);var o=t+"__bubble";a.has(o)||(Q0(n,t,2,!1),a.add(o))}function Xf(t,n,a){var o=0;n&&(o|=4),Q0(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function jf(t){if(!t[nc]){t[nc]=!0,ul.forEach(function(a){a!=="selectionchange"&&(oS.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Xf("selectionchange",!1,n))}}function Q0(t,n,a,o){switch(yx(n)){case 2:var u=PS;break;case 8:u=OS;break;default:u=rd}a=u.bind(null,n,a,t),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var T=o.stateNode.containerInfo;if(T===u)break;if(b===4)for(b=o.return;b!==null;){var z=b.tag;if((z===3||z===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;T!==null;){if(b=gi(T),b===null)return;if(z=b.tag,z===5||z===6||z===26||z===27){o=d=b;continue e}T=T.parentNode}}o=o.return}ap(function(){var ee=d,me=uu(a),_e=[];e:{var ae=Np.get(t);if(ae!==void 0){var re=xl,rt=t;switch(t){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":re=t_;break;case"focusin":rt="focus",re=xu;break;case"focusout":rt="blur",re=xu;break;case"beforeblur":case"afterblur":re=xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=a_;break;case wp:case Cp:case Dp:re=Wv;break;case Up:re=s_;break;case"scroll":case"scrollend":re=Gv;break;case"wheel":re=l_;break;case"copy":case"cut":case"paste":re=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=cp;break;case"toggle":case"beforetoggle":re=u_}var tt=(n&4)!==0,Bt=!tt&&(t==="scroll"||t==="scrollend"),W=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var X=ee,Q;X!==null;){var ge=X;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||W===null||(ge=Ws(X,W),ge!=null&&tt.push(Co(X,ge,Q))),Bt)break;X=X.return}0<tt.length&&(ae=new re(ae,rt,null,a,me),_e.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",re=t==="mouseout"||t==="pointerout",ae&&a!==cu&&(rt=a.relatedTarget||a.fromElement)&&(gi(rt)||rt[zi]))break e;if((re||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,re?(rt=a.relatedTarget||a.toElement,re=ee,rt=rt?gi(rt):null,rt!==null&&(Bt=c(rt),tt=rt.tag,rt!==Bt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(re=null,rt=ee),re!==rt)){if(tt=op,ge="onMouseLeave",W="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=cp,ge="onPointerLeave",W="onPointerEnter",X="pointer"),Bt=re==null?ae:ba(re),Q=rt==null?ae:ba(rt),ae=new tt(ge,X+"leave",re,a,me),ae.target=Bt,ae.relatedTarget=Q,ge=null,gi(me)===ee&&(tt=new tt(W,X+"enter",rt,a,me),tt.target=Q,tt.relatedTarget=Bt,ge=tt),Bt=ge,re&&rt)t:{for(tt=re,W=rt,X=0,Q=tt;Q;Q=cs(Q))X++;for(Q=0,ge=W;ge;ge=cs(ge))Q++;for(;0<X-Q;)tt=cs(tt),X--;for(;0<Q-X;)W=cs(W),Q--;for(;X--;){if(tt===W||W!==null&&tt===W.alternate)break t;tt=cs(tt),W=cs(W)}tt=null}else tt=null;re!==null&&J0(_e,ae,re,tt,!1),rt!==null&&Bt!==null&&J0(_e,Bt,rt,tt,!0)}}e:{if(ae=ee?ba(ee):window,re=ae.nodeName&&ae.nodeName.toLowerCase(),re==="select"||re==="input"&&ae.type==="file")var Ge=gp;else if(mp(ae))if(vp)Ge=S_;else{Ge=v_;var gt=g_}else re=ae.nodeName,!re||re.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&lu(ee.elementType)&&(Ge=gp):Ge=__;if(Ge&&(Ge=Ge(t,ee))){xp(_e,Ge,a,me);break e}gt&&gt(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Gt(ae,"number",ae.value)}switch(gt=ee?ba(ee):window,t){case"focusin":(mp(gt)||gt.contentEditable==="true")&&(Br=gt,bu=ee,eo=null);break;case"focusout":eo=bu=Br=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Ap(_e,a,me);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":Ap(_e,a,me)}var Ye;if(vu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else zr?hp(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(up&&a.locale!=="ko"&&(zr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&zr&&(Ye=rp()):(Aa=me,hu="value"in Aa?Aa.value:Aa.textContent,zr=!0)),gt=ic(ee,nt),0<gt.length&&(nt=new lp(nt,t,null,a,me),_e.push({event:nt,listeners:gt}),Ye?nt.data=Ye:(Ye=pp(a),Ye!==null&&(nt.data=Ye)))),(Ye=d_?h_(t,a):p_(t,a))&&(nt=ic(ee,"onBeforeInput"),0<nt.length&&(gt=new lp("onBeforeInput","beforeinput",null,a,me),_e.push({event:gt,listeners:nt}),gt.data=Ye)),aS(_e,t,ee,a,me)}K0(_e,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ws(t,a),u!=null&&o.unshift(Co(t,u,d)),u=Ws(t,n),u!=null&&o.push(Co(t,u,d))),t.tag===3)return o;t=t.return}return[]}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function J0(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var T=a,z=T.alternate,ee=T.stateNode;if(T=T.tag,z!==null&&z===o)break;T!==5&&T!==26&&T!==27||ee===null||(z=ee,u?(ee=Ws(a,d),ee!=null&&b.unshift(Co(a,ee,z))):u||(ee=Ws(a,d),ee!=null&&b.push(Co(a,ee,z)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function ex(t,n){return n=$0(n),$0(t)===n}function ac(){}function zt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||tn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&tn(t,""+o);break;case"className":Ae(t,"class",o);break;case"tabIndex":Ae(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,o);break;case"style":np(t,o,d);break;case"data":if(n!=="object"){Ae(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&zt(t,n,"name",u.name,u,null),zt(t,n,"formEncType",u.formEncType,u,null),zt(t,n,"formMethod",u.formMethod,u,null),zt(t,n,"formTarget",u.formTarget,u,null)):(zt(t,n,"encType",u.encType,u,null),zt(t,n,"method",u.method,u,null),zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ac);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=dl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),K(t,"popover",o);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":K(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bv.get(a)||a,K(t,a,o))}}function qf(t,n,a,o,u,d){switch(a){case"style":np(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?tn(t,o):(typeof o=="number"||typeof o=="bigint")&&tn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Tn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):K(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,d,b,a,null)}}u&&zt(t,n,"srcSet",a.srcSet,a,null),o&&zt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var T=d=b=u=null,z=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":b=me;break;case"checked":z=me;break;case"defaultChecked":ee=me;break;case"value":d=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:zt(t,n,o,me,a,null)}}Ta(t,d,T,z,ee,b,u,!1),Qe(t);return;case"select":St("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":b=T;break;case"multiple":o=T;default:zt(t,n,u,T,a,null)}n=d,a=b,t.multiple=!!o,n!=null?en(t,!!o,n,!1):a!=null&&en(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(T=a[b],T!=null))switch(b){case"value":o=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:zt(t,n,b,T,a,null)}Sn(t,o,u,d),Qe(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:zt(t,n,z,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)St(wo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:zt(t,n,ee,o,a,null)}return;default:if(lu(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&qf(t,n,me,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&zt(t,n,T,o,a,null))}function uS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,T=null,z=null,ee=null,me=null;for(re in a){var _e=a[re];if(a.hasOwnProperty(re)&&_e!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":z=_e;default:o.hasOwnProperty(re)||zt(t,n,re,null,o,_e)}}for(var ae in o){var re=o[ae];if(_e=a[ae],o.hasOwnProperty(ae)&&(re!=null||_e!=null))switch(ae){case"type":d=re;break;case"name":u=re;break;case"checked":ee=re;break;case"defaultChecked":me=re;break;case"value":b=re;break;case"defaultValue":T=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:re!==_e&&zt(t,n,ae,re,o,_e)}}An(t,b,T,z,ee,me,d,u);return;case"select":re=b=T=ae=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":re=z;default:o.hasOwnProperty(d)||zt(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":ae=d;break;case"defaultValue":T=d;break;case"multiple":b=d;default:d!==z&&zt(t,n,u,d,o,z)}n=T,a=b,o=re,ae!=null?en(t,!!a,ae,!1):!!o!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":re=ae=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:zt(t,n,T,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":ae=u;break;case"defaultValue":re=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&zt(t,n,b,u,o,d)}Fn(t,ae,re);return;case"option":for(var rt in a)if(ae=a[rt],a.hasOwnProperty(rt)&&ae!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:zt(t,n,rt,null,o,ae)}for(z in o)if(ae=o[z],re=a[z],o.hasOwnProperty(z)&&ae!==re&&(ae!=null||re!=null))switch(z){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:zt(t,n,z,ae,o,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!o.hasOwnProperty(tt)&&zt(t,n,tt,null,o,ae);for(ee in o)if(ae=o[ee],re=a[ee],o.hasOwnProperty(ee)&&ae!==re&&(ae!=null||re!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:zt(t,n,ee,ae,o,re)}return;default:if(lu(n)){for(var Bt in a)ae=a[Bt],a.hasOwnProperty(Bt)&&ae!==void 0&&!o.hasOwnProperty(Bt)&&qf(t,n,Bt,void 0,o,ae);for(me in o)ae=o[me],re=a[me],!o.hasOwnProperty(me)||ae===re||ae===void 0&&re===void 0||qf(t,n,me,ae,o,re);return}}for(var W in a)ae=a[W],a.hasOwnProperty(W)&&ae!=null&&!o.hasOwnProperty(W)&&zt(t,n,W,null,o,ae);for(_e in o)ae=o[_e],re=a[_e],!o.hasOwnProperty(_e)||ae===re||ae==null&&re==null||zt(t,n,_e,ae,o,re)}var Yf=null,Zf=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function tx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function fS(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var ix=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,ax=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof ax<"u"?function(t){return ax.resolve(null).then(t).catch(pS)}:ix;function pS(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function rx(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&Do(b.documentElement),a&2&&Do(b.body),a&4)for(a=b.head,Do(a),b=a.firstChild;b;){var T=b.nextSibling,z=b.nodeName;b[Ri]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=T}}if(u===0){t.removeChild(d),zo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);zo(n)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Or(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function mS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ri])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function xS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function $f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function gS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var ed=null;function sx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function ox(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Or(t)}var ui=new Map,lx=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ea=q.d;q.d={f:vS,r:_S,D:SS,C:yS,L:bS,m:MS,X:TS,S:ES,M:AS};function vS(){var t=ea.f(),n=Ql();return t||n}function _S(t){var n=Bi(t);n!==null&&n.tag===5&&n.type==="form"?wm(n):ea.r(t)}var us=typeof document>"u"?null:document;function cx(t,n,a){var o=us;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lx.has(u)||(lx.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),ln(n),o.head.appendChild(n)))}}function SS(t){ea.D(t),cx("dns-prefetch",t,null)}function yS(t,n){ea.C(t,n),cx("preconnect",t,n)}function bS(t,n,a){ea.L(t,n,a);var o=us;if(o&&t&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(t)+'"]';var d=u;switch(n){case"style":d=fs(t);break;case"script":d=ds(t)}ui.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),Cn(n,"link",t),ln(n),o.head.appendChild(n)))}}function MS(t,n){ea.m(t,n);var a=us;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ds(t)}if(!ui.has(d)&&(t=x({rel:"modulepreload",href:t},n),ui.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),Cn(o,"link",t),ln(o),a.head.appendChild(o)}}}function ES(t,n,a){ea.S(t,n,a);var o=us;if(o&&t){var u=Ma(o).hoistableStyles,d=fs(t);n=n||"default";var b=u.get(d);if(!b){var T={loading:0,preload:null};if(b=o.querySelector(Uo(d)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(d))&&td(t,a);var z=b=o.createElement("link");ln(z),Cn(z,"link",t),z._p=new Promise(function(ee,me){z.onload=ee,z.onerror=me}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:T},u.set(d,b)}}}function TS(t,n){ea.X(t,n);var a=us;if(a&&t){var o=Ma(a).hoistableScripts,u=ds(t),d=o.get(u);d||(d=a.querySelector(No(u)),d||(t=x({src:t,async:!0},n),(n=ui.get(u))&&nd(t,n),d=a.createElement("script"),ln(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function AS(t,n){ea.M(t,n);var a=us;if(a&&t){var o=Ma(a).hoistableScripts,u=ds(t),d=o.get(u);d||(d=a.querySelector(No(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=ui.get(u))&&nd(t,n),d=a.createElement("script"),ln(d),Cn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ux(t,n,a,o){var u=(u=J.current)?sc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fs(a.href),a=Ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fs(a.href);var d=Ma(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(Uo(t)))&&!d._p&&(b.instance=d,b.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),d||RS(u,t,a,b.state))),n&&o===null)throw Error(r(528,""));return b}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=Ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function fs(t){return'href="'+pn(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function fx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function RS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),ln(n),t.head.appendChild(n))}function ds(t){return'[src="'+pn(t)+'"]'}function No(t){return"script[async]"+t}function dx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,ln(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ln(o),Cn(o,"style",u),oc(o,a.precedence,t),n.instance=o;case"stylesheet":u=fs(a.href);var d=t.querySelector(Uo(u));if(d)return n.state.loading|=4,n.instance=d,ln(d),d;o=fx(a),(u=ui.get(u))&&td(o,u),d=(t.ownerDocument||t).createElement("link"),ln(d);var b=d;return b._p=new Promise(function(T,z){b.onload=T,b.onerror=z}),Cn(d,"link",o),n.state.loading|=4,oc(d,a.precedence,t),n.instance=d;case"script":return d=ds(a.src),(u=t.querySelector(No(d)))?(n.instance=u,ln(u),u):(o=a,(u=ui.get(d))&&(o=x({},a),nd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ln(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,t));return n.instance}function oc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var T=o[b];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function hx(t,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ri]||d[_n]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var T=o.get(b);T?T.push(d):o.set(b,[d])}}return o}function px(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Lo=null;function CS(){}function DS(t,n,a){if(Lo===null)throw Error(r(475));var o=Lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=fs(a.href),d=t.querySelector(Uo(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=cc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,ln(d);return}d=t.ownerDocument||t,a=fx(a),(u=ui.get(u))&&td(a,u),d=d.createElement("link"),ln(d);var b=d;b._p=new Promise(function(T,z){b.onload=T,b.onerror=z}),Cn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=cc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function US(){if(Lo===null)throw Error(r(475));var t=Lo;return t.stylesheets&&t.count===0&&id(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&id(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function cc(){if(this.count--,this.count===0){if(this.stylesheets)id(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function id(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(NS,t),uc=null,cc.call(t))}function NS(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var o=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function LS(t,n,a,o,u,d,b,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function xx(t,n,a,o,u,d,b,T,z,ee,me,_e){return t=new LS(t,n,a,b,T,z,ee,_e),n=1,d===!0&&(n|=24),d=qn(3,null,null,n),t.current=d,d.stateNode=t,n=Iu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Gu(d),t}function gx(t){return t?(t=kr,t):kr}function vx(t,n,a,o,u,d){u=gx(u),o.context===null?o.context=u:o.pendingContext=u,o=Ca(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Da(t,o,n),a!==null&&(Jn(a,t,n),co(a,t,n))}function _x(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ad(t,n){_x(t,n),(t=t.alternate)&&_x(t,n)}function Sx(t){if(t.tag===13){var n=Vr(t,67108864);n!==null&&Jn(n,t,67108864),ad(t,67108864)}}var fc=!0;function PS(t,n,a,o){var u=I.T;I.T=null;var d=q.p;try{q.p=2,rd(t,n,a,o)}finally{q.p=d,I.T=u}}function OS(t,n,a,o){var u=I.T;I.T=null;var d=q.p;try{q.p=8,rd(t,n,a,o)}finally{q.p=d,I.T=u}}function rd(t,n,a,o){if(fc){var u=sd(o);if(u===null)Wf(t,n,o,dc,a),bx(t,o);else if(IS(u,t,n,a,o))o.stopPropagation();else if(bx(t,o),n&4&&-1<FS.indexOf(t)){for(;u!==null;){var d=Bi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Ze(d.pendingLanes);if(b!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var z=1<<31-Fe(b);T.entanglements[1]|=z,b&=~z}Li(d),(Ut&6)===0&&(Zl=st()+500,Ro(0))}}break;case 13:T=Vr(d,2),T!==null&&Jn(T,d,2),Ql(),ad(d,2)}if(d=sd(o),d===null&&Wf(t,n,o,dc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Wf(t,n,o,null,a)}}function sd(t){return t=uu(t),od(t)}var dc=null;function od(t){if(dc=null,t=gi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function yx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case Ve:return 2;case kt:return 8;case We:case ot:return 32;case P:return 268435456;default:return 32}default:return 32}}var ld=!1,ka=null,Xa=null,ja=null,Oo=new Map,Fo=new Map,Wa=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bx(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Io(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Bi(n),n!==null&&Sx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function IS(t,n,a,o,u){switch(n){case"focusin":return ka=Io(ka,t,n,a,o,u),!0;case"dragenter":return Xa=Io(Xa,t,n,a,o,u),!0;case"mouseover":return ja=Io(ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Oo.set(d,Io(Oo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Io(Fo.get(d)||null,t,n,a,o,u)),!0}return!1}function Mx(t){var n=gi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ii(t.priority,function(){if(a.tag===13){var o=Qn();o=at(o);var u=Vr(a,o);u!==null&&Jn(u,a,o),ad(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);cu=o,a.target.dispatchEvent(o),cu=null}else return n=Bi(a),n!==null&&Sx(n),t.blockedOn=a,!1;n.shift()}return!0}function Ex(t,n,a){hc(t)&&a.delete(n)}function zS(){ld=!1,ka!==null&&hc(ka)&&(ka=null),Xa!==null&&hc(Xa)&&(Xa=null),ja!==null&&hc(ja)&&(ja=null),Oo.forEach(Ex),Fo.forEach(Ex)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,ld||(ld=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,zS)))}var mc=null;function Tx(t){mc!==t&&(mc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(od(o||a)===null)continue;break}var d=Bi(a);d!==null&&(t.splice(n,3),n-=3,of(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zo(t){function n(z){return pc(z,t)}ka!==null&&pc(ka,t),Xa!==null&&pc(Xa,t),ja!==null&&pc(ja,t),Oo.forEach(n),Fo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Mx(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[Tn]||null;if(typeof d=="function")b||Tx(a);else if(b){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[Tn]||null)T=b.formAction;else if(od(u)!==null)continue}else T=b.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Tx(a)}}}function cd(t){this._internalRoot=t}xc.prototype.render=cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();vx(a,o,t,n,null,null)},xc.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;vx(t.current,2,null,t,null,null),Ql(),n[zi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Mx(t)}};var Ax=e.version;if(Ax!=="19.1.1")throw Error(r(527,Ax,"19.1.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var BS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{xe=gc.inject(BS),ve=gc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Vm,d=km,b=Xm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=xx(t,1,!1,null,null,a,o,u,d,b,T,null),t[zi]=n.current,jf(t),new cd(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=Vm,b=km,T=Xm,z=null,ee=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ee=a.formState)),n=xx(t,1,!0,n,a??null,o,u,d,b,T,z,ee),n.context=gx(null),a=n.current,o=Qn(),o=at(o),u=Ca(o),u.callback=null,Da(a,u,o),a=o,n.current.lanes=a,we(n,a),Li(n),t[zi]=n.current,jf(t),new xc(n)},Ho.version="19.1.1",Ho}var Fx;function KS(){if(Fx)return dd.exports;Fx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dd.exports=ZS(),dd.exports}var QS=KS();/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ix="popstate";function JS(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return Yd("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Zo(l)}return ey(e,i,null,s)}function Kt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ai(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $S(){return Math.random().toString(36).substring(2,10)}function zx(s,e){return{usr:s.state,key:s.key,idx:e}}function Yd(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Is(e):e,state:i,key:e&&e.key||r||$S()}}function Zo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Is(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function ey(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function g(){h="POP";let S=x(),v=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:v})}function _(S,v){h="PUSH";let L=Yd(A.location,S,v);p=x()+1;let N=zx(L,p),F=A.createHref(L);try{f.pushState(N,"",F)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(F)}c&&m&&m({action:h,location:A.location,delta:1})}function y(S,v){h="REPLACE";let L=Yd(A.location,S,v);p=x();let N=zx(L,p),F=A.createHref(L);f.replaceState(N,"",F),c&&m&&m({action:h,location:A.location,delta:0})}function M(S){return ty(S)}let A={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Ix,g),m=S,()=>{l.removeEventListener(Ix,g),m=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let v=M(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:y,go(S){return f.go(S)}};return A}function ty(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Hg(s,e,i="/"){return ny(s,e,i,!1)}function ny(s,e,i,r){let l=typeof e=="string"?Is(e):e,c=ga(l.pathname||"/",i);if(c==null)return null;let f=Gg(s);iy(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=py(c);h=dy(f[m],p,r)}return h}function Gg(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&m)return;Kt(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let g=pa([r,x.relativePath]),_=i.concat(x);f.children&&f.children.length>0&&(Kt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Gg(f.children,e,_,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:uy(g,f.index),routesMeta:_})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Vg(f.path))c(f,h,!0,m)}),e}function Vg(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Vg(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function iy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:fy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var ay=/^:[\w-]+$/,ry=3,sy=2,oy=1,ly=10,cy=-2,Bx=s=>s==="*";function uy(s,e){let i=s.split("/"),r=i.length;return i.some(Bx)&&(r+=cy),e&&(r+=sy),i.filter(l=>!Bx(l)).reduce((l,c)=>l+(ay.test(c)?ry:c===""?oy:ly),r)}function fy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function dy(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),_=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:pa([c,g.pathname]),pathnameBase:_y(pa([c,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(c=pa([c,g.pathnameBase]))}return f}function Kc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=hy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:x,isOptional:g},_)=>{if(x==="*"){let M=h[_]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const y=h[_];return g&&!y?p[x]=void 0:p[x]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function hy(s,e=!1,i=!0){Ai(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function py(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ai(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ga(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var my=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xy=s=>my.test(s);function gy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Is(s):s,c;if(i)if(xy(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ai(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Hx(i.substring(1),"/"):c=Hx(i,e)}else c=e;return{pathname:c,search:Sy(r),hash:yy(l)}}function Hx(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function xd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function kg(s){let e=vy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Xg(s,e,i,r=!1){let l;typeof s=="string"?l=Is(s):(l={...s},Kt(!l.pathname||!l.pathname.includes("?"),xd("?","pathname","search",l)),Kt(!l.pathname||!l.pathname.includes("#"),xd("#","pathname","hash",l)),Kt(!l.search||!l.search.includes("#"),xd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),g-=1;l.pathname=_.join("/")}h=g>=0?e[g]:"/"}let m=gy(l,h),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var pa=s=>s.join("/").replace(/\/\/+/g,"/"),_y=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,yy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function by(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jg=["POST","PUT","PATCH","DELETE"];new Set(jg);var My=["GET",...jg];new Set(My);var zs=se.createContext(null);zs.displayName="DataRouter";var tu=se.createContext(null);tu.displayName="DataRouterState";se.createContext(!1);var Wg=se.createContext({isTransitioning:!1});Wg.displayName="ViewTransition";var Ey=se.createContext(new Map);Ey.displayName="Fetchers";var Ty=se.createContext(null);Ty.displayName="Await";var Fi=se.createContext(null);Fi.displayName="Navigation";var tl=se.createContext(null);tl.displayName="Location";var ya=se.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var Vh=se.createContext(null);Vh.displayName="RouteError";function Ay(s,{relative:e}={}){Kt(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=se.useContext(Fi),{hash:l,pathname:c,search:f}=il(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:pa([i,c])),r.createHref({pathname:h,search:f,hash:l})}function nl(){return se.useContext(tl)!=null}function Pr(){return Kt(nl(),"useLocation() may be used only in the context of a <Router> component."),se.useContext(tl).location}var qg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yg(s){se.useContext(Fi).static||se.useLayoutEffect(s)}function Zg(){let{isDataRoute:s}=se.useContext(ya);return s?By():Ry()}function Ry(){Kt(nl(),"useNavigate() may be used only in the context of a <Router> component.");let s=se.useContext(zs),{basename:e,navigator:i}=se.useContext(Fi),{matches:r}=se.useContext(ya),{pathname:l}=Pr(),c=JSON.stringify(kg(r)),f=se.useRef(!1);return Yg(()=>{f.current=!0}),se.useCallback((m,p={})=>{if(Ai(f.current,qg),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=Xg(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:pa([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,s])}se.createContext(null);function il(s,{relative:e}={}){let{matches:i}=se.useContext(ya),{pathname:r}=Pr(),l=JSON.stringify(kg(i));return se.useMemo(()=>Xg(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function wy(s,e){return Kg(s,e)}function Kg(s,e,i,r,l){Kt(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=se.useContext(Fi),{matches:f}=se.useContext(ya),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let L=g&&g.path||"";Qg(p,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let _=Pr(),y;if(e){let L=typeof e=="string"?Is(e):e;Kt(x==="/"||L.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${L.pathname}" was given in the \`location\` prop.`),y=L}else y=_;let M=y.pathname||"/",A=M;if(x!=="/"){let L=x.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=Hg(s,{pathname:A});Ai(g||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ai(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Ly(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:pa([x,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?x:pa([x,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,r,l);return e&&v?se.createElement(tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function Cy(){let s=zy(),e=by(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=se.createElement(se.Fragment,null,se.createElement("p",null,"💿 Hey developer 👋"),se.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",se.createElement("code",{style:c},"ErrorBoundary")," or"," ",se.createElement("code",{style:c},"errorElement")," prop on your route.")),se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),i?se.createElement("pre",{style:l},i):null,f)}var Dy=se.createElement(Cy,null),Uy=class extends se.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?se.createElement(ya.Provider,{value:this.props.routeContext},se.createElement(Vh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ny({routeContext:s,match:e,children:i}){let r=se.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),se.createElement(ya.Provider,{value:s},i)}function Ly(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let x=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Kt(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,m=-1;if(i)for(let x=0;x<c.length;x++){let g=c[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=x),g.route.id){let{loaderData:_,errors:y}=i,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||M){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(x,g)=>{r(x,{location:i.location,params:i.matches?.[0]?.params??{},errorInfo:g})}:void 0;return c.reduceRight((x,g,_)=>{let y,M=!1,A=null,S=null;i&&(y=f&&g.route.id?f[g.route.id]:void 0,A=g.route.errorElement||Dy,h&&(m<0&&_===0?(Qg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,S=null):m===_&&(M=!0,S=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,_+1)),L=()=>{let N;return y?N=A:M?N=S:g.route.Component?N=se.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=x,se.createElement(Ny,{match:g,routeContext:{outlet:x,matches:v,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?se.createElement(Uy,{location:i.location,revalidation:i.revalidation,component:A,error:y,children:L(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):L()},null)}function kh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Py(s){let e=se.useContext(zs);return Kt(e,kh(s)),e}function Oy(s){let e=se.useContext(tu);return Kt(e,kh(s)),e}function Fy(s){let e=se.useContext(ya);return Kt(e,kh(s)),e}function Xh(s){let e=Fy(s),i=e.matches[e.matches.length-1];return Kt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Iy(){return Xh("useRouteId")}function zy(){let s=se.useContext(Vh),e=Oy("useRouteError"),i=Xh("useRouteError");return s!==void 0?s:e.errors?.[i]}function By(){let{router:s}=Py("useNavigate"),e=Xh("useNavigate"),i=se.useRef(!1);return Yg(()=>{i.current=!0}),se.useCallback(async(l,c={})=>{Ai(i.current,qg),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Gx={};function Qg(s,e,i){!e&&!Gx[s]&&(Gx[s]=!0,Ai(!1,i))}se.memo(Hy);function Hy({routes:s,future:e,state:i,unstable_onError:r}){return Kg(s,void 0,i,r,e)}function ca(s){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gy({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Kt(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=se.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Is(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:_="default"}=i,y=se.useMemo(()=>{let M=ga(m,f);return M==null?null:{location:{pathname:M,search:p,hash:x,state:g,key:_},navigationType:r}},[f,m,p,x,g,_,r]);return Ai(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:se.createElement(Fi.Provider,{value:h},se.createElement(tl.Provider,{children:e,value:y}))}function Vy({children:s,location:e}){return wy(Zd(s),e)}function Zd(s,e=[]){let i=[];return se.Children.forEach(s,(r,l)=>{if(!se.isValidElement(r))return;let c=[...e,l];if(r.type===se.Fragment){i.push.apply(i,Zd(r.props.children,c));return}Kt(r.type===ca,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Zd(r.props.children,c)),i.push(f)}),i}var kc="get",Xc="application/x-www-form-urlencoded";function nu(s){return s!=null&&typeof s.tagName=="string"}function ky(s){return nu(s)&&s.tagName.toLowerCase()==="button"}function Xy(s){return nu(s)&&s.tagName.toLowerCase()==="form"}function jy(s){return nu(s)&&s.tagName.toLowerCase()==="input"}function Wy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function qy(s,e){return s.button===0&&(!e||e==="_self")&&!Wy(s)}var vc=null;function Yy(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var Zy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gd(s){return s!=null&&!Zy.has(s)?(Ai(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xc}"`),null):s}function Ky(s,e){let i,r,l,c,f;if(Xy(s)){let h=s.getAttribute("action");r=h?ga(h,e):null,i=s.getAttribute("method")||kc,l=gd(s.getAttribute("enctype"))||Xc,c=new FormData(s)}else if(ky(s)||jy(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ga(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||kc,l=gd(s.getAttribute("formenctype"))||gd(h.getAttribute("enctype"))||Xc,c=new FormData(h,s),!Yy()){let{name:p,type:x,value:g}=s;if(x==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,g)}}else{if(nu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=kc,r=null,l=Xc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Qy(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ga(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function Jy(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $y(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function eb(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await Jy(c,i);return f.links?f.links():[]}return[]}));return ab(r.flat(1).filter($y).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Vx(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=r.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function tb(s,e,{includeHydrateFallback:i}={}){return nb(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function nb(s){return[...new Set(s)]}function ib(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function ab(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(ib(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Jg(){let s=se.useContext(zs);return jh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function rb(){let s=se.useContext(tu);return jh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Wh=se.createContext(void 0);Wh.displayName="FrameworkContext";function $g(){let s=se.useContext(Wh);return jh(s,"You must render this element inside a <HydratedRouter> element"),s}function sb(s,e){let i=se.useContext(Wh),[r,l]=se.useState(!1),[c,f]=se.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,_=se.useRef(null);se.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=v=>{v.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),se.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Go(h,y),onBlur:Go(m,M),onMouseEnter:Go(p,y),onMouseLeave:Go(x,M),onTouchStart:Go(g,y)}]:[!1,_,{}]}function Go(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function ob({page:s,...e}){let{router:i}=Jg(),r=se.useMemo(()=>Hg(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?se.createElement(cb,{page:s,matches:r,...e}):null}function lb(s){let{manifest:e,routeModules:i}=$g(),[r,l]=se.useState([]);return se.useEffect(()=>{let c=!1;return eb(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function cb({page:s,matches:e,...i}){let r=Pr(),{manifest:l,routeModules:c}=$g(),{basename:f}=Jg(),{loaderData:h,matches:m}=rb(),p=se.useMemo(()=>Vx(s,e,m,l,r,"data"),[s,e,m,l,r]),x=se.useMemo(()=>Vx(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=se.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let M=new Set,A=!1;if(e.forEach(v=>{let L=l.routes[v.route.id];!L||!L.hasLoader||(!p.some(N=>N.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:M.add(v.route.id))}),M.size===0)return[];let S=Qy(s,f,"data");return A&&M.size>0&&S.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),_=se.useMemo(()=>tb(x,l),[x,l]),y=lb(x);return se.createElement(se.Fragment,null,g.map(M=>se.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),_.map(M=>se.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:A})=>se.createElement("link",{key:M,nonce:i.nonce,...A})))}function ub(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ev&&(window.__reactRouterVersion="7.9.6")}catch{}function fb({basename:s,children:e,window:i}){let r=se.useRef();r.current==null&&(r.current=JS({window:i,v5Compat:!0}));let l=r.current,[c,f]=se.useState({action:l.action,location:l.location}),h=se.useCallback(m=>{se.startTransition(()=>f(m))},[f]);return se.useLayoutEffect(()=>l.listen(h),[l,h]),se.createElement(Gy,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var tv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nv=se.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,..._},y){let{basename:M}=se.useContext(Fi),A=typeof p=="string"&&tv.test(p),S,v=!1;if(typeof p=="string"&&A&&(S=p,ev))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),B=ga(C.pathname,M);C.origin===D.origin&&B!=null?p=B+C.search+C.hash:v=!0}catch{Ai(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Ay(p,{relative:l}),[N,F,H]=sb(r,_),O=mb(p,{replace:f,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g});function V(D){e&&e(D),D.defaultPrevented||O(D)}let ie=se.createElement("a",{..._,...H,href:S||L,onClick:v||c?e:V,ref:ub(y,F),target:m,"data-discover":!A&&i==="render"?"true":void 0});return N&&!A?se.createElement(se.Fragment,null,ie,se.createElement(ob,{page:L})):ie});nv.displayName="Link";var db=se.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},x){let g=il(f,{relative:p.relative}),_=Pr(),y=se.useContext(tu),{navigator:M,basename:A}=se.useContext(Fi),S=y!=null&&Sb(g)&&h===!0,v=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,L=_.pathname,N=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(L=L.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&A&&(N=ga(N,A)||N);const F=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let H=L===v||!l&&L.startsWith(v)&&L.charAt(F)==="/",O=N!=null&&(N===v||!l&&N.startsWith(v)&&N.charAt(v.length)==="/"),V={isActive:H,isPending:O,isTransitioning:S},ie=H?e:void 0,D;typeof r=="function"?D=r(V):D=[r,H?"active":null,O?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(V):c;return se.createElement(nv,{...p,"aria-current":ie,className:D,ref:x,style:C,to:f,viewTransition:h},typeof m=="function"?m(V):m)});db.displayName="NavLink";var hb=se.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=kc,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,..._},y)=>{let M=vb(),A=_b(h,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&tv.test(h),L=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let F=N.nativeEvent.submitter,H=F?.getAttribute("formmethod")||f;M(F||N.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return se.createElement("form",{ref:y,method:S,action:A,onSubmit:r?m:L,..._,"data-discover":!v&&s==="render"?"true":void 0})});hb.displayName="Form";function pb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iv(s){let e=se.useContext(zs);return Kt(e,pb(s)),e}function mb(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=Zg(),m=Pr(),p=il(s,{relative:c});return se.useCallback(x=>{if(qy(x,e)){x.preventDefault();let g=i!==void 0?i:Zo(m)===Zo(p);h(s,{replace:g,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,r,e,s,l,c,f])}var xb=0,gb=()=>`__${String(++xb)}__`;function vb(){let{router:s}=iv("useSubmit"),{basename:e}=se.useContext(Fi),i=Iy();return se.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=Ky(r,e);if(l.navigate===!1){let x=l.fetcherKey||gb();await s.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function _b(s,{relative:e}={}){let{basename:i}=se.useContext(Fi),r=se.useContext(ya);Kt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...il(s||".",{relative:e})},f=Pr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:pa([i,c.pathname])),Zo(c)}function Sb(s,{relative:e}={}){let i=se.useContext(Wg);Kt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=iv("useViewTransitionState"),l=il(s,{relative:e});if(!i.isTransitioning)return!1;let c=ga(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ga(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Kc(l.pathname,f)!=null||Kc(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="181",yb=0,kx=1,bb=2,av=1,Mb=2,ua=3,ir=0,Xn=1,fa=2,ma=0,Ds=1,Kd=2,Xx=3,jx=4,Eb=5,wr=100,Tb=101,Ab=102,Rb=103,wb=104,Cb=200,Db=201,Ub=202,Nb=203,Qd=204,Jd=205,Lb=206,Pb=207,Ob=208,Fb=209,Ib=210,zb=211,Bb=212,Hb=213,Gb=214,$d=0,eh=1,th=2,Ns=3,nh=4,ih=5,ah=6,rh=7,rv=0,Vb=1,kb=2,nr=0,Xb=1,jb=2,Wb=3,qb=4,Yb=5,Zb=6,Kb=7,sv=300,Ls=301,Ps=302,sh=303,oh=304,iu=306,lh=1e3,da=1001,ch=1002,ti=1003,Qb=1004,_c=1005,mi=1006,vd=1007,Dr=1008,va=1009,ov=1010,lv=1011,Ko=1012,Yh=1013,Nr=1014,ha=1015,Bs=1016,Zh=1017,Kh=1018,Qo=1020,cv=35902,uv=35899,fv=1021,dv=1022,Ti=1023,Jo=1026,$o=1027,hv=1028,Qh=1029,Jh=1030,$h=1031,ep=1033,jc=33776,Wc=33777,qc=33778,Yc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,xh=37496,gh=37808,vh=37809,_h=37810,Sh=37811,yh=37812,bh=37813,Mh=37814,Eh=37815,Th=37816,Ah=37817,Rh=37818,wh=37819,Ch=37820,Dh=37821,Uh=36492,Nh=36494,Lh=36495,Ph=36283,Oh=36284,Fh=36285,Ih=36286,Jb=3200,$b=3201,eM=0,tM=1,er="",hi="srgb",Os="srgb-linear",Qc="linear",Ht="srgb",hs=7680,Wx=519,nM=512,iM=513,aM=514,pv=515,rM=516,sM=517,oM=518,lM=519,qx=35044,Yx="300 es",Oi=2e3,Jc=2001;function mv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $c(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cM(){const s=$c("canvas");return s.style.display="block",s}const Zx={};function Kx(...s){const e="THREE."+s.shift();console.log(e,...s)}function lt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function rn(...s){const e="THREE."+s.shift();console.error(e,...s)}function el(...s){const e=s.join(" ");e in Zx||(Zx[e]=!0,lt(...s))}function uM(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Hs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,zh=180/Math.PI;function al(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function bt(s,e,i){return Math.max(e,Math.min(i,s))}function fM(s,e){return(s%e+e)%e}function Sd(s,e,i){return(1-i)*s+i*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,i=0){Pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],_=c[f+0],y=c[f+1],M=c[f+2],A=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=_,e[i+1]=y,e[i+2]=M,e[i+3]=A;return}if(g!==A||m!==_||p!==y||x!==M){let S=m*_+p*y+x*M+g*A;S<0&&(_=-_,y=-y,M=-M,A=-A,S=-S);let v=1-h;if(S<.9995){const L=Math.acos(S),N=Math.sin(L);v=Math.sin(v*L)/N,h=Math.sin(h*L)/N,m=m*v+_*h,p=p*v+y*h,x=x*v+M*h,g=g*v+A*h}else{m=m*v+_*h,p=p*v+y*h,x=x*v+M*h,g=g*v+A*h;const L=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=L,p*=L,x*=L,g*=L}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[f],_=c[f+1],y=c[f+2],M=c[f+3];return e[i]=h*M+x*g+m*y-p*_,e[i+1]=m*M+x*_+p*g-h*y,e[i+2]=p*M+x*y+h*_-m*g,e[i+3]=x*M-h*g-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),_=m(r/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=_*x*g+p*y*M,this._y=p*y*g-_*x*M,this._z=p*x*M+_*y*g,this._w=p*x*g-_*y*M;break;case"YXZ":this._x=_*x*g+p*y*M,this._y=p*y*g-_*x*M,this._z=p*x*M-_*y*g,this._w=p*x*g+_*y*M;break;case"ZXY":this._x=_*x*g-p*y*M,this._y=p*y*g+_*x*M,this._z=p*x*M+_*y*g,this._w=p*x*g-_*y*M;break;case"ZYX":this._x=_*x*g-p*y*M,this._y=p*y*g+_*x*M,this._z=p*x*M-_*y*g,this._w=p*x*g+_*y*M;break;case"YZX":this._x=_*x*g+p*y*M,this._y=p*y*g+_*x*M,this._z=p*x*M-_*y*g,this._w=p*x*g-_*y*M;break;case"XZY":this._x=_*x*g-p*y*M,this._y=p*y*g-_*x*M,this._z=p*x*M+_*y*g,this._w=p*x*g+_*y*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],_=r+h+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-r*p,this._z=c*x+f*p+r*m-l*h,this._w=f*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(e=0,i=0,r=0){de.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Qx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Qx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),x=2*(h*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new de,Qx=new rl;class dt{constructor(e,i,r,l,c,f,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],_=r[2],y=r[5],M=r[8],A=l[0],S=l[3],v=l[6],L=l[1],N=l[4],F=l[7],H=l[2],O=l[5],V=l[8];return c[0]=f*A+h*L+m*H,c[3]=f*S+h*N+m*O,c[6]=f*v+h*F+m*V,c[1]=p*A+x*L+g*H,c[4]=p*S+x*N+g*O,c[7]=p*v+x*F+g*V,c[2]=_*A+y*L+M*H,c[5]=_*S+y*N+M*O,c[8]=_*v+y*F+M*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*h*p-r*c*x+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*f-h*p,_=h*m-x*c,y=p*c-f*m,M=i*g+r*_+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(l*p-x*r)*A,e[2]=(h*r-l*f)*A,e[3]=_*A,e[4]=(x*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=y*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(bd.makeScale(e,i)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new dt,Jx=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$x=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:e,whitePoint:r,transfer:Qc,toXYZ:Jx,fromXYZ:$x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Jx,fromXYZ:$x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Tt=dM();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class hM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ps===void 0&&(ps=$c("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$c("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pM=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Md(l[f].image)):c.push(Md(l[f]))}else c=Md(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let mM=0;const Ed=new de;class Pn extends Hs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=da,l=da,c=mi,f=Dr,h=Ti,m=va,p=Pn.DEFAULT_ANISOTROPY,x=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=al(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case da:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case da:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=sv;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],_=m[1],y=m[5],M=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(g-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+A)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,F=(y+1)/2,H=(v+1)/2,O=(x+_)/4,V=(g+A)/4,ie=(M+S)/4;return N>F&&N>H?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=O/r,c=V/r):F>H?F<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),r=O/l,c=ie/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=V/c,l=ie/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-M)*(S-M)+(g-A)*(g-A)+(_-x)*(_-x));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-A)/L,this.z=(_-x)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Hs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends xM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class xv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),yc.subVectors(this.max,ko),ms.subVectors(e.a,ko),xs.subVectors(e.b,ko),gs.subVectors(e.c,ko),Ya.subVectors(xs,ms),Za.subVectors(gs,xs),yr.subVectors(ms,gs);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-yr.z,yr.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,yr.z,0,-yr.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-yr.y,yr.x,0];return!Td(i,ms,xs,gs,yc)||(i=[1,0,0,0,1,0,0,0,1],!Td(i,ms,xs,gs,yc))?!1:(bc.crossVectors(Ya,Za),i=[bc.x,bc.y,bc.z],Td(i,ms,xs,gs,yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ta=[new de,new de,new de,new de,new de,new de,new de,new de],yi=new de,Sc=new sl,ms=new de,xs=new de,gs=new de,Ya=new de,Za=new de,yr=new de,ko=new de,yc=new de,bc=new de,br=new de;function Td(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){br.fromArray(s,c);const h=l.x*Math.abs(br.x)+l.y*Math.abs(br.y)+l.z*Math.abs(br.z),m=e.dot(br),p=i.dot(br),x=r.dot(br);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const vM=new sl,Xo=new de,Ad=new de;class au{constructor(e=new de,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):vM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Ad)),this.expandByPoint(Xo.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const na=new de,Rd=new de,Mc=new de,Ka=new de,wd=new de,Ec=new de,Cd=new de;class gv{constructor(e=new de,i=new de(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Rd.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Rd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Mc),h=Ka.dot(this.direction),m=-Ka.dot(Mc),p=Ka.lengthSq(),x=Math.abs(1-f*f);let g,_,y,M;if(x>0)if(g=f*m-h,_=f*h-m,M=c*x,g>=0)if(_>=-M)if(_<=M){const A=1/x;g*=A,_*=A,y=g*(g+f*_+2*h)+_*(f*g+_+2*m)+p}else _=c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*m)+p;else _<=-M?(g=Math.max(0,-(-f*c+h)),_=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+_*(_+2*m)+p):_<=M?(g=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(g=Math.max(0,-(f*c+h)),_=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+_*(_+2*m)+p);else _=f>0?-c:c,g=Math.max(0,-(f*_+h)),y=-g*g+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Rd).addScaledVector(Mc,_),y}intersectSphere(e,i){na.subVectors(e.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),x>=0?(c=(e.min.y-_.y)*x,f=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,f=(e.min.y-_.y)*x),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(h=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,na)!==null}intersectTriangle(e,i,r,l,c){wd.subVectors(i,e),Ec.subVectors(r,e),Cd.crossVectors(wd,Ec);let f=this.direction.dot(Cd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ka.subVectors(this.origin,e);const m=h*this.direction.dot(Ec.crossVectors(Ka,Ec));if(m<0)return null;const p=h*this.direction.dot(wd.cross(Ka));if(p<0||m+p>f)return null;const x=-h*Ka.dot(Cd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,r,l,c,f,h,m,p,x,g,_,y,M,A,S){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,x,g,_,y,M,A,S)}set(e,i,r,l,c,f,h,m,p,x,g,_,y,M,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=_,v[3]=y,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),c=1/vs.setFromMatrixColumn(e,1).length(),f=1/vs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=f*x,y=f*g,M=h*x,A=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+M*p,i[5]=_-A*p,i[9]=-h*m,i[2]=A-_*p,i[6]=M+y*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*x,y=m*g,M=p*x,A=p*g;i[0]=_+A*h,i[4]=M*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-h,i[2]=y*h-M,i[6]=A+_*h,i[10]=f*m}else if(e.order==="ZXY"){const _=m*x,y=m*g,M=p*x,A=p*g;i[0]=_-A*h,i[4]=-f*g,i[8]=M+y*h,i[1]=y+M*h,i[5]=f*x,i[9]=A-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const _=f*x,y=f*g,M=h*x,A=h*g;i[0]=m*x,i[4]=M*p-y,i[8]=_*p+A,i[1]=m*g,i[5]=A*p+_,i[9]=y*p-M,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,y=f*p,M=h*m,A=h*p;i[0]=m*x,i[4]=A-_*g,i[8]=M*g+y,i[1]=g,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*g+M,i[10]=_-A*g}else if(e.order==="XZY"){const _=f*m,y=f*p,M=h*m,A=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=_*g+A,i[5]=f*x,i[9]=y*g-M,i[2]=M*g-y,i[6]=h*x,i[10]=A*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_M,e,SM)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Qa.crossVectors(r,$n),Qa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Qa.crossVectors(r,$n)),Qa.normalize(),Tc.crossVectors($n,Qa),l[0]=Qa.x,l[4]=Tc.x,l[8]=$n.x,l[1]=Qa.y,l[5]=Tc.y,l[9]=$n.y,l[2]=Qa.z,l[6]=Tc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],_=r[9],y=r[13],M=r[2],A=r[6],S=r[10],v=r[14],L=r[3],N=r[7],F=r[11],H=r[15],O=l[0],V=l[4],ie=l[8],D=l[12],C=l[1],B=l[5],j=l[9],ne=l[13],le=l[2],ce=l[6],I=l[10],q=l[14],Y=l[3],he=l[7],U=l[11],$=l[15];return c[0]=f*O+h*C+m*le+p*Y,c[4]=f*V+h*B+m*ce+p*he,c[8]=f*ie+h*j+m*I+p*U,c[12]=f*D+h*ne+m*q+p*$,c[1]=x*O+g*C+_*le+y*Y,c[5]=x*V+g*B+_*ce+y*he,c[9]=x*ie+g*j+_*I+y*U,c[13]=x*D+g*ne+_*q+y*$,c[2]=M*O+A*C+S*le+v*Y,c[6]=M*V+A*B+S*ce+v*he,c[10]=M*ie+A*j+S*I+v*U,c[14]=M*D+A*ne+S*q+v*$,c[3]=L*O+N*C+F*le+H*Y,c[7]=L*V+N*B+F*ce+H*he,c[11]=L*ie+N*j+F*I+H*U,c[15]=L*D+N*ne+F*q+H*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],_=e[10],y=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+c*m*g-l*p*g-c*h*_+r*p*_+l*h*y-r*m*y)+A*(+i*m*y-i*p*_+c*f*_-l*f*y+l*p*x-c*m*x)+S*(+i*p*g-i*h*y-c*f*g+r*f*y+c*h*x-r*p*x)+v*(-l*h*x-i*m*g+i*h*_+l*f*g-r*f*_+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],_=e[10],y=e[11],M=e[12],A=e[13],S=e[14],v=e[15],L=g*S*p-A*_*p+A*m*y-h*S*y-g*m*v+h*_*v,N=M*_*p-x*S*p-M*m*y+f*S*y+x*m*v-f*_*v,F=x*A*p-M*g*p+M*h*y-f*A*y-x*h*v+f*g*v,H=M*g*m-x*A*m-M*h*_+f*A*_+x*h*S-f*g*S,O=i*L+r*N+l*F+c*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/O;return e[0]=L*V,e[1]=(A*_*c-g*S*c-A*l*y+r*S*y+g*l*v-r*_*v)*V,e[2]=(h*S*c-A*m*c+A*l*p-r*S*p-h*l*v+r*m*v)*V,e[3]=(g*m*c-h*_*c-g*l*p+r*_*p+h*l*y-r*m*y)*V,e[4]=N*V,e[5]=(x*S*c-M*_*c+M*l*y-i*S*y-x*l*v+i*_*v)*V,e[6]=(M*m*c-f*S*c-M*l*p+i*S*p+f*l*v-i*m*v)*V,e[7]=(f*_*c-x*m*c+x*l*p-i*_*p-f*l*y+i*m*y)*V,e[8]=F*V,e[9]=(M*g*c-x*A*c-M*r*y+i*A*y+x*r*v-i*g*v)*V,e[10]=(f*A*c-M*h*c+M*r*p-i*A*p-f*r*v+i*h*v)*V,e[11]=(x*h*c-f*g*c-x*r*p+i*g*p+f*r*y-i*h*y)*V,e[12]=H*V,e[13]=(x*A*l-M*g*l+M*r*_-i*A*_-x*r*S+i*g*S)*V,e[14]=(M*h*l-f*A*l-M*r*m+i*A*m+f*r*S-i*h*S)*V,e[15]=(f*g*l-x*h*l+x*r*m-i*g*m-f*r*_+i*h*_)*V,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,x=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,g=h+h,_=c*p,y=c*x,M=c*g,A=f*x,S=f*g,v=h*g,L=m*p,N=m*x,F=m*g,H=r.x,O=r.y,V=r.z;return l[0]=(1-(A+v))*H,l[1]=(y+F)*H,l[2]=(M-N)*H,l[3]=0,l[4]=(y-F)*O,l[5]=(1-(_+v))*O,l[6]=(S+L)*O,l[7]=0,l[8]=(M+N)*V,l[9]=(S-L)*V,l[10]=(1-(_+A))*V,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,x=1/f,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Oi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(r-l),_=(i+e)/(i-e),y=(r+l)/(r-l);let M,A;if(m)M=c/(f-c),A=f*c/(f-c);else if(h===Oi)M=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===Jc)M=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Oi,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),_=-(i+e)/(i-e),y=-(r+l)/(r-l);let M,A;if(m)M=1/(f-c),A=f/(f-c);else if(h===Oi)M=-2/(f-c),A=-(f+c)/(f-c);else if(h===Jc)M=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vs=new de,bi=new hn,_M=new de(0,0,0),SM=new de(1,1,1),Qa=new de,Tc=new de,$n=new de,eg=new hn,tg=new rl;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const ng=new de,_s=new rl,ia=new hn,Ac=new de,jo=new de,bM=new de,MM=new rl,ig=new de(1,0,0),ag=new de(0,1,0),rg=new de(0,0,1),sg={type:"added"},EM={type:"removed"},Ss={type:"childadded",child:null},Dd={type:"childremoved",child:null};class jn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new de,i=new _a,r=new rl,l=new de(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new dt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(ag,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,i){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(ag,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(jo,Ac,this.up):ia.lookAt(Ac,jo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ia),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(EM),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),_=f(e.skeletons),y=f(e.animations),M=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}jn.DEFAULT_UP=new de(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new de,aa=new de,Ud=new de,ra=new de,ys=new de,bs=new de,og=new de,Nd=new de,Ld=new de,Pd=new de,Od=new sn,Fd=new sn,Id=new sn;class Ei{constructor(e=new de,i=new de,r=new de){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Mi.subVectors(l,i),aa.subVectors(r,i),Ud.subVectors(e,i);const f=Mi.dot(Mi),h=Mi.dot(aa),m=Mi.dot(Ud),p=aa.dot(aa),x=aa.dot(Ud),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(p*m-h*x)*_,M=(f*x-h*m)*_;return c.set(1-y-M,M,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(f,ra.y),m.addScaledVector(h,ra.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Od.setScalar(0),Fd.setScalar(0),Id.setScalar(0),Od.fromBufferAttribute(e,i),Fd.fromBufferAttribute(e,r),Id.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Od,c.x),f.addScaledVector(Fd,c.y),f.addScaledVector(Id,c.z),f}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),aa.subVectors(e,i),Mi.cross(aa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Mi.cross(aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;ys.subVectors(l,r),bs.subVectors(c,r),Nd.subVectors(e,r);const m=ys.dot(Nd),p=bs.dot(Nd);if(m<=0&&p<=0)return i.copy(r);Ld.subVectors(e,l);const x=ys.dot(Ld),g=bs.dot(Ld);if(x>=0&&g<=x)return i.copy(l);const _=m*g-x*p;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(r).addScaledVector(ys,f);Pd.subVectors(e,c);const y=ys.dot(Pd),M=bs.dot(Pd);if(M>=0&&y<=M)return i.copy(c);const A=y*p-m*M;if(A<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(r).addScaledVector(bs,h);const S=x*M-y*g;if(S<=0&&g-x>=0&&y-M>=0)return og.subVectors(c,l),h=(g-x)/(g-x+(y-M)),i.copy(l).addScaledVector(og,h);const v=1/(S+A+_);return f=A*v,h=_*v,i.copy(r).addScaledVector(ys,f).addScaledVector(bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function zd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Lt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=fM(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=zd(f,c,e+1/3),this.g=zd(f,c,e),this.b=zd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=_v[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Tt.workingToColorSpace(Ln.copy(this),e),Math.round(bt(Ln.r*255,0,255))*65536+Math.round(bt(Ln.g*255,0,255))*256+Math.round(bt(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=x<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){Tt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Rc);const r=Sd(Ja.h,Rc.h,i),l=Sd(Ja.s,Rc.s,i),c=Sd(Ja.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Lt;Lt.NAMES=_v;let TM=0;class ol extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Ds,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Jd&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sv extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new de,wc=new Pt;let AM=0;class ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=qx,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qx&&(e.usage=this.usage),e}}class yv extends ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class bv extends ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ur extends ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let RM=0;const fi=new hn,Bd=new jn,Ms=new de,ei=new sl,Wo=new sl,En=new de;class Ii extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?bv:yv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ur(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ei.min,Wo.min),ei.expandByPoint(En),En.addVectors(ei.max,Wo.max),ei.expandByPoint(En)):(ei.expandByPoint(Wo.min),ei.expandByPoint(Wo.max))}ei.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)En.fromBufferAttribute(h,p),m&&(Ms.fromBufferAttribute(e,p),En.add(Ms)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let ie=0;ie<r.count;ie++)h[ie]=new de,m[ie]=new de;const p=new de,x=new de,g=new de,_=new Pt,y=new Pt,M=new Pt,A=new de,S=new de;function v(ie,D,C){p.fromBufferAttribute(r,ie),x.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),_.fromBufferAttribute(c,ie),y.fromBufferAttribute(c,D),M.fromBufferAttribute(c,C),x.sub(p),g.sub(p),y.sub(_),M.sub(_);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(A.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(B),S.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(B),h[ie].add(A),h[D].add(A),h[C].add(A),m[ie].add(S),m[D].add(S),m[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let ie=0,D=L.length;ie<D;++ie){const C=L[ie],B=C.start,j=C.count;for(let ne=B,le=B+j;ne<le;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const N=new de,F=new de,H=new de,O=new de;function V(ie){H.fromBufferAttribute(l,ie),O.copy(H);const D=h[ie];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),F.crossVectors(O,D);const B=F.dot(m[ie])<0?-1:1;f.setXYZW(ie,N.x,N.y,N.z,B)}for(let ie=0,D=L.length;ie<D;++ie){const C=L[ie],B=C.start,j=C.count;for(let ne=B,le=B+j;ne<le;ne+=3)V(e.getX(ne+0)),V(e.getX(ne+1)),V(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new de,c=new de,f=new de,h=new de,m=new de,p=new de,x=new de,g=new de;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),h.add(x),m.add(x),p.add(x),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,_=new p.constructor(m.length*x);let y=0,M=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*x;for(let v=0;v<x;v++)_[M++]=p[y++]}return new ni(_,x,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const _=p[x],y=e(_,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,_=p.length;g<_;g++){const y=p[g];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let _=0,y=g.length;_<y;_++)x.push(g[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new hn,Mr=new gv,Cc=new au,cg=new de,Dc=new de,Uc=new de,Nc=new de,Hd=new de,Lc=new de,ug=new de,Pc=new de;class ar extends jn{constructor(e=new Ii,i=new Sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Lc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Hd.fromBufferAttribute(g,e),f?Lc.addScaledVector(Hd,x):Lc.addScaledVector(Hd.sub(i),x))}i.add(Lc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(c),Mr.copy(e.ray).recast(e.near),!(Cc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Cc,cg)===null||Mr.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(lg.copy(c).invert(),Mr.copy(e.ray).applyMatrix4(lg),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Mr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const S=_[M],v=f[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let F=L,H=N;F<H;F+=3){const O=h.getX(F),V=h.getX(F+1),ie=h.getX(F+2);l=Oc(this,v,e,r,p,x,g,O,V,ie),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const L=h.getX(S),N=h.getX(S+1),F=h.getX(S+2);l=Oc(this,f,e,r,p,x,g,L,N,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,A=_.length;M<A;M++){const S=_[M],v=f[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let F=L,H=N;F<H;F+=3){const O=F,V=F+1,ie=F+2;l=Oc(this,v,e,r,p,x,g,O,V,ie),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const L=S,N=S+1,F=S+2;l=Oc(this,f,e,r,p,x,g,L,N,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function wM(s,e,i,r,l,c,f,h){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===ir,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:s}}function Oc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Dc),s.getVertexPosition(m,Uc),s.getVertexPosition(p,Nc);const x=wM(s,e,i,r,Dc,Uc,Nc,ug);if(x){const g=new de;Ei.getBarycoord(ug,Dc,Uc,Nc,g),l&&(x.uv=Ei.getInterpolatedAttribute(l,h,m,p,g,new Pt)),c&&(x.uv1=Ei.getInterpolatedAttribute(c,h,m,p,g,new Pt)),f&&(x.normal=Ei.getInterpolatedAttribute(f,h,m,p,g,new de),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new de,materialIndex:0};Ei.getNormal(Dc,Uc,Nc,_.normal),x.face=_,x.barycoord=g}return x}class ll extends Ii{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,r,i,e,f,c,0),M("z","y","x",1,-1,r,i,-e,f,c,1),M("x","z","y",1,1,e,r,i,l,f,2),M("x","z","y",1,-1,e,r,-i,l,f,3),M("x","y","z",1,-1,e,i,r,l,c,4),M("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ur(p,3)),this.setAttribute("normal",new Ur(x,3)),this.setAttribute("uv",new Ur(g,2));function M(A,S,v,L,N,F,H,O,V,ie,D){const C=F/V,B=H/ie,j=F/2,ne=H/2,le=O/2,ce=V+1,I=ie+1;let q=0,Y=0;const he=new de;for(let U=0;U<I;U++){const $=U*B-ne;for(let ye=0;ye<ce;ye++){const be=ye*C-j;he[A]=be*L,he[S]=$*N,he[v]=le,p.push(he.x,he.y,he.z),he[A]=0,he[S]=0,he[v]=O>0?1:-1,x.push(he.x,he.y,he.z),g.push(ye/V),g.push(1-U/ie),q+=1}}for(let U=0;U<ie;U++)for(let $=0;$<V;$++){const ye=_+$+ce*U,be=_+$+ce*(U+1),Ce=_+($+1)+ce*(U+1),ze=_+($+1)+ce*U;m.push(ye,be,ze),m.push(be,Ce,ze),Y+=6}h.addGroup(y,Y,D),y+=Y,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=Fs(s[i]);for(const l in r)e[l]=r[l]}return e}function CM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Mv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const DM={clone:Fs,merge:zn};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ev extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new de,fg=new Pt,dg=new Pt;class pi extends Ev{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,fg,dg),i.subVectors(dg,fg)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(_d*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class LM extends jn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Es,Ts,e,i);l.layers=this.layers,this.add(l);const c=new pi(Es,Ts,e,i);c.layers=this.layers,this.add(c);const f=new pi(Es,Ts,e,i);f.layers=this.layers,this.add(f);const h=new pi(Es,Ts,e,i);h.layers=this.layers,this.add(h);const m=new pi(Es,Ts,e,i);m.layers=this.layers,this.add(m);const p=new pi(Es,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Tv extends Pn{constructor(e=[],i=Ls,r,l,c,f,h,m,p,x){super(e,i,r,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PM extends Lr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ma});c.uniforms.tEquirect.value=i;const f=new ar(l,c),h=i.minFilter;return i.minFilter===Dr&&(i.minFilter=mi),new LM(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Fc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=x.position.distanceTo(g.position),y=.02,M=.005;p.inputState.pinching&&_>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class FM extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IM extends Pn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=ti,x=ti,g,_){super(null,f,h,m,p,x,l,c,g,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new de,zM=new de,BM=new dt;class Rr{constructor(e=new de(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Vd.subVectors(r,i).cross(zM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Vd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||BM.getNormalMatrix(e),l=this.coplanarPoint(Vd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new au,HM=new Pt(.5,.5),Ic=new de;class Av{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,f=new Rr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Oi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],_=c[6],y=c[7],M=c[8],A=c[9],S=c[10],v=c[11],L=c[12],N=c[13],F=c[14],H=c[15];if(l[0].setComponents(p-f,y-x,v-M,H-L).normalize(),l[1].setComponents(p+f,y+x,v+M,H+L).normalize(),l[2].setComponents(p+h,y+g,v+A,H+N).normalize(),l[3].setComponents(p-h,y-g,v-A,H-N).normalize(),r)l[4].setComponents(m,_,S,F).normalize(),l[5].setComponents(p-m,y-_,v-S,H-F).normalize();else if(l[4].setComponents(p-m,y-_,v-S,H-F).normalize(),i===Oi)l[5].setComponents(p+m,y+_,v+S,H+F).normalize();else if(i===Jc)l[5].setComponents(m,_,S,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=HM.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rv extends ol{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hg=new hn,Bh=new gv,zc=new au,Bc=new de;class GM extends jn{constructor(e=new Ii,i=new Rv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;hg.copy(l).invert(),Bh.copy(e.ray).applyMatrix4(hg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let M=_,A=y;M<A;M++){const S=p.getX(M);Bc.fromBufferAttribute(g,S),pg(Bc,S,m,l,e,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let M=_,A=y;M<A;M++)Bc.fromBufferAttribute(g,M),pg(Bc,M,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function pg(s,e,i,r,l,c,f){const h=Bh.distanceSqToPoint(s);if(h<i){const m=new de;Bh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class VM extends Pn{constructor(e,i,r,l,c,f,h,m,p){super(e,i,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wv extends Pn{constructor(e,i,r=Nr,l,c,f,h=ti,m=ti,p,x=Jo,g=1){if(x!==Jo&&x!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:g};super(_,l,c,f,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ru extends Ii{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=e/h,_=i/m,y=[],M=[],A=[],S=[];for(let v=0;v<x;v++){const L=v*_-f;for(let N=0;N<p;N++){const F=N*g-c;M.push(F,-L,0),A.push(0,0,1),S.push(N/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<h;L++){const N=L+p*v,F=L+p*(v+1),H=L+1+p*(v+1),O=L+1+p*v;y.push(N,F,O),y.push(F,H,O)}this.setIndex(y),this.setAttribute("position",new Ur(M,3)),this.setAttribute("normal",new Ur(A,3)),this.setAttribute("uv",new Ur(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class kM extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jM extends Ev{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WM extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function mg(s,e,i,r){const l=qM(r);switch(i){case fv:return s*e;case hv:return s*e/l.components*l.byteLength;case Qh:return s*e/l.components*l.byteLength;case Jh:return s*e*2/l.components*l.byteLength;case $h:return s*e*2/l.components*l.byteLength;case dv:return s*e*3/l.components*l.byteLength;case Ti:return s*e*4/l.components*l.byteLength;case ep:return s*e*4/l.components*l.byteLength;case jc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:case hh:return Math.max(s,16)*Math.max(e,8)/4;case uh:case dh:return Math.max(s,8)*Math.max(e,8)/2;case ph:case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Uh:case Nh:case Lh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ph:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qM(s){switch(s){case va:case ov:return{byteLength:1,components:1};case Ko:case lv:case Bs:return{byteLength:2,components:1};case Zh:case Kh:return{byteLength:2,components:4};case Nr:case Yh:case ha:return{byteLength:4,components:1};case cv:case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dv(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function YM(s){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,x);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],A=g[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++_,g[_]=A)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const A=g[y];s.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
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
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l1=`#ifdef USE_IRIDESCENCE
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
#endif`,c1=`#ifdef USE_BUMPMAP
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,v1=`#define PI 3.141592653589793
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
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S1=`vec3 transformedNormal = objectNormal;
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
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",A1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
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
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
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
#endif`,q1=`uniform sampler2D dfgLUT;
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
}`,Y1=`
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a3=`#if defined( USE_POINTS_UV )
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
#endif`,r3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u3=`#ifdef USE_MORPHTARGETS
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
#endif`,f3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g3=`#ifdef USE_NORMALMAP
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
#endif`,v3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L3=`float getShadowMask() {
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
}`,P3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O3=`#ifdef USE_SKINNING
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
#endif`,F3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I3=`#ifdef USE_SKINNING
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
#endif`,z3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V3=`#ifdef USE_TRANSMISSION
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
#endif`,k3=`#ifdef USE_TRANSMISSION
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
#endif`,X3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z3=`uniform sampler2D t2D;
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
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
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
}`,tE=`#if DEPTH_PACKING == 3200
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
}`,nE=`#define DISTANCE
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
}`,iE=`#define DISTANCE
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
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
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
}`,oE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,cE=`uniform vec3 diffuse;
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
}`,uE=`#define LAMBERT
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
}`,fE=`#define LAMBERT
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
}`,dE=`#define MATCAP
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
}`,hE=`#define MATCAP
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
}`,pE=`#define NORMAL
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
}`,mE=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
}`,SE=`#define TOON
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
}`,yE=`#define TOON
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
}`,bE=`uniform float size;
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#include <common>
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
}`,TE=`uniform vec3 color;
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
}`,AE=`uniform float rotation;
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
}`,RE=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:a1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:h1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:x1,color_vertex:g1,common:v1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:S1,displacementmap_pars_vertex:y1,displacementmap_vertex:b1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:A1,envmap_fragment:R1,envmap_common_pars_fragment:w1,envmap_pars_fragment:C1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:G1,envmap_vertex:U1,fog_vertex:N1,fog_pars_vertex:L1,fog_fragment:P1,fog_pars_fragment:O1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:I1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:B1,lights_pars_begin:H1,lights_toon_fragment:V1,lights_toon_pars_fragment:k1,lights_phong_fragment:X1,lights_phong_pars_fragment:j1,lights_physical_fragment:W1,lights_physical_pars_fragment:q1,lights_fragment_begin:Y1,lights_fragment_maps:Z1,lights_fragment_end:K1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:e3,map_fragment:t3,map_pars_fragment:n3,map_particle_fragment:i3,map_particle_pars_fragment:a3,metalnessmap_fragment:r3,metalnessmap_pars_fragment:s3,morphinstance_vertex:o3,morphcolor_vertex:l3,morphnormal_vertex:c3,morphtarget_pars_vertex:u3,morphtarget_vertex:f3,normal_fragment_begin:d3,normal_fragment_maps:h3,normal_pars_fragment:p3,normal_pars_vertex:m3,normal_vertex:x3,normalmap_pars_fragment:g3,clearcoat_normal_fragment_begin:v3,clearcoat_normal_fragment_maps:_3,clearcoat_pars_fragment:S3,iridescence_pars_fragment:y3,opaque_fragment:b3,packing:M3,premultiplied_alpha_fragment:E3,project_vertex:T3,dithering_fragment:A3,dithering_pars_fragment:R3,roughnessmap_fragment:w3,roughnessmap_pars_fragment:C3,shadowmap_pars_fragment:D3,shadowmap_pars_vertex:U3,shadowmap_vertex:N3,shadowmask_pars_fragment:L3,skinbase_vertex:P3,skinning_pars_vertex:O3,skinning_vertex:F3,skinnormal_vertex:I3,specularmap_fragment:z3,specularmap_pars_fragment:B3,tonemapping_fragment:H3,tonemapping_pars_fragment:G3,transmission_fragment:V3,transmission_pars_fragment:k3,uv_pars_fragment:X3,uv_pars_vertex:j3,uv_vertex:W3,worldpos_vertex:q3,background_vert:Y3,background_frag:Z3,backgroundCube_vert:K3,backgroundCube_frag:Q3,cube_vert:J3,cube_frag:$3,depth_vert:eE,depth_frag:tE,distanceRGBA_vert:nE,distanceRGBA_frag:iE,equirect_vert:aE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:oE,meshbasic_vert:lE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:fE,meshmatcap_vert:dE,meshmatcap_frag:hE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:xE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:SE,meshtoon_frag:yE,points_vert:bE,points_frag:ME,shadow_vert:EE,shadow_frag:TE,sprite_vert:AE,sprite_frag:RE},Pe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Pi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Pi.physical={uniforms:zn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Hc={r:0,b:0,g:0},Tr=new _a,wE=new hn;function CE(s,e,i,r,l,c,f){const h=new Lt(0);let m=c===!0?0:1,p,x,g=null,_=0,y=null;function M(N){let F=N.isScene===!0?N.background:null;return F&&F.isTexture&&(F=(N.backgroundBlurriness>0?i:e).get(F)),F}function A(N){let F=!1;const H=M(N);H===null?v(h,m):H&&H.isColor&&(v(H,1),F=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,F){const H=M(F);H&&(H.isCubeTexture||H.mapping===iu)?(x===void 0&&(x=new ar(new ll(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Fs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,V,ie){this.matrixWorld.copyPosition(ie.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Tr.copy(F.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Tr)),x.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Ht,(g!==H||_!==H.version||y!==s.toneMapping)&&(x.material.needsUpdate=!0,g=H,_=H.version,y=s.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ar(new ru(2,2),new Sa({name:"BackgroundMaterial",uniforms:Fs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(H.colorSpace)!==Ht,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||_!==H.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=H,_=H.version,y=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,F){N.getRGB(Hc,Mv(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,F,f)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,F=1){h.set(N),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(h,m)},render:A,addToRenderList:S,dispose:L}}function DE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function h(C,B,j,ne,le){let ce=!1;const I=g(ne,j,B);c!==I&&(c=I,p(c.object)),ce=y(C,ne,j,le),ce&&M(C,ne,j,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,F(C,B,j,ne),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function g(C,B,j){const ne=j.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let ce=le[B.id];ce===void 0&&(ce={},le[B.id]=ce);let I=ce[ne];return I===void 0&&(I=_(m()),ce[ne]=I),I}function _(C){const B=[],j=[],ne=[];for(let le=0;le<i;le++)B[le]=0,j[le]=0,ne[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:ne,object:C,attributes:{},index:null}}function y(C,B,j,ne){const le=c.attributes,ce=B.attributes;let I=0;const q=j.getAttributes();for(const Y in q)if(q[Y].location>=0){const U=le[Y];let $=ce[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;I++}return c.attributesNum!==I||c.index!==ne}function M(C,B,j,ne){const le={},ce=B.attributes;let I=0;const q=j.getAttributes();for(const Y in q)if(q[Y].location>=0){let U=ce[Y];U===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),le[Y]=$,I++}c.attributes=le,c.attributesNum=I,c.index=ne}function A(){const C=c.newAttributes;for(let B=0,j=C.length;B<j;B++)C[B]=0}function S(C){v(C,0)}function v(C,B){const j=c.newAttributes,ne=c.enabledAttributes,le=c.attributeDivisors;j[C]=1,ne[C]===0&&(s.enableVertexAttribArray(C),ne[C]=1),le[C]!==B&&(s.vertexAttribDivisor(C,B),le[C]=B)}function L(){const C=c.newAttributes,B=c.enabledAttributes;for(let j=0,ne=B.length;j<ne;j++)B[j]!==C[j]&&(s.disableVertexAttribArray(j),B[j]=0)}function N(C,B,j,ne,le,ce,I){I===!0?s.vertexAttribIPointer(C,B,j,le,ce):s.vertexAttribPointer(C,B,j,ne,le,ce)}function F(C,B,j,ne){A();const le=ne.attributes,ce=j.getAttributes(),I=B.defaultAttributeValues;for(const q in ce){const Y=ce[q];if(Y.location>=0){let he=le[q];if(he===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const U=he.normalized,$=he.itemSize,ye=e.get(he);if(ye===void 0)continue;const be=ye.buffer,Ce=ye.type,ze=ye.bytesPerElement,J=Ce===s.INT||Ce===s.UNSIGNED_INT||he.gpuType===Yh;if(he.isInterleavedBufferAttribute){const pe=he.data,Ee=pe.stride,Xe=he.offset;if(pe.isInstancedInterleavedBuffer){for(let je=0;je<Y.locationSize;je++)v(Y.location+je,pe.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let je=0;je<Y.locationSize;je++)S(Y.location+je);s.bindBuffer(s.ARRAY_BUFFER,be);for(let je=0;je<Y.locationSize;je++)N(Y.location+je,$/Y.locationSize,Ce,U,Ee*ze,(Xe+$/Y.locationSize*je)*ze,J)}else{if(he.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe,he.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<Y.locationSize;pe++)S(Y.location+pe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let pe=0;pe<Y.locationSize;pe++)N(Y.location+pe,$/Y.locationSize,Ce,U,$*ze,$/Y.locationSize*pe*ze,J)}}else if(I!==void 0){const U=I[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}L()}function H(){ie();for(const C in r){const B=r[C];for(const j in B){const ne=B[j];for(const le in ne)x(ne[le].object),delete ne[le];delete B[j]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const j in B){const ne=B[j];for(const le in ne)x(ne[le].object),delete ne[le];delete B[j]}delete r[C.id]}function V(C){for(const B in r){const j=r[B];if(j[C.id]===void 0)continue;const ne=j[C.id];for(const le in ne)x(ne[le].object),delete ne[le];delete j[C.id]}}function ie(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ie,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function UE(s,e,i){let r;function l(p){r=p}function c(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function f(p,x,g){g!==0&&(s.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];i.update(y,r,1)}function m(p,x,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)f(p[M],x[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,_,0,g);let M=0;for(let A=0;A<g;A++)M+=x[A]*_[A];i.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function NE(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(V){return!(V!==Ti&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(V){const ie=V===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==va&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==ha&&!ie)}function m(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(lt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),F=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:F,vertexTextures:H,maxSamples:O}}function LE(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Rr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||l;return l=_,r=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=x(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,v=s.get(g);if(!l||M===null||M.length===0||c&&!S)c?x(null):p();else{const L=c?0:r,N=L*4;let F=v.clippingState||null;m.value=F,F=x(M,_,N,y);for(let H=0;H!==N;++H)F[H]=i[H];v.clippingState=F,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,_,y,M){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=m.value,M!==!0||S===null){const v=y+A*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,F=y;N!==A;++N,F+=4)f.copy(g[N]).applyMatrix4(L,h),f.normal.toArray(S,F),S[F+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function PE(s){let e=new WeakMap;function i(f,h){return h===sh?f.mapping=Ls:h===oh&&(f.mapping=Ps),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===sh||h===oh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new PM(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,xg=[.125,.215,.35,.446,.526,.582],Cr=20,OE=256,qo=new jM,gg=new Lt;let kd=null,Xd=0,jd=0,Wd=!1;const FE=new de;class vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=FE}=c;kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kd,Xd,jd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Bs,format:Ti,colorSpace:Os,depthBuffer:!1},l=_g(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IE(c)),this._blurMaterial=BE(c,e,i),this._ggxMaterial=zE(c,e,i)}return l}_compileMaterial(e){const i=new ar(new Ii,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,r,l,c){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(gg),g.toneMapping=nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ar(new ll,new Sv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(gg),v=!0);for(let N=0;N<6;N++){const F=N%3;F===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):F===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const H=this._cubeSize;As(l,F*H,N>2?H:0,H,H),g.setRenderTarget(l),v&&g.render(A,m),g.render(e,m)}g.toneMapping=y,g.autoClear=_,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ls||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,qo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),_=.05+p*.95,y=g*_,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-tr?r-M+tr:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-i,As(c,S,v,3*A,2*A),l.setRenderTarget(c),l.render(h,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-r,As(e,S,v,3*A,2*A),l.setRenderTarget(e),l.render(h,qo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Cr-1),A=c/M,S=isFinite(c)?1+Math.floor(x*A):Cr;S>Cr&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const v=[];let L=0;for(let V=0;V<Cr;++V){const ie=V/A,D=Math.exp(-ie*ie/2);v.push(D),V===0?L+=D:V<S&&(L+=2*D)}for(let V=0;V<v.length;V++)v[V]=v[V]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=M,_.mipInt.value=N-r;const F=this._sizeLods[l],H=3*F*(l>N-tr?l-N+tr:0),O=4*(this._cubeSize-F);As(i,H,O,3*F,2*F),m.setRenderTarget(i),m.render(g,qo)}}function IE(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+xg.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-tr?m=xg[f-s+tr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,_=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,A=3,S=2,v=1,L=new Float32Array(A*M*y),N=new Float32Array(S*M*y),F=new Float32Array(v*M*y);for(let O=0;O<y;O++){const V=O%3*2/3-1,ie=O>2?0:-1,D=[V,ie,0,V+2/3,ie,0,V+2/3,ie+1,0,V,ie,0,V+2/3,ie+1,0,V,ie+1,0];L.set(D,A*M*O),N.set(_,S*M*O);const C=[O,O,O,O,O,O];F.set(C,v*M*O)}const H=new Ii;H.setAttribute("position",new ni(L,A)),H.setAttribute("uv",new ni(N,S)),H.setAttribute("faceIndex",new ni(F,v)),r.push(new ar(H,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function _g(s,e,i){const r=new Lr(s,e,i);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function zE(s,e,i){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function BE(s,e,i){const r=new Float32Array(Cr),l=new de(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Sg(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function yg(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function HE(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===sh||m===oh,x=m===Ls||m===Ps;if(p||x){let g=e.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new vg(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new vg(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function GE(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&el("WebGLRenderer: "+r+" extension not supported."),l}}}function VE(s,e,i,r){const l={},c=new WeakMap;function f(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",f),delete l[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function p(g){const _=[],y=g.index,M=g.attributes.position;let A=0;if(y!==null){const L=y.array;A=y.version;for(let N=0,F=L.length;N<F;N+=3){const H=L[N+0],O=L[N+1],V=L[N+2];_.push(H,O,O,V,V,H)}}else if(M!==void 0){const L=M.array;A=M.version;for(let N=0,F=L.length/3-1;N<F;N+=3){const H=N+0,O=N+1,V=N+2;_.push(H,O,O,V,V,H)}}else return;const S=new(mv(_)?bv:yv)(_,1);S.version=A;const v=c.get(g);v&&e.remove(v),c.set(g,S)}function x(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function kE(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,y){s.drawElements(r,y,c,_*f),i.update(y,r,1)}function p(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,c,_*f,M),i.update(y,r,M))}function x(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];i.update(S,r,1)}function g(_,y,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)p(_[v]/f,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,A,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*A[L];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function XE(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:rn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jE(s,e,i){const r=new WeakMap,l=new sn;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let C=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let F=0;M===!0&&(F=1),A===!0&&(F=2),S===!0&&(F=3);let H=h.attributes.position.count*F,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const V=new Float32Array(H*O*4*g),ie=new xv(V,H,O,g);ie.type=ha,ie.needsUpdate=!0;const D=F*4;for(let B=0;B<g;B++){const j=v[B],ne=L[B],le=N[B],ce=H*O*4*B;for(let I=0;I<j.count;I++){const q=I*D;M===!0&&(l.fromBufferAttribute(j,I),V[ce+q+0]=l.x,V[ce+q+1]=l.y,V[ce+q+2]=l.z,V[ce+q+3]=0),A===!0&&(l.fromBufferAttribute(ne,I),V[ce+q+4]=l.x,V[ce+q+5]=l.y,V[ce+q+6]=l.z,V[ce+q+7]=0),S===!0&&(l.fromBufferAttribute(le,I),V[ce+q+8]=l.x,V[ce+q+9]=l.y,V[ce+q+10]=l.z,V[ce+q+11]=le.itemSize===4?l.w:1)}}_={count:g,texture:ie,size:new Pt(H,O)},r.set(h,_),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const A=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function WE(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Uv=new Pn,bg=new wv(1,1),Nv=new xv,Lv=new gM,Pv=new Tv,Mg=[],Eg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Rg=new Float32Array(4);function Gs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Mg[l];if(c===void 0&&(c=new Float32Array(l),Mg[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function ou(s,e){let i=Eg[e];i===void 0&&(i=new Int32Array(e),Eg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function qE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function YE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function ZE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function KE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function QE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Rg.set(r),s.uniformMatrix2fv(this.addr,!1,Rg),vn(i,r)}}function JE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Ag.set(r),s.uniformMatrix3fv(this.addr,!1,Ag),vn(i,r)}}function $E(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Tg.set(r),s.uniformMatrix4fv(this.addr,!1,Tg),vn(i,r)}}function eT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function tT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function nT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function iT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function aT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function rT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function sT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function oT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function lT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(bg.compareFunction=pv,c=bg):c=Uv,i.setTexture2D(e||c,l)}function cT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Lv,l)}function uT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Pv,l)}function fT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Nv,l)}function dT(s){switch(s){case 5126:return qE;case 35664:return YE;case 35665:return ZE;case 35666:return KE;case 35674:return QE;case 35675:return JE;case 35676:return $E;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}function hT(s,e){s.uniform1fv(this.addr,e)}function pT(s,e){const i=Gs(e,this.size,2);s.uniform2fv(this.addr,i)}function mT(s,e){const i=Gs(e,this.size,3);s.uniform3fv(this.addr,i)}function xT(s,e){const i=Gs(e,this.size,4);s.uniform4fv(this.addr,i)}function gT(s,e){const i=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function vT(s,e){const i=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function _T(s,e){const i=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function ST(s,e){s.uniform1iv(this.addr,e)}function yT(s,e){s.uniform2iv(this.addr,e)}function bT(s,e){s.uniform3iv(this.addr,e)}function MT(s,e){s.uniform4iv(this.addr,e)}function ET(s,e){s.uniform1uiv(this.addr,e)}function TT(s,e){s.uniform2uiv(this.addr,e)}function AT(s,e){s.uniform3uiv(this.addr,e)}function RT(s,e){s.uniform4uiv(this.addr,e)}function wT(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||Uv,c[f])}function CT(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Lv,c[f])}function DT(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Pv,c[f])}function UT(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Nv,c[f])}function NT(s){switch(s){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return xT;case 35674:return gT;case 35675:return vT;case 35676:return _T;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return bT;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class LT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=dT(i.type)}}class PT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NT(i.type)}}class OT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function wg(s,e){s.seq.push(e),s.map[e.id]=e}function FT(s,e,i){const r=s.name,l=r.length;for(qd.lastIndex=0;;){const c=qd.exec(r),f=qd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){wg(i,p===void 0?new LT(h,s,e):new PT(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new OT(h),wg(i,g)),i=g}}}class Zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);FT(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Cg(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const IT=37297;let zT=0;function BT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Dg=new dt;function HT(s){Tt._getMatrix(Dg,Tt.workingColorSpace,s);const e=`mat3( ${Dg.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Qc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ug(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+BT(s.getShaderSource(e),h)}else return c}function GT(s,e){const i=HT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function VT(s,e){let i;switch(e){case Xb:i="Linear";break;case jb:i="Reinhard";break;case Wb:i="Cineon";break;case qb:i="ACESFilmic";break;case Zb:i="AgX";break;case Kb:i="Neutral";break;case Yb:i="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new de;function kT(){Tt.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function jT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function WT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function Yo(s){return s!==""}function Ng(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(s){return s.replace(qT,ZT)}const YT=new Map;function ZT(s,e){let i=ht[e];if(i===void 0){const r=YT.get(e);if(r!==void 0)i=ht[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hh(i)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(s){return s.replace(KT,QT)}function QT(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Og(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function JT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===av?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function $T(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Ps:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rv:e="ENVMAP_BLENDING_MULTIPLY";break;case Vb:e="ENVMAP_BLENDING_MIX";break;case kb:e="ENVMAP_BLENDING_ADD";break}return e}function nA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function iA(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=JT(i),p=$T(i),x=eA(i),g=tA(i),_=nA(i),y=XT(i),M=jT(c),A=l.createProgram();let S,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Yo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Yo).join(`
`),v.length>0&&(v+=`
`)):(S=[Og(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),v=[Og(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?ht.tonemapping_pars_fragment:"",i.toneMapping!==nr?VT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,GT("linearToOutputTexel",i.outputColorSpace),kT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=Hh(f),f=Ng(f,i),f=Lg(f,i),h=Hh(h),h=Ng(h,i),h=Lg(h,i),f=Pg(f),h=Pg(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===Yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=L+S+f,F=L+v+h,H=Cg(l,l.VERTEX_SHADER,N),O=Cg(l,l.FRAGMENT_SHADER,F);l.attachShader(A,H),l.attachShader(A,O),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function V(B){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(A)||"",ne=l.getShaderInfoLog(H)||"",le=l.getShaderInfoLog(O)||"",ce=j.trim(),I=ne.trim(),q=le.trim();let Y=!0,he=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,H,O);else{const U=Ug(l,H,"vertex"),$=Ug(l,O,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ce+`
`+U+`
`+$)}else ce!==""?lt("WebGLProgram: Program Info Log:",ce):(I===""||q==="")&&(he=!1);he&&(B.diagnostics={runnable:Y,programLog:ce,vertexShader:{log:I,prefix:S},fragmentShader:{log:q,prefix:v}})}l.deleteShader(H),l.deleteShader(O),ie=new Zc(l,A),D=WT(l,A)}let ie;this.getUniforms=function(){return ie===void 0&&V(this),ie};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,IT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=O,this}let aA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new sA(e),i.set(e,r)),r}}class sA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function oA(s,e,i,r,l,c,f){const h=new vv,m=new rA,p=new Set,x=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,B,j,ne){const le=j.fog,ce=ne.geometry,I=D.isMeshStandardMaterial?j.environment:null,q=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),Y=q&&q.mapping===iu?q.image.height:null,he=M[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&lt("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const U=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,$=U!==void 0?U.length:0;let ye=0;ce.morphAttributes.position!==void 0&&(ye=1),ce.morphAttributes.normal!==void 0&&(ye=2),ce.morphAttributes.color!==void 0&&(ye=3);let be,Ce,ze,J;if(he){const At=Pi[he];be=At.vertexShader,Ce=At.fragmentShader}else be=D.vertexShader,Ce=D.fragmentShader,m.update(D),ze=m.getVertexShaderID(D),J=m.getFragmentShaderID(D);const pe=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Xe=ne.isInstancedMesh===!0,je=ne.isBatchedMesh===!0,ct=!!D.map,$t=!!D.matcap,ut=!!q,Ot=!!D.aoMap,G=!!D.lightMap,mt=!!D.bumpMap,st=!!D.normalMap,Ft=!!D.displacementMap,Ve=!!D.emissiveMap,kt=!!D.metalnessMap,We=!!D.roughnessMap,ot=D.anisotropy>0,P=D.clearcoat>0,E=D.dispersion>0,te=D.iridescence>0,xe=D.sheen>0,ve=D.transmission>0,fe=ot&&!!D.anisotropyMap,Fe=P&&!!D.clearcoatMap,Le=P&&!!D.clearcoatNormalMap,$e=P&&!!D.clearcoatRoughnessMap,ke=te&&!!D.iridescenceMap,Me=te&&!!D.iridescenceThicknessMap,Re=xe&&!!D.sheenColorMap,Ze=xe&&!!D.sheenRoughnessMap,Je=!!D.specularMap,Oe=!!D.specularColorMap,it=!!D.specularIntensityMap,k=ve&&!!D.transmissionMap,Ne=ve&&!!D.thicknessMap,De=!!D.gradientMap,we=!!D.alphaMap,Te=D.alphaTest>0,Se=!!D.alphaHash,He=!!D.extensions;let at=nr;D.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ct={shaderID:he,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:Ce,defines:D.defines,customVertexShaderID:ze,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:je,batchingColor:je&&ne._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ne.instanceColor!==null,instancingMorph:Xe&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Os,alphaToCoverage:!!D.alphaToCoverage,map:ct,matcap:$t,envMap:ut,envMapMode:ut&&q.mapping,envMapCubeUVHeight:Y,aoMap:Ot,lightMap:G,bumpMap:mt,normalMap:st,displacementMap:_&&Ft,emissiveMap:Ve,normalMapObjectSpace:st&&D.normalMapType===tM,normalMapTangentSpace:st&&D.normalMapType===eM,metalnessMap:kt,roughnessMap:We,anisotropy:ot,anisotropyMap:fe,clearcoat:P,clearcoatMap:Fe,clearcoatNormalMap:Le,clearcoatRoughnessMap:$e,dispersion:E,iridescence:te,iridescenceMap:ke,iridescenceThicknessMap:Me,sheen:xe,sheenColorMap:Re,sheenRoughnessMap:Ze,specularMap:Je,specularColorMap:Oe,specularIntensityMap:it,transmission:ve,transmissionMap:k,thicknessMap:Ne,gradientMap:De,opaque:D.transparent===!1&&D.blending===Ds&&D.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Se,combine:D.combine,mapUv:ct&&A(D.map.channel),aoMapUv:Ot&&A(D.aoMap.channel),lightMapUv:G&&A(D.lightMap.channel),bumpMapUv:mt&&A(D.bumpMap.channel),normalMapUv:st&&A(D.normalMap.channel),displacementMapUv:Ft&&A(D.displacementMap.channel),emissiveMapUv:Ve&&A(D.emissiveMap.channel),metalnessMapUv:kt&&A(D.metalnessMap.channel),roughnessMapUv:We&&A(D.roughnessMap.channel),anisotropyMapUv:fe&&A(D.anisotropyMap.channel),clearcoatMapUv:Fe&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&A(D.sheenRoughnessMap.channel),specularMapUv:Je&&A(D.specularMap.channel),specularColorMapUv:Oe&&A(D.specularColorMap.channel),specularIntensityMapUv:it&&A(D.specularIntensityMap.channel),transmissionMapUv:k&&A(D.transmissionMap.channel),thicknessMapUv:Ne&&A(D.thicknessMap.channel),alphaMapUv:we&&A(D.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(st||ot),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ce.attributes.uv&&(ct||we),fog:!!le,useFog:D.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ee,skinning:ne.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ye,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===fa,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(L(C,D),N(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function F(D){const C=M[D.type];let B;if(C){const j=Pi[C];B=DM.clone(j.uniforms)}else B=D.uniforms;return B}function H(D,C){let B;for(let j=0,ne=x.length;j<ne;j++){const le=x[j];if(le.cacheKey===C){B=le,++B.usedTimes;break}}return B===void 0&&(B=new iA(s,C,D,c),x.push(B)),B}function O(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function V(D){m.remove(D)}function ie(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:F,acquireProgram:H,releaseProgram:O,releaseShaderCache:V,programs:x,dispose:ie}}function lA(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function cA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Fg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ig(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g,_,y,M,A,S){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:A,group:S},s[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=A,v.group=S),e++,v}function h(g,_,y,M,A,S){const v=f(g,_,y,M,A,S);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,_,y,M,A,S){const v=f(g,_,y,M,A,S);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,_){i.length>1&&i.sort(g||cA),r.length>1&&r.sort(_||Fg),l.length>1&&l.sort(_||Fg)}function x(){for(let g=e,_=s.length;g<_;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function uA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Ig,s.set(r,[f])):l>=c.length?(f=new Ig,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function fA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new de,color:new Lt};break;case"SpotLight":i={position:new de,direction:new de,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=i,i}}}function dA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let hA=0;function pA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mA(s){const e=new fA,i=dA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new de);const l=new de,c=new hn,f=new hn;function h(p){let x=0,g=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,M=0,A=0,S=0,v=0,L=0,N=0,F=0,H=0,O=0,V=0;p.sort(pA);for(let D=0,C=p.length;D<C;D++){const B=p[D],j=B.color,ne=B.intensity,le=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=j.r*ne,g+=j.g*ne,_+=j.b*ne;else if(B.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(B.sh.coefficients[I],ne);V++}else if(B.isDirectionalLight){const I=e.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,Y=i.get(B);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=B.shadow.matrix,L++}r.directional[y]=I,y++}else if(B.isSpotLight){const I=e.get(B);I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(j).multiplyScalar(ne),I.distance=le,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,r.spot[A]=I;const q=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,q.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[A]=q.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=ce,F++}A++}else if(B.isRectAreaLight){const I=e.get(B);I.color.copy(j).multiplyScalar(ne),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=I,S++}else if(B.isPointLight){const I=e.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),I.distance=B.distance,I.decay=B.decay,B.castShadow){const q=B.shadow,Y=i.get(B);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=B.shadow.matrix,N++}r.point[M]=I,M++}else if(B.isHemisphereLight){const I=e.get(B);I.skyColor.copy(B.color).multiplyScalar(ne),I.groundColor.copy(B.groundColor).multiplyScalar(ne),r.hemi[v]=I,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=_;const ie=r.hash;(ie.directionalLength!==y||ie.pointLength!==M||ie.spotLength!==A||ie.rectAreaLength!==S||ie.hemiLength!==v||ie.numDirectionalShadows!==L||ie.numPointShadows!==N||ie.numSpotShadows!==F||ie.numSpotMaps!==H||ie.numLightProbes!==V)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=F+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=V,ie.directionalLength=y,ie.pointLength=M,ie.spotLength=A,ie.rectAreaLength=S,ie.hemiLength=v,ie.numDirectionalShadows=L,ie.numPointShadows=N,ie.numSpotShadows=F,ie.numSpotMaps=H,ie.numLightProbes=V,r.version=hA++)}function m(p,x){let g=0,_=0,y=0,M=0,A=0;const S=x.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const N=p[v];if(N.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),g++}else if(N.isSpotLight){const F=r.spot[y];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const F=r.rectArea[M];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),F.halfWidth.applyMatrix4(f),F.halfHeight.applyMatrix4(f),M++}else if(N.isPointLight){const F=r.point[_];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const F=r.hemi[A];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:r}}function zg(s){const e=new mA(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function f(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function xA(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new zg(s),e.set(l,[h])):c>=f.length?(h=new zg(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const gA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
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
}`;function _A(s,e,i){let r=new Av;const l=new Pt,c=new Pt,f=new sn,h=new kM({depthPacking:$b}),m=new XM,p={},x=i.maxTextureSize,g={[ir]:Xn,[Xn]:ir,[fa]:fa},_=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:gA,fragmentShader:vA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ii;M.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ar(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=av;let v=this.type;this.render=function(O,V,ie){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),j=s.state;j.setBlending(ma),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ne=v!==ua&&this.type===ua,le=v===ua&&this.type!==ua;for(let ce=0,I=O.length;ce<I;ce++){const q=O[ce],Y=q.shadow;if(Y===void 0){lt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const he=Y.getFrameExtents();if(l.multiply(he),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/he.x),l.x=c.x*he.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/he.y),l.y=c.y*he.y,Y.mapSize.y=c.y)),Y.map===null||ne===!0||le===!0){const $=this.type!==ua?{minFilter:ti,magFilter:ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Lr(l.x,l.y,$),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const ye=Y.getViewport($);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),j.viewport(f),Y.updateMatrices(q,$),r=Y.getFrustum(),F(V,ie,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===ua&&L(Y,ie),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(D,C,B)};function L(O,V){const ie=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Lr(l.x,l.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(V,null,ie,_,A,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(V,null,ie,y,A,null)}function N(O,V,ie,D){let C=null;const B=ie.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)C=B;else if(C=ie.isPointLight===!0?m:h,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const j=C.uuid,ne=V.uuid;let le=p[j];le===void 0&&(le={},p[j]=le);let ce=le[ne];ce===void 0&&(ce=C.clone(),le[ne]=ce,V.addEventListener("dispose",H)),C=ce}if(C.visible=V.visible,C.wireframe=V.wireframe,D===ua?C.side=V.shadowSide!==null?V.shadowSide:V.side:C.side=V.shadowSide!==null?V.shadowSide:g[V.side],C.alphaMap=V.alphaMap,C.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,C.map=V.map,C.clipShadows=V.clipShadows,C.clippingPlanes=V.clippingPlanes,C.clipIntersection=V.clipIntersection,C.displacementMap=V.displacementMap,C.displacementScale=V.displacementScale,C.displacementBias=V.displacementBias,C.wireframeLinewidth=V.wireframeLinewidth,C.linewidth=V.linewidth,ie.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=s.properties.get(C);j.light=ie}return C}function F(O,V,ie,D,C){if(O.visible===!1)return;if(O.layers.test(V.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ua)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,O.matrixWorld);const ne=e.update(O),le=O.material;if(Array.isArray(le)){const ce=ne.groups;for(let I=0,q=ce.length;I<q;I++){const Y=ce[I],he=le[Y.materialIndex];if(he&&he.visible){const U=N(O,he,D,C);O.onBeforeShadow(s,O,V,ie,ne,U,Y),s.renderBufferDirect(ie,null,ne,U,O,Y),O.onAfterShadow(s,O,V,ie,ne,U,Y)}}}else if(le.visible){const ce=N(O,le,D,C);O.onBeforeShadow(s,O,V,ie,ne,ce,null),s.renderBufferDirect(ie,null,ne,ce,O,null),O.onAfterShadow(s,O,V,ie,ne,ce,null)}}const j=O.children;for(let ne=0,le=j.length;ne<le;ne++)F(j[ne],V,ie,D,C)}function H(O){O.target.removeEventListener("dispose",H);for(const ie in p){const D=p[ie],C=O.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const SA={[$d]:eh,[th]:ah,[nh]:rh,[Ns]:ih,[eh]:$d,[ah]:th,[rh]:nh,[ih]:Ns};function yA(s,e){function i(){let k=!1;const Ne=new sn;let De=null;const we=new sn(0,0,0,0);return{setMask:function(Te){De!==Te&&!k&&(s.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Se,He,at,Ct){Ct===!0&&(Te*=at,Se*=at,He*=at),Ne.set(Te,Se,He,at),we.equals(Ne)===!1&&(s.clearColor(Te,Se,He,at),we.copy(Ne))},reset:function(){k=!1,De=null,we.set(-1,0,0,0)}}}function r(){let k=!1,Ne=!1,De=null,we=null,Te=null;return{setReversed:function(Se){if(Ne!==Se){const He=e.get("EXT_clip_control");Se?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const at=Te;Te=null,this.setClear(at)}},getReversed:function(){return Ne},setTest:function(Se){Se?pe(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Se){De!==Se&&!k&&(s.depthMask(Se),De=Se)},setFunc:function(Se){if(Ne&&(Se=SA[Se]),we!==Se){switch(Se){case $d:s.depthFunc(s.NEVER);break;case eh:s.depthFunc(s.ALWAYS);break;case th:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case nh:s.depthFunc(s.EQUAL);break;case ih:s.depthFunc(s.GEQUAL);break;case ah:s.depthFunc(s.GREATER);break;case rh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Te!==Se&&(Ne&&(Se=1-Se),s.clearDepth(Se),Te=Se)},reset:function(){k=!1,De=null,we=null,Te=null,Ne=!1}}}function l(){let k=!1,Ne=null,De=null,we=null,Te=null,Se=null,He=null,at=null,Ct=null;return{setTest:function(At){k||(At?pe(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(At){Ne!==At&&!k&&(s.stencilMask(At),Ne=At)},setFunc:function(At,ii,on){(De!==At||we!==ii||Te!==on)&&(s.stencilFunc(At,ii,on),De=At,we=ii,Te=on)},setOp:function(At,ii,on){(Se!==At||He!==ii||at!==on)&&(s.stencilOp(At,ii,on),Se=At,He=ii,at=on)},setLocked:function(At){k=At},setClear:function(At){Ct!==At&&(s.clearStencil(At),Ct=At)},reset:function(){k=!1,Ne=null,De=null,we=null,Te=null,Se=null,He=null,at=null,Ct=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},_=new WeakMap,y=[],M=null,A=!1,S=null,v=null,L=null,N=null,F=null,H=null,O=null,V=new Lt(0,0,0),ie=0,D=!1,C=null,B=null,j=null,ne=null,le=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=q>=2);let he=null,U={};const $=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),be=new sn().fromArray($),Ce=new sn().fromArray(ye);function ze(k,Ne,De,we){const Te=new Uint8Array(4),Se=s.createTexture();s.bindTexture(k,Se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<De;He++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ne+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Se}const J={};J[s.TEXTURE_2D]=ze(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),pe(s.DEPTH_TEST),f.setFunc(Ns),mt(!1),st(kx),pe(s.CULL_FACE),Ot(ma);function pe(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function Ee(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function Xe(k,Ne){return g[k]!==Ne?(s.bindFramebuffer(k,Ne),g[k]=Ne,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function je(k,Ne){let De=y,we=!1;if(k){De=_.get(Ne),De===void 0&&(De=[],_.set(Ne,De));const Te=k.textures;if(De.length!==Te.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,He=Te.length;Se<He;Se++)De[Se]=s.COLOR_ATTACHMENT0+Se;De.length=Te.length,we=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,we=!0);we&&s.drawBuffers(De)}function ct(k){return M!==k?(s.useProgram(k),M=k,!0):!1}const $t={[wr]:s.FUNC_ADD,[Tb]:s.FUNC_SUBTRACT,[Ab]:s.FUNC_REVERSE_SUBTRACT};$t[Rb]=s.MIN,$t[wb]=s.MAX;const ut={[Cb]:s.ZERO,[Db]:s.ONE,[Ub]:s.SRC_COLOR,[Qd]:s.SRC_ALPHA,[Ib]:s.SRC_ALPHA_SATURATE,[Ob]:s.DST_COLOR,[Lb]:s.DST_ALPHA,[Nb]:s.ONE_MINUS_SRC_COLOR,[Jd]:s.ONE_MINUS_SRC_ALPHA,[Fb]:s.ONE_MINUS_DST_COLOR,[Pb]:s.ONE_MINUS_DST_ALPHA,[zb]:s.CONSTANT_COLOR,[Bb]:s.ONE_MINUS_CONSTANT_COLOR,[Hb]:s.CONSTANT_ALPHA,[Gb]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(k,Ne,De,we,Te,Se,He,at,Ct,At){if(k===ma){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(pe(s.BLEND),A=!0),k!==Eb){if(k!==S||At!==D){if((v!==wr||F!==wr)&&(s.blendEquation(s.FUNC_ADD),v=wr,F=wr),At)switch(k){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kd:s.blendFunc(s.ONE,s.ONE);break;case Xx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rn("WebGLState: Invalid blending: ",k);break}else switch(k){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xx:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jx:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",k);break}L=null,N=null,H=null,O=null,V.set(0,0,0),ie=0,S=k,D=At}return}Te=Te||Ne,Se=Se||De,He=He||we,(Ne!==v||Te!==F)&&(s.blendEquationSeparate($t[Ne],$t[Te]),v=Ne,F=Te),(De!==L||we!==N||Se!==H||He!==O)&&(s.blendFuncSeparate(ut[De],ut[we],ut[Se],ut[He]),L=De,N=we,H=Se,O=He),(at.equals(V)===!1||Ct!==ie)&&(s.blendColor(at.r,at.g,at.b,Ct),V.copy(at),ie=Ct),S=k,D=!1}function G(k,Ne){k.side===fa?Ee(s.CULL_FACE):pe(s.CULL_FACE);let De=k.side===Xn;Ne&&(De=!De),mt(De),k.blending===Ds&&k.transparent===!1?Ot(ma):Ot(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const we=k.stencilWrite;h.setTest(we),we&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function st(k){k!==yb?(pe(s.CULL_FACE),k!==B&&(k===kx?s.cullFace(s.BACK):k===bb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),B=k}function Ft(k){k!==j&&(I&&s.lineWidth(k),j=k)}function Ve(k,Ne,De){k?(pe(s.POLYGON_OFFSET_FILL),(ne!==Ne||le!==De)&&(s.polygonOffset(Ne,De),ne=Ne,le=De)):Ee(s.POLYGON_OFFSET_FILL)}function kt(k){k?pe(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function We(k){k===void 0&&(k=s.TEXTURE0+ce-1),he!==k&&(s.activeTexture(k),he=k)}function ot(k,Ne,De){De===void 0&&(he===null?De=s.TEXTURE0+ce-1:De=he);let we=U[De];we===void 0&&(we={type:void 0,texture:void 0},U[De]=we),(we.type!==k||we.texture!==Ne)&&(he!==De&&(s.activeTexture(De),he=De),s.bindTexture(k,Ne||J[k]),we.type=k,we.texture=Ne)}function P(){const k=U[he];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function xe(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ve(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Fe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Le(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function $e(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ke(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Me(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Re(k){be.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function Ze(k){Ce.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ce.copy(k))}function Je(k,Ne){let De=p.get(Ne);De===void 0&&(De=new WeakMap,p.set(Ne,De));let we=De.get(k);we===void 0&&(we=s.getUniformBlockIndex(Ne,k.name),De.set(k,we))}function Oe(k,Ne){const we=p.get(Ne).get(k);m.get(Ne)!==we&&(s.uniformBlockBinding(Ne,we,k.__bindingPointIndex),m.set(Ne,we))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},he=null,U={},g={},_=new WeakMap,y=[],M=null,A=!1,S=null,v=null,L=null,N=null,F=null,H=null,O=null,V=new Lt(0,0,0),ie=0,D=!1,C=null,B=null,j=null,ne=null,le=null,be.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:pe,disable:Ee,bindFramebuffer:Xe,drawBuffers:je,useProgram:ct,setBlending:Ot,setMaterial:G,setFlipSided:mt,setCullFace:st,setLineWidth:Ft,setPolygonOffset:Ve,setScissorTest:kt,activeTexture:We,bindTexture:ot,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:te,texImage2D:ke,texImage3D:Me,updateUBOMapping:Je,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:$e,texSubImage2D:xe,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Fe,scissor:Re,viewport:Ze,reset:it}}function bA(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,x=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return y?new OffscreenCanvas(P,E):$c("canvas")}function A(P,E,te){let xe=1;const ve=ot(P);if((ve.width>te||ve.height>te)&&(xe=te/Math.max(ve.width,ve.height)),xe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(xe*ve.width),Fe=Math.floor(xe*ve.height);g===void 0&&(g=M(fe,Fe));const Le=E?M(fe,Fe):g;return Le.width=fe,Le.height=Fe,Le.getContext("2d").drawImage(P,0,0,fe,Fe),lt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Fe+")."),Le}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(P,E,te,xe,ve=!1){if(P!==null){if(s[P]!==void 0)return s[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;if(E===s.RED&&(te===s.FLOAT&&(fe=s.R32F),te===s.HALF_FLOAT&&(fe=s.R16F),te===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.R8UI),te===s.UNSIGNED_SHORT&&(fe=s.R16UI),te===s.UNSIGNED_INT&&(fe=s.R32UI),te===s.BYTE&&(fe=s.R8I),te===s.SHORT&&(fe=s.R16I),te===s.INT&&(fe=s.R32I)),E===s.RG&&(te===s.FLOAT&&(fe=s.RG32F),te===s.HALF_FLOAT&&(fe=s.RG16F),te===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RG8UI),te===s.UNSIGNED_SHORT&&(fe=s.RG16UI),te===s.UNSIGNED_INT&&(fe=s.RG32UI),te===s.BYTE&&(fe=s.RG8I),te===s.SHORT&&(fe=s.RG16I),te===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),te===s.UNSIGNED_INT&&(fe=s.RGB32UI),te===s.BYTE&&(fe=s.RGB8I),te===s.SHORT&&(fe=s.RGB16I),te===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),te===s.UNSIGNED_INT&&(fe=s.RGBA32UI),te===s.BYTE&&(fe=s.RGBA8I),te===s.SHORT&&(fe=s.RGBA16I),te===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(te===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const Fe=ve?Qc:Tt.getTransfer(xe);te===s.FLOAT&&(fe=s.RGBA32F),te===s.HALF_FLOAT&&(fe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(fe=Fe===Ht?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function F(P,E){let te;return P?E===null||E===Nr||E===Qo?te=s.DEPTH24_STENCIL8:E===ha?te=s.DEPTH32F_STENCIL8:E===Ko&&(te=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Nr||E===Qo?te=s.DEPTH_COMPONENT24:E===ha?te=s.DEPTH_COMPONENT32F:E===Ko&&(te=s.DEPTH_COMPONENT16),te}function H(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ti&&P.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function O(P){const E=P.target;E.removeEventListener("dispose",O),ie(E),E.isVideoTexture&&x.delete(E)}function V(P){const E=P.target;E.removeEventListener("dispose",V),C(E)}function ie(P){const E=r.get(P);if(E.__webglInit===void 0)return;const te=P.source,xe=_.get(te);if(xe){const ve=xe[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(P),Object.keys(xe).length===0&&_.delete(te)}r.remove(P)}function D(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const te=P.source,xe=_.get(te);delete xe[E.__cacheKey],f.memory.textures--}function C(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let ve=0;ve<E.__webglFramebuffer[xe].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[xe][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[xe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=P.textures;for(let xe=0,ve=te.length;xe<ve;xe++){const fe=r.get(te[xe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(te[xe])}r.remove(P)}let B=0;function j(){B=0}function ne(){const P=B;return P>=l.maxTextures&&lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),B+=1,P}function le(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ce(P,E){const te=r.get(P);if(P.isVideoTexture&&kt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&te.__version!==P.version){const xe=P.image;if(xe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,P,E);return}}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+E)}function I(P,E){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){J(te,P,E);return}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+E)}function q(P,E){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){J(te,P,E);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+E)}function Y(P,E){const te=r.get(P);if(P.version>0&&te.__version!==P.version){pe(te,P,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+E)}const he={[lh]:s.REPEAT,[da]:s.CLAMP_TO_EDGE,[ch]:s.MIRRORED_REPEAT},U={[ti]:s.NEAREST,[Qb]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[vd]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},$={[nM]:s.NEVER,[lM]:s.ALWAYS,[iM]:s.LESS,[pv]:s.LEQUAL,[aM]:s.EQUAL,[oM]:s.GEQUAL,[rM]:s.GREATER,[sM]:s.NOTEQUAL};function ye(P,E){if(E.type===ha&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===vd||E.magFilter===_c||E.magFilter===Dr||E.minFilter===mi||E.minFilter===vd||E.minFilter===_c||E.minFilter===Dr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,he[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,he[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,he[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==_c&&E.minFilter!==Dr||E.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function be(P,E){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",O));const xe=E.source;let ve=_.get(xe);ve===void 0&&(ve={},_.set(xe,ve));const fe=le(E);if(fe!==P.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),ve[fe].usedTimes++;const Fe=ve[P.__cacheKey];Fe!==void 0&&(ve[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&D(E)),P.__cacheKey=fe,P.__webglTexture=ve[fe].texture}return te}function Ce(P,E,te){return Math.floor(Math.floor(P/te)/E)}function ze(P,E,te,xe){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,te,xe,E.data);else{fe.sort((Me,Re)=>Me.start-Re.start);let Fe=0;for(let Me=1;Me<fe.length;Me++){const Re=fe[Fe],Ze=fe[Me],Je=Re.start+Re.count,Oe=Ce(Ze.start,E.width,4),it=Ce(Re.start,E.width,4);Ze.start<=Je+1&&Oe===it&&Ce(Ze.start+Ze.count-1,E.width,4)===Oe?Re.count=Math.max(Re.count,Ze.start+Ze.count-Re.start):(++Fe,fe[Fe]=Ze)}fe.length=Fe+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),$e=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Re=fe.length;Me<Re;Me++){const Ze=fe[Me],Je=Math.floor(Ze.start/4),Oe=Math.ceil(Ze.count/4),it=Je%E.width,k=Math.floor(Je/E.width),Ne=Oe,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,it,k,Ne,De,te,xe,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function J(P,E,te){let xe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=s.TEXTURE_3D);const ve=be(P,E),fe=E.source;i.bindTexture(xe,P.__webglTexture,s.TEXTURE0+te);const Fe=r.get(fe);if(fe.version!==Fe.__version||ve===!0){i.activeTexture(s.TEXTURE0+te);const Le=Tt.getPrimaries(Tt.workingColorSpace),$e=E.colorSpace===er?null:Tt.getPrimaries(E.colorSpace),ke=E.colorSpace===er||Le===$e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Me=A(E.image,!1,l.maxTextureSize);Me=We(E,Me);const Re=c.convert(E.format,E.colorSpace),Ze=c.convert(E.type);let Je=N(E.internalFormat,Re,Ze,E.colorSpace,E.isVideoTexture);ye(xe,E);let Oe;const it=E.mipmaps,k=E.isVideoTexture!==!0,Ne=Fe.__version===void 0||ve===!0,De=fe.dataReady,we=H(E,Me);if(E.isDepthTexture)Je=F(E.format===$o,E.type),Ne&&(k?i.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Re,Ze,null));else if(E.isDataTexture)if(it.length>0){k&&Ne&&i.texStorage2D(s.TEXTURE_2D,we,Je,it[0].width,it[0].height);for(let Te=0,Se=it.length;Te<Se;Te++)Oe=it[Te],k?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Re,Ze,Oe.data):i.texImage2D(s.TEXTURE_2D,Te,Je,Oe.width,Oe.height,0,Re,Ze,Oe.data);E.generateMipmaps=!1}else k?(Ne&&i.texStorage2D(s.TEXTURE_2D,we,Je,Me.width,Me.height),De&&ze(E,Me,Re,Ze)):i.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Re,Ze,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Je,it[0].width,it[0].height,Me.depth);for(let Te=0,Se=it.length;Te<Se;Te++)if(Oe=it[Te],E.format!==Ti)if(Re!==null)if(k){if(De)if(E.layerUpdates.size>0){const He=mg(Oe.width,Oe.height,E.format,E.type);for(const at of E.layerUpdates){const Ct=Oe.data.subarray(at*He/Oe.data.BYTES_PER_ELEMENT,(at+1)*He/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,at,Oe.width,Oe.height,1,Re,Ct)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Me.depth,Re,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Je,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Oe.width,Oe.height,Me.depth,Re,Ze,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Je,Oe.width,Oe.height,Me.depth,0,Re,Ze,Oe.data)}else{k&&Ne&&i.texStorage2D(s.TEXTURE_2D,we,Je,it[0].width,it[0].height);for(let Te=0,Se=it.length;Te<Se;Te++)Oe=it[Te],E.format!==Ti?Re!==null?k?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Re,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Je,Oe.width,Oe.height,0,Oe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Oe.width,Oe.height,Re,Ze,Oe.data):i.texImage2D(s.TEXTURE_2D,Te,Je,Oe.width,Oe.height,0,Re,Ze,Oe.data)}else if(E.isDataArrayTexture)if(k){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Je,Me.width,Me.height,Me.depth),De)if(E.layerUpdates.size>0){const Te=mg(Me.width,Me.height,E.format,E.type);for(const Se of E.layerUpdates){const He=Me.data.subarray(Se*Te/Me.data.BYTES_PER_ELEMENT,(Se+1)*Te/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Me.width,Me.height,1,Re,Ze,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Re,Ze,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Re,Ze,Me.data);else if(E.isData3DTexture)k?(Ne&&i.texStorage3D(s.TEXTURE_3D,we,Je,Me.width,Me.height,Me.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Re,Ze,Me.data)):i.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Re,Ze,Me.data);else if(E.isFramebufferTexture){if(Ne)if(k)i.texStorage2D(s.TEXTURE_2D,we,Je,Me.width,Me.height);else{let Te=Me.width,Se=Me.height;for(let He=0;He<we;He++)i.texImage2D(s.TEXTURE_2D,He,Je,Te,Se,0,Re,Ze,null),Te>>=1,Se>>=1}}else if(it.length>0){if(k&&Ne){const Te=ot(it[0]);i.texStorage2D(s.TEXTURE_2D,we,Je,Te.width,Te.height)}for(let Te=0,Se=it.length;Te<Se;Te++)Oe=it[Te],k?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,Ze,Oe):i.texImage2D(s.TEXTURE_2D,Te,Je,Re,Ze,Oe);E.generateMipmaps=!1}else if(k){if(Ne){const Te=ot(Me);i.texStorage2D(s.TEXTURE_2D,we,Je,Te.width,Te.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ze,Me)}else i.texImage2D(s.TEXTURE_2D,0,Je,Re,Ze,Me);S(E)&&v(xe),Fe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pe(P,E,te){if(E.image.length!==6)return;const xe=be(P,E),ve=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+te);const fe=r.get(ve);if(ve.version!==fe.__version||xe===!0){i.activeTexture(s.TEXTURE0+te);const Fe=Tt.getPrimaries(Tt.workingColorSpace),Le=E.colorSpace===er?null:Tt.getPrimaries(E.colorSpace),$e=E.colorSpace===er||Fe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let Se=0;Se<6;Se++)!ke&&!Me?Re[Se]=A(E.image[Se],!0,l.maxCubemapSize):Re[Se]=Me?E.image[Se].image:E.image[Se],Re[Se]=We(E,Re[Se]);const Ze=Re[0],Je=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type),it=N(E.internalFormat,Je,Oe,E.colorSpace),k=E.isVideoTexture!==!0,Ne=fe.__version===void 0||xe===!0,De=ve.dataReady;let we=H(E,Ze);ye(s.TEXTURE_CUBE_MAP,E);let Te;if(ke){k&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Ze.width,Ze.height);for(let Se=0;Se<6;Se++){Te=Re[Se].mipmaps;for(let He=0;He<Te.length;He++){const at=Te[He];E.format!==Ti?Je!==null?k?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,at.width,at.height,Je,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,it,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,at.width,at.height,Je,Oe,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,it,at.width,at.height,0,Je,Oe,at.data)}}}else{if(Te=E.mipmaps,k&&Ne){Te.length>0&&we++;const Se=ot(Re[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Me){k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Re[Se].width,Re[Se].height,Je,Oe,Re[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Re[Se].width,Re[Se].height,0,Je,Oe,Re[Se].data);for(let He=0;He<Te.length;He++){const Ct=Te[He].image[Se].image;k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,Ct.width,Ct.height,Je,Oe,Ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,it,Ct.width,Ct.height,0,Je,Oe,Ct.data)}}else{k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Je,Oe,Re[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Je,Oe,Re[Se]);for(let He=0;He<Te.length;He++){const at=Te[He];k?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,Je,Oe,at.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,it,Je,Oe,at.image[Se])}}}S(E)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,te,xe,ve,fe){const Fe=c.convert(te.format,te.colorSpace),Le=c.convert(te.type),$e=N(te.internalFormat,Fe,Le,te.colorSpace),ke=r.get(E),Me=r.get(te);if(Me.__renderTarget=E,!ke.__hasExternalTextures){const Re=Math.max(1,E.width>>fe),Ze=Math.max(1,E.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?i.texImage3D(ve,fe,$e,Re,Ze,E.depth,0,Fe,Le,null):i.texImage2D(ve,fe,$e,Re,Ze,0,Fe,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),Ve(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ve,Me.__webglTexture,0,Ft(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,ve,Me.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(P,E,te){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const xe=E.depthTexture,ve=xe&&xe.isDepthTexture?xe.type:null,fe=F(E.stencilBuffer,ve),Fe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Ft(E);Ve(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,fe,E.width,E.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,P)}else{const xe=E.textures;for(let ve=0;ve<xe.length;ve++){const fe=xe[ve],Fe=c.convert(fe.format,fe.colorSpace),Le=c.convert(fe.type),$e=N(fe.internalFormat,Fe,Le,fe.colorSpace),ke=Ft(E);te&&Ve(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,$e,E.width,E.height):Ve(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,$e,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,$e,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(E.depthTexture);xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce(E.depthTexture,0);const ve=xe.__webglTexture,fe=Ft(E);if(E.depthTexture.format===Jo)Ve(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(E.depthTexture.format===$o)Ve(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ct(P){const E=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const xe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",ve)};xe.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=xe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const xe=P.texture.mipmaps;xe&&xe.length>0?je(E.__webglFramebuffer[0],P):je(E.__webglFramebuffer,P)}else if(te){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=s.createRenderbuffer(),Xe(E.__webglDepthbuffer[xe],P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else{const xe=P.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xe(E.__webglDepthbuffer,P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(P,E,te){const xe=r.get(P);E!==void 0&&Ee(xe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&ct(P)}function ut(P){const E=P.texture,te=r.get(P),xe=r.get(E);P.addEventListener("dispose",V);const ve=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Fe=ve.length>1;if(Fe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=E.version,f.memory.textures++),fe){te.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[Le]=[];for(let $e=0;$e<E.mipmaps.length;$e++)te.__webglFramebuffer[Le][$e]=s.createFramebuffer()}else te.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)te.__webglFramebuffer[Le]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Le=0,$e=ve.length;Le<$e;Le++){const ke=r.get(ve[Le]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&Ve(P)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Le=0;Le<ve.length;Le++){const $e=ve[Le];te.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Le]);const ke=c.convert($e.format,$e.colorSpace),Me=c.convert($e.type),Re=N($e.internalFormat,ke,Me,$e.colorSpace,P.isXRRenderTarget===!0),Ze=Ft(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Re,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,te.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(s.TEXTURE_CUBE_MAP,E);for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0)for(let $e=0;$e<E.mipmaps.length;$e++)Ee(te.__webglFramebuffer[Le][$e],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,$e);else Ee(te.__webglFramebuffer[Le],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let Le=0,$e=ve.length;Le<$e;Le++){const ke=ve[Le],Me=r.get(ke);let Re=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Me.__webglTexture),ye(Re,ke),Ee(te.__webglFramebuffer,P,ke,s.COLOR_ATTACHMENT0+Le,Re,0),S(ke)&&v(Re)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,xe.__webglTexture),ye(Le,E),E.mipmaps&&E.mipmaps.length>0)for(let $e=0;$e<E.mipmaps.length;$e++)Ee(te.__webglFramebuffer[$e],P,E,s.COLOR_ATTACHMENT0,Le,$e);else Ee(te.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Le,0);S(E)&&v(Le),i.unbindTexture()}P.depthBuffer&&ct(P)}function Ot(P){const E=P.textures;for(let te=0,xe=E.length;te<xe;te++){const ve=E[te];if(S(ve)){const fe=L(P),Fe=r.get(ve).__webglTexture;i.bindTexture(fe,Fe),v(fe),i.unbindTexture()}}}const G=[],mt=[];function st(P){if(P.samples>0){if(Ve(P)===!1){const E=P.textures,te=P.width,xe=P.height;let ve=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(P),Le=E.length>1;if(Le)for(let ke=0;ke<E.length;ke++)i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const $e=P.texture.mipmaps;$e&&$e.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Me=r.get(E[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,te,xe,0,0,te,xe,ve,s.NEAREST),m===!0&&(G.length=0,mt.length=0,G.push(s.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(G.push(fe),mt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let ke=0;ke<E.length;ke++){i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Me=r.get(E[ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Me,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ft(P){return Math.min(l.maxSamples,P.samples)}function Ve(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(P){const E=f.render.frame;x.get(P)!==E&&(x.set(P,E),P.update())}function We(P,E){const te=P.colorSpace,xe=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Os&&te!==er&&(Tt.getTransfer(te)===Ht?(xe!==Ti||ve!==va)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",te)),E}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=j,this.setTexture2D=ce,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=$t,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ve}function MA(s,e){function i(r,l=er){let c;const f=Tt.getTransfer(l);if(r===va)return s.UNSIGNED_BYTE;if(r===Zh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===uv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ov)return s.BYTE;if(r===lv)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===Yh)return s.INT;if(r===Nr)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===Bs)return s.HALF_FLOAT;if(r===fv)return s.ALPHA;if(r===dv)return s.RGB;if(r===Ti)return s.RGBA;if(r===Jo)return s.DEPTH_COMPONENT;if(r===$o)return s.DEPTH_STENCIL;if(r===hv)return s.RED;if(r===Qh)return s.RED_INTEGER;if(r===Jh)return s.RG;if(r===$h)return s.RG_INTEGER;if(r===ep)return s.RGBA_INTEGER;if(r===jc||r===Wc||r===qc||r===Yc)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===fh||r===dh||r===hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ph||r===mh||r===xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ph||r===mh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===xh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===vh||r===_h||r===Sh||r===yh||r===bh||r===Mh||r===Eh||r===Th||r===Ah||r===Rh||r===wh||r===Ch||r===Dh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ch)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uh||r===Nh||r===Lh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Uh)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ph||r===Oh||r===Fh||r===Ih)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ph)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ih)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const EA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
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

}`;class AA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Cv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Sa({vertexShader:EA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ar(new ru(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends Hs{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,g=null,_=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new AA,v={},L=i.getContextAttributes();let N=null,F=null;const H=[],O=[],V=new Pt;let ie=null;const D=new pi;D.viewport=new sn;const C=new pi;C.viewport=new sn;const B=[D,C],j=new WM;let ne=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=H[J];return pe===void 0&&(pe=new Gd,H[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=H[J];return pe===void 0&&(pe=new Gd,H[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=H[J];return pe===void 0&&(pe=new Gd,H[J]=pe),pe.getHandSpace()};function ce(J){const pe=O.indexOf(J.inputSource);if(pe===-1)return;const Ee=H[pe];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,p||f),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function I(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",q);for(let J=0;J<H.length;J++){const pe=O[J];pe!==null&&(O[J]=null,H[J].disconnect(pe))}ne=null,le=null,S.reset();for(const J in v)delete v[J];e.setRenderTarget(N),y=null,_=null,g=null,l=null,F=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(ie),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",I),l.addEventListener("inputsourceschange",q),L.xrCompatible!==!0&&await i.makeXRCompatible(),ie=e.getPixelRatio(),e.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Xe=null,je=null;L.depth&&(je=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=L.stencil?$o:Jo,Xe=L.stencil?Qo:Nr);const ct={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(ct),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),F=new Lr(_.textureWidth,_.textureHeight,{format:Ti,type:va,depthTexture:new wv(_.textureWidth,_.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Lr(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:va,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(J){for(let pe=0;pe<J.removed.length;pe++){const Ee=J.removed[pe],Xe=O.indexOf(Ee);Xe>=0&&(O[Xe]=null,H[Xe].disconnect(Ee))}for(let pe=0;pe<J.added.length;pe++){const Ee=J.added[pe];let Xe=O.indexOf(Ee);if(Xe===-1){for(let ct=0;ct<H.length;ct++)if(ct>=O.length){O.push(Ee),Xe=ct;break}else if(O[ct]===null){O[ct]=Ee,Xe=ct;break}if(Xe===-1)break}const je=H[Xe];je&&je.connect(Ee)}}const Y=new de,he=new de;function U(J,pe,Ee){Y.setFromMatrixPosition(pe.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const Xe=Y.distanceTo(he),je=pe.projectionMatrix.elements,ct=Ee.projectionMatrix.elements,$t=je[14]/(je[10]-1),ut=je[14]/(je[10]+1),Ot=(je[9]+1)/je[5],G=(je[9]-1)/je[5],mt=(je[8]-1)/je[0],st=(ct[8]+1)/ct[0],Ft=$t*mt,Ve=$t*st,kt=Xe/(-mt+st),We=kt*-mt;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(We),J.translateZ(kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),je[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const ot=$t+kt,P=ut+kt,E=Ft-We,te=Ve+(Xe-We),xe=Ot*ut/P*ot,ve=G*ut/P*ot;J.projectionMatrix.makePerspective(E,te,xe,ve,ot,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let pe=J.near,Ee=J.far;S.texture!==null&&(S.depthNear>0&&(pe=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),j.near=C.near=D.near=pe,j.far=C.far=D.far=Ee,(ne!==j.near||le!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),ne=j.near,le=j.far),j.layers.mask=J.layers.mask|6,D.layers.mask=j.layers.mask&3,C.layers.mask=j.layers.mask&5;const Xe=J.parent,je=j.cameras;$(j,Xe);for(let ct=0;ct<je.length;ct++)$(je[ct],Xe);je.length===2?U(j,D,C):j.projectionMatrix.copy(D.projectionMatrix),ye(J,j,Xe)};function ye(J,pe,Ee){Ee===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(J){m=J,_!==null&&(_.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(J){return v[J]};let be=null;function Ce(J,pe){if(x=pe.getViewerPose(p||f),M=pe,x!==null){const Ee=x.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let Xe=!1;Ee.length!==j.cameras.length&&(j.cameras.length=0,Xe=!0);for(let ut=0;ut<Ee.length;ut++){const Ot=Ee[ut];let G=null;if(y!==null)G=y.getViewport(Ot);else{const st=g.getViewSubImage(_,Ot);G=st.viewport,ut===0&&(e.setRenderTargetTextures(F,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(F))}let mt=B[ut];mt===void 0&&(mt=new pi,mt.layers.enable(ut),mt.viewport=new sn,B[ut]=mt),mt.matrix.fromArray(Ot.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ot.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(G.x,G.y,G.width,G.height),ut===0&&(j.matrix.copy(mt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Xe===!0&&j.cameras.push(mt)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const ut=g.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,l.renderState)}if(je&&je.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let ut=0;ut<Ee.length;ut++){const Ot=Ee[ut].camera;if(Ot){let G=v[Ot];G||(G=new Cv,v[Ot]=G);const mt=g.getCameraImage(Ot);G.sourceTexture=mt}}}}for(let Ee=0;Ee<H.length;Ee++){const Xe=O[Ee],je=H[Ee];Xe!==null&&je!==void 0&&je.update(Xe,pe,p||f)}be&&be(J,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const ze=new Dv;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(J){be=J},this.dispose=function(){}}}const Ar=new _a,wA=new hn;function CA(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Mv(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,L,N,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),g(S,v)):v.isMeshPhongMaterial?(c(S,v),x(S,v)):v.isMeshStandardMaterial?(c(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,F)):v.isMeshMatcapMaterial?(c(S,v),M(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,L,N):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Xn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Xn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),N=L.envMap,F=L.envMapRotation;N&&(S.envMap.value=N,Ar.copy(F),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(Ar)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=N*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function x(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function DA(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,N){const F=N.program;r.uniformBlockBinding(L,F)}function p(L,N){let F=l[L.id];F===void 0&&(M(L),F=x(L),l[L.id]=F,L.addEventListener("dispose",S));const H=N.program;r.updateUBOMapping(L,H);const O=e.render.frame;c[L.id]!==O&&(_(L),c[L.id]=O)}function x(L){const N=g();L.__bindingPointIndex=N;const F=s.createBuffer(),H=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,F),F}function g(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const N=l[L.id],F=L.uniforms,H=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let O=0,V=F.length;O<V;O++){const ie=Array.isArray(F[O])?F[O]:[F[O]];for(let D=0,C=ie.length;D<C;D++){const B=ie[D];if(y(B,O,D,H)===!0){const j=B.__offset,ne=Array.isArray(B.value)?B.value:[B.value];let le=0;for(let ce=0;ce<ne.length;ce++){const I=ne[ce],q=A(I);typeof I=="number"||typeof I=="boolean"?(B.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,j+le,B.__data)):I.isMatrix3?(B.__data[0]=I.elements[0],B.__data[1]=I.elements[1],B.__data[2]=I.elements[2],B.__data[3]=0,B.__data[4]=I.elements[3],B.__data[5]=I.elements[4],B.__data[6]=I.elements[5],B.__data[7]=0,B.__data[8]=I.elements[6],B.__data[9]=I.elements[7],B.__data[10]=I.elements[8],B.__data[11]=0):(I.toArray(B.__data,le),le+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,N,F,H){const O=L.value,V=N+"_"+F;if(H[V]===void 0)return typeof O=="number"||typeof O=="boolean"?H[V]=O:H[V]=O.clone(),!0;{const ie=H[V];if(typeof O=="number"||typeof O=="boolean"){if(ie!==O)return H[V]=O,!0}else if(ie.equals(O)===!1)return ie.copy(O),!0}return!1}function M(L){const N=L.uniforms;let F=0;const H=16;for(let V=0,ie=N.length;V<ie;V++){const D=Array.isArray(N[V])?N[V]:[N[V]];for(let C=0,B=D.length;C<B;C++){const j=D[C],ne=Array.isArray(j.value)?j.value:[j.value];for(let le=0,ce=ne.length;le<ce;le++){const I=ne[le],q=A(I),Y=F%H,he=Y%q.boundary,U=Y+he;F+=he,U!==0&&H-U<q.storage&&(F+=H-U),j.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=F,F+=q.storage}}}const O=F%H;return O>0&&(F+=H-O),L.__size=F,L.__cache={},this}function A(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const F=f.indexOf(N.__bindingPointIndex);f.splice(F,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const UA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let sa=null;function NA(){return sa===null&&(sa=new IM(UA,32,32,Jh,Bs),sa.minFilter=mi,sa.magFilter=mi,sa.wrapS=da,sa.wrapT=da,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class LA{constructor(e={}){const{canvas:i=cM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const M=new Set([ep,$h,Qh]),A=new Set([va,Nr,Ko,Qo,Zh,Kh]),S=new Uint32Array(4),v=new Int32Array(4);let L=null,N=null;const F=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let V=!1;this._outputColorSpace=hi;let ie=0,D=0,C=null,B=-1,j=null;const ne=new sn,le=new sn;let ce=null;const I=new Lt(0);let q=0,Y=i.width,he=i.height,U=1,$=null,ye=null;const be=new sn(0,0,Y,he),Ce=new sn(0,0,Y,he);let ze=!1;const J=new Av;let pe=!1,Ee=!1;const Xe=new hn,je=new de,ct=new sn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ot(){return C===null?U:1}let G=r;function mt(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qh}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",He,!1),G===null){const Z="webgl2";if(G=mt(Z,w),G===null)throw mt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let st,Ft,Ve,kt,We,ot,P,E,te,xe,ve,fe,Fe,Le,$e,ke,Me,Re,Ze,Je,Oe,it,k,Ne;function De(){st=new GE(G),st.init(),it=new MA(G,st),Ft=new NE(G,st,e,it),Ve=new yA(G,st),Ft.reversedDepthBuffer&&_&&Ve.buffers.depth.setReversed(!0),kt=new XE(G),We=new lA,ot=new bA(G,st,Ve,We,Ft,it,kt),P=new PE(O),E=new HE(O),te=new YM(G),k=new DE(G,te),xe=new VE(G,te,kt,k),ve=new WE(G,xe,te,kt),Ze=new jE(G,Ft,ot),ke=new LE(We),fe=new oA(O,P,E,st,Ft,k,ke),Fe=new CA(O,We),Le=new uA,$e=new xA(st),Re=new CE(O,P,E,Ve,ve,y,m),Me=new _A(O,ve,Ft),Ne=new DA(G,kt,Ft,Ve),Je=new UE(G,st,kt),Oe=new kE(G,st,kt),kt.programs=fe.programs,O.capabilities=Ft,O.extensions=st,O.properties=We,O.renderLists=Le,O.shadowMap=Me,O.state=Ve,O.info=kt}De();const we=new RA(O,G);this.xr=we,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(Y,he,!1))},this.getSize=function(w){return w.set(Y,he)},this.setSize=function(w,Z,oe=!0){if(we.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,he=Z,i.width=Math.floor(w*U),i.height=Math.floor(Z*U),oe===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(Y*U,he*U).floor()},this.setDrawingBufferSize=function(w,Z,oe){Y=w,he=Z,U=oe,i.width=Math.floor(w*oe),i.height=Math.floor(Z*oe),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,Z,oe,ue){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,Z,oe,ue),Ve.viewport(ne.copy(be).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,Z,oe,ue){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,Z,oe,ue),Ve.scissor(le.copy(Ce).multiplyScalar(U).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(w){Ve.setScissorTest(ze=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ye=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,oe=!0){let ue=0;if(w){let K=!1;if(C!==null){const Ae=C.texture.format;K=M.has(Ae)}if(K){const Ae=C.texture.type,Ue=A.has(Ae),Be=Re.getClearColor(),Ie=Re.getClearAlpha(),Ke=Be.r,et=Be.g,qe=Be.b;Ue?(S[0]=Ke,S[1]=et,S[2]=qe,S[3]=Ie,G.clearBufferuiv(G.COLOR,0,S)):(v[0]=Ke,v[1]=et,v[2]=qe,v[3]=Ie,G.clearBufferiv(G.COLOR,0,v))}else ue|=G.COLOR_BUFFER_BIT}Z&&(ue|=G.DEPTH_BUFFER_BIT),oe&&(ue|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",He,!1),Re.dispose(),Le.dispose(),$e.dispose(),We.dispose(),P.dispose(),E.dispose(),ve.dispose(),k.dispose(),Ne.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Tn),we.removeEventListener("sessionend",zi),xi.stop()};function Te(w){w.preventDefault(),Kx("WebGLRenderer: Context Lost."),V=!0}function Se(){Kx("WebGLRenderer: Context Restored."),V=!1;const w=kt.autoReset,Z=Me.enabled,oe=Me.autoUpdate,ue=Me.needsUpdate,K=Me.type;De(),kt.autoReset=w,Me.enabled=Z,Me.autoUpdate=oe,Me.needsUpdate=ue,Me.type=K}function He(w){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const Z=w.target;Z.removeEventListener("dispose",at),Ct(Z)}function Ct(w){At(w),We.remove(w)}function At(w){const Z=We.get(w).programs;Z!==void 0&&(Z.forEach(function(oe){fe.releaseProgram(oe)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,oe,ue,K,Ae){Z===null&&(Z=$t);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Be=Ma(w,Z,oe,ue,K);Ve.setMaterial(ue,Ue);let Ie=oe.index,Ke=1;if(ue.wireframe===!0){if(Ie=xe.getWireframeAttribute(oe),Ie===void 0)return;Ke=2}const et=oe.drawRange,qe=oe.attributes.position;let xt=et.start*Ke,Rt=(et.start+et.count)*Ke;Ae!==null&&(xt=Math.max(xt,Ae.start*Ke),Rt=Math.min(Rt,(Ae.start+Ae.count)*Ke)),Ie!==null?(xt=Math.max(xt,0),Rt=Math.min(Rt,Ie.count)):qe!=null&&(xt=Math.max(xt,0),Rt=Math.min(Rt,qe.count));const yt=Rt-xt;if(yt<0||yt===1/0)return;k.setup(K,ue,Be,oe,Ie);let Wt,Dt=Je;if(Ie!==null&&(Wt=te.get(Ie),Dt=Oe,Dt.setIndex(Wt)),K.isMesh)ue.wireframe===!0?(Ve.setLineWidth(ue.wireframeLinewidth*Ot()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(K.isLine){let Qe=ue.linewidth;Qe===void 0&&(Qe=1),Ve.setLineWidth(Qe*Ot()),K.isLineSegments?Dt.setMode(G.LINES):K.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else K.isPoints?Dt.setMode(G.POINTS):K.isSprite&&Dt.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,Xt=K._multiDrawCounts,vt=K._multiDrawCount,On=Ie?te.get(Ie).bytesPerElement:1,pn=We.get(ue).currentProgram.getUniforms();for(let An=0;An<vt;An++)pn.setValue(G,"_gl_DrawID",An),Dt.render(Qe[An]/On,Xt[An])}else if(K.isInstancedMesh)Dt.renderInstances(xt,yt,K.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Xt=Math.min(oe.instanceCount,Qe);Dt.renderInstances(xt,yt,Xt)}else Dt.render(xt,yt)};function ii(w,Z,oe){w.transparent===!0&&w.side===fa&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,gi(w,Z,oe),w.side=ir,w.needsUpdate=!0,gi(w,Z,oe),w.side=fa):gi(w,Z,oe)}this.compile=function(w,Z,oe=null){oe===null&&(oe=w),N=$e.get(oe),N.init(Z),H.push(N),oe.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),w!==oe&&w.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),N.setupLights();const ue=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const Be=Ae[Ue];ii(Be,oe,K),ue.add(Be)}else ii(Ae,oe,K),ue.add(Ae)}),N=H.pop(),ue},this.compileAsync=function(w,Z,oe=null){const ue=this.compile(w,Z,oe);return new Promise(K=>{function Ae(){if(ue.forEach(function(Ue){We.get(Ue).currentProgram.isReady()&&ue.delete(Ue)}),ue.size===0){K(w);return}setTimeout(Ae,10)}st.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let on=null;function _n(w){on&&on(w)}function Tn(){xi.stop()}function zi(){xi.start()}const xi=new Dv;xi.setAnimationLoop(_n),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(w){on=w,we.setAnimationLoop(w),w===null?xi.stop():xi.start()},we.addEventListener("sessionstart",Tn),we.addEventListener("sessionend",zi),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Z),Z=we.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,Z,C),N=$e.get(w,H.length),N.init(Z),H.push(N),Xe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(Xe,Oi,Z.reversedDepth),Ee=this.localClippingEnabled,pe=ke.init(this.clippingPlanes,Ee),L=Le.get(w,F.length),L.init(),F.push(L),we.enabled===!0&&we.isPresenting===!0){const Ae=O.xr.getDepthSensingMesh();Ae!==null&&ks(Ae,Z,-1/0,O.sortObjects)}ks(w,Z,0,O.sortObjects),L.finish(),O.sortObjects===!0&&L.sort($,ye),ut=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ut&&Re.addToRenderList(L,w),this.info.render.frame++,pe===!0&&ke.beginShadows();const oe=N.state.shadowsArray;Me.render(oe,w,Z),pe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=L.opaque,K=L.transmissive;if(N.setupLights(),Z.isArrayCamera){const Ae=Z.cameras;if(K.length>0)for(let Ue=0,Be=Ae.length;Ue<Be;Ue++){const Ie=Ae[Ue];Xs(ue,K,w,Ie)}ut&&Re.render(w);for(let Ue=0,Be=Ae.length;Ue<Be;Ue++){const Ie=Ae[Ue];cl(L,w,Ie,Ie.viewport)}}else K.length>0&&Xs(ue,K,w,Z),ut&&Re.render(w),cl(L,w,Z);C!==null&&D===0&&(ot.updateMultisampleRenderTarget(C),ot.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(O,w,Z),k.resetDefaultState(),B=-1,j=null,H.pop(),H.length>0?(N=H[H.length-1],pe===!0&&ke.setGlobalState(O.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function ks(w,Z,oe,ue){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){ue&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xe);const Ue=ve.update(w),Be=w.material;Be.visible&&L.push(w,Ue,Be,oe,ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const Ue=ve.update(w),Be=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ct.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ct.copy(Ue.boundingSphere.center)),ct.applyMatrix4(w.matrixWorld).applyMatrix4(Xe)),Array.isArray(Be)){const Ie=Ue.groups;for(let Ke=0,et=Ie.length;Ke<et;Ke++){const qe=Ie[Ke],xt=Be[qe.materialIndex];xt&&xt.visible&&L.push(w,Ue,xt,oe,ct.z,qe)}}else Be.visible&&L.push(w,Ue,Be,oe,ct.z,null)}}const Ae=w.children;for(let Ue=0,Be=Ae.length;Ue<Be;Ue++)ks(Ae[Ue],Z,oe,ue)}function cl(w,Z,oe,ue){const{opaque:K,transmissive:Ae,transparent:Ue}=w;N.setupLightsView(oe),pe===!0&&ke.setGlobalState(O.clippingPlanes,oe),ue&&Ve.viewport(ne.copy(ue)),K.length>0&&Ri(K,Z,oe),Ae.length>0&&Ri(Ae,Z,oe),Ue.length>0&&Ri(Ue,Z,oe),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Xs(w,Z,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[ue.id]===void 0&&(N.state.transmissionRenderTarget[ue.id]=new Lr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Bs:va,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ae=N.state.transmissionRenderTarget[ue.id],Ue=ue.viewport||ne;Ae.setSize(Ue.z*O.transmissionResolutionScale,Ue.w*O.transmissionResolutionScale);const Be=O.getRenderTarget(),Ie=O.getActiveCubeFace(),Ke=O.getActiveMipmapLevel();O.setRenderTarget(Ae),O.getClearColor(I),q=O.getClearAlpha(),q<1&&O.setClearColor(16777215,.5),O.clear(),ut&&Re.render(oe);const et=O.toneMapping;O.toneMapping=nr;const qe=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),N.setupLightsView(ue),pe===!0&&ke.setGlobalState(O.clippingPlanes,ue),Ri(w,oe,ue),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Rt=0,yt=Z.length;Rt<yt;Rt++){const Wt=Z[Rt],{object:Dt,geometry:Qe,material:Xt,group:vt}=Wt;if(Xt.side===fa&&Dt.layers.test(ue.layers)){const On=Xt.side;Xt.side=Xn,Xt.needsUpdate=!0,Or(Dt,oe,ue,Qe,Xt,vt),Xt.side=On,Xt.needsUpdate=!0,xt=!0}}xt===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}O.setRenderTarget(Be,Ie,Ke),O.setClearColor(I,q),qe!==void 0&&(ue.viewport=qe),O.toneMapping=et}function Ri(w,Z,oe){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Ae=w.length;K<Ae;K++){const Ue=w[K],{object:Be,geometry:Ie,group:Ke}=Ue;let et=Ue.material;et.allowOverride===!0&&ue!==null&&(et=ue),Be.layers.test(oe.layers)&&Or(Be,Z,oe,Ie,et,Ke)}}function Or(w,Z,oe,ue,K,Ae){w.onBeforeRender(O,Z,oe,ue,K,Ae),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(O,Z,oe,ue,w,Ae),K.transparent===!0&&K.side===fa&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,O.renderBufferDirect(oe,Z,ue,K,w,Ae),K.side=ir,K.needsUpdate=!0,O.renderBufferDirect(oe,Z,ue,K,w,Ae),K.side=fa):O.renderBufferDirect(oe,Z,ue,K,w,Ae),w.onAfterRender(O,Z,oe,ue,K,Ae)}function gi(w,Z,oe){Z.isScene!==!0&&(Z=$t);const ue=We.get(w),K=N.state.lights,Ae=N.state.shadowsArray,Ue=K.state.version,Be=fe.getParameters(w,K.state,Ae,Z,oe),Ie=fe.getProgramCacheKey(Be);let Ke=ue.programs;ue.environment=w.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(w.isMeshStandardMaterial?E:P).get(w.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",at),Ke=new Map,ue.programs=Ke);let et=Ke.get(Ie);if(et!==void 0){if(ue.currentProgram===et&&ue.lightsStateVersion===Ue)return ba(w,Be),et}else Be.uniforms=fe.getUniforms(w),w.onBeforeCompile(Be,O),et=fe.acquireProgram(Be,Ie),Ke.set(Ie,et),ue.uniforms=Be.uniforms;const qe=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=ke.uniform),ba(w,Be),ue.needsLights=ul(w),ue.lightsStateVersion=Ue,ue.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ue.currentProgram=et,ue.uniformsList=null,et}function Bi(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=Zc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function ba(w,Z){const oe=We.get(w);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function Ma(w,Z,oe,ue,K){Z.isScene!==!0&&(Z=$t),ot.resetTextureUnits();const Ae=Z.fog,Ue=ue.isMeshStandardMaterial?Z.environment:null,Be=C===null?O.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Os,Ie=(ue.isMeshStandardMaterial?E:P).get(ue.envMap||Ue),Ke=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,et=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),qe=!!oe.morphAttributes.position,xt=!!oe.morphAttributes.normal,Rt=!!oe.morphAttributes.color;let yt=nr;ue.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=O.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Dt=Wt!==void 0?Wt.length:0,Qe=We.get(ue),Xt=N.state.lights;if(pe===!0&&(Ee===!0||w!==j)){const Sn=w===j&&ue.id===B;ke.setState(ue,w,Sn)}let vt=!1;ue.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Xt.state.version||Qe.outputColorSpace!==Be||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isBatchedMesh&&Qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qe.instancingMorph===!1&&K.morphTexture!==null||Qe.envMap!==Ie||ue.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==Ke||Qe.vertexTangents!==et||Qe.morphTargets!==qe||Qe.morphNormals!==xt||Qe.morphColors!==Rt||Qe.toneMapping!==yt||Qe.morphTargetsCount!==Dt)&&(vt=!0):(vt=!0,Qe.__version=ue.version);let On=Qe.currentProgram;vt===!0&&(On=gi(ue,Z,K));let pn=!1,An=!1,Ta=!1;const Gt=On.getUniforms(),en=Qe.uniforms;if(Ve.useProgram(On.program)&&(pn=!0,An=!0,Ta=!0),ue.id!==B&&(B=ue.id,An=!0),pn||j!==w){Ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Gt.setValue(G,"projectionMatrix",w.projectionMatrix),Gt.setValue(G,"viewMatrix",w.matrixWorldInverse);const tn=Gt.map.cameraPosition;tn!==void 0&&tn.setValue(G,je.setFromMatrixPosition(w.matrixWorld)),Ft.logarithmicDepthBuffer&&Gt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Gt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,An=!0,Ta=!0)}if(K.isSkinnedMesh){Gt.setOptional(G,K,"bindMatrix"),Gt.setOptional(G,K,"bindMatrixInverse");const Sn=K.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Gt.setValue(G,"boneTexture",Sn.boneTexture,ot))}K.isBatchedMesh&&(Gt.setOptional(G,K,"batchingTexture"),Gt.setValue(G,"batchingTexture",K._matricesTexture,ot),Gt.setOptional(G,K,"batchingIdTexture"),Gt.setValue(G,"batchingIdTexture",K._indirectTexture,ot),Gt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Gt.setValue(G,"batchingColorTexture",K._colorsTexture,ot));const Fn=oe.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Ze.update(K,oe,On),(An||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,Gt.setValue(G,"receiveShadow",K.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(en.envMap.value=Ie,en.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Z.environment!==null&&(en.envMapIntensity.value=Z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=NA()),An&&(Gt.setValue(G,"toneMappingExposure",O.toneMappingExposure),Qe.needsLights&&ln(en,Ta),Ae&&ue.fog===!0&&Fe.refreshFogUniforms(en,Ae),Fe.refreshMaterialUniforms(en,ue,U,he,N.state.transmissionRenderTarget[w.id]),Zc.upload(G,Bi(Qe),en,ot)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Zc.upload(G,Bi(Qe),en,ot),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Gt.setValue(G,"center",K.center),Gt.setValue(G,"modelViewMatrix",K.modelViewMatrix),Gt.setValue(G,"normalMatrix",K.normalMatrix),Gt.setValue(G,"modelMatrix",K.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Sn=ue.uniformsGroups;for(let tn=0,js=Sn.length;tn<js;tn++){const wi=Sn[tn];Ne.update(wi,On),Ne.bind(wi,On)}}return On}function ln(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function ul(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,Z,oe){const ue=We.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=Z,We.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:oe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const oe=We.get(w);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0};const fl=G.createFramebuffer();this.setRenderTarget=function(w,Z=0,oe=0){C=w,ie=Z,D=oe;let ue=!0,K=null,Ae=!1,Ue=!1;if(w){const Ie=We.get(w);if(Ie.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(G.FRAMEBUFFER,null),ue=!1;else if(Ie.__webglFramebuffer===void 0)ot.setupRenderTarget(w);else if(Ie.__hasExternalTextures)ot.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(Ie.__boundDepthTexture!==qe){if(qe!==null&&We.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const et=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[Z])?K=et[Z][oe]:K=et[Z],Ae=!0):w.samples>0&&ot.useMultisampledRTT(w)===!1?K=We.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?K=et[oe]:K=et,ne.copy(w.viewport),le.copy(w.scissor),ce=w.scissorTest}else ne.copy(be).multiplyScalar(U).floor(),le.copy(Ce).multiplyScalar(U).floor(),ce=ze;if(oe!==0&&(K=fl),Ve.bindFramebuffer(G.FRAMEBUFFER,K)&&ue&&Ve.drawBuffers(w,K),Ve.viewport(ne),Ve.scissor(le),Ve.setScissorTest(ce),Ae){const Ie=We.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,oe)}else if(Ue){const Ie=Z;for(let Ke=0;Ke<w.textures.length;Ke++){const et=We.get(w.textures[Ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ke,et.__webglTexture,oe,Ie)}}else if(w!==null&&oe!==0){const Ie=We.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ie.__webglTexture,oe)}B=-1},this.readRenderTargetPixels=function(w,Z,oe,ue,K,Ae,Ue,Be=0){if(!(w&&w.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie){Ve.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const Ke=w.textures[Be],et=Ke.format,qe=Ke.type;if(!Ft.textureFormatReadable(et)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(qe)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ue&&oe>=0&&oe<=w.height-K&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Be),G.readPixels(Z,oe,ue,K,it.convert(et),it.convert(qe),Ae))}finally{const Ke=C!==null?We.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,Z,oe,ue,K,Ae,Ue,Be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ie=Ie[Ue]),Ie)if(Z>=0&&Z<=w.width-ue&&oe>=0&&oe<=w.height-K){Ve.bindFramebuffer(G.FRAMEBUFFER,Ie);const Ke=w.textures[Be],et=Ke.format,qe=Ke.type;if(!Ft.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,xt),G.bufferData(G.PIXEL_PACK_BUFFER,Ae.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Be),G.readPixels(Z,oe,ue,K,it.convert(et),it.convert(qe),0);const Rt=C!==null?We.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Rt);const yt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await uM(G,yt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,xt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ae),G.deleteBuffer(xt),G.deleteSync(yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,oe=0){const ue=Math.pow(2,-oe),K=Math.floor(w.image.width*ue),Ae=Math.floor(w.image.height*ue),Ue=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;ot.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Ue,Be,K,Ae),Ve.unbindTexture()};const Hi=G.createFramebuffer(),Ea=G.createFramebuffer();this.copyTextureToTexture=function(w,Z,oe=null,ue=null,K=0,Ae=null){Ae===null&&(K!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=K,K=0):Ae=0);let Ue,Be,Ie,Ke,et,qe,xt,Rt,yt;const Wt=w.isCompressedTexture?w.mipmaps[Ae]:w.image;if(oe!==null)Ue=oe.max.x-oe.min.x,Be=oe.max.y-oe.min.y,Ie=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,et=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const Fn=Math.pow(2,-K);Ue=Math.floor(Wt.width*Fn),Be=Math.floor(Wt.height*Fn),w.isDataArrayTexture?Ie=Wt.depth:w.isData3DTexture?Ie=Math.floor(Wt.depth*Fn):Ie=1,Ke=0,et=0,qe=0}ue!==null?(xt=ue.x,Rt=ue.y,yt=ue.z):(xt=0,Rt=0,yt=0);const Dt=it.convert(Z.format),Qe=it.convert(Z.type);let Xt;Z.isData3DTexture?(ot.setTexture3D(Z,0),Xt=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ot.setTexture2DArray(Z,0),Xt=G.TEXTURE_2D_ARRAY):(ot.setTexture2D(Z,0),Xt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const vt=G.getParameter(G.UNPACK_ROW_LENGTH),On=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pn=G.getParameter(G.UNPACK_SKIP_PIXELS),An=G.getParameter(G.UNPACK_SKIP_ROWS),Ta=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,et),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const Gt=w.isDataArrayTexture||w.isData3DTexture,en=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const Fn=We.get(w),Sn=We.get(Z),tn=We.get(Fn.__renderTarget),js=We.get(Sn.__renderTarget);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let wi=0;wi<Ie;wi++)Gt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(w).__webglTexture,K,qe+wi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(Z).__webglTexture,Ae,yt+wi)),G.blitFramebuffer(Ke,et,Ue,Be,xt,Rt,Ue,Be,G.DEPTH_BUFFER_BIT,G.NEAREST);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||We.has(w)){const Fn=We.get(w),Sn=We.get(Z);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,Hi),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ea);for(let tn=0;tn<Ie;tn++)Gt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fn.__webglTexture,K,qe+tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fn.__webglTexture,K),en?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Sn.__webglTexture,Ae,yt+tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Sn.__webglTexture,Ae),K!==0?G.blitFramebuffer(Ke,et,Ue,Be,xt,Rt,Ue,Be,G.COLOR_BUFFER_BIT,G.NEAREST):en?G.copyTexSubImage3D(Xt,Ae,xt,Rt,yt+tn,Ke,et,Ue,Be):G.copyTexSubImage2D(Xt,Ae,xt,Rt,Ke,et,Ue,Be);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Xt,Ae,xt,Rt,yt,Ue,Be,Ie,Dt,Qe,Wt.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Ae,xt,Rt,yt,Ue,Be,Ie,Dt,Wt.data):G.texSubImage3D(Xt,Ae,xt,Rt,yt,Ue,Be,Ie,Dt,Qe,Wt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ae,xt,Rt,Ue,Be,Dt,Qe,Wt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ae,xt,Rt,Wt.width,Wt.height,Dt,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ae,xt,Rt,Ue,Be,Dt,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,vt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,On),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pn),G.pixelStorei(G.UNPACK_SKIP_ROWS,An),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ta),Ae===0&&Z.generateMipmaps&&G.generateMipmap(Xt),Ve.unbindTexture()},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ot.setTextureCube(w,0):w.isData3DTexture?ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ot.setTexture2DArray(w,0):ot.setTexture2D(w,0),Ve.unbindTexture()},this.resetState=function(){ie=0,D=0,C=null,Ve.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const oa={title:"Melt 0°C",category:"Interactive Media Art",planningPdfUrl:"/Atelier_SuHyeon/Melt_Final_PPT.pdf",programmingPdfUrl:"/Atelier_SuHyeon/Melt_Development.pdf",roleAndWorks:["1. 프로젝트 팀원들과 리서치 및 아이데이션 진행","2. 팀원들과 로터스 발상법과 포지셔닝 맵 진행","3. 팀원들과 컨셉 설정을 진행 - “영구동토층 해빙” 주제 제안과 미래에서 온 로봇이 현대인들에게 전하는 경고, 신체 실루엣 비주얼 등 대략적인 컨셉 설정에 기여","4. 팀원들과 프로젝트 콘텐츠 관련 설문조사와 심층인터뷰, 페르소나, 사용자 행동 맵핑 제작","5. 인터렉션 구상","6. 화면 글리치 트랜지션 및 오브젝트 모션 구현 (Unity)","7. 신체 그래픽 디자인 및 구현 - 커스텀 쉐이더 제작 (Unity)","8. UI 구상 및 구현 (감지 네모박스 그래픽, Detectec 알림창)","9. 글리치 효과음 - AI 활용하여 제작","10. 팀원들과 카메라 설치 및 전시 기획과 설치물 제작에 도움","11. Unity 빌드 최적화 및 최종 디버깅 담당","12. 바이러스 오브젝트 제거 시 노이즈 효과가 나타나며 사라지도록 커스텀 쉐이더 제작"],planningContent:["본 콘텐츠는 이전에 팀원들과 제작했던 “영구동토층 : 깨어나는 땅의 기억” 프로토타입을 디벨롭해서 만든 결과물 입니다.","팀원들과 기존 리서치, 아이데이션, 포지셔닝 맵, 사용자 조사 등을 진행한 것에 이어 인터렉션 방식이나 디자인 등이 수정되고 개발 시스템 구성도, 전시 전략, 굿즈 등이 추가되었습니다.","아래는 최종 기획서 입니다."],programmingContent:["Unity 기반 인터랙션과 화면 글리치 트랜지션, UI 그래픽, 신체 실루엣 쉐이더 등 주요 시각·기술 요소를 기획하고 구현했습니다. 또한 커스텀 쉐이더 제작, 효과음 생성, 바이러스 노이즈 디졸브 구현, 빌드 최적화 및 디버깅을 담당했습니다.","아래는 개발 과정이 담겨있습니다."]},dn={container:{backgroundColor:"#000000ff",minHeight:"100vh",fontFamily:"'Noto Sans', sans-serif",paddingTop:"5vw",paddingBottom:"5vw"},contentWrapper:{maxWidth:"1200px",margin:"0 auto",padding:"0 20px",textAlign:"center",color:"#333"},title:{fontSize:"6rem",fontWeight:800,margin:"20px 0 5px 0",color:"#FEDAF1"},category:{fontSize:"1.5rem",fontWeight:400,margin:"0 0 40px 0",color:"#efefefff"},sectionTitle:{fontSize:"2rem",fontWeight:700,margin:"80px 0 10px 0",textAlign:"center",color:"#FEDAF1",alignItems:"center"},description:{fontSize:"1.8rem",fontWeight:400,margin:"5vw 0 10vw 0",textAlign:"center",color:"#efefefff"},bulletList:{listStyle:"none",paddingLeft:0,textAlign:"center",margin:"0 0 40px 0"},listItem:{fontSize:"1rem",lineHeight:1.6,color:"#efefefff"},pdfBox:{width:"100%",height:"0",paddingTop:"60%",position:"relative",backgroundColor:"#E5E7EB",borderRadius:"8px",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",overflow:"hidden",margin:"20px 0 40px 0"},pdfIframe:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},scrollToTopButton:{position:"fixed",bottom:"30px",right:"30px",width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"rgba(206, 234, 182, 0.8)",border:"none",cursor:"pointer",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.2)",display:"flex",justifyContent:"center",alignItems:"center",transition:"opacity 0.3s, transform 0.3s",zIndex:100},arrowIcon:{fontSize:"24px",color:"#ffffff"}},PA=()=>{const[s,e]=se.useState(!1),i=se.useCallback(()=>{window.pageYOffset>300?e(!0):e(!1)},[]),r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return se.useEffect(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[i]),R.jsx("button",{onClick:r,style:{...dn.scrollToTopButton,opacity:s?1:0,transform:s?"scale(1)":"scale(0.9)",pointerEvents:s?"auto":"none"},children:R.jsx("span",{style:dn.arrowIcon,children:"↑"})})},OA=()=>(se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{style:dn.container,children:[R.jsxs("div",{style:dn.contentWrapper,children:[R.jsx("h1",{style:dn.title,children:oa.title}),R.jsx("p",{style:dn.category,children:oa.category}),R.jsx("p",{style:{...dn.description,textAlign:"center"},children:"Detailed Story of the Project.."}),R.jsx("div",{style:dn.sectionTitle,children:"0. Role and works"}),R.jsx("ul",{style:dn.bulletList,children:oa.roleAndWorks.map((s,e)=>R.jsx("li",{style:dn.listItem,children:s},e))}),R.jsx("h2",{style:dn.sectionTitle,children:"Planning"}),R.jsx("ul",{style:dn.bulletList,children:oa.planningContent.map((s,e)=>R.jsx("li",{style:dn.listItem,children:s},e))}),R.jsx("div",{style:dn.pdfBox,children:R.jsx("iframe",{style:dn.pdfIframe,src:oa.planningPdfUrl,title:`${oa.title} Planning Document`,frameBorder:"0"})}),R.jsx("h2",{style:dn.sectionTitle,children:"Programming"}),R.jsx("ul",{style:dn.bulletList,children:oa.programmingContent.map((s,e)=>R.jsx("li",{style:dn.listItem,children:s},e))}),R.jsx("div",{style:dn.pdfBox,children:R.jsx("iframe",{style:dn.pdfIframe,src:oa.programmingPdfUrl,title:`${oa.title} Programming Document`,frameBorder:"0"})})]}),R.jsx(PA,{})]})),Vs=()=>{const[s,e]=se.useState(!1),i=se.useCallback(()=>{window.pageYOffset>300?e(!0):e(!1)},[]),r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return se.useEffect(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[i]),R.jsx("button",{onClick:r,className:"scroll-to-top-button",style:{opacity:s?1:0,transform:s?"scale(1)":"scale(0.9)",pointerEvents:s?"auto":"none"},children:R.jsx("span",{children:"↑"})})},Zt={title:"영구동토층 : <br />깨어나는 땅의 기억",category:"Interactive Media Art Prototype",ResearchAnnIdeationPdfUrl:"/Atelier_SuHyeon/Research&Ideation.pdf",UserResearchAndUXAnalysisPdfUrl:"/Atelier_SuHyeon/UserResearch&UXAnalysis.pdf",ConceptPdfUrl:"/Atelier_SuHyeon/ConceptSetting.pdf",StoryboardAndMoodboardPdfUrl:"/Atelier_SuHyeon/StoryMoodboard.pdf",WireframingAndDevelopmentPdfUrl:"/Atelier_SuHyeon/WireframingAndDevelopment.pdf",FinalProposalPdfUrl:"/Atelier_SuHyeon/Melt01Final_PPT.pdf",roleAndWorks:["1. 프로젝트 팀원들과 리서치 및 아이데이션","2. 팀원들과 로터스 발상법과 포지셔닝 맵 진행","3. 팀원들과 컨셉 설정을 진행 - “영구동토층 해빙” 주제 제안과 미래에서 온 로봇이 현대인들에게 전하는 경고, 신체 실루엣 비주얼 등 대략적인 컨셉을 설정하는데 기여","4. 팀원들과 프로젝트 콘텐츠 관련 설문조사와 심층인터뷰, 페르소나, 사용자 행동 맵핑 제작","5. 영상 스토리보드의 대략적인 흐름을 제안, 이후 팀원들과 함께 디벨롭","6. 건물의 1차 텍스처 생성 및 편집, After Effects의 로토 브러쉬 및 키프레임 애니메이션을 활용하여 인터렉션 프로토타입을 위한 연출을 구현",'7. Figma로 와이어프레임을 설계한 후, HTML, CSS, JavaScript를 활용하여 콘텐츠 아카이브 웹사이트 "Therma´s Archive"를 구현'],ResearchAndIdeation:["팀원들과 2025 트랜드와 사회/디자인 이슈를 리서치했고, 그 안에서 관심분야를 모았습니다.","관심분야인 환경과 전시 관련하여 데스크 리서치를 진행했고, 그에 대한 시장 규모, 경쟁사, 유사 사례 분석 등을 진행했습니다.","이를 토대로 콘텐츠의 주제를 “기후감수성을 높이기 위한 인터렉티브 콘텐츠”로 정했습니다.","팀원들과 로터스 발상법을 통해 아이디어를 발상과 구조화를 진행했고, 포지셔닝 맵을 진행하여 시장 속에서 프로젝트가 차별화된 위치를 차지하도록 전략을 세웠습니다."],ConceptSetting:["기후감수성을 높이기 위한 인터렉티브 콘텐츠에서 환경 이슈 중 어떤 문제를 다루면 좋을까 생각하다가, 1학년 1학기 교양 수업 때 들었던 “영구동토층 해빙” 문제가 떠올라 더 자료를 찾아보았습니다.","이를 토대로 “지구온난화로 인한 영구동토층 해빙” 을 주제로 대략적인 핵심 메시지 및 목표 정의, 슬로건, 전시 스토리텔링/인터렉티브 요소를 정리해보았고, 팀원들에게 제안했습니다.","핵심 주제로 선정되어 이후 팀원들과 스토리 흐름을 디벨롭 했습니다."],UserResearchAndUXAnalysis:["팀원들과 프로젝트 콘텐츠 관련 설문조사와 심층인터뷰를 진행하고 그 결과를 정리했습니다.","이어서 페르소나와 사용자 행동 맵핑을 제작했고 인사이트를 도출했습니다."],StoryboardAndMoodboard:["팀원들과 스토리보드와 무드보드를 제작하였습니다.","저는 영구동토층 해빙으로 인해 펼쳐진 미래 디스토피아에서 온 로봇이 현대인들에게 전하는 경고라는 설정, 신체 실루엣 비주얼 등 대략적인 컨셉을 설정하는데 기여했습니다.","영구동토층 해빙으로 펼쳐진 디스토피아에서 온 미래 로봇이 현대인들에게 시뮬레이션을 체험시켜준다는 흐름을 제안했고, 이후 팀원들과 함께 디벨롭하여 스토리보드를 완성했습니다."],TextureEditing:["Chat GPT로 일반 건물 텍스처를 일차적으로 뽑았습니다.","이후 Photoshop 내 브러쉬를 이용하여 영구동토층 해빙으로 펼쳐진 디스토피아 스토리에 맞게 낡은 느낌을 연출했습니다."],VideoEditing:["인터렉티브 미디어 아트의 프로토타입 영상을 제작하는 과정 중, 실제 인터렉션이 되는 듯한 연출을 위해 Adobe After Effects를 활용했습니다.","팀원들의 동작 영상을 누끼따는데 Roto Brush를 활용했고, 뒤 배경은 투명으로 렌더링하여 사용했습니다.","이후 누끼 딴 팀원들의 신체에 다양한 필터를 입혀 신체 실루엣을 완성했습니다.","파티클에 텍스처 png를 첨부하여 외곽선 변형과 색감 보정 등을 적용하여 바이러스 파티클을 완성했습니다.","이후 다량의 바이러스 파티클에 Keyframe을 적용하여 손이 닿는 부분의 바이러스 텍스처가 사라지도록 완성했습니다."],WireframingAndDevelopment:["Figma를 이용해 본 콘텐츠를 소개하는 웹사이트의 와이어 프레임을 제작하고 Visual Studio Code(Html, css, js)를 활용하여 사이트를 구현했습니다.","콘텐츠의 메인 캐릭터 세르마가 미래 디스토피아에서 수집/분석한 내용들을 현대인들에게 알리는 설정을 토대로 웹사이트 이름을 ‘Therma’s Archive (세르마의 기록 보관소)’ 로 정해보았습니다."]},FA=()=>{const s="/Atelier_SuHyeon/VirusInteraction.mp4";return se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{className:"detail-page-container",children:[R.jsxs("div",{className:"detail-content-wrapper",children:[R.jsx("h1",{className:"detail-title",dangerouslySetInnerHTML:{__html:Zt.title}}),R.jsx("p",{className:"detail-category",children:Zt.category}),R.jsx("p",{className:"detail-description",children:"Detailed Story of the Project.."}),R.jsx("h2",{className:"detail-section-title",children:"0. Role and works"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.roleAndWorks.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("h2",{className:"detail-section-title",children:"1. Research & Ideation"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.ResearchAndIdeation.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Zt.ResearchAnnIdeationPdfUrl,title:`${Zt.title} Planning Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"2. Concept Setting"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.ConceptSetting.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Zt.ConceptPdfUrl,title:`${Zt.title} ConceptSetting Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"3. User Research & UX Analysis"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.UserResearchAndUXAnalysis.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Zt.UserResearchAndUXAnalysisPdfUrl,title:`${Zt.title} Programming Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"4. Storyboard & Moodboard"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.StoryboardAndMoodboard.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Zt.StoryboardAndMoodboardPdfUrl,title:`${Zt.title} Planning Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"5. Texture Editing"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.TextureEditing.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-img-box",children:R.jsx("img",{src:"/Atelier_SuHyeon/TextureEditing.png",alt:"Texture Editing Example"})}),R.jsx("h2",{className:"detail-section-title",children:"6. Video Editing"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.VideoEditing.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-video-box",children:R.jsx("video",{src:s,controls:!0,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:"Your browser does not support the video tag."})}),R.jsx("h2",{className:"detail-section-title",children:"7. Wireframing and Development"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.WireframingAndDevelopment.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Zt.WireframingAndDevelopmentPdfUrl,title:`${Zt.title} WireframingAndDevelopment Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"8. Final Proposal"}),R.jsx("ul",{className:"detail-bullet-list",children:Zt.WireframingAndDevelopment.map((e,i)=>R.jsx("li",{className:"detail-list-item",children:e},i))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Zt.FinalProposalPdfUrl,title:`${Zt.title} FinalProposal Document`,frameBorder:"0"})})]}),R.jsx(Vs,{})]})},di={title:"심연",category:"(XR) short-form drama",ResearchAnnIdeationPdfUrl:"/Atelier_SuHyeon/Abyss_Final_PPT.pdf",ConceptPdfUrl:"/Atelier_SuHyeon/Final_Shooting Storyboard.pdf",StoryboardAndMoodboardPdfUrl:"/Atelier_SuHyeon/props.pdf",roleAndWorks:["1. 프로젝트 팀원들과 리서치 및 아이데이션","2. 기획 팀원과 스토리 흐름 설계","3. 1차 색감 보정 (Adobe Premiere Pro 2024)","4. 소품 선정 및 구매 & 제작","5. 스토리보드 제작","6. 팀원들과 미디어월 공간에서 촬영 진행","7. 트래킹 기능을 활용한 바위 색감 보정 (Adobe After Effects 2024)"],ResearchAndIdeation:["기획 팀원과 시나리오를 구성하고 필요한 소품을 선정하여 정리했습니다.","카메라 구도가 담긴 촬영 계획서를 제작했습니다. ","아래는 최종 기획서 입니다."],ConceptSetting:["촬영장에서 쓴 최종 스토리보드를 제작했습니다."],UserResearchAndUXAnalysis:["촬영에 필요한 바위를 두꺼운 우드락 여러개를 겹쳐 물감을 칠해 제작하였습니다. 텍스처는 열선을 활용해 구현했습니다.","갈대 소품이 필요하여 구매 후 촬영 구도에 잘 나올 수 있도록 갈대를 남은 스티로폼에 꽃고 애플 박스를 활용해 높낮이를 조절했습니다."]},IA=()=>(se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{className:"detail-page-container",children:[R.jsxs("div",{className:"detail-content-wrapper",children:[R.jsx("h1",{className:"detail-title",dangerouslySetInnerHTML:{__html:di.title}}),R.jsx("p",{className:"detail-category",children:di.category}),R.jsx("p",{className:"detail-description",children:"Detailed Story of the Project.."}),R.jsx("h2",{className:"detail-section-title",children:"0. Role and works"}),R.jsx("ul",{className:"detail-bullet-list",children:di.roleAndWorks.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("h2",{className:"detail-section-title",children:"1. Planning"}),R.jsx("ul",{className:"detail-bullet-list",children:di.ResearchAndIdeation.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:di.ResearchAnnIdeationPdfUrl,title:`${di.title} Planning Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"2. Concept Setting"}),R.jsx("ul",{className:"detail-bullet-list",children:di.ConceptSetting.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:di.ConceptPdfUrl,title:`${di.title} ConceptSetting Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"3. Purchasing and making props"}),R.jsx("ul",{className:"detail-bullet-list",children:di.UserResearchAndUXAnalysis.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:di.StoryboardAndMoodboardPdfUrl,title:`${di.title} Programming Document`,frameBorder:"0"})})]}),R.jsx(Vs,{})]})),Rs={title:"RoundAround <br /> 02 : Wild Flower Hill",category:"Promotional Video",ResearchAnnIdeationPdfUrl:"/Atelier_SuHyeon/RoundAround.pdf",roleAndWorks:["1. 기획","2. 실사 촬영","3. 스토리보드 & 무드보드 제작","4. 모션 그래픽 (Adobe After Effects 2024)","5. 색감 보정 (Adobe After Effects 2024)","6. 자막 추가 (Adobe After Effects 2024)","7. 사운드 삽입 (Adobe After Effects 2024)"],ResearchAndIdeation:["스토리보드가 담긴 최종 영상 기획서 입니다.","제작 과정도 함께 담겨있습니다."]},zA=()=>(se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{className:"detail-page-container",children:[R.jsxs("div",{className:"detail-content-wrapper",children:[R.jsx("h1",{className:"detail-title",dangerouslySetInnerHTML:{__html:Rs.title}}),R.jsx("p",{className:"detail-category",children:Rs.category}),R.jsx("p",{className:"detail-description",children:"Detailed Story of the Project.."}),R.jsx("h2",{className:"detail-section-title",children:"0. Role and works"}),R.jsx("ul",{className:"detail-bullet-list",children:Rs.roleAndWorks.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("h2",{className:"detail-section-title",children:"1. Planning"}),R.jsx("ul",{className:"detail-bullet-list",children:Rs.ResearchAndIdeation.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Rs.ResearchAnnIdeationPdfUrl,title:`${Rs.title} Planning Document`,frameBorder:"0"})})]}),R.jsx(Vs,{})]})),ws={title:"Rosa Novella",category:"Promotional Video - Perfume",ResearchAnnIdeationPdfUrl:"/Atelier_SuHyeon/ROSA NOVELLA.pdf",roleAndWorks:["1. 기획","2. 스토리보드 & 무드보드 제작","3. 모션 그래픽 (Adobe After Effects 2024)","4. 사운드 삽입 (Adobe After Effects 2024)"],ResearchAndIdeation:["스토리보드가 담긴 최종 영상 기획서 입니다.","제작 과정도 함께 담겨있습니다."]},BA=()=>(se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{className:"detail-page-container",children:[R.jsxs("div",{className:"detail-content-wrapper",children:[R.jsx("h1",{className:"detail-title",dangerouslySetInnerHTML:{__html:ws.title}}),R.jsx("p",{className:"detail-category",children:ws.category}),R.jsx("p",{className:"detail-description",children:"Detailed Story of the Project.."}),R.jsx("h2",{className:"detail-section-title",children:"0. Role and works"}),R.jsx("ul",{className:"detail-bullet-list",children:ws.roleAndWorks.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("h2",{className:"detail-section-title",children:"1. Planning"}),R.jsx("ul",{className:"detail-bullet-list",children:ws.ResearchAndIdeation.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:ws.ResearchAnnIdeationPdfUrl,title:`${ws.title} Planning Document`,frameBorder:"0"})})]}),R.jsx(Vs,{})]})),la={title:"The Spa Lodge",category:"Video - Space Design Concept Video",ResearchAnnIdeationPdfUrl:"/Atelier_SuHyeon/SpaLodge.pdf",UserResearchAndUXAnalysisPdfUrl:"/Atelier_SuHyeon/SpaLodge_initial.pdf",roleAndWorks:["1. 기획","2. 3D 모델링 (3D MAX 2024)","3. 렌더링 (3D MAX 2024)","4. 후편집(색감, 타이틀, 색감 보정 및 사운드 삽입 등) (Adobe After Effects 2024)"],ResearchAndIdeation:["초기 컨셉 설정 및 오브젝트 제작 과정을 담은 기획서 입니다."],ConceptSetting:["추가 오브젝트와 익스테리어를 완성한 최종 영상 기획서 입니다.","제작 과정도 함께 담겨있습니다."]},HA=()=>(se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{className:"detail-page-container",children:[R.jsxs("div",{className:"detail-content-wrapper",children:[R.jsx("h1",{className:"detail-title",dangerouslySetInnerHTML:{__html:la.title}}),R.jsx("p",{className:"detail-category",children:la.category}),R.jsx("p",{className:"detail-description",children:"Detailed Story of the Project.."}),R.jsx("h2",{className:"detail-section-title",children:"0. Role and works"}),R.jsx("ul",{className:"detail-bullet-list",children:la.roleAndWorks.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("h2",{className:"detail-section-title",children:"1. Creating objects"}),R.jsx("ul",{className:"detail-bullet-list",children:la.ResearchAndIdeation.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:la.UserResearchAndUXAnalysisPdfUrl,title:`${la.title} Planning Document`,frameBorder:"0"})}),R.jsx("h2",{className:"detail-section-title",children:"2. Creating additional assets and videos"}),R.jsx("ul",{className:"detail-bullet-list",children:la.ConceptSetting.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:la.ResearchAnnIdeationPdfUrl,title:`${la.title} Planning Document`,frameBorder:"0"})})]}),R.jsx(Vs,{})]})),Cs={title:"Hamster Delivery",category:"2D Web Game",ResearchAnnIdeationPdfUrl:"/Atelier_SuHyeon/HamsterDelivery_PPT.pdf",roleAndWorks:["1. 주제 선정 및 게임 설계","2. 세계관 및 시나리오 작성","3. 무드보드 제작","4. 게임 개발 - Visual Studio Code (HTML, CSS, JS)","5. 캐릭터 그래픽 제작 (Adobe Illustrator 2024)","6. 배경 이미지 제작 (ChatGPT)"],ResearchAndIdeation:["게임의 최종 기획서 입니다.","주제 선정 배경과 게임 설계, 세계관 및 시나리오 등을 확인할 수 있습니다."]},GA=()=>(se.useEffect(()=>{window.scrollTo(0,0)},[]),R.jsxs("div",{className:"detail-page-container",children:[R.jsxs("div",{className:"detail-content-wrapper",children:[R.jsx("h1",{className:"detail-title",dangerouslySetInnerHTML:{__html:Cs.title}}),R.jsx("p",{className:"detail-category",children:Cs.category}),R.jsx("p",{className:"detail-description",children:"Detailed Story of the Project.."}),R.jsx("h2",{className:"detail-section-title",children:"0. Role and works"}),R.jsx("ul",{className:"detail-bullet-list",children:Cs.roleAndWorks.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("h2",{className:"detail-section-title",children:"1. Planning"}),R.jsx("ul",{className:"detail-bullet-list",children:Cs.ResearchAndIdeation.map((s,e)=>R.jsx("li",{className:"detail-list-item",children:s},e))}),R.jsx("div",{className:"detail-pdf-box",children:R.jsx("iframe",{className:"detail-pdf-iframe",src:Cs.ResearchAnnIdeationPdfUrl,title:`${Cs.title} Planning Document`,frameBorder:"0"})})]}),R.jsx(Vs,{})]})),VA=[{id:"main",title:"HOME",label:"Aterlier"},{id:"about",title:"ABOUT",label:"Pieces"},{id:"skills",title:"SKILLS",label:"Toolkit"},{id:"works",title:"WORKS",label:"Catalog"},{id:"contact",title:"CONTACT",label:"Contact"}],kA={Photoshop:"./Ps_Icon.png",Illustrator:"./Ai_Icon.png","Premiere Pro":"./Pr_Icon.png","After Effect":"./Ae_Icon.png","3D MAX":"./3dmax_Icon.png","Rhino 8":"./Rhino8_Icon.png",Word:"./Word_Icon.png",PowerPoint:"./Powerpoint__Icon.png",Notion:"./Notion_Icon.png",Figma:"./Figma_Icon.png",Canva:"./Canva_Icon.png",Html:"./Html_Icon.png",CSS:"./CSS_Icon.png",JS:"./JS_Icon.png",React:"./React_Icon.png",Unity:"./Unity_Icon.png"},XA={Planning:{label:"Planning",iconKeys:["Word","PowerPoint","Notion","Figma","Canva"],defaultActive:"Word",items:{Word:{title:"Word",period:"36 months ↑",projects:"10 ↑",application:"보고서 작성",proficiency:"70%",proficiencyEvidence:"(기본 구성 및 시각적 계층 구조 확립 가능)",content:["문서 앞 커버 페이지를 제작 및 목차 텍스트 정렬, 이미지 삽입 등 문서의 기본 구조를 체계적으로 구성할 수 있습니다.","머리글 추가를 할 수 있고, 텍스트의 굵기, 폰트, 크기 조절 기능을 활용하여 시각적 계층 구조를 확립하고 중요한 정보를 효과적으로 강조할 수 있습니다."]},PowerPoint:{title:"PowerPoint",period:"36 months ↑",projects:"10 ↑",application:"발표 자료 제작",proficiency:"85%",proficiencyEvidence:"(테마 적용, 애니메이션 및 하이퍼링크 기능 활용 가능)",content:["이미지 및 테마 적용을 통해 시각 자료를 제작하고, 도형 움직이기와 같은 애니메이션 효과를 추가할 수 있습니다.","하이퍼링크 기능을 활용하여 발표 중 특정 이미지나 도형 클릭 시 원하는 페이지나 외부 링크로 즉시 이동하는 인터랙티브한 프레젠테이션을 구성할 수 있습니다."]},Notion:{title:"Notion",period:"24 months",projects:"4",application:"협업 페이지 참여, 개인 일정 관리",proficiency:"60%",proficiencyEvidence:"(팀 프로젝트 참여 및 개인/팀 문서 관리 가능)",content:["프로젝트 공동 페이지를 활용하여 팀원들과 주차별 과제 업로드 및 실시간 협업을 원활하게 진행할 수 있습니다.","개인 용도로 문서를 체계적으로 분류하고 작성하여 지식 관리 및 일정 관리에 활용할 수 있습니다."]},Figma:{title:"Figma",period:"12 months",projects:"7",application:"웹페이지 와이어프레임, PPT 제작",proficiency:"60%",proficiencyEvidence:"(와이어프레임 및 간단한 2D 그래픽 제작)",content:["피그마의 협업 기능을 활용하여 팀원들과 실시간 공동 작업을 할 수 있습니다.","주변 요소와의 정렬 및 간격을 스마트 가이드를 통해 실시간으로 확인하며 PPT 프레젠테이션 제작이 가능합니다.","도형/선, 불리언 연산을 활용해 간단한 2D 그래픽 제작을 할 수 있습니다.","이미지의 노출, 대비, 채도 등의 조절을 통한 색감 보정이 가능합니다."]},Canva:{title:"Canva",period:"24 months",projects:"6",application:"프레젠테이션 제작 및 팀 협업",proficiency:"80%",proficiencyEvidence:"(기본 템플릿과 스티커 등의 기능 활용 가능 및 팀 단위 실시간 협업 가능)",content:["Canva에서 제공하는 템플릿을 사용해서 PPT 의 시각적 완성도를 높일 수 있습니다.","Canva 내에서 제공하는 스티커를 활용하여 시각적 완성도를 높일 수 있습니다.","팀 단위 실시간 협업 경험이 있습니다."]}}},Design:{label:"Design",iconKeys:["Photoshop","Illustrator","Premiere Pro","After Effect","3D MAX","Rhino 8"],defaultActive:"Photoshop",items:{Photoshop:{title:"Photoshop",period:"36 months ↑",projects:"10 ↑",application:"누끼 따기, 색감 보정 및 얼굴 보정",proficiency:"85%",proficiencyEvidence:"(클리핑 마스크/블렌딩 모드를 활용한 그래픽 제작 및 분위기 조절, 정교한 누끼 추출 및 합성, 픽셀 유동화 등을 통한 인물 보정 작업 가능)",content:["클리핑 마스크를 활용해 도형 안에 이미지를 삽입하거나 블렌딩 모드(스크린, 발광 닷지)를 통해 시각적 분위기를 조절할 수 있습니다.","이미지 누끼 추출 후 다른 배경에 자연스럽게 합성하고, 색감이 어우러지도록 보정할 수 있습니다.","스팟 복구 브러시와 복제 도장을 사용해 피부 결과 잔머리를 정리하고, 픽셀 유동화 기능으로 눈·코·입·턱선 등 얼굴 형태를 자연스럽게 보정할 수 있습니다.","각 프레임마다 레이어의 변화를 주어 움직이는 그래픽(ex. 움직이는 2D 이모티콘)을 제작하고 GIF 형식으로 저장할 수 있습니다."]},Illustrator:{title:"Illustrator",period:"24 months",projects:"4",application:"2D 그래픽 및 벡터 일러스트 제작",proficiency:"70%",proficiencyEvidence:"(펜 툴과 베지어 곡선을 활용한 간단한 벡터 일러스트 제작, 패스파인더 기능 활용, 간단한 2D 포스터, 캐릭터 제작 가능)",content:["브러시를 활용해 2D 광고 영상에 필요한 그래픽 요소를 제작해본 경험이 있습니다.","펜 툴과 베지어 곡선을 활용해 다양한 형태의 벡터 일러스트를 제작할 수 있습니다.","2D 포스터 제작 프로젝트를 진행하며 레이아웃 구성 및 디자인 작업을 수행한 경험이 있습니다.","패스파인더 기능을 사용해 오브젝트의 합치기, 빼기, 나누기 등 형태 편집 작업을 자유롭게 다룰 수 있습니다.","2D 햄스터 캐릭터를 직접 디자인·제작해본 경험이 있습니다."]},"Premiere Pro":{title:"Premiere Pro",period:"12 months",projects:"3",application:"영상 컷 편집 및 색감 보정",proficiency:"75%",proficiencyEvidence:"(영상 소스 컷 편집 및 텍스트/자막 삽입 가능, 음악 및 효과음 사운드 믹싱, 색감 보정 기능 및 화면 전환 효과(디졸브 등)를 활용한 영상 톤 연출 가능)",content:["영상 소스의 컷 편집 및 텍스트 삽입을 할 수 있습니다.","음악 및 효과음의 사운드 크기 조절을 할 수 있습니다.","색감 보정 기능을 활용하여 원하는 영상 톤을 연출하고 디졸브, 교차 디졸브 등 화면 전환 효과를 적용할 수 있습니다."]},"After Effect":{title:"After Effect",period:"12 months",projects:"4",application:"모션 그래픽, 마스크/트래킹, 텍스트 애니메이션",proficiency:"60%",proficiencyEvidence:"(그래픽 요소에 이동/회전/크기 조절 등의 핵심 모션 값 적용 가능, 트래킹 및 마스크 효과를 통한 특정 영역 필터/효과 적용, 텍스트 입력 효과 및 카메라 이동 애니메이션 구현 경험)",content:["그래픽 요소에 이동, 회전, 크기 조절 등의 핵심 모션 값을 적용하여 애니메이션을 추가할 수 있습니다.","마스크 효과를 활용하여 특정 영역만 노출시키거나, 트래킹을 통해 움직이는 대상에 필터나 효과를 적용할 수 있습니다.","텍스트 입력 효과 및 원하는 경로를 따르는 모션, 카메라 이동 등을 구현할 수 있습니다."]},"3D MAX":{title:"3D MAX",period:"12 months",projects:"2",application:"3D 모델링, 텍스쳐링, 렌더링",proficiency:"50%",proficiencyEvidence:"(튜토리얼 기반 캐릭터 모델링 및 자연물(물 표면 등) 표현, 기본 PBR 텍스처 구현 및 파라미터 조절, 기본적인 3D 애니메이션 가능)",content:["실내 인테리어 디자인에 필요한 가구 및 다양한 오브젝트를 모델링하고 텍스쳐 작업을 할 수 있습니다.","모델링된 오브젝트에 회전, 이동, 축소, 확대, 기울임 등의 기본적인 3D 애니메이션을 적용하여 동적인 연출을 구현할 수 있습니다.","기본 텍스쳐 조정 및 이미지 맵핑을 활용하여 최종 렌더링을 통해 고품질의 영상 결과물을 제작할 수 있습니다."]},"Rhino 8":{title:"Rhino 8",period:"5 months",projects:"3",application:"3D Prototyping",proficiency:"40%",proficiencyEvidence:"(표면 변형, 원형 배열, 서페이스 정합, 정밀 치수 모델링 수행 가능)",content:["Rhino에서 Bend, Flow 등 표면 변형 기능을 활용해 울퉁불퉁한 형태나 곡면을 만들 수 있습니다.","Array 기능을 이용해 특정 축(X/Y축)을 기준으로 오브젝트를 원형으로 복제하는 구조 제작이 가능합니다.","모델링 결과물을 Clay Rendering 형태로 흰색 렌더링하여 형태 검토가 가능합니다.","페이스 정합(트림·조인), 커브 정리, 오브젝트 간 정밀 치수 기반 모델링이 가능해 실물 제작을 고려한 3D 프로토타이핑 작업에 활용할 수 있습니다.","다만 복잡한 NURBS 구조 설계, 고급 서페이스 매칭, 실무용 렌더링 세팅 등은 아직 학습이 더 필요합니다."]}}},Programming:{label:"Programming",iconKeys:["Html","CSS","JS","React","Unity"],defaultActive:"Html",items:{Html:{title:"HTML",period:"11 months",projects:"5",application:"웹 페이지 구조 설계 및 시맨틱 마크업",proficiency:"70%",proficiencyEvidence:"(웹 접근성 준수 및 시맨틱 태그 활용)",content:["시청각, 이동성, 인지도를 고려한 웹 접근성 준수 고려사항을 숙지하고, 이를 바탕으로 페이지를 구현할 수 있습니다.","HTML5의 시맨틱 태그를 이해하고 적절히 활용하여 웹 문서의 구조를 명확히 할 수 있습니다."]},CSS:{title:"CSS",period:"11 months",projects:"5",application:"반응형 레이아웃, CSS 애니메이션",proficiency:"80%",proficiencyEvidence:"(반응형 디자인 제작 가능, Keyframe을 활용한 동적 CSS 애니메이션 구현 가능)",content:["Media Query를 사용하여 다양한 화면 크기에 대응하는 반응형 웹 디자인을 구현할 수 있습니다.","화면 확대 도구 사용 시에도 레이아웃이 깨지지 않도록 페이지를 제작합니다.","CSS의 keyframe을 활용하여 애니메이션 효과를 구현할 수 있습니다."]},JS:{title:"JavaScript",period:"11 months",projects:"4",application:"동적 웹 페이지 기능 및 상호작용 구현",proficiency:"70%",proficiencyEvidence:"(DOM 조작 및 사용자 이벤트(클릭, 스크롤 등) 기반 인터랙션 구현)",content:["DOM 조작을 통해 CSS 속성을 동적으로 변경하여 웹 페이지 인터랙티브한 기능을 구현할 수 있습니다.","사용자 이벤트(클릭, 스크롤 등)와 연계하여 CSS 애니메이션을 제어하고, 시작과 종료 타이밍을 정교하게 조절할 수 있습니다."]},React:{title:"React",period:"11 months",projects:"2",application:"SPA 구축, 상태 관리 (Hooks)",proficiency:"60%",proficiencyEvidence:"(Hooks 기반 상태 관리 및 SPA 컴포넌트 개발 가능)",content:["React Hooks(useState, useEffect 등)를 활용하여 상태(State)를 효율적으로 관리하고 데이터 흐름을 제어합니다.","컴포넌트 기반의 구조를 이해하고, 재사용 가능한 UI 컴포넌트를 설계하고 개발할 수 있습니다.","여러 뷰를 유기적으로 연결하는 단일 페이지 애플리케이션(SPA)을 구축할 수 있습니다."]},Unity:{title:"Unity",period:"11 months",projects:"5",application:"3D 게임/미디어 아트 개발, C# 스크립트",proficiency:"60%",proficiencyEvidence:"(AI Navigation을 활용한 3D 슈팅 게임 제작 경험, VR 공간 인식 및 트래킹 기능 연동 가능, C# 스크립트 기반 커스텀 셰이더 활용 가능)",content:["Unity에서 AI Navigation을 활용해 오브젝트가 플레이어나 특정 타깃을 추적하도록 구현할 수 있습니다.","Instantiation·Destroy 등의 기능을 추가하고 UI를 구현하여 3D 슈팅 게임 구조를 만들 수 있습니다.","C# 스크립트를 기반으로 커스텀 셰이더를 제작하여 파티클 시스템을 구현해본 경험이 있습니다.","Meta Quest 3의 공간 인식 기능을 활용한 XR 콘텐츠 개발 경험이 있습니다."]}}}},Bg=[{id:1,title:"Melt 0°C",category:"Interactive Media Art",imageURL:"./melt_IMG.png",youtubeId:"gt-N_yxbw9A",tags:["Research","Ideation","Interaction Flow Design","Unity"],projectDesc:"기후변화로 인한 영구동토층 해빙의 위험을 인식시키는 인터랙티브 미디어 아트",owner:"Team6.5 - 유예은 김민지 임서현 장주원 김시은 연수현",duration:"2025.09.02 ~ 2025.11.24",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Unity Development","Custom Shader","Motion Design","Glitch Transition","UI Implementation","Asset Integration & Optimization"],awards:"2025학년도 전공학사과정 졸업작품 ESG 우수작 선정 (ESG 전시 출품)",overview:"[Melt 0℃] 는 얼음이 녹는 ‘변화의 순간’을 상징하며, 영구동토층 해빙이라는 환경적 변화를 통해 인간의 감각과 의식이 깨어나는 과정을 시각적으로 탐구한 인터랙션 미디어 아트입니다. 영구동토층 해빙과 감수성의 확산을 감각적으로 연결하여, 관객이 몰입형 체험 속에서 기후 위기를 직접 인식하도록 설계되었습니다. 이를 통해 기후 감수성을 확산시키고, 개인의 행동 변화를 유도하는 것을 목표로 합니다.",learnings:["프로토타입에 머물렀던 아이디어를 실제 인터랙티브 미디어 아트로 구현한 것은 처음이라 어려움도 있었지만, 팀원들의 응원과 교수님의 조언 덕분에 끝까지 잘 완성할 수 있었습니다."," 막막한 순간에도 매일 조금씩 발전하려는 노력이 결국 좋은 결과로 이어진다는 것을 다시 한번 느꼈습니다."," 커스텀 쉐이더 제작에 조금 익숙해지는 계기가 되었습니다."],websiteUrl:"https://sieun533.github.io/Melt-0-C/"},{id:2,title:"영구동토층 : 깨어나는 땅의 기억",category:"Video - Interactive Media Art Prototype",imageURL:"./Melt_1.png",youtubeId:"JLtdKFgQtNU",tags:["Research","Narrative Flow Design","Photoshop","AE","HTML/CSS","JS"],projectDesc:"기후 변화로 인한 환경 붕괴와 그 속에서 발견되는 희망을 탐구하는 인터랙티브 미디어 아트 기획서/프로토타입",owner:"Team6.5 - 유예은 장주원 연수현",duration:"2025.03.03 ~ 2025.06.11",competencies:["Concept Ideation","Competitive Analysis(3C)","Positioning Map","User Research","Concept Setting","Narrative Flow Design","Roto Brush Editing(Adobe After Effects)","Custom Particle Effects(Adobe After Effects)","Opacity Keyframing(Adobe After Effects)"],awards:"2025 커뮤니케이션디자인 국제 공모전 입선, 2025 2학년 1학기 학과 연합 PT",overview:"<영구동토층 : 깨어나는 땅의 기억>은 기후 변화로 인한 환경 붕괴와 그 속에서 발견되는 희망을 탐구하는 인터랙티브 미디어 아트 작품입니다. 관객은 녹아내리는 얼음벽, 고립된 생태계, 잊혀진 문명의 유물 등디스토피아적 요소들과 상호작용하며 작은 희망의 씨앗을 찾게 됩니다. 작품은 관객의 선택에 따라 변화하는 환경을 통해 '디스토피아 속에서도 희망은 존재한다'는 메시지를 전달합니다. 희망을 키우는 과정에서, 관객은 어두운 미래 속에서 빛을 발견하게 됩니다.",learnings:["영구동토층이라는 기후 위기 속 세부 주제를 선택해 제작하니, 메시지가 훨씬 더 구체적이고 선명해져서 만족스러웠던 것 같습니다."," 초기 웹사이트는 PC마다 비율과 크기가 제각각 달라 당황스러웠지만, 문제 해결을 위해 처음부터 전체 구조를 다시 구축했습니다."," 그 결과 어떤 환경에서도 일정한 비율로 안정적으로 보이도록 완성할 수 있었고, 끝까지 개선해낸 과정이 뿌듯하게 느껴졌던 것 같습니다."],websiteUrl:"https://suhyeon549.github.io/THERMA-S-ARCHIVE/"},{id:3,title:"심연",category:"(XR) short-form drama",imageURL:"./XR_IMG.png",youtubeId:"Tc6m-3mFRFU",tags:["Story Flow Design","AE","Prop Selection & Production"],projectDesc:"외도와 고독으로 억압된 주인공의 심연을 언리얼 엔진 기반의 환상 세계로 구현하여, 관객에게 내면의 분노와 해방을 경험하게 하는 몰입형 심리 스릴러 XR 콘텐츠.",owner:"어른아이 - 문주은 이수영 연수현 장주원 한아름",duration:"2024.09.05 ~ 2024.12.18",competencies:["Concept Ideation","Story Flow Design","Initial color grading","Roto Brush Editing (Adobe After Effects)","Custom Particle Effects (Adobe After Effects)","Opacity Keyframing (Adobe After Effects)"],overview:"숏폼 드라마 <심연>은 외도한 남자친구와 헤어진 후 깊은 고독에 빠진 주인공이 꿈(환상) 속에서 겪는 내면의 갈등과 해방을 다룹니다. 어두운 동굴에서 전 남자친구를 총으로 쏴 살해하는 환상을 겪은 후, 몽환적이면서도 으슥한 무덤 공간에서 그의 관을 마주합니다. 주인공은 국화꽃을 던지고 당당히 떠나는 행위를 통해 심리적 억압을 해소하며, 현실로 돌아온 후 전 남자친구의 사망 소식을 듣게 됩니다. 이처럼 현실의 고난과 환상 속의 극복을 결합하여, 주인공의 자기 해방 과정을 시적으로 구현한 몰입형 콘텐츠입니다.",learnings:["XR 콘텐츠에 대해 잘 몰랐는데 이 수업은 XR 콘텐츠가 무엇인지, 그리고 사례를 리서치해보고 또 직접 제작해볼 수 있는 귀중한 시간이었습니다."," 단편 드라마 제작이 처음이라 모든 것이 낯설고 막막했지만, 교수님들의 지도와 팀원 간의 협동으로 무사히 마무리할 수 있었던 것 같습니다."," 바위를 우드락으로 제작하고 열선으로 텍스처를 정리하며 물감을 입히는 과정 등 처음 도전한 소품 제작 경험에서 많은 것을 배웠고, 영상 톤 보정과 색 입히기, 나레이션 추가로 작품이 완성되어가는 과정을 체감하며 큰 보람을 느꼈습니다."],websiteUrl:null},{id:4,title:"Sensor-Based Interactive Display ",category:"Video - Interactive Media Art Prototype",imageURL:"./SBIMA_IMG.png",youtubeId:"q0UtBDAsNUs",tags:["MVP Prototyping","Premiere Pro"],projectDesc:"스페인 길거리 쓰레기 악취 문제 해결을 위해, 분리수거 행동에 따라 긍정/부정 그래픽 피드백을 제공하는 미디어월 부착 인터랙티브 쓰레기통 솔루션 제안",owner:"Group 7 - 신아연, 연수현, 김기주, 최영호",duration:"2025.06.18 ~ 2025.07.10",competencies:["Concept Ideation","Field Reserch","MVP development","Video editing(Adobe Premiere Pro)"],awards:"Innovation Prize",overview:"스페인 길거리 쓰레기 악취 문제 해결을 위해 실감 미디어(인터렉티브 미디어월)를 활용한 솔루션을 제안합니다. 쓰레기통 상단에 설치된 미디어월에 액체류 분류 배출 여부에 따라 긍정적/부정적 그래픽 피드백을 즉각 제공하여, 시민들의 올바른 분리수거 행동을 유도하고 도시 환경을 개선하는 MVP를 구현했습니다.",learnings:["타국에서 처음 만난 사람들과 현지 사회문제를 조사하고, 낯선 환경에서 필드리서치를 진행한 과정이 새로운 시도이자 값진 경험이었습니다."," MVP 제작은 처음이라 낯설었지만, 이 과정을 통해 많이 배울 수 있었고 다음에는 더 수월하게 시도할 수 있을 것 같습니다."," 스페인의 늦은 일몰을 고려하지 못해 초기 프로젝션 맵핑 방안이 적합하지 않았던 점이 아쉬웠고, 다음 MVP에서는 사용자 경험을 더욱 세심하게 반영하고 싶다는 생각이 들었습니다."],websiteUrl:null},{id:5,title:"Eco Fairy Friend",category:"Project Proposal - App Ideation",imageURL:"./EFF_IMG.png",tags:["Ideation","Logo & Icon Design(AI)"],pdfURL:"./EcoFairyFriend_PPT.pdf",projectDesc:"솔방울 요정(Eco Fairy Friend)과 함께 AR, 드론 등 기술을 활용하여 일상 속 친환경 미션을 수행하고 보상을 얻는 환경 보호 게이미피케이션 앱 개발 제안",owner:"Group 4 - 김인수, 연수현, Jarne Jost, Rebeka Szalay",duration:"2025.07.01 ~ 2025.07.04",competencies:["Concept Ideation","Field Reserch","Logo & Icon Design(AI)"],overview:"산에서 발견한 솔방울에서 영감을 얻어, 솔방울 속 요정이 자연의 모습과 역사를 보여주며 쓰레기 줍기나 나무 심기 같은 친환경 행동(eco-actions)을 유도하고 보상을 제공하는 모바일 기반의 기술 솔루션을 제안합니다. 이를 통해 사용자는 마법적이고 놀이 같은 경험을 하며 실제 환경에 긍정적인 변화를 만드는 사람으로 성장하는 것을 목표로 합니다.",learnings:["2박 3일 동안 산장에서 다양한 국적의 사람들과 함께 지내고 하이킹을 하며 언어와 배경이 달라도 공감과 협력으로 아이디어를 발전시킬 수 있다는 것을 실감했습니다."," 또 하이킹을 하며 얻은 아이디어를 공유하면서 아이디어를 더욱 창의적으로 발전시킬 수 있었는데, 이때 팀워크의 중요성을 깊게 느꼈던 것 같습니다."," 이 경험을 통해 열린 태도로 소통하고 문제를 바라보는 방식을 확장시키는 데 큰 도움이 되었습니다."],websiteUrl:null},{id:6,title:"WRAPTIQUE",category:"Project Proposal - Service Planning",description:"예술적 감각과 친환경 소재가 결합된 맞춤형 패키지 디자인 서비스 제안서",imageURL:"./Wraptique_IMG.png",tags:["Startup Planning"],pdfURL:"./Wraptique_PPT.pdf",projectDesc:"예술적 감각과 친환경 소재가 결합된 맞춤형 패키지 디자인 서비스 제안서",owner:"연수현",duration:"2025.04.25 ~ 2025.06.13",competencies:["Solution Proposal","Strategy Development","Business Model Creation","Initial Funding Plan","Team Building"],overview:"Wraptique는 예술적 디자인과 친환경 소재를 결합해 제품의 고유한 감성과 가치를 시각적으로 표현할 수 있도록 감각적인 패키지를 기획하고 디자인 하는 브랜드입니다. 아트워크 느낌의 친환경 포장재 디자인 가이드를 제공하여, 브랜드의 아이덴티티를 담아내는 창의적이고 지속가능한 패키징 솔루션을 제안합니다.",learnings:["사업계획서를 작성하는 방법을 배우고 직접 작성해보면서, 평소 일상 속 불편함이나 사회·환경적 문제를 더 민감하게 바라보면 도움이 되겠다는 생각이 들었습니다."," 일상에서 주변을 지속적으로 관찰하며 문제를 인식하는 시야를 넓혀가야겠다는 계기가 되었던 것 같습니다."],websiteUrl:null},{id:7,title:"My Shelf AR",category:"Project Proposal - AR App Service",description:"AR 기술을 활용한 구매내역 연동 책장 어플리케이션 제안서",imageURL:"./MyShelfAR_IMG.png",tags:["Trand Research","Ideation"],pdfURL:"./MyShelfAR_PPT.pdf",projectDesc:"AR 기술을 활용한 구매내역 연동 책장 어플리케이션 제안서",owner:"연수현",duration:"2024.03.13 ~ 2024.04.17",competencies:["Ideation","Conducting Survey","Field Research","Schedule Coordination","Role Assignment"],overview:"사라져가는 오프라인 개인 서점을 활성화하기 위해 <My Shelf AR> 서비스를 제안합니다. 이 서비스는 AR 기술을 활용하여 구매한 책의 내역을 전용 AR 애플리케이션에 연동시킵니다. 개인 서점에 설치된 빈 책장에 휴대폰을 비추면, 사용자가 구매한 책의 그래픽이 가상으로 꽂혀있는 독특한 AR 경험을 제공합니다. 기존 오프라인 서점에서 볼 수 없는 경험을 제공함으로써 오프라인 개인 서점의 방문과 구매를 유도하여 활성화를 제고하고자 합니다.",learnings:["서비스 기획의 기초를 처음 배우게 된 수업이었습니다. 되돌아보면 이 과정을 통해 기획 과제들이 조금씩 익숙해졌던 것 같습니다. 조장을 맡아 일정 조율과 역할 분담을 하면서 팀원들 각자가 잘하는 분야가 뚜렷하다는 것을 느꼈고, 그 강점을 살려 역할을 배치하는 것이 팀 전체의 효율을 높인다는 점을 깨달았습니다. "],websiteUrl:null},{id:8,title:"RoundAround - 02 : Wild Flower Hill",category:"Promotional Video",projectDesc:"RoundAround 브랜드 디퓨저 02 : Wild Flower Hill의 홍보 영상",imageURL:"./RoundAround_IMG.png",youtubeId:"f1juw_DRXBY",tags:["AE"],owner:"연수현",duration:"2024.10.30 ~ 2024.12.18",competencies:["Concept Setting","Live-action Filming","Color Grading (Adobe After Effects)","Adding Subtitles (Adobe After Effects)","Motion Graphics (Adobe After Effects)"],overview:"숲에 정취에서 영감을 받아 만들어진 라운드어라운드 브랜드의 포레스트 디퓨저 라인 중, 02 와일드 플라워 힐 제품의 특징과 분위기를 소개하는 홍보 영상입니다. 에프터이펙트를 활용하여 영상 제작/편집을 진행하였습니다.",learnings:["직접 촬영한 영상 소스를 활용해 모션 그래픽 영상을 제작하는 수업이었습니다. 홍보 영상에 사용할 소스를 직접 촬영해보는건 처음이라 스튜디오 대여부터 촬영 구도와 기법까지 모든 과정이 낯설었던 것 같습니다. 여러 레퍼런스를 찾아보며 점차 이러한 분야에 익숙해지는 계기가 되었고, 실사 촬영에서는 빛이나 촬영 환경에 따라 소스의 톤이 달라질 수 있어 이를 보정해야 한다는 점도 배울 수 있었습니다."],websiteUrl:null},{id:9,title:"Rosa Novella",category:"Promotional Video - Perfume",projectDesc:"산타마리아노벨라 브랜드의 Rosa Novella 향수 홍보 영상",imageURL:"./RosaNovella_IMG.png",youtubeId:"98VdgmHv-jI",tags:["AE","Adobe Illustrator 2024"],owner:"연수현",duration:"2024.09.05 ~ 2024.10.23",competencies:["Concept Setting","Graphic Design (Adobe Illustrator 2024)","Motion Graphics (Adobe After Effects)","Sound Integration (Adobe After Effects)"],overview:"피렌체 산타 마리아 노벨라 정원에 퍼지는 5월의 향기를 표현한 향수인 산타마리아노벨라의 로사노벨라 향수를 홍보하는 영상입니다. 고풍스럽고 클래식한 분위기의 패키지와 제품 디자인에서 고전적인 미감을 유지하고 예술품 같은 느낌을 준다고 판단하여 스케치 느낌의 2D 일러스트, 빈티지 색감, 클래식 사운드, 고전 느낌의 폰트 등을 활용했습니다. Adobe After Effects를 활용하여 모션 그래픽 영상으로 제작했습니다.",learnings:["영상에 들어가는 2D 그래픽을 제작하면서, 일러스트레이터에서 익숙하지 않았던 기능들을 더 수월하게 사용할 수 있게 되었습니다. 또한 2D 일러스트로 제작된 다양한 광고 영상 레퍼런스를 찾아보며 표현 방식과 스타일을 폭넓게 이해하는 계기가 되었습니다. 에프터 이팩드도 이 수업 때 처음 배웠는데, 직접 만들어보고싶은 영상을 제작하면서 키프레임과 카메라 기능을 좀더 수월하게 쓸 수 있게 되었습니다."],websiteUrl:null},{id:10,title:"The Spa Lodge",category:"Video - Space Design Concept Video",projectDesc:"3D MAX를 이용한 모델링/렌더링을 통해 자연 경관 속에 위치한 2층 구조의 개방형 Spa Lodge를 구현하고, 1층 거실/식사 공간과 2층 현대식 욕실 및 야외 스파/휴식 공간을 시각적으로 제시한 공간 디자인 프로젝트.",imageURL:"./TSL_IMG.png",youtubeId:"wEGLbMSx30w",tags:["3D MAX","AE"],owner:"연수현",duration:"2024.09.02 ~ 2024.12.07",competencies:["Concept Setting","3D Modeling (3D MAX 2024)","Rendering (3D MAX 2024)","Video editing (Adobe After Effects)"],overview:"자연으로 둘러싸인 2층 Spa Lodge를 3D MAX로 디자인했습니다. 1층은 자연 야외로 개방되어 거실 및 식사 공간으로 활용되며, 2층에는 실내 현대식 욕실과 자연 경관이 보이는 야외 스파 및 소파/테이블 휴식 공간을 배치하여 자연 속 힐링 공간을 보여줍니다.",learnings:["이 수업을 통해 3ds Max를 처음 배우며 기본적인 모델링, 텍스처 작업, 애니메이션 적용 등 3D 제작의 핵심 기능들을 익힐 수 있었습니다. 또 텍스처에 모두 고화질 이미지를 사용하면 기본 조절값을 활용할 때보다 렌더링 시간이 훨씬 오래 걸린다는 것을 몸소 경험하며 작업 효율성의 중요성을 깨달았습니다."],websiteUrl:null},{id:11,title:"Caffeine Nightmare",category:"3D Game",imageURL:"./CN_IMG.png",youtubeId:"6XhElif-Fpk",tags:["Unity","MagicaVoxel"],owner:"연수현",duration:"2025.04.09 ~ 2025.04.23",competencies:["Concept Setting","3D Modeling (MagicaVoxel)","Unity Developing"],overview:'"Caffeine Nightmare"는 카페인 없이 살 수 없는 주인공이 카페인을 끊으려 결심하는 것에서 시작됩니다. 주인공은 꿈속에서 카페인 음료의 유혹과 적들을 물리치고 깨어나야 합니다. 플레이어는 물방울 아이템 10개를 수집하여 최종 보스인 "특대 사이즈 커피"를 처치하는 스테이지로 넘어가고, 처치 완료 후 게임을 클리어해야 합니다. 레트로 컨셉의 장애물과 보스전을 통해 카페인 중독의 악몽에서 벗어나고자 하는 주인공의 여정을 담고 있습니다.',learnings:["Nav AI 기능을 활용해 적이 플레이어를 따라오도록 구현하면서 Unity 내 AI 이동 시스템의 기본 흐름을 이해할 수 있게 되었습니다. 또 직접 만든 3D 오브젝트를 불러올 때 씬 환경에 맞게 최적화하는 방법을 배우며 에셋 관리의 중요성을 체감했습니다. 특히 피벗 위치가 중앙이 아니면 회전이나 크기 조절이 원하는 대로 되지 않는다는 점을 깨달아, 제작한 에셋을 Unity 씬에 정확히 맞게 조정하는 법을 익힐 수 있는 좋은 기회였습니다."],websiteUrl:null},{id:12,title:"냉장고를 지켜라!",category:"3D Game",imageURL:"./SSG_IMG.png",youtubeId:"yhkfmIL5Kjw",tags:["Unity","MagicaVoxel"],owner:"연수현",duration:"2025.04.09 ~ 2025.04.23",competencies:["Concept Setting","3D Modeling (MagicaVoxel)","Unity Developing"],overview:"Unity로 제작한 3D 슈팅게임 입니다. 달콤한 디저트들이 정체불명의 에너지로 인해 괴물로 변하며 냉장고를 침략합니다. 플레이어는 냉장고를 지키는 로봇이 되어 별 모양 쿠키를 발사해 간식 괴물들을 막아내야합니다. 점수 단계에 따라 난이도가 상승하며, 1000점에 도달하면 냉장고 방어에 성공하는 설정입니다.",learnings:["유니티 프로그램을 처음 배우며 C# 스크립트를 활용해 점수와 생명 UI를 구현하고, 오브젝트를 움직이게 하는 기본적인 게임 로직을 익힐 수 있었습니다. 또한 키 입력에 따른 플레이어 조작, 충돌 감지, 오브젝트 생성·제거 같은 핵심 기능을 직접 구현해보며 게임 구조가 어떻게 동작하는지 이해하게 되었습니다. 씬 전환과 프리팹 관리 등을 경험하면서 전체적인 게임 제작 흐름을 체계적으로 배울 수 있었던 수업이었습니다."],websiteUrl:null},{id:13,title:"Hamster Delivery",category:"2D Web Game",description:"새벽배송을 인한 과대포장 환경 문제를 인식시키는 웹 게임",imageURL:"./HD_IMG.png",youtubeId:"PIOREC-uLLA",tags:["Adobe Illustrator 2024","HTML/CSS","JS"],owner:"연수현",duration:"2025.04.22 ~ 2025.06.09",competencies:["Research","Concept Setting","Graphic Design (Adobe Illustrator 2024)","Developing (HTML, CSS, JS)"],overview:"Hamster Delivery는 편리함을 추구하는 소비가 새벽배송과 과대포장 문제를 어떻게 만들어내는지, 사용자 스스로 체감하도록 설계된 선택형 스토리 게임입니다. 친근한 햄스터 캐릭터와 현실적인 UX 연출을 통해 반복되는 소비 선택 속에서 노동 착취와 환경 오염 문제를 자연스럽게 경험하게 합니다. 플레이어는 선택을 거듭할수록 점점 더 무거운 딜레마에 직면하며, 자신의 소비 행동이 사회에 미치는 영향을 주체적으로 고민하게 됩니다.",webGameUrl:"https://suhyeon549.github.io/hamsterdelivery/",learnings:["자바스크립트를 처음 배우며 클릭 이벤트, DOM 조작 등 기본적인 인터랙션 구현 방식을 익혔습니다. 조건문을 활용해 스토리 흐름이 분기되는 구조를 설계하며 웹 기반 내러티브 구현 방법을 이해했습니다. HTML/CSS/JS를 연동해 UI 상태 변화와 애니메이션을 만드는 과정을 배웠습니다. 또 직접 제작한 2D 일러스트 에셋을 웹 환경에 최적화하는 감각을 기를 수 있었습니다."],websiteUrl:null}],Vc={header:{position:"fixed",top:0,right:0,left:0,zIndex:50,backgroundColor:"transparent",transition:"none"},headerContent:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2vw 0"},navMenu:{display:"flex",backgroundColor:"rgba(220,220,255, 0.62)",borderRadius:"10vw",padding:"0.6vw 1.5vw",gap:"2vw"},navButton:{fontSize:"1vw",fontWeight:350,textTransform:"capitalize",color:"#ffffffff",padding:"0.2vw 0",background:"none",border:"none",cursor:"pointer",transition:"color 150ms",whiteSpace:"nowrap"}},jA=({scrollToSection:s,sections:e})=>{const i=Array.isArray(e)?e:[],r=()=>{s("main")};return R.jsx("header",{style:Vc.header,children:R.jsx("div",{style:Vc.headerContent,children:R.jsx("nav",{style:Vc.navMenu,children:i.map(l=>R.jsx("button",{onClick:()=>l.id==="main"?r():s(l.id),className:"nav-button",style:Vc.navButton,children:l.label},l.id))})})})},WA=({scrollToSection:s})=>{const e=se.useRef(null),i=se.useRef(!1);return se.useEffect(()=>{if(!e.current||i.current)return;i.current=!0;let r,l,c,f;const h="YEONSUHYEON";let m=1500;const p=100,x=[],g=[],_=[],y={};let M=!1,A=new Pt;const S=e.current;function v(B){const j=document.createElement("canvas"),ne=64;j.width=ne,j.height=ne;const le=j.getContext("2d");le.fillStyle="rgba(0, 0, 0, 0)",le.fillRect(0,0,ne,ne),le.fillStyle="#CEEAB6",le.font="bold 50px Arial",le.textAlign="center",le.textBaseline="middle",le.fillText(B,ne/2,ne/2+5);const ce=new VM(j);return ce.needsUpdate=!0,ce}function L(){for(let he=0;he<h.length;he++){const U=h[he];y[U]||(y[U]=v(U))}const B=new Ii,j=new Float32Array(m*3),ne=new Float32Array(m*3),le=new Float32Array(m),ce=[];let I=0,q=0;for(let he=0;he<m;he++){const U=Math.random(),$=Math.random(),ye=U*Math.PI*2,be=Math.acos(2*$-1),Ce=Math.cbrt(Math.random())*p,ze=Ce*Math.sin(be)*Math.cos(ye),J=Ce*Math.sin(be)*Math.sin(ye),pe=Ce*Math.cos(be),Ee=he*3;j[Ee]=ze,j[Ee+1]=J,j[Ee+2]=pe,x.push(ze,J,pe),g.push(ze,J,pe),ne[Ee]=.808,ne[Ee+1]=.918,ne[Ee+2]=.714,le[he]=3+Math.random()*2;const Xe=h[I];_.push(Xe),I=(I+1)%h.length}B.setAttribute("position",new ni(j,3)),B.setAttribute("color",new ni(ne,3)),B.setAttribute("size",new ni(le,1));let Y=0;for(let he=0;he<m;he++){const U=_[he];if(he===0||_[he]!==_[he-1]){he>0&&(B.addGroup(q,he-q,Y),Y++),q=he;const $=new Rv({size:8,map:y[U],vertexColors:!0,transparent:!0,blending:Kd,sizeAttenuation:!0,alphaTest:.5});ce.push($)}}B.addGroup(q,m-q,Y),f=new GM(B,ce),r.add(f)}function N(){r=new FM,c=new LA({antialias:!0,alpha:!0}),c.setSize(S.clientWidth,S.clientHeight),c.domElement.style.position="absolute",c.domElement.style.top="0",c.domElement.style.left="0",c.domElement.style.zIndex="10",S.appendChild(c.domElement),l=new pi(75,S.clientWidth/S.clientHeight,.1,1e3),l.position.z=200,L(),window.addEventListener("resize",F,!1),S.addEventListener("mousemove",H,!1),S.addEventListener("mousedown",O,!1),S.addEventListener("mouseup",V,!1)}function F(){!l||!c||!S||(l.aspect=S.clientWidth/S.clientHeight,l.updateProjectionMatrix(),c.setSize(S.clientWidth,S.clientHeight))}function H(B){const j=S.getBoundingClientRect();A.x=(B.clientX-j.left)/j.width*2-1,A.y=-((B.clientY-j.top)/j.height)*2+1}function O(){M=!0,ie()}function V(){M=!1,D()}function ie(){const B=f.geometry.attributes.position.array;for(let j=0;j<m;j++){const ne=j*3;g[ne]=B[ne]+(Math.random()-.5)*500,g[ne+1]=B[ne+1]+(Math.random()-.5)*500,g[ne+2]=B[ne+2]+(Math.random()-.5)*500}}function D(){for(let B=0;B<m;B++){const j=B*3;g[j]=x[j],g[j+1]=x[j+1],g[j+2]=x[j+2]}}function C(){if(!f||!c||!r||!l)return;requestAnimationFrame(C);const B=f.geometry.attributes.position.array,j=f.geometry.attributes.size.array;f.rotation.y+=.001;for(let ne=0;ne<m;ne++){const le=ne*3,ce=x[le],I=x[le+1],q=x[le+2],Y=Math.sqrt(ce*ce+I*I+q*q),$=Math.sin(Y*.05+performance.now()*.003)*5,ye=Math.sqrt(ce*ce+I*I+q*q),be=ye>0?(ye+$)/ye:1,Ce=ce*be,ze=I*be,J=q*be;let pe,Ee,Xe;M?(pe=g[le]-B[le],Ee=g[le+1]-B[le+1],Xe=g[le+2]-B[le+2],B[le]+=pe*.05,B[le+1]+=Ee*.05,B[le+2]+=Xe*.05,j[ne]=10):(pe=Ce-B[le],Ee=ze-B[le+1],Xe=J-B[le+2],B[le]+=pe*.05,B[le+1]+=Ee*.05,B[le+2]+=Xe*.05,j[ne]=3+Math.random()*2)}f.geometry.attributes.position.needsUpdate=!0,f.geometry.attributes.color.needsUpdate=!0,f.geometry.attributes.size.needsUpdate=!0,c.render(r,l)}return N(),C(),()=>{i.current=!1,window.removeEventListener("resize",F),S&&(S.removeEventListener("mousemove",H),S.removeEventListener("mousedown",O),S.removeEventListener("mouseup",V)),c&&(c.dispose(),c.domElement&&S.removeChild(c.domElement)),r&&r.clear()}},[s]),R.jsx("div",{ref:e,style:{width:"100%",height:"100vh",position:"relative",backgroundColor:"transparent"},children:R.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})})},qA=({scrollToSection:s})=>R.jsxs("section",{id:"main",className:"main-section",style:{paddingTop:0,paddingBottom:0,position:"relative",backgroundColor:"#000000",overflow:"hidden"},children:[R.jsx(WA,{scrollToSection:s}),R.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:20,pointerEvents:"none",color:"#FEDAF1",padding:"2vw 3vw",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[R.jsxs("div",{style:{alignSelf:"flex-start",paddingLeft:0},children:[R.jsx("h1",{style:{fontSize:"4vw",fontWeight:"800",margin:0,lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"Atelier"}),R.jsx("h1",{style:{fontSize:"4vw",fontWeight:"800",margin:0,lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left",paddingBottom:"1vw"},children:"Suhyeon"}),R.jsx("h2",{style:{fontSize:"1.2vw",fontWeight:"330",margin:0,lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"The Desk of Thought Pieces"})]}),R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",width:"100%",paddingTop:"19vw",paddingBottom:"4vw",pointerEvents:"none"},children:[R.jsxs("div",{style:{alignSelf:"flex-start",maxWidth:"40%",paddingLeft:0},children:[R.jsx("h3",{style:{fontSize:"2vw",fontWeight:"600",margin:"0 0 0.5rem 0",lineHeight:"1",fontFamily:'"Noto Sans", sans-serif',color:"#FEDAF1",textAlign:"left"},children:"New Media"}),R.jsx("h2",{style:{fontSize:"2vw",fontWeight:"600",margin:"0 0 1rem 0",lineHeight:"1",fontFamily:'"Noto Sans", sans-serif',color:"#FEDAF1",textAlign:"left"},children:"Contents Creator"}),R.jsx("p",{style:{fontSize:"1vw",fontWeight:"380",margin:"0 0 0.5rem 0",lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"Designing experiences that move people at the intersection of emotion and technology."}),R.jsx("p",{style:{fontSize:"1vw",fontWeight:"380",margin:"0 0 0.5rem 0",lineHeight:"1.2",color:"#FEDAF1",fontFamily:'"Noto Sans", sans-serif',textAlign:"left"},children:"I treat new media not just as a tool, but as a medium for emotion, planning content that delivers positive shift and inspiration."})]}),R.jsx("div",{style:{alignSelf:"flex-end",paddingRight:"3vw",paddingBottom:0,color:"#FEDAF1",pointerEvents:"auto"},children:R.jsx("h3",{style:{fontSize:"2vw",fontWeight:"600",margin:0,fontFamily:'"Noto Sans", sans-serif',textAlign:"right",paddingRight:"3vw",color:"#FEDAF1"},children:"Welcome to my workspace"})})]})]})]}),Ov=eu.forwardRef(({id:s,label:e,children:i},r)=>R.jsx("section",{id:s,ref:r,className:"content-section",children:R.jsx("div",{className:"content-wrapper",children:R.jsxs("h2",{className:"section-title",children:[e,R.jsx("div",{className:"section-content",children:i})]})})}));Ov.displayName="ContentSection";const Fv=eu.forwardRef(({id:s},e)=>{const[i,r]=se.useState(!1),l=se.useRef(null),c=[{id:"sincere",title:"Sincere",hashtag:["#성실한"],description:"저는 작업 환경 관리와 점진적인 완성을 통해 효율을 높이고, 어떤 상황에서도 책임감 있게 프로젝트를 완수하는 사람입니다.",cardImageURL:"./sincere_bg.png"},{id:"resilient",title:"Resilient",hashtag:["#회복력이 좋은","#문제 해결"],description:"저는 다양한 관점을 적극적으로 탐색하여 사고의 폭을 확장하고, 새로운 해결 방법을 찾아 프로젝트 완성도를 높이는 사람입니다.",cardImageURL:"./resilient_bg.png"},{id:"facilitator",title:"Facilitator",hashtag:["#소통하는","#협력적인"],description:"저는 팀 내 소통을 통해 분위기를 열고, 프로젝트가 자연스럽게 진행되도록 이끄는 사람입니다.",cardImageURL:"./facilitator_bg.png"}];se.useEffect(()=>{const h=new IntersectionObserver(([m])=>{m.isIntersecting&&(r(!0),h.unobserve(m.target))},{threshold:.1});return l.current&&h.observe(l.current),()=>{l.current&&h.unobserve(l.current)}},[]);const f=se.useCallback(h=>{e&&(typeof e=="function"?e(h):e.current=h),l.current=h},[e]);return R.jsxs("section",{id:s,ref:f,className:`content-section ${i?"about-visible":""}`,style:{paddingTop:"10vw",paddingBottom:"5vw",minHeight:"100vh",backgroundColor:"#000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",color:"#FEDAF1"},children:[R.jsxs("div",{className:"about-header-text",children:[R.jsx("h2",{className:"about-title",children:"Pieces"}),R.jsx("p",{className:"about-subtitle",children:"That Define Suhyeon"}),R.jsx("p",{className:"about-subtitle2",children:"수현의 성향을 소개합니다."})]}),R.jsx("div",{className:"about-card-grid",children:c.map(h=>R.jsxs("div",{className:`about-card-piece ${h.id}-card ${i?"animate-card":""}`,style:{backgroundImage:`url(${h.cardImageURL})`},children:[R.jsx("div",{className:"card-top-circle"}),R.jsx("h3",{className:"card-title-new",children:h.title}),R.jsx("div",{className:"card-hashtag-group",children:h.hashtag.map((m,p)=>R.jsx("span",{className:"card-hashtag",children:m},p))}),R.jsx("p",{className:"card-description-new",children:h.description})]},h.id))})]})});Fv.displayName="AboutSection";const YA=({skillData:s,iconKeys:e,activeIcon:i,setActiveIcon:r,tabs:l,activeTab:c,handleTabChange:f})=>{const h=s.items[i],m=e.length,p=57,x=14,g=22,_=30,y=p+x,A=(m*y+(m>0?(m-1)*g:0)+_)/15;return R.jsxs("div",{className:"monitor-container",children:[R.jsxs("div",{className:"monitor-screen-area",children:[R.jsx("div",{className:"monitor-top-bar",children:R.jsxs("div",{className:"monitor-title-wrapper",children:[R.jsx("p",{className:"monitor-title-text",children:h.title}),R.jsx("div",{className:"monitor-tab-buttons-right",children:l.map(S=>R.jsx("button",{onClick:()=>f(S),className:`monitor-tab-button ${c===S?"active-monitor-tab":""}`,children:S},S))})]})}),R.jsxs("div",{className:"monitor-content-grid",children:[R.jsxs("div",{className:"content-top-wrapper",children:[R.jsxs("div",{className:"content-cards-wrapper",children:[R.jsxs("div",{className:"content-card",children:[R.jsx("h4",{className:"card-label",children:"Period of use"}),R.jsx("p",{className:"card-korean-label",children:"활용 기간"}),R.jsx("p",{className:"card-main-value period-value",children:h.period})]}),R.jsxs("div",{className:"content-card",children:[R.jsx("h4",{className:"card-label",children:"Number of projects"}),R.jsx("p",{className:"card-korean-label",children:"프로젝트 적용 횟수"}),R.jsx("p",{className:"card-main-value projects-value",children:h.projects})]}),R.jsxs("div",{className:"content-card",children:[R.jsx("h4",{className:"card-label",children:"Main field of application"}),R.jsx("p",{className:"card-korean-label",children:"주 활용 분야"}),R.jsx("p",{className:"card-main-value application-value",children:h.application})]}),R.jsxs("div",{className:"content-card",children:[R.jsx("h4",{className:"card-label",children:"Proficiency"}),R.jsx("p",{className:"card-korean-label",children:"숙련도"}),R.jsx("p",{className:"card-evidence-value",children:h.proficiencyEvidence}),R.jsx("p",{className:"card-main-value proficiency-value",children:h.proficiency})]})]}),R.jsxs("div",{className:"content-description-right",children:[R.jsx("h2",{className:"content-description-title",children:h.title}),h.content.map((S,v)=>R.jsx("p",{className:"description-line",children:S},v))]})]}),R.jsx("div",{className:"icon-list-footer-absolute",style:{width:`${A}rem`},children:e.map(S=>R.jsx("div",{className:`software-icon-wrapper ${i===S?"active-icon":""}`,onClick:()=>r(S),children:R.jsx("div",{className:"software-icon",style:{backgroundColor:"transparent"},children:R.jsx("img",{src:kA[S],alt:S,style:{width:"100%",height:"100%",objectFit:"contain"}})})},S))})]})]}),R.jsx("div",{className:"monitor-stand"}),R.jsx("div",{className:"monitor-base"})]})},Iv=eu.forwardRef(({id:s,sectionsData:e},i)=>{const r=Object.keys(e),[l,c]=se.useState("Design"),[f,h]=se.useState("Photoshop"),m=se.useCallback(g=>{c(g);const _=e[g]?.defaultActive||e[g]?.iconKeys[0];h(_)},[e]);se.useEffect(()=>{const g=e[l]?.iconKeys||[],_=e[l]?.defaultActive||g[0];g.includes(f)||h(_)},[l,f,e]);const p=e[l],x=p.iconKeys;return R.jsx("section",{id:s,ref:i,className:"content-section",style:{paddingLeft:"3vw",paddingRight:"3vw",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",backgroundColor:"#000000",color:"#FFFFFF"},children:R.jsxs("div",{className:"skills-wrapper-custom",children:[R.jsx("h2",{className:"skills-section-title-custom",children:"Toolkit"}),R.jsx("p",{className:"skills-subtitle",children:"that Suhyeon mainly uses"}),R.jsx("p",{className:"skills-subtitle2",children:"수현의 아틀리에를 움직이는 핵심 도구와 역량을 소개합니다."}),R.jsx(YA,{skillData:p,iconKeys:x,activeIcon:f,setActiveIcon:h,tabs:r,activeTab:l,handleTabChange:m})]})})});Iv.displayName="SkillsSection";const ZA=({project:s,openModal:e})=>{const i=s.tags||[];return R.jsx("div",{className:"project-card-container",children:R.jsxs("div",{className:"project-card",onClick:()=>e(s),children:[R.jsx("div",{className:"project-image-box",children:R.jsx("img",{src:s.imageURL,alt:s.title,className:"project-image"})}),R.jsxs("div",{className:"project-info",children:[R.jsx("h3",{className:"project-title",children:s.title}),R.jsx("p",{className:"project-category",children:s.category})]}),R.jsx("div",{style:{padding:"0 10px 10px",display:"flex",flexWrap:"wrap",gap:"5px"},children:i.map((r,l)=>R.jsx("div",{className:"project-card-badge",children:r},l))})]})})},zv=eu.forwardRef(({id:s,label:e,worksData:i,openModal:r},l)=>R.jsx("section",{id:s,ref:l,className:"content-section",style:{paddingLeft:"3vw",paddingRight:"3vw",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},children:R.jsxs("div",{className:"works-wrapper",children:[R.jsx("h2",{className:"works-section-title",children:e}),R.jsx("p",{className:"works-section-subtitle",children:"The final result of the Atelier's process"}),R.jsx("p",{className:"works-section-intro",children:"아틀리에에서 탄생한 최종 결과물입니다."}),R.jsx("div",{className:"project-grid",children:i.map(c=>R.jsx(ZA,{project:c,openModal:r},c.id))})]})}));zv.displayName="WorksSection";const KA=({project:s,onClose:e,navigate:i})=>{if(!s)return null;const{title:r,category:l,owner:c,duration:f,competencies:h,awards:m,projectDesc:p,youtubeId:x,pdfURL:g,overview:_="프로젝트에 대한 추가 개요 설명이 여기에 들어갑니다.",webGameUrl:y,learnings:M,websiteUrl:A}=s;let S=null,v=!1;g?(v=!0,S=R.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:g,title:`${r} Project Document`,frameBorder:"0"})):x?S=R.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:`https://www.youtube.com/embed/${x}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):S=R.jsx("span",{className:"media-placeholder",children:"(미디어 콘텐츠 없음)"});const L=F=>{switch(F){case 1:return"/works/melt-0c";case 2:return"/works/permafrost";case 3:return"/works/abyss";case 8:return"/works/round-around";case 9:return"/works/rosa-novella";case 10:return"/works/spa-lodge";case 13:return"/works/hamster-delivery";default:return null}},N=v?{height:"0",paddingTop:"133.33%",position:"relative",width:"100%",backgroundColor:"#f3f4f6",margin:"20px 0",overflow:"hidden"}:{height:"0",paddingTop:"56.25%",position:"relative",width:"100%",backgroundColor:"#f3f4f6",margin:"20px 0",overflow:"hidden"};return R.jsx("div",{className:"modal-backdrop",children:R.jsxs("div",{className:"modal-content-new",children:[R.jsxs("div",{className:"modal-sticky-header",children:[R.jsx("h1",{className:"modal-left-title",dangerouslySetInnerHTML:{__html:r}}),R.jsx("button",{className:"modal-close-button-new",onClick:e,children:"×"})]}),R.jsx("div",{className:"modal-inner-grid",children:R.jsxs("div",{className:"modal-left-area",children:[R.jsxs("div",{className:"modal-info-table",children:[p&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Project"}),p]}),R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Category"}),l]}),c&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Owner"}),c]}),f&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Duration"}),f]}),h&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Competencies"}),h.map((F,H)=>R.jsx("span",{className:"competency-tag",children:F},H))]}),m&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Awards"}),m]}),_&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Overview"}),R.jsx("span",{className:"info-content-long",children:_})]}),M&&R.jsxs("p",{children:[R.jsx("span",{className:"info-label",children:"Learnings"}),R.jsx("span",{className:"info-content-long",children:M})]}),s.id===13&&y&&R.jsx("button",{className:"more-button",onClick:()=>{window.open(y,"_blank")},style:{marginTop:"1.5vw"},children:"Try Game"}),(s.id===1||s.id===2)&&A&&R.jsx("button",{className:"more-button",onClick:()=>{window.open(A,"_blank")},style:{marginTop:"1.5vw",marginLeft:s.id===13&&y?"1vw":"0"},children:"Website"})]}),R.jsx("div",{className:"modal-youtube-box",style:N,children:S}),(s.id===1||s.id===2||s.id===3||s.id===8||s.id===9||s.id===10||s.id===13)&&R.jsx("button",{className:"more-button",onClick:()=>{const F=L(s.id);F&&(i(F),e())},children:"more"})]})})]})})},QA=()=>{const[s,e]=se.useState(!1),[i,r]=se.useState(null),l=Zg(),c={main:se.useRef(null),about:se.useRef(null),skills:se.useRef(null),works:se.useRef(null),contact:se.useRef(null)};se.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[s]);const f=se.useCallback(p=>{const x=Bg.find(g=>g.id===p.id)||p;r(x),e(!0)},[]),h=se.useCallback(()=>{e(!1),r(null)},[]),m=se.useCallback(p=>{if(p==="main"){window.scrollTo({top:0,behavior:"smooth"});return}const x=c[p];if(x&&x.current){const _=window.innerWidth*10/100,M=x.current.getBoundingClientRect().top+window.pageYOffset-_;window.scrollTo({top:M,behavior:"smooth"})}},[c]);return R.jsxs(R.Fragment,{children:[R.jsx("style",{children:`
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

        /* Content Sections */
        .content-section {
          min-height: 100vh;
          padding-top: 10vw;
          padding-bottom: 5vw;
          background-color: #000000;
          // padding-left: 3vw;
        }

        .content-wrapper {
          max-width: 1600px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 1.5rem;
        }

        .section-title {
          font-size: 3.5vw;
          font-weight: 800;
          font-weight: normal;
          color: #FEDAF1;
          text-align: center;
        }

        .section-slogan {
          font-size: 1.7vw;
          font-weight: 400;
          color: #B36BFF;
          line-height: 1.6;
          margin: 0.5rem 0;
          padding-left: 0;
        }

        .section-slogan_small {
          font-size: 1vw;
          font-weight: 400;
          color: #696967;
          line-height: 1.6;
          margin: 0.5rem 0;
          padding-left: 0;
        }

        .section-slogan_small_wrapper {
          padding-top: 0.5rem;
        }

        /* ⭐⭐⭐ ABOUT SECTION (카드) - 새로운 스타일 적용 ⭐⭐⭐ */
.content-section#about {
    padding-top: 10vw;
    background-color: #000000;
    color: #FEDAF1;
    text-align: center;
    // padding-right: 3vw;
}

/* 제목/부제 스타일 */
.about-header-text {
    margin-bottom: 5vw;
    padding-top: 2vw;
}

.about-header-text .about-title {
    font-size: 3.5vw;
    font-weight: 800;
    margin: 0;
    line-height: 1.2;
    color: #FEDAF1;
    font-family: 'Noto Sans', sans-serif;
}

.about-header-text .about-subtitle {
    font-size: 1.2vw;
    font-weight: 400;
    margin: 0.5vw 0 0 0;
    color: #FEDAF1;
    font-family: 'Noto Sans', sans-serif;
}

.about-header-text .about-subtitle2 {
    font-size: 1vw;
    font-weight: 400;
    margin: 0.5vw 0 0 0;
    color: #FEDAF1;
    font-family: 'Noto Sans', sans-serif;
}

/* 카드 그리드 컨테이너 */
.about-card-grid {
    display: flex;
    justify-content: center;
    gap: 2vw;
    width: 80vw;
    // max-width: 1200px;
    margin: 0 auto;
    perspective: 1000px;
}

/* 각 카드 스타일 */
.about-card-piece {
    width: 25vw;
    max-width: 380px;
    height: 40vw;
    max-height: 600px;
    border-radius: 1vw;
    padding: 3vw;
    background-color: #1a1a1a;
    color: #ffffff;
    text-align: left;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease-out, box-shadow 0.5s ease-out;
    box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);

    /* 배경 이미지 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* 덮어씌우는 오버레이 */
.about-card-piece::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    border-radius: 1vw;
}

/* 컨텐츠 레이어 */
.about-card-piece > * {
    z-index: 2;
    position: relative;
}

/* 상단 원형 아이콘 */
.card-top-circle {
    width: 2.5vw;
    height: 2.5vw;
    min-width: 12px;
    min-height: 12px;
    border-radius: 50%;
    border: 1px solid #FEDAF1;
    margin-bottom: 2vw;
}

/* 제목 */
.card-title-new {
    font-size: 3vw;
    font-weight: 600;
    margin: 0 0 2vw 0;
    color: #FEDAF1;
    line-height: 1.1;
}

/* 해시태그 그룹 */
.card-hashtag-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8vw;
    margin-bottom: 1.5vw;
}

/* 해시태그 */
.card-hashtag {
    font-size: 1vw;
    font-weight: 400;
    color: #efefefff;
    white-space: nowrap;
}

/* 설명 텍스트 */
.card-description-new {
    font-size: 1vw;
    font-weight: 300;
    line-height: 1.5;
    margin-top: auto;
    padding-top: 17rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #f0f0f0ff;
}

/* 초기 애니메이션 상태 */
.about-card-piece {
    opacity: 0;
    transform: translateY(5vw) rotateX(10deg);
}

/* 활성화 상태 */
.about-visible .animate-card {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    transition: opacity 0s ease-out, transform 0.5s ease-out;
}

/* 애니메이션 딜레이 */
.sincere-card.animate-card { transition-delay: 0.1s; }
.resilient-card.animate-card { transition-delay: 0.3s; }
.facilitator-card.animate-card { transition-delay: 0.5s; }

/* 호버 효과 */
.about-card-piece:hover {
    transform: scale(1.05) translateY(-1vw);
    box-shadow: 0 2vw 4vw rgba(0, 0, 0, 0.6);
    cursor: default;
}

/* ⭐ 모바일 (1024px 이하) */
@media (max-width: 1024px) {
    .about-card-grid {
        flex-direction: column;
        gap: 4vw;
        width: 90vw;
        max-width: none;
    }

    .about-card-piece {
        width: 100%;
        height: 60vw;
        max-width: none;
        max-height: 400px;
        padding: 5vw;
    }

    .card-top-circle {
        margin-bottom: 5vw;
    }

    .card-title-new {
        font-size: 8vw;
        margin: 0 0 4vw 0;
    }

    .card-hashtag {
        font-size: 3vw;
    }

    .card-description-new {
        font-size: 3.5vw;
    }

    .about-card-piece:hover {
        transform: scale(1.02) translateY(-1vw);
    }
}

/* ⭐⭐⭐ ABOUT SECTION (카드) 끝 ⭐⭐⭐ */


        /* Skills Section Custom Styles */
        .content-section#skills {
          background-color: #000000;
          color: #FFFFFF;
          text-align: center;
          padding-top: 10vw;
        }

        .skills-wrapper-custom {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding-top: 2vw;
        }

        .skills-section-title-custom {
          font-size: 3.5vw;
          font-weight: 800;
          color: #FEDAF1;
          margin: 0;
          padding-top: 2vw;
          line-height: 1.2;
        }

        .skills-subtitle {
          font-size: 1.2vw;
          font-weight: 350;
          color: #FEDAF1;
          margin: 0.4vw 0 0.4vw 0;
        }

        .skills-subtitle2 {
          font-size: 1vw;
          font-weight: 400;
          margin: 0;
          color: #FEDAF1;
          font-family: 'Noto Sans', sans-serif;
          text-align: center;
          padding-bottom: 4vw;
      }

        .tab-menu-top { display: none; }

        /* 모니터 그래픽 */
        .monitor-container {
          width: 80rem;
          max-width: 100%;
          aspect-ratio: 16 / 9;
          background-color: transparent;
          position: relative;
          padding-bottom: 5rem;
        }

        .monitor-screen-area {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0.467rem solid #595959;
          border-radius: 1rem;
          box-shadow: 0 0 5rem rgba(153, 153, 204, 0.4);
          background-color: #000000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 10;
        }

        .monitor-top-bar {
          background-color: #000000ff;
          padding: 0.467rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .monitor-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .monitor-title-text {
          font-size: 3.667rem;
          font-weight: 600;
          color: #CEEAB6;
          margin: 0;
          padding-top: 0.2rem;
          white-space: nowrap;
        }

        .monitor-tab-buttons-right {
          display: flex;
          gap: 0.467rem;
          align-items: center;
          padding-right: 0.467rem;
        }

        .monitor-tab-button {
          padding: 0.267rem 0.8rem;
          border: none;
          border-radius: 0.8rem;
          font-size: 0.867rem;
          font-weight: 400;
          text-transform: uppercase;
          white-space: nowrap;
          cursor: pointer;
          background-color: #333;
          color: #fff;
        }

        .monitor-tab-button:hover {
          background-color: #666666;
          color: #FFFFFF;
        }

        .monitor-tab-button.active-monitor-tab {
          background-color: #CEEAB6;
          color: #000000;
          font-weight: 600;
        }

        .monitor-content-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 1.467rem;
          height: calc(100% - 2.467rem);
          position: relative;
          overflow: hidden;
        }

        .content-top-wrapper {
          display: flex;
          gap: 1.467rem;
          flex-grow: 1;
          margin-bottom: 4rem;
          padding-bottom: 0;
        }

        .content-cards-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1.467rem;
          flex: 3;
        }

        .content-card {
          background-color: #262626;
          box-shadow: none;
          border-radius: 0.467rem;
          padding: 1.2rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          border: none;
        }

        .card-label {
          font-size: 2.3rem;
          font-weight: 500;
          color: #CEEAB6;
          margin: 0 0 0.4rem 0;
          line-height: 1.2;
        }

        .card-korean-label {
          font-size: 1.1rem;
          font-weight: 400;
          color: #AAAAAA;
          margin: 0 0 0.4rem 0;
          line-height: 1.2;
        }

        .card-evidence-value {
          font-size: 1rem;
          font-weight: 350;
          color: #8F8F8F;
          margin: 0 0 0.4rem 0;
          line-height: 1.2;
          word-break: keep-all;
        }

        .card-main-value {
          font-size: 2.1rem;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.1;
        }

        .content-description-right {
          background-color: #262626;
          border: none;
          border-radius: 0.467rem;
          padding: 1.467rem;
          flex: 1;
          text-align: left;
          overflow-y: auto;
        }

        .content-description-title {
          font-size: 2rem;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 0.8rem 0;
          line-height: 1.2;
        }

        .description-line {
          font-size: 1rem;
          font-weight: 350;
          color: #E0E0E0;
          margin: 0 0 0.667rem 0;
          line-height: 1.6;
        }

        .icon-list-footer-absolute {
          position: absolute;
          bottom: 1.467rem;
          z-index: 20;
          left: 0;
          right: 0;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(206,234,182, 0.4);
          border-radius: 0.467rem;
          padding: 1rem 1rem;
          border: none;
          height: 3rem;
          gap: 1.467rem;
        }

        .software-icon-wrapper {
          cursor: pointer;
          padding: 0.467rem;
          border-radius: 0.467rem;
          transition: all 0.3s;
          width: 3.8rem;
          height: 3.8rem;
          position: relative;
          border: 0.067rem solid transparent;
        }

        .software-icon.active-icon {
          box-shadow: 0 0 1rem rgba(206, 234, 182, 1), 0 0 45rem rgba(206, 234, 182, 0.7);
          border-color: #ceeab65c;
          border-radius: 1.467rem;
        }

        .software-icon {
          width: 100%;
          height: 100%;
          border-radius: 1.2rem;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.467rem;
        }

        .software-icon:hover {
          box-shadow: 0 0 1rem rgba(206, 234, 182, 0.8), 0 0 2rem rgba(206, 234, 182, 0.5);
          border-radius: 1.467rem;
        }

        .monitor-stand {
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          width: 4rem;
          height: 3rem;
          background-color: #444;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
          z-index: 5;
        }

        .monitor-base {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 15rem;
          height: 1rem;
          background-color: #444;
          border-radius: 0.467rem 0.467rem 0 0;
          z-index: 5;
          box-shadow: 0 0.467rem 1rem rgba(0, 0, 0, 0.8);
        }

        /* Works Section */
        .works-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .works-section-title {
            font-size: 3.5vw;
            font-weight: 800;
            margin: 0;
            line-height: 1.2;
            color: #FEDAF1;
            font-family: 'Noto Sans', sans-serif;
            text-align: center;
        }

        .works-section-subtitle {
            font-size: 1.2vw;
            font-weight: 400;
            margin: 0;
            color: #FEDAF1;
            font-family: 'Noto Sans', sans-serif;
            text-align: center;
            padding-top : 0.5vw;
        }

        .works-section-intro {
              font-size: 1vw;
              font-weight: 300;
              margin-top: 1vw;
              color: #FEDAF1;
              font-family: 'Noto Sans', sans-serif;
              text-align: center;
              padding-bottom : 4vw;
          }

        .project-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 1.5rem;
          // padding-right: 3vw;
        }

        .project-card-container {
          width: calc(33.333% - 14px);
          min-width: 300px;
        }

        .project-card {
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          cursor: pointer;
          overflow: hidden;
          background-color: #131313ff;
          border : 1px solid #FEDAF1;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-card-badge {
          background-color: #444444ff;
          color: #FEDAF1;
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

        .project-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .project-image-box {
          width: 100%;
          padding-top: 65%;
          background-color: #f3f4f6;
          margin-bottom: 10px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
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

        .project-info {
          padding: 5px 10px 10px 10px;
          text-align: center;
          flex-grow: 0;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin: 0;
          color: #fedae7ff;
        }

        .project-category {
          font-size: 1rem;
          color: #ffffffff;
          margin: 0.1vw 0 0 0;
        }

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
          background-color: #1b1b1bff;
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

        .modal-content-new::-webkit-scrollbar {
          width: 0.5vw;
          height: 0.5vw;
        }

        .modal-content-new::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 1vw;
        }

        .modal-sticky-header {
          position: sticky;
          top: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5vw 1.5vw 1.5vw 2.8vw;
          background-color: #1b1b1bff;
          z-index: 10;
          border-bottom: 1px solid #1b1b1bff;
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
          color: #FEDAF1;
          padding: 0;
        }

        .modal-close-button-new:hover {
          color: #d275b0ff;
        }

        .modal-left-area {
          display: flex;
          flex-direction: column;
          gap: 2vw;
        }

        .modal-left-title {
          font-size: 3rem;
          font-weight: 800;
          color: #fff5fbff;
          margin: 0;
        }

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
          color: #f2f2f2ff;
          flex-wrap: wrap;
          display: flex;
          gap: 0.5vw;
        }

        .modal-info-table p:has(.competency-tag) {
          margin-bottom: 0.8vw;
        }

        .info-label {
          font-weight: 700;
          color: #d390bbff;
          width: 5vw;
          flex-shrink: 0;
          margin-right: 3vw;
        }

        .competency-tag {
          background-color: #434343ff;
          color: #CEEAB6;
          padding: 0.3vw 0.5vw;
          border-radius: 0.3vw;
          font-size: 0.8vw;
          margin: 0.2vw 0.5vw 0.2vw 0;
          display: inline-block;
          width: auto;
          flex-shrink: 0;
        }
        
        /* Learnings 목록 스타일 추가 */
        .modal-info-table p .info-content-long ul {
            list-style-type: disc; /* 원형 목록 마커 */
            margin: 0;
            padding: 0 0 0 1.2vw;
        }

        .modal-info-table p .info-content-long li {
            margin-bottom: 0.4vw;
            color: #4b5563; /* 기존 텍스트 색상 유지 */
            font-size: 1rem;
            line-height: 1.4;
        }
        /* Learnings 컨테이너의 패딩을 조정하여 목록이 잘 보이도록 합니다. */
        .modal-info-table p:has(.info-label) .info-content-long {
          flex-grow: 1; /* 남은 공간을 채움 */
          padding-left: 0; /* 기본 패딩 제거 */
        }
        
        .modal-info-table > p:has(.info-label:contains("Learnings")) {
            margin-top: 1vw; /* Overview와 Learnings 사이 간격 */
        }
        /* 버튼들을 담는 p 태그를 flex로 만들어 버튼들을 가로로 나열 */
        .modal-info-table > p:has(.more-button) {
            display: flex; /* 버튼을 포함하는 p 태그를 flex 컨테이너로 설정 */
            justify-content: center; /* 왼쪽 정렬 */
            gap: 1.5vw; /* 버튼 사이 간격 */
            margin-top: 1.5vw;
            align-items: center;
        }


        .media-placeholder {
          font-size: 1.5rem;
          color: #aaaaaa;
          z-index: 1;
        }

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
          background-color: #dc94c2ff;
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
          max-width: 120px;
          text-align: center;
        }

        .more-button:hover {
          background-color: #a35888ff;
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .modal-inner-grid {
            grid-template-columns: 1fr;
            padding: 30px 5vw;
          }

          .modal-content-new {
            width: 90vw;
            max-height: 90vh;
          }

          .modal-left-title {
            font-size: 2.5rem;
          }

          .modal-close-button-new {
            font-size: 8vw;
          }
        }

        /* Contact & Footer */
        .contact-info a {
          color: #696967;
          text-decoration: underline;
        }

        .contact-info a:hover {
          color: #B36BFF;
        }

/* Contact Section */
.content-section#contact {
    min-height: 80vh;
    padding-top: 10vw;
    padding-bottom: 0.2vw;
    display: flex;
    flex-direction: column;
    align-items: center; /* 섹션의 자식 요소를 가로 중앙 정렬 */
}

.content-section#contact .section-title {
    color: #FEDAF1;
    font-size: 3.5vw;
    font-weight: 800; /* <---- 여기에 굵기 800 적용 */
    margin-bottom:0vw;
    text-align: center;
}

.content-section#contact .section-title2 {
        color: #FEDAF1;
    font-size: 1.2vw;
    font-weight: 400; /* <---- 여기에 굵기 800 적용 */
    margin-bottom: 1.5vw;
    text-align: center;
}

/* 설명 텍스트를 섹션 중앙에 배치 */
.contact-intro-text {
    font-size: 1vw;
    font-weight: 350;
    color: #FEDAF1;
    margin-bottom: 4vw;
    text-align: center;
    width: 100%; /* 텍스트 자체는 100% 너비에서 중앙 정렬 */
}

/* ⭐ 중앙 정렬을 위한 래퍼 (새로 추가) ⭐ */
.contact-center-wrapper {
    display: flex;
    justify-content: center; /* 내부 요소를 가로 중앙 정렬 */
    width: 100%;
    max-width: 1000px; 
    margin: 0 auto;
}

/* 좌측 정보 박스 (스타일 변경 및 중앙 배치에 맞게 조정) */
.contact-info-box-clean {
    flex: 1 대신 고정된 너비를 주어 중앙에 명확하게 배치 
    width: 400px; /* PC 환경에서 적절한 고정 너비 */
    background-color: #171717; /* 이미지 배경색 사용 */
    color: #ffffff;
    border-radius: 1vw;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 5vw;
    max-height: 30rem;
}

/* contact-line 스타일 (vw에서 rem 또는 px로 변경하여 크기 고정) */
.contact-line {
    font-size: 1.2rem; /* 1.2vw에서 1.2rem으로 변경 */
    font-weight: 300;
    line-height: 2.5;
    border-bottom: 1px solid rgba(255, 202, 234, 1);
    padding: 0.5rem 0; /* vw에서 rem으로 변경 */
    text-align: center; /* 텍스트 중앙 정렬 */
}

.contact-line:last-child {
    border-bottom: none;
}

/* --- 제거할 CSS (ContactForm 관련) --- */
/* .contact-content-grid, .contact-form-container, .form-title, .form-grid, 
   .input-group, .send-message-button 등 모든 폼 관련 CSS를 삭제하세요. */

/* ⭐ 모바일 미디어 쿼리 (900px 이하) 조정 ⭐ */
@media (max-width: 900px) {
    /* contact-content-grid 대신 contact-center-wrapper에 적용 */
    .contact-center-wrapper {
        flex-direction: column;
        width: 90vw;
    }
    
    .contact-info-box-clean {
        width: 100%; /* 모바일에서는 가로 전체 사용 */
        padding: 5vw;
        min-height: auto;
    }

    .contact-line {
        font-size: 4vw; /* 모바일에서 텍스트 크기 vw 유지 */
        line-height: 1.8;
        padding: 2vw 0;
    }

    .contact-form-container {
        padding: 5vw;
    }

    .form-title {
        font-size: 6vw;
        margin-bottom: 4vw;
    }

    .input-group input,
    .input-group textarea {
        padding: 3vw;
        font-size: 4vw;
    }

    .input-group textarea {
        min-height: 30vw;
    }

    .send-message-button {
        padding: 3vw;
        font-size: 4.5vw;
    }
}


        .footer {
          padding-top: 2rem;
          padding-bottom: 2rem;
          background-color: #111827;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
        }
      `}),R.jsxs("div",{className:"app-container",children:[R.jsx(jA,{scrollToSection:m,sections:VA}),R.jsxs("main",{children:[R.jsx(qA,{scrollToSection:m}),R.jsx(Fv,{id:"about",ref:c.about}),R.jsx(Iv,{id:"skills",ref:c.skills,sectionsData:XA}),R.jsx(zv,{id:"works",label:"Catalogue",ref:c.works,worksData:Bg,openModal:f}),R.jsxs(Ov,{id:"contact",ref:c.contact,children:[R.jsx("p",{className:"section-title",children:"Contact"}),R.jsx("p",{className:"section-title2",children:"Please contact Suhyun Atelier if you would like to collaborate on a project"}),R.jsx("p",{className:"contact-intro-text",children:"함께 프로젝트를 진행하거나 아래 연락처로 연락주세요."}),R.jsx("div",{className:"contact-center-wrapper",children:R.jsxs("div",{className:"contact-info-box-clean",children:[" ",R.jsx("div",{className:"contact-line",children:"yeonsh030@gmail.com"}),R.jsx("div",{className:"contact-line",children:"010 8838 7955"}),R.jsx("div",{className:"contact-line",children:"Republic of korea"})]})})]})]}),R.jsx("footer",{className:"footer",children:"© 2025 Aterlier Suhyeon. All rights reserved."})]}),s&&R.jsx(KA,{project:i,onClose:h,navigate:l})]})},JA=()=>R.jsxs(Vy,{children:[R.jsx(ca,{path:"/",element:R.jsx(QA,{})}),R.jsx(ca,{path:"/works/melt-0c",element:R.jsx(OA,{})}),R.jsx(ca,{path:"/works/permafrost",element:R.jsx(FA,{})}),R.jsx(ca,{path:"/works/Abyss",element:R.jsx(IA,{})}),R.jsx(ca,{path:"/works/round-around",element:R.jsx(zA,{})}),R.jsx(ca,{path:"/works/rosa-novella",element:R.jsx(BA,{})}),R.jsx(ca,{path:"/works/spa-lodge",element:R.jsx(HA,{})}),R.jsx(ca,{path:"/works/hamster-delivery",element:R.jsx(GA,{})})]});QS.createRoot(document.getElementById("root")).render(R.jsx(se.StrictMode,{children:R.jsx(fb,{basename:"/Atelier_SuHyeon",children:R.jsx(JA,{})})}));
