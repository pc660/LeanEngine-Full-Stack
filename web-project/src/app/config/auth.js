const authenticate = (authFac, $location, $rootScope, $log, lcConfig, $state, $window, $cookies) => {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // If we do not need authentication.
    if (toState.authenticate === undefined) {
      $log.log("No need authenticate");
      return;
    }
  
    if (authFac.getUserLevel() === lcConfig.userLevel.ADMIN) {
      $log.log("admin");
      return;
    }

    if (toState.authenticate !==  authFac.getUserLevel()) {
      $log.log("level not allowed");
      // TODO: Show alert.
      $location.path("/login");
      return;
    }
    $log.log("authenticate success");
  });

  
};

export default authenticate;
