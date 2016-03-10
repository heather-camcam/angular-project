describe ("User list", function(){

  it ("displays a list of users", function(){
    browser.get("http://localhost:8000");
    var users = element.all(by.css('.user-profile'));
    expect(users.count()).toBe(3);
    expect(users.first().getText()).toEqual('mojombo');
  });

  it ("displays an avatar for each user", function(){
    browser.get("http://localhost:8000");
    var userAvatarUrl = element.all(by.css('.user-avatar')).first().getAttribute('src');
    expect(userAvatarUrl).toEqual("https://avatars.githubusercontent.com/u/1?v=3");
  });
});
