export default ($scope, $log, $window, $uibModalInstance, data) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/tableForm/table_form.html',
    replace: true,
    require: 'ngModel',
    scope: {
      //isEditing: "=",
      //model: '=ngModel',
    },
    link: function(scope, element, attr) {
      //scope.types = {};
      //scope.options = multiChoiceConfig.data[attr.type];
    }
  };
  /*
  $scope.items = data.items;
  $scope.title = data.title;

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.close = function () {
    var saveFunction = data.save;
    if (saveFunction) {
      var object = convertToObject($scope.items);
      saveFunction(object).then(function(result) {
        $uibModalInstance.close($scope.items);
      })
    } else {
      $uibModalInstance.close($scope.items);
    }
  };

  function convertToObject(items) {
    var object = {};
    for (var i in items) {
      var item = items[i];
      object[item.name] = item.value;
    }
    $log.log(object);
    return object;
  }*/
};
