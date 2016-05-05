export default ($rootScope, $log, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';
  
  var service = {};

  service.getProvider = getProvider;
  service.getReturnPolicyDetail = getReturnPolicyDetail;
  service.search = search; 
  service.util = {};
  service.util.getReturnPolicy = getReturnPolicy;
  service.uploadProviderFiles = uploadProviderFiles;
  service.files = {};
  return service;
  
  /**
  * @param providerId.
  * @return promise.
  * */
  function getReturnPolicyDetail(providerId) {
    return $http.post('/api/provider/get-policy', {providerId: providerId}); 
  }

  /**
  * @param query. An object that contains query parameters. An index usually is
  * set, if not, assume the index is 0.
  * */
  function getProvider(query) {
    return $http.post('/api/provider/get', {query: JSON.stringify(query)});
  }
 
  /**
   * @param: AV.Object('Provider') only contains Return policy information.
   * @return: A message that could be used to describe the current return policy
   * situation.
   **/
  function getReturnPolicy(provider) {
    var totalPeople = provider.returnTotalPeople;
    var totalRevenue = provider.returnTotalRevenue;
    var paidPeople = provider.paidPeople;
    var moneyEachPeople = provider.returnMoneyEachPeople;
    var paidRevenue = provider.paidRevenue;
    // TODO: Define a template for the string.
    if (totalPeople <=0 || totalRevenue <=0) {
      return "无加返政策";
    }
    // 处理加返人数.
    if (totalPeople > 0) {
      var remainString = "";
      if (totalPeople > paidPeople) {
        remainString = "剩余人数:" + (totalPeople - paidPeople) + "人 ";
      }
      var moneyString = "每人返利:" + (moneyEachPeople) + "(元/人)";
      return remainString + moneyString;
    }
    // TODO: 处理加返利润()
    return "未处理加返利润";
  }

  /**
  * @param: {filename: file} a dictionary of files of which key is the filename
  * and the value is the file content. 
  * */
  function uploadProviderFiles() {
    $log.log("providerFac.uploadProviderFiles");
    $log.log(service.files);
    return Upload.upload({
      url: '/api/provider/uploadfile',
      files: service.files
    });
  }

  /**
  * @param: query. A json object of query that contains keyword of the provider.
  * 
  * */
  function search(query) {
     return $http.post('/api/provider/search', {query: JSON.stringify(query)}); 
  }
};
