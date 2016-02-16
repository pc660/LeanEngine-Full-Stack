export default ($rootScope, $state, $window, Upload) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/upload/upload.html',
    replace: false,
    scope: {
      type: "@"
    },
    link: function(scope, element, attr) {
      scope.upload= () => {
        $window.alert("upload");
        /*
        Upload.upload({
            url: 'upload/url',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });*/ 
      };
    }
  };
};
