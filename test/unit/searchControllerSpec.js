describe('searchController', function() {
  var ctrl;
  var $log;


  beforeEach(function(){
    module("GithubUserSearch");
    inject(function($controller){
      ctrl = $controller('searchController');
    });
  });

  var userList = [
    {
      "login": "mojombo",
      "id": 1,
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
    },
    {
      "login": "defunkt",
      "id": 2,
      "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
    },
    {
      "login": "pjhyett",
      "id": 3,
      "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
    }
  ]

  //
  // it("has an undefined search result", function(){
  //   expect(ctrl.searchResult).toBeUndefined();
  //   expect(ctrl.searchTerm).toBeUndefined();
  // });

  it("it finds filters the user", function(){
    ctrl.searchResult("pjhyett");
    expect(ctrl.result.length).toBe(1);
  });

  it("finds the correct user", function(){
    ctrl.searchResult("pjhyett");
    expect(ctrl.result[0].login).toEqual("pjhyett")
  });


});
