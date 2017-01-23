/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

'use strict';

var AV = require('leanengine');

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;
const schedule = require('node-schedule');

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);

// 如果不希望使用 masterKey 权限，可以将下面一行删除
// AV.Cloud.useMasterKey();

var app = require('./server-modules/app');

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 3000);
app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT, '\n\n\n\n\n\n');

  var rule = new schedule.RecurrenceRule();
  rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6];
  rule.hour = 0;
  rule.minute = 0;

  var updateJob = schedule.scheduleJob(rule, function(){
    console.log("deleting 过期 product");
    var query = new AV.Query('ProductValidationMap');
    var currentDate = new Date();
    var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    query.equalTo("date", date.toString());
    query.find().then(function(results) {
      if (results.length > 0) {
        var products = results[0].get("product");
        products.forEach(function(productId) {
          var productAV =  AV.Object.createWithoutData('Product', productId);
          productAV.fetch().then(function(result) {
            var maxDate = result.get("maxDate");
            if (maxDate.toString() == date.toString()) {
              productAV.set("category", "过期");
              var price = productAV.get("price");
              var currentDate = new Date();
              for (var year in price) {
                for (var month in price[year]) {
                  for (var day in price[year][month]) {
                    var date = new Date(year, month, day);
                    if (currentDate > date) {
                      delete price[year][month][day];
                    }
                  }
                }
              }
              productAV.set("price", price);
              productAV.save();
            }
          })
        })
      }
    })
  });
});