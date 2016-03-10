describe('searchController', function() {
  beforeEach(module('GithubUserSearch'));
  var ctrl;


  beforeEach(inject(function($controller){
     ctrl = $controller('searchController');
   }));

   describe('calling Github API to search for a username', function(){

     var httpBackend;

     beforeEach(inject(function($httpBackend){
       httpBackend = $httpBackend
       httpBackend
         .when("GET", 'https://api.github.com/search/users?q=name')
         .respond(
           { name: 'Dave' }
         );
     }));

     it('displays search results', function(){
       ctrl.searchTerm = 'name';
       ctrl.makeSearch();
       httpBackend.flush();
       expect(ctrl.searchResult.name).toEqual('Dave');
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

  // it("it finds filters the user", function(){
  //   ctrl.searchResult("pjhyett");
  //   expect(ctrl.result.length).toBe(1);
  // });
  //
  // it("finds the correct user", function(){
  //   ctrl.searchResult("pjhyett");
  //   expect(ctrl.result[0].login).toEqual("pjhyett")
  // });

  // it("recieves the users input in the search bar", function(){
  //   ctrl.doSearch('test')
  //   expect(ctrl.searchTerm).toBe('test');
  // });

  // it("returns the search result", function() {
  //   expect(ctrl.doSearch('test')).toEqual(userList);
  // });
  //


});
