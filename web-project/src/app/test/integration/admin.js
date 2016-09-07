describe('Integration ', function() {
  it('test login admin', function() {

    // Find the element with ng-model="user" and type "jacksparrow" into it
    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('admin');

    // Find the first (and only) button on the page and click it
    element(by.css(':login')).click();
  });
});
