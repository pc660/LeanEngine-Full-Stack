export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig) => {
  'ngInject';
  var service = {};
  service.submitOrder = submitOrder;
  service.getAllOrder = getAllOrder;
  service.getUnpaidOrder = getUnpaidOrder;
  service.getPaidOrder = getPaidOrder;
  service.getFinishedOrder = getFinishedOrder;
  service.getOrder = getOrder;
  service.orderGetPaid = orderGetPaid;
  service.cancelOrder = cancelOrder;
  service.revokeOrder = revokeOrder;
  service.getRevoke = getRevoke;
  service.verify = verify;
  return service;

  function submitOrder(order, customers) {
    $log.log("submitOrder");
    return $http.post('/api/order/add', {order: order, customers: customers});
  }

  function orderGetPaid(orderId) {
    return $http.post('/api/order/update', {orderId: orderId, status: lcConfig.orderStatus.PAID});
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

  function getOrder(orderId) {
    return $http.post('/api/order/get', {id: orderId});
  }

  function cancelOrder(orderId) {
    return $http.post('/api/order/cancel', {id: orderId});
  }

  function revokeOrder(orderId, status) {
    return $http.post('/api/order/revoke', {id: orderId, status: status});
  }

  function getRevoke() {
    return $http.post('/api/order/getRevoke');
  }

  function verify(orderId, status) {
    return $http.post('/api/order/verify', {id: orderId, status: status});
  }
};
