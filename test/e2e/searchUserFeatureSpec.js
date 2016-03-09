describe("gitHubSearch",function(){
  it('filters by the search term',function(){
    browser.get("http://localhost:8000");
    var userList = element.all(by.repeater('user in users'))
    var searchTerm = element(by.model('searchTerm'));
    var submit = $('#submit');
    searchTerm.sendKeys('mojombo');
    submit.click();
    expect(userList.count()).toBe(1);
  });
});
