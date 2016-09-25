var formConfig = {
  data: {
    "商户联系人": [
      {type: "text", name: 'contactname', key: '姓名'},
      {type: "text", name: 'cellphone', key: '手机'},
      {type: "text", name: 'homephone', key: '座机'},
      {type: "text", name: 'position', key: '职位'},
      {type: "text", name: 'qqnumber', key: 'qq'},
      {type: "text", name: 'wechat', key: '微信'},
    ],
    "团期报价": [
      {type: "number", name: 'adultCompanySalePrice', key: '成人销售价'},
      {type: "number", name: 'childCompanySalePrice', key: '儿童销售价'},
      {type: "number", name: 'adultCompanyCompetitorPrice', key: '成人同行价'},
      {type: "number", name: 'childCompanyCompetitorPrice', key: '儿童同行价'},
      {type: "number", name: 'adultCompanyPrice', key: '成人结算价'},
      {type: "number", name: 'childCompanyPrice', key: '儿童结算价'},
      {type: "number", name: 'singleRoomDifference', key: '全程单房差'},
      {type: "number", name: 'totalPeople', key: '入库数'},
      {type: "number", name: 'minimumPeople', key: '最低成团人数'},
      {type: "date", name: 'signupStart', key: '报名开始'},
    ],
    "库存管理": [
      {type: "number", name: 'totalPeople', value: '入库数'},
      {type: "number", name: 'minimumPeople', value: '最低成团人数'},
      {type: "number", name: 'reservedPeopleNumber', value: '占位数'},
      {type: "number", name: 'paidPeopleNumber', value: '签约数'},
      {type: "number", name: 'restPeopleNumber', value: '余位'},
    ]
  }
};

export default formConfig;
