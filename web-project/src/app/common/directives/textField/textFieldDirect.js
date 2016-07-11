export default ($log, $http, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/textField/textField.html',
    replace: true,
    require: 'ngModel',
    scope: {
      isEditing: '=',
      model: '=ngModel',
      inputType: '=',
    },
    link: function(scope, element, attr, ctrl) {
      //$scope.type = "text";
      scope.inputType = attr.inputType;
      scope.$watch("value", function(value) {
        scope.model = value;
      })
    }
  };
};
