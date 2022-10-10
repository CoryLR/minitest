
/* SPA Check template for quick copy-pasting */

/* SPA Check minified, provides function 'spaCheck': */
var __awaiter=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{l(s.next(t))}catch(t){o(t)}}function c(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,c)}l((s=s.apply(t,e||[])).next())}))};function spaCheck(t,e){return __awaiter(this,void 0,void 0,(function*(){const i=[],s=Object.assign(Object.assign({},{continueOnFailure:!1,globalDelay:500,logUpdates:!0,message:"",messageShowInDOM:!1,messageStyle:"font-size:24px; padding:10px; z-index:9999; position:fixed; top:0; right:10%; color:black; background-color:rgba(222,222,222,0.8);"}),e);let n,o=!1,r=!0;return this.main=t=>__awaiter(this,void 0,void 0,(function*(){this.messageStart();for(const e of t){if(!r)return this.finish();yield this.sleep(s.globalDelay);try{yield this.do(e)}catch(t){console.error("Unexpected error received",t)}}return this.finish()})),this.finish=()=>{const t=!o;return this.log(`Done, success: ${t}`),this.messageEnd(),{result:t,updateList:i}},this.do=t=>{if("string"==typeof t)this.doActionString(t);else if("function"==typeof t)try{t()}catch(e){this.error("Error running provided function",e+"; function: "+t.toString())}else this.error("Action is not of type string or function, got",typeof t)},this.doActionString=t=>{const e=t.substring(0,3);if("nav"===e){const e=t.split(" ")[1];e&&"#"===e[0]?(window.location.href=e,this.log(`Navigated to ${e}`)):this.error("Unexpected nav action, got",t)}else if("cli"===e){const e=t.split(" ")[1],i=this.select(e);if(!i)return;i.click(),this.log(`Clicked on ${e}`)}else if("exi"===e){const e=t.split(" ")[1];if(!this.select(e))return;this.log(`Verified ${e} exists`)}else if("val"===e){const[e,i,s]=this.argSplit(t);if(!this.select(i))return;this.select(i).value=s,this.log(`Set the value of ${i} to ${s}`)}else if("inc"===e){const[e,i,s]=this.argSplit(t),n=this.select(i);if(!n)return;-1===n.innerText.indexOf(s)?this.error("Text not found",s):this.log(`Verified ${i} includes "${s}"`)}else if("wri"===e){const[e,i,s]=this.argSplit(t),n=this.select(i);if(!n)return;n.textContent+=s,this.log(`Wrote "${s}" at the end of ${i}`)}else if("log"===e){const[e,i]=t.split(/ (.*)/s);console.log("* "+i)}else""===t||this.error("Action string keyword not recognized, got",t)},this.select=t=>{const e=document.querySelector(t);return e||this.error("CSS Selector not found",t),e},this.argSplit=t=>{const e=t.split(/ ([^\s]+) (.*)/s);return e.length<3&&this.error(`Unexpected ${e[0]} input, got:`,t),e},this.messageStart=()=>{console.group(`[SPA Check] ${s.message}`),n=s.messageShowInDOM&&s.message?this.displayMessageInDOM(s.message,s.messageStyle):void 0},this.messageEnd=()=>{n&&n.remove(),console.groupEnd()},this.displayMessageInDOM=(t,e)=>{var i;const s=document.createElement("p");return s.textContent=t,s.setAttribute("style",e),null===(i=document.querySelector("body"))||void 0===i||i.appendChild(s),s},this.log=t=>{i.push(t);const e=`* ${t}`;s.logUpdates&&console.log(e)},this.error=(t,e,n=s.continueOnFailure)=>{o=!0;const c=`${t}: '${e}'`;if(i.push(c),!n)throw r=!1,new Error(`${c}. Halting execution.`);console.error(`* ${c}. Continuing execution.`)},this.sleep=t=>new Promise((e=>setTimeout(e,t))),yield this.main(t)}))}

/* Example running multiple sequential tests using async/await: */
async function runTests() {
  await spaCheck([
    '',
    'val input[type="text"] Hello, world!',
    'val input[type="number"] 20',
    'click button',
    'includes pre world',
    'nav #far-down',
    'write #far-down  - Back up we go!',
    'exists body',
    'nav #',
    () => { console.log('This was written by a custom function') },
  ], { message: 'Testing features', messageShowInDOM: true });
  
  await spaCheck([
    'click does-not-exist',
    'invalidkeyword test',
    () => { throw new Error('This function should error') },
  ], { message: 'Testing error handling', messageShowInDOM: true, continueOnFailure: true });

  await spaCheck([
    'log Should halt after the following error',
    'click does-not-exist',
    'write h1  - This should not appear',
  ], { message: 'Testing graceful fail', messageShowInDOM: true });

  await spaCheck([
    'write #progress Done! Check the browser console for results.',
  ], { globalDelay: 0 });
}
runTests();

/*
# Usage

SPA Check is served as a function named `spaCheck`. Example:

```javascript
spaCheck(
  ['value .myform>input Hello', 'click button.myclass'], // Actions
  { message: 'Example: Submit form', globalDelay: 1000 } // Options
);
```

Parameter details:

* 1: Action List: Array of strings or functions
  * If using string, separate parts by spaces like so: `['action selector data']`
    * Actions: `click`, `exists`, `includes`, `log`, `nav`, `value`, `write`
    * Selector: CSS selector like `button.class-name`
    * Data: Argument for `value`, `write`, `includes`, and `log`
* 2: Options (optional): Object
  * `continueOnFailure`: (default: false) Continue to run actions even if one fails
  * `globalDelay`: (default: 500) time between actions in milliseconds
  * `logUpdates`: (default: true) Show progress in the browser console
  * `message`: (default: '') Text to show while the text runs
  * `messageShowInDOM`: (default: false) Show the message visually on the page
  * `messageStyle`: Override the default message style

#
*/

