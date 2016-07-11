export default ($rootScope, $log, $http, $state, lcConfig, $window, md5, Upload) => {
  'ngInject';

  var service = {};

  service.getProvider = getProvider;
  service.getReturnPolicyDetail = getReturnPolicyDetail;
  service.search = search;
  service.util = {};
  service.util.getReturnPolicy = getReturnPolicy;
  service.uploadProviderFiles = uploadProviderFiles;
  service.upload = upload;
  service.files = {};
  service.getContactList = getContactList;
  service.getMyProvider = getMyProvider;
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
   * @param file. The file you want to upload.
   * @param filename, the filename that you want to assign this file to.
   *
  * */
  function uploadProviderFiles(file, filename) {
    return Upload.upload({
      url: '/api/provider/uploadfile',
      data: {file: file, filename: filename},
    });
  }

  function upload(provider) {
    // First upload the file.
    $log.log("provider");
    $log.log(provider);
    return $http.post('/api/provider/add', {provider: provider});
  }

  /**
  * @param: query. A json object of query that contains keyword of the provider.
   * @params: include. A list of included attributions. If empty, then all.
  *
  * */
  function search(query, select) {
     return $http.post('/api/provider/search', {query: query, select: select});
  }

  function getMyProvider() {
    return $http.post('/api/provider/search', {query: {self: true}});
  }

  function getContactList(providerId) {
    return $http.post('/api/user/getContactList', {providerId: providerId});
  }
};
