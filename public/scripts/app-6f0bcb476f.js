!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),r=i(o),a=n(2),d=i(a),l=n(3),c=i(l),s=n(4),u=i(s),p=n(7),m=i(p),f=n(8),v=i(f),h=n(9),g=i(h),b=n(10),y=i(b),w=n(11),$=i(w),k=n(12),x=i(k),P=n(13),j=i(P),_=n(14),C=i(_),M=n(15),S=i(M),O=n(16),I=i(O),U=n(17),F=i(U),B=n(18),A=i(B),T=n(19),H=i(T),L=n(20),z=i(L),D=n(21),E=i(D),q=n(22),Q=i(q),R=n(23),V=i(R),N=n(24),W=i(N);angular.module("webProject",["ngAnimate","ngCookies","ngSanitize","ui.router","ngMaterial","base64","mgcrea.ngStrap","ngFileUpload","angular-md5","ui.bootstrap"]).constant("lcConfig",r["default"]).constant("moment",window.moment).config(d["default"]).config(c["default"]).run(u["default"]).service("commonSer",m["default"]).service("helloSer",v["default"]).directive("lcHeader",g["default"]).directive("providerTextfield",y["default"]).directive("providerMultiChoice",$["default"]).directive("providerAddress",x["default"]).directive("providerMenu",j["default"]).directive("uploadButton",C["default"]).directive("returnPolicy",S["default"]).directive("password",I["default"]).directive("providerSideBar",F["default"]).controller("homeCtrl",A["default"]).controller("addProviderCtrl",H["default"]).controller("addProductCtrl",z["default"]).controller("modalCtrl",E["default"]).factory("authFac",Q["default"]).factory("fileFac",V["default"]).factory("providerFac",W["default"])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={httpTimeout:2e4,apiHost:"http://localhost:3000",host:"http://localhost:9000"},i=window.location.host;"http://"+i!==n.host&&(n.apiHost="http://"+i),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$httpProvider","lcConfig","$sceDelegateProvider",function(e,t,n){"ngInject";var i=t.httpTimeout,o=t.apiHost;e.defaults.withCredentials=!0,e.defaults.headers["delete"]={"Content-Type":"application/json;charset=utf-8"},n.resourceUrlWhitelist(["self","http://localhost:3000/**"]),e.interceptors.push([function(){return{request:function(e){return e.timeout=i,/^[http|https]/.test(e.url)||/\.html$/.test(e.url)||(e.url=o+e.url),e},response:function(e){return/\.html/.test(e.config.url)?e:e.data},responseError:function(e){return Promise.reject(e.data)}}}])}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,n){"ngInject";n.html5Mode(!0),e.state("home",{url:"/",templateUrl:"app/auth/home/home.html",controller:"homeCtrl"}).state("home.add-provider",{url:"/add-provider",templateUrl:"app/common/provider/add.html",controller:"addProviderCtrl"}).state("home.add-product",{url:"/add-product",templateUrl:"app/common/product/add.html",controller:"addProductCtrl"}),t.otherwise("/")}],e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=i(o),a=n(6),d=i(a),l={zhCn:r["default"],en:d["default"]},c="zhCn",s=function(e,t){"ngInject";e.i18n=l[c],e.lang=c,e.$watch("lang",function(){t.$.extend(e.i18n,l[e.lang])})};s.$inject=["$rootScope","$window"],t["default"]=s,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={title:"标题",name:"姓名",nickname:"昵称",username:"用户名",email:"邮箱",admin:"负责",op:"操作",kind:"类别",add:"添加",number:"编号",status:"状态",updateTime:"更新时间","null":"空",leftParenthesis:"（",rightParenthesis:"）",btn:{success:"完成",submit:"提交",edit:"修改","delete":"删除"},auth:{register:"注册",login:"登录"},header:{setting:"设置",logout:"登出",search:"搜索问题试试",ask:"我要提问"}},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={auth:{loginBtn:"Login By LeanCloud"}},e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$http","$state","lcConfig","$window","Upload",function(e,t,n,i,o){"ngInject";return{goHome:function(){i.alert("going home"),t.go("home")},redirect:function(e){i.location.href=e}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$http","$window","lcConfig","$state",function(e,t,n,i){"ngInject";return{getData:function(){return e({method:"get",url:"/api/hello"})}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["commonSer","$rootScope","$state",function(e,t,n){"ngInject";return{restrict:"E",templateUrl:"app/common/header/header.html",scope:!0,replace:!0,link:function(e){}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$window","$state","fileFac",function(e,t,n,i){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/textField/textField.html",replace:!1,scope:{key:"@",label:"@",upload:"@",duration:"@"},link:function(e,t,n){n.upload&&(e.show=!e.show,e.uploadFile=function(t){e.filename=t.name;var n=i.hash(e.filename);i.saveFile(n,t)}),n.duration&&(e.durationShow=!e.durationShow)}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window",function(e,t,n){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/multiChoice/multiChoice.html",replace:!1,scope:{type:"@"},link:function(e,t,n){"经营范围"===n.type?(e.name=n.type,e.options=[{name:"departure",value:"出境"},{name:"arrival",value:"入境"},{name:"dominal",value:"国内"},{name:"ticketDelegate",value:"票务代理"},{name:"bookhotel",value:"住宿"}]):"合作类型"===n.type&&(e.name=n.type,e.options=[{name:"domestieOperator",value:"地接社"},{name:"domestieWholesaler",value:"出发地(组团社)"},{name:"airticket",value:"机票"},{name:"motorcade",value:"车队"},{name:"visa",value:"签证"},{name:"ticket",value:"门票"},{name:"hotel",value:"酒店"},{name:"cruises",value:"游轮"}]),e.onChange=function(){}}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window",function(e,t,n){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/address/address.html",replace:!1,link:function(e,t,n){var i=["上海市"],o=["北京市"],r={"上海市":i,"北京市":o};e.provinces=Object.keys(r),e.cities=r[e.province],e.onProvinceChange=function(){var t=e.province;e.cities=r[t]}}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window",function(e,t,n){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/menu/menu.html",replace:!1,scope:{type:"@"},link:function(e,t,n){e.label=n.type,"成立时间"===n.type?(e.name="foundTime",e.options=["1年以下","1-5年","5-8年","8年以上"]):"公司规模"===n.type?(e.name="companySize",e.options=["10人以下","10-50人","51-100人","100人以上"]):"性别"===n.type&&(e.name="sex",e.options=["男","女"])}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window","Upload",function(e,t,n,i){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/upload/upload.html",replace:!1,scope:{type:"@"},link:function(e,t,i){e.upload=function(){n.alert("upload")}}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window",function(e,t,n){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/returnPolicy/returnPolicy.html",replace:!1}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window",function(e,t,n){"ngInject";return{restrict:"A",templateUrl:"app/common/provider/directives/password/password.html",replace:!1,link:function(e,t,n){e.verify=function(){var t=e.clearVerified();e.verified=!0,e.password!==e.password2?(t.addClass("fail"),t.html("两次密码不一致!")):e.password&&(t.addClass("success"),t.html("密码验证成功!"))},e.focus=function(){e.clearVerified()},e.clearVerified=function(){var e=t.find("#verified");return e.html(""),e.removeClass("fail"),e.removeClass("success"),e}}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$state","$window","providerFac","$uibModal",function(e,t,n,i,o){"ngInject";return{restrict:"E",templateUrl:"app/common/product/directives/providerSideBar/providerSideBar.html",replace:!0,link:function(e,t,r){e.initialize=function(){e.isMenu=!0,e.isSeondMenu=!1,e.providers=[]},e.initialize(),e.getProviderList=function(t){i.getProviderFromType(t,e.success,e.fail)},e.success=function(t){e.providers=t,e.isMenu=!1,e.isSecondMenu=!0;for(var n in e.providers)e.providers[n].isCollapsed=!0},e.fail=function(e){n.alert("fail")},e.openContact=function(t){var n={contactname:"联系人姓名",qqnumber:"QQ号码"},i=o.open({animation:!0,templateUrl:"app/common/product/directives/providerSideBar/contact/myModalContent.html",controller:"modalCtrl",resolve:{provider:function(){var i=e.providers[t].contact,o=[];return Object.keys(i).forEach(function(e){e in n&&o.push({key:n[e],value:i[e]})}),{id:e.providers[t].id,contact:o}}}});i.result.then(function(t){e.selected=t},function(){e.initialize()})}}}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$scope","$window","commonSer","helloSer","authFac",function(e,t,n,i,o){"ngInject";function r(e){t.alert(e)}function a(e){t.alert("fail")}e.goHome=function(){n.goHome()},e.register=function(){o.register("admin","admin",r,a)},e.login=function(){o.login("admin","admin",r,a)},e.set=function(){o.setCredentials("admin","admin")},e.clear=function(){o.clearCredentials()}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$scope","$document","$timeout","lcConfig","$window","fileFac",function(e,t,n,i,o,r){"ngInject";function a(){l.trigger("click")}var d=i.apiHost+"/api/provider/add";e.addUrl=d,e.uploadFiles=!1,e.validate=!0;var l=t.find("#submittest");e.test=function(){r.uploadAllFiles(a)}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$scope","$mdSidenav","$window",function(e,t,n){"ngInject";function i(e){return function(){t(e).toggle().then(function(){})}}e.toggleLeft=i("provider-side-bar")}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$scope","$window","$uibModalInstance","provider",function(e,t,n,i){"ngInject";e.contact=i.contact,e.close=function(){n.dismiss("cancel")},e.showDetail=function(){}}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$http","$state","lcConfig","$window","$cookieStore","$base64",function(e,t,n,i,o,r,a){"ngInject";function d(e,n,i,o){t.post("/api/auth/authenticate",{username:e,password:n}).then(function(e){200===e.code?i(e):o(e)},function(e){o(e)})}function l(e,n,i,o){t.post("/api/auth/register",{username:e,password:n}).then(function(e){"200"===e.code?i(e):o(e)},function(e){o(e)})}function c(e,n){t.get("/api/auth/test")}function s(){delete e.globals.currentUser,r.remove("globals"),t.defaults.headers.common.Authorization="Basic"}var u={};return u.login=d,u.register=l,u.setCredentials=c,u.clearCredentials=s,u}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$http","$state","lcConfig","$window","md5","Upload",function(e,t,n,i,o,r,a){"ngInject";function d(e){a.upload({url:"/api/provider/uploadfile",file:u.files}).then(function(t){e()},function(t){e()},function(e){})}function l(){u.files={}}function c(e,t){u.files[e]=t}function s(e){var t=new Date,n=t.getTime()+"";return r.createHash(e||n)}var u={};return u.files={},u.uploadAllFiles=d,u.saveFile=c,u.hash=s,u.clear=l,u}],e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$http","$state","lcConfig","$window","md5","Upload",function(e,t,n,i,o,r,a){"ngInject";function d(e,n,i){var o=JSON.stringify({type:!0});t.post("/api/provider/get",{query:o}).then(function(e){n(e)},function(e){i(e)})}var l={};return l.getProviderFromType=d,l}],e.exports=t["default"]}]),angular.module("webProject").run(["$templateCache",function(e){e.put("app/auth/home/home.html",'<div class="auth-home-module"><div class="block1"><div class="logo" ng-click="goHome();">LeanEngine</div><div class="btns"><md-button class="registerBtn lc-btn">{{i18n.auth.register}}</md-button><md-button class="loginBtn lc-btn md-raised light">{{i18n.auth.login}}</md-button><md-button ng-click="register();">register test</md-button><md-button ng-click="login();">login test</md-button><md-button ng-click="set();">set cred test</md-button><md-button ng-click="clear();">clear test</md-button></div></div></div><nav class="navbar navbar-inverse" role="navigation"><div class="navbar-header"><a class="navbar-brand" ui-sref="#">AngularUI Router</a></div><ul class="nav navbar-nav"><li><a ui-sref=".add-provider">添加供应商</a></li><li><a ui-sref=".add-product">发布产品</a></li></ul></nav><div ui-view=""></div>'),e.put("app/common/header/header.html",'<div class="common-header-module"><div class="header-content"><div class="logo" ng-click="goHome();">LeanEngine</div><md-menu ng-if="user.username" class="account-menu" md-position-mode="target-right target" md-offset="0 48"><md-button md-menu-origin="" class="lc-btn" ng-click="openMenu($mdOpenMenu, $event)">{{user.username}}</md-button><md-menu-content><md-menu-item><md-button>{{i18n.header.setting}}</md-button></md-menu-item><md-menu-item><md-button>{{i18n.header.logout}}</md-button></md-menu-item></md-menu-content></md-menu><md-button ng-if="!user.username" class="loginBtn" ng-click="">{{i18n.auth.login}}</md-button><div class="search-input" ng-if="ui.showAskBtn"><md-button class="md-icon-button searchBtn" ng-click="" aria-label="close"><span></span></md-button><input class="search" type="text" placeholder="{{i18n.header.search}}"></div><md-button class="askBtn lc-btn md-raised" ng-click="creatTicket()" ng-if="ui.showAskBtn"><span class="ask-icon"></span> <span>{{i18n.header.ask}}</span></md-button></div></div>'),e.put("app/common/navigation/navbar.html",'<nav class="navbar navbar-default" role="navigation" bs-navbar=""><div class="navbar-header"><a class="navbar-brand" href="#">Brand</a></div><ul class="nav navbar-nav"><li data-match-route="/$"><a href="#/">Home</a></li><li data-match-route="/page-one"><a href="#/page-one">Page One</a></li><li data-match-route="/page-two.*"><a href="#/page-two/sub-a">Page Two</a></li></ul></nav>'),e.put("app/common/product/add.html",'<section layout="row" flex=""><provider-side-bar></provider-side-bar><md-content flex="" layout-padding=""><div>TODO: 产品基本信息</div><div layout="column" layout-fill="" layout-align="top center"><div><md-button ng-click="toggleLeft()" class="md-primary">添加供应商</md-button></div></div><div><table><tr><th>服务类型</th><th>供应商名称</th><th>联系信息</th><th>价格</th></tr></table></div></md-content></section>'),e.put("app/common/provider/add.html",'<div class="section"><form id="form" ng-submit="test1()" method="post" action="{{addUrl}}"><table><tbody><tr><td colspan="2" class="title">账户信息</td></tr><tr provider-textfield="" label="用户名" validate="duplicate" key="username"></tr><tr password=""></tr><tr><td colspan="2" class="title">公司信息</td></tr><tr provider-textfield="" label="品牌名称" key="nickname"></tr><tr provider-textfield="" label="公司名称" key="companyname"></tr><tr provider-multi-choice="" type="经营范围"></tr><tr provider-address=""></tr><tr provider-textfield="" label="邮编" key="zipcode"></tr><tr provider-menu="" type="成立时间"></tr><tr provider-menu="" type="公司规模"></tr><tr provider-textfield="" label="注册资金" key="capital"></tr><tr><td colspan="2" class="title">资质信息</td></tr><tr provider-textfield="" label="营业执照号" duration="证件有效期" upload="pdf" key="license"></tr><tr provider-textfield="" label="税务登记号" upload="pdf" key="taxnumber"></tr><tr><td colspan="2" class="title">合作信息</td></tr><tr provider-multi-choice="" type="合作类型"></tr><tr provider-textfield="" label="主营业务" key="mainBusiness"></tr><tr provider-textfield="" label="主要口岸" key="mainDestination"></tr><tr provider-textfield="" label="供应合同" duration="合同有效期" upload="pdf" key="contract"></tr><tr return-policy=""></tr><tr><td colspan="2" class="title">联系信息</td></tr><tr provider-textfield="" label="姓名" key="contactname"></tr><tr provider-menu="" type="性别"></tr><tr provider-textfield="" label="座机" key="homephone"></tr><tr provider-textfield="" label="传真" key="fax"></tr><tr provider-textfield="" label="手机" key="cellphone"></tr><tr provider-textfield="" label="QQ号" key="qqnumber"></tr><tr provider-textfield="" label="微信号" key="wechat"></tr></tbody></table><input id="submit" type="button" value="确认" ng-click="test();"> <input id="submittest" type="submit" value="确认" style="display: None"></form></div>'),e.put("app/common/product/directives/providerSideBar/providerSideBar.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="provider-side-bar"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Sidenav Left</h1></md-toolbar><div ng-show="isMenu"><md-content layout-padding=""><md-button ng-click="getProviderList(\'motorcade\')" class="md-primary">车队</md-button></md-content><md-content layout-padding=""><md-button ng-click="getProviderList(\'airticket\')" class="md-primary">机票</md-button></md-content><md-content layout-padding=""><md-button ng-click="getProviderList(\'domestieOperator\')" class="md-primary">地接社</md-button></md-content></div><div ng-show="isSecondMenu"><table><tr ng-repeat="provider in providers"><td><md-button ng-click="getProvider()" class="md-primary">{{ provider.name }}</md-button></td><td><md-button ng-click="openContact($index)" class="md-primary">联系信息</md-button></td></tr></table></div></md-sidenav>'),e.put("app/common/provider/directives/address/address.html",'<td>地址:</td><td layout="row"><div>省份:</div><md-input-container class="margin"><md-select ng-change="onProvinceChange();" name="province" ng-model="province" aria-label="province-select"><md-option ng-selected="$first" ng-value="province" ng-repeat="province in provinces">{{province}}</md-option></md-select></md-input-container><div class="margin">城市:</div><md-input-container class="margin"><md-select ng-change="onCityChange();" name="city" ng-model="city" aria-label="city-select"><md-option ng-selected="$first" ng-value="city" ng-repeat="city in cities">{{city}}</md-option></md-select></md-input-container><div class="margin">地址:</div><input class="margin" name="address" type="text"></td>'),e.put("app/common/provider/directives/multiChoice/multiChoice.html",'<td>{{name}}:</td><td><label class="checkbox-inline" ng-repeat="option in options"><input type="checkbox" class="checkbox" name="{{ option.name }}"><p class="text">{{ option.value }}</p></label></td>'),e.put("app/common/provider/directives/menu/menu.html",'<td>{{label}}</td><td><md-input-container class="menu"><md-select name="{{name}}" ng-change="onValueChange();" ng-model="select" aria-label="select"><md-option ng-selected="$first" ng-value="option" ng-repeat="option in options">{{option}}</md-option></md-select></md-input-container></td>'),e.put("app/common/provider/directives/password/password.html",'<td>密码:</td><td><div><input class="inline input-field" type="password" ng-model="password" name="password" ng-blur="verify();" ng-focus="focus();"><div class="inline input-field">确认密码:</div><input class="inline input-field" type="password" ng-model="password2" ng-blur="verify();" ng-focus="focus();"><div id="verified" class="inline input-field"></div></div></td>'),e.put("app/common/provider/directives/returnPolicy/returnPolicy.html",'<td>加返政策:</td><td><div class="block"><div class="inline">全年总人数: <input type="text" name="returnTotalPeople"> (人)</div><div class="inline" name="returnMoneyEachPeople">加返 <input type="text"> (元/人)</div></div><div class="block"><div class="inline">全年销售额: <input type="text" name="returnTotalRevenue"> (元)</div><div class="inline" name="returnMoneyRevenue">加返 <input type="text"> (元)</div></div></td>'),e.put("app/common/provider/directives/textField/textField.html",'<td>{{label}}:</td><td><input class="input-field" type="text" name="{{key}}"><div class="inline input-field" ng-show="durationShow"><div class="inline">{{duration}}</div><input type="text" class="inline input-field" ng-model="fromDate" placeholder="开始时间" bs-datepicker="" name="{{key}}Start"><div class="inline input-field">-</div><input type="text" class="inline input-field" ng-model="endDate" placeholder="结束时间" bs-datepicker="" name="{{key}}End"></div><md-button ng-show="show" class="md-raised md-primary" ngf-select="uploadFile($file);">上传文件</md-button><div ng-show="show" class="inline input-field">{{filename}} <input type="hidden" name="{{key}}-filename" value="{{filename}}"></div></td>'),e.put("app/common/provider/directives/upload/upload.html",'<md-button class="md-raised md-primary" ngf-select="upload($file)">上传文件</md-button>'),e.put("app/common/product/directives/providerSideBar/contact/myModalContent.html",'<div class="modal-header"><h3 class="modal-title">联系信息</h3></div><div class="modal-body"><ul><li ng-repeat="item in contact">{{ item.key }}: {{ item.value }}</li></ul></div><div class="modal-footer"><button class="btn btn-primary" type="button" ng-click="close()">返回</button> <button class="btn btn-warning" type="button" ng-click="showDetails()">查看详情</button></div>')}]);