export default ($stateParams, $log, $scope, $document, $timeout, lcConfig, $window, providerFac) => {
  'ngInject';
  $scope.isEditing = false;
  var query = {"objectId": $stateParams.providerId};
  providerFac.getProvider(query)
  .then(function(result) {
    // There should be only one result
    if (result.count === 1) {
      $scope.provider = result.providers[0]; 
    }
    $scope.$broadcast("providerUpdate");
  }, function(error) {
    // TODO: handle error.
  });
};
