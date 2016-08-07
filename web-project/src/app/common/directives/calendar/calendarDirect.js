export default ($rootScope, $uibModal, $log, $state, $window, calendarConfig) => {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'app/common/directives/calendar/calendar.html',
    replace: true,
    scope: {
      data: "@",
      model: '=ngModel',
      isEditing: '=',
    },
    require: "ngModel",
    link: function(scope, element, attr, ctrl) {
      scope.$watch("model", function(value) {
        $log.log("value updates");
        $log.log(scope.model);
        if (scope.model) {
          scope.setEvents();
          // Set the right events.
        }
      });
      // TODO: The whole class is slow on performance.
      // Need to figure out how to optimize this.
      /**
      * A data structure that contains all the events.
      * It should have the following data structure:
      * year:
      *   [month1: [
      *     [day1: {
      *       key1: value1,
      *       key2: value2,
      *       ...
      *     },...]
      *   ],...]
      * */
      scope.allEvents = {};
      scope.allMonthEvents = [];
      scope.allDayEvents = [];
      scope.daysMap = {};
      scope.days = [];
      scope.months = [];

      scope.initYear = (year) => {
        // We should start from the current year and current month.
        if (! (year in scope.allEvents)) {
          scope.allEvents[year] = [];
        }
        scope.allMonthEvents = scope.allEvents[year];
      };

      // Month start from 0 to 11.
      scope.initMonth = (month) => {
        // If there are no events, create the array.
        if (scope.allMonthEvents.length === 0) {
          for (var i = 1; i <= 12; i++) {
            scope.allMonthEvents.push([]);
          }
        }
        scope.allDayEvents = scope.allMonthEvents[month];
        scope.days = scope.daysMap[month];
      };

      scope.initDay = () => {
        var numberOfDays = daysInMonth(scope.currentMonth, scope.currentYear);
        if (!scope.days || scope.days.length === 0) {
          scope.days = [];
          for (var i = 1; i <= numberOfDays; i++) {
            var day = getDay(i, scope.currentMonth, scope.currentYear);
            scope.days.push(i + " " +  day);
          }
        }

        if (scope.allDayEvents.length) {
          for (i = 1; i <= numberOfDays; i++) {
            //Push an empty event.
            scope.allDayEvents.push({});
          }
          scope.daysMap[scope.currentMonth] = scope.days;
        }
      };

      scope.init = () => {
        scope.years = [
          2016,
          2017,
          2018,
        ];

        scope.currentYear = scope.years[0];
        scope.initYear(scope.currentYear);

        if (scope.months.length !== 12) {
          for (var i = 1; i <= 12; i++) {
            scope.months.push(i);
          }
        }

        var date = new Date();
        scope.currentMonth = date.getMonth();
        scope.initMonth(scope.currentMonth);

        scope.titles = calendarConfig.data[scope.data];
        scope.initDay();
      };

      scope.init();

      scope.selectMonth = (month) => {
        scope.currentMonth = month;
        scope.initMonth(scope.currentMonth);
        scope.initDay();
      };

      scope.selectYear = () => {
        scope.currentYear = scope.selectedYear;
        scope.initYear(scope.currentYear);
        scope.initMonth(scope.currentMonth);
        scope.initDay();
      };

      scope.addEvent = (index) => {
        var items = [];
        for (var i = 0; i < scope.titles.length; i++) {
          var item = {};
          item.key = scope.titles[i].value;
          item.name = scope.titles[i].name;
          item.type = scope.titles[i].type;
          items.push(item);
        }
        scope.openEventModal(items, index);
      };

      scope.openEventModal = (items, index) => {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/common/directives/form/form.html',
          controller: 'formCtrl',
          resolve: {
            // Need to convert the titles into the following format.
            // {key: name, type: type}
            data: function () {
              var title = "添加团期: " + scope.currentYear + "年" + (scope.currentMonth + 1) + "月" + (index + 1) + "日";
              return {"title": title, "items": items};
            }
          }
        });
        modalInstance.result.then(function (items) {
          var event = {};
          items.forEach(function(item) {
            event[item.name] = item.value;
          });
          scope.allDayEvents[index] = event;
          scope.allDayEvents[index].filled = true;
        }, function () {
        });

      };

      scope.editEvent = (index) => {
        var items = [];
        $log.log(index);
        $log.log(scope.allDayEvents[index]);
        for (var i = 0; i < scope.titles.length; i++) {
          var item = {};
          item.key = scope.titles[i].value;
          item.name = scope.titles[i].name;
          item.type = scope.titles[i].type;
          var value = scope.allDayEvents[index][item.name];
          if (value) {
            item.value = value;
          }
          items.push(item);
        }
        scope.openEventModal(items, index);
      };

      scope.deleteEvent = (index) => {
        // Clear the event.
        scope.allDayEvents[index] = {};
      };

      // TODO: This performance might be bad. I don't know.
      scope.$watch("allEvents", function(value) {
        scope.model = value;
      }, true);

      scope.$on("calendarUpdate", function(event, parameter) {
        scope.allEvents = parameter.price;
        scope.init();
      });
      /**
      * Create an empty event from titles.
      * The title should have the following format.
      * [{name, type, value}]. For more details, please refer to
      * config/calendarConfig.js
      * */
      function createEmptyEvent(titles) {
        var event = {};
        for (var i = 0; i < titles.length; i++) {
          var type = titles[i].type;
          var name = titles[i].name;
          event[name] = "";
        }
        return event;
      }

      function daysInMonth(month, year) {
        // Need to + 1 because javascript use the absolute value as the month index.
        // e.g, 1 is Jan.
        return new Date(year, month + 1, 0).getDate();
      }

      function getDay(day, month, year) {
        var days = ["周日",  "周一", "周二", "周三", "周四", "周五", "周六"];
        var index = new Date(year, month, day).getDay();
        return days[index];
      }

      scope.setEvents = () => {
        $log.log("set events");
        for (var year in scope.model) {
          var monthEvents = scope.model[year];
          for (var i = 0; i < monthEvents.length; i++) {
            var dayEvents = monthEvents[i];
            for (var j = 0; j < dayEvents.length; j++) {
              var event = dayEvents[j];
              if (event) {
                $log.log(event);
                var test = scope.allEvents[year][i][j];
                scope.allEvents[year][i][j] = event;
              }
            }
          }
          $log.log(monthEvents);
        }
      }
    }
  };
};

