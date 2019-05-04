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

      ;
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

      ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOlsiU2l0ZSIsImRvbSIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJmb290ZXIiLCJnYWxsZXJ5U3dpcGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJodWJTd2lwZXJzIiwicG9wdXBJbWFnZXMiLCJjb3VudGVyIiwiaW5pdEh1YlN3aXBlcnMiLCJpbml0R2FsbGVyeVN3aXBlcnMiLCJiaW5kRXZlbnRzIiwiaHViIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1BlckNvbHVtbiIsInNwYWNlQmV0d2VlbiIsIm1vdXNld2hlZWwiLCJyZWxlYXNlT25FZGdlcyIsInNlbnNpdGl2aXR5IiwiYnJlYWtwb2ludHNJbnZlcnNlIiwiYnJlYWtwb2ludHMiLCJvbiIsImltYWdlc1JlYWR5IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImdhbGxlcnkiLCJzd2lwZXIiLCJpbWdzIiwiaW1nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aCIsInVwZGF0ZSIsImltYWdlIiwiZ2VuZXJhdGVJbWFnZVBvcHVwIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiYm9keSIsImluc2VydEFkamFjZW50SFRNTCIsInBvcHVwIiwic2V0VGltZW91dCIsImRlbGV0ZVBvcHVwIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJzaXRlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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QUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBd0MsZ0JBQVUsQ0FBQztBQUFBLGVBQU1ELEtBQUssQ0FBQ2YsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsV0FBcEIsQ0FBTjtBQUFBLE9BQUQsRUFBeUMsQ0FBekMsQ0FBVjtBQUNBYyxXQUFLLENBQUNULGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDO0FBQUEsZUFBTSxNQUFJLENBQUNXLFdBQUwsQ0FBaUJGLEtBQWpCLENBQU47QUFBQSxPQUFoQztBQUNEOzs7Z0NBRVdBLEssRUFBTztBQUNqQkEsV0FBSyxDQUFDZixTQUFOLENBQWdCa0IsTUFBaEIsQ0FBdUIsV0FBdkI7QUFDQUgsV0FBSyxDQUFDVCxnQkFBTixDQUF1QixlQUF2QixFQUF3QyxZQUFNO0FBQzVDLFlBQUdTLEtBQUssSUFBSUEsS0FBSyxDQUFDaEIsVUFBTixLQUFxQixJQUFqQyxFQUF1QztBQUNyQ2dCLGVBQUssQ0FBQ2hCLFVBQU4sQ0FBaUJvQixXQUFqQixDQUE2QkosS0FBN0I7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7Ozs7O0FBR0gsSUFBSUssSUFBSSxHQUFHLElBQUloRCxJQUFKLEVBQVg7QUFDQWdELElBQUksQ0FBQ0MsSUFBTCxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQsbm8tcGFyYW0tcmVhc3NpZ24sbm8tc2hhZG93ICovXG5cbi8qKlxuICogVGhyb3R0bGUgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIEVzcGVjaWFsbHkgdXNlZnVsIGZvciByYXRlIGxpbWl0aW5nXG4gKiBleGVjdXRpb24gb2YgaGFuZGxlcnMgb24gZXZlbnRzIGxpa2UgcmVzaXplIGFuZCBzY3JvbGwuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgICBkZWxheSAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW25vVHJhaWxpbmddICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBub1RyYWlsaW5nIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgb25seSBleGVjdXRlIGV2ZXJ5IGBkZWxheWAgbWlsbGlzZWNvbmRzIHdoaWxlIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkLiBJZiBub1RyYWlsaW5nIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9uZSBmaW5hbCB0aW1lXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsLiAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gIGNhbGxiYWNrICAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFtkZWJvdW5jZU1vZGVdIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gIEEgbmV3LCB0aHJvdHRsZWQsIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZSAoZGVsYXksIG5vVHJhaWxpbmcsIGNhbGxiYWNrLCBkZWJvdW5jZU1vZGUpIHtcbiAgLypcbiAgICogQWZ0ZXIgd3JhcHBlciBoYXMgc3RvcHBlZCBiZWluZyBjYWxsZWQsIHRoaXMgdGltZW91dCBlbnN1cmVzIHRoYXRcbiAgICogYGNhbGxiYWNrYCBpcyBleGVjdXRlZCBhdCB0aGUgcHJvcGVyIHRpbWVzIGluIGB0aHJvdHRsZWAgYW5kIGBlbmRgXG4gICAqIGRlYm91bmNlIG1vZGVzLlxuICAgKi9cbiAgdmFyIHRpbWVvdXRJRDtcbiAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlOyAvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgYGNhbGxiYWNrYCB3YXMgZXhlY3V0ZWQuXG5cbiAgdmFyIGxhc3RFeGVjID0gMDsgLy8gRnVuY3Rpb24gdG8gY2xlYXIgZXhpc3RpbmcgdGltZW91dFxuXG4gIGZ1bmN0aW9uIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCkge1xuICAgIGlmICh0aW1lb3V0SUQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIH1cbiAgfSAvLyBGdW5jdGlvbiB0byBjYW5jZWwgbmV4dCBleGVjXG5cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcbiAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICB9IC8vIGBub1RyYWlsaW5nYCBkZWZhdWx0cyB0byBmYWxzeS5cblxuXG4gIGlmICh0eXBlb2Ygbm9UcmFpbGluZyAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgZGVib3VuY2VNb2RlID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sgPSBub1RyYWlsaW5nO1xuICAgIG5vVHJhaWxpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLypcbiAgICogVGhlIGB3cmFwcGVyYCBmdW5jdGlvbiBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ1xuICAgKiBmdW5jdGlvbmFsaXR5IGFuZCB3aGVuIGV4ZWN1dGVkIHdpbGwgbGltaXQgdGhlIHJhdGUgYXQgd2hpY2ggYGNhbGxiYWNrYFxuICAgKiBpcyBleGVjdXRlZC5cbiAgICovXG5cblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBsYXN0RXhlYztcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblxuXG4gICAgZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSB0aGlzIGlzIHVzZWQgdG8gY2xlYXIgdGhlIGZsYWdcbiAgICAgKiB0byBhbGxvdyBmdXR1cmUgYGNhbGxiYWNrYCBleGVjdXRpb25zLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRpbWVvdXRJRCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQpIHtcbiAgICAgIC8qXG4gICAgICAgKiBTaW5jZSBgd3JhcHBlcmAgaXMgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcbiAgICAgICAqIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgZXhlY3V0ZSBgY2FsbGJhY2tgLlxuICAgICAgICovXG4gICAgICBleGVjKCk7XG4gICAgfVxuXG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblxuICAgIGlmIChkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkpIHtcbiAgICAgIC8qXG4gICAgICAgKiBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcbiAgICAgICAqIGBjYWxsYmFja2AuXG4gICAgICAgKi9cbiAgICAgIGV4ZWMoKTtcbiAgICB9IGVsc2UgaWYgKG5vVHJhaWxpbmcgIT09IHRydWUpIHtcbiAgICAgIC8qXG4gICAgICAgKiBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG4gICAgICAgKiBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuICAgICAgICogcmVjZW50IGV4ZWN1dGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuICAgICAgICogYWZ0ZXIgYGRlbGF5YCBtcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuICAgICAgICogZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICAgICAgICovXG4gICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYywgZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgPyBkZWxheSAtIGVsYXBzZWQgOiBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlci5jYW5jZWwgPSBjYW5jZWw7IC8vIFJldHVybiB0aGUgd3JhcHBlciBmdW5jdGlvbi5cblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkICovXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVsYXkgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICBbYXRCZWdpbl0gICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlIChkZWxheSwgYXRCZWdpbiwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aHJvdHRsZShkZWxheSwgYXRCZWdpbiwgZmFsc2UpIDogdGhyb3R0bGUoZGVsYXksIGNhbGxiYWNrLCBhdEJlZ2luICE9PSBmYWxzZSk7XG59XG5cbmV4cG9ydCB7IHRocm90dGxlLCBkZWJvdW5jZSB9O1xuIiwiaW1wb3J0IHsgdGhyb3R0bGUsIGRlYm91bmNlIH0gZnJvbSAndGhyb3R0bGUtZGVib3VuY2UnO1xuXG5jbGFzcyBTaXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpLFxuICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLFxuICAgICAgZm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1mb290ZXInKSxcbiAgICAgIGdhbGxlcnlTd2lwZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZ2FsbGVyeS1zd2lwZXInKSxcbiAgICAgIGh1YlN3aXBlcnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1odWItc3dpcGVyJyksXG4gICAgICBwb3B1cEltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXBvcHVwLWltYWdlJyksXG4gICAgfTtcblxuICAgIHRoaXMuY291bnRlciA9IDA7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kc1xuICAgKi9cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRIdWJTd2lwZXJzKCk7XG4gICAgdGhpcy5pbml0R2FsbGVyeVN3aXBlcnMoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGluaXRIdWJTd2lwZXJzKCkge1xuICAgIGZvciAoY29uc3QgaHViIG9mIHRoaXMuZG9tLmh1YlN3aXBlcnMpIHtcbiAgICAgIG5ldyBTd2lwZXIoaHViLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuMixcbiAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgICAgcmVsZWFzZU9uRWRnZXM6IHRydWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIGJyZWFrcG9pbnRzSW52ZXJzZTogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICA1NzY6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNVxuICAgICAgICAgIH0sXG4gICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLjI1XG4gICAgICAgICAgfSxcbiAgICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDNcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGltYWdlc1JlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICBodWIucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1yZWFkeScpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBpbml0R2FsbGVyeVN3aXBlcnMoKSB7XG4gICAgZm9yIChjb25zdCBnYWxsZXJ5IG9mIHRoaXMuZG9tLmdhbGxlcnlTd2lwZXJzKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKGdhbGxlcnksIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICBtb3VzZXdoZWVsOiB7XG4gICAgICAgICAgcmVsZWFzZU9uRWRnZXM6IHRydWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW1hZ2VzUmVhZHk6ICgpID0+IHtcbiAgICAgICAgICAgIGdhbGxlcnkucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1yZWFkeScpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpbWdzID0gZ2FsbGVyeS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgICAgZm9yIChjb25zdCBpbWcgb2YgaW1ncykge1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgIGlmKGNvdW50ZXIgPT09IGltZ3MubGVuZ3RoKSBzd2lwZXIudXBkYXRlKCk7XG4gICAgICAgIH0sIGZhbHNlICk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgZm9yIChjb25zdCBpbWFnZSBvZiB0aGlzLmRvbS5wb3B1cEltYWdlcykge1xuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmdlbmVyYXRlSW1hZ2VQb3B1cChpbWFnZSkpO1xuICAgIH1cbiAgICBcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoMzAwLCAoKSA9PiB0aGlzLnNldFNjcm9sbERpcmVjdGlvbigpKSk7XG4gIH1cblxuICBnZW5lcmF0ZUltYWdlUG9wdXAoaW1nKSB7XG4gICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxkaXYgY2xhc3M9J3BvcHVwIHBvcHVwLS1pbWFnZSc+PGRpdiBjbGFzcz1cInBvcHVwX193cmFwcGVyXCI+PGltZyBzcmM9JyR7c3JjfSc+PC9kaXY+PC9kaXY+YCk7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpLCAwKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZGVsZXRlUG9wdXAocG9wdXApKTtcbiAgfVxuXG4gIGRlbGV0ZVBvcHVwKHBvcHVwKSB7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGlmKHBvcHVwICYmIHBvcHVwLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcG9wdXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIHNpdGUgPSBuZXcgU2l0ZSgpO1xuc2l0ZS5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9