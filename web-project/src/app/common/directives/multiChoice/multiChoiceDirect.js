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
      isEditing: "=",
      model: '=ngModel',
    },
    link: function(scope, element, attr) {
      scope.types = {};
      scope.options = multiChoiceConfig.data[attr.type];
      for (var i = 0; i < scope.options.length; i++) {
        scope.options[i].state = false;
      }

      // TODO: Model should be the same type.
      // Now we take into an array and convert to an object.
      scope.$watch("model", function() {
        $log.log("watching ");
        $log.log(scope.model);
        if(Object.prototype.toString.call(scope.model) !== '[object Array]' ) {
          $log.log("not array");
          return;
        }

        $log.log("changing model");
        for (var i = 0; i < scope.options.length; i++) {
          var option = scope.options[i];
          // If option is contained in the model.
          if (scope.model.indexOf(option.name) >= 0) {
            option.state = true;
          }
        }
        $log.log(scope.options);
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

      // other text always is the last.
      scope.changeOther = () => {
        scope.model.other = scope.otherText;
      };
    }
  };
};

