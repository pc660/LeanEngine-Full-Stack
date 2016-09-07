'use strict';

describe('my app', function() {


  it('test login', function() {
    browser.get('login');
    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('admin');
    element(by.id('register')).click();
    expect(browser.getLocationAbsUrl()).toMatch("/admin");
  });


  describe('test admin', function() {

    beforeEach(function() {
      browser.ignoreSynchronization = false;
      browser.get('admin');
    });

    afterEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('http://localhost:3000/api/test/clear');
    })


    it('test add provider account', function() {

      element(by.id('add-account')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin/add-provider-account");
      // Verify that each field has to be filled, otherwise cannot continue.
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin/add-provider-account");
      element(by.css('.confirm')).click();

      element(by.model('username')).sendKeys('testing');
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin/add-provider-account");

      element(by.model('password')).sendKeys('12345');
      element(by.css('.confirm')).click();
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin/add-provider-account");

      element(by.model('email')).sendKeys('testing@test.com');
      element(by.css('.confirm')).click();
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin/add-provider-account");

      element(by.model('contactname')).sendKeys('testingname');
      element(by.css('.confirm')).click();
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin/add-provider-account");

      element(by.model('cellphone')).sendKeys('123456789');
      element(by.css('.confirm')).click();
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin");

      browser.get('login');
      expect(browser.getLocationAbsUrl()).toMatch("/login");
      // Verify that the user is added.
      element(by.model('username')).sendKeys('testing');
      element(by.model('password')).sendKeys('12345');
      element(by.id('register')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/admin");

      var items = element.all(by.tagName('li a'));
      expect(items.count()).toEqual(4);
    });



    it('test add product', function() {

    });

    /*
    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });*/

  });

/*
  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });*/
});
