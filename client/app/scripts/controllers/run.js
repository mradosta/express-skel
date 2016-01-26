'use strict';

angular.module('clientApp').run(function($rootScope, $location) {

  $rootScope.go = function(path) {
    $location.path(path);
  };

});
