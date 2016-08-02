export default ($log, $http, $state, $window, $compile) => {
  'ngInject';
  return {
    restrict: 'A',
    scope: {
      key: "@key",
    },
    link: function(scope, element, attr, ctrl) {
      //$scope.type = "text";
      //$log.log(scope.model);
      var key = attr.key;
      /*scope.$on("test", function(event) {
        $log.log("update");
      });
*/
      scope.$on("updateTemplate", function(event, params) {
        $log.log("update");
        $log.log(params.params[key]);
        if (!params.params[key]) {
          return;
        }
        var content = params.params[key];
        if (content[0] != "<") {
          content = "<p>" + content + "</p>";
        }
        var html =  $compile(content)(scope);
        element.append(html);
        $log.log(scope.model);
      })
    }
  };
};
