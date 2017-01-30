export default ($rootScope, $log, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/sale/search/directives/product/product.html',
    replace: true,
    scope: {
      product: "=",
    },
    link: function(scope, element, attr) {
    }
  };
};

