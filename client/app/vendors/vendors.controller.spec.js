'use strict';

describe('Controller: VendorsCtrl', function () {

  // load the controller's module
  beforeEach(module('project3App'));

  var VendorsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendorsCtrl = $controller('VendorsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
