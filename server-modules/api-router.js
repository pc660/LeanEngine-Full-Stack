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
/
// 一个 API 路由下的 hello 接口，访问 /api/hello
const tool = require('./tool');
router.get('/hello', hello.hello);

//router.post('/auth/authenticate', auth.authenticate);
router.get('/auth/test', isLoggedIn, auth.test);
router.post('/auth/register', auth.register);

router.post('/auth/authenticate', provider.add);

router.post('/provider/add',
  passport.authenticate('', { failureRedirect: '/hello' }),
   function(req, res) {
    res.send({
      code: 200,
    });
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
