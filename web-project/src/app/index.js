/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

import config from './config/config';
import httpConfig from './config/http';
import routerConfig from './config/route';
import i18nConfig from './i18n/config';
import authConfig from './config/auth';

import cityData from './config/city';

// data config
import multiChoiceConfig from './config/multiChoiceConfig';
import calendarConfig from './config/calendarConfig';
import dispatcherConfig from './config/dispatcherConfig';
import menuConfig from './config/menuConfig';
import formConfig from './config/formConfig';

// service
import commonSer from './common/commonSer';
import helloSer from './auth/helloSer';

// directive
import headerDirect from './common/header/headerDirect';
import pageDirect from './common/directives/page/pageDirect';
import multiChoiceDirect from './common/directives/multiChoice/multiChoiceDirect';
import calendarDirect from './common/directives/calendar/calendarDirect';
import textFieldDirect from './common/directives/textField/textFieldDirect';
import counterDirect from './common/directives/counter/counterDirect';
import templateDirect from './common/directives/template/templateDirect';
import inputFormDirect from './common/directives/inputForm/inputFormDirect';
import selectableTagDirect from './common/directives/selectable-tag/selectableTagDirect';

import address from './provider/directives/address/addressDirect';
import providerMenu from './provider/directives/menu/menuDirect';
import returnPolicy from './provider/directives/returnPolicy/returnPolicyDirect';
import password from './provider/directives/password/passwordDirect';

// product directive
import providerSideBar from './product/directives/providerSideBar/providerSideBarDirect';
import productTextfield from './product/directives/textField/textFieldDirect';

import productDirect from './sale/search/directives/product/productDirect';

// controller
import homeCtrl from './auth/home/homeCtrl';
import addProviderCtrl from './provider/addProviderCtrl';
import showProviderCtrl from './provider/showProviderCtrl';
import showProviderDetailCtrl from './provider/showProviderDetailCtrl';
import myAccountCtrl from './common/account/myAccountCtrl';

import addProductCtrl from './product/addProductCtrl';
import modalCtrl from './product/directives/providerSideBar/contact/modalCtrl.js';
import showProductCtrl from './product/showProductCtrl.js';
import showProductDetailCtrl from './product/showProductDetailCtrl.js';
import addItineraryCtrl from './product/directives/itinerary/addCtrl.js';
import loginCtrl from './auth/home/loginCtrl';
import saleCtrl from './sale/saleCtrl';
import searchCtrl from './sale/search/searchCtrl';
import filterCtrl from './sale/search/directives/filter/filterCtrl';
import showItineraryCtrl from './product/showItineraryCtrl';
import signinCtrl from './sale/search/directives/signin/signinCtrl';
import showCustomerCtrl from './sale/customer/showCustomerCtrl';
import providerSearchCtrl from './product/directives/providerSideBar/search/advanceProviderSearchCtrl.js';

import showProductSaleCtrl from './sale/search/showProductCtrl.js';
import searchMainCtrl from './sale/search/searchMainCtrl.js';

import reserveFormCtrl from './sale/search/directives/reserve/reserveFormCtrl.js';
import addOrderCtrl from './sale/order/addOrderCtrl.js';
import showOrderCtrl from './sale/order/showOrderCtrl.js';
import showOrderDetailCtrl from './sale/order/showOrderDetailCtrl.js';
import saleAccountCtrl from './sale/account/accountCtrl.js';

import formCtrl from './common/directives/form/formCtrl.js';
import applyRevokeCtrl from './sale/order/applyRevokeCtrl.js';

import showEmployeeCtrl from './common/employee/showEmployeeCtrl.js';

// factory
import authFac from './common/authFac';
import fileFac from './common/fileFac';
import providerFac from './common/providerFac';
import productFac from './common/productFac';
import itineraryFac from './common/itineraryFac';
import customerFac from './common/customerFac';
import userFac from './common/userFac';
import orderFac from './common/orderFac';
import testFac from './test/testFac';
import errorFac from './common/errorFac';

// Testing util
import fakeDataFac from './test/addFakeDataFac';
import testCtrl from './test/testCtrl';
import integrationTest from './test/integration/adminFlow';

angular.module('webProject',
  ['ngAnimate', 'ngCookies', 'ui.router', 'ngMaterial', 'base64', 'mgcrea.ngStrap',
    'ngFileUpload', 'angular-md5', 'ui.bootstrap', 'monospaced.elastic', 'angucomplete-alt',
    'materialCalendar', 'oitozero.ngSweetAlert', 'monospaced.elastic', 'ngActivityIndicator'])
  // 配置全局常量
  .constant('lcConfig', config)
  .constant('moment', window.moment)
  .constant('cityData', cityData)
  .constant('multiChoiceConfig', multiChoiceConfig)
  .constant('calendarConfig', calendarConfig)
  .constant('dispatcherConfig', dispatcherConfig)
  .constant('menuConfig', menuConfig)
  .constant('formConfig', formConfig)

  // 基础配置
  .config(httpConfig)
  .config(routerConfig)
  // 自动执行
  .run(authConfig)
  // services 初始化
  .service('commonSer', commonSer)
  .service('helloSer', helloSer)
  // directive 初始化
  // common directive 初始化
  .directive('multiChoice', multiChoiceDirect)
  .directive('calendar', calendarDirect)
  .directive('textField', textFieldDirect)
  .directive('counter', counterDirect)
  .directive('template', templateDirect)
  .directive('inputForm', inputFormDirect)

  .directive('lcHeader', headerDirect)
  .directive('pageControl', pageDirect)
  .directive('address', address)
  .directive('providerMenu', providerMenu)
  .directive('returnPolicy', returnPolicy)
  .directive('password', password)
  // product directive 初始化
  .directive('providerSideBar', providerSideBar)
  .directive('productTextfield', productTextfield)
  .directive('selectableTag', selectableTagDirect)
  .directive('product', productDirect)

  // controller 初始化
  .controller('homeCtrl', homeCtrl)
  .controller('addProviderCtrl', addProviderCtrl)
  .controller('showProviderCtrl', showProviderCtrl)
  .controller('addProductCtrl', addProductCtrl)
  .controller('modalCtrl', modalCtrl)
  .controller('showProductCtrl', showProductCtrl)
  .controller('showProductDetailCtrl', showProductDetailCtrl)
  .controller('addItineraryCtrl', addItineraryCtrl)
  .controller('loginCtrl', loginCtrl)
  .controller('saleCtrl', saleCtrl)
  .controller('searchCtrl', searchCtrl)
  .controller('filterCtrl', filterCtrl)
  .controller('showItineraryCtrl', showItineraryCtrl)
  .controller('signinCtrl', signinCtrl)
  .controller('showCustomerCtrl', showCustomerCtrl)
  .controller('providerSearchCtrl', providerSearchCtrl)
  .controller('showProviderDetailCtrl', showProviderDetailCtrl)
  .controller('myAccountCtrl', myAccountCtrl)
  .controller('showProductSaleCtrl', showProductSaleCtrl)
  .controller('reserveFormCtrl', reserveFormCtrl)
  .controller('addOrderCtrl', addOrderCtrl)
  .controller('showOrderCtrl', showOrderCtrl)
  .controller('showOrderDetailCtrl', showOrderDetailCtrl)
  .controller('formCtrl', formCtrl)
  .controller('saleAccountCtrl', saleAccountCtrl)
  .controller('searchMainCtrl', searchMainCtrl)

  .controller('applyRevokeCtrl', applyRevokeCtrl)

  .controller('showEmployeeCtrl', showEmployeeCtrl)


  // factory
  .factory('authFac', authFac)
  .factory('fileFac', fileFac)
  .factory('providerFac', providerFac)
  .factory('productFac', productFac)
  .factory('itineraryFac', itineraryFac)
  .factory('customerFac', customerFac)
  .factory('userFac', userFac)
  .factory('orderFac', orderFac)
  .factory('errorFac', errorFac)

  // testing
  .factory('fakeDataFac', fakeDataFac)
  .factory('testFac', testFac)
  .controller('testCtrl', testCtrl)
  .controller('integrationTest', integrationTest);

