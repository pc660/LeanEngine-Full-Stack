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
            {name: 'riben', value: '日本'},
            {name: 'zhongya', value: '中亚'},
            {name: 'guoneichangxian', value: '国内长线'},
            {name: 'guoneizhoubian', value: '国内周边'},
            {name: 'gangaotai', value: '港澳台'},
        ],
        "主营口岸": [
            {name: 'shanghai', value: '上海'},
            {name: 'beijing', value: '北京'},
            {name: 'tianjin', value: '天津'},
            {name: 'hangzhou', value: '杭州'},
            {name: 'nanjing', value: '南京'},
            {name: 'wuxi', value: '无锡'},
            {name: 'wuhan', value: '武汉'},
            {name: 'xianggang', value: '香港'},
            {name: 'nantong', value: '南通'},
            {name: 'shenzhen', value: '深圳'},
            {name: 'suzhou', value: '苏州'},
            {name: 'changzhou', value: '常州'},
            {name: 'aomen', value: '澳门'},
            {name: 'ningbo', value: '宁波'},
            {name: 'hefei', value: '合肥'},
            {name: 'xuzhou', value: '徐州'},
            {name: 'yangzhou', value: '扬州'},
            {name: 'zhenjiang', value: '镇江'},
            {name: 'yancheng', value: '盐城'},
            {name: 'wenzhoug', value: '温州'},
            {name: 'jinhua', value: '金华'},
            {name: 'taizhou', value: '台州'},
            {name: 'huaian', value: '淮安'},
            {name: 'lianyugnang', value: '连云港'},
            {name: 'yiwu', value: '义务'},
            {name: 'guangzhou', value: '广州'},
        ],
        "线路前缀": [
            {name: 'duanwu', value: '端午'},
            {name: 'shuqi', value: '暑期'},
            {name: 'cuofengyou', value: '错峰游'},
            {name: 'duorenlijian', value: '多人立减'},
            {name: 'zaodinglijian', value: '早定立减'},
        ],
        "线路区域": [
            {name: "youlun", value: '游轮'},
            {name: 'zhongdongfeizhou', value: '中东非洲'},

        ],
        "国家/省份": [
            {name: "xila", value: "希腊"},
            {name: "fenlan", value: "芬兰"},
        ],
        "城市景区": [

        ]
    }
};

module.exports = multiChoiceConfig;