/**
* 每位工程师都有保持代码优雅的义务
* Each engineer has a duty to keep the code elegant
*
* @author wangxiao
*/

let config = {

  // http 请求超时时间
  httpTimeout: 20000,

  // Api 的请求地址
  apiHost: 'http://localhost:3000',

  // 运行环境的 host
  host: 'http://localhost:9000',

  userLevel: {
    UNKNOWN: -1,
    ADMIN: 0,
    SALE: 1,
    PROVIDER: 2,
  },

  CUSTOMER_STATE: {
    UNPAID: 0,
    PAID: 1,
  },

  // 产品情况
  productStatus: {
    UNPOSTED: 1,
    UNVERIFIED: 2,
    VERIFIED: 3,
  },

  orderStatus: {
    UNPAID: 1,
    PAID: 2,
    FINISHED: 3,
  }
};

// 判断是否为开发环境
const host = window.location.host;
if (('http://' + host) !== config.host) {
  config.apiHost = 'http://' + host;
}

export default config;
