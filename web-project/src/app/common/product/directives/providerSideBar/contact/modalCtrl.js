export default ($scope, $window, $uibModalInstance, items) => {
  'ngInject';

  $scope.items = items;

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  }; 
};
