export default ($log, $rootScope, $state, $window, cityData) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/provider/directives/address/address.html',
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
      if (scope.model) {
        $log.log(scope.model);
        scope.province = scope.model.province;
        scope.city = scope.model.city;
        scope.county = scope.model.county;
        scope.detail = scope.model.detail;
      }

      scope.provinces = cityData.province;
      scope.cities = cityData.province[0].city;
      scope.counties = scope.cities[0].county;

      scope.provinceListener = scope.$watch("province", function(province) {
        if (!province) {
          return;
        }
        scope.address.province = province;
        var index = scope.findProvinceIndex(province);
        if (index < 1) {
          return;
        }
        scope.cities = cityData.province[index].city;
        // If there is no cities in the province, then we should reset the county.
        if (scope.cities === undefined) {
          scope.counties = null;
          scope.county = null;
        }
      });

      scope.cityListener = scope.$watch("city", function(city) {
        if (!city) {
          return;
        }
        scope.address.city = city;
        var index = scope.findCityIndex(city);
        if (index < 1) {
          return;
        }
        scope.counties = scope.cities[index].county;
      });

      scope.countyListener = scope.$watch("county", function(county) {
        if (county) {
          return;
        }
        $log.log(county);
        scope.address.county = county;
      });

      scope.$watch("detail", function(detail) {
        if (detail) {
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
