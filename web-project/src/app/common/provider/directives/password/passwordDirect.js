export default ($rootScope, $state, $window) => {
  'ngInject';
  return {
    restrict: 'A',
    templateUrl: 'app/common/provider/directives/password/password.html',
    replace: false,
    link: function(scope, element, attr) {
      scope.verify = () => {
        var verifiedTag = scope.clearVerified();
        scope.verified = true;
        if (scope.password !== scope.password2) {
          verifiedTag.addClass("fail");
          verifiedTag.html("两次密码不一致!");
        } else {
          verifiedTag.addClass("success");
          verifiedTag.html("密码验证成功!");
        }
      }; 
   
      scope.focus = () => {
        scope.clearVerified();
      };

      scope.clearVerified = () => {
        var verifiedTag = element.find("#verified");
        verifiedTag.html("");
        verifiedTag.removeClass("fail");
        verifiedTag.removeClass("success");
        return verifiedTag; 
      };
    }
  };
};

