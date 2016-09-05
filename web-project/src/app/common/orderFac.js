export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) => {
  'ngInject';
  var service = {};
  service.submitOrder = submitOrder;
  service.getAllOrder = getAllOrder;
  service.getUnpaidOrder = getUnpaidOrder;
  service.getPaidOrder = getPaidOrder;
  service.getFinishedOrder = getFinishedOrder;
  service.getOrder = getOrder;
  service.cancelOrder = cancelOrder;
  service.revokeOrder = revokeOrder;
  service.getRevoke = getRevoke;
  service.update = update;
  service.search = search;
  service.getCancel = getCancel;
  service.getPaidVerifiedOrder = getPaidVerifiedOrder;
  service.cancelUnpaidOrder = cancelUnpaidOrder;
  service.updateCustomerInfo = updateCustomerInfo;
  service.getCanceling = getCanceling;
  return service;

  function submitOrder(order, customers) {
    $log.log("submitOrder");
    return $http.post('/api/order/add', {order: order, customers: customers});
  }

  function updateCustomerInfo(order) {
    return $http.post('/api/order/update', {id: order.objectId, customers: order.customers});
  }

  function getAllOrder(admin) {
    return $http.post('/api/order/getAll', {admin: admin});
  }

  function getUnpaidOrder(admin, verified) {
    if (verified) {
      return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.UNPAID_VERIFIED, admin: admin});
    }

    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.UNPAID_UNVERIFIED, admin: admin});
  }

  function getPaidOrder(admin) {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.PAID, admin: admin});
  }

  function getFinishedOrder(admin) {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.FINISHED, admin: admin});
  }

  function getPaidVerifiedOrder(admin) {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.PAID_VERIFIED, admin: admin});
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

  function getRevoke(admin) {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.REVOKE, admin: admin});
  }

  function getCanceling(admin) {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.CANCEL, admin: admin});
  }

  function update(order, status) {
    return $http.post('/api/order/update', {id: order.objectId, status: status});
  }

  function search(query) {
    return $http.post('/api/order/search', {query: query});
  }

  function getCancel(admin) {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.CANCELLED, admin: admin});
  }
};
