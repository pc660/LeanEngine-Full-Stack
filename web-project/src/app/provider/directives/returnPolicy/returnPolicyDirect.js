export default ($log, $rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/provider/directives/returnPolicy/returnPolicy.html',
    replace: true,
    scope: {
      returnPolicy: '=ngModel',
      isEditing: '=',
    },
    link: function(scope, element, attr) {
      scope.test = () => {
        $log.log(scope);

        $log.log(scope.returnTotalPeople);
      };
    }
  };
};
