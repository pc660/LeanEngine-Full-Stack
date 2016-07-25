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
  return service;

  function submitOrder(order, customers) {
    $log.log("submitOrder");
    return $http.post('/api/order/add', {order: order, customers: customers});
  }

  function orderGetPaid(orderId) {
    return $http.post('/api/order/update', {orderId: orderId, status: lcConfig.orderStatus.PAID});
  }

  function getAllOrder() {
    return $http.post('/api/order/getAll');
  }

  function getUnpaidOrder() {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.UNPAID});
  }

  function getPaidOrder() {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.PAID});
  }

  function getFinishedOrder() {
    return $http.post('/api/order/getAll', {status: lcConfig.orderStatus.FINISHED});
  }

  function getOrder(orderId) {
    return $http.post('/api/order/get', {id: orderId});
  }
};
