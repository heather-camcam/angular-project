githubUserSearch.controller("searchController", ['$resource', function($resource){
  var self = this;

  self.searchTerm = "";

  var searchResource = $resource('https://api.github.com/search/users');





  self.searchResult = []
    // {
    //   "login": "mojombo",
    //   "id": 1,
    //   "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
    //   "public_repos": 10,
    //   "followers": 10
    // },
    // {
    //   "login": "defunkt",
    //   "id": 2,
    //   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
    //   "public_repos": 20,
    //   "followers": 20
    // },
    // {
    //   "login": "pjhyett",
    //   "id": 3,
    //   "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
    //   "public_repos": 30,
    //   "followers": 30
    // }

  self.makeSearch = function(){

    searchResource.get(
      {q: self.searchTerm}).$promise.then(function(data){
        self.searchResult =  data.items;
        console.log(data.items);
      })
    };
  //   console.log(self.searchResult)
  // }

  self.doSearch = function() {
    console.log('hello world');
  };




}]);
