!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@alicloud/mpserverless-core")):"function"==typeof define&&define.amd?define(["@alicloud/mpserverless-core"],t):"object"==typeof exports?exports["@alicloud/mp-function-service"]=t(require("@alicloud/mpserverless-core")):e["@alicloud/mp-function-service"]=t(e["@alicloud/mpserverless-core"])}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};e[n].call(o.exports,o,o.exports,r);o.l=!0;return o.exports}r.m=e;r.c=t;r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})};r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};r.t=function(e,t){1&t&&(e=r(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n};r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s="./src/index.ts")}({"./src/index.ts":function(e,t,r){"use strict";r.r(t);r.d(t,"FunctionService",(function(){return v}));var n=r("@alicloud/mpserverless-core"),o={functionTarget:{type:"string",allowEmpty:!1}};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function a(e,t,r,n,o,u,i){try{var c=e[u](i),f=c.value}catch(e){r(e);return}c.done?t(f):Promise.resolve(f).then(n,o)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(r,e);var t=y(r);function r(){s(this,r);return t.apply(this,arguments)}!function(e,t,r){t&&l(e.prototype,t);r&&l(e,r)}(r,[{key:"invoke",value:function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){a(u,n,o,i,c,"next",e)}function c(e){a(u,n,o,i,c,"throw",e)}i(void 0)}))}}(regeneratorRuntime.mark((function e(t){var r,u,i,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=f.length>1&&void 0!==f[1]?f[1]:{};this.validate(o,{functionTarget:t});if(!("number"==typeof r&&isNaN(r)||null==r)){e.next=4;break}throw new n.bizError.ValidationError;case 4:(u=this.getEncoder()).setBodyField({method:"serverless.function.runtime.invoke",params:{functionTarget:t,functionArgs:r}});e.next=8;return this.transport.request(u);case 8:i=e.sent;return e.abrupt("return",c(c({},i.body),{},{requestId:i.headers["request-id"]}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"validate",value:function(e,t){var r=new n.Validator;try{r.validate(e,t)}catch(e){throw e}}}]);return r}(n.BaseService)},"@alicloud/mpserverless-core":function(t,r){t.exports=e}})}));