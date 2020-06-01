(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MPServerless"] = factory();
	else
		root["MPServerless"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/_process@0.11.10@process/browser.js":
/*!*********************************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/_process@0.11.10@process/browser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/_util@0.11.1@util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/_util@0.11.1@util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../node_modules/_util@0.11.1@util/support/isBufferBrowser.js":
/*!******************************************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/_util@0.11.1@util/support/isBufferBrowser.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../node_modules/_util@0.11.1@util/util.js":
/*!***********************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/_util@0.11.1@util/util.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/_util@0.11.1@util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/_util@0.11.1@util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_process@0.11.10@process/browser.js */ "../../node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "../../node_modules/_webpack@4.42.1@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/crypto-js/core.js":
/*!***************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/crypto-js/core.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "../../node_modules/crypto-js/hmac-md5.js":
/*!*******************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/crypto-js/hmac-md5.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../../node_modules/crypto-js/core.js"), __webpack_require__(/*! ./md5 */ "../../node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./hmac */ "../../node_modules/crypto-js/hmac.js"));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS.HmacMD5;

}));

/***/ }),

/***/ "../../node_modules/crypto-js/hmac.js":
/*!***************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/crypto-js/hmac.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../../node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),

/***/ "../../node_modules/crypto-js/md5.js":
/*!**************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/crypto-js/md5.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "../../node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),

/***/ "../../node_modules/mime/Mime.js":
/*!**********************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/mime/Mime.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1)
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

module.exports = Mime;


/***/ }),

/***/ "../../node_modules/mime/lite.js":
/*!**********************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/mime/lite.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Mime = __webpack_require__(/*! ./Mime */ "../../node_modules/mime/Mime.js");
module.exports = new Mime(__webpack_require__(/*! ./types/standard */ "../../node_modules/mime/types/standard.js"));


/***/ }),

/***/ "../../node_modules/mime/types/standard.js":
/*!********************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/mime/types/standard.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

/***/ }),

/***/ "../../node_modules/parameter/index.es5.js":
/*!********************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/parameter/index.es5.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = __webpack_require__(/*! util */ "../../node_modules/_util@0.11.1@util/util.js");

/**
 * Regexps
 */

var DATE_TYPE_RE = /^\d{4}\-\d{2}\-\d{2}$/;
var DATETIME_TYPE_RE = /^\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}$/;
var ID_RE = /^\d+$/;

// http://www.regular-expressions.info/email.html
var EMAIL_RE = /^[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+(?:\.[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;

var PASSWORD_RE = /^[\w\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\]\{\}\|\;\:\'\"\,\<\.\>\/\?]+$/;

// https://gist.github.com/dperini/729294
var URL_RE = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;

/**
 * Parameter class
 * @class Parameter
 */

var Parameter = function () {
  function Parameter(opts) {
    _classCallCheck(this, Parameter);

    opts = opts || {};

    if (typeof opts.translate === 'function') {
      this.translate = opts.translate;
    }

    if (opts.validateRoot) this.validateRoot = true;
    if (opts.convert) this.convert = true;
    if (opts.widelyUndefined) this.widelyUndefined = true;
  }

  _createClass(Parameter, [{
    key: 't',
    value: function t() {
      var args = Array.prototype.slice.call(arguments);
      if (typeof this.translate === 'function') {
        return this.translate.apply(this, args);
      } else {
        return util.format.apply(util, args);
      }
    }

    /**
     * validate
     *
     * @param {Object} rules
     * @return {Object} obj
     * @api public
     */

  }, {
    key: 'validate',
    value: function validate(rules, obj) {
      if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object') {
        throw new TypeError('need object type rule');
      }

      if (this.validateRoot && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || !obj)) {
        return [{
          message: this.t('the validated value should be a object'),
          code: this.t('invalid'),
          field: undefined
        }];
      }

      var self = this;

      var errors = [];

      for (var key in rules) {
        var rule = formatRule(rules[key]);
        var value = obj[key];

        if (typeof value === 'string' && rule.trim === true) {
          value = obj[key] = value.trim();
        }

        // treat null / '' / NaN as undefined
        var widelyUndefined = this.widelyUndefined;
        if ('widelyUndefined' in rule) widelyUndefined = rule.widelyUndefined;
        if (widelyUndefined && (value === '' || value === null || Number.isNaN(value))) {
          value = obj[key] = undefined;
        }

        var has = value !== null && value !== undefined;

        if (!has) {
          if (rule.required !== false) {
            errors.push({
              message: this.t('required'),
              field: key,
              code: this.t('missing_field')
            });
          }
          // support default value
          if ('default' in rule) {
            obj[key] = rule.default;
          }
          continue;
        }

        var checker = TYPE_MAP[rule.type];
        if (!checker) {
          throw new TypeError('rule type must be one of ' + Object.keys(TYPE_MAP).join(', ') + ', but the following type was passed: ' + rule.type);
        }

        convert(rule, obj, key, this.convert);
        var msg = checker.call(self, rule, obj[key], obj);
        if (typeof msg === 'string') {
          errors.push({
            message: msg,
            code: this.t('invalid'),
            field: key
          });
        }

        if (Array.isArray(msg)) {
          msg.forEach(function (e) {
            var dot = rule.type === 'object' ? '.' : '';
            e.field = key + dot + e.field;
            errors.push(e);
          });
        }
      }

      if (errors.length) {
        return errors;
      }
    }
  }]);

  return Parameter;
}();

;

/**
 * Module exports
 * @type {Function}
 */
module.exports = Parameter;

/**
 * add custom rule to global rules list.
 *
 * @param {String} type
 * @param {Function | RegExp} check
 * @param {Boolean} [override] - override exists rule or not, default is true
 * @param {String|Function} [convertType]
 * @api public
 */
Parameter.prototype.addRule = Parameter.addRule = function addRule(type, check, override, convertType) {
  if (!type) {
    throw new TypeError('`type` required');
  }

  // addRule(type, check, convertType)
  if (typeof override === 'string' || typeof override === 'function') {
    convertType = override;
    override = true;
  }

  if (typeof override !== 'boolean') {
    override = true;
  }

  if (!override && TYPE_MAP[type]) {
    throw new TypeError('rule `' + type + '` exists');
  }

  if (convertType) {
    if (typeof convertType !== 'string' && typeof convertType !== 'function') {
      throw new TypeError('convertType should be string or function');
    }
    Parameter.CONVERT_MAP[type] = convertType;
  }

  if (typeof check === 'function') {
    TYPE_MAP[type] = check;
    return;
  }

  if (check instanceof RegExp) {
    TYPE_MAP[type] = function (rule, value) {
      return checkString.call(this, { format: check }, value);
    };
    return;
  }

  throw new TypeError('check must be function or regexp');
};

/**
 * Simple type map
 * @type {Object}
 */
var TYPE_MAP = Parameter.TYPE_MAP = {
  number: checkNumber,
  int: checkInt,
  integer: checkInt,
  string: checkString,
  id: checkId,
  date: checkDate,
  dateTime: checkDateTime,
  datetime: checkDateTime,
  boolean: checkBoolean,
  bool: checkBoolean,
  array: checkArray,
  object: checkObject,
  enum: checkEnum,
  email: checkEmail,
  password: checkPassword,
  url: checkUrl
};

var CONVERT_MAP = Parameter.CONVERT_MAP = {
  number: 'number',
  int: 'int',
  integer: 'int',
  string: 'string',
  id: 'string',
  date: 'string',
  dateTime: 'string',
  datetime: 'string',
  boolean: 'bool',
  bool: 'bool',
  email: 'string',
  password: 'string',
  url: 'string'
};

/**
 * format a rule
 * - resolve abbr
 * - resolve `?`
 * - resolve default convertType
 *
 * @param {Mixed} rule
 * @return {Object}
 * @api private
 */

function formatRule(rule) {
  rule = rule || {};
  if (typeof rule === 'string') {
    rule = { type: rule };
  } else if (Array.isArray(rule)) {
    rule = { type: 'enum', values: rule };
  } else if (rule instanceof RegExp) {
    rule = { type: 'string', format: rule };
  }

  if (rule.type && rule.type[rule.type.length - 1] === '?') {
    rule.type = rule.type.slice(0, -1);
    rule.required = false;
  }

  return rule;
}

/**
 * convert param to specific type
 * @param {Object} rule
 * @param {Object} obj
 * @param {String} key
 * @param {Boolean} defaultConvert
 */
function convert(rule, obj, key, defaultConvert) {
  var convertType;
  if (defaultConvert) convertType = CONVERT_MAP[rule.type];
  if (rule.convertType) convertType = rule.convertType;
  if (!convertType) return;

  var value = obj[key];
  // convert type only work for primitive data
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') return;

  // convertType support function
  if (typeof convertType === 'function') {
    obj[key] = convertType(value, obj);
    return;
  }

  switch (convertType) {
    case 'int':
      obj[key] = parseInt(value, 10);
      break;
    case 'string':
      obj[key] = String(value);
      break;
    case 'number':
      obj[key] = Number(obj[key]);
      break;
    case 'bool':
    case 'boolean':
      obj[key] = !!value;
      break;
    default:
      // support convertType function added by addRule
      if (typeof CONVERT_MAP[convertType] === 'function') {
        obj[key] = CONVERT_MAP[rule.type](obj[key]);
      }
  }
}

/**
 * check interger
 * {
 *   max: 100,
 *   min: 0
 * }
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkInt(rule, value) {
  if (typeof value !== 'number' || value % 1 !== 0) {
    return this.t('should be an integer');
  }

  if (rule.hasOwnProperty('max') && value > rule.max) {
    return this.t('should smaller than %s', rule.max);
  }

  if (rule.hasOwnProperty('min') && value < rule.min) {
    return this.t('should bigger than %s', rule.min);
  }
}

/**
 * check number
 * {
 *   max: 100,
 *   min: 0
 * }
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkNumber(rule, value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return this.t('should be a number');
  }
  if (rule.hasOwnProperty('max') && value > rule.max) {
    return this.t('should smaller than %s', rule.max);
  }
  if (rule.hasOwnProperty('min') && value < rule.min) {
    return this.t('should bigger than %s', rule.min);
  }
}

/**
 * check string
 * {
 *   allowEmpty: true, // resolve default convertType to false, alias to empty)
 *   format: /^\d+$/,
 *   max: 100,
 *   min: 0,
 *   trim: false,
 * }
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkString(rule, value) {
  if (typeof value !== 'string') {
    return this.t('should be a string');
  }

  // if required === false, set allowEmpty to true by default
  if (!rule.hasOwnProperty('allowEmpty') && rule.required === false) {
    rule.allowEmpty = true;
  }

  var allowEmpty = rule.hasOwnProperty('allowEmpty') ? rule.allowEmpty : rule.empty;

  if (!value) {
    if (allowEmpty) return;
    return this.t('should not be empty');
  }

  if (rule.hasOwnProperty('max') && value.length > rule.max) {
    return this.t('length should smaller than %s', rule.max);
  }
  if (rule.hasOwnProperty('min') && value.length < rule.min) {
    return this.t('length should bigger than %s', rule.min);
  }

  if (rule.format && !rule.format.test(value)) {
    return rule.message || this.t('should match %s', rule.format);
  }
}

/**
 * check id format
 * format: /^\d+/
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkId(rule, value) {
  return checkString.call(this, { format: ID_RE, allowEmpty: rule.allowEmpty }, value);
}

/**
 * check date format
 * format: YYYY-MM-DD
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkDate(rule, value) {
  return checkString.call(this, { format: DATE_TYPE_RE, allowEmpty: rule.allowEmpty }, value);
}

/**
 * check date time format
 * format: YYYY-MM-DD HH:mm:ss
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkDateTime(rule, value) {
  return checkString.call(this, { format: DATETIME_TYPE_RE, allowEmpty: rule.allowEmpty }, value);
}

/**
 * check boolean
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkBoolean(rule, value) {
  if (typeof value !== 'boolean') {
    return this.t('should be a boolean');
  }
}

/**
 * check enum
 * {
 *   values: [0, 1, 2]
 * }
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkEnum(rule, value) {
  if (!Array.isArray(rule.values)) {
    throw new TypeError('check enum need array type values');
  }
  if (rule.values.indexOf(value) === -1) {
    return this.t('should be one of %s', rule.values.join(', '));
  }
}

/**
 * check email
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkEmail(rule, value) {
  return checkString.call(this, {
    format: EMAIL_RE,
    message: rule.message || this.t('should be an email'),
    allowEmpty: rule.allowEmpty
  }, value);
}

/**
 * check password
 * @param {Object} rule
 * @param {Object} value
 * @param {Object} obj
 * @return {Boolean}
 *
 * @api private
 */

function checkPassword(rule, value, obj) {
  if (!rule.min) {
    rule.min = 6;
  }
  rule.format = PASSWORD_RE;
  var error = checkString.call(this, rule, value);
  if (error) {
    return error;
  }
  if (rule.compare && obj[rule.compare] !== value) {
    return this.t('should equal to %s', rule.compare);
  }
}

/**
 * check url
 *
 * @param {Object} rule
 * @param {Object} value
 * @return {Boolean}
 * @api private
 */

function checkUrl(rule, value) {
  return checkString.call(this, {
    format: URL_RE,
    message: rule.message || this.t('should be a url'),
    allowEmpty: rule.allowEmpty
  }, value);
}

/**
 * check object
 * {
 *   rule: {}
 * }
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkObject(rule, value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
    return this.t('should be an object');
  }

  if (rule.rule) {
    return this.validate(rule.rule, value);
  }
}

/**
 * check array
 * {
 *   type: 'array',
 *   itemType: 'string'
 *   rule: {type: 'string', allowEmpty: true}
 * }
 *
 * {
 *   type: 'array'.
 *   itemType: 'object',
 *   rule: {
 *     name: 'string'
 *   }
 * }
 *
 * @param {Object} rule
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */

function checkArray(rule, value) {
  if (!Array.isArray(value)) {
    return this.t('should be an array');
  }

  if (rule.hasOwnProperty('max') && value.length > rule.max) {
    return this.t('length should smaller than %s', rule.max);
  }
  if (rule.hasOwnProperty('min') && value.length < rule.min) {
    return this.t('length should bigger than %s', rule.min);
  }

  if (!rule.itemType) {
    return;
  }

  var self = this;
  var checker = TYPE_MAP[rule.itemType];
  if (!checker) {
    throw new TypeError('rule type must be one of ' + Object.keys(TYPE_MAP).join(', ') + ', but the following type was passed: ' + rule.itemType);
  }

  var errors = [];
  var subRule = rule.itemType === 'object' ? rule : rule.rule || formatRule(rule.itemType);

  value.forEach(function (v, i) {
    var index = '[' + i + ']';
    var errs = checker.call(self, subRule, v);

    if (typeof errs === 'string') {
      errors.push({
        field: index,
        message: errs,
        code: self.t('invalid')
      });
    }
    if (Array.isArray(errs)) {
      errors = errors.concat(errs.map(function (e) {
        e.field = index + '.' + e.field;
        e.message = e.message;
        return e;
      }));
    }
  });

  return errors;
}


/***/ }),

/***/ "../../node_modules/reflect-metadata/Reflect.js":
/*!*************************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/reflect-metadata/Reflect.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_process@0.11.10@process/browser.js */ "../../node_modules/_process@0.11.10@process/browser.js"), __webpack_require__(/*! ./../_webpack@4.42.1@webpack/buildin/global.js */ "../../node_modules/_webpack@4.42.1@webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!****************************************************************************************!*\
  !*** /Users/lingkun/Documents/Serverless/ant-basement/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./dist/esm/codec.js":
/*!***************************!*\
  !*** ./dist/esm/codec.js ***!
  \***************************/
/*! exports provided: MiniProgramHTTPRequestEncoder, MiniProgramHTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniProgramHTTPRequestEncoder", function() { return MiniProgramHTTPRequestEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniProgramHTTPResponseDecoder", function() { return MiniProgramHTTPResponseDecoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/core/dist/esm/index.js");
/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js/core */ "../../node_modules/crypto-js/core.js");
/* harmony import */ var crypto_js_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js_hmac_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js/hmac-md5 */ "../../node_modules/crypto-js/hmac-md5.js");
/* harmony import */ var crypto_js_hmac_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js_hmac_md5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "../../node_modules/_util@0.11.1@util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error */ "./dist/esm/error.js");






var MiniProgramHTTPRequestEncoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniProgramHTTPRequestEncoder, _super);
    function MiniProgramHTTPRequestEncoder(endpoint, spaceId) {
        var _this = _super.call(this, endpoint) || this;
        _this.spaceId = spaceId;
        _this.prefix = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PREFIX"].CLIENT;
        _this.serviceHeaders = {};
        _this.setBodyField({
            spaceId: spaceId,
        });
        return _this;
    }
    MiniProgramHTTPRequestEncoder.prototype.sign = function (clientSecret) {
        var _a = this.body, spaceId = _a.spaceId, method = _a.method, params = _a.params, token = _a.token, userId = _a.userId;
        var timestamp = Date.now();
        this.setBodyField({
            timestamp: timestamp,
        });
        var signString = '';
        var signObject = {
            spaceId: spaceId,
            timestamp: timestamp,
            method: method,
            params: JSON.stringify(params),
            token: token,
            userId: userId,
        };
        Object.keys(signObject).sort().forEach(function (key) {
            if (signObject[key]) {
                signString = signString + "&" + key + "=" + signObject[key];
            }
        });
        signString = signString.slice(1);
        var sign = crypto_js_hmac_md5__WEBPACK_IMPORTED_MODULE_3___default()(signString, clientSecret).toString(crypto_js_core__WEBPACK_IMPORTED_MODULE_2___default.a.enc.Hex);
        this.setServerlessHeaders({ sign: sign });
    };
    MiniProgramHTTPRequestEncoder.prototype.encodeAsHTTPRequestObject = function (additionalObject) {
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ url: this.url, data: this.body, method: this.method, headers: this.headers, header: this.headers, dataType: 'json' }, additionalObject);
    };
    MiniProgramHTTPRequestEncoder.prototype.clone = function () {
        var encoder = new MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
        encoder.setBodyField(this.body);
        encoder.setBaseHeaders(this.baseHeaders);
        encoder.setServerlessHeaders(this.serverlessHeaders);
        return encoder;
    };
    return MiniProgramHTTPRequestEncoder;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["HTTPRequestEncoder"]));

var MiniProgramHTTPResponseDecoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniProgramHTTPResponseDecoder, _super);
    function MiniProgramHTTPResponseDecoder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ERROR_CODES = [11, 12, 13, 14, 19, 20];
        return _this;
    }
    MiniProgramHTTPResponseDecoder.prototype.setStatusAndBody = function (status, body) {
        _super.prototype.setStatusAndBody.call(this, status, body);
        if (this.ERROR_CODES.indexOf(status) >= 0) {
            this._error = _error__WEBPACK_IMPORTED_MODULE_5__["MPServerlessClientError"].from({
                name: _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].IDE_ERROR,
                code: status.toString(),
                type: _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].IDE_ERROR,
                message: 'request error from Alipay IDE',
            });
        }
    };
    MiniProgramHTTPResponseDecoder.prototype.decode = function (res) {
        this.setHeaders(res.headers || {});
        var body = res.data || res.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        if (body && body.data) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNumber"])(body.data.affectedDocs)) {
                body = Object.assign({}, body, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, body.data));
            }
            else if (Object.prototype.toString.call(body.data) === '[object Object]') {
                body.result = Object.assign({}, body.data);
            }
            else if (Object.prototype.toString.call(body.data) === '[object Array]') {
                body.result = body.data.slice(0);
            }
            else {
                body.result = body.data;
            }
            delete body.data;
        }
        if (/^request:fail+/.test(res.errMsg)) {
            this.setErrorMessage(res.errMsg);
            return _super.prototype.decode.call(this);
        }
        var responseErrorCode = parseInt(res.error, 10);
        if (responseErrorCode) {
            this.setStatusAndBody(responseErrorCode, body);
            return _super.prototype.decode.call(this);
        }
        var responseErrorMessage = res.err;
        if (responseErrorMessage) {
            this.setErrorMessage(responseErrorMessage);
            return _super.prototype.decode.call(this);
        }
        if (res instanceof Error) {
            this.setErrorObject(res);
            return _super.prototype.decode.call(this);
        }
        if (body && typeof body.error === 'object') {
            this.setErrorObject(body.error);
            return _super.prototype.decode.call(this);
        }
        var responseStatusCode = parseInt(res.status || res.statusCode, 10);
        if (responseStatusCode) {
            this.setStatusAndBody(responseStatusCode, body);
            return _super.prototype.decode.call(this);
        }
        this.setStatusAndBody(200, res);
        return _super.prototype.decode.call(this);
    };
    return MiniProgramHTTPResponseDecoder;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["HTTPResponseDecoder"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxrQkFBa0IsRUFFbEIsbUJBQW1CLEVBRW5CLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUE4QmxEO0lBQW1ELGlEQUFrQjtJQVNuRSx1Q0FBWSxRQUFnQixFQUFZLE9BQWU7UUFBdkQsWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FLaEI7UUFOdUMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVI3QyxZQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QixvQkFBYyxHQUEwQixFQUFFLENBQUM7UUFVbkQsS0FBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixPQUFPLFNBQUE7U0FDUixDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQU1NLDRDQUFJLEdBQVgsVUFBWSxZQUFvQjtRQUN4QixJQUFBLGNBQXNELEVBQXBELG9CQUFPLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUFFLGdCQUFLLEVBQUUsa0JBQW9CLENBQUM7UUFDN0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsU0FBUyxXQUFBO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU8sU0FBQTtZQUNQLFNBQVMsV0FBQTtZQUNULE1BQU0sUUFBQTtZQUNOLE1BQU0sRUFB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

/***/ }),

/***/ "./dist/esm/error.js":
/*!***************************!*\
  !*** ./dist/esm/error.js ***!
  \***************************/
/*! exports provided: MPServerlessClientError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPServerlessClientError", function() { return MPServerlessClientError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/core/dist/esm/index.js");


var MPServerlessClientError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MPServerlessClientError, _super);
    function MPServerlessClientError(name, code, type, message) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        _this.code = code;
        _this.type = type;
        _this.message = message;
        return _this;
    }
    MPServerlessClientError.from = function (raw) {
        return new MPServerlessClientError(raw.name, raw.code, raw.type, raw.message);
    };
    return MPServerlessClientError;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BuiltInError"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFbkU7SUFBNkMsMkNBQVk7SUFDdkQsaUNBQ1MsSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osT0FBZTtRQUp4QixZQU1FLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBTlEsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBTyxHQUFQLE9BQU8sQ0FBUTs7SUFHeEIsQ0FBQztJQU9hLDRCQUFJLEdBQWxCLFVBQW1CLEdBQW9CO1FBQ3JDLE9BQU8sSUFBSSx1QkFBdUIsQ0FDaEMsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLE9BQU8sQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUE2QyxZQUFZLEdBdUJ4RCJ9

/***/ }),

/***/ "./dist/esm/index.js":
/*!***************************!*\
  !*** ./dist/esm/index.js ***!
  \***************************/
/*! exports provided: MPServerless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpserverless__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpserverless */ "./dist/esm/mpserverless.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MPServerless", function() { return _mpserverless__WEBPACK_IMPORTED_MODULE_0__["MPServerless"]; });


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDIn0=

/***/ }),

/***/ "./dist/esm/mpserverless.js":
/*!**********************************!*\
  !*** ./dist/esm/mpserverless.js ***!
  \**********************************/
/*! exports provided: MPServerless */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPServerless", function() { return MPServerless; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/core/dist/esm/index.js");
/* harmony import */ var _ant_basement_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-basement/services */ "./node_modules/@ant-basement/services/dist/esm/index.js");
/* harmony import */ var _transport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transport */ "./dist/esm/transport.js");
/* harmony import */ var mime_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mime/lite */ "../../node_modules/mime/lite.js");
/* harmony import */ var mime_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mime_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error */ "./dist/esm/error.js");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network */ "./dist/esm/network.js");







var MiniProgramFileService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniProgramFileService, _super);
    function MiniProgramFileService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiniProgramFileService.prototype.uploadFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var relativePath, extension, meta, headers, fileSize, getFileInfo, fileInfo, imageExt, getImageInfo, imageInfo, uploadRes, uploadOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(options.filePath && typeof options.filePath === 'string', 'missing options.filePath');
                        relativePath = options.filePath.replace(/(.*):\/\//, '');
                        extension = relativePath.split('.').pop();
                        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["WHITELIST_EXTENSIONS"].indexOf(extension.toLowerCase()) >= 0, "\u76EE\u524D\u4E0D\u652F\u6301 " + extension + " \u7C7B\u578B\u6587\u4EF6");
                        meta = Object.keys(options.meta || {}).reduce(function (accu, key) {
                            accu["x-oss-meta-" + key] = options.meta[key];
                            return accu;
                        }, {});
                        headers = options.headers ? _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["OSSUploadHeaderList"].reduce(function (accu, key) {
                            var fieldName = key.replace(/\-[A-Z]/g, function (match) { return match[1]; }).replace(/^[A-Z]/, function (match) { return match.toLowerCase(); });
                            if (options.headers.hasOwnProperty(fieldName))
                                accu[key] = options.headers[fieldName];
                            return accu;
                        }, {}) : {};
                        fileSize = options.fileSize;
                        getFileInfo = this.transport.getFileInfo;
                        if (!(!fileSize && getFileInfo)) return [3, 2];
                        return [4, getFileInfo({
                                apFilePath: options.filePath,
                            })];
                    case 1:
                        fileInfo = _a.sent();
                        fileSize = fileInfo.body.size;
                        _a.label = 2;
                    case 2:
                        imageExt = options.extension;
                        getImageInfo = this.transport.getImageInfo;
                        if (!(!imageExt && getImageInfo)) return [3, 4];
                        return [4, getImageInfo({
                                src: options.filePath,
                            })];
                    case 3:
                        imageInfo = _a.sent();
                        imageExt = imageInfo.body.type;
                        _a.label = 4;
                    case 4: return [4, this.getOSSUploadOptionsFromPath(relativePath, options.path, fileSize)];
                    case 5:
                        uploadRes = _a.sent();
                        if (uploadRes.error) {
                            throw new _error__WEBPACK_IMPORTED_MODULE_5__["MPServerlessClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].INTERFACE_ERROR, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].INTERFACE_RESPONSE_FAILED, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].COMMON_ERROR, uploadRes.error.message);
                        }
                        uploadOptions = Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["OSSUploadResponseFormat"])(uploadRes.result);
                        return [4, this.uploadFileToOSS(options, uploadOptions, headers, meta)];
                    case 6:
                        _a.sent();
                        return [4, this.reportOSSUpload(uploadOptions.id, mime_lite__WEBPACK_IMPORTED_MODULE_4___default.a.getType(imageExt))];
                    case 7:
                        _a.sent();
                        return [2, {
                                fileUrl: "https://" + uploadOptions.cdnDomain + "/" + uploadOptions.key,
                                filePath: uploadOptions.key,
                            }];
                }
            });
        });
    };
    MiniProgramFileService.prototype.uploadFileToOSS = function (fileUploadOptions, ossUploadOptions, headers, meta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, uploadHeader, contentType;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = ['key', 'policy', 'Signature', 'OSSAccessKeyId'].reduce(function (accu, key) {
                            accu[key] = ossUploadOptions[key];
                            return accu;
                        }, {});
                        uploadHeader = {};
                        if (fileUploadOptions.extension) {
                            contentType = mime_lite__WEBPACK_IMPORTED_MODULE_4___default.a.getType(fileUploadOptions.extension);
                            if (!contentType) {
                                throw new _error__WEBPACK_IMPORTED_MODULE_5__["MPServerlessClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].VALIDATION_ERROR, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].VALIDATION_FAILED, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].COMMON_ERROR, '文件扩展错误，无法解析正确的 MIME');
                            }
                            uploadHeader['Content-Type'] = contentType;
                        }
                        headers['Cache-Control'] = 'max-age=2592000';
                        if (ossUploadOptions.securityToken) {
                            headers['x-oss-security-token'] = ossUploadOptions.securityToken;
                        }
                        return [4, this.transport.upload("https://" + ossUploadOptions.host, Object.assign({ success_action_status: 200 }, headers, meta, options), 'file', fileUploadOptions.filePath, uploadHeader)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return MiniProgramFileService;
}(_ant_basement_services__WEBPACK_IMPORTED_MODULE_2__["FileService"]));
var MPServerless = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MPServerless, _super);
    function MPServerless(appGlobal, options) {
        var _this = _super.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { httpClient: appGlobal, httpTransport: _transport__WEBPACK_IMPORTED_MODULE_3__["MiniProgramHTTPTransport"], logger: appGlobal.logger })) || this;
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(options.clientSecret, 'clientSecret is required');
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(options.appId, 'appId is required');
        _this.db = new _ant_basement_services__WEBPACK_IMPORTED_MODULE_2__["DbService"](_this.transport);
        _this.user = new _ant_basement_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"](_this.transport);
        _this.file = new MiniProgramFileService(_this.transport);
        _this.function = new _ant_basement_services__WEBPACK_IMPORTED_MODULE_2__["FunctionService"](_this.transport);
        _this.network = new _network__WEBPACK_IMPORTED_MODULE_6__["NetworkService"](_this.transport);
        _this.user.authorize = function (options) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var hasToken, token, token;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasToken = this.transport.hasToken();
                        if (!(options.authType === _transport__WEBPACK_IMPORTED_MODULE_3__["AuthType"].ANONYMOUS)) return [3, 2];
                        return [4, this.transport.anonymousAuthorize(options)];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            return [2, {
                                    success: true,
                                }];
                        }
                        return [2, {
                                success: false,
                            }];
                    case 2:
                        if (!(!hasToken || hasToken && this.transport.authType !== options.authType)) return [3, 4];
                        return [4, this.transport.authorize(options)];
                    case 3:
                        token = _a.sent();
                        if (token) {
                            return [2, {
                                    success: true,
                                }];
                        }
                        return [2, {
                                success: false,
                            }];
                    case 4: return [2];
                }
            });
        }); };
        return _this;
    }
    Object.defineProperty(MPServerless.prototype, "version", {
        get: function () {
            return '2.2.5';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MPServerless.prototype, "ua", {
        get: function () {
            return 'pkg_name:@alicloud/mpserverless-sdk;ver:2.2.5;';
        },
        enumerable: true,
        configurable: true
    });
    MPServerless.prototype.createTransport = function (options) {
        _super.prototype.createTransport.call(this, options);
        this.transport.setAppSecret(options.clientSecret).setUA(this.ua);
    };
    return MPServerless;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["Basement"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFFBQVEsSUFBSSxJQUFJLEVBQ2hCLG9CQUFvQixFQUVwQixNQUFNLEVBSU4sbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULHVCQUF1QixHQUN4QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLEdBQ3JELE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHdCQUF3QixFQUFvQixRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkYsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsY0FBYyxHQUNmLE1BQU0sV0FBVyxDQUFDO0FBRW5CO0lBQXFDLDBDQUFXO0lBQWhEOztJQW9HQSxDQUFDO0lBOUZjLDJDQUFVLEdBQXZCLFVBQXdCLE9BQTBCOzs7Ozs7d0JBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQzt3QkFFdkYsWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDekQsU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ2hELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLG9DQUFTLFNBQVMsOEJBQU8sQ0FBQyxDQUFDO3dC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

/***/ }),

/***/ "./dist/esm/network.js":
/*!*****************************!*\
  !*** ./dist/esm/network.js ***!
  \*****************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/core/dist/esm/index.js");


var NetworkService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkService, _super);
    function NetworkService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkService.prototype.forward = function (method, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var request, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = this.getEncoder();
                        request.setBodyField({
                            method: method,
                            params: params,
                        });
                        return [4, this.transport.request(request)];
                    case 1:
                        response = _a.sent();
                        return [2, response.body];
                }
            });
        });
    };
    return NetworkService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsV0FBVyxHQUVaLE1BQU0sb0JBQW9CLENBQUM7QUFFNUI7SUFBb0Msa0NBQVc7SUFBL0M7O0lBZ0JBLENBQUM7SUFWYyxnQ0FBTyxHQUFwQixVQUFxQixNQUFjLEVBQUUsTUFBMEI7Ozs7Ozt3QkFDdkQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxRQUFBOzRCQUNOLE1BQU0sUUFBQTt5QkFDUCxDQUFDLENBQUM7d0JBRWMsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQWhELFFBQVEsR0FBRyxTQUFxQzt3QkFDdEQsV0FBTyxRQUFRLENBQUMsSUFBSSxFQUFDOzs7O0tBQ3RCO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaEJELENBQW9DLFdBQVcsR0FnQjlDIn0=

/***/ }),

/***/ "./dist/esm/transport.js":
/*!*******************************!*\
  !*** ./dist/esm/transport.js ***!
  \*******************************/
/*! exports provided: AuthType, MiniProgramHTTPTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthType", function() { return AuthType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniProgramHTTPTransport", function() { return MiniProgramHTTPTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/core/dist/esm/index.js");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codec */ "./dist/esm/codec.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./dist/esm/error.js");




var AuthType;
(function (AuthType) {
    AuthType["ANONYMOUS"] = "anonymous";
    AuthType["DEFAULT"] = "";
})(AuthType || (AuthType = {}));
var MiniProgramHTTPTransport = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniProgramHTTPTransport, _super);
    function MiniProgramHTTPTransport(endpoint, library) {
        var _this = _super.call(this, endpoint, library) || this;
        _this.scope = 'auth_base';
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(library.uploadFile, 'missing uploadFile');
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(library.getAuthCode, 'missing getAuthCode');
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["assert"])(library.request, 'missing request');
        _this.uploadFile = _this.wrap(library.uploadFile);
        _this.getAuthCode = _this.wrap(library.getAuthCode);
        _this.httpRequest = _this.wrap(library.request);
        if (library.getFileInfo) {
            _this.getFileInfo = _this.wrap(library.getFileInfo);
        }
        if (library.getImageInfo) {
            _this.getImageInfo = _this.wrap(library.getImageInfo);
        }
        return _this;
    }
    MiniProgramHTTPTransport.prototype.getEncoder = function () {
        return new _codec__WEBPACK_IMPORTED_MODULE_2__["MiniProgramHTTPRequestEncoder"](this.endpoint, this.spaceId);
    };
    MiniProgramHTTPTransport.prototype.request = function (encoder, retried) {
        if (retried === void 0) { retried = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cloned, token, encoded, decoded, e_1, isUnAuthorized;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cloned = encoder.clone();
                        return [4, this.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        encoder.setBodyField({
                            token: token,
                        });
                        encoder.sign(this.appSecret);
                        encoder.setBaseHeaders({
                            'Content-Type': 'application/json',
                            'x-basement-token': token,
                        });
                        if (this.ua) {
                            encoder.setBaseHeaders({
                                'x-serverless-ua': this.ua,
                            });
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 8]);
                        encoded = encoder.encodeAsHTTPRequestObject({
                            timeout: this.timeout,
                            dataType: 'json',
                        });
                        this.logger.info('request encode data', encoded);
                        return [4, this.httpRequest(encoded)];
                    case 3:
                        decoded = _a.sent();
                        return [2, decoded];
                    case 4:
                        e_1 = _a.sent();
                        this.logger.error('request error', e_1);
                        isUnAuthorized = e_1.error.code === 'GATEWAY_INVALID_TOKEN'
                            || e_1.error.code === 'InvalidParameter.InvalidToken' || e_1.status === _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["HTTP_UNAUTHORIZED"];
                        if (!isUnAuthorized) return [3, 7];
                        if (retried) {
                            throw new _error__WEBPACK_IMPORTED_MODULE_3__["MPServerlessClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].UNAUTHORIZED_ERROR, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].AUTHENTICATION_FAILED, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].COMMON_ERROR, 'authentication failed');
                        }
                        return [4, this.getAccessToken(true)];
                    case 5:
                        _a.sent();
                        return [4, this.request(cloned, true)];
                    case 6: return [2, _a.sent()];
                    case 7:
                        if (e_1.error) {
                            throw e_1.error;
                        }
                        throw e_1;
                    case 8: return [2];
                }
            });
        });
    };
    MiniProgramHTTPTransport.prototype.hasToken = function () {
        return !!this.accessToken;
    };
    Object.defineProperty(MiniProgramHTTPTransport.prototype, "authType", {
        get: function () {
            return this.currentAuthType;
        },
        enumerable: true,
        configurable: true
    });
    MiniProgramHTTPTransport.prototype.authorize = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.pendingRequest = this
                    .getAuthCode({ scopes: this.scope })
                    .then(function (res) {
                    _this.logger.info("Request authcode is " + (res.body.authCode || res.body.code) + " ");
                    return res.body.authCode || res.body.code;
                })
                    .then(function (authCode) {
                    var encoder = _this.getEncoder();
                    encoder.setBodyField({
                        method: 'serverless.auth.user.authorize',
                        params: {
                            authProvider: options.authProvider || 'alipay_openapi',
                            clientIdentifier: _this.appId,
                            authCode: authCode,
                        },
                    });
                    encoder.sign(_this.appSecret);
                    encoder.setBaseHeaders({ 'Content-Type': 'application/json' });
                    if (_this.ua) {
                        encoder.setBaseHeaders({
                            'x-serverless-ua': _this.ua,
                        });
                    }
                    var encoded = encoder.encodeAsHTTPRequestObject({
                        timeout: _this.timeout,
                        dataType: 'json',
                    });
                    return _this.httpRequest(encoded);
                })
                    .then(function (res) {
                    _this.logger.info('Request accessToken ' + (res.body.success ? 'success' : 'failed'));
                    if (res.body && res.body.result) {
                        _this.authorizeOptions = options;
                        _this.accessToken = res.body.result.accessToken;
                        _this.currentAuthType = AuthType.DEFAULT;
                    }
                    _this.pendingRequest = null;
                    return Promise.resolve(_this.accessToken);
                });
                return [2, this.pendingRequest];
            });
        });
    };
    MiniProgramHTTPTransport.prototype.anonymousAuthorize = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var encoder, encoded;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                encoder = this.getEncoder();
                encoder.setBodyField({
                    method: 'serverless.auth.user.anonymousAuthorize',
                    params: {
                        clientIdentifier: this.appId,
                    },
                });
                encoder.sign(this.appSecret);
                encoder.setBaseHeaders({ 'Content-Type': 'application/json' });
                if (this.ua) {
                    encoder.setBaseHeaders({
                        'x-serverless-ua': this.ua,
                    });
                }
                encoded = encoder.encodeAsHTTPRequestObject({
                    timeout: this.timeout,
                    dataType: 'json',
                });
                this.pendingRequest = this.httpRequest(encoded)
                    .then(function (res) {
                    _this.logger.info('Request accessToken ' + (res.body.success ? 'success' : 'failed'));
                    if (res.body && res.body.result) {
                        _this.authorizeOptions = options;
                        _this.accessToken = res.body.result.accessToken;
                        _this.currentAuthType = AuthType.ANONYMOUS;
                    }
                    _this.pendingRequest = null;
                    return Promise.resolve(_this.accessToken);
                });
                return [2, this.pendingRequest];
            });
        });
    };
    MiniProgramHTTPTransport.prototype.getAccessToken = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.pendingRequest) {
                    this.logger.info('getAccessToken: reuse');
                    return [2, this.pendingRequest];
                }
                if (!this.accessToken) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_3__["MPServerlessClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].UNAUTHORIZED_ERROR, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].UNAUTHENTICATION, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].COMMON_ERROR, '未进行用户授权，请先调用三方授权或匿名授权');
                }
                if (refresh && this.authorizeOptions) {
                    this.logger.info('getAccessToken: start');
                    if (this.authorizeOptions.authType === AuthType.ANONYMOUS) {
                        return [2, this.anonymousAuthorize(this.authorizeOptions)];
                    }
                    return [2, this.authorize(this.authorizeOptions)];
                }
                return [2, this.accessToken];
            });
        });
    };
    MiniProgramHTTPTransport.prototype.upload = function (host, formData, fileName, filePath, header) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info('upload with params');
                        this.logger.info(JSON.stringify(formData, null, 2));
                        return [4, this.uploadFile({
                                url: host,
                                formData: formData,
                                fileName: fileName,
                                name: fileName,
                                filePath: filePath,
                                fileType: 'image',
                                header: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, header), { 'X-OSS-server-side-encrpytion': 'AES256' }),
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MiniProgramHTTPTransport.prototype.wrap = function (myMethod) {
        var _this = this;
        return function (args) {
            return new Promise(function (resolve, reject) {
                myMethod(Object.assign(args, {
                    complete: function (res) {
                        if (res === void 0) { res = {}; }
                        _this.logger.info('completed request');
                        _this.logger.info(JSON.stringify(res, null, 2));
                        var decoder = new _codec__WEBPACK_IMPORTED_MODULE_2__["MiniProgramHTTPResponseDecoder"]();
                        var response = decoder.decode(res);
                        if (response.error) {
                            return reject(response);
                        }
                        return resolve(response);
                    },
                }));
            });
        };
    };
    return MiniProgramHTTPTransport;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["HTTPTransport"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLGFBQWEsRUFHYixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBRVQsTUFBTSxHQUVQLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUdMLDZCQUE2QixFQUM3Qiw4QkFBOEIsR0FHL0IsTUFBTSxTQUFTLENBQUM7QUFDakIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBY2xELE1BQU0sQ0FBTixJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDbEIsbUNBQXVCLENBQUE7SUFDdkIsd0JBQVksQ0FBQTtBQUNkLENBQUMsRUFIVyxRQUFRLEtBQVIsUUFBUSxRQUduQjtBQUVEO0lBQThDLDRDQUFhO0lBWXpELGtDQUNFLFFBQWdCLEVBQ2hCLE9BQVk7UUFGZCxZQUlFLGtCQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FjekI7UUEzQlMsV0FBSyxHQUFlLFdBQVcsQ0FBQztRQWN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUUzQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEOztJQUNILENBQUM7SUFNTSw2Q0FBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBT1ksMENBQU8sR0FBcEIsVUFDRSxPQUFzQyxFQUN0QyxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLGVBQXdCOzs7Ozs7d0JBRWxCLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBRWpCLFdBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBbkMsS0FBSyxHQUFHLFNBQTJCO3dCQUN6QyxPQUFPLENBQUMsWUFBWSxDQUFDOzRCQUNuQixLQUFLLE9BQUE7eUJBQ04sQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsY0FBYyxDQUFDOzRCQUNyQixjQUFjLEVBQUUsa0JBQWtCOzRCQUNsQyxrQkFBa0IsRUFBRSxLQUFLO3lCQUMxQixDQUFDLENBQUM7d0JBQ0gsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFOzRCQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0NBQ3JCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFOzZCQUMzQixDQUFDLENBQUM7eUJBQ0o7Ozs7d0JBR08sT0FBTyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQzs0QkFDaEQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPOzRCQUNyQixRQUFRLEVBQUUsTUFBTTt5QkFDakIsQ0FBQyxDQUFDO3dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUNqQyxXQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUF6QyxPQUFPLEdBQUcsU0FBK0I7d0JBQy9DLFdBQU8sT0FBTyxFQUFDOzs7d0JBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEdBQUMsQ0FBQyxDQUFDO3dCQUNoQyxjQUFjLEdBQUcsR0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssdUJBQXVCOytCQUM1RCxHQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSywrQkFBK0IsSUFBSSxHQUFDLENBQUMsTUFBTSxLQUFLLGlCQUFpQixDQUFDOzZCQUVsRixjQUFjLEVBQWQsY0FBYzt3QkFDaEIsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsTUFBTSxJQUFJLHVCQUF1QixDQUMvQixTQUFTLENBQUMsa0JBQWtCLEVBQzVCLFNBQVMsQ0FBQyxxQkFBcUIsRUFDL0IsU0FBUyxDQUFDLFlBQVksRUFDdEIsdUJBQXVCLENBQ3hCLENBQUM7eUJBQ0g7d0JBRUQsV0FBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzt3QkFDekIsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBQTs0QkFBdkMsV0FBTyxTQUFnQyxFQUFDOzt3QkFFMUMsSUFBSSxHQUFDLENBQUMsS0FBSyxFQUFFOzRCQUNYLE1BQU0sR0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDZjt3QkFDRCxNQUFNLEdBQUMsQ0FBQzs7Ozs7S0FFWDtJQUtNLDJDQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFLRCxzQkFBVyw4Q0FBUTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQU9ZLDRDQUFTLEdBQXRCLFVBQXVCLE9BQXlCOzs7O2dCQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUk7cUJBQ3ZCLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUE0QixDQUFDO3FCQUM3RCxJQUFJLENBQUMsVUFBQyxHQUF1QjtvQkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFHLENBQUMsQ0FBQztvQkFDL0UsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUMsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFDLFFBQWdCO29CQUNyQixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7d0JBQ25CLE1BQU0sRUFBRSxnQ0FBZ0M7d0JBQ3hDLE1BQU0sRUFBRTs0QkFDTixZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksSUFBSSxnQkFBZ0I7NEJBQ3RELGdCQUFnQixFQUFFLEtBQUksQ0FBQyxLQUFLOzRCQUM1QixRQUFRLFVBQUE7eUJBQ1Q7cUJBQ0YsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxLQUFJLENBQUMsRUFBRSxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUM7NEJBQ3JCLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxFQUFFO3lCQUMzQixDQUFDLENBQUM7cUJBQ0o7b0JBRUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDO3dCQUNoRCxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU87d0JBQ3JCLFFBQVEsRUFBRSxNQUFNO3FCQUNqQixDQUFDLENBQUM7b0JBQ0gsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUMsR0FBdUI7b0JBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDckYsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUMvQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDL0MsS0FBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUN6QztvQkFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDM0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7Z0JBRUwsV0FBTyxJQUFJLENBQUMsY0FBYyxFQUFDOzs7S0FDNUI7SUFNWSxxREFBa0IsR0FBL0IsVUFBZ0MsT0FBeUI7Ozs7O2dCQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNuQixNQUFNLEVBQUUseUNBQXlDO29CQUNqRCxNQUFNLEVBQUU7d0JBQ04sZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7cUJBQzdCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDWCxPQUFPLENBQUMsY0FBYyxDQUFDO3dCQUNyQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDM0IsQ0FBQyxDQUFDO2lCQUNKO2dCQUVLLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUM7b0JBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztvQkFDckIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO3FCQUM1QyxJQUFJLENBQUMsVUFBQyxHQUF1QjtvQkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyRixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUMvQyxLQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7cUJBQzNDO29CQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUMzQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFFTCxXQUFPLElBQUksQ0FBQyxjQUFjLEVBQUM7OztLQUM1QjtJQU9ZLGlEQUFjLEdBQTNCLFVBQTRCLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7OztnQkFDbEQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUMxQyxXQUFPLElBQUksQ0FBQyxjQUFjLEVBQUM7aUJBQzVCO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixNQUFNLElBQUksdUJBQXVCLENBQy9CLFNBQVMsQ0FBQyxrQkFBa0IsRUFDNUIsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsWUFBWSxFQUN0Qix1QkFBdUIsQ0FDeEIsQ0FBQztpQkFDSDtnQkFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0JBQzFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsU0FBUyxFQUFFO3dCQUN6RCxXQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBQztxQkFDdkQ7b0JBQ0QsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO2lCQUM5QztnQkFFRCxXQUFPLElBQUksQ0FBQyxXQUFXLEVBQUM7OztLQUN6QjtJQVVZLHlDQUFNLEdBQW5CLFVBQ0UsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLE1BQThCOzs7Ozt3QkFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdDLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQ0FDM0IsR0FBRyxFQUFFLElBQUk7Z0NBQ1QsUUFBUSxVQUFBO2dDQUNSLFFBQVEsVUFBQTtnQ0FDUixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxRQUFRLFVBQUE7Z0NBQ1IsUUFBUSxFQUFFLE9BQU87Z0NBQ2pCLE1BQU0sd0JBQ0QsTUFBTSxLQUNULDhCQUE4QixFQUFFLFFBQVEsR0FDekM7NkJBQ0YsQ0FBQyxFQUFBOzRCQVhGLFdBQU8sU0FXTCxFQUFDOzs7O0tBQ0o7SUFPUyx1Q0FBSSxHQUFkLFVBQWUsUUFBUTtRQUF2QixpQkFrQkM7UUFqQkMsT0FBTyxVQUFBLElBQUk7WUFDVCxPQUFPLElBQUksT0FBTyxDQUFxQixVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNyRCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQzNCLFFBQVEsRUFBRSxVQUFDLEdBQWE7d0JBQWIsb0JBQUEsRUFBQSxRQUFhO3dCQUN0QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUN0QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsSUFBTSxPQUFPLEdBQUcsSUFBSSw4QkFBOEIsRUFBRSxDQUFDO3dCQUNyRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7NEJBQ2xCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN6Qjt3QkFFRCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztpQkFDRixDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQS9SRCxDQUE4QyxhQUFhLEdBK1IxRCJ9

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/basement.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/basement.js ***!
  \**************************************************************/
/*! exports provided: Basement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basement", function() { return Basement; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./node_modules/@ant-basement/core/dist/esm/utility/index.js");

var Basement = (function () {
    function Basement(options) {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options, 'options is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.spaceId, 'spaceId is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.endpoint, 'endpoint is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.httpClient, 'http client is required');
        this._debug = false;
        this._logger = options.logger || _utility__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"];
        this.options = options;
        this.createTransport(options);
    }
    Basement.prototype.setDebugFlag = function (flag) {
        this._debug = flag;
        this.transport.setLogger(this.logger);
    };
    Object.defineProperty(Basement.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Basement.prototype, "logger", {
        get: function () {
            return this._debug ? this._logger : _utility__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"];
        },
        enumerable: true,
        configurable: true
    });
    Basement.prototype.createTransport = function (options) {
        var Klass = options.httpTransport;
        this.transport = new Klass(options.endpoint, options.httpClient);
        this.transport.setAppId(options.appId);
        this.transport.setLogger(this.logger);
        this.transport.setSpaceId(options.spaceId);
        this.transport.setTimeout(options.timeout);
    };
    return Basement;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJaEQ7SUFNRSxrQkFBWSxPQUF3QjtRQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFPTSwrQkFBWSxHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBTUQsc0JBQVcsMkJBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw0QkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRVMsa0NBQWUsR0FBekIsVUFBMEIsT0FBd0I7UUFDaEQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFwREQsSUFvREMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/codec/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/codec/index.js ***!
  \*****************************************************************/
/*! exports provided: BaseEncoder, HTTPRequestEncoder, BaseDecoder, HTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./node_modules/@ant-basement/core/dist/esm/codec/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["BaseEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["HTTPRequestEncoder"]; });

/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ "./node_modules/@ant-basement/core/dist/esm/codec/response.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return _response__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return _response__WEBPACK_IMPORTED_MODULE_1__["HTTPResponseDecoder"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxZQUFZLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/codec/request.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/codec/request.js ***!
  \*******************************************************************/
/*! exports provided: BaseEncoder, HTTPRequestEncoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return BaseEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return HTTPRequestEncoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./node_modules/@ant-basement/core/dist/esm/utility/index.js");



var BaseEncoder = (function () {
    function BaseEncoder() {
    }
    return BaseEncoder;
}());

var HTTPRequestEncoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTPRequestEncoder, _super);
    function HTTPRequestEncoder(endpoint, prefix) {
        var _this = _super.call(this) || this;
        _this.endpoint = endpoint;
        _this.body = {};
        _this.query = {};
        _this.method = _constant__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].POST;
        _this.prefix = '';
        _this.baseHeaders = {};
        _this.serviceHeaders = {};
        _this.serverlessHeaders = {};
        if (prefix) {
            _this.prefix = prefix;
        }
        return _this;
    }
    Object.defineProperty(HTTPRequestEncoder.prototype, "url", {
        get: function () {
            return [
                this.endpoint + this.prefix,
            ]
                .filter(function (p) { return !!p; })
                .join('?');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTTPRequestEncoder.prototype, "headers", {
        get: function () {
            var _this = this;
            var normalizedHeaders = Object
                .keys(this.serverlessHeaders)
                .reduce(function (accu, prop) {
                var key = "" + _constant__WEBPACK_IMPORTED_MODULE_1__["SERVERLESS_HEADER_PREFIX"] + Object(_utility__WEBPACK_IMPORTED_MODULE_2__["camelToLisp"])(prop);
                accu[key] = _this.serverlessHeaders[prop];
                return accu;
            }, {});
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.baseHeaders), normalizedHeaders);
        },
        enumerable: true,
        configurable: true
    });
    HTTPRequestEncoder.prototype.setBodyField = function (fields) {
        this.body = Object.assign({}, this.body, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fields));
        return this;
    };
    HTTPRequestEncoder.prototype.setUserId = function (userId) {
        this.setBodyField({
            userId: userId,
        });
        return this;
    };
    HTTPRequestEncoder.prototype.setBaseHeaders = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.baseHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.baseHeaders), Object.keys(headers).reduce(function (accu, key) {
            if (headers[key]) {
                accu[key] = headers[key].toString();
            }
            return accu;
        }, {}));
        return this;
    };
    HTTPRequestEncoder.prototype.setServerlessHeaders = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.serverlessHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.serverlessHeaders), Object.keys(headers).reduce(function (accu, key) {
            if (headers[key]) {
                accu[key] = headers[key].toString();
            }
            return accu;
        }, {}));
        return this;
    };
    HTTPRequestEncoder.prototype.encode = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return {
            url: this.url,
            body: this.body,
            method: this.method,
            headers: this.headers,
        };
    };
    return HTTPRequestEncoder;
}(BaseEncoder));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2RlYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFVLE1BQU0sYUFBYSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJekM7SUFBQTtJQU9BLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOztBQVNEO0lBQXdDLHNDQUFXO0lBVWpELDRCQUFzQixRQUFnQixFQUFFLE1BQWU7UUFBdkQsWUFDRSxpQkFBTyxTQUtSO1FBTnFCLGNBQVEsR0FBUixRQUFRLENBQVE7UUFUL0IsVUFBSSxHQUF1QixFQUFFLENBQUM7UUFDOUIsV0FBSyxHQUEwQixFQUFFLENBQUM7UUFDbEMsWUFBTSxHQUFlLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDbEMsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixpQkFBVyxHQUEwQixFQUFFLENBQUM7UUFDeEMsb0JBQWMsR0FBMEIsRUFBRSxDQUFDO1FBQzNDLHVCQUFpQixHQUEwQixFQUFFLENBQUM7UUFNdEQsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7SUFDSCxDQUFDO0lBRUQsc0JBQVcsbUNBQUc7YUFBZDtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTthQUM1QjtpQkFDRSxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQztpQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBTzthQUFsQjtZQUFBLGlCQWVDO1lBWkMsSUFBTSxpQkFBaUIsR0FBRyxNQUFNO2lCQUM3QixJQUFJLENB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

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/codec/response.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/codec/response.js ***!
  \********************************************************************/
/*! exports provided: BaseDecoder, HTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return BaseDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return HTTPResponseDecoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/core/dist/esm/error/index.js");


var BaseDecoder = (function () {
    function BaseDecoder() {
    }
    return BaseDecoder;
}());

var HTTPResponseDecoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTPResponseDecoder, _super);
    function HTTPResponseDecoder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DEMARCATION_STATUS = 400;
        _this._body = {};
        _this._headers = {};
        return _this;
    }
    HTTPResponseDecoder.prototype.setHeaders = function (headers) {
        this._headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._headers), headers);
    };
    HTTPResponseDecoder.prototype.setStatusAndBody = function (status, body) {
        this._status = status;
        this._body = body;
        if (status >= this.DEMARCATION_STATUS) {
            this._error = _error__WEBPACK_IMPORTED_MODULE_1__["BasementClientError"].from(body);
        }
    };
    HTTPResponseDecoder.prototype.setErrorMessage = function (message) {
        this._error = new Error(message);
    };
    HTTPResponseDecoder.prototype.setErrorObject = function (error) {
        this._error = error;
    };
    HTTPResponseDecoder.prototype.decode = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        return {
            body: this._body || {},
            error: this._error,
            status: this._status,
            headers: this._headers,
        };
    };
    return HTTPResponseDecoder;
}(BaseDecoder));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUkvQztJQUFBO0lBT0EsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7O0FBU0Q7SUFBeUMsdUNBQVc7SUFBcEQ7UUFBQSxxRUErREM7UUE5RFEsd0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFdBQUssR0FBdUIsRUFBRSxDQUFDO1FBRy9CLGNBQVEsR0FBMEIsRUFBRSxDQUFDOztJQTBEakQsQ0FBQztJQW5EUSx3Q0FBVSxHQUFqQixVQUFrQixPQUE4QjtRQUM5QyxJQUFJLENBQUMsUUFBUSx5QkFDUixJQUFJLENBQUMsUUFBUSxHQUNiLE9BQU8sQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQU9NLDhDQUFnQixHQUF2QixVQUF3QixNQUFjLEVBQUUsSUFBUztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBTU0sNkNBQWUsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBd0IsQ0FBQztJQUMxRCxDQUFDO0lBT00sNENBQWMsR0FBckIsVUFBc0IsS0FBWTtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQTRCLENBQUM7SUFDN0MsQ0FBQztJQU9NLG9DQUFNLEdBQWI7UUFBYyxXQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLHNCQUFXOztRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUF5QyxXQUFXLEdBK0RuRCJ9

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/constant/error.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/constant/error.js ***!
  \********************************************************************/
/*! exports provided: DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return DEFAULT_HTTP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return HTTP_UNAUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return ErrorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
var DEFAULT_HTTP_STATUS = 500;
var HTTP_UNAUTHORIZED = 401;
var ErrorName;
(function (ErrorName) {
    ErrorName["VALIDATION_ERROR"] = "ValidationError";
    ErrorName["UNSUPPORTED_ERROR"] = "UnsupportedError";
    ErrorName["UNAUTHORIZED_ERROR"] = "UnauthorizedError";
    ErrorName["INTERFACE_ERROR"] = "InterfaceError";
    ErrorName["IDE_ERROR"] = "IDEError";
})(ErrorName || (ErrorName = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["COMMAND_MISSING"] = "CommandMissing";
    ErrorCode["VALIDATION_FAILED"] = "ValidationFailed";
    ErrorCode["AUTHENTICATION_FAILED"] = "AuthenticationFailed";
    ErrorCode["UNAUTHENTICATION"] = "Unauthentication";
    ErrorCode["INTERFACE_RESPONSE_FAILED"] = "InterfaceResponseError";
})(ErrorCode || (ErrorCode = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["COMMON_ERROR"] = "CommonError";
    ErrorType["IDE_ERROR"] = "IDEError";
})(ErrorType || (ErrorType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUVyQyxNQUFNLENBQU4sSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLGlEQUFzQyxDQUFBO0lBQ3RDLG1EQUF3QyxDQUFBO0lBQ3hDLHFEQUEwQyxDQUFBO0lBQzFDLCtDQUFvQyxDQUFBO0lBQ3BDLG1DQUF3QixDQUFBO0FBQzFCLENBQUMsRUFOVyxTQUFTLEtBQVQsU0FBUyxRQU1wQjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsK0NBQW9DLENBQUE7SUFDcEMsbURBQXdDLENBQUE7SUFDeEMsMkRBQWdELENBQUE7SUFDaEQsa0RBQXVDLENBQUE7SUFDdkMsaUVBQXNELENBQUE7QUFDeEQsQ0FBQyxFQU5XLFNBQVMsS0FBVCxTQUFTLFFBTXBCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBOEIsQ0FBQTtJQUM5QixtQ0FBd0IsQ0FBQTtBQUMxQixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEIifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/constant/file.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/constant/file.js ***!
  \*******************************************************************/
/*! exports provided: OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return OSSEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return OSSUploadHeaderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return WHITELIST_EXTENSIONS; });
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
var OSSUploadHeaderList = ['Expires', 'Cache-Control', 'Content-Type', 'Content-Encoding', 'Content-Disposition'];
var WHITELIST_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'svg',
    'image',
    'mp3',
    'mp4',
    'ogg',
    'webm',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudC9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDaEIsMkJBQWlCLENBQUE7SUFDakIsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLE1BQU0sS0FBTixNQUFNLFFBR2pCO0FBbUJELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLENBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUUsQ0FBQztBQUU3SCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRztJQUVsQyxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxPQUFPO0lBR1AsS0FBSztJQUdMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtDQUNQLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/constant/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/constant/index.js ***!
  \********************************************************************/
/*! exports provided: HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX, OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS, LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS, DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType, MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk */ "./node_modules/@ant-basement/core/dist/esm/constant/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["HTTPMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["TransportProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["SERVERLESS_HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["PREFIX"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./node_modules/@ant-basement/core/dist/esm/constant/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["OSSEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["OSSUploadHeaderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["WHITELIST_EXTENSIONS"]; });

/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mongo */ "./node_modules/@ant-basement/core/dist/esm/constant/mongo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["QUERY_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARAMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["OID_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["REGEXP_FLAGS"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@ant-basement/core/dist/esm/constant/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HTTP_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["HTTP_UNAUTHORIZED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorType"]; });

/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation */ "./node_modules/@ant-basement/core/dist/esm/constant/validation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["MAX_DB_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["MAX_ID_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["INVALID_DB_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["INVALID_COLL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]; });






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxPQUFPLENBQUM7QUFDdEIsY0FBYyxRQUFRLENBQUM7QUFDdkIsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxjQUFjLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/constant/mongo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/constant/mongo.js ***!
  \********************************************************************/
/*! exports provided: LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return QUERY_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return DEFAULT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return PERMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return PREFIXES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return OID_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return REGEXP_FLAGS; });
var LIMIT = 100;
var QUERY_TIMEOUT = 100;
var DEFAULT_PARAMS = {
    limit: LIMIT,
    maxTimeMS: QUERY_TIMEOUT,
};
var PERMISSION;
(function (PERMISSION) {
    PERMISSION["READ"] = ".read";
    PERMISSION["WRITE"] = ".write";
    PERMISSION["CREATE"] = "document.create";
    PERMISSION["UPDATE"] = "document.update";
    PERMISSION["DELETE"] = "document.delete";
    PERMISSION["AGGREGATE"] = ".aggregate";
    PERMISSION["INDEX"] = ".index";
    PERMISSION["COLLECTION"] = "collection.manage";
    PERMISSION["DATABASE"] = "database.manage";
    PERMISSION["SYSTEM"] = "system.manage";
})(PERMISSION || (PERMISSION = {}));
var PREFIXES = {
    ObjectId: '\\u0007',
    Decimal128: '\\u0013',
};
var OID_LENGTH = 24;
var REGEXP_FLAGS = ['i', 'm', 'u', 'g'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvbW9uZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUd6QixNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBR2pDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRztJQUM1QixLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxhQUFhO0NBQ3pCLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxVQWVYO0FBZkQsV0FBWSxVQUFVO0lBRXBCLDRCQUFjLENBQUE7SUFDZCw4QkFBZ0IsQ0FBQTtJQUNoQix3Q0FBMEIsQ0FBQTtJQUMxQix3Q0FBMEIsQ0FBQTtJQUMxQix3Q0FBMEIsQ0FBQTtJQUMxQixzQ0FBd0IsQ0FBQTtJQUV4Qiw4QkFBZ0IsQ0FBQTtJQUNoQiw4Q0FBZ0MsQ0FBQTtJQUVoQywwQ0FBNEIsQ0FBQTtJQUU1QixzQ0FBd0IsQ0FBQTtBQUMxQixDQUFDLEVBZlcsVUFBVSxLQUFWLFVBQVUsUUFlckI7QUFHRCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUc7SUFDdEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLFNBQVM7Q0FDdEIsQ0FBQztBQUdGLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFLN0IsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/constant/sdk.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/constant/sdk.js ***!
  \******************************************************************/
/*! exports provided: HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return HTTPMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return TransportProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return HEADER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return SERVERLESS_HEADER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return PREFIX; });
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["DEL"] = "DELETE";
    HTTPMethod["POST"] = "POST";
})(HTTPMethod || (HTTPMethod = {}));
var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["HTTP"] = "HTTP";
})(TransportProtocol || (TransportProtocol = {}));
var HEADER_PREFIX = 'x-basement-';
var SERVERLESS_HEADER_PREFIX = 'x-serverless-';
var PREFIX;
(function (PREFIX) {
    PREFIX["CLIENT"] = "/client";
    PREFIX["SERVER"] = "/server";
    PREFIX["ANTCLOUD"] = "/antcloud";
    PREFIX["ANTOPENANTCLOUD"] = "/antopen/antcloud";
})(PREFIX || (PREFIX = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnN0YW50L3Nkay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLHlCQUFXLENBQUE7SUFDWCw0QkFBYyxDQUFBO0lBQ2QsMkJBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUVYO0FBRkQsV0FBWSxpQkFBaUI7SUFDM0Isa0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFGVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRTVCO0FBRUQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7QUFFeEQsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiw0QkFBa0IsQ0FBQTtJQUNsQiw0QkFBa0IsQ0FBQTtJQUNsQixnQ0FBc0IsQ0FBQTtJQUN0QiwrQ0FBcUMsQ0FBQTtBQUN2QyxDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakIifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/constant/validation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/constant/validation.js ***!
  \*************************************************************************/
/*! exports provided: MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return MAX_DB_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return MAX_ID_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return INVALID_DB_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return INVALID_COLL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return ErrorMessages; });
var MAX_DB_NAME_LENGTH = 64;
var MAX_ID_NAME_LENGTH = 120;
var INVALID_DB_NAMES = ['admin', 'system', 'basement'];
var INVALID_COLL_NAMES = ['basement'];
var ErrorMessages = {
    INVALID_TYPE: 'field type is invalid',
    NOT_STRING: 'field is not a string',
    NOT_ARRAY: 'field is not an array',
    NOT_EMPTY: 'field should not be empty',
    TOO_LONG: 'field is too long',
    ILLEGAL: 'field should not contain illegal character',
    SYSTEM: 'field is in conflict with system names',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudC92YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUNyQyxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFHdEMsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBRSxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLENBQUUsVUFBVSxDQUFFLENBQUM7QUFHakQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHO0lBQzNCLFlBQVksRUFBRSx1QkFBdUI7SUFDckMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQyxTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDLFNBQVMsRUFBRSwyQkFBMkI7SUFDdEMsUUFBUSxFQUFFLG1CQUFtQjtJQUM3QixPQUFPLEVBQUUsNENBQTRDO0lBQ3JELE1BQU0sRUFBRSx3Q0FBd0M7Q0FDakQsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/error/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/error/index.js ***!
  \*****************************************************************/
/*! exports provided: BuiltInError, BasementClientError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltInError", function() { return BuiltInError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasementClientError", function() { return BasementClientError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var BuiltInError = (function () {
    function BuiltInError(message) {
        this.message = message;
        Error.call(this, message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this);
        }
    }
    return BuiltInError;
}());

var BasementClientError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasementClientError, _super);
    function BasementClientError(name, code, type, message) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        _this.code = code;
        _this.type = type;
        _this.message = message;
        return _this;
    }
    BasementClientError.from = function (raw) {
        return new BasementClientError(raw.name, raw.code, raw.type, raw.message);
    };
    return BasementClientError;
}(BuiltInError));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BO0lBSUUsc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUssS0FBYSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLEtBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOztBQUVEO0lBQXlDLHVDQUFZO0lBQ25ELDZCQUNTLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQWU7UUFKeEIsWUFNRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQU5RLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQU8sR0FBUCxPQUFPLENBQVE7O0lBR3hCLENBQUM7SUFPYSx3QkFBSSxHQUFsQixVQUFtQixHQUFvQjtRQUNyQyxPQUFPLElBQUksbUJBQW1CLENBQzVCLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxPQUFPLENBQ1osQ0FBQztJQUNKLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBeUMsWUFBWSxHQXVCcEQifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: BuiltInError, BasementClientError, emptyLogger, Validator, assert, queryToString, camelToLisp, extractMessage, OSSUploadResponseFormat, HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX, OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS, LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS, DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType, MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages, BaseEncoder, HTTPRequestEncoder, BaseDecoder, HTTPResponseDecoder, HTTPTransport, BaseService, Basement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltInError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["BuiltInError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasementClientError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["BasementClientError"]; });

/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./node_modules/@ant-basement/core/dist/esm/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["emptyLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["Validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryToString", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelToLisp", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["camelToLisp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractMessage", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["extractMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadResponseFormat", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["OSSUploadResponseFormat"]; });

/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HTTPMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["TransportProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["SERVERLESS_HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OSSEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OSSUploadHeaderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["WHITELIST_EXTENSIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["QUERY_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARAMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OID_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["REGEXP_FLAGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_HTTP_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HTTP_UNAUTHORIZED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_DB_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_ID_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["INVALID_DB_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["INVALID_COLL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorMessages"]; });

/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codec */ "./node_modules/@ant-basement/core/dist/esm/codec/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["BaseEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["HTTPRequestEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["BaseDecoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["HTTPResponseDecoder"]; });

/* harmony import */ var _transport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transport */ "./node_modules/@ant-basement/core/dist/esm/transport/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPTransport", function() { return _transport__WEBPACK_IMPORTED_MODULE_4__["HTTPTransport"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./node_modules/@ant-basement/core/dist/esm/service/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]; });

/* harmony import */ var _basement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basement */ "./node_modules/@ant-basement/core/dist/esm/basement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Basement", function() { return _basement__WEBPACK_IMPORTED_MODULE_6__["Basement"]; });








//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsY0FBYyxTQUFTLENBQUM7QUFJeEIsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxZQUFZLENBQUM7QUFHM0IsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxhQUFhLENBQUM7QUFDNUIsY0FBYyxXQUFXLENBQUM7QUFHMUIsY0FBYyxZQUFZLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/service/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/service/index.js ***!
  \*******************************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
var BaseService = (function () {
    function BaseService(transport) {
        this.transport = transport;
    }
    BaseService.prototype.getEncoder = function (prefix) {
        return this.transport.getEncoder(prefix);
    };
    return BaseService;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtJQUNFLHFCQUNZLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7SUFDakMsQ0FBQztJQUVNLGdDQUFVLEdBQXBCLFVBQXFCLE1BQWU7UUFDbEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/transport/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/transport/index.js ***!
  \*********************************************************************/
/*! exports provided: HTTPTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPTransport", function() { return HTTPTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../codec */ "./node_modules/@ant-basement/core/dist/esm/codec/index.js");



var HTTPTransport = (function () {
    function HTTPTransport(endpoint, library) {
        this.endpoint = endpoint;
        this.library = library;
        this.protocol = _constant__WEBPACK_IMPORTED_MODULE_1__["TransportProtocol"].HTTP;
    }
    HTTPTransport.prototype.getEncoder = function (prefix) {
        return new _codec__WEBPACK_IMPORTED_MODULE_2__["HTTPRequestEncoder"](this.endpoint, prefix);
    };
    HTTPTransport.prototype.setAppId = function (appId) {
        this.appId = appId;
    };
    HTTPTransport.prototype.setAppSecret = function (appSecret) {
        this.appSecret = appSecret;
        return this;
    };
    HTTPTransport.prototype.setUA = function (ua) {
        this.ua = ua;
        return this;
    };
    HTTPTransport.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    HTTPTransport.prototype.setTimeout = function (timeout) {
        if (timeout === void 0) { timeout = '5s'; }
        if (typeof timeout === 'string') {
            if (timeout.indexOf('ms') >= 0) {
                this.timeout = parseInt(timeout, 10);
                return;
            }
            if (timeout.indexOf('s') >= 0) {
                this.timeout = parseInt(timeout, 10) * 1000;
                return;
            }
        }
        else if (typeof timeout === 'number') {
            this.timeout = timeout;
            return;
        }
        this.timeout = 5000;
    };
    HTTPTransport.prototype.setSpaceId = function (spaceId) {
        this.spaceId = spaceId;
    };
    HTTPTransport.prototype.request = function (encoder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2, (new _codec__WEBPACK_IMPORTED_MODULE_2__["HTTPResponseDecoder"]()).decode()];
            });
        });
    };
    return HTTPTransport;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNwb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFFeEQsT0FBTyxFQUNMLGtCQUFrQixFQUVsQixtQkFBbUIsR0FDcEIsTUFBTSxVQUFVLENBQUM7QUFFbEI7SUFVRSx1QkFDUyxRQUFnQixFQUNiLE9BQVk7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQVZqQixhQUFRLEdBQXNCLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQVd6RCxDQUFDO0lBTUcsa0NBQVUsR0FBakIsVUFBa0IsTUFBZTtRQUUvQixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBT00sZ0NBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFPTSxvQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFPTSw2QkFBSyxHQUFaLFVBQWEsRUFBVTtRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQU9NLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQU9NLGtDQUFVLEdBQWpCLFVBQWtCLE9BQTZCO1FBQTdCLHdCQUFBLEVBQUEsY0FBNkI7UUFDN0MsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxPQUFPO2FBQ1I7U0FDRjthQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFPTSxrQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFPWSwrQkFBTyxHQUFwQixVQUNFLE9BQTJCOzs7Z0JBRTNCLFdBQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQzs7O0tBQzdDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBekdELElBeUdDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/utility/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/utility/index.js ***!
  \*******************************************************************/
/*! exports provided: emptyLogger, Validator, assert, queryToString, camelToLisp, extractMessage, OSSUploadResponseFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryToString", function() { return queryToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToLisp", function() { return camelToLisp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractMessage", function() { return extractMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSUploadResponseFormat", function() { return OSSUploadResponseFormat; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@ant-basement/core/dist/esm/utility/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"]; });

/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./node_modules/@ant-basement/core/dist/esm/utility/validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/core/dist/esm/constant/index.js");




function assert(expr, message) {
    if (!expr) {
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_constant__WEBPACK_IMPORTED_MODULE_3__["ErrorName"].VALIDATION_ERROR, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].VALIDATION_FAILED, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorType"].COMMON_ERROR, message);
    }
}
function queryToString(kvmap) {
    return Object.keys(kvmap).sort()
        .map(function (key) { return key + "=" + encodeURIComponent(kvmap[key].toString()); })
        .join('&');
}
function camelToLisp(key) {
    return key.replace(/[A-Z]/g, function (match) {
        return "-" + match.toLowerCase();
    });
}
function extractMessage(e) {
    if (!e) {
        return;
    }
    if (Array.isArray(e)) {
        return e.map(extractMessage).join('; ');
    }
    else if (typeof e === 'object') {
        return e && (e.message || e.msg || e.desc);
    }
    else if (typeof e === 'string') {
        return e;
    }
}
function OSSUploadResponseFormat(data) {
    return {
        id: data.id,
        key: data.ossPath,
        host: data.host,
        policy: data.policy,
        Signature: data.signature,
        OSSAccessKeyId: data.accessKeyId,
        securityToken: data.securityToken,
        cdnDomain: data.cdnDomain,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLGFBQWEsQ0FBQztBQUM1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUTlELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU87SUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE1BQU0sSUFBSSxtQkFBbUIsQ0FDM0IsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLE9BQU8sQ0FDUixDQUFDO0tBQ0g7QUFDSCxDQUFDO0FBT0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUE2QjtJQUN6RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ3ZCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcsU0FBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUcsRUFBckQsQ0FBcUQsQ0FBQztTQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQU9ELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBRztJQUM3QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUEsS0FBSztRQUNoQyxPQUFPLE1BQUksS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU1ELE1BQU0sVUFBVSxjQUFjLENBQUMsQ0FBTztJQUNwQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTztLQUNSO0lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQztBQWdCRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBMkI7SUFDakUsT0FBTztRQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztRQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNoQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7UUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0tBQzFCLENBQUM7QUFDSixDQUFDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/utility/logger.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/utility/logger.js ***!
  \********************************************************************/
/*! exports provided: emptyLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return emptyLogger; });
var emptyLogger = {
    log: function () { return; },
    info: function () { return; },
    warn: function () { return; },
    error: function () { return; },
    debug: function () { return; },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdHkvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRztJQUN6QixHQUFHLEVBQUgsY0FBYyxPQUFPLENBQUMsQ0FBQztJQUN2QixJQUFJLEVBQUosY0FBZSxPQUFPLENBQUMsQ0FBQztJQUN4QixJQUFJLEVBQUosY0FBZSxPQUFPLENBQUMsQ0FBQztJQUN4QixLQUFLLEVBQUwsY0FBZ0IsT0FBTyxDQUFDLENBQUM7SUFDekIsS0FBSyxFQUFMLGNBQWdCLE9BQU8sQ0FBQyxDQUFDO0NBQzFCLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/utility/rules/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/utility/rules/index.js ***!
  \*************************************************************************/
/*! exports provided: rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rules", function() { return rules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongo */ "./node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js");


var rules = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _mongo__WEBPACK_IMPORTED_MODULE_1__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0eS9ydWxlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFakMsSUFBTSxLQUFLLGdCQUNOLEtBQUssQ0FDVCxDQUFDO0FBRUYsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js ***!
  \*************************************************************************/
/*! exports provided: ruleOfField, ruleOfFields, ruleOfDatabaseName, ruleOfCollectionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfField", function() { return ruleOfField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfFields", function() { return ruleOfFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfDatabaseName", function() { return ruleOfDatabaseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfCollectionName", function() { return ruleOfCollectionName; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ "./node_modules/@ant-basement/core/dist/esm/constant/index.js");

function ruleOfField(_, value) {
    function validateField(name) {
        if (/[\.\$]/.test(name)) {
            return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
        }
    }
    if (Array.isArray(value)) {
        return undefined;
    }
    if (typeof value === 'string') {
        return validateField(value);
    }
    var result = null;
    for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
        var key = _a[_i];
        result = validateField(key);
        if (typeof result === 'string') {
            return result;
        }
        if (typeof value[key] === 'object') {
            return ruleOfField(_, value[key]);
        }
    }
    if (result === null) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].INVALID_TYPE;
    }
}
function ruleOfFields(_, value) {
    if (!Array.isArray(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_ARRAY;
    }
    var err;
    var i = 0;
    while (!err && i < value.length) {
        err = ruleOfField(null, value[i]);
        i++;
    }
    return err;
}
function ruleOfDatabaseName(_, value) {
    if (typeof value !== 'string') {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_STRING;
    }
    if (value.trim().length === 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_EMPTY;
    }
    if (value.length > _constant__WEBPACK_IMPORTED_MODULE_0__["MAX_DB_NAME_LENGTH"]) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].TOO_LONG;
    }
    if (/[\/\\\.\ \"\$]/.test(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    if (_constant__WEBPACK_IMPORTED_MODULE_0__["INVALID_DB_NAMES"].indexOf(value) > -1) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].SYSTEM;
    }
}
function ruleOfCollectionName(_, value) {
    if (typeof value !== 'string') {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_STRING;
    }
    if (value.trim().length === 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_EMPTY;
    }
    if (value.length > _constant__WEBPACK_IMPORTED_MODULE_0__["MAX_ID_NAME_LENGTH"]) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].TOO_LONG;
    }
    if (value.indexOf('$') > -1) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    var namespace = value.split('.').shift();
    if (_constant__WEBPACK_IMPORTED_MODULE_0__["INVALID_COLL_NAMES"].indexOf(namespace) >= 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    if (!/^[_a-z]/i.test(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0eS9ydWxlcy9tb25nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixHQUNuQixNQUFNLGdCQUFnQixDQUFDO0FBUXhCLE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUs7SUFDbEMsU0FBUyxhQUFhLENBQUMsSUFBWTtRQUNqQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtRQUFqQyxJQUFNLEdBQUcsU0FBQTtRQUNaLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBRUQsSUFBSSxN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

/***/ }),

/***/ "./node_modules/@ant-basement/core/dist/esm/utility/validator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-basement/core/dist/esm/utility/validator.js ***!
  \***********************************************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parameter */ "../../node_modules/parameter/index.es5.js");
/* harmony import */ var parameter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parameter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ "./node_modules/@ant-basement/core/dist/esm/utility/rules/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/core/dist/esm/constant/index.js");




var Validator = (function () {
    function Validator(options) {
        this.p = new parameter__WEBPACK_IMPORTED_MODULE_0___default.a(options);
        for (var _i = 0, _a = Object.keys(_rules__WEBPACK_IMPORTED_MODULE_1__["rules"]); _i < _a.length; _i++) {
            var ruleName = _a[_i];
            var name_1 = ruleName.match(/ruleOf([a-zA-Z]+)/)[1];
            this.p.addRule(name_1[0].toLowerCase() + name_1.slice(1), _rules__WEBPACK_IMPORTED_MODULE_1__["rules"][ruleName]);
        }
    }
    Validator.prototype.validate = function (rules, obj) {
        if (typeof obj !== 'object' && typeof rules === 'string') {
            obj = { field: obj };
            rules = { field: rules };
        }
        var message = this.p.validate(rules, obj);
        if (!message) {
            return null;
        }
        var result = message.map(function (mistake) {
            if (mistake.field) {
                var target = JSON.parse(JSON.stringify(obj));
                var fields = mistake.field.match(/[^\.\[\]]+/g);
                while (fields.length) {
                    var field = fields.shift();
                    if (!target.hasOwnProperty(field)) {
                        break;
                    }
                    target = target[field];
                }
                mistake.value = target;
            }
            return mistake;
        });
        function getMessage(result) {
            if (Array.isArray(result)) {
                return result.map(getMessage).join('; ');
            }
            return result.field + " " + result.message;
        }
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_constant__WEBPACK_IMPORTED_MODULE_3__["ErrorName"].VALIDATION_ERROR, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].VALIDATION_FAILED, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorType"].COMMON_ERROR, getMessage(result));
    };
    return Validator;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdHkvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUQ7SUFFRSxtQkFBWSxPQUE0QjtRQUN0QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhDLEtBQXVCLFVBQWtCLEVBQWxCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUF0QyxJQUFNLFFBQVEsU0FBQTtZQUVqQixJQUFNLE1BQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBUU0sNEJBQVEsR0FBZixVQUFnQixLQUFVLEVBQUUsR0FBUTtRQUVsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDeEQsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjtRQUdELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2pDLE1BQU07cUJBQ1A7b0JBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDeEI7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsVUFBVSxDQUFDLE1BQU07WUFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO1lBRUQsT0FBVSxNQUFNLENBQUMsS0FBSyxTQUFJLE1BQU0sQ0FBQyxPQUFTLENBQUM7UUFDN0MsQ0FBQztRQUVELE1BQU0sSUFBSSxtQkFBbUIsQ0FDM0IsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/alipay-openapi.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/alipay-openapi.js ***!
  \************************************************************************/
/*! exports provided: AlipayOpenAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlipayOpenAPIService", function() { return AlipayOpenAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js");


var AlipayOpenAPIService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlipayOpenAPIService, _super);
    function AlipayOpenAPIService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlipayOpenAPIService.prototype.exec = function (method, params) {
        if (params === void 0) { params = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var encoder, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encoder = this.getEncoder();
                        encoder.setBodyField({
                            method: 'antopen',
                            params: {
                                method: method,
                                params: params,
                            },
                        });
                        return [4, this.transport.request(encoder)];
                    case 1:
                        response = _a.sent();
                        return [2, response.body];
                }
            });
        });
    };
    return AlipayOpenAPIService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpcGF5LW9wZW5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWxpcGF5LW9wZW5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEdBQ1osTUFBTSxvQkFBb0IsQ0FBQztBQUU1QjtJQUEwQyx3Q0FBVztJQUFyRDs7SUFvQkEsQ0FBQztJQWJjLG1DQUFJLEdBQWpCLFVBQWtCLE1BQWMsRUFBRSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1COzs7Ozs7d0JBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7NEJBQ25CLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixNQUFNLEVBQUU7Z0NBQ04sTUFBTSxRQUFBO2dDQUNOLE1BQU0sUUFBQTs2QkFDUDt5QkFDRixDQUFDLENBQUM7d0JBRWMsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQWhELFFBQVEsR0FBRyxTQUFxQzt3QkFDdEQsV0FBTyxRQUFRLENBQUMsSUFBSSxFQUFDOzs7O0tBQ3RCO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBcEJELENBQTBDLFdBQVcsR0FvQnBEIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/app-service.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/app-service.js ***!
  \*********************************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js");


var AppService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppService, _super);
    function AppService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppService.prototype.invoke = function (target, arg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, method, _b, path, _c, header, _d, params, _e, query, _f, body, encoder, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _a = arg.method, method = _a === void 0 ? '' : _a, _b = arg.path, path = _b === void 0 ? '' : _b, _c = arg.header, header = _c === void 0 ? {} : _c, _d = arg.params, params = _d === void 0 ? {} : _d, _e = arg.query, query = _e === void 0 ? {} : _e, _f = arg.body, body = _f === void 0 ? {} : _f;
                        if (!target || !arg || !method) {
                            throw new _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BasementClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].VALIDATION_ERROR, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorCode"].VALIDATION_FAILED, _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].COMMON_ERROR, 'missing method or target');
                        }
                        encoder = this.getEncoder();
                        encoder.setBodyField({
                            method: 'serverless.appService.runtime.invoke',
                            params: {
                                sasHTTPMethod: method,
                                sasTarget: target,
                                sasPath: path,
                                sasHeader: header,
                                sasParams: params,
                                sasQuery: query,
                                sasBody: body,
                            },
                        });
                        return [4, this.transport.request(encoder)];
                    case 1:
                        response = _g.sent();
                        return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, response.body), { requestId: response.headers['request-id'] })];
                }
            });
        });
    };
    return AppService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFFNUI7SUFBZ0MsOEJBQVc7SUFBM0M7O0lBZ0RBLENBQUM7SUExQ2MsMkJBQU0sR0FBbkIsVUFBb0IsTUFBYyxFQUFFLEdBT25DOzs7Ozs7d0JBRUcsS0FNRSxHQUFHLE9BTk0sRUFBWCxNQUFNLG1CQUFHLEVBQUUsS0FBQSxFQUNYLEtBS0UsR0FBRyxLQUxJLEVBQVQsSUFBSSxtQkFBRyxFQUFFLEtBQUEsRUFDVCxLQUlFLEdBQUcsT0FKTSxFQUFYLE1BQU0sbUJBQUcsRUFBRSxLQUFBLEVBQ1gsS0FHRSxHQUFHLE9BSE0sRUFBWCxNQUFNLG1CQUFHLEVBQUUsS0FBQSxFQUNYLEtBRUUsR0FBRyxNQUZLLEVBQVYsS0FBSyxtQkFBRyxFQUFFLEtBQUEsRUFDVixLQUNFLEdBQUcsS0FESSxFQUFULElBQUksbUJBQUcsRUFBRSxLQUFBLENBQ0g7d0JBRVIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDOUIsTUFBTSxJQUFJLG1CQUFtQixDQUMzQixTQUFTLENBQUMsZ0JBQWdCLEVBQzFCLFNBQVMsQ0FBQyxpQkFBaUIsRUFDM0IsU0FBUyxDQUFDLFlBQVksRUFDdEIsMEJBQTBCLENBQzNCLENBQUM7eUJBQ0g7d0JBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxFQUFFLHNDQUFzQzs0QkFDOUMsTUFBTSxFQUFFO2dDQUNOLGFBQWEsRUFBRSxNQUFNO2dDQUNyQixTQUFTLEVBQUUsTUFBTTtnQ0FDakIsT0FBTyxFQUFFLElBQUk7Z0NBQ2IsU0FBUyxFQUFFLE1BQU07Z0NBQ2pCLFNBQVMsRUFBRSxNQUFNO2dDQUNqQixRQUFRLEVBQUUsS0FBSztnQ0FDZixPQUFPLEVBQUUsSUFBSTs2QkFDZDt5QkFDRixDQUFDLENBQUM7d0JBRWMsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQWhELFFBQVEsR0FBRyxTQUFxQzt3QkFDdEQsaUNBQVksUUFBUSxDQUFDLElBQUksS0FBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBRzs7OztLQUN4RTtJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWhERCxDQUFnQyxXQUFXLEdBZ0QxQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/auth.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/auth.js ***!
  \**************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js");


var AuthService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AuthService, _super);
    function AuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthService.prototype.getInfo = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var request, params, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = this.getEncoder();
                        params = {};
                        if (options) {
                            params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options);
                        }
                        if (this.transport.authType) {
                            params = {
                                authType: this.transport.authType,
                            };
                        }
                        request.setBodyField({
                            method: 'serverless.auth.user.getProfileInfo',
                            params: params,
                        });
                        return [4, this.transport.request(request)];
                    case 1:
                        response = _a.sent();
                        return [2, response.body];
                }
            });
        });
    };
    return AuthService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsV0FBVyxHQUNaLE1BQU0sb0JBQW9CLENBQUM7QUFNNUI7SUFBaUMsK0JBQVc7SUFBNUM7O0lBMEJBLENBQUM7SUFyQmMsNkJBQU8sR0FBcEIsVUFBcUIsT0FBd0I7Ozs7Ozt3QkFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDaEIsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsTUFBTSxnQkFDRCxPQUFPLENBQ1gsQ0FBQzt5QkFDSDt3QkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFOzRCQUMzQixNQUFNLEdBQUc7Z0NBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTs2QkFDbEMsQ0FBQzt5QkFDSDt3QkFDRCxPQUFPLENBQUMsWUFBWSxDQUFDOzRCQUNuQixNQUFNLEVBQUUscUNBQXFDOzRCQUM3QyxNQUFNLFFBQUE7eUJBQ1AsQ0FBQyxDQUFDO3dCQUVjLFdBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFoRCxRQUFRLEdBQUcsU0FBcUM7d0JBQ3RELFdBQU8sUUFBUSxDQUFDLElBQUksRUFBQzs7OztLQUN0QjtJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUFpQyxXQUFXLEdBMEIzQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/db.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/db.js ***!
  \************************************************************/
/*! exports provided: QueryService, DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js");
/* harmony import */ var _ant_basement_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-basement/mongo */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/index.js");



var QueryService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryService, _super);
    function QueryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryService.prototype.execute = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, request, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _super.prototype.execute.call(this)];
                    case 1:
                        params = _a.sent();
                        request = this.getEncoder()
                            .setBodyField({
                            method: 'serverless.db.default.execute',
                            params: params,
                        });
                        return [4, this.getTransport().request(request)];
                    case 2:
                        response = _a.sent();
                        return [2, (new _ant_basement_mongo__WEBPACK_IMPORTED_MODULE_2__["Result"](response.body)).inspect()];
                }
            });
        });
    };
    return QueryService;
}(_ant_basement_mongo__WEBPACK_IMPORTED_MODULE_2__["Query"]));

var DbService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DbService, _super);
    function DbService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DbService.prototype.collection = function (name) {
        var _this = this;
        var q = (new QueryService()).collection(name);
        q.getEncoder = function () { return _this.getEncoder(); };
        q.getTransport = function () { return _this.transport; };
        return q;
    };
    return DbService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEdBR1osTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQ0wsS0FBSyxFQUNMLE1BQU0sR0FFUCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCO0lBQWtDLGdDQUFLO0lBQXZDOztJQW9CQSxDQUFDO0lBWmMsOEJBQU8sR0FBcEI7Ozs7OzRCQUNpQixXQUFNLGlCQUFNLE9BQU8sV0FBRSxFQUFBOzt3QkFBOUIsTUFBTSxHQUFHLFNBQXFCO3dCQUU5QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs2QkFDOUIsWUFBWSxDQUFDOzRCQUNaLE1BQU0sRUFBRSwrQkFBK0I7NEJBQ3ZDLE1BQU0sUUFBQTt5QkFDUCxDQUFDLENBQUM7d0JBRVksV0FBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBckQsUUFBUSxHQUFHLFNBQTBDO3dCQUMzRCxXQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQStCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDOzs7O0tBQ3pFO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBcEJELENBQWtDLEtBQUssR0FvQnRDOztBQUVEO0lBQStCLDZCQUFXO0lBQTFDOztJQVlBLENBQUM7SUFOUSw4QkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQTlCLGlCQUtDO1FBSkMsSUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxVQUFVLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQztRQUN2QyxDQUFDLENBQUMsWUFBWSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFkLENBQWMsQ0FBQztRQUN0QyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFaRCxDQUErQixXQUFXLEdBWXpDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/file.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/file.js ***!
  \**************************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js");


var FileService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileService, _super);
    function FileService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileService.prototype.deleteFile = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var request, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = this.getEncoder();
                        request.setBodyField({
                            method: 'serverless.file.resource.delete',
                            params: {
                                id: url,
                            },
                        });
                        return [4, this.transport.request(request)];
                    case 1:
                        response = _a.sent();
                        return [2, response.body];
                }
            });
        });
    };
    FileService.prototype.uploadFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                throw new _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BasementClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorName"].UNSUPPORTED_ERROR, '', _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["ErrorType"].COMMON_ERROR, 'children implementation required');
            });
        });
    };
    FileService.prototype.getOSSUploadOptionsFromPath = function (relativePath, targetPath, fileSize) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, request, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = { env: _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["OSSEnv"].PUBLIC };
                        options.filename = relativePath.split('/').pop();
                        options.size = fileSize;
                        if (targetPath)
                            options.targetPath = targetPath;
                        request = this.getEncoder();
                        request.setBodyField({
                            method: 'serverless.file.resource.generateProximalSign',
                            params: options,
                        });
                        return [4, this.transport.request(request)];
                    case 1:
                        response = _a.sent();
                        return [2, response.body];
                }
            });
        });
    };
    FileService.prototype.reportOSSUpload = function (id, contentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var request, params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = this.transport.getEncoder();
                        params = {
                            id: id,
                        };
                        if (contentType) {
                            params.contentType = contentType;
                        }
                        request.setBodyField({
                            method: 'serverless.file.resource.report',
                            params: params,
                        });
                        return [4, this.transport.request(request)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return FileService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsV0FBVyxFQUVYLE1BQU0sRUFDTixtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFNBQVMsR0FFVixNQUFNLG9CQUFvQixDQUFDO0FBcUI1QjtJQUFpQywrQkFBVztJQUE1Qzs7SUErRUEsQ0FBQztJQTFFYyxnQ0FBVSxHQUF2QixVQUF3QixHQUFXOzs7Ozs7d0JBQzNCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7NEJBQ25CLE1BQU0sRUFBRSxpQ0FBaUM7NEJBQ3pDLE1BQU0sRUFBRTtnQ0FDTixFQUFFLEVBQUUsR0FBRzs2QkFDUjt5QkFDRixDQUFDLENBQUM7d0JBRWMsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQWhELFFBQVEsR0FBRyxTQUFxQzt3QkFDdEQsV0FBTyxRQUFRLENBQUMsSUFBSSxFQUFDOzs7O0tBQ3RCO0lBT1ksZ0NBQVUsR0FBdkIsVUFBd0IsT0FBMEI7OztnQkFDaEQsTUFBTSxJQUFJLG1CQUFtQixDQUMzQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLEVBQUUsRUFDRixTQUFTLENBQUMsWUFBWSxFQUN0QixrQ0FBa0MsQ0FDbkMsQ0FBQzs7O0tBQ0g7SUFTWSxpREFBMkIsR0FBeEMsVUFDRSxZQUFvQixFQUNwQixVQUFrQixFQUNsQixRQUFpQjs7Ozs7O3dCQUVYLE9BQU8sR0FBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQzVDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDakQsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7d0JBQ3hCLElBQUksVUFBVTs0QkFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzt3QkFFMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxFQUFFLCtDQUErQzs0QkFDdkQsTUFBTSxFQUFFLE9BQU87eUJBQ2hCLENBQUMsQ0FBQzt3QkFDYyxXQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBaEQsUUFBUSxHQUFHLFNBQXFDO3dCQUV0RCxXQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUM7Ozs7S0FDdEI7SUFRWSxxQ0FBZSxHQUE1QixVQUE2QixFQUFVLEVBQUUsV0FBb0I7Ozs7Ozt3QkFDckQsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3RDLE1BQU0sR0FBMEI7NEJBQ3BDLEVBQUUsSUFBQTt5QkFDSCxDQUFDO3dCQUNGLElBQUksV0FBVyxFQUFFOzRCQUNmLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO3lCQUNsQzt3QkFDRCxPQUFPLENBQUMsWUFBWSxDQUFDOzRCQUNuQixNQUFNLEVBQUUsaUNBQWlDOzRCQUN6QyxNQUFNLFFBQUE7eUJBQ1AsQ0FBQyxDQUFDO3dCQUNILFdBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDOzs7OztLQUN2QztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQS9FRCxDQUFpQyxXQUFXLEdBK0UzQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/function.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/function.js ***!
  \******************************************************************/
/*! exports provided: FunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionService", function() { return FunctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js");


var FunctionService = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FunctionService, _super);
    function FunctionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunctionService.prototype.invoke = function (functionTarget, functionArgs) {
        if (functionArgs === void 0) { functionArgs = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var encoder, response;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encoder = this.getEncoder();
                        encoder.setBodyField({
                            method: 'serverless.function.runtime.invoke',
                            params: {
                                functionTarget: functionTarget,
                                functionArgs: functionArgs,
                            },
                        });
                        return [4, this.transport.request(encoder)];
                    case 1:
                        response = _a.sent();
                        return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, response.body), { requestId: response.headers['request-id'] })];
                }
            });
        });
    };
    return FunctionService;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEdBQ1osTUFBTSxvQkFBb0IsQ0FBQztBQUU1QjtJQUFxQyxtQ0FBVztJQUFoRDs7SUFtQkEsQ0FBQztJQWJjLGdDQUFNLEdBQW5CLFVBQW9CLGNBQXNCLEVBQUUsWUFBaUI7UUFBakIsNkJBQUEsRUFBQSxpQkFBaUI7Ozs7Ozt3QkFDckQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxFQUFFLG9DQUFvQzs0QkFDNUMsTUFBTSxFQUFFO2dDQUNOLGNBQWMsZ0JBQUE7Z0NBQ2QsWUFBWSxjQUFBOzZCQUNiO3lCQUNGLENBQUMsQ0FBQzt3QkFFYyxXQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBaEQsUUFBUSxHQUFHLFNBQXFDO3dCQUN0RCxpQ0FBWSxRQUFRLENBQUMsSUFBSSxLQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFHOzs7O0tBQ3hFO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbkJELENBQXFDLFdBQVcsR0FtQi9DIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/dist/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ant-basement/services/dist/esm/index.js ***!
  \***************************************************************/
/*! exports provided: QueryService, DbService, FileService, AuthService, FunctionService, AlipayOpenAPIService, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./node_modules/@ant-basement/services/dist/esm/db.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return _db__WEBPACK_IMPORTED_MODULE_0__["QueryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return _db__WEBPACK_IMPORTED_MODULE_0__["DbService"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./node_modules/@ant-basement/services/dist/esm/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["FileService"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./node_modules/@ant-basement/services/dist/esm/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function */ "./node_modules/@ant-basement/services/dist/esm/function.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionService", function() { return _function__WEBPACK_IMPORTED_MODULE_3__["FunctionService"]; });

/* harmony import */ var _alipay_openapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alipay-openapi */ "./node_modules/@ant-basement/services/dist/esm/alipay-openapi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlipayOpenAPIService", function() { return _alipay_openapi__WEBPACK_IMPORTED_MODULE_4__["AlipayOpenAPIService"]; });

/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-service */ "./node_modules/@ant-basement/services/dist/esm/app-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxNQUFNLENBQUM7QUFDckIsY0FBYyxRQUFRLENBQUM7QUFDdkIsY0FBYyxRQUFRLENBQUM7QUFDdkIsY0FBYyxZQUFZLENBQUM7QUFDM0IsY0FBYyxrQkFBa0IsQ0FBQztBQUNqQyxjQUFjLGVBQWUsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/basement.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/basement.js ***!
  \**************************************************************************************************/
/*! exports provided: Basement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basement", function() { return Basement; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/index.js");

var Basement = (function () {
    function Basement(options) {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options, 'options is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.spaceId, 'spaceId is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.endpoint, 'endpoint is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.httpClient, 'http client is required');
        this._debug = false;
        this._logger = options.logger || _utility__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"];
        this.options = options;
        this.createTransport(options);
    }
    Basement.prototype.setDebugFlag = function (flag) {
        this._debug = flag;
        this.transport.setLogger(this.logger);
    };
    Object.defineProperty(Basement.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Basement.prototype, "logger", {
        get: function () {
            return this._debug ? this._logger : _utility__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"];
        },
        enumerable: true,
        configurable: true
    });
    Basement.prototype.createTransport = function (options) {
        var Klass = options.httpTransport;
        this.transport = new Klass(options.endpoint, options.httpClient);
        this.transport.setAppId(options.appId);
        this.transport.setLogger(this.logger);
        this.transport.setSpaceId(options.spaceId);
        this.transport.setTimeout(options.timeout);
    };
    return Basement;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJaEQ7SUFNRSxrQkFBWSxPQUF3QjtRQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFPTSwrQkFBWSxHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBTUQsc0JBQVcsMkJBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw0QkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRVMsa0NBQWUsR0FBekIsVUFBMEIsT0FBd0I7UUFDaEQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFwREQsSUFvREMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: BaseEncoder, HTTPRequestEncoder, BaseDecoder, HTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["BaseEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["HTTPRequestEncoder"]; });

/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/response.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return _response__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return _response__WEBPACK_IMPORTED_MODULE_1__["HTTPResponseDecoder"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxZQUFZLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/request.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/request.js ***!
  \*******************************************************************************************************/
/*! exports provided: BaseEncoder, HTTPRequestEncoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return BaseEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return HTTPRequestEncoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/index.js");



var BaseEncoder = (function () {
    function BaseEncoder() {
    }
    return BaseEncoder;
}());

var HTTPRequestEncoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTPRequestEncoder, _super);
    function HTTPRequestEncoder(endpoint, prefix) {
        var _this = _super.call(this) || this;
        _this.endpoint = endpoint;
        _this.body = {};
        _this.query = {};
        _this.method = _constant__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].POST;
        _this.prefix = '';
        _this.baseHeaders = {};
        _this.serviceHeaders = {};
        _this.serverlessHeaders = {};
        if (prefix) {
            _this.prefix = prefix;
        }
        return _this;
    }
    Object.defineProperty(HTTPRequestEncoder.prototype, "url", {
        get: function () {
            return [
                this.endpoint + this.prefix,
            ]
                .filter(function (p) { return !!p; })
                .join('?');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTTPRequestEncoder.prototype, "headers", {
        get: function () {
            var _this = this;
            var normalizedHeaders = Object
                .keys(this.serverlessHeaders)
                .reduce(function (accu, prop) {
                var key = "" + _constant__WEBPACK_IMPORTED_MODULE_1__["SERVERLESS_HEADER_PREFIX"] + Object(_utility__WEBPACK_IMPORTED_MODULE_2__["camelToLisp"])(prop);
                accu[key] = _this.serverlessHeaders[prop];
                return accu;
            }, {});
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.baseHeaders), normalizedHeaders);
        },
        enumerable: true,
        configurable: true
    });
    HTTPRequestEncoder.prototype.setBodyField = function (fields) {
        this.body = Object.assign({}, this.body, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fields));
        return this;
    };
    HTTPRequestEncoder.prototype.setUserId = function (userId) {
        this.setBodyField({
            userId: userId,
        });
        return this;
    };
    HTTPRequestEncoder.prototype.setBaseHeaders = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.baseHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.baseHeaders), Object.keys(headers).reduce(function (accu, key) {
            if (headers[key]) {
                accu[key] = headers[key].toString();
            }
            return accu;
        }, {}));
        return this;
    };
    HTTPRequestEncoder.prototype.setServerlessHeaders = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.serverlessHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.serverlessHeaders), Object.keys(headers).reduce(function (accu, key) {
            if (headers[key]) {
                accu[key] = headers[key].toString();
            }
            return accu;
        }, {}));
        return this;
    };
    HTTPRequestEncoder.prototype.encode = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return {
            url: this.url,
            body: this.body,
            method: this.method,
            headers: this.headers,
        };
    };
    return HTTPRequestEncoder;
}(BaseEncoder));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2RlYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFVLE1BQU0sYUFBYSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJekM7SUFBQTtJQU9BLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOztBQVNEO0lBQXdDLHNDQUFXO0lBVWpELDRCQUFzQixRQUFnQixFQUFFLE1BQWU7UUFBdkQsWUFDRSxpQkFBTyxTQUtSO1FBTnFCLGNBQVEsR0FBUixRQUFRLENBQVE7UUFUL0IsVUFBSSxHQUF1QixFQUFFLENBQUM7UUFDOUIsV0FBSyxHQUEwQixFQUFFLENBQUM7UUFDbEMsWUFBTSxHQUFlLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDbEMsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixpQkFBVyxHQUEwQixFQUFFLENBQUM7UUFDeEMsb0JBQWMsR0FBMEIsRUFBRSxDQUFDO1FBQzNDLHVCQUFpQixHQUEwQixFQUFFLENBQUM7UUFNdEQsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7SUFDSCxDQUFDO0lBRUQsc0JBQVcsbUNBQUc7YUFBZDtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTthQUM1QjtpQkFDRSxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQztpQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBTzthQUFsQjtZQUFBLGlCQWVDO1lBWkMsSUFBTSxpQkFBaUIsR0FBRyxNQUFNO2lCQUM3QixJQUFJLENB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

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/response.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/response.js ***!
  \********************************************************************************************************/
/*! exports provided: BaseDecoder, HTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return BaseDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return HTTPResponseDecoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/error/index.js");


var BaseDecoder = (function () {
    function BaseDecoder() {
    }
    return BaseDecoder;
}());

var HTTPResponseDecoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTPResponseDecoder, _super);
    function HTTPResponseDecoder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DEMARCATION_STATUS = 400;
        _this._body = {};
        _this._headers = {};
        return _this;
    }
    HTTPResponseDecoder.prototype.setHeaders = function (headers) {
        this._headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._headers), headers);
    };
    HTTPResponseDecoder.prototype.setStatusAndBody = function (status, body) {
        this._status = status;
        this._body = body;
        if (status >= this.DEMARCATION_STATUS) {
            this._error = _error__WEBPACK_IMPORTED_MODULE_1__["BasementClientError"].from(body);
        }
    };
    HTTPResponseDecoder.prototype.setErrorMessage = function (message) {
        this._error = new Error(message);
    };
    HTTPResponseDecoder.prototype.setErrorObject = function (error) {
        this._error = error;
    };
    HTTPResponseDecoder.prototype.decode = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        return {
            body: this._body || {},
            error: this._error,
            status: this._status,
            headers: this._headers,
        };
    };
    return HTTPResponseDecoder;
}(BaseDecoder));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUkvQztJQUFBO0lBT0EsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7O0FBU0Q7SUFBeUMsdUNBQVc7SUFBcEQ7UUFBQSxxRUErREM7UUE5RFEsd0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFdBQUssR0FBdUIsRUFBRSxDQUFDO1FBRy9CLGNBQVEsR0FBMEIsRUFBRSxDQUFDOztJQTBEakQsQ0FBQztJQW5EUSx3Q0FBVSxHQUFqQixVQUFrQixPQUE4QjtRQUM5QyxJQUFJLENBQUMsUUFBUSx5QkFDUixJQUFJLENBQUMsUUFBUSxHQUNiLE9BQU8sQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQU9NLDhDQUFnQixHQUF2QixVQUF3QixNQUFjLEVBQUUsSUFBUztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBTU0sNkNBQWUsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBd0IsQ0FBQztJQUMxRCxDQUFDO0lBT00sNENBQWMsR0FBckIsVUFBc0IsS0FBWTtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQTRCLENBQUM7SUFDN0MsQ0FBQztJQU9NLG9DQUFNLEdBQWI7UUFBYyxXQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLHNCQUFXOztRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUF5QyxXQUFXLEdBK0RuRCJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/error.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/error.js ***!
  \********************************************************************************************************/
/*! exports provided: DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return DEFAULT_HTTP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return HTTP_UNAUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return ErrorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
var DEFAULT_HTTP_STATUS = 500;
var HTTP_UNAUTHORIZED = 401;
var ErrorName;
(function (ErrorName) {
    ErrorName["VALIDATION_ERROR"] = "ValidationError";
    ErrorName["UNSUPPORTED_ERROR"] = "UnsupportedError";
    ErrorName["UNAUTHORIZED_ERROR"] = "UnauthorizedError";
    ErrorName["INTERFACE_ERROR"] = "InterfaceError";
    ErrorName["IDE_ERROR"] = "IDEError";
})(ErrorName || (ErrorName = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["COMMAND_MISSING"] = "CommandMissing";
    ErrorCode["VALIDATION_FAILED"] = "ValidationFailed";
    ErrorCode["AUTHENTICATION_FAILED"] = "AuthenticationFailed";
    ErrorCode["UNAUTHENTICATION"] = "Unauthentication";
    ErrorCode["INTERFACE_RESPONSE_FAILED"] = "InterfaceResponseError";
})(ErrorCode || (ErrorCode = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["COMMON_ERROR"] = "CommonError";
    ErrorType["IDE_ERROR"] = "IDEError";
})(ErrorType || (ErrorType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUVyQyxNQUFNLENBQU4sSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLGlEQUFzQyxDQUFBO0lBQ3RDLG1EQUF3QyxDQUFBO0lBQ3hDLHFEQUEwQyxDQUFBO0lBQzFDLCtDQUFvQyxDQUFBO0lBQ3BDLG1DQUF3QixDQUFBO0FBQzFCLENBQUMsRUFOVyxTQUFTLEtBQVQsU0FBUyxRQU1wQjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsK0NBQW9DLENBQUE7SUFDcEMsbURBQXdDLENBQUE7SUFDeEMsMkRBQWdELENBQUE7SUFDaEQsa0RBQXVDLENBQUE7SUFDdkMsaUVBQXNELENBQUE7QUFDeEQsQ0FBQyxFQU5XLFNBQVMsS0FBVCxTQUFTLFFBTXBCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBOEIsQ0FBQTtJQUM5QixtQ0FBd0IsQ0FBQTtBQUMxQixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEIifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/file.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/file.js ***!
  \*******************************************************************************************************/
/*! exports provided: OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return OSSEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return OSSUploadHeaderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return WHITELIST_EXTENSIONS; });
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
var OSSUploadHeaderList = ['Expires', 'Cache-Control', 'Content-Type', 'Content-Encoding', 'Content-Disposition'];
var WHITELIST_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'svg',
    'image',
    'mp3',
    'mp4',
    'ogg',
    'webm',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudC9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDaEIsMkJBQWlCLENBQUE7SUFDakIsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLE1BQU0sS0FBTixNQUFNLFFBR2pCO0FBbUJELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLENBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUUsQ0FBQztBQUU3SCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRztJQUVsQyxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxPQUFPO0lBR1AsS0FBSztJQUdMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtDQUNQLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js ***!
  \********************************************************************************************************/
/*! exports provided: HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX, OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS, LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS, DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType, MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["HTTPMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["TransportProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["SERVERLESS_HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["PREFIX"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["OSSEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["OSSUploadHeaderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["WHITELIST_EXTENSIONS"]; });

/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mongo */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/mongo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["QUERY_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARAMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["OID_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["REGEXP_FLAGS"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HTTP_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["HTTP_UNAUTHORIZED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorType"]; });

/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/validation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["MAX_DB_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["MAX_ID_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["INVALID_DB_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["INVALID_COLL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]; });






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxPQUFPLENBQUM7QUFDdEIsY0FBYyxRQUFRLENBQUM7QUFDdkIsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxjQUFjLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/mongo.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/mongo.js ***!
  \********************************************************************************************************/
/*! exports provided: LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return QUERY_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return DEFAULT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return PERMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return PREFIXES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return OID_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return REGEXP_FLAGS; });
var LIMIT = 100;
var QUERY_TIMEOUT = 100;
var DEFAULT_PARAMS = {
    limit: LIMIT,
    maxTimeMS: QUERY_TIMEOUT,
};
var PERMISSION;
(function (PERMISSION) {
    PERMISSION["READ"] = ".read";
    PERMISSION["WRITE"] = ".write";
    PERMISSION["CREATE"] = "document.create";
    PERMISSION["UPDATE"] = "document.update";
    PERMISSION["DELETE"] = "document.delete";
    PERMISSION["AGGREGATE"] = ".aggregate";
    PERMISSION["INDEX"] = ".index";
    PERMISSION["COLLECTION"] = "collection.manage";
    PERMISSION["DATABASE"] = "database.manage";
    PERMISSION["SYSTEM"] = "system.manage";
})(PERMISSION || (PERMISSION = {}));
var PREFIXES = {
    ObjectId: '\\u0007',
    Decimal128: '\\u0013',
};
var OID_LENGTH = 24;
var REGEXP_FLAGS = ['i', 'm', 'u', 'g'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvbW9uZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUd6QixNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBR2pDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRztJQUM1QixLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxhQUFhO0NBQ3pCLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxVQWVYO0FBZkQsV0FBWSxVQUFVO0lBRXBCLDRCQUFjLENBQUE7SUFDZCw4QkFBZ0IsQ0FBQTtJQUNoQix3Q0FBMEIsQ0FBQTtJQUMxQix3Q0FBMEIsQ0FBQTtJQUMxQix3Q0FBMEIsQ0FBQTtJQUMxQixzQ0FBd0IsQ0FBQTtJQUV4Qiw4QkFBZ0IsQ0FBQTtJQUNoQiw4Q0FBZ0MsQ0FBQTtJQUVoQywwQ0FBNEIsQ0FBQTtJQUU1QixzQ0FBd0IsQ0FBQTtBQUMxQixDQUFDLEVBZlcsVUFBVSxLQUFWLFVBQVUsUUFlckI7QUFHRCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUc7SUFDdEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLFNBQVM7Q0FDdEIsQ0FBQztBQUdGLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFLN0IsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/sdk.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/sdk.js ***!
  \******************************************************************************************************/
/*! exports provided: HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return HTTPMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return TransportProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return HEADER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return SERVERLESS_HEADER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return PREFIX; });
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["DEL"] = "DELETE";
    HTTPMethod["POST"] = "POST";
})(HTTPMethod || (HTTPMethod = {}));
var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["HTTP"] = "HTTP";
})(TransportProtocol || (TransportProtocol = {}));
var HEADER_PREFIX = 'x-basement-';
var SERVERLESS_HEADER_PREFIX = 'x-serverless-';
var PREFIX;
(function (PREFIX) {
    PREFIX["CLIENT"] = "/client";
    PREFIX["SERVER"] = "/server";
    PREFIX["ANTCLOUD"] = "/antcloud";
    PREFIX["ANTOPENANTCLOUD"] = "/antopen/antcloud";
})(PREFIX || (PREFIX = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnN0YW50L3Nkay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLHlCQUFXLENBQUE7SUFDWCw0QkFBYyxDQUFBO0lBQ2QsMkJBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUVYO0FBRkQsV0FBWSxpQkFBaUI7SUFDM0Isa0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFGVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRTVCO0FBRUQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7QUFFeEQsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiw0QkFBa0IsQ0FBQTtJQUNsQiw0QkFBa0IsQ0FBQTtJQUNsQixnQ0FBc0IsQ0FBQTtJQUN0QiwrQ0FBcUMsQ0FBQTtBQUN2QyxDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakIifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/validation.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/validation.js ***!
  \*************************************************************************************************************/
/*! exports provided: MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return MAX_DB_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return MAX_ID_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return INVALID_DB_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return INVALID_COLL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return ErrorMessages; });
var MAX_DB_NAME_LENGTH = 64;
var MAX_ID_NAME_LENGTH = 120;
var INVALID_DB_NAMES = ['admin', 'system', 'basement'];
var INVALID_COLL_NAMES = ['basement'];
var ErrorMessages = {
    INVALID_TYPE: 'field type is invalid',
    NOT_STRING: 'field is not a string',
    NOT_ARRAY: 'field is not an array',
    NOT_EMPTY: 'field should not be empty',
    TOO_LONG: 'field is too long',
    ILLEGAL: 'field should not contain illegal character',
    SYSTEM: 'field is in conflict with system names',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudC92YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUNyQyxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFHdEMsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBRSxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLENBQUUsVUFBVSxDQUFFLENBQUM7QUFHakQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHO0lBQzNCLFlBQVksRUFBRSx1QkFBdUI7SUFDckMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQyxTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDLFNBQVMsRUFBRSwyQkFBMkI7SUFDdEMsUUFBUSxFQUFFLG1CQUFtQjtJQUM3QixPQUFPLEVBQUUsNENBQTRDO0lBQ3JELE1BQU0sRUFBRSx3Q0FBd0M7Q0FDakQsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/error/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/error/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: BuiltInError, BasementClientError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltInError", function() { return BuiltInError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasementClientError", function() { return BasementClientError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var BuiltInError = (function () {
    function BuiltInError(message) {
        this.message = message;
        Error.call(this, message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this);
        }
    }
    return BuiltInError;
}());

var BasementClientError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasementClientError, _super);
    function BasementClientError(name, code, type, message) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        _this.code = code;
        _this.type = type;
        _this.message = message;
        return _this;
    }
    BasementClientError.from = function (raw) {
        return new BasementClientError(raw.name, raw.code, raw.type, raw.message);
    };
    return BasementClientError;
}(BuiltInError));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BO0lBSUUsc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUssS0FBYSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLEtBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOztBQUVEO0lBQXlDLHVDQUFZO0lBQ25ELDZCQUNTLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQWU7UUFKeEIsWUFNRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQU5RLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQU8sR0FBUCxPQUFPLENBQVE7O0lBR3hCLENBQUM7SUFPYSx3QkFBSSxHQUFsQixVQUFtQixHQUFvQjtRQUNyQyxPQUFPLElBQUksbUJBQW1CLENBQzVCLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxPQUFPLENBQ1osQ0FBQztJQUNKLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBeUMsWUFBWSxHQXVCcEQifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/index.js ***!
  \***********************************************************************************************/
/*! exports provided: BuiltInError, BasementClientError, emptyLogger, Validator, assert, queryToString, camelToLisp, extractMessage, OSSUploadResponseFormat, HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX, OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS, LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS, DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType, MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages, BaseEncoder, HTTPRequestEncoder, BaseDecoder, HTTPResponseDecoder, HTTPTransport, BaseService, Basement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltInError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["BuiltInError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasementClientError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["BasementClientError"]; });

/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["emptyLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["Validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryToString", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelToLisp", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["camelToLisp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractMessage", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["extractMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadResponseFormat", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["OSSUploadResponseFormat"]; });

/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HTTPMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["TransportProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["SERVERLESS_HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OSSEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OSSUploadHeaderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["WHITELIST_EXTENSIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["QUERY_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARAMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OID_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["REGEXP_FLAGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_HTTP_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HTTP_UNAUTHORIZED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_DB_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_ID_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["INVALID_DB_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["INVALID_COLL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorMessages"]; });

/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["BaseEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["HTTPRequestEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["BaseDecoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["HTTPResponseDecoder"]; });

/* harmony import */ var _transport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transport */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/transport/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPTransport", function() { return _transport__WEBPACK_IMPORTED_MODULE_4__["HTTPTransport"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/service/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]; });

/* harmony import */ var _basement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basement */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/basement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Basement", function() { return _basement__WEBPACK_IMPORTED_MODULE_6__["Basement"]; });








//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsY0FBYyxTQUFTLENBQUM7QUFJeEIsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxZQUFZLENBQUM7QUFHM0IsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxhQUFhLENBQUM7QUFDNUIsY0FBYyxXQUFXLENBQUM7QUFHMUIsY0FBYyxZQUFZLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/service/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/service/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
var BaseService = (function () {
    function BaseService(transport) {
        this.transport = transport;
    }
    BaseService.prototype.getEncoder = function (prefix) {
        return this.transport.getEncoder(prefix);
    };
    return BaseService;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtJQUNFLHFCQUNZLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7SUFDakMsQ0FBQztJQUVNLGdDQUFVLEdBQXBCLFVBQXFCLE1BQWU7UUFDbEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/transport/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/transport/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: HTTPTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPTransport", function() { return HTTPTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/codec/index.js");



var HTTPTransport = (function () {
    function HTTPTransport(endpoint, library) {
        this.endpoint = endpoint;
        this.library = library;
        this.protocol = _constant__WEBPACK_IMPORTED_MODULE_1__["TransportProtocol"].HTTP;
    }
    HTTPTransport.prototype.getEncoder = function (prefix) {
        return new _codec__WEBPACK_IMPORTED_MODULE_2__["HTTPRequestEncoder"](this.endpoint, prefix);
    };
    HTTPTransport.prototype.setAppId = function (appId) {
        this.appId = appId;
    };
    HTTPTransport.prototype.setAppSecret = function (appSecret) {
        this.appSecret = appSecret;
        return this;
    };
    HTTPTransport.prototype.setUA = function (ua) {
        this.ua = ua;
        return this;
    };
    HTTPTransport.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    HTTPTransport.prototype.setTimeout = function (timeout) {
        if (timeout === void 0) { timeout = '5s'; }
        if (typeof timeout === 'string') {
            if (timeout.indexOf('ms') >= 0) {
                this.timeout = parseInt(timeout, 10);
                return;
            }
            if (timeout.indexOf('s') >= 0) {
                this.timeout = parseInt(timeout, 10) * 1000;
                return;
            }
        }
        else if (typeof timeout === 'number') {
            this.timeout = timeout;
            return;
        }
        this.timeout = 5000;
    };
    HTTPTransport.prototype.setSpaceId = function (spaceId) {
        this.spaceId = spaceId;
    };
    HTTPTransport.prototype.request = function (encoder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2, (new _codec__WEBPACK_IMPORTED_MODULE_2__["HTTPResponseDecoder"]()).decode()];
            });
        });
    };
    return HTTPTransport;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNwb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFFeEQsT0FBTyxFQUNMLGtCQUFrQixFQUVsQixtQkFBbUIsR0FDcEIsTUFBTSxVQUFVLENBQUM7QUFFbEI7SUFVRSx1QkFDUyxRQUFnQixFQUNiLE9BQVk7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQVZqQixhQUFRLEdBQXNCLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQVd6RCxDQUFDO0lBTUcsa0NBQVUsR0FBakIsVUFBa0IsTUFBZTtRQUUvQixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBT00sZ0NBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFPTSxvQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFPTSw2QkFBSyxHQUFaLFVBQWEsRUFBVTtRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQU9NLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQU9NLGtDQUFVLEdBQWpCLFVBQWtCLE9BQTZCO1FBQTdCLHdCQUFBLEVBQUEsY0FBNkI7UUFDN0MsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxPQUFPO2FBQ1I7U0FDRjthQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFPTSxrQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFPWSwrQkFBTyxHQUFwQixVQUNFLE9BQTJCOzs7Z0JBRTNCLFdBQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQzs7O0tBQzdDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBekdELElBeUdDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: emptyLogger, Validator, assert, queryToString, camelToLisp, extractMessage, OSSUploadResponseFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryToString", function() { return queryToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToLisp", function() { return camelToLisp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractMessage", function() { return extractMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSUploadResponseFormat", function() { return OSSUploadResponseFormat; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"]; });

/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js");




function assert(expr, message) {
    if (!expr) {
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_constant__WEBPACK_IMPORTED_MODULE_3__["ErrorName"].VALIDATION_ERROR, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].VALIDATION_FAILED, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorType"].COMMON_ERROR, message);
    }
}
function queryToString(kvmap) {
    return Object.keys(kvmap).sort()
        .map(function (key) { return key + "=" + encodeURIComponent(kvmap[key].toString()); })
        .join('&');
}
function camelToLisp(key) {
    return key.replace(/[A-Z]/g, function (match) {
        return "-" + match.toLowerCase();
    });
}
function extractMessage(e) {
    if (!e) {
        return;
    }
    if (Array.isArray(e)) {
        return e.map(extractMessage).join('; ');
    }
    else if (typeof e === 'object') {
        return e && (e.message || e.msg || e.desc);
    }
    else if (typeof e === 'string') {
        return e;
    }
}
function OSSUploadResponseFormat(data) {
    return {
        id: data.id,
        key: data.ossPath,
        host: data.host,
        policy: data.policy,
        Signature: data.signature,
        OSSAccessKeyId: data.accessKeyId,
        securityToken: data.securityToken,
        cdnDomain: data.cdnDomain,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLGFBQWEsQ0FBQztBQUM1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUTlELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU87SUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE1BQU0sSUFBSSxtQkFBbUIsQ0FDM0IsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLE9BQU8sQ0FDUixDQUFDO0tBQ0g7QUFDSCxDQUFDO0FBT0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUE2QjtJQUN6RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ3ZCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcsU0FBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUcsRUFBckQsQ0FBcUQsQ0FBQztTQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQU9ELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBRztJQUM3QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUEsS0FBSztRQUNoQyxPQUFPLE1BQUksS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU1ELE1BQU0sVUFBVSxjQUFjLENBQUMsQ0FBTztJQUNwQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTztLQUNSO0lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQztBQWdCRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBMkI7SUFDakUsT0FBTztRQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztRQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNoQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7UUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0tBQzFCLENBQUM7QUFDSixDQUFDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/logger.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/logger.js ***!
  \********************************************************************************************************/
/*! exports provided: emptyLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return emptyLogger; });
var emptyLogger = {
    log: function () { return; },
    info: function () { return; },
    warn: function () { return; },
    error: function () { return; },
    debug: function () { return; },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdHkvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRztJQUN6QixHQUFHLEVBQUgsY0FBYyxPQUFPLENBQUMsQ0FBQztJQUN2QixJQUFJLEVBQUosY0FBZSxPQUFPLENBQUMsQ0FBQztJQUN4QixJQUFJLEVBQUosY0FBZSxPQUFPLENBQUMsQ0FBQztJQUN4QixLQUFLLEVBQUwsY0FBZ0IsT0FBTyxDQUFDLENBQUM7SUFDekIsS0FBSyxFQUFMLGNBQWdCLE9BQU8sQ0FBQyxDQUFDO0NBQzFCLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/rules/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/rules/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rules", function() { return rules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongo */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js");


var rules = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _mongo__WEBPACK_IMPORTED_MODULE_1__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0eS9ydWxlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFakMsSUFBTSxLQUFLLGdCQUNOLEtBQUssQ0FDVCxDQUFDO0FBRUYsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js ***!
  \*************************************************************************************************************/
/*! exports provided: ruleOfField, ruleOfFields, ruleOfDatabaseName, ruleOfCollectionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfField", function() { return ruleOfField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfFields", function() { return ruleOfFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfDatabaseName", function() { return ruleOfDatabaseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfCollectionName", function() { return ruleOfCollectionName; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js");

function ruleOfField(_, value) {
    function validateField(name) {
        if (/[\.\$]/.test(name)) {
            return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
        }
    }
    if (Array.isArray(value)) {
        return undefined;
    }
    if (typeof value === 'string') {
        return validateField(value);
    }
    var result = null;
    for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
        var key = _a[_i];
        result = validateField(key);
        if (typeof result === 'string') {
            return result;
        }
        if (typeof value[key] === 'object') {
            return ruleOfField(_, value[key]);
        }
    }
    if (result === null) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].INVALID_TYPE;
    }
}
function ruleOfFields(_, value) {
    if (!Array.isArray(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_ARRAY;
    }
    var err;
    var i = 0;
    while (!err && i < value.length) {
        err = ruleOfField(null, value[i]);
        i++;
    }
    return err;
}
function ruleOfDatabaseName(_, value) {
    if (typeof value !== 'string') {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_STRING;
    }
    if (value.trim().length === 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_EMPTY;
    }
    if (value.length > _constant__WEBPACK_IMPORTED_MODULE_0__["MAX_DB_NAME_LENGTH"]) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].TOO_LONG;
    }
    if (/[\/\\\.\ \"\$]/.test(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    if (_constant__WEBPACK_IMPORTED_MODULE_0__["INVALID_DB_NAMES"].indexOf(value) > -1) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].SYSTEM;
    }
}
function ruleOfCollectionName(_, value) {
    if (typeof value !== 'string') {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_STRING;
    }
    if (value.trim().length === 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_EMPTY;
    }
    if (value.length > _constant__WEBPACK_IMPORTED_MODULE_0__["MAX_ID_NAME_LENGTH"]) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].TOO_LONG;
    }
    if (value.indexOf('$') > -1) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    var namespace = value.split('.').shift();
    if (_constant__WEBPACK_IMPORTED_MODULE_0__["INVALID_COLL_NAMES"].indexOf(namespace) >= 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    if (!/^[_a-z]/i.test(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0eS9ydWxlcy9tb25nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixHQUNuQixNQUFNLGdCQUFnQixDQUFDO0FBUXhCLE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUs7SUFDbEMsU0FBUyxhQUFhLENBQUMsSUFBWTtRQUNqQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtRQUFqQyxJQUFNLEdBQUcsU0FBQTtRQUNaLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBRUQsSUFBSSxN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

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/validator.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/validator.js ***!
  \***********************************************************************************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parameter */ "../../node_modules/parameter/index.es5.js");
/* harmony import */ var parameter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parameter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/utility/rules/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/core/dist/esm/constant/index.js");




var Validator = (function () {
    function Validator(options) {
        this.p = new parameter__WEBPACK_IMPORTED_MODULE_0___default.a(options);
        for (var _i = 0, _a = Object.keys(_rules__WEBPACK_IMPORTED_MODULE_1__["rules"]); _i < _a.length; _i++) {
            var ruleName = _a[_i];
            var name_1 = ruleName.match(/ruleOf([a-zA-Z]+)/)[1];
            this.p.addRule(name_1[0].toLowerCase() + name_1.slice(1), _rules__WEBPACK_IMPORTED_MODULE_1__["rules"][ruleName]);
        }
    }
    Validator.prototype.validate = function (rules, obj) {
        if (typeof obj !== 'object' && typeof rules === 'string') {
            obj = { field: obj };
            rules = { field: rules };
        }
        var message = this.p.validate(rules, obj);
        if (!message) {
            return null;
        }
        var result = message.map(function (mistake) {
            if (mistake.field) {
                var target = JSON.parse(JSON.stringify(obj));
                var fields = mistake.field.match(/[^\.\[\]]+/g);
                while (fields.length) {
                    var field = fields.shift();
                    if (!target.hasOwnProperty(field)) {
                        break;
                    }
                    target = target[field];
                }
                mistake.value = target;
            }
            return mistake;
        });
        function getMessage(result) {
            if (Array.isArray(result)) {
                return result.map(getMessage).join('; ');
            }
            return result.field + " " + result.message;
        }
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_constant__WEBPACK_IMPORTED_MODULE_3__["ErrorName"].VALIDATION_ERROR, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].VALIDATION_FAILED, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorType"].COMMON_ERROR, getMessage(result));
    };
    return Validator;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdHkvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUQ7SUFFRSxtQkFBWSxPQUE0QjtRQUN0QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhDLEtBQXVCLFVBQWtCLEVBQWxCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUF0QyxJQUFNLFFBQVEsU0FBQTtZQUVqQixJQUFNLE1BQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBUU0sNEJBQVEsR0FBZixVQUFnQixLQUFVLEVBQUUsR0FBUTtRQUVsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDeEQsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjtRQUdELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2pDLE1BQU07cUJBQ1A7b0JBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDeEI7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsVUFBVSxDQUFDLE1BQU07WUFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO1lBRUQsT0FBVSxNQUFNLENBQUMsS0FBSyxTQUFJLE1BQU0sQ0FBQyxPQUFTLENBQUM7UUFDN0MsQ0FBQztRQUVELE1BQU0sSUFBSSxtQkFBbUIsQ0FDM0IsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/codec/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/codec/index.js ***!
  \******************************************************************************************************/
/*! exports provided: _isByProto, isArray, isObject, isString, JSONEncoder, JSONDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isByProto", function() { return _isByProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONEncoder", function() { return JSONEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONDecoder", function() { return JSONDecoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/index.js");


function _isByProto(val, type) {
    return Object.prototype.toString.call(val) === "[object " + type + "]";
}
function isArray(val) {
    return Array.isArray(val);
}
function isObject(val) {
    return val !== null && typeof val === 'object' && !isArray(val);
}
function isString(val) {
    return typeof val === 'string' || _isByProto(val, 'String');
}
var JSONEncoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONEncoder, _super);
    function JSONEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONEncoder.prototype.encode = function (data) {
        var _this = this;
        if (data instanceof RegExp) {
            return this.toRegexp(data);
        }
        if (data instanceof Date) {
            return this.toDate(data);
        }
        if (isArray(data)) {
            return data.map(function (d) { return _this.encode(d); });
        }
        if (isObject(data)) {
            return Object.keys(data).reduce(function (accu, k) {
                accu[k] = _this.encode(data[k]);
                return accu;
            }, {});
        }
        return data;
    };
    JSONEncoder.prototype.toDate = function (val) {
        return val.toISOString();
    };
    JSONEncoder.prototype.toRegexp = function (val) {
        return "/" + val.source.replace(/\\\//g, '/') + "/" + val.flags;
    };
    return JSONEncoder;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseEncoder"]));

var JSONDecoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONDecoder, _super);
    function JSONDecoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONDecoder.prototype.decode = function (data) {
        var _this = this;
        if (this.isRegexp(data)) {
            return this.toRegexp(data);
        }
        if (this.isDate(data)) {
            return this.toDate(data);
        }
        if (isArray(data)) {
            return data.map(function (d) { return _this.decode(d); });
        }
        if (isObject(data)) {
            return Object.keys(data).reduce(function (accu, k) {
                accu[k] = _this.decode(data[k]);
                return accu;
            }, {});
        }
        return data;
    };
    JSONDecoder.prototype.isDate = function (val) {
        return isString(val) && /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(val) && !isNaN(Date.parse(val));
    };
    JSONDecoder.prototype.isRegexp = function (val) {
        if (isString(val)) {
            var areFlagsValid = true;
            var parts = val.split('/');
            var last = parts[parts.length - 1];
            if (last) {
                areFlagsValid = last.split('').reduce(function (expr, p) {
                    return expr === true && _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["REGEXP_FLAGS"].indexOf(p) > -1;
                }, true);
            }
            return parts.length >= 2 && areFlagsValid;
        }
        return false;
    };
    JSONDecoder.prototype.toDate = function (val) {
        return new Date(val);
    };
    JSONDecoder.prototype.toRegexp = function (val) {
        var firstIndex = val.indexOf('/');
        var lastIndex = val.lastIndexOf('/');
        return new RegExp(val.slice(firstIndex + 1, lastIndex), val.slice(lastIndex + 1));
    };
    return JSONDecoder;
}(_ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFpQixZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVUzRixNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJO0lBQ2xDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGFBQVcsSUFBSSxNQUFHLENBQUM7QUFDcEUsQ0FBQztBQU9ELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBRztJQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQU9ELE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBRztJQUMxQixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFPRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQUc7SUFDMUIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQ7SUFBaUMsK0JBQVc7SUFBNUM7O0lBeUNBLENBQUM7SUFuQ1EsNEJBQU0sR0FBYixVQUFjLElBQVM7UUFBdkIsaUJBa0JDO1FBakJDLElBQUksSUFBSSxZQUFZLE1BQU0sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUF5QixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxJQUFJLFlBQVksSUFBSSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQXlCLENBQUM7U0FDbEQ7UUFDRCxJQUFJLE9BQU8sQ0FB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

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/index.js ***!
  \************************************************************************************************/
/*! exports provided: _isByProto, isArray, isObject, isString, JSONEncoder, JSONDecoder, Query, FullQuery, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/codec/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isByProto", function() { return _codec__WEBPACK_IMPORTED_MODULE_0__["_isByProto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _codec__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _codec__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _codec__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_0__["JSONEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_0__["JSONDecoder"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullQuery", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["FullQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Result"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxTQUFTLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/collection.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/collection.js ***!
  \***********************************************************************************************************/
/*! exports provided: Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/index.js");

var Collection = (function () {
    function Collection(name) {
        var v = new _ant_basement_core__WEBPACK_IMPORTED_MODULE_0__["Validator"]();
        v.validate('collectionName', name);
        this.name = name;
    }
    Collection.prototype.setDatabase = function (database) {
        this.database = database;
    };
    Collection.prototype.inspect = function () {
        return { collection: this.name };
    };
    return Collection;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU8vQztJQUlFLG9CQUFZLElBQVk7UUFDdEIsSUFBTSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFPTSxnQ0FBVyxHQUFsQixVQUFtQixRQUFrQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBTU0sNEJBQU8sR0FBZDtRQUNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/command.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/command.js ***!
  \********************************************************************************************************/
/*! exports provided: BaseCommand, ListCollectionsCommand, CreateCollectionCommand, RenameCollectionCommand, DeleteCollectionCommand, ListIndicesCommand, CreateIndexCommand, CreateIndicesCommand, DropIndexCommand, DropIndicesCommand, AggregateCommand, CountCommand, DistinctCommand, FindDocumentCommand, FindDocumentsCommand, InsertDocumentCommand, InsertDocumentsCommand, FindAndUpdateDocumentCommand, UpdateDocumentCommand, UpdateDocumentsCommand, FindAndReplaceDocumentCommand, ReplaceDocumentCommand, FindAndDeleteDocumentCommand, DeleteDocumentCommand, DeleteDocumentsCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCommand", function() { return BaseCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCollectionsCommand", function() { return ListCollectionsCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCollectionCommand", function() { return CreateCollectionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameCollectionCommand", function() { return RenameCollectionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCollectionCommand", function() { return DeleteCollectionCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIndicesCommand", function() { return ListIndicesCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIndexCommand", function() { return CreateIndexCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIndicesCommand", function() { return CreateIndicesCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropIndexCommand", function() { return DropIndexCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropIndicesCommand", function() { return DropIndicesCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregateCommand", function() { return AggregateCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountCommand", function() { return CountCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistinctCommand", function() { return DistinctCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDocumentCommand", function() { return FindDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDocumentsCommand", function() { return FindDocumentsCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertDocumentCommand", function() { return InsertDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertDocumentsCommand", function() { return InsertDocumentsCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindAndUpdateDocumentCommand", function() { return FindAndUpdateDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDocumentCommand", function() { return UpdateDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDocumentsCommand", function() { return UpdateDocumentsCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindAndReplaceDocumentCommand", function() { return FindAndReplaceDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceDocumentCommand", function() { return ReplaceDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindAndDeleteDocumentCommand", function() { return FindAndDeleteDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentCommand", function() { return DeleteDocumentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDocumentsCommand", function() { return DeleteDocumentsCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/index.js");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/codec/index.js");



var BaseCommand = (function () {
    function BaseCommand(argMap) {
        this._schema = {};
        this._argMap = {};
        this._argMap = argMap;
        if (!this._argMap.options) {
            this._argMap.options = {};
        }
    }
    Object.defineProperty(BaseCommand.prototype, "permission", {
        get: function () {
            switch (this._permission) {
                case _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].CREATE:
                case _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].UPDATE:
                case _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].DELETE:
                    return _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].WRITE;
                default:
                    return this._permission;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCommand.prototype, "argMap", {
        get: function () {
            return this._argMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCommand.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: true,
        configurable: true
    });
    BaseCommand.prototype.augmentOptions = function (options) {
        this.argMap.options = Object.assign({}, this.argMap.options, options);
    };
    BaseCommand.prototype.inspect = function () {
        var args = clean(JSON.parse(JSON.stringify(this.argMap)));
        function clean(d) {
            for (var _i = 0, _a = Object.keys(d); _i < _a.length; _i++) {
                var k = _a[_i];
                if (Object(_codec__WEBPACK_IMPORTED_MODULE_2__["isObject"])(d[k])) {
                    if (Object.keys(d[k]).length === 0) {
                        if (k !== 'query' || JSON.stringify(d[k]) !== '{}') {
                            delete d[k];
                        }
                    }
                    else {
                        clean(d[k]);
                    }
                }
                if (d[k] === undefined) {
                    delete d[k];
                }
            }
            return d;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, args), { command: this.name });
    };
    return BaseCommand;
}());

var ListCollectionsCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListCollectionsCommand, _super);
    function ListCollectionsCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'collections';
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].COLLECTION;
        return _this;
    }
    return ListCollectionsCommand;
}(BaseCommand));

var CreateCollectionCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreateCollectionCommand, _super);
    function CreateCollectionCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'create';
        _this._schema = {
            name: 'collectionName',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].COLLECTION;
        return _this;
    }
    return CreateCollectionCommand;
}(BaseCommand));

var RenameCollectionCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RenameCollectionCommand, _super);
    function RenameCollectionCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'rename';
        _this._schema = {
            newName: 'collectionName',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].COLLECTION;
        return _this;
    }
    return RenameCollectionCommand;
}(BaseCommand));

var DeleteCollectionCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeleteCollectionCommand, _super);
    function DeleteCollectionCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'drop';
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].COLLECTION;
        return _this;
    }
    return DeleteCollectionCommand;
}(BaseCommand));

var ListIndicesCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListIndicesCommand, _super);
    function ListIndicesCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'listIndexes';
        _this._schema = {
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].INDEX;
        return _this;
    }
    return ListIndicesCommand;
}(BaseCommand));

var CreateIndexCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreateIndexCommand, _super);
    function CreateIndexCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'createIndex';
        _this._schema = {
            field: 'field',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].INDEX;
        return _this;
    }
    return CreateIndexCommand;
}(BaseCommand));

var CreateIndicesCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreateIndicesCommand, _super);
    function CreateIndicesCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'createIndexes';
        _this._schema = {
            fields: 'fields',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].INDEX;
        return _this;
    }
    return CreateIndicesCommand;
}(BaseCommand));

var DropIndexCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DropIndexCommand, _super);
    function DropIndexCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'dropIndex';
        _this._schema = {
            indexName: 'field',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].INDEX;
        return _this;
    }
    return DropIndexCommand;
}(BaseCommand));

var DropIndicesCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DropIndicesCommand, _super);
    function DropIndicesCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'dropIndexes';
        _this._schema = {
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].INDEX;
        return _this;
    }
    return DropIndicesCommand;
}(BaseCommand));

var AggregateCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AggregateCommand, _super);
    function AggregateCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'aggregate';
        _this._schema = {
            pipeline: 'array',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].AGGREGATE;
        return _this;
    }
    return AggregateCommand;
}(BaseCommand));

var CountCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CountCommand, _super);
    function CountCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'count';
        _this._schema = {
            query: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].READ;
        return _this;
    }
    return CountCommand;
}(BaseCommand));

var DistinctCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DistinctCommand, _super);
    function DistinctCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'distinct';
        _this._schema = {
            key: 'string',
            query: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].READ;
        return _this;
    }
    return DistinctCommand;
}(BaseCommand));

var FindDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FindDocumentCommand, _super);
    function FindDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'findOne';
        _this._schema = {
            query: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].READ;
        return _this;
    }
    return FindDocumentCommand;
}(BaseCommand));

var FindDocumentsCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FindDocumentsCommand, _super);
    function FindDocumentsCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'find';
        _this._schema = {
            query: {
                type: 'object',
                required: false,
            },
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].READ;
        return _this;
    }
    return FindDocumentsCommand;
}(BaseCommand));

var InsertDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InsertDocumentCommand, _super);
    function InsertDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'insertOne';
        _this._schema = {
            doc: 'field',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].CREATE;
        return _this;
    }
    return InsertDocumentCommand;
}(BaseCommand));

var InsertDocumentsCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InsertDocumentsCommand, _super);
    function InsertDocumentsCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'insertMany';
        _this._schema = {
            docs: 'fields',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].CREATE;
        return _this;
    }
    return InsertDocumentsCommand;
}(BaseCommand));

var FindAndUpdateDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FindAndUpdateDocumentCommand, _super);
    function FindAndUpdateDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'findOneAndUpdate';
        _this._schema = {
            filter: 'object',
            update: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].UPDATE;
        return _this;
    }
    return FindAndUpdateDocumentCommand;
}(BaseCommand));

var UpdateDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UpdateDocumentCommand, _super);
    function UpdateDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'updateOne';
        _this._schema = {
            filter: 'object',
            update: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].UPDATE;
        return _this;
    }
    return UpdateDocumentCommand;
}(BaseCommand));

var UpdateDocumentsCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UpdateDocumentsCommand, _super);
    function UpdateDocumentsCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'updateMany';
        _this._schema = {
            filter: 'object',
            update: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].UPDATE;
        return _this;
    }
    return UpdateDocumentsCommand;
}(BaseCommand));

var FindAndReplaceDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FindAndReplaceDocumentCommand, _super);
    function FindAndReplaceDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'findOneAndReplace';
        _this._schema = {
            filter: 'object',
            replacement: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].UPDATE;
        return _this;
    }
    return FindAndReplaceDocumentCommand;
}(BaseCommand));

var ReplaceDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ReplaceDocumentCommand, _super);
    function ReplaceDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'replaceOne';
        _this._schema = {
            filter: 'object',
            doc: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].UPDATE;
        return _this;
    }
    return ReplaceDocumentCommand;
}(BaseCommand));

var FindAndDeleteDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FindAndDeleteDocumentCommand, _super);
    function FindAndDeleteDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'findOneAndDelete';
        _this._schema = {
            filter: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].DELETE;
        return _this;
    }
    return FindAndDeleteDocumentCommand;
}(BaseCommand));

var DeleteDocumentCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeleteDocumentCommand, _super);
    function DeleteDocumentCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'deleteOne';
        _this._schema = {
            filter: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].DELETE;
        return _this;
    }
    return DeleteDocumentCommand;
}(BaseCommand));

var DeleteDocumentsCommand = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeleteDocumentsCommand, _super);
    function DeleteDocumentsCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'deleteMany';
        _this._schema = {
            filter: {
                type: 'object',
                required: false,
            },
            options: {
                type: 'object',
                required: false,
            },
        };
        _this._permission = _ant_basement_core__WEBPACK_IMPORTED_MODULE_1__["PERMISSION"].DELETE;
        return _this;
    }
    return DeleteDocumentsCommand;
}(BaseCommand));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbC9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ1UsVUFBVSxHQUMxQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFPcEM7SUFNRSxxQkFBWSxNQUEwQjtRQUo1QixZQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQXVCLEVBQUUsQ0FBQztRQUl6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQU1ELHNCQUFXLG1DQUFVO2FBQXJCO1lBQ0UsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN4QixLQUFLLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLEtBQUssVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsS0FBSyxVQUFVLENBQUMsTUFBTTtvQkFDcEIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMxQjtvQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLCtCQUFNO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFPTSxvQ0FBYyxHQUFyQixVQUFzQixPQUEyQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJ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

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/index.js ***!
  \******************************************************************************************************/
/*! exports provided: Query, FullQuery, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullQuery", function() { return _query__WEBPACK_IMPORTED_MODULE_0__["FullQuery"]; });

/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _result__WEBPACK_IMPORTED_MODULE_1__["Result"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxVQUFVLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/query.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/query.js ***!
  \******************************************************************************************************/
/*! exports provided: Query, FullQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullQuery", function() { return FullQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-basement/core */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/index.js");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/codec/index.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/collection.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/command.js");






var Reflect = global['Reflect'];
var Query = (function () {
    function Query() {
        this.encoder = new _codec__WEBPACK_IMPORTED_MODULE_3__["JSONEncoder"]();
        this.decoder = new _codec__WEBPACK_IMPORTED_MODULE_3__["JSONDecoder"]();
    }
    Query.prototype.collection = function (name) {
        this.coll = new _collection__WEBPACK_IMPORTED_MODULE_4__["Collection"](name);
        return this;
    };
    Query.prototype.aggregate = function (pipeline, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["AggregateCommand"]({ pipeline: pipeline, options: options });
        return this.execute();
    };
    Query.prototype.count = function (query, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["CountCommand"]({ query: query, options: options });
        return this.execute();
    };
    Query.prototype.distinct = function (key, query, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["DistinctCommand"]({ key: key, query: query, options: options });
        return this.execute();
    };
    Query.prototype.findOne = function (query, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["FindDocumentCommand"]({ query: query, options: options });
        return this.execute();
    };
    Query.prototype.find = function (query, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["FindDocumentsCommand"]({ query: query, options: options });
        return this.execute();
    };
    Query.prototype.insertOne = function (doc, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["InsertDocumentCommand"]({ doc: doc, options: options });
        return this.execute();
    };
    Query.prototype.insertMany = function (docs, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["InsertDocumentsCommand"]({ docs: docs, options: options });
        return this.execute();
    };
    Query.prototype.findOneAndUpdate = function (filter, update, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["FindAndUpdateDocumentCommand"]({ filter: filter, update: update, options: options });
        return this.execute();
    };
    Query.prototype.updateOne = function (filter, update, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["UpdateDocumentCommand"]({ filter: filter, update: update, options: options });
        return this.execute();
    };
    Query.prototype.updateMany = function (filter, update, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["UpdateDocumentsCommand"]({ filter: filter, update: update, options: options });
        return this.execute();
    };
    Query.prototype.findOneAndReplace = function (filter, replacement, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["FindAndReplaceDocumentCommand"]({ filter: filter, replacement: replacement, options: options });
        return this.execute();
    };
    Query.prototype.replaceOne = function (filter, doc, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["ReplaceDocumentCommand"]({ filter: filter, doc: doc, options: options });
        return this.execute();
    };
    Query.prototype.findOneAndDelete = function (filter, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["FindAndDeleteDocumentCommand"]({ filter: filter, options: options });
        return this.execute();
    };
    Query.prototype.deleteOne = function (filter, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["DeleteDocumentCommand"]({ filter: filter, options: options });
        return this.execute();
    };
    Query.prototype.deleteMany = function (filter, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["DeleteDocumentsCommand"]({ filter: filter, options: options });
        return this.execute();
    };
    Query.prototype.validate = function () {
        var v = new _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["Validator"]();
        v.validate(this.comm.schema, this.encoder.encode(this.comm.argMap));
    };
    Query.prototype.execute = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var query;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.comm, 'command is missing');
                this.validate();
                switch (this.comm.permission) {
                    case _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"].AGGREGATE:
                    case _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"].INDEX:
                    case _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"].WRITE:
                    case _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"].READ:
                        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.collection, 'collection is missing');
                        break;
                    default:
                }
                query = Object.assign({}, this.coll && this.coll.inspect(), this.comm.inspect());
                return [2, this.encoder.encode(query)];
            });
        });
    };
    Query.fromRawResponse = function (raw) {
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["assert"])(raw && raw.command, 'malformed request');
        var q = new Query();
        var proto = Object.getPrototypeOf(q);
        var props = Object.getOwnPropertyNames(proto);
        var methods = props.filter(function (method) { return Reflect.hasMetadata('commandClass', q, method); });
        if (raw.collection) {
            q = q.collection(raw.collection);
        }
        if (methods.indexOf(raw.command) >= 0) {
            var Klass = Reflect.getMetadata('commandClass', q, raw.command);
            Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["assert"])(_command__WEBPACK_IMPORTED_MODULE_5__["BaseCommand"].isPrototypeOf(Klass), 'invalid command');
            delete raw.collection;
            delete raw.command;
            q.comm = new Klass(q.decoder.decode(raw));
            q.validate();
            return q;
        }
        throw new _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["ErrorName"].VALIDATION_ERROR, _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].COMMAND_MISSING, _ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["ErrorType"].COMMON_ERROR, 'command is missing');
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["AggregateCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "aggregate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["CountCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "count", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["DistinctCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "distinct", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["FindDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "findOne", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["FindDocumentsCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "find", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["InsertDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "insertOne", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["InsertDocumentsCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "insertMany", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["FindAndUpdateDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "findOneAndUpdate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["UpdateDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "updateOne", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["UpdateDocumentsCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "updateMany", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["FindAndReplaceDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "findOneAndReplace", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["ReplaceDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "replaceOne", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["FindAndDeleteDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "findOneAndDelete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["DeleteDocumentCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "deleteOne", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["DeleteDocumentsCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], Query.prototype, "deleteMany", null);
    return Query;
}());

var FullQuery = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FullQuery, _super);
    function FullQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullQuery.prototype.collections = function () {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["ListCollectionsCommand"]({});
        return this.execute();
    };
    FullQuery.prototype.createCollection = function (name, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["CreateCollectionCommand"]({ name: name, options: options });
        return this.execute();
    };
    FullQuery.prototype.rename = function (newName, options) {
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.coll, 'collection must exist');
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["RenameCollectionCommand"]({ newName: newName, options: options });
        return this.execute();
    };
    FullQuery.prototype.drop = function (options) {
        Object(_ant_basement_core__WEBPACK_IMPORTED_MODULE_2__["assert"])(this.coll, 'collection must exist');
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["DeleteCollectionCommand"]({ options: options });
        return this.execute();
    };
    FullQuery.prototype.listIndexes = function (options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["ListIndicesCommand"]({ options: options });
        return this.execute();
    };
    FullQuery.prototype.createIndex = function (field, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["CreateIndexCommand"]({ field: field, options: options });
        return this.execute();
    };
    FullQuery.prototype.createIndexes = function (fields, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["CreateIndicesCommand"]({ fields: fields, options: options });
        return this.execute();
    };
    FullQuery.prototype.dropIndex = function (indexName, options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["DropIndexCommand"]({ indexName: indexName, options: options });
        return this.execute();
    };
    FullQuery.prototype.dropIndexes = function (options) {
        this.comm = new _command__WEBPACK_IMPORTED_MODULE_5__["DropIndicesCommand"]({ options: options });
        return this.execute();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["ListCollectionsCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "collections", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["CreateCollectionCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "createCollection", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["RenameCollectionCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "rename", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["DeleteCollectionCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "drop", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["ListIndicesCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "listIndexes", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["CreateIndexCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "createIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["CreateIndicesCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "createIndexes", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["DropIndexCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "dropIndex", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Reflect.metadata('commandClass', _command__WEBPACK_IMPORTED_MODULE_5__["DropIndicesCommand"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
    ], FullQuery.prototype, "dropIndexes", null);
    return FullQuery;
}(Query));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFnQyxNQUFNLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQXdCLE1BQU0sY0FBYyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBcUIsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHOWxCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUtsQztJQUFBO1FBR1ksWUFBTyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQWdSckQsQ0FBQztJQXpRUSwwQkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxJ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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../node_modules/_webpack@4.42.1@webpack/buildin/global.js */ "../../node_modules/_webpack@4.42.1@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/result.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/model/result.js ***!
  \*******************************************************************************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/dist/esm/codec/index.js");

var Result = (function () {
    function Result(data) {
        this.encoder = new _codec__WEBPACK_IMPORTED_MODULE_0__["JSONEncoder"]();
        this.decoder = new _codec__WEBPACK_IMPORTED_MODULE_0__["JSONDecoder"]();
        this.raw = this.decoder.decode(data);
    }
    Result.prototype.inspect = function () {
        return this.raw;
    };
    return Result;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVsL3Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU9wRDtJQUtFLGdCQUFZLElBQXNCO1FBSHhCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QyxZQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBTU0sd0JBQU8sR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/basement.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/basement.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: Basement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basement", function() { return Basement; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/index.js");

var Basement = (function () {
    function Basement(options) {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options, 'options is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.spaceId, 'spaceId is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.endpoint, 'endpoint is required');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["assert"])(options.httpClient, 'http client is required');
        this._debug = false;
        this._logger = options.logger || _utility__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"];
        this.options = options;
        this.createTransport(options);
    }
    Basement.prototype.setDebugFlag = function (flag) {
        this._debug = flag;
        this.transport.setLogger(this.logger);
    };
    Object.defineProperty(Basement.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Basement.prototype, "logger", {
        get: function () {
            return this._debug ? this._logger : _utility__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"];
        },
        enumerable: true,
        configurable: true
    });
    Basement.prototype.createTransport = function (options) {
        var Klass = options.httpTransport;
        this.transport = new Klass(options.endpoint, options.httpClient);
        this.transport.setAppId(options.appId);
        this.transport.setLogger(this.logger);
        this.transport.setSpaceId(options.spaceId);
        this.transport.setTimeout(options.timeout);
    };
    return Basement;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmFzZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJaEQ7SUFNRSxrQkFBWSxPQUF3QjtRQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFPTSwrQkFBWSxHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBTUQsc0JBQVcsMkJBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw0QkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRVMsa0NBQWUsR0FBekIsVUFBMEIsT0FBd0I7UUFDaEQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFwREQsSUFvREMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/index.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: BaseEncoder, HTTPRequestEncoder, BaseDecoder, HTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["BaseEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["HTTPRequestEncoder"]; });

/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/response.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return _response__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return _response__WEBPACK_IMPORTED_MODULE_1__["HTTPResponseDecoder"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxZQUFZLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/request.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/request.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: BaseEncoder, HTTPRequestEncoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return BaseEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return HTTPRequestEncoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/index.js");



var BaseEncoder = (function () {
    function BaseEncoder() {
    }
    return BaseEncoder;
}());

var HTTPRequestEncoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTPRequestEncoder, _super);
    function HTTPRequestEncoder(endpoint, prefix) {
        var _this = _super.call(this) || this;
        _this.endpoint = endpoint;
        _this.body = {};
        _this.query = {};
        _this.method = _constant__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].POST;
        _this.prefix = '';
        _this.baseHeaders = {};
        _this.serviceHeaders = {};
        _this.serverlessHeaders = {};
        if (prefix) {
            _this.prefix = prefix;
        }
        return _this;
    }
    Object.defineProperty(HTTPRequestEncoder.prototype, "url", {
        get: function () {
            return [
                this.endpoint + this.prefix,
            ]
                .filter(function (p) { return !!p; })
                .join('?');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HTTPRequestEncoder.prototype, "headers", {
        get: function () {
            var _this = this;
            var normalizedHeaders = Object
                .keys(this.serverlessHeaders)
                .reduce(function (accu, prop) {
                var key = "" + _constant__WEBPACK_IMPORTED_MODULE_1__["SERVERLESS_HEADER_PREFIX"] + Object(_utility__WEBPACK_IMPORTED_MODULE_2__["camelToLisp"])(prop);
                accu[key] = _this.serverlessHeaders[prop];
                return accu;
            }, {});
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.baseHeaders), normalizedHeaders);
        },
        enumerable: true,
        configurable: true
    });
    HTTPRequestEncoder.prototype.setBodyField = function (fields) {
        this.body = Object.assign({}, this.body, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fields));
        return this;
    };
    HTTPRequestEncoder.prototype.setUserId = function (userId) {
        this.setBodyField({
            userId: userId,
        });
        return this;
    };
    HTTPRequestEncoder.prototype.setBaseHeaders = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.baseHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.baseHeaders), Object.keys(headers).reduce(function (accu, key) {
            if (headers[key]) {
                accu[key] = headers[key].toString();
            }
            return accu;
        }, {}));
        return this;
    };
    HTTPRequestEncoder.prototype.setServerlessHeaders = function (headers) {
        if (headers === void 0) { headers = {}; }
        this.serverlessHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.serverlessHeaders), Object.keys(headers).reduce(function (accu, key) {
            if (headers[key]) {
                accu[key] = headers[key].toString();
            }
            return accu;
        }, {}));
        return this;
    };
    HTTPRequestEncoder.prototype.encode = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return {
            url: this.url,
            body: this.body,
            method: this.method,
            headers: this.headers,
        };
    };
    return HTTPRequestEncoder;
}(BaseEncoder));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2RlYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFVLE1BQU0sYUFBYSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJekM7SUFBQTtJQU9BLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOztBQVNEO0lBQXdDLHNDQUFXO0lBVWpELDRCQUFzQixRQUFnQixFQUFFLE1BQWU7UUFBdkQsWUFDRSxpQkFBTyxTQUtSO1FBTnFCLGNBQVEsR0FBUixRQUFRLENBQVE7UUFUL0IsVUFBSSxHQUF1QixFQUFFLENBQUM7UUFDOUIsV0FBSyxHQUEwQixFQUFFLENBQUM7UUFDbEMsWUFBTSxHQUFlLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDbEMsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixpQkFBVyxHQUEwQixFQUFFLENBQUM7UUFDeEMsb0JBQWMsR0FBMEIsRUFBRSxDQUFDO1FBQzNDLHVCQUFpQixHQUEwQixFQUFFLENBQUM7UUFNdEQsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7SUFDSCxDQUFDO0lBRUQsc0JBQVcsbUNBQUc7YUFBZDtZQUNFLE9BQU87Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTthQUM1QjtpQkFDRSxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQztpQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBTzthQUFsQjtZQUFBLGlCQWVDO1lBWkMsSUFBTSxpQkFBaUIsR0FBRyxNQUFNO2lCQUM3QixJQUFJLENB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

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/response.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/response.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: BaseDecoder, HTTPResponseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return BaseDecoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return HTTPResponseDecoder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/error/index.js");


var BaseDecoder = (function () {
    function BaseDecoder() {
    }
    return BaseDecoder;
}());

var HTTPResponseDecoder = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTPResponseDecoder, _super);
    function HTTPResponseDecoder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DEMARCATION_STATUS = 400;
        _this._body = {};
        _this._headers = {};
        return _this;
    }
    HTTPResponseDecoder.prototype.setHeaders = function (headers) {
        this._headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._headers), headers);
    };
    HTTPResponseDecoder.prototype.setStatusAndBody = function (status, body) {
        this._status = status;
        this._body = body;
        if (status >= this.DEMARCATION_STATUS) {
            this._error = _error__WEBPACK_IMPORTED_MODULE_1__["BasementClientError"].from(body);
        }
    };
    HTTPResponseDecoder.prototype.setErrorMessage = function (message) {
        this._error = new Error(message);
    };
    HTTPResponseDecoder.prototype.setErrorObject = function (error) {
        this._error = error;
    };
    HTTPResponseDecoder.prototype.decode = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
        return {
            body: this._body || {},
            error: this._error,
            status: this._status,
            headers: this._headers,
        };
    };
    return HTTPResponseDecoder;
}(BaseDecoder));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUkvQztJQUFBO0lBT0EsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7O0FBU0Q7SUFBeUMsdUNBQVc7SUFBcEQ7UUFBQSxxRUErREM7UUE5RFEsd0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFdBQUssR0FBdUIsRUFBRSxDQUFDO1FBRy9CLGNBQVEsR0FBMEIsRUFBRSxDQUFDOztJQTBEakQsQ0FBQztJQW5EUSx3Q0FBVSxHQUFqQixVQUFrQixPQUE4QjtRQUM5QyxJQUFJLENBQUMsUUFBUSx5QkFDUixJQUFJLENBQUMsUUFBUSxHQUNiLE9BQU8sQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQU9NLDhDQUFnQixHQUF2QixVQUF3QixNQUFjLEVBQUUsSUFBUztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBTU0sNkNBQWUsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBd0IsQ0FBQztJQUMxRCxDQUFDO0lBT00sNENBQWMsR0FBckIsVUFBc0IsS0FBWTtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQTRCLENBQUM7SUFDN0MsQ0FBQztJQU9NLG9DQUFNLEdBQWI7UUFBYyxXQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLHNCQUFXOztRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUF5QyxXQUFXLEdBK0RuRCJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/error.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/error.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return DEFAULT_HTTP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return HTTP_UNAUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return ErrorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
var DEFAULT_HTTP_STATUS = 500;
var HTTP_UNAUTHORIZED = 401;
var ErrorName;
(function (ErrorName) {
    ErrorName["VALIDATION_ERROR"] = "ValidationError";
    ErrorName["UNSUPPORTED_ERROR"] = "UnsupportedError";
    ErrorName["UNAUTHORIZED_ERROR"] = "UnauthorizedError";
    ErrorName["INTERFACE_ERROR"] = "InterfaceError";
    ErrorName["IDE_ERROR"] = "IDEError";
})(ErrorName || (ErrorName = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["COMMAND_MISSING"] = "CommandMissing";
    ErrorCode["VALIDATION_FAILED"] = "ValidationFailed";
    ErrorCode["AUTHENTICATION_FAILED"] = "AuthenticationFailed";
    ErrorCode["UNAUTHENTICATION"] = "Unauthentication";
    ErrorCode["INTERFACE_RESPONSE_FAILED"] = "InterfaceResponseError";
})(ErrorCode || (ErrorCode = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["COMMON_ERROR"] = "CommonError";
    ErrorType["IDE_ERROR"] = "IDEError";
})(ErrorType || (ErrorType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQUVyQyxNQUFNLENBQU4sSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ25CLGlEQUFzQyxDQUFBO0lBQ3RDLG1EQUF3QyxDQUFBO0lBQ3hDLHFEQUEwQyxDQUFBO0lBQzFDLCtDQUFvQyxDQUFBO0lBQ3BDLG1DQUF3QixDQUFBO0FBQzFCLENBQUMsRUFOVyxTQUFTLEtBQVQsU0FBUyxRQU1wQjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBTVg7QUFORCxXQUFZLFNBQVM7SUFDbkIsK0NBQW9DLENBQUE7SUFDcEMsbURBQXdDLENBQUE7SUFDeEMsMkRBQWdELENBQUE7SUFDaEQsa0RBQXVDLENBQUE7SUFDdkMsaUVBQXNELENBQUE7QUFDeEQsQ0FBQyxFQU5XLFNBQVMsS0FBVCxTQUFTLFFBTXBCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBOEIsQ0FBQTtJQUM5QixtQ0FBd0IsQ0FBQTtBQUMxQixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEIifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/file.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/file.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return OSSEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return OSSUploadHeaderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return WHITELIST_EXTENSIONS; });
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
var OSSUploadHeaderList = ['Expires', 'Cache-Control', 'Content-Type', 'Content-Encoding', 'Content-Disposition'];
var WHITELIST_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'svg',
    'image',
    'mp3',
    'mp4',
    'ogg',
    'webm',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudC9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDaEIsMkJBQWlCLENBQUE7SUFDakIsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLE1BQU0sS0FBTixNQUFNLFFBR2pCO0FBbUJELE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLENBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLENBQUUsQ0FBQztBQUU3SCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRztJQUVsQyxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxPQUFPO0lBR1AsS0FBSztJQUdMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtDQUNQLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX, OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS, LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS, DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType, MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["HTTPMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["TransportProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["SERVERLESS_HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return _sdk__WEBPACK_IMPORTED_MODULE_0__["PREFIX"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["OSSEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["OSSUploadHeaderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return _file__WEBPACK_IMPORTED_MODULE_1__["WHITELIST_EXTENSIONS"]; });

/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mongo */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/mongo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["QUERY_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARAMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["OID_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return _mongo__WEBPACK_IMPORTED_MODULE_2__["REGEXP_FLAGS"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HTTP_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["HTTP_UNAUTHORIZED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["ErrorType"]; });

/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/validation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["MAX_DB_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["MAX_ID_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["INVALID_DB_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["INVALID_COLL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _validation__WEBPACK_IMPORTED_MODULE_4__["ErrorMessages"]; });






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxPQUFPLENBQUM7QUFDdEIsY0FBYyxRQUFRLENBQUM7QUFDdkIsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxjQUFjLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/mongo.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/mongo.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return QUERY_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return DEFAULT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return PERMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return PREFIXES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return OID_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return REGEXP_FLAGS; });
var LIMIT = 100;
var QUERY_TIMEOUT = 100;
var DEFAULT_PARAMS = {
    limit: LIMIT,
    maxTimeMS: QUERY_TIMEOUT,
};
var PERMISSION;
(function (PERMISSION) {
    PERMISSION["READ"] = ".read";
    PERMISSION["WRITE"] = ".write";
    PERMISSION["CREATE"] = "document.create";
    PERMISSION["UPDATE"] = "document.update";
    PERMISSION["DELETE"] = "document.delete";
    PERMISSION["AGGREGATE"] = ".aggregate";
    PERMISSION["INDEX"] = ".index";
    PERMISSION["COLLECTION"] = "collection.manage";
    PERMISSION["DATABASE"] = "database.manage";
    PERMISSION["SYSTEM"] = "system.manage";
})(PERMISSION || (PERMISSION = {}));
var PREFIXES = {
    ObjectId: '\\u0007',
    Decimal128: '\\u0013',
};
var OID_LENGTH = 24;
var REGEXP_FLAGS = ['i', 'm', 'u', 'g'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvbW9uZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUd6QixNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBR2pDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRztJQUM1QixLQUFLLEVBQUUsS0FBSztJQUNaLFNBQVMsRUFBRSxhQUFhO0NBQ3pCLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxVQWVYO0FBZkQsV0FBWSxVQUFVO0lBRXBCLDRCQUFjLENBQUE7SUFDZCw4QkFBZ0IsQ0FBQTtJQUNoQix3Q0FBMEIsQ0FBQTtJQUMxQix3Q0FBMEIsQ0FBQTtJQUMxQix3Q0FBMEIsQ0FBQTtJQUMxQixzQ0FBd0IsQ0FBQTtJQUV4Qiw4QkFBZ0IsQ0FBQTtJQUNoQiw4Q0FBZ0MsQ0FBQTtJQUVoQywwQ0FBNEIsQ0FBQTtJQUU1QixzQ0FBd0IsQ0FBQTtBQUMxQixDQUFDLEVBZlcsVUFBVSxLQUFWLFVBQVUsUUFlckI7QUFHRCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUc7SUFDdEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLFNBQVM7Q0FDdEIsQ0FBQztBQUdGLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFLN0IsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/sdk.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/sdk.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return HTTPMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return TransportProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return HEADER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return SERVERLESS_HEADER_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return PREFIX; });
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["DEL"] = "DELETE";
    HTTPMethod["POST"] = "POST";
})(HTTPMethod || (HTTPMethod = {}));
var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["HTTP"] = "HTTP";
})(TransportProtocol || (TransportProtocol = {}));
var HEADER_PREFIX = 'x-basement-';
var SERVERLESS_HEADER_PREFIX = 'x-serverless-';
var PREFIX;
(function (PREFIX) {
    PREFIX["CLIENT"] = "/client";
    PREFIX["SERVER"] = "/server";
    PREFIX["ANTCLOUD"] = "/antcloud";
    PREFIX["ANTOPENANTCLOUD"] = "/antopen/antcloud";
})(PREFIX || (PREFIX = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnN0YW50L3Nkay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ3BCLHlCQUFXLENBQUE7SUFDWCw0QkFBYyxDQUFBO0lBQ2QsMkJBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUVYO0FBRkQsV0FBWSxpQkFBaUI7SUFDM0Isa0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFGVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRTVCO0FBRUQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7QUFFeEQsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNoQiw0QkFBa0IsQ0FBQTtJQUNsQiw0QkFBa0IsQ0FBQTtJQUNsQixnQ0FBc0IsQ0FBQTtJQUN0QiwrQ0FBcUMsQ0FBQTtBQUN2QyxDQUFDLEVBTFcsTUFBTSxLQUFOLE1BQU0sUUFLakIifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/validation.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/validation.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return MAX_DB_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return MAX_ID_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return INVALID_DB_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return INVALID_COLL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return ErrorMessages; });
var MAX_DB_NAME_LENGTH = 64;
var MAX_ID_NAME_LENGTH = 120;
var INVALID_DB_NAMES = ['admin', 'system', 'basement'];
var INVALID_COLL_NAMES = ['basement'];
var ErrorMessages = {
    INVALID_TYPE: 'field type is invalid',
    NOT_STRING: 'field is not a string',
    NOT_ARRAY: 'field is not an array',
    NOT_EMPTY: 'field should not be empty',
    TOO_LONG: 'field is too long',
    ILLEGAL: 'field should not contain illegal character',
    SYSTEM: 'field is in conflict with system names',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudC92YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUNyQyxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFHdEMsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBRSxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLENBQUUsVUFBVSxDQUFFLENBQUM7QUFHakQsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHO0lBQzNCLFlBQVksRUFBRSx1QkFBdUI7SUFDckMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQyxTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDLFNBQVMsRUFBRSwyQkFBMkI7SUFDdEMsUUFBUSxFQUFFLG1CQUFtQjtJQUM3QixPQUFPLEVBQUUsNENBQTRDO0lBQ3JELE1BQU0sRUFBRSx3Q0FBd0M7Q0FDakQsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/error/index.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/error/index.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: BuiltInError, BasementClientError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltInError", function() { return BuiltInError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasementClientError", function() { return BasementClientError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var BuiltInError = (function () {
    function BuiltInError(message) {
        this.message = message;
        Error.call(this, message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this);
        }
    }
    return BuiltInError;
}());

var BasementClientError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BasementClientError, _super);
    function BasementClientError(name, code, type, message) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        _this.code = code;
        _this.type = type;
        _this.message = message;
        return _this;
    }
    BasementClientError.from = function (raw) {
        return new BasementClientError(raw.name, raw.code, raw.type, raw.message);
    };
    return BasementClientError;
}(BuiltInError));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BO0lBSUUsc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLElBQUssS0FBYSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLEtBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOztBQUVEO0lBQXlDLHVDQUFZO0lBQ25ELDZCQUNTLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQWU7UUFKeEIsWUFNRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQU5RLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQU8sR0FBUCxPQUFPLENBQVE7O0lBR3hCLENBQUM7SUFPYSx3QkFBSSxHQUFsQixVQUFtQixHQUFvQjtRQUNyQyxPQUFPLElBQUksbUJBQW1CLENBQzVCLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxPQUFPLENBQ1osQ0FBQztJQUNKLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBeUMsWUFBWSxHQXVCcEQifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/index.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/index.js ***!
  \********************************************************************************************************************************/
/*! exports provided: BuiltInError, BasementClientError, emptyLogger, Validator, assert, queryToString, camelToLisp, extractMessage, OSSUploadResponseFormat, HTTPMethod, TransportProtocol, HEADER_PREFIX, SERVERLESS_HEADER_PREFIX, PREFIX, OSSEnv, OSSUploadHeaderList, WHITELIST_EXTENSIONS, LIMIT, QUERY_TIMEOUT, DEFAULT_PARAMS, PERMISSION, PREFIXES, OID_LENGTH, REGEXP_FLAGS, DEFAULT_HTTP_STATUS, HTTP_UNAUTHORIZED, ErrorName, ErrorCode, ErrorType, MAX_DB_NAME_LENGTH, MAX_ID_NAME_LENGTH, INVALID_DB_NAMES, INVALID_COLL_NAMES, ErrorMessages, BaseEncoder, HTTPRequestEncoder, BaseDecoder, HTTPResponseDecoder, HTTPTransport, BaseService, Basement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltInError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["BuiltInError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasementClientError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["BasementClientError"]; });

/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["emptyLogger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["Validator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryToString", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["queryToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelToLisp", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["camelToLisp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractMessage", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["extractMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadResponseFormat", function() { return _utility__WEBPACK_IMPORTED_MODULE_1__["OSSUploadResponseFormat"]; });

/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HTTPMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportProtocol", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["TransportProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADER_PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVERLESS_HEADER_PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["SERVERLESS_HEADER_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSEnv", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OSSEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSSUploadHeaderList", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OSSUploadHeaderList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WHITELIST_EXTENSIONS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["WHITELIST_EXTENSIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIMIT", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["LIMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_TIMEOUT", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["QUERY_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARAMS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARAMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERMISSION", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PERMISSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PREFIXES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["PREFIXES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OID_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["OID_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGEXP_FLAGS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["REGEXP_FLAGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HTTP_STATUS", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_HTTP_STATUS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_UNAUTHORIZED", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["HTTP_UNAUTHORIZED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorName", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DB_NAME_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_DB_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_ID_NAME_LENGTH", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["MAX_ID_NAME_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_DB_NAMES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["INVALID_DB_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVALID_COLL_NAMES", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["INVALID_COLL_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessages", function() { return _constant__WEBPACK_IMPORTED_MODULE_2__["ErrorMessages"]; });

/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["BaseEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPRequestEncoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["HTTPRequestEncoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["BaseDecoder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPResponseDecoder", function() { return _codec__WEBPACK_IMPORTED_MODULE_3__["HTTPResponseDecoder"]; });

/* harmony import */ var _transport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transport */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/transport/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTPTransport", function() { return _transport__WEBPACK_IMPORTED_MODULE_4__["HTTPTransport"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/service/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]; });

/* harmony import */ var _basement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basement */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/basement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Basement", function() { return _basement__WEBPACK_IMPORTED_MODULE_6__["Basement"]; });








//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsY0FBYyxTQUFTLENBQUM7QUFJeEIsY0FBYyxXQUFXLENBQUM7QUFDMUIsY0FBYyxZQUFZLENBQUM7QUFHM0IsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxhQUFhLENBQUM7QUFDNUIsY0FBYyxXQUFXLENBQUM7QUFHMUIsY0FBYyxZQUFZLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/service/index.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/service/index.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
var BaseService = (function () {
    function BaseService(transport) {
        this.transport = transport;
    }
    BaseService.prototype.getEncoder = function (prefix) {
        return this.transport.getEncoder(prefix);
    };
    return BaseService;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtJQUNFLHFCQUNZLFNBQXdCO1FBQXhCLGNBQVMsR0FBVCxTQUFTLENBQWU7SUFDakMsQ0FBQztJQUVNLGdDQUFVLEdBQXBCLFVBQXFCLE1BQWU7UUFDbEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyJ9

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/transport/index.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/transport/index.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: HTTPTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPTransport", function() { return HTTPTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js");
/* harmony import */ var _codec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../codec */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/codec/index.js");



var HTTPTransport = (function () {
    function HTTPTransport(endpoint, library) {
        this.endpoint = endpoint;
        this.library = library;
        this.protocol = _constant__WEBPACK_IMPORTED_MODULE_1__["TransportProtocol"].HTTP;
    }
    HTTPTransport.prototype.getEncoder = function (prefix) {
        return new _codec__WEBPACK_IMPORTED_MODULE_2__["HTTPRequestEncoder"](this.endpoint, prefix);
    };
    HTTPTransport.prototype.setAppId = function (appId) {
        this.appId = appId;
    };
    HTTPTransport.prototype.setAppSecret = function (appSecret) {
        this.appSecret = appSecret;
        return this;
    };
    HTTPTransport.prototype.setUA = function (ua) {
        this.ua = ua;
        return this;
    };
    HTTPTransport.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    HTTPTransport.prototype.setTimeout = function (timeout) {
        if (timeout === void 0) { timeout = '5s'; }
        if (typeof timeout === 'string') {
            if (timeout.indexOf('ms') >= 0) {
                this.timeout = parseInt(timeout, 10);
                return;
            }
            if (timeout.indexOf('s') >= 0) {
                this.timeout = parseInt(timeout, 10) * 1000;
                return;
            }
        }
        else if (typeof timeout === 'number') {
            this.timeout = timeout;
            return;
        }
        this.timeout = 5000;
    };
    HTTPTransport.prototype.setSpaceId = function (spaceId) {
        this.spaceId = spaceId;
    };
    HTTPTransport.prototype.request = function (encoder) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2, (new _codec__WEBPACK_IMPORTED_MODULE_2__["HTTPResponseDecoder"]()).decode()];
            });
        });
    };
    return HTTPTransport;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNwb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFFeEQsT0FBTyxFQUNMLGtCQUFrQixFQUVsQixtQkFBbUIsR0FDcEIsTUFBTSxVQUFVLENBQUM7QUFFbEI7SUFVRSx1QkFDUyxRQUFnQixFQUNiLE9BQVk7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQVZqQixhQUFRLEdBQXNCLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQVd6RCxDQUFDO0lBTUcsa0NBQVUsR0FBakIsVUFBa0IsTUFBZTtRQUUvQixPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBT00sZ0NBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFPTSxvQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFPTSw2QkFBSyxHQUFaLFVBQWEsRUFBVTtRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQU9NLGlDQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQU9NLGtDQUFVLEdBQWpCLFVBQWtCLE9BQTZCO1FBQTdCLHdCQUFBLEVBQUEsY0FBNkI7UUFDN0MsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxPQUFPO2FBQ1I7U0FDRjthQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFPTSxrQ0FBVSxHQUFqQixVQUFrQixPQUFlO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFPWSwrQkFBTyxHQUFwQixVQUNFLE9BQTJCOzs7Z0JBRTNCLFdBQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQzs7O0tBQzdDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBekdELElBeUdDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/index.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/index.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: emptyLogger, Validator, assert, queryToString, camelToLisp, extractMessage, OSSUploadResponseFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryToString", function() { return queryToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToLisp", function() { return camelToLisp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractMessage", function() { return extractMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSUploadResponseFormat", function() { return OSSUploadResponseFormat; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return _logger__WEBPACK_IMPORTED_MODULE_0__["emptyLogger"]; });

/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js");




function assert(expr, message) {
    if (!expr) {
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_constant__WEBPACK_IMPORTED_MODULE_3__["ErrorName"].VALIDATION_ERROR, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].VALIDATION_FAILED, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorType"].COMMON_ERROR, message);
    }
}
function queryToString(kvmap) {
    return Object.keys(kvmap).sort()
        .map(function (key) { return key + "=" + encodeURIComponent(kvmap[key].toString()); })
        .join('&');
}
function camelToLisp(key) {
    return key.replace(/[A-Z]/g, function (match) {
        return "-" + match.toLowerCase();
    });
}
function extractMessage(e) {
    if (!e) {
        return;
    }
    if (Array.isArray(e)) {
        return e.map(extractMessage).join('; ');
    }
    else if (typeof e === 'object') {
        return e && (e.message || e.msg || e.desc);
    }
    else if (typeof e === 'string') {
        return e;
    }
}
function OSSUploadResponseFormat(data) {
    return {
        id: data.id,
        key: data.ossPath,
        host: data.host,
        policy: data.policy,
        Signature: data.signature,
        OSSAccessKeyId: data.accessKeyId,
        securityToken: data.securityToken,
        cdnDomain: data.cdnDomain,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLGFBQWEsQ0FBQztBQUM1QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUTlELE1BQU0sVUFBVSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU87SUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE1BQU0sSUFBSSxtQkFBbUIsQ0FDM0IsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLE9BQU8sQ0FDUixDQUFDO0tBQ0g7QUFDSCxDQUFDO0FBT0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUE2QjtJQUN6RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO1NBQ3ZCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcsU0FBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUcsRUFBckQsQ0FBcUQsQ0FBQztTQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQU9ELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBRztJQUM3QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUEsS0FBSztRQUNoQyxPQUFPLE1BQUksS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU1ELE1BQU0sVUFBVSxjQUFjLENBQUMsQ0FBTztJQUNwQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTztLQUNSO0lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQztBQWdCRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBMkI7SUFDakUsT0FBTztRQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztRQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNoQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7UUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0tBQzFCLENBQUM7QUFDSixDQUFDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/logger.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/logger.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: emptyLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyLogger", function() { return emptyLogger; });
var emptyLogger = {
    log: function () { return; },
    info: function () { return; },
    warn: function () { return; },
    error: function () { return; },
    debug: function () { return; },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdHkvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRztJQUN6QixHQUFHLEVBQUgsY0FBYyxPQUFPLENBQUMsQ0FBQztJQUN2QixJQUFJLEVBQUosY0FBZSxPQUFPLENBQUMsQ0FBQztJQUN4QixJQUFJLEVBQUosY0FBZSxPQUFPLENBQUMsQ0FBQztJQUN4QixLQUFLLEVBQUwsY0FBZ0IsT0FBTyxDQUFDLENBQUM7SUFDekIsS0FBSyxFQUFMLGNBQWdCLE9BQU8sQ0FBQyxDQUFDO0NBQzFCLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/rules/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/rules/index.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: rules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rules", function() { return rules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongo */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js");


var rules = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _mongo__WEBPACK_IMPORTED_MODULE_1__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0eS9ydWxlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFakMsSUFBTSxLQUFLLGdCQUNOLEtBQUssQ0FDVCxDQUFDO0FBRUYsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDIn0=

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/rules/mongo.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ruleOfField, ruleOfFields, ruleOfDatabaseName, ruleOfCollectionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfField", function() { return ruleOfField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfFields", function() { return ruleOfFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfDatabaseName", function() { return ruleOfDatabaseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleOfCollectionName", function() { return ruleOfCollectionName; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js");

function ruleOfField(_, value) {
    function validateField(name) {
        if (/[\.\$]/.test(name)) {
            return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
        }
    }
    if (Array.isArray(value)) {
        return undefined;
    }
    if (typeof value === 'string') {
        return validateField(value);
    }
    var result = null;
    for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
        var key = _a[_i];
        result = validateField(key);
        if (typeof result === 'string') {
            return result;
        }
        if (typeof value[key] === 'object') {
            return ruleOfField(_, value[key]);
        }
    }
    if (result === null) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].INVALID_TYPE;
    }
}
function ruleOfFields(_, value) {
    if (!Array.isArray(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_ARRAY;
    }
    var err;
    var i = 0;
    while (!err && i < value.length) {
        err = ruleOfField(null, value[i]);
        i++;
    }
    return err;
}
function ruleOfDatabaseName(_, value) {
    if (typeof value !== 'string') {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_STRING;
    }
    if (value.trim().length === 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_EMPTY;
    }
    if (value.length > _constant__WEBPACK_IMPORTED_MODULE_0__["MAX_DB_NAME_LENGTH"]) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].TOO_LONG;
    }
    if (/[\/\\\.\ \"\$]/.test(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    if (_constant__WEBPACK_IMPORTED_MODULE_0__["INVALID_DB_NAMES"].indexOf(value) > -1) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].SYSTEM;
    }
}
function ruleOfCollectionName(_, value) {
    if (typeof value !== 'string') {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_STRING;
    }
    if (value.trim().length === 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].NOT_EMPTY;
    }
    if (value.length > _constant__WEBPACK_IMPORTED_MODULE_0__["MAX_ID_NAME_LENGTH"]) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].TOO_LONG;
    }
    if (value.indexOf('$') > -1) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    var namespace = value.split('.').shift();
    if (_constant__WEBPACK_IMPORTED_MODULE_0__["INVALID_COLL_NAMES"].indexOf(namespace) >= 0) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
    if (!/^[_a-z]/i.test(value)) {
        return _constant__WEBPACK_IMPORTED_MODULE_0__["ErrorMessages"].ILLEGAL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbGl0eS9ydWxlcy9tb25nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixHQUNuQixNQUFNLGdCQUFnQixDQUFDO0FBUXhCLE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUs7SUFDbEMsU0FBUyxhQUFhLENBQUMsSUFBWTtRQUNqQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtRQUFqQyxJQUFNLEdBQUcsU0FBQTtRQUNaLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBRUQsSUFBSSxN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

/***/ }),

/***/ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/validator.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/validator.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parameter */ "../../node_modules/parameter/index.es5.js");
/* harmony import */ var parameter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parameter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/utility/rules/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/error/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/@ant-basement/services/node_modules/@ant-basement/mongo/node_modules/@ant-basement/core/dist/esm/constant/index.js");




var Validator = (function () {
    function Validator(options) {
        this.p = new parameter__WEBPACK_IMPORTED_MODULE_0___default.a(options);
        for (var _i = 0, _a = Object.keys(_rules__WEBPACK_IMPORTED_MODULE_1__["rules"]); _i < _a.length; _i++) {
            var ruleName = _a[_i];
            var name_1 = ruleName.match(/ruleOf([a-zA-Z]+)/)[1];
            this.p.addRule(name_1[0].toLowerCase() + name_1.slice(1), _rules__WEBPACK_IMPORTED_MODULE_1__["rules"][ruleName]);
        }
    }
    Validator.prototype.validate = function (rules, obj) {
        if (typeof obj !== 'object' && typeof rules === 'string') {
            obj = { field: obj };
            rules = { field: rules };
        }
        var message = this.p.validate(rules, obj);
        if (!message) {
            return null;
        }
        var result = message.map(function (mistake) {
            if (mistake.field) {
                var target = JSON.parse(JSON.stringify(obj));
                var fields = mistake.field.match(/[^\.\[\]]+/g);
                while (fields.length) {
                    var field = fields.shift();
                    if (!target.hasOwnProperty(field)) {
                        break;
                    }
                    target = target[field];
                }
                mistake.value = target;
            }
            return mistake;
        });
        function getMessage(result) {
            if (Array.isArray(result)) {
                return result.map(getMessage).join('; ');
            }
            return result.field + " " + result.message;
        }
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["BasementClientError"](_constant__WEBPACK_IMPORTED_MODULE_3__["ErrorName"].VALIDATION_ERROR, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"].VALIDATION_FAILED, _constant__WEBPACK_IMPORTED_MODULE_3__["ErrorType"].COMMON_ERROR, getMessage(result));
    };
    return Validator;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxpdHkvdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUQ7SUFFRSxtQkFBWSxPQUE0QjtRQUN0QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhDLEtBQXVCLFVBQWtCLEVBQWxCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUF0QyxJQUFNLFFBQVEsU0FBQTtZQUVqQixJQUFNLE1BQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBUU0sNEJBQVEsR0FBZixVQUFnQixLQUFVLEVBQUUsR0FBUTtRQUVsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDeEQsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjtRQUdELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVsRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2pDLE1BQU07cUJBQ1A7b0JBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDeEI7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsVUFBVSxDQUFDLE1BQU07WUFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO1lBRUQsT0FBVSxNQUFNLENBQUMsS0FBSyxTQUFJLE1BQU0sQ0FBQyxPQUFTLENBQUM7UUFDN0MsQ0FBQztRQUVELE1BQU0sSUFBSSxtQkFBbUIsQ0FDM0IsU0FBUyxDQUFDLGdCQUFnQixFQUMxQixTQUFTLENBQUMsaUJBQWlCLEVBQzNCLFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMifQ==

/***/ })

/******/ })["MPServerless"];
});