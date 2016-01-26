'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])

  .config(function ($translateProvider) {

    $translateProvider.useSanitizeValueStrategy('sanitize');

    $translateProvider.translations('en', {
      USERS: 'Users',
      SAVE: 'Save',
    });
    $translateProvider.translations('es', {
      USERS: 'Usuarios',
      SAVE: 'Guardar',
    });
    $translateProvider.preferredLanguage('es');

  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/users', {
        name: 'users',
        templateUrl: 'views/users/index.html',
        controller: 'UsersCtrl',
      })
      .when('/users-edit/:id', {
        name: 'users-edit',
        templateUrl: 'views/users/edit.html',
        controller: 'UsersCtrl',
      })
      .otherwise({
        redirectTo: '/users'
      });
  });
