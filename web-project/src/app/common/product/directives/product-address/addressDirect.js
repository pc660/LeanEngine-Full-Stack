export default ($http, $compile, $q, $rootScope, $mdSidenav, $state, $window, providerFac, $uibModal, productFac) => {
  'ngInject';
  var cityURL, delay, templateURL;
   delay = $q.defer();
   cityURL = 'app/common/product/directives/product-address/city.min.js';
   $http.get(cityURL).success(function(data) {
     return delay.resolve(data);
   }); 
  templateURL = 'app/common/product/directives/product-address/address.html';
  return {
    restrict: 'E',
    replace: true,
    scope: {
        p: '=',
        a: '=',
        c: '=',
        d: '=',
        ngModel: '='
    }, 
    link: function(scope, element, attr) {
      var popup;
        popup = {
          element: null,
          backdrop: null,
          show: function() {
            return this.element.addClass('active');
          },
          hide: function() {
            this.element.removeClass('active');
            return false;
          },
          resize: function() {
            if (!this.element) {
              return;
            }
            this.element.css({
              top: -this.element.height() - 30,
              'margin-left': -this.element.width() / 2
            });
            return false;
          },
          focus: function() {
           angular.element('[ng-model="d"]').focus();
            return false;
          },
          init: function() {
            element.on('click keydown', function() {
              popup.show();
              event.stopPropagation();
              return false;
            });
            angular.element(window).on('click', (function(_this) {
              return function() {
                return _this.hide();
              };
            })(this));
            this.element.on('click', function() {
              return event.stopPropagation();
            });
            return setTimeout((function(_this) {
              return function() {
                _this.element.show();
                return _this.resize();
              };
            })(this), 500);
          }
        };
        return delay.promise.then(function(data) {
          $http.get(templateURL).success(function(template) {
            var newTemplate;
            newTemplate = $compile(template)(scope);
            angular.element('body').append(newTemplate);
            popup.element = angular.element(newTemplate[2]);
            scope.provinces = data;
            return popup.init();
          });
          scope.aSet = {
            p: function(p) {
              scope.p = p;
              scope.c = null;
              scope.a = null;
              return scope.d = null;
            },
            c: function(c) {
              scope.c = c;
              scope.a = null;
              return scope.d = null;
            },
            a: function(a) {
              scope.a = a;
              scope.d = null;
              return popup.focus();
            }
          };
          scope.clear = function() {
            scope.p = null;
            scope.c = null;
            scope.a = null;
            return scope.d = null;
          };
          scope.submit = function() {
            return popup.hide();
          };
          scope.$watch('p', function(newV) {
            var v, _i, _len, _results;
            if (newV) {
              _results = [];
              for (_i = 0, _len = data.length; _i < _len; _i++) {
                v = data[_i];
                if (v.p === newV) {
                  _results.push(scope.cities = v.c);
                }
              }
              return _results;
            } else {
              return scope.cities = [];
            }
          });
          scope.$watch('c', function(newV) {
            var v, _i, _len, _ref, _results;
            if (newV) {
              _ref = scope.cities;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                v = _ref[_i];
                if (v.n === newV) {
                  _results.push(scope.dists = v.a);
                }
              }
              return _results;
            } else {
              return scope.dists = [];
            }
          });
          return scope.$watch(function() {
            scope.ngModel = '';
            if (scope.p) {
              scope.ngModel += scope.p;
            }
            if (scope.c) {
              scope.ngModel += " " + scope.c;
            }
            if (scope.a) {
              scope.ngModel += " " + scope.a;
            }
            if (scope.d) {
              scope.ngModel += " " + scope.d;
            }
            return popup.resize();
          });
        }); 
    }
  };
}