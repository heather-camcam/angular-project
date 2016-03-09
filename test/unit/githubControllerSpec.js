'use strict';

/* jasmine specs for controllers go here */

describe('GitHub API controller', function() {

  describe('githubController', function() {
  var ctrl, $httpBackend;

    beforeEach(module('githubUserSearchApp'));

    beforeEach(inject(function(_$httpbackend_, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('githubData/users.json').respond([{username: 'Hannah'}, {username: 'Eirik'}, {username: 'Michael'}]);

      ctrl = $controller('githubController');
    }));

    it('should create model with 3 users', function() {
      expect(ctrl.users).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.users).toEqual([{username: 'Hannah'}, {username: 'Eirik'}, {username: 'Michael'}]);
    });

  });

});
