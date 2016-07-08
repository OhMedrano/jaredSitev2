'use strict';

/**
 * @ngdoc function
 * @name jaredv2App.controller:HostsCtrl
 * @description
 * # HostsCtrl
 * Controller of the jaredv2App
 */
angular.module('jaredv2App')
  .controller('HostsCtrl', function ($scope,servDeals,$routeParams) {
   $scope.servers = servDeals.query({serverId: $routeParams.serverId});
  });
