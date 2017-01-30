export default ($scope, $document, $state, lcConfig, $window, fileFac, authFac) => {
  'ngInject';

  $scope.logout = () => {
    authFac.logout().then(function() {
      $state.go("login");
    }, function() {
      $state.go("login");
    });
  };
};
