
/* 
 * Dry-Run Template
 *
 * Run tests with zero setup by copy-pasting this file's contents
 * into a browser console or into client-side JavaScript
 *
 * Version: 4.3.1
 * Description: Automated routines for single-page applications (SPAs), useful for end-to-end-testing and guided tutorials. Small, portable, and easy to use. Click buttons, fill values, await results, guide users, etc.
*/

/**
 * Dry-Run examples, replace with your tests
*/
async function runDryRuns() {
  
  await dryRun([
    'comment input[type="text"] Look at this thing!',
    'comment input[type="number"] Look at this other thing!',
  ]);
  
  await dryRun([
    'log Tests starting',
    'value input[type="text"] Hello, world!',
    'value input[type="number"] 20',
    'click button',
    'exists pre hello',
    'write #far-down Back up we go!',
    'nav #',
    'log Next are custom functions',
    () => { console.log('This is logging from a custom function, next is a custom async function!') },
    async () => { await new Promise(resolve => setTimeout(() => { resolve() }, 300)) },
    'exists !.output processing...',
    'click button long process',
    'await !.output processing...',
    'await .output process complete',
  ], { message: 'Testing features', globalDelay: 100, displaySpeed: 2 });
  
  await dryRun([
    'log Expect success: false',
    'click does-not-exist',
    'invalidkeyword test',
    () => { throw new Error('This function should error') },
    'exists !body',
    'await does-not-exist',
    'await body>main this text should not exist anywhere'
  ], {
    message: 'Testing error handling',
    continueOnFailure: true, awaitTimeout: 600,
    globalDelay: 50, displaySpeed: 2,
  });
  
  await dryRun([
    'log Expect success: false, should halt after next error',
    'click does-not-exist',
    'log If you see this, it did not work',
  ], { message: 'Testing graceful fail', globalDelay: 50, displaySpeed: 2 });
  
  await dryRun([
    'append #progress  Done! Check the browser console for results.',
    'log All done!',
  ], { globalDelay: 0, logProgress: false, logResult: false });
  
}

/*
# Usage

Dry-Run is served as a function named `dryRun`.

## 
*/

/* Minified Dry-Run code, provides function 'dryRun' */ /* @ts-ignore */
(()=>{"use strict";var o={d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};o.r(t),o.d(t,{dryRun:()=>n});var e=function(o,t,e,n){return new(e||(e=Promise))((function(i,r){function s(o){try{a(n.next(o))}catch(o){r(o)}}function d(o){try{a(n.throw(o))}catch(o){r(o)}}function a(o){var t;o.done?i(o.value):(t=o.value,t instanceof e?t:new e((function(o){o(t)}))).then(s,d)}a((n=n.apply(o,t||[])).next())}))};function n(o,t={}){return e(this,void 0,void 0,(function*(){t.tutorialMode&&(t.globalDelay=200);const n=Object.freeze(Object.assign(Object.assign({},{awaitTimeout:15e3,continueOnFailure:!1,displayMessage:!0,displayProgress:!0,displaySpeed:1,globalDelay:500,logCollapse:!1,logProgress:!0,logResult:!0,message:"Dry-Run",messageAttribution:"Dry-Run",overrideCss:"",separator:" ",tutorialMode:!1}),t)),i=[],r=n.message?`[Dry-Run] ${n.message}`:"[Dry-Run]",s={paused:!1,errorOccurred:!1,continueActions:!0,documentKeyDownSet:!1,nextButtonPressed:!1};let d;const a={arrow:void 0,arrowShadow:void 0,focusBox:void 0,message:void 0,style:void 0,tooltip:void 0,tooltipShadow:void 0,nextButton:void 0,playButton:void 0,pauseButton:void 0,stopButton:void 0,status:void 0};if(!function(){if("undefined"==typeof document){let o="FAIL: document is undefined. Dry-Run can only be used in the browser. Halting execution.";return n.logProgress&&console.error(o),i.push(o),!1}const o=document.querySelector("body > .dry-run");if(o){let t=`FAIL: Dry-Run '${o.getAttribute("data-dry-run")}' is already running. Halting execution.`;return n.logProgress&&console.error(t),i.push(t),!1}return!0}()){const o={success:!1,log:i,message:n.message};return S(o,!1),o}(n.displayMessage||n.displayProgress)&&function(){e(this,void 0,void 0,(function*(){a.style=document.createElement("style"),a.style.textContent="\n      body > .dry-run {\n        font: 20px Arial;\n        padding: 18px 12px 6px 12px;\n        z-index: 9999;\n        position: fixed;\n        top: 0;\n        right: 10%;\n        color: black;\n        background-color: rgba(250,250,250,0.8);\n        text-align: center;\n        border-radius: 0 0 12px 12px;\n        max-width: 80vw;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        border: 2px solid rgb(180,180,180);\n        border-top: 0;\n      }\n      body > .dry-run > .dry-run-footer {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        line-height: 15px;\n        font-size: 12px;\n        margin-top: 5px;\n      }\n      body .dry-run-footer .dry-run-play {\n        display: none;\n      }\n      body .dry-run-footer .dry-run-play,\n      body .dry-run-footer .dry-run-pause,\n      body .dry-run-footer .dry-run-stop {\n        padding: 4px;\n      }\n      body .dry-run-footer .dry-run-play:hover,\n      body .dry-run-footer .dry-run-pause:hover,\n      body .dry-run-footer .dry-run-stop:hover {\n        cursor: pointer;\n      }\n      body > .dry-run > .dry-run-footer .dry-run-play-icon {\n        width: 0;\n        height: 0;\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        border-left: 8px solid rgb(191, 191, 191);\n      }\n      body > .dry-run > .dry-run-footer .dry-run-pause-icon {\n        width: 2px;\n        height: 8px;\n        border-left: 3px solid rgb(191, 191, 191);\n        border-right: 3px solid rgb(191, 191, 191);\n        margin: 1px 0;\n      }\n      body > .dry-run > .dry-run-footer .dry-run-stop-icon {\n        height: 8px;\n        width: 8px;\n        background-color: rgb(191, 191, 191);\n      }\n      body .dry-run-footer .dry-run-play:hover .dry-run-play-icon {\n        border-left: 8px solid rgb(80, 80, 80);\n      }\n      body .dry-run-footer .dry-run-pause:hover .dry-run-pause-icon {\n        border-left: 3px solid rgb(80, 80, 80);\n        border-right: 3px solid rgb(80, 80, 80);\n      }\n      body .dry-run-footer .dry-run-stop:hover .dry-run-stop-icon {\n        background-color: rgb(80, 80, 80);\n      }\n      body > .dry-run > .dry-run-footer > .dry-run-status,\n      body > .dry-run > .dry-run-footer > .dry-run-attribution {\n        text-align: left;\n        color: dimgray;\n      }\n      body > .dry-run > .dry-run-footer > .dry-run-status {\n        min-width: 60px;\n        min-height: 15px;\n        margin-left: 5px;\n        font-style: italic;\n      }\n      body > .dry-run > .dry-run-footer > .dry-run-attribution {\n        margin-left: auto;\n        padding-left: 5px;\n      }\n      body > .dry-run-focus-box {\n        z-index: 9997;\n        visibility: hidden;\n        position: absolute;\n        background-color: rgba(255,255,255,0.2);\n        border: 2px solid white;\n        box-shadow: 0 0 0 2px rgb(0,0,0);\n        pointer-events: none;\n      }\n      body > .dry-run-tooltip {\n        z-index: 9999;\n        visibility: hidden;\n        font: 14px Arial;\n        position: absolute;\n        background-color: rgb(245,245,245);\n        color: black;\n        text-align: center;\n        padding: 10px;\n        border-radius: 10px;\n        max-width: 200px;\n      }\n      body > .dry-run-tooltip-error {\n        color: darkred;\n      }\n      body > .dry-run-arrow {\n        z-index: 9999;\n        visibility: hidden;\n        width: 0;\n        height: 0;\n        position: absolute;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n        border-bottom: 10px solid rgb(245,245,245); \n      }\n      body > .dry-run-arrow-shadow {\n        z-index: 9998;\n        border-left: 14px solid transparent;\n        border-right: 14px solid transparent;\n        border-bottom: 14px solid rgb(180,180,180);\n        margin: -3px 0 0 -4px;\n      }\n      body > .dry-run-tooltip-shadow {\n        z-index: 9998;\n        color: transparent;\n        border: 2px solid rgb(180,180,180);\n        background-color: rgb(180,180,180);\n        margin: -2px 0 0 -2px;\n        border-radius: 12px;\n      }\n      body > .dry-run-tooltip .dry-run-next-button {\n        display: block;\n        margin: 5px auto 0 auto;\n        border-radius: 5px;\n        padding: 5px;\n        background-color: rgb(220,220,220);\n        border-width: 0;\n        cursor: pointer;\n      }\n      body > .dry-run-fade-in {\n        visibility: visible;\n        animation: dryRunfadeIn 150ms; \n      }\n      body > .dry-run-fade-out {\n        opacity: 0;\n        animation: dryRunfadeOut 150ms; \n      }\n      @keyframes dryRunfadeIn {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      @keyframes dryRunfadeOut {\n        0% { opacity: 1; }\n        100% { opacity: 0; }\n      }\n    ",a.style.textContent+=n.overrideCss,document.querySelector("body").appendChild(a.style)}))}(),n.logProgress&&(n.logCollapse?console.groupCollapsed(r):console.group(r)),function(o){a.message=document.createElement("div");let t=`\n      ${o}\n      <div class="dry-run-footer">\n    `;n.tutorialMode||(t+='\n        <div class="dry-run-play" title="Play">\n          <div class="dry-run-play-icon"></div>\n        </div>\n        <div class="dry-run-pause" title="Pause">\n          <div class="dry-run-pause-icon"></div>\n        </div>\n      '),t+=`\n        <div class="dry-run-stop" title="Stop">\n          <div class="dry-run-stop-icon"></div>\n        </div>\n        <div class="dry-run-status"></div>\n        <div class="dry-run-attribution">${n.messageAttribution}</div>\n      </div>\n    `,a.message.innerHTML=t,a.message.setAttribute("data-dry-run",o),a.message.classList.add("dry-run"),n.displayMessage||(a.message.style.visibility="hidden"),document.querySelector("body").appendChild(a.message),a.playButton=document.querySelector(".dry-run .dry-run-play"),a.pauseButton=document.querySelector(".dry-run .dry-run-pause"),a.stopButton=document.querySelector(".dry-run .dry-run-stop"),a.status=document.querySelector(".dry-run .dry-run-status"),n.tutorialMode||(a.playButton.addEventListener("click",(()=>e(this,void 0,void 0,(function*(){$()})))),a.pauseButton.addEventListener("click",(()=>e(this,void 0,void 0,(function*(){B()}))))),a.stopButton.addEventListener("click",(()=>e(this,void 0,void 0,(function*(){yield M("pause button")})))),null===document.onkeydown&&n.logProgress&&!n.tutorialMode&&(document.onkeydown=o=>e(this,void 0,void 0,(function*(){"Escape"===o.key?yield M("escape key"):" "===o.key&&(s.paused?$():B())})),s.documentKeyDownSet=!0)}(n.message);const l=yield function(o,t){return e(this,void 0,void 0,(function*(){let e=!0;return void 0===o?(e=!1,yield P("Missing required argument Action List","",!1)):Array.isArray(o)||"string"==typeof o||(e=!1,yield P("Action list argument is not an Array or string","",!1)),void 0===t||"object"==typeof t&&!Array.isArray(t)||(e=!1,yield P("Options argument is not an Object","",!1)),e}))}(o,t);if(!l)return C();const u=function(o){return"string"==typeof o?o.split("\n").map((o=>o.trimStart())):Array.isArray(o)?o.map((o=>"string"==typeof o?o.trimStart():o)):void 0}(o);for(const o of u){if(!s.continueActions)return C();yield R(n.globalDelay);try{yield p(o)}catch(o){yield P("Unexpected error: "+o.message)}}return C();function p(o){return e(this,void 0,void 0,(function*(){if("string"==typeof o)yield function(o){return e(this,void 0,void 0,(function*(){const t=o.replace("!","").substring(0,3);if("nav"===t){const t=o.split(n.separator)[1];t&&"#"===t[0]?(yield c((()=>{window.location.href=t}),`Navigating to ${t}`,void 0,!n.tutorialMode),L(`Navigated to ${t}`)):yield P("Unexpected nav action, got",o)}else if("cli"===t){const[t,e,i]=yield w(o),r=m(e,i);if(i){const o=g(e);d=void 0,v(o,i,b),d?(yield c((()=>{d.click()}),`Clicking ${d.tagName.toLowerCase()} with text '${i}'`,d,!n.tutorialMode),L(`Clicked text '${i}' inside ${e} (clicked on ${d.tagName.toLowerCase()})`)):yield P("Could not find selector to click",r),d=void 0}else{const o=yield y(e);if(!o)return;yield c((()=>{o.click()}),`Clicking ${o.tagName.toLowerCase()}`,o,!n.tutorialMode),L(`Clicked ${e}`)}}else if("exi"===t){let[t,e,i]=yield w(o),r=!1;"!"===o[0]&&(r=!0);const s=m(e,i);let l,u=!1;if(i){const o=g(e,!1);d=void 0,v(o,i,b),d&&(l=d,u=!0)}else{const o=f(e,!1);o&&(u=!0,l=o)}u&&!r?(n.tutorialMode||(yield A(l,`Confirmed exists: ${s}`,"info")),n.tutorialMode||(yield k()),L(`Confirmed exists: ${s}`)):u||r?u&&r?(n.tutorialMode||(yield A(l,`Incorrectly exists: ${s}`,"error")),n.tutorialMode||(yield k()),yield P(`Incorrectly exists: ${s}`)):!u&&r&&(n.tutorialMode||(yield A(a.message,`Confirmed does not exist: ${s}`,"info",!0)),n.tutorialMode||(yield k()),L(`Confirmed does not exist: ${s}`)):yield P("Did not exist",s),d=void 0}else if("fil"===t){const[t,e,i]=yield h(o),r=yield y(e);if(!r)return;yield c((()=>{r.value=i,r.dispatchEvent(new InputEvent("input"))}),`Filling value of ${r.tagName.toLowerCase()}`,r,!n.tutorialMode),L(`Filled the value of ${e} to '${i}'`)}else if("wri"===t||"app"===t){const[e,i,r]=yield h(o),s=yield y(i);if(!s)return;let d=r||"";"wri"===t?(yield c((()=>{s.textContent=d}),`Writing over ${i}`,s,!n.tutorialMode),L(`Wrote '${d}' over ${i}`)):(yield c((()=>{s.textContent+=d}),`Appending text to ${i}`,s,!n.tutorialMode),L(`Appended '${d}' to ${i}`))}else if("log"===t){let t,e;" "!==n.separator?[t,e]=o.split(n.separator):[t,e]=o.split(/ (.*)/s),n.tutorialMode&&(s.nextButtonPressed=!1),yield c((()=>{L(e)}),`${e}`),n.tutorialMode&&(yield O())}else if("com"===t){const[t,e,i]=yield w(o);if(!i)return void(yield P(`Value was not provided for comment action '${o}'`));const r=yield y(e);if(!r)return;n.tutorialMode&&(s.nextButtonPressed=!1),yield A(r,i,"info"),n.tutorialMode||(yield k()),n.tutorialMode&&(yield O())}else if("wai"===t){const[t,i]=o.split(n.separator);L(`Waiting ${Number(i)/1e3} second(s)`),yield c((()=>e(this,void 0,void 0,(function*(){yield function(o){return e(this,void 0,void 0,(function*(){if(o<=n.globalDelay/2)yield D(o);else{const t=o/n.globalDelay*2,e=o%n.globalDelay/2;for(let o=0;o<t;o++)yield R(n.globalDelay/2);yield R(e)}}))}(Number(i))}))),`Waiting ${Number(i)/1e3} second(s)`,void 0,!n.tutorialMode)}else if("awa"===t){let[t,e,i]=yield w(o),r=!1;"!"===o[0]&&(r=!0);const s=n.awaitTimeout/n.globalDelay*2;let l,u=!1;const p=m(e,i);L(`Awaiting ${p}...`);const c=r?`Awaiting ${p} to not exist...`:`Awaiting ${p}...`;n.tutorialMode||(yield A(a.message,c,"info",!0));for(let o=0;o<s;o++){if(i){const o=Array.from(g(e.replace(/>>/g," ")));for(const t of o)if(t&&t.textContent&&t.textContent.toLowerCase().includes(i.toLowerCase())){u=!0,d=void 0,v([t],i,b),l=d;break}}else{const o=f(e);o&&(u=!0,l=o)}if(u&&!r)break;if(!u&&r)break;u=!1,yield R(n.globalDelay/2)}n.tutorialMode||(yield k()),u&&!r?(n.tutorialMode||(yield A(l,`...Found ${p}`,"info")),n.tutorialMode||(yield k()),L(`...Found ${p}`)):u||r?u&&r?(n.tutorialMode||(yield A(l,`...Timed out awaiting ${p} to not exist`,"error")),n.tutorialMode||(yield k()),yield P(`...Timed out awaiting ${p} to not exist`)):!u&&r&&L(`...${p} disappeared`):yield P(`Timed out after ${n.awaitTimeout/1e3} second(s) awaiting`,p)}else""===o||(yield P("Action string keyword not recognized, got",o))}))}(o);else if("function"==typeof o)try{yield c(o,"Running provided function",void 0,!n.tutorialMode),L("Ran provided function")}catch(t){yield k(),yield P("Error running provided function",t+"; function: "+o.toString())}else yield P("Action is not of type string or function, got",typeof o)}))}function c(o,t,i,r=!0){return e(this,void 0,void 0,(function*(){let e=!1;i||(i=a.message?a.message:document.body,e=!0),r&&(yield A(i,t,"info",e)),yield o(),r&&!n.tutorialMode&&(yield k())}))}function y(o){return e(this,void 0,void 0,(function*(){const t=f(o);return t||(yield P("CSS Selector not found",o.replace(/>>/g," "))),t}))}function f(o,t=!0){const e=o.replace(/>>/g," ");return document.querySelector(e)}function g(o,t=!0){const e=o.replace(/>>/g," ");return document.querySelectorAll(e)}function v(o,t,e=(o=>"SCRIPT"!==o.tagName)){for(const n of o)x(n,t)&&(e(n)&&(d=n),v(Array.from(n.childNodes).filter((o=>{if(e(o))return o})),t,e))}function b(o){return o.click&&"SCRIPT"!==o.tagName}function x(o,t){const e=t.toLowerCase(),n=o.textContent&&o.textContent.toLowerCase().includes(e),i="string"==typeof o.value&&o.value.toLowerCase().includes(e);return n||i}function m(o,t){return`'${o}'`+(t?` containing text '${t}'`:"")}function h(o){return e(this,void 0,void 0,(function*(){if(" "!==n.separator)return o.split(n.separator);const t=o.split(/ ([^\s]+) (.*)/s);return t.length<3&&(yield P("Unexpected input with data, got",o)),t[1]=t[1].replace(/>>/g," "),t}))}function w(o){return e(this,void 0,void 0,(function*(){const t=o.split(n.separator);return" "!==n.separator?t:t.length>2?yield h(o):(t[1]=t[1].replace(/>>/g," "),t)}))}function S(o,t=!0){return e(this,void 0,void 0,(function*(){const e=n.logProgress?"":r;n.logResult&&console.log(`${e} Result:`,o),n.logProgress&&t&&console.groupEnd()}))}function C(){return e(this,void 0,void 0,(function*(){!function(){e(this,void 0,void 0,(function*(){for(const o in a)a[o]&&a[o].parentNode&&a[o].remove&&a[o].remove();s.documentKeyDownSet&&document.onkeydown}))}();const o=!s.errorOccurred,t={success:o,log:i,message:n.message};return L(`Done, success: ${o}`),S(t),t}))}function $(){s.paused=!1,a.playButton.style.display="none",a.pauseButton.style.display="block",a.status.textContent=""}function B(){s.paused=!0,a.playButton.style.display="block",a.pauseButton.style.display="none",a.status.textContent="Paused"}function M(o){return e(this,void 0,void 0,(function*(){confirm(`[${n.messageAttribution}]: Are you sure you would like to stop '${n.message}'?`)&&(a.status.textContent="Stopping",yield function(o){return e(this,void 0,void 0,(function*(){s.continueActions=!1,document.contains(a.tooltip)&&(yield k(!1)),yield P(o,"",!1,!1)}))}(`Stopped by user (${o})`))}))}function A(o,t,i="info",r){return e(this,void 0,void 0,(function*(){if(!n.displayProgress)return;const d=document.body.getBoundingClientRect(),l=o.getBoundingClientRect(),u=r?0:window.pageYOffset||o.scrollTop||document.body.scrollTop,p=window.pageXOffset||o.scrollLeft||document.body.scrollLeft;a.focusBox=document.createElement("div"),a.focusBox.classList.add("dry-run-focus-box"),a.arrow=document.createElement("div"),a.arrow.classList.add("dry-run-arrow"),a.tooltip=document.createElement("div"),a.tooltip.classList.add("dry-run-tooltip"),"error"===i&&a.tooltip.classList.add("dry-run-tooltip-error"),a.tooltip.textContent=t.replace(/>>/g," "),n.tutorialMode&&(a.nextButton=document.createElement("button"),a.nextButton.textContent="Next",a.nextButton.classList.add("dry-run-next-button"),a.nextButton.addEventListener("click",(()=>e(this,void 0,void 0,(function*(){yield function(){return e(this,void 0,void 0,(function*(){s.nextButtonPressed=!0,yield k(!1)}))}()})))),a.tooltip.appendChild(a.nextButton)),document.body.appendChild(a.focusBox),document.body.appendChild(a.arrow),document.body.appendChild(a.tooltip);const c=a.tooltip.getBoundingClientRect().width;let y=l.bottom+10+u,f=l.left+p+l.width/2-10,g=l.left+p+l.width/2-c/2;f<8?f=8:d.right+p-f<20&&(f=d.right+p-20),g<0&&(g=0),r&&(a.focusBox.style.display="none",a.arrow.style.display="none",a.tooltip.style.position="fixed",f-=p,y-=5,g-=p),a.arrow.style.top=String(l.bottom+u+2)+"px",a.arrow.style.left=String(f)+"px",a.tooltip.style.top=String(y+2)+"px",a.tooltip.style.left=String(g)+"px",a.focusBox.style.top=String(l.top+u-2)+"px",a.focusBox.style.left=String(l.left+p-2)+"px",a.focusBox.style.width=String(l.width)+"px",a.focusBox.style.height=String(l.height)+"px",a.arrowShadow=a.arrow.cloneNode(!0),a.tooltipShadow=a.tooltip.cloneNode(!0),a.arrowShadow.classList.add("dry-run-arrow-shadow"),a.tooltipShadow.classList.add("dry-run-tooltip-shadow"),document.body.appendChild(a.arrowShadow),document.body.appendChild(a.tooltipShadow),yield function(o){return e(this,void 0,void 0,(function*(){(function(o){var t=o.getBoundingClientRect(),e=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-e>=0)})(o)||(o.scrollIntoView({behavior:"smooth"}),yield R(700))}))}(o),a.focusBox.classList.add("dry-run-fade-in"),a.arrowShadow.classList.add("dry-run-fade-in"),a.tooltipShadow.classList.add("dry-run-fade-in"),a.arrow.classList.add("dry-run-fade-in"),a.tooltip.classList.add("dry-run-fade-in");let v=30*t.length<2e3?30*t.length:2e3;yield R((650+v)/n.displaySpeed)}))}function k(o=!0){return e(this,void 0,void 0,(function*(){n.displayProgress&&a.focusBox&&a.arrow&&a.tooltip&&a.arrowShadow&&a.tooltipShadow&&(o&&(yield R(500)),a.focusBox.classList.add("dry-run-fade-out"),a.arrow.classList.add("dry-run-fade-out"),a.tooltip.classList.add("dry-run-fade-out"),a.arrowShadow.classList.add("dry-run-fade-out"),a.tooltipShadow.classList.add("dry-run-fade-out"),yield R(150),a.focusBox.remove(),a.tooltip.remove(),a.arrow.remove(),a.tooltipShadow.remove(),a.arrowShadow.remove())}))}function L(o){return e(this,void 0,void 0,(function*(){i.push(o);const t=`* ${o}`;n.logProgress&&console.log(t)}))}function P(o,t,r=n.continueOnFailure,d=!0){return e(this,void 0,void 0,(function*(){s.errorOccurred=!0;let e=o+(t?`: '${t}'`:"");r?e+=". Continuing execution.":(s.continueActions=!1,e+=". Halting execution.");const l="FAIL: "+e;i.push(l),n.logProgress&&console.error(l),d&&(yield A(a.message,l,"error",!0),yield k())}))}function R(o){return e(this,void 0,void 0,(function*(){return yield function(){return e(this,void 0,void 0,(function*(){for(;s.paused&&s.continueActions;)yield D(n.globalDelay/2)}))}(),yield D(o)}))}function O(){return e(this,void 0,void 0,(function*(){for(;!s.nextButtonPressed;)yield D(n.globalDelay/2);s.nextButtonPressed=!1}))}function D(o){return e(this,void 0,void 0,(function*(){return new Promise((t=>setTimeout(t,o)))}))}}))}var i=self;for(var r in t)i[r]=t[r];t.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();

runDryRuns();
