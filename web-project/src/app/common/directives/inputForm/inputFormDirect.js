export default ($rootScope, $log, $state, $window, formConfig) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/inputForm/inputForm.html',
    replace: true,
    scope: {
      title: "@",
      model: "=ngModel",
      isEditing: "=",
    },
    require: 'ngModel',
    link: function(scope, element, attr) {
      scope.items = formConfig.data[attr.type];

      scope.$watch("model", function(newValue, oldValue) {
        $log.log(scope.model);
        scope.items.forEach(function(item) {
          item.value = "";
        })
        // Set the correct value.
        for (var key in scope.model) {
          for (var i in scope.items) {
            if (scope.items[i].name == key) {
              scope.items[i].value = scope.model[key];
            }
          }
        }
      });

      scope.confirm = () => {
        scope.items.forEach(function(item) {
          scope.model[item.name] = item.value;
        })
      };

      scope.clear = () => {
        scope.items.forEach(function(item) {
          item.value = "";
          delete scope.model[item.name];
        })
        $log.log(scope.model);
      };
    }
  };
};

