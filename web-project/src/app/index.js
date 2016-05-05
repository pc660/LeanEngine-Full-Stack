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

// service
import commonSer from './common/commonSer';
import helloSer from './auth/helloSer';

// directive
import headerDirect from './common/header/headerDirect';
import pageDirect from './common/directives/page/pageDirect';


// provider directive
import providerTextfield from './common/provider/directives/textField/textFieldDirect';
import providerMultiChoice from './common/provider/directives/multiChoice/multiChoiceDirect';
import providerAddress from './common/provider/directives/address/addressDirect';
import providerMenu from './common/provider/directives/menu/menuDirect';
import uploadButton from './common/provider/directives/upload/uploadDirect';
import returnPolicy from './common/provider/directives/returnPolicy/returnPolicyDirect';
import password from './common/provider/directives/password/passwordDirect';

// product directive
import providerSideBar from './common/product/directives/providerSideBar/providerSideBarDirect'; 
import productTextfield from './common/product/directives/textField/textFieldDirect'; 

// controller
import homeCtrl from './auth/home/homeCtrl';
import addProviderCtrl from './common/provider/addProviderCtrl';
import showProviderCtrl from './common/provider/showProviderCtrl';
import showProviderDetailCtrl from './common/provider/showProviderDetailCtrl';

import addProductCtrl from './common/product/addProductCtrl';
import modalCtrl from './common/product/directives/providerSideBar/contact/modalCtrl.js';
import showProductCtrl from './common/product/showProductCtrl.js';
import showProductDetailCtrl from './common/product/showProductDetailCtrl.js';
import addItineraryCtrl from './common/product/directives/itinerary/addCtrl.js';
import loginCtrl from './auth/home/loginCtrl';
import saleCtrl from './common/sale/saleCtrl';
import searchCtrl from './common/sale/search/searchCtrl';
import filterCtrl from './common/sale/search/directives/filter/filterCtrl';
import showItineraryCtrl from './common/product/showItineraryCtrl';
import signinCtrl from './common/sale/search/directives/signin/signinCtrl';
import showCustomerCtrl from './common/sale/customer/showCustomerCtrl';
import providerSearchCtrl from './common/product/directives/providerSideBar/search/advanceProviderSearchCtrl.js';


// factory
import authFac from './common/authFac';
import fileFac from './common/fileFac';
import providerFac from './common/providerFac';
import productFac from './common/productFac';
import itineraryFac from './common/itineraryFac';
import customerFac from './common/customerFac';

angular.module('webProject',
  ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngMaterial', 'base64', 'mgcrea.ngStrap',
    'ngFileUpload', 'angular-md5', 'ui.bootstrap', 'monospaced.elastic'])
  // 配置全局常量
  .constant('lcConfig', config)
  .constant('moment', window.moment)
  .constant('cityData', cityData)


  // 基础配置
  .config(httpConfig)
  .config(routerConfig)
  // 自动执行
  .run(authConfig)

  // services 初始化
  .service('commonSer', commonSer)
  .service('helloSer', helloSer)

  // directive 初始化
  .directive('lcHeader', headerDirect)
  .directive('pageControl', pageDirect)
  .directive('providerTextfield', providerTextfield)
  .directive('providerMultiChoice', providerMultiChoice)
  .directive('providerAddress', providerAddress)
  .directive('providerMenu', providerMenu)
  .directive('uploadButton', uploadButton)
  .directive('returnPolicy', returnPolicy)
  .directive('password', password)
  // product directive 初始化
  .directive('providerSideBar', providerSideBar)
  .directive('productTextfield', productTextfield)

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


  // factory
  .factory('authFac', authFac)
  .factory('fileFac', fileFac)
  .factory('providerFac', providerFac)
  .factory('productFac', productFac)
  .factory('itineraryFac', itineraryFac)
  .factory('customerFac', customerFac);

