githubUserSearch.controller("searchController", ['$resource', function($resource){
  var self = this;

  self.searchTerm = "";

  var searchResource = $resource('https://api.github.com/search/users');



  self.searchResult = [
    {
      "login": "mojombo",
      "id": 1,
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
      "public_repos": 10,
      "followers": 10
    },
    {
      "login": "defunkt",
      "id": 2,
      "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
      "public_repos": 20,
      "followers": 20
    },
    {
      "login": "pjhyett",
      "id": 3,
      "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
      "public_repos": 30,
      "followers": 30
    }
  ]

  self.makeSearch = function(){
    self.searchResult = searchResource.get(
      {q: self.searchTerm }
    );

  }

  self.doSearch = function(searchTerm) {
    return self.searchResult;
  };

  // self.doSearch2 = searchResource.get(
  //   { q: self.searchTerm }
  // );



}]);
