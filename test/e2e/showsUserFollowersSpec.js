describe("gitHubSearch", function(){
  it ("shows the number of followers for each user",function(){
    browser.get("http://localhost:8000");
    var userFollowers = element.all(by.css('.user-followers'));
    expect(userFollowers.count()).toBe(3);
    expect(userFollowers.first().getText()).toEqual('10');
  });

});
