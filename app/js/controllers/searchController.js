githubUserSearch.controller("searchController", ['$resource', function($resource){
  this.searchTerm = ""
  var self = this;

  var searchResource = $http.get('https://api.github.com/users?')

  var searchResult = [
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

  self.doSearch = searchResource.get(
  { q: self.searchTerm }
);



}]);
