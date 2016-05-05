export default ($rootScope, $log, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/multiChoice/multiChoice.html',
    replace: false,
    scope: {
      type: "@",
    },
    link: function(scope, element, attr) {
      // TODO: maybe use global variable to store these configurations.
      scope.options = [];
      scope.isEditing = scope.$parent.isEditing;
      scope.$on('providerUpdate', function(){
        for (var i = 0; i < scope.options.length; i++) {
          var option = scope.options[i];
          if (scope.$parent.provider[option.name]) {
            $log.log("being true");
            $log.log(scope.options[i]);
            scope.options[i].state = true; 
          }    
        }
      });
      
      if (attr.type === "经营范围") {
        scope.name = attr.type;
        scope.options = [
          {name: 'departure', value: '出境'},
          {name: 'arrival', value: '入境'},
          {name: 'dominal', value: '国内'},
          {name: 'ticketDelegate', value: '票务代理'},
          {name: 'bookhotel', value: '住宿'},
        ];
      } else if (attr.type === "合作类型") {
        scope.name = attr.type;
        scope.options = [
          {name: 'domestieOperator', value: "地接社"},
          {name: 'domestieWholesaler', value: "出发地(组团社)"},
          {name: 'airticket', value: "机票"},
          {name: 'motorcade', value: "车队"},
          {name: 'visa', value: "签证"},
          {name: 'ticket', value: "门票"},
          {name: 'hotel', value: "酒店"},
          {name: 'cruises', value: "游轮"}, 
        ];
      }    
       
      scope.onChange = () => {
        // Add the value to global form.
      };
    }
  };
};
