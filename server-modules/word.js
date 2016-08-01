/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 一些工具方法

'use strict';

const tool = require('./tool');
const tal  = require('template-tal');
const fs = require('fs');

let pub = {};
let data = {
    prefix: ["P1", "P2w"],
    title: "Title",
    id: "124ID",
    account: "Account",
    contact: "Contact",
    tel: "Tel123",
    description: "Des01\nDes02\nDes03",
    price: [{startDate: "SD01",
            adultCompanySalePrice: "Adult01",
            childCompanySalePrice: "Child01",
            endDate: "ED01"},
           {startDate: "SD02",
            adultCompanySalePrice: "Adult02",
            childCompanySalePrice: "Child02",
            endDate: "ED02"}],
    itinerary: [{fromTo: "Shanghai to Chongqing",
                detail: "Deatail: DDDD\n Detail: FFFF\n",
                food: {breakfast: "BBBB", lunch: "LLLL", dinner: "DDDD"},
                hotel: "5 star or..",
                flight: "Flight000"},
                {fromTo: "Chongqing to Xian",
                detail: "Deatail: 2DDDD\n Detail: 2FFFF\n",
                food: {breakfast: "2BBBB", lunch: "2LLLL", dinner: "2DDDD"},
                hotel: "25 star or..",
                flight: "Flight002"},
                ],
    priceInclude: "Include SSSS\nInclude Else",
    priceExclude: "Exclude another",
    selfPaid: "self paid info\nself paid info2",
    visaInfo: "visa info\nvisa info2",
    reserveInfo: "reserve info",
    restriction: "restriction info",
};

pub.test = (req, res) => {
  var xml = fs.readFileSync("server-modules/static/f05tal.doc","utf8");
  var result = tal.process(xml, data);
  fs.writeFileSync("server-modules/static/f05tal-processed.doc", result, "utf8");
  tool.l("done.");
  res.send({
    hello: "done."
  });
};

module.exports = pub;
