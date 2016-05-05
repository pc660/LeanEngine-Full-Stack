export default ( $log, $scope, $stateParams, providerFac, $document, $timeout, lcConfig, $window, fileFac) => {
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
      // Check number.
      var length = parseInt(results.count / PER_PAGE + 1);
      $scope.pages = new Array(length);
      for (var i = 0; i < length; i++) {
        $scope.pages[i] = i + 1;
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
};

