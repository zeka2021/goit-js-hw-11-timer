parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}var n={days:document.querySelector('.value[data-value="days"]'),hours:document.querySelector('.value[data-value="hours"]'),mins:document.querySelector('.value[data-value="mins"]'),secs:document.querySelector('.value[data-value="secs"]'),timerFace:document.getElementById("timer-1")},r=function(){function t(a){var n=a.selector,r=a.targetDate;e(this,t),this.selector=n,this.targetDate=r,this.timerId=null}return a(t,[{key:"startTimer",value:function(){var e=this;this.timerId=setInterval(function(){var t=Date.now(),a=e.targetDate-t;e.updateClockface(a),e.timeFinish(a)},1e3)}},{key:"updateClockface",value:function(e){var t=this.pad(Math.floor(e/864e5)),a=this.pad(Math.floor(e%864e5/36e5)),r=this.pad(Math.floor(e%36e5/6e4)),o=this.pad(Math.floor(e%6e4/1e3));n.days.textContent="".concat(t),n.hours.textContent="".concat(a),n.mins.textContent="".concat(r),n.secs.textContent="".concat(o)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}},{key:"timeFinish",value:function(e){e<0&&(clearInterval(this.timerId),n.timerFace.textContent="Finish")}}]),t}();new r({selector:"#timer-1",targetDate:new Date("May 15, 2022")});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.703736a4.js.map