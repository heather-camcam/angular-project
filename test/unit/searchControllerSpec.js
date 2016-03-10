// describe('searchController', function() {
//   var ctrl, $httpBackend;
//
//   beforeEach(function(){
//     module("GithubUserSearch");
//     inject(function($controller, _$httpbackend_){
//       ctrl = $controller('searchController');
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('githubData/users.json').respond([{username: 'Hannah'}, {username: 'Eirik'}, {username: 'Michael'}]);
//     });
//   });
//
//   it('should create model with 3 users', function() {
//     expect(ctrl.doSearch()).toBeUndefined();
//     $httpBackend.flush();
//     expect(ctrl.doSearch()).toEqual([{username: 'Hannah'}, {username: 'Eirik'}, {username: 'Michael'}]);
//   });
//
//   var userList = [
//     {
//       "login": "mojombo",
//       "id": 1,
//       "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
//     },
//     {
//       "login": "defunkt",
//       "id": 2,
//       "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
//     },
//     {
//       "login": "pjhyett",
//       "id": 3,
//       "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
//     }
//   ]
//
//   it("returns the search result", function() {
//     expect(ctrl.doSearch('test')).toEqual(userList);
//   });
//
// });
//
//
//
// //
// // it("has an undefined search result", function(){
// //   expect(ctrl.searchResult).toBeUndefined();
// //   expect(ctrl.searchTerm).toBeUndefined();
// // });
//
// // it("it finds filters the user", function(){
// //   ctrl.searchResult("pjhyett");
// //   expect(ctrl.result.length).toBe(1);
// // });
// //
// // it("finds the correct user", function(){
// //   ctrl.searchResult("pjhyett");
// //   expect(ctrl.result[0].login).toEqual("pjhyett")
// // });
//
// // it("recieves the users input in the search bar", function(){
// //   ctrl.doSearch('test')
// //   expect(ctrl.searchTerm).toBe('test');
// // });
