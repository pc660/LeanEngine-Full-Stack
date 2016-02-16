export default ($rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/menu/menu.html',
    replace: false,
    scope: {
      type: "@"
    },
    link: function(scope, element, attr) {
      // TODO: This should be able to set in a global value.
      scope.label = attr.type;
      if (attr.type === "成立时间") {
        scope.name = "foundTime";
        scope.options = [
          "1年以下",
          "1-5年",
          "5-8年",
          "8年以上",
        ];
      } else if (attr.type === "公司规模") {
        scope.name = "companySize";
        scope.options = [
          "10人以下",
          "10-50人",
          "51-100人",
          "100人以上",
        ];
      } else if (attr.type === "性别") {
        scope.name = "sex";
        scope.options = [
          "男",
          "女",
        ];
      }
    }
  };
};
