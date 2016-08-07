// 用来往数据库添加虚假数据.
export default ($log, $rootScope, $http, $state, formConfig, lcConfig, $window, md5, Upload, multiChoiceConfig, productFac, calendarConfig, menuConfig) => {
  'ngInject';

  var service = {};
  service.createProvider = createProvider;
  service.randomNumber = randomNumber;
  service.randomReturnPolicy = randomReturnPolicy;
  service.randomChoice = randomChoice;
  service.randomAddress = randomAddress;
  service.randomString = randomString;
  service.createProduct = createProduct;
  return service;

  function createProvider() {
    var provider = {};
    provider.username = randomString("用户");
    provider.password = "12345";
    provider.contactname = randomString("联系人姓名");
    provider.cellphone = randomString("手机号");
    provider.homephone = randomString("座机号");
    provider.qqnumber = randomString("QQ号码");
    provider.wechat = randomString("微信号");
    provider.address = randomAddress();
    provider.nickname = randomString("简称");
    provider.companyname = randomString("公司名称");
    provider.destination = randomChoice("主营目的地");
    provider.start = randomChoice("主营口岸");
    provider.customerResource = randomString("收客情况");
    provider.flightResource = randomString("航班资源");
    provider.productResource = randomString("产品优势");
    provider.returnPolicy = randomReturnPolicy();
    $log.log(provider);
    return provider;
  }

  function createProduct() {
    var product = {};
    product.productName = randomString("线路名称");
    product.fullName = randomString("供应商产品名称");
    product.start = randomAddress();
    product.type = randomMenu("类型");
    product.price = randomCalendar("团期报价");
    product.hotelStandard = randomMenu("酒店标准");
    product.transportStandard = randomMenu("交通方式");
    product.area = randomMenu("大区");
    product.stopDay = randomNumber() % 10;
    product.prefix = randomChoice("线路前缀");
    product.productManager = randomString("产品负责人");
    product.pickedProviderId = "576781716be3ff006a36a295";
    product.contactId = "576781721532bc0060317117";
    // product.contact = randomForm("商户联系人");
    // Do this at the end.
    product.responsible = randomString();
    $log.log(product);
    return product;
  }

  function randomContact(key) {
    var data = formConfig.data[key];
    var object = {};
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      switch(item.type) {
        case "text":
          object[item.name] = randomString(item.key);
          break;
        case "number":
          object[item.name] = randomNumber();
          break;
      }
    }
    return object;
  }

  function randomMenu(key) {
    var data = menuConfig.data[key];
    var index = randomNumber() % data.length;
    return data[index];
  }

  function createObject(data) {
    var object = {};
    for (var i = 0; i < data.length; i++) {
      switch (data[i].type) {
        case "number":
          object[data[i].name] = randomNumber();
          break;
        case "date":
          object[data[i].name] = randomDate();
      }
    }
    return object;
  }

  function createCalendar(data) {
    var object = {};
    for (var i = 0; i < data.length; i++) {
      switch (data[i].type) {
        case "number":
          object[data[i].name] = randomNumber();
          break;
        case "date":
          object[data[i].name] = randomDate();
      }
    }
    object.reservedPeopleNumber = 0;
    object.paidPeopleNumber = 0;
    object.restPeopleNumbner = object.totalPeople;
    return object;
  }

  function randomDate() {
    var date = "2016年" + (randomNumber() % 12 + 1) + "月" + (randomNumber() % 28 + 1) + "日";
    return date;
  }

  function shouldShow() {
    return (randomNumber() % 2 === 0);
  }

  function randomCalendar(key) {
    var data = calendarConfig.data[key];
    var calendar = {};
    calendar[2016] = [];
    // Create a random calendar.
    // We only create for 2016.
    for (var i = 0; i < 12; i++) {
      var month = [];
      for (var j = 0; j < 28; j++) {
        if (shouldShow()) {
          month.push(createObject(data));
        } else {
          month.push({});
        }
      }
      calendar[2016].push(month);
    }
    return calendar;
  }

  // A random number from 1 to 10000.
  function randomNumber() {
    return Math.floor((Math.random() * 10000) + 1);
  }

  function randomReturnPolicy() {
    var returnPolicy = {};
    returnPolicy.returnTotalPeople = randomNumber();
    returnPolicy.returnMoneyEachPeople = randomNumber();
    returnPolicy.returnTotalRevenue = randomNumber();
    returnPolicy.returnMoneyRevenue = randomNumber();
    return returnPolicy;
  }

  function randomChoice(key) {
    var data = multiChoiceConfig.data[key];
    var indexSet = new Set();
    for (var i = 0; i < data.length; i++) {
      indexSet.add(randomNumber() % data.length);
    }

    var dest = {};
    indexSet.forEach(function(index) {
      dest[data[index].name] = true;
    });
    return dest;
  }

  function randomAddress() {
    var address = {};
    address.province = "省" + randomNumber();
    address.city = "市" + randomNumber();
    address.county = "县" + randomNumber();
    address.detail = randomString("地址");
    return address;
  }

  function randomString(baseString) {
    return baseString + randomNumber();
  }
};
