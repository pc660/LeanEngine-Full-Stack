/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _configConfig = __webpack_require__(1);

	var _configConfig2 = _interopRequireDefault(_configConfig);

	var _configHttp = __webpack_require__(2);

	var _configHttp2 = _interopRequireDefault(_configHttp);

	var _configRoute = __webpack_require__(3);

	var _configRoute2 = _interopRequireDefault(_configRoute);

	var _i18nConfig = __webpack_require__(4);

	var _i18nConfig2 = _interopRequireDefault(_i18nConfig);

	var _configAuth = __webpack_require__(7);

	var _configAuth2 = _interopRequireDefault(_configAuth);

	var _configCity = __webpack_require__(8);

	var _configCity2 = _interopRequireDefault(_configCity);

	// data config

	var _configMultiChoiceConfig = __webpack_require__(9);

	var _configMultiChoiceConfig2 = _interopRequireDefault(_configMultiChoiceConfig);

	var _configCalendarConfig = __webpack_require__(10);

	var _configCalendarConfig2 = _interopRequireDefault(_configCalendarConfig);

	var _configDispatcherConfig = __webpack_require__(11);

	var _configDispatcherConfig2 = _interopRequireDefault(_configDispatcherConfig);

	var _configMenuConfig = __webpack_require__(12);

	var _configMenuConfig2 = _interopRequireDefault(_configMenuConfig);

	var _configFormConfig = __webpack_require__(13);

	var _configFormConfig2 = _interopRequireDefault(_configFormConfig);

	// service

	var _commonCommonSer = __webpack_require__(14);

	var _commonCommonSer2 = _interopRequireDefault(_commonCommonSer);

	var _authHelloSer = __webpack_require__(15);

	var _authHelloSer2 = _interopRequireDefault(_authHelloSer);

	// directive

	var _commonHeaderHeaderDirect = __webpack_require__(16);

	var _commonHeaderHeaderDirect2 = _interopRequireDefault(_commonHeaderHeaderDirect);

	var _commonDirectivesPagePageDirect = __webpack_require__(17);

	var _commonDirectivesPagePageDirect2 = _interopRequireDefault(_commonDirectivesPagePageDirect);

	var _commonDirectivesMultiChoiceMultiChoiceDirect = __webpack_require__(18);

	var _commonDirectivesMultiChoiceMultiChoiceDirect2 = _interopRequireDefault(_commonDirectivesMultiChoiceMultiChoiceDirect);

	var _commonDirectivesCalendarCalendarDirect = __webpack_require__(19);

	var _commonDirectivesCalendarCalendarDirect2 = _interopRequireDefault(_commonDirectivesCalendarCalendarDirect);

	var _commonDirectivesTextFieldTextFieldDirect = __webpack_require__(20);

	var _commonDirectivesTextFieldTextFieldDirect2 = _interopRequireDefault(_commonDirectivesTextFieldTextFieldDirect);

	var _commonDirectivesCounterCounterDirect = __webpack_require__(21);

	var _commonDirectivesCounterCounterDirect2 = _interopRequireDefault(_commonDirectivesCounterCounterDirect);

	var _commonDirectivesTemplateTemplateDirect = __webpack_require__(22);

	var _commonDirectivesTemplateTemplateDirect2 = _interopRequireDefault(_commonDirectivesTemplateTemplateDirect);

	var _commonDirectivesInputFormInputFormDirect = __webpack_require__(23);

	var _commonDirectivesInputFormInputFormDirect2 = _interopRequireDefault(_commonDirectivesInputFormInputFormDirect);

	var _commonProviderDirectivesAddressAddressDirect = __webpack_require__(24);

	var _commonProviderDirectivesAddressAddressDirect2 = _interopRequireDefault(_commonProviderDirectivesAddressAddressDirect);

	var _commonProviderDirectivesMenuMenuDirect = __webpack_require__(25);

	var _commonProviderDirectivesMenuMenuDirect2 = _interopRequireDefault(_commonProviderDirectivesMenuMenuDirect);

	var _commonProviderDirectivesReturnPolicyReturnPolicyDirect = __webpack_require__(26);

	var _commonProviderDirectivesReturnPolicyReturnPolicyDirect2 = _interopRequireDefault(_commonProviderDirectivesReturnPolicyReturnPolicyDirect);

	var _commonProviderDirectivesPasswordPasswordDirect = __webpack_require__(27);

	var _commonProviderDirectivesPasswordPasswordDirect2 = _interopRequireDefault(_commonProviderDirectivesPasswordPasswordDirect);

	// product directive

	var _commonProductDirectivesProviderSideBarProviderSideBarDirect = __webpack_require__(28);

	var _commonProductDirectivesProviderSideBarProviderSideBarDirect2 = _interopRequireDefault(_commonProductDirectivesProviderSideBarProviderSideBarDirect);

	var _commonProductDirectivesTextFieldTextFieldDirect = __webpack_require__(29);

	var _commonProductDirectivesTextFieldTextFieldDirect2 = _interopRequireDefault(_commonProductDirectivesTextFieldTextFieldDirect);

	// controller

	var _authHomeHomeCtrl = __webpack_require__(30);

	var _authHomeHomeCtrl2 = _interopRequireDefault(_authHomeHomeCtrl);

	var _commonProviderAddProviderCtrl = __webpack_require__(31);

	var _commonProviderAddProviderCtrl2 = _interopRequireDefault(_commonProviderAddProviderCtrl);

	var _commonProviderShowProviderCtrl = __webpack_require__(32);

	var _commonProviderShowProviderCtrl2 = _interopRequireDefault(_commonProviderShowProviderCtrl);

	var _commonProviderShowProviderDetailCtrl = __webpack_require__(33);

	var _commonProviderShowProviderDetailCtrl2 = _interopRequireDefault(_commonProviderShowProviderDetailCtrl);

	var _commonAccountMyAccountCtrl = __webpack_require__(34);

	var _commonAccountMyAccountCtrl2 = _interopRequireDefault(_commonAccountMyAccountCtrl);

	var _commonProductAddProductCtrl = __webpack_require__(35);

	var _commonProductAddProductCtrl2 = _interopRequireDefault(_commonProductAddProductCtrl);

	var _commonProductDirectivesProviderSideBarContactModalCtrlJs = __webpack_require__(36);

	var _commonProductDirectivesProviderSideBarContactModalCtrlJs2 = _interopRequireDefault(_commonProductDirectivesProviderSideBarContactModalCtrlJs);

	var _commonProductShowProductCtrlJs = __webpack_require__(37);

	var _commonProductShowProductCtrlJs2 = _interopRequireDefault(_commonProductShowProductCtrlJs);

	var _commonProductShowProductDetailCtrlJs = __webpack_require__(38);

	var _commonProductShowProductDetailCtrlJs2 = _interopRequireDefault(_commonProductShowProductDetailCtrlJs);

	var _commonProductDirectivesItineraryAddCtrlJs = __webpack_require__(39);

	var _commonProductDirectivesItineraryAddCtrlJs2 = _interopRequireDefault(_commonProductDirectivesItineraryAddCtrlJs);

	var _authHomeLoginCtrl = __webpack_require__(40);

	var _authHomeLoginCtrl2 = _interopRequireDefault(_authHomeLoginCtrl);

	var _commonSaleSaleCtrl = __webpack_require__(41);

	var _commonSaleSaleCtrl2 = _interopRequireDefault(_commonSaleSaleCtrl);

	var _commonSaleSearchSearchCtrl = __webpack_require__(42);

	var _commonSaleSearchSearchCtrl2 = _interopRequireDefault(_commonSaleSearchSearchCtrl);

	var _commonSaleSearchDirectivesFilterFilterCtrl = __webpack_require__(43);

	var _commonSaleSearchDirectivesFilterFilterCtrl2 = _interopRequireDefault(_commonSaleSearchDirectivesFilterFilterCtrl);

	var _commonProductShowItineraryCtrl = __webpack_require__(44);

	var _commonProductShowItineraryCtrl2 = _interopRequireDefault(_commonProductShowItineraryCtrl);

	var _commonSaleSearchDirectivesSigninSigninCtrl = __webpack_require__(45);

	var _commonSaleSearchDirectivesSigninSigninCtrl2 = _interopRequireDefault(_commonSaleSearchDirectivesSigninSigninCtrl);

	var _commonSaleCustomerShowCustomerCtrl = __webpack_require__(46);

	var _commonSaleCustomerShowCustomerCtrl2 = _interopRequireDefault(_commonSaleCustomerShowCustomerCtrl);

	var _commonProductDirectivesProviderSideBarSearchAdvanceProviderSearchCtrlJs = __webpack_require__(47);

	var _commonProductDirectivesProviderSideBarSearchAdvanceProviderSearchCtrlJs2 = _interopRequireDefault(_commonProductDirectivesProviderSideBarSearchAdvanceProviderSearchCtrlJs);

	var _commonSaleSearchShowProductCtrlJs = __webpack_require__(48);

	var _commonSaleSearchShowProductCtrlJs2 = _interopRequireDefault(_commonSaleSearchShowProductCtrlJs);

	var _commonSaleSearchDirectivesReserveReserveFormCtrlJs = __webpack_require__(49);

	var _commonSaleSearchDirectivesReserveReserveFormCtrlJs2 = _interopRequireDefault(_commonSaleSearchDirectivesReserveReserveFormCtrlJs);

	var _commonSaleOrderAddOrderCtrlJs = __webpack_require__(50);

	var _commonSaleOrderAddOrderCtrlJs2 = _interopRequireDefault(_commonSaleOrderAddOrderCtrlJs);

	var _commonSaleOrderShowOrderCtrlJs = __webpack_require__(51);

	var _commonSaleOrderShowOrderCtrlJs2 = _interopRequireDefault(_commonSaleOrderShowOrderCtrlJs);

	var _commonSaleOrderShowOrderDetailCtrlJs = __webpack_require__(52);

	var _commonSaleOrderShowOrderDetailCtrlJs2 = _interopRequireDefault(_commonSaleOrderShowOrderDetailCtrlJs);

	var _commonSaleAccountAccountCtrlJs = __webpack_require__(53);

	var _commonSaleAccountAccountCtrlJs2 = _interopRequireDefault(_commonSaleAccountAccountCtrlJs);

	var _commonDirectivesFormFormCtrlJs = __webpack_require__(54);

	var _commonDirectivesFormFormCtrlJs2 = _interopRequireDefault(_commonDirectivesFormFormCtrlJs);

	var _commonSaleOrderApplyRevokeCtrlJs = __webpack_require__(55);

	var _commonSaleOrderApplyRevokeCtrlJs2 = _interopRequireDefault(_commonSaleOrderApplyRevokeCtrlJs);

	// factory

	var _commonAuthFac = __webpack_require__(56);

	var _commonAuthFac2 = _interopRequireDefault(_commonAuthFac);

	var _commonFileFac = __webpack_require__(57);

	var _commonFileFac2 = _interopRequireDefault(_commonFileFac);

	var _commonProviderFac = __webpack_require__(58);

	var _commonProviderFac2 = _interopRequireDefault(_commonProviderFac);

	var _commonProductFac = __webpack_require__(59);

	var _commonProductFac2 = _interopRequireDefault(_commonProductFac);

	var _commonItineraryFac = __webpack_require__(60);

	var _commonItineraryFac2 = _interopRequireDefault(_commonItineraryFac);

	var _commonCustomerFac = __webpack_require__(61);

	var _commonCustomerFac2 = _interopRequireDefault(_commonCustomerFac);

	var _commonUserFac = __webpack_require__(62);

	var _commonUserFac2 = _interopRequireDefault(_commonUserFac);

	var _commonOrderFac = __webpack_require__(63);

	var _commonOrderFac2 = _interopRequireDefault(_commonOrderFac);

	var _testTestFac = __webpack_require__(64);

	var _testTestFac2 = _interopRequireDefault(_testTestFac);

	var _commonErrorFac = __webpack_require__(65);

	var _commonErrorFac2 = _interopRequireDefault(_commonErrorFac);

	// Testing util

	var _testAddFakeDataFac = __webpack_require__(66);

	var _testAddFakeDataFac2 = _interopRequireDefault(_testAddFakeDataFac);

	var _testTestCtrl = __webpack_require__(67);

	var _testTestCtrl2 = _interopRequireDefault(_testTestCtrl);

	var _testIntegrationAdminFlow = __webpack_require__(68);

	var _testIntegrationAdminFlow2 = _interopRequireDefault(_testIntegrationAdminFlow);

	angular.module('webProject', ['ngAnimate', 'ngCookies', 'ui.router', 'ngMaterial', 'base64', 'mgcrea.ngStrap', 'ngFileUpload', 'angular-md5', 'ui.bootstrap', 'monospaced.elastic', 'angucomplete-alt', 'materialCalendar', 'oitozero.ngSweetAlert', 'monospaced.elastic'])
	// 配置全局常量
	.constant('lcConfig', _configConfig2['default']).constant('moment', window.moment).constant('cityData', _configCity2['default']).constant('multiChoiceConfig', _configMultiChoiceConfig2['default']).constant('calendarConfig', _configCalendarConfig2['default']).constant('dispatcherConfig', _configDispatcherConfig2['default']).constant('menuConfig', _configMenuConfig2['default']).constant('formConfig', _configFormConfig2['default'])

	// 基础配置
	.config(_configHttp2['default']).config(_configRoute2['default'])
	// 自动执行
	.run(_configAuth2['default'])
	// services 初始化
	.service('commonSer', _commonCommonSer2['default']).service('helloSer', _authHelloSer2['default'])
	// directive 初始化
	// common directive 初始化
	.directive('multiChoice', _commonDirectivesMultiChoiceMultiChoiceDirect2['default']).directive('calendar', _commonDirectivesCalendarCalendarDirect2['default']).directive('textField', _commonDirectivesTextFieldTextFieldDirect2['default']).directive('counter', _commonDirectivesCounterCounterDirect2['default']).directive('template', _commonDirectivesTemplateTemplateDirect2['default']).directive('inputForm', _commonDirectivesInputFormInputFormDirect2['default']).directive('lcHeader', _commonHeaderHeaderDirect2['default']).directive('pageControl', _commonDirectivesPagePageDirect2['default']).directive('address', _commonProviderDirectivesAddressAddressDirect2['default']).directive('providerMenu', _commonProviderDirectivesMenuMenuDirect2['default']).directive('returnPolicy', _commonProviderDirectivesReturnPolicyReturnPolicyDirect2['default']).directive('password', _commonProviderDirectivesPasswordPasswordDirect2['default'])
	// product directive 初始化
	.directive('providerSideBar', _commonProductDirectivesProviderSideBarProviderSideBarDirect2['default']).directive('productTextfield', _commonProductDirectivesTextFieldTextFieldDirect2['default'])

	// controller 初始化
	.controller('homeCtrl', _authHomeHomeCtrl2['default']).controller('addProviderCtrl', _commonProviderAddProviderCtrl2['default']).controller('showProviderCtrl', _commonProviderShowProviderCtrl2['default']).controller('addProductCtrl', _commonProductAddProductCtrl2['default']).controller('modalCtrl', _commonProductDirectivesProviderSideBarContactModalCtrlJs2['default']).controller('showProductCtrl', _commonProductShowProductCtrlJs2['default']).controller('showProductDetailCtrl', _commonProductShowProductDetailCtrlJs2['default']).controller('addItineraryCtrl', _commonProductDirectivesItineraryAddCtrlJs2['default']).controller('loginCtrl', _authHomeLoginCtrl2['default']).controller('saleCtrl', _commonSaleSaleCtrl2['default']).controller('searchCtrl', _commonSaleSearchSearchCtrl2['default']).controller('filterCtrl', _commonSaleSearchDirectivesFilterFilterCtrl2['default']).controller('showItineraryCtrl', _commonProductShowItineraryCtrl2['default']).controller('signinCtrl', _commonSaleSearchDirectivesSigninSigninCtrl2['default']).controller('showCustomerCtrl', _commonSaleCustomerShowCustomerCtrl2['default']).controller('providerSearchCtrl', _commonProductDirectivesProviderSideBarSearchAdvanceProviderSearchCtrlJs2['default']).controller('showProviderDetailCtrl', _commonProviderShowProviderDetailCtrl2['default']).controller('myAccountCtrl', _commonAccountMyAccountCtrl2['default']).controller('showProductSaleCtrl', _commonSaleSearchShowProductCtrlJs2['default']).controller('reserveFormCtrl', _commonSaleSearchDirectivesReserveReserveFormCtrlJs2['default']).controller('addOrderCtrl', _commonSaleOrderAddOrderCtrlJs2['default']).controller('showOrderCtrl', _commonSaleOrderShowOrderCtrlJs2['default']).controller('showOrderDetailCtrl', _commonSaleOrderShowOrderDetailCtrlJs2['default']).controller('formCtrl', _commonDirectivesFormFormCtrlJs2['default']).controller('saleAccountCtrl', _commonSaleAccountAccountCtrlJs2['default']).controller('applyRevokeCtrl', _commonSaleOrderApplyRevokeCtrlJs2['default'])

	// factory
	.factory('authFac', _commonAuthFac2['default']).factory('fileFac', _commonFileFac2['default']).factory('providerFac', _commonProviderFac2['default']).factory('productFac', _commonProductFac2['default']).factory('itineraryFac', _commonItineraryFac2['default']).factory('customerFac', _commonCustomerFac2['default']).factory('userFac', _commonUserFac2['default']).factory('orderFac', _commonOrderFac2['default']).factory('errorFac', _commonErrorFac2['default'])

	// testing
	.factory('fakeDataFac', _testAddFakeDataFac2['default']).factory('testFac', _testTestFac2['default']).controller('testCtrl', _testTestCtrl2['default']).controller('integrationTest', _testIntegrationAdminFlow2['default']);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var config = {

	  // http 请求超时时间
	  httpTimeout: 20000,

	  // Api 的请求地址
	  apiHost: 'http://localhost:3000',

	  // 运行环境的 host
	  host: 'http://localhost:9000',

	  userLevel: {
	    UNKNOWN: -1,
	    ADMIN: 0,
	    SALE: 1,
	    PROVIDER: 2,
	    ORGANIZER: 3
	  },

	  CUSTOMER_STATE: {
	    UNPAID: 0,
	    PAID: 1
	  },

	  // 产品情况
	  productStatus: {
	    UNPOSTED: 1,
	    UNVERIFIED: 2,
	    VERIFIED: 3
	  },

	  orderStatus: {
	    UNPAID_UNVERIFIED: 1,
	    UNPAID_VERIFIED: 2,
	    PAID: 3,
	    PAID_VERIFIED: 8,
	    FINISHED: 4,
	    REVOKE: 5,
	    CANCEL: 6,
	    CANCELLED: 7
	  }
	};

	// 判断是否为开发环境
	var host = window.location.host;
	if ('http://' + host !== config.host) {
	  config.apiHost = 'http://' + host;
	}

	exports['default'] = config;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$httpProvider", "lcConfig", "$sceDelegateProvider", function ($httpProvider, lcConfig, $sceDelegateProvider) {
	  'ngInject';

	  var httpTimeout = lcConfig.httpTimeout;
	  var apiHost = lcConfig.apiHost;

	  $httpProvider.defaults.withCredentials = true;
	  // delete 可以携带 josn 数据。
	  $httpProvider.defaults.headers['delete'] = {
	    'Content-Type': 'application/json;charset=utf-8'
	  };

	  $sceDelegateProvider.resourceUrlWhitelist([
	  // Allow same origin resource loads.
	  'self', 'http://localhost:3000/**']);

	  // 全局 $http 请求配置。
	  $httpProvider.interceptors.push([function () {
	    return {
	      request: function request(config) {
	        config.timeout = httpTimeout;

	        // 当 url 中没有 http 或者 https 的时候，自动拼接默认的 apiHost
	        if (!/^[http|https]/.test(config.url) && !/\.html$/.test(config.url)) {
	          config.url = apiHost + config.url;
	        }
	        return config;
	      },
	      response: function response(_response) {
	        if (/\.html/.test(_response.config.url)) {
	          return _response;
	        } else {
	          return _response.data;
	        }
	      },
	      responseError: function responseError(response) {
	        return Promise.reject(response.data);
	      }
	    };
	  }]);
	}];

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$stateProvider", "lcConfig", "$urlRouterProvider", "$locationProvider", function ($stateProvider, lcConfig, $urlRouterProvider, $locationProvider) {
	  'ngInject';

	  // try to figure out how to use a constant value
	  $locationProvider.html5Mode(true);

	  $stateProvider.state('test', {
	    url: '/test',
	    templateUrl: 'app/test/test.html',
	    controller: 'integrationTest',
	    authenticate: undefined
	  }).state('test.integration', {
	    url: '/test/integration',
	    templateUrl: 'app/test/test.html',
	    controller: 'integrationTest',
	    authenticate: undefined
	  });

	  $stateProvider.state('login', {
	    url: '/login',
	    templateUrl: 'app/auth/home/login.html',
	    controller: 'loginCtrl'
	  });
	  $stateProvider.state('sale', {
	    url: '/sale',
	    templateUrl: 'app/common/sale/index.html',
	    controller: 'saleCtrl',
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.account', {
	    url: '/account',
	    templateUrl: 'app/common/sale/account/account.html',
	    controller: 'saleAccountCtrl',
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.search-product', {
	    url: '/search',
	    templateUrl: 'app/common/sale/search/search.html',
	    controller: 'searchCtrl',
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.show-product', {
	    url: '/show-product/:productId',
	    templateUrl: 'app/common/sale/search/show_product.html',
	    controller: 'showProductSaleCtrl'
	  }).state('sale.add-order', {
	    url: '/add-order/:productId',
	    templateUrl: 'app/common/sale/order/add_order.html',
	    controller: 'addOrderCtrl',
	    params: {
	      product: null,
	      reserve: null
	    },
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.show-order', {
	    url: '/show-order',
	    templateUrl: 'app/common/sale/order/show_order.html',
	    controller: 'showOrderCtrl',
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.show-order-detail', {
	    url: '/show-order-detail/:orderId',
	    templateUrl: 'app/common/sale/order/show_order_detail.html',
	    controller: 'showOrderDetailCtrl',
	    params: {
	      isEditing: false
	    },
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.show-itinerary', {
	    url: '/itineray/:productId',
	    templateUrl: 'app/common/product/itinerary.html',
	    controller: 'showItineraryCtrl',
	    authenticate: [lcConfig.userLevel.SALE]
	  }).state('sale.show-customers', {
	    url: '/customers',
	    templateUrl: 'app/common/sale/customer/show.html',
	    controller: 'showCustomerCtrl',
	    authenticate: [lcConfig.userLevel.SALE]
	  });
	  $stateProvider.state('home', {
	    url: '/admin',
	    templateUrl: 'app/auth/home/home.html',
	    controller: 'homeCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.add-provider-account', {
	    url: '/add-provider-account',
	    templateUrl: 'app/common/provider/add_account.html',
	    controller: 'loginCtrl',
	    authenticate: [lcConfig.userLevel.ADMIN]
	  }).state('home.add-provider', {
	    url: '/add-provider',
	    templateUrl: 'app/common/provider/add.html',
	    controller: 'addProviderCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER],
	    params: {
	      provider: null
	    }
	  }).state('home.show-orders', {
	    url: '/show-order',
	    templateUrl: 'app/common/sale/order/show_order.html',
	    controller: 'showOrderCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.show-order-detail', {
	    url: '/show-order-detail/:orderId',
	    templateUrl: 'app/common/sale/order/show_order_detail.html',
	    controller: 'showOrderDetailCtrl',
	    authenticate: [lcConfig.userLevel.SALE, lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.show-provider-detail', {
	    url: '/show-provider/:providerId',
	    templateUrl: 'app/common/provider/add.html',
	    controller: 'showProviderDetailCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.add-product', {
	    url: '/add-product',
	    templateUrl: 'app/common/product/add.html',
	    controller: 'addProductCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER],
	    params: {
	      product: null
	    }
	  }).state('home.edit-product', {
	    url: '/edit-product/:productId',
	    templateUrl: 'app/common/product/add.html',
	    controller: 'addProductCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.show-products', {
	    url: '/show-products',
	    templateUrl: 'app/common/product/show.html',
	    controller: 'showProductCtrl',
	    authenticate: [lcConfig.userLevel.ADMIN, lcConfig.userLevel.ORGANIZER]
	  }).state('home.show-providers', {
	    url: '/show-providers',
	    templateUrl: 'app/common/provider/show.html',
	    controller: 'showProviderCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.show-product-detail', {
	    url: '/show-products/:productId',
	    templateUrl: 'app/common/product/add.html',
	    controller: 'showProductDetailCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  }).state('home.my-account', {
	    url: '/my-account',
	    templateUrl: 'app/common/account/account.html',
	    controller: 'myAccountCtrl',
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER]
	  });

	  $urlRouterProvider.otherwise('/login');
	}];

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	// 多语言包
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _zhCn = __webpack_require__(5);

	var _zhCn2 = _interopRequireDefault(_zhCn);

	var _en = __webpack_require__(6);

	var _en2 = _interopRequireDefault(_en);

	var langPackage = {
	  zhCn: _zhCn2['default'],
	  en: _en2['default']
	};

	// 默认语言（其他语言缺失的部分会用默认语言代替）
	var defaultLang = 'zhCn';

	var config = function config($rootScope, $window) {
	  'ngInject';

	  $rootScope.i18n = langPackage[defaultLang];
	  $rootScope.lang = defaultLang;
	  $rootScope.$watch('lang', function () {
	    $window.$.extend($rootScope.i18n, langPackage[$rootScope.lang]);
	  });
	};
	config.$inject = ["$rootScope", "$window"];

	exports['default'] = config;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	// Chinese
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  title: '标题',
	  name: '姓名',
	  nickname: '昵称',
	  username: '用户名',
	  email: '邮箱',
	  admin: '负责',
	  op: '操作',
	  kind: '类别',
	  add: '添加',
	  number: '编号',
	  status: '状态',
	  updateTime: '更新时间',
	  'null': '空',
	  leftParenthesis: '（',
	  rightParenthesis: '）',
	  btn: {
	    success: '完成',
	    submit: '提交',
	    edit: '修改',
	    'delete': '删除'
	  },
	  auth: {
	    register: '注册',
	    login: '登录'
	  },
	  header: {
	    setting: '设置',
	    logout: '登出',
	    search: '搜索问题试试',
	    ask: '我要提问'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  auth: {
	    loginBtn: 'Login By LeanCloud'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var authenticate = function authenticate(authFac, $location, $rootScope, $log, lcConfig, $state, $window, $cookies) {
	  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
	    // If we do not need authentication.
	    $log.log(toState.authenticate);
	    if (toState.authenticate === undefined) {
	      $log.log("No need authenticate");
	      return;
	    }

	    if (authFac.getUserLevel() === lcConfig.userLevel.ADMIN) {
	      $log.log("admin");
	      return;
	    }

	    if (!toState.authenticate.includes(authFac.getUserLevel())) {
	      $log.log("level not allowed");
	      // TODO: Show alert.
	      $location.path("/login");
	      return;
	    }
	    $log.log("authenticate success");
	  });
	};

	exports["default"] = authenticate;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports, "__esModule", {value:true});var city={"province":[{"name":"北京市", "zip":"110000", "city":[{"name":"市辖区", "zip":"110100", "county":[{"name":"东城区", "zip":"110101"}, {"name":"西城区", "zip":"110102"}, {"name":"朝阳区", "zip":"110105"}, {"name":"丰台区", "zip":"110106"}, {"name":"石景山区", "zip":"110107"}, {"name":"海淀区", "zip":"110108"}, {"name":"门头沟区", "zip":"110109"}, {"name":"房山区", "zip":"110111"}, {"name":"通州区", "zip":"110112"}, {"name":"顺义区", "zip":"110113"}, {"name":"昌平区", "zip":"110114"}, {"name":"大兴区", "zip":"110115"}, {"name":"怀柔区", "zip":"110116"}, {"name":"平谷区", "zip":"110117"}]}, {"name":"县", "zip":"110200", "county":[{"name":"密云县", "zip":"110228"}, {"name":"延庆县", "zip":"110229"}]}]}, {"name":"天津市", "zip":"120000", "city":[{"name":"市辖区", "zip":"120100", "county":[{"name":"和平区", "zip":"120101"}, {"name":"河东区", "zip":"120102"}, {"name":"河西区", "zip":"120103"}, {"name":"南开区", "zip":"120104"}, {"name":"河北区", "zip":"120105"}, {"name":"红桥区", "zip":"120106"}, {"name":"东丽区", "zip":"120110"}, {"name":"西青区", "zip":"120111"}, {"name":"津南区", "zip":"120112"}, {"name":"北辰区", "zip":"120113"}, {"name":"武清区", "zip":"120114"}, {"name":"宝坻区", "zip":"120115"}, {"name":"滨海新区", "zip":"120116"}]}, {"name":"县", "zip":"120200", "county":[{"name":"宁河县", "zip":"120221"}, {"name":"静海县", "zip":"120223"}, {"name":"蓟县", "zip":"120225"}]}]}, {"name":"河北省", "zip":"130000", "city":[{"name":"石家庄市", "zip":"130100", "county":[{"name":"市辖区", "zip":"130101"}, {"name":"长安区", "zip":"130102"}, {"name":"桥东区", "zip":"130103"}, {"name":"桥西区", "zip":"130104"}, {"name":"新华区", "zip":"130105"}, {"name":"井陉矿区", "zip":"130107"}, {"name":"裕华区", "zip":"130108"}, {"name":"井陉县", "zip":"130121"}, {"name":"正定县", "zip":"130123"}, {"name":"栾城县", "zip":"130124"}, {"name":"行唐县", "zip":"130125"}, {"name":"灵寿县", "zip":"130126"}, {"name":"高邑县", "zip":"130127"}, {"name":"深泽县", "zip":"130128"}, {"name":"赞皇县", "zip":"130129"}, {"name":"无极县", "zip":"130130"}, {"name":"平山县", "zip":"130131"}, {"name":"元氏县", "zip":"130132"}, {"name":"赵县", "zip":"130133"}, {"name":"辛集市", "zip":"130181"}, {"name":"藁城市", "zip":"130182"}, {"name":"晋州市", "zip":"130183"}, {"name":"新乐市", "zip":"130184"}, {"name":"鹿泉市", "zip":"130185"}]}, {"name":"唐山市", "zip":"130200", "county":[{"name":"市辖区", "zip":"130201"}, {"name":"路南区", "zip":"130202"}, {"name":"路北区", "zip":"130203"}, {"name":"古冶区", "zip":"130204"}, {"name":"开平区", "zip":"130205"}, {"name":"丰南区", "zip":"130207"}, {"name":"丰润区", "zip":"130208"}, {"name":"曹妃甸区", "zip":"130209"}, {"name":"滦县", "zip":"130223"}, {"name":"滦南县", "zip":"130224"}, {"name":"乐亭县", "zip":"130225"}, {"name":"迁西县", "zip":"130227"}, {"name":"玉田县", "zip":"130229"}, {"name":"遵化市", "zip":"130281"}, {"name":"迁安市", "zip":"130283"}]}, {"name":"秦皇岛市", "zip":"130300", "county":[{"name":"市辖区", "zip":"130301"}, {"name":"海港区", "zip":"130302"}, {"name":"山海关区", "zip":"130303"}, {"name":"北戴河区", "zip":"130304"}, {"name":"青龙满族自治县", "zip":"130321"}, {"name":"昌黎县", "zip":"130322"}, {"name":"抚宁县", "zip":"130323"}, {"name":"卢龙县", "zip":"130324"}]}, {"name":"邯郸市", "zip":"130400", "county":[{"name":"市辖区", "zip":"130401"}, {"name":"邯山区", "zip":"130402"}, {"name":"丛台区", "zip":"130403"}, {"name":"复兴区", "zip":"130404"}, {"name":"峰峰矿区", "zip":"130406"}, {"name":"邯郸县", "zip":"130421"}, {"name":"临漳县", "zip":"130423"}, {"name":"成安县", "zip":"130424"}, {"name":"大名县", "zip":"130425"}, {"name":"涉县", "zip":"130426"}, {"name":"磁县", "zip":"130427"}, {"name":"肥乡县", "zip":"130428"}, {"name":"永年县", "zip":"130429"}, {"name":"邱县", "zip":"130430"}, {"name":"鸡泽县", "zip":"130431"}, {"name":"广平县", "zip":"130432"}, {"name":"馆陶县", "zip":"130433"}, {"name":"魏县", "zip":"130434"}, {"name":"曲周县", "zip":"130435"}, {"name":"武安市", "zip":"130481"}]}, {"name":"邢台市", "zip":"130500", "county":[{"name":"市辖区", "zip":"130501"}, {"name":"桥东区", "zip":"130502"}, {"name":"桥西区", "zip":"130503"}, {"name":"邢台县", "zip":"130521"}, {"name":"临城县", "zip":"130522"}, {"name":"内丘县", "zip":"130523"}, {"name":"柏乡县", "zip":"130524"}, {"name":"隆尧县", "zip":"130525"}, {"name":"任县", "zip":"130526"}, {"name":"南和县", "zip":"130527"}, {"name":"宁晋县", "zip":"130528"}, {"name":"巨鹿县", "zip":"130529"}, {"name":"新河县", "zip":"130530"}, {"name":"广宗县", "zip":"130531"}, {"name":"平乡县", "zip":"130532"}, {"name":"威县", "zip":"130533"}, {"name":"清河县", "zip":"130534"}, {"name":"临西县", "zip":"130535"}, {"name":"南宫市", "zip":"130581"}, {"name":"沙河市", "zip":"130582"}]}, {"name":"保定市", "zip":"130600", "county":[{"name":"市辖区", "zip":"130601"}, {"name":"新市区", "zip":"130602"}, {"name":"北市区", "zip":"130603"}, {"name":"南市区", "zip":"130604"}, {"name":"满城县", "zip":"130621"}, {"name":"清苑县", "zip":"130622"}, {"name":"涞水县", "zip":"130623"}, {"name":"阜平县", "zip":"130624"}, {"name":"徐水县", "zip":"130625"}, {"name":"定兴县", "zip":"130626"}, {"name":"唐县", "zip":"130627"}, {"name":"高阳县", "zip":"130628"}, {"name":"容城县", "zip":"130629"}, {"name":"涞源县", "zip":"130630"}, {"name":"望都县", "zip":"130631"}, {"name":"安新县", "zip":"130632"}, {"name":"易县", "zip":"130633"}, {"name":"曲阳县", "zip":"130634"}, {"name":"蠡县", "zip":"130635"}, {"name":"顺平县", "zip":"130636"}, {"name":"博野县", "zip":"130637"}, {"name":"雄县", "zip":"130638"}, {"name":"涿州市", "zip":"130681"}, {"name":"定州市", "zip":"130682"}, {"name":"安国市", "zip":"130683"}, {"name":"高碑店市", "zip":"130684"}]}, {"name":"张家口市", "zip":"130700", "county":[{"name":"市辖区", "zip":"130701"}, {"name":"桥东区", "zip":"130702"}, {"name":"桥西区", "zip":"130703"}, {"name":"宣化区", "zip":"130705"}, {"name":"下花园区", "zip":"130706"}, {"name":"宣化县", "zip":"130721"}, {"name":"张北县", "zip":"130722"}, {"name":"康保县", "zip":"130723"}, {"name":"沽源县", "zip":"130724"}, {"name":"尚义县", "zip":"130725"}, {"name":"蔚县", "zip":"130726"}, {"name":"阳原县", "zip":"130727"}, {"name":"怀安县", "zip":"130728"}, {"name":"万全县", "zip":"130729"}, {"name":"怀来县", "zip":"130730"}, {"name":"涿鹿县", "zip":"130731"}, {"name":"赤城县", "zip":"130732"}, {"name":"崇礼县", "zip":"130733"}]}, {"name":"承德市", "zip":"130800", "county":[{"name":"市辖区", "zip":"130801"}, {"name":"双桥区", "zip":"130802"}, {"name":"双滦区", "zip":"130803"}, {"name":"鹰手营子矿区", "zip":"130804"}, {"name":"承德县", "zip":"130821"}, {"name":"兴隆县", "zip":"130822"}, {"name":"平泉县", "zip":"130823"}, {"name":"滦平县", "zip":"130824"}, {"name":"隆化县", "zip":"130825"}, {"name":"丰宁满族自治县", "zip":"130826"}, {"name":"宽城满族自治县", "zip":"130827"}, {"name":"围场满族蒙古族自治县", "zip":"130828"}]}, {"name":"沧州市", "zip":"130900", "county":[{"name":"市辖区", "zip":"130901"}, {"name":"新华区", "zip":"130902"}, {"name":"运河区", "zip":"130903"}, {"name":"沧县", "zip":"130921"}, {"name":"青县", "zip":"130922"}, {"name":"东光县", "zip":"130923"}, {"name":"海兴县", "zip":"130924"}, {"name":"盐山县", "zip":"130925"}, {"name":"肃宁县", "zip":"130926"}, {"name":"南皮县", "zip":"130927"}, {"name":"吴桥县", "zip":"130928"}, {"name":"献县", "zip":"130929"}, {"name":"孟村回族自治县", "zip":"130930"}, {"name":"泊头市", "zip":"130981"}, {"name":"任丘市", "zip":"130982"}, {"name":"黄骅市", "zip":"130983"}, {"name":"河间市", "zip":"130984"}]}, {"name":"廊坊市", "zip":"131000", "county":[{"name":"市辖区", "zip":"131001"}, {"name":"安次区", "zip":"131002"}, {"name":"广阳区", "zip":"131003"}, {"name":"固安县", "zip":"131022"}, {"name":"永清县", "zip":"131023"}, {"name":"香河县", "zip":"131024"}, {"name":"大城县", "zip":"131025"}, {"name":"文安县", "zip":"131026"}, {"name":"大厂回族自治县", "zip":"131028"}, {"name":"霸州市", "zip":"131081"}, {"name":"三河市", "zip":"131082"}]}, {"name":"衡水市", "zip":"131100", "county":[{"name":"市辖区", "zip":"131101"}, {"name":"桃城区", "zip":"131102"}, {"name":"枣强县", "zip":"131121"}, {"name":"武邑县", "zip":"131122"}, {"name":"武强县", "zip":"131123"}, {"name":"饶阳县", "zip":"131124"}, {"name":"安平县", "zip":"131125"}, {"name":"故城县", "zip":"131126"}, {"name":"景县", "zip":"131127"}, {"name":"阜城县", "zip":"131128"}, {"name":"冀州市", "zip":"131181"}, {"name":"深州市", "zip":"131182"}]}]}, {"name":"山西省", "zip":"140000", "city":[{"name":"太原市", "zip":"140100", "county":[{"name":"市辖区", "zip":"140101"}, {"name":"小店区", "zip":"140105"}, {"name":"迎泽区", "zip":"140106"}, {"name":"杏花岭区", "zip":"140107"}, {"name":"尖草坪区", "zip":"140108"}, {"name":"万柏林区", "zip":"140109"}, {"name":"晋源区", "zip":"140110"}, {"name":"清徐县", "zip":"140121"}, {"name":"阳曲县", "zip":"140122"}, {"name":"娄烦县", "zip":"140123"}, {"name":"古交市", "zip":"140181"}]}, {"name":"大同市", "zip":"140200", "county":[{"name":"市辖区", "zip":"140201"}, {"name":"城区", "zip":"140202"}, {"name":"矿区", "zip":"140203"}, {"name":"南郊区", "zip":"140211"}, {"name":"新荣区", "zip":"140212"}, {"name":"阳高县", "zip":"140221"}, {"name":"天镇县", "zip":"140222"}, {"name":"广灵县", "zip":"140223"}, {"name":"灵丘县", "zip":"140224"}, {"name":"浑源县", "zip":"140225"}, {"name":"左云县", "zip":"140226"}, {"name":"大同县", "zip":"140227"}]}, {"name":"阳泉市", "zip":"140300", "county":[{"name":"市辖区", "zip":"140301"}, {"name":"城区", "zip":"140302"}, {"name":"矿区", "zip":"140303"}, {"name":"郊区", "zip":"140311"}, {"name":"平定县", "zip":"140321"}, {"name":"盂县", "zip":"140322"}]}, {"name":"长治市", "zip":"140400", "county":[{"name":"市辖区", "zip":"140401"}, {"name":"城区", "zip":"140402"}, {"name":"郊区", "zip":"140411"}, {"name":"长治县", "zip":"140421"}, {"name":"襄垣县", "zip":"140423"}, {"name":"屯留县", "zip":"140424"}, {"name":"平顺县", "zip":"140425"}, {"name":"黎城县", "zip":"140426"}, {"name":"壶关县", "zip":"140427"}, {"name":"长子县", "zip":"140428"}, {"name":"武乡县", "zip":"140429"}, {"name":"沁县", "zip":"140430"}, {"name":"沁源县", "zip":"140431"}, {"name":"潞城市", "zip":"140481"}]}, {"name":"晋城市", "zip":"140500", "county":[{"name":"晋城市市辖区", "zip":"140501"}, {"name":"城区", "zip":"140502"}, {"name":"沁水县", "zip":"140521"}, {"name":"阳城县", "zip":"140522"}, {"name":"陵川县", "zip":"140524"}, {"name":"泽州县", "zip":"140525"}, {"name":"高平市", "zip":"140581"}]}, {"name":"朔州市", "zip":"140600", "county":[{"name":"市辖区", "zip":"140601"}, {"name":"朔城区", "zip":"140602"}, {"name":"平鲁区", "zip":"140603"}, {"name":"山阴县", "zip":"140621"}, {"name":"应县", "zip":"140622"}, {"name":"右玉县", "zip":"140623"}, {"name":"怀仁县", "zip":"140624"}]}, {"name":"晋中市", "zip":"140700", "county":[{"name":"市辖区", "zip":"140701"}, {"name":"榆次区", "zip":"140702"}, {"name":"榆社县", "zip":"140721"}, {"name":"左权县", "zip":"140722"}, {"name":"和顺县", "zip":"140723"}, {"name":"昔阳县", "zip":"140724"}, {"name":"寿阳县", "zip":"140725"}, {"name":"太谷县", "zip":"140726"}, {"name":"祁县", "zip":"140727"}, {"name":"平遥县", "zip":"140728"}, {"name":"灵石县", "zip":"140729"}, {"name":"介休市", "zip":"140781"}]}, {"name":"运城市", "zip":"140800", "county":[{"name":"市辖区", "zip":"140801"}, {"name":"盐湖区", "zip":"140802"}, {"name":"临猗县", "zip":"140821"}, {"name":"万荣县", "zip":"140822"}, {"name":"闻喜县", "zip":"140823"}, {"name":"稷山县", "zip":"140824"}, {"name":"新绛县", "zip":"140825"}, {"name":"绛县", "zip":"140826"}, {"name":"垣曲县", "zip":"140827"}, {"name":"夏县", "zip":"140828"}, {"name":"平陆县", "zip":"140829"}, {"name":"芮城县", "zip":"140830"}, {"name":"永济市", "zip":"140881"}, {"name":"河津市", "zip":"140882"}]}, {"name":"忻州市", "zip":"140900", "county":[{"name":"市辖区", "zip":"140901"}, {"name":"忻府区", "zip":"140902"}, {"name":"定襄县", "zip":"140921"}, {"name":"五台县", "zip":"140922"}, {"name":"代县", "zip":"140923"}, {"name":"繁峙县", "zip":"140924"}, {"name":"宁武县", "zip":"140925"}, {"name":"静乐县", "zip":"140926"}, {"name":"神池县", "zip":"140927"}, {"name":"五寨县", "zip":"140928"}, {"name":"岢岚县", "zip":"140929"}, {"name":"河曲县", "zip":"140930"}, {"name":"保德县", "zip":"140931"}, {"name":"偏关县", "zip":"140932"}, {"name":"原平市", "zip":"140981"}]}, {"name":"临汾市", "zip":"141000", "county":[{"name":"市辖区", "zip":"141001"}, {"name":"尧都区", "zip":"141002"}, {"name":"曲沃县", "zip":"141021"}, {"name":"翼城县", "zip":"141022"}, {"name":"襄汾县", "zip":"141023"}, {"name":"洪洞县", "zip":"141024"}, {"name":"古县", "zip":"141025"}, {"name":"安泽县", "zip":"141026"}, {"name":"浮山县", "zip":"141027"}, {"name":"吉县", "zip":"141028"}, {"name":"乡宁县", "zip":"141029"}, {"name":"大宁县", "zip":"141030"}, {"name":"隰县", "zip":"141031"}, {"name":"永和县", "zip":"141032"}, {"name":"蒲县", "zip":"141033"}, {"name":"汾西县", "zip":"141034"}, {"name":"侯马市", "zip":"141081"}, {"name":"霍州市", "zip":"141082"}]}, {"name":"吕梁市", "zip":"141100", "county":[{"name":"市辖区", "zip":"141101"}, {"name":"离石区", "zip":"141102"}, {"name":"文水县", "zip":"141121"}, {"name":"交城县", "zip":"141122"}, {"name":"兴县", "zip":"141123"}, {"name":"临县", "zip":"141124"}, {"name":"柳林县", "zip":"141125"}, {"name":"石楼县", "zip":"141126"}, {"name":"岚县", "zip":"141127"}, {"name":"方山县", "zip":"141128"}, {"name":"中阳县", "zip":"141129"}, {"name":"交口县", "zip":"141130"}, {"name":"孝义市", "zip":"141181"}, {"name":"汾阳市", "zip":"141182"}]}]}, {"name":"内蒙古自治区", "zip":"150000", "city":[{"name":"呼和浩特市", "zip":"150100", "county":[{"name":"市辖区", "zip":"150101"}, {"name":"新城区", "zip":"150102"}, {"name":"回民区", "zip":"150103"}, {"name":"玉泉区", "zip":"150104"}, {"name":"赛罕区", "zip":"150105"}, {"name":"土默特左旗", "zip":"150121"}, {"name":"托克托县", "zip":"150122"}, {"name":"和林格尔县", "zip":"150123"}, {"name":"清水河县", "zip":"150124"}, {"name":"武川县", "zip":"150125"}]}, {"name":"包头市", "zip":"150200", "county":[{"name":"市辖区", "zip":"150201"}, {"name":"东河区", "zip":"150202"}, {"name":"昆都仑区", "zip":"150203"}, {"name":"青山区", "zip":"150204"}, {"name":"石拐区", "zip":"150205"}, {"name":"白云鄂博矿区", "zip":"150206"}, {"name":"九原区", "zip":"150207"}, {"name":"土默特右旗", "zip":"150221"}, {"name":"固阳县", "zip":"150222"}, {"name":"达尔罕茂明安联合旗", "zip":"150223"}]}, {"name":"乌海市", "zip":"150300", "county":[{"name":"市辖区", "zip":"150301"}, {"name":"海勃湾区", "zip":"150302"}, {"name":"海南区", "zip":"150303"}, {"name":"乌达区", "zip":"150304"}]}, {"name":"赤峰市", "zip":"150400", "county":[{"name":"市辖区", "zip":"150401"}, {"name":"红山区", "zip":"150402"}, {"name":"元宝山区", "zip":"150403"}, {"name":"松山区", "zip":"150404"}, {"name":"阿鲁科尔沁旗", "zip":"150421"}, {"name":"巴林左旗", "zip":"150422"}, {"name":"巴林右旗", "zip":"150423"}, {"name":"林西县", "zip":"150424"}, {"name":"克什克腾旗", "zip":"150425"}, {"name":"翁牛特旗", "zip":"150426"}, {"name":"喀喇沁旗", "zip":"150428"}, {"name":"宁城县", "zip":"150429"}, {"name":"敖汉旗", "zip":"150430"}]}, {"name":"通辽市", "zip":"150500", "county":[{"name":"市辖区", "zip":"150501"}, {"name":"科尔沁区", "zip":"150502"}, {"name":"科尔沁左翼中旗", "zip":"150521"}, {"name":"科尔沁左翼后旗", "zip":"150522"}, {"name":"开鲁县", "zip":"150523"}, {"name":"库伦旗", "zip":"150524"}, {"name":"奈曼旗", "zip":"150525"}, {"name":"扎鲁特旗", "zip":"150526"}, {"name":"霍林郭勒市", "zip":"150581"}]}, {"name":"鄂尔多斯市", "zip":"150600", "county":[{"name":"市辖区", "zip":"150601"}, {"name":"东胜区", "zip":"150602"}, {"name":"达拉特旗", "zip":"150621"}, {"name":"准格尔旗", "zip":"150622"}, {"name":"鄂托克前旗", "zip":"150623"}, {"name":"鄂托克旗", "zip":"150624"}, {"name":"杭锦旗", "zip":"150625"}, {"name":"乌审旗", "zip":"150626"}, {"name":"伊金霍洛旗", "zip":"150627"}]}, {"name":"呼伦贝尔市", "zip":"150700", "county":[{"name":"市辖区", "zip":"150701"}, {"name":"海拉尔区", "zip":"150702"}, {"name":"阿荣旗", "zip":"150721"}, {"name":"莫力达瓦达斡尔族自治旗", "zip":"150722"}, {"name":"鄂伦春自治旗", "zip":"150723"}, {"name":"鄂温克族自治旗", "zip":"150724"}, {"name":"陈巴尔虎旗", "zip":"150725"}, {"name":"新巴尔虎左旗", "zip":"150726"}, {"name":"新巴尔虎右旗", "zip":"150727"}, {"name":"满洲里市", "zip":"150781"}, {"name":"牙克石市", "zip":"150782"}, {"name":"扎兰屯市", "zip":"150783"}, {"name":"额尔古纳市", "zip":"150784"}, {"name":"根河市", "zip":"150785"}]}, {"name":"巴彦淖尔市", "zip":"150800", "county":[{"name":"市辖区", "zip":"150801"}, {"name":"临河区", "zip":"150802"}, {"name":"五原县", "zip":"150821"}, {"name":"磴口县", "zip":"150822"}, {"name":"乌拉特前旗", "zip":"150823"}, {"name":"乌拉特中旗", "zip":"150824"}, {"name":"乌拉特后旗", "zip":"150825"}, {"name":"杭锦后旗", "zip":"150826"}]}, {"name":"乌兰察布市", "zip":"150900", "county":[{"name":"市辖区", "zip":"150901"}, {"name":"集宁区", "zip":"150902"}, {"name":"卓资县", "zip":"150921"}, {"name":"化德县", "zip":"150922"}, {"name":"商都县", "zip":"150923"}, {"name":"兴和县", "zip":"150924"}, {"name":"凉城县", "zip":"150925"}, {"name":"察哈尔右翼前旗", "zip":"150926"}, {"name":"察哈尔右翼中旗", "zip":"150927"}, {"name":"察哈尔右翼后旗", "zip":"150928"}, {"name":"四子王旗", "zip":"150929"}, {"name":"丰镇市", "zip":"150981"}]}, {"name":"兴安盟", "zip":"152200", "county":[{"name":"乌兰浩特市", "zip":"152201"}, {"name":"阿尔山市", "zip":"152202"}, {"name":"科尔沁右翼前旗", "zip":"152221"}, {"name":"科尔沁右翼中旗", "zip":"152222"}, {"name":"扎赉特旗", "zip":"152223"}, {"name":"突泉县", "zip":"152224"}]}, {"name":"锡林郭勒盟", "zip":"152500", "county":[{"name":"二连浩特市", "zip":"152501"}, {"name":"锡林浩特市", "zip":"152502"}, {"name":"阿巴嘎旗", "zip":"152522"}, {"name":"苏尼特左旗", "zip":"152523"}, {"name":"苏尼特右旗", "zip":"152524"}, {"name":"东乌珠穆沁旗", "zip":"152525"}, {"name":"西乌珠穆沁旗", "zip":"152526"}, {"name":"太仆寺旗", "zip":"152527"}, {"name":"镶黄旗", "zip":"152528"}, {"name":"正镶白旗", "zip":"152529"}, {"name":"正蓝旗", "zip":"152530"}, {"name":"多伦县", "zip":"152531"}]}, {"name":"阿拉善盟", "zip":"152900", "county":[{"name":"阿拉善左旗", "zip":"152921"}, {"name":"阿拉善右旗", "zip":"152922"}, {"name":"额济纳旗", "zip":"152923"}]}]}, {"name":"辽宁省", "zip":"210000", "city":[{"name":"沈阳市", "zip":"210100", "county":[{"name":"市辖区", "zip":"210101"}, {"name":"和平区", "zip":"210102"}, {"name":"沈河区", "zip":"210103"}, {"name":"大东区", "zip":"210104"}, {"name":"皇姑区", "zip":"210105"}, {"name":"铁西区", "zip":"210106"}, {"name":"苏家屯区", "zip":"210111"}, {"name":"东陵区", "zip":"210112"}, {"name":"沈北新区", "zip":"210113"}, {"name":"于洪区", "zip":"210114"}, {"name":"辽中县", "zip":"210122"}, {"name":"康平县", "zip":"210123"}, {"name":"法库县", "zip":"210124"}, {"name":"新民市", "zip":"210181"}]}, {"name":"大连市", "zip":"210200", "county":[{"name":"市辖区", "zip":"210201"}, {"name":"中山区", "zip":"210202"}, {"name":"西岗区", "zip":"210203"}, {"name":"沙河口区", "zip":"210204"}, {"name":"甘井子区", "zip":"210211"}, {"name":"旅顺口区", "zip":"210212"}, {"name":"金州区", "zip":"210213"}, {"name":"长海县", "zip":"210224"}, {"name":"瓦房店市", "zip":"210281"}, {"name":"普兰店市", "zip":"210282"}, {"name":"庄河市", "zip":"210283"}]}, {"name":"鞍山市", "zip":"210300", "county":[{"name":"市辖区", "zip":"210301"}, {"name":"铁东区", "zip":"210302"}, {"name":"铁西区", "zip":"210303"}, {"name":"立山区", "zip":"210304"}, {"name":"千山区", "zip":"210311"}, {"name":"台安县", "zip":"210321"}, {"name":"岫岩满族自治县", "zip":"210323"}, {"name":"海城市", "zip":"210381"}]}, {"name":"抚顺市", "zip":"210400", "county":[{"name":"市辖区", "zip":"210401"}, {"name":"新抚区", "zip":"210402"}, {"name":"东洲区", "zip":"210403"}, {"name":"望花区", "zip":"210404"}, {"name":"顺城区", "zip":"210411"}, {"name":"抚顺县", "zip":"210421"}, {"name":"新宾满族自治县", "zip":"210422"}, {"name":"清原满族自治县", "zip":"210423"}]}, {"name":"本溪市", "zip":"210500", "county":[{"name":"市辖区", "zip":"210501"}, {"name":"平山区", "zip":"210502"}, {"name":"溪湖区", "zip":"210503"}, {"name":"明山区", "zip":"210504"}, {"name":"南芬区", "zip":"210505"}, {"name":"本溪满族自治县", "zip":"210521"}, {"name":"桓仁满族自治县", "zip":"210522"}]}, {"name":"丹东市", "zip":"210600", "county":[{"name":"市辖区", "zip":"210601"}, {"name":"元宝区", "zip":"210602"}, {"name":"振兴区", "zip":"210603"}, {"name":"振安区", "zip":"210604"}, {"name":"宽甸满族自治县", "zip":"210624"}, {"name":"东港市", "zip":"210681"}, {"name":"凤城市", "zip":"210682"}]}, {"name":"锦州市", "zip":"210700", "county":[{"name":"市辖区", "zip":"210701"}, {"name":"古塔区", "zip":"210702"}, {"name":"凌河区", "zip":"210703"}, {"name":"太和区", "zip":"210711"}, {"name":"黑山县", "zip":"210726"}, {"name":"义县", "zip":"210727"}, {"name":"凌海市", "zip":"210781"}, {"name":"北镇市", "zip":"210782"}]}, {"name":"营口市", "zip":"210800", "county":[{"name":"市辖区", "zip":"210801"}, {"name":"站前区", "zip":"210802"}, {"name":"西市区", "zip":"210803"}, {"name":"鲅鱼圈区", "zip":"210804"}, {"name":"老边区", "zip":"210811"}, {"name":"盖州市", "zip":"210881"}, {"name":"大石桥市", "zip":"210882"}]}, {"name":"阜新市", "zip":"210900", "county":[{"name":"市辖区", "zip":"210901"}, {"name":"海州区", "zip":"210902"}, {"name":"新邱区", "zip":"210903"}, {"name":"太平区", "zip":"210904"}, {"name":"清河门区", "zip":"210905"}, {"name":"细河区", "zip":"210911"}, {"name":"阜新蒙古族自治县", "zip":"210921"}, {"name":"彰武县", "zip":"210922"}]}, {"name":"辽阳市", "zip":"211000", "county":[{"name":"市辖区", "zip":"211001"}, {"name":"白塔区", "zip":"211002"}, {"name":"文圣区", "zip":"211003"}, {"name":"宏伟区", "zip":"211004"}, {"name":"弓长岭区", "zip":"211005"}, {"name":"太子河区", "zip":"211011"}, {"name":"辽阳县", "zip":"211021"}, {"name":"灯塔市", "zip":"211081"}]}, {"name":"盘锦市", "zip":"211100", "county":[{"name":"市辖区", "zip":"211101"}, {"name":"双台子区", "zip":"211102"}, {"name":"兴隆台区", "zip":"211103"}, {"name":"大洼县", "zip":"211121"}, {"name":"盘山县", "zip":"211122"}]}, {"name":"铁岭市", "zip":"211200", "county":[{"name":"市辖区", "zip":"211201"}, {"name":"银州区", "zip":"211202"}, {"name":"清河区", "zip":"211204"}, {"name":"铁岭县", "zip":"211221"}, {"name":"西丰县", "zip":"211223"}, {"name":"昌图县", "zip":"211224"}, {"name":"调兵山市", "zip":"211281"}, {"name":"开原市", "zip":"211282"}]}, {"name":"朝阳市", "zip":"211300", "county":[{"name":"市辖区", "zip":"211301"}, {"name":"双塔区", "zip":"211302"}, {"name":"龙城区", "zip":"211303"}, {"name":"朝阳县", "zip":"211321"}, {"name":"建平县", "zip":"211322"}, {"name":"喀喇沁左翼蒙古族自治县", "zip":"211324"}, {"name":"北票市", "zip":"211381"}, {"name":"凌源市", "zip":"211382"}]}, {"name":"葫芦岛市", "zip":"211400", "county":[{"name":"市辖区", "zip":"211401"}, {"name":"连山区", "zip":"211402"}, {"name":"龙港区", "zip":"211403"}, {"name":"南票区", "zip":"211404"}, {"name":"绥中县", "zip":"211421"}, {"name":"建昌县", "zip":"211422"}, {"name":"兴城市", "zip":"211481"}]}]}, {"name":"吉林省", "zip":"220000", "city":[{"name":"长春市", "zip":"220100", "county":[{"name":"市辖区", "zip":"220101"}, {"name":"南关区", "zip":"220102"}, {"name":"宽城区", "zip":"220103"}, {"name":"朝阳区", "zip":"220104"}, {"name":"二道区", "zip":"220105"}, {"name":"绿园区", "zip":"220106"}, {"name":"双阳区", "zip":"220112"}, {"name":"农安县", "zip":"220122"}, {"name":"九台市", "zip":"220181"}, {"name":"榆树市", "zip":"220182"}, {"name":"德惠市", "zip":"220183"}]}, {"name":"吉林市", "zip":"220200", "county":[{"name":"市辖区", "zip":"220201"}, {"name":"昌邑区", "zip":"220202"}, {"name":"龙潭区", "zip":"220203"}, {"name":"船营区", "zip":"220204"}, {"name":"丰满区", "zip":"220211"}, {"name":"永吉县", "zip":"220221"}, {"name":"蛟河市", "zip":"220281"}, {"name":"桦甸市", "zip":"220282"}, {"name":"舒兰市", "zip":"220283"}, {"name":"磐石市", "zip":"220284"}]}, {"name":"四平市", "zip":"220300", "county":[{"name":"市辖区", "zip":"220301"}, {"name":"铁西区", "zip":"220302"}, {"name":"铁东区", "zip":"220303"}, {"name":"梨树县", "zip":"220322"}, {"name":"伊通满族自治县", "zip":"220323"}, {"name":"公主岭市", "zip":"220381"}, {"name":"双辽市", "zip":"220382"}]}, {"name":"辽源市", "zip":"220400", "county":[{"name":"市辖区", "zip":"220401"}, {"name":"龙山区", "zip":"220402"}, {"name":"西安区", "zip":"220403"}, {"name":"东丰县", "zip":"220421"}, {"name":"东辽县", "zip":"220422"}]}, {"name":"通化市", "zip":"220500", "county":[{"name":"市辖区", "zip":"220501"}, {"name":"东昌区", "zip":"220502"}, {"name":"二道江区", "zip":"220503"}, {"name":"通化县", "zip":"220521"}, {"name":"辉南县", "zip":"220523"}, {"name":"柳河县", "zip":"220524"}, {"name":"梅河口市", "zip":"220581"}, {"name":"集安市", "zip":"220582"}]}, {"name":"白山市", "zip":"220600", "county":[{"name":"市辖区", "zip":"220601"}, {"name":"浑江区", "zip":"220602"}, {"name":"江源区", "zip":"220605"}, {"name":"抚松县", "zip":"220621"}, {"name":"靖宇县", "zip":"220622"}, {"name":"长白朝鲜族自治县", "zip":"220623"}, {"name":"临江市", "zip":"220681"}]}, {"name":"松原市", "zip":"220700", "county":[{"name":"市辖区", "zip":"220701"}, {"name":"宁江区", "zip":"220702"}, {"name":"前郭尔罗斯蒙古族自治县", "zip":"220721"}, {"name":"长岭县", "zip":"220722"}, {"name":"乾安县", "zip":"220723"}, {"name":"扶余县", "zip":"220724"}]}, {"name":"白城市", "zip":"220800", "county":[{"name":"市辖区", "zip":"220801"}, {"name":"洮北区", "zip":"220802"}, {"name":"镇赉县", "zip":"220821"}, {"name":"通榆县", "zip":"220822"}, {"name":"洮南市", "zip":"220881"}, {"name":"大安市", "zip":"220882"}]}, {"name":"延边朝鲜族自治州", "zip":"222400", "county":[{"name":"延吉市", "zip":"222401"}, {"name":"图们市", "zip":"222402"}, {"name":"敦化市", "zip":"222403"}, {"name":"珲春市", "zip":"222404"}, {"name":"龙井市", "zip":"222405"}, {"name":"和龙市", "zip":"222406"}, {"name":"汪清县", "zip":"222424"}, {"name":"安图县", "zip":"222426"}]}]}, {"name":"黑龙江省", "zip":"230000", "city":[{"name":"哈尔滨市", "zip":"230100", "county":[{"name":"市辖区", "zip":"230101"}, {"name":"道里区", "zip":"230102"}, {"name":"南岗区", "zip":"230103"}, {"name":"道外区", "zip":"230104"}, {"name":"平房区", "zip":"230108"}, {"name":"松北区", "zip":"230109"}, {"name":"香坊区", "zip":"230110"}, {"name":"呼兰区", "zip":"230111"}, {"name":"阿城区", "zip":"230112"}, {"name":"依兰县", "zip":"230123"}, {"name":"方正县", "zip":"230124"}, {"name":"宾县", "zip":"230125"}, {"name":"巴彦县", "zip":"230126"}, {"name":"木兰县", "zip":"230127"}, {"name":"通河县", "zip":"230128"}, {"name":"延寿县", "zip":"230129"}, {"name":"双城市", "zip":"230182"}, {"name":"尚志市", "zip":"230183"}, {"name":"五常市", "zip":"230184"}]}, {"name":"齐齐哈尔市", "zip":"230200", "county":[{"name":"市辖区", "zip":"230201"}, {"name":"龙沙区", "zip":"230202"}, {"name":"建华区", "zip":"230203"}, {"name":"铁锋区", "zip":"230204"}, {"name":"昂昂溪区", "zip":"230205"}, {"name":"富拉尔基区", "zip":"230206"}, {"name":"碾子山区", "zip":"230207"}, {"name":"梅里斯达斡尔族区", "zip":"230208"}, {"name":"龙江县", "zip":"230221"}, {"name":"依安县", "zip":"230223"}, {"name":"泰来县", "zip":"230224"}, {"name":"甘南县", "zip":"230225"}, {"name":"富裕县", "zip":"230227"}, {"name":"克山县", "zip":"230229"}, {"name":"克东县", "zip":"230230"}, {"name":"拜泉县", "zip":"230231"}, {"name":"讷河市", "zip":"230281"}]}, {"name":"鸡西市", "zip":"230300", "county":[{"name":"市辖区", "zip":"230301"}, {"name":"鸡冠区", "zip":"230302"}, {"name":"恒山区", "zip":"230303"}, {"name":"滴道区", "zip":"230304"}, {"name":"梨树区", "zip":"230305"}, {"name":"城子河区", "zip":"230306"}, {"name":"麻山区", "zip":"230307"}, {"name":"鸡东县", "zip":"230321"}, {"name":"虎林市", "zip":"230381"}, {"name":"密山市", "zip":"230382"}]}, {"name":"鹤岗市", "zip":"230400", "county":[{"name":"市辖区", "zip":"230401"}, {"name":"向阳区", "zip":"230402"}, {"name":"工农区", "zip":"230403"}, {"name":"南山区", "zip":"230404"}, {"name":"兴安区", "zip":"230405"}, {"name":"东山区", "zip":"230406"}, {"name":"兴山区", "zip":"230407"}, {"name":"萝北县", "zip":"230421"}, {"name":"绥滨县", "zip":"230422"}]}, {"name":"双鸭山市", "zip":"230500", "county":[{"name":"市辖区", "zip":"230501"}, {"name":"尖山区", "zip":"230502"}, {"name":"岭东区", "zip":"230503"}, {"name":"四方台区", "zip":"230505"}, {"name":"宝山区", "zip":"230506"}, {"name":"集贤县", "zip":"230521"}, {"name":"友谊县", "zip":"230522"}, {"name":"宝清县", "zip":"230523"}, {"name":"饶河县", "zip":"230524"}]}, {"name":"大庆市", "zip":"230600", "county":[{"name":"市辖区", "zip":"230601"}, {"name":"萨尔图区", "zip":"230602"}, {"name":"龙凤区", "zip":"230603"}, {"name":"让胡路区", "zip":"230604"}, {"name":"红岗区", "zip":"230605"}, {"name":"大同区", "zip":"230606"}, {"name":"肇州县", "zip":"230621"}, {"name":"肇源县", "zip":"230622"}, {"name":"林甸县", "zip":"230623"}, {"name":"杜尔伯特蒙古族自治县", "zip":"230624"}]}, {"name":"伊春市", "zip":"230700", "county":[{"name":"市辖区", "zip":"230701"}, {"name":"伊春区", "zip":"230702"}, {"name":"南岔区", "zip":"230703"}, {"name":"友好区", "zip":"230704"}, {"name":"西林区", "zip":"230705"}, {"name":"翠峦区", "zip":"230706"}, {"name":"新青区", "zip":"230707"}, {"name":"美溪区", "zip":"230708"}, {"name":"金山屯区", "zip":"230709"}, {"name":"五营区", "zip":"230710"}, {"name":"乌马河区", "zip":"230711"}, {"name":"汤旺河区", "zip":"230712"}, {"name":"带岭区", "zip":"230713"}, {"name":"乌伊岭区", "zip":"230714"}, {"name":"红星区", "zip":"230715"}, {"name":"上甘岭区", "zip":"230716"}, {"name":"嘉荫县", "zip":"230722"}, {"name":"铁力市", "zip":"230781"}]}, {"name":"佳木斯市", "zip":"230800", "county":[{"name":"市辖区", "zip":"230801"}, {"name":"向阳区", "zip":"230803"}, {"name":"前进区", "zip":"230804"}, {"name":"东风区", "zip":"230805"}, {"name":"郊区", "zip":"230811"}, {"name":"桦南县", "zip":"230822"}, {"name":"桦川县", "zip":"230826"}, {"name":"汤原县", "zip":"230828"}, {"name":"抚远县", "zip":"230833"}, {"name":"同江市", "zip":"230881"}, {"name":"富锦市", "zip":"230882"}]}, {"name":"七台河市", "zip":"230900", "county":[{"name":"市辖区", "zip":"230901"}, {"name":"新兴区", "zip":"230902"}, {"name":"桃山区", "zip":"230903"}, {"name":"茄子河区", "zip":"230904"}, {"name":"勃利县", "zip":"230921"}]}, {"name":"牡丹江市", "zip":"231000", "county":[{"name":"市辖区", "zip":"231001"}, {"name":"东安区", "zip":"231002"}, {"name":"阳明区", "zip":"231003"}, {"name":"爱民区", "zip":"231004"}, {"name":"西安区", "zip":"231005"}, {"name":"东宁县", "zip":"231024"}, {"name":"林口县", "zip":"231025"}, {"name":"绥芬河市", "zip":"231081"}, {"name":"海林市", "zip":"231083"}, {"name":"宁安市", "zip":"231084"}, {"name":"穆棱市", "zip":"231085"}]}, {"name":"黑河市", "zip":"231100", "county":[{"name":"市辖区", "zip":"231101"}, {"name":"爱辉区", "zip":"231102"}, {"name":"嫩江县", "zip":"231121"}, {"name":"逊克县", "zip":"231123"}, {"name":"孙吴县", "zip":"231124"}, {"name":"北安市", "zip":"231181"}, {"name":"五大连池市", "zip":"231182"}]}, {"name":"绥化市", "zip":"231200", "county":[{"name":"市辖区", "zip":"231201"}, {"name":"北林区", "zip":"231202"}, {"name":"望奎县", "zip":"231221"}, {"name":"兰西县", "zip":"231222"}, {"name":"青冈县", "zip":"231223"}, {"name":"庆安县", "zip":"231224"}, {"name":"明水县", "zip":"231225"}, {"name":"绥棱县", "zip":"231226"}, {"name":"安达市", "zip":"231281"}, {"name":"肇东市", "zip":"231282"}, {"name":"海伦市", "zip":"231283"}]}, {"name":"大兴安岭地区", "zip":"232700", "county":[{"name":"呼玛县", "zip":"232721"}, {"name":"塔河县", "zip":"232722"}, {"name":"漠河县", "zip":"232723"}]}]}, {"name":"上海市", "zip":"310000", "city":[{"name":"市辖区", "zip":"310100", "county":[{"name":"黄浦区", "zip":"310101"}, {"name":"徐汇区", "zip":"310104"}, {"name":"长宁区", "zip":"310105"}, {"name":"静安区", "zip":"310106"}, {"name":"普陀区", "zip":"310107"}, {"name":"闸北区", "zip":"310108"}, {"name":"虹口区", "zip":"310109"}, {"name":"杨浦区", "zip":"310110"}, {"name":"闵行区", "zip":"310112"}, {"name":"宝山区", "zip":"310113"}, {"name":"嘉定区", "zip":"310114"}, {"name":"浦东新区", "zip":"310115"}, {"name":"金山区", "zip":"310116"}, {"name":"松江区", "zip":"310117"}, {"name":"青浦区", "zip":"310118"}, {"name":"奉贤区", "zip":"310120"}]}, {"name":"县", "zip":"310200", "county":{"name":"崇明县", "zip":"310230"}}]}, {"name":"江苏省", "zip":"320000", "city":[{"name":"南京市", "zip":"320100", "county":[{"name":"市辖区", "zip":"320101"}, {"name":"玄武区", "zip":"320102"}, {"name":"白下区", "zip":"320103"}, {"name":"秦淮区", "zip":"320104"}, {"name":"建邺区", "zip":"320105"}, {"name":"鼓楼区", "zip":"320106"}, {"name":"下关区", "zip":"320107"}, {"name":"浦口区", "zip":"320111"}, {"name":"栖霞区", "zip":"320113"}, {"name":"雨花台区", "zip":"320114"}, {"name":"江宁区", "zip":"320115"}, {"name":"六合区", "zip":"320116"}, {"name":"溧水县", "zip":"320124"}, {"name":"高淳县", "zip":"320125"}]}, {"name":"无锡市", "zip":"320200", "county":[{"name":"市辖区", "zip":"320201"}, {"name":"崇安区", "zip":"320202"}, {"name":"南长区", "zip":"320203"}, {"name":"北塘区", "zip":"320204"}, {"name":"锡山区", "zip":"320205"}, {"name":"惠山区", "zip":"320206"}, {"name":"滨湖区", "zip":"320211"}, {"name":"江阴市", "zip":"320281"}, {"name":"宜兴市", "zip":"320282"}]}, {"name":"徐州市", "zip":"320300", "county":[{"name":"市辖区", "zip":"320301"}, {"name":"鼓楼区", "zip":"320302"}, {"name":"云龙区", "zip":"320303"}, {"name":"贾汪区", "zip":"320305"}, {"name":"泉山区", "zip":"320311"}, {"name":"铜山区", "zip":"320312"}, {"name":"丰县", "zip":"320321"}, {"name":"沛县", "zip":"320322"}, {"name":"睢宁县", "zip":"320324"}, {"name":"新沂市", "zip":"320381"}, {"name":"邳州市", "zip":"320382"}]}, {"name":"常州市", "zip":"320400", "county":[{"name":"市辖区", "zip":"320401"}, {"name":"天宁区", "zip":"320402"}, {"name":"钟楼区", "zip":"320404"}, {"name":"戚墅堰区", "zip":"320405"}, {"name":"新北区", "zip":"320411"}, {"name":"武进区", "zip":"320412"}, {"name":"溧阳市", "zip":"320481"}, {"name":"金坛市", "zip":"320482"}]}, {"name":"苏州市", "zip":"320500", "county":[{"name":"市辖区", "zip":"320501"}, {"name":"虎丘区", "zip":"320505"}, {"name":"吴中区", "zip":"320506"}, {"name":"相城区", "zip":"320507"}, {"name":"姑苏区", "zip":"320508"}, {"name":"吴江区", "zip":"320509"}, {"name":"常熟市", "zip":"320581"}, {"name":"张家港市", "zip":"320582"}, {"name":"昆山市", "zip":"320583"}, {"name":"太仓市", "zip":"320585"}]}, {"name":"南通市", "zip":"320600", "county":[{"name":"市辖区", "zip":"320601"}, {"name":"崇川区", "zip":"320602"}, {"name":"港闸区", "zip":"320611"}, {"name":"通州区", "zip":"320612"}, {"name":"海安县", "zip":"320621"}, {"name":"如东县", "zip":"320623"}, {"name":"启东市", "zip":"320681"}, {"name":"如皋市", "zip":"320682"}, {"name":"海门市", "zip":"320684"}]}, {"name":"连云港市", "zip":"320700", "county":[{"name":"市辖区", "zip":"320701"}, {"name":"连云区", "zip":"320703"}, {"name":"新浦区", "zip":"320705"}, {"name":"海州区", "zip":"320706"}, {"name":"赣榆县", "zip":"320721"}, {"name":"东海县", "zip":"320722"}, {"name":"灌云县", "zip":"320723"}, {"name":"灌南县", "zip":"320724"}]}, {"name":"淮安市", "zip":"320800", "county":[{"name":"市辖区", "zip":"320801"}, {"name":"清河区", "zip":"320802"}, {"name":"淮安区", "zip":"320803"}, {"name":"淮阴区", "zip":"320804"}, {"name":"清浦区", "zip":"320811"}, {"name":"涟水县", "zip":"320826"}, {"name":"洪泽县", "zip":"320829"}, {"name":"盱眙县", "zip":"320830"}, {"name":"金湖县", "zip":"320831"}]}, {"name":"盐城市", "zip":"320900", "county":[{"name":"市辖区", "zip":"320901"}, {"name":"亭湖区", "zip":"320902"}, {"name":"盐都区", "zip":"320903"}, {"name":"响水县", "zip":"320921"}, {"name":"滨海县", "zip":"320922"}, {"name":"阜宁县", "zip":"320923"}, {"name":"射阳县", "zip":"320924"}, {"name":"建湖县", "zip":"320925"}, {"name":"东台市", "zip":"320981"}, {"name":"大丰市", "zip":"320982"}]}, {"name":"扬州市", "zip":"321000", "county":[{"name":"市辖区", "zip":"321001"}, {"name":"广陵区", "zip":"321002"}, {"name":"邗江区", "zip":"321003"}, {"name":"江都区", "zip":"321012"}, {"name":"宝应县", "zip":"321023"}, {"name":"仪征市", "zip":"321081"}, {"name":"高邮市", "zip":"321084"}]}, {"name":"镇江市", "zip":"321100", "county":[{"name":"市辖区", "zip":"321101"}, {"name":"京口区", "zip":"321102"}, {"name":"润州区", "zip":"321111"}, {"name":"丹徒区", "zip":"321112"}, {"name":"丹阳市", "zip":"321181"}, {"name":"扬中市", "zip":"321182"}, {"name":"句容市", "zip":"321183"}]}, {"name":"泰州市", "zip":"321200", "county":[{"name":"市辖区", "zip":"321201"}, {"name":"海陵区", "zip":"321202"}, {"name":"高港区", "zip":"321203"}, {"name":"兴化市", "zip":"321281"}, {"name":"靖江市", "zip":"321282"}, {"name":"泰兴市", "zip":"321283"}, {"name":"姜堰市", "zip":"321284"}]}, {"name":"宿迁市", "zip":"321300", "county":[{"name":"市辖区", "zip":"321301"}, {"name":"宿城区", "zip":"321302"}, {"name":"宿豫区", "zip":"321311"}, {"name":"沭阳县", "zip":"321322"}, {"name":"泗阳县", "zip":"321323"}, {"name":"泗洪县", "zip":"321324"}]}]}, {"name":"浙江省", "zip":"330000", "city":[{"name":"杭州市", "zip":"330100", "county":[{"name":"市辖区", "zip":"330101"}, {"name":"上城区", "zip":"330102"}, {"name":"下城区", "zip":"330103"}, {"name":"江干区", "zip":"330104"}, {"name":"拱墅区", "zip":"330105"}, {"name":"西湖区", "zip":"330106"}, {"name":"滨江区", "zip":"330108"}, {"name":"萧山区", "zip":"330109"}, {"name":"余杭区", "zip":"330110"}, {"name":"桐庐县", "zip":"330122"}, {"name":"淳安县", "zip":"330127"}, {"name":"建德市", "zip":"330182"}, {"name":"富阳市", "zip":"330183"}, {"name":"临安市", "zip":"330185"}]}, {"name":"宁波市", "zip":"330200", "county":[{"name":"市辖区", "zip":"330201"}, {"name":"海曙区", "zip":"330203"}, {"name":"江东区", "zip":"330204"}, {"name":"江北区", "zip":"330205"}, {"name":"北仑区", "zip":"330206"}, {"name":"镇海区", "zip":"330211"}, {"name":"鄞州区", "zip":"330212"}, {"name":"象山县", "zip":"330225"}, {"name":"宁海县", "zip":"330226"}, {"name":"余姚市", "zip":"330281"}, {"name":"慈溪市", "zip":"330282"}, {"name":"奉化市", "zip":"330283"}]}, {"name":"温州市", "zip":"330300", "county":[{"name":"市辖区", "zip":"330301"}, {"name":"鹿城区", "zip":"330302"}, {"name":"龙湾区", "zip":"330303"}, {"name":"瓯海区", "zip":"330304"}, {"name":"洞头县", "zip":"330322"}, {"name":"永嘉县", "zip":"330324"}, {"name":"平阳县", "zip":"330326"}, {"name":"苍南县", "zip":"330327"}, {"name":"文成县", "zip":"330328"}, {"name":"泰顺县", "zip":"330329"}, {"name":"瑞安市", "zip":"330381"}, {"name":"乐清市", "zip":"330382"}]}, {"name":"嘉兴市", "zip":"330400", "county":[{"name":"市辖区", "zip":"330401"}, {"name":"南湖区", "zip":"330402"}, {"name":"秀洲区", "zip":"330411"}, {"name":"嘉善县", "zip":"330421"}, {"name":"海盐县", "zip":"330424"}, {"name":"海宁市", "zip":"330481"}, {"name":"平湖市", "zip":"330482"}, {"name":"桐乡市", "zip":"330483"}]}, {"name":"湖州市", "zip":"330500", "county":[{"name":"市辖区", "zip":"330501"}, {"name":"吴兴区", "zip":"330502"}, {"name":"南浔区", "zip":"330503"}, {"name":"德清县", "zip":"330521"}, {"name":"长兴县", "zip":"330522"}, {"name":"安吉县", "zip":"330523"}]}, {"name":"绍兴市", "zip":"330600", "county":[{"name":"市辖区", "zip":"330601"}, {"name":"越城区", "zip":"330602"}, {"name":"绍兴县", "zip":"330621"}, {"name":"新昌县", "zip":"330624"}, {"name":"诸暨市", "zip":"330681"}, {"name":"上虞市", "zip":"330682"}, {"name":"嵊州市", "zip":"330683"}]}, {"name":"金华市", "zip":"330700", "county":[{"name":"市辖区", "zip":"330701"}, {"name":"婺城区", "zip":"330702"}, {"name":"金东区", "zip":"330703"}, {"name":"武义县", "zip":"330723"}, {"name":"浦江县", "zip":"330726"}, {"name":"磐安县", "zip":"330727"}, {"name":"兰溪市", "zip":"330781"}, {"name":"义乌市", "zip":"330782"}, {"name":"东阳市", "zip":"330783"}, {"name":"永康市", "zip":"330784"}]}, {"name":"衢州市", "zip":"330800", "county":[{"name":"市辖区", "zip":"330801"}, {"name":"柯城区", "zip":"330802"}, {"name":"衢江区", "zip":"330803"}, {"name":"常山县", "zip":"330822"}, {"name":"开化县", "zip":"330824"}, {"name":"龙游县", "zip":"330825"}, {"name":"江山市", "zip":"330881"}]}, {"name":"舟山市", "zip":"330900", "county":[{"name":"市辖区", "zip":"330901"}, {"name":"定海区", "zip":"330902"}, {"name":"普陀区", "zip":"330903"}, {"name":"岱山县", "zip":"330921"}, {"name":"嵊泗县", "zip":"330922"}]}, {"name":"台州市", "zip":"331000", "county":[{"name":"市辖区", "zip":"331001"}, {"name":"椒江区", "zip":"331002"}, {"name":"黄岩区", "zip":"331003"}, {"name":"路桥区", "zip":"331004"}, {"name":"玉环县", "zip":"331021"}, {"name":"三门县", "zip":"331022"}, {"name":"天台县", "zip":"331023"}, {"name":"仙居县", "zip":"331024"}, {"name":"温岭市", "zip":"331081"}, {"name":"临海市", "zip":"331082"}]}, {"name":"丽水市", "zip":"331100", "county":[{"name":"市辖区", "zip":"331101"}, {"name":"莲都区", "zip":"331102"}, {"name":"青田县", "zip":"331121"}, {"name":"缙云县", "zip":"331122"}, {"name":"遂昌县", "zip":"331123"}, {"name":"松阳县", "zip":"331124"}, {"name":"云和县", "zip":"331125"}, {"name":"庆元县", "zip":"331126"}, {"name":"景宁畲族自治县", "zip":"331127"}, {"name":"龙泉市", "zip":"331181"}]}]}, {"name":"安徽省", "zip":"340000", "city":[{"name":"合肥市", "zip":"340100", "county":[{"name":"市辖区", "zip":"340101"}, {"name":"瑶海区", "zip":"340102"}, {"name":"庐阳区", "zip":"340103"}, {"name":"蜀山区", "zip":"340104"}, {"name":"包河区", "zip":"340111"}, {"name":"长丰县", "zip":"340121"}, {"name":"肥东县", "zip":"340122"}, {"name":"肥西县", "zip":"340123"}, {"name":"庐江县", "zip":"340124"}, {"name":"巢湖市", "zip":"340181"}]}, {"name":"芜湖市", "zip":"340200", "county":[{"name":"市辖区", "zip":"340201"}, {"name":"镜湖区", "zip":"340202"}, {"name":"弋江区", "zip":"340203"}, {"name":"鸠江区", "zip":"340207"}, {"name":"三山区", "zip":"340208"}, {"name":"芜湖县", "zip":"340221"}, {"name":"繁昌县", "zip":"340222"}, {"name":"南陵县", "zip":"340223"}, {"name":"无为县", "zip":"340225"}]}, {"name":"蚌埠市", "zip":"340300", "county":[{"name":"市辖区", "zip":"340301"}, {"name":"龙子湖区", "zip":"340302"}, {"name":"蚌山区", "zip":"340303"}, {"name":"禹会区", "zip":"340304"}, {"name":"淮上区", "zip":"340311"}, {"name":"怀远县", "zip":"340321"}, {"name":"五河县", "zip":"340322"}, {"name":"固镇县", "zip":"340323"}]}, {"name":"淮南市", "zip":"340400", "county":[{"name":"市辖区", "zip":"340401"}, {"name":"大通区", "zip":"340402"}, {"name":"田家庵区", "zip":"340403"}, {"name":"谢家集区", "zip":"340404"}, {"name":"八公山区", "zip":"340405"}, {"name":"潘集区", "zip":"340406"}, {"name":"凤台县", "zip":"340421"}]}, {"name":"马鞍山市", "zip":"340500", "county":[{"name":"市辖区", "zip":"340501"}, {"name":"花山区", "zip":"340503"}, {"name":"雨山区", "zip":"340504"}, {"name":"博望区", "zip":"340506"}, {"name":"当涂县", "zip":"340521"}, {"name":"含山县", "zip":"340522"}, {"name":"和县", "zip":"340523"}]}, {"name":"淮北市", "zip":"340600", "county":[{"name":"市辖区", "zip":"340601"}, {"name":"杜集区", "zip":"340602"}, {"name":"相山区", "zip":"340603"}, {"name":"烈山区", "zip":"340604"}, {"name":"濉溪县", "zip":"340621"}]}, {"name":"铜陵市", "zip":"340700", "county":[{"name":"市辖区", "zip":"340701"}, {"name":"铜官山区", "zip":"340702"}, {"name":"狮子山区", "zip":"340703"}, {"name":"郊区", "zip":"340711"}, {"name":"铜陵县", "zip":"340721"}]}, {"name":"安庆市", "zip":"340800", "county":[{"name":"市辖区", "zip":"340801"}, {"name":"迎江区", "zip":"340802"}, {"name":"大观区", "zip":"340803"}, {"name":"宜秀区", "zip":"340811"}, {"name":"怀宁县", "zip":"340822"}, {"name":"枞阳县", "zip":"340823"}, {"name":"潜山县", "zip":"340824"}, {"name":"太湖县", "zip":"340825"}, {"name":"宿松县", "zip":"340826"}, {"name":"望江县", "zip":"340827"}, {"name":"岳西县", "zip":"340828"}, {"name":"桐城市", "zip":"340881"}]}, {"name":"黄山市", "zip":"341000", "county":[{"name":"市辖区", "zip":"341001"}, {"name":"屯溪区", "zip":"341002"}, {"name":"黄山区", "zip":"341003"}, {"name":"徽州区", "zip":"341004"}, {"name":"歙县", "zip":"341021"}, {"name":"休宁县", "zip":"341022"}, {"name":"黟县", "zip":"341023"}, {"name":"祁门县", "zip":"341024"}]}, {"name":"滁州市", "zip":"341100", "county":[{"name":"市辖区", "zip":"341101"}, {"name":"琅琊区", "zip":"341102"}, {"name":"南谯区", "zip":"341103"}, {"name":"来安县", "zip":"341122"}, {"name":"全椒县", "zip":"341124"}, {"name":"定远县", "zip":"341125"}, {"name":"凤阳县", "zip":"341126"}, {"name":"天长市", "zip":"341181"}, {"name":"明光市", "zip":"341182"}]}, {"name":"阜阳市", "zip":"341200", "county":[{"name":"市辖区", "zip":"341201"}, {"name":"颍州区", "zip":"341202"}, {"name":"颍东区", "zip":"341203"}, {"name":"颍泉区", "zip":"341204"}, {"name":"临泉县", "zip":"341221"}, {"name":"太和县", "zip":"341222"}, {"name":"阜南县", "zip":"341225"}, {"name":"颍上县", "zip":"341226"}, {"name":"界首市", "zip":"341282"}]}, {"name":"宿州市", "zip":"341300", "county":[{"name":"市辖区", "zip":"341301"}, {"name":"埇桥区", "zip":"341302"}, {"name":"砀山县", "zip":"341321"}, {"name":"萧县", "zip":"341322"}, {"name":"灵璧县", "zip":"341323"}, {"name":"泗县", "zip":"341324"}]}, {"name":"六安市", "zip":"341500", "county":[{"name":"市辖区", "zip":"341501"}, {"name":"金安区", "zip":"341502"}, {"name":"裕安区", "zip":"341503"}, {"name":"寿县", "zip":"341521"}, {"name":"霍邱县", "zip":"341522"}, {"name":"舒城县", "zip":"341523"}, {"name":"金寨县", "zip":"341524"}, {"name":"霍山县", "zip":"341525"}]}, {"name":"亳州市", "zip":"341600", "county":[{"name":"市辖区", "zip":"341601"}, {"name":"谯城区", "zip":"341602"}, {"name":"涡阳县", "zip":"341621"}, {"name":"蒙城县", "zip":"341622"}, {"name":"利辛县", "zip":"341623"}]}, {"name":"池州市", "zip":"341700", "county":[{"name":"市辖区", "zip":"341701"}, {"name":"贵池区", "zip":"341702"}, {"name":"东至县", "zip":"341721"}, {"name":"石台县", "zip":"341722"}, {"name":"青阳县", "zip":"341723"}]}, {"name":"宣城市", "zip":"341800", "county":[{"name":"市辖区", "zip":"341801"}, {"name":"宣州区", "zip":"341802"}, {"name":"郎溪县", "zip":"341821"}, {"name":"广德县", "zip":"341822"}, {"name":"泾县", "zip":"341823"}, {"name":"绩溪县", "zip":"341824"}, {"name":"旌德县", "zip":"341825"}, {"name":"宁国市", "zip":"341881"}]}]}, {"name":"福建省", "zip":"350000", "city":[{"name":"福州市", "zip":"350100", "county":[{"name":"市辖区", "zip":"350101"}, {"name":"鼓楼区", "zip":"350102"}, {"name":"台江区", "zip":"350103"}, {"name":"仓山区", "zip":"350104"}, {"name":"马尾区", "zip":"350105"}, {"name":"晋安区", "zip":"350111"}, {"name":"闽侯县", "zip":"350121"}, {"name":"连江县", "zip":"350122"}, {"name":"罗源县", "zip":"350123"}, {"name":"闽清县", "zip":"350124"}, {"name":"永泰县", "zip":"350125"}, {"name":"平潭县", "zip":"350128"}, {"name":"福清市", "zip":"350181"}, {"name":"长乐市", "zip":"350182"}]}, {"name":"厦门市", "zip":"350200", "county":[{"name":"市辖区", "zip":"350201"}, {"name":"思明区", "zip":"350203"}, {"name":"海沧区", "zip":"350205"}, {"name":"湖里区", "zip":"350206"}, {"name":"集美区", "zip":"350211"}, {"name":"同安区", "zip":"350212"}, {"name":"翔安区", "zip":"350213"}]}, {"name":"莆田市", "zip":"350300", "county":[{"name":"市辖区", "zip":"350301"}, {"name":"城厢区", "zip":"350302"}, {"name":"涵江区", "zip":"350303"}, {"name":"荔城区", "zip":"350304"}, {"name":"秀屿区", "zip":"350305"}, {"name":"仙游县", "zip":"350322"}]}, {"name":"三明市", "zip":"350400", "county":[{"name":"市辖区", "zip":"350401"}, {"name":"梅列区", "zip":"350402"}, {"name":"三元区", "zip":"350403"}, {"name":"明溪县", "zip":"350421"}, {"name":"清流县", "zip":"350423"}, {"name":"宁化县", "zip":"350424"}, {"name":"大田县", "zip":"350425"}, {"name":"尤溪县", "zip":"350426"}, {"name":"沙县", "zip":"350427"}, {"name":"将乐县", "zip":"350428"}, {"name":"泰宁县", "zip":"350429"}, {"name":"建宁县", "zip":"350430"}, {"name":"永安市", "zip":"350481"}]}, {"name":"泉州市", "zip":"350500", "county":[{"name":"市辖区", "zip":"350501"}, {"name":"鲤城区", "zip":"350502"}, {"name":"丰泽区", "zip":"350503"}, {"name":"洛江区", "zip":"350504"}, {"name":"泉港区", "zip":"350505"}, {"name":"惠安县", "zip":"350521"}, {"name":"安溪县", "zip":"350524"}, {"name":"永春县", "zip":"350525"}, {"name":"德化县", "zip":"350526"}, {"name":"金门县", "zip":"350527"}, {"name":"石狮市", "zip":"350581"}, {"name":"晋江市", "zip":"350582"}, {"name":"南安市", "zip":"350583"}]}, {"name":"漳州市", "zip":"350600", "county":[{"name":"市辖区", "zip":"350601"}, {"name":"芗城区", "zip":"350602"}, {"name":"龙文区", "zip":"350603"}, {"name":"云霄县", "zip":"350622"}, {"name":"漳浦县", "zip":"350623"}, {"name":"诏安县", "zip":"350624"}, {"name":"长泰县", "zip":"350625"}, {"name":"东山县", "zip":"350626"}, {"name":"南靖县", "zip":"350627"}, {"name":"平和县", "zip":"350628"}, {"name":"华安县", "zip":"350629"}, {"name":"龙海市", "zip":"350681"}]}, {"name":"南平市", "zip":"350700", "county":[{"name":"市辖区", "zip":"350701"}, {"name":"延平区", "zip":"350702"}, {"name":"顺昌县", "zip":"350721"}, {"name":"浦城县", "zip":"350722"}, {"name":"光泽县", "zip":"350723"}, {"name":"松溪县", "zip":"350724"}, {"name":"政和县", "zip":"350725"}, {"name":"邵武市", "zip":"350781"}, {"name":"武夷山市", "zip":"350782"}, {"name":"建瓯市", "zip":"350783"}, {"name":"建阳市", "zip":"350784"}]}, {"name":"龙岩市", "zip":"350800", "county":[{"name":"市辖区", "zip":"350801"}, {"name":"新罗区", "zip":"350802"}, {"name":"长汀县", "zip":"350821"}, {"name":"永定县", "zip":"350822"}, {"name":"上杭县", "zip":"350823"}, {"name":"武平县", "zip":"350824"}, {"name":"连城县", "zip":"350825"}, {"name":"漳平市", "zip":"350881"}]}, {"name":"宁德市", "zip":"350900", "county":[{"name":"市辖区", "zip":"350901"}, {"name":"蕉城区", "zip":"350902"}, {"name":"霞浦县", "zip":"350921"}, {"name":"古田县", "zip":"350922"}, {"name":"屏南县", "zip":"350923"}, {"name":"寿宁县", "zip":"350924"}, {"name":"周宁县", "zip":"350925"}, {"name":"柘荣县", "zip":"350926"}, {"name":"福安市", "zip":"350981"}, {"name":"福鼎市", "zip":"350982"}]}]}, {"name":"江西省", "zip":"360000", "city":[{"name":"南昌市", "zip":"360100", "county":[{"name":"市辖区", "zip":"360101"}, {"name":"东湖区", "zip":"360102"}, {"name":"西湖区", "zip":"360103"}, {"name":"青云谱区", "zip":"360104"}, {"name":"湾里区", "zip":"360105"}, {"name":"青山湖区", "zip":"360111"}, {"name":"南昌县", "zip":"360121"}, {"name":"新建县", "zip":"360122"}, {"name":"安义县", "zip":"360123"}, {"name":"进贤县", "zip":"360124"}]}, {"name":"景德镇市", "zip":"360200", "county":[{"name":"市辖区", "zip":"360201"}, {"name":"昌江区", "zip":"360202"}, {"name":"珠山区", "zip":"360203"}, {"name":"浮梁县", "zip":"360222"}, {"name":"乐平市", "zip":"360281"}]}, {"name":"萍乡市", "zip":"360300", "county":[{"name":"市辖区", "zip":"360301"}, {"name":"安源区", "zip":"360302"}, {"name":"湘东区", "zip":"360313"}, {"name":"莲花县", "zip":"360321"}, {"name":"上栗县", "zip":"360322"}, {"name":"芦溪县", "zip":"360323"}]}, {"name":"九江市", "zip":"360400", "county":[{"name":"市辖区", "zip":"360401"}, {"name":"庐山区", "zip":"360402"}, {"name":"浔阳区", "zip":"360403"}, {"name":"九江县", "zip":"360421"}, {"name":"武宁县", "zip":"360423"}, {"name":"修水县", "zip":"360424"}, {"name":"永修县", "zip":"360425"}, {"name":"德安县", "zip":"360426"}, {"name":"星子县", "zip":"360427"}, {"name":"都昌县", "zip":"360428"}, {"name":"湖口县", "zip":"360429"}, {"name":"彭泽县", "zip":"360430"}, {"name":"瑞昌市", "zip":"360481"}, {"name":"共青城市", "zip":"360482"}]}, {"name":"新余市", "zip":"360500", "county":[{"name":"市辖区", "zip":"360501"}, {"name":"渝水区", "zip":"360502"}, {"name":"分宜县", "zip":"360521"}]}, {"name":"鹰潭市", "zip":"360600", "county":[{"name":"市辖区", "zip":"360601"}, {"name":"月湖区", "zip":"360602"}, {"name":"余江县", "zip":"360622"}, {"name":"贵溪市", "zip":"360681"}]}, {"name":"赣州市", "zip":"360700", "county":[{"name":"市辖区", "zip":"360701"}, {"name":"章贡区", "zip":"360702"}, {"name":"赣县", "zip":"360721"}, {"name":"信丰县", "zip":"360722"}, {"name":"大余县", "zip":"360723"}, {"name":"上犹县", "zip":"360724"}, {"name":"崇义县", "zip":"360725"}, {"name":"安远县", "zip":"360726"}, {"name":"龙南县", "zip":"360727"}, {"name":"定南县", "zip":"360728"}, {"name":"全南县", "zip":"360729"}, {"name":"宁都县", "zip":"360730"}, {"name":"于都县", "zip":"360731"}, {"name":"兴国县", "zip":"360732"}, {"name":"会昌县", "zip":"360733"}, {"name":"寻乌县", "zip":"360734"}, {"name":"石城县", "zip":"360735"}, {"name":"瑞金市", "zip":"360781"}, {"name":"南康市", "zip":"360782"}]}, {"name":"吉安市", "zip":"360800", "county":[{"name":"市辖区", "zip":"360801"}, {"name":"吉州区", "zip":"360802"}, {"name":"青原区", "zip":"360803"}, {"name":"吉安县", "zip":"360821"}, {"name":"吉水县", "zip":"360822"}, {"name":"峡江县", "zip":"360823"}, {"name":"新干县", "zip":"360824"}, {"name":"永丰县", "zip":"360825"}, {"name":"泰和县", "zip":"360826"}, {"name":"遂川县", "zip":"360827"}, {"name":"万安县", "zip":"360828"}, {"name":"安福县", "zip":"360829"}, {"name":"永新县", "zip":"360830"}, {"name":"井冈山市", "zip":"360881"}]}, {"name":"宜春市", "zip":"360900", "county":[{"name":"市辖区", "zip":"360901"}, {"name":"袁州区", "zip":"360902"}, {"name":"奉新县", "zip":"360921"}, {"name":"万载县", "zip":"360922"}, {"name":"上高县", "zip":"360923"}, {"name":"宜丰县", "zip":"360924"}, {"name":"靖安县", "zip":"360925"}, {"name":"铜鼓县", "zip":"360926"}, {"name":"丰城市", "zip":"360981"}, {"name":"樟树市", "zip":"360982"}, {"name":"高安市", "zip":"360983"}]}, {"name":"抚州市", "zip":"361000", "county":[{"name":"市辖区", "zip":"361001"}, {"name":"临川区", "zip":"361002"}, {"name":"南城县", "zip":"361021"}, {"name":"黎川县", "zip":"361022"}, {"name":"南丰县", "zip":"361023"}, {"name":"崇仁县", "zip":"361024"}, {"name":"乐安县", "zip":"361025"}, {"name":"宜黄县", "zip":"361026"}, {"name":"金溪县", "zip":"361027"}, {"name":"资溪县", "zip":"361028"}, {"name":"东乡县", "zip":"361029"}, {"name":"广昌县", "zip":"361030"}]}, {"name":"上饶市", "zip":"361100", "county":[{"name":"市辖区", "zip":"361101"}, {"name":"信州区", "zip":"361102"}, {"name":"上饶县", "zip":"361121"}, {"name":"广丰县", "zip":"361122"}, {"name":"玉山县", "zip":"361123"}, {"name":"铅山县", "zip":"361124"}, {"name":"横峰县", "zip":"361125"}, {"name":"弋阳县", "zip":"361126"}, {"name":"余干县", "zip":"361127"}, {"name":"鄱阳县", "zip":"361128"}, {"name":"万年县", "zip":"361129"}, {"name":"婺源县", "zip":"361130"}, {"name":"德兴市", "zip":"361181"}]}]}, {"name":"山东省", "zip":"370000", "city":[{"name":"济南市", "zip":"370100", "county":[{"name":"市辖区", "zip":"370101"}, {"name":"历下区", "zip":"370102"}, {"name":"市中区", "zip":"370103"}, {"name":"槐荫区", "zip":"370104"}, {"name":"天桥区", "zip":"370105"}, {"name":"历城区", "zip":"370112"}, {"name":"长清区", "zip":"370113"}, {"name":"平阴县", "zip":"370124"}, {"name":"济阳县", "zip":"370125"}, {"name":"商河县", "zip":"370126"}, {"name":"章丘市", "zip":"370181"}]}, {"name":"青岛市", "zip":"370200", "county":[{"name":"市辖区", "zip":"370201"}, {"name":"市南区", "zip":"370202"}, {"name":"市北区", "zip":"370203"}, {"name":"四方区", "zip":"370205"}, {"name":"黄岛区", "zip":"370211"}, {"name":"崂山区", "zip":"370212"}, {"name":"李沧区", "zip":"370213"}, {"name":"城阳区", "zip":"370214"}, {"name":"胶州市", "zip":"370281"}, {"name":"即墨市", "zip":"370282"}, {"name":"平度市", "zip":"370283"}, {"name":"胶南市", "zip":"370284"}, {"name":"莱西市", "zip":"370285"}]}, {"name":"淄博市", "zip":"370300", "county":[{"name":"市辖区", "zip":"370301"}, {"name":"淄川区", "zip":"370302"}, {"name":"张店区", "zip":"370303"}, {"name":"博山区", "zip":"370304"}, {"name":"临淄区", "zip":"370305"}, {"name":"周村区", "zip":"370306"}, {"name":"桓台县", "zip":"370321"}, {"name":"高青县", "zip":"370322"}, {"name":"沂源县", "zip":"370323"}]}, {"name":"枣庄市", "zip":"370400", "county":[{"name":"市辖区", "zip":"370401"}, {"name":"市中区", "zip":"370402"}, {"name":"薛城区", "zip":"370403"}, {"name":"峄城区", "zip":"370404"}, {"name":"台儿庄区", "zip":"370405"}, {"name":"山亭区", "zip":"370406"}, {"name":"滕州市", "zip":"370481"}]}, {"name":"东营市", "zip":"370500", "county":[{"name":"市辖区", "zip":"370501"}, {"name":"东营区", "zip":"370502"}, {"name":"河口区", "zip":"370503"}, {"name":"垦利县", "zip":"370521"}, {"name":"利津县", "zip":"370522"}, {"name":"广饶县", "zip":"370523"}]}, {"name":"烟台市", "zip":"370600", "county":[{"name":"市辖区", "zip":"370601"}, {"name":"芝罘区", "zip":"370602"}, {"name":"福山区", "zip":"370611"}, {"name":"牟平区", "zip":"370612"}, {"name":"莱山区", "zip":"370613"}, {"name":"长岛县", "zip":"370634"}, {"name":"龙口市", "zip":"370681"}, {"name":"莱阳市", "zip":"370682"}, {"name":"莱州市", "zip":"370683"}, {"name":"蓬莱市", "zip":"370684"}, {"name":"招远市", "zip":"370685"}, {"name":"栖霞市", "zip":"370686"}, {"name":"海阳市", "zip":"370687"}]}, {"name":"潍坊市", "zip":"370700", "county":[{"name":"市辖区", "zip":"370701"}, {"name":"潍城区", "zip":"370702"}, {"name":"寒亭区", "zip":"370703"}, {"name":"坊子区", "zip":"370704"}, {"name":"奎文区", "zip":"370705"}, {"name":"临朐县", "zip":"370724"}, {"name":"昌乐县", "zip":"370725"}, {"name":"青州市", "zip":"370781"}, {"name":"诸城市", "zip":"370782"}, {"name":"寿光市", "zip":"370783"}, {"name":"安丘市", "zip":"370784"}, {"name":"高密市", "zip":"370785"}, {"name":"昌邑市", "zip":"370786"}]}, {"name":"济宁市", "zip":"370800", "county":[{"name":"市辖区", "zip":"370801"}, {"name":"市中区", "zip":"370802"}, {"name":"任城区", "zip":"370811"}, {"name":"微山县", "zip":"370826"}, {"name":"鱼台县", "zip":"370827"}, {"name":"金乡县", "zip":"370828"}, {"name":"嘉祥县", "zip":"370829"}, {"name":"汶上县", "zip":"370830"}, {"name":"泗水县", "zip":"370831"}, {"name":"梁山县", "zip":"370832"}, {"name":"曲阜市", "zip":"370881"}, {"name":"兖州市", "zip":"370882"}, {"name":"邹城市", "zip":"370883"}]}, {"name":"泰安市", "zip":"370900", "county":[{"name":"市辖区", "zip":"370901"}, {"name":"泰山区", "zip":"370902"}, {"name":"岱岳区", "zip":"370911"}, {"name":"宁阳县", "zip":"370921"}, {"name":"东平县", "zip":"370923"}, {"name":"新泰市", "zip":"370982"}, {"name":"肥城市", "zip":"370983"}]}, {"name":"威海市", "zip":"371000", "county":[{"name":"市辖区", "zip":"371001"}, {"name":"环翠区", "zip":"371002"}, {"name":"文登市", "zip":"371081"}, {"name":"荣成市", "zip":"371082"}, {"name":"乳山市", "zip":"371083"}]}, {"name":"日照市", "zip":"371100", "county":[{"name":"市辖区", "zip":"371101"}, {"name":"东港区", "zip":"371102"}, {"name":"岚山区", "zip":"371103"}, {"name":"五莲县", "zip":"371121"}, {"name":"莒县", "zip":"371122"}]}, {"name":"莱芜市", "zip":"371200", "county":[{"name":"市辖区", "zip":"371201"}, {"name":"莱城区", "zip":"371202"}, {"name":"钢城区", "zip":"371203"}]}, {"name":"临沂市", "zip":"371300", "county":[{"name":"市辖区", "zip":"371301"}, {"name":"兰山区", "zip":"371302"}, {"name":"罗庄区", "zip":"371311"}, {"name":"河东区", "zip":"371312"}, {"name":"沂南县", "zip":"371321"}, {"name":"郯城县", "zip":"371322"}, {"name":"沂水县", "zip":"371323"}, {"name":"苍山县", "zip":"371324"}, {"name":"费县", "zip":"371325"}, {"name":"平邑县", "zip":"371326"}, {"name":"莒南县", "zip":"371327"}, {"name":"蒙阴县", "zip":"371328"}, {"name":"临沭县", "zip":"371329"}]}, {"name":"德州市", "zip":"371400", "county":[{"name":"市辖区", "zip":"371401"}, {"name":"德城区", "zip":"371402"}, {"name":"陵县", "zip":"371421"}, {"name":"宁津县", "zip":"371422"}, {"name":"庆云县", "zip":"371423"}, {"name":"临邑县", "zip":"371424"}, {"name":"齐河县", "zip":"371425"}, {"name":"平原县", "zip":"371426"}, {"name":"夏津县", "zip":"371427"}, {"name":"武城县", "zip":"371428"}, {"name":"乐陵市", "zip":"371481"}, {"name":"禹城市", "zip":"371482"}]}, {"name":"聊城市", "zip":"371500", "county":[{"name":"市辖区", "zip":"371501"}, {"name":"东昌府区", "zip":"371502"}, {"name":"阳谷县", "zip":"371521"}, {"name":"莘县", "zip":"371522"}, {"name":"茌平县", "zip":"371523"}, {"name":"东阿县", "zip":"371524"}, {"name":"冠县", "zip":"371525"}, {"name":"高唐县", "zip":"371526"}, {"name":"临清市", "zip":"371581"}]}, {"name":"滨州市", "zip":"371600", "county":[{"name":"市辖区", "zip":"371601"}, {"name":"滨城区", "zip":"371602"}, {"name":"惠民县", "zip":"371621"}, {"name":"阳信县", "zip":"371622"}, {"name":"无棣县", "zip":"371623"}, {"name":"沾化县", "zip":"371624"}, {"name":"博兴县", "zip":"371625"}, {"name":"邹平县", "zip":"371626"}]}, {"name":"菏泽市", "zip":"371700", "county":[{"name":"市辖区", "zip":"371701"}, {"name":"牡丹区", "zip":"371702"}, {"name":"曹县", "zip":"371721"}, {"name":"单县", "zip":"371722"}, {"name":"成武县", "zip":"371723"}, {"name":"巨野县", "zip":"371724"}, {"name":"郓城县", "zip":"371725"}, {"name":"鄄城县", "zip":"371726"}, {"name":"定陶县", "zip":"371727"}, {"name":"东明县", "zip":"371728"}]}]}, {"name":"河南省", "zip":"410000", "city":[{"name":"郑州市", "zip":"410100", "county":[{"name":"市辖区", "zip":"410101"}, {"name":"中原区", "zip":"410102"}, {"name":"二七区", "zip":"410103"}, {"name":"管城回族区", "zip":"410104"}, {"name":"金水区", "zip":"410105"}, {"name":"上街区", "zip":"410106"}, {"name":"惠济区", "zip":"410108"}, {"name":"中牟县", "zip":"410122"}, {"name":"巩义市", "zip":"410181"}, {"name":"荥阳市", "zip":"410182"}, {"name":"新密市", "zip":"410183"}, {"name":"新郑市", "zip":"410184"}, {"name":"登封市", "zip":"410185"}]}, {"name":"开封市", "zip":"410200", "county":[{"name":"市辖区", "zip":"410201"}, {"name":"龙亭区", "zip":"410202"}, {"name":"顺河回族区", "zip":"410203"}, {"name":"鼓楼区", "zip":"410204"}, {"name":"禹王台区", "zip":"410205"}, {"name":"金明区", "zip":"410211"}, {"name":"杞县", "zip":"410221"}, {"name":"通许县", "zip":"410222"}, {"name":"尉氏县", "zip":"410223"}, {"name":"开封县", "zip":"410224"}, {"name":"兰考县", "zip":"410225"}]}, {"name":"洛阳市", "zip":"410300", "county":[{"name":"市辖区", "zip":"410301"}, {"name":"老城区", "zip":"410302"}, {"name":"西工区", "zip":"410303"}, {"name":"瀍河回族区", "zip":"410304"}, {"name":"涧西区", "zip":"410305"}, {"name":"吉利区", "zip":"410306"}, {"name":"洛龙区", "zip":"410311"}, {"name":"孟津县", "zip":"410322"}, {"name":"新安县", "zip":"410323"}, {"name":"栾川县", "zip":"410324"}, {"name":"嵩县", "zip":"410325"}, {"name":"汝阳县", "zip":"410326"}, {"name":"宜阳县", "zip":"410327"}, {"name":"洛宁县", "zip":"410328"}, {"name":"伊川县", "zip":"410329"}, {"name":"偃师市", "zip":"410381"}]}, {"name":"平顶山市", "zip":"410400", "county":[{"name":"市辖区", "zip":"410401"}, {"name":"新华区", "zip":"410402"}, {"name":"卫东区", "zip":"410403"}, {"name":"石龙区", "zip":"410404"}, {"name":"湛河区", "zip":"410411"}, {"name":"宝丰县", "zip":"410421"}, {"name":"叶县", "zip":"410422"}, {"name":"鲁山县", "zip":"410423"}, {"name":"郏县", "zip":"410425"}, {"name":"舞钢市", "zip":"410481"}, {"name":"汝州市", "zip":"410482"}]}, {"name":"安阳市", "zip":"410500", "county":[{"name":"市辖区", "zip":"410501"}, {"name":"文峰区", "zip":"410502"}, {"name":"北关区", "zip":"410503"}, {"name":"殷都区", "zip":"410505"}, {"name":"龙安区", "zip":"410506"}, {"name":"安阳县", "zip":"410522"}, {"name":"汤阴县", "zip":"410523"}, {"name":"滑县", "zip":"410526"}, {"name":"内黄县", "zip":"410527"}, {"name":"林州市", "zip":"410581"}]}, {"name":"鹤壁市", "zip":"410600", "county":[{"name":"市辖区", "zip":"410601"}, {"name":"鹤山区", "zip":"410602"}, {"name":"山城区", "zip":"410603"}, {"name":"淇滨区", "zip":"410611"}, {"name":"浚县", "zip":"410621"}, {"name":"淇县", "zip":"410622"}]}, {"name":"新乡市", "zip":"410700", "county":[{"name":"市辖区", "zip":"410701"}, {"name":"红旗区", "zip":"410702"}, {"name":"卫滨区", "zip":"410703"}, {"name":"凤泉区", "zip":"410704"}, {"name":"牧野区", "zip":"410711"}, {"name":"新乡县", "zip":"410721"}, {"name":"获嘉县", "zip":"410724"}, {"name":"原阳县", "zip":"410725"}, {"name":"延津县", "zip":"410726"}, {"name":"封丘县", "zip":"410727"}, {"name":"长垣县", "zip":"410728"}, {"name":"卫辉市", "zip":"410781"}, {"name":"辉县市", "zip":"410782"}]}, {"name":"焦作市", "zip":"410800", "county":[{"name":"市辖区", "zip":"410801"}, {"name":"解放区", "zip":"410802"}, {"name":"中站区", "zip":"410803"}, {"name":"马村区", "zip":"410804"}, {"name":"山阳区", "zip":"410811"}, {"name":"修武县", "zip":"410821"}, {"name":"博爱县", "zip":"410822"}, {"name":"武陟县", "zip":"410823"}, {"name":"温县", "zip":"410825"}, {"name":"沁阳市", "zip":"410882"}, {"name":"孟州市", "zip":"410883"}]}, {"name":"濮阳市", "zip":"410900", "county":[{"name":"市辖区", "zip":"410901"}, {"name":"华龙区", "zip":"410902"}, {"name":"清丰县", "zip":"410922"}, {"name":"南乐县", "zip":"410923"}, {"name":"范县", "zip":"410926"}, {"name":"台前县", "zip":"410927"}, {"name":"濮阳县", "zip":"410928"}]}, {"name":"许昌市", "zip":"411000", "county":[{"name":"市辖区", "zip":"411001"}, {"name":"魏都区", "zip":"411002"}, {"name":"许昌县", "zip":"411023"}, {"name":"鄢陵县", "zip":"411024"}, {"name":"襄城县", "zip":"411025"}, {"name":"禹州市", "zip":"411081"}, {"name":"长葛市", "zip":"411082"}]}, {"name":"漯河市", "zip":"411100", "county":[{"name":"市辖区", "zip":"411101"}, {"name":"源汇区", "zip":"411102"}, {"name":"郾城区", "zip":"411103"}, {"name":"召陵区", "zip":"411104"}, {"name":"舞阳县", "zip":"411121"}, {"name":"临颍县", "zip":"411122"}]}, {"name":"三门峡市", "zip":"411200", "county":[{"name":"市辖区", "zip":"411201"}, {"name":"湖滨区", "zip":"411202"}, {"name":"渑池县", "zip":"411221"}, {"name":"陕县", "zip":"411222"}, {"name":"卢氏县", "zip":"411224"}, {"name":"义马市", "zip":"411281"}, {"name":"灵宝市", "zip":"411282"}]}, {"name":"南阳市", "zip":"411300", "county":[{"name":"市辖区", "zip":"411301"}, {"name":"宛城区", "zip":"411302"}, {"name":"卧龙区", "zip":"411303"}, {"name":"南召县", "zip":"411321"}, {"name":"方城县", "zip":"411322"}, {"name":"西峡县", "zip":"411323"}, {"name":"镇平县", "zip":"411324"}, {"name":"内乡县", "zip":"411325"}, {"name":"淅川县", "zip":"411326"}, {"name":"社旗县", "zip":"411327"}, {"name":"唐河县", "zip":"411328"}, {"name":"新野县", "zip":"411329"}, {"name":"桐柏县", "zip":"411330"}, {"name":"邓州市", "zip":"411381"}]}, {"name":"商丘市", "zip":"411400", "county":[{"name":"市辖区", "zip":"411401"}, {"name":"梁园区", "zip":"411402"}, {"name":"睢阳区", "zip":"411403"}, {"name":"民权县", "zip":"411421"}, {"name":"睢县", "zip":"411422"}, {"name":"宁陵县", "zip":"411423"}, {"name":"柘城县", "zip":"411424"}, {"name":"虞城县", "zip":"411425"}, {"name":"夏邑县", "zip":"411426"}, {"name":"永城市", "zip":"411481"}]}, {"name":"信阳市", "zip":"411500", "county":[{"name":"市辖区", "zip":"411501"}, {"name":"浉河区", "zip":"411502"}, {"name":"平桥区", "zip":"411503"}, {"name":"罗山县", "zip":"411521"}, {"name":"光山县", "zip":"411522"}, {"name":"新县", "zip":"411523"}, {"name":"商城县", "zip":"411524"}, {"name":"固始县", "zip":"411525"}, {"name":"潢川县", "zip":"411526"}, {"name":"淮滨县", "zip":"411527"}, {"name":"息县", "zip":"411528"}]}, {"name":"周口市", "zip":"411600", "county":[{"name":"市辖区", "zip":"411601"}, {"name":"川汇区", "zip":"411602"}, {"name":"扶沟县", "zip":"411621"}, {"name":"西华县", "zip":"411622"}, {"name":"商水县", "zip":"411623"}, {"name":"沈丘县", "zip":"411624"}, {"name":"郸城县", "zip":"411625"}, {"name":"淮阳县", "zip":"411626"}, {"name":"太康县", "zip":"411627"}, {"name":"鹿邑县", "zip":"411628"}, {"name":"项城市", "zip":"411681"}]}, {"name":"驻马店市", "zip":"411700", "county":[{"name":"市辖区", "zip":"411701"}, {"name":"驿城区", "zip":"411702"}, {"name":"西平县", "zip":"411721"}, {"name":"上蔡县", "zip":"411722"}, {"name":"平舆县", "zip":"411723"}, {"name":"正阳县", "zip":"411724"}, {"name":"确山县", "zip":"411725"}, {"name":"泌阳县", "zip":"411726"}, {"name":"汝南县", "zip":"411727"}, {"name":"遂平县", "zip":"411728"}, {"name":"新蔡县", "zip":"411729"}]}, {"name":"省直辖县级行政区划", "zip":"419000", "county":{"name":"济源市", "zip":"419001"}}]}, {"name":"湖北省", "zip":"420000", "city":[{"name":"武汉市", "zip":"420100", "county":[{"name":"市辖区", "zip":"420101"}, {"name":"江岸区", "zip":"420102"}, {"name":"江汉区", "zip":"420103"}, {"name":"硚口区", "zip":"420104"}, {"name":"汉阳区", "zip":"420105"}, {"name":"武昌区", "zip":"420106"}, {"name":"青山区", "zip":"420107"}, {"name":"洪山区", "zip":"420111"}, {"name":"东西湖区", "zip":"420112"}, {"name":"汉南区", "zip":"420113"}, {"name":"蔡甸区", "zip":"420114"}, {"name":"江夏区", "zip":"420115"}, {"name":"黄陂区", "zip":"420116"}, {"name":"新洲区", "zip":"420117"}]}, {"name":"黄石市", "zip":"420200", "county":[{"name":"市辖区", "zip":"420201"}, {"name":"黄石港区", "zip":"420202"}, {"name":"西塞山区", "zip":"420203"}, {"name":"下陆区", "zip":"420204"}, {"name":"铁山区", "zip":"420205"}, {"name":"阳新县", "zip":"420222"}, {"name":"大冶市", "zip":"420281"}]}, {"name":"十堰市", "zip":"420300", "county":[{"name":"市辖区", "zip":"420301"}, {"name":"茅箭区", "zip":"420302"}, {"name":"张湾区", "zip":"420303"}, {"name":"郧县", "zip":"420321"}, {"name":"郧西县", "zip":"420322"}, {"name":"竹山县", "zip":"420323"}, {"name":"竹溪县", "zip":"420324"}, {"name":"房县", "zip":"420325"}, {"name":"丹江口市", "zip":"420381"}]}, {"name":"宜昌市", "zip":"420500", "county":[{"name":"市辖区", "zip":"420501"}, {"name":"西陵区", "zip":"420502"}, {"name":"伍家岗区", "zip":"420503"}, {"name":"点军区", "zip":"420504"}, {"name":"猇亭区", "zip":"420505"}, {"name":"夷陵区", "zip":"420506"}, {"name":"远安县", "zip":"420525"}, {"name":"兴山县", "zip":"420526"}, {"name":"秭归县", "zip":"420527"}, {"name":"长阳土家族自治县", "zip":"420528"}, {"name":"五峰土家族自治县", "zip":"420529"}, {"name":"宜都市", "zip":"420581"}, {"name":"当阳市", "zip":"420582"}, {"name":"枝江市", "zip":"420583"}]}, {"name":"襄阳市", "zip":"420600", "county":[{"name":"市辖区", "zip":"420601"}, {"name":"襄城区", "zip":"420602"}, {"name":"樊城区", "zip":"420606"}, {"name":"襄州区", "zip":"420607"}, {"name":"南漳县", "zip":"420624"}, {"name":"谷城县", "zip":"420625"}, {"name":"保康县", "zip":"420626"}, {"name":"老河口市", "zip":"420682"}, {"name":"枣阳市", "zip":"420683"}, {"name":"宜城市", "zip":"420684"}]}, {"name":"鄂州市", "zip":"420700", "county":[{"name":"市辖区", "zip":"420701"}, {"name":"梁子湖区", "zip":"420702"}, {"name":"华容区", "zip":"420703"}, {"name":"鄂城区", "zip":"420704"}]}, {"name":"荆门市", "zip":"420800", "county":[{"name":"市辖区", "zip":"420801"}, {"name":"东宝区", "zip":"420802"}, {"name":"掇刀区", "zip":"420804"}, {"name":"京山县", "zip":"420821"}, {"name":"沙洋县", "zip":"420822"}, {"name":"钟祥市", "zip":"420881"}]}, {"name":"孝感市", "zip":"420900", "county":[{"name":"市辖区", "zip":"420901"}, {"name":"孝南区", "zip":"420902"}, {"name":"孝昌县", "zip":"420921"}, {"name":"大悟县", "zip":"420922"}, {"name":"云梦县", "zip":"420923"}, {"name":"应城市", "zip":"420981"}, {"name":"安陆市", "zip":"420982"}, {"name":"汉川市", "zip":"420984"}]}, {"name":"荆州市", "zip":"421000", "county":[{"name":"市辖区", "zip":"421001"}, {"name":"沙市区", "zip":"421002"}, {"name":"荆州区", "zip":"421003"}, {"name":"公安县", "zip":"421022"}, {"name":"监利县", "zip":"421023"}, {"name":"江陵县", "zip":"421024"}, {"name":"石首市", "zip":"421081"}, {"name":"洪湖市", "zip":"421083"}, {"name":"松滋市", "zip":"421087"}]}, {"name":"黄冈市", "zip":"421100", "county":[{"name":"市辖区", "zip":"421101"}, {"name":"黄州区", "zip":"421102"}, {"name":"团风县", "zip":"421121"}, {"name":"红安县", "zip":"421122"}, {"name":"罗田县", "zip":"421123"}, {"name":"英山县", "zip":"421124"}, {"name":"浠水县", "zip":"421125"}, {"name":"蕲春县", "zip":"421126"}, {"name":"黄梅县", "zip":"421127"}, {"name":"麻城市", "zip":"421181"}, {"name":"武穴市", "zip":"421182"}]}, {"name":"咸宁市", "zip":"421200", "county":[{"name":"市辖区", "zip":"421201"}, {"name":"咸安区", "zip":"421202"}, {"name":"嘉鱼县", "zip":"421221"}, {"name":"通城县", "zip":"421222"}, {"name":"崇阳县", "zip":"421223"}, {"name":"通山县", "zip":"421224"}, {"name":"赤壁市", "zip":"421281"}]}, {"name":"随州市", "zip":"421300", "county":[{"name":"市辖区", "zip":"421301"}, {"name":"曾都区", "zip":"421303"}, {"name":"随县", "zip":"421321"}, {"name":"广水市", "zip":"421381"}]}, {"name":"恩施土家族苗族自治州", "zip":"422800", "county":[{"name":"恩施市", "zip":"422801"}, {"name":"利川市", "zip":"422802"}, {"name":"建始县", "zip":"422822"}, {"name":"巴东县", "zip":"422823"}, {"name":"宣恩县", "zip":"422825"}, {"name":"咸丰县", "zip":"422826"}, {"name":"来凤县", "zip":"422827"}, {"name":"鹤峰县", "zip":"422828"}]}, {"name":"省直辖县级行政区划", "zip":"429000", "county":[{"name":"仙桃市", "zip":"429004"}, {"name":"潜江市", "zip":"429005"}, {"name":"天门市", "zip":"429006"}, {"name":"神农架林区", "zip":"429021"}]}]}, {"name":"湖南省", "zip":"430000", "city":[{"name":"长沙市", "zip":"430100", "county":[{"name":"市辖区", "zip":"430101"}, {"name":"芙蓉区", "zip":"430102"}, {"name":"天心区", "zip":"430103"}, {"name":"岳麓区", "zip":"430104"}, {"name":"开福区", "zip":"430105"}, {"name":"雨花区", "zip":"430111"}, {"name":"望城区", "zip":"430112"}, {"name":"长沙县", "zip":"430121"}, {"name":"宁乡县", "zip":"430124"}, {"name":"浏阳市", "zip":"430181"}]}, {"name":"株洲市", "zip":"430200", "county":[{"name":"市辖区", "zip":"430201"}, {"name":"荷塘区", "zip":"430202"}, {"name":"芦淞区", "zip":"430203"}, {"name":"石峰区", "zip":"430204"}, {"name":"天元区", "zip":"430211"}, {"name":"株洲县", "zip":"430221"}, {"name":"攸县", "zip":"430223"}, {"name":"茶陵县", "zip":"430224"}, {"name":"炎陵县", "zip":"430225"}, {"name":"醴陵市", "zip":"430281"}]}, {"name":"湘潭市", "zip":"430300", "county":[{"name":"市辖区", "zip":"430301"}, {"name":"雨湖区", "zip":"430302"}, {"name":"岳塘区", "zip":"430304"}, {"name":"湘潭县", "zip":"430321"}, {"name":"湘乡市", "zip":"430381"}, {"name":"韶山市", "zip":"430382"}]}, {"name":"衡阳市", "zip":"430400", "county":[{"name":"市辖区", "zip":"430401"}, {"name":"珠晖区", "zip":"430405"}, {"name":"雁峰区", "zip":"430406"}, {"name":"石鼓区", "zip":"430407"}, {"name":"蒸湘区", "zip":"430408"}, {"name":"南岳区", "zip":"430412"}, {"name":"衡阳县", "zip":"430421"}, {"name":"衡南县", "zip":"430422"}, {"name":"衡山县", "zip":"430423"}, {"name":"衡东县", "zip":"430424"}, {"name":"祁东县", "zip":"430426"}, {"name":"耒阳市", "zip":"430481"}, {"name":"常宁市", "zip":"430482"}]}, {"name":"邵阳市", "zip":"430500", "county":[{"name":"市辖区", "zip":"430501"}, {"name":"双清区", "zip":"430502"}, {"name":"大祥区", "zip":"430503"}, {"name":"北塔区", "zip":"430511"}, {"name":"邵东县", "zip":"430521"}, {"name":"新邵县", "zip":"430522"}, {"name":"邵阳县", "zip":"430523"}, {"name":"隆回县", "zip":"430524"}, {"name":"洞口县", "zip":"430525"}, {"name":"绥宁县", "zip":"430527"}, {"name":"新宁县", "zip":"430528"}, {"name":"城步苗族自治县", "zip":"430529"}, {"name":"武冈市", "zip":"430581"}]}, {"name":"岳阳市", "zip":"430600", "county":[{"name":"市辖区", "zip":"430601"}, {"name":"岳阳楼区", "zip":"430602"}, {"name":"云溪区", "zip":"430603"}, {"name":"君山区", "zip":"430611"}, {"name":"岳阳县", "zip":"430621"}, {"name":"华容县", "zip":"430623"}, {"name":"湘阴县", "zip":"430624"}, {"name":"平江县", "zip":"430626"}, {"name":"汨罗市", "zip":"430681"}, {"name":"临湘市", "zip":"430682"}]}, {"name":"常德市", "zip":"430700", "county":[{"name":"市辖区", "zip":"430701"}, {"name":"武陵区", "zip":"430702"}, {"name":"鼎城区", "zip":"430703"}, {"name":"安乡县", "zip":"430721"}, {"name":"汉寿县", "zip":"430722"}, {"name":"澧县", "zip":"430723"}, {"name":"临澧县", "zip":"430724"}, {"name":"桃源县", "zip":"430725"}, {"name":"石门县", "zip":"430726"}, {"name":"津市市", "zip":"430781"}]}, {"name":"张家界市", "zip":"430800", "county":[{"name":"市辖区", "zip":"430801"}, {"name":"永定区", "zip":"430802"}, {"name":"武陵源区", "zip":"430811"}, {"name":"慈利县", "zip":"430821"}, {"name":"桑植县", "zip":"430822"}]}, {"name":"益阳市", "zip":"430900", "county":[{"name":"市辖区", "zip":"430901"}, {"name":"资阳区", "zip":"430902"}, {"name":"赫山区", "zip":"430903"}, {"name":"南县", "zip":"430921"}, {"name":"桃江县", "zip":"430922"}, {"name":"安化县", "zip":"430923"}, {"name":"沅江市", "zip":"430981"}]}, {"name":"郴州市", "zip":"431000", "county":[{"name":"市辖区", "zip":"431001"}, {"name":"北湖区", "zip":"431002"}, {"name":"苏仙区", "zip":"431003"}, {"name":"桂阳县", "zip":"431021"}, {"name":"宜章县", "zip":"431022"}, {"name":"永兴县", "zip":"431023"}, {"name":"嘉禾县", "zip":"431024"}, {"name":"临武县", "zip":"431025"}, {"name":"汝城县", "zip":"431026"}, {"name":"桂东县", "zip":"431027"}, {"name":"安仁县", "zip":"431028"}, {"name":"资兴市", "zip":"431081"}]}, {"name":"永州市", "zip":"431100", "county":[{"name":"市辖区", "zip":"431101"}, {"name":"零陵区", "zip":"431102"}, {"name":"冷水滩区", "zip":"431103"}, {"name":"祁阳县", "zip":"431121"}, {"name":"东安县", "zip":"431122"}, {"name":"双牌县", "zip":"431123"}, {"name":"道县", "zip":"431124"}, {"name":"江永县", "zip":"431125"}, {"name":"宁远县", "zip":"431126"}, {"name":"蓝山县", "zip":"431127"}, {"name":"新田县", "zip":"431128"}, {"name":"江华瑶族自治县", "zip":"431129"}]}, {"name":"怀化市", "zip":"431200", "county":[{"name":"市辖区", "zip":"431201"}, {"name":"鹤城区", "zip":"431202"}, {"name":"中方县", "zip":"431221"}, {"name":"沅陵县", "zip":"431222"}, {"name":"辰溪县", "zip":"431223"}, {"name":"溆浦县", "zip":"431224"}, {"name":"会同县", "zip":"431225"}, {"name":"麻阳苗族自治县", "zip":"431226"}, {"name":"新晃侗族自治县", "zip":"431227"}, {"name":"芷江侗族自治县", "zip":"431228"}, {"name":"靖州苗族侗族自治县", "zip":"431229"}, {"name":"通道侗族自治县", "zip":"431230"}, {"name":"洪江市", "zip":"431281"}]}, {"name":"娄底市", "zip":"431300", "county":[{"name":"市辖区", "zip":"431301"}, {"name":"娄星区", "zip":"431302"}, {"name":"双峰县", "zip":"431321"}, {"name":"新化县", "zip":"431322"}, {"name":"冷水江市", "zip":"431381"}, {"name":"涟源市", "zip":"431382"}]}, {"name":"湘西土家族苗族自治州", "zip":"433100", "county":[{"name":"吉首市", "zip":"433101"}, {"name":"泸溪县", "zip":"433122"}, {"name":"凤凰县", "zip":"433123"}, {"name":"花垣县", "zip":"433124"}, {"name":"保靖县", "zip":"433125"}, {"name":"古丈县", "zip":"433126"}, {"name":"永顺县", "zip":"433127"}, {"name":"龙山县", "zip":"433130"}]}]}, {"name":"广东省", "zip":"440000", "city":[{"name":"广州市", "zip":"440100", "county":[{"name":"市辖区", "zip":"440101"}, {"name":"荔湾区", "zip":"440103"}, {"name":"越秀区", "zip":"440104"}, {"name":"海珠区", "zip":"440105"}, {"name":"天河区", "zip":"440106"}, {"name":"白云区", "zip":"440111"}, {"name":"黄埔区", "zip":"440112"}, {"name":"番禺区", "zip":"440113"}, {"name":"花都区", "zip":"440114"}, {"name":"南沙区", "zip":"440115"}, {"name":"萝岗区", "zip":"440116"}, {"name":"增城市", "zip":"440183"}, {"name":"从化市", "zip":"440184"}]}, {"name":"韶关市", "zip":"440200", "county":[{"name":"市辖区", "zip":"440201"}, {"name":"武江区", "zip":"440203"}, {"name":"浈江区", "zip":"440204"}, {"name":"曲江区", "zip":"440205"}, {"name":"始兴县", "zip":"440222"}, {"name":"仁化县", "zip":"440224"}, {"name":"翁源县", "zip":"440229"}, {"name":"乳源瑶族自治县", "zip":"440232"}, {"name":"新丰县", "zip":"440233"}, {"name":"乐昌市", "zip":"440281"}, {"name":"南雄市", "zip":"440282"}]}, {"name":"深圳市", "zip":"440300", "county":[{"name":"市辖区", "zip":"440301"}, {"name":"罗湖区", "zip":"440303"}, {"name":"福田区", "zip":"440304"}, {"name":"南山区", "zip":"440305"}, {"name":"宝安区", "zip":"440306"}, {"name":"龙岗区", "zip":"440307"}, {"name":"盐田区", "zip":"440308"}]}, {"name":"珠海市", "zip":"440400", "county":[{"name":"市辖区", "zip":"440401"}, {"name":"香洲区", "zip":"440402"}, {"name":"斗门区", "zip":"440403"}, {"name":"金湾区", "zip":"440404"}]}, {"name":"汕头市", "zip":"440500", "county":[{"name":"市辖区", "zip":"440501"}, {"name":"龙湖区", "zip":"440507"}, {"name":"金平区", "zip":"440511"}, {"name":"濠江区", "zip":"440512"}, {"name":"潮阳区", "zip":"440513"}, {"name":"潮南区", "zip":"440514"}, {"name":"澄海区", "zip":"440515"}, {"name":"南澳县", "zip":"440523"}]}, {"name":"佛山市", "zip":"440600", "county":[{"name":"市辖区", "zip":"440601"}, {"name":"禅城区", "zip":"440604"}, {"name":"南海区", "zip":"440605"}, {"name":"顺德区", "zip":"440606"}, {"name":"三水区", "zip":"440607"}, {"name":"高明区", "zip":"440608"}]}, {"name":"江门市", "zip":"440700", "county":[{"name":"市辖区", "zip":"440701"}, {"name":"蓬江区", "zip":"440703"}, {"name":"江海区", "zip":"440704"}, {"name":"新会区", "zip":"440705"}, {"name":"台山市", "zip":"440781"}, {"name":"开平市", "zip":"440783"}, {"name":"鹤山市", "zip":"440784"}, {"name":"恩平市", "zip":"440785"}]}, {"name":"湛江市", "zip":"440800", "county":[{"name":"市辖区", "zip":"440801"}, {"name":"赤坎区", "zip":"440802"}, {"name":"霞山区", "zip":"440803"}, {"name":"坡头区", "zip":"440804"}, {"name":"麻章区", "zip":"440811"}, {"name":"遂溪县", "zip":"440823"}, {"name":"徐闻县", "zip":"440825"}, {"name":"廉江市", "zip":"440881"}, {"name":"雷州市", "zip":"440882"}, {"name":"吴川市", "zip":"440883"}]}, {"name":"茂名市", "zip":"440900", "county":[{"name":"市辖区", "zip":"440901"}, {"name":"茂南区", "zip":"440902"}, {"name":"茂港区", "zip":"440903"}, {"name":"电白县", "zip":"440923"}, {"name":"高州市", "zip":"440981"}, {"name":"化州市", "zip":"440982"}, {"name":"信宜市", "zip":"440983"}]}, {"name":"肇庆市", "zip":"441200", "county":[{"name":"市辖区", "zip":"441201"}, {"name":"端州区", "zip":"441202"}, {"name":"鼎湖区", "zip":"441203"}, {"name":"广宁县", "zip":"441223"}, {"name":"怀集县", "zip":"441224"}, {"name":"封开县", "zip":"441225"}, {"name":"德庆县", "zip":"441226"}, {"name":"高要市", "zip":"441283"}, {"name":"四会市", "zip":"441284"}]}, {"name":"惠州市", "zip":"441300", "county":[{"name":"市辖区", "zip":"441301"}, {"name":"惠城区", "zip":"441302"}, {"name":"惠阳区", "zip":"441303"}, {"name":"博罗县", "zip":"441322"}, {"name":"惠东县", "zip":"441323"}, {"name":"龙门县", "zip":"441324"}]}, {"name":"梅州市", "zip":"441400", "county":[{"name":"市辖区", "zip":"441401"}, {"name":"梅江区", "zip":"441402"}, {"name":"梅县", "zip":"441421"}, {"name":"大埔县", "zip":"441422"}, {"name":"丰顺县", "zip":"441423"}, {"name":"五华县", "zip":"441424"}, {"name":"平远县", "zip":"441426"}, {"name":"蕉岭县", "zip":"441427"}, {"name":"兴宁市", "zip":"441481"}]}, {"name":"汕尾市", "zip":"441500", "county":[{"name":"市辖区", "zip":"441501"}, {"name":"城区", "zip":"441502"}, {"name":"海丰县", "zip":"441521"}, {"name":"陆河县", "zip":"441523"}, {"name":"陆丰市", "zip":"441581"}]}, {"name":"河源市", "zip":"441600", "county":[{"name":"市辖区", "zip":"441601"}, {"name":"源城区", "zip":"441602"}, {"name":"紫金县", "zip":"441621"}, {"name":"龙川县", "zip":"441622"}, {"name":"连平县", "zip":"441623"}, {"name":"和平县", "zip":"441624"}, {"name":"东源县", "zip":"441625"}]}, {"name":"阳江市", "zip":"441700", "county":[{"name":"市辖区", "zip":"441701"}, {"name":"江城区", "zip":"441702"}, {"name":"阳西县", "zip":"441721"}, {"name":"阳东县", "zip":"441723"}, {"name":"阳春市", "zip":"441781"}]}, {"name":"清远市", "zip":"441800", "county":[{"name":"市辖区", "zip":"441801"}, {"name":"清城区", "zip":"441802"}, {"name":"佛冈县", "zip":"441821"}, {"name":"阳山县", "zip":"441823"}, {"name":"连山壮族瑶族自治县", "zip":"441825"}, {"name":"连南瑶族自治县", "zip":"441826"}, {"name":"清新县", "zip":"441827"}, {"name":"英德市", "zip":"441881"}, {"name":"连州市", "zip":"441882"}]}, {"name":"东莞市", "zip":"441900"}, {"name":"中山市", "zip":"442000"}, {"name":"潮州市", "zip":"445100", "county":[{"name":"市辖区", "zip":"445101"}, {"name":"湘桥区", "zip":"445102"}, {"name":"潮安县", "zip":"445121"}, {"name":"饶平县", "zip":"445122"}]}, {"name":"揭阳市", "zip":"445200", "county":[{"name":"市辖区", "zip":"445201"}, {"name":"榕城区", "zip":"445202"}, {"name":"揭东县", "zip":"445221"}, {"name":"揭西县", "zip":"445222"}, {"name":"惠来县", "zip":"445224"}, {"name":"普宁市", "zip":"445281"}]}, {"name":"云浮市", "zip":"445300", "county":[{"name":"市辖区", "zip":"445301"}, {"name":"云城区", "zip":"445302"}, {"name":"新兴县", "zip":"445321"}, {"name":"郁南县", "zip":"445322"}, {"name":"云安县", "zip":"445323"}, {"name":"罗定市", "zip":"445381"}]}]}, {"name":"广西壮族自治区", "zip":"450000", "city":[{"name":"南宁市", "zip":"450100", "county":[{"name":"市辖区", "zip":"450101"}, {"name":"兴宁区", "zip":"450102"}, {"name":"青秀区", "zip":"450103"}, {"name":"江南区", "zip":"450105"}, {"name":"西乡塘区", "zip":"450107"}, {"name":"良庆区", "zip":"450108"}, {"name":"邕宁区", "zip":"450109"}, {"name":"武鸣县", "zip":"450122"}, {"name":"隆安县", "zip":"450123"}, {"name":"马山县", "zip":"450124"}, {"name":"上林县", "zip":"450125"}, {"name":"宾阳县", "zip":"450126"}, {"name":"横县", "zip":"450127"}]}, {"name":"柳州市", "zip":"450200", "county":[{"name":"市辖区", "zip":"450201"}, {"name":"城中区", "zip":"450202"}, {"name":"鱼峰区", "zip":"450203"}, {"name":"柳南区", "zip":"450204"}, {"name":"柳北区", "zip":"450205"}, {"name":"柳江县", "zip":"450221"}, {"name":"柳城县", "zip":"450222"}, {"name":"鹿寨县", "zip":"450223"}, {"name":"融安县", "zip":"450224"}, {"name":"融水苗族自治县", "zip":"450225"}, {"name":"三江侗族自治县", "zip":"450226"}]}, {"name":"桂林市", "zip":"450300", "county":[{"name":"市辖区", "zip":"450301"}, {"name":"秀峰区", "zip":"450302"}, {"name":"叠彩区", "zip":"450303"}, {"name":"象山区", "zip":"450304"}, {"name":"七星区", "zip":"450305"}, {"name":"雁山区", "zip":"450311"}, {"name":"阳朔县", "zip":"450321"}, {"name":"临桂县", "zip":"450322"}, {"name":"灵川县", "zip":"450323"}, {"name":"全州县", "zip":"450324"}, {"name":"兴安县", "zip":"450325"}, {"name":"永福县", "zip":"450326"}, {"name":"灌阳县", "zip":"450327"}, {"name":"龙胜各族自治县", "zip":"450328"}, {"name":"资源县", "zip":"450329"}, {"name":"平乐县", "zip":"450330"}, {"name":"荔浦县", "zip":"450331"}, {"name":"恭城瑶族自治县", "zip":"450332"}]}, {"name":"梧州市", "zip":"450400", "county":[{"name":"市辖区", "zip":"450401"}, {"name":"万秀区", "zip":"450403"}, {"name":"蝶山区", "zip":"450404"}, {"name":"长洲区", "zip":"450405"}, {"name":"苍梧县", "zip":"450421"}, {"name":"藤县", "zip":"450422"}, {"name":"蒙山县", "zip":"450423"}, {"name":"岑溪市", "zip":"450481"}]}, {"name":"北海市", "zip":"450500", "county":[{"name":"市辖区", "zip":"450501"}, {"name":"海城区", "zip":"450502"}, {"name":"银海区", "zip":"450503"}, {"name":"铁山港区", "zip":"450512"}, {"name":"合浦县", "zip":"450521"}]}, {"name":"防城港市", "zip":"450600", "county":[{"name":"市辖区", "zip":"450601"}, {"name":"港口区", "zip":"450602"}, {"name":"防城区", "zip":"450603"}, {"name":"上思县", "zip":"450621"}, {"name":"东兴市", "zip":"450681"}]}, {"name":"钦州市", "zip":"450700", "county":[{"name":"市辖区", "zip":"450701"}, {"name":"钦南区", "zip":"450702"}, {"name":"钦北区", "zip":"450703"}, {"name":"灵山县", "zip":"450721"}, {"name":"浦北县", "zip":"450722"}]}, {"name":"贵港市", "zip":"450800", "county":[{"name":"市辖区", "zip":"450801"}, {"name":"港北区", "zip":"450802"}, {"name":"港南区", "zip":"450803"}, {"name":"覃塘区", "zip":"450804"}, {"name":"平南县", "zip":"450821"}, {"name":"桂平市", "zip":"450881"}]}, {"name":"玉林市", "zip":"450900", "county":[{"name":"市辖区", "zip":"450901"}, {"name":"玉州区", "zip":"450902"}, {"name":"容县", "zip":"450921"}, {"name":"陆川县", "zip":"450922"}, {"name":"博白县", "zip":"450923"}, {"name":"兴业县", "zip":"450924"}, {"name":"北流市", "zip":"450981"}]}, {"name":"百色市", "zip":"451000", "county":[{"name":"市辖区", "zip":"451001"}, {"name":"右江区", "zip":"451002"}, {"name":"田阳县", "zip":"451021"}, {"name":"田东县", "zip":"451022"}, {"name":"平果县", "zip":"451023"}, {"name":"德保县", "zip":"451024"}, {"name":"靖西县", "zip":"451025"}, {"name":"那坡县", "zip":"451026"}, {"name":"凌云县", "zip":"451027"}, {"name":"乐业县", "zip":"451028"}, {"name":"田林县", "zip":"451029"}, {"name":"西林县", "zip":"451030"}, {"name":"隆林各族自治县", "zip":"451031"}]}, {"name":"贺州市", "zip":"451100", "county":[{"name":"市辖区", "zip":"451101"}, {"name":"八步区", "zip":"451102"}, {"name":"昭平县", "zip":"451121"}, {"name":"钟山县", "zip":"451122"}, {"name":"富川瑶族自治县", "zip":"451123"}]}, {"name":"河池市", "zip":"451200", "county":[{"name":"市辖区", "zip":"451201"}, {"name":"金城江区", "zip":"451202"}, {"name":"南丹县", "zip":"451221"}, {"name":"天峨县", "zip":"451222"}, {"name":"凤山县", "zip":"451223"}, {"name":"东兰县", "zip":"451224"}, {"name":"罗城仫佬族自治县", "zip":"451225"}, {"name":"环江毛南族自治县", "zip":"451226"}, {"name":"巴马瑶族自治县", "zip":"451227"}, {"name":"都安瑶族自治县", "zip":"451228"}, {"name":"大化瑶族自治县", "zip":"451229"}, {"name":"宜州市", "zip":"451281"}]}, {"name":"来宾市", "zip":"451300", "county":[{"name":"市辖区", "zip":"451301"}, {"name":"兴宾区", "zip":"451302"}, {"name":"忻城县", "zip":"451321"}, {"name":"象州县", "zip":"451322"}, {"name":"武宣县", "zip":"451323"}, {"name":"金秀瑶族自治县", "zip":"451324"}, {"name":"合山市", "zip":"451381"}]}, {"name":"崇左市", "zip":"451400", "county":[{"name":"市辖区", "zip":"451401"}, {"name":"江洲区", "zip":"451402"}, {"name":"扶绥县", "zip":"451421"}, {"name":"宁明县", "zip":"451422"}, {"name":"龙州县", "zip":"451423"}, {"name":"大新县", "zip":"451424"}, {"name":"天等县", "zip":"451425"}, {"name":"凭祥市", "zip":"451481"}]}]}, {"name":"海南省", "zip":"460000", "city":[{"name":"海口市", "zip":"460100", "county":[{"name":"市辖区", "zip":"460101"}, {"name":"秀英区", "zip":"460105"}, {"name":"龙华区", "zip":"460106"}, {"name":"琼山区", "zip":"460107"}, {"name":"美兰区", "zip":"460108"}]}, {"name":"三亚市", "zip":"460200", "county":{"name":"市辖区", "zip":"460201"}}, {"name":"三沙市", "zip":"460300", "county":[{"name":"西沙群岛", "zip":"460321"}, {"name":"南沙群岛", "zip":"460322"}, {"name":"中沙群岛的岛礁及其海域", "zip":"460323"}]}, {"name":"省直辖县级行政区划", "zip":"469000", "county":[{"name":"五指山市", "zip":"469001"}, {"name":"琼海市", "zip":"469002"}, {"name":"儋州市", "zip":"469003"}, {"name":"文昌市", "zip":"469005"}, {"name":"万宁市", "zip":"469006"}, {"name":"东方市", "zip":"469007"}, {"name":"定安县", "zip":"469021"}, {"name":"屯昌县", "zip":"469022"}, {"name":"澄迈县", "zip":"469023"}, {"name":"临高县", "zip":"469024"}, {"name":"白沙黎族自治县", "zip":"469025"}, {"name":"昌江黎族自治县", "zip":"469026"}, {"name":"乐东黎族自治县", "zip":"469027"}, {"name":"陵水黎族自治县", "zip":"469028"}, {"name":"保亭黎族苗族自治县", "zip":"469029"}, {"name":"琼中黎族苗族自治县", "zip":"469030"}]}]}, {"name":"重庆市", "zip":"500000", "city":[{"name":"市辖区", "zip":"500100", "county":[{"name":"万州区", "zip":"500101"}, {"name":"涪陵区", "zip":"500102"}, {"name":"渝中区", "zip":"500103"}, {"name":"大渡口区", "zip":"500104"}, {"name":"江北区", "zip":"500105"}, {"name":"沙坪坝区", "zip":"500106"}, {"name":"九龙坡区", "zip":"500107"}, {"name":"南岸区", "zip":"500108"}, {"name":"北碚区", "zip":"500109"}, {"name":"綦江区", "zip":"500110"}, {"name":"大足区", "zip":"500111"}, {"name":"渝北区", "zip":"500112"}, {"name":"巴南区", "zip":"500113"}, {"name":"黔江区", "zip":"500114"}, {"name":"长寿区", "zip":"500115"}, {"name":"江津区", "zip":"500116"}, {"name":"合川区", "zip":"500117"}, {"name":"永川区", "zip":"500118"}, {"name":"南川区", "zip":"500119"}]}, {"name":"县", "zip":"500200", "county":[{"name":"潼南县", "zip":"500223"}, {"name":"铜梁县", "zip":"500224"}, {"name":"荣昌县", "zip":"500226"}, {"name":"璧山县", "zip":"500227"}, {"name":"梁平县", "zip":"500228"}, {"name":"城口县", "zip":"500229"}, {"name":"丰都县", "zip":"500230"}, {"name":"垫江县", "zip":"500231"}, {"name":"武隆县", "zip":"500232"}, {"name":"忠县", "zip":"500233"}, {"name":"开县", "zip":"500234"}, {"name":"云阳县", "zip":"500235"}, {"name":"奉节县", "zip":"500236"}, {"name":"巫山县", "zip":"500237"}, {"name":"巫溪县", "zip":"500238"}, {"name":"石柱土家族自治县", "zip":"500240"}, {"name":"秀山土家族苗族自治县", "zip":"500241"}, {"name":"酉阳土家族苗族自治县", "zip":"500242"}, {"name":"彭水苗族土家族自治县", "zip":"500243"}]}]}, {"name":"四川省", "zip":"510000", "city":[{"name":"成都市", "zip":"510100", "county":[{"name":"市辖区", "zip":"510101"}, {"name":"锦江区", "zip":"510104"}, {"name":"青羊区", "zip":"510105"}, {"name":"金牛区", "zip":"510106"}, {"name":"武侯区", "zip":"510107"}, {"name":"成华区", "zip":"510108"}, {"name":"龙泉驿区", "zip":"510112"}, {"name":"青白江区", "zip":"510113"}, {"name":"新都区", "zip":"510114"}, {"name":"温江区", "zip":"510115"}, {"name":"金堂县", "zip":"510121"}, {"name":"双流县", "zip":"510122"}, {"name":"郫县", "zip":"510124"}, {"name":"大邑县", "zip":"510129"}, {"name":"蒲江县", "zip":"510131"}, {"name":"新津县", "zip":"510132"}, {"name":"都江堰市", "zip":"510181"}, {"name":"彭州市", "zip":"510182"}, {"name":"邛崃市", "zip":"510183"}, {"name":"崇州市", "zip":"510184"}]}, {"name":"自贡市", "zip":"510300", "county":[{"name":"市辖区", "zip":"510301"}, {"name":"自流井区", "zip":"510302"}, {"name":"贡井区", "zip":"510303"}, {"name":"大安区", "zip":"510304"}, {"name":"沿滩区", "zip":"510311"}, {"name":"荣县", "zip":"510321"}, {"name":"富顺县", "zip":"510322"}]}, {"name":"攀枝花市", "zip":"510400", "county":[{"name":"市辖区", "zip":"510401"}, {"name":"东区", "zip":"510402"}, {"name":"西区", "zip":"510403"}, {"name":"仁和区", "zip":"510411"}, {"name":"米易县", "zip":"510421"}, {"name":"盐边县", "zip":"510422"}]}, {"name":"泸州市", "zip":"510500", "county":[{"name":"市辖区", "zip":"510501"}, {"name":"江阳区", "zip":"510502"}, {"name":"纳溪区", "zip":"510503"}, {"name":"龙马潭区", "zip":"510504"}, {"name":"泸县", "zip":"510521"}, {"name":"合江县", "zip":"510522"}, {"name":"叙永县", "zip":"510524"}, {"name":"古蔺县", "zip":"510525"}]}, {"name":"德阳市", "zip":"510600", "county":[{"name":"市辖区", "zip":"510601"}, {"name":"旌阳区", "zip":"510603"}, {"name":"中江县", "zip":"510623"}, {"name":"罗江县", "zip":"510626"}, {"name":"广汉市", "zip":"510681"}, {"name":"什邡市", "zip":"510682"}, {"name":"绵竹市", "zip":"510683"}]}, {"name":"绵阳市", "zip":"510700", "county":[{"name":"市辖区", "zip":"510701"}, {"name":"涪城区", "zip":"510703"}, {"name":"游仙区", "zip":"510704"}, {"name":"三台县", "zip":"510722"}, {"name":"盐亭县", "zip":"510723"}, {"name":"安县", "zip":"510724"}, {"name":"梓潼县", "zip":"510725"}, {"name":"北川羌族自治县", "zip":"510726"}, {"name":"平武县", "zip":"510727"}, {"name":"江油市", "zip":"510781"}]}, {"name":"广元市", "zip":"510800", "county":[{"name":"市辖区", "zip":"510801"}, {"name":"利州区", "zip":"510802"}, {"name":"元坝区", "zip":"510811"}, {"name":"朝天区", "zip":"510812"}, {"name":"旺苍县", "zip":"510821"}, {"name":"青川县", "zip":"510822"}, {"name":"剑阁县", "zip":"510823"}, {"name":"苍溪县", "zip":"510824"}]}, {"name":"遂宁市", "zip":"510900", "county":[{"name":"市辖区", "zip":"510901"}, {"name":"船山区", "zip":"510903"}, {"name":"安居区", "zip":"510904"}, {"name":"蓬溪县", "zip":"510921"}, {"name":"射洪县", "zip":"510922"}, {"name":"大英县", "zip":"510923"}]}, {"name":"内江市", "zip":"511000", "county":[{"name":"市辖区", "zip":"511001"}, {"name":"市中区", "zip":"511002"}, {"name":"东兴区", "zip":"511011"}, {"name":"威远县", "zip":"511024"}, {"name":"资中县", "zip":"511025"}, {"name":"隆昌县", "zip":"511028"}]}, {"name":"乐山市", "zip":"511100", "county":[{"name":"市辖区", "zip":"511101"}, {"name":"市中区", "zip":"511102"}, {"name":"沙湾区", "zip":"511111"}, {"name":"五通桥区", "zip":"511112"}, {"name":"金口河区", "zip":"511113"}, {"name":"犍为县", "zip":"511123"}, {"name":"井研县", "zip":"511124"}, {"name":"夹江县", "zip":"511126"}, {"name":"沐川县", "zip":"511129"}, {"name":"峨边彝族自治县", "zip":"511132"}, {"name":"马边彝族自治县", "zip":"511133"}, {"name":"峨眉山市", "zip":"511181"}]}, {"name":"南充市", "zip":"511300", "county":[{"name":"市辖区", "zip":"511301"}, {"name":"顺庆区", "zip":"511302"}, {"name":"高坪区", "zip":"511303"}, {"name":"嘉陵区", "zip":"511304"}, {"name":"南部县", "zip":"511321"}, {"name":"营山县", "zip":"511322"}, {"name":"蓬安县", "zip":"511323"}, {"name":"仪陇县", "zip":"511324"}, {"name":"西充县", "zip":"511325"}, {"name":"阆中市", "zip":"511381"}]}, {"name":"眉山市", "zip":"511400", "county":[{"name":"市辖区", "zip":"511401"}, {"name":"东坡区", "zip":"511402"}, {"name":"仁寿县", "zip":"511421"}, {"name":"彭山县", "zip":"511422"}, {"name":"洪雅县", "zip":"511423"}, {"name":"丹棱县", "zip":"511424"}, {"name":"青神县", "zip":"511425"}]}, {"name":"宜宾市", "zip":"511500", "county":[{"name":"市辖区", "zip":"511501"}, {"name":"翠屏区", "zip":"511502"}, {"name":"南溪区", "zip":"511503"}, {"name":"宜宾县", "zip":"511521"}, {"name":"江安县", "zip":"511523"}, {"name":"长宁县", "zip":"511524"}, {"name":"高县", "zip":"511525"}, {"name":"珙县", "zip":"511526"}, {"name":"筠连县", "zip":"511527"}, {"name":"兴文县", "zip":"511528"}, {"name":"屏山县", "zip":"511529"}]}, {"name":"广安市", "zip":"511600", "county":[{"name":"市辖区", "zip":"511601"}, {"name":"广安区", "zip":"511602"}, {"name":"岳池县", "zip":"511621"}, {"name":"武胜县", "zip":"511622"}, {"name":"邻水县", "zip":"511623"}, {"name":"华蓥市", "zip":"511681"}]}, {"name":"达州市", "zip":"511700", "county":[{"name":"市辖区", "zip":"511701"}, {"name":"通川区", "zip":"511702"}, {"name":"达县", "zip":"511721"}, {"name":"宣汉县", "zip":"511722"}, {"name":"开江县", "zip":"511723"}, {"name":"大竹县", "zip":"511724"}, {"name":"渠县", "zip":"511725"}, {"name":"万源市", "zip":"511781"}]}, {"name":"雅安市", "zip":"511800", "county":[{"name":"市辖区", "zip":"511801"}, {"name":"雨城区", "zip":"511802"}, {"name":"名山区", "zip":"511803"}, {"name":"荥经县", "zip":"511822"}, {"name":"汉源县", "zip":"511823"}, {"name":"石棉县", "zip":"511824"}, {"name":"天全县", "zip":"511825"}, {"name":"芦山县", "zip":"511826"}, {"name":"宝兴县", "zip":"511827"}]}, {"name":"巴中市", "zip":"511900", "county":[{"name":"市辖区", "zip":"511901"}, {"name":"巴州区", "zip":"511902"}, {"name":"通江县", "zip":"511921"}, {"name":"南江县", "zip":"511922"}, {"name":"平昌县", "zip":"511923"}]}, {"name":"资阳市", "zip":"512000", "county":[{"name":"市辖区", "zip":"512001"}, {"name":"雁江区", "zip":"512002"}, {"name":"安岳县", "zip":"512021"}, {"name":"乐至县", "zip":"512022"}, {"name":"简阳市", "zip":"512081"}]}, {"name":"阿坝藏族羌族自治州", "zip":"513200", "county":[{"name":"汶川县", "zip":"513221"}, {"name":"理县", "zip":"513222"}, {"name":"茂县", "zip":"513223"}, {"name":"松潘县", "zip":"513224"}, {"name":"九寨沟县", "zip":"513225"}, {"name":"金川县", "zip":"513226"}, {"name":"小金县", "zip":"513227"}, {"name":"黑水县", "zip":"513228"}, {"name":"马尔康县", "zip":"513229"}, {"name":"壤塘县", "zip":"513230"}, {"name":"阿坝县", "zip":"513231"}, {"name":"若尔盖县", "zip":"513232"}, {"name":"红原县", "zip":"513233"}]}, {"name":"甘孜藏族自治州", "zip":"513300", "county":[{"name":"康定县", "zip":"513321"}, {"name":"泸定县", "zip":"513322"}, {"name":"丹巴县", "zip":"513323"}, {"name":"九龙县", "zip":"513324"}, {"name":"雅江县", "zip":"513325"}, {"name":"道孚县", "zip":"513326"}, {"name":"炉霍县", "zip":"513327"}, {"name":"甘孜县", "zip":"513328"}, {"name":"新龙县", "zip":"513329"}, {"name":"德格县", "zip":"513330"}, {"name":"白玉县", "zip":"513331"}, {"name":"石渠县", "zip":"513332"}, {"name":"色达县", "zip":"513333"}, {"name":"理塘县", "zip":"513334"}, {"name":"巴塘县", "zip":"513335"}, {"name":"乡城县", "zip":"513336"}, {"name":"稻城县", "zip":"513337"}, {"name":"得荣县", "zip":"513338"}]}, {"name":"凉山彝族自治州", "zip":"513400", "county":[{"name":"西昌市", "zip":"513401"}, {"name":"木里藏族自治县", "zip":"513422"}, {"name":"盐源县", "zip":"513423"}, {"name":"德昌县", "zip":"513424"}, {"name":"会理县", "zip":"513425"}, {"name":"会东县", "zip":"513426"}, {"name":"宁南县", "zip":"513427"}, {"name":"普格县", "zip":"513428"}, {"name":"布拖县", "zip":"513429"}, {"name":"金阳县", "zip":"513430"}, {"name":"昭觉县", "zip":"513431"}, {"name":"喜德县", "zip":"513432"}, {"name":"冕宁县", "zip":"513433"}, {"name":"越西县", "zip":"513434"}, {"name":"甘洛县", "zip":"513435"}, {"name":"美姑县", "zip":"513436"}, {"name":"雷波县", "zip":"513437"}]}]}, {"name":"贵州省", "zip":"520000", "city":[{"name":"贵阳市", "zip":"520100", "county":[{"name":"市辖区", "zip":"520101"}, {"name":"南明区", "zip":"520102"}, {"name":"云岩区", "zip":"520103"}, {"name":"花溪区", "zip":"520111"}, {"name":"乌当区", "zip":"520112"}, {"name":"白云区", "zip":"520113"}, {"name":"小河区", "zip":"520114"}, {"name":"开阳县", "zip":"520121"}, {"name":"息烽县", "zip":"520122"}, {"name":"修文县", "zip":"520123"}, {"name":"清镇市", "zip":"520181"}]}, {"name":"六盘水市", "zip":"520200", "county":[{"name":"钟山区", "zip":"520201"}, {"name":"六枝特区", "zip":"520203"}, {"name":"水城县", "zip":"520221"}, {"name":"盘县", "zip":"520222"}]}, {"name":"遵义市", "zip":"520300", "county":[{"name":"市辖区", "zip":"520301"}, {"name":"红花岗区", "zip":"520302"}, {"name":"汇川区", "zip":"520303"}, {"name":"遵义县", "zip":"520321"}, {"name":"桐梓县", "zip":"520322"}, {"name":"绥阳县", "zip":"520323"}, {"name":"正安县", "zip":"520324"}, {"name":"道真仡佬族苗族自治县", "zip":"520325"}, {"name":"务川仡佬族苗族自治县", "zip":"520326"}, {"name":"凤冈县", "zip":"520327"}, {"name":"湄潭县", "zip":"520328"}, {"name":"余庆县", "zip":"520329"}, {"name":"习水县", "zip":"520330"}, {"name":"赤水市", "zip":"520381"}, {"name":"仁怀市", "zip":"520382"}]}, {"name":"安顺市", "zip":"520400", "county":[{"name":"市辖区", "zip":"520401"}, {"name":"西秀区", "zip":"520402"}, {"name":"平坝县", "zip":"520421"}, {"name":"普定县", "zip":"520422"}, {"name":"镇宁布依族苗族自治县", "zip":"520423"}, {"name":"关岭布依族苗族自治县", "zip":"520424"}, {"name":"紫云苗族布依族自治县", "zip":"520425"}]}, {"name":"毕节市", "zip":"520500", "county":[{"name":"七星关区", "zip":"520502"}, {"name":"大方县", "zip":"520521"}, {"name":"黔西县", "zip":"520522"}, {"name":"金沙县", "zip":"520523"}, {"name":"织金县", "zip":"520524"}, {"name":"纳雍县", "zip":"520525"}, {"name":"威宁彝族回族苗族自治县", "zip":"520526"}, {"name":"赫章县", "zip":"520527"}]}, {"name":"铜仁市", "zip":"520600", "county":[{"name":"碧江区", "zip":"520602"}, {"name":"万山区", "zip":"520603"}, {"name":"江口县", "zip":"520621"}, {"name":"玉屏侗族自治县", "zip":"520622"}, {"name":"石阡县", "zip":"520623"}, {"name":"思南县", "zip":"520624"}, {"name":"印江土家族苗族自治县", "zip":"520625"}, {"name":"德江县", "zip":"520626"}, {"name":"沿河土家族自治县", "zip":"520627"}, {"name":"松桃苗族自治县", "zip":"520628"}]}, {"name":"黔西南布依族苗族自治州", "zip":"522300", "county":[{"name":"兴义市", "zip":"522301"}, {"name":"兴仁县", "zip":"522322"}, {"name":"普安县", "zip":"522323"}, {"name":"晴隆县", "zip":"522324"}, {"name":"贞丰县", "zip":"522325"}, {"name":"望谟县", "zip":"522326"}, {"name":"册亨县", "zip":"522327"}, {"name":"安龙县", "zip":"522328"}]}, {"name":"黔东南苗族侗族自治州", "zip":"522600", "county":[{"name":"凯里市", "zip":"522601"}, {"name":"黄平县", "zip":"522622"}, {"name":"施秉县", "zip":"522623"}, {"name":"三穗县", "zip":"522624"}, {"name":"镇远县", "zip":"522625"}, {"name":"岑巩县", "zip":"522626"}, {"name":"天柱县", "zip":"522627"}, {"name":"锦屏县", "zip":"522628"}, {"name":"剑河县", "zip":"522629"}, {"name":"台江县", "zip":"522630"}, {"name":"黎平县", "zip":"522631"}, {"name":"榕江县", "zip":"522632"}, {"name":"从江县", "zip":"522633"}, {"name":"雷山县", "zip":"522634"}, {"name":"麻江县", "zip":"522635"}, {"name":"丹寨县", "zip":"522636"}]}, {"name":"黔南布依族苗族自治州", "zip":"522700", "county":[{"name":"都匀市", "zip":"522701"}, {"name":"福泉市", "zip":"522702"}, {"name":"荔波县", "zip":"522722"}, {"name":"贵定县", "zip":"522723"}, {"name":"瓮安县", "zip":"522725"}, {"name":"独山县", "zip":"522726"}, {"name":"平塘县", "zip":"522727"}, {"name":"罗甸县", "zip":"522728"}, {"name":"长顺县", "zip":"522729"}, {"name":"龙里县", "zip":"522730"}, {"name":"惠水县", "zip":"522731"}, {"name":"三都水族自治县", "zip":"522732"}]}]}, {"name":"云南省", "zip":"530000", "city":[{"name":"昆明市", "zip":"530100", "county":[{"name":"市辖区", "zip":"530101"}, {"name":"五华区", "zip":"530102"}, {"name":"盘龙区", "zip":"530103"}, {"name":"官渡区", "zip":"530111"}, {"name":"西山区", "zip":"530112"}, {"name":"东川区", "zip":"530113"}, {"name":"呈贡区", "zip":"530114"}, {"name":"晋宁县", "zip":"530122"}, {"name":"富民县", "zip":"530124"}, {"name":"宜良县", "zip":"530125"}, {"name":"石林彝族自治县", "zip":"530126"}, {"name":"嵩明县", "zip":"530127"}, {"name":"禄劝彝族苗族自治县", "zip":"530128"}, {"name":"寻甸回族彝族自治县", "zip":"530129"}, {"name":"安宁市", "zip":"530181"}]}, {"name":"曲靖市", "zip":"530300", "county":[{"name":"市辖区", "zip":"530301"}, {"name":"麒麟区", "zip":"530302"}, {"name":"马龙县", "zip":"530321"}, {"name":"陆良县", "zip":"530322"}, {"name":"师宗县", "zip":"530323"}, {"name":"罗平县", "zip":"530324"}, {"name":"富源县", "zip":"530325"}, {"name":"会泽县", "zip":"530326"}, {"name":"沾益县", "zip":"530328"}, {"name":"宣威市", "zip":"530381"}]}, {"name":"玉溪市", "zip":"530400", "county":[{"name":"红塔区", "zip":"530402"}, {"name":"江川县", "zip":"530421"}, {"name":"澄江县", "zip":"530422"}, {"name":"通海县", "zip":"530423"}, {"name":"华宁县", "zip":"530424"}, {"name":"易门县", "zip":"530425"}, {"name":"峨山彝族自治县", "zip":"530426"}, {"name":"新平彝族傣族自治县", "zip":"530427"}, {"name":"元江哈尼族彝族傣族自治县", "zip":"530428"}]}, {"name":"保山市", "zip":"530500", "county":[{"name":"市辖区", "zip":"530501"}, {"name":"隆阳区", "zip":"530502"}, {"name":"施甸县", "zip":"530521"}, {"name":"腾冲县", "zip":"530522"}, {"name":"龙陵县", "zip":"530523"}, {"name":"昌宁县", "zip":"530524"}]}, {"name":"昭通市", "zip":"530600", "county":[{"name":"市辖区", "zip":"530601"}, {"name":"昭阳区", "zip":"530602"}, {"name":"鲁甸县", "zip":"530621"}, {"name":"巧家县", "zip":"530622"}, {"name":"盐津县", "zip":"530623"}, {"name":"大关县", "zip":"530624"}, {"name":"永善县", "zip":"530625"}, {"name":"绥江县", "zip":"530626"}, {"name":"镇雄县", "zip":"530627"}, {"name":"彝良县", "zip":"530628"}, {"name":"威信县", "zip":"530629"}, {"name":"水富县", "zip":"530630"}]}, {"name":"丽江市", "zip":"530700", "county":[{"name":"市辖区", "zip":"530701"}, {"name":"古城区", "zip":"530702"}, {"name":"玉龙纳西族自治县", "zip":"530721"}, {"name":"永胜县", "zip":"530722"}, {"name":"华坪县", "zip":"530723"}, {"name":"宁蒗彝族自治县", "zip":"530724"}]}, {"name":"普洱市", "zip":"530800", "county":[{"name":"市辖区", "zip":"530801"}, {"name":"思茅区", "zip":"530802"}, {"name":"宁洱哈尼族彝族自治县", "zip":"530821"}, {"name":"墨江哈尼族自治县", "zip":"530822"}, {"name":"景东彝族自治县", "zip":"530823"}, {"name":"景谷傣族彝族自治县", "zip":"530824"}, {"name":"镇沅彝族哈尼族拉祜族自治县", "zip":"530825"}, {"name":"江城哈尼族彝族自治县", "zip":"530826"}, {"name":"孟连傣族拉祜族佤族自治县", "zip":"530827"}, {"name":"澜沧拉祜族自治县", "zip":"530828"}, {"name":"西盟佤族自治县", "zip":"530829"}]}, {"name":"临沧市", "zip":"530900", "county":[{"name":"市辖区", "zip":"530901"}, {"name":"临翔区", "zip":"530902"}, {"name":"凤庆县", "zip":"530921"}, {"name":"云县", "zip":"530922"}, {"name":"永德县", "zip":"530923"}, {"name":"镇康县", "zip":"530924"}, {"name":"双江拉祜族佤族布朗族傣族自治县", "zip":"530925"}, {"name":"耿马傣族佤族自治县", "zip":"530926"}, {"name":"沧源佤族自治县", "zip":"530927"}]}, {"name":"楚雄彝族自治州", "zip":"532300", "county":[{"name":"楚雄市", "zip":"532301"}, {"name":"双柏县", "zip":"532322"}, {"name":"牟定县", "zip":"532323"}, {"name":"南华县", "zip":"532324"}, {"name":"姚安县", "zip":"532325"}, {"name":"大姚县", "zip":"532326"}, {"name":"永仁县", "zip":"532327"}, {"name":"元谋县", "zip":"532328"}, {"name":"武定县", "zip":"532329"}, {"name":"禄丰县", "zip":"532331"}]}, {"name":"红河哈尼族彝族自治州", "zip":"532500", "county":[{"name":"个旧市", "zip":"532501"}, {"name":"开远市", "zip":"532502"}, {"name":"蒙自市", "zip":"532503"}, {"name":"屏边苗族自治县", "zip":"532523"}, {"name":"建水县", "zip":"532524"}, {"name":"石屏县", "zip":"532525"}, {"name":"弥勒县", "zip":"532526"}, {"name":"泸西县", "zip":"532527"}, {"name":"元阳县", "zip":"532528"}, {"name":"红河县", "zip":"532529"}, {"name":"金平苗族瑶族傣族自治县", "zip":"532530"}, {"name":"绿春县", "zip":"532531"}, {"name":"河口瑶族自治县", "zip":"532532"}]}, {"name":"文山壮族苗族自治州", "zip":"532600", "county":[{"name":"文山市", "zip":"532601"}, {"name":"砚山县", "zip":"532622"}, {"name":"西畴县", "zip":"532623"}, {"name":"麻栗坡县", "zip":"532624"}, {"name":"马关县", "zip":"532625"}, {"name":"丘北县", "zip":"532626"}, {"name":"广南县", "zip":"532627"}, {"name":"富宁县", "zip":"532628"}]}, {"name":"西双版纳傣族自治州", "zip":"532800", "county":[{"name":"景洪市", "zip":"532801"}, {"name":"勐海县", "zip":"532822"}, {"name":"勐腊县", "zip":"532823"}]}, {"name":"大理白族自治州", "zip":"532900", "county":[{"name":"大理市", "zip":"532901"}, {"name":"漾濞彝族自治县", "zip":"532922"}, {"name":"祥云县", "zip":"532923"}, {"name":"宾川县", "zip":"532924"}, {"name":"弥渡县", "zip":"532925"}, {"name":"南涧彝族自治县", "zip":"532926"}, {"name":"巍山彝族回族自治县", "zip":"532927"}, {"name":"永平县", "zip":"532928"}, {"name":"云龙县", "zip":"532929"}, {"name":"洱源县", "zip":"532930"}, {"name":"剑川县", "zip":"532931"}, {"name":"鹤庆县", "zip":"532932"}]}, {"name":"德宏傣族景颇族自治州", "zip":"533100", "county":[{"name":"瑞丽市", "zip":"533102"}, {"name":"芒市", "zip":"533103"}, {"name":"梁河县", "zip":"533122"}, {"name":"盈江县", "zip":"533123"}, {"name":"陇川县", "zip":"533124"}]}, {"name":"怒江傈僳族自治州", "zip":"533300", "county":[{"name":"泸水县", "zip":"533321"}, {"name":"福贡县", "zip":"533323"}, {"name":"贡山独龙族怒族自治县", "zip":"533324"}, {"name":"兰坪白族普米族自治县", "zip":"533325"}]}, {"name":"迪庆藏族自治州", "zip":"533400", "county":[{"name":"香格里拉县", "zip":"533421"}, {"name":"德钦县", "zip":"533422"}, {"name":"维西傈僳族自治县", "zip":"533423"}]}]}, {"name":"西藏自治区", "zip":"540000", "city":[{"name":"拉萨市", "zip":"540100", "county":[{"name":"市辖区", "zip":"540101"}, {"name":"城关区", "zip":"540102"}, {"name":"林周县", "zip":"540121"}, {"name":"当雄县", "zip":"540122"}, {"name":"尼木县", "zip":"540123"}, {"name":"曲水县", "zip":"540124"}, {"name":"堆龙德庆县", "zip":"540125"}, {"name":"达孜县", "zip":"540126"}, {"name":"墨竹工卡县", "zip":"540127"}]}, {"name":"昌都地区", "zip":"542100", "county":[{"name":"昌都县", "zip":"542121"}, {"name":"江达县", "zip":"542122"}, {"name":"贡觉县", "zip":"542123"}, {"name":"类乌齐县", "zip":"542124"}, {"name":"丁青县", "zip":"542125"}, {"name":"察雅县", "zip":"542126"}, {"name":"八宿县", "zip":"542127"}, {"name":"左贡县", "zip":"542128"}, {"name":"芒康县", "zip":"542129"}, {"name":"洛隆县", "zip":"542132"}, {"name":"边坝县", "zip":"542133"}]}, {"name":"山南地区", "zip":"542200", "county":[{"name":"乃东县", "zip":"542221"}, {"name":"扎囊县", "zip":"542222"}, {"name":"贡嘎县", "zip":"542223"}, {"name":"桑日县", "zip":"542224"}, {"name":"琼结县", "zip":"542225"}, {"name":"曲松县", "zip":"542226"}, {"name":"措美县", "zip":"542227"}, {"name":"洛扎县", "zip":"542228"}, {"name":"加查县", "zip":"542229"}, {"name":"隆子县", "zip":"542231"}, {"name":"错那县", "zip":"542232"}, {"name":"浪卡子县", "zip":"542233"}]}, {"name":"日喀则地区", "zip":"542300", "county":[{"name":"日喀则市", "zip":"542301"}, {"name":"南木林县", "zip":"542322"}, {"name":"江孜县", "zip":"542323"}, {"name":"定日县", "zip":"542324"}, {"name":"萨迦县", "zip":"542325"}, {"name":"拉孜县", "zip":"542326"}, {"name":"昂仁县", "zip":"542327"}, {"name":"谢通门县", "zip":"542328"}, {"name":"白朗县", "zip":"542329"}, {"name":"仁布县", "zip":"542330"}, {"name":"康马县", "zip":"542331"}, {"name":"定结县", "zip":"542332"}, {"name":"仲巴县", "zip":"542333"}, {"name":"亚东县", "zip":"542334"}, {"name":"吉隆县", "zip":"542335"}, {"name":"聂拉木县", "zip":"542336"}, {"name":"萨嘎县", "zip":"542337"}, {"name":"岗巴县", "zip":"542338"}]}, {"name":"那曲地区", "zip":"542400", "county":[{"name":"那曲县", "zip":"542421"}, {"name":"嘉黎县", "zip":"542422"}, {"name":"比如县", "zip":"542423"}, {"name":"聂荣县", "zip":"542424"}, {"name":"安多县", "zip":"542425"}, {"name":"申扎县", "zip":"542426"}, {"name":"索县", "zip":"542427"}, {"name":"班戈县", "zip":"542428"}, {"name":"巴青县", "zip":"542429"}, {"name":"尼玛县", "zip":"542430"}]}, {"name":"阿里地区", "zip":"542500", "county":[{"name":"普兰县", "zip":"542521"}, {"name":"札达县", "zip":"542522"}, {"name":"噶尔县", "zip":"542523"}, {"name":"日土县", "zip":"542524"}, {"name":"革吉县", "zip":"542525"}, {"name":"改则县", "zip":"542526"}, {"name":"措勤县", "zip":"542527"}]}, {"name":"林芝地区", "zip":"542600", "county":[{"name":"林芝县", "zip":"542621"}, {"name":"工布江达县", "zip":"542622"}, {"name":"米林县", "zip":"542623"}, {"name":"墨脱县", "zip":"542624"}, {"name":"波密县", "zip":"542625"}, {"name":"察隅县", "zip":"542626"}, {"name":"朗县", "zip":"542627"}]}]}, {"name":"陕西省", "zip":"610000", "city":[{"name":"西安市", "zip":"610100", "county":[{"name":"市辖区", "zip":"610101"}, {"name":"新城区", "zip":"610102"}, {"name":"碑林区", "zip":"610103"}, {"name":"莲湖区", "zip":"610104"}, {"name":"灞桥区", "zip":"610111"}, {"name":"未央区", "zip":"610112"}, {"name":"雁塔区", "zip":"610113"}, {"name":"阎良区", "zip":"610114"}, {"name":"临潼区", "zip":"610115"}, {"name":"长安区", "zip":"610116"}, {"name":"蓝田县", "zip":"610122"}, {"name":"周至县", "zip":"610124"}, {"name":"户县", "zip":"610125"}, {"name":"高陵县", "zip":"610126"}]}, {"name":"铜川市", "zip":"610200", "county":[{"name":"市辖区", "zip":"610201"}, {"name":"王益区", "zip":"610202"}, {"name":"印台区", "zip":"610203"}, {"name":"耀州区", "zip":"610204"}, {"name":"宜君县", "zip":"610222"}]}, {"name":"宝鸡市", "zip":"610300", "county":[{"name":"市辖区", "zip":"610301"}, {"name":"渭滨区", "zip":"610302"}, {"name":"金台区", "zip":"610303"}, {"name":"陈仓区", "zip":"610304"}, {"name":"凤翔县", "zip":"610322"}, {"name":"岐山县", "zip":"610323"}, {"name":"扶风县", "zip":"610324"}, {"name":"眉县", "zip":"610326"}, {"name":"陇县", "zip":"610327"}, {"name":"千阳县", "zip":"610328"}, {"name":"麟游县", "zip":"610329"}, {"name":"凤县", "zip":"610330"}, {"name":"太白县", "zip":"610331"}]}, {"name":"咸阳市", "zip":"610400", "county":[{"name":"市辖区", "zip":"610401"}, {"name":"秦都区", "zip":"610402"}, {"name":"杨陵区", "zip":"610403"}, {"name":"渭城区", "zip":"610404"}, {"name":"三原县", "zip":"610422"}, {"name":"泾阳县", "zip":"610423"}, {"name":"乾县", "zip":"610424"}, {"name":"礼泉县", "zip":"610425"}, {"name":"永寿县", "zip":"610426"}, {"name":"彬县", "zip":"610427"}, {"name":"长武县", "zip":"610428"}, {"name":"旬邑县", "zip":"610429"}, {"name":"淳化县", "zip":"610430"}, {"name":"武功县", "zip":"610431"}, {"name":"兴平市", "zip":"610481"}]}, {"name":"渭南市", "zip":"610500", "county":[{"name":"市辖区", "zip":"610501"}, {"name":"临渭区", "zip":"610502"}, {"name":"华县", "zip":"610521"}, {"name":"潼关县", "zip":"610522"}, {"name":"大荔县", "zip":"610523"}, {"name":"合阳县", "zip":"610524"}, {"name":"澄城县", "zip":"610525"}, {"name":"蒲城县", "zip":"610526"}, {"name":"白水县", "zip":"610527"}, {"name":"富平县", "zip":"610528"}, {"name":"韩城市", "zip":"610581"}, {"name":"华阴市", "zip":"610582"}]}, {"name":"延安市", "zip":"610600", "county":[{"name":"市辖区", "zip":"610601"}, {"name":"宝塔区", "zip":"610602"}, {"name":"延长县", "zip":"610621"}, {"name":"延川县", "zip":"610622"}, {"name":"子长县", "zip":"610623"}, {"name":"安塞县", "zip":"610624"}, {"name":"志丹县", "zip":"610625"}, {"name":"吴起县", "zip":"610626"}, {"name":"甘泉县", "zip":"610627"}, {"name":"富县", "zip":"610628"}, {"name":"洛川县", "zip":"610629"}, {"name":"宜川县", "zip":"610630"}, {"name":"黄龙县", "zip":"610631"}, {"name":"黄陵县", "zip":"610632"}]}, {"name":"汉中市", "zip":"610700", "county":[{"name":"市辖区", "zip":"610701"}, {"name":"汉台区", "zip":"610702"}, {"name":"南郑县", "zip":"610721"}, {"name":"城固县", "zip":"610722"}, {"name":"洋县", "zip":"610723"}, {"name":"西乡县", "zip":"610724"}, {"name":"勉县", "zip":"610725"}, {"name":"宁强县", "zip":"610726"}, {"name":"略阳县", "zip":"610727"}, {"name":"镇巴县", "zip":"610728"}, {"name":"留坝县", "zip":"610729"}, {"name":"佛坪县", "zip":"610730"}]}, {"name":"榆林市", "zip":"610800", "county":[{"name":"市辖区", "zip":"610801"}, {"name":"榆阳区", "zip":"610802"}, {"name":"神木县", "zip":"610821"}, {"name":"府谷县", "zip":"610822"}, {"name":"横山县", "zip":"610823"}, {"name":"靖边县", "zip":"610824"}, {"name":"定边县", "zip":"610825"}, {"name":"绥德县", "zip":"610826"}, {"name":"米脂县", "zip":"610827"}, {"name":"佳县", "zip":"610828"}, {"name":"吴堡县", "zip":"610829"}, {"name":"清涧县", "zip":"610830"}, {"name":"子洲县", "zip":"610831"}]}, {"name":"安康市", "zip":"610900", "county":[{"name":"市辖区", "zip":"610901"}, {"name":"汉滨区", "zip":"610902"}, {"name":"汉阴县", "zip":"610921"}, {"name":"石泉县", "zip":"610922"}, {"name":"宁陕县", "zip":"610923"}, {"name":"紫阳县", "zip":"610924"}, {"name":"岚皋县", "zip":"610925"}, {"name":"平利县", "zip":"610926"}, {"name":"镇坪县", "zip":"610927"}, {"name":"旬阳县", "zip":"610928"}, {"name":"白河县", "zip":"610929"}]}, {"name":"商洛市", "zip":"611000", "county":[{"name":"市辖区", "zip":"611001"}, {"name":"商州区", "zip":"611002"}, {"name":"洛南县", "zip":"611021"}, {"name":"丹凤县", "zip":"611022"}, {"name":"商南县", "zip":"611023"}, {"name":"山阳县", "zip":"611024"}, {"name":"镇安县", "zip":"611025"}, {"name":"柞水县", "zip":"611026"}]}]}, {"name":"甘肃省", "zip":"620000", "city":[{"name":"兰州市", "zip":"620100", "county":[{"name":"市辖区", "zip":"620101"}, {"name":"城关区", "zip":"620102"}, {"name":"七里河区", "zip":"620103"}, {"name":"西固区", "zip":"620104"}, {"name":"安宁区", "zip":"620105"}, {"name":"红古区", "zip":"620111"}, {"name":"永登县", "zip":"620121"}, {"name":"皋兰县", "zip":"620122"}, {"name":"榆中县", "zip":"620123"}]}, {"name":"嘉峪关市", "zip":"620200", "county":[{"name":"市辖区", "zip":"620201"}, {"name":"金昌市", "zip":"620300"}, {"name":"市辖区", "zip":"620301"}, {"name":"金川区", "zip":"620302"}, {"name":"永昌县", "zip":"620321"}]}, {"name":"白银市", "zip":"620400", "county":[{"name":"市辖区", "zip":"620401"}, {"name":"白银区", "zip":"620402"}, {"name":"平川区", "zip":"620403"}, {"name":"靖远县", "zip":"620421"}, {"name":"会宁县", "zip":"620422"}, {"name":"景泰县", "zip":"620423"}]}, {"name":"天水市", "zip":"620500", "county":[{"name":"市辖区", "zip":"620501"}, {"name":"秦州区", "zip":"620502"}, {"name":"麦积区", "zip":"620503"}, {"name":"清水县", "zip":"620521"}, {"name":"秦安县", "zip":"620522"}, {"name":"甘谷县", "zip":"620523"}, {"name":"武山县", "zip":"620524"}, {"name":"张家川回族自治县", "zip":"620525"}]}, {"name":"武威市", "zip":"620600", "county":[{"name":"市辖区", "zip":"620601"}, {"name":"凉州区", "zip":"620602"}, {"name":"民勤县", "zip":"620621"}, {"name":"古浪县", "zip":"620622"}, {"name":"天祝藏族自治县", "zip":"620623"}]}, {"name":"张掖市", "zip":"620700", "county":[{"name":"市辖区", "zip":"620701"}, {"name":"甘州区", "zip":"620702"}, {"name":"肃南裕固族自治县", "zip":"620721"}, {"name":"民乐县", "zip":"620722"}, {"name":"临泽县", "zip":"620723"}, {"name":"高台县", "zip":"620724"}, {"name":"山丹县", "zip":"620725"}]}, {"name":"平凉市", "zip":"620800", "county":[{"name":"市辖区", "zip":"620801"}, {"name":"崆峒区", "zip":"620802"}, {"name":"泾川县", "zip":"620821"}, {"name":"灵台县", "zip":"620822"}, {"name":"崇信县", "zip":"620823"}, {"name":"华亭县", "zip":"620824"}, {"name":"庄浪县", "zip":"620825"}, {"name":"静宁县", "zip":"620826"}]}, {"name":"酒泉市", "zip":"620900", "county":[{"name":"市辖区", "zip":"620901"}, {"name":"肃州区", "zip":"620902"}, {"name":"金塔县", "zip":"620921"}, {"name":"瓜州县", "zip":"620922"}, {"name":"肃北蒙古族自治县", "zip":"620923"}, {"name":"阿克塞哈萨克族自治县", "zip":"620924"}, {"name":"玉门市", "zip":"620981"}, {"name":"敦煌市", "zip":"620982"}]}, {"name":"庆阳市", "zip":"621000", "county":[{"name":"市辖区", "zip":"621001"}, {"name":"西峰区", "zip":"621002"}, {"name":"庆城县", "zip":"621021"}, {"name":"环县", "zip":"621022"}, {"name":"华池县", "zip":"621023"}, {"name":"合水县", "zip":"621024"}, {"name":"正宁县", "zip":"621025"}, {"name":"宁县", "zip":"621026"}, {"name":"镇原县", "zip":"621027"}]}, {"name":"定西市", "zip":"621100", "county":[{"name":"市辖区", "zip":"621101"}, {"name":"安定区", "zip":"621102"}, {"name":"通渭县", "zip":"621121"}, {"name":"陇西县", "zip":"621122"}, {"name":"渭源县", "zip":"621123"}, {"name":"临洮县", "zip":"621124"}, {"name":"漳县", "zip":"621125"}, {"name":"岷县", "zip":"621126"}]}, {"name":"陇南市", "zip":"621200", "county":[{"name":"市辖区", "zip":"621201"}, {"name":"武都区", "zip":"621202"}, {"name":"成县", "zip":"621221"}, {"name":"文县", "zip":"621222"}, {"name":"宕昌县", "zip":"621223"}, {"name":"康县", "zip":"621224"}, {"name":"西和县", "zip":"621225"}, {"name":"礼县", "zip":"621226"}, {"name":"徽县", "zip":"621227"}, {"name":"两当县", "zip":"621228"}]}, {"name":"临夏回族自治州", "zip":"622900", "county":[{"name":"临夏市", "zip":"622901"}, {"name":"临夏县", "zip":"622921"}, {"name":"康乐县", "zip":"622922"}, {"name":"永靖县", "zip":"622923"}, {"name":"广河县", "zip":"622924"}, {"name":"和政县", "zip":"622925"}, {"name":"东乡族自治县", "zip":"622926"}, {"name":"积石山保安族东乡族撒拉族自治县", "zip":"622927"}]}, {"name":"甘南藏族自治州", "zip":"623000", "county":[{"name":"合作市", "zip":"623001"}, {"name":"临潭县", "zip":"623021"}, {"name":"卓尼县", "zip":"623022"}, {"name":"舟曲县", "zip":"623023"}, {"name":"迭部县", "zip":"623024"}, {"name":"玛曲县", "zip":"623025"}, {"name":"碌曲县", "zip":"623026"}, {"name":"夏河县", "zip":"623027"}]}]}, {"name":"青海省", "zip":"630000", "city":[{"name":"西宁市", "zip":"630100", "county":[{"name":"市辖区", "zip":"630101"}, {"name":"城东区", "zip":"630102"}, {"name":"城中区", "zip":"630103"}, {"name":"城西区", "zip":"630104"}, {"name":"城北区", "zip":"630105"}, {"name":"大通回族土族自治县", "zip":"630121"}, {"name":"湟中县", "zip":"630122"}, {"name":"湟源县", "zip":"630123"}]}, {"name":"海东地区", "zip":"632100", "county":[{"name":"平安县", "zip":"632121"}, {"name":"民和回族土族自治县", "zip":"632122"}, {"name":"乐都县", "zip":"632123"}, {"name":"互助土族自治县", "zip":"632126"}, {"name":"化隆回族自治县", "zip":"632127"}, {"name":"循化撒拉族自治县", "zip":"632128"}]}, {"name":"海北藏族自治州", "zip":"632200", "county":[{"name":"门源回族自治县", "zip":"632221"}, {"name":"祁连县", "zip":"632222"}, {"name":"海晏县", "zip":"632223"}, {"name":"刚察县", "zip":"632224"}]}, {"name":"黄南藏族自治州", "zip":"632300", "county":[{"name":"同仁县", "zip":"632321"}, {"name":"尖扎县", "zip":"632322"}, {"name":"泽库县", "zip":"632323"}, {"name":"河南蒙古族自治县", "zip":"632324"}]}, {"name":"海南藏族自治州", "zip":"632500", "county":[{"name":"共和县", "zip":"632521"}, {"name":"同德县", "zip":"632522"}, {"name":"贵德县", "zip":"632523"}, {"name":"兴海县", "zip":"632524"}, {"name":"贵南县", "zip":"632525"}]}, {"name":"果洛藏族自治州", "zip":"632600", "county":[{"name":"玛沁县", "zip":"632621"}, {"name":"班玛县", "zip":"632622"}, {"name":"甘德县", "zip":"632623"}, {"name":"达日县", "zip":"632624"}, {"name":"久治县", "zip":"632625"}, {"name":"玛多县", "zip":"632626"}]}, {"name":"玉树藏族自治州", "zip":"632700", "county":[{"name":"玉树县", "zip":"632721"}, {"name":"杂多县", "zip":"632722"}, {"name":"称多县", "zip":"632723"}, {"name":"治多县", "zip":"632724"}, {"name":"囊谦县", "zip":"632725"}, {"name":"曲麻莱县", "zip":"632726"}]}, {"name":"海西蒙古族藏族自治州", "zip":"632800", "county":[{"name":"格尔木市", "zip":"632801"}, {"name":"德令哈市", "zip":"632802"}, {"name":"乌兰县", "zip":"632821"}, {"name":"都兰县", "zip":"632822"}, {"name":"天峻县", "zip":"632823"}]}]}, {"name":"宁夏回族自治区", "zip":"640000", "city":[{"name":"银川市", "zip":"640100", "county":[{"name":"市辖区", "zip":"640101"}, {"name":"兴庆区", "zip":"640104"}, {"name":"西夏区", "zip":"640105"}, {"name":"金凤区", "zip":"640106"}, {"name":"永宁县", "zip":"640121"}, {"name":"贺兰县", "zip":"640122"}, {"name":"灵武市", "zip":"640181"}]}, {"name":"石嘴山市", "zip":"640200", "county":[{"name":"市辖区", "zip":"640201"}, {"name":"大武口区", "zip":"640202"}, {"name":"惠农区", "zip":"640205"}, {"name":"平罗县", "zip":"640221"}]}, {"name":"吴忠市", "zip":"640300", "county":[{"name":"市辖区", "zip":"640301"}, {"name":"利通区", "zip":"640302"}, {"name":"红寺堡区", "zip":"640303"}, {"name":"盐池县", "zip":"640323"}, {"name":"同心县", "zip":"640324"}, {"name":"青铜峡市", "zip":"640381"}]}, {"name":"固原市", "zip":"640400", "county":[{"name":"市辖区", "zip":"640401"}, {"name":"原州区", "zip":"640402"}, {"name":"西吉县", "zip":"640422"}, {"name":"隆德县", "zip":"640423"}, {"name":"泾源县", "zip":"640424"}, {"name":"彭阳县", "zip":"640425"}]}, {"name":"中卫市", "zip":"640500", "county":[{"name":"市辖区", "zip":"640501"}, {"name":"沙坡头区", "zip":"640502"}, {"name":"中宁县", "zip":"640521"}, {"name":"海原县", "zip":"640522"}]}]}, {"name":"新疆维吾尔自治区", "zip":"650000", "city":[{"name":"乌鲁木齐市", "zip":"650100", "county":[{"name":"市辖区", "zip":"650101"}, {"name":"天山区", "zip":"650102"}, {"name":"沙依巴克区", "zip":"650103"}, {"name":"新市区", "zip":"650104"}, {"name":"水磨沟区", "zip":"650105"}, {"name":"头屯河区", "zip":"650106"}, {"name":"达坂城区", "zip":"650107"}, {"name":"米东区", "zip":"650109"}, {"name":"乌鲁木齐县", "zip":"650121"}]}, {"name":"克拉玛依市", "zip":"650200", "county":[{"name":"市辖区", "zip":"650201"}, {"name":"独山子区", "zip":"650202"}, {"name":"克拉玛依区", "zip":"650203"}, {"name":"白碱滩区", "zip":"650204"}, {"name":"乌尔禾区", "zip":"650205"}]}, {"name":"吐鲁番地区", "zip":"652100", "county":[{"name":"吐鲁番市", "zip":"652101"}, {"name":"鄯善县", "zip":"652122"}, {"name":"托克逊县", "zip":"652123"}]}, {"name":"哈密地区", "zip":"652200", "county":[{"name":"哈密市", "zip":"652201"}, {"name":"巴里坤哈萨克自治县", "zip":"652222"}, {"name":"伊吾县", "zip":"652223"}]}, {"name":"昌吉回族自治州", "zip":"652300", "county":[{"name":"昌吉市", "zip":"652301"}, {"name":"阜康市", "zip":"652302"}, {"name":"呼图壁县", "zip":"652323"}, {"name":"玛纳斯县", "zip":"652324"}, {"name":"奇台县", "zip":"652325"}, {"name":"吉木萨尔县", "zip":"652327"}, {"name":"木垒哈萨克自治县", "zip":"652328"}]}, {"name":"博尔塔拉蒙古自治州", "zip":"652700", "county":[{"name":"博乐市", "zip":"652701"}, {"name":"精河县", "zip":"652722"}, {"name":"温泉县", "zip":"652723"}]}, {"name":"巴音郭楞蒙古自治州", "zip":"652800", "county":[{"name":"库尔勒市", "zip":"652801"}, {"name":"轮台县", "zip":"652822"}, {"name":"尉犁县", "zip":"652823"}, {"name":"若羌县", "zip":"652824"}, {"name":"且末县", "zip":"652825"}, {"name":"焉耆回族自治县", "zip":"652826"}, {"name":"和静县", "zip":"652827"}, {"name":"和硕县", "zip":"652828"}, {"name":"博湖县", "zip":"652829"}]}, {"name":"阿克苏地区", "zip":"652900", "county":[{"name":"阿克苏市", "zip":"652901"}, {"name":"温宿县", "zip":"652922"}, {"name":"库车县", "zip":"652923"}, {"name":"沙雅县", "zip":"652924"}, {"name":"新和县", "zip":"652925"}, {"name":"拜城县", "zip":"652926"}, {"name":"乌什县", "zip":"652927"}, {"name":"阿瓦提县", "zip":"652928"}, {"name":"柯坪县", "zip":"652929"}]}, {"name":"克孜勒苏柯尔克孜自治州", "zip":"653000", "county":[{"name":"阿图什市", "zip":"653001"}, {"name":"阿克陶县", "zip":"653022"}, {"name":"阿合奇县", "zip":"653023"}, {"name":"乌恰县", "zip":"653024"}]}, {"name":"喀什地区", "zip":"653100", "county":[{"name":"喀什市", "zip":"653101"}, {"name":"疏附县", "zip":"653121"}, {"name":"疏勒县", "zip":"653122"}, {"name":"英吉沙县", "zip":"653123"}, {"name":"泽普县", "zip":"653124"}, {"name":"莎车县", "zip":"653125"}, {"name":"叶城县", "zip":"653126"}, {"name":"麦盖提县", "zip":"653127"}, {"name":"岳普湖县", "zip":"653128"}, {"name":"伽师县", "zip":"653129"}, {"name":"巴楚县", "zip":"653130"}, {"name":"塔什库尔干塔吉克自治县", "zip":"653131"}]}, {"name":"和田地区", "zip":"653200", "county":[{"name":"和田市", "zip":"653201"}, {"name":"和田县", "zip":"653221"}, {"name":"墨玉县", "zip":"653222"}, {"name":"皮山县", "zip":"653223"}, {"name":"洛浦县", "zip":"653224"}, {"name":"策勒县", "zip":"653225"}, {"name":"于田县", "zip":"653226"}, {"name":"民丰县", "zip":"653227"}]}, {"name":"伊犁哈萨克自治州", "zip":"654000", "county":[{"name":"伊宁市", "zip":"654002"}, {"name":"奎屯市", "zip":"654003"}, {"name":"伊宁县", "zip":"654021"}, {"name":"察布查尔锡伯自治县", "zip":"654022"}, {"name":"霍城县", "zip":"654023"}, {"name":"巩留县", "zip":"654024"}, {"name":"新源县", "zip":"654025"}, {"name":"昭苏县", "zip":"654026"}, {"name":"特克斯县", "zip":"654027"}, {"name":"尼勒克县", "zip":"654028"}]}, {"name":"塔城地区", "zip":"654200", "county":[{"name":"塔城市", "zip":"654201"}, {"name":"乌苏市", "zip":"654202"}, {"name":"额敏县", "zip":"654221"}, {"name":"沙湾县", "zip":"654223"}, {"name":"托里县", "zip":"654224"}, {"name":"裕民县", "zip":"654225"}, {"name":"和布克赛尔蒙古自治县", "zip":"654226"}]}, {"name":"阿勒泰地区", "zip":"654300", "county":[{"name":"阿勒泰市", "zip":"654301"}, {"name":"布尔津县", "zip":"654321"}, {"name":"富蕴县", "zip":"654322"}, {"name":"福海县", "zip":"654323"}, {"name":"哈巴河县", "zip":"654324"}, {"name":"青河县", "zip":"654325"}, {"name":"吉木乃县", "zip":"654326"}]}, {"name":"自治区直辖县级行政区划", "zip":"659000", "county":[{"name":"石河子市", "zip":"659001"}, {"name":"阿拉尔市", "zip":"659002"}, {"name":"图木舒克市", "zip":"659003"}, {"name":"五家渠市", "zip":"659004"}]}]}, {"name":"台湾省", "zip":"710000"}, {"name":"香港特别行政区", "zip":"810000"}, {"name":"澳门特别行政区", "zip":"820000"}]};exports["default"] = city;module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var multiChoiceConfig = {
	  // TODO: Maybe we don't need the name here?
	  data: {
	    '产品类型': [{ name: 'productAbroadGroup', value: '出境跟团游' }, { name: 'productAbroadFreedom', value: '出境自由行' }, { name: 'productDomesticGroup', value: '国内跟团游' }, { name: 'productDomesticFreedom', value: '国内自由行' }, { name: 'productDomresticNearby', value: '国内周边游' }, { name: 'productVisaService', value: '签证服务' }],
	    '经营范围': [{ name: 'providerDeparture', value: '出境旅游' }, { name: 'providerArrival', value: '入境旅游' }, { name: 'providerDomestic', value: '境内旅游' }, { name: 'providerTicketDelegate', value: '票务代理' }, { name: 'providerBookhotel', value: '住宿' }],
	    '主营目的地': [{ name: 'ouzhou', value: '欧洲' }, { name: 'meizhou', value: '美洲' }, { name: 'aouzhou', value: '澳洲' }, { name: 'riben', value: '日本' }, { name: 'zhongya', value: '中亚' }, { name: 'guoneichangxian', value: '国内长线' }, { name: 'guoneizhoubian', value: '国内周边' }, { name: 'gangaotai', value: '港澳台' }],
	    '主营口岸': [{ name: 'shanghai', value: '上海' }, { name: 'beijing', value: '北京' }, { name: 'tianjin', value: '天津' }, { name: 'hangzhou', value: '杭州' }, { name: 'nanjing', value: '南京' }, { name: 'wuxi', value: '无锡' }, { name: 'wuhan', value: '武汉' }, { name: 'xianggang', value: '香港' }, { name: 'nantong', value: '南通' }, { name: 'shenzhen', value: '深圳' }, { name: 'suzhou', value: '苏州' }, { name: 'changzhou', value: '常州' }, { name: 'aomen', value: '澳门' }, { name: 'ningbo', value: '宁波' }, { name: 'hefei', value: '合肥' }, { name: 'xuzhou', value: '徐州' }, { name: 'yangzhou', value: '扬州' }, { name: 'zhenjiang', value: '镇江' }, { name: 'yancheng', value: '盐城' }, { name: 'wenzhoug', value: '温州' }, { name: 'jinhua', value: '金华' }, { name: 'taizhou', value: '台州' }, { name: 'huaian', value: '淮安' }, { name: 'lianyugnang', value: '连云港' }, { name: 'yiwu', value: '义务' }, { name: 'guangzhou', value: '广州' }],
	    '线路前缀': [{ name: 'duanwu', value: '端午' }, { name: 'shuqi', value: '暑期' }, { name: 'cuofengyou', value: '错峰游' }, { name: 'duorenlijian', value: '多人立减' }, { name: 'zaodinglijian', value: '早定立减' }],
	    '线路区域': [{ name: 'youlun', value: '游轮' }, { name: 'zhongdongfeizhou', value: '中东非洲' }],
	    '国家/省份': [{ name: 'xila', value: '希腊' }, { name: 'fenlan', value: '芬兰' }],
	    '城市景区': []
	  }
	};

	exports['default'] = multiChoiceConfig;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var calendarConfig = {
	  data: {
	    "团期报价": [{ type: "number", name: "adultCompanyCompetitorPrice", value: "成人同行价" }, { type: "number", name: "childCompanyCompetitorPrice", value: "儿童同行价" }, { type: "number", name: "adultCompanySalePrice", value: "成人销售价" }, { type: "number", name: "childCompanySalePrice", value: "儿童销售价" }, { type: "number", name: "adultCompanyPrice", value: "成人结算价" }, { type: "number", name: "childCompanyPrice", value: "儿童结算价" }, { type: "number", name: "singleRoomDifference", value: "全程单房差" }, { type: "number", name: "totalPeople", value: "入库数" }, { type: "number", name: "minimumPeople", value: "最低成团人数" }, { type: "date", name: "signupStart", value: "报名开始" }, { type: "number", name: "emergentValue", value: "预警值" }, { type: "number", name: "airticketEmergentValue", value: "机票预警值" }],
	    "库存管理": [{ type: "number", name: "totalPeople", value: "入库数" }, { type: "number", name: "minimumPeople", value: "最低成团人数" }, { type: "number", name: "reservedPeopleNumber", value: "占位数" }, { type: "number", name: "paidPeopleNumber", value: "签约数" }, { type: "number", name: "restPeopleNumber", value: "余位" }]
	  }
	};

	exports["default"] = calendarConfig;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	// TODO: We should use a query to do this. Just for demo purpose.
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dispatcherConfig = {
	  data: [{ name: "李杰", phone: "12345" }, { name: "潘超", phone: "12345" }]
	};

	exports["default"] = dispatcherConfig;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var menuConfig = {
	  // TODO: Maybe we don't need the name here?
	  data: {
	    "酒店标准": ["经济连锁酒店", "二星", "三星", "三星或四星", "四星", "五星", "指定酒店", "指定高星级酒店", "农家乐", "其他"],
	    "交通方式": ["飞机往返", "火车往返", "飞机+火车", "巴士往返", "邮轮", "其他"],
	    "类型": ["跟团游", "自由行", "当地玩乐"],
	    "大区": ["出境游", "国内游", "周边游"]
	  }
	};

	exports["default"] = menuConfig;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var formConfig = {
	  data: {
	    "商户联系人": [{ type: "text", name: "contactname", key: "姓名" }, { type: "text", name: "cellphone", key: "手机" }, { type: "text", name: "homephone", key: "座机" }, { type: "text", name: "position", key: "职位" }, { type: "text", name: "qqnumber", key: "qq" }, { type: "text", name: "wechat", key: "微信" }],
	    "团期报价": [{ type: "number", name: "adultCompanyCompetitorPrice", key: "成人同行价" }, { type: "number", name: "childCompanyCompetitorPrice", key: "儿童同行价" }, { type: "number", name: "adultCompanySalePrice", key: "成人销售价" }, { type: "number", name: "childCompanySalePrice", key: "儿童销售价" }, { type: "number", name: "adultCompanyPrice", key: "成人结算价" }, { type: "number", name: "childCompanyPrice", key: "儿童结算价" }, { type: "number", name: "singleRoomDifference", key: "全程单房差" }, { type: "number", name: "totalPeople", key: "入库数" }, { type: "number", name: "minimumPeople", key: "最低成团人数" }, { type: "date", name: "signupStart", key: "报名开始" }, { type: "number", name: "emergentValue", key: "预警值" }, { type: "number", name: "airticketEmergentValue", key: "机票预警值" }],
	    "库存管理": [{ type: "number", name: "totalPeople", value: "入库数" }, { type: "number", name: "minimumPeople", value: "最低成团人数" }, { type: "number", name: "reservedPeopleNumber", value: "占位数" }, { type: "number", name: "paidPeopleNumber", value: "签约数" }, { type: "number", name: "restPeopleNumber", value: "余位" }]
	  }
	};

	exports["default"] = formConfig;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$http", "$state", "lcConfig", "$window", "Upload", "$log", function ($http, $state, lcConfig, $window, Upload, $log) {
	  'ngInject';
	  return {
	    addProps: function addProps(obj, arr, val) {
	      var self = this;

	      obj[arr[0]] = obj[arr[0]] || {};

	      var tmpObj = obj[arr[0]];

	      if (arr.length > 1) {
	        arr.shift();
	        this.addProps(tmpObj, arr, val);
	      } else {
	        obj[arr[0]] = val;
	      }

	      return obj;
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$http", "$window", "lcConfig", "$state", function ($http, $window, lcConfig, $state) {
	  'ngInject';
	  return {
	    getData: function getData() {
	      return $http({
	        method: 'get',

	        // api 请求的默认host 等设置在 config http.js 中
	        url: '/api/hello'
	      });
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["commonSer", "$rootScope", "$state", function (commonSer, $rootScope, $state) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/header/header.html',
	    scope: true,
	    replace: true,
	    link: function link($scope) {}
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$state", "$window", function ($log, $state, $window) {
	  'ngInject';
	  return {
	    templateUrl: 'app/common/directives/page/page.html',
	    restrict: 'E',
	    link: function link(scope, element, attr) {
	      scope.previous = function () {
	        updateIndex(scope.currentIndex - 1);
	        scope.$broadcast('previous', { index: scope.currentPage });
	      };

	      scope.next = function () {
	        updateIndex(scope.currentIndex + 1);
	        scope.$broadcast('next', { index: scope.currentPage });
	      };

	      scope.changePage = function (index) {
	        // Update current index.
	        updateIndex(index);
	        scope.$broadcast('change', { index: scope.currentPage });
	      };

	      function updateIndex(index) {
	        scope.currentIndex = index;
	        scope.currentPage = scope.pages[index];
	      }
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$log", "$state", "$window", "multiChoiceConfig", function ($rootScope, $log, $state, $window, multiChoiceConfig) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/directives/multiChoice/multiChoice.html',
	    replace: true,
	    require: 'ngModel',
	    scope: {
	      other: '@',
	      type: '@',
	      isEditing: '=',
	      model: '=ngModel'
	    },
	    link: function link(scope, element, attr) {
	      scope.types = {};
	      scope.options = multiChoiceConfig.data[attr.type];
	      for (var i = 0; i < scope.options.length; i++) {
	        scope.options[i].state = false;
	      }

	      // TODO: Model should be the same type.
	      // Now we take into an array and convert to an object.
	      scope.$watch('model', function () {
	        $log.log('watching ');
	        $log.log(scope.model);
	        if (Object.prototype.toString.call(scope.model) !== '[object Array]') {
	          $log.log('not array');
	          return;
	        }

	        $log.log('changing model');
	        for (var i = 0; i < scope.options.length; i++) {
	          var option = scope.options[i];
	          // If option is contained in the model.
	          if (scope.model.indexOf(option.name) >= 0) {
	            option.state = true;
	          }
	        }
	        $log.log(scope.options);
	        //optionsListener();
	      }, true);

	      var optionsListener = scope.$watch('options', function (options) {
	        scope.model = {};
	        for (var i = 0; i < options.length; i++) {
	          if (options[i].state) {
	            scope.model[options[i].name] = true;
	          }
	        }
	      }, true);

	      // other text always is the last.
	      scope.changeOther = function () {
	        scope.model.other = scope.otherText;
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$uibModal", "$log", "$state", "$window", "calendarConfig", function ($rootScope, $uibModal, $log, $state, $window, calendarConfig) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/directives/calendar/calendar.html',
	    replace: true,
	    scope: {
	      data: '@',
	      model: '=ngModel',
	      isEditing: '='
	    },
	    require: 'ngModel',
	    link: function link(scope, element, attr, ctrl) {
	      scope.$watch('model', function (value) {
	        $log.log('value updates');
	        $log.log(scope.model);
	        if (scope.model) {
	          scope.setEvents();
	          // Set the right events.
	        }
	      });
	      // TODO: The whole class is slow on performance.
	      // Need to figure out how to optimize this.
	      /**
	      * A data structure that contains all the events.
	      * It should have the following data structure:
	      * year:
	      *   [month1: [
	      *     [day1: {
	      *       key1: value1,
	      *       key2: value2,
	      *       ...
	      *     },...]
	      *   ],...]
	      * */
	      scope.allEvents = {};
	      scope.allMonthEvents = [];
	      scope.allDayEvents = [];
	      scope.daysMap = {};
	      scope.days = [];
	      scope.months = [];

	      scope.initYear = function (year) {
	        // We should start from the current year and current month.
	        if (!(year in scope.allEvents)) {
	          scope.allEvents[year] = [];
	        }
	        scope.allMonthEvents = scope.allEvents[year];
	      };

	      // Month start from 0 to 11.
	      scope.initMonth = function (month) {
	        // If there are no events, create the array.
	        if (scope.allMonthEvents.length === 0) {
	          for (var i = 1; i <= 12; i++) {
	            scope.allMonthEvents.push([]);
	          }
	        }
	        scope.allDayEvents = scope.allMonthEvents[month];
	        scope.days = scope.daysMap[month];
	      };

	      scope.initDay = function () {
	        var numberOfDays = daysInMonth(scope.currentMonth, scope.currentYear);
	        if (!scope.days || scope.days.length === 0) {
	          scope.days = [];
	          for (var i = 1; i <= numberOfDays; i++) {
	            var day = getDay(i, scope.currentMonth, scope.currentYear);
	            scope.days.push(i + ' ' + day);
	          }
	        }

	        if (scope.allDayEvents.length) {
	          for (i = 1; i <= numberOfDays; i++) {
	            //Push an empty event.
	            scope.allDayEvents.push({});
	          }
	          scope.daysMap[scope.currentMonth] = scope.days;
	        }
	      };

	      scope.init = function () {
	        scope.years = [2016, 2017, 2018];

	        scope.currentYear = scope.years[0];
	        scope.initYear(scope.currentYear);

	        if (scope.months.length !== 12) {
	          for (var i = 1; i <= 12; i++) {
	            scope.months.push(i);
	          }
	        }

	        var date = new Date();
	        scope.currentMonth = date.getMonth();
	        scope.initMonth(scope.currentMonth);

	        scope.titles = calendarConfig.data[scope.data];
	        scope.initDay();
	      };

	      scope.init();

	      scope.selectMonth = function (month) {
	        scope.currentMonth = month;
	        scope.initMonth(scope.currentMonth);
	        scope.initDay();
	      };

	      scope.selectYear = function () {
	        scope.currentYear = scope.selectedYear;
	        scope.initYear(scope.currentYear);
	        scope.initMonth(scope.currentMonth);
	        scope.initDay();
	      };

	      scope.addEvent = function (index) {
	        var items = [];
	        for (var i = 0; i < scope.titles.length; i++) {
	          var item = {};
	          item.key = scope.titles[i].value;
	          item.name = scope.titles[i].name;
	          item.type = scope.titles[i].type;
	          items.push(item);
	        }
	        scope.openEventModal(items, index);
	      };

	      scope.openEventModal = function (items, index) {
	        var modalInstance = $uibModal.open({
	          animation: true,
	          templateUrl: 'app/common/directives/form/form.html',
	          controller: 'formCtrl',
	          resolve: {
	            // Need to convert the titles into the following format.
	            // {key: name, type: type}
	            data: function data() {
	              var title = '添加团期: ' + scope.currentYear + '年' + (scope.currentMonth + 1) + '月' + (index + 1) + '日';
	              return { 'title': title, 'items': items };
	            }
	          }
	        });
	        modalInstance.result.then(function (items) {
	          var event = {};
	          items.forEach(function (item) {
	            event[item.name] = item.value;
	          });
	          scope.allDayEvents[index] = event;
	          scope.allDayEvents[index].filled = true;
	        }, function () {});
	      };

	      scope.editEvent = function (index) {
	        var items = [];
	        $log.log(index);
	        $log.log(scope.allDayEvents[index]);
	        for (var i = 0; i < scope.titles.length; i++) {
	          var item = {};
	          item.key = scope.titles[i].value;
	          item.name = scope.titles[i].name;
	          item.type = scope.titles[i].type;
	          var value = scope.allDayEvents[index][item.name];
	          if (value) {
	            item.value = value;
	          }
	          items.push(item);
	        }
	        scope.openEventModal(items, index);
	      };

	      scope.deleteEvent = function (index) {
	        // Clear the event.
	        scope.allDayEvents[index] = {};
	      };

	      // TODO: This performance might be bad. I don't know.
	      scope.$watch('allEvents', function (value) {
	        scope.model = value;
	      }, true);

	      scope.$on('calendarUpdate', function (event, parameter) {
	        scope.allEvents = parameter.price;
	        scope.init();
	      });
	      /**
	      * Create an empty event from titles.
	      * The title should have the following format.
	      * [{name, type, value}]. For more details, please refer to
	      * config/calendarConfig.js
	      * */
	      function createEmptyEvent(titles) {
	        var event = {};
	        for (var i = 0; i < titles.length; i++) {
	          var type = titles[i].type;
	          var name = titles[i].name;
	          event[name] = '';
	        }
	        return event;
	      }

	      function daysInMonth(month, year) {
	        // Need to + 1 because javascript use the absolute value as the month index.
	        // e.g, 1 is Jan.
	        return new Date(year, month + 1, 0).getDate();
	      }

	      function getDay(day, month, year) {
	        var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	        var index = new Date(year, month, day).getDay();
	        return days[index];
	      }

	      scope.setEvents = function () {
	        $log.log('set events');
	        $log.log(scope.model);
	        for (var year in scope.model) {
	          $log.log('getting year');
	          var monthEvents = scope.model[year];
	          $log.log(monthEvents);
	          for (var i = 0; i < 12; i++) {
	            $log.log(i);
	            if (!(i in monthEvents)) {
	              continue;
	            }
	            $log.log('getting date');
	            var dayEvents = monthEvents[i];
	            for (var j = 1; j <= 31; j++) {
	              // TOO HACKY!
	              if (!(j in dayEvents)) {
	                continue;
	              }
	              var event = dayEvents[j];
	              scope.allEvents[year][i][j] = {};
	              if (event) {
	                scope.allEvents[year][i][j - 1] = event;
	              }
	            }
	          }
	          $log.log(monthEvents);
	        }
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$http", "$state", "$window", function ($log, $http, $state, $window) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/directives/textField/textField.html',
	    replace: true,
	    require: 'ngModel',
	    scope: {
	      isEditing: '=',
	      model: '=ngModel',
	      inputType: '='
	    },
	    link: function link(scope, element, attr, ctrl) {
	      //$scope.type = "text";
	      scope.inputType = attr.inputType;
	      if (scope.model) {
	        scope.value = scope.model;
	      }
	      scope.$watch('value', function (value) {
	        scope.model = value;
	      });
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$log", "$state", "$window", function ($rootScope, $log, $state, $window) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/directives/counter/counter.html',
	    replace: true,
	    require: 'ngModel',
	    scope: {
	      model: '=ngModel'
	    },
	    link: function link(scope, element, attr) {
	      scope.value = 0;
	      $log.log('counter');
	      if (!scope.model) {
	        scope.model = 0;
	      }
	      scope.value = scope.model;

	      scope.plus = function () {
	        if (scope.value >= 99) {
	          return;
	        }
	        scope.value = scope.value + 1;
	        scope.model = scope.value;
	      };

	      scope.minus = function () {
	        if (scope.value <= 0) {
	          return;
	        }
	        scope.value = scope.value - 1;
	        scope.model = scope.value;
	      };

	      scope.$watch('model', function (value) {
	        scope.value = scope.model;
	      });
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$http", "$state", "$window", "$compile", function ($log, $http, $state, $window, $compile) {
	  'ngInject';
	  return {
	    restrict: 'A',
	    scope: {
	      key: '@key'
	    },
	    link: function link(scope, element, attr, ctrl) {
	      //$scope.type = "text";
	      //$log.log(scope.model);
	      var key = attr.key;
	      /*scope.$on("test", function(event) {
	        $log.log("update");
	      });
	      */
	      scope.$on('updateTemplate', function (event, params) {
	        $log.log('update');
	        $log.log(params.params[key]);
	        if (!params.params[key]) {
	          return;
	        }
	        var content = params.params[key];
	        if (content[0] !== '<') {
	          content = '<p>' + content + '</p>';
	        }
	        var html = $compile(content)(scope);
	        element.append(html);
	        $log.log(scope.model);
	      });
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$log", "$state", "$window", "formConfig", function ($rootScope, $log, $state, $window, formConfig) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/directives/inputForm/inputForm.html',
	    replace: true,
	    scope: {
	      title: '@',
	      model: '=ngModel',
	      isEditing: '='
	    },
	    require: 'ngModel',
	    link: function link(scope, element, attr) {
	      scope.items = formConfig.data[attr.type];

	      scope.$watch('model', function (newValue, oldValue) {
	        $log.log(scope.model);
	        scope.items.forEach(function (item) {
	          item.value = '';
	        });
	        // Set the correct value.
	        for (var key in scope.model) {
	          for (var i in scope.items) {
	            if (scope.items[i].name === key) {
	              scope.items[i].value = scope.model[key];
	            }
	          }
	        }
	      });

	      scope.confirm = function () {
	        scope.items.forEach(function (item) {
	          scope.model[item.name] = item.value;
	        });
	      };

	      scope.clear = function () {
	        scope.items.forEach(function (item) {
	          item.value = '';
	          delete scope.model[item.name];
	        });
	        $log.log(scope.model);
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$state", "$window", "cityData", function ($log, $rootScope, $state, $window, cityData) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/provider/directives/address/address.html',
	    replace: true,
	    scope: {
	      showCounty: '=?',
	      address: '=ngModel',
	      isEditing: '=',
	      model: '=ngModel'
	    },
	    require: 'ngModel',
	    link: function link(scope, element, attr) {
	      scope.address = {};
	      if (scope.model) {
	        scope.province = scope.model.province;
	        scope.city = scope.model.city;
	        scope.county = scope.model.county;
	        scope.detail = scope.model.detail;
	      }

	      scope.provinces = cityData.province;
	      scope.cities = cityData.province[0].city;
	      scope.counties = scope.cities[0].county;

	      scope.provinceListener = scope.$watch('province', function (province) {
	        if (!province) {
	          return;
	        }
	        scope.address.province = province;
	        var index = scope.findProvinceIndex(province);
	        if (index < 0) {
	          return;
	        }
	        scope.cities = cityData.province[index].city;
	        scope.city = null;
	        scope.count = null;
	        // If there is no cities in the province, then we should reset the county.
	        if (scope.cities === undefined) {
	          scope.counties = null;
	          scope.county = null;
	        }
	      });

	      scope.cityListener = scope.$watch('city', function (city) {
	        if (!city) {
	          return;
	        }
	        scope.address.city = city;
	        var index = scope.findCityIndex(city);
	        if (index < 0) {
	          return;
	        }
	        scope.counties = scope.cities[index].county;
	        scope.county = nul;
	      });

	      /*
	      scope.countyListener = scope.$watch("county", function(county) {
	        if (county) {
	          return;
	        }
	        $log.log(county);
	        scope.address.county = county;
	      });*/

	      scope.$watch('detail', function (detail) {
	        if (detail) {
	          return;
	        }
	        scope.address.detail = detail;
	      });

	      scope.findProvinceIndex = function (province) {
	        for (var i = 0; i < cityData.province.length; i++) {
	          if (province === cityData.province[i].name) {
	            return i;
	          }
	        }
	        return -1;
	      };

	      scope.findCityIndex = function (city) {
	        for (var i = 0; i < scope.cities.length; i++) {
	          if (city === scope.cities[i].name) {
	            return i;
	          }
	        }
	        return -1;
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$state", "$window", function ($log, $rootScope, $state, $window) {
	  'ngInject';
	  return {
	    restrict: 'A',
	    templateUrl: 'app/common/provider/directives/menu/menu.html',
	    replace: false,
	    scope: {
	      type: '='
	    },
	    link: function link(scope, element, attr) {
	      // TODO: This should be able to set in a global value.
	      scope.isEditing = scope.$parent.isEditing;
	      scope.name = attr.type;
	      if (attr.type === 'foundTime') {
	        scope.label = '成立时间';
	        scope.options = ['1年以下', '1-5年', '5-8年', '8年以上'];
	      } else if (attr.type === 'companySize') {
	        scope.label = '公司规模';
	        scope.options = ['10人以下', '10-50人', '51-100人', '100人以上'];
	      } else if (attr.type === 'sex') {
	        scope.label = '性别';
	        scope.options = ['男', '女'];
	      }
	      scope.onValueChange = function () {
	        $log.log(scope.selectValue);
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$state", "$window", function ($log, $rootScope, $state, $window) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/provider/directives/returnPolicy/returnPolicy.html',
	    replace: true,
	    scope: {
	      returnPolicy: '=ngModel',
	      isEditing: '='
	    },
	    link: function link(scope, element, attr) {
	      scope.test = function () {
	        $log.log(scope);

	        $log.log(scope.returnTotalPeople);
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$state", "$window", function ($rootScope, $state, $window) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/provider/directives/password/password.html',
	    replace: true,
	    require: 'ngModel',
	    scope: {
	      password: '=ngModel',
	      isEditing: '='
	    },
	    link: function link(scope, element, attr) {
	      scope.verify = function () {
	        var verifiedTag = scope.clearVerified();
	        scope.verified = true;
	        if (scope.password !== scope.password2) {
	          verifiedTag.addClass('fail');
	          verifiedTag.html('两次密码不一致!');
	        } else if (scope.password) {
	          verifiedTag.addClass('success');
	          verifiedTag.html('密码验证成功!');
	        }
	      };

	      scope.focus = function () {
	        scope.clearVerified();
	      };

	      scope.clearVerified = function () {
	        var verifiedTag = element.find('#verified');
	        verifiedTag.html('');
	        verifiedTag.removeClass('fail');
	        verifiedTag.removeClass('success');
	        return verifiedTag;
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "authFac", "userFac", "$rootScope", "$mdSidenav", "$state", "$window", "providerFac", "$uibModal", "productFac", function ($log, authFac, userFac, $rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
	    replace: true,
	    link: function link(scope, element, attr) {

	      $log.log('123');
	      scope.filterProviders = [];
	      scope.$on('sidebarOpen', function () {
	        // TODO: Maybe cache the value.
	        $log.log(scope.providers);
	        if (scope.providers) {
	          scope.filterProviders = scope.providers;
	        } else {
	          scope.initializeSidebar();
	        }
	      });

	      // Initalize.
	      scope.initializeSidebar = function () {
	        scope.providers = [];
	        scope.getProviderList();
	      };

	      // TODO: Check how many providers we have. If too much, we need to do
	      // index.
	      scope.getProviderList = function () {
	        var query = {};
	        var level = authFac.getUserLevel();
	        // ADMIN or 计调员.
	        if (level === 0 || level == 3) {
	          providerFac.getProvider(query).then(function (results) {
	            for (var i = 0; i < results.providers.length; i++) {
	              results.providers[i].contactList = results.contacts[i];
	            }
	            scope.filterProviders = scope.providers = results.providers;
	            $log.log(scope.providers);
	          }, function (error) {});
	        } else {
	          userFac.getProvider().then(function (result) {
	            $log.log(result);
	            result.provider.contactList = result.contacts;
	            scope.filterProviders = scope.providers = [result.provider];
	          });
	        }
	      };

	      scope.pickProvider = function (index) {
	        // Add provider to the providerFac.
	        var provider = scope.providers[index];
	        provider.returnPolicy = providerFac.util.getReturnPolicy(provider);
	        $mdSidenav('provider-side-bar').close().then(function () {
	          scope.product.contact = {};
	          scope.product.pickedProvider = provider;
	        });
	      };

	      // Maybe use some query handling logic.
	      scope.searchProvider = function (query) {
	        scope.filterProviders = [];
	        scope.providers.forEach(function (provider) {
	          if (provider.nickname.toLowerCase().indexOf(query) >= 0 || provider.companyname.toLowerCase().indexOf(query) >= 0) {
	            scope.filterProviders.push(provider);
	          }
	        });
	        return scope.filterProviders;
	      };

	      scope.selectProvider = function (selected) {
	        scope.filterProviders = [selected.originalObject];
	        $log.log(scope.filterProviders);
	      };

	      scope.openContact = function (index) {
	        // TODO: add translate message here.
	        var translate = {
	          'contactname': '联系人姓名',
	          'qqnumber': 'QQ号码'
	        };

	        var modalInstance = $uibModal.open({
	          animation: true,
	          templateUrl: 'app/common/product/directives/providerSideBar/contact/myModalContent.html',
	          controller: 'modalCtrl',
	          resolve: {
	            provider: function provider() {
	              // Construct the contact.
	              var contact = {};
	              for (var key in translate) {
	                contact[key] = scope.providers[index][key];
	              }

	              var contactInfo = [];
	              Object.keys(contact).forEach(function (key) {
	                if (key in translate) {
	                  contactInfo.push({ key: translate[key], value: contact[key] });
	                }
	              });
	              return { id: scope.providers[index].id, contact: contactInfo };
	            }
	          }
	        });

	        modalInstance.result.then(function (selectedItem) {
	          scope.selected = selectedItem;
	        }, function () {});
	      };
	    }
	  };
	}];

	module.exports = exports['default'];

	// TODO: error.

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$http", "$state", "$window", function ($http, $state, $window) {
	  'ngInject';
	  return {
	    restrict: 'A',
	    templateUrl: 'app/common/product/directives/textField/textField.html',
	    replace: false,
	    scope: {
	      key: '@',
	      label: '@',
	      isEditing: '@'
	    },
	    link: function link(scope, element, attr) {
	      scope.maximumColumn = 100;
	      scope.isEditing = scope.$parent.isEditing;

	      scope.$on('valueUpdate', function (e) {
	        scope.value = scope.$parent.product[scope.key];
	      });
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	* 每位工程师都有保持代码优雅的义务
	* Each engineer has a duty to keep the code elegant
	*
	* @author wangxiao
	*/

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["authFac", "$log", "lcConfig", "$state", "$scope", "$window", "commonSer", "helloSer", "productFac", function (authFac, $log, lcConfig, $state, $scope, $window, commonSer, helloSer, productFac) {
	  "ngInject";
	  // Need to get current user level.
	  $log.log(authFac.getUserLevel());
	  $scope.level = authFac.getUserLevel();
	  /*
	  if (authFac.getUserLevel() === lcConfig.userLevel.ADMIN) {
	    $scope.admin = true;
	  } else {
	    $scope.admin = false;
	  }
	   if (authFac.getUserLevel() === lcConfig.userLevel.ORGANIZER) {
	    $scope.organizer = true;
	  } else {
	    $scope.organizer = false;
	  }
	   if (authFac.getUserLevel() === lcConfig.userLevel.PROVIDER) {
	    $scope.isProvider = true;
	  } else {
	    $scope.isProvider = false;
	  }*/

	  $scope.logout = function () {
	    authFac.logout().then(function () {
	      $state.go("login");
	    }, function () {
	      $state.go("login");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["SweetAlert", "$state", "$log", "$rootScope", "$scope", "$document", "$timeout", "lcConfig", "$window", "providerFac", "fileFac", "Upload", function (SweetAlert, $state, $log, $rootScope, $scope, $document, $timeout, lcConfig, $window, providerFac, fileFac, Upload) {
	  "ngInject";
	  var url = lcConfig.apiHost + "/api/provider/add";
	  $scope.addUrl = url;
	  $scope.isEditing = true;
	  $scope.confirmed = false;
	  if ($state.params.provider) {
	    $scope.provider = $state.params.provider;
	    $log.log("getting provider");
	    $log.log($scope.provider.start);
	    $log.log($scope.provider.destination);
	    $log.log($scope.provider.address);
	    $rootScope.$broadcast("addressUpdate", { address: $scope.provider.address });
	  }

	  $scope.upload = function (file) {
	    if (!file) {
	      return;
	    }
	    $scope.filename = file.name;
	    $scope.provider.licenseFilename = fileFac.hash(file.name);
	    providerFac.uploadProviderFiles(file, $scope.provider.licenseFilename).then(function () {
	      $log.log("upload success");
	    }, function (error) {});
	  };

	  // TODO: Do param checking
	  $scope.confirm = function () {
	    $scope.confirmed = true;
	  };

	  $scope.submit = function () {
	    $log.log($scope.provider);
	    providerFac.upload($scope.provider).then(function (result) {
	      SweetAlert.swal("注册商添加成功", " 请到我的账号中我发布的产品去查看更新.", "success");
	      $state.go("home");
	    }, function (error) {});
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$scope", "$stateParams", "providerFac", "$document", "$timeout", "lcConfig", "$window", "fileFac", "SweetAlert", function ($log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac, SweetAlert) {
	  "ngInject";
	  $scope.providers = [];
	  var PER_PAGE = 50;
	  // get the first page index.
	  getProvider(0);
	  function getProvider(index) {
	    providerFac.getProvider({ "index": index }).then(function (results) {
	      var providers = results.providers;
	      if (results.providers.length > 0) {
	        $scope.providers = providers;
	        $log.log($scope.providers);
	      }
	    }, function (error) {});
	  }

	  $scope.$on("previous", function (index) {
	    getProvider(index);
	  });

	  $scope.$on("next", function (index) {
	    getProvider(index);
	  });

	  $scope.$on("change", function (index) {
	    getProvider(index);
	  });

	  $scope["delete"] = function (provider) {
	    providerFac.deleteProvider(provider.objectId).then(function () {
	      SweetAlert.swal("删除成功!", "success");
	    }, function (error) {
	      SweetAlert.swal("无法删除,请下架所有产品");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$stateParams", "$log", "$scope", "$document", "$timeout", "lcConfig", "$window", "providerFac", function ($stateParams, $log, $scope, $document, $timeout, lcConfig, $window, providerFac) {
	  "ngInject";
	  $scope.isEditing = false;
	  $scope.showing = true;
	  var query = { "objectId": $stateParams.providerId };
	  providerFac.getProvider(query).then(function (result) {
	    // There should be only one result
	    $scope.provider = result.providers[0];
	  }, function (error) {
	    // TODO: handle error.
	    $log.log("getting error");
	    $log.log(error);
	  });

	  // Get the contact list of the provider.
	  providerFac.getContactList($stateParams.providerId).then(function (results) {
	    $scope.contactList = results;
	  });

	  $scope.$watch("contactperson", function (value) {
	    $log.log("contact value");
	    $log.log($scope.contactperson);
	    $log.log(value);
	  });
	}];

	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$rootScope", "authFac", "$log", "$sce", "$state", "$scope", "$uibModal", "userFac", "lcConfig", "$window", "productFac", "orderFac", "formConfig", "providerFac", "SweetAlert", function ($rootScope, authFac, $log, $sce, $state, $scope, $uibModal, userFac, lcConfig, $window, productFac, orderFac, formConfig, providerFac, SweetAlert) {
	  "ngInject";
	  $scope.changePass = false;
	  $scope.level = authFac.getUserLevel();
	  $scope.isProvider = authFac.getUserLevel() === lcConfig.userLevel.PROVIDER;

	  if ($scope.$parent.unfinished) {
	    $scope.unfinished = "(有未处理产品)";
	  }

	  $scope.fetchedProvider = false;
	  $scope.contactList = [];

	  userFac.getCurrentUserInfo().then(function (result) {
	    $scope.user = result;
	  }, function (error) {});

	  providerFac.getMyProvider().then(function (result) {
	    $log.log("success");
	    $scope.fetchedProvider = true;
	    // There should be only one provider.
	    $scope.provider = result.provider;
	    $scope.contactList = result.contacts;
	    $log.log(result);
	    $log.log("getting result");
	    $log.log($scope.provider);
	  }, function (error) {
	    $scope.fetchedProvider = true;
	  });

	  $scope.$watch("showProvider", function (value) {
	    if ($scope.provider) {
	      $scope.$broadcast("addressUpdate", { address: $scope.provider.address });
	    }
	  });

	  $scope.showUnverified = function () {
	    $scope.unverified = true;
	    var query = {};
	    query.myResponsible = true;
	    query.status = lcConfig.productStatus.UNVERIFIED;
	    productFac.searchProduct(query).then(function (results) {
	      $scope.products = results.products;
	      for (var i = 0; i < $scope.products.length; i++) {
	        $scope.products[i].responsible = results.responsible[i];
	        productFac.getLatestTrip($scope.products[i]);
	        $log.log($scope.products[i]);
	      }
	    }, function (error) {});
	  };

	  $scope.showVerified = function () {
	    $scope.unverified = true;
	    var query = {};
	    query.myResponsible = true;
	    query.status = lcConfig.productStatus.VERIFIED;
	    productFac.searchProduct(query).then(function (results) {
	      $scope.products = results.products;
	      for (var i = 0; i < $scope.products.length; i++) {
	        $scope.products[i].responsible = results.responsible[i];
	        productFac.getLatestTrip($scope.products[i]);
	      }
	    }, function (error) {});
	  };

	  $scope.showMyProducts = function () {
	    $scope.unverified = false;
	    // Construct the query.
	    var query = {};
	    query.self = true;
	    productFac.searchProduct(query).then(function (results) {
	      $scope.products = results.products;
	      for (var i = 0; i < $scope.products.length; i++) {
	        $scope.products[i].responsible = results.responsible[i];
	      }
	      $scope.products.forEach(function (product) {
	        productFac.getLatestTrip(product);
	      });
	    }, function (error) {});
	  };

	  $scope.deleteContact = function (index) {
	    var contact = $scope.contactList[index];
	    $log.log(contact.objectId);
	    userFac.deleteContactList(contact.objectId).then(function () {
	      $scope.contactList.splice(index, 1);
	    });
	  };

	  $scope.editContact = function (index) {
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: "app/common/directives/form/form.html",
	      controller: "formCtrl",
	      resolve: {
	        // Need to convert the titles into the following format.
	        // {key: name, type: type}
	        data: function data() {
	          var title = "添加商户人信息";
	          var contact = $scope.contactList[index];
	          var items = formConfig.data["商户联系人"];
	          // Add values to items.
	          for (var i in items) {
	            var item = items[i];
	            item.value = contact[item.name];
	          }
	          return { "title": title, "items": items };
	        }
	      }
	    });
	    modalInstance.result.then(function (items) {
	      var contact = $scope.convertItemsToContact(items);
	      contact.objectId = $scope.contactList[index].objectId;
	      userFac.editContactList(contact).then(function () {
	        $scope.contactList[index] = contact;
	      });
	    }, function () {});
	  };

	  $scope.convertItemsToContact = function (items) {
	    var contact = {};
	    items.forEach(function (item) {
	      contact[item.name] = item.value;
	    });
	    contact.providerId = $scope.provider.objectId;
	    return contact;
	  };

	  $scope.addContact = function () {
	    if (!$scope.provider) {
	      SweetAlert.swal("对不起,你还没有供应商");
	      return;
	    }
	    userFac.addContact($scope.contactList, $scope.provider.objectId);
	  };

	  // TODO: FUCK THIS BITCH CODE. REWRITE!!!!
	  $scope.showMyProvider = function () {
	    $scope.products = [];
	    $scope.showProvider = true;
	    $scope.showContactList = false;
	    $log.log($scope.provider);
	    $scope.currentProvider = $scope.provider;
	    $scope.testing1 = angular.copy($scope.provider.destination);
	    $log.log($scope.testing1);
	    $scope.testing2 = angular.copy($scope.provider.start);
	    $scope.provider.fileUrl = $sce.trustAsResourceUrl($scope.provider.licenseFile.url);
	  };

	  $scope.showMyContactList = function () {
	    $scope.products = [];
	    $scope.showProvider = false;
	    $scope.showContactList = true;
	  };

	  $scope.unPost = function (index) {
	    var product = $scope.products[index];
	    productFac.unPost(product.objectId).then(function (value) {
	      SweetAlert.swal("下架成功", "请刷新网页", "success");
	    });
	  };

	  $scope.verify = function (index) {
	    var product = $scope.products[index];
	    productFac.verify(product.objectId).then(function (value) {
	      SweetAlert.swal("审核成功", "请刷新网页", "success");
	    });
	  };

	  $scope.post = function (index) {
	    var product = $scope.products[index];
	    productFac.post(product.objectId).then(function (value) {
	      SweetAlert.swal("提交成功", "请刷新网页", "success");
	    });
	  };

	  // TODO.
	  $scope.remind = function (index) {};

	  $scope.addMyProvider = function () {
	    $log.log($scope.provider);
	    $state.go("home.add-provider", { "provider": $scope.provider });
	  };

	  $scope.editProduct = function (index) {
	    var product = $scope.products[index];
	    $state.go("home.edit-product", { productId: product.objectId });
	  };

	  $scope.changePass = function () {
	    authFac.changePass().then(function () {
	      SweetAlert.swal("请到您的邮箱中接受重置密码的邮件");
	    });
	  };

	  $scope.showRevokeOrder = function () {
	    orderFac.getRevoke().then(function () {});
	  };

	  $scope.showMyOrder = function () {};

	  $scope.deleteProduct = function (index) {
	    var product = $scope.products[index];
	    productFac.deleteProduct(product.objectId).then(function (value) {
	      SweetAlert.swal("删除成功", "请刷新网页", "success");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "SweetAlert", "$state", "$scope", "$stateParams", "commonSer", "providerFac", "$mdSidenav", "$window", "dispatcherConfig", "$uibModal", "lcConfig", "itineraryFac", "productFac", "userFac", "menuConfig", "calendarConfig", function ($log, SweetAlert, $state, $scope, $stateParams, commonSer, providerFac, $mdSidenav, $window, dispatcherConfig, $uibModal, lcConfig, itineraryFac, productFac, userFac, menuConfig, calendarConfig) {
	  'ngInject';
	  // TODO: Currently, sidebar does not support dynamic md-component-id,
	  // maybe create a cl for this bug.
	  // Too hacky.
	  $scope.firstUpdates = false;
	  $scope.product = {};
	  $scope.product.price = {};
	  $scope.toggleLeft = buildToggler('provider-side-bar');
	  $scope.pickedProviders = [];
	  $scope.price = 0;
	  $scope.addUrl = lcConfig.apiHost + '/api/product/add';
	  // test
	  $scope.isEditing = true;
	  $scope.isExisting = false;
	  $scope.showItinerary = false;
	  $scope.showNotice = false;
	  $scope.itinerary = [];
	  $scope.dispatchers = dispatcherConfig.data;
	  $scope.responses = [];
	  $scope.hotels = menuConfig.data['酒店标准'];
	  $scope.transports = menuConfig.data['交通方式'];
	  $scope.types = menuConfig.data['类型'];
	  $scope.areas = menuConfig.data['大区'];
	  $scope.priceItems = calendarConfig.data['团期报价'];

	  if ($stateParams.productId) {
	    // Update product.
	    $scope.isExisting = true;
	    productFac.getProductDetail($stateParams.productId).then(function (result) {
	      $scope.firstUpdates = true;
	      $scope.product = result.product;
	      $scope.product.duration = $scope.product.itinerary.length;
	      $scope.product.responsible = result.responsible;
	      $scope.product.platformcontact = result.platformcontact;
	      $scope.product.pickedProvider = result.provider;
	      $scope.product.contact = result.contact;
	      $log.log(result);
	      providerFac.getContactList($scope.product.pickedProvider.objectId).then(function (contactList) {
	        $scope.product.pickedProvider.contactList = contactList;
	      });

	      $scope.$broadcast('updateMaterialCalendar');
	    });
	  }
	  $log.log($stateParams);
	  $log.log($state.params);

	  $scope.$watch('product.duration', function (newValue, oldValue) {
	    if ($scope.firstUpdates) {
	      $scope.firstUpdates = false;
	      return;
	    }
	    $log.log(newValue);
	    if (!$scope.product.itinerary) {
	      $scope.product.itinerary = [];
	    }
	    if (newValue > oldValue) {
	      $scope.product.itinerary.push({});
	    } else if (newValue < oldValue) {
	      $scope.product.itinerary.pop();
	    }
	    $log.log($scope.product.itinerary);
	  });

	  $scope.submitProduct = function () {
	    $log.log($scope.product);

	    productFac.uploadProduct($scope.product).then(function (result) {
	      $log.log('upload product success');
	      SweetAlert.swal({
	        title: '发布成功',
	        text: '请到我的账号中我发布的产品去查看更新.',
	        type: 'success',
	        confirmButtonColor: '#DD6B55',
	        confirmButtonText: '确认',
	        closeOnConfirm: true }, function () {
	        $state.go('home');
	      });
	    }, function (error) {
	      SweetAlert.swal('发布失败', ' 请重新登陆.', 'error ');
	    });
	  };

	  function buildToggler(navID) {
	    return function () {
	      $log.log('open sidebar');
	      $scope.$broadcast('sidebarOpen');
	      $mdSidenav(navID).toggle().then(function () {
	        $scope.providers = [];
	      });
	    };
	  }

	  $scope.selectDispatcher = function (value) {
	    if (value === undefined) {
	      delete $scope.product.dispatcherName;
	      delete $scope.product.dispatcherPhone;
	    } else {
	      $log.log($scope.product);
	      var dispatch = value.originalObject;
	      $log.log(dispatch);
	      $scope.product.dispatcherName = dispatch.name;
	      $scope.product.dispatcherPhone = dispatch.phone;
	    }
	  };

	  $scope.addContact = function () {
	    userFac.addContact($scope.product.pickedProvider.contactList, $scope.product.pickedProvider.objectId);
	  };

	  productFac.getInternalUsers().then(function (result) {
	    $scope.responses = [];
	    $log.log(result);
	    for (var i = 0; i < result.length; i++) {
	      $scope.responses.push(result[i]);
	    }
	  }, function (error) {});

	  $scope.pickContact = function (index) {
	    $log.log($scope.product);
	    //$scope.contact = $scope.pickedProvider.contactList[i];
	  };

	  $scope.dayClick = function (date) {
	    $log.log(date);
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    $scope.currentPrice = productFac.getPrice(year, month, day, $scope.product);
	    $scope.currentPrice.year = year;
	    $scope.currentPrice.month = month;
	    $scope.currentPrice.day = day;
	  };

	  $scope.setDayContent = function (date) {
	    $log.log('setDayContent');
	    return productFac.setDayContent(date, $scope.product);
	  };

	  $scope.setPrice = function () {
	    var year = $scope.currentPrice.year;
	    var month = $scope.currentPrice.month;
	    var day = $scope.currentPrice.day;
	    if ($scope.currentPrice && Object.keys($scope.currentPrice).length > 0) {
	      commonSer.addProps($scope.product.price, [year, month, day], $scope.currentPrice);
	    }
	  };

	  $scope.$watch('currentPrice', function (newValue, oldValue) {
	    // Set day content.
	    if ($scope.currentPrice) {
	      $scope.setPrice();
	      $scope.$broadcast('updateMaterialCalendar');
	    }
	  }, true);
	}];

	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$scope", "$window", "$uibModalInstance", "provider", function ($scope, $window, $uibModalInstance, provider) {
	  'ngInject';

	  $scope.contact = provider.contact;

	  $scope.close = function () {
	    $uibModalInstance.dismiss('cancel');
	  };

	  $scope.showDetail = function () {};
	}];

	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$scope", "$state", "$window", "lcConfig", "productFac", function ($log, $scope, $state, $window, lcConfig, productFac) {
	  'ngInject';
	  // TODO: Use cache to store results?
	  // maybe create a cl for this bug.

	  $scope.products = [];
	  productFac.getProductsCount().then(function (result) {
	    $scope.unposted = result.unposted;
	    $scope.unverified = result.unverified;
	    $scope.verified = result.verified;
	  }, function (error) {});

	  $scope.showVerified = function () {
	    productFac.getAllProducts(3).then(function (results) {
	      $scope.products = results.products;
	      $scope.products.forEach(function (product, index) {
	        product.responsible.contactname = results.contactname[index];
	        productFac.getLatestTrip(product);
	        $log.log(product);
	      });
	    }, function (error) {});
	  };

	  $scope.showUnverified = function () {
	    productFac.getAllProducts(2).then(function (results) {
	      $scope.products = results.products;
	      $scope.products.forEach(function (product, index) {
	        product.responsible.contactname = results.contactname[index];
	        productFac.getLatestTrip(product);
	      });
	    }, function (error) {});
	  };

	  $scope.showUnposted = function () {
	    productFac.getAllProducts(1).then(function (results) {
	      $scope.products = results.products;
	      $scope.products.forEach(function (product, index) {
	        product.responsible.contactname = results.contactname[index];
	        productFac.getLatestTrip(product);
	      });
	    }, function (error) {});
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$sce", "$log", "$scope", "$window", "$stateParams", "productFac", "providerFac", "multiChoiceConfig", function ($sce, $log, $scope, $window, $stateParams, productFac, providerFac, multiChoiceConfig) {
	  "ngInject";
	  // TODO: Currently, sidebar does not support dynamic md-component-id,
	  // maybe create a cl for this bug.
	  $scope.isEditing = false;
	  $scope.product = {};
	  productFac.getProductDetail($stateParams.productId).then(function (result) {
	    $scope.product = result.product;
	    $scope.product.pickedProvider = result.provider;
	    // Convert prefix.
	    $scope.product.responsible = result.responsible;
	    $scope.product.contact = result.contact;
	    $scope.product.platformcontact = result.platformcontact;
	    $scope.product.prefixArray = productFac.convertProductPrefix(result.product.prefix);
	    $scope.$broadcast("updateMaterialCalendar");
	    $log.log("get product detail");
	    $log.log($scope.product);
	    $scope.fileUrl = $sce.trustAsResourceUrl($scope.product.itineraryFile.url);
	  }, function (error) {});

	  $scope.updateProviders = function () {
	    for (var i = 0; i < $scope.pickedProviders.length; i++) {
	      getReturnPolicy(i);
	    }
	  };

	  $scope.setDayContent = function (date) {
	    return productFac.setDayContent(date, $scope.product);
	  };

	  $scope.dayClick = function (date) {
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    $scope.currentPrice = productFac.getPrice(year, month, day, $scope.product);
	    $scope.currentPrice.year = year;
	    $scope.currentPrice.month = month;
	    $scope.currentPrice.day = day;
	  };

	  function getReturnPolicy(index) {
	    var id = $scope.pickedProviders[index].id;
	    $scope.pickedProviders[index].returnPolicy = "正在获取返利信息...";
	    providerFac.getReturnPolicyDetail(id).then(function (result) {
	      $scope.pickedProviders[index].returnPolicy = providerFac.util.getReturnPolicy(result);
	    }, function (error) {});
	  }
	}];

	module.exports = exports["default"];

	// TODO: handle failure.

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$scope", "$window", "$uibModalInstance", "results", function ($scope, $window, $uibModalInstance, results) {
	  'ngInject';

	  // This is for previous results
	  $scope.results = results;
	  // Init.
	  var keys = Object.keys(results);
	  for (var i = 0; i < keys.length; i++) {
	    $scope[keys[i]] = results[keys[i]];
	  }

	  $scope.close = function () {
	    $uibModalInstance.dismiss('cancel');
	  };

	  $scope.add = function () {
	    // Fill in the results.
	    $scope.results.date = $scope.date;
	    $scope.results.hotel = $scope.hotel;
	    $scope.results.cafe = $scope.cafe;
	    $scope.results.transportation = $scope.transportation;
	    $scope.results.startTime = $scope.startTime;
	    $scope.results.detail = $scope.detail;
	    $scope.results.start = $scope.start;
	    $scope.results.end = $scope.end;
	    $uibModalInstance.close($scope.results);
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["SweetAlert", "errorFac", "lcConfig", "$location", "$scope", "$window", "$log", "commonSer", "helloSer", "authFac", function (SweetAlert, errorFac, lcConfig, $location, $scope, $window, $log, commonSer, helloSer, authFac) {
	  "ngInject";

	  $log.log("getting levels");
	  $scope.levels = [{ level: 2, value: "供应商" }, { level: 1, value: "分销商" }, { level: 3, value: "计调员" }];

	  function loginSuccess() {
	    $log.log("login success");
	    commonSer.goAddProvider();
	  }

	  function loginFail() {}

	  $scope.goHome = function () {
	    commonSer.goHome();
	  };

	  $scope.logout = function () {
	    authFac.logout();
	  };

	  $scope.register = function () {
	    $log.log($scope.level);
	    $log.log($scope.email);
	    $log.log($scope.cellphone);
	    if (!($scope.username && $scope.password && $scope.email && $scope.contactname && $scope.cellphone)) {
	      SweetAlert.swal("请完善注册信息!", "", "warning");
	      return;
	    }
	    $log.log($scope.cellphone);
	    authFac.register($scope.username, $scope.password, $scope.level, $scope.email, $scope.contactname, $scope.cellphone).then(function () {
	      SweetAlert.swal("账号注册成功", "请保存这条信息,并告知对方.账号: " + $scope.username + " 密码: " + $scope.password, "success");
	    }, function (error) {
	      $log.log(error.code);
	      SweetAlert.swal("注册失败", "错误信息: " + errorFac.getErrorMessage(error.code), "warning");
	    });
	  };

	  $scope.login = function () {
	    authFac.login($scope.username, $scope.password).success(function (user) {
	      var level = authFac.getUserLevel();
	      switch (level) {
	        case lcConfig.userLevel.ADMIN:
	          {
	            $location.path("/admin");
	            break;
	          }
	        case lcConfig.userLevel.SALE:
	          {
	            $log.log("/sale");
	            $location.path("/sale");
	            break;
	          }
	        case lcConfig.userLevel.PROVIDER:
	          {
	            $location.path("/admin");
	            break;
	          }
	        case lcConfig.userLevel.ORGANIZER:
	          {
	            $location.path("/admin");
	            break;
	          }
	        default:
	          {
	            $log.log("Unknown user, should not happen!!");
	            break;
	          }
	      }
	    }).error(function (response) {
	      // TODO: Use a nicer UI and translate..
	      $window.alert("用户名密码错误!-");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$scope", "$document", "$state", "lcConfig", "$window", "fileFac", "authFac", function ($scope, $document, $state, lcConfig, $window, fileFac, authFac) {
	  "ngInject";

	  $scope.logout = function () {
	    authFac.logout().then(function () {
	      $state.go("login");
	    }, function () {
	      $state.go("login");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$sce", "$scope", "$state", "$log", "$mdSidenav", "$window", "$uibModal", "lcConfig", "itineraryFac", "productFac", "menuConfig", "providerFac", function ($sce, $scope, $state, $log, $mdSidenav, $window, $uibModal, lcConfig, itineraryFac, productFac, menuConfig, providerFac) {
	  "ngInject";

	  $scope.openSearchBox = function () {};

	  $scope.selectedTags = {};

	  $scope.index = {
	    "酒店标准": -1,
	    "交通方式": -1,
	    "类型": -1,
	    "供应商": -1,
	    "行程天数": -1
	  };

	  $scope.tags = {
	    "酒店标准": menuConfig.data["酒店标准"],
	    "交通方式": menuConfig.data["交通方式"],
	    "类型": menuConfig.data["类型"],
	    "供应商": [],
	    "行程天数": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	  };

	  $scope.showItinerary = function (id) {
	    $state.go("sale.show-itinerary", { productId: id });
	  };

	  // Parse the search query.
	  $scope.parseDayQuery = function (query, day) {
	    var length = $scope.tags["行程天数"].length;
	    if (day === $scope.tags["行程天数"][length - 1]) {
	      query.minDay = day;
	      query.maxDay = Number.MAX_SAFE_INTEGER;
	    } else {
	      query.minDay = day;
	      query.maxDay = day;
	    }
	  };

	  $scope.search = function () {
	    // Construct the query based on selected tag.
	    $log.log($scope.start);
	    var query = {};
	    for (var key in $scope.selectedTags) {
	      var value = $scope.selectedTags[key];
	      var name = getKeyName(key);
	      if (name === "stopDay") {
	        $scope.parseDayQuery(query, value);
	      } else if (name === "provider") {
	        query[name] = $scope.providers[$scope.index[key]].objectId;
	      } else {
	        query[name] = value;
	      }
	    }

	    query.status = 3;
	    query.searchQuery = $scope.destination;

	    if ($scope.showAddress && $scope.start) {
	      query.start = $scope.start;
	    }

	    if ($scope.showDate && $scope.startDate) {
	      query.startDate = $scope.startDate;
	    }

	    if ($scope.showDate && $scope.endDate) {
	      query.endDate = $scope.endDate;
	    }

	    $log.log(query);
	    // Set start date.
	    if (!query.startDate) {
	      var date = new Date();
	      query.startDate = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
	    }

	    productFac.searchProduct(query).then(function (results) {
	      $scope.products = results.products;
	      $scope.products = $scope.products.filter(function (product) {
	        product.prefixArray = productFac.convertProductPrefix(product.prefix);
	        $log.log(product);
	        product.fileUrl = $sce.trustAsResourceUrl(product.itineraryFile.url);
	        return productFac.getLatestTrip(product);
	      });
	      for (var i = 0; i < $scope.products.length; i++) {
	        $scope.products[i].provider = results.providers[i];
	      }
	    });
	  };

	  providerFac.search({}, ["companyname"]).then(function (providers) {
	    $scope.providers = providers;
	    $scope.tags["供应商"] = providers.map(function (provider) {
	      return provider.companyname;
	    });
	  });

	  $scope.search();
	  $scope.pick = function (key, index) {
	    $scope.index[key] = index;
	    if (index === -1) {
	      delete $scope.selectedTags[key];
	    } else {
	      $scope.selectedTags[key] = $scope.tags[key][index];
	    }
	  };

	  $scope.removeTag = function (key) {
	    // Need to update index.
	    delete $scope.selectedTags[key];
	    $scope.index[key] = -1;
	  };

	  function getKeyName(key) {
	    switch (key) {
	      case "酒店标准":
	        return "hotelStandard";
	      case "交通方式":
	        return "transportStandard";
	      case "类型":
	        return "type";
	      case "行程天数":
	        return "stopDay";
	      case "供应商":
	        return "provider";
	      default:
	        return "";
	    }
	  }
	}];

	module.exports = exports["default"];

	// Show all cities.

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["productFac", "$scope", "$window", "$log", "$uibModalInstance", function (productFac, $scope, $window, $log, $uibModalInstance) {
	  'ngInject';
	  var INT_MAX = 1000000;

	  $scope.close = function () {
	    $uibModalInstance.dismiss('cancel');
	  };

	  $scope.search = function () {
	    var query = {};
	    // Init query.
	    query.priceMin = 0;
	    query.priceMax = INT_MAX;
	    query.dayMin = 0;
	    query.dayMax = INT_MAX;

	    // First, we need to validate the search parameters.
	    if (!$scope.keyword) {
	      $window.alert('请输入关键词');
	    } else {
	      query.keyword = $scope.keyword;
	    }

	    // TODO: add validate for number directly on the input field.
	    // There should be one that we can use.
	    if (!$scope.priceLimit) {
	      // TODO: use a nice alert box.
	      if (!$scope.priceMin) {
	        $window.alert('请输入价格最小值');
	        return;
	      } else {
	        query.priceMin = $scope.priceMin;
	      }

	      if (!$scope.priceMax) {
	        $window.alert('请输入价格最大值');
	        return;
	      } else {
	        query.priceMax = $scope.priceMax;
	      }
	    }

	    if (!$scope.startLimit) {
	      if (!$scope.startDate) {
	        $window.alert('请输入开始时间');
	        return;
	      } else {
	        query.startDate = new Date($scope.startDate).getTime();
	      }

	      if ($scope.endDate) {
	        query.endDate = new Date($scope.endDate).getTime();
	      }
	    }
	    query.dayMin = $scope.dayMin;
	    query.dayMax = $scope.dayMax;
	    // start search.
	    productFac.searchProduct(JSON.stringify(query)).then(function (results) {
	      $uibModalInstance.close(results);
	    }, function (response) {
	      // TODO: add error message.
	      $uibModalInstance.close([]);
	    });
	  };

	  $scope.days = [{ string: '无限制' }, { string: '1日' }, { string: '2日' }, { string: '3日' }, { string: '4日' }, { string: '5日' }, { string: '6日' }, { string: '7-8日' }, { string: '9-10日' }, { string: '10日以上' }];

	  $scope.startLimit = true;
	  $scope.dayLimit = true;
	  $scope.priceLimit = true;
	  $scope.setPriceLimit = function () {
	    $scope.priceLimit = true;
	    $scope.priceMin = null;
	    $scope.priceMax = null;
	  };

	  $scope.setStartLimit = function () {
	    $scope.startLimit = true;
	    $scope.startDate = null;
	    $scope.endDate = null;
	  };

	  $scope.setPriceBlur = function () {
	    // Check if one of the price is not empty.
	    if ($scope.priceMin !== null || $scope.priceMax !== null) {
	      $scope.priceLimit = false;
	    } else {
	      $scope.priceLimit = true;
	    }
	  };

	  // TODO: Validate time.
	  $scope.setStartBlur = function () {
	    if ($scope.startDate || $scope.endDate) {
	      $scope.startLimit = false;
	    } else {
	      $scope.startLimit = true;
	    }
	  };

	  $scope.setDay = function (index) {
	    $scope.setDayNumber($scope.days[index]);
	    $scope.dayMin = $scope.days[index].min;
	    $scope.dayMax = $scope.days[index].max;
	  };

	  /**
	  * Set the value of the days based on its string value.
	  * @param day one of the days stored in $scope.days.
	  * */
	  $scope.setDayNumber = function (day) {
	    if (day.string === '无限制') {
	      day.min = 0;
	      day.max = 99999999;
	      return;
	    }

	    var index = day.string.indexOf('-');
	    var dayIndex = day.string.indexOf('日');
	    if (index >= 0) {
	      day.min = parseInt(day.string.substring(0, index));
	      day.max = parseInt(day.string.substring(index + 1, dayIndex));
	      return;
	    }

	    if (dayIndex === day.string.length - 1) {
	      day.min = parseInt(day.string.substring(0, dayIndex));
	      day.max = day.min;
	      return;
	    } else if (dayIndex === day.string.length - 3) {
	      day.min = parseInt(day.string.substring(0, dayIndex));
	      day.max = INT_MAX;
	      return;
	    } else {
	      $log.log('sth is wrong here, need to check!');
	      return;
	    }
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$scope", "$stateParams", "$window", "lcConfig", "itineraryFac", "productFac", function ($log, $scope, $stateParams, $window, lcConfig, itineraryFac, productFac) {
	  "ngInject";
	  $scope.product = [];

	  // get product.
	  productFac.getProductDetail($stateParams.productId).then(function (result) {
	    $scope.product = result;
	    $scope.itinerarys = JSON.parse(result.itinerary);
	    // Set itineray date
	    for (var i = 0; i < $scope.itinerarys.length; i++) {
	      var date = $scope.itinerarys[i].date;
	      $scope.itinerarys[i].date = $scope.convertDate(date);
	    }
	    $log.log($scope.itinerary);
	  }, function (response) {
	    $window.alert("didn't find productId");
	  });

	  // Maybe move this to a util service.
	  $scope.convertDate = function (dateString) {
	    var date = new Date(dateString);
	    var day = date.getDate();
	    var monthIndex = parseInt(date.getMonth()) + 1;
	    var year = date.getFullYear();
	    return year + "年" + monthIndex + "月" + day + "日";
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$scope", "lcConfig", "$window", "$uibModalInstance", "productFac", "product", function ($log, $scope, lcConfig, $window, $uibModalInstance, productFac, product) {
	  "ngInject";

	  $scope.product = product;
	  $scope.options = [{ value: "已付款", state: lcConfig.CUSTOMER_STATE.PAID }, { value: "未付款", state: lcConfig.CUSTOMER_STATE.UNPAID }];

	  $scope.signin = function () {
	    var query = {};
	    // Validate parameters.
	    if (!$scope.username) {
	      $window.alert("请输入姓名");
	      return;
	    } else {
	      query.username = $scope.username;
	    }

	    // TODO: 身份证必须15位数字
	    if (!$scope.identifier || $scope.identifier.length !== 15) {
	      $window.alert("请输入有效身份证号");
	      return;
	    } else {
	      query.identifier = $scope.identifier;
	    }

	    // phone number is optional.
	    if ($scope.phone) {
	      query.phone = $scope.phone;
	    }

	    if (!$scope.state.toString()) {
	      $window.alert("请输入付款状态");
	      return;
	    } else {
	      query.state = $scope.state;
	    }
	    $log.log($scope.product);
	    query.productId = $scope.product.objectId;
	    query.productName = $scope.product.productname;
	    query.price = $scope.product.price;
	    productFac.signinUser(JSON.stringify(query)).then(function (result) {
	      $uibModalInstance.close(result);
	    }, function (error) {
	      $uibModalInstance.dismiss("cancel");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$scope", "$document", "$state", "lcConfig", "$window", "customerFac", function ($log, $scope, $document, $state, lcConfig, $window, customerFac) {
	  "ngInject";
	  $scope.pages = [1, 2, 3, "..."];
	  $scope.customers = [];
	  $scope.search = function () {
	    // TODO: validate all parameters.
	    var query = {};
	    if ($scope.username) {
	      query.username = $scope.username;
	    }
	    if ($scope.identifier) {
	      query.identifier = $scope.identifier;
	    }
	    if ($scope.productId) {
	      query.productId = $scope.productId;
	    }
	    if ($scope.state) {
	      query.state = $scope.state;
	    }

	    if (Object.keys(query).length === 0) {
	      $window.alert("请输入关键字");
	      return;
	    }

	    customerFac.search(JSON.stringify(query)).then(function (results) {
	      $log.log(results);
	      $scope.customers = results;
	      // set customer paid state.
	      for (var i = 0; i < $scope.customers.length; i++) {
	        var customer = $scope.customers[i];
	        switch (customer.state) {
	          case lcConfig.CUSTOMER_STATE.UNPAID:
	            customer.stateText = "未付款";
	            break;
	          case lcConfig.CUSTOMER_STATE.PAID:
	            customer.stateText = "已付款";
	            break;
	        }
	      }
	    }, function (response) {});
	  };
	}];

	module.exports = exports["default"];

	// TODO: handle error.

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$scope", "$window", "$uibModalInstance", "providerFac", function ($log, $scope, $window, $uibModalInstance, providerFac) {
	  'ngInject';

	  $scope.close = function () {
	    $uibModalInstance.dismiss('cancel');
	  };

	  // TODO: move this to a global config
	  $scope.types = [{ 'value': '地接社', 'key': 'domestieOperaotr' }, { 'value': '车队', 'key': 'motorcade' }, { 'value': '机票', 'key': 'airticket' }];

	  $scope.search = function () {
	    var query = {};
	    if ($scope.keyword) {
	      query.keyword = $scope.keyword;
	    }
	    if ($scope.mainDestination) {
	      query.mainDestination = $scope.mainDestination;
	    }

	    if ($scope.servingType) {
	      query.servingType = $scope.servingType;
	    }
	    providerFac.search(query).then(function (results) {
	      $uibModalInstance.close(results);
	    }, function (error) {});
	  };
	}];

	module.exports = exports['default'];

	// TODO: handle error.

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Created by chaopan on 7/3/16.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function ($scope, $state, $log, $stateParams, $uibModal, productFac, $sce) {
	  $scope.priceMap = {};
	  $scope.product = {};
	  productFac.getProductDetail($stateParams.productId).then(function (result) {
	    $scope.product = result.product;
	    $scope.product.provider = result.provider;
	    if ($scope.product.itineraryFile) {
	      $scope.product.fileUrl = $sce.trustAsResourceUrl($scope.product.itineraryFile.url);
	    }
	    $scope.product.platformcontact = result.platformcontact;
	    productFac.getLatestTrip($scope.product);
	    $log.log("getting result");
	    $log.log(result);
	    // Set the current Date.
	    $scope.$broadcast("updateMaterialCalendar");
	    $scope.$broadcast("updateTemplate", { params: $scope.product });
	  }, function (error) {});

	  $scope.selectedDate = null;
	  $scope.firstDayOfWeek = 0;
	  $scope.setDirection = function (direction) {
	    $scope.direction = direction;
	  };

	  $scope.getItinerary = function (index) {
	    return $sce.trustAsHtml($scope.product.itinerary[index].detail);
	  };

	  $scope.updateMonthContent = function (data) {
	    var price = $scope.product.price;
	    if (price[data.year]) {
	      var month = price[data.year][data.month];
	      for (var i = 0; i < month.length; i++) {
	        var date = new Date(data.year, data.month, i + 1);
	        //$log.log(date);
	        $scope.setDayContent(date);
	      }
	    }
	  };

	  $scope.prevMonth = function (data) {
	    $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
	  };
	  $scope.nextMonth = function (data) {
	    $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
	  };

	  $scope.order = function () {
	    $log.log($scope.adult);
	    $scope.openReserveForm($scope.adult, $scope.child);
	  };

	  $scope.dayClick = function (date) {
	    if ($scope.priceMap[date]) {
	      $scope.openReserveForm(0, 0, date);
	    }
	    return;
	  };

	  $scope.openReserveForm = function (_adult, _child, _date) {
	    var price = $scope.priceMap[_date];
	    // Show the model with the result.
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: "app/common/sale/search/directives/reserve/reserve.html",
	      controller: "reserveFormCtrl",
	      resolve: {
	        results: function results() {
	          return $scope.priceMap;
	        },
	        adult: function adult() {
	          return _adult;
	        },
	        child: function child() {
	          return _child;
	        },
	        date: function date() {
	          return _date;
	        }
	      }
	    });
	    modalInstance.result.then(function (reserve) {
	      $state.go("sale.add-order", { productId: $scope.product.objectId, product: $scope.product, reserve: reserve });
	    }, function () {});
	  };

	  $scope.setDayContent = function (date) {
	    // You would inject any HTML you wanted for
	    // that particular date here.
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    // Check if date in price map.
	    var price = productFac.getPrice(year, month, day, $scope.product);
	    if (price) {
	      $log.log(price);
	      if (price.adultCompanySalePrice) {
	        $scope.priceMap[date] = price;
	        return "<p class=\"cal-price\">" + "销售价: ￥" + price.adultCompanySalePrice + "</p>" + "<p class=\"cal-price next\">" + "同行价: ￥" + price.adultCompanyCompetitorPrice + "</p>" + "<p class=\"cal-price second\">" + "余位: " + price.restPeopleNumber + "</p>";
	      }
	    }
	    return "<p></p>";
	  };
	};

	module.exports = exports["default"];

	// TODO: handle failure.

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["SweetAlert", "$scope", "$log", "$window", "$uibModalInstance", "results", "adult", "child", "date", function (SweetAlert, $scope, $log, $window, $uibModalInstance, results, adult, child, date) {
	  "ngInject";

	  // This is for previous results
	  $scope.results = results;
	  $scope.reserve = {};
	  $scope.reserve.adult = adult;
	  $scope.reserve.child = child;
	  // Init.
	  var keys = Object.keys(results);
	  keys.sort();
	  $scope.selectedIndex = keys.indexOf(date + "");
	  $scope.date = date + "";
	  $scope.priceArray = keys.map(function (key) {
	    var object = {};
	    var date = new Date(key);
	    var dateString = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
	    object.date = dateString;
	    object.price = results[key];
	    $log.log("price arrya");
	    $log.log(object);
	    return object;
	  });
	  //$scope.reserve.date = $scope.priceArray[0].date;

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss("cancel");
	  };

	  $scope.close = function () {
	    if (!$scope.reserve.date) {
	      SweetAlert.swal({
	        title: "请选择日期",
	        type: "warning" });
	      return;
	    }
	    var result = {};
	    for (var i = 0; i < $scope.priceArray.length; i++) {
	      if ($scope.priceArray[i].date === $scope.reserve.date) {
	        result = $scope.priceArray[i];
	      }
	    }

	    if (result.price.restPeopleNumber < $scope.reserve.adult + $scope.reserve.child) {
	      SweetAlert.swal("产品没有余位", "请联系计调", "warning");
	      return;
	    }

	    $scope.reserve.price = result.price;
	    $log.log($scope.reserve);
	    $uibModalInstance.close($scope.reserve);
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["SweetAlert", "$log", "$scope", "$state", "$window", "lcConfig", "productFac", "$stateParams", "orderFac", function (SweetAlert, $log, $scope, $state, $window, lcConfig, productFac, $stateParams, orderFac) {
	  "ngInject";

	  // TODO: Use url instead of state to manage this.
	  $scope.licenseList = ["护照", "身份证"];
	  $scope.sexList = ["男", "女"];
	  $scope.types = ["成人", "小孩"];
	  $scope.order = {};
	  $scope.reserve = $state.params.reserve;
	  $scope.product = $state.params.product;
	  var productId = $state.params.productId;
	  $scope.order.price = $scope.reserve.price;
	  $scope.order.date = $scope.reserve.date;
	  $scope.order.adult = $scope.reserve.adult || 0;
	  $scope.order.child = $scope.reserve.child || 0;
	  $log.log($scope.reserve);
	  $log.log("get scope order");
	  $log.log($scope.order);
	  if (!$scope.order) {
	    $scope.order = {};
	  }
	  $scope.order.customers = [];
	  var length = 0;
	  if ($scope.order) {
	    length = $scope.order.adult + $scope.order.child;
	  }
	  $log.log(length);
	  for (var i = 0; i < length; i++) {
	    $scope.order.customers.push({ "index": i + 1 });
	  }

	  // TODO: Need to pick one.
	  if (!$scope.product) {
	    productFac.getProductDetail(productId).then(function (result) {
	      $scope.product = result.product;
	      $scope.product.provider = result.provider;
	    });
	  }

	  $scope.$watch("order.adult", function (newValue, oldValue) {
	    $scope.updateTotalPrice();
	    if (oldValue < newValue) {
	      $scope.order.customers.push({});
	    } else if (oldValue > newValue) {
	      $scope.order.customers.pop();
	    }
	  });

	  $scope.$watch("order.child", function (newValue, oldValue) {
	    $scope.updateTotalPrice();
	    if (oldValue < newValue) {
	      $scope.order.customers.push({});
	    } else if (oldValue > newValue) {
	      $scope.order.customers.pop();
	    }
	  });

	  $scope.updateTotalPrice = function () {
	    if ($scope.order) {
	      $scope.order.totalPrice = $scope.order.adult * $scope.order.price.adultCompanySalePrice + $scope.order.child * $scope.order.price.childCompanySalePrice;
	      $log.log($scope.order);
	    } else {
	      $scope.order = {};
	      $scope.order.totalPrice = 0;
	    }
	  };

	  $scope.submitOrder = function () {
	    $scope.order.productId = $scope.product.objectId;
	    $log.log($scope.order.productId);
	    $log.log($scope.order);
	    orderFac.submitOrder($scope.order, $scope.reserve).then(function (result) {
	      $log.log("success");
	      SweetAlert.swal("订单成功", "订单编号: " + result.objectId + " 请及时联系平台负责人确认订单情况.", "success");
	      $state.go("sale");
	    }, function (error) {
	      SweetAlert.swal("订单添加失败", "请联系计调员确认是否有余位", "warning");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["SweetAlert", "authFac", "$log", "$scope", "$state", "$window", "$sce", "$uibModal", "orderFac", "productFac", "userFac", "lcConfig", function (SweetAlert, authFac, $log, $scope, $state, $window, $sce, $uibModal, orderFac, productFac, userFac, lcConfig) {
	  'ngInject';

	  $scope.level = authFac.getUserLevel();
	  $scope.admin = $scope.level == lcConfig.orderStatus.ADMIN;
	  // Init.
	  userFac.getSaleusers().then(function (results) {
	    $scope.saleList = results;
	  });

	  $scope.search = function () {
	    var query = $scope.query;
	    // TODO: have to fix this. Do a real query.
	    if (!query) {
	      return;
	    }
	    $log.log(query);
	    $scope.orders = $scope.oldOrders.filter(function (order) {
	      $log.log(order);
	      if (query.orderId) {
	        return order.objectId == query.orderId;
	      }
	      var match = true;
	      var date = productFac.parseDate(order.startDate);
	      if (query.startDate) {
	        var queryDate = productFac.parseDate(query.startDate);
	        if (queryDate > date) {
	          match = false;
	        }
	      }
	      if (query.endDate) {
	        var queryDate = productFac.parseDate(query.endDate);
	        if (queryDate < date) {
	          match = false;
	        }
	      }
	      if (query.sale) {
	        if (order.createdBy.objectId !== query.sale) {
	          match = false;
	        }
	      }
	      if (query.productName) {
	        if (order.product && !order.product.fullName.includes(query.productName)) {
	          match = false;
	        }
	      }
	      return match;
	    });
	  };

	  $scope.setOrder = function (results) {
	    $log.log(results);
	    $scope.orders = results.order;
	    for (var i = 0; i < $scope.orders.length; i++) {
	      var product = results.product[i];
	      var provider = results.provider[i];
	      if (product) {
	        product.prefixArray = productFac.convertProductPrefix(product.prefix);
	        $scope.orders[i].product = product;
	        $scope.orders[i].provider = provider;
	      }
	    }
	    $scope.orders.forEach(function (order) {
	      if (order.confirmFile) {
	        order.fileUrl = $sce.trustAsResourceUrl(order.confirmFile.url);
	        $log.log(order.fileUrl);
	      }
	    });

	    $log.log($scope.orders);
	    // TODO: Remove this.
	    $scope.oldOrders = $scope.orders;
	  };

	  $scope.allOrder = function () {
	    orderFac.getAllOrder($scope.admin).then(function (results) {
	      $scope.setOrder(results);
	    });
	  };

	  $scope.unpaidOrderUnverified = function () {
	    orderFac.getUnpaidOrder($scope.admin, false).then(function (results) {
	      $scope.setOrder(results);
	    });
	  };

	  $scope.unpaidOrderVerified = function () {
	    orderFac.getUnpaidOrder($scope.admin, true).then(function (results) {
	      $scope.setOrder(results);
	    });
	  };

	  $scope.paidOrder = function () {
	    orderFac.getPaidOrder($scope.admin).then(function (results) {
	      $scope.setOrder(results);
	    });
	  };

	  $scope.paidVerifiedOrder = function () {
	    orderFac.getPaidVerifiedOrder($scope.admin).then(function (results) {
	      $scope.setOrder(results);
	    });
	  };

	  $scope.finishedOrder = function () {
	    orderFac.getFinishedOrder($scope.admin).then(function (results) {
	      $scope.setOrder(results);
	    });
	  };

	  $scope.showDetail = function (order) {
	    $state.go('sale.show-order-detail', { orderId: orderId, isEditign: false });
	  };

	  $scope.paid = function (order) {
	    orderFac.update(order, lcConfig.orderStatus.PAID).then(function (result) {
	      SweetAlert.swal('订单付款成功成功', 'success');
	      order.status = result.status;
	    });
	  };

	  $scope.showConfirmation = function () {};

	  $scope.printReceipt = function () {};

	  $scope.cancelOrder = function (order) {
	    $log.log(order);
	    var orderId = order.objectId;
	    orderFac.cancelOrder(orderId).then(function (result) {
	      SweetAlert.swal('订单取消成功', '请稍后与分销商确认', 'success');
	      order.status = result.status;
	    }, function (error) {});
	  };

	  $scope.showContact = function (order) {
	    userFac.showContact(order);
	  };

	  $scope.applyRevoke = function (order) {
	    var orderId = order.objectId;
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'app/common/sale/order/apply_revoke.html',
	      controller: 'applyRevokeCtrl',
	      resolve: {
	        data: function data() {
	          return { 'orderId': orderId };
	        }
	      }
	    });

	    modalInstance.result.then(function (items) {
	      $log.log('return');
	    }, function () {
	      $log.log('return error');
	    });
	  };

	  $scope.applyCancel = function (order) {
	    var orderId = order.objectId;
	    orderFac.cancelUnpaidOrder(orderId, { reason: '未付款请求取消' }).then(function (result) {
	      SweetAlert.swal('订单取消成功', '请稍后与平台方确认', 'success');
	      order.status = result.status;
	    }, function (error) {});
	  };

	  $scope.getRevoke = function () {
	    orderFac.getRevoke($scope.admin).then(function (results) {
	      $log.log(results);
	      $scope.setOrder(results);
	    });
	  };

	  $scope.confirmRevoke = function (order) {
	    $scope.cancelOrder(order);
	  };

	  $scope.verifyUnpaid = function (order) {
	    orderFac.update(order, lcConfig.orderStatus.UNPAID_VERIFIED).then(function (result) {
	      SweetAlert.swal('订单预审成功', '请通知分销商付款', 'success');
	      order.status = result.status;
	    });
	  };

	  $scope.verifyPaid = function (order) {
	    orderFac.update(order, lcConfig.orderStatus.PAID_VERIFIED).then(function (result) {
	      SweetAlert.swal('订单付款审核通过', '请刷新网页', 'success');
	      order.status = result.status;
	    });
	  };

	  $scope.verifyFinished = function (order) {
	    orderFac.update(order, lcConfig.orderStatus.FINISHED).then(function (result) {
	      SweetAlert.swal('订单已经完成', '请刷新网页', 'success');
	      order.status = result.status;
	    });
	  };

	  $scope.getCancel = function () {
	    orderFac.getCancel($scope.admin).then(function (results) {
	      $log.log(results);
	      $scope.setOrder(results);
	    });
	  };

	  $scope.editOrder = function (orderId) {
	    $state.go('sale.show-order-detail', { orderId: orderId, isEditing: true });
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Created by chaopan on 7/10/16.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["SweetAlert", "$log", "authFac", "$scope", "$state", "$window", "orderFac", "productFac", function (SweetAlert, $log, authFac, $scope, $state, $window, orderFac, productFac) {
	  "ngInject";

	  $scope.level = authFac.getUserLevel();
	  $scope.licenseList = ["护照", "身份证"];
	  $scope.sexList = ["男", "女"];
	  $scope.types = ["成人", "小孩"];
	  $scope.isEditing = $state.params.isEditing;
	  orderFac.getOrder($state.params.orderId).then(function (result) {
	    $scope.order = result.order;
	    $log.log($scope.order);
	    $scope.product = result.product;
	    $scope.product.platformcontact = result.platformcontact;
	  });

	  $scope.changeOrder = function () {
	    $log.log($scope.order);
	    orderFac.updateCustomerInfo($scope.order).then(function () {
	      SweetAlert.swal("订单修改成功", "success");
	      $state.go("sale");
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$rootScope", "authFac", "$log", "$state", "$scope", "SweetAlert", "userFac", function ($rootScope, authFac, $log, $state, $scope, SweetAlert, userFac) {
	  "ngInject";
	  $scope.changePass = function () {
	    authFac.changePass().then(function () {
	      SweetAlert.swal("请到您的邮箱中接受重置密码的邮件");
	    });
	  };

	  userFac.getCurrentUserInfo().then(function (result) {
	    $scope.user = result;
	  }, function (error) {});
	}];

	module.exports = exports["default"];

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$scope", "$log", "$window", "$uibModalInstance", "data", function ($scope, $log, $window, $uibModalInstance, data) {
	  'ngInject';

	  $log.log(data.items);
	  $scope.items = data.items;
	  $scope.title = data.title;
	  $scope.editable = data.editable;

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };

	  $scope.close = function () {
	    var saveFunction = data.save;
	    if (saveFunction) {
	      var object = convertToObject($scope.items);
	      saveFunction(object).then(function (result) {
	        $uibModalInstance.close($scope.items);
	      });
	    } else {
	      $uibModalInstance.close($scope.items);
	    }
	  };

	  function convertToObject(items) {
	    var object = {};
	    for (var i in items) {
	      var item = items[i];
	      object[item.name] = item.value;
	    }
	    $log.log(object);
	    return object;
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$scope", "$log", "SweetAlert", "$window", "$uibModalInstance", "orderFac", "data", function ($scope, $log, SweetAlert, $window, $uibModalInstance, orderFac, data) {
	  'ngInject';

	  $log.log(data.orderId);

	  // TODO: Refactor this.
	  $scope.cancelRevoke = function () {
	    $uibModalInstance.dismiss('cancel');
	  };

	  $scope.revokeOrder = function (revoke) {
	    orderFac.revokeOrder(data.orderId, revoke).then(function (results) {
	      SweetAlert.swal('退款申请成功', '请联系计调员确认.', 'success');
	      $uibModalInstance.close();
	    });
	  };
	}];

	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	// A service that manages user authentications including login, cookie
	// management and logout.

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$http", "$state", "lcConfig", "$window", "$log", "$cookies", "$base64", function ($rootScope, $http, $state, lcConfig, $window, $log, $cookies, $base64) {
	  'ngInject';

	  var service = {};
	  service.isLoggedin = isLoggedin;
	  service.getUserLevel = getUserLevel;
	  service.login = login;
	  service.register = register;
	  service.logout = logout;
	  service.cookie = null;
	  service.changePass = changePass;
	  return service;

	  function getUserLevel() {
	    if (!isLoggedin()) {
	      return lcConfig.userLevel.UNKNOWN;
	    }

	    var level = service.cookie.level;
	    if (level === undefined) {
	      return lcConfig.userLevel.UNKNOWN;
	    }
	    return level;
	  }

	  function isLoggedin() {
	    var cookie = $cookies.get('user');
	    if (cookie === undefined) {
	      $log.log('no cookie');
	      return false;
	    }
	    service.cookie = JSON.parse(cookie);
	    return true;
	  }

	  function login(username, password) {
	    return $http.post('/api/auth/authenticate', { username: username, password: password });
	  }

	  function register(username, password, level, email, contactname, cellphone) {
	    $log.log(level);
	    return $http.post('/api/auth/register', { username: username, password: password, level: level, email: email, contactname: contactname,
	      cellphone: cellphone });
	  }

	  function logout() {
	    return $http.post('/api/auth/logout');
	  }

	  function changePass() {
	    return $http.post('/api/auth/changePass');
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$rootScope", "$http", "$state", "lcConfig", "$window", "md5", "Upload", function ($rootScope, $http, $state, lcConfig, $window, md5, Upload) {
	  "ngInject";

	  var service = {};

	  service.hash = hash;
	  return service;

	  function hash(str) {
	    var date = new Date();
	    var timeString = date.getTime() + "";
	    return md5.createHash(str || timeString);
	  }
	}];

	module.exports = exports["default"];

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$log", "$http", "$state", "lcConfig", "$window", "md5", "Upload", function ($rootScope, $log, $http, $state, lcConfig, $window, md5, Upload) {
	  'ngInject';

	  var service = {};

	  service.getProvider = getProvider;
	  service.getReturnPolicyDetail = getReturnPolicyDetail;
	  service.search = search;
	  service.util = {};
	  service.util.getReturnPolicy = getReturnPolicy;
	  service.uploadProviderFiles = uploadProviderFiles;
	  service.upload = upload;
	  service.files = {};
	  service.getContactList = getContactList;
	  service.getMyProvider = getMyProvider;
	  service.deleteProvider = deleteProvider;
	  return service;

	  /**
	  * @param providerId.
	  * @return promise.
	  * */
	  function getReturnPolicyDetail(providerId) {
	    return $http.post('/api/provider/get-policy', { providerId: providerId });
	  }

	  /**
	  * @param query. An object that contains query parameters. An index usually is
	  * set, if not, assume the index is 0.
	  * */
	  function getProvider(query) {
	    return $http.post('/api/provider/get', { query: query });
	  }

	  /**
	   * @param: AV.Object('Provider') only contains Return policy information.
	   * @return: A message that could be used to describe the current return policy
	   * situation.
	   **/
	  function getReturnPolicy(provider) {
	    var totalPeople = provider.returnTotalPeople;
	    var totalRevenue = provider.returnTotalRevenue;
	    var paidPeople = provider.paidPeople;
	    var moneyEachPeople = provider.returnMoneyEachPeople;
	    var paidRevenue = provider.paidRevenue;
	    // TODO: Define a template for the string.
	    if (totalPeople <= 0 || totalRevenue <= 0) {
	      return '无加返政策';
	    }
	    // 处理加返人数.
	    if (totalPeople > 0) {
	      var remainString = '';
	      if (totalPeople > paidPeople) {
	        remainString = '剩余人数:' + (totalPeople - paidPeople) + '人 ';
	      }
	      var moneyString = '每人返利:' + moneyEachPeople + '(元/人)';
	      return remainString + moneyString;
	    }
	    // TODO: 处理加返利润()
	    return '未处理加返利润';
	  }

	  /**
	   * @param file. The file you want to upload.
	   * @param filename, the filename that you want to assign this file to.
	   *
	  * */
	  function uploadProviderFiles(file, filename) {
	    return Upload.upload({
	      url: '/api/provider/uploadfile',
	      data: { file: file, filename: filename }
	    });
	  }

	  function upload(provider) {
	    return $http.post('/api/provider/add', { provider: provider });
	  }

	  /**
	  * @param: query. A json object of query that contains keyword of the provider.
	   * @params: include. A list of included attributions. If empty, then all.
	  *
	  * */
	  function search(query, select) {
	    return $http.post('/api/provider/search', { query: query, select: select });
	  }

	  function getMyProvider() {
	    return $http.post('/api/user/getProvider', {});
	  }

	  function getContactList(providerId) {
	    return $http.post('/api/user/getContactList', { providerId: providerId });
	  }

	  function deleteProvider(providerId) {
	    return $http.post('/api/provider/delete', { providerId: providerId });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$http", "$state", "lcConfig", "$window", "md5", "Upload", "multiChoiceConfig", function ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, multiChoiceConfig) {
	  'ngInject';

	  var service = {};
	  service.providers = [];
	  service.addProvider = addProvider;
	  service.getAllProducts = getAllProducts;
	  service.getProductDetail = getProductDetail;
	  service.searchProduct = searchProduct;
	  service.signinUser = signinUser;
	  service.uploadProduct = uploadProduct;
	  service.getInternalUsers = getInternalUsers;
	  service.getUnVerifiedProducts = getUnVerifiedProducts;
	  service.hasUnfinished = hasUnfinished;
	  service.verify = verify;
	  service.post = post;
	  service.unPost = unPost;
	  service.getProductsCount = getProductsCount;
	  service.getLatestTrip = getLatestTrip;
	  service.convertProductPrefix = convertProductPrefix;
	  service.setDayContent = setDayContent;
	  service.getPrice = getPrice;
	  service.setStorageContent = setStorageContent;
	  service.parseDate = parseDate;
	  service.deleteProduct = deleteProduct;
	  return service;

	  function uploadProduct(product) {
	    // Handle all the serilize things here.
	    // Save an additional field to accerlate search speed.
	    $log.log(product);
	    return $http.post('/api/product/add', { product: product });
	  }

	  function addProvider(provider) {
	    service.providers.push(provider);
	  }

	  function searchProduct(parameters) {
	    return $http.post('/api/product/search', { query: parameters });
	  }

	  function signinUser(parameters) {
	    return $http.post('/api/product/signin', { query: parameters });
	  }

	  // TODO: add functionalities like partial sets.
	  function getAllProducts(status) {
	    // TODO: add status check.
	    if (status !== undefined) {
	      return $http.post('/api/product/getAll', { status: status });
	    }
	    return $http.post('/api/product/getAll');
	  }

	  function getProductDetail(objectId) {
	    return $http.post('/api/product/get', { id: objectId });
	  }

	  // User a const value maybe.
	  function getInternalUsers() {
	    $log.log('get internal users');
	    return $http.post('/api/user/get', { query: { level: [0, 3] } });
	  }

	  function getUnVerifiedProducts() {
	    return $http.post('/api/product/getUnverified');
	  }

	  function hasUnfinished() {
	    return $http.post('/api/product/hasUnfinished');
	  }

	  function verify(objectId) {
	    return $http.post('/api/product/verify', { objectId: objectId, status: 3 });
	  }

	  function unPost(objectId) {
	    return $http.post('/api/product/verify', { objectId: objectId, status: 1 });
	  }

	  function post(objectId) {
	    return $http.post('/api/product/verify', { objectId: objectId, status: 2 });
	  }

	  function getProductsCount() {
	    return $http.post('/api/product/getProductsCount', { all: true });
	  }

	  // Get products related with the user.
	  function getMyProducts(status) {
	    // TODO: add status check.
	    if (status !== undefined) {
	      return $http.post('/api/product/getMy', { status: status });
	    }
	    return $http.post('/api/product/getMy');
	  }

	  function getLatestTrip(product) {
	    $log.log('getLatestTrip');
	    var price = product.price;
	    var date = new Date();
	    date.setDate(date.getDate() + product.stopDay);
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    removeExpiredPrice(product);
	    for (var i = 0; i < Object.keys(price).length; i++) {
	      var event = findNextInOneYear(price, year + i, month, day);
	      if (event && Object.keys(event).length > 1) {
	        product.latestDate = event.date;
	        product.latestAdultCompanySalePrice = event.event.adultCompanySalePrice;
	        product.latestAdultCompanyCompetitorPrice = event.event.adultCompanyCompetitorPrice;
	        product.latestAdultCompanyPrice = event.event.adultCompanyPrice;
	        product.latestChildCompanySalePrice = event.event.childCompanySalePrice;
	        return true;
	      } else {
	        month = 0;
	        day = 1;
	      }
	    }
	    return false;
	  }

	  function removeExpiredPrice(product) {
	    var date = new Date();
	    date.setDate(date.getDate() + product.stopDay);
	    for (var year in product.price) {
	      for (var month in product.price[year]) {
	        for (var day in product.price[year][month]) {
	          var newDate = new Date(year, month, day);
	          $log.log(newDate);
	          $log.log(date);
	          if (newDate - date < 0) {
	            delete product.price[year][month][day];
	          }
	        }
	      }
	    }
	  }

	  function findNextInOneYear(price, startYear, startMonth, startDay) {
	    if (!(startYear in price)) {
	      return null;
	    }
	    var events = price[startYear];
	    for (var month = startMonth; month < 12; month++) {
	      if (!(month in events)) {
	        continue;
	      }
	      var monthEvents = events[month];
	      for (var day = startDay; day <= 31; day++) {
	        if (!(day in monthEvents)) {
	          continue;
	        }
	        var event = monthEvents[day];
	        if (!event || Object.keys(event).length === 0) {
	          continue;
	        }
	        return { event: event, date: startYear + '年' + (month + 1) + '月' + day + '日' };
	      }
	      startDay = 1;
	    }
	    return null;
	  }

	  function convertProductPrefix(prefixArray) {
	    if (!prefixArray) {
	      return [];
	    }
	    var prefixData = multiChoiceConfig.data['线路前缀'];
	    return prefixArray.map(function (name) {
	      for (var i = 0; i < prefixData.length; i++) {
	        var prefix = prefixData[i];
	        if (prefix.name === name) {
	          return prefix.value;
	        }
	      }
	    });
	  }

	  function setDayContent(date, product) {
	    if (!product.price) {
	      return '<div></div>';
	    }
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    var price = getPrice(year, month, day, product);
	    if (price && Object.keys(price).length > 3) {
	      $log.log('updating price');
	      $log.log(price);
	      $log.log(Object.keys(price).length);
	      var content = {};
	      content['同行'] = '¥' + price.adultCompanyCompetitorPrice || '';
	      content['销售'] = '¥' + price.adultCompanySalePrice || '';
	      content['结算'] = '¥' + price.adultCompanyPrice || '';
	      content['库存'] = price.totalPeople;
	      // Construct the content.
	      var htmlString = '';
	      for (var key in content) {
	        htmlString = htmlString + '<div>' + key + ': ' + content[key] + '</div>';
	      }
	      return htmlString;
	    }
	    return '<div></div>';
	  }

	  function getPrice(year, month, day, product) {

	    var price = product.price || {};
	    price = price[year] || {};
	    price = price[month] || {};
	    price = price[day] || {};
	    return price;
	  }

	  function setStorageContent(date, product) {
	    if (!product.price) {
	      return '<div></div>';
	    }

	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    var price = getPrice(year, month, day, product);
	    if (price && Object.keys(price).length > 3) {
	      var content = {};
	      content['最小成团人数'] = '¥' + price.minimumPeople || '';
	      content['占位数'] = '¥' + price.reservedPeopleNumber || '';
	      content['签约数'] = '¥' + price.paidPeopleNumber || '';
	      content['余位'] = price.restPeopleNumber || '';
	      // Construct the content.
	      var htmlString = '';
	      for (var key in content) {
	        htmlString = htmlString + '<div>' + key + ': ' + content[key] + '</div>';
	      }
	      return htmlString;
	    }
	    return '<div></div>';
	  }

	  function parseDate(dateString) {
	    var re = /([0-9]+)年([0-9]+)月([0-9]+)日/;
	    var match = dateString.match(re);
	    if (match.length == 4) {
	      return new Date(match[1], match[2] - 1, match[3]);
	    }

	    return null;
	  }

	  function deleteProduct(productId) {
	    return $http.post('/api/product/delete', { productId: productId });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$http", "$state", "lcConfig", "$window", function ($rootScope, $http, $state, lcConfig, $window) {
	  'ngInject';

	  var service = {};
	  service.download = download;
	  return service;

	  function download(successCallback, failCallback) {
	    $http.post('/api/itinerary/download', { result: '123' }).then(function success(response) {
	      successCallback(response);
	    }, function error(response) {
	      failCallback(response);
	    });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$rootScope", "$http", "$state", "lcConfig", "$window", function ($rootScope, $http, $state, lcConfig, $window) {
	  'ngInject';

	  var service = {};
	  service.search = search;
	  return service;

	  function search(query) {
	    return $http.post('/api/customer/search', { query: query });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$http", "$state", "lcConfig", "$window", "md5", "Upload", "$uibModal", "formConfig", function ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) {
	  'ngInject';
	  var service = {};
	  service.getCurrentUserInfo = getCurrentUserInfo;
	  service.addContactList = addContactList;
	  service.editContactList = editContactList;
	  service.deleteContactList = deleteContactList;
	  service.addContact = addContact;
	  service.getProvider = getProvider;
	  service.showContact = showContact;
	  service.getSaleusers = getSaleusers;
	  return service;

	  function getCurrentUserInfo() {
	    return $http.post('/api/user/getCurrentUserInfo');
	  }

	  function addContactList(contact) {
	    return $http.post('/api/user/addContactList', { contact: contact });
	  }

	  function deleteContactList(contactId) {
	    return $http.post('/api/user/deleteContactList', { contactId: contactId });
	  }

	  function editContactList(contact) {
	    return $http.post('/api/user/editContactList', { contact: contact });
	  }

	  function addContact(contactList, providerId) {
	    var items = angular.copy(formConfig.data['商户联系人']);
	    $log.log(items);
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'app/common/directives/form/form.html',
	      controller: 'formCtrl',
	      resolve: {
	        // Need to convert the titles into the following format.
	        // {key: name, type: type}
	        data: function data() {
	          var title = '添加商户人信息';
	          return { 'title': title, 'items': items, 'editable': true };
	        }
	      }
	    });

	    modalInstance.result.then(function (items) {
	      var contact = convertItemsToContact(items, providerId);
	      addContactList(contact).then(function () {
	        contactList.push(contact);
	      });
	    }, function () {});
	  }

	  function showContact(order) {
	    var modalInstance = $uibModal.open({
	      animation: true,
	      templateUrl: 'app/common/directives/form/form.html',
	      controller: 'formCtrl',
	      resolve: {
	        // Need to convert the titles into the following format.
	        // {key: name, type: type}
	        data: function data() {
	          var title = '联系信息';
	          var items = [{
	            'key': '姓名',
	            'value': order.contactname
	          }, {
	            'key': '手机',
	            'value': order.cellphone
	          }, {
	            'key': '邮箱',
	            'value': order.email
	          }];
	          return { 'title': title, 'items': items, 'editable': false };
	        }
	      }
	    });
	  }

	  function convertItemsToContact(items, providerId) {
	    var contact = {};
	    items.forEach(function (item) {
	      contact[item.name] = item.value;
	    });
	    contact.providerId = providerId;
	    return contact;
	  }

	  function getProvider() {
	    return $http.post('/api/user/getProvider');
	  }

	  // User a const value maybe.
	  function getSaleusers() {
	    return $http.post('/api/user/get', { query: { level: [1] } });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$http", "$state", "lcConfig", "$window", "md5", "Upload", "$uibModal", "formConfig", function ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) {
	  'ngInject';
	  var service = {};
	  service.submitOrder = submitOrder;
	  service.getAllOrder = getAllOrder;
	  service.getUnpaidOrder = getUnpaidOrder;
	  service.getPaidOrder = getPaidOrder;
	  service.getFinishedOrder = getFinishedOrder;
	  service.getOrder = getOrder;
	  service.cancelOrder = cancelOrder;
	  service.revokeOrder = revokeOrder;
	  service.getRevoke = getRevoke;
	  service.update = update;
	  service.search = search;
	  service.getCancel = getCancel;
	  service.getPaidVerifiedOrder = getPaidVerifiedOrder;
	  service.cancelUnpaidOrder = cancelUnpaidOrder;
	  service.updateCustomerInfo = updateCustomerInfo;
	  return service;

	  function submitOrder(order, customers) {
	    $log.log('submitOrder');
	    return $http.post('/api/order/add', { order: order, customers: customers });
	  }

	  function updateCustomerInfo(order) {
	    return $http.post('/api/order/update', { id: order.objectId, customers: order.customers });
	  }

	  function getAllOrder(admin) {
	    return $http.post('/api/order/getAll', { admin: admin });
	  }

	  function getUnpaidOrder(admin, verified) {
	    if (verified) {
	      return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.UNPAID_VERIFIED, admin: admin });
	    }

	    return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.UNPAID_UNVERIFIED, admin: admin });
	  }

	  function getPaidOrder(admin) {
	    return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.PAID, admin: admin });
	  }

	  function getFinishedOrder(admin) {
	    return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.FINISHED, admin: admin });
	  }

	  function getPaidVerifiedOrder(admin) {
	    return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.PAID_VERIFIED, admin: admin });
	  }

	  function getOrder(orderId) {
	    return $http.post('/api/order/get', { id: orderId });
	  }

	  function cancelOrder(orderId) {
	    return $http.post('/api/order/cancel', { id: orderId });
	  }

	  function cancelUnpaidOrder(orderId) {
	    return $http.post('/api/order/update', { id: orderId, status: lcConfig.orderStatus.CANCEL });
	  }

	  function revokeOrder(orderId, revoke) {
	    return $http.post('/api/order/revoke', { id: orderId, revoke: revoke });
	  }

	  function getRevoke(admin) {
	    return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.REVOKE, admin: admin });
	  }

	  function update(order, status) {
	    return $http.post('/api/order/update', { id: order.objectId, status: status });
	  }

	  function search(query) {
	    return $http.post('/api/order/search', { query: query });
	  }

	  function getCancel(admin) {
	    return $http.post('/api/order/getAll', { status: lcConfig.orderStatus.CANCELLED, admin: admin });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$rootScope", "$http", "$state", "lcConfig", "$window", "md5", "Upload", "$uibModal", "formConfig", "multiChoiceConfig", "menuConfig", "calendarConfig", function ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig, multiChoiceConfig, menuConfig, calendarConfig) {
	  "ngInject";
	  var service = {};
	  service.randomContact = randomContact;
	  service.randomMenu = randomMenu;
	  service.randomCalendar = randomCalendar;
	  service.randomDate = randomDate;
	  service.randomNumber = randomNumber;
	  service.randomChoice = randomChoice;
	  service.randomString = randomString;
	  service.randomAddress = randomAddress;
	  service.createProvider = createProvider;
	  service.createProduct = createProduct;
	  service.randomUser = randomUser;
	  return service;

	  // Things that missed.
	  // contact
	  function createProduct(providerId) {
	    var product = {};
	    product.productName = randomString("线路名称");
	    product.fullName = randomString("供应商产品名称");
	    product.start = randomAddress();
	    product.type = randomMenu("类型");
	    product.price = randomCalendar("团期报价");
	    product.hotelStandard = randomMenu("酒店标准");
	    product.transportStandard = randomMenu("交通方式");
	    product.area = randomMenu("大区");
	    product.stopDay = randomNumber() % 10;
	    product.prefix = randomChoice("线路前缀");
	    product.productManager = randomString("产品负责人");
	    product.pickedProvider = {};
	    product.pickedProvider.objectId = providerId;
	    product.duration = 3;
	    product.hotelDuration = 2;
	    // Set all of them as admin.
	    product.responsible = "578f5093a34131005b975809";
	    product.platformcontact = "578f5093a34131005b975809";

	    product.priceInclude = randomString("费用包含");
	    product.priceExclude = randomString("费用不含");
	    product.selfPaid = randomString("自费项目");
	    product.visaInfo = randomString("签证信息");
	    product.reserveInfo = randomString("预定须知");
	    product.restriction = randomString("收客限制");
	    product.itinerary = [];
	    for (var i = 0; i < 3; i++) {
	      product.itinerary.push(createItinerary());
	    }
	    $log.log(product);
	    return product;
	  }

	  function createItinerary() {
	    var itinerary = {};
	    itinerary.title = randomString("标题");
	    itinerary.flight = randomString("航班");
	    itinerary.hotelDetail = randomString("住宿信息");
	    itinerary.hotel = randomString("同级宾馆");
	    itinerary.food = {};
	    itinerary.food.morning = randomString("早餐");
	    itinerary.food.noon = randomString("中餐");
	    itinerary.food.evening = randomString("晚餐");
	    return itinerary;
	  }

	  function createProvider() {
	    var provider = {};
	    provider.contactname = randomString("联系人姓名");
	    provider.cellphone = randomString("手机号");
	    provider.homephone = randomString("座机号");
	    provider.qqnumber = randomString("QQ号码");
	    provider.wechat = randomString("微信号");
	    provider.address = randomAddress();
	    provider.nickname = randomString("简称");
	    provider.companyname = randomString("公司名称");
	    provider.destination = randomChoice("主营目的地");
	    provider.start = randomChoice("主营口岸");
	    provider.customerResource = randomString("收客情况");
	    provider.flightResource = randomString("航班资源");
	    provider.productResource = randomString("产品优势");
	    provider.returnPolicy = randomReturnPolicy();
	    $log.log(provider);
	    return provider;
	  }

	  function randomUser() {
	    var username = randomString("uesrname");
	    var password = "12345";
	    return { username: username, password: password };
	  }

	  function randomContact(key) {
	    var data = formConfig.data[key];
	    var object = {};
	    for (var i = 0; i < data.length; i++) {
	      var item = data[i];
	      switch (item.type) {
	        case "text":
	          object[item.name] = randomString(item.key);
	          break;
	        case "number":
	          object[item.name] = randomNumber();
	          break;
	      }
	    }
	    return object;
	  }

	  function randomMenu(key) {
	    var data = menuConfig.data[key];
	    var index = randomNumber() % data.length;
	    return data[index];
	  }

	  function createObject(data) {
	    var object = {};
	    for (var i = 0; i < data.length; i++) {
	      switch (data[i].type) {
	        case "number":
	          object[data[i].name] = randomNumber();
	          break;
	        case "date":
	          object[data[i].name] = randomDate();
	      }
	    }
	    return object;
	  }

	  function createCalendar(data) {
	    var object = {};
	    for (var i = 0; i < data.length; i++) {
	      switch (data[i].type) {
	        case "number":
	          object[data[i].name] = randomNumber();
	          break;
	        case "date":
	          object[data[i].name] = randomDate();
	      }
	    }
	    object.reservedPeopleNumber = 0;
	    object.paidPeopleNumber = 0;
	    object.restPeopleNumbner = object.totalPeople;
	    return object;
	  }

	  function randomDate() {
	    var date = "2016年" + (randomNumber() % 12 + 1) + "月" + (randomNumber() % 28 + 1) + "日";
	    return date;
	  }

	  function shouldShow() {
	    return randomNumber() % 2 === 0;
	  }

	  function randomCalendar(key) {
	    var data = calendarConfig.data[key];
	    var calendar = {};
	    calendar[2016] = [];
	    // Create a random calendar.
	    // We only create for 2016.
	    for (var i = 0; i < 12; i++) {
	      var month = [];
	      for (var j = 0; j < 28; j++) {
	        if (shouldShow()) {
	          month.push(createObject(data));
	        } else {
	          month.push({});
	        }
	      }
	      calendar[2016].push(month);
	    }
	    return calendar;
	  }

	  // A random number from 1 to 10000.
	  function randomNumber() {
	    return Math.floor(Math.random() * 10000 + 1);
	  }

	  function randomReturnPolicy() {
	    var returnPolicy = {};
	    returnPolicy.returnTotalPeople = randomNumber();
	    returnPolicy.returnMoneyEachPeople = randomNumber();
	    returnPolicy.returnTotalRevenue = randomNumber();
	    returnPolicy.returnMoneyRevenue = randomNumber();
	    return returnPolicy;
	  }

	  function randomChoice(key) {
	    var data = multiChoiceConfig.data[key];
	    var indexSet = new Set();
	    for (var i = 0; i < data.length; i++) {
	      indexSet.add(randomNumber() % data.length);
	    }

	    var dest = {};
	    indexSet.forEach(function (index) {
	      dest[data[index].name] = true;
	    });
	    return dest;
	  }

	  function randomAddress() {
	    var address = {};
	    address.province = "省" + randomNumber();
	    address.city = "市" + randomNumber();
	    address.county = "县" + randomNumber();
	    address.detail = randomString("地址");
	    return address;
	  }

	  function randomString(baseString) {
	    return baseString + randomNumber();
	  }
	}];

	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports) {

	// A service that manages user authentications including login, cookie
	// management and logout.

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function () {
	  "ngInject";

	  var service = {};
	  service.getErrorMessage = getErrorMessage;
	  return service;

	  function getErrorMessage(code) {
	    switch (code) {
	      case 125:
	        return "邮箱不正确";
	      case 203:
	        return "用户名或邮箱已经被注册";
	    }
	    return "";
	  }
	};

	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports) {

	// 用来往数据库添加虚假数据.
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$rootScope", "$http", "$state", "formConfig", "lcConfig", "$window", "md5", "Upload", "multiChoiceConfig", "productFac", "calendarConfig", "menuConfig", function ($log, $rootScope, $http, $state, formConfig, lcConfig, $window, md5, Upload, multiChoiceConfig, productFac, calendarConfig, menuConfig) {
	  "ngInject";

	  var service = {};
	  service.createProvider = createProvider;
	  service.randomNumber = randomNumber;
	  service.randomReturnPolicy = randomReturnPolicy;
	  service.randomChoice = randomChoice;
	  service.randomAddress = randomAddress;
	  service.randomString = randomString;
	  service.createProduct = createProduct;
	  return service;

	  function createProvider() {
	    var provider = {};
	    provider.username = randomString("用户");
	    provider.password = "12345";
	    provider.contactname = randomString("联系人姓名");
	    provider.cellphone = randomString("手机号");
	    provider.homephone = randomString("座机号");
	    provider.qqnumber = randomString("QQ号码");
	    provider.wechat = randomString("微信号");
	    provider.address = randomAddress();
	    provider.nickname = randomString("简称");
	    provider.companyname = randomString("公司名称");
	    provider.destination = randomChoice("主营目的地");
	    provider.start = randomChoice("主营口岸");
	    provider.customerResource = randomString("收客情况");
	    provider.flightResource = randomString("航班资源");
	    provider.productResource = randomString("产品优势");
	    provider.returnPolicy = randomReturnPolicy();
	    $log.log(provider);
	    return provider;
	  }

	  function createProduct() {
	    var product = {};
	    product.productName = randomString("线路名称");
	    product.fullName = randomString("供应商产品名称");
	    product.start = randomAddress();
	    product.type = randomMenu("类型");
	    product.price = randomCalendar("团期报价");
	    product.hotelStandard = randomMenu("酒店标准");
	    product.transportStandard = randomMenu("交通方式");
	    product.area = randomMenu("大区");
	    product.stopDay = randomNumber() % 10;
	    product.prefix = randomChoice("线路前缀");
	    product.productManager = randomString("产品负责人");
	    product.pickedProviderId = "576781716be3ff006a36a295";
	    product.contactId = "576781721532bc0060317117";
	    // product.contact = randomForm("商户联系人");
	    // Do this at the end.
	    product.responsible = randomString();
	    $log.log(product);
	    return product;
	  }

	  function randomContact(key) {
	    var data = formConfig.data[key];
	    var object = {};
	    for (var i = 0; i < data.length; i++) {
	      var item = data[i];
	      switch (item.type) {
	        case "text":
	          object[item.name] = randomString(item.key);
	          break;
	        case "number":
	          object[item.name] = randomNumber();
	          break;
	      }
	    }
	    return object;
	  }

	  function randomMenu(key) {
	    var data = menuConfig.data[key];
	    var index = randomNumber() % data.length;
	    return data[index];
	  }

	  function createObject(data) {
	    var object = {};
	    for (var i = 0; i < data.length; i++) {
	      switch (data[i].type) {
	        case "number":
	          object[data[i].name] = randomNumber();
	          break;
	        case "date":
	          object[data[i].name] = randomDate();
	      }
	    }
	    return object;
	  }

	  function createCalendar(data) {
	    var object = {};
	    for (var i = 0; i < data.length; i++) {
	      switch (data[i].type) {
	        case "number":
	          object[data[i].name] = randomNumber();
	          break;
	        case "date":
	          object[data[i].name] = randomDate();
	      }
	    }
	    object.reservedPeopleNumber = 0;
	    object.paidPeopleNumber = 0;
	    object.restPeopleNumbner = object.totalPeople;
	    return object;
	  }

	  function randomDate() {
	    var date = "2016年" + (randomNumber() % 12 + 1) + "月" + (randomNumber() % 28 + 1) + "日";
	    return date;
	  }

	  function shouldShow() {
	    return randomNumber() % 2 === 0;
	  }

	  function randomCalendar(key) {
	    var data = calendarConfig.data[key];
	    var calendar = {};
	    calendar[2016] = [];
	    // Create a random calendar.
	    // We only create for 2016.
	    for (var i = 0; i < 12; i++) {
	      var month = [];
	      for (var j = 0; j < 28; j++) {
	        if (shouldShow()) {
	          month.push(createObject(data));
	        } else {
	          month.push({});
	        }
	      }
	      calendar[2016].push(month);
	    }
	    return calendar;
	  }

	  // A random number from 1 to 10000.
	  function randomNumber() {
	    return Math.floor(Math.random() * 10000 + 1);
	  }

	  function randomReturnPolicy() {
	    var returnPolicy = {};
	    returnPolicy.returnTotalPeople = randomNumber();
	    returnPolicy.returnMoneyEachPeople = randomNumber();
	    returnPolicy.returnTotalRevenue = randomNumber();
	    returnPolicy.returnMoneyRevenue = randomNumber();
	    return returnPolicy;
	  }

	  function randomChoice(key) {
	    var data = multiChoiceConfig.data[key];
	    var indexSet = new Set();
	    for (var i = 0; i < data.length; i++) {
	      indexSet.add(randomNumber() % data.length);
	    }

	    var dest = {};
	    indexSet.forEach(function (index) {
	      dest[data[index].name] = true;
	    });
	    return dest;
	  }

	  function randomAddress() {
	    var address = {};
	    address.province = "省" + randomNumber();
	    address.city = "市" + randomNumber();
	    address.county = "县" + randomNumber();
	    address.detail = randomString("地址");
	    return address;
	  }

	  function randomString(baseString) {
	    return baseString + randomNumber();
	  }
	}];

	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["$log", "$scope", "$document", "lcConfig", "fakeDataFac", "providerFac", "productFac", function ($log, $scope, $document, lcConfig, fakeDataFac, providerFac, productFac) {
	  "ngInject";
	  var provider = fakeDataFac.createProvider();
	  var product = fakeDataFac.createProduct();
	  product.responsible = "575ce1506be3ff006a41fb2e";
	  product.platformcontact = "575ce1506be3ff006a41fb2e";
	  //product.contact = "admin";
	  productFac.uploadProduct(product).then(function () {
	    $log.log("success");
	  });
	  //providerFac.upload(provider).then(function() {

	  // });
	}];

	module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports) {

	// 用来往数据库添加虚假数据.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ["$log", "$rootScope", "$http", "$state", "authFac", "providerFac", "productFac", "userFac", "testFac", function ($log, $rootScope, $http, $state, authFac, providerFac, productFac, userFac, testFac) {
	  'ngInject';

	  createProviderAndProdudct();
	  function createProviderAndProdudct() {
	    var user = testFac.randomUser();
	    $log.log(user);
	    authFac.register(user.username, user.password).then(function () {
	      authFac.login(user.username, user.password).then(function () {
	        $log.log('login successfully');
	        var provider = testFac.createProvider();
	        providerFac.upload(provider).then(function (providerId) {
	          $log.log('successfullly create fake provider');
	          $log.log(providerId);
	          wait(2000);
	          // Create a fake product.
	          var product = testFac.createProduct(providerId);
	          providerFac.getContactList(providerId).then(function (results) {
	            $log.log('get contact success');
	            $log.log(results);
	            product.contact = results[0];
	            $log.log(product);
	            productFac.uploadProduct(product).then(function () {});
	          });
	        });
	      });
	    });
	  }

	  function wait(ms) {
	    var start = new Date().getTime();
	    var end = start;
	    while (end < start + ms) {
	      end = new Date().getTime();
	    }
	  }
	}];

	module.exports = exports['default'];

/***/ }
/******/ ]);
angular.module("webProject").run(["$templateCache", function($templateCache) {$templateCache.put("app/test/test.html","");
$templateCache.put("app/auth/home/home.html","<nav class=\"navbar navbar-inverse\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" ui-sref=\"#\">中途港产品发布系统</a></div><ul class=\"nav navbar-nav\"><li><a ui-sref=\".add-product\">发布产品</a></li><li ng-if=\"level == 0\"><a ui-sref=\".show-products\">产品管理</a></li><li ng-if=\"level == 0\"><a ui-sref=\".show-providers\">供应商管理</a></li><li ng-if=\"level == 0\"><a ui-sref=\".show-orders\">订单管理</a></li><li ng-if=\"level == 2\"><a ui-sref=\".show-orders\">订单管理</a></li><li ng-if=\"level == 3\"><a ui-sref=\".show-orders\">订单审核</a></li><li ng-if=\"level == 0\"><a ui-sref=\".add-provider-account\">添加账号</a></li><li ng-class=\"{\'unfinished\':unfinished}\"><span class=\"dot\"></span> <a ui-sref=\".my-account\">我的账号</a></li><li><a ng-click=\"logout();\">退出登录</a></li></ul></nav><div ui-view=\"\"></div>");
$templateCache.put("app/auth/home/login.html","<div style=\"text-align: center;\"><div style=\"width: 400px; display: inline-block;\"><h2 class=\"form-signin-heading\">请登录</h2><label for=\"inputEmail\" class=\"sr-only\">用户名</label> <input ng-model=\"username\" type=\"text\" class=\"form-control\" placeholder=\"用户名\"> <label for=\"inputPassword\" class=\"sr-only\">密码</label> <input ng-model=\"password\" type=\"password\" class=\"form-control\" placeholder=\"密码\"> <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" ng-click=\"login();\">登陆</button> <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" ng-click=\"register();\">register</button> <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" ng-click=\"logout();\">logout</button></div></div>");
$templateCache.put("app/common/account/account.html","<div class=\"section\"><md-content><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"我的账号\"><table><tr><td>用户名</td><td>{{ user.username }}</td></tr><tr><td>密码</td><td><md-button ng-click=\"changePass();\" class=\"md-raised md-primary\">更改密码</md-button></td></tr></table></md-tab><md-tab class=\"dot\" label=\"我的产品\"><section layout=\"row\" flex=\"\"><md-sidenav class=\"md-sidenav-left shadow\" md-component-id=\"showProduct\" md-is-locked-open=\"true\" md-disable-backdrop=\"\" md-whiteframe=\"4\"><div class=\"sidebar-button\"><md-button ng-click=\"showMyProducts()\" class=\"md-primary\">我发布的产品</md-button><md-button ng-if=\"level == 0 || level == 3\" ng-click=\"showUnverified()\" class=\"md-primary\">需要我审核的产品</md-button><md-button ng-if=\"level == 0 || level == 3\" ng-click=\"showVerified()\" class=\"md-primary\">我审核过的产品</md-button><md-button ng-if=\"level == 0 || level == 3\" ng-click=\"showRevokeOrder()\" class=\"md-primary\">申请退款的订单</md-button></div></md-sidenav><md-content flex=\"\" layout-padding=\"\"><table><tr><th>产品编号</th><th>产品名称</th><th>最近出发班期价格</th><th>负责人</th><th>详情</th><th>状态</th><th>操作</th></tr><tr ng-repeat=\"product in products\"><td>{{ product.objectId }}</td><td>{{ product.productName }}</td><td><div>日期: {{ product.latestDate }}</div><div>门市价(成人): {{ product.latestAdultCompanySalePrice }}</div><div>同行价(成人): {{ product.latestAdultCompanyCompetitorPrice }}</div><div>结算价(成人): {{ product.latestAdultCompanyPrice }}</div></td><td>{{ product.responsible.contactname }}</td><td><a target=\"_blank\" ui-sref=\"home.show-product-detail({productId: \'{{product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a></td><td><p ng-if=\"product.status == 1\">下架</p><p ng-if=\"product.status == 2\">未审核</p><p ng-if=\"product.status == 3\">已审核</p></td><td><md-button class=\"md-raised md-primary\" ng-click=\"post($index);\" ng-if=\"product.status == 1\">提交审核</md-button><md-button class=\"md-raised md-primary\" ng-click=\"deleteProduct($index);\" ng-if=\"product.status == 1\">删除产品</md-button><md-button class=\"md-raised md-primary\" ng-click=\"editProduct($index);\" ng-if=\"product.status == 1\">修改</md-button><md-button class=\"md-raised md-primary\" ng-click=\"editProduct($index);\" ng-if=\"product.status == 2 && !unverified\">修改</md-button><md-button class=\"md-raised md-primary\" ng-click=\"verify($index);\" ng-if=\"product.status == 2 && unverified\">通过审核</md-button><md-button class=\"md-raised md-primary\" ng-click=\"unPost($index);\" ng-if=\"product.status == 3\">下架</md-button></td></tr></table></md-content></section></md-tab><md-tab ng-if=\"isProvider\" label=\"供应商管理\"><section layout=\"row\" flex=\"\"><md-sidenav class=\"md-sidenav-left shadow\" md-component-id=\"showProvider\" md-is-locked-open=\"true\" md-disable-backdrop=\"\" md-whiteframe=\"4\"><div class=\"sidebar-button\"><md-button ng-disabled=\"!fetchedProvider\" ng-click=\"showMyContactList()\" class=\"md-primary\">商户联系人管理</md-button><md-button ng-disabled=\"!fetchedProvider\" ng-click=\"showMyProvider()\" class=\"md-primary\">显示供应商信息</md-button><md-button ng-disabled=\"!fetchedProvider\" ng-click=\"addMyProvider()\" class=\"md-primary\">设置供应商信息</md-button></div></md-sidenav><md-content flex=\"\" layout-padding=\"\"><table ng-if=\"showContactList\"><tr><th>姓名</th><th>手机</th><th>座机</th><th>职位</th><th>QQ</th><th>微信</th><th>操作</th></tr><tr ng-repeat=\"contact in contactList\"><td>{{ contact.contactname }}</td><td>{{ contact.cellphone }}</td><td>{{ contact.homephone }}</td><td>{{ contact.position }}</td><td>{{ contact.qqnumber }}</td><td>{{ contact.wechat }}</td><td><a href=\"#\" ng-click=\"editContact($index)\">编辑</a> / <a href=\"#\" ng-click=\"deleteContact($index)\">删除</a></td></tr></table><div class=\"submit\"><md-button ng-if=\"showContactList\" ng-click=\"addContact();\" class=\"md-raised md-primary\">添加商户联系人</md-button></div><table ng-show=\"showProvider\"><tbody><tr><td colspan=\"2\" class=\"title\">公司信息</td></tr><tr><td>品牌名称</td><td>{{ currentProvider.nickname }}</td></tr><tr><td>公司名称</td><td>{{ currentProvider.companyname }}</td></tr><tr><td>地址</td><td><div layout=\"row\"><span>省:</span> <span>{{ currentProvider.address.province }}</span></div><div layout=\"row\"><span>市:</span> <span>{{ currentProvider.address.city }}</span></div><div layout=\"row\" ng-if=\"provider.address.county\"><span>区:</span> <span>{{ currentProvider.address.county }}</span></div><div layout=\"row\" ng-if=\"provider.address.detail\"><span>地址:</span> <span>{{ currentProvider.address.detail }}</span></div></td></tr><tr><td>营业执照</td><td><a href=\"{{ provider.fileUrl }}\">显示证书</a></td></tr><tr><td colspan=\"2\" class=\"title\">主营业务</td></tr><tr><td>主营目的地</td><td><multi-choice is-editing=\"false\" type=\"主营目的地\" ng-if=\"testing1\" ng-model=\"testing1\"></multi-choice></td></tr><tr><td>主营口岸</td><td><multi-choice is-editing=\"false\" type=\"主营口岸\" ng-if=\"testing2\" ng-model=\"testing2\" other=\"true\"></multi-choice></td></tr><tr><td colspan=\"2\" class=\"title\">业务资源</td></tr><tr><td>航班资源</td><td><textarea ng-disabled=\"true\" class=\"msd-elastic\" ng-model=\"currentProvider.flightResource\"></textarea></td></tr><tr><td>收客情况</td><td><textarea ng-disabled=\"true\" class=\"msd-elastic\" ng-model=\"currentProvider.customerResource\"></textarea></td></tr><tr><td>产品优势</td><td><textarea ng-disabled=\"true\" class=\"msd-elastic\" ng-model=\"currentProvider.productResource\"></textarea></td></tr><tr><td colspan=\"2\" class=\"title\">合作支持</td></tr><tr><td>加返政策</td><td><div layout=\"row\"><div>全年总人数:<p>{{ currentProvider.returnPolicy.returnTotalPeople }}</p>(人)</div><div>加返<p>{{ currentProvider.returnPolicy.returnMoneyEachPeople }}</p>(元/人)</div></div><div layout=\"row\"><div>全年销售额:<p>{{ currentProvider.returnPolicy.returnTotalRevenue }}</p>(元)</div><div>加返<p>{{ currentProvider.returnPolicy.returnMoneyRevenue }}</p>(元)</div></div></td></tr></tbody></table></md-content></section></md-tab></md-tabs></md-content></div>");
$templateCache.put("app/common/header/header.html","<div class=\"common-header-module\"><div class=\"header-content\"><div class=\"logo\" ng-click=\"goHome();\">LeanEngine</div><md-menu ng-if=\"user.username\" class=\"account-menu\" md-position-mode=\"target-right target\" md-offset=\"0 48\"><md-button md-menu-origin=\"\" class=\"lc-btn\" ng-click=\"openMenu($mdOpenMenu, $event)\">{{user.username}}</md-button><md-menu-content><md-menu-item><md-button>{{i18n.header.setting}}</md-button></md-menu-item><md-menu-item><md-button>{{i18n.header.logout}}</md-button></md-menu-item></md-menu-content></md-menu><md-button ng-if=\"!user.username\" class=\"loginBtn\" ng-click=\"\">{{i18n.auth.login}}</md-button><div class=\"search-input\" ng-if=\"ui.showAskBtn\"><md-button class=\"md-icon-button searchBtn\" ng-click=\"\" aria-label=\"close\"><span></span></md-button><input class=\"search\" type=\"text\" placeholder=\"{{i18n.header.search}}\"></div><md-button class=\"askBtn lc-btn md-raised\" ng-click=\"creatTicket()\" ng-if=\"ui.showAskBtn\"><span class=\"ask-icon\"></span> <span>{{i18n.header.ask}}</span></md-button></div></div>");
$templateCache.put("app/common/navigation/navbar.html","<nav class=\"navbar navbar-default\" role=\"navigation\" bs-navbar=\"\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Brand</a></div><ul class=\"nav navbar-nav\"><li data-match-route=\"/$\"><a href=\"#/\">Home</a></li><li data-match-route=\"/page-one\"><a href=\"#/page-one\">Page One</a></li><li data-match-route=\"/page-two.*\"><a href=\"#/page-two/sub-a\">Page Two</a></li></ul></nav>");
$templateCache.put("app/common/product/add.html","<section layout=\"row\" flex=\"\"><provider-side-bar ng-if=\"isEditing\"></provider-side-bar><md-content flex=\"\" layout-padding=\"\"><div class=\"product\"><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab class=\"tab-button\" label=\"选择供应商\"><table><tr><td colspan=\"99\" class=\"title\">供应商基本信息</td></tr><tr ng-if=\"isEditing\"><td><md-button type=\"button\" ng-click=\"toggleLeft()\" class=\"md-primary\">选择供应商</md-button></td></tr><tr ng-if=\"product.pickedProvider\"><td>供应商</td><td>{{ product.pickedProvider.companyname }} ({{ product.pickedProvider.nickname }})</td></tr><tr><td>商户联系人</td><td ng-if=\"product.pickedProvider\"><md-input-container ng-if=\"isEditing\"><md-select ng-change=\"pickContact();\" ng-model=\"product.contact\"><md-option ng-selected=\"$first\" ng-value=\"contact\" ng-repeat=\"contact in product.pickedProvider.contactList\">{{contact.contactname}}</md-option></md-select></md-input-container><md-button ng-if=\"isEditing\" class=\"md-raised md-primary addcontact\" ng-click=\"addContact();\">添加商户联系人</md-button><p ng-if=\"!isEditing\">{{ product.contact.contactname }}</p></td></tr><tr ng-if=\"product.contact\"><td>手机</td><td><div>{{ product.contact.cellphone }}</div></td></tr><tr ng-if=\"product.contact\"><td>座机</td><td><div>{{ product.contact.homephone }}</div></td></tr><tr ng-if=\"product.contact\"><td>QQ号码</td><td><div>{{ product.contact.qqnumber }}</div></td></tr><tr ng-if=\"product.contact\"><td>微信</td><td><div>{{ product.contact.wechat }}</div></td></tr></table></md-tab><md-tab class=\"tab-button\" label=\"基本信息\"><table><tr><td colspan=\"99\" class=\"title\">产品基本信息</td></tr><tr ng-if=\"!isEditing\"><td>产品编号</td><td><p>{{ product.objectId }}</p></td></tr><tr><td>线路名称</td><td><input ng-if=\"isEditing\" type=\"text\" ng-model=\"product.fullName\"><div ng-if=\"!isEditing\"><span ng-repeat=\"prefix in product.prefixArray\"><span>[</span> <span>{{ prefix }}</span> <span>]</span></span> <span ng-if=\"!isEditing\">{{product.fullName}}</span></div></td></tr><tr><td>供应商产品名称</td><td><input ng-if=\"isEditing\" type=\"text\" ng-model=\"product.productName\"><p ng-if=\"!isEditing\">{{ product.productName }}</p></td></tr><tr ng-if=\"isEditing\"><td>线路名称前缀</td><td><multi-choice is-editing=\"isEditing\" type=\"线路前缀\" ng-model=\"product.prefix\"></multi-choice></td></tr><tr><td>酒店标准</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-selected=\"product.hotelStandard != \'undefined\' && $first\" ng-if=\"isEditing\" ng-model=\"product.hotelStandard\"><md-option ng-value=\"hotel\" ng-repeat=\"hotel in hotels\">{{hotel}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.hotelStandard }}</p></td></tr><tr><td>交通方式</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-selected=\"product.transportStandard != \'undefined\' && $first\" ng-if=\"isEditing\" ng-model=\"product.transportStandard\"><md-option ng-value=\"transport\" ng-repeat=\"transport in transports\">{{transport}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.transportStandard }}</p></td></tr><tr><td>产品负责人</td><td><md-input-container ng-if=\"isEditing && !isExisting\"><md-select ng-model=\"product.responsible\"><md-option ng-selected=\"$first\" ng-value=\"response\" ng-repeat=\"response in responses track by $index\">{{response.contactname}}</md-option></md-select></md-input-container><p ng-if=\"isExisting || !isEditing\">{{ product.responsible.contactname }}</p></td></tr><tr><td>行程天数</td><td><counter ng-if=\"isEditing\" ng-model=\"product.duration\"></counter><p ng-if=\"!isEditing\">{{ product.duration }}</p></td></tr><tr><td>酒店入住天数</td><td><counter ng-if=\"isEditing\" ng-model=\"product.hotelDuration\"></counter><p ng-if=\"!isEditing\">{{ product.hotelDuration }}</p></td></tr><tr><td>报名截止</td><td><div><span>出团前</span><counter ng-if=\"isEditing\" ng-model=\"product.stopDay\"></counter><p ng-if=\"!isEditing\">{{ product.stopDay }}</p><span>天</span></div></td></tr><tr><td>出发地</td><td><address ng-if=\"isEditing\" is-editing=\"isEditing\" show-county=\"false\" ng-model=\"product.start\"></address><div ng-if=\"!isEditing\"><p>{{ product.start.province }}</p><p ng-if=\"product.start.city != \'市辖区\'\">{{ product.start.city }}</p><p>{{ product.start.detail }}</p></div></td></tr><tr><td>类型</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-selected=\"product.type != \'undefined\' && $first\" ng-model=\"product.type\"><md-option ng-value=\"type\" ng-repeat=\"type in types\">{{type}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.type }}</p></td></tr><tr><td>大区</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-model=\"product.area\" ng-selected=\"product.area != \'undefined\' && $first\"><md-option ng-value=\"area\" ng-repeat=\"area in areas\">{{area}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.area }}</p></td></tr><tr><td>平台联系人</td><td><md-input-container ng-if=\"isEditing && !isExisting\"><md-select ng-model=\"product.platformcontact\"><md-option ng-selected=\"$first\" ng-value=\"response\" ng-repeat=\"response in responses track by $index\">{{response.contactname}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing || isExisting\">{{ product.platformcontact.contactname }}</p></td></tr></table></md-tab><md-tab class=\"tab-button\" label=\"行程信息\"><div ng-repeat=\"itineraryItem in product.itinerary track by $index\" class=\"itinery\"><div class=\"item\"><label>第{{ $index + 1 }}天:</label> <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.title\"> <span>请填写行程信息如: 上海-北京</span></div><div class=\"item\"><label>参考航班/列车班次</label> <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.flight\"></div><div class=\"item\"><label>住宿信息</label> <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.hotelDetail\"></div><div class=\"item\"><label>餐饮信息</label> <input ng-disabled=\"!isEditing\" type=\"checkbox\" ng-model=\"itineraryItem.food.hasmorning\">早 <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.food.morning\"> <input ng-disabled=\"!isEditing\" type=\"checkbox\" ng-model=\"itineraryItem.food.hasnoon\">中 <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.food.noon\"> <input ng-disabled=\"!isEditing\" type=\"checkbox\" ng-model=\"itineraryItem.food.hasevening\">晚 <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.food.evening\"></div><div class=\"item\" layout=\"column\"><label>详细描述:</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"itineraryItem.detail\"></textarea></div><hr></div></md-tab><md-tab class=\"tab-button\" ng-if=\"isEditing\" label=\"其他信息\"><div class=\"extra-item\" layout=\"column\"><label>线路特色</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.description\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>费用包含</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.priceInclude\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>费用不含</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.priceExclude\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>自费项目</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.selfPaid\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>预定须知</label> <textarea class=\"msd-elastic: \\n\\n;\" ng-model=\"product.reserveInfo\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>收客限制</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.restriction\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>温馨提示</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.reminder\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>签证信息</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.visaInfo\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>购物信息</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.shoppingInfo\"></textarea></div></md-tab><md-tab class=\"tab-button\" label=\"团期报价\"><div class=\"product-calendar\" layout=\"row\"><calendar-md class=\"calendar-block\" calendar-direction=\"direction\" on-prev-month=\"prevMonth\" on-next-month=\"nextMonth\" on-day-click=\"dayClick\" title-format=\"\'MMMM y\'\" ng-model=\"selectedDate\" day-format=\"\'d\'\" day-label-format=\"\'EEE\'\" day-label-tooltip-format=\"\'EEEE\'\" day-tooltip-format=\"\'fullDate\'\" week-starts-on=\"firstDayOfWeek\" day-content=\"setDayContent\"></calendar-md><div class=\"calendar-form\"><input-form type=\"团期报价\" title=\"団期报价\" is-editing=\"isEditing\" ng-model=\"currentPrice\"></input-form></div></div><div class=\"submit\"><md-button ng-if=\"isEditing\" ng-click=\"submitProduct();\" class=\"md-raised md-primary\">发布产品</md-button></div></md-tab><md-tab class=\"tab-button\" ng-if=\"!isEditing\" label=\"库存管理\"><calendar class=\"inventory-calendar\" ng-model=\"product.price\" data=\"库存管理\"></calendar></md-tab></md-tabs><input type=\"hidden\" name=\"costprice\" value=\"{{ price }}\"> <input type=\"hidden\" name=\"providers\" value=\"{{ providerList }}\"> <input type=\"hidden\" name=\"itinerary\" value=\"{{ itineraryList }}\"></div></md-content></section>");
$templateCache.put("app/common/product/itinerary.html","<div class=\"wrapper\"><div class=\"mid-title\">上海锦江旅游有限公司 | 旅游线路行程单</div><div class=\"content\"><div>线路名称：</div><div class=\"col\">团号：</div><div class=\"col\">出团日期：</div><div>行程天数</div></div></div><div class=\"wrapper\"><div class=\"title\">价格列表</div><div class=\"content\"><div class=\"has-border\">团费(基本价): {{ product.saleprice }}</div></div></div><div class=\"wrapper\"><div class=\"title\">线路特色</div><div class=\"content\" id=\"margin-top-content\">特色内容</div></div><div class=\"wrapper\" ng-repeat=\"itinerary in itinerarys\"><div class=\"title\">出团线路行程</div><div class=\"subtitle\"><div class=\"col\">{{ itinerary.date }}</div><div class=\"col\">{{ itinerary.start }}—{{ itinerary.end }}</div></div><div class=\"content\"><div class=\"main\">{{ itinerary.detail }}</div><div class=\"detail\"><div calss=\"no-col\">交通情况: {{ itinerary.transportation }}</div><div class=\"no-col\">用餐情况: {{ itinerary.cafe }}</div><div class=\"no-col\">住宿情况: {{ itinerary.hotel }}</div><div class=\"col\">出发时间: {{ itinerary.startTime }}</div><div class=\"col\">抵达时间</div><div class=\"col\">过夜天数</div><div class=\"col\">班次／航班号</div></div></div></div><div class=\"wrapper\"><div class=\"title\">中山公园龙之梦营业部联系信息：</div><div class=\"content\"><div class=\"info\"><p>联系人: {{ product.user.username }}</p><p>电话：{{ product.user.phone }}</p></div><div class=\"info\" id=\"second-info\"><p>手机：{{ product.user.cellphone }}</p><p>QQ: {{ product.user.qqnumber }}</p><p>传真: {{ product.user.faxnumber }}</p></div></div></div>");
$templateCache.put("app/common/product/show.html","<section layout=\"row\" flex=\"\"><div><md-sidenav class=\"md-sidenav-left shadow\" md-component-id=\"showProduct\" md-is-locked-open=\"true\" md-disable-backdrop=\"\" md-whiteframe=\"4\"><md-toolbar class=\"md-theme-indigo\"><h1 class=\"md-toolbar-tools\">产品管理</h1></md-toolbar><div class=\"sidebar-button\"><md-button ng-click=\"showVerified()\" class=\"md-primary\">出售中的产品 <span ng-if=\"verified\">({{ verified }})</span></md-button><md-button ng-click=\"showUnverified()\" class=\"md-primary\">待审核产品 <span ng-if=\"unverified\">({{ unverified }})</span></md-button><md-button ng-click=\"showUnposted()\" class=\"md-primary\">已下架产品 <span ng-if=\"unposted\">({{ unposted }})</span></md-button></div></md-sidenav></div><md-content flex=\"\" layout-padding=\"\"><table><tr><th>产品编号</th><th>产品名称</th><th>最近出发班期价格</th><th>负责人</th><th>详情</th><th>状态</th></tr><tr ng-repeat=\"product in products\"><td>{{ product.objectId }}</td><td>{{ product.productName }}</td><td><div>日期: {{ product.latestDate }}</div><div>门市价(成人): {{ product.latestAdultCompanySalePrice }}</div><div>同行价(成人): {{ product.latestAdultCompanyCompetitorPrice }}</div><div>结算价(成人): {{ product.latestAdultCompanyPrice }}</div></td><td>{{ product.responsible.contactname }}</td><td><a target=\"_blank\" ui-sref=\"home.show-product-detail({productId: \'{{product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a></td><td><p ng-if=\"product.status == 1\">下架</p><p ng-if=\"product.status == 2\">未审核</p><p ng-if=\"product.status == 3\">已审核</p></td></tr></table></md-content></section>");
$templateCache.put("app/common/product/show_product.html","<div ui-view=\"\"></div>");
$templateCache.put("app/common/provider/add.html","<div class=\"section\"><md-content><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"基本信息\"><table><tbody><tr><td colspan=\"2\" class=\"title\">公司信息</td></tr><tr><td>品牌名称</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.nickname\"></text-field><div ng-if=\"!isEditing\">{{ provider.nickname }}</div></td></tr><tr><td>公司名称</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.companyname\"></text-field><div ng-if=\"!isEditing\">{{ provider.companyname }}</div></td></tr><tr><td>地址</td><td><address ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.address\"></address><div ng-if=\"!isEditing\"><p>{{ provider.address.province }}</p><p ng-if=\"provider.address.city != \'市辖区\'\">{{ provider.address.city }}</p><p>{{ provider.address.detail }}</p></div></td></tr><tr><td>营业执照</td><td><div ng-if=\"isEditing\"><md-button class=\"md-raised md-primary\" ngf-select=\"upload($file)\">上传文件</md-button><p ng-if=\"filename\">{{ filename }}</p></div><div ng-if=\"!isEditing\"><a href=\"#\">显示证书</a></div></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td colspan=\"2\" class=\"title\">联系信息</td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>姓名</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.contactname\"></text-field><md-select ng-if=\"!isEditing\" ng-model=\"contactperson\"><md-option ng-selected=\"$first\" ng-value=\"contact\" ng-repeat=\"contact in contactList\">{{contact.contactname}}</md-option></md-select></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>座机</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.homephone\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.homephone }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>手机</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.cellphone\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.cellphone }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>QQ号</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.qqnumber\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.qqnumber }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\" q=\"\"><td>微信号</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.wechat\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.wechat }}</div></td></tr></tbody></table><table ng-if=\"!isEditing\"><tr><td colspan=\"99\" class=\"title\">联系信息</td></tr><tr><th>姓名</th><th>手机</th><th>座机</th><th>职位</th><th>QQ</th><th>微信</th></tr><tr ng-repeat=\"contact in contactList\"><td>{{ contact.contactname }}</td><td>{{ contact.cellphone }}</td><td>{{ contact.homephone }}</td><td>{{ contact.position }}</td><td>{{ contact.qqnumber }}</td><td>{{ contact.wechat }}</td></tr></table><div class=\"submit\"><md-button class=\"md-raised md-primary\" ng-if=\"!confirmed\" ng-click=\"confirm();\">确认</md-button></div></md-tab><md-tab label=\"业务资料\" ng-disabled=\"!confirmed && isEditing\" md-active=\"confirmed\"><table><tbody><tr><td colspan=\"2\" class=\"title\">主营业务</td></tr><tr><td>主营目的地</td><td><multi-choice is-editing=\"isEditing\" type=\"主营目的地\" ng-model=\"provider.destination\"></multi-choice></td></tr><tr><td>主营口岸</td><td><multi-choice is-editing=\"isEditing\" type=\"主营口岸\" ng-model=\"provider.start\" other=\"true\"></multi-choice></td></tr><tr><td colspan=\"2\" class=\"title\">业务资源</td></tr><tr><td>航班资源</td><td><textarea ng-disabled=\"!isEditing\" class=\"msd-elastic\" ng-model=\"provider.flightResource\"></textarea></td></tr><tr><td>收客情况</td><td><textarea ng-disabled=\"!isEditing\" class=\"msd-elastic\" ng-model=\"provider.customerResource\"></textarea></td></tr><tr><td>产品优势</td><td><textarea ng-disabled=\"!isEditing\" class=\"msd-elastic\" ng-model=\"provider.productResource\"></textarea></td></tr><tr><td colspan=\"2\" class=\"title\">合作支持</td></tr><tr><td>加返政策</td><td><div><div class=\"block\"><div>全年总人数: <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnTotalPeople\" ng-value=\"provider.returnTotalPeople\" ng-change=\"test();\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnTotalPeople }}</p>(人)</div><div>加返 <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnMoneyEachPeople\" ng-value=\"provider.returnMoneyEachPeople\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnMoneyEachPeople }}</p>(元/人)</div></div><div class=\"block\"><div>全年销售额: <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnTotalRevenue\" ng-value=\"provider.returnTotalRevenue\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnTotalRevenue }}</p>(元)</div><div>加返 <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnMoneyRevenue\" ng-value=\"provider.returnMoneyRevenue\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnMoneyRevenue }}</p>(元)</div></div></div></td></tr></tbody></table><div ng-if=\"isEditing\" class=\"submit\"><md-button class=\"md-raised md-primary\" ng-click=\"submit();\">提交</md-button></div></md-tab></md-tabs></md-content></div>");
$templateCache.put("app/common/provider/add_account.html","<div style=\"text-align: center;\"><div style=\"width: 400px; display: inline-block;\"><h2 class=\"form-signin-heading\">请输入账号和密码,</h2><md-select ng-model=\"level\"><md-option ng-selected=\"$first\" ng-value=\"level.level\" ng-repeat=\"level in levels\">{{ level.value }}</md-option></md-select><label for=\"inputEmail\" class=\"sr-only\">用户名</label> <input ng-model=\"username\" type=\"text\" class=\"form-control\" placeholder=\"用户名\"> <label for=\"inputPassword\" class=\"sr-only\">密码</label> <input ng-model=\"password\" type=\"password\" class=\"form-control\" placeholder=\"密码\"> <input ng-model=\"email\" type=\"text\" class=\"form-control\" placeholder=\"注册邮箱\"> <input ng-model=\"contactname\" type=\"text\" class=\"form-control\" placeholder=\"姓名\"> <input ng-model=\"cellphone\" type=\"text\" class=\"form-control\" placeholder=\"手机\"> <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" ng-click=\"register();\">注册</button></div></div>");
$templateCache.put("app/common/provider/show.html","<table><tr><th>供应商编号</th><th>品牌名称</th><th>公司名称</th><th>营业执照</th><th>详情</th><th>操作</th></tr><tr ng-repeat=\"provider in providers\"><td>{{ provider.objectId }}</td><td>{{ provider.nickname }}</td><td>{{ provider.companyname }}</td><td><a ng-if=\"provider.licenseFile.url\" download=\".pdf\" href=\"{{ provider.licenseFile.url }}\">点击下载</a></td><td><a target=\"_blank\" ui-sref=\"home.show-provider-detail({providerId: \'{{provider.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a></td><td><a ng-click=\"delete(provider);\">删除</a></td></tr></table><page-control></page-control>");
$templateCache.put("app/common/sale/index.html","<nav class=\"navbar navbar-inverse\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" ui-sref=\"#\">AngularUI Router</a></div><ul class=\"nav navbar-nav\"><li><a ui-sref=\".search-product\">搜索产品</a></li><li><a ui-sref=\".show-order\">订单管理</a></li><li><a ui-sref=\".account\">我的账号</a></li><li><a ng-click=\"logout();\">退出登录</a></li></ul></nav><div ui-view=\"\"></div>");
$templateCache.put("app/common/directives/calendar/calendar.html","<div class=\"calendar\"><div><md-input-container class=\"year\"><md-select ng-change=\"selectYear();\" ng-model=\"selectedYear\"><md-option ng-selected=\"$first\" ng-value=\"year\" ng-repeat=\"year in years\">{{ year }}</md-option></md-select></md-input-container><div class=\"month-wrapper\"><a href=\"#\" class=\"month\" ng-class=\"{\'active-month\': currentMonth === $index}\" ng-click=\"selectMonth($index)\" ng-repeat=\"month in months\">{{ month }}月</a></div></div><table class=\"calendar-table\" border=\"1\"><tr><th class=\"table-cell\"><div class=\"date\">{{ currentMonth + 1}}月</div></th><th class=\"table-cell\" ng-repeat=\"title in titles\"><div class=\"cell\">{{ title.value }}</div></th><th ng-if=\"isEditing\" class=\"table-cell\"><div class=\"cell\">操作</div></th></tr><tr ng-repeat=\"day in days\"><td class=\"table-cell\"><div class=\"date\">{{ day }}</div></td><td class=\"table-cell\" ng-repeat=\"title in titles\" ng-switch=\"\" on=\"title.type\"><div class=\"cell\">{{ allDayEvents[$parent.$index][title.name] }}</div></td><td ng-if=\"isEditing\" class=\"table-cell\"><a ng-if=\"!allDayEvents[$index].filled\" class=\"cell\" ng-class=\"{off: allDayEvents[$index].filled}\" href=\"#\" ng-click=\"addEvent($index);\">添加</a><div ng-if=\"allDayEvents[$index].filled\" ng-class=\"{off: !allDayEvents[$index].filled}\"><a href=\"#\" ng-click=\"editEvent($index)\">编辑</a><div class=\"inline\">/</div><a href=\"#\" ng-click=\"deleteEvent($index)\">删除</a></div></td></tr></table></div>");
$templateCache.put("app/common/directives/counter/counter.html","<div class=\"counter\"><span class=\"operator\" ng-click=\"minus();\">-</span> <input class=\"number\" ng-model=\"value\" ng-disabled=\"true\"> <span class=\"operator\" ng-click=\"plus();\">+</span></div>");
$templateCache.put("app/common/directives/form/form.html","<div><div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in items\"><div class=\"item\"><div class=\"key\">{{ item.key }}</div><div class=\"value\" ng-if=\"editable\" ng-switch=\"\" on=\"item.type\"><input ng-switch-when=\"number\" type=\"number\" ng-model=\"item.value\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"date\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" datg-placement=\"left\" data-date-format=\"mediumDate\" data-autoclose=\"true\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"text\" type=\"text\"></div><div class=\"value\" ng-if=\"!editable\">{{ item.value }}</div></div></li></ul></div><div ng-if=\"editable\" class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">取消</button></div><div ng-if=\"!editable\" class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"cancel()\">确认</button></div></div>");
$templateCache.put("app/common/directives/inputForm/inputForm.html","<div class=\"input-form\"><div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }} <span ng-if=\"model.year\">{{ model.year }}年</span> <span ng-if=\"model.month\">{{ model.month + 1}}月</span> <span ng-if=\"model.day\">{{ model.day }}日</span></h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in items\"><div class=\"item\"><div class=\"key\">{{ item.key }}</div><div ng-if=\"isEditing\" class=\"value\" ng-switch=\"\" on=\"item.type\"><input ng-switch-when=\"number\" type=\"number\" ng-model=\"item.value\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"date\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" placement=\"left\" data-date-format=\"mediumDate\" data-autoclose=\"true\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"text\" type=\"text\"></div><p ng-if=\"!isEditing\">{{ item.value }}</p></div></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"confirm();\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"clear();\">清空</button></div></div>");
$templateCache.put("app/common/directives/multiChoice/multiChoice.html","<div class=\"multiple-choice\"><label ng-repeat=\"option in options\"><input type=\"checkbox\" ng-disabled=\"!isEditing\" ng-model=\"option.state\" checked=\"{{ option.state }}\"><p>{{ option.value }}</p></label> <label ng-if=\"other\"><input ng-if=\"isEditing\" placeholder=\"请输入其他\" type=\"text\" ng-change=\"changeOther();\" ng-model=\"otherText\"><p ng-if=\"!isEditing\">{{ otherText }}</p></label></div>");
$templateCache.put("app/common/directives/page/page.html","<div class=\"center\"><a ng-repeat=\"page in pages\" ng-click=\"changePage($index)\">{{page}}</a></div>");
$templateCache.put("app/common/directives/tableForm/table_form.html","<div><div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in items\"><div class=\"item\"><div class=\"key\">{{ item.key }}</div><div class=\"value\" ng-switch=\"\" on=\"item.type\"><input ng-switch-when=\"number\" type=\"number\" ng-model=\"item.value\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"date\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" placement=\"right\" data-date-format=\"mediumDate\" data-autoclose=\"true\"> <input ng-model=\"item.value\" ng-switch-when=\"text\" type=\"text\"></div></div></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">取消</button></div></div>");
$templateCache.put("app/common/directives/textField/textField.html","<div ng-switch=\"inputType\"><input ng-switch-when=\"number\" ng-disabled=\"!isEditing\" type=\"number\" ng-model=\"$parent.value\"> <input ng-switch-default=\"\" ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"$parent.value\"></div>");
$templateCache.put("app/common/sale/account/account.html","<div class=\"section\"><md-content><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"我的账号\"><table><tr><td>用户名</td><td>{{ user.username }}</td></tr><tr><td>密码</td><td><md-button ng-click=\"changePass();\" class=\"md-raised md-primary\">更改密码</md-button></td></tr></table></md-tab></md-tabs></md-content></div>");
$templateCache.put("app/common/sale/customer/show.html","<div class=\"search\"><h3>快速搜索</h3><ul><li><strong>姓名</strong> <input type=\"text\" placeholder=\"姓名\" ng-model=\"username\"></li><li><strong>身份证</strong> <input type=\"text\" placeholder=\"身份证\" ng-model=\"identifier\"></li><li><strong>产品编号</strong> <input type=\"text\" placeholder=\"姓名\" ng-model=\"productId\"></li><li><strong>付款状态</strong><md-select ng-model=\"state\" placeholder=\"付款状态\"><md-option ng-value=\"1\">已付款</md-option><md-option ng-value=\"0\">未付款</md-option></md-select></li></ul><md-button class=\"md-raised md-primary\" ng-click=\"search();\">搜索</md-button></div><div><table><tr><th>姓名</th><th>报名项目</th><th>联系电话</th><th>应付款项</th><th>付款情况</th></tr><tr ng-repeat=\"customer in customers track by $index\"><td>{{ customer.username }}</td><td><a href=\"#\">{{ customer.productname }}</a></td><td>{{ customer.phone }}</td><td>{{ customer.price }}</td><td>{{ customer.stateText }}</td></tr></table></div><div class=\"center\"><a>上一页</a> <a ng-repeat=\"page in pages\">{{ page }}</a> <a>下一页</a></div>");
$templateCache.put("app/common/sale/order/add_order.html","<md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"提交订单\"><table class=\"order-table\"><tr><td colspan=\"99\" class=\"title\">产品基本信息</td></tr><tr><td>产品编号</td><td>{{ product.objectId }}</td></tr><tr><td>出发地</td><td><span ng-if=\"product.start.city == \'市辖区\'\">{{ product.start.province }}</span> <span ng-if=\"product.start.city != \'市辖区\'\">{{ product.start.city }}</span></td></tr><tr><td>产品名称</td><td>{{ product.productName }}</td></tr><tr><td>出团日期</td><td>{{ order.date }}</td></tr><tr><td>供应商</td><td>{{ product.provider.companyname }}</td></tr><tr><td colspan=\"99\" class=\"title\">团费</td></tr><tr><td>类型</td><td>数量</td><td>单价</td><td>小计</td></tr><tr><td>成人</td><td><counter ng-model=\"order.adult\"></counter></td><td>{{ order.price.adultCompanySalePrice }}</td><td></td></tr><tr><td>儿童</td><td><counter ng-model=\"order.child\"></counter></td><td>{{ order.price.childCompanySalePrice }}</td><td>{{ order.totalPrice }}</td></tr><tr><td colspan=\"99\" class=\"title\">预定信息</td></tr><tr><td>业务联系人</td><td><input type=\"text\" ng-model=\"order.contactname\"></td></tr><tr><td>手机</td><td><input type=\"text\" ng-model=\"order.cellphone\"></td></tr><tr><td>邮箱</td><td><input type=\"text\" ng-model=\"order.email\"></td></tr></table></md-tab><md-tab label=\"游客信息\"><md-content><table class=\"customers\"><tr><th>姓名</th><th>类型</th><th>性别</th><th>证件类型</th><th>证件号码</th><th>手机</th><th>出生日期</th><th>备注</th></tr><tr ng-repeat=\"customer in order.customers\"><td><input type=\"text\" ng-model=\"customer.name\"></td><td><md-input-container><md-select ng-model=\"customer.type\"><md-option ng-selected=\"$first\" ng-value=\"type\" ng-repeat=\"type in types\">{{ type }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.sex\"><md-option ng-selected=\"$first\" ng-value=\"sex\" ng-repeat=\"sex in sexList\">{{ sex }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.license\"><md-option ng-selected=\"$first\" ng-value=\"license\" ng-repeat=\"license in licenseList\">{{ license }}</md-option></md-select></md-input-container></td><td><input type=\"text\" ng-model=\"customer.licenseNumber\"></td><td><input type=\"text\" ng-model=\"customer.cellphone\"></td><td class=\"birthDate\"><input ng-model=\"customer.birthDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" container=\"body\" data-autoclose=\"true\"></td><td class=\"extra\"><div><input type=\"checkbox\" ng-model=\"customer.needVisa\"> 需要办签</div><div><input type=\"checkbox\" ng-model=\"customer.needShare\"> 需要拼房</div></td></tr></table></md-content><div class=\"center\"><md-button class=\"md-raised md-primary\" ng-click=\"submitOrder();\">提交订单</md-button></div></md-tab></md-tabs>");
$templateCache.put("app/common/sale/order/apply_revoke.html","<div><div class=\"modal-header\"><h3 class=\"modal-title\">申请退款</h3></div><div class=\"modal-body\"><ul><li><div class=\"item\"><div class=\"key\">退款原因</div><div class=\"value\"><textarea ng-model=\"revoke.reason\"></textarea></div></div><div class=\"item\"><div class=\"key\">申请人</div><div class=\"value\"><input ng-model=\"revoke.person\"></div></div><div class=\"item\"><div class=\"key\">手机</div><div class=\"value\"><input ng-model=\"revoke.phone\"></div></div></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"revokeOrder(revoke);\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancelRevoke()\">取消</button></div></div>");
$templateCache.put("app/common/sale/order/show_order.html","<div class=\"show-order\" layout=\"row\"><md-sidenav class=\"md-sidenav-order\" md-component-id=\"show-order\" md-is-locked-open=\"true\" md-whiteframe=\"2\"><md-toolbar class=\"md-theme-indigo\"><h1 class=\"md-toolbar-tools\">订单管理</h1></md-toolbar><div class=\"sidebar-button\"><md-button ng-click=\"allOrder()\" class=\"md-primary\">全部订单</md-button><md-button ng-click=\"unpaidOrderUnverified()\" class=\"md-primary\">未付款订单(等待计调确认)</md-button><md-button ng-click=\"unpaidOrderVerified()\" class=\"md-primary\">未付款订单(计调已经确认)</md-button><md-button ng-click=\"paidOrder()\" class=\"md-primary\">已付款订单(等待计调确认)</md-button><md-button ng-click=\"paidVerifiedOrder()\" class=\"md-primary\">已付款订单(等待供应商确认)</md-button><md-button ng-click=\"finishedOrder()\" class=\"md-primary\">已完成订单</md-button><md-button ng-click=\"getRevoke()\" class=\"md-primary\">申请退款订单</md-button><md-button ng-click=\"getCancel()\" class=\"md-primary\">已取消订单</md-button></div></md-sidenav><md-content layout-padding=\"\"><table class=\"search-option\"><caption>订单过滤</caption><tr><td>订单号</td><td><div><input ng-model=\"query.orderId\"></div></td></tr><tr><td>产品名称</td><td><div><input ng-model=\"query.productName\"></div></td></tr><tr><td>出发日期</td><td><div class=\"date-wrapper\" layout=\"row\"><input ng-model=\"query.startDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"><div class=\"separator\">-</div><input ng-model=\"query.endDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"></div></td></tr><tr ng-show=\"level == 0 || level == 3\"><td>分销商姓名</td><td><div><md-input-container><md-select ng-model=\"query.sale\"><md-option ng-value=\"sale.objectId\" ng-repeat=\"sale in saleList\">{{sale.contactname}}</md-option></md-select></md-input-container></div></td></tr><tr><td colspan=\"2\"><md-button class=\"md-raised md-primary\" ng-click=\"search();\">确认过滤</md-button></td></tr></table><table class=\"order\"><tbody ng-repeat=\"order in orders\"><tr><td colspan=\"99\"><div class=\"order-title\"><span>订单号: {{order.objectId}}</span> <span>下单时间: <span ng-bind=\"order.createdAt | date:\'yyyy-MM-dd HH:mm\'\"></span></span> <span ng-if=\"level != 1\">供应商: {{ order.provider.nickname }}</span> <a ng-click=\"showContact(order);\">和我联系</a></div></td></tr><tr><td><div><div>订单来源： {{ order.contactname }}</div><a><span ng-repeat=\"prefix in order.product.prefixArray track by $index\">[{{ prefix }}]</span> {{ order.product.fullName }}</a></div></td><td><div class=\"detail\"><p ng-if=\"level == 3 || level == 0 || level == 2\">结算价<strong>￥{{ order.adult * order.price.adultCompanyPrice + order.child * order.price.childCompanyPrice }}</strong></p><p ng-if=\"level == 3 || level == 0 || level == 1\">销售价<strong>￥{{ order.adult * order.price.adultCompanySalePrice + order.child * order.price.childCompanySalePrice }}</strong></p><p ng-if=\"level == 3 || level == 2 || level == 1\">同行价<strong>￥{{ order.adult * order.price.adultCompanyCompetitorPrice + order.child * order.price.childCompanyCompetitorPrice }}</strong></p><div>成人：{{ order.adult }}人 儿童：{{ order.child }}人</div><div>出团时间: {{ order.startDate }}</div></div></td><td><div class=\"status\"><p><strong ng-if=\"order.status == 1\">未付款(等待确认)</strong> <strong ng-if=\"order.status == 2\">未付款(已确认)</strong> <strong ng-if=\"order.status == 3\">已付款(等待确认)</strong> <strong ng-if=\"order.status == 8\">已付款(等待供应商确认)</strong> <strong ng-if=\"order.status == 4\">已完成</strong> <strong ng-if=\"order.status == 5\">申请退款</strong> <strong ng-if=\"order.status == 6\">申请取消</strong> <strong ng-if=\"order.status == 7\">订单已取消</strong></p><md-button ng-if=\"(level == 1) && order.status == 1\" ng-click=\"editOrder(order.objectId);\" class=\"md-raised md-primary\">修改客户信息</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 1\" ng-click=\"verifyUnpaid(order);\" class=\"md-raised md-primary\">审核通过</md-button><md-button ng-if=\"(level == 1) && order.status == 2\" ng-click=\"paid(order);\" class=\"md-raised md-primary\">确认付款</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 3\" ng-click=\"verifyPaid(order);\" class=\"md-raised md-primary\">付款审核通过</md-button><md-button ng-if=\"(level == 2) && order.status == 8\" ng-click=\"verifyFinished(order);\" class=\"md-raised md-primary\">确认交易完成</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 5\" ng-click=\"confirmRevoke(order);\" class=\"md-raised md-primary\">确认退款</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 6\" ng-click=\"confirmRevoke(order);\" class=\"md-raised md-primary\">确认取消订单</md-button></div></td><td><div class=\"operation\"><a ng-if=\"!admin\" target=\"_blank\" ui-sref=\"sale.show-order-detail({orderId: \'{{order.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a> <a ng-if=\"admin\" target=\"_blank\" ui-sref=\"home.show-order-detail({orderId: \'{{order.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a><a ng-if=\"level == 1 && order.status == 1\" ng-click=\"cancelOrder(order);\">取消订单</a> <a ng-if=\"level == 1 && order.status == 2\" ng-click=\"applyCancel(order);\">申请取消订单</a> <a ng-if=\"level == 1 && (order.status == 3 || order.status == 4 || order.status == 5)\" ng-click=\"applyRevoke(order);\">申请退款</a></div></td></tr></tbody></table></md-content></div>");
$templateCache.put("app/common/sale/order/show_order_detail.html","<table><tr><td colspan=\"99\" class=\"title\">预订信息</td></tr><tr><td>联系人</td><td colspan=\"99\">{{ order.contactname }}</td></tr><tr><td>联系方式</td><td colspan=\"99\">{{ order.cellphone }}</td></tr><tr><td>邮件</td><td colspan=\"99\">{{ order.email }}</td></tr><tr><td colspan=\"99\" class=\"title\">计调员信息</td></tr><tr><td>姓名</td><td colspan=\"99\">{{ product.platformcontact.contactname }}</td></tr><tr><td>电话</td><td colspan=\"99\">{{ product.platformcontact.cellphone }}</td></tr><tr><td>邮箱</td><td colspan=\"99\">{{ product.platformcontact.email }}</td></tr><tr><td colspan=\"99\" class=\"title\">产品信息</td></tr><tr><td>产品编号</td><td>产品名称</td><td>出发城市</td><td>出游人数</td><td>订单金额</td></tr><tr><td>{{ order.objectId }}</td><td><p><span ng-repeat=\"prefix in product.prefixArray\">[{{ prefix }}]</span> {{ product.fullName }}</p></td><td>上海</td><td><span>成人: {{ order.adult }}人</span> <span>/</span> <span>儿童: {{ order.child }}人</span></td><td><p ng-if=\"level == 3 || level == 0 || level == 2\">结算价<strong>￥{{ order.adult * order.price.adultCompanyPrice + order.child * order.price.childCompanyPrice }}</strong></p><br><p ng-if=\"level == 3 || level == 0 || level == 1\">销售价<strong>￥{{ order.adult * order.price.adultCompanySalePrice + order.child * order.price.childCompanySalePrice }}</strong></p><br><p ng-if=\"level == 3 || level == 2 || level == 1\">同行价<strong>￥{{ order.adult * order.price.adultCompanyCompetitorPrice + order.child * order.price.childCompanyCompetitorPrice }}</strong></p></td></tr><tr><td colspan=\"99\" class=\"title\">游客信息</td></tr><tr><th>姓名</th><th>类型</th><th>性别</th><th>证件类型</th><th>证件号码</th><th>手机</th><th>出生日期</th><th>备注</th></tr><tr ng-if=\"!isEditing\" ng-repeat=\"customer in order.customers\"><td>{{ customer.name }}</td><td>{{ customer.type }}</td><td>{{ customer.sex }}</td><td>{{ customer.license }}</td><td>{{ customer.licenseNumber }}</td><td>{{ customer.cellphone }}</td><td>{{ customer.birthDate }}</td><td><p ng-if=\"customer.needShare\">需要拼房</p><p ng-if=\"customer.needVisa\">需要签证</p></td></tr><tr ng-if=\"isEditing\" ng-repeat=\"customer in order.customers\"><td><input type=\"text\" ng-model=\"customer.name\"></td><td><md-input-container><md-select ng-model=\"customer.type\"><md-option ng-value=\"type\" ng-repeat=\"type in types\">{{ type }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.sex\"><md-option ng-value=\"sex\" ng-repeat=\"sex in sexList\">{{ sex }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.license\"><md-option ng-value=\"license\" ng-repeat=\"license in licenseList\">{{ license }}</md-option></md-select></md-input-container></td><td><input type=\"text\" ng-model=\"customer.licenseNumber\"></td><td><input type=\"text\" ng-model=\"customer.cellphone\"></td><td class=\"birthDate\"><input ng-model=\"customer.birthDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" container=\"body\" data-autoclose=\"true\"></td><td class=\"extra\"><div><input type=\"checkbox\" ng-model=\"customer.needVisa\"> 需要办签</div><div><input type=\"checkbox\" ng-model=\"customer.needShare\"> 需要拼房</div></td></tr><tr ng-if=\"order.revoke\"><td colspan=\"99\" class=\"title\">退款信息</td></tr><tr ng-if=\"order.revoke\"><td>退款理由</td><td colspan=\"99\">{{ order.revoke.reason }}</td></tr><tr ng-if=\"order.revoke\"><td>申请人</td><td colspan=\"99\">{{ order.revoke.person }}</td></tr><tr ng-if=\"order.revoke\"><td>手机</td><td colspan=\"99\">{{ order.revoke.phone }}</td></tr></table><div ng-if=\"isEditing\" class=\"center\"><md-button class=\"md-raised md-primary\" ng-click=\"changeOrder();\">修改订单</md-button></div>");
$templateCache.put("app/common/sale/search/search.html","<div class=\"selected-tags\" ng-if=\"selectedTags\"><div ng-repeat=\"(key, value) in selectedTags\"><span class=\"key-span\">{{ key }}:</span> <span class=\"value-span\">{{ value }}</span> <a class=\"cancel-icon\" ng-click=\"removeTag(key);\"></a></div></div><table class=\"search-option\"><tr><td>出发城市</td><td class=\"address-tag\"><div><span ng-class=\"{\'selected-tag\': !showAddress}\" ng-click=\"showAddress = false\" class=\"unlimited\">不限</span> <span ng-class=\"{\'selected-tag\': showAddress}\" ng-click=\"showAddress = true\" class=\"unlimited\">选择城市</span><address ng-show=\"showAddress\" class=\"address\" show-county=\"false\" is-editing=\"true\" ng-model=\"start\"></address></div></td></tr><tr><td>出发日期</td><td><span ng-class=\"{\'selected-tag\': !showDate}\" ng-click=\"showDate = false\" class=\"unlimited\">不限</span> <span ng-class=\"{\'selected-tag\': showDate}\" ng-click=\"showDate = true\" class=\"unlimited\">选择出发日期</span><div ng-show=\"showDate\" class=\"date-wrapper\" layout=\"row\"><input ng-model=\"startDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"><div class=\"separator\">-</div><input ng-model=\"endDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"></div></td></tr><tr><td>行程天数</td><td class=\"selectable\"><div class=\"stop-day\"><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'行程天数\'] == -1}\" ng-click=\"pick(\'行程天数\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'行程天数\']}\" ng-click=\"pick(\'行程天数\', $index)\" ng-repeat=\"day in tags[\'行程天数\']\">{{ day }}天</span></div></td></tr>k<tr class=\"selectable\"><td>酒店星级</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'酒店标准\'] == -1}\" ng-click=\"pick(\'酒店标准\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'酒店标准\']}\" ng-click=\"pick(\'酒店标准\', $index)\" ng-repeat=\"hotel in tags[\'酒店标准\']\">{{ hotel }}</span></td></tr><tr class=\"selectable\"><td>出行方式</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'交通方式\'] == -1}\" ng-click=\"pick(\'交通方式\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'交通方式\']}\" ng-click=\"pick(\'交通方式\', $index)\" ng-repeat=\"transport in tags[\'交通方式\']\">{{ transport }}</span></td></tr><tr class=\"selectable\"><td>类型</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'类型\'] == -1}\" ng-click=\"pick(\'类型\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'类型\']}\" ng-click=\"pick(\'类型\', $index)\" ng-repeat=\"type in tags[\'类型\']\">{{ type }}</span></td></tr><tr><td>目的地</td><td><div class=\"keyword\"><input type=\"text\" placeholder=\"请输入目的地关键词\" ng-model=\"destination\"><md-button class=\"md-raised md-primary\" ng-click=\"search();\">确认搜索</md-button></div></td></tr></table><div class=\"products\"><div class=\"product\" ng-repeat=\"product in products\"><div class=\"left\"><a class=\"product-title\" target=\"_blank\" ui-sref=\"sale.show-product({productId: \'{{product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\"><span ng-repeat=\"prefix in product.prefixArray track by $index\"><span>[</span> <span>{{ prefix }}</span> <span>]</span></span> <span>{{product.productName}}</span></a><div class=\"metadata\"><span ng-if=\"product.start.city == \'市辖区\'\">出发地: {{ product.start.province }}</span> <span ng-if=\"product.start.city != \'市辖区\'\">出发地: {{ product.start.city }}</span> <span>行程天数：{{ product.duration }}天{{ product.hotelDuration }}晚</span> <span>最近班期： <em>{{ product.latestDate }}</em></span></div><div class=\"metadata\"><span>线路编号：{{ product.objectId }}</span></div></div><div class=\"right\"><div class=\"pricebox\"><span>门市价 <em><span class=\"large\">{{ product.latestAdultCompanySalePrice }}</span></em></span> <span>同行价 <em><span class=\"large\">{{ product.latestAdultCompanyCompetitorPrice }}</span></em></span></div><div><a href=\"{{ product.fileUrl }}\"><md-button class=\"md-raised md-primary\">打印行程单</md-button></a></div></div></div></div>");
$templateCache.put("app/common/sale/search/show_product.html","<section class=\"product-top\"><div class=\"title-block\"><div class=\"product-title\"><span class=\"product-tag\">{{ product.area }}</span><h1><span ng-repeat=\"prefix in product.prefixArray\"><span>[</span> <span>{{ prefix }}</span> <span>]</span></span> <span>{{product.productName}}</span></h1></div><div class=\"product-metadata\"><span><label ng-if=\"product.start.city != \'市辖区\'\">{{ product.start.city }}出发</label> <label ng-if=\"product.start.city == \'市辖区\'\">{{ product.start.province }}出发</label> 线路编号:{{ product.objectId }}</span></div></div></section><section class=\"product-center\" layout=\"row\"><div class=\"left\"><calendar-md flex=\"\" layout=\"\" layout-fill=\"\" calendar-direction=\"direction\" on-prev-month=\"prevMonth\" on-next-month=\"nextMonth\" on-day-click=\"dayClick\" title-format=\"\'MMMM y\'\" ng-model=\"selectedDate\" day-format=\"\'d\'\" day-label-format=\"\'EEE\'\" day-label-tooltip-format=\"\'EEEE\'\" day-tooltip-format=\"\'fullDate\'\" week-starts-on=\"firstDayOfWeek\" day-content=\"setDayContent\"></calendar-md></div><div class=\"right\"><div class=\"detail-info\"><div class=\"detail-item\"><label class=\"detail-key\"><strong>行程天数:</strong> <span>{{ product.duration }}天{{ product.hotelDuration }}晚</span></label> <label class=\"detail-key\"><strong>往返交通:</strong> <span>{{ product.transportStandard }}</span></label></div><div class=\"detail-item\"><label class=\"detail-key\"><strong>平台方联系人:</strong> <span>{{ product.platformcontact.contactname }}</span></label> <label class=\"detail-key\"><strong>联系电话:</strong> <span>{{ product.platformcontact.cellphone }}</span></label></div></div><div class=\"detail-reserve\"><div class=\"reserve-info\"><span>建议至少提前 <strong>{{ product.stopDay }}</strong> 天预订</span></div><div class=\"reserve-time\"><label>出发日期:</label><div class=\"timebox\">{{ product.latestDate }} <span>{{ product.latestAdultCompanySalePrice }}</span> 元/成人价, <span>{{ product.latestChildCompanySalePrice }}</span> 元/儿童价</div></div><div class=\"reserve-time\"><label>预订人数:</label><div class=\"people\"><span>成人</span><counter ng-model=\"adult\"></counter><span>儿童</span><counter ng-model=\"child\"></counter></div></div><div class=\"center\"><md-button class=\"md-raised md-primary\" ng-click=\"order();\">预订</md-button></div></div><div class=\"button-list\"><div class=\"icon\"><i class=\"print-icon fa fa-print\" aria-hidden=\"true\"></i> <a href=\"{{ product.fileUrl }}\">打印行程</a></div></div></div></section><section class=\"product-information\"><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"行程信息\"><div ng-repeat=\"itinerary in product.itinerary\" class=\"itinerary\"><div class=\"dayitem\"><span class=\"d\">第{{$index + 1}}天</span> <span class=\"s\">{{ itinerary.title }}</span></div><div class=\"cyitem\"><p class=\"s1\"><strong>餐饮</strong></p><p>早 <span>{{ itinerary.food.morning }}</span></p><p>中 <span>{{ itinerary.food.noon }}</span></p><p>晚 <span>{{ itinerary.food.evening }}</span></p><p></p><p class=\"s2\"><strong>住宿</strong> {{ itinerary.hotelDetail }}或同级{{ itinerary.hotel }}</p><p class=\"s3\"><strong>参考航班/火车班次</strong> {{ itinerary.flight }}</p></div><div class=\"detail\" ng-bind-html=\"getItinerary($index);\"></div></div></md-tab><md-tab label=\"费用说明\"><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">费用包含</span></div><div class=\"detail\"><div template=\"\" key=\"priceInclude\"></div></div></div><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">费用不含</span></div><div class=\"detail\"><div template=\"\" key=\"priceExclude\"></div></div></div></md-tab><md-tab label=\"签证信息\"><div class=\"visa-info\"><div template=\"\" key=\"visaInfo\"></div></div></md-tab><md-tab label=\"购物信息\"><div class=\"visa-info\"><div template=\"\" key=\"shoppingInfo\"></div></div></md-tab><md-tab label=\"预订须知\"><div class=\"tab-item\"><div class=\"detail\"><div template=\"\" key=\"reserveInfo\"></div></div></div><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">收客限制</span></div><div class=\"detail\"><div template=\"\" key=\"restriction\"></div></div></div></md-tab></md-tabs></section>");
$templateCache.put("app/common/product/directives/itinerary/add.html","<div class=\"modal-header\"><h3 class=\"modal-title\">添加行程信息</h3></div><div class=\"modal-body\"><table><tr><td>日期</td><td><input type=\"text\" ng-model=\"date\" placeholder=\"日期\" bs-datepicker=\"\" autoclose=\"true\"></td></tr><tr><td>路线</td><td><input type=\"text\" ng-model=\"start\" placeholder=\"起始点\"><p>-</p><input type=\"text\" ng-model=\"end\" placeholder=\"目的地\"></td></tr><tr><td>住宿</td><td><input type=\"text\" placeholder=\"住宿情况\" ng-model=\"hotel\"></td></tr><tr><td>餐饮</td><td><input type=\"text\" ng-model=\"cafe\" value=\"asdasd\"></td></tr><tr><td>交通</td><td><input type=\"text\" ng-model=\"transportation\"></td></tr><tr><td>出发时间</td><td><input type=\"text\" ng-model=\"startTime\"></td></tr><tr><td>游览行程</td><td colspan=\"4\"><textarea msd-elastic=\"\" style=\"width: 400px;\" ng-model=\"detail\"></textarea></td></tr></table></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">取消</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"add()\">确认</button></div>");
$templateCache.put("app/common/product/directives/product-address/address.html","<style>\n    .select-address {\n        overflow: hidden;\n        position:fixed;\n        left: 50%;\n        z-index: 19911125;\n        transition:0.3s;\n        box-shadow: 0 3px 12px rgba(0,0,0,.175);\n        background: #fff;\n        display: none;\n    }\n    .select-address.active {\n        top: 0!important;\n    }\n    .select-address-container ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n    }\n    .select-address-container ul li {\n        width: 240px;\n        padding: 10px;\n        display: table-cell;\n        vertical-align: middle;\n    }\n    .select-address-container ul li:nth-child(even) {\n        background: #eee;\n    }\n    .select-address-container ul li span {\n        font-size: 13px;\n        list-style: none;\n        display: inline-block;\n        margin:5px 7px;\n        cursor: pointer;\n    }\n    .select-address-footer {\n        border-top: 1px solid #eee;\n        padding: 10px 15px;\n        overflow: hidden;\n    }\n    .select-address-footer input {\n        min-width: 50%;\n    }\n</style><div class=\"select-address form-inline\"><div class=\"select-address-container\"><ul><li><span ng-repeat=\"item in provinces\" ng-click=\"aSet.p(item.p)\" ng-class=\"{\'label label-success\': p === item.p}\">{{item.p}} {{x}}</span></li><li ng-if=\"cities\"><span ng-repeat=\"item in cities\" ng-click=\"aSet.c(item.n)\" ng-class=\"{\'label label-success\': c === item.n}\">{{item.n}}</span></li><li ng-if=\"c\"><span ng-repeat=\"item in dists\" ng-click=\"aSet.a(item.s)\" ng-class=\"{\'label label-success\': a === item.s}\">{{item.s}}</span><h5 ng-if=\"!dists\" class=\"text-muted text-center\">没有县级资料</h5></li></ul></div><div class=\"select-address-footer\"><span class=\"pull-right\"><button ng-click=\"clear()\" class=\"btn btn-sm btn-link\">清空</button> <button ng-click=\"submit()\" class=\"btn btn-sm btn-success\" type=\"submit\">确定</button></span> <strong class=\"text-danger\">{{ p }} {{ c }} {{ a }}</strong> <input ng-show=\"p\" ng-model=\"d\" class=\"form-control input-sm\" type=\"text\" placeholder=\"具体街道\"></div></div>");
$templateCache.put("app/common/product/directives/textField/textField.html","<td>{{ label }}:</td><td colspan=\"{{ maximumColumn }}\"><input ng-if=\"isEditing\" class=\"input-field\" type=\"text\" name=\"{{key}}\"><div ng-if=\"!isEditing\">{{ value }}</div></td>");
$templateCache.put("app/common/product/directives/providerSideBar/providerSideBar.html","<md-sidenav class=\"md-sidenav-left\" md-component-id=\"provider-side-bar\" md-whiteframe=\"4\"><md-toolbar class=\"md-theme-indigo search\"><h1 class=\"md-toolbar-tools\">选择供应商</h1></md-toolbar><div ng-if=\"providers.length > 0\" angucomplete-alt=\"\" id=\"ex1\" placeholder=\"搜索供应商\" pause=\"100\" selected-object=\"selectProvider\" local-data=\"providers\" local-search=\"searchProvider\" title-field=\"nickname,companyname\" auto-match=\"true\" minlength=\"1\" input-class=\"form-control form-control-small\"></div><div><md-content layout-padding=\"\" ng-repeat=\"provider in filterProviders\"><md-button ng-click=\"pickProvider($index)\" class=\"md-primary\">{{ provider.nickname }} ({{ provider.companyname}})</md-button></md-content></div></md-sidenav>");
$templateCache.put("app/common/provider/directives/address/address.html","<div class=\"address\" layout=\"row\" ayout-align=\"start center\"><div layout=\"row\" layout-align=\"start center\"><div class=\"label\">省份:</div><md-input-container><md-select class=\"margin\" ng-if=\"isEditing\" ng-model=\"$parent.province\"><md-option ng-value=\"province.name\" ng-repeat=\"province in provinces\">{{province.name}}</md-option></md-select></md-input-container><p class=\"value\" ng-if=\"!isEditing\">{{ province }}</p></div><div layout-align=\"start center\" layout=\"row\"><div class=\"label\">城市:</div><md-input-container><md-select class=\"margin\" ng-if=\"isEditing\" ng-model=\"$parent.city\"><md-option ng-value=\"city.name\" ng-repeat=\"city in cities\">{{city.name}}</md-option></md-select></md-input-container><p class=\"value\" ng-if=\"!isEditing\">{{ city }}</p></div><div layout=\"row\" layout-align=\"start center\"><div class=\"margin label\">地址:</div><input ng-if=\"isEditing\" class=\"margin\" ng-disabled=\"!isEditing\" name=\"address\" type=\"text\" ng-model=\"$parent.detail\"><div ng-if=\"!isEditing\">{{ detail }}</div></div></div>");
$templateCache.put("app/common/provider/directives/menu/menu.html","<td>{{label}}</td><td><md-select ng-if=\"isEditing\" ng-change=\"onValueChange();\" ng-model=\"selectValue\" aria-label=\"select\"><md-option ng-selected=\"$first\" ng-value=\"option\" ng-repeat=\"option in options\">{{option}}</md-option></md-select><p ng-if=\"!isEditing\">{{ value }}</p><input name=\"{{ name }}\" type=\"hidden\" value=\"{{ value }}\"></td>");
$templateCache.put("app/common/provider/directives/returnPolicy/returnPolicy.html","<div><div class=\"block\"><div>全年总人数: <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"returnTotalPeople\" ng-value=\"provider.returnTotalPeople\" ng-change=\"test();\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnTotalPeople }}</p>(人)</div><div>加返 <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"returnPolicy.returnMoneyEachPeople\" ng-value=\"provider.returnMoneyEachPeople\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnMoneyEachPeople }}</p>(元/人)</div></div><div class=\"block\"><div>全年销售额: <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"returnPolicy.returnTotalRevenue\" ng-value=\"provider.returnTotalRevenue\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnTotalRevenue }}</p>(元)</div><div>加返 <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"returnPolicy.returnMoneyRevenue\" ng-value=\"provider.returnMoneyRevenue\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnMoneyRevenue }}</p>(元)</div></div></div>");
$templateCache.put("app/common/provider/directives/password/password.html","<div><div class=\"inline\">新密码:</div><input class=\"inline\" type=\"password\" ng-model=\"password\" ng-blur=\"verify();\" ng-focus=\"focus();\"><div class=\"inline\">确认密码:</div><input class=\"inline\" type=\"password\" ng-model=\"password2\" ng-blur=\"verify();\" ng-focus=\"focus();\"><div id=\"verified\" class=\"inline input-field\"></div></div>");
$templateCache.put("app/common/product/directives/providerSideBar/contact/myModalContent.html","<div class=\"modal-header\"><h3 class=\"modal-title\">联系信息</h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in contact\">{{ item.key }}: {{ item.value }}</li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">返回</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"showDetails()\">查看详情</button></div>");
$templateCache.put("app/common/product/directives/providerSideBar/search/advanceProviderSearch.html","<div class=\"modal-header\"><h3 class=\"modal-title\">高级搜索</h3></div><div class=\"modal-body\"><ul><li><p>供应商名称</p><input type=\"text\" ng-model=\"keyword\"></li><li><p>服务地区</p><input type=\"text\" ng-model=\"mainDestination\"></li><li><p>服务类型</p><md-select ng-model=\"servingType\" placeholder=\"选择服务类型\"><md-option ng-value=\"type.key\" ng-repeat=\"type in types\">{{type.value}}</md-option></md-select></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">返回</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"search()\">搜索</button></div>");
$templateCache.put("app/common/sale/search/directives/calendar/calendar.html","<md-content layout=\"column\" layout-fill=\"\" md-swipe-left=\"next()\" md-swipe-right=\"prev()\"><md-toolbar><div class=\"md-toolbar-tools\" layout=\"row\"><md-button class=\"md-icon-button\" ng-click=\"prev()\" aria-label=\"Previous month\"><md-tooltip ng-if=\"::tooltips()\">Previous month</md-tooltip><md-icon md-svg-icon=\"md-tabs-arrow\"></md-icon></md-button><div flex=\"\"></div><h2 class=\"calendar-md-title\"><span>{{ calendar.start | date:titleFormat:timezone }}</span></h2><div flex=\"\"></div><md-button class=\"md-icon-button\" ng-click=\"next()\" aria-label=\"Next month\"><md-tooltip ng-if=\"::tooltips()\">Next month</md-tooltip><md-icon md-svg-icon=\"md-tabs-arrow\" class=\"moveNext\"></md-icon></md-button></div></md-toolbar><md-content ng-if=\"weekLayout === columnWeekLayout\" class=\"agenda\"><div ng-repeat=\"week in calendar.weeks track by $index\"><div ng-if=\"sameMonth(day)\" ng-class=\'{\"disabled\" : isDisabled(day), active: active === day, \"has-events\": hasEvents(day) }\' ng-click=\"handleDayClick(day)\" ng-repeat=\"day in week\" layout=\"\"><md-tooltip ng-if=\"::tooltips()\">{{ day | date:dayTooltipFormat:timezone }}</md-tooltip><div>{{ day | date:dayFormat:timezone }}</div><div flex=\"\" ng-bind-html=\"dataService.data[dayKey(day)]\"></div></div></div></md-content><md-content ng-if=\"weekLayout !== columnWeekLayout\" flex=\"\" layout=\"column\" class=\"calendar\"><div layout=\"row\" class=\"subheader\"><div layout-padding=\"\" class=\"subheader-day\" flex=\"\" ng-repeat=\"day in calendar.weeks[0]\"><md-tooltip ng-if=\"::tooltips()\">{{ day | date:dayLabelTooltipFormat }}</md-tooltip>{{ day | date:dayLabelFormat }}</div></div><div ng-if=\"week.length\" ng-repeat=\"week in calendar.weeks track by $index\" flex=\"\" layout=\"row\"><div tabindex=\"{{ sameMonth(day) ? (day | date:dayFormat:timezone) : 0 }}\" ng-repeat=\"day in week track by $index\" ng-click=\"handleDayClick(day)\" flex=\"\" layout=\"\" layout-padding=\"\" ng-class=\'{\"disabled\" : isDisabled(day), \"active\": isActive(day), \"has-events\": hasEvents(day), \"md-whiteframe-12dp\": hover || focus }\' ng-focus=\"focus = true;\" ng-blur=\"focus = false;\" ng-mouseleave=\"hover = false\" ng-mouseenter=\"hover = true\"><md-tooltip ng-if=\"::tooltips()\">{{ day | date:dayTooltipFormat }}</md-tooltip><div>{{ day | date:dayFormat }}</div><div flex=\"\" ng-bind-html=\"dataService.data[dayKey(day)]\" id=\"{{ day | date:dayIdFormat }}\"></div></div></div></md-content></md-content>");
$templateCache.put("app/common/sale/search/directives/reserve/reserve.html","<div class=\"modal-header\"><h3 class=\"modal-title\">预定</h3></div><div class=\"modal-body\"><div class=\"item\"><label>出发日期</label><md-input-container><md-select ng-model=\"reserve.date\"><md-option ng-value=\"price.date\" ng-repeat=\"(index, price) in priceArray\" ng-selected=\"index == selectedIndex\">{{price.date}} 成人<span style=\"color: #ff1a1a\">{{ price.price.adultCompanySalePrice }}</span>元, 儿童<span style=\"color: #ff1a1a\">{{ price.price.childCompanySalePrice }}</span>元</md-option></md-select></md-input-container></div><div class=\"item\"><label>预定人数</label> <span>成人</span><counter ng-model=\"reserve.adult\"></counter><span>儿童</span><counter ng-model=\"reserve.child\"></counter></div></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">返回</button></div>");
$templateCache.put("app/common/sale/search/directives/filter/filter.html","<div class=\"modal-header\"><h3 class=\"modal-title\">高级搜索</h3></div><div class=\"modal-body\"><ul><li><strong>关键词</strong> <input type=\"text\" ng-model=\"keyword\"></li><li><strong>出发日期</strong> <a ng-class=\"{active: startLimit}\" ng-click=\"setStartLimit();\">不限</a> <input type=\"text\" class=\"inline\" data-date-format=\"yyyy-MM-dd\" ng-blur=\"setStartBlur();\" ng-model=\"startDate\" autoclose=\"true\" bs-datepicker=\"\"><div class=\"inline\">-</div><input type=\"text\" class=\"inline\" data-date-format=\"yyyy-MM-dd\" ng-blur=\"setStartBlur();\" ng-model=\"$parent.endDate\" autoclose=\"true\" bs-datepicker=\"\"></li><li><strong>价格范围</strong> <a ng-class=\"{active: priceLimit}\" ng-click=\"setPriceLimit();\">不限</a> <input type=\"number\" class=\"inline\" ng-model=\"priceMin\" ng-blur=\"setPriceBlur();\"><div class=\"inline\">-</div><input type=\"number\" class=\"inline\" ng-model=\"priceMax\" ng-blur=\"setPriceBlur();\"></li><li><strong>天数</strong> <label class=\"inline\" ng-repeat=\"day in days\"><input type=\"radio\" class=\"checkbox\" value=\"{{ day.value }}\" ng-click=\"setDay($index);\" name=\"days\"><p class=\"text\">{{ day.string }}</p></label></li></ul></div><div class=\"modal-footer\"><md-button class=\"md-raised\" ng-click=\"close()\">返回</md-button><md-button class=\"md-raised md-primary\" ng-click=\"search()\">搜索</md-button></div>");
$templateCache.put("app/common/sale/search/directives/signin/signin.html","<div class=\"modal-header\"><h3 class=\"modal-title\">{{ name }}报名表</h3></div><div class=\"modal-body\"><ul><li><strong>姓名</strong> <input type=\"text\" ng-model=\"username\"></li><li><strong>身份证</strong> <input type=\"text\" ng-model=\"identifier\"></li><li><strong>联系电话</strong> <input type=\"text\" ng-model=\"phone\"></li><li><strong>状态</strong><md-select placeholder=\"付款状态\" ng-model=\"state\" class=\"menu\"><md-option ng-value=\"opt.state\" ng-repeat=\"opt in options\">{{ opt.value }}</md-option></md-select></li></ul></div><div class=\"modal-footer\"><md-button class=\"md-raised\" ng-click=\"close()\">返回</md-button><md-button class=\"md-raised md-primary\" ng-click=\"signin()\">确认</md-button></div>");}]);