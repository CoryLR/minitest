(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{spaCheck:()=>i});var t=function(e,o,t,i){return new(t||(t=Promise))((function(n,s){function r(e){try{d(i.next(e))}catch(e){s(e)}}function a(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(r,a)}d((i=i.apply(e,o||[])).next())}))};function i(e,o={}){return t(this,void 0,void 0,(function*(){let i;const n=[];let s,r,a,d=!1,c=!0;const l={arrow:void 0,arrowShadow:void 0,focusBox:void 0,message:void 0,style:void 0,tooltip:void 0,tooltipShadow:void 0};if(s=Object.freeze(Object.assign(Object.assign({},{awaitTimeout:15e3,continueOnFailure:!1,displayMessage:!0,displayProgress:!0,displaySpeed:1,globalDelay:500,logCollapse:!1,logProgress:!0,logResult:!0,message:"SPA Check",messageAttribution:"SPA Check",overrideCss:"",separator:" ",tutorialMode:!1}),o)),r=s.message?`[SPA Check] ${s.message}`:"[SPA Check]",!function(){if("undefined"==typeof document){let e="FAIL: document is undefined. SPA Check can only be used in the browser. Halting execution.";return s.logProgress&&console.error(e),n.push(e),!1}const e=document.querySelector("body > .spa-check-message");if(e){let o=`FAIL: SPA Check '${e.getAttribute("data-spa-check-message")}' is already running. Halting execution.`;return s.logProgress&&console.error(o),n.push(o),!1}return!0}()){const e={success:!1,log:n,message:s.message};return S(e,!1),e}var p;(s.displayMessage||s.displayProgress)&&function(){t(this,void 0,void 0,(function*(){l.style=document.createElement("style"),l.style.textContent="\n      body > .spa-check-message {\n        font: 20px Georgia;\n        padding: 18px 12px 6px 12px;\n        z-index: 9999;\n        position: fixed;\n        top: 0;\n        right: 10%;\n        color: black;\n        background-color: rgba(250,250,250,0.8);\n        text-align: right;\n        border-radius: 0 0 12px 12px;\n        max-width: 80vw;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        border: 2px solid rgb(180,180,180);\n        border-top: 0;\n      }\n      body > .spa-check-message > .spa-check-footer {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n      }\n      body .spa-check-footer .spa-check-play,\n      body .spa-check-footer .spa-check-pause,\n      body .spa-check-footer .spa-check-stop {\n        padding: 4px;\n      }\n      body .spa-check-footer .spa-check-play:hover,\n      body .spa-check-footer .spa-check-pause:hover,\n      body .spa-check-footer .spa-check-stop:hover {\n        cursor: pointer;\n      }\n      body > .spa-check-message > .spa-check-footer .spa-check-play-icon {\n        width: 0;\n        height: 0;\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        border-left: 8px solid rgb(191, 191, 191);\n      }\n      body > .spa-check-message > .spa-check-footer .spa-check-pause-icon {\n        width: 2px;\n        height: 8px;\n        border-left: 3px solid rgb(191, 191, 191);\n        border-right: 3px solid rgb(191, 191, 191);\n      }\n      body > .spa-check-message > .spa-check-footer .spa-check-stop-icon {\n        height: 8px;\n        width: 8px;\n        background-color: rgb(191, 191, 191);\n      }\n      body .spa-check-footer .spa-check-play:hover .spa-check-play-icon {\n        border-left: 8px solid rgb(80, 80, 80);\n      }\n      body .spa-check-footer .spa-check-pause:hover .spa-check-pause-icon {\n        border-left: 3px solid rgb(80, 80, 80);\n        border-right: 3px solid rgb(80, 80, 80);\n      }\n      body .spa-check-footer .spa-check-stop:hover .spa-check-stop-icon {\n        background-color: rgb(80, 80, 80);\n      }\n      body > .spa-check-message > .spa-check-footer > .spa-check-attribution {\n        margin-left: auto;\n        padding-left: 5px;\n        font-size: 12px;\n        color: dimgray;\n      }\n      body > .spa-check-focus-box {\n        z-index: 9997;\n        visibility: hidden;\n        position: absolute;\n        background-color: rgba(255,255,255,0.2);\n        border: 2px solid white;\n        box-shadow: 0 0 0 2px rgb(0,0,0);\n        pointer-events: none;\n      }\n      body > .spa-check-tooltip {\n        z-index: 9999;\n        visibility: hidden;\n        font: 14px Georgia;\n        position: absolute;\n        background-color: rgb(245,245,245);\n        color: black;\n        text-align: center;\n        padding: 10px;\n        border-radius: 10px;\n        max-width: 200px;\n      }\n      body > .spa-check-tooltip-error {\n        color: darkred;\n      }\n      body > .spa-check-arrow {\n        z-index: 9999;\n        visibility: hidden;\n        width: 0;\n        height: 0;\n        position: absolute;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 10px solid rgb(245,245,245); \n      }\n      body > .spa-check-arrow-shadow {\n        z-index: 9998;\n        border-left: 14px solid transparent;\n        border-right: 14px solid transparent;\n        border-bottom: 14px solid rgb(180,180,180);\n        margin: -3px 0 0 -4px;\n      }\n      body > .spa-check-tooltip-shadow {\n        z-index: 9998;\n        color: transparent;\n        border: 2px solid rgb(180,180,180);\n        background-color: rgb(180,180,180);\n        margin: -2px 0 0 -2px;\n        border-radius: 12px;\n      }\n      body > .spa-check-fade-in {\n        visibility: visible;\n        animation: spaCheckfadeIn 150ms; \n      }\n      body > .spa-check-fade-out {\n        opacity: 0;\n        animation: spaCheckfadeOut 150ms; \n      }\n      @keyframes spaCheckfadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      @keyframes spaCheckfadeOut {\n        0% { opacity: 1; }\n        100% { opacity: 0; }\n      }\n    ",l.style.textContent+=s.overrideCss,document.querySelector("body").appendChild(l.style)}))}(),s.logProgress&&(s.logCollapse?console.groupCollapsed(r):console.group(r)),p=s.message,l.message=document.createElement("div"),l.message.innerHTML=`\n      ${p}\n      <div class="spa-check-footer">\n        <div class="spa-check-play"><div class="spa-check-play-icon"></div></div>\n        <div class="spa-check-pause"><div class="spa-check-pause-icon"></div></div>\n        <div class="spa-check-stop"><div class="spa-check-stop-icon"></div></div>\n        <div class="spa-check-attribution">${s.messageAttribution}</div>\n      </div>\n    `,l.message.setAttribute("data-spa-check-message",p),l.message.classList.add("spa-check-message"),s.displayMessage||(l.message.style.visibility="hidden"),document.querySelector("body").appendChild(l.message),document.querySelector(".spa-check-message .spa-check-play").addEventListener("click",(()=>{alert("Play works!")}));const u=yield function(e,o){return t(this,void 0,void 0,(function*(){let t=!0;return void 0===e?(t=!1,yield P("Missing required argument Action List","",!1)):Array.isArray(e)||"string"==typeof e||(t=!1,yield P("Action list argument is not an Array or string","",!1)),void 0===o||"object"==typeof o&&!Array.isArray(o)||(t=!1,yield P("Options argument is not an Object","",!1)),t}))}(e,o);if(!u)return $();"string"==typeof e?i=e.split("\n").map((e=>e.trimStart())):Array.isArray(e)&&(i=e.map((e=>"string"==typeof e?e.trimStart():e)));for(const e of i){if(!c)return $();yield B(s.globalDelay);try{yield f(e)}catch(e){yield P("Unexpected error: "+e.message)}}return $();function f(e){return t(this,void 0,void 0,(function*(){if("string"==typeof e)yield function(e){return t(this,void 0,void 0,(function*(){const o=e.replace("!","").substring(0,3);if("nav"===o){const o=e.split(s.separator)[1];o&&"#"===o[0]?(yield g((()=>{window.location.href=o}),`Navigating to ${o}`,void 0,!s.tutorialMode),M(`Navigated to ${o}`)):yield P("Unexpected nav action, got",e)}else if("cli"===o){const[o,t,i]=yield C(e),n=k(t,i);if(i){const e=b(t);a=void 0,v(e,i,m),a?(yield g((()=>{a.click()}),`Clicking ${a.tagName.toLowerCase()} with text '${i}'`,a,!s.tutorialMode),M(`Clicked text '${i}' inside ${t} (clicked on ${a.tagName.toLowerCase()})`)):yield P("Could not find selector to click",n),a=void 0}else{const e=yield h(t);if(!e)return;yield g((()=>{e.click()}),`Clicking ${e.tagName.toLowerCase()}`,e,!s.tutorialMode),M(`Clicked ${t}`)}}else if("exi"===o){let[o,t,i]=yield C(e),n=!1;"!"===e[0]&&(n=!0);const r=k(t,i);let d,c=!1;if(i){const e=b(t,!1);a=void 0,v(e,i,m),a&&(d=a,c=!0)}else{const e=y(t,!1);e&&(c=!0,d=e)}c&&!n?(s.tutorialMode||(yield L(d,`Confirmed exists: ${r}`,"info")),s.tutorialMode||(yield A()),M(`Confirmed exists: ${r}`)):c||n?c&&n?(s.tutorialMode||(yield L(d,`Incorrectly exists: ${r}`,"error")),s.tutorialMode||(yield A()),yield P(`Incorrectly exists: ${r}`)):!c&&n&&(s.tutorialMode||(yield L(l.message,`Confirmed does not exist: ${r}`,"info",!0)),s.tutorialMode||(yield A()),M(`Confirmed does not exist: ${r}`)):yield P("Did not exist",r),a=void 0}else if("fil"===o){const[o,t,i]=yield w(e),n=yield h(t);if(!n)return;yield g((()=>{n.value=i,n.dispatchEvent(new InputEvent("input"))}),`Filling value of ${n.tagName.toLowerCase()}`,n,!s.tutorialMode),M(`Filled the value of ${t} to '${i}'`)}else if("wri"===o||"app"===o){const[t,i,n]=yield w(e),r=yield h(i);if(!r)return;let a=n||"";"wri"===o?(yield g((()=>{r.textContent=a}),`Writing over ${i}`,r,!s.tutorialMode),M(`Wrote '${a}' over ${i}`)):(yield g((()=>{r.textContent+=a}),`Appending text to ${i}`,r,!s.tutorialMode),M(`Appended '${a}' to ${i}`))}else if("log"===o){let o,t;" "!==s.separator?[o,t]=e.split(s.separator):[o,t]=e.split(/ (.*)/s),yield g((()=>{M(t)}),`${t}`)}else if("com"===o){const[o,t,i]=yield C(e);if(!i)return void(yield P(`Value was not provided for comment action '${e}'`));const n=yield h(t);if(!n)return;yield L(n,i,"info"),yield A()}else if("wai"===o){const[o,i]=e.split(s.separator);M(`Waiting ${Number(i)/1e3} second(s)`),yield g((()=>t(this,void 0,void 0,(function*(){yield B(Number(i))}))),`Waiting ${Number(i)/1e3} second(s)`,void 0,!s.tutorialMode)}else if("awa"===o){let[o,t,i]=yield C(e),n=!1;"!"===e[0]&&(n=!0);const r=s.awaitTimeout/s.globalDelay*2;let d,c=!1;const p=k(t,i);M(`Awaiting ${p}...`);const u=n?`Awaiting ${p} to not exist...`:`Awaiting ${p}...`;s.tutorialMode||(yield L(l.message,u,"info",!0));for(let e=0;e<r;e++){if(i){const e=Array.from(b(t.replace(/>>/g," ")));for(const o of e)if(o&&o.textContent&&o.textContent.toLowerCase().includes(i.toLowerCase())){c=!0,a=void 0,v([o],i,m),d=a;break}}else{const e=y(t);e&&(c=!0,d=e)}if(c&&!n)break;if(!c&&n)break;c=!1,yield B(s.globalDelay/2)}s.tutorialMode||(yield A()),c&&!n?(s.tutorialMode||(yield L(d,`...Found ${p}`,"info")),s.tutorialMode||(yield A()),M(`...Found ${p}`)):c||n?c&&n?(s.tutorialMode||(yield L(d,`...Timed out awaiting ${p} to not exist`,"error")),s.tutorialMode||(yield A()),yield P(`...Timed out awaiting ${p} to not exist`)):!c&&n&&M(`...${p} disappeared`):yield P(`Timed out after ${s.awaitTimeout/1e3} second(s) awaiting`,p)}else""===e||(yield P("Action string keyword not recognized, got",e))}))}(e);else if("function"==typeof e)try{yield g(e,"Running provided function",void 0,!s.tutorialMode),M("Ran provided function")}catch(o){yield A(),yield P("Error running provided function",o+"; function: "+e.toString())}else yield P("Action is not of type string or function, got",typeof e)}))}function g(e,o,i,n=!0){return t(this,void 0,void 0,(function*(){let t=!1;i||(i=l.message?l.message:document.body,t=!0),n&&(yield L(i,o,"info",t)),yield e(),n&&(yield A())}))}function h(e){return t(this,void 0,void 0,(function*(){const o=y(e);return o||(yield P("CSS Selector not found",e.replace(/>>/g," "))),o}))}function y(e,o=!0){const t=e.replace(/>>/g," ");return document.querySelector(t)}function b(e,o=!0){const t=e.replace(/>>/g," ");return document.querySelectorAll(t)}function v(e,o,t=(e=>"SCRIPT"!==e.tagName)){for(const i of e)x(i,o)&&(t(i)&&(a=i),v(Array.from(i.childNodes).filter((e=>{if(t(e))return e})),o,t))}function m(e){return e.click&&"SCRIPT"!==e.tagName}function x(e,o){const t=o.toLowerCase(),i=e.textContent&&e.textContent.toLowerCase().includes(t),n="string"==typeof e.value&&e.value.toLowerCase().includes(t);return i||n}function k(e,o){return`'${e}'`+(o?` containing text '${o}'`:"")}function w(e){return t(this,void 0,void 0,(function*(){if(" "!==s.separator)return e.split(s.separator);const o=e.split(/ ([^\s]+) (.*)/s);return o.length<3&&(yield P("Unexpected input with data, got",e)),o[1]=o[1].replace(/>>/g," "),o}))}function C(e){return t(this,void 0,void 0,(function*(){const o=e.split(s.separator);return" "!==s.separator?o:o.length>2?yield w(e):(o[1]=o[1].replace(/>>/g," "),o)}))}function S(e,o=!0){return t(this,void 0,void 0,(function*(){const t=s.logProgress?"":r;s.logResult&&console.log(`${t} Result:`,e),s.logProgress&&o&&console.groupEnd()}))}function $(){return t(this,void 0,void 0,(function*(){!function(){t(this,void 0,void 0,(function*(){for(const e in l)l[e]&&l[e].parentNode&&l[e].remove&&l[e].remove()}))}();const e=!d,o={success:e,log:n,message:s.message};return M(`Done, success: ${e}`),S(o),o}))}function L(e,o,i="info",n){return t(this,void 0,void 0,(function*(){if(!s.displayProgress)return;const r=document.body.getBoundingClientRect(),a=e.getBoundingClientRect(),d=n?0:window.pageYOffset||e.scrollTop||document.body.scrollTop,c=window.pageXOffset||e.scrollLeft||document.body.scrollLeft;l.focusBox=document.createElement("div"),l.focusBox.classList.add("spa-check-focus-box"),l.arrow=document.createElement("div"),l.arrow.classList.add("spa-check-arrow"),l.tooltip=document.createElement("div"),l.tooltip.classList.add("spa-check-tooltip"),"error"===i&&l.tooltip.classList.add("spa-check-tooltip-error"),l.tooltip.textContent=o.replace(/>>/g," "),document.body.appendChild(l.focusBox),document.body.appendChild(l.arrow),document.body.appendChild(l.tooltip);const p=l.tooltip.getBoundingClientRect().width;let u=a.bottom+10+d,f=a.left+c+a.width/2-10,g=a.left+c+a.width/2-p/2;f<8?f=8:r.right+c-f<20&&(f=r.right+c-20),g<0&&(g=0),n&&(l.focusBox.style.display="none",l.arrow.style.display="none",l.tooltip.style.position="fixed",f-=c,u-=5,g-=c),l.arrow.style.top=String(a.bottom+d+2)+"px",l.arrow.style.left=String(f)+"px",l.tooltip.style.top=String(u+2)+"px",l.tooltip.style.left=String(g)+"px",l.focusBox.style.top=String(a.top+d-2)+"px",l.focusBox.style.left=String(a.left+c-2)+"px",l.focusBox.style.width=String(a.width)+"px",l.focusBox.style.height=String(a.height)+"px",l.arrowShadow=l.arrow.cloneNode(!0),l.tooltipShadow=l.tooltip.cloneNode(!0),l.arrowShadow.classList.add("spa-check-arrow-shadow"),l.tooltipShadow.classList.add("spa-check-tooltip-shadow"),document.body.appendChild(l.arrowShadow),document.body.appendChild(l.tooltipShadow),yield function(e){return t(this,void 0,void 0,(function*(){(function(e){var o=e.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(o.bottom<0||o.top-t>=0)})(e)||(e.scrollIntoView({behavior:"smooth"}),yield B(700))}))}(e),l.focusBox.classList.add("spa-check-fade-in"),l.arrowShadow.classList.add("spa-check-fade-in"),l.tooltipShadow.classList.add("spa-check-fade-in"),l.arrow.classList.add("spa-check-fade-in"),l.tooltip.classList.add("spa-check-fade-in");let h=30*o.length<2e3?30*o.length:2e3;yield B((650+h)/s.displaySpeed)}))}function A(){return t(this,void 0,void 0,(function*(){s.displayProgress&&l.focusBox&&l.arrow&&l.tooltip&&l.arrowShadow&&l.tooltipShadow&&(yield B(500),l.focusBox.classList.add("spa-check-fade-out"),l.arrow.classList.add("spa-check-fade-out"),l.tooltip.classList.add("spa-check-fade-out"),l.arrowShadow.classList.add("spa-check-fade-out"),l.tooltipShadow.classList.add("spa-check-fade-out"),yield B(150),l.focusBox.remove(),l.tooltip.remove(),l.arrow.remove(),l.tooltipShadow.remove(),l.arrowShadow.remove())}))}function M(e){return t(this,void 0,void 0,(function*(){n.push(e);const o=`* ${e}`;s.logProgress&&console.log(o)}))}function P(e,o,i=s.continueOnFailure){return t(this,void 0,void 0,(function*(){d=!0;let t=`FAIL: ${e}`+(o?`: '${o}'`:"");i?t+=". Continuing execution.":(c=!1,t+=". Halting execution."),n.push(t),s.logProgress&&console.error(t),yield L(l.message,t,"error",!0),yield A()}))}function B(e){return t(this,void 0,void 0,(function*(){return new Promise((o=>setTimeout(o,e)))}))}}))}var n=self;for(var s in o)n[s]=o[s];o.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();