'use strict';

angular.module('clientApp')

.service('User', function($http, $q, Utils) {

  return {

    get: function(id) {

      var deferred = $q.defer();

      if (id) {
        $http.get(Utils.url('users/' + id)).then(function(result) {
          deferred.resolve(result);
        }).catch(function(error) {
          //console.log(error);
          deferred.reject(error);
        });
      } else {
        $http.get(Utils.url('users/')).then(function(result) {
          deferred.resolve(result);
        }).catch(function(error) {
          //console.log(error);
          deferred.reject(error);
        });
      }

      return deferred.promise;
    },

    save: function(data) {

      var deferred = $q.defer();

      if (data.id) {
        $http.put(Utils.url('users/' + data.id), data).then(function(result) {
          //console.log(result);
          deferred.resolve(result);
          //$rootScope.go('/users');
        }).catch(function(error) {
          //console.log(error);
          deferred.reject(error);
        });
      } else {
        $http.post(Utils.url('users'), data).then(function(result) {
          console.log(result);
          //$rootScope.go('/users');
          deferred.resolve(result);
        }).catch(function(error) {
          console.log(error);
          deferred.resolve(error);
        });
      }

      return deferred.promise;
    },

    delete: function(id) {

      var deferred = $q.defer();

      $http.delete(Utils.url('users/' + id)).then(function(result) {
        deferred.resolve(result);
      }).catch(function(error) {
        //console.log(error);
        deferred.reject(error);
      });

      return deferred.promise;
    },


  };

});
