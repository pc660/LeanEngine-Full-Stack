/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  // 去掉路由中的「#」井号
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/auth/home/home.html',
      controller: 'homeCtrl'
    })
    .state('home.add-provider', {
      url: '/add-provider',
      templateUrl: 'app/common/provider/add.html',
      controller: 'addProviderCtrl',
    })
    .state('home.add-product', {
      url: '/add-product',
      templateUrl: 'app/common/product/add.html',
      controller: 'addProductCtrl',
    });

  $urlRouterProvider.otherwise('/');
};
