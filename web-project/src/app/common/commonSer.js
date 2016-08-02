/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default ($http, $state, lcConfig, $window, Upload, $log) => {
  'ngInject';
  return {
    addProps: function(obj, arr, val)  {
      var self = this;

      obj[arr[0]] = obj[arr[0]] || {};

      var tmpObj = obj[arr[0]];

      if (arr.length > 1) {
        arr.shift();
        this.addProps(tmpObj, arr, val);
      }
      else {
        obj[arr[0]] = val;
      }

      return obj;
    }
  };
};

