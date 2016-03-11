describe("gitHubSearch", function(){
  it ("displays an avatar for each user searched for", function(){
    browser.get("http://localhost:8000");
    var searchTerm = element(by.model('searchCtrl.searchTerm'));
    var submit = $('#submit');
    searchTerm.sendKeys('mojombo');
    submit.click();
    var userAvatarUrl = element.all(by.css('.user-avatar')).first().getAttribute('src');
    expect(userAvatarUrl).toEqual("https://avatars.githubusercontent.com/u/1?v=3");
  });
});
