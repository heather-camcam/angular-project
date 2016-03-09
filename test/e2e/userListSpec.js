describe ("User list", function(){

  it ("displays a list of users", function(){
    browser.get("http://local:8000");
    var users = element.all(by.css('.userName'));
    expect(users.length).toBe(3);
  });
});
