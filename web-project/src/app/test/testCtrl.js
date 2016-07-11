export default ($log, $scope, $document, lcConfig, fakeDataFac, providerFac, productFac) => {
  'ngInject';
  var provider = fakeDataFac.createProvider();
  var product = fakeDataFac.createProduct();
  product.responsible = "575ce1506be3ff006a41fb2e";
  product.platformcontact = "575ce1506be3ff006a41fb2e";
  //product.contact = "admin";
  productFac.uploadProduct(product).then(function() {
    $log.log("success");
  });
  //providerFac.upload(provider).then(function() {

 // });
};
