export default ($scope, $window, $uibModalInstance, provider) => {
  'ngInject';

  $scope.contact = provider.contact;

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel'); 
  };

  $scope.showDetail = function () {
  
  }; 
};
