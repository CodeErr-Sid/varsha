try{(function(w,d){zaraz.debug=(nn="")=>{document.cookie=`zarazDebug=${nn}; path=/`;location.reload()};window.zaraz._al=function(nv,nw,nx){w.zaraz.listeners.push({item:nv,type:nw,callback:nx});nv.addEventListener(nw,nx)};zaraz.preview=(ny="")=>{document.cookie=`zarazPreview=${ny}; path=/`;location.reload()};zaraz.i=function(bC){const bD=d.createElement("div");bD.innerHTML=unescape(bC);const bE=bD.querySelectorAll("script");for(let bF=0;bF<bE.length;bF++){const bG=d.createElement("script");bE[bF].innerHTML&&(bG.innerHTML=bE[bF].innerHTML);for(const bH of bE[bF].attributes)bG.setAttribute(bH.name,bH.value);d.head.appendChild(bG);bE[bF].remove()}d.body.appendChild(bD)};zaraz.f=async function(oi,oj){const ok={credentials:"include",keepalive:!0,mode:"no-cors"};if(oj){ok.method="POST";ok.body=new URLSearchParams(oj);ok.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(oi,ok)};window.zaraz._p=async bo=>new Promise((bp=>{if(bo){bo.e&&bo.e.forEach((bq=>{try{new Function(bq)()}catch(br){console.error(`Error executing script: ${bq}\n`,br)}}));Promise.allSettled((bo.f||[]).map((bs=>fetch(bs[0],bs[1]))))}bp()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(nN,nO,nP){return new Promise(((nQ,nR)=>{const nS={name:nN,data:{}};for(const nT of[localStorage,sessionStorage])Object.keys(nT||{}).filter((nV=>nV.startsWith("_zaraz_"))).forEach((nU=>{try{nS.data[nU.slice(7)]=JSON.parse(nT.getItem(nU))}catch{nS.data[nU.slice(7)]=nT.getItem(nU)}}));Object.keys(zaraz.pageVariables).forEach((nW=>nS.data[nW]=JSON.parse(zaraz.pageVariables[nW])));Object.keys(zaraz.__zcl).forEach((nX=>nS.data[`__zcl_${nX}`]=zaraz.__zcl[nX]));nS.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
nS.data={...nS.data,...nO};nS.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(nS)}).catch((()=>{
//
return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(nS)})})).then((function(nZ){zarazData._let=(new Date).getTime();nZ.ok||nR();return 204!==nZ.status&&nZ.json()})).then((async nY=>{await zaraz._p(nY);"function"==typeof nP&&nP()})).finally((()=>nQ()))}))};zaraz.set=function(n$,oa,ob){try{oa=JSON.stringify(oa)}catch(oc){return}prefixedKey="_zaraz_"+n$;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[n$];if(void 0!==oa){ob&&"session"==ob.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,oa):ob&&"page"==ob.scope?zaraz.pageVariables[n$]=oa:localStorage&&localStorage.setItem(prefixedKey,oa);zaraz.__watchVar={key:n$,value:oa}}};for(const{m:od,a:oe}of zarazData.q.filter((({m:of})=>["debug","set"].includes(of))))zaraz[od](...oe);for(const{m:og,a:oh}of zaraz.q)zaraz[og](...oh);delete zaraz.q;delete zarazData.q;zaraz.spaPageview=()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")};zaraz.fulfilTrigger=function(qb,qc,qd,qe){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[qb]||(zaraz.__zarazTriggerMap[qb]="");zaraz.__zarazTriggerMap[qb]+="*"+qc+"*";zaraz.track("__zarazEmpty",{...qd,__zarazClientTriggers:zaraz.__zarazTriggerMap[qb]},qe)};zaraz._processDataLayer=oI=>{for(const oJ of Object.entries(oI))zaraz.set(oJ[0],oJ[1],{scope:"page"});if(oI.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(oI.event))return;let oK={};for(let oL of dataLayer.slice(0,dataLayer.indexOf(oI)+1))oK={...oK,...oL};delete oK.event;oI.event.startsWith("gtm.")||zaraz.track(oI.event,oK)}};window.dataLayer=w.dataLayer||[];const oH=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...oM){let oN=oH.apply(this,oM);zaraz._processDataLayer(oM[0]);return oN}});dataLayer.forEach((oO=>zaraz._processDataLayer(oO)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((pz=>clearTimeout(pz)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((pA=>pA.item.removeEventListener(pA.type,pA.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout(zaraz.spaPageview,100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout(zaraz.spaPageview,100)}};zaraz._c=b$=>{const{event:ca,...cb}=b$;zaraz.track(ca,{...cb,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(a=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.__zarazMCListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=1e2393f5-a160-4a4e-a6cc-1034ae172ed7&_u=KGDAAEADQAAAAC%7E&z=697314833\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=1e2393f5-a160-4a4e-a6cc-1034ae172ed7&_u=KGDAAEADQAAAAC%7E&z=697314833&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();"],"f":[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=1e2393f5-a160-4a4e-a6cc-1034ae172ed7&_u=KGDAAEADQAAAAC%7E&z=697314833&slf_rd=1",{}]]})})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;}