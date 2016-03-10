describe('factory: search', function() {
  var ctrl;
  var $log;


  beforeEach(function(){
    module("GithubUserSearch");
    inject(function($controller){
      ctrl = $controller('searchController');
    });
  });
});
