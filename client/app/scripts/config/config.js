'use strict';

var settings = {
  'LOCALE'            : 'EN',
  'VERSION'           : '1.0',
  'STG_MOBILE_URL'    : 'http://localhost:3000/',
  'PRD_MOBILE_URL'    : 'http://localhost:3000/',
};


var versionSuffix = parseInt(settings.VERSION.split('.').pop());
if (versionSuffix % 2 === 0) {
  // PRD
  settings.MOBILE_URL = settings.PRD_MOBILE_URL;
} else {
  // STG
  settings.MOBILE_URL = settings.STG_MOBILE_URL;
}

angular.module('clientApp')
.constant('SETTINGS', (function() {
  return settings;
})());
