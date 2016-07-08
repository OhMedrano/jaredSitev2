'use strict';

/**
 * @ngdoc function
 * @name jaredv2App.controller:DomainCtrl
 * @description
 * # DomainCtrl
 * Controller of the jaredv2App
 */
angular.module('jaredv2App')
  .controller('DomainCtrl', function ($scope) {
   
  	$scope.domainSuffix = ['.com','.net','.biz','.org','.me','.mobi','.us'];
  	$scope.domCheck = {
  				name:'',
  				suff:'none'

  			};

  });
