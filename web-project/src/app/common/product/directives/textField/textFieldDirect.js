export default ($http, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/product/directives/textField/textField.html',  
    replace: false,
    scope: {
      key: '@',
      label: '@',
      isEditing: '@',
    },
    link: function(scope, element, attr) {
      scope.maximumColumn = 100;
      scope.isEditing = scope.$parent.isEditing;
    
      scope.$on('valueUpdate', function(e) {
        scope.value = scope.$parent.product[scope.key];
      });
    }
  };
};
