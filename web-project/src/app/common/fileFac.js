export default ($rootScope, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';
  
  var service = {};
  service.files = {};

  service.uploadAllFiles = uploadAllFiles;
  service.saveFile = saveFile; 
  service.hash = hash;
  service.clear = clear;

  return service;

  function uploadAllFiles(submit) {
    Upload.upload({
            url: '/api/provider/uploadfile',
            file: service.files
          }).then(function (resp) {
            submit();
          }, function (resp) {
            submit();
        }, function (evt) {
        });
  }

  function clear() {
    service.files = {};
  }

  function saveFile(key, file) {
    service.files[key] = file;
  }

  function hash(str) {
    var date = new Date();
    var timeString = date.getTime() + "";   
    return md5.createHash(str || timeString);
  }
};
