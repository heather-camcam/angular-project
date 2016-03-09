githubUserSearch.controller("searchController", function(){
  var self = this;
  self.result = [];
  self.searchTerm = ""

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


  self.searchResult = function(searchTerm) {
    for (var i = 0; i < userList.length; i++) {
      if (userList[i].login === searchTerm) {
        self.result.push(userList[i]);
      }
    }
    return self.result;
  };

});
