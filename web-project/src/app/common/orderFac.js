export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) => {
  'ngInject';
  var service = {};
  service.submitOrder = submitOrder;
  service.getAllOrder = getAllOrder;
  service.getOrder = getOrder;
  service.cancelOrder = cancelOrder;
  service.revokeOrder = revokeOrder;
  service.update = update;
  service.search = search;
  service.cancelUnpaidOrder = cancelUnpaidOrder;
  service.updateCustomerInfo = updateCustomerInfo;
  service.getCount = getCount;
  return service;

  function submitOrder(order, customers) {
    $log.log("submitOrder");
    return $http.post('/api/order/add', {order: order, customers: customers});
  }

  function updateCustomerInfo(order) {
    return $http.post('/api/order/update', {id: order.objectId, customers: order.customers});
  }

  function getAllOrder(status, index, query) {
    if (!index) {
      index = 0;
    }
    if (!query) {
      query = {};
    }
    if (!status) {
      return $http.post('/api/order/getAll', {index: index, query: query});
    } else {
      return $http.post('/api/order/getAll', {status: status, index: index, query: query});
    }
  }

  function getOrder(orderId) {
    return $http.post('/api/order/get', {id: orderId});
  }

  function cancelOrder(orderId) {
    return $http.post('/api/order/cancel', {id: orderId});
  }

  function cancelUnpaidOrder(orderId) {
    return $http.post('/api/order/update', {id: orderId, status: lcConfig.orderStatus.CANCEL});
  }

  function revokeOrder(orderId, revoke) {
    return $http.post('/api/order/revoke', {id: orderId, revoke: revoke});
  }

  function update(order, status) {
    return $http.post('/api/order/update', {id: order.objectId, status: status});
  }

  function search(query) {
    return $http.post('/api/order/search', {query: query});
  }

  function getCount() {
    return $http.post('/api/order/getCount');
  }
};
