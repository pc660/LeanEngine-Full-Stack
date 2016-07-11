export default ($log, $rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/provider/directives/returnPolicy/returnPolicy.html',
    replace: true,
    scope: {
      returnPolicy: '=ngModel',
      isEditing: '=',
    },
    require: "ngModel",
    link: function(scope, element, attr) {
    }
  };
};
