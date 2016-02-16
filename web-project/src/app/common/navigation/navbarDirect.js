export default (commonSer, $rootScope, $state, $location) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/navigation/navbar.html',
    scope: true,
    replace: true,
    link: function postLink(scope, element, attrs, controller) {
      // Watch for the $location
      scope.$watch(function() {
        return $location.path();
      }, function(newValue, oldValue) {

      });
    }
  }; 
};
