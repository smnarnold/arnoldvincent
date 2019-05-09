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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var hub = _step.value;
          new Swiper(hub, {
            slidesPerView: 1.2,
            slidesPerColumn: 2,
            spaceBetween: 10,
            mousewheel: {
              releaseOnEdges: true,
              sensitivity: 20
            },
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
            },
            on: {
              imagesReady: function imagesReady() {
                hub.parentNode.classList.add('is-ready');
              }
            }
          });
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
            mousewheel: {
              releaseOnEdges: true,
              sensitivity: 20
            },
            on: {
              imagesReady: function imagesReady() {
                gallery.parentNode.classList.add('is-ready');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOlsiU2l0ZSIsImRvbSIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJmb290ZXIiLCJnYWxsZXJ5U3dpcGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJodWJTd2lwZXJzIiwicG9wdXBJbWFnZXMiLCJjb3VudGVyIiwiaW5pdEh1YlN3aXBlcnMiLCJpbml0R2FsbGVyeVN3aXBlcnMiLCJiaW5kRXZlbnRzIiwiaHViIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1BlckNvbHVtbiIsInNwYWNlQmV0d2VlbiIsIm1vdXNld2hlZWwiLCJyZWxlYXNlT25FZGdlcyIsInNlbnNpdGl2aXR5IiwiYnJlYWtwb2ludHNJbnZlcnNlIiwiYnJlYWtwb2ludHMiLCJvbiIsImltYWdlc1JlYWR5IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbGxlcnkiLCJzd2lwZXIiLCJpbWdzIiwiaW1nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aCIsInVwZGF0ZSIsImltYWdlIiwiZ2VuZXJhdGVJbWFnZVBvcHVwIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiYm9keSIsImluc2VydEFkamFjZW50SFRNTCIsInBvcHVwIiwic2V0VGltZW91dCIsImRlbGV0ZVBvcHVwIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJzaXRlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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QXZCLENBQWQ7QUFDQXdDLGdCQUFVLENBQUM7QUFBQSxlQUFNRCxLQUFLLENBQUNmLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFdBQXBCLENBQU47QUFBQSxPQUFELEVBQXlDLENBQXpDLENBQVY7QUFDQWMsV0FBSyxDQUFDVCxnQkFBTixDQUF1QixPQUF2QixFQUFnQztBQUFBLGVBQU0sTUFBSSxDQUFDVyxXQUFMLENBQWlCRixLQUFqQixDQUFOO0FBQUEsT0FBaEM7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakJBLFdBQUssQ0FBQ2YsU0FBTixDQUFnQmtCLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0FILFdBQUssQ0FBQ1QsZ0JBQU4sQ0FBdUIsZUFBdkIsRUFBd0MsWUFBTTtBQUM1QyxZQUFJUyxLQUFLLElBQUlBLEtBQUssQ0FBQ2hCLFVBQU4sS0FBcUIsSUFBbEMsRUFBd0M7QUFDdENnQixlQUFLLENBQUNoQixVQUFOLENBQWlCb0IsV0FBakIsQ0FBNkJKLEtBQTdCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7Ozs7OztBQUdILElBQUlLLElBQUksR0FBRyxJQUFJaEQsSUFBSixFQUFYO0FBQ0FnRCxJQUFJLENBQUNDLElBQUwsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG4vKipcbiAqIFRocm90dGxlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBFc3BlY2lhbGx5IHVzZWZ1bCBmb3IgcmF0ZSBsaW1pdGluZ1xuICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICAgZGVsYXkgICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFtub1RyYWlsaW5nXSAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9UcmFpbGluZyBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIG9ubHkgZXhlY3V0ZSBldmVyeSBgZGVsYXlgIG1pbGxpc2Vjb25kcyB3aGlsZSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmUgZmluYWwgdGltZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQtZnVuY3Rpb24gY2FsbC4gKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KVxuICogQHBhcmFtICB7RnVuY3Rpb259ICBjYWxsYmFjayAgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbZGVib3VuY2VNb2RlXSBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUgKGRlbGF5LCBub1RyYWlsaW5nLCBjYWxsYmFjaywgZGVib3VuY2VNb2RlKSB7XG4gIC8qXG4gICAqIEFmdGVyIHdyYXBwZXIgaGFzIHN0b3BwZWQgYmVpbmcgY2FsbGVkLCB0aGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0XG4gICAqIGBjYWxsYmFja2AgaXMgZXhlY3V0ZWQgYXQgdGhlIHByb3BlciB0aW1lcyBpbiBgdGhyb3R0bGVgIGFuZCBgZW5kYFxuICAgKiBkZWJvdW5jZSBtb2Rlcy5cbiAgICovXG4gIHZhciB0aW1lb3V0SUQ7XG4gIHZhciBjYW5jZWxsZWQgPSBmYWxzZTsgLy8gS2VlcCB0cmFjayBvZiB0aGUgbGFzdCB0aW1lIGBjYWxsYmFja2Agd2FzIGV4ZWN1dGVkLlxuXG4gIHZhciBsYXN0RXhlYyA9IDA7IC8vIEZ1bmN0aW9uIHRvIGNsZWFyIGV4aXN0aW5nIHRpbWVvdXRcblxuICBmdW5jdGlvbiBjbGVhckV4aXN0aW5nVGltZW91dCgpIHtcbiAgICBpZiAodGltZW91dElEKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElEKTtcbiAgICB9XG4gIH0gLy8gRnVuY3Rpb24gdG8gY2FuY2VsIG5leHQgZXhlY1xuXG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG4gICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfSAvLyBgbm9UcmFpbGluZ2AgZGVmYXVsdHMgdG8gZmFsc3kuXG5cblxuICBpZiAodHlwZW9mIG5vVHJhaWxpbmcgIT09ICdib29sZWFuJykge1xuICAgIGRlYm91bmNlTW9kZSA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gbm9UcmFpbGluZztcbiAgICBub1RyYWlsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8qXG4gICAqIFRoZSBgd3JhcHBlcmAgZnVuY3Rpb24gZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgdGhyb3R0bGluZyAvIGRlYm91bmNpbmdcbiAgICogZnVuY3Rpb25hbGl0eSBhbmQgd2hlbiBleGVjdXRlZCB3aWxsIGxpbWl0IHRoZSByYXRlIGF0IHdoaWNoIGBjYWxsYmFja2BcbiAgICogaXMgZXhlY3V0ZWQuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gbGFzdEV4ZWM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBFeGVjdXRlIGBjYWxsYmFja2AgYW5kIHVwZGF0ZSB0aGUgYGxhc3RFeGVjYCB0aW1lc3RhbXAuXG5cblxuICAgIGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICBsYXN0RXhlYyA9IERhdGUubm93KCk7XG4gICAgICBjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG4gICAgLypcbiAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG4gICAgICogdG8gYWxsb3cgZnV0dXJlIGBjYWxsYmFja2AgZXhlY3V0aW9ucy5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aW1lb3V0SUQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEKSB7XG4gICAgICAvKlxuICAgICAgICogU2luY2UgYHdyYXBwZXJgIGlzIGJlaW5nIGNhbGxlZCBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kXG4gICAgICAgKiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIGV4ZWN1dGUgYGNhbGxiYWNrYC5cbiAgICAgICAqL1xuICAgICAgZXhlYygpO1xuICAgIH1cblxuICAgIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG5cbiAgICBpZiAoZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgJiYgZWxhcHNlZCA+IGRlbGF5KSB7XG4gICAgICAvKlxuICAgICAgICogSW4gdGhyb3R0bGUgbW9kZSwgaWYgYGRlbGF5YCB0aW1lIGhhcyBiZWVuIGV4Y2VlZGVkLCBleGVjdXRlXG4gICAgICAgKiBgY2FsbGJhY2tgLlxuICAgICAgICovXG4gICAgICBleGVjKCk7XG4gICAgfSBlbHNlIGlmIChub1RyYWlsaW5nICE9PSB0cnVlKSB7XG4gICAgICAvKlxuICAgICAgICogSW4gdHJhaWxpbmcgdGhyb3R0bGUgbW9kZSwgc2luY2UgYGRlbGF5YCB0aW1lIGhhcyBub3QgYmVlblxuICAgICAgICogZXhjZWVkZWQsIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBgZGVsYXlgIG1zIGFmdGVyIG1vc3RcbiAgICAgICAqIHJlY2VudCBleGVjdXRpb24uXG4gICAgICAgKlxuICAgICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGVcbiAgICAgICAqIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgKlxuICAgICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG9cbiAgICAgICAqIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cbiAgICAgICAqL1xuICAgICAgdGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHdyYXBwZXIuY2FuY2VsID0gY2FuY2VsOyAvLyBSZXR1cm4gdGhlIHdyYXBwZXIgZnVuY3Rpb24uXG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCAqL1xuLyoqXG4gKiBEZWJvdW5jZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRGVib3VuY2luZywgdW5saWtlIHRocm90dGxpbmcsXG4gKiBndWFyYW50ZWVzIHRoYXQgYSBmdW5jdGlvbiBpcyBvbmx5IGV4ZWN1dGVkIGEgc2luZ2xlIHRpbWUsIGVpdGhlciBhdCB0aGVcbiAqIHZlcnkgYmVnaW5uaW5nIG9mIGEgc2VyaWVzIG9mIGNhbGxzLCBvciBhdCB0aGUgdmVyeSBlbmQuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgIGRlbGF5ICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgW2F0QmVnaW5dICAgICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIGF0QmVnaW4gaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgb25seSBiZSBleGVjdXRlZCBgZGVsYXlgIG1pbGxpc2Vjb25kc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuIElmIGF0QmVnaW4gaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmx5IGF0IHRoZSBmaXJzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLCB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIGRlYm91bmNlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZSAoZGVsYXksIGF0QmVnaW4sIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhyb3R0bGUoZGVsYXksIGF0QmVnaW4sIGZhbHNlKSA6IHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgYXRCZWdpbiAhPT0gZmFsc2UpO1xufVxuXG5leHBvcnQgeyB0aHJvdHRsZSwgZGVib3VuY2UgfTtcbiIsImltcG9ydCB7IHRocm90dGxlLCBkZWJvdW5jZSB9IGZyb20gJ3Rocm90dGxlLWRlYm91bmNlJztcblxuY2xhc3MgU2l0ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgaGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKSxcbiAgICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSxcbiAgICAgIGZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtZm9vdGVyJyksXG4gICAgICBnYWxsZXJ5U3dpcGVyczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWdhbGxlcnktc3dpcGVyJyksXG4gICAgICBodWJTd2lwZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtaHViLXN3aXBlcicpLFxuICAgICAgcG9wdXBJbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wb3B1cC1pbWFnZScpLFxuICAgIH07XG5cbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZHNcbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0SHViU3dpcGVycygpO1xuICAgIHRoaXMuaW5pdEdhbGxlcnlTd2lwZXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBpbml0SHViU3dpcGVycygpIHtcbiAgICBmb3IgKGNvbnN0IGh1YiBvZiB0aGlzLmRvbS5odWJTd2lwZXJzKSB7XG4gICAgICBuZXcgU3dpcGVyKGh1Yiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjIsXG4gICAgICAgIHNsaWRlc1BlckNvbHVtbjogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICAgIHJlbGVhc2VPbkVkZ2VzOiB0cnVlLFxuICAgICAgICAgIHNlbnNpdGl2aXR5OiAyMCxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHNJbnZlcnNlOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgIDU3Njoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjI1LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW1hZ2VzUmVhZHk6ICgpID0+IHtcbiAgICAgICAgICAgIGh1Yi5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lzLXJlYWR5Jyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRHYWxsZXJ5U3dpcGVycygpIHtcbiAgICBmb3IgKGNvbnN0IGdhbGxlcnkgb2YgdGhpcy5kb20uZ2FsbGVyeVN3aXBlcnMpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoZ2FsbGVyeSwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgICByZWxlYXNlT25FZGdlczogdHJ1ZSxcbiAgICAgICAgICBzZW5zaXRpdml0eTogMjAsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW1hZ2VzUmVhZHk6ICgpID0+IHtcbiAgICAgICAgICAgIGdhbGxlcnkucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1yZWFkeScpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaW1ncyA9IGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gICAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICAgIGZvciAoY29uc3QgaW1nIG9mIGltZ3MpIHtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ2xvYWQnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09PSBpbWdzLmxlbmd0aCkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHRoaXMuZG9tLnBvcHVwSW1hZ2VzKSB7XG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2VuZXJhdGVJbWFnZVBvcHVwKGltYWdlKSk7XG4gICAgfVxuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKDMwMCwgKCkgPT4gdGhpcy5zZXRTY3JvbGxEaXJlY3Rpb24oKSkpO1xuICB9XG5cbiAgZ2VuZXJhdGVJbWFnZVBvcHVwKGltZykge1xuICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlZW5kJyxcbiAgICAgIGA8ZGl2IGNsYXNzPSdwb3B1cCBwb3B1cC0taW1hZ2UnPjxkaXYgY2xhc3M9XCJwb3B1cF9fd3JhcHBlclwiPjxpbWcgc3JjPScke3NyY30nPjwvZGl2PjwvZGl2PmAsXG4gICAgKTtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcG9wdXAuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyksIDApO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWxldGVQb3B1cChwb3B1cCkpO1xuICB9XG5cbiAgZGVsZXRlUG9wdXAocG9wdXApIHtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgaWYgKHBvcHVwICYmIHBvcHVwLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcG9wdXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIHNpdGUgPSBuZXcgU2l0ZSgpO1xuc2l0ZS5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9