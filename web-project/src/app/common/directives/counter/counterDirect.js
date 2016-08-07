export default ($rootScope, $log, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/counter/counter.html',
    replace: true,
    require: 'ngModel',
    scope: {
      model: "=ngModel",
    },
    link: function(scope, element, attr) {
      scope.value = 0;
      $log.log("counter");
      if (!scope.model) {
        scope.model = 0;
      }
      scope.value = scope.model;

      scope.plus = () => {
        if (scope.value >= 99) {
          return;
        }
        scope.value = scope.value + 1;
        scope.model = scope.value;
      };

      scope.minus = () => {
        if (scope.value <= 0) {
          return;
        }
        scope.value = scope.value - 1;
        scope.model = scope.value;
      };

      scope.$watch("model", function(value) {
        scope.value = scope.model;
      });
    }
  };
};

