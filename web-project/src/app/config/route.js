/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default ($stateProvider, lcConfig, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  // try to figure out how to use a constant value
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: 'app/test/test.html',
      controller: 'integrationTest',
      authenticate: undefined,
    })
    .state('test.integration', {
      url: '/test/integration',
      templateUrl: 'app/test/test.html',
      controller: 'integrationTest',
      authenticate: undefined,
    });

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/home/login.html',
      controller: 'loginCtrl',
    });
  $stateProvider
    .state('sale', {
      url: '/sale',
      templateUrl: 'app/common/sale/index.html',
      controller: 'saleCtrl',
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('sale.search-product', {
      url: '/search',
      templateUrl: 'app/common/sale/search/search.html',
      controller: 'searchCtrl',
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('sale.show-product', {
      url: '/show-product/:productId',
      templateUrl: 'app/common/sale/search/show_product.html',
      controller: 'showProductSaleCtrl',
    })
    .state('sale.add-order', {
      url: '/add-order/:productId',
      templateUrl: 'app/common/sale/order/add_order.html',
      controller: 'addOrderCtrl',
      params: {
        product: null,
        reserve: null,
      },
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('sale.show-order', {
      url: '/show-order',
      templateUrl: 'app/common/sale/order/show_order.html',
      controller: 'showOrderCtrl',
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('sale.show-order-detail', {
      url: '/show-order-detail/:orderId',
      templateUrl: 'app/common/sale/order/show_order_detail.html',
      controller: 'showOrderDetailCtrl',
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('sale.show-itinerary', {
      url: '/itineray/:productId',
      templateUrl: 'app/common/product/itinerary.html',
      controller: 'showItineraryCtrl',
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('sale.show-customers', {
      url: '/customers',
      templateUrl: 'app/common/sale/customer/show.html',
      controller: 'showCustomerCtrl',
      authenticate: lcConfig.userLevel.SALE,
    });
  $stateProvider
    .state('home', {
      url: '/admin',
      templateUrl: 'app/auth/home/home.html',
      controller: 'homeCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
    })
    .state('home.add-provider', {
      url: '/add-provider',
      templateUrl: 'app/common/provider/add.html',
      controller: 'addProviderCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
      params: {
        provider: null,
      },
    })
    .state('home.show-orders', {
      url: '/show-order',
      templateUrl: 'app/common/sale/order/show_order.html',
      controller: 'showOrderCtrl',
      authenticate: lcConfig.userLevel.ADMIN,
    })
    .state('home.show-order-detail', {
      url: '/show-order-detail/:orderId',
      templateUrl: 'app/common/sale/order/show_order_detail.html',
      controller: 'showOrderDetailCtrl',
      authenticate: lcConfig.userLevel.SALE,
    })
    .state('home.show-provider-detail', {
      url: '/show-provider/:providerId',
      templateUrl: 'app/common/provider/add.html',
      controller: 'showProviderDetailCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
    })
    .state('home.add-product', {
      url: '/add-product',
      templateUrl: 'app/common/product/add.html',
      controller: 'addProductCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
      params: {
        product: null,
      },
    })
    .state('home.edit-product', {
      url: '/edit-product/:productId',
      templateUrl: 'app/common/product/add.html',
      controller: 'addProductCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
    })
    .state('home.show-products', {
      url: '/show-products',
      templateUrl: 'app/common/product/show.html',
      controller: 'showProductCtrl',
      authenticate: lcConfig.userLevel.ADMIN,
    })
    .state('home.show-providers', {
      url: '/show-providers',
      templateUrl: 'app/common/provider/show.html',
      controller: 'showProviderCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
    })
    .state('home.show-product-detail', {
      url: '/show-products/:productId',
      templateUrl: 'app/common/product/add.html',
      controller: 'showProductDetailCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
    })
    .state('home.my-account', {
      url: '/my-account',
      templateUrl: 'app/common/account/account.html',
      controller: 'myAccountCtrl',
      authenticate: lcConfig.userLevel.PROVIDER,
    });

  $urlRouterProvider.otherwise('/login');
};
