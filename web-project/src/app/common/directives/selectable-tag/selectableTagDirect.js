export default ($rootScope, $log, $state, $window) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/selectable-tag/selectable_tag.html',
    replace: true,
    require: 'ngModel',
    scope: {
      tags: "=",
      unlimited: "=",
      model: '=ngModel',
    },
    link: function(scope, element, attr) {
      scope.items = angular.copy(scope.tags);
      if (scope.unlimited) {
        scope.items.unshift("不限");
      }
      scope.selectedIndex = 0;
      scope.pick = (index) => {
        scope.selectedIndex = index;
        var item = scope.items[index];
        scope.model = item;
      };
    }
  };
};

