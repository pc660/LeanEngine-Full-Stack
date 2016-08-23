export default (SweetAlert, $state, $log,$rootScope, $scope, $document, $timeout, lcConfig, $window, providerFac, fileFac, Upload) => {
  'ngInject';
    var url = lcConfig.apiHost + "/api/provider/add";
    $scope.addUrl = url;
    $scope.isEditing = true;
    $scope.confirmed = false;
    if ($state.params.provider) {
      $scope.provider = $state.params.provider;
      $log.log("getting provider");
      $log.log($scope.provider.start);
      $log.log($scope.provider.destination);
      $log.log($scope.provider.address);
      $rootScope.$broadcast("addressUpdate", {address: $scope.provider.address});
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
    };

    $scope.submit = () => {
      $log.log($scope.provider);
      providerFac.upload($scope.provider).then(function(result) {
        SweetAlert.swal("注册商添加成功", " 请到我的账号中我发布的产品去查看更新.", "success");
      }, function(error) {

      });
    };
};
