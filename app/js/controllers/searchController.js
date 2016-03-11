githubUserSearch.controller("searchController", ['$resource', function($resource){
  var self = this;

  self.searchTerm = "";

  var searchResource = $resource('https://api.github.com/search/users');





  self.searchResult = [];


  self.makeSearch = function(){

    searchResource.get(
      {q: self.searchTerm}).$promise.then(function(data){
        self.searchResult =  data.items;
        console.log(data.items);
      });
    };


  self.doSearch = function() {
    console.log('hello world');
  };




}]);
