(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGoogleMap"] = factory();
	else
		root["VueGoogleMap"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundProps__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ready__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FindElement__ = __webpack_require__(14);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__BoundProps__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Events__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__FindElement__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__Ready__["a" /* default */]],

	created: function created() {
		var mapAncestor = this.$_findAncestor(function (a) {
			return a.$options.name === 'GoogleMap';
		});

		if (!mapAncestor) {
			throw new Error(this.constructor.name + ' component must be used within a <google-map> component.');
		}

		this.$_mapAncestor = mapAncestor;
	},
	googleMapsPrepare: function googleMapsPrepare() {
		var _this = this;

		return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var mapComp;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							mapComp = _this.$_mapAncestor;
							_context.next = 3;
							return mapComp.$_getMap();

						case 3:
							_this.$_map = _context.sent;

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}))();
	}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_error__ = __webpack_require__(7);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			googleMapsReady: false
		};
	},
	mounted: function mounted() {
		var _this = this;

		return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var handlers, promises, i, result, _handlers, _i;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return __WEBPACK_IMPORTED_MODULE_0__lib_loader__["a" /* default */].ensureReady();

						case 2:
							handlers = _this.$options.googleMapsPrepare;

							if (!handlers) {
								_context.next = 8;
								break;
							}

							promises = [];

							for (i = 0; i < handlers.length; i++) {
								try {
									result = handlers[i].call(_this);

									if (typeof result.then === 'function') {
										promises.push(result);
									}
								} catch (e) {
									Object(__WEBPACK_IMPORTED_MODULE_1__utils_error__["a" /* handleError */])(e, _this, 'googleMapsPrepare hook');
								}
							}
							_context.next = 8;
							return Promise.all(promises);

						case 8:

							// Ready
							_this.googleMapsReady = true;
							_handlers = _this.$options.googleMapsReady;

							if (_handlers) {
								for (_i = 0; _i < _handlers.length; _i++) {
									try {
										_handlers[_i].call(_this);
									} catch (e) {
										Object(__WEBPACK_IMPORTED_MODULE_1__utils_error__["a" /* handleError */])(e, _this, 'googleMapsReady hook');
									}
								}
							}

							_this.$emit('ready');

						case 12:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}))();
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_bind_prop__ = __webpack_require__(26);


/* harmony default export */ __webpack_exports__["a"] = ({
	beforeDestroy: function beforeDestroy() {
		this.unbindProps();
	},


	methods: {
		bindProps: function bindProps(target, props) {
			this.unbindProps();
			this.$_boundsProps = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var prop = _step.value;

					var options = {
						vm: this,
						target: target
					};
					if (typeof prop === 'string') {
						options.name = prop;
					} else {
						Object.assign(options, prop);
					}
					this.$_boundsProps.push(Object(__WEBPACK_IMPORTED_MODULE_0__utils_bind_prop__["a" /* bindProp */])(options));
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		},
		unbindProps: function unbindProps() {
			if (this.$_boundsProps) {
				this.$_boundsProps.forEach(function (unbind) {
					return unbind();
				});
			}
		}
	}
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  beforeCreate: function beforeCreate() {
    this.$_googleListeners = [];
  },
  beforeDestroy: function beforeDestroy() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$_googleListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var listener = _step.value;

        listener.remove();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },


  methods: {
    listen: function listen(target, event, handler) {
      this.$_googleListeners.push(target.addListener(event, handler));
    },
    redirectEvents: function redirectEvents(target, events) {
      var _this = this;

      var _loop = function _loop(e) {
        var normalized = e.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
        _this.listen(target, e, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.$emit.apply(_this, [normalized].concat(args));
        });
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var e = _step2.value;

          _loop(e);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = redirectMethods;
function redirectMethods(_ref) {
	var target = _ref.target,
	    names = _ref.names;

	return names.reduce(function (obj, name) {
		obj[name] = function () {
			var t = target.call(this);
			if (t) {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return t[name].apply(t, args);
			}
		};
		return obj;
	}, {});
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export beheviorOptions */
/* unused harmony export styleOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shapeOptions; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var beheviorOptions = {
  clickable: {
    type: Boolean,
    default: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  geodesic: {
    type: Boolean,
    default: true
  },
  visible: {
    type: Boolean,
    default: true
  }
};

var styleOptions = {
  zIndex: {
    type: Number,
    required: false
  },
  fillColor: {
    type: String,
    required: false,
    default: '#4285F4'
  },
  fillOpacity: {
    type: Number,
    required: false,
    default: 0.25
  },
  strokeColor: {
    type: String,
    required: false,
    default: '#4285F4'
  },
  strokeWeight: {
    type: Number,
    required: false,
    default: 1
  },
  strokeOpacity: {
    type: Number,
    required: false,
    strokeOpacity: 0.5
  }
};

var shapeOptions = _extends({}, beheviorOptions, styleOptions);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var loader = {
	loaded: false,
	readyPromises: [],

	/**
  * @param apiKey    API Key, or object with the URL parameters. For example
  *                  to use Google Maps Premium API, pass
  *                    `{ client: <YOUR-CLIENT-ID> }`.
  *                  You may pass the libraries and/or version (as `v`) parameter into
  *                  this parameter and skip the next two parameters
  * @param version   Google for Maps version
  * @param libraries Libraries to load (@see
  *                  https://developers.google.com/maps/documentation/javascript/libraries)
  * @param loadCn    Boolean. If set to true, the map will be loaded from goole maps China
  *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
  */
	load: function load(_ref) {
		var apiKey = _ref.apiKey,
		    version = _ref.version,
		    libraries = _ref.libraries,
		    loadCn = _ref.loadCn;

		if (typeof window === 'undefined') {
			// Do nothing if run from server-side
			return Promise.resolve();
		}
		if (!this.loaded && (!window.google || !window.google.maps)) {
			var googleMapScript = document.createElement('SCRIPT');

			// Allow apiKey to be an object.
			// This is to support more esoteric means of loading Google Maps,
			// such as Google for business
			// https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
			var options = {};
			if (typeof apiKey === 'string') {
				options.key = apiKey;
			} else if ((typeof apiKey === 'undefined' ? 'undefined' : _typeof(apiKey)) === 'object') {
				for (var k in apiKey) {
					// transfer values in apiKey to options
					options[k] = apiKey[k];
				}
			} else {
				throw new Error('`apiKey` should either be a string or an object');
			}

			// libraries
			var librariesPath = '';
			if (libraries && libraries.length > 0) {
				librariesPath = libraries.join(',');
				options['libraries'] = librariesPath;
			} else if (Array.prototype.isPrototypeOf(options.libraries)) {
				options.libraries = options.libraries.join(',');
			}
			options['callback'] = 'VueGoogleMapsLoaded';

			var baseUrl = 'https://maps.googleapis.com/';

			if (typeof loadCn === 'boolean' && loadCn === true) {
				baseUrl = 'http://maps.google.cn/';
			}

			var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
			}).join('&');

			if (version) {
				url = url + '&v=' + version;
			}

			googleMapScript.setAttribute('src', url);
			googleMapScript.setAttribute('async', '');
			googleMapScript.setAttribute('defer', '');
			document.body.appendChild(googleMapScript);

			window.VueGoogleMapsLoaded = this._setLoaded.bind(this);
		} else {
			console.warn('The Google Maps library is already loaded');
			this._setLoaded();
		}
	},
	ensureReady: function ensureReady() {
		var _this = this;

		if (this.loaded) {
			return Promise.resolve();
		} else {
			var promise = new Promise(function (resolve) {
				_this.readyPromises.push(resolve);
			});
			return promise;
		}
	},
	_setLoaded: function _setLoaded() {
		this.loaded = true;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = this.readyPromises[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var resolve = _step.value;

				resolve();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		this.readyPromises = [];
	}
};

/* harmony default export */ __webpack_exports__["a"] = (loader);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initErrorHandling;
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;
var config = void 0;

function initErrorHandling(Vue) {
	config = Vue.config;
}

function handleError(e, vm, info) {
	if (config.errorHandler) {
		config.errorHandler(e, vm, info);
	} else {
		if (typeof console !== 'undefined') {
			console.error(e);
		} else {
			throw e;
		}
	}
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(25)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Ready__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_BoundProps__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_misc__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_redirect_methods__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//







var coordinatesRegex = new RegExp('[+-]?\\d+(\\.\\d+)?', 'g');

// The default center is Rome the mother of all culture
var defaultCenter = {
	lat: 41.89193,
	lng: 12.51133
};

var boundProps = [{
	name: 'center',
	watcher: function watcher(value) {
		return {
			lat: Object(__WEBPACK_IMPORTED_MODULE_3__utils_misc__["a" /* autoCall */])(value.lat),
			lng: Object(__WEBPACK_IMPORTED_MODULE_3__utils_misc__["a" /* autoCall */])(value.lng)
		};
	},
	identity: function identity(a, b) {
		if (a && b) {
			if (typeof a.equals !== 'function') {
				a = new window.google.maps.LatLng(a);
			}
			if (typeof b.equals !== 'function') {
				b = new window.google.maps.LatLng(b);
			}
			return a.equals(b);
		}
	},
	retriever: function retriever(value) {
		return {
			lat: value.lat(),
			lng: value.lng()
		};
	}
}, 'heading', 'mapTypeId', 'tilt', 'zoom'];

var redirectedMethods = ['panBy', 'panTo', 'panToBounds', 'setCenter', 'fitBounds', 'getBounds'];

var redirectedEvents = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMap',

	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Ready__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_BoundProps__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_Events__["a" /* default */]],

	props: {
		center: {
			required: true,
			type: [String, Object, Array]
		},
		heading: {
			type: Number
		},
		mapTypeId: {
			type: String,
			required: false
		},
		options: {
			type: Object,
			default: function _default() {
				return {};
			}
		},
		tilt: {
			type: Number,
			required: false
		},
		zoom: {
			required: false,
			type: Number,
			default: 10
		}
	},

	beforeCreate: function beforeCreate() {
		this.$_mapPromises = [];
	},
	googleMapsReady: function googleMapsReady() {
		var _this = this;

		var element = this.$refs.map;
		var center = this.parseCenter(this.center);

		var options = _extends({
			center: center,
			heading: this.heading,
			mapTypeId: this.mapTypeId,
			tilt: this.tilt,
			zoom: this.zoom
		}, this.options);

		this.$_map = new window.google.maps.Map(element, options);

		this.bindProps(this.$_map, boundProps);

		this.$_streetView = this.$_map.getStreetView();
		this.$_streetViewService = new google.maps.StreetViewService();
		this.$_directionsService = new google.maps.DirectionsService();
		this.$_directionsRenderer = new google.maps.DirectionsRenderer();
		this.$_geoCoder = new google.maps.Geocoder();

		this.$_directionsRenderer.setMap(this.$_map);

		this.listen(this.$_map, 'bounds_changed', function () {
			_this.$emit('update:bounds', _this.$_map.getBounds());
		});

		this.listen(this.$_map, 'idle', function () {
			_this.$emit('idle', _this);
			_this.lastCenter = _this.$_map.getCenter();
		});

		this.lastCenter = this.$_map.getCenter();

		this.redirectEvents(this.$_map, redirectedEvents);

		// Code that awaits `$_getMap()`
		this.$_mapPromises.forEach(function (resolve) {
			return resolve(_this.$_map);
		});
	},


	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4__utils_redirect_methods__["a" /* redirectMethods */])({
		target: function target() {
			return this.$_map;
		},

		names: redirectedMethods
	}), {
		resize: function resize() {
			var preserveCenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			if (this.$_map) {
				// let center
				// preserveCenter && (center = this.$_map.getCenter())
				window.google.maps.event.trigger(this.$_map, 'resize');
				preserveCenter && this.$_map.setCenter(this.lastCenter);
			}
		},
		visibilityChanged: function visibilityChanged(isVisible) {
			if (isVisible) {
				this.$nextTick(this.resize);
			}
		},
		$_getMap: function $_getMap() {
			var _this2 = this;

			if (this.$_map) {
				return Promise.resolve(this.$_map);
			} else {
				return new Promise(function (resolve) {
					_this2.$_mapPromises.push(resolve);
				});
			}
		},


		// This method simulate the DirectionsService api directly on map
		// Route; An object with the route request properties
		// @see: https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRequest
		getDirections: function getDirections(route, callback) {
			var _this3 = this;

			this.$_directionsService.route(route, function (result, status) {
				if (status !== 'OK') {
					callback(status);
					return;
				}
				_this3.$_directionsRenderer.setDirections(result);
				callback(null, result);
			});
		},


		// This method simulate the StreetViewService directly on current map
		// Position: Lat Lng position to get panoramas
		// Options: { location, preference, radius, source }
		//  @see: https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewLocationRequest
		// Callback: The callback to run when the streetview service has done
		setStreetView: function setStreetView(position, options, callback) {
			var _this4 = this;

			this.$_streetViewService.getPanorama({
				location: position
			}, function (data, status) {
				if (status !== 'OK') {
					callback(status);
					return;
				}
				_this4.$_streetView.setPano(data.location.pano);
				_this4.$_streetView.setVisible(true);
				callback(null, data);
			});
		},


		// Takes a value and tries to evaluate the center otherwise
		// fails back to the default center that can be customized through settings
		parseCenter: function parseCenter(value) {
			if (Array.isArray(value)) {
				if (value.length < 2) {
					console.warn('The center array is invalid', value, 'the component will fallback to default');
					this.$emit('update:center', defaultCenter);
					return defaultCenter;
				}

				return {
					lat: value[0],
					lng: value[1]
				};
			}

			if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				if (!value.hasOwnProperty('lat') || !value.hasOwnProperty('lng')) {
					console.warn('The center object is invalid', value, 'the component will fallback to default');
					this.$emit('update:center', defaultCenter);
					return defaultCenter;
				}
				return value;
			}

			if (typeof value === 'string') {
				var matches = this.center.match(coordinatesRegex);
				if (!matches || matches.length < 2) {
					console.warn('The center string is invalid', value, 'the component will fallback to default');
					this.$emit('update:center', defaultCenter);
					return defaultCenter;
				}
			}

			console.warn('Invalid center property', value, 'the component will fallback to default');
			return defaultCenter;
		}
	}),

	watch: {
		options: {
			handler: function handler(val) {
				this.$_map.setOptions(val);
			},

			deep: true
		}
	}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = autoCall;
/* harmony export (immutable) */ __webpack_exports__["b"] = capitalize;
function autoCall(value) {
	return typeof value === 'function' ? value() : value;
}

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__ = __webpack_require__(0);


var boundProps = ['animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity', 'place', 'position', 'shape', 'title', 'visible', 'zIndex'];

var redirectedEvents = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMapMarker',

	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__["a" /* default */]],

	props: {
		animation: {
			type: Number
		},
		clickable: {
			type: Boolean,
			default: true
		},
		cursor: {
			type: String
		},
		draggable: {
			type: Boolean,
			default: false
		},
		icon: {},
		label: {},
		opacity: {
			type: Number,
			default: 1
		},
		place: {
			type: Object
		},
		position: {
			type: Object
		},
		shape: {
			type: Object
		},
		title: {
			type: String
		},
		visible: {
			type: Boolean,
			default: true
		},
		zIndex: {
			type: Number
		}
	},

	render: function render(h) {
		if (!this.$slots.default || this.$slots.default.length === 0) {
			return '';
		} else if (this.$slots.default.length === 1) {
			// So that infowindows can have a marker parent
			return this.$slots.default[0];
		} else {
			return h('div', this.$slots.default);
		}
	},
	googleMapsReady: function googleMapsReady() {
		var options = Object.assign({}, this.$props);
		options.map = this.$_map;

		this.$_marker = new window.google.maps.Marker(options);
		this.bindProps(this.$_marker, boundProps);
		this.redirectEvents(this.$_marker, redirectedEvents);
	},
	beforeDestroy: function beforeDestroy() {
		if (this.$_marker) {
			this.$_marker.setMap(null);
		}
	}
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	methods: {
		$_findAncestor: function $_findAncestor(condition) {
			var search = this.$parent;

			while (search) {
				if (condition(search)) {
					return search;
				}
				search = search.$parent;
			}

			return null;
		},
		$_findChildren: function $_findChildren(condition) {
			var search = this.$children;

			while (search) {
				if (condition(search)) {
					return search;
				}
				search = search.$children;
			}

			return null;
		}
	}
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_BoundProps__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_Ready__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_FindElement__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_redirect_methods__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var redirectedMethods = ['getBounds', 'getPlace', 'setTypes', 'setBounds'];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'GoogleMapAutocomplete',

  props: {
    model: String,
    types: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    controls: {
      type: Boolean,
      default: true
    },
    updateMap: {
      type: Boolean,
      default: true
    }
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_BoundProps__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_Events__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_FindElement__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_Ready__["a" /* default */]],

  data: function data() {
    return {
      _types: this.$props.types
    };
  },


  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4__utils_redirect_methods__["a" /* redirectMethods */])({
    target: function target() {
      return this.$_autocomplete;
    },

    names: redirectedMethods
  }), {
    onInputChange: function onInputChange(event) {
      this.$emit('update:model', event.target.value);
    }
  }),

  watch: {
    _types: 'setTypes',
    types: 'setTypes'
  },

  created: function created() {
    var mapAncestor = this.$_findAncestor(function (a) {
      return a.$options.name === 'GoogleMap';
    });
    if (!mapAncestor) {
      return;
    }
    this.$_mapAncestor = mapAncestor;
  },
  googleMapsPrepare: function googleMapsPrepare() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var mapComp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mapComp = _this.$_mapAncestor;

              if (!mapComp) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return mapComp.$_getMap();

            case 4:
              _context.t0 = _context.sent;
              _context.next = 8;
              break;

            case 7:
              _context.t0 = null;

            case 8:
              _this.$_map = _context.t0;

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  googleMapsReady: function googleMapsReady() {
    var _this2 = this;

    var input = this.$el.querySelector('#pac-input');
    this.$_autocomplete = new window.google.maps.places.Autocomplete(input);
    this.$_autocomplete.setTypes(this.$props.types);

    if (this.$_map) {
      this.$_autocomplete.bindTo('bounds', this.$_map);
    }

    this.$_autocomplete.addListener('place_changed', function () {
      var place = _this2.$_autocomplete.getPlace();
      _this2.$emit('place-changed', place);
      _this2.$emit('update:model', place.formatted_address);

      if (_this2.$_map && _this2.updateMap) {
        if (place.geometry.viewport) {
          _this2.$_map.fitBounds(place.geometry.viewport);
        } else {
          _this2.$_map.setCenter(place.geometry.location);
        }
      }
    });
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_props__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_redirect_methods__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_MapElement__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var boundProps = ['center', 'draggable', 'editable', 'radius', 'visible'];

var redirectedEvents = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseout', 'mouseover', 'mousemove', 'radius_changed', 'center_changed'];

var redirectedMethods = ['getBounds', 'getCenter', 'getRadius', 'getVisible'];

var circleProps = _extends({}, __WEBPACK_IMPORTED_MODULE_0__common_props__["a" /* shapeOptions */], {
	center: {
		type: Object,
		required: true
	},
	radius: {
		type: Number,
		required: true
	}
});

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMapCircle',

	mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_MapElement__["a" /* default */]],

	data: function data() {
		return {};
	},


	props: circleProps,

	watch: {
		clickable: 'updateOptions',
		editable: 'updateOptions',
		draggable: 'updateOptions',
		radius: 'updateOptions',
		zIndex: 'updateOptions'
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1__utils_redirect_methods__["a" /* redirectMethods */])({
		target: function target() {
			return this.$_circle;
		},

		names: redirectedMethods
	}), {
		updateOptions: function updateOptions(options) {
			this.$_circle && this.$_circle.setOptions(options || this.$props);
		}
	}),

	// When Google Maps is ready
	googleMapsReady: function googleMapsReady() {
		var options = Object.assign({}, this.$props);
		options.center = this.$props.center;
		options.map = this.$_map;
		this.$_circle = new window.google.maps.Circle(options);
		this.bindProps(this.$_circle, boundProps);
		this.redirectEvents(this.$_circle, redirectedEvents);
	},
	render: function render() {
		return '';
	},
	beforeDestroy: function beforeDestroy() {
		if (this.$_circle) {
			this.$_circle.setMap(null);
		}
	}
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_regenerator_runtime_runtime__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_regenerator_runtime_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_regenerator_runtime_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__options__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Map_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Marker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_InfoWindow__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Autocomplete__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_PlaceDetails__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UserPosition__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Polygon__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Polyline__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Circle__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Rectangle__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return __WEBPACK_IMPORTED_MODULE_5__components_Map_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return __WEBPACK_IMPORTED_MODULE_6__components_Marker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return __WEBPACK_IMPORTED_MODULE_13__components_Circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return __WEBPACK_IMPORTED_MODULE_14__components_Rectangle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return __WEBPACK_IMPORTED_MODULE_12__components_Polyline__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UserPosition", function() { return __WEBPACK_IMPORTED_MODULE_10__components_UserPosition__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetails", function() { return __WEBPACK_IMPORTED_MODULE_9__components_PlaceDetails__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_8__components_Autocomplete__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return __WEBPACK_IMPORTED_MODULE_7__components_InfoWindow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return __WEBPACK_IMPORTED_MODULE_11__components_Polygon__["a"]; });























function registerComponents(Vue, prefix) {
	Vue.component('' + prefix, __WEBPACK_IMPORTED_MODULE_5__components_Map_vue__["a" /* default */]);
	Vue.component(prefix + '-marker', __WEBPACK_IMPORTED_MODULE_6__components_Marker__["a" /* default */]);
	Vue.component(prefix + '-circle', __WEBPACK_IMPORTED_MODULE_13__components_Circle__["a" /* default */]);
	Vue.component(prefix + '-infowindow', __WEBPACK_IMPORTED_MODULE_7__components_InfoWindow__["a" /* default */]);
	Vue.component(prefix + '-autocomplete', __WEBPACK_IMPORTED_MODULE_8__components_Autocomplete__["a" /* default */]);
	Vue.component(prefix + '-placedetails', __WEBPACK_IMPORTED_MODULE_9__components_PlaceDetails__["a" /* default */]);
	Vue.component(prefix + '-userposition', __WEBPACK_IMPORTED_MODULE_10__components_UserPosition__["a" /* default */]);
	Vue.component(prefix + '-polygon', __WEBPACK_IMPORTED_MODULE_11__components_Polygon__["a" /* default */]);
	Vue.component(prefix + '-polyline', __WEBPACK_IMPORTED_MODULE_12__components_Polyline__["a" /* default */]);
	Vue.component(prefix + '-rectangle', __WEBPACK_IMPORTED_MODULE_14__components_Rectangle__["a" /* default */]);
}

var plugin = {
	version: __WEBPACK_IMPORTED_MODULE_0__package_json__["version"],
	install: function install(Vue, options) {
		var finalOptions = Object.assign({}, {
			installComponents: true,
			componentsPrefix: 'google-map'
		}, options);

		Object(__WEBPACK_IMPORTED_MODULE_3__options__["a" /* optionMergeStrategies */])(Vue);
		Object(__WEBPACK_IMPORTED_MODULE_4__utils_error__["b" /* initErrorHandling */])(Vue);

		if (finalOptions.installComponents) {
			registerComponents(Vue, finalOptions.componentsPrefix);
		}

		if (finalOptions.load) {
			__WEBPACK_IMPORTED_MODULE_2__lib_loader__["a" /* default */].load(finalOptions.load);
		}
	}
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"name":"vue-google-map","description":"A VueJs Google Map components set.","version":"0.1.0","main":"dist/build.js","unpkg":"dist/build.min.js","author":"codekraft-studio <info@codekraft.it>","license":"MIT","scripts":{"dev":"cross-env NODE_ENV=development webpack-dev-server --open --hot --config example/webpack.config.js","build":"cross-env NODE_ENV=production webpack --progress --hide-modules","build-demo":"cross-env NODE_ENV=production webpack --progress --hide-modules --config example/webpack.config.js"},"browserslist":["> 1%","last 2 versions","not ie <= 8"],"dependencies":{"vue":"^2.4.4"},"devDependencies":{"babel-core":"^6.26.0","babel-eslint":"^8.2.5","babel-loader":"^7.1.2","babel-preset-env":"^1.6.0","babel-preset-stage-3":"^6.24.1","cross-env":"^5.0.5","css-loader":"^1.0.0","dotenv":"^6.0.0","eslint":"^5.1.0","file-loader":"^1.1.4","vue-loader":"^13.0.5","vue-template-compiler":"^2.4.4","webpack":"^3.6.0","webpack-dev-server":"^2.9.1"}}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optionMergeStrategies;
function optionMergeStrategies(Vue) {
	var strats = Vue.config.optionMergeStrategies;

	strats.googleMapsReady = strats.created;
	strats.googleMapsPrepare = strats.created;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Map_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_783b5123_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Map_vue__ = __webpack_require__(27);
function injectStyle (ssrContext) {
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(10)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Map_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_783b5123_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Map_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("0de4780f", content, true);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.vue-google-map {\n\tposition: relative;\n  width: 100%;\n  height: 100%;\n}\n.vue-google-map .map-view {\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n}\n.vue-google-map .hidden-content {\n\tdisplay: none;\n}\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindProp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc__ = __webpack_require__(12);


function bindProp(_ref) {
	var vm = _ref.vm,
	    name = _ref.name,
	    targetPropName = _ref.targetPropName,
	    target = _ref.target,
	    watcher = _ref.watcher,
	    identity = _ref.identity,
	    applier = _ref.applier,
	    retriever = _ref.retriever,
	    event = _ref.event,
	    changeEvent = _ref.changeEvent;

	if (!targetPropName) {
		targetPropName = name;
	}
	if (!changeEvent) {
		changeEvent = targetPropName.toLowerCase() + '_changed';
	}

	var setValue = void 0;
	var capitalizedName = Object(__WEBPACK_IMPORTED_MODULE_0__misc__["b" /* capitalize */])(name);
	var getter = function getter() {
		return target && target['get' + capitalizedName]();
	};
	var setter = function setter(value) {
		setValue = value;
		target && target['set' + capitalizedName](value);
	};

	if (!watcher) {
		watcher = function watcher(value) {
			return value;
		};
	}
	if (!identity) {
		identity = function identity(a, b) {
			return a === b;
		};
	}
	if (!applier) {
		applier = function applier(value, oldValue, set) {
			if (!identity(value, oldValue)) {
				set(value);
			}
		};
	}
	if (!retriever) {
		retriever = function retriever(value) {
			return value;
		};
	}
	if (!event) {
		event = 'update:' + name;
	}

	vm.$watch(function () {
		return watcher(vm[name]);
	}, function (value, oldValue) {
		// Fix center property override when dragging the map
		// resulting in map not following drag movements
		if (!identity(value, setValue)) {
			applier(value, oldValue, setter);
		}
		setValue = value;
	});

	var listener = target.addListener(changeEvent, function () {
		var value = retriever(getter());
		if (!identity(value, setValue)) {
			vm.$emit(event, value);
			setValue = value;
		}
	});

	return function () {
		listener.remove();
	};
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-google-map"},[_c('div',{ref:"map",staticClass:"map-view"}),_vm._v(" "),_c('div',{staticClass:"hidden-content"},[_vm._t("default")],2),_vm._v(" "),_vm._t("visible")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__ = __webpack_require__(0);


var boundProps = [];

var redirectedEvents = ['closeclick', 'content_changed', 'position_changed', 'zindex_changed'];

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMapInfoWindow',

	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__["a" /* default */]],

	props: {
		show: {
			type: Boolean,
			default: function _default() {
				return false;
			}
		},
		position: {
			type: Object
		},
		options: {
			type: Object,
			default: function _default() {
				return {};
			}
		}
	},

	methods: {
		open: function open(position) {
			this.$_infoWindow.setPosition(position);
			this.$_infoWindow.open(this.$_map);
			this.$emit('update:show', true);
		}
	},

	watch: {
		show: function show(val) {
			val ? this.$_infoWindow.open(this.$_map) : this.$_infoWindow.close();
		},

		options: {
			handler: function handler(val) {
				this.$_infoWindow.setOptions(val);
			},

			deep: true
		}
	},

	render: function render(h) {
		return h('div', {
			style: {
				display: 'none'
			}
		}, this.$slots.default);
	},
	googleMapsReady: function googleMapsReady() {
		var _this = this;

		var options = this.$props;
		options.map = this.$_map;
		options.content = options.content || this.$el.innerHTML;

		console.log('Vue Google Map => InfoWindow: Opening infowindow with options:', options);

		this.$_infoWindow = new window.google.maps.InfoWindow(options);

		// Sync parent show property
		this.listen(this.$_infoWindow, 'closeclick', function () {
			_this.$emit('update:show', false);
		});

		this.bindProps(this.$_infoWindow, boundProps);
		this.redirectEvents(this.$_infoWindow, redirectedEvents);
	},
	mounted: function mounted() {
		var _this2 = this;

		this.observer = new MutationObserver(function (mutations) {
			_this2.content = _this2.$el.innerHTML;
			_this2.$_infoWindow.setContent(_this2.content);
		});
		this.observer.observe(this.$el, {
			attributes: true,
			childList: true,
			characterData: true,
			subtree: true
		});
	},
	beforeDestroy: function beforeDestroy() {
		this.observer.disconnect();
		if (this.$_infoWindow) {
			this.$_infoWindow.setMap(null);
		}
	}
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78cfa7fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Autocomplete_vue__ = __webpack_require__(32);
function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(10)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Autocomplete_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78cfa7fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Autocomplete_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("d42202e6", content, true);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.pac-card {\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto;\n  z-index: 10000;\n  position: absolute;\n  right: 40px;\n  margin-right: 10px;\n  z-index: 10000;\n  position: absolute;\n  right: 40px;\n  top: 10px;\n  display: flex;\n}\n.pac-control {\n  display: inline-block;\n  padding: 5px 11px;\n}\n.pac-input-container {\n  padding: 5px 11px;\n}\n.pac-input-container input {\n  min-width: 300px;\n  width: 100%;\n  padding: 4px;\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pac-card"},[(_vm.controls)?_c('div',{staticClass:"pac-controls-container"},[_c('div',{staticClass:"pac-control"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm._types),expression:"_types"}],attrs:{"type":"checkbox","value":"establishment"},domProps:{"checked":Array.isArray(_vm._types)?_vm._i(_vm._types,"establishment")>-1:(_vm._types)},on:{"change":function($event){var $$a=_vm._types,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="establishment",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm._types=$$a.concat([$$v]))}else{$$i>-1&&(_vm._types=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm._types=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"changetype-establishment"}},[_vm._v("Establishments")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm._types),expression:"_types"}],attrs:{"type":"checkbox","value":"address"},domProps:{"checked":Array.isArray(_vm._types)?_vm._i(_vm._types,"address")>-1:(_vm._types)},on:{"change":function($event){var $$a=_vm._types,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="address",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm._types=$$a.concat([$$v]))}else{$$i>-1&&(_vm._types=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm._types=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"changetype-address"}},[_vm._v("Addresses")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm._types),expression:"_types"}],attrs:{"type":"checkbox","value":"geocode"},domProps:{"checked":Array.isArray(_vm._types)?_vm._i(_vm._types,"geocode")>-1:(_vm._types)},on:{"change":function($event){var $$a=_vm._types,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="geocode",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm._types=$$a.concat([$$v]))}else{$$i>-1&&(_vm._types=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm._types=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"changetype-geocode"}},[_vm._v("Geocodes")])]),_vm._v(" "),_vm._m(0)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pac-input-container"},[_c('input',{attrs:{"id":"pac-input","type":"text","placeholder":"Enter a location"},domProps:{"value":_vm.model},on:{"input":_vm.onInputChange}})])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pac-control"},[_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('label',{attrs:{"for":"use-strict-bounds"}},[_vm._v("Strict Bounds")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Service__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'GoogleMapPlaceDetails',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Service__["a" /* default */]],

  methods: {
    createServices: function createServices() {
      this.$_placeService = new window.google.maps.places.PlacesService(this.$refs.attributions);
    },
    update: function update() {
      var _this = this;

      this.loading = true;
      this.$_placeService.getDetails(this.request, function (results, status) {
        _this.setResults(results, status);
        _this.loading = false;
      });
    }
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Ready__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Ready__["a" /* default */]],

	props: {
		filter: {
			type: Function,
			default: null
		},
		request: {
			type: Object,
			default: null
		},
		tag: {
			type: String,
			default: 'div'
		}
	},

	data: function data() {
		return {
			loading: false,
			results: null,
			status: null
		};
	},


	computed: {
		filteredResults: function filteredResults() {
			if (this.results && this.filter) {
				return this.results.filter(this.filter);
			} else {
				return this.results;
			}
		},
		finalResults: function finalResults() {
			var results = this.filteredResults;
			return results && (!Array.isArray(results) || results.length) ? results : null;
		}
	},

	watch: {
		request: {
			handler: function handler(value) {
				value && this.update();
			},

			deep: true
		},
		finalResults: function finalResults(value) {
			this.$emit('results', value);
		}
	},

	methods: {
		createServices: function createServices() {
			// Override this in components
		},
		getScope: function getScope() {
			// Override this in components
			return {
				loading: this.loading,
				results: this.finalResults,
				status: this.status
			};
		},
		setResults: function setResults(results, status) {
			this.results = results;
			this.status = status;
		},
		update: function update() {
			// Override this in components
		}
	},

	googleMapsReady: function googleMapsReady() {
		this.createServices();
		this.request && this.update();
	},
	render: function render(h) {
		return h(this.tag, [this.$scopedSlots.default && this.$scopedSlots.default(this.getScope()), h('span', {
			ref: 'attributions'
		})]);
	}
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Ready__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Marker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Circle__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var defaultPositionStyle = {
  fillColor: '#4285F4',
  fillOpacity: 1,
  scale: 6,
  strokeColor: 'white',
  strokeWeight: 2
};

var defaultAccuracyStyle = {
  strokeColor: '#4285F4',
  strokeOpacity: 0.25,
  fillColor: '#4285F4',
  fillOpacity: 0.2,
  strokeWeight: 1
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'GoogleMapUserPosition',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_Ready__["a" /* default */]],

  props: {
    accuracy: {
      default: 0
    },
    accuracyStyle: {
      type: Object,
      default: null
    },
    disableWatch: {
      type: Boolean,
      default: false
    },
    hideAccuracy: {
      type: Boolean,
      default: false
    },
    centerMap: {
      type: String,
      default: 'once',
      validator: function validator(value) {
        return ['never', 'once', 'always'].includes(value);
      }
    },
    minimumAccuracy: {
      default: 1000
    },
    position: {
      type: Object
    },
    positionStyle: {
      type: Object,
      default: null
    },
    positionOptions: {
      type: Object,
      default: function _default() {
        return {
          enableHighAccuracy: true,
          maximumAge: 1000
        };
      }
    }
  },

  data: function data() {
    return {
      currentPosition: null,
      currentAccuracy: null
    };
  },


  watch: {
    position: function position(value) {
      this.currentPosition = value;
    },
    accuracy: function accuracy(value) {
      this.currentAccuracy = value;
    },
    disableWatch: function disableWatch(value, oldValue) {
      if (value !== oldValue) {
        if (value) {
          this.stopWatch();
        } else {
          this.startWatch();
        }
      }
    },
    positionOptions: function positionOptions(value) {
      if (!this.disableWatch) {
        this.stopWatch();
        this.startWatch();
      }
    }
  },

  methods: {
    startWatch: function startWatch() {
      if (navigator.geolocation) {
        this.$_watchId = navigator.geolocation.watchPosition(this.updatePosition, this.onWatchError, this.positionOptions);
      } else {
        console.warn('GoogleMapsUserPosition: navigator.geolocation not supported');
        this.$emit('error', new Error('Geolocation is not supported'));
      }
    },
    stopWatch: function stopWatch() {
      if (navigator.geolocation) {
        navigator.geolocation.clearWatch(this.$_watchId);
      }
    },
    updatePosition: function updatePosition(data) {
      var coords = data.coords;

      var position = {
        lat: coords.latitude,
        lng: coords.longitude

        // Emit properties to parent
      };this.$emit('update:position', position);
      this.$emit('update:accuracy', coords.accuracy);

      if (this.currentPosition === null) {
        this.$emit('first-position', position);

        if (this.centerMap === 'once') {
          this.$_map.setCenter(position);
        }
      }

      // Update local variables
      this.currentPosition = position;
      this.currentAccuracy = coords.accuracy;

      if (this.centerMap === 'always') {
        this.$_map.setCenter(position);
      }
    },
    onWatchError: function onWatchError(e) {
      this.$emit('error', e);
    }
  },

  render: function render(createElement) {
    var markers = [];

    if (this.googleMapsReady && this.currentPosition) {
      markers.push(createElement(__WEBPACK_IMPORTED_MODULE_2__Marker__["a" /* default */], {
        props: {
          clickable: false,
          icon: this.positionStyle || defaultPositionStyle,
          optimized: false,
          position: this.currentPosition,
          zIndex: 3
        }
      }));

      if (!this.minimumAccuracy || this.accuracy >= this.minimumAccuracy && !this.hideAccuracy) {
        markers.push(createElement(__WEBPACK_IMPORTED_MODULE_3__Circle__["a" /* default */], {
          props: _extends({}, this.accuracyStyle || defaultAccuracyStyle, {
            clickable: false,
            radius: this.accuracy,
            center: this.currentPosition,
            zIndex: 1
          })
        }));
      }
    }

    return createElement('div', markers);
  },
  googleMapsReady: function googleMapsReady() {
    defaultPositionStyle.path = window.google.maps.SymbolPath.CIRCLE;
    if (!this.disableWatch) {
      this.startWatch();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.stopWatch();
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_props__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_MapElement__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var boundProps = ['center', 'draggable', 'editable', 'radius', 'visible'];

var redirectedEvents = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseout', 'mouseover', 'mousemove'];

var polygonProps = _extends({}, __WEBPACK_IMPORTED_MODULE_0__common_props__["a" /* shapeOptions */], {
	paths: {
		type: Array,
		required: true,
		default: function _default() {
			return [];
		}
	}
});

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMapPolygon',

	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_MapElement__["a" /* default */]],

	props: polygonProps,

	watch: {
		paths: 'updatePaths',
		clickable: 'updateOptions',
		editable: 'updateOptions',
		draggable: 'updateOptions',
		visible: 'updateOptions',
		geodesic: 'updateOptions',
		fillColor: 'updateOptions',
		fillOpacity: 'updateOptions',
		strokeColor: 'updateOptions',
		strokeWeight: 'updateOptions',
		strokeOpacity: 'updateOptions'
	},

	methods: {
		updatePaths: function updatePaths(paths) {
			this.$_polygon && this.$_polygon.setPaths(paths);
		},
		updateOptions: function updateOptions() {
			this.$_polygon && this.$_polygon.setOptions(this.$props);
		}
	},

	// When Google Maps is ready
	googleMapsReady: function googleMapsReady() {
		var options = Object.assign({}, this.$props);
		options.map = this.$_map;
		this.$_polygon = new window.google.maps.Polygon(options);
		this.bindProps(this.$_polygon, boundProps);
		this.redirectEvents(this.$_polygon, redirectedEvents);
	},
	render: function render() {
		return '';
	},
	beforeDestroy: function beforeDestroy() {
		if (this.$_polygon) {
			this.$_polygon.setMap(null);
		}
	}
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_props__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_MapElement__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var boundProps = ['center', 'draggable', 'editable', 'radius', 'visible'];

var redirectedEvents = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseout', 'mouseover', 'mousemove'];

var polylineProps = _extends({}, __WEBPACK_IMPORTED_MODULE_0__common_props__["a" /* shapeOptions */], {
	path: {
		type: Array,
		required: true,
		default: function _default() {
			return [];
		}
	}
});

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMapPolygon',

	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_MapElement__["a" /* default */]],

	props: polylineProps,

	watch: {
		path: 'updatePath',
		clickable: 'updateOptions',
		editable: 'updateOptions',
		draggable: 'updateOptions',
		visible: 'updateOptions',
		geodesic: 'updateOptions',
		fillColor: 'updateOptions',
		fillOpacity: 'updateOptions',
		strokeColor: 'updateOptions',
		strokeWeight: 'updateOptions',
		strokeOpacity: 'updateOptions'
	},

	methods: {
		updatePath: function updatePath(paths) {
			this.$_polyline && this.$_polyline.setPath(paths);
		},
		updateOptions: function updateOptions() {
			this.$_polyline && this.$_polyline.setOptions(this.$props);
		}
	},

	// When Google Maps is ready
	googleMapsReady: function googleMapsReady() {
		var options = Object.assign({}, this.$props);
		options.map = this.$_map;
		this.$_polyline = new window.google.maps.Polyline(options);
		this.bindProps(this.$_polyline, boundProps);
		this.redirectEvents(this.$_polyline, redirectedEvents);
	},
	render: function render() {
		return '';
	},
	beforeDestroy: function beforeDestroy() {
		if (this.$_polyline) {
			this.$_polyline.setMap(null);
		}
	}
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__ = __webpack_require__(0);


var boundProps = ['bounds', 'draggable', 'editable', 'radius', 'visible'];

var redirectedEvents = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseout', 'mouseover', 'mousemove'];

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'GoogleMapPolygon',

	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_MapElement__["a" /* default */]],

	props: {
		bounds: {
			type: [Object, Array],
			required: true
		},

		// Beheviour customization
		clickable: {
			type: Boolean,
			default: true
		},
		draggable: {
			type: Boolean,
			default: false
		},
		editable: {
			type: Boolean,
			default: false
		},
		geodesic: {
			type: Boolean,
			default: false
		},
		visible: {
			type: Boolean,
			default: true
		},

		// Style customization
		zIndex: {
			type: Number
		},
		fillColor: {
			type: String
		},
		fillOpacity: {
			type: Number
		},
		strokeColor: {
			type: String
		},
		strokeWeight: {
			type: Number
		},
		strokeOpacity: {
			type: Number
		}
	},

	watch: {
		bounds: 'updateBounds',
		clickable: 'updateOptions',
		editable: 'updateOptions',
		draggable: 'updateOptions',
		visible: 'updateOptions',
		geodesic: 'updateOptions',
		fillColor: 'updateOptions',
		fillOpacity: 'updateOptions',
		strokeColor: 'updateOptions',
		strokeWeight: 'updateOptions',
		strokeOpacity: 'updateOptions'
	},

	methods: {
		updateBounds: function updateBounds(paths) {
			this.$_rectangle && this.$_rectangle.setBounds(paths);
		},
		updateOptions: function updateOptions() {
			this.$_rectangle && this.$_rectangle.setOptions(this.$props);
		}
	},

	// When Google Maps is ready
	googleMapsReady: function googleMapsReady() {
		var options = Object.assign({}, this.$props);
		options.map = this.$_map;
		this.$_rectangle = new window.google.maps.Rectangle(options);
		this.bindProps(this.$_rectangle, boundProps);
		this.redirectEvents(this.$_rectangle, redirectedEvents);
	},
	render: function render() {
		return '';
	},
	beforeDestroy: function beforeDestroy() {
		if (this.$_rectangle) {
			this.$_rectangle.setMap(null);
		}
	}
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=build.js.map