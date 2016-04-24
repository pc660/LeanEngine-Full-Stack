export default ($stateParams, $log, $scope, $document, $timeout, lcConfig, $window, providerFac) => {
  'ngInject';
  $scope.isEditing = false;
  var query = $stateParmas.providerId;
  providerFac.getProvider(query)
  .then(function(result) {
    $scope.provider = result;
    $scope.$broadcast("providerUpdate");
  }, function(error) {
    // TODO: handle error.
  });
};
