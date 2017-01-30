export default ($log, $scope, $window, $uibModalInstance, providerFac) => {
  'ngInject';

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel'); 
  };


  // TODO: move this to a global config
  $scope.types = [
    {"value": "地接社", "key": "domestieOperaotr"},
    {"value": "车队", "key": "motorcade"},
    {"value": "机票", "key": "airticket"}, 
  ];

  $scope.search = function () {
    var query = {}; 
    if ($scope.keyword) {
      query.keyword = $scope.keyword;
    }
    if ($scope.mainDestination) {
      query.mainDestination = $scope.mainDestination;
    }
 
    if ($scope.servingType) {
      query.servingType = $scope.servingType;
    }
    providerFac.search(query)
    .then(function(results) {
       $uibModalInstance.close(results); 
    }, function(error) {
      // TODO: handle error. 
    }); 
  }; 
};
