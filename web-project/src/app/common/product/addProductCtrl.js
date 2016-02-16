export default ($scope, $mdSidenav, $window) => {
  'ngInject';
  // TODO: Currently, sidebar does not support dynamic md-component-id,
  // maybe create a cl for this bug.
  $scope.toggleLeft = buildToggler('provider-side-bar');

  function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
          });
      };
  } 
};
