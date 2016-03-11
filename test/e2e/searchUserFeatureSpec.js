describe("gitHubSearch", function(){
  it('filters by the search term',function(){
    browser.get("http://localhost:8000");
    var searchTerm = element(by.model('searchCtrl.searchTerm'));
    var submit = $('#submit');
    searchTerm.sendKeys('mojombo');
    submit.click();
    var users = element.all(by.css('.user-profile'));
    expect(users.count()).toBe(1);
  });

});
