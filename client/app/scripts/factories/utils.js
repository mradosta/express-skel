'use strict';

angular.module('clientApp')

.factory('Utils', function(SETTINGS) {

  var s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  };

  return {
    remoteUrl: function(path) {
      return path;
    },
    alert: function(msg) {
      console.log(msg);
      //alert(msg);
    },
    guid: function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    url: function(path) {
      return SETTINGS.MOBILE_URL + path;
    }
  };

});
