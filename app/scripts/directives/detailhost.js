'use strict';

/**
 * @ngdoc directive
 * @name jaredv2App.directive:detailHost
 * @description
 * # detailHost
 */
angular.module('jaredv2App')
  .directive('detailHost', function () {
    return {
      templateUrl:'templates/detailHost.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
