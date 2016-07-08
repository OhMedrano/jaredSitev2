'use strict';

/**
 * @ngdoc directive
 * @name jaredv2App.directive:angularParallaxBack
 * @description
 * # angularParallaxBack
 */
angular.module('jaredv2App')
  .directive('parallaxBackground', ['$window', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
      parallaxVertical: '@',
    },
    link: function($scope, elem, attrs) {
      var setPosition = function () {
        var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 0.8) - ($scope.parallaxVertical || 0);
        // horizontal positioning
        elem.css('background-position', "20% " + calcValY + "px");
      };

      // set our initial position - fixes webkit background render bug
      angular.element($window).bind('load', function(e) {
        setPosition();
        $scope.$apply();
      });

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}]);


//code is credited to Bretdonohoo for his angular-parallax. 
// Uh.. not sure how to say its like.. licensed to him. so.. can we leave it at that
// and say we're cool?

//images though are mine. ...If they aren't stock images.