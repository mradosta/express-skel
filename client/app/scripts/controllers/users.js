'use strict';

angular.module('clientApp')
  .controller('UsersCtrl', function ($scope, $rootScope, $http, $route, $location, $routeParams, User) {

    if ($route.current.name === 'users') {

      User.get().then(function(result) {
        $scope.data = result.data.users;
      }).catch(function(error) {
        console.log(error);
      });

    } else if ($route.current.name === 'users-edit') {

      User.get($routeParams.id).then(function(result) {
        $scope.data = result.data.user;
      }).catch(function(error) {
        console.log(error);
      });

    }


    $scope.delete = function(id) {
      User.delete(id).then(function(result) {
        console.log(result);
        User.get().then(function(result) {
          $scope.data = result.data.users;
        }).catch(function(error) {
          console.log(error);
        });
      }).catch(function(error) {
        console.log(error);
      });
    };


    $scope.submitForm = function() {

      if ($scope.dataForm.$valid) {
        if ($scope.data.id) {
          User.save($scope.data).then(function(result) {
            console.log(result);
            $rootScope.go('/users');
          }).catch(function(error) {
            console.log(error);
          });
        }
      }

    };

  });
