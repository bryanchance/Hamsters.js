var hamsters =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	var _habitat = __webpack_require__(2);
	
	var _habitat2 = _interopRequireDefault(_habitat);
	
	var _logger = __webpack_require__(3);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var data = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function data() {
	    _classCallCheck(this, data);
	
	    this.randomArray = this.randomArray;
	    this.aggregateArrays = this.aggregateThreadOutputs;
	    this.splitArrays = this.splitArrayIntoSubArrays;
	    this.createBlob = this.createDataBlob;
	    this.generateWorkerBlob = this.generateWorkerBlob;
	    this.processDataType = this.processDataType;
	    this.sortOutput = this.sortArray;
	    this.getOutput = this.prepareOutput;
	    this.prepareJob = this.prepareFunction;
	    this.feedHamster = this.messageWorker;
	    this.prepareMeal = this.prepareHamsterFood;
	    this.workerURI = null;
	  }
	
	  /**
	  * @function prepareHamsterFood - Prepares message to send to thread(s)
	  * @param {object} task - Task to process
	  */
	
	
	  _createClass(data, [{
	    key: 'prepareHamsterFood',
	    value: function prepareHamsterFood(task) {
	      var hamsterFood = task.input;
	      for (var key in task.input) {
	        if (task.input.hasOwnProperty(key) && key !== 'array') {
	          hamsterFood[key] = task.input[key];
	        }
	      }
	      hamsterFood.array = task.input.array;
	      if (task.hamstersJob && !hamsterFood.hamstersJob) {
	        hamsterFood.hamstersJob = hamstersJob;
	      }
	      return hamsterFood;
	    }
	
	    /**
	    * @function messageWorker - Prepares message to send to thread
	    * @param {worker} hamster - Thread to message
	    * @param {object} hamsterFood - Message to send to thread
	    */
	
	  }, {
	    key: 'messageWorker',
	    value: function messageWorker(hamster, hamsterFood) {
	      if (_habitat2.default.reactNative) {
	        return hamster.postMessage(JSON.stringify(hamsterFood));
	      }
	      if (_habitat2.default.ie10) {
	        return hamster.postMessage(hamsterFood);
	      }
	      if (_habitat2.default.webWorker) {
	        return hamster.port.postMessage(hamsterFood);
	      }
	      return hamster.postMessage(hamsterFood, this.prepareTransferBuffers(hamsterFood));
	    }
	
	    /**
	    * @function prepareTransferBuffers - Prepares transferrable buffers for faster message passing
	    * @param {object} hamsterFood - Message to send to thread
	    */
	
	  }, {
	    key: 'prepareTransferBuffers',
	    value: function prepareTransferBuffers(hamsterFood) {
	      var buffers = [];
	      var key = null;
	      if (_habitat2.default.transferrable) {
	        for (key in hamsterFood) {
	          if (hamsterFood.hasOwnProperty(key) && hamsterFood[key]) {
	            if (hamsterFood[key].buffer) {
	              buffers.push(hamsterFood[key].buffer);
	            } else if (Array.isArray(hamsterFood[key]) && typeof ArrayBuffer !== 'undefined') {
	              buffers.push(new ArrayBuffer(hamsterFood[key]));
	            }
	          }
	        }
	      }
	      return buffers;
	    }
	
	    /**
	    * @function prepareFunction - Prepares transferrable buffers for faster message passing
	    * @param {function} functionBody - Message to send to thread
	    */
	
	  }, {
	    key: 'prepareFunction',
	    value: function prepareFunction(functionBody) {
	      if (!_habitat2.default.legacy) {
	        functionBody = String(functionBody);
	        if (!_habitat2.default.webWorker) {
	          var startingIndex = functionBody.indexOf("{") + 1;
	          var endingIndex = functionBody.length - 1;
	          return functionBody.substring(startingIndex, endingIndex);
	        }
	      }
	      return functionBody;
	    }
	
	    /**
	    * @function generateWorkerBlob - Creates blob uri for flexible scaffold loading
	    * @param {function} workerLogic - Scaffold to use within worker thread
	    */
	
	  }, {
	    key: 'generateWorkerBlob',
	    value: function generateWorkerBlob(workerLogic) {
	      var hamsterBlob = this.createBlob(workerLogic);
	      var dataBlobURL = URL.createObjectURL(hamsterBlob);
	      return dataBlobURL;
	    }
	
	    /**
	    * @function processDataType - Converts buffer into new typed array
	    * @param {string} dataType - Typed array type for this task
	    * @param {object} buffer - Buffer to convert
	    */
	
	  }, {
	    key: 'processDataType',
	    value: function processDataType(dataType, buffer) {
	      if (_habitat2.default.transferrable) {
	        return this.typedArrayFromBuffer(dataType, buffer);
	      }
	      return buffer;
	    }
	
	    /**
	    * @function prepareOutput - Prepares final task output
	    * @param {task} buffer - Task to prepare output for
	    */
	
	  }, {
	    key: 'prepareOutput',
	    value: function prepareOutput(task) {
	      if (task.aggregate && task.threads !== 1) {
	        return this.aggregateThreadOutputs(task.output, task.dataType);
	      }
	      return task.output;
	    }
	
	    /**
	    * @function sortArray - Sorts array by defined order
	    * @param {object} arr - Array to sort
	    * @param {string} order - Defined sort order
	    */
	
	  }, {
	    key: 'sortArray',
	    value: function sortArray(arr, order) {
	      switch (order) {
	        case 'desc':
	        case 'asc':
	          return Array.prototype.sort.call(arr, function (a, b) {
	            return order === 'asc' ? a - b : b - a;
	          });
	        case 'ascAlpha':
	          return arr.sort();
	        case 'descAlpha':
	          return arr.reverse();
	        default:
	          return arr;
	      }
	    }
	
	    /**
	    * @function typedArrayFromBuffer - Converts buffer into new typed array
	    * @param {string} dataType - Typed array type for this task
	    * @param {object} buffer - Buffer to convert
	    */
	
	  }, {
	    key: 'typedArrayFromBuffer',
	    value: function typedArrayFromBuffer(dataType, buffer) {
	      var types = {
	        'uint32': Uint32Array,
	        'uint16': Uint16Array,
	        'uint8': Uint8Array,
	        'uint8clamped': Uint8ClampedArray,
	        'int32': Int32Array,
	        'int16': Int16Array,
	        'int8': Int8Array,
	        'float32': Float32Array,
	        'float64': Float64Array
	      };
	      if (!types[dataType]) {
	        return dataType;
	      }
	      return new types[dataType](buffer);
	    }
	
	    /**
	    * @function createDataBlob - Attempts to locate data blob builder, vender prefixes galore
	    */
	
	  }, {
	    key: 'locateBlobBuilder',
	    value: function locateBlobBuilder() {
	      if (typeof BlobBuilder !== 'undefined') {
	        return BlobBuilder;
	      }
	      if (typeof WebKitBlobBuilder !== 'undefined') {
	        return WebKitBlobBuilder;
	      }
	      if (typeof MozBlobBuilder !== 'undefined') {
	        return MozBlobBuilder;
	      }
	      if (typeof MSBlobBuilder !== 'undefined') {
	        return MSBlobBuilder;
	      }
	      return _logger2.default.error('Environment does not support data blobs!');
	    }
	
	    /**
	    * @function createDataBlob - Creates new data blob from textContent
	    * @param {string} textContent - Provided text content for blob
	    */
	
	  }, {
	    key: 'createDataBlob',
	    value: function createDataBlob(textContent) {
	      if (typeof Blob === 'undefined') {
	        var BlobMaker = this.locateBlobBuilder();
	        var blob = new BlobMaker();
	        blob.append([textContent], {
	          type: 'application/javascript'
	        });
	        return blob.getBlob();
	      }
	      return new Blob([textContent], {
	        type: 'application/javascript'
	      });
	    }
	
	    /**
	    * @function randomArray - Creates new random array
	    * @param {number} count - Number of random elements in array
	    * @param {function} onSuccess - onSuccess callback
	    */
	
	  }, {
	    key: 'randomArray',
	    value: function randomArray(count, onSuccess) {
	      var randomArray = [];
	      while (count > 0) {
	        randomArray.push(Math.round(Math.random() * (100 - 1) + 1));
	        count -= 1;
	      }
	      onSuccess(randomArray);
	    }
	
	    /**
	    * @function aggregateThreadOutputs - Joins individual thread outputs into single result
	    * @param {array} input - Array of arrays to aggregate
	    * @param {string} dataType - Data type to use for typed array
	    */
	
	  }, {
	    key: 'aggregateThreadOutputs',
	    value: function aggregateThreadOutputs(input, dataType) {
	      if (!dataType || !_habitat2.default.transferrable) {
	        return input.reduce(function (a, b) {
	          return a.concat(b);
	        });
	      }
	      var i = 0;
	      var len = input.length;
	      var bufferLength = 0;
	      for (i; i < len; i += 1) {
	        bufferLength += input[i].length;
	      }
	      var output = this.processDataType(dataType, bufferLength);
	      var offset = 0;
	      for (i = 0; i < len; i += 1) {
	        output.set(input[i], offset);
	        offset += input[i].length;
	      }
	      return output;
	    }
	
	    /**
	    * @function splitArrayIntoSubArrays - Splits a single array into multiple equal sized subarrays
	    * @param {array} array - Array to split
	    * @param {number} n - Number of subarrays to create
	    */
	
	  }, {
	    key: 'splitArrayIntoSubArrays',
	    value: function splitArrayIntoSubArrays(array, n) {
	      var i = 0;
	      var threadArrays = [];
	      var size = Math.ceil(array.length / n);
	      if (array.slice) {
	        while (i < array.length) {
	          threadArrays.push(array.slice(i, i += size));
	        }
	      } else {
	        while (i < array.length) {
	          threadArrays.push(array.subarray(i, i += size));
	        }
	      }
	      return threadArrays;
	    }
	  }]);
	
	  return data;
	}();
	
	var hamstersData = new data();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamstersData;
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	var _data = __webpack_require__(1);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _wheel = __webpack_require__(5);
	
	var _wheel2 = _interopRequireDefault(_wheel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var habitat = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function habitat() {
	    _classCallCheck(this, habitat);
	
	    this.debug = false;
	    this.importScripts = null;
	    this.memoize = false;
	    this.persistence = true;
	    this.legacy = this.isLegacyEnvironment() || false;
	    this.browser = this.isBrowser();
	    this.webWorker = this.isWebWorker();
	    this.node = this.isNode();
	    this.reactNative = this.isReactNative();
	    this.shell = this.isShell();
	    this.transferrable = this.supportsTransferrableObjects();
	    this.atomics = this.supportsAtomicOperations();
	    this.proxies = this.supportsProxies();
	    this.isIE10 = !this.isNode() && !this.isReactNative() && this.isInternetExplorer(10);
	    this.logicalThreads = this.determineGlobalThreads();
	    this.Worker = this.locateWorkerObject();
	    this.sharedWorker = this.locateSharedWorkerObject();
	    this.selectHamsterWheel = this.selectHamsterWheel;
	  }
	
	  /**
	  * @function determineGlobalThreads - Determines max number of threads to use
	  */
	
	
	  _createClass(habitat, [{
	    key: 'determineGlobalThreads',
	    value: function determineGlobalThreads() {
	      var max = 4;
	      if (typeof navigator !== 'undefined') {
	        if (typeof navigator.hardwareConcurrency !== 'undefined') {
	          max = navigator.hardwareConcurrency;
	        }
	        if (max > 20 && navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
	          max = 20;
	        }
	      }
	      if (this.node && typeof os !== 'undefined') {
	        max = os.cpus().length;
	      }
	      return max;
	    }
	
	    /**
	    * @function locateWorkerObject - Attempts to find a global Worker object
	    */
	
	  }, {
	    key: 'locateWorkerObject',
	    value: function locateWorkerObject() {
	      return typeof Worker !== 'undefined' ? Worker : null;
	    }
	
	    /**
	    * @function locateSharedWorkerObject - Attempts to find a global SharedWorker object
	    */
	
	  }, {
	    key: 'locateSharedWorkerObject',
	    value: function locateSharedWorkerObject() {
	      return typeof SharedWorker !== 'undefined' ? SharedWorker : null;
	    }
	
	    /**
	    * @function isBrowser - Detects if execution environment is a browser
	    */
	
	  }, {
	    key: 'isBrowser',
	    value: function isBrowser() {
	      return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object";
	    }
	
	    /**
	    * @function isInternetExplorer - Detects if execution environment is internet explorer
	    */
	
	  }, {
	    key: 'isInternetExplorer',
	    value: function isInternetExplorer(version) {
	      return new RegExp('msie' + (!isNaN(version) ? '\\s' + version : ''), 'i').test(navigator.userAgent);
	    }
	
	    /**
	    * @function isNode - Detects if execution environment is node.js
	    */
	
	  }, {
	    key: 'isNode',
	    value: function isNode() {
	      return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && "function" === "function" && !this.isWebWorker() && !this.isBrowser();
	    }
	
	    /**
	    * @function isWebWorker - Detects if execution environment is a webworker
	    */
	
	  }, {
	    key: 'isWebWorker',
	    value: function isWebWorker() {
	      return typeof importScripts === "function";
	    }
	
	    /**
	    * @function isReactNative - Detects if execution environment is reactNative
	    */
	
	  }, {
	    key: 'isReactNative',
	    value: function isReactNative() {
	      return !this.isNode() && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && !this.isBrowser();
	    }
	
	    /**
	    * @function isShell - Detects if execution environment is a shell
	    */
	
	  }, {
	    key: 'isShell',
	    value: function isShell() {
	      return this.isBrowser() && !this.isNode() && !this.isWebWorker() && !this.isReactNative();
	    }
	
	    /**
	    * @function isLegacyEnvironment - Detects if execution environment is a legacy environment
	    */
	
	  }, {
	    key: 'isLegacyEnvironment',
	    value: function isLegacyEnvironment() {
	      // Force legacy mode for known devices that don't support threading
	      if (this.isBrowser() && !this.isReactNative()) {
	        var userAgent = navigator.userAgent;
	        var lacksWorkerSupport = typeof this.Worker === 'undefined';
	        var legacyAgents = ['Kindle/3.0', 'Mobile/8F190', 'IEMobile'];
	        if (lacksWorkerSupport || legacyAgents.indexOf(userAgent) !== -1 || this.isIE10) {
	          this.legacy = true;
	        }
	      }
	      // Detect sharedWorker support for use within webworkers
	      if (this.isWebWorker() && typeof this.SharedWorker !== 'undefined') {
	        try {
	          var workerBlob = _data2.default.generateBlob();
	          var SharedHamster = new this.SharedWorker(workerBlob, 'SharedHamsterWheel');
	        } catch (e) {
	          this.legacy = true;
	        }
	      }
	      // Final check, if we're in a shell environment or we have no worker object use legacy mode
	      if (!this.legacy) {
	        return this.isShell() || !this.locateWorkerObject();
	      }
	    }
	
	    /**
	    * @function supportsTransferrableObjects - Detects if execution environment supports typed arrays
	    */
	
	  }, {
	    key: 'supportsTransferrableObjects',
	    value: function supportsTransferrableObjects() {
	      return typeof Uint8Array !== 'undefined';
	    }
	
	    /**
	    * @function supportsAtomicOperations - Detects if execution environment supports shared array buffers
	    */
	
	  }, {
	    key: 'supportsAtomicOperations',
	    value: function supportsAtomicOperations() {
	      return typeof SharedArrayBuffer !== 'undefined';
	    }
	
	    /**
	    * @function supportsProxies - Detects if execution environment supports proxy objects
	    */
	
	  }, {
	    key: 'supportsProxies',
	    value: function supportsProxies() {
	      return typeof Proxy !== 'undefined';
	    }
	
	    /**
	    * @function scheduleTask - Determines which scaffold to use for proper execution for various environments
	    */
	
	  }, {
	    key: 'selectHamsterWheel',
	    value: function selectHamsterWheel() {
	      if (this.legacy) {
	        return _wheel2.default.legacy;
	      }
	      if (this.isIE10) {
	        return './common/hamstersWheel.js';
	      }
	      if (this.reactNative) {
	        return _wheel2.default.reactNative;
	      }
	      if (this.webWorker) {
	        return _wheel2.default.worker;
	      }
	      if (this.node) {
	        return _wheel2.default.regular;
	      }
	      return _data2.default.generateWorkerBlob(_wheel2.default.regular);
	    }
	  }]);
	
	  return habitat;
	}();
	
	var hamstersHabitat = new habitat();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamstersHabitat;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), (function() { return this; }())))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	var _version = __webpack_require__(4);
	
	var _version2 = _interopRequireDefault(_version);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var logger = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function logger() {
	    _classCallCheck(this, logger);
	
	    this.logBook = {
	      error: [],
	      warning: [],
	      info: []
	    };
	    this.info = this.infoLog;
	    this.warning = this.warningLog;
	    this.error = this.errorLog;
	    this.errorFromThread = this.errorFromThread;
	    this.saveLogEntry = this.saveToLogBook;
	    this.getLogEntries = this.fetchLogBook;
	    this.searchLogEntries = this.searchLogBook;
	  }
	
	  _createClass(logger, [{
	    key: 'infoLog',
	    value: function infoLog(message) {
	      var timeStamp = Date.now();
	      var timeStampedMessage = 'Hamsters.js v' + _version2.default + ' Info: ' + message + ' @ ' + timeStamp;
	      this.saveLogEntry('info', timeStampedMessage);
	      console.info(timeStampedMessage);
	    }
	  }, {
	    key: 'warningLog',
	    value: function warningLog(message) {
	      var timeStamp = Date.now();
	      var timeStampedMessage = 'Hamsters.js v' + _version2.default + ' Warning: ' + message + ' @ ' + timeStamp;
	      this.saveLogEntry('warning', timeStampedMessage);
	      console.warn(timeStampedMessage);
	    }
	  }, {
	    key: 'errorLog',
	    value: function errorLog(message, reject) {
	      var timeStamp = Date.now();
	      var timeStampedMessage = 'Hamsters.js v' + _version2.default + ' Error: ' + message + ' @ ' + timeStamp;
	      this.saveLogEntry('error', timeStampedMessage);
	      console.error(timeStampedMessage);
	      if (reject) {
	        reject(timeStampedMessage);
	      } else {
	        return timeStampedMessage;
	      }
	    }
	  }, {
	    key: 'errorFromThread',
	    value: function errorFromThread(error, reject) {
	      var errorMessage = '#' + error.lineno + ' in ' + error.filename + ': ' + error.message;
	      this.errorLog(errorMessage, reject);
	    }
	  }, {
	    key: 'saveToLogBook',
	    value: function saveToLogBook(eventType, message) {
	      this.logBook[eventType].push(message);
	    }
	  }, {
	    key: 'fetchLogBook',
	    value: function fetchLogBook(eventType) {
	      if (eventType) {
	        return this.logBook[eventType];
	      }
	      return this.logBook;
	    }
	  }, {
	    key: 'findStringInLogBook',
	    value: function findStringInLogBook(logBookEntries, string) {
	      var searchResults = [];
	      var i = 0;
	      for (i; i < logBookEntries.length; i++) {
	        if (logBookEntries[i].indexOf(string) !== -1) {
	          searchResults.push(logBookEntries[i]);
	        }
	      }
	      return searchResults;
	    }
	  }, {
	    key: 'findStringInLogBookAllTypes',
	    value: function findStringInLogBookAllTypes(logBook, searchString) {
	      var searchResults = [];
	      var key = void 0,
	          eventTypeResults = void 0,
	          tmpEntries = null;
	      for (key in logBook) {
	        if (logBook.hasOwnProperty(key)) {
	          tmpEntries = logBook[key];
	          eventTypeResults = this.findStringInLogBook(tmpEntries, searchString);
	        }
	      }
	      return searchResults;
	    }
	  }, {
	    key: 'searchLogBook',
	    value: function searchLogBook(searchString, eventType) {
	      var finalResults = [];
	      if (eventType) {
	        finalResults = this.findStringInLogBook(this.logBook[eventType], string);
	      } else {
	        finalResults = this.findStringInLogBookAllTypes(this.logBook);
	      }
	      return {
	        total: finalResults.length,
	        results: finalResults
	      };
	    }
	  }]);
	
	  return logger;
	}();
	
	var hamstersLogger = new logger();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamstersLogger;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	'use strict';
	
	var majorVersion = 5;
	var minorVersion = 1;
	var patchVersion = 1;
	var hamstersVersion = majorVersion + '.' + minorVersion + '.' + patchVersion;
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamstersVersion;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	var _data = __webpack_require__(1);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _habitat = __webpack_require__(2);
	
	var _habitat2 = _interopRequireDefault(_habitat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var wheel = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function wheel() {
	    _classCallCheck(this, wheel);
	
	    this.worker = this.workerScaffold;
	    this.regular = this.regularScaffold;
	    this.reactNative = this.reactNativeScaffold;
	    this.legacy = this.legacyScaffold;
	  }
	
	  /**
	  * @function workerScaffold - Provides worker body for library functionality when used within a worker [threads inside threads]
	  */
	
	
	  _createClass(wheel, [{
	    key: 'workerScaffold',
	    value: function workerScaffold() {
	      'use strict';
	
	      if (typeof self === 'undefined') {
	        self = global || window || this;
	      }
	
	      self.params = {};
	      self.rtn = {};
	
	      addEventListener('connect', function (incomingConnection) {
	        var port = incomingConnection.ports[0];
	        port.start();
	        port.addEventListener('message', function (incomingMessage) {
	          params = incomingMessage.data;
	          rtn = {
	            data: [],
	            dataType: params.dataType,
	            threadStart: Date.now()
	          };
	          if (params.importScripts) {
	            self.importScripts(params.importScripts);
	          }
	          eval("(" + params.hamstersJob + ")")();
	          rtn.threadEnd = Date.now();
	          port.postMessage(rtn);
	        }, false);
	      }, false);
	    }
	
	    /**
	    * @function workerScaffold - Provides worker body for library functionality
	    */
	
	  }, {
	    key: 'regularScaffold',
	    value: function regularScaffold() {
	      'use strict';
	
	      if (typeof self === 'undefined') {
	        var _self = global || window || this;
	      }
	
	      self.params = {};
	      self.rtn = {};
	
	      function prepareReturn(returnObject) {
	        var dataType = returnObject.dataType;
	        if (dataType) {
	          returnObject.data = typedArrayFromBuffer(dataType, returnObject.data);
	        }
	        return returnObject;
	      }
	
	      function typedArrayFromBuffer(dataType, buffer) {
	        var types = {
	          'uint32': Uint32Array,
	          'uint16': Uint16Array,
	          'uint8': Uint8Array,
	          'uint8clamped': Uint8ClampedArray,
	          'int32': Int32Array,
	          'int16': Int16Array,
	          'int8': Int8Array,
	          'float32': Float32Array,
	          'float64': Float64Array
	        };
	        if (!types[dataType]) {
	          return buffer;
	        }
	        return new types[dataType](buffer);
	      }
	
	      function prepareTransferBuffers(hamsterFood) {
	        var buffers = [];
	        var key = null;
	        for (key in hamsterFood) {
	          if (hamsterFood.hasOwnProperty(key) && hamsterFood[key]) {
	            if (hamsterFood[key].buffer) {
	              buffers.push(hamsterFood[key].buffer);
	            } else if (Array.isArray(hamsterFood[key]) && typeof ArrayBuffer !== 'undefined') {
	              buffers.push(new ArrayBuffer(hamsterFood[key]));
	            }
	          }
	        }
	        return buffers;
	      }
	
	      addEventListener('message', function (incomingMessage) {
	        params = incomingMessage.data;
	        rtn = {
	          data: [],
	          dataType: params.dataType ? params.dataType.toLowerCase() : null,
	          threadStart: Date.now()
	        };
	        if (params.importScripts) {
	          self.importScripts(params.importScripts);
	        }
	        new Function(params.hamstersJob)();
	        rtn.threadEnd = Date.now();
	        postMessage(prepareReturn(rtn), prepareTransferBuffers(rtn));
	      });
	    }
	  }, {
	    key: 'reactNativeScaffold',
	    value: function reactNativeScaffold() {
	      'use strict';
	
	      self.params = {};
	      self.rtn = {};
	
	      self.onmessage = function (incomingMessage) {
	        params = JSON.parse(incomingMessage.data);
	        rtn = {
	          data: [],
	          dataType: params.dataType ? params.dataType.toLowerCase() : null,
	          threadStart: Date.now()
	        };
	        if (params.importScripts) {
	          self.importScripts(params.importScripts);
	        }
	        new Function(params.hamstersJob)();
	        rtn.threadEnd = Date.now();
	        postMessage(prepareReturn(rtn));
	      };
	
	      function prepareReturn(returnObject) {
	        var dataType = returnObject.dataType;
	        if (dataType) {
	          returnObject.data = typedArrayFromBuffer(dataType, returnObject.data);
	        }
	        return JSON.stringify(returnObject);
	      }
	
	      function typedArrayFromBuffer(dataType, buffer) {
	        var types = {
	          'uint32': Uint32Array,
	          'uint16': Uint16Array,
	          'uint8': Uint8Array,
	          'uint8clamped': Uint8ClampedArray,
	          'int32': Int32Array,
	          'int16': Int16Array,
	          'int8': Int8Array,
	          'float32': Float32Array,
	          'float64': Float64Array
	        };
	        if (!types[dataType]) {
	          return buffer;
	        }
	        return new types[dataType](buffer);
	      }
	    }
	
	    /**
	    * @function legacyScaffold - Provides library functionality for legacy devices
	    */
	
	  }, {
	    key: 'legacyScaffold',
	    value: function legacyScaffold(params, resolve) {
	      var _this = this;
	
	      setTimeout(function () {
	        if (typeof self === 'undefined') {
	          var self = global || window || _this;
	        }
	        self.params = params;
	        self.rtn = {
	          data: [],
	          threadStart: Date.now()
	        };
	        params.hamstersJob();
	        rtn.threadEnd = Date.now();
	        resolve(rtn);
	      }, 4); //4ms delay (HTML5 spec minimum), simulate threading
	    }
	  }]);
	
	  return wheel;
	}();
	
	;
	
	var hamstersWheel = new wheel();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamstersWheel;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var memoizer = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function memoizer() {
	    _classCallCheck(this, memoizer);
	
	    this.maxCacheEntries = 25;
	    this.cacheEntries = [];
	    this.itemCached = this.isItemCached;
	    this.fetchItem = this.fetchItemFromCache;
	    this.saveItem = this.saveItemToCache;
	  }
	
	  /**
	  * @function isItemCached - Checks for existing data in cache
	  * @param {object} input - Provided library execution options
	  * @param {method} functionToRun - Function to execute
	  * @return {object} Execution results from cache, or false
	  */
	
	
	  _createClass(memoizer, [{
	    key: 'isItemCached',
	    value: function isItemCached(input, method) {
	      return !!this.fetchItem({ fn: method, data: input }) || false;
	    }
	
	    /**
	    * @function fetchItemFromCache - Fetches cache item from cache
	    * @param {object} cacheItem - Cache item to fetch
	    * @return {object} CacheResults, or false
	    */
	
	  }, {
	    key: 'fetchItemFromCache',
	    value: function fetchItemFromCache(cacheItem) {
	      var cachedResult = null;
	      for (var key in this.cache) {
	        if (this.cache.hasOwnProperty(key)) {
	          if (cacheItem[key].fn === cacheItem.fn) {
	            if (cacheItem[key].input === cacheItem.data) {
	              cachedResult = cacheItem[key].input;
	            }
	          }
	        }
	      }
	      return cachedResult || false;
	    }
	
	    /**
	    * @function isItemCached - Checks for existing data in cache
	    * @param {method} functionToRun - Function to execute
	    * @param {object} data - Execution results to cache
	    */
	
	  }, {
	    key: 'saveItemToCache',
	    value: function saveItemToCache(method, data, maxCacheEntries) {
	      var itemToCache = {
	        fn: method,
	        input: data
	      };
	      var cachedItems = this.cacheEntries;
	      if (cachedItems.length < maxCacheEntries) {
	        cachedItems.push(itemToCache);
	      } else {
	        cachedItems.splice(0, 0, itemToCache);
	      }
	      this.cacheEntries = cachedItems;
	    }
	  }]);
	
	  return memoizer;
	}();
	
	var hamstersMemoizer = new memoizer();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamstersMemoizer;
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	var _data = __webpack_require__(1);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _habitat = __webpack_require__(2);
	
	var _habitat2 = _interopRequireDefault(_habitat);
	
	var _logger = __webpack_require__(3);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var pool = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function pool() {
	    _classCallCheck(this, pool);
	
	    this.tasks = [];
	    this.threads = [];
	    this.running = [];
	    this.pending = [];
	    this.fetchHamster = this.grabHamster;
	  }
	
	  /**
	  * @function grabHamster - Adds task to queue waiting for available thread
	  * @param {object} array - Provided data to execute logic on
	  * @param {object} task - Provided library functionality options for this task
	  * @param {boolean} persistence - Whether persistence mode is enabled or not
	  * @param {function} wheel - Results from select hamster wheel
	  * @param {function} resolve - onSuccess method
	  * @param {function} reject - onError method
	  */
	
	
	  _createClass(pool, [{
	    key: 'addWorkToPending',
	    value: function addWorkToPending(array, task, persistence, wheel, resolve, reject) {
	      this.pending.push(arguments);
	    }
	
	    /**
	    * @function grabHamster - Invokes processing of next item in queue
	    * @param {object} item - Task to process
	    */
	
	  }, {
	    key: 'processQueue',
	    value: function processQueue(item) {
	      return this.runTask(item[0], item[1], item[2], item[3], item[4]);
	    }
	
	    /**
	    * @function grabHamster - Keeps track of threads running, scoped globally and to task
	    * @param {number} threadId - Id of thread
	    * @param {boolean} persistence - Whether persistence mode is enabled or not
	    * @param {function} wheel - Results from select hamster wheel
	    */
	
	  }, {
	    key: 'grabHamster',
	    value: function grabHamster(threadId, persistence) {
	      if (persistence) {
	        return this.threads[threadId];
	      }
	      return this.spawnHamster();
	    }
	
	    /**
	    * @function keepTrackOfThread - Keeps track of threads running, scoped globally and to task
	    * @param {object} task - Provided library functionality options for this task
	    * @param {number} id - Id of thread to track
	    */
	
	  }, {
	    key: 'keepTrackOfThread',
	    value: function keepTrackOfThread(task, id) {
	      task.workers.push(id); //Keep track of threads poold to current task
	      this.running.push(id); //Keep track of all currently running threads
	    }
	
	    /**
	    * @function registerTask - Adds task to execution pool based on id
	    * @param {number} id - Id of task to register
	    */
	
	  }, {
	    key: 'registerTask',
	    value: function registerTask(id) {
	      var index = this.tasks.push(id);
	      return this.tasks[index - 1];
	    }
	
	    /**
	    * @function spawnHamsters - Spawns multiple new threads for execution
	    * @param {boolean} persistence - Whether persistence mode is enabled or not
	    * @param {function} wheel - Results from select hamster wheel
	    * @param {number} maxThreds - Max number of threads for this client
	    */
	
	  }, {
	    key: 'spawnHamsters',
	    value: function spawnHamsters(persistence, maxThreads) {
	      _logger2.default.info(maxThreads + ' Logical Threads Detected, Spawning ' + maxThreads + ' Hamsters');
	      for (maxThreads; maxThreads > 0; maxThreads--) {
	        this.threads.push(this.spawnHamster());
	      }
	      _logger2.default.info(this.threads.length + ' hamsters ready and awaiting instructions');
	    }
	
	    /**
	    * @function spawnHamster - Spawns a new thread for execution
	    * @param {function} wheel - Results from select hamster wheel
	    * @param {string} workerURI - URI for created library blob object 
	    */
	
	  }, {
	    key: 'spawnHamster',
	    value: function spawnHamster() {
	      if (_habitat2.default.webWorker) {
	        return new _habitat2.default.SharedWorker(_habitat2.default.selectHamsterWheel(), 'SharedHamsterWheel');
	      }
	      return new _habitat2.default.Worker(_habitat2.default.selectHamsterWheel());
	    }
	
	    /**
	    * @function prepareMeal - Prepares message to send to a thread and invoke execution
	    * @param {object} threadArray - Provided data to execute logic on
	    * @param {object} task - Provided library functionality options for this task
	    * @return {object} hamsterFood - Prepared message to send to a thread
	    */
	
	  }, {
	    key: 'prepareMeal',
	    value: function prepareMeal(threadArray, task) {
	      var hamsterFood = {
	        array: threadArray
	      };
	      for (var key in task.input) {
	        if (task.input.hasOwnProperty(key) && ['array', 'threads'].indexOf(key) == -1) {
	          hamsterFood[key] = task.input[key];
	        }
	      }
	      return hamsterFood;
	    }
	
	    /**
	    * @function hamsterWheel - Runs function using thread
	    * @param {object} array - Provided data to execute logic on
	    * @param {object} task - Provided library functionality options for this task
	    * @param {boolean} persistence - Whether persistence mode is enabled or not
	    * @param {function} wheel - Results from select hamster wheel
	    * @param {function} resolve - onSuccess method
	    * @param {function} reject - onError method
	    */
	
	  }, {
	    key: 'runTask',
	    value: function runTask(array, task, persistence, resolve, reject) {
	      var threadId = this.running.length;
	      var hamsterFood = this.prepareMeal(array, task);
	      this.registerTask(task.id);
	      this.keepTrackOfThread(task, threadId);
	      if (_habitat2.default.legacy) {
	        wheel(hamsterFood, resolve, reject);
	      } else {
	        var hamster = this.grabHamster(threadId, persistence);
	        this.trainHamster(threadId, task, hamster, persistence, resolve, reject);
	        _data2.default.feedHamster(hamster, hamsterFood);
	      }
	      task.count += 1; //Increment count, thread is running
	    }
	
	    /**
	    * @function hamsterWheel - Runs or queues function using threads
	    * @param {object} array - Provided library functionality options for this task
	    * @param {object} task - Provided library functionality options for this task
	    * @param {boolean} persistence - Whether persistence mode is enabled or not
	    * @param {function} wheel - Results from select hamster wheel
	    * @param {function} resolve - onSuccess method
	    * @param {function} reject - onError method
	    */
	
	  }, {
	    key: 'hamsterWheel',
	    value: function hamsterWheel(array, task, persistence, maxThreads, resolve, reject) {
	      if (maxThreads === this.running.length) {
	        return this.addWorkToPending(array, task, persistence, resolve, reject);
	      }
	      return this.runTask(array, task, persistence, resolve, reject);
	    }
	
	    /**
	    * @function returnOutputAndRemoveTask - gathers thread outputs into final result
	    * @param {object} task - Provided library functionality options for this task
	    * @param {function} resolve - onSuccess method
	    */
	
	  }, {
	    key: 'returnOutputAndRemoveTask',
	    value: function returnOutputAndRemoveTask(task, resolve) {
	      var output = _data2.default.getOutput(task, _habitat2.default.transferrable);
	      if (task.sort) {
	        output = _data2.default.sortOutput(output, task.sort);
	      }
	      this.tasks[task.id] = null; //Clean up our task, not needed any longer
	      resolve({
	        data: output
	      });
	    }
	
	    /**
	    * @function trainHamster - Trains thread in how to behave
	    * @param {number} threadId - Internal use id for this thread
	    * @param {object} task - Provided library functionality options for this task
	    * @param {worker} hamster - Thread to train
	    * @param {boolean} persistence - Whether persistence mode is enabled or not
	    * @param {function} resolve - onSuccess method
	    * @param {function} reject - onError method
	    */
	
	  }, {
	    key: 'trainHamster',
	    value: function trainHamster(threadId, task, hamster, persistence, resolve, reject) {
	      var pool = this;
	      // Handle successful response from a thread
	      function onThreadResponse(message) {
	        var results = message.data;
	        pool.running.splice(pool.running.indexOf(threadId), 1); //Remove thread from running pool
	        task.workers.splice(task.workers.indexOf(threadId), 1); //Remove thread from task running pool
	        // String only communcation for rn...in 2k18
	        if (_habitat2.default.reactNative) {
	          task.output[threadId] = JSON.parse(results.data);
	        } else {
	          task.output[threadId] = results.data;
	        }
	        if (task.workers.length === 0 && task.count === task.threads) {
	          pool.returnOutputAndRemoveTask(task, resolve);
	        }
	        if (pool.pending.length !== 0) {
	          pool.processQueue(pool.pending.shift());
	        }
	        if (!persistence && !_habitat2.default.webWorker) {
	          hamster.terminate(); //Kill the thread only if no items waiting to run (20-22% performance improvement observed during testing, repurposing threads vs recreating them)
	        }
	      }
	      // Handle error response from a thread
	      function onThreadError(error) {
	        _logger2.default.errorFromThread(error, reject);
	      }
	      // Register on message/error handlers
	      if (_habitat2.default.webWorker) {
	        hamster.port.onmessage = onThreadResponse;
	        hamster.port.onerror = onThreadError;
	      } else {
	        hamster.onmessage = onThreadResponse;
	        hamster.onerror = onThreadError;
	      }
	    }
	
	    /**
	    * @function scheduleTask - Adds new task to the system for execution
	    * @param {object} task - Provided library functionality options for this task
	    * @param {boolean} persistence - Whether persistence mode is enabled or not
	    * @param {function} wheel - Scaffold to execute login within
	    * @param {number} maxThreads - Maximum number of threads for this client
	    */
	
	  }, {
	    key: 'scheduleTask',
	    value: function scheduleTask(task, persistence, maxThreads) {
	      var _this = this;
	
	      var threadArrays = [];
	      if (task.input.array && task.threads !== 1) {
	        threadArrays = _data2.default.splitArrays(task.input.array, task.threads); //Divide our array into equal array sizes
	      }
	      return new Promise(function (resolve, reject) {
	        var i = 0;
	        while (i < task.threads) {
	          if (threadArrays && task.threads !== 1) {
	            _this.hamsterWheel(threadArrays[i], task, persistence, maxThreads, resolve, reject);
	          } else {
	            _this.hamsterWheel(task.input.array, task, persistence, maxThreads, resolve, reject);
	          }
	          i += 1;
	        }
	      });
	    }
	  }]);
	
	  return pool;
	}();
	
	var hamsterPool = new pool();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamsterPool;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */
	
	/***********************************************************************************
	* Title: Hamsters.js                                                               *
	* Description: 100% Vanilla Javascript Multithreading & Parallel Execution Library *
	* Author: Austin K. Smith                                                          *
	* Contact: austin@asmithdev.com                                                    *  
	* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
	* License: Artistic License 2.0                                                    *
	***********************************************************************************/
	
	var _version = __webpack_require__(4);
	
	var _version2 = _interopRequireDefault(_version);
	
	var _habitat = __webpack_require__(2);
	
	var _habitat2 = _interopRequireDefault(_habitat);
	
	var _pool = __webpack_require__(7);
	
	var _pool2 = _interopRequireDefault(_pool);
	
	var _data = __webpack_require__(1);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _wheel = __webpack_require__(5);
	
	var _wheel2 = _interopRequireDefault(_wheel);
	
	var _logger = __webpack_require__(3);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _memoizer = __webpack_require__(6);
	
	var _memoizer2 = _interopRequireDefault(_memoizer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var hamstersjs = function () {
	
	  /**
	  * @constructor
	  * @function constructor - Sets properties for this class
	  */
	  function hamstersjs() {
	    _classCallCheck(this, hamstersjs);
	
	    this.version = _version2.default;
	    this.maxThreads = _habitat2.default.logicalThreads;
	    this.habitat = _habitat2.default;
	    this.data = _data2.default;
	    this.pool = _pool2.default;
	    this.logger = _logger2.default;
	    this.memoizer = _memoizer2.default;
	    this.run = this.hamstersRun;
	    this.promise = this.hamstersPromise;
	    this.init = this.initializeLibrary;
	  }
	
	  /**
	  * @function initializeLibrary - Prepares & initializes Hamsters.js library
	  * @param {object} startOptions - Provided library functionality options
	  */
	
	
	  _createClass(hamstersjs, [{
	    key: 'initializeLibrary',
	    value: function initializeLibrary(startOptions) {
	      this.logger.info('Preparing the hamster wheels & readying hamsters');
	      if (typeof startOptions !== 'undefined') {
	        this.processStartOptions(startOptions);
	      }
	      if (!_habitat2.default.legacy && _habitat2.default.persistence) {
	        _pool2.default.spawnHamsters(_habitat2.default.persistence, this.maxThreads);
	      }
	      delete this.init;
	    }
	
	    /**
	    * @function processStartOptions - Adjusts library functionality based on provided options
	    * @param {object} startOptions - Provided library functionality options
	    */
	
	  }, {
	    key: 'processStartOptions',
	    value: function processStartOptions(startOptions) {
	      // Add options to override library environment behavior
	      var habitatKeys = ['worker', 'sharedworker', 'legacy', 'webworker', 'reactnative', 'atomics', 'proxies', 'transferrable', 'browser', 'shell', 'node', 'debug', 'persistence', 'importscripts'];
	      for (var key in startOptions) {
	        if (startOptions.hasOwnProperty(key)) {
	          if (habitatKeys.indexOf(key.toLowerCase()) !== -1) {
	            this.habitat[key] = startOptions[key];
	          } else {
	            this[key] = startOptions[key];
	          }
	        }
	      }
	      // Ensure legacy mode is disabled when we pass a third party worker library
	      if (typeof this.habitat.Worker === 'function') {
	        this.habitat.legacy = false;
	      }
	    }
	
	    /**
	    * @constructor
	    * @function hamstersTask - Constructs a new task object from provided arguments
	    * @param {object} params - Provided library execution options
	    * @param {function} functionToRun - Function to execute
	    * @param {object} scope - Reference to main library context
	    * @return {object} new Hamsters.js task
	    */
	
	  }, {
	    key: 'hamstersTask',
	    value: function hamstersTask(params, functionToRun, scope) {
	      this.id = scope.pool.tasks.length;
	      this.count = 0;
	      this.aggregate = params.aggregate || false;
	      this.output = [];
	      this.workers = [];
	      this.memoize = params.memoize || false;
	      this.dataType = params.dataType ? params.dataType.toLowerCase() : null;
	      this.input = params;
	      // Do not modify function if we're running on the main thread for legacy fallback
	      if (_habitat2.default.legacy) {
	        this.threads = 1;
	        this.input.hamstersJob = functionToRun;
	      } else {
	        this.threads = params.threads || 1;
	        this.input.hamstersJob = scope.data.prepareJob(functionToRun);
	      }
	    }
	
	    /**
	    * @async
	    * @function hamstersPromise - Calls library functionality using async promises
	    * @param {object} params - Provided library execution options
	    * @param {function} functionToRun - Function to execute
	    * @return {array} Results from functionToRun.
	    */
	
	  }, {
	    key: 'hamstersPromise',
	    value: function hamstersPromise(params, functionToRun) {
	      var _this = this;
	
	      return new Promise(function (resolve, reject) {
	        var task = new _this.hamstersTask(params, functionToRun, _this);
	        _this.pool.scheduleTask(task, _this.habitat.persistence, _this.maxThreads).then(function (results) {
	          resolve(results);
	        }).catch(function (error) {
	          _logger2.default.error(error.messsage, reject);
	        });
	      });
	    }
	
	    /**
	    * @async
	    * @function hamstersRun - Calls library functionality using async callbacks
	    * @param {object} params - Provided library execution options
	    * @param {function} functionToRun - Function to execute
	    * @param {function} onSuccess - Function to call upon successful execution
	    * @param {function} onError - Function to call upon execution failure
	    * @return {array} Results from functionToRun.
	    */
	
	  }, {
	    key: 'hamstersRun',
	    value: function hamstersRun(params, functionToRun, onSuccess, onError) {
	      var task = new this.hamstersTask(params, functionToRun, this);
	      this.pool.scheduleTask(task, this.habitat.persistence, this.maxThreads).then(function (results) {
	        onSuccess(results);
	      }).catch(function (error) {
	        _logger2.default.error(error.messsage, onError);
	      });
	    }
	  }]);
	
	  return hamstersjs;
	}();
	
	var hamsters = new hamstersjs();
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = hamsters;
	}

/***/ }),
/* 9 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=hamsters.web.js.map