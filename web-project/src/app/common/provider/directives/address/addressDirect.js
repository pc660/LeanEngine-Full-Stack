export default ($log, $rootScope, $state, $window, cityData) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/address/address.html',
    replace: false,
    link: function(scope, element, attr) {
      // TODO: Figure out why the scope does not need parent.
      scope.$on('providerUpdate', function() {
        scope.province = scope.provider.province;
        scope.city = scope.provider.city;
      });
      
      scope.provinces = cityData.province;
      scope.cities = cityData.province[0].city;
      scope.counties = scope.cities[0].county;
      scope.onProvinceChange = () => {
        var province = scope.selectedProvince;
        var index = scope.findProvinceIndex(province);
        scope.cities = cityData.province[index].city;
        scope.province = province.name;
      };

      scope.findProvinceIndex = (province) => {
        for (var i = 0; i < cityData.province.length; i++) {
          if (province.name === cityData.province[i].name) {
            return i;
          }
        }
        return -1;
      };
     
      scope.findCityIndex = (city) => {
        for (var i = 0; i < scope.selectedProvince.city.length; i++) {
          if (city.name === scope.selectedProvince.city[i].name) { 
            return i;
          }
        }
        return -1;

      };

      scope.onCityChange = () => {
        var city = scope.selectedCity;
        var index = scope.findCityIndex(city);
        scope.counties = scope.selectedProvince.city[index].county;
        scope.city = city.name;
      };
    
      scope.onCountyChange = () => {
        scope.county = scope.selectedCounty.name;
      };
    } 
  };
};
