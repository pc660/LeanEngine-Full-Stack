/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 所有 API 的路由

'use strict';

const router = require('express').Router();
const passport = require('passport');
// 添加一个模块
const hello = require('./hello');
const auth = require('./auth');
const provider = require('./provider');
const product = require('./product');
const itinerary = require('./itinerary');
const customer = require('./customer');
const order = require('./order');
const user = require('./user');
const test = require('./test');

// 一个 API 路由下的 hello 接口，访问 /api/hello
const tool = require('./tool');
const multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

router.get('/hello', hello.hello);

//router.post('/auth/authenticate', auth.authenticate);
router.get('/auth/test', isLoggedIn, auth.test);
router.post('/auth/register', auth.register);
router.post('/auth/logout', auth.logout);
router.post('/auth/changePass', auth.changePass);
router.post('/provider/add', provider.add);
router.post('/provider/uploadfile', multipartyMiddleware, provider.uploadfile);
router.post('/provider/get',  provider.get);
router.post('/provider/get-policy',  provider.getReturnPolicy);
router.post('/provider/search',  provider.search);
router.post('/provider/delete',  provider.delete);

//route product
router.post('/product/add', product.add);
router.post('/product/search', product.search);
router.post('/product/signin', product.signin);
// Maybe use a single entry point.
router.post('/product/getUnverified', product.getUnverified);
router.post('/product/hasUnfinished', product.hasUnfinished);
router.post('/product/verify', product.verify);
router.post('/product/getProductsCount', product.getProductsCount);
router.post('/product/delete', product.delete);
router.post('/product/getSelfPaid', product.getSelfPaid);
router.post('/product/updateCategory', product.updateCategory);

router.post('/product/getAll', product.getAll);
router.post('/product/get', product.get);
router.post('/itinerary/download', itinerary.download);
router.post('/customer/search', customer.search);

// Route order
router.post('/order/add', order.add);
router.post('/order/getAll', order.getAll);
router.post('/order/get', order.get);
router.post('/order/update', order.update);
router.post('/order/cancel', order.cancel);
router.post('/order/revoke', order.revoke);
router.post('/order/getRevoke', order.getRevoke);
router.post('/order/verify', order.verify);
router.post('/order/getCount', order.getCount);

// router user.
router.post('/user/get',  user.get);
router.post('/user/getProvider', user.getProvider);
router.post('/user/getCurrentUserInfo',  user.getCurrentUserInfo);
router.post('/user/addContactList',  user.addContactList);
router.post('/user/getContactList',  user.getContactList);
router.post('/user/editContactList',  user.editContactList);
router.post('/user/deleteContactList',  user.deleteContactList);

router.get('/test/clear', test.clear);


router.post('/auth/authenticate', passport.authenticate('login', { failWithError: true }), function(req, res) {
    tool.l("login success");
    var user = {};
    user['id'] = req.user.id;
    user['level'] = req.user.get("level");
    res.cookie('user', JSON.stringify(user), {httpOnly: false, expires: new Date(Date.now() + 900000)});
    res.sendStatus(200);
  }, function(err, req, res, next) {
    tool.l(err);
    tool.l("login failed");
    res.status(404).send(error);
  });

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    res.send({
      code: 302,
      message: "not logged in"
    });
}

router.get('/success', function(req, res) {
  tool.l("123");
  res.send("success 123");
});

router.get('/failure', function(req, res) {
  tool.l("123");
  res.send("fail 123");
});


// 测试 async/await 支持
// const f = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(123);
//     }, 2000);
//   });
// };

// const testAsync = async () => {
//   const t = await f();
//   console.log(t);
// };

// testAsync();

module.exports = router;
