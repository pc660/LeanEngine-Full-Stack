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
    },
    require: "ngModel",
    link: function(scope, element, attr) {
      scope.address = {};

      // TODO: Figure out why the scope need $parent..
      scope.$on('addressUpdate', function(event, parameter) {
        scope.province = parameter.address.province;
        scope.city = parameter.address.city;
        scope.county = parameter.address.county;
        scope.detail = parameter.address.detail;
        $log.log("getting address");
        $log.log(parameter.address);
        scope.provinceListener();
        scope.cityListener();
        scope.countyListener();
      });

      scope.provinces = cityData.province;
      scope.cities = cityData.province[0].city;
      scope.counties = scope.cities[0].county;

      scope.provinceListener = scope.$watch("province", function(province) {
        if (!province) {
          delete scope.address.province;
          return;
        }
        scope.address.province = province.name;
        var index = scope.findProvinceIndex(province);
        scope.cities = cityData.province[index].city;
        // If there is no cities in the province, then we should reset the county.
        if (scope.cities === undefined) {
          scope.counties = null;
          scope.county = null;
        }
      });

      scope.cityListener = scope.$watch("city", function(city) {
        if (!city) {
          delete scope.address.city;
          return;
        }
        scope.address.city = city.name;
        var index = scope.findCityIndex(city);
        scope.counties = scope.cities[index].county;
      });

      scope.countyListener = scope.$watch("county", function(county) {
        if (!county) {
          delete scope.address.county;
          return;
        }
        scope.address.county = county.name;
      });

      scope.$watch("detail", function(detail) {
        scope.address.detail = detail;
      });

      scope.findProvinceIndex = (province) => {
        for (var i = 0; i < cityData.province.length; i++) {
          if (province.name === cityData.province[i].name) {
            return i;
          }
        }
        return -1;
      };

      scope.findCityIndex = (city) => {
        for (var i = 0; i < scope.cities.length; i++) {
          if (city.name === scope.cities[i].name) {
            return i;
          }
        }
        return -1;
      };
    }
  };
};
