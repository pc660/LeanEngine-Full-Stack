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

// service
import commonSer from './common/commonSer';
import helloSer from './auth/helloSer';

// directive
import headerDirect from './common/header/headerDirect';

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

// controller
import homeCtrl from './auth/home/homeCtrl';
import addProviderCtrl from './common/provider/addProviderCtrl';
import addProductCtrl from './common/product/addProductCtrl';
import modalCtrl from './common/product/directives/providerSideBar/contact/modalCtrl.js';

// factory
import authFac from './common/authFac';
import fileFac from './common/fileFac';
import providerFac from './common/providerFac';
import productFac from './common/productFac';

angular.module('webProject',
  ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngMaterial', 'base64', 'mgcrea.ngStrap',
    'ngFileUpload', 'angular-md5', 'ui.bootstrap'])
  // 配置全局常量
  .constant('lcConfig', config)
  .constant('moment', window.moment)

  // 基础配置
  .config(httpConfig)
  .config(routerConfig)
  // 自动执行
  .run(i18nConfig)

  // services 初始化
  .service('commonSer', commonSer)
  .service('helloSer', helloSer)

  // directive 初始化
  .directive('lcHeader', headerDirect)
  .directive('providerTextfield', providerTextfield)
  .directive('providerMultiChoice', providerMultiChoice)
  .directive('providerAddress', providerAddress)
  .directive('providerMenu', providerMenu)
  .directive('uploadButton', uploadButton)
  .directive('returnPolicy', returnPolicy)
  .directive('password', password)
  // product directive 初始化
  .directive('providerSideBar', providerSideBar)

  // controller 初始化
  .controller('homeCtrl', homeCtrl)
  .controller('addProviderCtrl', addProviderCtrl)
  .controller('addProductCtrl', addProductCtrl)
  .controller('modalCtrl', modalCtrl)

  // factory
  .factory('authFac', authFac)
  .factory('fileFac', fileFac)
  .factory('providerFac', providerFac)
  .factory('productFac', productFac);
