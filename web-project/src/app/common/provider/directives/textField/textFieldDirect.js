export default ($rootScope, $window, $state, fileFac) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/textField/textField.html',
    replace: false,
   /*
    * key is the key in the database.
    * label is the name of the label appearing on the left part.
    * upload: show a upload button if this exists. The value could be used to
    * define the limited type.
    * */
    scope: {
      key: '@',
      label: '@',
      upload: '@',
      duration: '@',
    },
    link: function(scope, element, attr) {
      if (attr.upload) {
        scope.show = !scope.show;
        
        scope.uploadFile = (file) => {
          scope.filename = file.name;
          var filename = fileFac.hash(scope.filename);
          fileFac.saveFile(filename, file);
        };
      }

      // Settings for datepicker.
      if (attr.duration) {
        scope.durationShow = !scope.durationShow;
      }
    } 
  };
};
