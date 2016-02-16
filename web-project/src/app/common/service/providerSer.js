export default ($http, $state, lcConfig, $window) => {
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

