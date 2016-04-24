export default ($rootScope, $window, $state, fileFac, providerFac) => {
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
      isEditing: '@',
    },
    link: function(scope, element, attr) {
      scope.isEditing = scope.$parent.isEditing;
      scope.maximumColumn = 100;
      if (attr.upload) {
        scope.show = !scope.show;
        
        scope.uploadFile = (file) => {
          scope.filename = file.name;
          var filename = fileFac.hash(scope.filename);
          providerFac.files[filename] = file;
          // upate the name of the file.
          scope.hashname = filename;
        };
      }
      
      // Settings for datepicker.
      if (attr.duration) {
        scope.durationShow = !scope.durationShow;
      }
    } 
  };
};
