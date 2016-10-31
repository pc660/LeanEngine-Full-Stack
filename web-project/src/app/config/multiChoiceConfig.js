var multiChoiceConfig = {
  // TODO: Maybe we don't need the name here?
  data: {
    "产品类型": [
      {name: 'productAbroadGroup', value: '出境跟团游'},
      {name: 'productAbroadFreedom', value: '出境自由行'},
      {name: 'productDomesticGroup', value: '国内跟团游'},
      {name: 'productDomesticFreedom', value: '国内自由行'},
      {name: 'productDomresticNearby', value: '国内周边游'},
      {name: 'productVisaService', value: '签证服务'},
    ],
    "经营范围": [
      {name: 'providerDeparture', value: '出境旅游'},
      {name: 'providerArrival', value: '入境旅游'},
      {name: 'providerDomestic', value: '境内旅游'},
      {name: 'providerTicketDelegate', value: '票务代理'},
      {name: 'providerBookhotel', value: '住宿'},
    ],
    "主营目的地": [
      {name: "ouzhou", value: '欧洲'},
      {name: "meizhou", value: '美洲'},
      {name: 'aouzhou', value: '澳洲'},
      {name: 'dayangzhou', value: '大洋洲'},
      {name: 'dongnanya', value: '东南亚'},
      {name: 'youlun', value: '邮轮'},
      {name: 'haidao', value: '海岛'},
      {name: 'riben', value: '日韩'},
      {name: 'guoneichangxian', value: '国内长线'},
      {name: 'guoneizhoubian', value: '周边短线'},
      {name: 'ziyouxing', value: '自由行'},
      {name: 'zijiayou', value: '自驾游'},
      {name: 'gangaotai', value: '港澳台'},

    ],
    "主营口岸": [
      {name: 'shanghai', value: '上海'},
      {name: 'beijing', value: '北京'},
      {name: 'tianjin', value: '天津'},
      {name: 'hangzhou', value: '杭州'},
    ],
    //春节，国庆，元旦，暑期，寒假，端午，中秋，家庭游，亲子游，闺蜜游，错峰游，多人立减，早定特惠，周末游，自驾游，自由行，蜜月游，漂流，古镇游，温泉
    "线路前缀": [
      {name: 'duanwu', value: '端午'},
      {name: 'shuqi', value: '暑期'},
      {name: 'cuofengyou', value: '错峰游'},
      {name: 'duorenlijian', value: '多人立减'},
      {name: 'zaodinglijian', value: '早定特惠'},
      {name: 'chunjie', value: "春节"},
      {name: 'guoqing', value: "国庆"},
      {name: 'yuandan', value: "元旦"},
      {name: 'shujia', value: "暑假"},
      {name: "hanjia", value: "寒假"},
      {name: "zhongqiu", value: "中秋"},
      {name: "jiatingyou", value: "家庭游"},
      {name: 'qinziyou', value: '亲子游'},
      {name: 'guimiyou', value: '闺蜜游' },
      {name: 'zhoumoyou', value: '周末游' },
      {name: 'ziyouxing', value: '自由行' },
      {name: 'zijiayou', value: '自驾游' },
      {name: 'miyueyou', value: '蜜月游' },
      {name: 'piaoliu', value: '漂流' },
      {name: 'guzhenyou', value: '古镇游' },
      {name: 'wenquan', value: '温泉' },

    ],
  }
};

export default multiChoiceConfig;
