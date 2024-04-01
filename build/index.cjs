"use strict";var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};var e=function(){return e=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)};function r(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))}function n(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}"function"==typeof SuppressedError&&SuppressedError;var o={exports:{}};function i(){}i.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,s=n.length;i<s;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},o.exports=i;var s=o.exports.TinyEmitter=i;function a(t,e,r){throw(r=new TypeError(t)).code=e,r}function c(t){a("Invalid URL: "+t,"ERR_INVALID_URL")}function u(t,e,r,n){r='The "name" ',n="argument",t&&(r+='and "value" ',n+="s"),e<++t&&a(r+n+" must be specified","ERR_MISSING_ARGS")}function h(t,e){var r=0,n={next:function(){return{value:t[r++],done:r>t.length}}};return e&&(n[Symbol.iterator]=function(){return n}),n}function l(t,e){var r,n,o,i,s,c=this,l=[];try{i=!!Symbol.iterator}catch(t){i=!1}if(t)if(t.keys&&t.getAll)t.forEach((function(t,e){p(e,t)}));else if(t.pop)for(n=0;n<t.length;n++)p.apply(0,t[n]);else if("object"==typeof t)for(r in t)f(r,t[r]);else if("string"==typeof t)for("?"==t[0]&&(t=t.substring(1)),o=decodeURIComponent(t).split("&");r=o.shift();)~(n=r.indexOf("="))||(n=r.length),p(r.substring(0,n),r.substring(++n));function f(t,e){for(u(1,arguments.length),e=String(e),o=!1,n=l.length;n--;)(s=l[n])[0]==t&&(o?l.splice(n,1):(s[1]=e,o=!0));o||l.push([t,e]),g()}function p(t,e){u(1,arguments.length),l.push([t,String(e)]),g()}function d(){for(s="",n=0;n<l.length;n++)s&&(s+="&"),s+=encodeURIComponent(l[n][0])+"="+encodeURIComponent(l[n][1]);return s.replace(/%20/g,"+")}function g(){e&&(e.search=l.length?"?"+d().replace(/=$/,""):"")}return c.append=p,c.delete=function(t){for(u(0,arguments.length),n=l.length;n--;)l[n][0]==t&&l.splice(n,1);g()},c.entries=function(){return h(l,i)},c.forEach=function(t){for("function"!=typeof t&&a("Callback must be a function","ERR_INVALID_CALLBACK"),n=0;n<l.length;n++)t(l[n][1],l[n][0])},c.get=function(t){for(u(0,arguments.length),n=0;n<l.length;n++)if(l[n][0]==t)return l[n][1];return null},c.getAll=function(t){for(u(0,arguments.length),s=[],n=0;n<l.length;n++)l[n][0]==t&&s.push(l[n][1]);return s},c.has=function(t){for(u(0,arguments.length),n=0;n<l.length;n++)if(l[n][0]==t)return!0;return!1},c.keys=function(){for(s=[],n=0;n<l.length;n++)s.push(l[n][0]);return h(s,i)},c.set=f,c.sort=function(){for(o=[],s=[],n=0;n<l.length;o.push(l[n++][0]));for(o.sort();r=o.shift();)for(n=0;n<l.length;n++)if(l[n][0]==r){s.push(l.splice(n,1).shift());break}l=s,g()},c.toString=d,c.values=function(){for(s=[],n=0;n<l.length;n++)s.push(l[n][1]);return h(s,i)},i&&(c[Symbol.iterator]=c.entries),c}function f(t,e){var r,n,o=document.createElement("a"),i=document.createElement("a"),s=document.createElement("input"),a=this,u=/(blob|ftp|wss?|https?):/;if(s.type="url",e=String(e||"").trim(),(s.value=e)&&!s.checkValidity())return c(e);if(t=String(t).trim(),s.value=t||0,s.checkValidity())i.href=t;else{if(!e)return c(t);i.href=e,t&&((n=t.match(/^\/+/))&&2==n[0].length?i.href=i.protocol+t:/[?#]/.test(t[0])?i.href+=t:"/"==t[0]||"/"==i.pathname?i.href=i.origin+"/"+t.replace(/^\/+/,""):(r=i.pathname.split("/"),e=t.replace(/^(\.\/)?/,"").split("../"),i.href=i.origin+r.slice(0,Math.max(1,r.length-e.length)).concat(e.pop()).join("/")))}function h(t,e,r,s){return s={enumerable:!0},e||(s.set=function(e){null!=e&&(i[t]=String(e),"href"!=t&&"search"!=t||(n=new l(i.search,i)))}),s.get=r||function(){return function(t){return o.href=i.href,o.protocol="http:","protocol"==t||"href"==t||u.test(i.protocol)?i[t]:"origin"==t?u.test(i.protocol)?i[t]:"null":o[t]}(t)},s}return n=new l(i.search,i),a.toString=a.toJSON=i.toString.bind(i),Object.defineProperties(a,{href:h("href"),protocol:h("protocol"),username:h("username"),password:h("password"),hostname:h("hostname"),host:h("host"),port:h("port"),search:h("search"),hash:h("hash"),pathname:h("pathname"),origin:h("origin",1),searchParams:h("searchParams",1,(function(){return n}))})}let p;const d=new Uint8Array(16);function g(){if(!p&&(p="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(d)}const v=[];for(let t=0;t<256;++t)v.push((t+256).toString(16).slice(1));var m={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function y(t,e,r){if(m.randomUUID&&!e&&!t)return m.randomUUID();const n=(t=t||{}).random||(t.rng||g)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return v[t[e+0]]+v[t[e+1]]+v[t[e+2]]+v[t[e+3]]+"-"+v[t[e+4]]+v[t[e+5]]+"-"+v[t[e+6]]+v[t[e+7]]+"-"+v[t[e+8]]+v[t[e+9]]+"-"+v[t[e+10]]+v[t[e+11]]+v[t[e+12]]+v[t[e+13]]+v[t[e+14]]+v[t[e+15]]}(n)}var b=function(){function t(){}return t.prototype.generateEventId=function(){return y()},t.prototype.createImpressionEvent=function(t,r,n,o,i,s){var a=this.createBaseEvent(t,r,n,o,i);return s?e(e({},a),{variant:s}):a},t.prototype.createBaseEvent=function(t,e,r,n,o){return{eventType:n,eventId:this.generateEventId(),context:t,enabled:e,featureName:r,impressionData:o}},t}(),w=function(t){var e=t[1];return null!=e},E=function(){},S=function(){function t(t){var e=t.onError,r=t.onSent,n=t.appName,o=t.metricsInterval,i=t.disableMetrics,s=void 0!==i&&i,a=t.url,c=t.clientKey,u=t.fetch,h=t.headerName,l=t.customHeaders,f=void 0===l?{}:l;this.onError=e,this.onSent=r||E,this.disabled=s,this.metricsInterval=1e3*o,this.appName=n,this.url=a instanceof URL?a:new URL(a),this.clientKey=c,this.bucket=this.createEmptyBucket(),this.fetch=u,this.headerName=h,this.customHeaders=f}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&setTimeout((function(){t.startTimer(),t.sendMetrics()}),2e3)},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t);return Object.entries(this.customHeaders).filter(w).forEach((function(t){var r=t[0],n=t[1];return e[r]=n})),e},t.prototype.sendMetrics=function(){return r(this,void 0,void 0,(function(){var t,e,r;return n(this,(function(n){switch(n.label){case 0:if(t="".concat(this.url,"/client/metrics"),e=this.getPayload(),this.bucketIsEmpty(e))return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:this.getHeaders(),body:JSON.stringify(e)})];case 2:return n.sent(),this.onSent(e),[3,4];case 3:return r=n.sent(),console.error("Unleash: unable to send feature metrics",r),this.onError(r),[3,4];case 4:return[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket)&&(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,!0)},t.prototype.countVariant=function(t,e){return!(this.disabled||!this.bucket)&&(this.assertBucket(t),this.bucket.toggles[t].variants[e]?this.bucket.toggles[t].variants[e]+=1:this.bucket.toggles[t].variants[e]=1,!0)},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0,variants:{}})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=e(e({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}(),I=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){return n(this,(function(r){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,this.store.get(t)]}))}))},t}(),x=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){var r,o;return n(this,(function(n){r=JSON.stringify(e),o="".concat(this.prefix,":").concat(t);try{window.localStorage.setItem(o,r)}catch(t){console.error(t)}return[2]}))}))},t.prototype.get=function(t){try{var e="".concat(this.prefix,":").concat(t),r=window.localStorage.getItem(e);return r?JSON.parse(r):void 0}catch(t){console.error(t)}},t}(),R=["userId","sessionId","remoteAddress","currentTime"],T=function(t){return R.includes(t)},k={INIT:"initialized",ERROR:"error",READY:"ready",UPDATE:"update",IMPRESSION:"impression",SENT:"sent",RECOVERED:"recovered"},O="isEnabled",A="getVariant",N={name:"disabled",enabled:!1,feature_enabled:!1},C="repo",D=function(){try{if("undefined"!=typeof window&&"fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}},U=function(o){function i(t){var r=t.storageProvider,n=t.url,i=t.clientKey,s=t.disableRefresh,a=void 0!==s&&s,c=t.refreshInterval,u=void 0===c?30:c,h=t.metricsInterval,l=void 0===h?30:h,p=t.disableMetrics,d=void 0!==p&&p,g=t.appName,v=t.environment,m=void 0===v?"default":v,y=t.context,w=t.fetch,E=void 0===w?D():w,R=t.createAbortController,T=void 0===R?function(){try{if("undefined"!=typeof window&&"AbortController"in window)return function(){return new window.AbortController};if("fetch"in globalThis)return function(){return new globalThis.AbortController}}catch(t){console.error('Unleash failed to resolve "AbortController" factory',t)}}():R,O=t.bootstrap,A=t.bootstrapOverride,N=void 0===A||A,C=t.headerName,U=void 0===C?"Authorization":C,P=t.customHeaders,j=void 0===P?{}:P,_=t.impressionDataAll,M=void 0!==_&&_,H=t.usePOSTrequests,V=void 0!==H&&H,K=o.call(this)||this;if(K.toggles=[],K.etag="",K.readyEventEmitted=!1,K.usePOSTrequests=!1,K.started=!1,!n)throw new Error("url is required");if(!i)throw new Error("clientKey is required");if(!g)throw new Error("appName is required.");return K.eventsHandler=new b,K.impressionDataAll=M,K.toggles=O&&O.length>0?O:[],K.url=n instanceof f?n:new f(n),K.clientKey=i,K.headerName=U,K.customHeaders=j,K.storage=r||("undefined"!=typeof window?new x:new I),K.refreshInterval=a?0:1e3*u,K.context=e({appName:g,environment:m},y),K.usePOSTrequests=V,K.sdkState="initializing",K.ready=new Promise((function(t){K.init().then(t).catch((function(e){console.error(e),K.sdkState="error",K.emit(k.ERROR,e),t()}))})),E||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),T||console.error('Unleash: You must either provide your own "AbortController" implementation or run in an environment where "AbortController" is available.'),K.fetch=E,K.createAbortController=T,K.bootstrap=O&&O.length>0?O:void 0,K.bootstrapOverride=N,K.metrics=new S({onError:K.emit.bind(K,k.ERROR),onSent:K.emit.bind(K,k.SENT),appName:g,metricsInterval:l,disableMetrics:d,url:K.url,clientKey:i,fetch:E,headerName:U,customHeaders:j}),K}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}(i,o),i.prototype.getAllToggles=function(){return function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],this.toggles,!0)},i.prototype.isEnabled=function(t){var e,r=this.toggles.find((function(e){return e.name===t})),n=!!r&&r.enabled;if(this.metrics.count(t,n),(null==r?void 0:r.impressionData)||this.impressionDataAll){var o=this.eventsHandler.createImpressionEvent(this.context,n,t,O,null!==(e=null==r?void 0:r.impressionData)&&void 0!==e?e:void 0);this.emit(k.IMPRESSION,o)}return n},i.prototype.getVariant=function(t){var r,n=this.toggles.find((function(e){return e.name===t})),o=(null==n?void 0:n.enabled)||!1,i=n?n.variant:N;if(i.name&&this.metrics.countVariant(t,i.name),this.metrics.count(t,o),(null==n?void 0:n.impressionData)||this.impressionDataAll){var s=this.eventsHandler.createImpressionEvent(this.context,o,t,A,null!==(r=null==n?void 0:n.impressionData)&&void 0!==r?r:void 0,i.name);this.emit(k.IMPRESSION,s)}return e(e({},i),{feature_enabled:o})},i.prototype.updateToggles=function(){return r(this,void 0,void 0,(function(){var t=this;return n(this,(function(e){switch(e.label){case 0:return this.timerRef||this.readyEventEmitted?[4,this.fetchToggles()]:[3,2];case 1:return e.sent(),[3,4];case 2:return this.started?[4,new Promise((function(e){var r=function(){t.fetchToggles().then((function(){t.off(k.READY,r),e()}))};t.once(k.READY,r)}))]:[3,4];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},i.prototype.updateContext=function(t){return r(this,void 0,void 0,(function(){var r;return n(this,(function(n){switch(n.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),r={environment:this.context.environment,appName:this.context.appName,sessionId:this.context.sessionId},this.context=e(e({},r),t),[4,this.updateToggles()];case 1:return n.sent(),[2]}}))}))},i.prototype.getContext=function(){return e({},this.context)},i.prototype.setContextField=function(t,r){var n,o;if(T(t))this.context=e(e({},this.context),((n={})[t]=r,n));else{var i=e(e({},this.context.properties),((o={})[t]=r,o));this.context=e(e({},this.context),{properties:i})}this.updateToggles()},i.prototype.removeContextField=function(t){var r;T(t)?this.context=e(e({},this.context),((r={})[t]=void 0,r)):"object"==typeof this.context.properties&&delete this.context.properties[t],this.updateToggles()},i.prototype.init=function(){return r(this,void 0,void 0,(function(){var t,r;return n(this,(function(n){switch(n.label){case 0:return[4,this.resolveSessionId()];case 1:return t=n.sent(),this.context=e({sessionId:t},this.context),r=this,[4,this.storage.get(C)];case 2:return r.toggles=n.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(C,this.bootstrap)];case 3:n.sent(),this.toggles=this.bootstrap,this.emit(k.READY),n.label=4;case 4:return this.sdkState="healthy",this.emit(k.INIT),[2]}}))}))},i.prototype.start=function(){return r(this,void 0,void 0,(function(){var t,e=this;return n(this,(function(r){switch(r.label){case 0:return this.started=!0,this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return r.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return r.sent(),t>0&&(this.timerRef=setInterval((function(){return e.fetchToggles()}),t)),[2]}}))}))},i.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},i.prototype.resolveSessionId=function(){return r(this,void 0,void 0,(function(){var t;return n(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[4,this.storage.get("sessionId")];case 1:return(t=e.sent())?[3,3]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 2:e.sent(),e.label=3;case 3:return[2,t]}}))}))},i.prototype.getHeaders=function(){var t,e=this.usePOSTrequests,r=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t);return e&&(r["Content-Type"]="application/json"),this.etag&&(r["If-None-Match"]=this.etag),Object.entries(this.customHeaders).filter(w).forEach((function(t){var e=t[0],n=t[1];return r[e]=n})),r},i.prototype.storeToggles=function(t){return r(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return this.toggles=t,this.emit(k.UPDATE),[4,this.storage.save(C,t)];case 1:return e.sent(),[2]}}))}))},i.prototype.fetchToggles=function(){return r(this,void 0,void 0,(function(){var t,e,r,o,i,s,a,c;return n(this,(function(n){switch(n.label){case 0:if(!this.fetch)return[3,9];this.abortController&&this.abortController.abort(),this.abortController=this.createAbortController&&this.createAbortController(),t=this.abortController?this.abortController.signal:void 0,n.label=1;case 1:return n.trys.push([1,7,8,9]),e=this.usePOSTrequests,r=e?this.url:function(t,e){var r=new f(t.toString());return Object.entries(e).filter(w).forEach((function(t){var e=t[0],n=t[1];"properties"===e&&n?Object.entries(n).filter(w).forEach((function(t){var e=t[0],n=t[1];return r.searchParams.append("properties[".concat(e,"]"),n)})):r.searchParams.append(e,n)})),r}(this.url,this.context),o=e?"POST":"GET",i=e?JSON.stringify({context:this.context}):void 0,[4,this.fetch(r.toString(),{method:o,cache:"no-cache",headers:this.getHeaders(),body:i,signal:t})];case 2:return s=n.sent(),"error"===this.sdkState&&s.status<400&&(this.sdkState="healthy",this.emit(k.RECOVERED)),s.ok&&304!==s.status?(this.etag=s.headers.get("ETag")||"",[4,s.json()]):[3,5];case 3:return a=n.sent(),[4,this.storeToggles(a.toggles)];case 4:return n.sent(),"healthy"!==this.sdkState&&(this.sdkState="healthy"),this.bootstrap||this.readyEventEmitted||(this.emit(k.READY),this.readyEventEmitted=!0),[3,6];case 5:s.ok||304===s.status||(console.error("Unleash: Fetching feature toggles did not have an ok response"),this.sdkState="error",this.emit(k.ERROR,{type:"HttpError",code:s.status})),n.label=6;case 6:return[3,9];case 7:return c=n.sent(),console.error("Unleash: unable to fetch feature toggles",c),this.sdkState="error",this.emit(k.ERROR,c),[3,9];case 8:return this.abortController=null,[7];case 9:return[2]}}))}))},i}(s);exports.EVENTS=k,exports.InMemoryStorageProvider=I,exports.LocalStorageProvider=x,exports.UnleashClient=U,exports.resolveFetch=D;
//# sourceMappingURL=index.cjs.map
