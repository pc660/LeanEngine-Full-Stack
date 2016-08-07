// 用来往数据库添加虚假数据.
export default ($log, $rootScope, $http, $state,
                authFac,
                providerFac,
                productFac,
                userFac,
                testFac) => {
  'ngInject';

  createProviderAndProdudct();
  function createProviderAndProdudct() {
    var user = testFac.randomUser();
    $log.log(user);
    authFac.register(user.username, user.password).then(function() {
      authFac.login(user.username, user.password).then(function() {
        $log.log("login successfully");
        var provider = testFac.createProvider();
        providerFac.upload(provider).then(function(providerId) {
          $log.log('successfullly create fake provider');
          $log.log(providerId);
          wait(2000);
          // Create a fake product.
          var product = testFac.createProduct(providerId);
          providerFac.getContactList(providerId).then(function(results) {
            $log.log("get contact success");
            $log.log(results);
            product.contact = results[0];
            $log.log(product);
            productFac.uploadProduct(product).then(function() {
            });
          });
        });
      });
    });
  }

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

};


