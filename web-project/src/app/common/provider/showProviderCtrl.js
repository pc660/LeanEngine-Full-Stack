export default ( $log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac, SweetAlert) => {
  'ngInject';
  $scope.providers = [];
  var PER_PAGE = 50;
  // get the first page index.
  getProvider(0);
  function getProvider(index) {
    providerFac.getProvider({"index": index})
    .then(function(results) {
      var providers = results.providers;
      if (results.providers.length > 0) {
        $scope.providers = providers;
        $log.log($scope.providers);
      }
    }, function(error) {
    });
  }

  $scope.$on("previous", function(index) {
    getProvider(index);
  });

  $scope.$on("next", function(index) {
    getProvider(index);
  });

  $scope.$on("change", function(index) {
    getProvider(index);
  });

  $scope.delete = (provider) => {
    providerFac.deleteProvider(provider.objectId).then(function() {
      SweetAlert.swal("删除成功!", "success");
    }, function(error) {
      SweetAlert.swal("无法删除,请下架所有产品");
    });
  };
};

