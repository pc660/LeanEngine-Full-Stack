export default ($scope, $document, $timeout, lcConfig, $window, fileFac) => {
  'ngInject';
   var url = lcConfig.apiHost + "/api/provider/add";
   $scope.addUrl = url;
   $scope.uploadFiles = false;
   $scope.validate = true;
   var submit = $document.find('#submittest');
   var validate = true;

   // TODO: Need to understand why angularjs can't submit the form manually.
   // TODO: First: Don't upload all the files at the end. A better way is to
   // upload each file when user click the upload button. The logic needs to be
   // handled in textField directive. But we need to figure out a smart way to 
   // assoicate the file with the provider.
   function callback() {
      submit.trigger('click'); 
   }
   $scope.test = () => {
        fileFac.uploadAllFiles(callback);
   };
};
