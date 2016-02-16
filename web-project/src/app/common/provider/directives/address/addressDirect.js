export default ($rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/address/address.html',
    replace: false,
    link: function(scope, element, attr) {
      // TODO: load city dynamically. Here is just a template.
      var cityList1 = ["上海市"];
      var cityList2 = ["北京市"];
      var cityMap = {
        "上海市": cityList1,
        "北京市": cityList2,
      };
      scope.provinces = Object.keys(cityMap);
      scope.cities = cityMap[scope.province];
      scope.onProvinceChange = () => {
        var province = scope.province;
        scope.cities = cityMap[province];
      };
    }
  };
};
