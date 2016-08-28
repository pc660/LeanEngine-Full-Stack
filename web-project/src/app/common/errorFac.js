// A service that manages user authentications including login, cookie
// management and logout.

export default () => {
  'ngInject';

  var service = {};
  service.getErrorMessage = getErrorMessage;
  return service;

  function getErrorMessage(code) {
    switch(code) {
      case 125:
            return "邮箱不正确";
      case 203:
            return "用户名或邮箱已经被注册";
    }
    return "";
  }
};
