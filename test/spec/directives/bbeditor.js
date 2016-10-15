'use strict';

describe('Directive: bbeditor', function () {

  // load the directive's module
  beforeEach(module('bbApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bbeditor></bbeditor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bbeditor directive');
  }));
});
