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

	var _commonEmployeeShowEmployeeCtrlJs = __webpack_require__(56);

	var _commonEmployeeShowEmployeeCtrlJs2 = _interopRequireDefault(_commonEmployeeShowEmployeeCtrlJs);

	// factory

	var _commonAuthFac = __webpack_require__(57);

	var _commonAuthFac2 = _interopRequireDefault(_commonAuthFac);

	var _commonFileFac = __webpack_require__(58);

	var _commonFileFac2 = _interopRequireDefault(_commonFileFac);

	var _commonProviderFac = __webpack_require__(59);

	var _commonProviderFac2 = _interopRequireDefault(_commonProviderFac);

	var _commonProductFac = __webpack_require__(60);

	var _commonProductFac2 = _interopRequireDefault(_commonProductFac);

	var _commonItineraryFac = __webpack_require__(61);

	var _commonItineraryFac2 = _interopRequireDefault(_commonItineraryFac);

	var _commonCustomerFac = __webpack_require__(62);

	var _commonCustomerFac2 = _interopRequireDefault(_commonCustomerFac);

	var _commonUserFac = __webpack_require__(63);

	var _commonUserFac2 = _interopRequireDefault(_commonUserFac);

	var _commonOrderFac = __webpack_require__(64);

	var _commonOrderFac2 = _interopRequireDefault(_commonOrderFac);

	var _testTestFac = __webpack_require__(65);

	var _testTestFac2 = _interopRequireDefault(_testTestFac);

	var _commonErrorFac = __webpack_require__(66);

	var _commonErrorFac2 = _interopRequireDefault(_commonErrorFac);

	// Testing util

	var _testAddFakeDataFac = __webpack_require__(67);

	var _testAddFakeDataFac2 = _interopRequireDefault(_testAddFakeDataFac);

	var _testTestCtrl = __webpack_require__(68);

	var _testTestCtrl2 = _interopRequireDefault(_testTestCtrl);

	var _testIntegrationAdminFlow = __webpack_require__(69);

	var _testIntegrationAdminFlow2 = _interopRequireDefault(_testIntegrationAdminFlow);

	angular.module('webProject', ['ngAnimate', 'ngCookies', 'ui.router', 'ngMaterial', 'base64', 'mgcrea.ngStrap', 'ngFileUpload', 'angular-md5', 'ui.bootstrap', 'monospaced.elastic', 'angucomplete-alt', 'materialCalendar', 'oitozero.ngSweetAlert', 'monospaced.elastic', 'ngActivityIndicator'])
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
	.controller('homeCtrl', _authHomeHomeCtrl2['default']).controller('addProviderCtrl', _commonProviderAddProviderCtrl2['default']).controller('showProviderCtrl', _commonProviderShowProviderCtrl2['default']).controller('addProductCtrl', _commonProductAddProductCtrl2['default']).controller('modalCtrl', _commonProductDirectivesProviderSideBarContactModalCtrlJs2['default']).controller('showProductCtrl', _commonProductShowProductCtrlJs2['default']).controller('showProductDetailCtrl', _commonProductShowProductDetailCtrlJs2['default']).controller('addItineraryCtrl', _commonProductDirectivesItineraryAddCtrlJs2['default']).controller('loginCtrl', _authHomeLoginCtrl2['default']).controller('saleCtrl', _commonSaleSaleCtrl2['default']).controller('searchCtrl', _commonSaleSearchSearchCtrl2['default']).controller('filterCtrl', _commonSaleSearchDirectivesFilterFilterCtrl2['default']).controller('showItineraryCtrl', _commonProductShowItineraryCtrl2['default']).controller('signinCtrl', _commonSaleSearchDirectivesSigninSigninCtrl2['default']).controller('showCustomerCtrl', _commonSaleCustomerShowCustomerCtrl2['default']).controller('providerSearchCtrl', _commonProductDirectivesProviderSideBarSearchAdvanceProviderSearchCtrlJs2['default']).controller('showProviderDetailCtrl', _commonProviderShowProviderDetailCtrl2['default']).controller('myAccountCtrl', _commonAccountMyAccountCtrl2['default']).controller('showProductSaleCtrl', _commonSaleSearchShowProductCtrlJs2['default']).controller('reserveFormCtrl', _commonSaleSearchDirectivesReserveReserveFormCtrlJs2['default']).controller('addOrderCtrl', _commonSaleOrderAddOrderCtrlJs2['default']).controller('showOrderCtrl', _commonSaleOrderShowOrderCtrlJs2['default']).controller('showOrderDetailCtrl', _commonSaleOrderShowOrderDetailCtrlJs2['default']).controller('formCtrl', _commonDirectivesFormFormCtrlJs2['default']).controller('saleAccountCtrl', _commonSaleAccountAccountCtrlJs2['default']).controller('applyRevokeCtrl', _commonSaleOrderApplyRevokeCtrlJs2['default']).controller('showEmployeeCtrl', _commonEmployeeShowEmployeeCtrlJs2['default'])

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

	  items_per_page: 20,

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
	    FINISHED: 4,
	    REVOKE: 5,
	    CANCEL: 6,
	    CANCELLED: 7,
	    PAID_VERIFIED: 8
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
	      reserve: null,
	      orderId: null,
	      isEditing: null
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
	    authenticate: [lcConfig.userLevel.PROVIDER, lcConfig.userLevel.ORGANIZER],
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
	  }).state('home.show-employees', {
	    url: '/show-employees',
	    templateUrl: 'app/common/employee/show.html',
	    controller: 'showEmployeeCtrl',
	    authenticate: [lcConfig.userLevel.ADMIN]
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var city = {
	  "province": [{
	    "city": [{
	      "county": [{
	        "name": "东城区",
	        "zip": "110101"
	      }, {
	        "name": "西城区",
	        "zip": "110102"
	      }, {
	        "name": "朝阳区",
	        "zip": "110105"
	      }, {
	        "name": "丰台区",
	        "zip": "110106"
	      }, {
	        "name": "石景山区",
	        "zip": "110107"
	      }, {
	        "name": "海淀区",
	        "zip": "110108"
	      }, {
	        "name": "门头沟区",
	        "zip": "110109"
	      }, {
	        "name": "房山区",
	        "zip": "110111"
	      }, {
	        "name": "通州区",
	        "zip": "110112"
	      }, {
	        "name": "顺义区",
	        "zip": "110113"
	      }, {
	        "name": "昌平区",
	        "zip": "110114"
	      }, {
	        "name": "大兴区",
	        "zip": "110115"
	      }, {
	        "name": "怀柔区",
	        "zip": "110116"
	      }, {
	        "name": "平谷区",
	        "zip": "110117"
	      }],
	      "name": "市辖区",
	      "zip": "110100"
	    }, {
	      "county": [{
	        "name": "密云县",
	        "zip": "110228"
	      }, {
	        "name": "延庆县",
	        "zip": "110229"
	      }],
	      "name": "县",
	      "zip": "110200"
	    }],
	    "name": "北京市",
	    "zip": "110000"
	  }, {
	    "city": [{
	      "county": [{
	        "name": "和平区",
	        "zip": "120101"
	      }, {
	        "name": "河东区",
	        "zip": "120102"
	      }, {
	        "name": "河西区",
	        "zip": "120103"
	      }, {
	        "name": "南开区",
	        "zip": "120104"
	      }, {
	        "name": "河北区",
	        "zip": "120105"
	      }, {
	        "name": "红桥区",
	        "zip": "120106"
	      }, {
	        "name": "东丽区",
	        "zip": "120110"
	      }, {
	        "name": "西青区",
	        "zip": "120111"
	      }, {
	        "name": "津南区",
	        "zip": "120112"
	      }, {
	        "name": "北辰区",
	        "zip": "120113"
	      }, {
	        "name": "武清区",
	        "zip": "120114"
	      }, {
	        "name": "宝坻区",
	        "zip": "120115"
	      }, {
	        "name": "滨海新区",
	        "zip": "120116"
	      }],
	      "name": "市辖区",
	      "zip": "120100"
	    }, {
	      "county": [{
	        "name": "宁河县",
	        "zip": "120221"
	      }, {
	        "name": "静海县",
	        "zip": "120223"
	      }, {
	        "name": "蓟县",
	        "zip": "120225"
	      }],
	      "name": "县",
	      "zip": "120200"
	    }],
	    "name": "天津市",
	    "zip": "120000"
	  }, {
	    "city": [{
	      "name": "石家庄市",
	      "zip": "130100"
	    }, {
	      "name": "唐山市",
	      "zip": "130200"
	    }, {
	      "name": "秦皇岛市",
	      "zip": "130300"
	    }, {
	      "name": "邯郸市",
	      "zip": "130400"
	    }, {
	      "name": "邢台市",
	      "zip": "130500"
	    }, {
	      "name": "保定市",
	      "zip": "130600"
	    }, {
	      "name": "张家口市",
	      "zip": "130700"
	    }, {
	      "name": "承德市",
	      "zip": "130800"
	    }, {
	      "name": "沧州市",
	      "zip": "130900"
	    }, {
	      "name": "廊坊市",
	      "zip": "131000"
	    }, {
	      "name": "衡水市",
	      "zip": "131100"
	    }],
	    "name": "河北省",
	    "zip": "130000"
	  }, {
	    "city": [{
	      "name": "太原市",
	      "zip": "140100"
	    }, {
	      "name": "大同市",
	      "zip": "140200"
	    }, {
	      "name": "阳泉市",
	      "zip": "140300"
	    }, {
	      "name": "长治市",
	      "zip": "140400"
	    }, {
	      "name": "晋城市",
	      "zip": "140500"
	    }, {
	      "name": "朔州市",
	      "zip": "140600"
	    }, {
	      "name": "晋中市",
	      "zip": "140700"
	    }, {
	      "name": "运城市",
	      "zip": "140800"
	    }, {
	      "name": "忻州市",
	      "zip": "140900"
	    }, {
	      "name": "临汾市",
	      "zip": "141000"
	    }, {
	      "name": "吕梁市",
	      "zip": "141100"
	    }],
	    "name": "山西省",
	    "zip": "140000"
	  }, {
	    "city": [{
	      "name": "呼和浩特市",
	      "zip": "150100"
	    }, {
	      "name": "包头市",
	      "zip": "150200"
	    }, {
	      "name": "乌海市",
	      "zip": "150300"
	    }, {
	      "name": "赤峰市",
	      "zip": "150400"
	    }, {
	      "name": "通辽市",
	      "zip": "150500"
	    }, {
	      "name": "鄂尔多斯市",
	      "zip": "150600"
	    }, {
	      "name": "呼伦贝尔市",
	      "zip": "150700"
	    }, {
	      "name": "巴彦淖尔市",
	      "zip": "150800"
	    }, {
	      "name": "乌兰察布市",
	      "zip": "150900"
	    }, {
	      "name": "兴安盟",
	      "zip": "152200"
	    }, {
	      "name": "锡林郭勒盟",
	      "zip": "152500"
	    }, {
	      "name": "阿拉善盟",
	      "zip": "152900"
	    }],
	    "name": "内蒙古自治区",
	    "zip": "150000"
	  }, {
	    "city": [{
	      "name": "沈阳市",
	      "zip": "210100"
	    }, {
	      "name": "大连市",
	      "zip": "210200"
	    }, {
	      "name": "鞍山市",
	      "zip": "210300"
	    }, {
	      "name": "抚顺市",
	      "zip": "210400"
	    }, {
	      "name": "本溪市",
	      "zip": "210500"
	    }, {
	      "name": "丹东市",
	      "zip": "210600"
	    }, {
	      "name": "锦州市",
	      "zip": "210700"
	    }, {
	      "name": "营口市",
	      "zip": "210800"
	    }, {
	      "name": "阜新市",
	      "zip": "210900"
	    }, {
	      "name": "辽阳市",
	      "zip": "211000"
	    }, {
	      "name": "盘锦市",
	      "zip": "211100"
	    }, {
	      "name": "铁岭市",
	      "zip": "211200"
	    }, {
	      "name": "朝阳市",
	      "zip": "211300"
	    }, {
	      "name": "葫芦岛市",
	      "zip": "211400"
	    }],
	    "name": "辽宁省",
	    "zip": "210000"
	  }, {
	    "city": [{
	      "name": "长春市",
	      "zip": "220100"
	    }, {
	      "name": "吉林市",
	      "zip": "220200"
	    }, {
	      "name": "四平市",
	      "zip": "220300"
	    }, {
	      "name": "辽源市",
	      "zip": "220400"
	    }, {
	      "name": "通化市",
	      "zip": "220500"
	    }, {
	      "name": "白山市",
	      "zip": "220600"
	    }, {
	      "name": "松原市",
	      "zip": "220700"
	    }, {
	      "name": "白城市",
	      "zip": "220800"
	    }, {
	      "name": "延边朝鲜族自治州",
	      "zip": "222400"
	    }],
	    "name": "吉林省",
	    "zip": "220000"
	  }, {
	    "city": [{
	      "name": "哈尔滨市",
	      "zip": "230100"
	    }, {
	      "name": "齐齐哈尔市",
	      "zip": "230200"
	    }, {
	      "name": "鸡西市",
	      "zip": "230300"
	    }, {
	      "name": "鹤岗市",
	      "zip": "230400"
	    }, {
	      "name": "双鸭山市",
	      "zip": "230500"
	    }, {
	      "name": "大庆市",
	      "zip": "230600"
	    }, {
	      "name": "伊春市",
	      "zip": "230700"
	    }, {
	      "name": "佳木斯市",
	      "zip": "230800"
	    }, {
	      "name": "七台河市",
	      "zip": "230900"
	    }, {
	      "name": "牡丹江市",
	      "zip": "231000"
	    }, {
	      "name": "黑河市",
	      "zip": "231100"
	    }, {
	      "name": "绥化市",
	      "zip": "231200"
	    }, {
	      "name": "大兴安岭地区",
	      "zip": "232700"
	    }],
	    "name": "黑龙江省",
	    "zip": "230000"
	  }, {
	    "city": [{
	      "county": [{
	        "name": "黄浦区",
	        "zip": "310101"
	      }, {
	        "name": "徐汇区",
	        "zip": "310104"
	      }, {
	        "name": "长宁区",
	        "zip": "310105"
	      }, {
	        "name": "静安区",
	        "zip": "310106"
	      }, {
	        "name": "普陀区",
	        "zip": "310107"
	      }, {
	        "name": "闸北区",
	        "zip": "310108"
	      }, {
	        "name": "虹口区",
	        "zip": "310109"
	      }, {
	        "name": "杨浦区",
	        "zip": "310110"
	      }, {
	        "name": "闵行区",
	        "zip": "310112"
	      }, {
	        "name": "宝山区",
	        "zip": "310113"
	      }, {
	        "name": "嘉定区",
	        "zip": "310114"
	      }, {
	        "name": "浦东新区",
	        "zip": "310115"
	      }, {
	        "name": "金山区",
	        "zip": "310116"
	      }, {
	        "name": "松江区",
	        "zip": "310117"
	      }, {
	        "name": "青浦区",
	        "zip": "310118"
	      }, {
	        "name": "奉贤区",
	        "zip": "310120"
	      }],
	      "name": "市辖区",
	      "zip": "310100"
	    }, {
	      "county": {
	        "name": "崇明县",
	        "zip": "310230"
	      },
	      "name": "县",
	      "zip": "310200"
	    }],
	    "name": "上海市",
	    "zip": "310000"
	  }, {
	    "city": [{
	      "name": "南京市",
	      "zip": "320100"
	    }, {
	      "name": "无锡市",
	      "zip": "320200"
	    }, {
	      "name": "徐州市",
	      "zip": "320300"
	    }, {
	      "name": "常州市",
	      "zip": "320400"
	    }, {
	      "name": "苏州市",
	      "zip": "320500"
	    }, {
	      "name": "南通市",
	      "zip": "320600"
	    }, {
	      "name": "连云港市",
	      "zip": "320700"
	    }, {
	      "name": "淮安市",
	      "zip": "320800"
	    }, {
	      "name": "盐城市",
	      "zip": "320900"
	    }, {
	      "name": "扬州市",
	      "zip": "321000"
	    }, {
	      "name": "镇江市",
	      "zip": "321100"
	    }, {
	      "name": "泰州市",
	      "zip": "321200"
	    }, {
	      "name": "宿迁市",
	      "zip": "321300"
	    }],
	    "name": "江苏省",
	    "zip": "320000"
	  }, {
	    "city": [{
	      "name": "杭州市",
	      "zip": "330100"
	    }, {
	      "name": "宁波市",
	      "zip": "330200"
	    }, {
	      "name": "温州市",
	      "zip": "330300"
	    }, {
	      "name": "嘉兴市",
	      "zip": "330400"
	    }, {
	      "name": "湖州市",
	      "zip": "330500"
	    }, {
	      "name": "绍兴市",
	      "zip": "330600"
	    }, {
	      "name": "金华市",
	      "zip": "330700"
	    }, {
	      "name": "衢州市",
	      "zip": "330800"
	    }, {
	      "name": "舟山市",
	      "zip": "330900"
	    }, {
	      "name": "台州市",
	      "zip": "331000"
	    }, {
	      "name": "丽水市",
	      "zip": "331100"
	    }],
	    "name": "浙江省",
	    "zip": "330000"
	  }, {
	    "city": [{
	      "name": "合肥市",
	      "zip": "340100"
	    }, {
	      "name": "芜湖市",
	      "zip": "340200"
	    }, {
	      "name": "蚌埠市",
	      "zip": "340300"
	    }, {
	      "name": "淮南市",
	      "zip": "340400"
	    }, {
	      "name": "马鞍山市",
	      "zip": "340500"
	    }, {
	      "name": "淮北市",
	      "zip": "340600"
	    }, {
	      "name": "铜陵市",
	      "zip": "340700"
	    }, {
	      "name": "安庆市",
	      "zip": "340800"
	    }, {
	      "name": "黄山市",
	      "zip": "341000"
	    }, {
	      "name": "滁州市",
	      "zip": "341100"
	    }, {
	      "name": "阜阳市",
	      "zip": "341200"
	    }, {
	      "name": "宿州市",
	      "zip": "341300"
	    }, {
	      "name": "六安市",
	      "zip": "341500"
	    }, {
	      "name": "亳州市",
	      "zip": "341600"
	    }, {
	      "name": "池州市",
	      "zip": "341700"
	    }, {
	      "name": "宣城市",
	      "zip": "341800"
	    }],
	    "name": "安徽省",
	    "zip": "340000"
	  }, {
	    "city": [{
	      "name": "福州市",
	      "zip": "350100"
	    }, {
	      "name": "厦门市",
	      "zip": "350200"
	    }, {
	      "name": "莆田市",
	      "zip": "350300"
	    }, {
	      "name": "三明市",
	      "zip": "350400"
	    }, {
	      "name": "泉州市",
	      "zip": "350500"
	    }, {
	      "name": "漳州市",
	      "zip": "350600"
	    }, {
	      "name": "南平市",
	      "zip": "350700"
	    }, {
	      "name": "龙岩市",
	      "zip": "350800"
	    }, {
	      "name": "宁德市",
	      "zip": "350900"
	    }],
	    "name": "福建省",
	    "zip": "350000"
	  }, {
	    "city": [{
	      "name": "南昌市",
	      "zip": "360100"
	    }, {
	      "name": "景德镇市",
	      "zip": "360200"
	    }, {
	      "name": "萍乡市",
	      "zip": "360300"
	    }, {
	      "name": "九江市",
	      "zip": "360400"
	    }, {
	      "name": "新余市",
	      "zip": "360500"
	    }, {
	      "name": "鹰潭市",
	      "zip": "360600"
	    }, {
	      "name": "赣州市",
	      "zip": "360700"
	    }, {
	      "name": "吉安市",
	      "zip": "360800"
	    }, {
	      "name": "宜春市",
	      "zip": "360900"
	    }, {
	      "name": "抚州市",
	      "zip": "361000"
	    }, {
	      "name": "上饶市",
	      "zip": "361100"
	    }],
	    "name": "江西省",
	    "zip": "360000"
	  }, {
	    "city": [{
	      "name": "济南市",
	      "zip": "370100"
	    }, {
	      "name": "青岛市",
	      "zip": "370200"
	    }, {
	      "name": "淄博市",
	      "zip": "370300"
	    }, {
	      "name": "枣庄市",
	      "zip": "370400"
	    }, {
	      "name": "东营市",
	      "zip": "370500"
	    }, {
	      "name": "烟台市",
	      "zip": "370600"
	    }, {
	      "name": "潍坊市",
	      "zip": "370700"
	    }, {
	      "name": "济宁市",
	      "zip": "370800"
	    }, {
	      "name": "泰安市",
	      "zip": "370900"
	    }, {
	      "name": "威海市",
	      "zip": "371000"
	    }, {
	      "name": "日照市",
	      "zip": "371100"
	    }, {
	      "name": "莱芜市",
	      "zip": "371200"
	    }, {
	      "name": "临沂市",
	      "zip": "371300"
	    }, {
	      "name": "德州市",
	      "zip": "371400"
	    }, {
	      "name": "聊城市",
	      "zip": "371500"
	    }, {
	      "name": "滨州市",
	      "zip": "371600"
	    }, {
	      "name": "菏泽市",
	      "zip": "371700"
	    }],
	    "name": "山东省",
	    "zip": "370000"
	  }, {
	    "city": [{
	      "name": "郑州市",
	      "zip": "410100"
	    }, {
	      "name": "开封市",
	      "zip": "410200"
	    }, {
	      "name": "洛阳市",
	      "zip": "410300"
	    }, {
	      "name": "平顶山市",
	      "zip": "410400"
	    }, {
	      "name": "安阳市",
	      "zip": "410500"
	    }, {
	      "name": "鹤壁市",
	      "zip": "410600"
	    }, {
	      "name": "新乡市",
	      "zip": "410700"
	    }, {
	      "name": "焦作市",
	      "zip": "410800"
	    }, {
	      "name": "濮阳市",
	      "zip": "410900"
	    }, {
	      "name": "许昌市",
	      "zip": "411000"
	    }, {
	      "name": "漯河市",
	      "zip": "411100"
	    }, {
	      "name": "三门峡市",
	      "zip": "411200"
	    }, {
	      "name": "南阳市",
	      "zip": "411300"
	    }, {
	      "name": "商丘市",
	      "zip": "411400"
	    }, {
	      "name": "信阳市",
	      "zip": "411500"
	    }, {
	      "name": "周口市",
	      "zip": "411600"
	    }, {
	      "name": "驻马店市",
	      "zip": "411700"
	    }, {
	      "name": "省直辖县级行政区划",
	      "zip": "419000"
	    }],
	    "name": "河南省",
	    "zip": "410000"
	  }, {
	    "city": [{
	      "name": "武汉市",
	      "zip": "420100"
	    }, {
	      "name": "黄石市",
	      "zip": "420200"
	    }, {
	      "name": "十堰市",
	      "zip": "420300"
	    }, {
	      "name": "宜昌市",
	      "zip": "420500"
	    }, {
	      "name": "襄阳市",
	      "zip": "420600"
	    }, {
	      "name": "鄂州市",
	      "zip": "420700"
	    }, {
	      "name": "荆门市",
	      "zip": "420800"
	    }, {
	      "name": "孝感市",
	      "zip": "420900"
	    }, {
	      "name": "荆州市",
	      "zip": "421000"
	    }, {
	      "name": "黄冈市",
	      "zip": "421100"
	    }, {
	      "name": "咸宁市",
	      "zip": "421200"
	    }, {
	      "name": "随州市",
	      "zip": "421300"
	    }, {
	      "name": "恩施土家族苗族自治州",
	      "zip": "422800"
	    }, {
	      "name": "省直辖县级行政区划",
	      "zip": "429000"
	    }],
	    "name": "湖北省",
	    "zip": "420000"
	  }, {
	    "city": [{
	      "name": "长沙市",
	      "zip": "430100"
	    }, {
	      "name": "株洲市",
	      "zip": "430200"
	    }, {
	      "name": "湘潭市",
	      "zip": "430300"
	    }, {
	      "name": "衡阳市",
	      "zip": "430400"
	    }, {
	      "name": "邵阳市",
	      "zip": "430500"
	    }, {
	      "name": "岳阳市",
	      "zip": "430600"
	    }, {
	      "name": "常德市",
	      "zip": "430700"
	    }, {
	      "name": "张家界市",
	      "zip": "430800"
	    }, {
	      "name": "益阳市",
	      "zip": "430900"
	    }, {
	      "name": "郴州市",
	      "zip": "431000"
	    }, {
	      "name": "永州市",
	      "zip": "431100"
	    }, {
	      "name": "怀化市",
	      "zip": "431200"
	    }, {
	      "name": "娄底市",
	      "zip": "431300"
	    }, {
	      "name": "湘西土家族苗族自治州",
	      "zip": "433100"
	    }],
	    "name": "湖南省",
	    "zip": "430000"
	  }, {
	    "city": [{
	      "name": "广州市",
	      "zip": "440100"
	    }, {
	      "name": "韶关市",
	      "zip": "440200"
	    }, {
	      "name": "深圳市",
	      "zip": "440300"
	    }, {
	      "name": "珠海市",
	      "zip": "440400"
	    }, {
	      "name": "汕头市",
	      "zip": "440500"
	    }, {
	      "name": "佛山市",
	      "zip": "440600"
	    }, {
	      "name": "江门市",
	      "zip": "440700"
	    }, {
	      "name": "湛江市",
	      "zip": "440800"
	    }, {
	      "name": "茂名市",
	      "zip": "440900"
	    }, {
	      "name": "肇庆市",
	      "zip": "441200"
	    }, {
	      "name": "惠州市",
	      "zip": "441300"
	    }, {
	      "name": "梅州市",
	      "zip": "441400"
	    }, {
	      "name": "汕尾市",
	      "zip": "441500"
	    }, {
	      "name": "河源市",
	      "zip": "441600"
	    }, {
	      "name": "阳江市",
	      "zip": "441700"
	    }, {
	      "name": "清远市",
	      "zip": "441800"
	    }, {
	      "name": "东莞市",
	      "zip": "441900"
	    }, {
	      "name": "中山市",
	      "zip": "442000"
	    }, {
	      "name": "潮州市",
	      "zip": "445100"
	    }, {
	      "name": "揭阳市",
	      "zip": "445200"
	    }, {
	      "name": "云浮市",
	      "zip": "445300"
	    }],
	    "name": "广东省",
	    "zip": "440000"
	  }, {
	    "city": [{
	      "name": "南宁市",
	      "zip": "450100"
	    }, {
	      "name": "柳州市",
	      "zip": "450200"
	    }, {
	      "name": "桂林市",
	      "zip": "450300"
	    }, {
	      "name": "梧州市",
	      "zip": "450400"
	    }, {
	      "name": "北海市",
	      "zip": "450500"
	    }, {
	      "name": "防城港市",
	      "zip": "450600"
	    }, {
	      "name": "钦州市",
	      "zip": "450700"
	    }, {
	      "name": "贵港市",
	      "zip": "450800"
	    }, {
	      "name": "玉林市",
	      "zip": "450900"
	    }, {
	      "name": "百色市",
	      "zip": "451000"
	    }, {
	      "name": "贺州市",
	      "zip": "451100"
	    }, {
	      "name": "河池市",
	      "zip": "451200"
	    }, {
	      "name": "来宾市",
	      "zip": "451300"
	    }, {
	      "name": "崇左市",
	      "zip": "451400"
	    }],
	    "name": "广西壮族自治区",
	    "zip": "450000"
	  }, {
	    "city": [{
	      "name": "海口市",
	      "zip": "460100"
	    }, {
	      "name": "三亚市",
	      "zip": "460200"
	    }, {
	      "name": "三沙市",
	      "zip": "460300"
	    }, {
	      "name": "省直辖县级行政区划",
	      "zip": "469000"
	    }],
	    "name": "海南省",
	    "zip": "460000"
	  }, {
	    "city": [{
	      "county": [{
	        "name": "万州区",
	        "zip": "500101"
	      }, {
	        "name": "涪陵区",
	        "zip": "500102"
	      }, {
	        "name": "渝中区",
	        "zip": "500103"
	      }, {
	        "name": "大渡口区",
	        "zip": "500104"
	      }, {
	        "name": "江北区",
	        "zip": "500105"
	      }, {
	        "name": "沙坪坝区",
	        "zip": "500106"
	      }, {
	        "name": "九龙坡区",
	        "zip": "500107"
	      }, {
	        "name": "南岸区",
	        "zip": "500108"
	      }, {
	        "name": "北碚区",
	        "zip": "500109"
	      }, {
	        "name": "綦江区",
	        "zip": "500110"
	      }, {
	        "name": "大足区",
	        "zip": "500111"
	      }, {
	        "name": "渝北区",
	        "zip": "500112"
	      }, {
	        "name": "巴南区",
	        "zip": "500113"
	      }, {
	        "name": "黔江区",
	        "zip": "500114"
	      }, {
	        "name": "长寿区",
	        "zip": "500115"
	      }, {
	        "name": "江津区",
	        "zip": "500116"
	      }, {
	        "name": "合川区",
	        "zip": "500117"
	      }, {
	        "name": "永川区",
	        "zip": "500118"
	      }, {
	        "name": "南川区",
	        "zip": "500119"
	      }],
	      "name": "市辖区",
	      "zip": "500100"
	    }, {
	      "county": [{
	        "name": "潼南县",
	        "zip": "500223"
	      }, {
	        "name": "铜梁县",
	        "zip": "500224"
	      }, {
	        "name": "荣昌县",
	        "zip": "500226"
	      }, {
	        "name": "璧山县",
	        "zip": "500227"
	      }, {
	        "name": "梁平县",
	        "zip": "500228"
	      }, {
	        "name": "城口县",
	        "zip": "500229"
	      }, {
	        "name": "丰都县",
	        "zip": "500230"
	      }, {
	        "name": "垫江县",
	        "zip": "500231"
	      }, {
	        "name": "武隆县",
	        "zip": "500232"
	      }, {
	        "name": "忠县",
	        "zip": "500233"
	      }, {
	        "name": "开县",
	        "zip": "500234"
	      }, {
	        "name": "云阳县",
	        "zip": "500235"
	      }, {
	        "name": "奉节县",
	        "zip": "500236"
	      }, {
	        "name": "巫山县",
	        "zip": "500237"
	      }, {
	        "name": "巫溪县",
	        "zip": "500238"
	      }, {
	        "name": "石柱土家族自治县",
	        "zip": "500240"
	      }, {
	        "name": "秀山土家族苗族自治县",
	        "zip": "500241"
	      }, {
	        "name": "酉阳土家族苗族自治县",
	        "zip": "500242"
	      }, {
	        "name": "彭水苗族土家族自治县",
	        "zip": "500243"
	      }],
	      "name": "县",
	      "zip": "500200"
	    }],
	    "name": "重庆市",
	    "zip": "500000"
	  }, {
	    "city": [{
	      "name": "成都市",
	      "zip": "510100"
	    }, {
	      "name": "自贡市",
	      "zip": "510300"
	    }, {
	      "name": "攀枝花市",
	      "zip": "510400"
	    }, {
	      "name": "泸州市",
	      "zip": "510500"
	    }, {
	      "name": "德阳市",
	      "zip": "510600"
	    }, {
	      "name": "绵阳市",
	      "zip": "510700"
	    }, {
	      "name": "广元市",
	      "zip": "510800"
	    }, {
	      "name": "遂宁市",
	      "zip": "510900"
	    }, {
	      "name": "内江市",
	      "zip": "511000"
	    }, {
	      "name": "乐山市",
	      "zip": "511100"
	    }, {
	      "name": "南充市",
	      "zip": "511300"
	    }, {
	      "name": "眉山市",
	      "zip": "511400"
	    }, {
	      "name": "宜宾市",
	      "zip": "511500"
	    }, {
	      "name": "广安市",
	      "zip": "511600"
	    }, {
	      "name": "达州市",
	      "zip": "511700"
	    }, {
	      "name": "雅安市",
	      "zip": "511800"
	    }, {
	      "name": "巴中市",
	      "zip": "511900"
	    }, {
	      "name": "资阳市",
	      "zip": "512000"
	    }, {
	      "name": "阿坝藏族羌族自治州",
	      "zip": "513200"
	    }, {
	      "name": "甘孜藏族自治州",
	      "zip": "513300"
	    }, {
	      "name": "凉山彝族自治州",
	      "zip": "513400"
	    }],
	    "name": "四川省",
	    "zip": "510000"
	  }, {
	    "city": [{
	      "name": "贵阳市",
	      "zip": "520100"
	    }, {
	      "name": "六盘水市",
	      "zip": "520200"
	    }, {
	      "name": "遵义市",
	      "zip": "520300"
	    }, {
	      "name": "安顺市",
	      "zip": "520400"
	    }, {
	      "name": "毕节市",
	      "zip": "520500"
	    }, {
	      "name": "铜仁市",
	      "zip": "520600"
	    }, {
	      "name": "黔西南布依族苗族自治州",
	      "zip": "522300"
	    }, {
	      "name": "黔东南苗族侗族自治州",
	      "zip": "522600"
	    }, {
	      "name": "黔南布依族苗族自治州",
	      "zip": "522700"
	    }],
	    "name": "贵州省",
	    "zip": "520000"
	  }, {
	    "city": [{
	      "name": "昆明市",
	      "zip": "530100"
	    }, {
	      "name": "曲靖市",
	      "zip": "530300"
	    }, {
	      "name": "玉溪市",
	      "zip": "530400"
	    }, {
	      "name": "保山市",
	      "zip": "530500"
	    }, {
	      "name": "昭通市",
	      "zip": "530600"
	    }, {
	      "name": "丽江市",
	      "zip": "530700"
	    }, {
	      "name": "普洱市",
	      "zip": "530800"
	    }, {
	      "name": "临沧市",
	      "zip": "530900"
	    }, {
	      "name": "楚雄彝族自治州",
	      "zip": "532300"
	    }, {
	      "name": "红河哈尼族彝族自治州",
	      "zip": "532500"
	    }, {
	      "name": "文山壮族苗族自治州",
	      "zip": "532600"
	    }, {
	      "name": "西双版纳傣族自治州",
	      "zip": "532800"
	    }, {
	      "name": "大理白族自治州",
	      "zip": "532900"
	    }, {
	      "name": "德宏傣族景颇族自治州",
	      "zip": "533100"
	    }, {
	      "name": "怒江傈僳族自治州",
	      "zip": "533300"
	    }, {
	      "name": "迪庆藏族自治州",
	      "zip": "533400"
	    }],
	    "name": "云南省",
	    "zip": "530000"
	  }, {
	    "city": [{
	      "name": "拉萨市",
	      "zip": "540100"
	    }, {
	      "name": "昌都地区",
	      "zip": "542100"
	    }, {
	      "name": "山南地区",
	      "zip": "542200"
	    }, {
	      "name": "日喀则地区",
	      "zip": "542300"
	    }, {
	      "name": "那曲地区",
	      "zip": "542400"
	    }, {
	      "name": "阿里地区",
	      "zip": "542500"
	    }, {
	      "name": "林芝地区",
	      "zip": "542600"
	    }],
	    "name": "西藏自治区",
	    "zip": "540000"
	  }, {
	    "city": [{
	      "name": "西安市",
	      "zip": "610100"
	    }, {
	      "name": "铜川市",
	      "zip": "610200"
	    }, {
	      "name": "宝鸡市",
	      "zip": "610300"
	    }, {
	      "name": "咸阳市",
	      "zip": "610400"
	    }, {
	      "name": "渭南市",
	      "zip": "610500"
	    }, {
	      "name": "延安市",
	      "zip": "610600"
	    }, {
	      "name": "汉中市",
	      "zip": "610700"
	    }, {
	      "name": "榆林市",
	      "zip": "610800"
	    }, {
	      "name": "安康市",
	      "zip": "610900"
	    }, {
	      "name": "商洛市",
	      "zip": "611000"
	    }],
	    "name": "陕西省",
	    "zip": "610000"
	  }, {
	    "city": [{
	      "name": "兰州市",
	      "zip": "620100"
	    }, {
	      "name": "嘉峪关市",
	      "zip": "620200"
	    }, {
	      "name": "白银市",
	      "zip": "620400"
	    }, {
	      "name": "天水市",
	      "zip": "620500"
	    }, {
	      "name": "武威市",
	      "zip": "620600"
	    }, {
	      "name": "张掖市",
	      "zip": "620700"
	    }, {
	      "name": "平凉市",
	      "zip": "620800"
	    }, {
	      "name": "酒泉市",
	      "zip": "620900"
	    }, {
	      "name": "庆阳市",
	      "zip": "621000"
	    }, {
	      "name": "定西市",
	      "zip": "621100"
	    }, {
	      "name": "陇南市",
	      "zip": "621200"
	    }, {
	      "name": "临夏回族自治州",
	      "zip": "622900"
	    }, {
	      "name": "甘南藏族自治州",
	      "zip": "623000"
	    }],
	    "name": "甘肃省",
	    "zip": "620000"
	  }, {
	    "city": [{
	      "name": "西宁市",
	      "zip": "630100"
	    }, {
	      "name": "海东地区",
	      "zip": "632100"
	    }, {
	      "name": "海北藏族自治州",
	      "zip": "632200"
	    }, {
	      "name": "黄南藏族自治州",
	      "zip": "632300"
	    }, {
	      "name": "海南藏族自治州",
	      "zip": "632500"
	    }, {
	      "name": "果洛藏族自治州",
	      "zip": "632600"
	    }, {
	      "name": "玉树藏族自治州",
	      "zip": "632700"
	    }, {
	      "name": "海西蒙古族藏族自治州",
	      "zip": "632800"
	    }],
	    "name": "青海省",
	    "zip": "630000"
	  }, {
	    "city": [{
	      "name": "银川市",
	      "zip": "640100"
	    }, {
	      "name": "石嘴山市",
	      "zip": "640200"
	    }, {
	      "name": "吴忠市",
	      "zip": "640300"
	    }, {
	      "name": "固原市",
	      "zip": "640400"
	    }, {
	      "name": "中卫市",
	      "zip": "640500"
	    }],
	    "name": "宁夏回族自治区",
	    "zip": "640000"
	  }, {
	    "city": [{
	      "name": "乌鲁木齐市",
	      "zip": "650100"
	    }, {
	      "name": "克拉玛依市",
	      "zip": "650200"
	    }, {
	      "name": "吐鲁番地区",
	      "zip": "652100"
	    }, {
	      "name": "哈密地区",
	      "zip": "652200"
	    }, {
	      "name": "昌吉回族自治州",
	      "zip": "652300"
	    }, {
	      "name": "博尔塔拉蒙古自治州",
	      "zip": "652700"
	    }, {
	      "name": "巴音郭楞蒙古自治州",
	      "zip": "652800"
	    }, {
	      "name": "阿克苏地区",
	      "zip": "652900"
	    }, {
	      "name": "克孜勒苏柯尔克孜自治州",
	      "zip": "653000"
	    }, {
	      "name": "喀什地区",
	      "zip": "653100"
	    }, {
	      "name": "和田地区",
	      "zip": "653200"
	    }, {
	      "name": "伊犁哈萨克自治州",
	      "zip": "654000"
	    }, {
	      "name": "塔城地区",
	      "zip": "654200"
	    }, {
	      "name": "阿勒泰地区",
	      "zip": "654300"
	    }, {
	      "name": "自治区直辖县级行政区划",
	      "zip": "659000"
	    }],
	    "name": "新疆维吾尔自治区",
	    "zip": "650000"
	  }, {
	    "name": "台湾省",
	    "zip": "710000"
	  }, {
	    "name": "香港特别行政区",
	    "zip": "810000"
	  }, {
	    "name": "澳门特别行政区",
	    "zip": "820000"
	  }]
	};

	exports["default"] = city;
	module.exports = exports["default"];

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
	    '主营目的地': [{ name: 'ouzhou', value: '欧洲' }, { name: 'meizhou', value: '美洲' }, { name: 'aouzhou', value: '澳洲' }, { name: 'dayangzhou', value: '大洋洲' }, { name: 'zhongdongfei', value: '中东非' }, { name: 'dongnanya', value: '东南亚' }, { name: 'youlun', value: '邮轮' }, { name: 'haidao', value: '海岛' }, { name: 'riben', value: '日韩' }, { name: 'guoneichangxian', value: '国内长线' }, { name: 'guoneizhoubian', value: '周边短线' }, { name: 'ziyouxing', value: '自由行' }, { name: 'zijiayou', value: '自驾游' }, { name: 'gangaotai', value: '港澳台' }],
	    '主营口岸': [{ name: 'shanghai', value: '上海' }, { name: 'beijing', value: '北京' }, { name: 'tianjin', value: '天津' }, { name: 'hangzhou', value: '杭州' }],
	    //春节，国庆，元旦，暑期，寒假，端午，中秋，家庭游，亲子游，闺蜜游，错峰游，多人立减，早定特惠，周末游，自驾游，自由行，蜜月游，漂流，古镇游，温泉
	    '线路前缀': [{ name: 'duanwu', value: '端午' }, { name: 'shuqi', value: '暑期' }, { name: 'cuofengyou', value: '错峰游' }, { name: 'duorenlijian', value: '多人立减' }, { name: 'zaodinglijian', value: '早定特惠' }, { name: 'chunjie', value: '春节' }, { name: 'guoqing', value: '国庆' }, { name: 'yuandan', value: '元旦' }, { name: 'shujia', value: '暑假' }, { name: 'hanjia', value: '寒假' }, { name: 'zhongqiu', value: '中秋' }, { name: 'jiatingyou', value: '家庭游' }, { name: 'qinziyou', value: '亲子游' }, { name: 'guimiyou', value: '闺蜜游' }, { name: 'zhoumoyou', value: '周末游' }, { name: 'ziyouxing', value: '自由行' }, { name: 'zijiayou', value: '自驾游' }, { name: 'miyueyou', value: '蜜月游' }, { name: 'piaoliu', value: '漂流' }, { name: 'guzhenyou', value: '古镇游' }, { name: 'wenquan', value: '温泉' }],
	    '东南亚': [{ name: '泰国', value: '泰国' }, { name: '曼谷+芭提雅', value: '曼谷+芭提雅' }, { name: '曼谷+芭提雅+普吉岛', value: '曼谷+芭提雅+普吉岛' }, { name: '普吉岛', value: '普吉岛' }, { name: '甲米', value: '甲米' }, { name: '清迈', value: '清迈' }, { name: '甲米+清迈', value: '甲米+清迈' }, { name: '斯米兰岛', value: '斯米兰岛' }, { name: '苏梅岛', value: '苏梅岛' }, { name: '柬埔寨', value: '柬埔寨' }, { name: '柬埔寨+越南', value: '柬埔寨+越南' }, { name: '越南', value: '越南' }, { name: '芽庄', value: '芽庄' }, { name: '岘港', value: '岘港' }, { name: '老挝', value: '老挝' }, { name: '菲律宾', value: '菲律宾' }, { name: '宿雾', value: '宿雾' }, { name: '长滩', value: '长滩' }, { name: '巴厘岛', value: '巴厘岛' }, { name: '兰卡威', value: '兰卡威' }, { name: '新加坡', value: '新加坡' }, { name: '沙巴', value: '沙巴' }, { name: '马来西亚', value: '马来西亚' }],
	    '日本': [{ name: '本州', value: '本州' }, { name: '冲绳', value: '冲绳' }, { name: '东京+大阪+京都', value: '东京+大阪+京都' }, { name: '北海道', value: '北海道' }, { name: '名古屋', value: '名古屋' }, { name: '东京+北海道', value: '东京+北海道' }, { name: '东京+箱根', value: '东京+箱根' }, { name: '九州', value: '九州' }, { name: '鹿儿岛', value: '鹿儿岛' }],
	    '韩国': [{ name: '首尔', value: '首尔' }, { name: '济州', value: '济州' }, { name: '清州+大邱+首尔', value: '清州+大邱+首尔' }, { name: '釜山', value: '釜山' }, { name: '江原道', value: '江原道' }, { name: '首尔+济州', value: '首尔+济州' }],
	    '海岛': [{ name: '普吉岛', value: '普吉岛' }, { name: '夏威夷', value: '夏威夷' }, { name: '塞班', value: '塞班' }, { name: '沙巴', value: '沙巴' }, { name: '岘港', value: '岘港' }, { name: '马尔代夫', value: '马尔代夫' }, { name: '塞舌尔', value: '塞舌尔' }, { name: '毛里求斯', value: '毛里求斯' }, { name: '斯里兰卡', value: '斯里兰卡' }, { name: '巴厘岛', value: '巴厘岛' }, { name: '苏梅岛', value: '苏梅岛' }, { name: '大溪地', value: '大溪地' }, { name: '长滩岛', value: '长滩岛' }, { name: '斐济', value: '斐济' }, { name: '关岛', value: '关岛' }, { name: '普吉岛', value: '普吉岛' }],
	    '欧洲': [{ name: '法国', value: '法国' }, { name: '意大利', value: '意大利' }, { name: '俄罗斯', value: '俄罗斯' }, { name: '瑞士', value: '瑞士' }, { name: '德国', value: '德国' }, { name: '东欧', value: '东欧' }, { name: '英国', value: '英国' }, { name: '荷兰', value: '荷兰' }, { name: '奥地利', value: '奥地利' }, { name: '西班牙+葡萄牙', value: '西班牙+葡萄牙' }, { name: '北欧', value: '北欧' }, { name: '希腊', value: '希腊' }, { name: '冰岛', value: '冰岛' }, { name: '法意瑞', value: '法意瑞' }],
	    '澳新': [{ name: '澳大利亚', value: '澳大利亚' }, { name: '悉尼', value: '悉尼' }, { name: '新西兰', value: '新西兰' }, { name: '大堡礁', value: '大堡礁' }, { name: '澳大利亚+新西兰', value: '澳大利亚+新西兰' }, { name: '皇后镇', value: '皇后镇' }, { name: '奥克兰', value: '奥克兰' }, { name: '基督城', value: '基督城' }],
	    '美洲': [{ name: '美国', value: '美国' }, { name: '加拿大', value: '加拿大' }, { name: '巴西', value: '巴西' }, { name: '阿根廷', value: '阿根廷' }, { name: '墨西哥', value: '墨西哥' }, { name: '夏威夷', value: '夏威夷' }, { name: '关岛', value: '关岛' }, { name: '纽约', value: '纽约' }, { name: '洛杉矶', value: '洛杉矶' }, { name: '拉斯维加斯', value: '拉斯维加斯' }, { name: '旧金山', value: '旧金山' }, { name: '华盛顿', value: '华盛顿' }, { name: '温哥华', value: '温哥华' }],
	    '中东非': [{ name: '阿联酋', value: '阿联酋' }, { name: '迪拜', value: '迪拜' }, { name: '埃及', value: '埃及' }, { name: '肯尼亚', value: '肯尼亚' }, { name: '南非', value: '南非' }, { name: '坦桑尼亚', value: '坦桑尼亚' }, { name: '摩洛哥', value: '摩洛哥' }, { name: '以色列', value: '以色列' }, { name: '毛里求斯', value: '毛里求斯' }, { name: '埃塞俄比亚塞舌尔', value: '埃塞俄比亚塞舌尔' }, { name: '突尼斯', value: '突尼斯' }, { name: '约旦', value: '约旦' }, { name: '伊朗', value: '伊朗' }, { name: '土耳其', value: '土耳其' }],
	    '海南': [{ name: '三亚', value: '三亚' }, { name: '海口', value: '海口' }],
	    '云南': [{ name: '丽江', value: '丽江' }, { name: '昆明', value: '昆明' }, { name: '香格里拉', value: '香格里拉' }, { name: '西双版纳', value: '西双版纳' }, { name: '泸沽湖', value: '泸沽湖' }],
	    '湖南': [{ name: '张家界', value: '张家界' }, { name: '长沙', value: '长沙' }, { name: '韶山', value: '韶山' }],
	    '四川': [{ name: '九寨沟', value: '九寨沟' }, { name: '成都', value: '成都' }, { name: '峨眉山', value: '峨眉山' }, { name: '乐山', value: '乐山' }, { name: '青城山', value: '青城山' }, { name: '海螺沟', value: '海螺沟' }, { name: '都江堰', value: '都江堰' }, { name: '丹巴', value: '丹巴' }, { name: '稻城亚丁', value: '稻城亚丁' }, { name: '若尔盖', value: '若尔盖' }],
	    '广西': [{ name: '桂林', value: '桂林' }, { name: '北海', value: '北海' }, { name: '南宁', value: '南宁' }, { name: '阳朔', value: '阳朔' }, { name: '涠洲岛', value: '涠洲岛' }],
	    '福建': [{ name: '厦门', value: '厦门' }, { name: '福州', value: '福州' }, { name: '鼓浪屿', value: '鼓浪屿' }, { name: '永定土楼', value: '永定土楼' }, { name: '武夷山', value: '武夷山' }],
	    '贵州': [{ name: '黄果树瀑布', value: '黄果树瀑布' }, { name: '贵阳', value: '贵阳' }, { name: '遵义', value: '遵义' }],
	    '西北': [{ name: '敦煌', value: '敦煌' }, { name: '兰州', value: '兰州' }, { name: '西宁', value: '西宁' }, { name: '青海湖', value: '青海湖' }, { name: '银川', value: '银川' }, { name: '中卫', value: '中卫' }, { name: '莫高窟', value: '莫高窟' }],
	    '新疆': [{ name: '吐鲁番', value: '吐鲁番' }, { name: '天山天池', value: '天山天池' }, { name: '乌鲁木齐', value: '乌鲁木齐' }],
	    '内蒙': [{ name: '海拉尔', value: '海拉尔' }, { name: '呼伦贝尔', value: '呼伦贝尔' }, { name: '呼和浩特', value: '呼和浩特' }, { name: '鄂尔多斯', value: '鄂尔多斯' }, { name: '满洲里', value: '满洲里' }],
	    '陕西': [{ name: '西安', value: '西安' }, { name: '延安', value: '延安' }, { name: '华山', value: '华山' }, { name: '壶口瀑布', value: '壶口瀑布' }],
	    '西藏': [{ name: '拉萨', value: '拉萨' }, { name: '林芝', value: '林芝' }],
	    '湖北': [{ name: '三峡', value: '三峡' }, { name: '武汉', value: '武汉' }, { name: '武当山', value: '武当山' }, { name: '神农架', value: '神农架' }, { name: '恩施', value: '恩施' }],
	    '重庆': [{ name: '长江三峡', value: '长江三峡' }, { name: '武隆', value: '武隆' }],
	    '山东': [{ name: '青岛', value: '青岛' }, { name: '烟台', value: '烟台' }, { name: '威海', value: '威海' }, { name: '济南', value: '济南' }, { name: '泰山', value: '泰山' }, { name: '日照', value: '日照' }, { name: '曲阜', value: '曲阜' }, { name: '蓬莱', value: '蓬莱' }],
	    '东北': [{ name: '长白山', value: '长白山' }, { name: '金石滩', value: '金石滩' }, { name: '大连', value: '大连' }, { name: '哈尔滨', value: '哈尔滨' }, { name: '吉林', value: '吉林' }, { name: '中国雪乡', value: '中国雪乡' }, { name: '亚布力滑雪', value: '亚布力滑雪' }, { name: '天池', value: '天池' }],
	    '山西': [{ name: '五台山', value: '五台山' }, { name: '太原', value: '太原' }, { name: '平遥古城', value: '平遥古城' }, { name: '云冈石窟', value: '云冈石窟' }, { name: '大同', value: '大同' }, { name: '乔家大院', value: '乔家大院' }],
	    '河南': [{ name: '洛阳', value: '洛阳' }, { name: '郑州', value: '郑州' }, { name: '开封', value: '开封' }, { name: '少林寺', value: '少林寺' }, { name: '云台山', value: '云台山' }, { name: '安阳', value: '安阳' }, { name: '郭亮村', value: '郭亮村' }],
	    '都市名城': [{ name: '杭州', value: '杭州' }, { name: '南京', value: '南京' }, { name: '苏州', value: '苏州' }, { name: '宁波', value: '宁波' }, { name: '无锡', value: '无锡' }, { name: '常州', value: '常州' }, { name: '景德镇', value: '景德镇' }, { name: '泰州', value: '泰州' }, { name: '奉化', value: '奉化' }, { name: '镇江', value: '镇江' }, { name: '横店', value: '横店' }, { name: '扬州', value: '扬州' }, { name: '上海', value: '上海' }, { name: '合肥', value: '合肥' }, { name: '浙江', value: '浙江' }, { name: '江苏', value: '江苏' }, { name: '江西', value: '江西' }, { name: '安徽', value: '安徽' }, { name: '上海', value: '上海' }],
	    '古镇水乡': [{ name: '乌镇', value: '乌镇' }, { name: '磐安', value: '磐安' }, { name: '安吉', value: '安吉' }, { name: '蛇蟠岛', value: '蛇蟠岛' }, { name: '西塘', value: '西塘' }, { name: '桐庐', value: '桐庐' }, { name: '象山', value: '象山' }, { name: '仙都', value: '仙都' }, { name: '周庄', value: '周庄' }, { name: '临安', value: '临安' }, { name: '石浦', value: '石浦' }, { name: '同里婺源', value: '同里婺源' }, { name: '舟山', value: '舟山' }],
	    '名山大川': [{ name: '大明山', value: '大明山' }, { name: '九华山', value: '九华山' }, { name: '华山', value: '华山' }, { name: '三清山', value: '三清山' }, { name: '雁荡山', value: '雁荡山' }, { name: '普陀山', value: '普陀山' }, { name: '千岛湖', value: '千岛湖' }, { name: '三山岛', value: '三山岛' }, { name: '龙虎山', value: '龙虎山' }, { name: '黄山', value: '黄山' }, { name: '庐山', value: '庐山' }, { name: '天目山', value: '天目山' }, { name: '齐云山', value: '齐云山' }, { name: '天柱山', value: '天柱山' }]
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
	    "团期报价": [{ type: "number", name: "adultCompanyCompetitorPrice", value: "成人同行价" }, { type: "number", name: "childCompanyCompetitorPrice", value: "儿童同行价" }, { type: "number", name: "adultCompanySalePrice", value: "成人销售价" }, { type: "number", name: "childCompanySalePrice", value: "儿童销售价" }, { type: "number", name: "adultCompanyPrice", value: "成人结算价" }, { type: "number", name: "childCompanyPrice", value: "儿童结算价" }, { type: "number", name: "singleRoomDifference", value: "全程单房差" }, { type: "number", name: "totalPeople", value: "入库数" }, { type: "number", name: "minimumPeople", value: "最低成团人数" }, { type: "date", name: "signupStart", value: "报名开始" }],
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
	    "线路分类": ["普通", "促销", "过期"],
	    "酒店标准": ["经济连锁酒店", "二星", "三星", "三星或四星", "四星", "五星", "指定酒店", "指定高星级酒店", "农家乐", "邮轮", "其他"],
	    "交通方式": ["飞机往返", "火车往返", "飞机+火车", "巴士往返", "邮轮", "其他"],
	    "类型": ["跟团游", "自由行", "当地玩乐"],
	    "大区": ["出境游", "国内游", "周边游", "邮轮"],
	    "出发城市": ["上海", "北京", "重庆", "广州", "深圳", "天津", "武汉", "东莞", "香港", "佛山", "成都", "南京", "沈阳", "杭州", "西安", "哈尔滨", "苏州", "青岛", "大连", "郑州"],
	    "出境游": ["东南亚", "日本", "韩国", "海岛", "欧洲", "澳新", "美洲", "中东非", "香港", "澳门", "台湾"],
	    "国内游": ["海南", "云南", "湖南", "北京", "四川", "广西", "福建", "贵州", "西北", "新疆", "内蒙", "陕西", "西藏", "湖北", "重庆", "山东", "东北", "山西", "河南", "长隆", "其他"],
	    "周边游": ["古镇水乡", "名山大川", "都市名城"]
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
	    "团期报价": [{ type: "number", name: "adultCompanySalePrice", key: "成人销售价" }, { type: "number", name: "childCompanySalePrice", key: "儿童销售价" }, { type: "number", name: "adultCompanyCompetitorPrice", key: "成人同行价" }, { type: "number", name: "childCompanyCompetitorPrice", key: "儿童同行价" }, { type: "number", name: "adultCompanyPrice", key: "成人结算价" }, { type: "number", name: "childCompanyPrice", key: "儿童结算价" }, { type: "number", name: "singleRoomDifference", key: "全程单房差" }, { type: "number", name: "totalPeople", key: "入库数" }, { type: "number", name: "minimumPeople", key: "最低成团人数" }, { type: "date", name: "signupStart", key: "报名开始" }],
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
	      dynamicType: '=',
	      isEditing: '=',
	      model: '=ngModel'
	    },
	    link: function link(scope, element, attr) {
	      scope.types = {};
	      scope.options = [];

	      scope.$watch('dynamicType', function (value) {
	        if (value) {
	          scope.options = [];
	          if (value in multiChoiceConfig.data) {
	            scope.options = multiChoiceConfig.data[value];
	          }
	        }
	      });

	      if (attr.type) {
	        scope.options = multiChoiceConfig.data[attr.type];
	      } else {
	        if (scope.dynamicType in multiChoiceConfig.data) {
	          scope.options = multiChoiceConfig.data[scope.dynamicType];
	        }
	      }
	      $log.log(scope.options);
	      for (var i = 0; i < scope.options.length; i++) {
	        scope.options[i].state = false;
	      }

	      // TODO: Model should be the same type.
	      // Now we take into an array and convert to an object.
	      scope.$watch('model', function () {
	        if (Object.prototype.toString.call(scope.model) !== '[object Array]') {
	          return;
	        }

	        for (var i = 0; i < scope.options.length; i++) {
	          var option = scope.options[i];
	          // If option is contained in the model.
	          if (scope.model.indexOf(option.name) >= 0) {
	            option.state = true;
	          }
	        }
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
	        // Copy the model first.
	        var newModel = angular.copy(scope.model);
	        if (scope.model) {
	          scope.setEvents(newModel);
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

	      scope.setEvents = function (newModel) {
	        for (var year in newModel) {
	          $log.log('getting year');
	          var monthEvents = newModel[year];
	          $log.log(monthEvents);
	          for (var i = 0; i < 12; i++) {
	            $log.log(i);
	            if (!(i in monthEvents)) {
	              continue;
	            }
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
	        $log.log('counter value change');
	        $log.log(scope.model);
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
	        scope.$emit('setCurrentPrice');
	      };

	      scope.clear = function () {
	        scope.items.forEach(function (item) {
	          item.value = '';
	          delete scope.model[item.name];
	        });
	        scope.$emit('clearCurrentPrice');
	      };

	      scope.copy = function () {
	        scope.$emit('copy');
	      };

	      scope.paste = function () {
	        scope.$emit('paste');
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
	      scope.provinces = cityData.province;
	      scope.province = '上海市';
	      scope.city = '市辖区';
	      scope.$watch('model', function (model) {
	        scope.province = scope.model.province;
	        var index = scope.findProvinceIndex(scope.province);
	        $log.log(index);
	        if (index < 0) {
	          return;
	        }
	        scope.cities = cityData.province[index].city;
	        scope.city = scope.model.city;
	        scope.detail = scope.model.detail;
	      });

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
	      });

	      scope.cityListener = scope.$watch('city', function (city) {
	        if (!city) {
	          return;
	        }
	        scope.address.city = city;
	      });

	      scope.$watch('detail', function (detail) {
	        if (!detail) {
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

	exports['default'] = ["$log", "authFac", "menuConfig", "userFac", "$rootScope", "$mdSidenav", "$state", "$window", "providerFac", "$uibModal", "productFac", function ($log, authFac, menuConfig, userFac, $rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) {
	  'ngInject';
	  return {
	    restrict: 'E',
	    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
	    replace: true,
	    link: function link(scope, element, attr) {
	      scope.areas = angular.copy(menuConfig.data['大区']);
	      scope.areas.unshift('全部类型');
	      // TODO: Check how many providers we have. If too much, we need to do
	      // index.
	      scope.getProviderList = function () {
	        var query = {};
	        var level = authFac.getUserLevel();
	        // ADMIN or 计调员.
	        scope.isLoading = true;
	        if (level === 0 || level == 3) {
	          providerFac.getProvider(query).then(function (results) {
	            for (var i = 0; i < results.providers.length; i++) {
	              results.providers[i].contactList = results.contacts[i];
	            }
	            scope.filterProviders = scope.providers = results.providers;
	            scope.isLoading = false;
	          }, function (error) {});
	        } else {
	          userFac.getProvider().then(function (result) {
	            $log.log(result);
	            result.provider.contactList = result.contacts;
	            scope.filterProviders = scope.providers = [result.provider];
	            $scope.isLoading = false;
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
	        $log.log(query);
	        if (!query) {
	          $log.log('here');
	          scope.filterProviders = scope.providers;
	          return;
	        }
	        scope.filterProviders = [];
	        scope.providers.forEach(function (provider) {
	          $log.log(provider);
	          provider.nickname = provider.nickname || '';
	          provider.companyname = provider.companyname || '';
	          if (provider.nickname.toLowerCase().indexOf(query) >= 0 || provider.companyname.toLowerCase().indexOf(query) >= 0) {
	            scope.filterProviders.push(provider);
	          }
	        });
	        return scope.filterProviders;
	      };

	      scope.selectProvider = function (selected) {
	        $log.log(selected);
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
	      scope.filterProviders = [];
	      scope.providers = [];
	      scope.getProviderList();

	      scope.$watch('tag', function (value) {
	        $log.log(scope.tag);
	        scope.filterProviders = scope.providers.filter(function (provider) {
	          if (scope.tag == '全部类型') {
	            return true;
	          }
	          $log.log(provider.area);
	          return provider.area == scope.tag;
	        });
	      });
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
	  //username, password, level, email, contactname, cellphone
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

	exports["default"] = ["SweetAlert", "$state", "userFac", "menuConfig", "$log", "$rootScope", "$scope", "$document", "$timeout", "lcConfig", "$window", "providerFac", "fileFac", "Upload", function (SweetAlert, $state, userFac, menuConfig, $log, $rootScope, $scope, $document, $timeout, lcConfig, $window, providerFac, fileFac, Upload) {
	  "ngInject";
	  var url = lcConfig.apiHost + "/api/provider/add";
	  $scope.addUrl = url;
	  $scope.isEditing = true;
	  $scope.areas = menuConfig.data["大区"];
	  $scope.confirmed = false;
	  $scope.contactList = [];
	  $scope.loading = false;
	  if ($state.params.provider) {
	    $scope.provider = $state.params.provider;
	    $rootScope.$broadcast("addressUpdate", { address: $scope.provider.address });
	    $scope.loading = true;
	    providerFac.getContactList($scope.provider.objectId).then(function (results) {
	      $scope.contactList = results;
	      $scope.loading = false;
	    });
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

	  $scope.addContact = function () {
	    userFac.addContact($scope.contactList, $scope.provider.objectId);
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

	exports["default"] = ["$state", "$log", "$scope", "$stateParams", "providerFac", "$document", "$timeout", "lcConfig", "$window", "fileFac", "SweetAlert", function ($state, $log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac, SweetAlert) {
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

	  $scope.edit = function (provider) {
	    $state.go("home.add-provider", { "provider": provider });
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

	exports["default"] = ["$rootScope", "$mdDialog", "authFac", "$log", "$sce", "$state", "$scope", "$uibModal", "userFac", "lcConfig", "$window", "productFac", "orderFac", "formConfig", "providerFac", "menuConfig", "SweetAlert", function ($rootScope, $mdDialog, authFac, $log, $sce, $state, $scope, $uibModal, userFac, lcConfig, $window, productFac, orderFac, formConfig, providerFac, menuConfig, SweetAlert) {
	  "ngInject";
	  $scope.changePass = false;
	  $scope.level = authFac.getUserLevel();
	  $scope.isProvider = authFac.getUserLevel() === lcConfig.userLevel.PROVIDER;
	  $scope.query = {};
	  $scope.categoryList = menuConfig.data["线路分类"];
	  $scope.editProfile = false;

	  $scope.edit = function () {
	    $scope.editProfile = true;
	  };

	  $scope.save = function () {
	    userFac.update($scope.user).then(function (result) {
	      $scope.editProfile = false;
	      SweetAlert.swal("更新成功");
	      return;
	    });
	  };

	  if ($scope.$parent.unfinished) {
	    $scope.unfinished = "(有未处理产品)";
	  }

	  $scope.fetchedProvider = false;
	  $scope.contactList = [];

	  userFac.getCurrentUserInfo().then(function (result) {
	    $scope.user = result;
	  }, function (error) {});

	  providerFac.getMyProvider().then(function (result) {
	    $scope.fetchedProvider = true;
	    // There should be only one provider.
	    $scope.provider = result.provider;
	    $scope.contactList = result.contacts;
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
	    $scope.query = {};
	    $scope.query.myResponsible = true;
	    $scope.query.status = lcConfig.productStatus.UNVERIFIED;
	    $scope.search();
	  };

	  $scope.search = function () {
	    $scope.isLoading = true;
	    $scope.query.index = $scope.currentPage;
	    productFac.searchProduct($scope.query).then(function (results) {
	      $log.log(results);
	      $scope.isLoading = false;
	      $scope.products = results.products;
	      $scope.totalProducts = results.count;
	      $scope.products.forEach(function (product, i) {
	        product.responsible = results.responsible[i];
	        productFac.getLatestTrip(product);
	        $log.log(product);
	        product.updateCategory = false;
	      });
	    }, function (error) {});
	  };

	  $scope.showVerified = function () {
	    $scope.unverified = true;
	    $scope.query = {};
	    $scope.query.myResponsible = true;
	    $scope.query.status = lcConfig.productStatus.VERIFIED;
	    $scope.search();
	  };

	  $scope.showMyProducts = function (category) {
	    $scope.unverified = false;
	    // Construct the query.
	    $scope.query = {};
	    $scope.query.status = lcConfig.productStatus.VERIFIED;
	    $scope.query.self = true;
	    if (category) {
	      $scope.query.category = category;
	    }
	    $scope.search();
	  };

	  $scope.showMyVerifyProducts = function () {
	    $scope.query = {};
	    $scope.query.self = true;
	    $scope.query.status = lcConfig.productStatus.UNVERIFIED;
	    $scope.search();
	  };

	  $scope.showMyUnpostedProducts = function () {
	    $scope.query = {};
	    $scope.query.self = true;
	    $scope.query.status = lcConfig.productStatus.UNPOSTED;
	    $scope.search();
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

	  $scope.clone = function (index) {
	    var product = $scope.products[index];
	    productFac.clone(product.objectId).then(function (value) {
	      SweetAlert.swal("提交成功", "请刷新后进行修改", "success");
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

	  $scope.pageChanged = function () {
	    $scope.products = [];
	    $scope.search();
	  };

	  $scope.updateCategory = function (product) {
	    //if (!product.updateCategory) {
	    //  product.updateCategory = true;
	    //  return;
	    //}
	    // Appending dialog to document.body to cover sidenav in docs app
	    var confirm = $mdDialog.confirm().title("该更改可能会实时更改前台结果,请再次确认.").ok("确认").cancel("取消");
	    $mdDialog.show(confirm).then(function () {
	      productFac.updateCategory(product.objectId, product.category).then(function () {
	        SweetAlert.swal("更新成功", "请通知前台核实", "success");
	      });
	    }, function () {});
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

	exports['default'] = ["$log", "authFac", "SweetAlert", "$state", "$scope", "$stateParams", "commonSer", "providerFac", "$mdSidenav", "$window", "dispatcherConfig", "$uibModal", "lcConfig", "itineraryFac", "productFac", "userFac", "menuConfig", "calendarConfig", function ($log, authFac, SweetAlert, $state, $scope, $stateParams, commonSer, providerFac, $mdSidenav, $window, dispatcherConfig, $uibModal, lcConfig, itineraryFac, productFac, userFac, menuConfig, calendarConfig) {
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
	  $scope.startCities = menuConfig.data['出发城市'];
	  $scope.priceItems = calendarConfig.data['团期报价'];
	  $scope.cachedPrice = {};
	  $scope.existList = [];
	  $scope.toggleLeft();
	  var date = new Date();
	  $scope.test = '2015';
	  $scope.startYear = date.getYear();
	  $scope.startMonth = date.getMonth();
	  productFac.getSelfPaidList().then(function (results) {
	    $scope.existList = results;
	  });

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
	      $scope.startYear = 2018;
	      //$scope.product.contact = result.contact;
	      providerFac.getContactList($scope.product.pickedProvider.objectId).then(function (contactList) {
	        $scope.product.pickedProvider.contactList = contactList;
	        $scope.product.contact = contactList.find(function (contact) {
	          return contact.objectId == result.contact.objectId;
	        });
	      });

	      $scope.$broadcast('updateMaterialCalendar');
	    });
	  }

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

	  $scope.checkProductPrice = function () {
	    var price = $scope.product.price;
	    for (var year in price) {
	      for (var month in price[year]) {
	        for (var day in price[year][month]) {
	          if (Object.keys(price[year][month][day]).length > 3) {
	            return true;
	          }
	        }
	      }
	    }
	    return false;
	  };

	  $scope.submitProduct = function () {
	    $log.log($scope.product);
	    // Check if price exists.
	    if (!$scope.checkProductPrice()) {
	      SweetAlert.swal('发布失败', '至少输入一个团期', 'error');
	      return;
	    }
	    productFac.uploadProduct($scope.product).then(function (result) {
	      SweetAlert.swal({
	        title: '发布成功',
	        text: '请到我的账号中我发布的产品去查看更新.',
	        type: 'success',
	        confirmButtonText: '确认',
	        closeOnConfirm: true }, function () {
	        $state.go('home');
	      });
	    }, function (error) {
	      SweetAlert.swal('发布失败', ' 请重新登陆.', 'error');
	    });
	  };

	  function buildToggler(navID) {
	    return function () {
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
	    for (var i = 0; i < result.length; i++) {
	      $scope.responses.push(result[i]);
	    }
	    if (authFac.getUserLevel() == lcConfig.userLevel.ORGANIZER) {
	      $scope.responses = $scope.responses.filter(function (response) {
	        return response.objectId == authFac.getUser().id;
	      });
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

	  $scope.clearPrice = function () {
	    var year = $scope.currentPrice.year;
	    var month = $scope.currentPrice.month;
	    var day = $scope.currentPrice.day;
	    $scope.currentPrice = {};
	    $scope.currentPrice.year = year;
	    $scope.currentPrice.month = month;
	    $scope.currentPrice.day = day;
	    delete $scope.product.price[year][month][day];
	  };

	  $scope.setPrice = function () {
	    var year = $scope.currentPrice.year;
	    var month = $scope.currentPrice.month;
	    var day = $scope.currentPrice.day;
	    if ($scope.currentPrice && Object.keys($scope.currentPrice).length > 0) {
	      commonSer.addProps($scope.product.price, [year, month, day], $scope.currentPrice);
	    }
	  };

	  $scope.$on('copy', function () {
	    // Set day content.
	    $scope.cachedPrice = angular.copy($scope.currentPrice);
	  }, true);

	  $scope.$on('paste', function () {
	    // Set day content.
	    if ($scope.cachedPrice) {
	      // Keep the year, month, day
	      var year = $scope.currentPrice.year;
	      var month = $scope.currentPrice.month;
	      var day = $scope.currentPrice.day;
	      $scope.currentPrice = angular.copy($scope.cachedPrice);
	      $scope.currentPrice.year = year;
	      $scope.currentPrice.month = month;
	      $scope.currentPrice.day = day;
	      $scope.$broadcast('updateMaterialCalendar');
	    }
	  }, true);

	  $scope.$on('setCurrentPrice', function () {
	    // Set day content.
	    if ($scope.currentPrice) {
	      $scope.setPrice();
	      $scope.$broadcast('updateMaterialCalendar');
	    }
	  }, true);

	  $scope.$on('clearCurrentPrice', function () {
	    // Set day content.
	    if ($scope.currentPrice) {
	      $scope.clearPrice();
	      $scope.$broadcast('updateMaterialCalendar');
	    }
	  }, true);

	  $scope.createList = function () {
	    if (!$scope.product.newList.name) {
	      SweetAlert.swal('请输入列表名称');
	      return;
	    }
	    var newList = { name: $scope.product.newList.name, items: [] };
	    $scope.existList.push(newList);
	    $scope.product.selfPaidList = newList;
	  };

	  $scope.addItem = function (item) {
	    var newItem = angular.copy(item);
	    $scope.product.selfPaidList.items.push(newItem);
	  };

	  $scope.deleteItem = function (index) {
	    $scope.product.selfPaidList.items.splice(index, 1);
	  };

	  $scope.save = function () {
	    productFac.uploadProduct($scope.product).then(function (result) {
	      $scope.product.objectId = result.objectId;
	      SweetAlert.swal('保存成功', '请继续操作', 'success');
	      return;
	    });
	  };

	  $scope.$watch('product.area', function (value) {
	    $scope.subareas = menuConfig.data[value];
	  });
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
	  $log.log("fucking doing this");
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

	exports["default"] = ["SweetAlert", "$state", "errorFac", "lcConfig", "$location", "$scope", "$window", "$log", "commonSer", "helloSer", "authFac", function (SweetAlert, $state, errorFac, lcConfig, $location, $scope, $window, $log, commonSer, helloSer, authFac) {
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

	  $scope.clear = function () {
	    $scope.email = "";
	    $scope.username = "";
	    $scope.password = "";
	    $scope.contactname = "";
	    $scope.cellphone = "";
	    $scope.level = 1;
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
	      $scope.clear();
	      $state.go("home");
	    }, function (error) {
	      $log.log(error.code);
	      SweetAlert.swal("注册失败", "错误信息: " + errorFac.getErrorMessage(error.code), "warning");
	      $scope.clear();
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

	exports["default"] = ["$sce", "$scope", "$state", "$log", "$mdSidenav", "$window", "$uibModal", "$activityIndicator", "lcConfig", "itineraryFac", "productFac", "menuConfig", "providerFac", function ($sce, $scope, $state, $log, $mdSidenav, $window, $uibModal, $activityIndicator, lcConfig, itineraryFac, productFac, menuConfig, providerFac) {
	  "ngInject";

	  $scope.selectedTags = {};

	  $scope.index = {
	    "出发城市": -1,
	    "酒店标准": -1,
	    "交通方式": -1,
	    "类型": -1,
	    "供应商": -1,
	    "行程天数": -1,
	    "大区": -1,
	    "分区": -1
	  };

	  $scope.tags = {
	    "出发城市": menuConfig.data["出发城市"],
	    "酒店标准": menuConfig.data["酒店标准"],
	    "交通方式": menuConfig.data["交通方式"],
	    "类型": menuConfig.data["类型"],
	    "大区": menuConfig.data["大区"],
	    "分区": [],
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
	    $scope.products = [];
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

	    if ($scope.currentPage) {
	      query.index = $scope.currentPage;
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

	    // Set start date.
	    if (!query.startDate) {
	      var date = new Date();
	      query.startDate = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
	    }

	    $activityIndicator.startAnimating();
	    productFac.searchProduct(query).then(function (results) {
	      $log.log("success");
	      $log.log(results);
	      $activityIndicator.stopAnimating();
	      $scope.totalProducts = results.count;
	      $scope.products = results.products;
	      $scope.products = $scope.products.filter(function (product) {
	        product.prefixArray = productFac.convertProductPrefix(product.prefix);
	        if (product.itineraryFile) {
	          product.fileUrl = $sce.trustAsResourceUrl(product.itineraryFile.url);
	        }
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
	    if (key == "大区") {
	      $scope.tags["分区"] = menuConfig.data[$scope.selectedTags[key]];
	    }
	  };

	  $scope.removeTag = function (key) {
	    // Need to update index.
	    delete $scope.selectedTags[key];
	    $scope.index[key] = -1;
	  };

	  $scope.pageChanged = function () {
	    $scope.search();
	  };

	  function getKeyName(key) {
	    switch (key) {
	      case "酒店标准":
	        return "hotelStandard";
	      case "交通方式":
	        return "transph4tStandard";
	      case "类型":
	        return "type";
	      case "行程天数":
	        return "stopDay";
	      case "供应商":
	        return "provider";
	      case "大区":
	        return "area";
	      case "分区":
	        return "subarea";
	      case "出发城市":
	        return "start";
	      default:
	        return "";
	    }
	  }
	}];

	module.exports = exports["default"];

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
	    $log.log("getting result finish*****");
	    // Set the current Date.
	    $scope.updatePriceMap();
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

	  $scope.updatePriceMap = function () {
	    var price = $scope.product.price;
	    for (var year in price) {
	      for (var month in price[year]) {
	        for (var day in price[year][month]) {
	          var currentPrice = productFac.getPrice(year, month, day, $scope.product);
	          if (currentPrice) {
	            var date = new Date(year, month, day);
	            $scope.priceMap[date] = currentPrice;
	          }
	        }
	      }
	    }
	  };

	  $scope.setDayContent = function (date) {
	    var price = $scope.priceMap[date];
	    if (price) {
	      if (price.adultCompanySalePrice) {
	        return "<div class=\"price-container\"><p class=\"cal-price\">" + "销售价: ￥" + price.adultCompanySalePrice + "</p>" + "<p class=\"cal-price next\">" + "同行价: ￥" + price.adultCompanyCompetitorPrice + "</p>" + "<p class=\"cal-price second\">" + "余位: " + price.restPeopleNumber + "</p></div>";
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
	  $scope.isEditing = false;
	  if ($state.params.orderId) {
	    $scope.isEditing = $state.params.isEditing;
	    orderFac.getOrder($state.params.orderId).then(function (result) {
	      $scope.order = result.order;
	      $scope.order.date = result.order.startDate;
	      $scope.product = result.product;
	      $scope.product.platformcontact = result.platformcontact;
	    });
	  } else {
	    initFromScratch();
	  }

	  function initFromScratch() {
	    $scope.reserve = $state.params.reserve;
	    $scope.product = $state.params.product;
	    var productId = $state.params.productId;
	    $scope.order.price = $scope.reserve.price;
	    $scope.order.date = $scope.reserve.date;
	    $scope.order.adult = $scope.reserve.adult || 0;
	    $scope.order.child = $scope.reserve.child || 0;
	    if (!$scope.order) {
	      $scope.order = {};
	    }
	    $scope.order.customers = [];
	    $scope.order.extraItems = [];
	    var length = 0;
	    if ($scope.order) {
	      length = $scope.order.adult + $scope.order.child;
	    }
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
	  }

	  $scope.$watch("order.adult", function (newValue, oldValue) {
	    if ($scope.isEditing) {
	      $scope.isEditing = false;
	      return;
	    }
	    $scope.updateTotalPrice();
	    if (oldValue < newValue) {
	      $scope.order.customers.push({});
	    } else if (oldValue > newValue) {
	      $scope.order.customers.pop();
	    }
	  });

	  $scope.$watch("order.child", function (newValue, oldValue) {
	    if ($scope.isEditing) {
	      $scope.isEditing = false;
	      return;
	    }
	    $scope.updateTotalPrice();
	    if (oldValue < newValue) {
	      $scope.order.customers.push({});
	    } else if (oldValue > newValue) {
	      $scope.order.customers.pop();
	    }
	  });

	  $scope.$watch("order.customers", function (newValue, oldValue) {
	    $log.log($scope.order.customers);
	    $scope.order.extraRoomNumber = 0;
	    for (var index in $scope.order.customers) {
	      var customer = $scope.order.customers[index];
	      if (customer.needExtra) {
	        $scope.order.extraRoomNumber++;
	      }
	    }
	    $scope.updateTotalPrice();
	  }, true);

	  $scope.updateTotalPrice = function () {
	    if ($scope.order && $scope.order.price) {
	      $scope.order.totalPrice = $scope.order.adult * $scope.order.price.adultCompanySalePrice + $scope.order.child * $scope.order.price.childCompanySalePrice;
	      if ($scope.order.extraRoomNumber) {
	        $scope.order.totalPrice += $scope.order.extraRoomNumber * $scope.order.price.singleRoomDifference;
	      }
	      for (var i = 0; i < $scope.order.extraItems.length; i++) {
	        $scope.order.totalPrice += $scope.order.extraItems[i].totalPrice;
	      }
	    } else {
	      $scope.order = {};
	      $scope.order.totalPrice = 0;
	    }
	  };

	  $scope.submitOrder = function () {
	    $scope.order.productId = $scope.product.objectId;
	    orderFac.submitOrder($scope.order, $scope.reserve).then(function (result) {
	      $log.log("success");
	      SweetAlert.swal("订单成功", "订单编号: " + result.objectId + " 请及时联系平台负责人确认订单情况.", "success");
	      $state.go("sale");
	    }, function (error) {
	      SweetAlert.swal("订单添加失败", "请联系计调员确认是否有余位", "warning");
	    });
	  };

	  $scope.addItem = function () {
	    var extraItem = $scope.extraItem;
	    if (!(extraItem.name && extraItem.count && extraItem.price)) {
	      SweetAlert.swal("请完整输入补差价项目", "", "warning");
	      return;
	    }

	    extraItem.totalPrice = extraItem.count * extraItem.price;
	    $scope.order.totalPrice += extraItem.totalPrice;
	    $scope.order.extraItems.push(extraItem);
	    $scope.extraItem = {};
	  };

	  $scope.deleteItem = function (index) {
	    var extraItem = $scope.order.extraItems[index];
	    $scope.order.totalPrice -= extraItem.totalPrice;
	    $scope.order.extraItems.splice(index, 1);
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
	  $scope.orderStatus = lcConfig.orderStatus;
	  $scope.admin = $scope.level == lcConfig.orderStatus.ADMIN;
	  $scope.isLoading = false;
	  $scope.count = {};
	  // Init.
	  userFac.getSaleusers().then(function (results) {
	    $scope.saleList = results;
	  });

	  orderFac.getCount().then(function (results) {
	    var index = 0;
	    for (var i in lcConfig.orderStatus) {
	      $scope.count[lcConfig.orderStatus[i]] = results[index];
	      index++;
	    }
	  });

	  $scope.search = function () {
	    $scope.allOrder($scope.currentStatus);
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

	  $scope.allOrder = function (status) {
	    // Clean up the orders first because we are getting the new ones.
	    $scope.orders = [];
	    $scope.isLoading = true;
	    if ($scope.currentStatus != status) {
	      // Clean query.
	      $scope.query = {};
	    }
	    $scope.currentStatus = status;
	    orderFac.getAllOrder(status, $scope.currentPage - 1, $scope.query).then(function (results) {
	      $log.log(results);
	      $scope.setOrder(results);
	      $scope.totalOrders = results.count;
	      $scope.isLoading = false;
	    });
	  };

	  $scope.showDetail = function (order) {
	    $state.go('sale.show-order-detail', { orderId: orderId, isEditign: false });
	  };

	  $scope.paid = function (order) {
	    orderFac.update(order, lcConfig.orderStatus.PAID).then(function (result) {
	      SweetAlert.swal('订单付款成功', 'success');
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

	  $scope.editOrder = function (orderId) {
	    $state.go('sale.add-order', { orderId: orderId, isEditing: true });
	  };

	  $scope.pageChanged = function () {
	    $log.log($scope.currentPage);
	    $scope.allOrder($scope.currentStatus);
	  };

	  $scope.cancelUnpaid = function (order) {
	    SweetAlert.swal({
	      title: '取消该未付款订单',
	      text: '该操作不可取消,完成后请与分销商确认',
	      type: 'warning',
	      showCancelButton: true,
	      confirmButtonColor: '#DD6B55', confirmButtonText: '确认取消',
	      cancelButtonText: '取消该操作',
	      closeOnConfirm: true,
	      closeOnCancel: true }, function (isConfirm) {
	      if (isConfirm) {
	        $scope.cancelOrder(order);
	      } else {}
	    });
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = ["userFac", "$state", "$log", "$scope", "$stateParams", "providerFac", "$document", "$timeout", "lcConfig", "$window", "fileFac", "SweetAlert", function (userFac, $state, $log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac, SweetAlert) {
	  "ngInject";

	  $scope.updateEmployee = function (employee) {
	    var id = employee.objectId;
	    var countData = $scope.employeeMap[id];
	    employee.providerCount = countData["provider"]["all"];
	    employee.productVerifiedCount = countData["product"][lcConfig.productStatus.VERIFIED];
	    employee.productUnvierifedCount = countData["product"][lcConfig.productStatus.UNVERIFIED];
	    employee.productUnpostedCount = countData["product"][lcConfig.productStatus.UNPOSTED];
	    employee.finishOrderCount = countData["order"][lcConfig.orderStatus.FINISHED];
	    employee.cancelOrderCount = countData["order"][lcConfig.orderStatus.CANCELLED];
	  };

	  $scope.search = function () {
	    $log.log($scope.query);
	    userFac.getEmployeeList(["provider", "product", "order"], $scope.query).then(function (results) {
	      $scope.employeeList = results.employeeList;
	      $scope.employeeMap = results.employeeMap;
	      $log.log(results);
	      $scope.employeeList.forEach(function (employee) {
	        // Update each employee.
	        $scope.updateEmployee(employee);
	      });
	    });
	  };
	}];

	module.exports = exports["default"];

/***/ },
/* 57 */
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
	  service.getUser = getUser;
	  return service;

	  function getUser() {
	    var cookie = $cookies.get('user');
	    service.cookie = JSON.parse(cookie);
	    return service.cookie;
	  }

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
/* 58 */
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
/* 59 */
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
/* 60 */
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
	  service.getSelfPaidList = getSelfPaidList;
	  service.updateCategory = updateCategory;
	  service.clone = clone;
	  return service;

	  // A sperate function to imporve performance.
	  function updateCategory(productId, category) {
	    return $http.post('/api/product/updateCategory', { productId: productId, category: category });
	  }

	  function uploadProduct(product) {
	    // Handle all the serilize things here.
	    // Save an additional field to accerlate search speed.
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
	    if (!product.stopDay) {
	      product.stopDay = 0;
	    }
	    var price = product.price;
	    var date = new Date();
	    date.setDate(date.getDate() + product.stopDay);
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var day = date.getDate();
	    removeExpiredPrice(product);

	    product.priceDate = [];
	    product.priceArray = [];
	    for (var year in price) {
	      for (var month = 0; month < 12; month++) {
	        if (!price[year][month]) {
	          continue;
	        }
	        for (var day = 1; day <= 31; day++) {
	          var event = price[year][month][day];
	          if (event && Object.keys(event).length > 1) {
	            var dateString = year + '年' + (month + 1) + '月' + day + '日';
	            var priceObject = {};
	            priceObject.startDate = dateString;
	            priceObject.adultCompanySalePrice = event.adultCompanySalePrice;
	            priceObject.restPeopleNumber = event.restPeopleNumber;
	            product.priceArray.push(priceObject);
	            product.priceDate.push(dateString);
	            if (!product.latestAdultCompanySalePrice) {
	              product.latestAdultCompanySalePrice = 99999999;
	            }
	            product.latestAdultCompanySalePrice = Math.min(product.latestAdultCompanySalePrice, event.adultCompanySalePrice);
	          }
	        }
	      }
	    }
	    $log.log(product.priceDate);
	    if (product.priceDate.length > 0) {
	      return true;
	    }
	    return false;
	  }

	  function removeExpiredPrice(product) {
	    var date = new Date();
	    if (!product.stopDay) {
	      product.stopDay = 0;
	    }
	    date.setDate(date.getDate() + product.stopDay);
	    for (var year in product.price) {
	      for (var month in product.price[year]) {
	        for (var day in product.price[year][month]) {
	          var newDate = new Date(year, month, day);
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
	        startDay = 1;
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

	  function getSelfPaidList() {
	    return $http.post('/api/product/getSelfPaid');
	  }

	  function clone(productId) {
	    return $http.post('/api/product/clone', { productId: productId });
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
/* 62 */
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
/* 63 */
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
	  service.update = update;
	  service.getEmployeeList = getEmployeeList;
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

	  function update(user) {
	    return $http.post('/api/user/update', { user: user });
	  }

	  function addContact(contactList, providerId) {
	    var items = angular.copy(formConfig.data['商户联系人']);
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
	      if (providerId) {
	        addContactList(contact).then(function (result) {
	          contactList.push(result);
	        });
	      }
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
	    if (providerId) {
	      contact.providerId = providerId;
	    }
	    return contact;
	  }

	  function getProvider() {
	    return $http.post('/api/user/getProvider');
	  }

	  // User a const value maybe.
	  function getSaleusers() {
	    return $http.post('/api/user/get', { query: { level: [lcConfig.userLevel.SALE] } });
	  }

	  // Include: ["provider", "product", "order"].
	  function getEmployeeList(include, options) {
	    var query = { level: [lcConfig.userLevel.ORGANIZER] };
	    options = options || {};
	    if (options.startDate) {
	      query.startDate = options.startDate;
	    }
	    if (options.endDate) {
	      query.endDate = options.endDate;
	    }
	    return $http.post('/api/user/get', { include: include, query: query });
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 64 */
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
	  service.getOrder = getOrder;
	  service.cancelOrder = cancelOrder;
	  service.revokeOrder = revokeOrder;
	  service.update = update;
	  service.search = search;
	  service.cancelUnpaidOrder = cancelUnpaidOrder;
	  service.updateCustomerInfo = updateCustomerInfo;
	  service.getCount = getCount;
	  return service;

	  function submitOrder(order, customers) {
	    $log.log('submitOrder');
	    return $http.post('/api/order/add', { order: order, customers: customers });
	  }

	  function updateCustomerInfo(order) {
	    return $http.post('/api/order/update', { id: order.objectId, customers: order.customers });
	  }

	  function getAllOrder(status, index, query) {
	    if (!index) {
	      index = 0;
	    }
	    if (!query) {
	      query = {};
	    }
	    if (!status) {
	      return $http.post('/api/order/getAll', { index: index, query: query });
	    } else {
	      return $http.post('/api/order/getAll', { status: status, index: index, query: query });
	    }
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

	  function update(order, status) {
	    return $http.post('/api/order/update', { id: order.objectId, status: status });
	  }

	  function search(query) {
	    return $http.post('/api/order/search', { query: query });
	  }

	  function getCount() {
	    return $http.post('/api/order/getCount');
	  }
	}];

	module.exports = exports['default'];

/***/ },
/* 65 */
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
/* 66 */
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
	      case 202:
	        return "用户名已经被占用";
	      case 203:
	        return "电子邮箱地址已经被占用";
	    }
	    return "";
	  }
	};

	module.exports = exports["default"];

/***/ },
/* 67 */
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
/* 68 */
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
/* 69 */
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
$templateCache.put("app/auth/home/home.html","<nav class=\"navbar navbar-inverse\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" ui-sref=\"#\">上海和和国际旅行社</a></div><ul class=\"nav navbar-nav\"><li><a ui-sref=\".add-product\">发布产品</a></li><li ng-if=\"level == 0\"><a ui-sref=\".show-products\">产品管理</a></li><li ng-if=\"level == 0 || level == 3\"><a ui-sref=\".show-providers\">供应商管理</a></li><li ng-if=\"level == 0\"><a ui-sref=\".show-employees\">计调管理</a></li><li ng-if=\"level == 3\"><a ui-sref=\".add-provider\">添加供应商</a></li><li ng-if=\"level == 0 || level == 2\"><a ui-sref=\".show-orders\">订单管理</a></li><li ng-if=\"level == 3\"><a ui-sref=\".show-orders\">订单审核</a></li><li ng-if=\"level == 0\"><a id=\"add-account\" ui-sref=\".add-provider-account\">添加账号</a></li><li ng-class=\"{\'unfinished\':unfinished}\"><span class=\"dot\"></span> <a ui-sref=\".my-account\">我的账号</a></li><li><a ng-click=\"logout();\">退出登录</a></li></ul></nav><div ui-view=\"\"></div>");
$templateCache.put("app/auth/home/login.html","<div style=\"text-align: center;\"><div style=\"width: 400px; display: inline-block;\"><h2 class=\"form-signin-heading\">上海和和国际旅行社</h2><label for=\"inputEmail\" class=\"sr-only\">用户名</label> <input ng-model=\"username\" type=\"text\" class=\"form-control\" placeholder=\"用户名\"> <label for=\"inputPassword\" class=\"sr-only\">密码</label> <input ng-model=\"password\" type=\"password\" class=\"form-control\" placeholder=\"密码\"> <button class=\"btn btn-lg btn-primary btn-block login\" id=\"register\" type=\"button\" ng-click=\"login();\">登陆</button></div></div>");
$templateCache.put("app/common/account/account.html","<div class=\"section\"><md-content><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"我的账号\"><table><tr><td>用户名</td><td>{{ user.username }}</td></tr><tr ng-if=\"editProfile\"><td>密码</td><td><md-button ng-click=\"changePass();\" class=\"md-raised md-primary\">更改密码</md-button></td></tr><tr><td>姓名</td><td><div ng-if=\"!editProfile\">{{ user.contactname }}</div><div ng-if=\"editProfile\"><input ng-model=\"user.contactname\"></div></td></tr><tr><td>邮箱</td><td><div ng-if=\"!editProfile\">{{ user.email }}</div><div ng-if=\"editProfile\"><input ng-model=\"user.email\"></div></td></tr><tr><td>手机</td><td><div ng-if=\"!editProfile\">{{ user.cellphone }}</div><div ng-if=\"editProfile\"><input ng-model=\"user.cellphone\"></div></td></tr></table><md-button ng-if=\"!editProfile\" ng-click=\"edit();\" class=\"md-raised md-primary\">更改信息</md-button><md-button ng-if=\"editProfile\" ng-click=\"save();\" class=\"md-raised md-primary\">确定</md-button></md-tab><md-tab class=\"dot\" label=\"我的产品\"><section layout=\"row\" flex=\"\"><md-sidenav class=\"md-sidenav-left shadow show-product-nav\" md-component-id=\"showProduct\" md-is-locked-open=\"true\" md-disable-backdrop=\"\" md-whiteframe=\"4\"><div class=\"sidebar-button\"><md-button ng-click=\"showMyProducts()\" class=\"md-primary\">常规产品(已上架)</md-button><md-button ng-click=\"showMyProducts(\'促销\')\" class=\"md-primary\">促销产品(已上架)</md-button><md-button ng-click=\"showMyProducts(\'过期\')\" class=\"md-primary\">过期产品(已上架)</md-button><md-button ng-click=\"showMyVerifyProducts();\" class=\"md-primary\">正在审核的产品</md-button><md-button ng-click=\"showMyUnpostedProducts();\" class=\"md-primary\">下架产品(可修改产品)</md-button><md-button ng-if=\"level == 0 || level == 3\" ng-click=\"showUnverified()\" class=\"md-primary\">需要我审核的产品</md-button><md-button ng-if=\"level == 0 || level == 3\" ng-click=\"showVerified()\" class=\"md-primary\">我审核过的产品</md-button></div></md-sidenav><md-content flex=\"\" layout-padding=\"\"><table cellspacing=\"0\" cellpadding=\"0\" class=\"account-product\"><tr><th style=\"width: 100px;\">产品编号</th><th style=\"width: 150px;\">产品名称</th><th style=\"width: 100px;\">最近出发班期</th><th style=\"width: 100px;\">负责人</th><th style=\"width: 50px;\">详情</th><th style=\"width: 50px;\">状态</th><th style=\"width: 100px;\">分类</th><th style=\"width: 100px;\">操作</th></tr><tr ng-repeat=\"product in products\"><td style=\"width: 100px;\">{{ product.productId }}</td><td style=\"width: 150px;\">{{ product.productName }}</td><td style=\"width: 100px;\"><p ng-repeat=\"date in product.priceDate\" ng-show=\"$index<3\">{{ date }}</p></td><td style=\"width: 100px;\">{{ product.responsible.contactname }}</td><td style=\"width: 50px;\"><a target=\"_blank\" ui-sref=\"home.show-product-detail({productId: \'{{product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a></td><td style=\"width: 50px;\"><p ng-if=\"product.status == 1\">下架</p><p ng-if=\"product.status == 2\">未审核</p><p ng-if=\"product.status == 3\">已审核</p></td><td style=\"width: 100px;\"><md-input-container style=\"width: 80px;\"><md-select ng-model=\"product.category\" ng-change=\"updateCategory(product);\"><md-option ng-value=\"category\" ng-repeat=\"category in categoryList\">{{category}}</md-option></md-select></md-input-container></td><td style=\"width: 100px;\"><md-button class=\"md-raised md-primary\" ng-click=\"post($index);\" ng-if=\"product.status == 1\">提交审核</md-button><md-button class=\"md-raised md-primary\" ng-click=\"clone($index);\">复制线路</md-button><md-button class=\"md-raised md-primary\" ng-click=\"deleteProduct($index);\" ng-if=\"product.status == 1\">删除产品</md-button><md-button class=\"md-raised md-primary\" ng-click=\"editProduct($index);\" ng-if=\"product.status == 1\">修改</md-button><md-button class=\"md-raised md-primary\" ng-click=\"editProduct($index);\" ng-if=\"product.status == 2 && !unverified\">修改</md-button><md-button class=\"md-raised md-primary\" ng-click=\"verify($index);\" ng-if=\"product.status == 2 && unverified\">通过审核</md-button><md-button class=\"md-raised md-primary\" ng-click=\"unPost($index);\" ng-if=\"product.status == 3\">下架</md-button></td></tr></table><p ng-if=\"isLoading\">正在加载...请稍等</p><ul uib-pagination=\"\" total-items=\"totalProducts\" items-per-page=\"10\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></ul></md-content></section></md-tab><md-tab ng-if=\"isProvider\" label=\"供应商管理\"><section layout=\"row\" flex=\"\"><md-sidenav class=\"md-sidenav-left shadow\" md-component-id=\"showProvider\" md-is-locked-open=\"true\" md-disable-backdrop=\"\" md-whiteframe=\"4\"><div class=\"sidebar-button\"><md-button ng-disabled=\"!fetchedProvider\" ng-click=\"showMyContactList()\" class=\"md-primary\">商户联系人管理</md-button><md-button ng-disabled=\"!fetchedProvider\" ng-click=\"showMyProvider()\" class=\"md-primary\">显示供应商信息</md-button><md-button ng-disabled=\"!fetchedProvider\" ng-click=\"addMyProvider()\" class=\"md-primary\">设置供应商信息</md-button></div></md-sidenav><md-content flex=\"\" layout-padding=\"\"><table ng-if=\"showContactList\"><tr><th>姓名</th><th>手机</th><th>座机</th><th>职位</th><th>QQ</th><th>微信</th><th>操作</th></tr><tr ng-repeat=\"contact in contactList\"><td>{{ contact.contactname }}</td><td>{{ contact.cellphone }}</td><td>{{ contact.homephone }}</td><td>{{ contact.position }}</td><td>{{ contact.qqnumber }}</td><td>{{ contact.wechat }}</td><td><a href=\"#\" ng-click=\"editContact($index)\">编辑</a> / <a href=\"#\" ng-click=\"deleteContact($index)\">删除</a></td></tr></table><div class=\"submit\"><md-button ng-if=\"showContactList\" ng-click=\"addContact();\" class=\"md-raised md-primary\">添加商户联系人</md-button></div><table ng-show=\"showProvider\"><tbody><tr><td colspan=\"2\" class=\"title\">公司信息</td></tr><tr><td>品牌名称</td><td>{{ currentProvider.nickname }}</td></tr><tr><td>公司名称</td><td>{{ currentProvider.companyname }}</td></tr><tr><td>地址</td><td>{{ provider.address }}</td></tr><tr><td>营业执照</td><td><a href=\"{{ provider.fileUrl }}\">显示证书</a></td></tr><tr><td colspan=\"2\" class=\"title\">主营业务</td></tr><tr><td>主营目的地</td><td><multi-choice is-editing=\"false\" type=\"主营目的地\" ng-if=\"testing1\" ng-model=\"testing1\"></multi-choice></td></tr><tr><td>主营口岸</td><td><multi-choice is-editing=\"false\" type=\"主营口岸\" ng-if=\"testing2\" ng-model=\"testing2\" other=\"true\"></multi-choice></td></tr><tr><td colspan=\"2\" class=\"title\">业务资源</td></tr><tr><td>航班资源</td><td><textarea ng-disabled=\"true\" class=\"msd-elastic\" ng-model=\"currentProvider.flightResource\"></textarea></td></tr><tr><td>收客情况</td><td><textarea ng-disabled=\"true\" class=\"msd-elastic\" ng-model=\"currentProvider.customerResource\"></textarea></td></tr><tr><td>产品优势</td><td><textarea ng-disabled=\"true\" class=\"msd-elastic\" ng-model=\"currentProvider.productResource\"></textarea></td></tr><tr><td colspan=\"2\" class=\"title\">合作支持</td></tr><tr><td>加返政策</td><td><div layout=\"row\"><div>全年总人数:<p>{{ currentProvider.returnPolicy.returnTotalPeople }}</p>(人)</div><div>加返<p>{{ currentProvider.returnPolicy.returnMoneyEachPeople }}</p>(元/人)</div></div><div layout=\"row\"><div>全年销售额:<p>{{ currentProvider.returnPolicy.returnTotalRevenue }}</p>(元)</div><div>加返<p>{{ currentProvider.returnPolicy.returnMoneyRevenue }}</p>(元)</div></div></td></tr></tbody></table></md-content></section></md-tab></md-tabs></md-content></div>");
$templateCache.put("app/common/employee/show.html","<table class=\"organizer-search search-option\"><tr><td style=\"width: 200px;\">搜索日期</td><td><span ng-class=\"{\'selected-tag\': !showDate}\" ng-click=\"showDate = false\" class=\"unlimited\">不限</span> <span ng-class=\"{\'selected-tag\': showDate}\" ng-click=\"showDate = true\" class=\"unlimited\">选择搜索日期</span><div ng-show=\"showDate\" class=\"date-wrapper\" layout=\"row\"><input ng-model=\"query.startDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"><div class=\"separator\">-</div><input ng-model=\"query.endDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"></div><md-button class=\"md-raised md-primary search-button\" ng-click=\"search();\">确认搜索</md-button></td></tr></table><table class=\"organizer-table\"><tr><th>姓名</th><th>供应商数量</th><th>产品数量</th><th>订单数</th></tr><tr ng-repeat=\"employee in employeeList\"><td>{{ employee.contactname }}</td><td>{{ employee.providerCount }}</td><td><div>已上架:<strong>{{ employee.productVerifiedCount }}</strong></div><div>在审核:<strong>{{ employee.productUnvierifedCount }}</strong></div><div>下架:<strong>{{ employee.productUnpostedCount }}</strong></div></td><td><div>已完成订单数: <strong>{{ employee.finishOrderCount }}</strong></div><div>已取消订单数: <strong>{{ employee.cancelOrderCount }}</strong></div></td></tr></table>");
$templateCache.put("app/common/header/header.html","<div class=\"common-header-module\"><div class=\"header-content\"><div class=\"logo\" ng-click=\"goHome();\">LeanEngine</div><md-menu ng-if=\"user.username\" class=\"account-menu\" md-position-mode=\"target-right target\" md-offset=\"0 48\"><md-button md-menu-origin=\"\" class=\"lc-btn\" ng-click=\"openMenu($mdOpenMenu, $event)\">{{user.username}}</md-button><md-menu-content><md-menu-item><md-button>{{i18n.header.setting}}</md-button></md-menu-item><md-menu-item><md-button>{{i18n.header.logout}}</md-button></md-menu-item></md-menu-content></md-menu><md-button ng-if=\"!user.username\" class=\"loginBtn\" ng-click=\"\">{{i18n.auth.login}}</md-button><div class=\"search-input\" ng-if=\"ui.showAskBtn\"><md-button class=\"md-icon-button searchBtn\" ng-click=\"\" aria-label=\"close\"><span></span></md-button><input class=\"search\" type=\"text\" placeholder=\"{{i18n.header.search}}\"></div><md-button class=\"askBtn lc-btn md-raised\" ng-click=\"creatTicket()\" ng-if=\"ui.showAskBtn\"><span class=\"ask-icon\"></span> <span>{{i18n.header.ask}}</span></md-button></div></div>");
$templateCache.put("app/common/navigation/navbar.html","<nav class=\"navbar navbar-default\" role=\"navigation\" bs-navbar=\"\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Brand</a></div><ul class=\"nav navbar-nav\"><li data-match-route=\"/$\"><a href=\"#/\">Home</a></li><li data-match-route=\"/page-one\"><a href=\"#/page-one\">Page One</a></li><li data-match-route=\"/page-two.*\"><a href=\"#/page-two/sub-a\">Page Two</a></li></ul></nav>");
$templateCache.put("app/common/product/add.html","<section layout=\"row\" flex=\"\"><md-content flex=\"\" layout-padding=\"\"><div class=\"product\"><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab class=\"tab-button\" label=\"选择供应商\"><div layout=\"row\"><provider-side-bar ng-if=\"isEditing\"></provider-side-bar><table><tr><td colspan=\"99\" class=\"title\">供应商基本信息</td></tr><tr ng-if=\"product.pickedProvider\"><td>供应商</td><td>{{ product.pickedProvider.companyname }} ({{ product.pickedProvider.nickname }})</td></tr><tr><td>商户联系人</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-if=\"isEditing\" ng-model=\"product.contact\"><md-option ng-value=\"contact\" ng-repeat=\"contact in product.pickedProvider.contactList\">{{contact.contactname}}</md-option></md-select></md-input-container><md-button ng-if=\"isEditing\" class=\"md-raised md-primary addcontact\" ng-click=\"addContact();\">添加商户联系人</md-button><p ng-if=\"!isEditing\">{{ product.contact.contactname }}</p></td></tr><tr ng-if=\"product.contact\"><td>手机</td><td><div>{{ product.contact.cellphone }}</div></td></tr><tr ng-if=\"product.contact\"><td>座机</td><td><div>{{ product.contact.homephone }}</div></td></tr><tr ng-if=\"product.contact\"><td>QQ号码</td><td><div>{{ product.contact.qqnumber }}</div></td></tr><tr ng-if=\"product.contact\"><td>微信</td><td><div>{{ product.contact.wechat }}</div></td></tr></table></div></md-tab><md-tab class=\"tab-button\" label=\"基本信息\"><table><tr><td colspan=\"99\" class=\"title\">产品基本信息</td></tr><tr ng-if=\"!isEditing\"><td>产品编号</td><td colspan=\"4\"><p>{{ product.objectId }}</p></td></tr><tr><td>线路名称</td><td colspan=\"4\"><input ng-if=\"isEditing\" type=\"text\" ng-model=\"product.fullName\"><div ng-if=\"!isEditing\"><span ng-repeat=\"prefix in product.prefixArray\"><span>[</span> <span>{{ prefix }}</span> <span>]</span></span> <span ng-if=\"!isEditing\">{{product.fullName}}</span></div></td></tr><tr><td>供应商产品名称</td><td colspan=\"4\"><input ng-if=\"isEditing\" type=\"text\" ng-model=\"product.productName\"><p ng-if=\"!isEditing\">{{ product.productName }}</p></td></tr><tr ng-if=\"isEditing\"><td>线路名称前缀</td><td colspan=\"4\"><multi-choice is-editing=\"isEditing\" type=\"线路前缀\" ng-model=\"product.prefix\"></multi-choice></td></tr><tr><td>酒店标准</td><td colspan=\"4\"><md-input-container ng-if=\"isEditing\"><md-select ng-if=\"isEditing\" ng-model=\"product.hotelStandard\"><md-option ng-selected=\"product.hotelStandard != \'undefined\' && $first\" ng-value=\"hotel\" ng-repeat=\"hotel in hotels\">{{hotel}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.hotelStandard }}</p></td></tr><tr><td>交通方式</td><td colspan=\"4\"><md-input-container ng-if=\"isEditing\"><md-select ng-if=\"isEditing\" ng-model=\"product.transportStandard\"><md-option ng-selected=\"product.transportStandard != \'undefined\' && $first\" ng-value=\"transport\" ng-repeat=\"transport in transports\">{{transport}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.transportStandard }}</p></td></tr><tr><td>产品负责人</td><td colspan=\"4\"><md-input-container ng-if=\"isEditing && !isExisting\"><md-select ng-model=\"product.responsible\"><md-option ng-selected=\"$first\" ng-value=\"response\" ng-repeat=\"response in responses track by $index\">{{response.contactname}}</md-option></md-select></md-input-container><p ng-if=\"isExisting || !isEditing\">{{ product.responsible.contactname }}</p></td></tr><tr><td>行程天数</td><td colspan=\"4\"><counter ng-if=\"isEditing\" ng-model=\"product.duration\"></counter><p ng-if=\"!isEditing\">{{ product.duration }}</p></td></tr><tr><td>酒店入住天数</td><td colspan=\"4\"><counter ng-if=\"isEditing\" ng-model=\"product.hotelDuration\"></counter><p ng-if=\"!isEditing\">{{ product.hotelDuration }}</p></td></tr><tr><td>报名截止</td><td colspan=\"4\"><div><span>出团前</span><counter ng-if=\"isEditing\" ng-model=\"product.stopDay\"></counter><p ng-if=\"!isEditing\">{{ product.stopDay }}</p><span>天</span></div></td></tr><tr><td>出发地</td><td colspan=\"4\"><md-input-container ng-if=\"isEditing\"><md-select ng-model=\"product.startCity\"><md-option ng-selected=\"product.startCity != \'undefined\' && $first\" ng-value=\"start\" ng-repeat=\"start in startCities\">{{start}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.startCity }}</p></td></tr><tr><td>类型</td><td colspan=\"4\"><md-input-container ng-if=\"isEditing\"><md-select ng-model=\"product.type\"><md-option ng-selected=\"product.type != \'undefined\' && $first\" ng-value=\"type\" ng-repeat=\"type in types\">{{type}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.type }}</p></td></tr><tr><td>大区</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-model=\"product.area\"><md-option ng-selected=\"product.area != \'undefined\' && $first\" ng-value=\"area\" ng-repeat=\"area in areas\">{{area}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.area }}</p></td></tr><tr ng-if=\"subareas || product.subarea\"><td>分区</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-model=\"product.subarea\"><md-option ng-value=\"subarea\" ng-repeat=\"subarea in subareas\">{{subarea}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing\">{{ product.subarea }}</p></td></tr><tr><td>小区(可不选或多选)</td><td><multi-choice is-editing=\"isEditing\" dynamic-type=\"product.subarea\" ng-model=\"product.detailArea\"></multi-choice></td></tr><tr><td>平台联系人</td><td colspan=\"4\"><md-input-container ng-if=\"isEditing && !isExisting\"><md-select ng-model=\"product.platformcontact\"><md-option ng-selected=\"$first\" ng-value=\"response\" ng-repeat=\"response in responses track by $index\">{{response.contactname}}</md-option></md-select></md-input-container><p ng-if=\"!isEditing || isExisting\">{{ product.platformcontact.contactname }}</p></td></tr></table><div class=\"submit\"><md-button ng-if=\"isEditing\" ng-click=\"save();\" class=\"md-raised md-primary\">保存</md-button></div></md-tab><md-tab class=\"tab-button\" label=\"行程信息\"><div ng-repeat=\"itineraryItem in product.itinerary track by $index\" class=\"itinery\"><div class=\"item\"><label>第{{ $index + 1 }}天:</label> <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.title\"> <span>请填写行程信息如: 上海-北京</span></div><div class=\"item\"><label>参考航班/列车班次</label> <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.flight\"></div><div class=\"item\"><label>住宿信息</label> <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.hotelDetail\"></div><div class=\"item\"><label>餐饮信息</label> <input ng-disabled=\"!isEditing\" type=\"checkbox\" ng-model=\"itineraryItem.food.hasmorning\">早 <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.food.morning\"> <input ng-disabled=\"!isEditing\" type=\"checkbox\" ng-model=\"itineraryItem.food.hasnoon\">中 <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.food.noon\"> <input ng-disabled=\"!isEditing\" type=\"checkbox\" ng-model=\"itineraryItem.food.hasevening\">晚 <input ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"itineraryItem.food.evening\"></div><div class=\"item\" layout=\"column\"><label>详细描述:</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"itineraryItem.detail\"></textarea></div><hr></div><div class=\"submit\"><md-button ng-if=\"isEditing\" ng-click=\"save();\" class=\"md-raised md-primary\">保存</md-button></div></md-tab><md-tab class=\"tab-button\" label=\"其他信息\"><div class=\"extra-item\" layout=\"column\"><label>线路特色</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.description\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>费用包含</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.priceInclude\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>费用不含</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.priceExclude\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>预定须知</label> <textarea class=\"msd-elastic: \\n\\n;\" ng-model=\"product.reserveInfo\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>收客限制</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.restriction\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>温馨提示</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.reminder\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>签证信息</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.visaInfo\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>购物信息</label> <textarea ng-disabled=\"!isEditing\" class=\"msd-elastic: \\n\\n;\" ng-model=\"product.shoppingInfo\"></textarea></div><div class=\"extra-item\" layout=\"column\"><label>自费项目</label><md-button class=\"md-raised md-primary\" style=\"width: 150px;\" ng-click=\"addingList = true\">创建新自费列表</md-button><div ng-show=\"addingList\"><p>列表名称</p><input ng-model=\"product.newList.name\"><div style=\"display: inline-block\"><a ng-click=\"createList();\">确认</a><p>/</p><a ng-click=\"addingList = false\">取消</a></div></div><md-input-container ng-if=\"isEditing && !product.objectId\"><md-select placeholder=\"请选择已有的自费项目列表\" ng-model=\"product.selfPaidList\"><md-option ng-value=\"paidList\" ng-repeat=\"paidList in existList\">{{paidList.name}}</md-option></md-select></md-input-container><table ng-if=\"product.selfPaidList\"><tr><th>选中</th><th>项目</th><th>内容描述</th><th>费用</th><th>操作</th></tr><tr ng-repeat=\"item in product.selfPaidList.items track by $index\"><td><input style=\"width: 20px;\" type=\"checkbox\" ng-model=\"item.picked\"></td><td>{{ item.name }}</td><td>{{ item.description }}</td><td>{{ item.fee }}</td><td><a ng-click=\"deleteItem($index);\">删除</a></td></tr><tr><td></td><td><input style=\"width: 250px;\" ng-model=\"newItem.name\"></td><td><textarea style=\"width: 300px;\" ng-model=\"newItem.description\"></textarea></td><td><input style=\"width: 80px\" ng-model=\"newItem.fee\"></td><td><a ng-click=\"addItem(newItem);\">添加</a></td></tr></table></div><div class=\"submit\"><md-button ng-if=\"isEditing\" ng-click=\"save();\" class=\"md-raised md-primary\">保存</md-button></div></md-tab><md-tab class=\"tab-button\" label=\"团期报价\"><div class=\"product-calendar\" layout=\"row\"><calendar-md class=\"calendar-block\" calendar-direction=\"direction\" on-prev-month=\"prevMonth\" on-next-month=\"nextMonth\" on-day-click=\"dayClick\" title-format=\"\'MMMM y\'\" ng-model=\"selectedDate\" day-format=\"\'d\'\" day-label-format=\"\'EEE\'\" day-label-tooltip-format=\"\'EEEE\'\" day-tooltip-format=\"\'fullDate\'\" week-starts-on=\"firstDayOfWeek\" day-content=\"setDayContent\"></calendar-md><div class=\"calendar-form\"><input-form type=\"团期报价\" title=\"团期报价\" is-editing=\"isEditing\" ng-model=\"currentPrice\"></input-form></div></div><div class=\"submit\"><md-button ng-if=\"isEditing\" ng-click=\"submitProduct();\" class=\"md-raised md-primary\">发布产品</md-button></div></md-tab><md-tab class=\"tab-button\" ng-if=\"!isEditing\" label=\"库存管理\"><calendar class=\"inventory-calendar\" ng-model=\"product.price\" data=\"库存管理\"></calendar></md-tab></md-tabs><input type=\"hidden\" name=\"costprice\" value=\"{{ price }}\"> <input type=\"hidden\" name=\"providers\" value=\"{{ providerList }}\"> <input type=\"hidden\" name=\"itinerary\" value=\"{{ itineraryList }}\"></div></md-content></section>");
$templateCache.put("app/common/product/itinerary.html","<div class=\"wrapper\"><div class=\"mid-title\">上海锦江旅游有限公司 | 旅游线路行程单</div><div class=\"content\"><div>线路名称：</div><div class=\"col\">团号：</div><div class=\"col\">出团日期：</div><div>行程天数</div></div></div><div class=\"wrapper\"><div class=\"title\">价格列表</div><div class=\"content\"><div class=\"has-border\">团费(基本价): {{ product.saleprice }}</div></div></div><div class=\"wrapper\"><div class=\"title\">线路特色</div><div class=\"content\" id=\"margin-top-content\">特色内容</div></div><div class=\"wrapper\" ng-repeat=\"itinerary in itinerarys\"><div class=\"title\">出团线路行程</div><div class=\"subtitle\"><div class=\"col\">{{ itinerary.date }}</div><div class=\"col\">{{ itinerary.start }}—{{ itinerary.end }}</div></div><div class=\"content\"><div class=\"main\">{{ itinerary.detail }}</div><div class=\"detail\"><div calss=\"no-col\">交通情况: {{ itinerary.transportation }}</div><div class=\"no-col\">用餐情况: {{ itinerary.cafe }}</div><div class=\"no-col\">住宿情况: {{ itinerary.hotel }}</div><div class=\"col\">出发时间: {{ itinerary.startTime }}</div><div class=\"col\">抵达时间</div><div class=\"col\">过夜天数</div><div class=\"col\">班次／航班号</div></div></div></div><div class=\"wrapper\"><div class=\"title\">中山公园龙之梦营业部联系信息：</div><div class=\"content\"><div class=\"info\"><p>联系人: {{ product.user.username }}</p><p>电话：{{ product.user.phone }}</p></div><div class=\"info\" id=\"second-info\"><p>手机：{{ product.user.cellphone }}</p><p>QQ: {{ product.user.qqnumber }}</p><p>传真: {{ product.user.faxnumber }}</p></div></div></div>");
$templateCache.put("app/common/product/show.html","<section layout=\"row\" flex=\"\"><div><md-sidenav class=\"md-sidenav-left shadow show-product-nav\" md-component-id=\"showProduct\" md-is-locked-open=\"true\" md-disable-backdrop=\"\" md-whiteframe=\"4\"><md-toolbar class=\"md-theme-indigo\"><h1 class=\"md-toolbar-tools\">产品管理</h1></md-toolbar><div class=\"sidebar-button\"><md-button ng-click=\"showVerified()\" class=\"md-primary\">出售中的产品 <span ng-if=\"verified\">({{ verified }})</span></md-button><md-button ng-click=\"showUnverified()\" class=\"md-primary\">待审核产品 <span ng-if=\"unverified\">({{ unverified }})</span></md-button><md-button ng-click=\"showUnposted()\" class=\"md-primary\">已下架产品 <span ng-if=\"unposted\">({{ unposted }})</span></md-button></div></md-sidenav></div><md-content flex=\"\" layout-padding=\"\"><table><tr><th>产品编号</th><th>产品名称</th><th>产品单价(最低)</th><th>负责人</th><th>详情</th><th>状态</th></tr><tr ng-repeat=\"product in products\"><td>{{ product.objectId }}</td><td>{{ product.productName }}</td><td><div>门市价(成人): {{ product.latestAdultCompanySalePrice }}</div><div>同行价(成人): {{ product.latestAdultCompanyCompetitorPrice }}</div><div>结算价(成人): {{ product.latestAdultCompanyPrice }}</div></td><td>{{ product.responsible.contactname }}</td><td><a target=\"_blank\" ui-sref=\"home.show-product-detail({productId: \'{{product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a></td><td><p ng-if=\"product.status == 1\">下架</p><p ng-if=\"product.status == 2\">未审核</p><p ng-if=\"product.status == 3\">已审核</p></td></tr></table></md-content></section>");
$templateCache.put("app/common/product/show_product.html","<div ui-view=\"\"></div>");
$templateCache.put("app/common/provider/add.html","<div class=\"add-provider\"><md-content><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"基本信息\"><table><tbody><tr><td colspan=\"2\" class=\"title\">公司信息</td></tr><tr><td>品牌名称</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.nickname\"></text-field><div ng-if=\"!isEditing\">{{ provider.nickname }}</div></td></tr><tr><td>公司名称</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.companyname\"></text-field><div ng-if=\"!isEditing\">{{ provider.companyname }}</div></td></tr><tr><td>地址</td><td><input ng-if=\"isEditing\" type=\"text\" ng-model=\"provider.address\"><p ng-if=\"!isEditing\">{{ provider.address }}</p></td></tr><tr><td>营业执照</td><td><div ng-if=\"isEditing\"><md-button class=\"md-raised md-primary\" ngf-select=\"upload($file)\">上传文件</md-button><p ng-if=\"filename\">{{ filename }}</p></div><div ng-if=\"!isEditing\"><a href=\"#\">显示证书</a></div></td></tr><tr><td>公司类别</td><td><md-input-container ng-if=\"isEditing\"><md-select ng-if=\"isEditing\" ng-model=\"provider.area\"><md-option ng-value=\"area\" ng-repeat=\"area in areas\">{{ area }}</md-option></md-select></md-input-container><div ng-if=\"!isEditing\">{{ provider.area }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td colspan=\"2\" class=\"title\">联系信息</td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>姓名</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.contactname\"></text-field><md-select ng-if=\"!isEditing\" ng-model=\"contactperson\"><md-option ng-selected=\"$first\" ng-value=\"contact\" ng-repeat=\"contact in contactList\">{{contact.contactname}}</md-option></md-select></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>座机</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.homephone\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.homephone }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>手机</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.cellphone\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.cellphone }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\"><td>QQ号</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.qqnumber\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.qqnumber }}</div></td></tr><tr ng-if=\"!provider.objectId && isEditing\" q=\"\"><td>微信号</td><td><text-field ng-if=\"isEditing\" is-editing=\"isEditing\" ng-model=\"provider.wechat\"></text-field><div ng-if=\"!isEditing\">{{ contactperson.wechat }}</div></td></tr></tbody></table><table ng-if=\"provider.objectId\"><tr><td colspan=\"99\" class=\"title\">联系人列表</td></tr><tr ng-if=\"loading\"><td><p>正在读取联系人列表...</p></td></tr><tr><th>姓名</th><th>手机</th><th>座机</th><th>职位</th><th>QQ</th><th>微信</th></tr><tr ng-repeat=\"contact in contactList\"><td>{{ contact.contactname }}</td><td>{{ contact.cellphone }}</td><td>{{ contact.homephone }}</td><td>{{ contact.position }}</td><td>{{ contact.qqnumber }}</td><td>{{ contact.wechat }}</td></tr><tr ng-if=\"isEditing\"><td colspan=\"99\"><md-button class=\"md-raised md-primary\" ng-click=\"addContact();\">添加商户联系人</md-button></td></tr></table><div class=\"submit\"><md-button class=\"md-raised md-primary\" ng-if=\"!confirmed\" ng-click=\"confirm();\">确认</md-button></div></md-tab><md-tab label=\"业务资料\" ng-disabled=\"!confirmed && isEditing\" md-active=\"confirmed\"><table><tbody><tr><td colspan=\"2\" class=\"title\">主营业务</td></tr><tr><td>主营目的地</td><td><multi-choice is-editing=\"isEditing\" type=\"主营目的地\" ng-model=\"provider.destination\"></multi-choice></td></tr><tr><td>主营口岸</td><td><multi-choice is-editing=\"isEditing\" type=\"主营口岸\" ng-model=\"provider.start\" other=\"true\"></multi-choice></td></tr><tr><td colspan=\"2\" class=\"title\">业务资源</td></tr><tr><td>航班资源</td><td><textarea ng-disabled=\"!isEditing\" class=\"msd-elastic\" ng-model=\"provider.flightResource\"></textarea></td></tr><tr><td>收客情况</td><td><textarea ng-disabled=\"!isEditing\" class=\"msd-elastic\" ng-model=\"provider.customerResource\"></textarea></td></tr><tr><td>产品优势</td><td><textarea ng-disabled=\"!isEditing\" class=\"msd-elastic\" ng-model=\"provider.productResource\"></textarea></td></tr><tr><td colspan=\"2\" class=\"title\">合作支持</td></tr><tr><td>加返政策</td><td><div><div class=\"block\"><div>全年总人数: <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnTotalPeople\" ng-value=\"provider.returnTotalPeople\" ng-change=\"test();\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnTotalPeople }}</p>(人)</div><div>加返 <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnMoneyEachPeople\" ng-value=\"provider.returnMoneyEachPeople\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnMoneyEachPeople }}</p>(元/人)</div></div><div class=\"block\"><div>全年销售额: <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnTotalRevenue\" ng-value=\"provider.returnTotalRevenue\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnTotalRevenue }}</p>(元)</div><div>加返 <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"provider.returnPolicy.returnMoneyRevenue\" ng-value=\"provider.returnMoneyRevenue\"><p ng-if=\"!isEditing\">{{ provider.returnPolicy.returnMoneyRevenue }}</p>(元)</div></div></div></td></tr></tbody></table><div ng-if=\"isEditing\" class=\"submit\"><md-button class=\"md-raised md-primary\" ng-click=\"submit();\">提交</md-button></div></md-tab></md-tabs></md-content></div>");
$templateCache.put("app/common/provider/add_account.html","<div style=\"text-align: center;\"><div style=\"width: 400px; display: inline-block;\"><h2 class=\"form-signin-heading\">请输入账号和密码,</h2><md-select ng-model=\"level\"><md-option ng-selected=\"$first\" ng-value=\"level.level\" ng-repeat=\"level in levels\">{{ level.value }}</md-option></md-select><label for=\"inputEmail\" class=\"sr-only\">用户名</label> <input ng-model=\"username\" type=\"text\" class=\"form-control\" placeholder=\"用户名\"> <label for=\"inputPassword\" class=\"sr-only\">密码</label> <input ng-model=\"password\" type=\"password\" class=\"form-control\" placeholder=\"密码\"> <input ng-model=\"email\" type=\"text\" class=\"form-control\" placeholder=\"注册邮箱\"> <input ng-model=\"contactname\" type=\"text\" class=\"form-control\" placeholder=\"姓名\"> <input ng-model=\"cellphone\" type=\"text\" class=\"form-control\" placeholder=\"手机\"> <button class=\"btn btn-lg btn-primary btn-block\" id=\"register\" type=\"button\" ng-click=\"register();\">注册</button></div></div>");
$templateCache.put("app/common/provider/show.html","<table><tr><th>供应商编号</th><th>品牌名称</th><th>公司名称</th><th>营业执照</th><th>详情</th><th>操作</th></tr><tr ng-repeat=\"provider in providers\"><td>{{ provider.ProviderId }}</td><td>{{ provider.nickname }}</td><td>{{ provider.companyname }}</td><td><a ng-if=\"provider.licenseFile.url\" download=\".pdf\" href=\"{{ provider.licenseFile.url }}\">点击下载</a></td><td><a target=\"_blank\" ui-sref=\"home.show-provider-detail({providerId: \'{{provider.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a></td><td><a ng-if=\"level == 3\" ng-click=\"edit(provider);\">编辑</a><p ng-if=\"level == 3\">/</p><a ng-click=\"delete(provider);\">删除</a></td></tr></table><page-control></page-control>");
$templateCache.put("app/common/sale/index.html","<nav class=\"navbar navbar-inverse\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" ui-sref=\"#\">上海和和国际旅行社</a></div><ul class=\"nav navbar-nav\"><li><a ui-sref=\".search-product\">搜索产品</a></li><li><a ui-sref=\".show-order\">订单管理</a></li><li><a ui-sref=\".account\">我的账号</a></li><li><a ng-click=\"logout();\">退出登录</a></li></ul></nav><div ui-view=\"\"></div>");
$templateCache.put("app/common/directives/calendar/calendar.html","<div class=\"calendar\"><div><md-input-container class=\"year\"><md-select ng-change=\"selectYear();\" ng-model=\"selectedYear\"><md-option ng-selected=\"$first\" ng-value=\"year\" ng-repeat=\"year in years\">{{ year }}</md-option></md-select></md-input-container><div class=\"month-wrapper\"><a href=\"#\" class=\"month\" ng-class=\"{\'active-month\': currentMonth === $index}\" ng-click=\"selectMonth($index)\" ng-repeat=\"month in months\">{{ month }}月</a></div></div><table class=\"calendar-table\" border=\"1\"><tr><th class=\"table-cell\"><div class=\"date\">{{ currentMonth + 1}}月</div></th><th class=\"table-cell\" ng-repeat=\"title in titles\"><div class=\"cell\">{{ title.value }}</div></th><th ng-if=\"isEditing\" class=\"table-cell\"><div class=\"cell\">操作</div></th></tr><tr ng-repeat=\"day in days\"><td class=\"table-cell\"><div class=\"date\">{{ day }}</div></td><td class=\"table-cell\" ng-repeat=\"title in titles\" ng-switch=\"\" on=\"title.type\"><div class=\"cell\">{{ allDayEvents[$parent.$index][title.name] }}</div></td><td ng-if=\"isEditing\" class=\"table-cell\"><a ng-if=\"!allDayEvents[$index].filled\" class=\"cell\" ng-class=\"{off: allDayEvents[$index].filled}\" href=\"#\" ng-click=\"addEvent($index);\">添加</a><div ng-if=\"allDayEvents[$index].filled\" ng-class=\"{off: !allDayEvents[$index].filled}\"><a href=\"#\" ng-click=\"editEvent($index)\">编辑</a><div class=\"inline\">/</div><a href=\"#\" ng-click=\"deleteEvent($index)\">删除</a></div></td></tr></table></div>");
$templateCache.put("app/common/directives/form/form.html","<div><div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in items\"><div class=\"item\"><div class=\"key\">{{ item.key }}</div><div class=\"value\" ng-if=\"editable\" ng-switch=\"\" on=\"item.type\"><input ng-switch-when=\"number\" type=\"number\" ng-model=\"item.value\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"date\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" datg-placement=\"left\" data-date-format=\"mediumDate\" data-autoclose=\"true\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"text\" type=\"text\"></div><div class=\"value\" ng-if=\"!editable\">{{ item.value }}</div></div></li></ul></div><div ng-if=\"editable\" class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">取消</button></div><div ng-if=\"!editable\" class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"cancel()\">确认</button></div></div>");
$templateCache.put("app/common/directives/inputForm/inputForm.html","<div class=\"input-form\"><div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }} <span ng-if=\"model.year\">{{ model.year }}年</span> <span ng-if=\"model.month\">{{ model.month + 1}}月</span> <span ng-if=\"model.day\">{{ model.day }}日</span></h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in items\"><div class=\"item\"><div class=\"key\">{{ item.key }}</div><div ng-if=\"isEditing\" class=\"value\" ng-switch=\"\" on=\"item.type\"><input ng-switch-when=\"number\" type=\"number\" ng-model=\"item.value\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"date\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" placement=\"left\" data-date-format=\"mediumDate\" data-autoclose=\"true\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"text\" type=\"text\"></div><p ng-if=\"!isEditing\">{{ item.value }}</p></div></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"confirm();\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"clear();\">清空</button> <button class=\"btn btn-primary\" type=\"button\" ng-click=\"copy();\">复制</button> <button class=\"btn btn-primary\" type=\"button\" ng-click=\"paste();\">粘贴</button></div></div>");
$templateCache.put("app/common/directives/counter/counter.html","<div class=\"counter\"><span class=\"operator\" ng-click=\"minus();\">-</span> <input class=\"number\" ng-model=\"value\" ng-disabled=\"true\"> <span class=\"operator\" ng-click=\"plus();\">+</span></div>");
$templateCache.put("app/common/directives/multiChoice/multiChoice.html","<div class=\"multiple-choice\"><label ng-repeat=\"option in options\"><input type=\"checkbox\" ng-disabled=\"!isEditing\" ng-model=\"option.state\" checked=\"{{ option.state }}\"><p>{{ option.value }}</p></label></div>");
$templateCache.put("app/common/directives/page/page.html","<div class=\"center\"><a ng-repeat=\"page in pages\" ng-click=\"changePage($index)\">{{page}}</a></div>");
$templateCache.put("app/common/directives/tableForm/table_form.html","<div><div class=\"modal-header\"><h3 class=\"modal-title\">{{ title }}</h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in items\"><div class=\"item\"><div class=\"key\">{{ item.key }}</div><div class=\"value\" ng-switch=\"\" on=\"item.type\"><input ng-switch-when=\"number\" type=\"number\" ng-model=\"item.value\"> <input class=\"datepicker\" ng-model=\"item.value\" ng-switch-when=\"date\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" placement=\"right\" data-date-format=\"mediumDate\" data-autoclose=\"true\"> <input ng-model=\"item.value\" ng-switch-when=\"text\" type=\"text\"></div></div></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">取消</button></div></div>");
$templateCache.put("app/common/directives/textField/textField.html","<div ng-switch=\"inputType\"><input ng-switch-when=\"number\" ng-disabled=\"!isEditing\" type=\"number\" ng-model=\"$parent.value\"> <input ng-switch-default=\"\" ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"$parent.value\"></div>");
$templateCache.put("app/common/sale/account/account.html","<div class=\"section\"><md-content><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"我的账号\"><table><tr><td>用户名</td><td>{{ user.username }}</td></tr><tr><td>密码</td><td><md-button ng-click=\"changePass();\" class=\"md-raised md-primary\">更改密码</md-button></td></tr></table></md-tab></md-tabs></md-content></div>");
$templateCache.put("app/common/sale/customer/show.html","<div class=\"search\"><h3>快速搜索</h3><ul><li><strong>姓名</strong> <input type=\"text\" placeholder=\"姓名\" ng-model=\"username\"></li><li><strong>身份证</strong> <input type=\"text\" placeholder=\"身份证\" ng-model=\"identifier\"></li><li><strong>产品编号</strong> <input type=\"text\" placeholder=\"姓名\" ng-model=\"productId\"></li><li><strong>付款状态</strong><md-select ng-model=\"state\" placeholder=\"付款状态\"><md-option ng-value=\"1\">已付款</md-option><md-option ng-value=\"0\">未付款</md-option></md-select></li></ul><md-button class=\"md-raised md-primary\" ng-click=\"search();\">搜索</md-button></div><div><table><tr><th>姓名</th><th>报名项目</th><th>联系电话</th><th>应付款项</th><th>付款情况</th></tr><tr ng-repeat=\"customer in customers track by $index\"><td>{{ customer.username }}</td><td><a href=\"#\">{{ customer.productname }}</a></td><td>{{ customer.phone }}</td><td>{{ customer.price }}</td><td>{{ customer.stateText }}</td></tr></table></div><div class=\"center\"><a>上一页</a> <a ng-repeat=\"page in pages\">{{ page }}</a> <a>下一页</a></div>");
$templateCache.put("app/common/sale/order/add_order.html","<table class=\"order-table\"><tr><td colspan=\"99\" class=\"title\">产品基本信息</td></tr><tr><td>产品编号</td><td>{{ product.objectId }}</td></tr><tr><td>出发地</td><td><span ng-if=\"product.start.city == \'市辖区\'\">{{ product.start.province }}</span> <span ng-if=\"product.start.city != \'市辖区\'\">{{ product.start.city }}</span></td></tr><tr><td>产品名称</td><td>{{ product.productName }}</td></tr><tr><td>出团日期</td><td>{{ order.date }}</td></tr><tr><td colspan=\"99\" class=\"title\">团费</td></tr><tr><td>类型</td><td>数量</td><td>单价</td><td>小计</td></tr><tr><td>成人</td><td><counter ng-model=\"order.adult\"></counter></td><td>{{ order.price.adultCompanySalePrice }}</td><td>{{ order.price.adultCompanySalePrice * order.adult}}</td></tr><tr><td>儿童</td><td><counter ng-model=\"order.child\"></counter></td><td>{{ order.price.childCompanySalePrice }}</td><td>{{ order.price.childCompanySalePrice * order.child }}</td></tr><tr ng-if=\"order.extraRoomNumber\"><td>全程单房差</td><td>{{ order.extraRoomNumber }}</td><td>{{ order.price.singleRoomDifference }}</td><td>{{ order.price.singleRoomDifference * order.extraRoomNumber }}</td></tr><tr ng-repeat=\"item in order.extraItems\"><td>{{ item.name }}</td><td>{{ item.count }}</td><td>{{ item.price }}</td><td>{{ item.totalPrice }} <a ng-click=\"deleteItem($index);\">删除</a></td></tr><tr><td><input ng-model=\"extraItem.name\" placeholder=\"补差价项目\"></td><td><input ng-model=\"extraItem.count\" placeholder=\"数量\"></td><td><input ng-model=\"extraItem.price\" placeholder=\"单价\"></td><td><a ng-click=\"addItem();\">确定</a></td></tr><tr><td>总计</td><td></td><td></td><td>{{ order.totalPrice }}</td></tr><tr><td colspan=\"99\" class=\"title\">预定信息</td></tr><tr><td>业务联系人</td><td><input type=\"text\" ng-model=\"order.contactname\"></td></tr><tr><td>手机</td><td><input type=\"text\" ng-model=\"order.cellphone\"></td></tr><tr><td>邮箱</td><td><input type=\"text\" ng-model=\"order.email\"></td></tr></table><table class=\"customers\"><tr><td colspan=\"99\" class=\"title\">游客信息</td></tr><tr><th>姓名</th><th class=\"select\">类型</th><th class=\"select\">性别</th><th class=\"select\">证件类型</th><th>证件号码</th><th>手机</th><th>出生日期</th><th>备注</th></tr><tr ng-repeat=\"customer in order.customers\"><td><input type=\"text\" ng-model=\"customer.name\"></td><td><md-input-container><md-select ng-model=\"customer.type\"><md-option ng-selected=\"$first\" ng-value=\"type\" ng-repeat=\"type in types\">{{ type }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.sex\"><md-option ng-selected=\"$first\" ng-value=\"sex\" ng-repeat=\"sex in sexList\">{{ sex }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.license\"><md-option ng-selected=\"$first\" ng-value=\"license\" ng-repeat=\"license in licenseList\">{{ license }}</md-option></md-select></md-input-container></td><td><input type=\"text\" ng-model=\"customer.licenseNumber\"></td><td><input type=\"text\" ng-model=\"customer.cellphone\"></td><td class=\"birthDate\"><input ng-model=\"customer.birthDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" container=\"body\" data-autoclose=\"true\"></td><td class=\"extra\"><div><input type=\"checkbox\" ng-model=\"customer.needVisa\"> 需要办签</div><div><input type=\"checkbox\" ng-model=\"customer.needShare\"> 需要拼房</div><div><input type=\"checkbox\" ng-model=\"customer.needExtra\"> 需要补房</div></td></tr></table><div class=\"center\"><md-button class=\"md-raised md-primary\" ng-click=\"submitOrder();\">提交订单</md-button></div>");
$templateCache.put("app/common/sale/order/apply_revoke.html","<div><div class=\"modal-header\"><h3 class=\"modal-title\">申请退款</h3></div><div class=\"modal-body\"><ul><li><div class=\"item\"><div class=\"key\">退款原因</div><div class=\"value\"><textarea ng-model=\"revoke.reason\"></textarea></div></div><div class=\"item\"><div class=\"key\">客人损失金额</div><div class=\"value\"><input type=\"number\" ng-model=\"revoke.lostmoney\"></div></div><div class=\"item\"><div class=\"key\">申请人</div><div class=\"value\"><input ng-model=\"revoke.person\"></div></div><div class=\"item\"><div class=\"key\">手机</div><div class=\"value\"><input ng-model=\"revoke.phone\"></div></div></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"revokeOrder(revoke);\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancelRevoke()\">取消</button></div></div>");
$templateCache.put("app/common/sale/order/show_order.html","<div class=\"show-order\" layout=\"row\"><md-sidenav class=\"md-sidenav-order\" md-component-id=\"show-order\" md-is-locked-open=\"true\" md-whiteframe=\"2\"><md-toolbar class=\"md-theme-indigo\"><h1 class=\"md-toolbar-tools\">订单管理</h1></md-toolbar><div class=\"sidebar-button\"><md-button ng-click=\"allOrder()\" class=\"md-primary\">全部订单</md-button><md-button ng-click=\"allOrder(orderStatus.UNPAID_UNVERIFIED)\" class=\"md-primary\">未付款订单(等待计调确认)({{ count[orderStatus.UNPAID_UNVERIFIED] }})</md-button><md-button ng-click=\"allOrder(orderStatus.UNPAID_VERIFIED)\" class=\"md-primary\">未付款订单(计调已经确认)({{ count[orderStatus.UNPAID_VERIFIED] }})</md-button><md-button ng-click=\"allOrder(orderStatus.PAID)\" class=\"md-primary\">已付款订单(等待计调确认)({{ count[orderStatus.PAID] }})</md-button><md-button ng-click=\"allOrder(orderStatus.FINISHED)\" class=\"md-primary\">已完成订单({{ count[orderStatus.PAID] }})</md-button><md-button ng-click=\"allOrder(orderStatus.REVOKE)\" class=\"md-primary\">申请退款订单({{ count[orderStatus.REVOKE] }})</md-button><md-button ng-click=\"allOrder(orderStatus.CANCEL)\" class=\"md-primary\">申请取消订单({{ count[orderStatus.CANCEL] }})</md-button><md-button ng-click=\"allOrder(orderStatus.CANCELLED)\" class=\"md-primary\">已取消订单({{ count[orderStatus.CANCELLED] }})</md-button></div></md-sidenav><md-content layout-padding=\"\"><table class=\"search-option\"><caption>订单搜索</caption><tr><td>订单号</td><td><div><input ng-model=\"query.orderId\"></div></td></tr><tr><td>产品编号</td><td><div><input ng-model=\"query.productId\"></div></td></tr><tr><td>出发日期</td><td><div class=\"date-wrapper\" layout=\"row\"><input ng-model=\"query.startDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"><div class=\"separator\">-</div><input ng-model=\"query.endDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"></div></td></tr><tr ng-show=\"level == 0 || level == 3\"><td>分销商姓名</td><td><div><md-input-container><md-select ng-model=\"query.sale\"><md-option ng-value=\"sale.objectId\" ng-repeat=\"sale in saleList\">{{sale.contactname}}</md-option></md-select></md-input-container></div></td></tr><tr><td colspan=\"2\"><md-button class=\"md-raised md-primary\" ng-click=\"search();\">确认搜索</md-button></td></tr></table><p ng-if=\"isLoading\">正在加载...请稍等</p><table class=\"order\"><tbody ng-repeat=\"order in orders\"><tr><td colspan=\"99\"><div class=\"order-title\"><span>订单号: {{order.orderId}}</span> <span>下单时间: <span ng-bind=\"order.createdAt | date:\'yyyy-MM-dd HH:mm\'\"></span></span> <a ng-if=\"level != 1\">供应商: {{ order.provider.nickname }}</a> <a style=\"margin-left: 20px;\" ng-if=\"level == 3 || level == 0\" ng-click=\"showContact(order);\">联系分销商</a></div></td></tr><tr><td><div><div ng-if=\"level != 2\">订单来源： {{ order.contactname }}</div><a ng-if=\"level == 1\" target=\"_blank\" ui-sref=\"sale.show-product({productId: \'{{order.product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\"><span ng-repeat=\"prefix in order.product.prefixArray track by $index\">[{{ prefix }}]</span> {{ order.product.fullName }}</a> <a ng-if=\"level != 1\" target=\"_blank\" ui-sref=\"home.show-product-detail({productId: \'{{order.product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\"><span ng-repeat=\"prefix in order.product.prefixArray track by $index\">[{{ prefix }}]</span> {{ order.product.fullName }}</a></div></td><td><div class=\"detail\"><p ng-if=\"level == 3 || level == 0 || level == 2\">结算价<strong>￥{{ order.adult * order.price.adultCompanyPrice + order.child * order.price.childCompanyPrice }}</strong></p><p ng-if=\"level == 3 || level == 0 || level == 1\">销售价<strong>￥{{ order.adult * order.price.adultCompanySalePrice + order.child * order.price.childCompanySalePrice }}</strong></p><p ng-if=\"level == 3 || level == 2 || level == 1\">同行价<strong>￥{{ order.adult * order.price.adultCompanyCompetitorPrice + order.child * order.price.childCompanyCompetitorPrice }}</strong></p><div>成人：{{ order.adult }}人 儿童：{{ order.child }}人</div><div>出团时间: {{ order.startDate }}</div></div></td><td><div class=\"status\"><p><strong ng-if=\"order.status == 1\">未付款(等待确认)</strong> <strong ng-if=\"order.status == 2\">未付款(已确认)</strong> <strong ng-if=\"order.status == 3\">已付款(等待确认)</strong> <strong ng-if=\"order.status == 8\">已付款(等待供应商确认)</strong> <strong ng-if=\"order.status == 4\">已完成</strong> <strong ng-if=\"order.status == 5\">申请退款</strong> <strong ng-if=\"order.status == 6\">申请取消</strong> <strong ng-if=\"order.status == 7\">订单已取消</strong></p><md-button ng-if=\"(level == 0 || level == 3) && order.status == 1\" ng-click=\"verifyUnpaid(order);\" class=\"md-raised md-primary\">审核通过</md-button><md-button ng-if=\"(level == 1) && order.status == 2\" ng-click=\"paid(order);\" class=\"md-raised md-primary\">确认付款</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 3\" ng-click=\"verifyFinished(order);\" class=\"md-raised md-primary\">确认交易完成</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 5\" ng-click=\"confirmRevoke(order);\" class=\"md-raised md-primary\">确认退款</md-button><md-button ng-if=\"(level == 0 || level == 3) && order.status == 6\" ng-click=\"confirmRevoke(order);\" class=\"md-raised md-primary\">确认取消订单</md-button></div></td><td><div class=\"operation\"><a ng-if=\"level == 1\" target=\"_blank\" ui-sref=\"sale.show-order-detail({orderId: \'{{order.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a> <a ng-if=\"level != 1\" target=\"_blank\" ui-sref=\"home.show-order-detail({orderId: \'{{order.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\">显示详情</a><a ng-if=\"(level == 1) && order.status == 1\" ng-click=\"editOrder(order.objectId);\" class=\"md-raised md-primary\">修改订单</a> <a ng-if=\"level == 1 && order.status == 1\" ng-click=\"cancelOrder(order);\">取消订单</a> <a ng-if=\"level == 3 || level == 0 && order.status == 1\" ng-click=\"cancelUnpaid(order);\">取消订单</a> <a ng-if=\"level == 1 && order.status == 2\" ng-click=\"applyCancel(order);\">申请取消订单</a> <a ng-if=\"level == 1 && (order.status == 3 || order.status == 4 || order.status == 5)\" ng-click=\"applyRevoke(order);\">申请退款</a></div></td></tr></tbody></table><ul uib-pagination=\"\" total-items=\"totalOrders\" items-per-page=\"10\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></ul></md-content></div>");
$templateCache.put("app/common/sale/order/show_order_detail.html","<table><tr><td colspan=\"99\" class=\"title\">预订信息</td></tr><tr ng-if=\"level != 2\"><td>联系人</td><td colspan=\"99\">{{ order.contactname }}</td></tr><tr ng-if=\"level != 2\"><td>联系方式</td><td colspan=\"99\">{{ order.cellphone }}</td></tr><tr ng-if=\"level != 2\"><td>邮件</td><td colspan=\"99\">{{ order.email }}</td></tr><tr><td colspan=\"99\" class=\"title\">计调员信息</td></tr><tr><td>姓名</td><td colspan=\"99\">{{ product.platformcontact.contactname }}</td></tr><tr><td>电话</td><td colspan=\"99\">{{ product.platformcontact.cellphone }}</td></tr><tr><td>邮箱</td><td colspan=\"99\">{{ product.platformcontact.email }}</td></tr><tr><td colspan=\"99\" class=\"title\">产品信息</td></tr><tr><td>产品编号</td><td>产品名称</td><td>出发城市</td><td>出游人数</td><td>订单金额</td></tr><tr><td>{{ order.objectId }}</td><td><p><span ng-repeat=\"prefix in product.prefixArray\">[{{ prefix }}]</span> {{ product.fullName }}</p></td><td>{{ product.startCity }}</td><td><span>成人: {{ order.adult }}人</span> <span>/</span> <span>儿童: {{ order.child }}人</span></td><td><p ng-if=\"level == 3 || level == 0 || level == 2\">结算价<strong>￥{{ order.adult * order.price.adultCompanyPrice + order.child * order.price.childCompanyPrice }}</strong></p><br><p ng-if=\"level == 3 || level == 0 || level == 1\">销售价<strong>￥{{ order.adult * order.price.adultCompanySalePrice + order.child * order.price.childCompanySalePrice }}</strong></p><br><p ng-if=\"level == 3 || level == 2 || level == 1\">同行价<strong>￥{{ order.adult * order.price.adultCompanyCompetitorPrice + order.child * order.price.childCompanyCompetitorPrice }}</strong></p></td></tr><tr><td colspan=\"99\" class=\"title\">团费</td></tr><tr><td>类型</td><td>数量</td><td>单价</td><td>小计</td></tr><tr><td>成人</td><td><counter ng-show=\"isEditing\" ng-model=\"order.adult\"></counter><p ng-if=\"!isEditing\">{{ order.adult }}</p></td><td>{{ order.price.adultCompanySalePrice }}</td><td>{{ order.price.adultCompanySalePrice * order.adult}}</td></tr><tr><td>儿童</td><td><counter ng-show=\"isEditing\" ng-model=\"order.child\"></counter><p ng-if=\"!isEditing\">{{ order.child }}</p></td><td>{{ order.price.childCompanySalePrice }}</td><td>{{ order.price.childCompanySalePrice * order.child }}</td></tr><tr ng-if=\"order.extraRoomNumber\"><td>全程单房差</td><td>{{ order.extraRoomNumber }}</td><td>{{ order.price.singleRoomDifference }}</td><td>{{ order.price.singleRoomDifference * order.extraRoomNumber }}</td></tr><tr ng-repeat=\"item in order.extraItems\"><td>{{ item.name }}</td><td>{{ item.count }}</td><td>{{ item.price }}</td><td>{{ item.totalPrice }}</td></tr><tr><td>总计</td><td></td><td></td><td>{{ order.totalPrice }}</td></tr><tr><td colspan=\"99\" class=\"title\">游客信息</td></tr><tr><th>姓名</th><th>类型</th><th>性别</th><th>证件类型</th><th>证件号码</th><th>手机</th><th>出生日期</th><th>备注</th></tr><tr ng-if=\"!isEditing\" ng-repeat=\"customer in order.customers\"><td>{{ customer.name }}</td><td>{{ customer.type }}</td><td>{{ customer.sex }}</td><td>{{ customer.license }}</td><td>{{ customer.licenseNumber }}</td><td>{{ customer.cellphone }}</td><td>{{ customer.birthDate }}</td><td><p ng-if=\"customer.needShare\">需要拼房</p><p ng-if=\"customer.needVisa\">需要签证</p><p ng-if=\"customer.needExtra\">需要补房</p></td></tr><tr ng-if=\"isEditing\" ng-repeat=\"customer in order.customers\"><td><input type=\"text\" ng-model=\"customer.name\"></td><td><md-input-container><md-select ng-model=\"customer.type\"><md-option ng-value=\"type\" ng-repeat=\"type in types\">{{ type }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.sex\"><md-option ng-value=\"sex\" ng-repeat=\"sex in sexList\">{{ sex }}</md-option></md-select></md-input-container></td><td><md-input-container><md-select ng-model=\"customer.license\"><md-option ng-value=\"license\" ng-repeat=\"license in licenseList\">{{ license }}</md-option></md-select></md-input-container></td><td><input type=\"text\" ng-model=\"customer.licenseNumber\"></td><td><input type=\"text\" ng-model=\"customer.cellphone\"></td><td class=\"birthDate\"><input ng-model=\"customer.birthDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" container=\"body\" data-autoclose=\"true\"></td><td class=\"extra\"><div><input type=\"checkbox\" ng-model=\"customer.needVisa\"> 需要办签</div><div><input type=\"checkbox\" ng-model=\"customer.needShare\"> 需要拼房</div><div><input type=\"checkbox\" ng-model=\"customer.needExtra\"> 需要补房</div></td></tr><tr ng-if=\"order.revoke\"><td colspan=\"99\" class=\"title\">退款信息</td></tr><tr ng-if=\"order.revoke\"><td>退款理由</td><td colspan=\"99\">{{ order.revoke.reason }}</td></tr><tr ng-if=\"order.revoke && level != 2\"><td>客人损失金额</td><td colspan=\"99\">{{ order.revoke.lostmoney }}</td></tr><tr ng-if=\"order.revoke\"><td>申请人</td><td colspan=\"99\">{{ order.revoke.person }}</td></tr><tr ng-if=\"order.revoke\"><td>手机</td><td colspan=\"99\">{{ order.revoke.phone }}</td></tr></table><div ng-if=\"isEditing\" class=\"center\"><md-button class=\"md-raised md-primary\" ng-click=\"changeOrder();\">修改订单</md-button></div>");
$templateCache.put("app/common/sale/search/search.html","<div class=\"selected-tags\" ng-if=\"selectedTags\"><div ng-repeat=\"(key, value) in selectedTags\"><span class=\"key-span\">{{ key }}:</span> <span class=\"value-span\">{{ value }}</span> <a class=\"cancel-icon\" ng-click=\"removeTag(key);\"></a></div></div><table class=\"search-option\"><tr><td>出发日期</td><td><span ng-class=\"{\'selected-tag\': !showDate}\" ng-click=\"showDate = false\" class=\"unlimited\">不限</span> <span ng-class=\"{\'selected-tag\': showDate}\" ng-click=\"showDate = true\" class=\"unlimited\">选择出发日期</span><div ng-show=\"showDate\" class=\"date-wrapper\" layout=\"row\"><input ng-model=\"startDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"><div class=\"separator\">-</div><input ng-model=\"endDate\" type=\"text\" data-date-type=\"string\" data-model-date-format=\"mediumDate\" bs-datepicker=\"\" data-date-format=\"mediumDate\" data-autoclose=\"true\"></div></td></tr><tr class=\"selectable\"><td>出发城市</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'出发城市\'] == -1}\" ng-click=\"pick(\'出发城市\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'出发城市\']}\" ng-click=\"pick(\'出发城市\', $index)\" ng-repeat=\"start in tags[\'出发城市\']\">{{ start }}</span></td></tr><tr><td>行程天数</td><td class=\"selectable\"><div class=\"stop-day\"><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'行程天数\'] == -1}\" ng-click=\"pick(\'行程天数\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'行程天数\']}\" ng-click=\"pick(\'行程天数\', $index)\" ng-repeat=\"day in tags[\'行程天数\']\">{{ day }}天</span></div></td></tr><tr class=\"selectable\"><td>酒店星级</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'酒店标准\'] == -1}\" ng-click=\"pick(\'酒店标准\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'酒店标准\']}\" ng-click=\"pick(\'酒店标准\', $index)\" ng-repeat=\"hotel in tags[\'酒店标准\']\">{{ hotel }}</span></td></tr><tr class=\"selectable\"><td>出行方式</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'交通方式\'] == -1}\" ng-click=\"pick(\'交通方式\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'交通方式\']}\" ng-click=\"pick(\'交通方式\', $index)\" ng-repeat=\"transport in tags[\'交通方式\']\">{{ transport }}</span></td></tr><tr class=\"selectable\"><td>类型</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'类型\'] == -1}\" ng-click=\"pick(\'类型\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'类型\']}\" ng-click=\"pick(\'类型\', $index)\" ng-repeat=\"type in tags[\'类型\']\">{{ type }}</span></td></tr><tr class=\"selectable\"><td>大区</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'大区\'] == -1}\" ng-click=\"pick(\'大区\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'大区\']}\" ng-click=\"pick(\'大区\', $index)\" ng-repeat=\"type in tags[\'大区\']\">{{ type }}</span></td></tr><tr class=\"selectable\" ng-if=\"tags[\'分区\'].length > 0\"><td>分区</td><td><span class=\"unlimited\" ng-class=\"{\'selected-tag\': index[\'分区\'] == -1}\" ng-click=\"pick(\'分区\', -1)\">不限</span> <span class=\"unlimited\" ng-class=\"{\'selected-tag\': $index==index[\'分区\']}\" ng-click=\"pick(\'分区\', $index)\" ng-repeat=\"type in tags[\'分区\']\">{{ type }}</span></td></tr><tr><td>目的地</td><td><div class=\"keyword\"><input type=\"text\" placeholder=\"请输入目的地关键词\" ng-model=\"destination\"><md-button class=\"md-raised md-primary\" ng-click=\"search();\">确认搜索</md-button></div></td></tr></table><div class=\"products\"><div ng-activity-indicator=\"\" class=\"activity-indicator\"></div><div class=\"product\" ng-repeat=\"product in products\"><div class=\"left\"><a class=\"product-title\" target=\"_blank\" ui-sref=\"sale.show-product({productId: \'{{product.objectId}}\' })\" ui-sref-opts=\"{ absolute: true }\"><span ng-repeat=\"prefix in product.prefixArray track by $index\"><span>[</span> <span>{{ prefix }}</span> <span>]</span></span> <span>{{product.fullName}}</span></a><div class=\"metadata\"><span>出发地: {{ product.startCity }}</span> <span>行程天数：{{ product.duration }}天{{ product.hotelDuration }}晚</span> <span>最近班期： <em ng-repeat=\"date in product.priceDate\" class=\"date\">{{ date }}</em></span></div><div class=\"metadata\"><span>线路编号：{{ product.productId }}</span></div></div><div class=\"right\"><div class=\"pricebox\"><span>门市价 <em><span class=\"large\">￥{{ product.latestAdultCompanySalePrice }}</span></em></span></div><div><a href=\"{{ product.fileUrl }}\"><md-button class=\"md-raised md-primary\">打印行程单</md-button></a> <a ng-show=\"!product.show\" ng-click=\"product.show = true\">查询报价</a> <a ng-show=\"product.show\" ng-click=\"product.show = false\">隐藏报价</a></div></div><div ng-show=\"product.show\"><table><tr><th>出发日期</th><th>市场价</th><th>余位</th></tr><tr ng-repeat=\"price in product.priceArray\"><td>{{ price.startDate }}</td><td>{{ price.adultCompanySalePrice }}</td><td>{{ price.restPeopleNumber }}</td></tr></table></div><hr></div><div>共找到 {{ totalProducts }} 个结果</div><ul uib-pagination=\"\" total-items=\"totalProducts\" items-per-page=\"20\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></ul></div>");
$templateCache.put("app/common/sale/search/show_product.html","<section class=\"product-top\"><div class=\"title-block\"><div class=\"product-title\"><span class=\"product-tag\">{{ product.area }}</span><h1><span ng-repeat=\"prefix in product.prefixArray\"><span>[</span> <span>{{ prefix }}</span> <span>]</span></span> <span>{{product.fullName}}</span></h1></div><div class=\"product-metadata\"><span><label ng-if=\"product.start.city != \'市辖区\'\">{{ product.start.city }}出发</label> <label ng-if=\"product.start.city == \'市辖区\'\">{{ product.start.province }}出发</label> 线路编号:{{ product.objectId }}</span></div></div></section><section class=\"product-center\" layout=\"row\"><div class=\"left\"><calendar-md flex=\"\" layout=\"\" layout-fill=\"\" calendar-direction=\"direction\" on-prev-month=\"prevMonth\" on-next-month=\"nextMonth\" on-day-click=\"dayClick\" title-format=\"\'MMMM y\'\" ng-model=\"selectedDate\" day-format=\"\'d\'\" day-label-format=\"\'EEE\'\" day-label-tooltip-format=\"\'EEEE\'\" day-tooltip-format=\"\'fullDate\'\" week-starts-on=\"firstDayOfWeek\" day-content=\"setDayContent\"></calendar-md></div><div class=\"right\"><div class=\"detail-info\"><div class=\"detail-item\"><label class=\"detail-key\"><strong>行程天数:</strong> <span>{{ product.duration }}天{{ product.hotelDuration }}晚</span></label> <label class=\"detail-key\"><strong>往返交通:</strong> <span>{{ product.transportStandard }}</span></label></div><div class=\"detail-item\"><label class=\"detail-key\"><strong>平台方联系人:</strong> <span>{{ product.platformcontact.contactname }}</span></label> <label class=\"detail-key\"><strong>联系电话:</strong> <span>{{ product.platformcontact.cellphone }}</span></label></div></div><div class=\"detail-reserve\"><div class=\"reserve-info\"><span>建议至少提前 <strong>{{ product.stopDay }}</strong> 天预订</span></div><div class=\"reserve-time\"><label>出发日期:</label><div class=\"timebox\">{{ product.latestDate }} <span>{{ product.latestAdultCompanySalePrice }}</span> 元/成人价, <span>{{ product.latestChildCompanySalePrice }}</span> 元/儿童价</div></div><div class=\"reserve-time\"><label>预订人数:</label><div class=\"people\"><span>成人</span><counter ng-model=\"adult\"></counter><span>儿童</span><counter ng-model=\"child\"></counter></div></div><div class=\"center\"><md-button class=\"md-raised md-primary\" ng-click=\"order();\">预订</md-button></div></div><div class=\"button-list\"><div class=\"icon\"><i class=\"print-icon fa fa-print\" aria-hidden=\"true\"></i> <a href=\"{{ product.fileUrl }}\">打印行程</a></div></div></div></section><section class=\"product-information\"><md-tabs md-dynamic-height=\"\" md-border-bottom=\"\"><md-tab label=\"行程信息\"><div ng-repeat=\"itinerary in product.itinerary\" class=\"itinerary\"><div class=\"dayitem\"><span class=\"d\">第{{$index + 1}}天</span> <span class=\"s\">{{ itinerary.title }}</span></div><div class=\"cyitem\"><p class=\"s1\"><strong>餐饮</strong></p><p>早 <span>{{ itinerary.food.morning }}</span></p><p>中 <span>{{ itinerary.food.noon }}</span></p><p>晚 <span>{{ itinerary.food.evening }}</span></p><p></p><p class=\"s2\"><strong>住宿</strong> {{ itinerary.hotelDetail }}或同级{{ itinerary.hotel }}</p><p class=\"s3\"><strong>参考航班/火车班次</strong> {{ itinerary.flight }}</p></div><div class=\"detail\" ng-bind-html=\"getItinerary($index);\"></div></div></md-tab><md-tab label=\"费用说明\"><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">费用包含</span></div><div class=\"detail\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.priceInclude\"></textarea></div></div><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">费用不含</span></div><div class=\"detail\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.priceExclude\"></textarea></div></div><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">自费项目</span></div><div class=\"detail\" style=\"width: 80%;\"><table><tr><th>项目</th><th>内容</th><th>费用</th></tr><tr ng-repeat=\"item in product.selfPaidList.items\"><td>{{ item.name }}</td><td>{{ item.description }}</td><td>{{ item.fee }}</td></tr></table></div></div></md-tab><md-tab label=\"签证信息\"><div class=\"visa-info\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.visaInfo\"></textarea></div></md-tab><md-tab label=\"温馨提示\"><div class=\"visa-info\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.reminder\"></textarea></div></md-tab><md-tab label=\"购物信息\"><div class=\"visa-info\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.shoppingInfo\"></textarea></div></md-tab><md-tab label=\"预订须知\"><div class=\"tab-item\"><div class=\"visa-info\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.reserveInfo\"></textarea></div></div><div class=\"tab-item\"><div class=\"fyitem-wrapper\"><span class=\"fyitem\">收客限制</span></div><div class=\"detail\"><textarea class=\"msd-elastic\" ng-disabled=\"true\" ng-model=\"product.restriction\"></textarea></div></div></md-tab></md-tabs></section>");
$templateCache.put("app/common/product/directives/itinerary/add.html","<div class=\"modal-header\"><h3 class=\"modal-title\">添加行程信息</h3></div><div class=\"modal-body\"><table><tr><td>日期</td><td><input type=\"text\" ng-model=\"date\" placeholder=\"日期\" bs-datepicker=\"\" autoclose=\"true\"></td></tr><tr><td>路线</td><td><input type=\"text\" ng-model=\"start\" placeholder=\"起始点\"><p>-</p><input type=\"text\" ng-model=\"end\" placeholder=\"目的地\"></td></tr><tr><td>住宿</td><td><input type=\"text\" placeholder=\"住宿情况\" ng-model=\"hotel\"></td></tr><tr><td>餐饮</td><td><input type=\"text\" ng-model=\"cafe\" value=\"asdasd\"></td></tr><tr><td>交通</td><td><input type=\"text\" ng-model=\"transportation\"></td></tr><tr><td>出发时间</td><td><input type=\"text\" ng-model=\"startTime\"></td></tr><tr><td>游览行程</td><td colspan=\"4\"><textarea msd-elastic=\"\" style=\"width: 400px;\" ng-model=\"detail\"></textarea></td></tr></table></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">取消</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"add()\">确认</button></div>");
$templateCache.put("app/common/product/directives/product-address/address.html","<style>\n    .select-address {\n        overflow: hidden;\n        position:fixed;\n        left: 50%;\n        z-index: 19911125;\n        transition:0.3s;\n        box-shadow: 0 3px 12px rgba(0,0,0,.175);\n        background: #fff;\n        display: none;\n    }\n    .select-address.active {\n        top: 0!important;\n    }\n    .select-address-container ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n    }\n    .select-address-container ul li {\n        width: 240px;\n        padding: 10px;\n        display: table-cell;\n        vertical-align: middle;\n    }\n    .select-address-container ul li:nth-child(even) {\n        background: #eee;\n    }\n    .select-address-container ul li span {\n        font-size: 13px;\n        list-style: none;\n        display: inline-block;\n        margin:5px 7px;\n        cursor: pointer;\n    }\n    .select-address-footer {\n        border-top: 1px solid #eee;\n        padding: 10px 15px;\n        overflow: hidden;\n    }\n    .select-address-footer input {\n        min-width: 50%;\n    }\n</style><div class=\"select-address form-inline\"><div class=\"select-address-container\"><ul><li><span ng-repeat=\"item in provinces\" ng-click=\"aSet.p(item.p)\" ng-class=\"{\'label label-success\': p === item.p}\">{{item.p}} {{x}}</span></li><li ng-if=\"cities\"><span ng-repeat=\"item in cities\" ng-click=\"aSet.c(item.n)\" ng-class=\"{\'label label-success\': c === item.n}\">{{item.n}}</span></li><li ng-if=\"c\"><span ng-repeat=\"item in dists\" ng-click=\"aSet.a(item.s)\" ng-class=\"{\'label label-success\': a === item.s}\">{{item.s}}</span><h5 ng-if=\"!dists\" class=\"text-muted text-center\">没有县级资料</h5></li></ul></div><div class=\"select-address-footer\"><span class=\"pull-right\"><button ng-click=\"clear()\" class=\"btn btn-sm btn-link\">清空</button> <button ng-click=\"submit()\" class=\"btn btn-sm btn-success\" type=\"submit\">确定</button></span> <strong class=\"text-danger\">{{ p }} {{ c }} {{ a }}</strong> <input ng-show=\"p\" ng-model=\"d\" class=\"form-control input-sm\" type=\"text\" placeholder=\"具体街道\"></div></div>");
$templateCache.put("app/common/product/directives/textField/textField.html","<td>{{ label }}:</td><td colspan=\"{{ maximumColumn }}\"><input ng-if=\"isEditing\" class=\"input-field\" type=\"text\" name=\"{{key}}\"><div ng-if=\"!isEditing\">{{ value }}</div></td>");
$templateCache.put("app/common/product/directives/providerSideBar/providerSideBar.html","<md-sidenav class=\"md-sidenav-left\" md-component-id=\"provider-side-bar\" md-is-locked-open=\"true\" md-whiteframe=\"6\"><md-toolbar class=\"md-theme-indigo search\"><h1 class=\"md-toolbar-tools\">选择供应商</h1></md-toolbar><p style=\"margin-bottom: 20px;\" ng-if=\"isLoading\">正在加载请稍等...若加载过慢,请刷新.</p><div><p>选择供应商类型</p><md-input-container><md-select ng-model=\"tag\" ng-change=\"updateTag();\"><md-option ng-value=\"area\" ng-selected=\"$first\" ng-repeat=\"area in areas\">{{ area }}</md-option></md-select></md-input-container></div><div ng-if=\"providers.length > 0 && !isLoading\" angucomplete-alt=\"\" id=\"ex1\" placeholder=\"搜索供应商\" pause=\"100\" selected-object=\"selectProvider\" local-data=\"providers\" local-search=\"searchProvider\" title-field=\"nickname,companyname\" auto-match=\"true\" minlength=\"0\" input-class=\"form-control form-control-small\"></div><div><md-content layout-padding=\"\" ng-repeat=\"provider in filterProviders\"><md-button ng-click=\"pickProvider($index)\" class=\"md-primary button\">{{ provider.nickname }} ({{ provider.companyname}})</md-button></md-content></div></md-sidenav>");
$templateCache.put("app/common/provider/directives/address/address.html","<div class=\"address\" layout=\"row\" layout-align=\"start center\"><div layout=\"row\" layout-align=\"start center\"><div class=\"label\">省份:</div><md-input-container><md-select class=\"margin\" ng-if=\"isEditing\" ng-model=\"$parent.province\"><md-option ng-value=\"province.name\" ng-repeat=\"province in provinces\">{{province.name}}</md-option></md-select></md-input-container><p class=\"value\" ng-if=\"!isEditing\">{{ province }}</p></div><div layout-align=\"start center\" layout=\"row\"><div class=\"label\">城市:</div><md-input-container><md-select class=\"margin\" ng-if=\"isEditing\" ng-model=\"$parent.city\"><md-option ng-value=\"city.name\" ng-repeat=\"city in cities\">{{city.name}}</md-option></md-select></md-input-container><p class=\"value\" ng-if=\"!isEditing\">{{ city }}</p></div><div layout=\"row\" layout-align=\"start center\"><div class=\"margin label\">地址:</div><input ng-if=\"isEditing\" class=\"margin\" ng-disabled=\"!isEditing\" type=\"text\" ng-model=\"$parent.detail\"><div ng-if=\"!isEditing\">{{ detail }}</div></div></div>");
$templateCache.put("app/common/provider/directives/password/password.html","<div><div class=\"inline\">新密码:</div><input class=\"inline\" type=\"password\" ng-model=\"password\" ng-blur=\"verify();\" ng-focus=\"focus();\"><div class=\"inline\">确认密码:</div><input class=\"inline\" type=\"password\" ng-model=\"password2\" ng-blur=\"verify();\" ng-focus=\"focus();\"><div id=\"verified\" class=\"inline input-field\"></div></div>");
$templateCache.put("app/common/provider/directives/menu/menu.html","<td>{{label}}</td><td><md-select ng-if=\"isEditing\" ng-change=\"onValueChange();\" ng-model=\"selectValue\" aria-label=\"select\"><md-option ng-selected=\"$first\" ng-value=\"option\" ng-repeat=\"option in options\">{{option}}</md-option></md-select><p ng-if=\"!isEditing\">{{ value }}</p><input name=\"{{ name }}\" type=\"hidden\" value=\"{{ value }}\"></td>");
$templateCache.put("app/common/provider/directives/returnPolicy/returnPolicy.html","<div><div class=\"block\"><div>全年总人数: <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"returnTotalPeople\" ng-value=\"provider.returnTotalPeople\" ng-change=\"test();\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnTotalPeople }}</p>(人)</div><div>加返 <input ng-if=\"isEditing\" type=\"text\" ng-disabled=\"!isEditing\" ng-model=\"returnPolicy.returnMoneyEachPeople\" ng-value=\"provider.returnMoneyEachPeople\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnMoneyEachPeople }}</p>(元/人)</div></div><div class=\"block\"><div>全年销售额: <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"returnPolicy.returnTotalRevenue\" ng-value=\"provider.returnTotalRevenue\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnTotalRevenue }}</p>(元)</div><div>加返 <input ng-if=\"isEditing\" type=\"number\" ng-disabled=\"!isEditing\" ng-model=\"returnPolicy.returnMoneyRevenue\" ng-value=\"provider.returnMoneyRevenue\"><p ng-if=\"!isEditing\">{{ returnPolicy.returnMoneyRevenue }}</p>(元)</div></div></div>");
$templateCache.put("app/common/product/directives/providerSideBar/contact/myModalContent.html","<div class=\"modal-header\"><h3 class=\"modal-title\">联系信息</h3></div><div class=\"modal-body\"><ul><li ng-repeat=\"item in contact\">{{ item.key }}: {{ item.value }}</li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">返回</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"showDetails()\">查看详情</button></div>");
$templateCache.put("app/common/product/directives/providerSideBar/search/advanceProviderSearch.html","<div class=\"modal-header\"><h3 class=\"modal-title\">高级搜索</h3></div><div class=\"modal-body\"><ul><li><p>供应商名称</p><input type=\"text\" ng-model=\"keyword\"></li><li><p>服务地区</p><input type=\"text\" ng-model=\"mainDestination\"></li><li><p>服务类型</p><md-select ng-model=\"servingType\" placeholder=\"选择服务类型\"><md-option ng-value=\"type.key\" ng-repeat=\"type in types\">{{type.value}}</md-option></md-select></li></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">返回</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"search()\">搜索</button></div>");
$templateCache.put("app/common/sale/search/directives/calendar/calendar.html","<md-content layout=\"column\" layout-fill=\"\" md-swipe-left=\"next()\" md-swipe-right=\"prev()\"><md-toolbar><div class=\"md-toolbar-tools\" layout=\"row\"><md-button class=\"md-icon-button\" ng-click=\"prev()\" aria-label=\"Previous month\"><md-tooltip ng-if=\"::tooltips()\">Previous month</md-tooltip><md-icon md-svg-icon=\"md-tabs-arrow\"></md-icon></md-button><div flex=\"\"></div><h2 class=\"calendar-md-title\"><span>{{ calendar.start | date:titleFormat:timezone }}</span></h2><div flex=\"\"></div><md-button class=\"md-icon-button\" ng-click=\"next()\" aria-label=\"Next month\"><md-tooltip ng-if=\"::tooltips()\">Next month</md-tooltip><md-icon md-svg-icon=\"md-tabs-arrow\" class=\"moveNext\"></md-icon></md-button></div></md-toolbar><md-content ng-if=\"weekLayout === columnWeekLayout\" class=\"agenda\"><div ng-repeat=\"week in calendar.weeks track by $index\"><div ng-if=\"sameMonth(day)\" ng-class=\'{\"disabled\" : isDisabled(day), active: active === day, \"has-events\": hasEvents(day) }\' ng-click=\"handleDayClick(day)\" ng-repeat=\"day in week\" layout=\"\"><md-tooltip ng-if=\"::tooltips()\">{{ day | date:dayTooltipFormat:timezone }}</md-tooltip><div>{{ day | date:dayFormat:timezone }}</div><div flex=\"\" ng-bind-html=\"dataService.data[dayKey(day)]\"></div></div></div></md-content><md-content ng-if=\"weekLayout !== columnWeekLayout\" flex=\"\" layout=\"column\" class=\"calendar\"><div layout=\"row\" class=\"subheader\"><div layout-padding=\"\" class=\"subheader-day\" flex=\"\" ng-repeat=\"day in calendar.weeks[0]\"><md-tooltip ng-if=\"::tooltips()\">{{ day | date:dayLabelTooltipFormat }}</md-tooltip>{{ day | date:dayLabelFormat }}</div></div><div ng-if=\"week.length\" ng-repeat=\"week in calendar.weeks track by $index\" flex=\"\" layout=\"row\"><div tabindex=\"{{ sameMonth(day) ? (day | date:dayFormat:timezone) : 0 }}\" ng-repeat=\"day in week track by $index\" ng-click=\"handleDayClick(day)\" flex=\"\" layout=\"\" layout-padding=\"\" ng-class=\'{\"disabled\" : isDisabled(day), \"active\": isActive(day), \"has-events\": hasEvents(day), \"md-whiteframe-12dp\": hover || focus }\' ng-focus=\"focus = true;\" ng-blur=\"focus = false;\" ng-mouseleave=\"hover = false\" ng-mouseenter=\"hover = true\"><md-tooltip ng-if=\"::tooltips()\">{{ day | date:dayTooltipFormat }}</md-tooltip><div>{{ day | date:dayFormat }}</div><div flex=\"\" ng-bind-html=\"dataService.data[dayKey(day)]\" id=\"{{ day | date:dayIdFormat }}\"></div></div></div></md-content></md-content>");
$templateCache.put("app/common/sale/search/directives/filter/filter.html","<div class=\"modal-header\"><h3 class=\"modal-title\">高级搜索</h3></div><div class=\"modal-body\"><ul><li><strong>关键词</strong> <input type=\"text\" ng-model=\"keyword\"></li><li><strong>出发日期</strong> <a ng-class=\"{active: startLimit}\" ng-click=\"setStartLimit();\">不限</a> <input type=\"text\" class=\"inline\" data-date-format=\"yyyy-MM-dd\" ng-blur=\"setStartBlur();\" ng-model=\"startDate\" autoclose=\"true\" bs-datepicker=\"\"><div class=\"inline\">-</div><input type=\"text\" class=\"inline\" data-date-format=\"yyyy-MM-dd\" ng-blur=\"setStartBlur();\" ng-model=\"$parent.endDate\" autoclose=\"true\" bs-datepicker=\"\"></li><li><strong>价格范围</strong> <a ng-class=\"{active: priceLimit}\" ng-click=\"setPriceLimit();\">不限</a> <input type=\"number\" class=\"inline\" ng-model=\"priceMin\" ng-blur=\"setPriceBlur();\"><div class=\"inline\">-</div><input type=\"number\" class=\"inline\" ng-model=\"priceMax\" ng-blur=\"setPriceBlur();\"></li><li><strong>天数</strong> <label class=\"inline\" ng-repeat=\"day in days\"><input type=\"radio\" class=\"checkbox\" value=\"{{ day.value }}\" ng-click=\"setDay($index);\" name=\"days\"><p class=\"text\">{{ day.string }}</p></label></li></ul></div><div class=\"modal-footer\"><md-button class=\"md-raised\" ng-click=\"close()\">返回</md-button><md-button class=\"md-raised md-primary\" ng-click=\"search()\">搜索</md-button></div>");
$templateCache.put("app/common/sale/search/directives/reserve/reserve.html","<div class=\"modal-header\"><h3 class=\"modal-title\">预定</h3></div><div class=\"modal-body\"><div class=\"item\"><label>出发日期</label><md-input-container><md-select ng-model=\"reserve.date\"><md-option ng-value=\"price.date\" ng-repeat=\"(index, price) in priceArray\" ng-selected=\"index == selectedIndex\">{{price.date}} 成人<span style=\"color: #ff1a1a\">{{ price.price.adultCompanySalePrice }}</span>元, 儿童<span style=\"color: #ff1a1a\">{{ price.price.childCompanySalePrice }}</span>元</md-option></md-select></md-input-container></div><div class=\"item\"><label>预定人数</label> <span>成人</span><counter ng-model=\"reserve.adult\"></counter><span>儿童</span><counter ng-model=\"reserve.child\"></counter></div></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"close()\">确认</button> <button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">返回</button></div>");
$templateCache.put("app/common/sale/search/directives/signin/signin.html","<div class=\"modal-header\"><h3 class=\"modal-title\">{{ name }}报名表</h3></div><div class=\"modal-body\"><ul><li><strong>姓名</strong> <input type=\"text\" ng-model=\"username\"></li><li><strong>身份证</strong> <input type=\"text\" ng-model=\"identifier\"></li><li><strong>联系电话</strong> <input type=\"text\" ng-model=\"phone\"></li><li><strong>状态</strong><md-select placeholder=\"付款状态\" ng-model=\"state\" class=\"menu\"><md-option ng-value=\"opt.state\" ng-repeat=\"opt in options\">{{ opt.value }}</md-option></md-select></li></ul></div><div class=\"modal-footer\"><md-button class=\"md-raised\" ng-click=\"close()\">返回</md-button><md-button class=\"md-raised md-primary\" ng-click=\"signin()\">确认</md-button></div>");}]);