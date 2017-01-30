export default ($stateParams, $log, $scope, $document, $timeout, lcConfig, $window, providerFac) => {
  'ngInject';
  $scope.isEditing = false;
  $scope.showing = true;
  var query = {"objectId": $stateParams.providerId};
  providerFac.getProvider(query)
  .then(function(result) {
    // There should be only one result
      $scope.provider = result.providers[0];
  }, function(error) {
    // TODO: handle error.
      $log.log("getting error");
      $log.log(error);
  });

  // Get the contact list of the provider.
  providerFac.getContactList($stateParams.providerId).then(function(results) {
    $scope.contactList = results;
  });

  $scope.$watch("contactperson", function(value) {
    $log.log("contact value");
    $log.log($scope.contactperson);
    $log.log(value);
  });
};
