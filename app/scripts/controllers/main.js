'use strict';

/**
 * @ngdoc function
 * @name jaredv2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jaredv2App
 */
angular.module('jaredv2App')
  .controller('MainCtrl', function ($scope, servDeals, $routeParams) {
    $scope.server = servDeals.query({serverId: $routeParams.serverId});
  });
