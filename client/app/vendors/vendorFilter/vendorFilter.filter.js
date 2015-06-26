'use strict';

angular.module('project3App')
  .filter('vendorFilter', function () {
    return function (input) {
      return 'vendorFilter filter: ' + input;
    };
  });
