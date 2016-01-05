'use strict';

/**
 * @ngdoc overview
 * @name nodeMongoResearchApp
 * @description
 * # nodeMongoResearchApp
 *
 * Main module of the application.
 */
angular
  .module('nodeMongoResearchApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/addRecord', {
        templateUrl: 'views/add.html',
        controller: 'AddRecordCtrl',
        controllerAs: 'AddRecordCtrl'
      })
      .when('/display', {
        templateUrl: 'views/display.html',
        controller: 'DisplayCtrl',
        controllerAs: 'DisplayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
