export default ($rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/returnPolicy/returnPolicy.html',
    replace: false,
  };
};