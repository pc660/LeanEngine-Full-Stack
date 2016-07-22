export default ($state, $log, $scope, $document, $timeout, lcConfig, $window, providerFac, fileFac, Upload) => {
  'ngInject';
    var url = lcConfig.apiHost + "/api/provider/add";
    $scope.addUrl = url;
    $scope.isEditing = true;
    $scope.confirmed = false;
    if ($state.params.provider) {
      $scope.provider = $state.params.provider;
    }

    $scope.upload = (file) => {
      if (!file) {
        return;
      }
      $scope.filename = file.name;
      $scope.provider.licenseFilename = fileFac.hash(file.name);
      providerFac.uploadProviderFiles(file, $scope.provider.licenseFilename).then(function() {
        $log.log("upload success");
      }, function(error) {

      });
    };

    // TODO: Do param checking
    $scope.confirm = () => {
      $scope.confirmed = true;

    }

    $scope.submit = () => {
      $log.log($scope.provider);
      providerFac.upload($scope.provider).then(function(result) {
      }, function(error) {

      });
    };
};
