export default ($rootScope, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';
  
  var service = {};

  service.hash = hash;
  return service;

  function hash(str) {
    var date = new Date();
    var timeString = date.getTime() + "";   
    return md5.createHash(str || timeString);
  }
};
