'use strict';

/**
 * @ngdoc directive
 * @name jaredv2App.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('jaredv2App')
  .directive('navMenu', function () {
    return {
      templateUrl:'templates/navMenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
