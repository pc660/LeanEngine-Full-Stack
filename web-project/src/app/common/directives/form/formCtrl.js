export default ($scope, $log, $window, $uibModalInstance, data) => {
  'ngInject';


   $scope.items = data.items;
   $scope.title = data.title;
   $scope.editable = data.editable;
   

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
   }
};
