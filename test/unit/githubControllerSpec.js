describe('searchController', function() {
  beforeEach(module('GithubUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('searchController');
  }));

  describe('when searching for a user', function(){

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
      var searchTerm = 'name';
      ctrl.doSearch(searchTerm);
      httpBackend.flush();
      expect(ctrl.searchResult.name).toEqual('Dave');
    });


  })

  // describe('githubController', function() {
  // var ctrl, $httpBackend;
  //
  //   beforeEach(module('githubUserSearchApp'));
  //
  //   beforeEach(inject(function(_$httpbackend_, $controller) {
  //     $httpBackend = _$httpBackend_;
  //     $httpBackend.expectGET('githubData/users.json').respond([{username: 'Hannah'}, {username: 'Eirik'}, {username: 'Michael'}]);
  //
  //     ctrl = $controller('githubController');
  //   }));
  //
  //   it('should create model with 3 users', function() {
  //     expect(ctrl.users).toBeUndefined();
  //     $httpBackend.flush();
  //     expect(ctrl.users).toEqual([{username: 'Hannah'}, {username: 'Eirik'}, {username: 'Michael'}]);
  //   });
  //
  // });

});
