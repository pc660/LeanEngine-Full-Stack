export default ($rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/product/directives/providerSideBar/providerSideBar.html',
    replace: true,
    link: function(scope, element, attr) {
    }
  };
};
