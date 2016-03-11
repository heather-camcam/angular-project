githubUserSearch.controller("searchController", ['$resource', function($resource){
  var self = this;

  self.searchTerm = "";

  var searchResource = $resource('https://api.github.com/search/users');

  self.searchResult = []
  self.userResult = []
  self.followers = []
  self.repos = []

    self.makeSearch = function(){

      searchResource.get(
        {q: self.searchTerm, access_token: }).$promise.then(function(data){
          self.searchResult =  data.items;
      })

      var other = $resource('https://api.github.com/users/' + 'mojombo' + '?access_token=');

      other.get().$promise.then(function(data){
          self.followers =  data.followers;
          self.repos = data.public_repos;
      })
    };

}]);
