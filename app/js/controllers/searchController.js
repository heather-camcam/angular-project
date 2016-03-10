githubUserSearch.controller("searchController", function(){
  var self = this;

  var searchResult = [
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

  self.doSearch = function(searchTerm) {
    return searchResult;
  };



});
