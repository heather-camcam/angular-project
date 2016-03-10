describe("gitHubSearch", function(){
  xit('filters by the search term',function(){
    browser.get("http://localhost:8000");
    var userList = element.all(by.repeater('user in users'))
    var searchTerm = element(by.model('searchTerm'));
    var submit = $('#submit');
    searchTerm.sendKeys('mojombo');
    submit.click();
    expect(userList.count()).toBe(1);
  });

  it('receives the user input', function(){
    browser.get("http://localhost:8000");
    var userList = element.all(by.repeater('user in searchCtrl.searchResult'))
    var searchTerm = element(by.model('searchTerm'));
    var submit = $('#submit');
    searchTerm.sendKeys('mojombo');
    submit.click();
    expect(userList.count()).toBe(3);
  });

  // it('receives the user input', function(){
  //   browser.get("http://localhost:8000");
  //   var title = $('h1');
  //   expect(title.getText()).toBe('GitHub Profile Search');
  // });
});