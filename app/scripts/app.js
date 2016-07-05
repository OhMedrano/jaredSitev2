'use strict';

/**
 * @ngdoc overview
 * @name jaredv2App
 * @description
 * # jaredv2App
 *
 * Main module of the application.
 */
angular
  .module('jaredv2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/hosts', {
        templateUrl: 'views/hosts.html',
        controller: 'HostsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/domain', {
        templateUrl: 'views/domain.html',
        controller: 'DomainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
