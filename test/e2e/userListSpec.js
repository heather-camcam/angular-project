describe ("User list", function(){

  it ("displays a list of users", function(){
    browser.get("http://localhost:8000");
    var users = element.all(by.css('.user-profile'));
    expect(users.count()).toBe(3);
    expect(users.first().getText()).toEqual('mojombo');
  });
});
