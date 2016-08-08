var calendarConfig = {
  data: {
    "团期报价": [
      {type: "number", name: 'adultCompanyCompetitorPrice', value: '成人同行价'},
      {type: "number", name: 'childCompanyCompetitorPrice', value: '儿童同行价'},
      {type: "number", name: 'adultCompanySalePrice', value: '成人销售价'},
      {type: "number", name: 'childCompanySalePrice', value: '儿童销售价'},
      {type: "number", name: 'adultCompanyPrice', value: '成人结算价'},
      {type: "number", name: 'childCompanyPrice', value: '儿童结算价'},
      {type: "number", name: 'singleRoomDifference', value: '全程单房差'},
      {type: "number", name: 'totalPeople', value: '入库数'},
      {type: "number", name: 'minimumPeople', value: '最低成团人数'},
      {type: "date", name: 'signupStart', value: '报名开始'},
      {type: "number", name: 'emergentValue', value: '预警值'},
      {type: "number", name: 'airticketEmergentValue', value: '机票预警值'},
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

export default calendarConfig;
