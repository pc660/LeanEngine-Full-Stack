export default ($log, $rootScope, $state, $window, cityData) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/provider/directives/address/address.html',
    replace: true,
    scope: {
      showCounty: "=?",
      address: '=ngModel',
      isEditing: '=',
      model: "=ngModel",
    },
    require: "ngModel",
    link: function(scope, element, attr) {
      scope.address = {};
      scope.provinces = cityData.province;
      scope.province = "上海市";
      scope.city = "市辖区";
      scope.$watch("model", function(model) {
        scope.province = scope.model.province;
        var index = scope.findProvinceIndex(scope.province);
        $log.log(index);
        if (index < 0) {
          return;
        }
        scope.cities = cityData.province[index].city;
        scope.city = scope.model.city;
        scope.detail = scope.model.detail;
      });

      scope.provinceListener = scope.$watch("province", function(province) {
        if (!province) {
          return;
        }
        scope.address.province = province;
        var index = scope.findProvinceIndex(province);
        if (index < 0) {
          return;
        }
        scope.cities = cityData.province[index].city;
      });

      scope.cityListener = scope.$watch("city", function(city) {
        if (!city) {
          return;
        }
        scope.address.city = city;
      });

      scope.$watch("detail", function(detail) {
        if (!detail) {
          return;
        }
        scope.address.detail = detail;
      });

      scope.findProvinceIndex = (province) => {
        for (var i = 0; i < cityData.province.length; i++) {
          if (province === cityData.province[i].name) {
            return i;
          }
        }
        return -1;
      };

      scope.findCityIndex = (city) => {
        for (var i = 0; i < scope.cities.length; i++) {
          if (city === scope.cities[i].name) {
            return i;
          }
        }
        return -1;
      };
    }
  };
};
