'use strict';

/**
 * @ngdoc directive
 * @name jaredv2App.directive:systemCircles
 * @description
 * # systemCircles
 */
angular.module('jaredv2App')
  .directive('systemCircles', function () {
    return {
      template: "<canvas id='myCanvas' width='8'height='8'></canvas>",
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
         var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 3;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#003300';
      context.stroke();
      }
    };
  });
