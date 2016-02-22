/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

export default ($http, $state, lcConfig, $window, Upload) => {
  'ngInject';
  return {
    goHome: () => {
      $window.alert("going home");
      $state.go('home');
    },
    redirect: (url) => {
      $window.location.href = url;
    }
  };
};

