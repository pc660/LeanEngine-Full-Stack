export default ($rootScope, $log, $state, $window, multiChoiceConfig) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/multiChoice/multiChoice.html',
    replace: true,
    require: 'ngModel',
    scope: {
      other: "@",
      type: "@",
      dynamicType: "=",
      isEditing: "=",
      model: '=ngModel',
    },
    link: function(scope, element, attr) {
      scope.types = {};
      scope.options = [];

      scope.$watch("dynamicType", function(value) {
        if (value) {
          scope.options = [];
          if (value in multiChoiceConfig.data) {
            scope.options = multiChoiceConfig.data[value];
          }
        }
      });

      if (attr.type) {
        scope.options = multiChoiceConfig.data[attr.type];
      } else {
        if (scope.dynamicType in multiChoiceConfig.data) {
          scope.options = multiChoiceConfig.data[scope.dynamicType];
        }
      }
      $log.log(scope.options);
      for (var i = 0; i < scope.options.length; i++) {
        scope.options[i].state = false;
      }

      // TODO: Model should be the same type.
      // Now we take into an array and convert to an object.
      scope.$watch("model", function() {
        if(Object.prototype.toString.call(scope.model) !== '[object Array]' ) {
          return;
        }

        for (var i = 0; i < scope.options.length; i++) {
          var option = scope.options[i];
          // If option is contained in the model.
          if (scope.model.indexOf(option.name) >= 0) {
            option.state = true;
          }
        }
        //optionsListener();
      }, true);

      var optionsListener = scope.$watch("options",  function(options) {
        scope.model = {};
        for (var i = 0; i < options.length; i++) {
          if (options[i].state) {
            scope.model[options[i].name] = true;
          }
        }
      }, true);
    }
  };
};

