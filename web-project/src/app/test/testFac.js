export default ($log, $rootScope, $http, $state, lcConfig, $window, md5, Upload, $uibModal, formConfig, multiChoiceConfig, menuConfig, calendarConfig) => {
  'ngInject';
  var service = {};
  service.randomContact = randomContact;
  service.randomMenu = randomMenu;
  service.randomCalendar = randomCalendar;
  service.randomDate = randomDate;
  service.randomNumber = randomNumber;
  service.randomChoice = randomChoice;
  service.randomString = randomString;
  service.randomAddress = randomAddress;
  service.createProvider = createProvider;
  service.createProduct = createProduct;
  service.randomUser = randomUser;
  return service;

  // Things that missed.
  // contact
  function createProduct(providerId) {
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
    product.pickedProvider = {};
    product.pickedProvider.objectId = providerId;
    product.duration = 3;
    product.hotelDuration = 2;
    // Set all of them as admin.
    product.responsible = "578f5093a34131005b975809";
    product.platformcontact = "578f5093a34131005b975809";

    product.priceInclude = randomString("费用包含");
    product.priceExclude = randomString("费用不含");
    product.selfPaid = randomString("自费项目");
    product.visaInfo = randomString("签证信息");
    product.reserveInfo = randomString("预定须知");
    product.restriction = randomString("收客限制");
    product.itinerary = [];
    for (var i = 0; i < 3; i++) {
      product.itinerary.push(createItinerary());
    }
    $log.log(product);
    return product;
  }

  function createItinerary() {
    var itinerary = {};
    itinerary.title = randomString("标题");
    itinerary.flight = randomString("航班");
    itinerary.hotelDetail = randomString("住宿信息");
    itinerary.hotel = randomString("同级宾馆");
    itinerary.food = {};
    itinerary.food.morning = randomString("早餐");
    itinerary.food.noon = randomString("中餐");
    itinerary.food.evening = randomString("晚餐");
    return itinerary;
  }

  function createProvider() {
    var provider = {};
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

  function randomUser() {
    var username = randomString('uesrname');
    var password = "12345";
    return {username: username, password: password};
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
