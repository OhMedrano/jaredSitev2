'use strict';

describe('Directive: systemCircles', function () {

  // load the directive's module
  beforeEach(module('jaredv2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<system-circles></system-circles>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the systemCircles directive');
  }));
});
