'use strict';

describe('Filter: vendorFilter', function () {

  // load the filter's module
  beforeEach(module('project3App'));

  // initialize a new instance of the filter before each test
  var vendorFilter;
  beforeEach(inject(function ($filter) {
    vendorFilter = $filter('vendorFilter');
  }));

  it('should return the input prefixed with "vendorFilter filter:"', function () {
    var text = 'angularjs';
    expect(vendorFilter(text)).toBe('vendorFilter filter: ' + text);
  });

});
