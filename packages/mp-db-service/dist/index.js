!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@alicloud/mpserverless-core")):"function"==typeof define&&define.amd?define(["@alicloud/mpserverless-core"],t):"object"==typeof exports?exports["@alicloud/mp-db-service"]=t(require("@alicloud/mpserverless-core")):e["@alicloud/mp-db-service"]=t(e["@alicloud/mpserverless-core"])}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};e[r].call(o.exports,o,o.exports,n);o.l=!0;return o.exports}n.m=e;n.c=t;n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})};n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};n.t=function(e,t){1&t&&(e=n(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r};n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s="./src/index.ts")}({"./src/index.ts":function(e,t,n){"use strict";n.r(t);n.d(t,"DbService",(function(){return Ue}));var r=n("@alicloud/mpserverless-core");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function u(e,t,n){t&&i(e.prototype,t);n&&i(e,n);return e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=["i","m","u","g"];function h(e){return Array.isArray(e)}function d(e){return null!==e&&"object"===p(e)&&!h(e)}function v(e){return"string"==typeof e||function(e,t){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}(e,"String")}var m=function(e){c(n,e);var t=s(n);function n(){o(this,n);return t.apply(this,arguments)}u(n,[{key:"encode",value:function(e){var t=this;return e instanceof RegExp?this.toRegexp(e):e instanceof Date?this.toDate(e):h(e)?e.map((function(e){return t.encode(e)})):d(e)?Object.keys(e).reduce((function(n,r){n[r]=t.encode(e[r]);return n}),{}):e}},{key:"toDate",value:function(e){return e.toISOString()}},{key:"toRegexp",value:function(e){return"/".concat(e.source.replace(/\\\//g,"/"),"/").concat(e.flags)}}]);return n}(r.BaseEncoder),b=function(e){c(n,e);var t=s(n);function n(){o(this,n);return t.apply(this,arguments)}u(n,[{key:"decode",value:function(e){var t=this;return this.isDate(e)?this.toDate(e):h(e)?e.map((function(e){return t.decode(e)})):d(e)?Object.keys(e).reduce((function(n,r){n[r]=t.decode(e[r]);return n}),{}):e}},{key:"isDate",value:function(e){return v(e)&&/^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(e)&&!isNaN(Date.parse(e))}},{key:"isRegexp",value:function(e){if(v(e)){var t=!0,n=e.split("/"),r=n[n.length-1];r&&(t=r.split("").reduce((function(e,t){return!0===e&&y.indexOf(t)>-1}),!0));return n.length>=2&&t}return!1}},{key:"toDate",value:function(e){return new Date(e)}},{key:"toRegexp",value:function(e){var t=e.indexOf("/"),n=e.lastIndexOf("/");return new RegExp(e.slice(t+1,n),e.slice(n+1))}}]);return n}(r.BaseDecoder);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}var g,w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"name",void 0);this.name=t}!function(e,t,n){t&&O(e.prototype,t);n&&O(e,n)}(e,[{key:"inspect",value:function(){return{collection:this.name}}}]);return e}();!function(e){e.READ=".read";e.WRITE=".write";e.CREATE="document.create";e.UPDATE="document.update";e.DELETE="document.delete";e.AGGREGATE=".aggregate"}(g||(g={}));function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function D(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}var I=function(){function e(t){q(this,e);D(this,"name",void 0);D(this,"_schema",{});D(this,"_argMap",{});D(this,"_permission",void 0);this._argMap=t;this._argMap.options||(this._argMap.options={})}!function(e,t,n){t&&x(e.prototype,t);n&&x(e,n)}(e,[{key:"permission",get:function(){switch(this._permission){case g.CREATE:case g.UPDATE:case g.DELETE:return g.WRITE;default:return this._permission}}},{key:"argMap",get:function(){return this._argMap}},{key:"schema",get:function(){return this._schema}},{key:"augmentOptions",value:function(e){this.argMap.options=Object.assign({},this.argMap.options,e)}},{key:"inspect",value:function(){return S(S({},function e(t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];d(t[o])&&(0===Object.keys(t[o]).length?"{}"!==JSON.stringify(t[o])&&delete t[o]:e(t[o]));void 0===t[o]&&delete t[o]}return t}(JSON.parse(JSON.stringify(this.argMap)))),{},{command:this.name})}}]);return e}(),N=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","aggregate");D(R(e),"_schema",{pipeline:"array",options:{type:"object",required:!1,rule:{explain:{type:"boolean",required:!1},allowDiskUse:{type:"boolean",required:!1},maxTimeMS:{type:"int",required:!1,min:0},bypassDocumentValidation:{type:"boolean",required:!1},raw:{type:"boolean",required:!1},promoteLongs:{type:"boolean",required:!1},promoteValues:{type:"boolean",required:!1},promoteBuffers:{type:"boolean",required:!1},collation:{type:"object",required:!1}}}});D(R(e),"_permission",g.AGGREGATE);return e}return n}(I),M=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","count");D(R(e),"_schema",{query:"object",options:{type:"object",required:!1,rule:{limit:{type:"int",required:!1,min:0},skip:{type:"int",required:!1,min:0},maxTimeMS:{type:"int",required:!1,min:0}}}});D(R(e),"_permission",g.READ);return e}return n}(I),L=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","distinct");D(R(e),"_schema",{key:"string",query:"object",options:{type:"object",required:!1}});D(R(e),"_permission",g.READ);return e}return n}(I),C=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","findOne");D(R(e),"_schema",{query:{type:"object",required:!1},options:{type:"object",required:!1,rule:{limit:{type:"int",required:!1,min:0},skip:{type:"int",required:!1,min:0},maxTimeMS:{type:"int",required:!1,min:0},sort:{type:"sort",required:!1},projection:{type:"projection",required:!1},hint:{type:"object",required:!1}}}});D(R(e),"_permission",g.READ);return e}return n}(I),B=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","find");D(R(e),"_schema",{query:{type:"object",required:!1},options:{type:"object",required:!1,rule:{limit:{type:"int",required:!1,min:0},skip:{type:"int",required:!1,min:0},maxTimeMS:{type:"int",required:!1,min:0},sort:{type:"sort",required:!1},projection:{type:"projection",required:!1},hint:{type:"object",required:!1}}}});D(R(e),"_permission",g.READ);return e}return n}(I),Y=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","insertOne");D(R(e),"_schema",{doc:"field",options:{type:"object",required:!1}});D(R(e),"_permission",g.CREATE);return e}return n}(I),G=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","insertMany");D(R(e),"_schema",{docs:"fields",options:{type:"object",required:!1}});D(R(e),"_permission",g.CREATE);return e}return n}(I),U=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","findOneAndUpdate");D(R(e),"_schema",{filter:"object",update:"object",options:{type:"object",required:!1,rule:{maxTimeMS:{type:"int",min:0,required:!1},sort:{type:"sort",required:!1},upsert:{type:"boolean",required:!1},projection:{type:"projection",required:!1},returnNewDocument:{type:"boolean",required:!1}}}});D(R(e),"_permission",g.UPDATE);return e}return n}(I),V=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","updateOne");D(R(e),"_schema",{filter:"object",update:"nobject",options:{type:"object",required:!1,rule:{upsert:{type:"boolean",required:!1}}}});D(R(e),"_permission",g.UPDATE);return e}return n}(I),F=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","updateMany");D(R(e),"_schema",{filter:"object",update:"nobject",options:{type:"object",required:!1,rule:{upsert:{type:"boolean",required:!1}}}});D(R(e),"_permission",g.UPDATE);return e}return n}(I),J=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","findOneAndReplace");D(R(e),"_schema",{filter:"object",replacement:"object",options:{type:"object",required:!1,rule:{maxTimeMS:{type:"int",min:0,required:!1},sort:{type:"sort",required:!1},upsert:{type:"boolean",required:!1},projection:{type:"projection",required:!1}}}});D(R(e),"_permission",g.UPDATE);return e}return n}(I),$=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","replaceOne");D(R(e),"_schema",{filter:"object",doc:"object",options:{type:"object",required:!1,rule:{upsert:{type:"boolean",required:!1}}}});D(R(e),"_permission",g.UPDATE);return e}return n}(I),K=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","findOneAndDelete");D(R(e),"_schema",{filter:"object",options:{type:"object",required:!1,rule:{maxTimeMS:{type:"int",min:0,required:!1},sort:{type:"sort",required:!1},projection:{type:"object",required:!1}}}});D(R(e),"_permission",g.DELETE);return e}return n}(I),W=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","deleteOne");D(R(e),"_schema",{filter:{type:"object"},options:{type:"object",required:!1}});D(R(e),"_permission",g.DELETE);return e}return n}(I),Z=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","deleteMany");D(R(e),"_schema",{filter:{type:"object"},options:{type:"object",required:!1}});D(R(e),"_permission",g.DELETE);return e}return n}(I),z=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","startTransaction");return e}return n}(I),H=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","commitTransaction");return e}return n}(I),Q=function(e){j(n,e);var t=A(n);function n(){var e;q(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];D(R(e=t.call.apply(t,[this].concat(o))),"name","abortTransaction");return e}return n}(I);function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function ee(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}var te,ne=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);ee(this,"raw",void 0);ee(this,"encoder",new m);ee(this,"decoder",new b);this.raw=this.decoder.decode(t)}!function(e,t,n){t&&X(e.prototype,t);n&&X(e,n)}(e,[{key:"inspect",value:function(){return this.raw}}]);return e}();function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){e.INVALID_TYPE="field type is invalid";e.NOT_ARRAY="field is not an array";e.ILLEGAL="field should not contain illegal character";e.ILLEGAL_VALUE="field should not contain undefined for a value";e.EMPTY_OBJECT="field should not be an empty object";e.NOT_OBJECT="should be an object";e.EMPTY="should not empty"}(te||(te={}));function oe(e,t,n){function r(e){if(/[\.\$]/.test(e))return te.ILLEGAL}if(!(t instanceof Object))return te.INVALID_TYPE;if(Array.isArray(t))return te.INVALID_TYPE;for(var o=0,i=Object.keys(t);o<i.length;o++){var u=i[o],c=r(u);if("string"==typeof c)return c;if(t[u]instanceof Object&&!Array.isArray(t[u])){var a=oe(e,t[u]);if(a)return a}}}var ie={ruleOfField:oe,ruleOfFields:function(e,t){if(!Array.isArray(t))return te.NOT_ARRAY;if(0===t.length)return te.EMPTY;for(var n,r=0;!n&&r<t.length;){n=oe(null,t[r],t[r]);r++}return n},ruleOfSort:function(e,t){var n=[1,-1];function r(e){if(/[\$]/.test(e))return te.ILLEGAL}if(!(t instanceof Object))return te.INVALID_TYPE;if("{}"!==JSON.stringify(t)){if(Array.isArray(t))return te.INVALID_TYPE;for(var o=null,i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];if("string"==typeof(o=r(c)))return o;if(!n.includes(t[c]))return te.INVALID_TYPE}return null===o?te.INVALID_TYPE:void 0}},ruleOfProjection:function(e,t){var n=[1,0];function r(e){if(/[\$]/.test(e))return te.ILLEGAL}if(!(t instanceof Object))return te.INVALID_TYPE;if("{}"!==JSON.stringify(t)){if(Array.isArray(t))return te.INVALID_TYPE;for(var o=null,i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];if("string"==typeof(o=r(c)))return o;if(!n.includes(t[c]))return te.INVALID_TYPE}return null===o?te.INVALID_TYPE:void 0}},ruleOfNobject:function(e,t){return"object"!==re(t)?te.NOT_OBJECT:0===Object.keys(t).length?te.EMPTY_OBJECT:void 0}};function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=fe(e);if(t){var o=fe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return se(this,n)}}function se(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le,pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&ce(e,t)}(n,e);var t=ae(n);function n(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);r=t.call(this,e);for(var o=0,i=Object.keys(ie);o<i.length;o++){var u=i[o],c=u.match(/ruleOf([a-zA-Z]+)/)[1];r.p.addRule(c[0].toLowerCase()+c.slice(1),ie[u])}return r}return n}(r.Validator),ye=Object(r.MPServerlessErrorClass)({TransactionError:{code:"TransactionError",message:"事务失败错误"}});function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t,n){return(de="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ge(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=ge(e);if(t){var o=ge(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return be(this,n)}}function be(e,t){return!t||"object"!==he(t)&&"function"!=typeof t?Oe(e):t}function Oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){n(e);return}c.done?t(a):Promise.resolve(a).then(r,o)}function Ee(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){we(i,r,o,u,c,"next",e)}function c(e){we(i,r,o,u,c,"throw",e)}u(void 0)}))}}function je(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function Ae(e,t,n){t&&_e(e.prototype,t);n&&_e(e,n);return e}function Te(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}!function(e){e.AGGREGATE="aggregate";e.COUNT="count";e.DISTINCT="distinct";e.FIND_ONE="findone";e.FIND="find";e.INSERT_ONE="insertOne";e.INSERT_MANY="insertMany";e.FIND_ONE_AND_UPDATE="findOneAndUpdate";e.UPDATE_ONE="updateOne";e.UPDATE_MANY="updateMany";e.FIND_ONE_AND_REPLACE="findOneAndReplace";e.REPLACE_ONE="replaceOne";e.FIND_ONE_AND_DELETE="findOneAndDelete";e.DELETE_ONE="deleteOne";e.DELETE_MANY="deleteMany"}(le||(le={}));var Re,Pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&ve(e,t)}(n,e);var t=me(n);function n(){var e;je(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];Te(Oe(e=t.call.apply(t,[this].concat(o))),"getEncoder",void 0);Te(Oe(e),"getTransport",void 0);return e}Ae(n,[{key:"execute",value:function(){var e=Ee(regeneratorRuntime.mark((function e(){var t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return de(ge(n.prototype),"execute",this).call(this);case 2:t=e.sent;r=this.getEncoder().setBodyField({method:"serverless.db.default.execute",params:t});e.next=6;return this.getTransport().request(r);case 6:o=e.sent;return e.abrupt("return",new ne(o.body).inspect());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]);return n}(function(){function e(){je(this,e);Te(this,"transId",void 0);Te(this,"coll",void 0);Te(this,"comm",void 0);Te(this,"encoder",new m);Te(this,"decoder",new b)}Ae(e,[{key:"transaction",value:function(){var e=Ee(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.comm=new z({});e.next=3;return this.execute();case 3:(t=e.sent)&&(this.transId=t.transactionId);return e.abrupt("return",this.transId);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"commit",value:function(){var e=Ee(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.comm=new H({});return e.abrupt("return",this.execute());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"rollback",value:function(){var e=Ee(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.comm=new Q({});return e.abrupt("return",this.execute());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"collection",value:function(e){this.coll=new w(e);return this}},{key:"aggregate",value:function(e,t){this.validateTransactionAction(le.AGGREGATE);this.comm=new N({pipeline:e,options:t});return this.execute()}},{key:"count",value:function(e,t){this.validateTransactionAction(le.COUNT);this.comm=new M({query:e,options:t});return this.execute()}},{key:"distinct",value:function(e,t,n){this.validateTransactionAction(le.DISTINCT);this.comm=new L({key:e,query:t,options:n});return this.execute()}},{key:"findOne",value:function(e,t){this.comm=new C({query:e,options:t});return this.execute()}},{key:"find",value:function(e,t){this.validateTransactionAction(le.FIND);this.comm=new B({query:e,options:t});return this.execute()}},{key:"insertOne",value:function(e,t){this.comm=new Y({doc:e,options:t});return this.execute()}},{key:"insertMany",value:function(e,t){this.validateTransactionAction(le.INSERT_MANY);this.comm=new G({docs:e,options:t});return this.execute()}},{key:"findOneAndUpdate",value:function(e,t,n){this.comm=new U({filter:e,update:t,options:n});return this.execute()}},{key:"updateOne",value:function(e,t,n){this.comm=new V({filter:e,update:t,options:n});return this.execute()}},{key:"updateMany",value:function(e,t,n){this.validateTransactionAction(le.UPDATE_MANY);this.comm=new F({filter:e,update:t,options:n});return this.execute()}},{key:"findOneAndReplace",value:function(e,t,n){this.comm=new J({filter:e,replacement:t,options:n});return this.execute()}},{key:"replaceOne",value:function(e,t,n){this.comm=new $({filter:e,doc:t,options:n});return this.execute()}},{key:"findOneAndDelete",value:function(e,t){this.comm=new K({filter:e,options:t});return this.execute()}},{key:"deleteOne",value:function(e,t){this.comm=new W({filter:e,options:t});return this.execute()}},{key:"deleteMany",value:function(e,t){this.validateTransactionAction(le.DELETE_MANY);this.comm=new Z({filter:e,options:t});return this.execute()}},{key:"validate",value:function(){var e=new pe;try{e.validate(this.comm.schema,this.encoder.encode(this.comm.argMap))}catch(e){throw e}}},{key:"execute",value:function(){var e=Ee(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(r.assert)(this.comm,"[DBService]缺少 command 参数");this.validate();e.t0=this.comm.permission;e.next=e.t0===g.AGGREGATE||e.t0===g.WRITE||e.t0===g.READ?5:7;break;case 5:Object(r.assert)(this.collection,"[DBService]缺少 collection 参数");return e.abrupt("break",7);case 7:t=Object.assign({},this.coll&&this.coll.inspect(),this.transId&&{transactionId:this.transId},this.comm.inspect());return e.abrupt("return",this.encoder.encode(t));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateTransactionAction",value:function(e){if(this.transId)throw new ye.TransactionError("transaction not support action ["+e+"]")}}]);return e}());function ke(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){n(e);return}c.done?t(a):Promise.resolve(a).then(r,o)}function Se(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){ke(i,r,o,u,c,"next",e)}function c(e){ke(i,r,o,u,c,"throw",e)}u(void 0)}))}}function qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function xe(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}!function(e){e.INIT="init";e.COMMIT="commit";e.ROLLBACK="rollback"}(Re||(Re={}));var De=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);xe(this,"id",void 0);xe(this,"status",void 0);xe(this,"httpTransport",void 0);xe(this,"httpRequestEncoder",void 0);xe(this,"queryService",void 0);this.status=Re.INIT;this.httpTransport=t;this.httpRequestEncoder=n;this.queryService=new Pe;this.queryService.getEncoder=function(){return r.httpRequestEncoder};this.queryService.getTransport=function(){return r.httpTransport}}!function(e,t,n){t&&qe(e.prototype,t);n&&qe(e,n)}(e,[{key:"init",value:function(){var e=Se(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return this.queryService.transaction();case 2:this.id=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"collection",value:function(e){this.queryService&&this.queryService.collection(e);return this.queryService}},{key:"commit",value:function(){var e=Se(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkStatus();this.status=Re.COMMIT;return e.abrupt("return",this.queryService.commit());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"rollback",value:function(){var e=Se(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkStatus();this.status=Re.ROLLBACK;return e.abrupt("return",this.queryService.rollback());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkStatus",value:function(){if(this.status===Re.COMMIT||this.status===Re.ROLLBACK)throw new ye.TransactionError("transaction already "+this.status)}}]);return e}();function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){n(e);return}c.done?t(a):Promise.resolve(a).then(r,o)}function Me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}function Be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=Ge(e);if(t){var o=Ge(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ye(this,n)}}function Ye(e,t){return!t||"object"!==Ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ge(e){return(Ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ue=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&Ce(e,t)}(n,e);var t=Be(n);function n(){Me(this,n);return t.apply(this,arguments)}!function(e,t,n){t&&Le(e.prototype,t);n&&Le(e,n)}(n,[{key:"collection",value:function(e){var t=this,n=(new Pe).collection(e);n.getEncoder=function(){return t.getEncoder()};n.getTransport=function(){return t.transport};return n}},{key:"startTransaction",value:function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){Ne(i,r,o,u,c,"next",e)}function c(e){Ne(i,r,o,u,c,"throw",e)}u(void 0)}))}}(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new De(this.transport,this.getEncoder());e.next=3;return t.init();case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]);return n}(r.BaseService)},"@alicloud/mpserverless-core":function(t,n){t.exports=e}})}));