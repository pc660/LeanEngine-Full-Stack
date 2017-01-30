export default ($log, $rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/provider/directives/menu/menu.html',
    replace: false,
    scope: {
      type: "="
    },
    link: function(scope, element, attr) {
      // TODO: This should be able to set in a global value.
      scope.isEditing = scope.$parent.isEditing;
      scope.name = attr.type;
      if (attr.type === "foundTime") {
        scope.label = "成立时间";
        scope.options = [
          "1年以下",
          "1-5年",
          "5-8年",
          "8年以上",
        ];
      } else if (attr.type === "companySize") {
        scope.label = "公司规模";
        scope.options = [
          "10人以下",
          "10-50人",
          "51-100人",
          "100人以上",
        ];
      } else if (attr.type === "sex") {
        scope.label = "性别";
        scope.options = [
          "男",
          "女",
        ];
      }
      scope.onValueChange = () => {
        $log.log(scope.selectValue);
      };
    }
  };
};
