export default ($rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/label/providerLabel.html',
    replace: false,
    link: function(scope, element, attr) {
    }
  };
};
