'use strict';

/**
 * @ngdoc function
 * @name jaredv2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jaredv2App
 */
angular.module('jaredv2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
