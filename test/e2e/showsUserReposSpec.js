describe("gitHubSearch", function(){
  it ("shows the number of repos for each user",function(){
    browser.get("http://localhost:8000");
    var userRepos = element.all(by.css('.user-repos'));
    expect(userRepos.count()).toBe(3);
    expect(userRepos.first().getText()).toEqual('10');
  });
});
