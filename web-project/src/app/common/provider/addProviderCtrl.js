export default ($scope, $window) => {
  'ngInject';

   $scope.test= () => {
    $window.alert("123");
   };
};
