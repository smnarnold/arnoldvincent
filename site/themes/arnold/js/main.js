/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/throttle-debounce/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/throttle-debounce/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/dist/index.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Site =
/*#__PURE__*/
function () {
  function Site() {
    _classCallCheck(this, Site);

    this.dom = {
      header: document.querySelector('.site-header'),
      main: document.querySelector('main'),
      footer: document.querySelector('.site-footer'),
      gallerySwipers: document.querySelectorAll('.js-gallery-swiper'),
      hubSwipers: document.querySelectorAll('.js-hub-swiper'),
      popupImages: document.querySelectorAll('.js-popup-image')
    };
    this.counter = 0;
  }
  /**
   * Methods
   */


  _createClass(Site, [{
    key: "init",
    value: function init() {
      this.initHubSwipers();
      this.initGallerySwipers();
      this.bindEvents();
    }
  }, {
    key: "initHubSwipers",
    value: function initHubSwipers() {
      var settings = {
        freeMode: true,
        freeModeSticky: true,
        freeModeMinimumVelocity: 0.4,
        freeModeMomentumRatio: 0.28,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        slidesPerView: 1.2,
        slidesPerColumn: 2,
        spaceBetween: 10,
        breakpointsInverse: true,
        breakpoints: {
          576: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.25
          },
          992: {
            slidesPerView: 3
          }
        }
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var hub = _step.value;

          if (hub.parentNode.classList.contains('swiper--hub-square')) {
            settings = _objectSpread({}, settings, {
              slidesPerView: 'auto',
              breakpoints: {}
            });
          } else if (hub.parentNode.classList.contains('swiper--hub-automatic')) {
            settings = _objectSpread({}, settings, {
              slidesPerView: 'auto',
              breakpoints: {},
              slidesPerColumn: 1
            });
          }

          var hubSwiper = new Swiper(hub, _objectSpread({}, settings, {
            on: {
              imagesReady: function imagesReady() {
                hub.parentNode.classList.add('is-ready');
                hubSwiper.update();
              }
            }
          }));
        };

        for (var _iterator = this.dom.hubSwipers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "initGallerySwipers",
    value: function initGallerySwipers() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop2 = function _loop2() {
          var gallery = _step2.value;
          var swiper = new Swiper(gallery, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true,
            freeModeSticky: true,
            freeModeMinimumVelocity: 0.4,
            freeModeMomentumRatio: 0.28,
            breakpointsInverse: true,
            breakpoints: {
              768: {
                spaceBetween: 20
              },
              992: {
                spaceBetween: 30
              }
            },
            scrollbar: {
              el: '.swiper-scrollbar',
              draggable: true
            },
            on: {
              imagesReady: function imagesReady() {
                gallery.parentNode.classList.add('is-ready');
                gallery.update();
              }
            }
          });
          var imgs = gallery.querySelectorAll('img');
          var counter = 0;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = imgs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var img = _step3.value;
              img.addEventListener('load', function () {
                counter += 1;
                if (counter === imgs.length) swiper.update();
              }, false);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        };

        for (var _iterator2 = this.dom.gallerySwipers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        var _loop3 = function _loop3() {
          var image = _step4.value;
          image.addEventListener('click', function () {
            return _this.generateImagePopup(image);
          });
        };

        for (var _iterator4 = this.dom.popupImages[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          _loop3();
        } // window.addEventListener('scroll', throttle(300, () => this.setScrollDirection()));

      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "generateImagePopup",
    value: function generateImagePopup(img) {
      var _this2 = this;

      var src = img.getAttribute('data-src');
      document.body.insertAdjacentHTML('beforeend', "<div class='popup popup--image'><div class=\"popup__wrapper\"><img src='".concat(src, "'></div></div>"));
      var popup = document.querySelector('.popup');
      setTimeout(function () {
        return popup.classList.add('is-active');
      }, 0);
      popup.addEventListener('click', function () {
        return _this2.deletePopup(popup);
      });
    }
  }, {
    key: "deletePopup",
    value: function deletePopup(popup) {
      popup.classList.remove('is-active');
      popup.addEventListener('transitionend', function () {
        if (popup && popup.parentNode !== null) {
          popup.parentNode.removeChild(popup);
        }
      });
    }
  }]);

  return Site;
}();

var site = new Site();
site.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOlsiU2l0ZSIsImRvbSIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJmb290ZXIiLCJnYWxsZXJ5U3dpcGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJodWJTd2lwZXJzIiwicG9wdXBJbWFnZXMiLCJjb3VudGVyIiwiaW5pdEh1YlN3aXBlcnMiLCJpbml0R2FsbGVyeVN3aXBlcnMiLCJiaW5kRXZlbnRzIiwic2V0dGluZ3MiLCJmcmVlTW9kZSIsImZyZWVNb2RlU3RpY2t5IiwiZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHkiLCJmcmVlTW9kZU1vbWVudHVtUmF0aW8iLCJzY3JvbGxiYXIiLCJlbCIsImRyYWdnYWJsZSIsInNsaWRlc1BlclZpZXciLCJzbGlkZXNQZXJDb2x1bW4iLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50c0ludmVyc2UiLCJicmVha3BvaW50cyIsImh1YiIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImh1YlN3aXBlciIsIlN3aXBlciIsIm9uIiwiaW1hZ2VzUmVhZHkiLCJhZGQiLCJ1cGRhdGUiLCJnYWxsZXJ5Iiwic3dpcGVyIiwiaW1ncyIsImltZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJpbWFnZSIsImdlbmVyYXRlSW1hZ2VQb3B1cCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwb3B1cCIsInNldFRpbWVvdXQiLCJkZWxldGVQb3B1cCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwic2l0ZSIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJOUI7O0lBRU1BLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsR0FBTCxHQUFXO0FBQ1RDLFlBQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBREM7QUFFVEMsVUFBSSxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FGRztBQUdURSxZQUFNLEVBQUVILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUhDO0FBSVRHLG9CQUFjLEVBQUVKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsb0JBQTFCLENBSlA7QUFLVEMsZ0JBQVUsRUFBRU4sUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FMSDtBQU1URSxpQkFBVyxFQUFFUCxRQUFRLENBQUNLLGdCQUFULENBQTBCLGlCQUExQjtBQU5KLEtBQVg7QUFTQSxTQUFLRyxPQUFMLEdBQWUsQ0FBZjtBQUNEO0FBRUQ7Ozs7Ozs7MkJBR087QUFDTCxXQUFLQyxjQUFMO0FBQ0EsV0FBS0Msa0JBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFJQyxRQUFRLEdBQUc7QUFDYkMsZ0JBQVEsRUFBRSxJQURHO0FBRWJDLHNCQUFjLEVBQUUsSUFGSDtBQUdiQywrQkFBdUIsRUFBRSxHQUhaO0FBSWJDLDZCQUFxQixFQUFFLElBSlY7QUFLYkMsaUJBQVMsRUFBRTtBQUNUQyxZQUFFLEVBQUUsbUJBREs7QUFFVEMsbUJBQVMsRUFBRTtBQUZGLFNBTEU7QUFTYkMscUJBQWEsRUFBRSxHQVRGO0FBVWJDLHVCQUFlLEVBQUUsQ0FWSjtBQVdiQyxvQkFBWSxFQUFFLEVBWEQ7QUFZYkMsMEJBQWtCLEVBQUUsSUFaUDtBQWFiQyxtQkFBVyxFQUFFO0FBQ1gsZUFBSztBQUNISix5QkFBYSxFQUFFO0FBRFosV0FETTtBQUlYLGVBQUs7QUFDSEEseUJBQWEsRUFBRTtBQURaLFdBSk07QUFPWCxlQUFLO0FBQ0hBLHlCQUFhLEVBQUU7QUFEWjtBQVBNO0FBYkEsT0FBZjtBQURlO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsY0EyQkpLLEdBM0JJOztBQTRCYixjQUFHQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsU0FBZixDQUF5QkMsUUFBekIsQ0FBa0Msb0JBQWxDLENBQUgsRUFBNEQ7QUFDMURoQixvQkFBUSxxQkFBUUEsUUFBUjtBQUFrQlEsMkJBQWEsRUFBRSxNQUFqQztBQUF5Q0kseUJBQVcsRUFBRTtBQUF0RCxjQUFSO0FBQ0QsV0FGRCxNQUVPLElBQUdDLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxTQUFmLENBQXlCQyxRQUF6QixDQUFrQyx1QkFBbEMsQ0FBSCxFQUErRDtBQUNwRWhCLG9CQUFRLHFCQUFRQSxRQUFSO0FBQWtCUSwyQkFBYSxFQUFFLE1BQWpDO0FBQXlDSSx5QkFBVyxFQUFFLEVBQXREO0FBQTBESCw2QkFBZSxFQUFFO0FBQTNFLGNBQVI7QUFDRDs7QUFFRCxjQUFJUSxTQUFTLEdBQUcsSUFBSUMsTUFBSixDQUFXTCxHQUFYLG9CQUFvQmIsUUFBcEI7QUFBOEJtQixjQUFFLEVBQUU7QUFDaERDLHlCQUFXLEVBQUUsdUJBQU07QUFDakJQLG1CQUFHLENBQUNDLFVBQUosQ0FBZUMsU0FBZixDQUF5Qk0sR0FBekIsQ0FBNkIsVUFBN0I7QUFDQUoseUJBQVMsQ0FBQ0ssTUFBVjtBQUNEO0FBSitDO0FBQWxDLGFBQWhCO0FBbENhOztBQTJCZiw2QkFBa0IsS0FBS3BDLEdBQUwsQ0FBU1EsVUFBM0IsOEhBQXVDO0FBQUE7QUFhdEM7QUF4Q2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlDaEI7Ozt5Q0FFb0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGNBQ1I2QixPQURRO0FBRWpCLGNBQU1DLE1BQU0sR0FBRyxJQUFJTixNQUFKLENBQVdLLE9BQVgsRUFBb0I7QUFDakNmLHlCQUFhLEVBQUUsTUFEa0I7QUFFakNFLHdCQUFZLEVBQUUsRUFGbUI7QUFHakNULG9CQUFRLEVBQUUsSUFIdUI7QUFJakNDLDBCQUFjLEVBQUUsSUFKaUI7QUFLakNDLG1DQUF1QixFQUFFLEdBTFE7QUFNakNDLGlDQUFxQixFQUFFLElBTlU7QUFPakNPLDhCQUFrQixFQUFFLElBUGE7QUFRakNDLHVCQUFXLEVBQUU7QUFDWCxtQkFBSztBQUNIRiw0QkFBWSxFQUFFO0FBRFgsZUFETTtBQUlYLG1CQUFLO0FBQ0hBLDRCQUFZLEVBQUU7QUFEWDtBQUpNLGFBUm9CO0FBZ0JqQ0wscUJBQVMsRUFBRTtBQUNUQyxnQkFBRSxFQUFFLG1CQURLO0FBRVRDLHVCQUFTLEVBQUU7QUFGRixhQWhCc0I7QUFvQmpDWSxjQUFFLEVBQUU7QUFDRkMseUJBQVcsRUFBRSx1QkFBTTtBQUNqQkcsdUJBQU8sQ0FBQ1QsVUFBUixDQUFtQkMsU0FBbkIsQ0FBNkJNLEdBQTdCLENBQWlDLFVBQWpDO0FBQ0FFLHVCQUFPLENBQUNELE1BQVI7QUFDRDtBQUpDO0FBcEI2QixXQUFwQixDQUFmO0FBNEJBLGNBQU1HLElBQUksR0FBR0YsT0FBTyxDQUFDOUIsZ0JBQVIsQ0FBeUIsS0FBekIsQ0FBYjtBQUNBLGNBQUlHLE9BQU8sR0FBRyxDQUFkO0FBL0JpQjtBQUFBO0FBQUE7O0FBQUE7QUFpQ2pCLGtDQUFrQjZCLElBQWxCLG1JQUF3QjtBQUFBLGtCQUFiQyxHQUFhO0FBQ3RCQSxpQkFBRyxDQUFDQyxnQkFBSixDQUNFLE1BREYsRUFFRSxZQUFNO0FBQ0ovQix1QkFBTyxJQUFJLENBQVg7QUFDQSxvQkFBSUEsT0FBTyxLQUFLNkIsSUFBSSxDQUFDRyxNQUFyQixFQUE2QkosTUFBTSxDQUFDRixNQUFQO0FBQzlCLGVBTEgsRUFNRSxLQU5GO0FBUUQ7QUExQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDbkIsOEJBQXNCLEtBQUtwQyxHQUFMLENBQVNNLGNBQS9CLG1JQUErQztBQUFBO0FBMEM5QztBQTNDa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRDcEI7OztpQ0FFWTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsY0FDQXFDLEtBREE7QUFFVEEsZUFBSyxDQUFDRixnQkFBTixDQUF1QixPQUF2QixFQUFnQztBQUFBLG1CQUFNLEtBQUksQ0FBQ0csa0JBQUwsQ0FBd0JELEtBQXhCLENBQU47QUFBQSxXQUFoQztBQUZTOztBQUNYLDhCQUFvQixLQUFLM0MsR0FBTCxDQUFTUyxXQUE3QixtSUFBMEM7QUFBQTtBQUV6QyxTQUhVLENBS1g7O0FBTFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1aOzs7dUNBRWtCK0IsRyxFQUFLO0FBQUE7O0FBQ3RCLFVBQU1LLEdBQUcsR0FBR0wsR0FBRyxDQUFDTSxZQUFKLENBQWlCLFVBQWpCLENBQVo7QUFDQTVDLGNBQVEsQ0FBQzZDLElBQVQsQ0FBY0Msa0JBQWQsQ0FDRSxXQURGLG9GQUUyRUgsR0FGM0U7QUFJQSxVQUFNSSxLQUFLLEdBQUcvQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBK0MsZ0JBQVUsQ0FBQztBQUFBLGVBQU1ELEtBQUssQ0FBQ3BCLFNBQU4sQ0FBZ0JNLEdBQWhCLENBQW9CLFdBQXBCLENBQU47QUFBQSxPQUFELEVBQXlDLENBQXpDLENBQVY7QUFDQWMsV0FBSyxDQUFDUixnQkFBTixDQUF1QixPQUF2QixFQUFnQztBQUFBLGVBQU0sTUFBSSxDQUFDVSxXQUFMLENBQWlCRixLQUFqQixDQUFOO0FBQUEsT0FBaEM7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakJBLFdBQUssQ0FBQ3BCLFNBQU4sQ0FBZ0J1QixNQUFoQixDQUF1QixXQUF2QjtBQUNBSCxXQUFLLENBQUNSLGdCQUFOLENBQXVCLGVBQXZCLEVBQXdDLFlBQU07QUFDNUMsWUFBSVEsS0FBSyxJQUFJQSxLQUFLLENBQUNyQixVQUFOLEtBQXFCLElBQWxDLEVBQXdDO0FBQ3RDcUIsZUFBSyxDQUFDckIsVUFBTixDQUFpQnlCLFdBQWpCLENBQTZCSixLQUE3QjtBQUNEO0FBQ0YsT0FKRDtBQUtEOzs7Ozs7QUFHSCxJQUFJSyxJQUFJLEdBQUcsSUFBSXZELElBQUosRUFBWDtBQUNBdUQsSUFBSSxDQUFDQyxJQUFMLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIGRlbGF5ICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbbm9UcmFpbGluZ10gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldClcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW2RlYm91bmNlTW9kZV0gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlIChkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSkge1xuICAvKlxuICAgKiBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuICAgKiBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcbiAgICogZGVib3VuY2UgbW9kZXMuXG4gICAqL1xuICB2YXIgdGltZW91dElEO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblxuICB2YXIgbGFzdEV4ZWMgPSAwOyAvLyBGdW5jdGlvbiB0byBjbGVhciBleGlzdGluZyB0aW1lb3V0XG5cbiAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1RpbWVvdXQoKSB7XG4gICAgaWYgKHRpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgfVxuICB9IC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gIH0gLy8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXG5cbiAgaWYgKHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicpIHtcbiAgICBkZWJvdW5jZU1vZGUgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IG5vVHJhaWxpbmc7XG4gICAgbm9UcmFpbGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvKlxuICAgKiBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG4gICAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG4gICAqIGlzIGV4ZWN1dGVkLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXG5cbiAgICBmdW5jdGlvbiBleGVjKCkge1xuICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuICAgIC8qXG4gICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuICAgICAqIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGltZW91dElEID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCkge1xuICAgICAgLypcbiAgICAgICAqIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuICAgICAgICogYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2AuXG4gICAgICAgKi9cbiAgICAgIGV4ZWMoKTtcbiAgICB9XG5cbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuXG4gICAgaWYgKGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSkge1xuICAgICAgLypcbiAgICAgICAqIEluIHRocm90dGxlIG1vZGUsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuICAgICAgICogYGNhbGxiYWNrYC5cbiAgICAgICAqL1xuICAgICAgZXhlYygpO1xuICAgIH0gZWxzZSBpZiAobm9UcmFpbGluZyAhPT0gdHJ1ZSkge1xuICAgICAgLypcbiAgICAgICAqIEluIHRyYWlsaW5nIHRocm90dGxlIG1vZGUsIHNpbmNlIGBkZWxheWAgdGltZSBoYXMgbm90IGJlZW5cbiAgICAgICAqIGV4Y2VlZGVkLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYGRlbGF5YCBtcyBhZnRlciBtb3N0XG4gICAgICAgKiByZWNlbnQgZXhlY3V0aW9uLlxuICAgICAgICpcbiAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlXG4gICAgICAgKiBhZnRlciBgZGVsYXlgIG1zLlxuICAgICAgICpcbiAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvXG4gICAgICAgKiBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB3cmFwcGVyLmNhbmNlbCA9IGNhbmNlbDsgLy8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cbi8qKlxuICogRGVib3VuY2UgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIERlYm91bmNpbmcsIHVubGlrZSB0aHJvdHRsaW5nLFxuICogZ3VhcmFudGVlcyB0aGF0IGEgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBhIHNpbmdsZSB0aW1lLCBlaXRoZXIgYXQgdGhlXG4gKiB2ZXJ5IGJlZ2lubmluZyBvZiBhIHNlcmllcyBvZiBjYWxscywgb3IgYXQgdGhlIHZlcnkgZW5kLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICBkZWxheSAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gIFthdEJlZ2luXSAgICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLiBJZiBhdEJlZ2luIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBhdCB0aGUgZmlyc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSBkZWJvdW5jZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gZGVib3VuY2UgKGRlbGF5LCBhdEJlZ2luLCBjYWxsYmFjaykge1xuICByZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUsIGRlYm91bmNlIH07XG4iLCJpbXBvcnQgeyB0aHJvdHRsZSwgZGVib3VuY2UgfSBmcm9tICd0aHJvdHRsZS1kZWJvdW5jZSc7XG5cbmNsYXNzIFNpdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyksXG4gICAgICBtYWluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyksXG4gICAgICBmb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWZvb3RlcicpLFxuICAgICAgZ2FsbGVyeVN3aXBlcnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1nYWxsZXJ5LXN3aXBlcicpLFxuICAgICAgaHViU3dpcGVyczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWh1Yi1zd2lwZXInKSxcbiAgICAgIHBvcHVwSW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcG9wdXAtaW1hZ2UnKSxcbiAgICB9O1xuXG4gICAgdGhpcy5jb3VudGVyID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzXG4gICAqL1xuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEh1YlN3aXBlcnMoKTtcbiAgICB0aGlzLmluaXRHYWxsZXJ5U3dpcGVycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgaW5pdEh1YlN3aXBlcnMoKSB7XG4gICAgbGV0IHNldHRpbmdzID0ge1xuICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICBmcmVlTW9kZVN0aWNreTogdHJ1ZSxcbiAgICAgIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjQsXG4gICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IDAuMjgsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjIsXG4gICAgICBzbGlkZXNQZXJDb2x1bW46IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYnJlYWtwb2ludHNJbnZlcnNlOiB0cnVlLFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgNTc2OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjI1LFxuICAgICAgICB9LFxuICAgICAgICA5OTI6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGh1YiBvZiB0aGlzLmRvbS5odWJTd2lwZXJzKSB7XG4gICAgICBpZihodWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci0taHViLXNxdWFyZScpKSB7XG4gICAgICAgIHNldHRpbmdzID0geyAuLi5zZXR0aW5ncywgc2xpZGVzUGVyVmlldzogJ2F1dG8nLCBicmVha3BvaW50czoge319XG4gICAgICB9IGVsc2UgaWYoaHViLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItLWh1Yi1hdXRvbWF0aWMnKSkge1xuICAgICAgICBzZXR0aW5ncyA9IHsgLi4uc2V0dGluZ3MsIHNsaWRlc1BlclZpZXc6ICdhdXRvJywgYnJlYWtwb2ludHM6IHt9LCBzbGlkZXNQZXJDb2x1bW46IDF9XG4gICAgICB9XG5cbiAgICAgIGxldCBodWJTd2lwZXIgPSBuZXcgU3dpcGVyKGh1Yiwgey4uLnNldHRpbmdzLCBvbjoge1xuICAgICAgICBpbWFnZXNSZWFkeTogKCkgPT4ge1xuICAgICAgICAgIGh1Yi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lzLXJlYWR5Jyk7XG4gICAgICAgICAgaHViU3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgfX0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRHYWxsZXJ5U3dpcGVycygpIHtcbiAgICBmb3IgKGNvbnN0IGdhbGxlcnkgb2YgdGhpcy5kb20uZ2FsbGVyeVN3aXBlcnMpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoZ2FsbGVyeSwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICBmcmVlTW9kZVN0aWNreTogdHJ1ZSxcbiAgICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuNCxcbiAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAwLjI4LFxuICAgICAgICBicmVha3BvaW50c0ludmVyc2U6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbWFnZXNSZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgZ2FsbGVyeS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lzLXJlYWR5Jyk7XG4gICAgICAgICAgICBnYWxsZXJ5LnVwZGF0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaW1ncyA9IGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gICAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICAgIGZvciAoY29uc3QgaW1nIG9mIGltZ3MpIHtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2xvYWQnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSBpbWdzLmxlbmd0aCkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHRoaXMuZG9tLnBvcHVwSW1hZ2VzKSB7XG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2VuZXJhdGVJbWFnZVBvcHVwKGltYWdlKSk7XG4gICAgfVxuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKDMwMCwgKCkgPT4gdGhpcy5zZXRTY3JvbGxEaXJlY3Rpb24oKSkpO1xuICB9XG5cbiAgZ2VuZXJhdGVJbWFnZVBvcHVwKGltZykge1xuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlZW5kJyxcbiAgICAgIGA8ZGl2IGNsYXNzPSdwb3B1cCBwb3B1cC0taW1hZ2UnPjxkaXYgY2xhc3M9XCJwb3B1cF9fd3JhcHBlclwiPjxpbWcgc3JjPScke3NyY30nPjwvZGl2PjwvZGl2PmAsXG4gICAgKTtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcG9wdXAuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyksIDApO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWxldGVQb3B1cChwb3B1cCkpO1xuICB9XG5cbiAgZGVsZXRlUG9wdXAocG9wdXApIHtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgaWYgKHBvcHVwICYmIHBvcHVwLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcG9wdXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIHNpdGUgPSBuZXcgU2l0ZSgpO1xuc2l0ZS5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9