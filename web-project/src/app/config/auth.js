const authenticate = (authFac, $location, $rootScope, $log, lcConfig, $state, $window, $cookies) => {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // If we do not need authentication.
    $log.log(toState.authenticate);
    if (toState.authenticate === undefined) {
      $log.log("No need authenticate");
      return;
    }

    if (authFac.getUserLevel() === lcConfig.userLevel.ADMIN) {
      $log.log("admin");
      return;
    }

    if (!toState.authenticate.includes(authFac.getUserLevel())) {
      $log.log("level not allowed");
      // TODO: Show alert.
      $location.path("/login");
      return;
    }
    $log.log("authenticate success");

    if (toState.redirectTo) {
      event.preventDefault();
      $log.log("doing this");
      $state.go(toState.redirectTo, toParams, {location: 'replace'});
    }
  });


};

export default authenticate;
