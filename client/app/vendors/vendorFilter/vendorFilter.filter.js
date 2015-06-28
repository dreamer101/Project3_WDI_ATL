
'use strict';

angular.module('project3App')
.filter('vendorFilter', function () {
  function isMatch(str, pattern) {
    return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
  }

  return function(inventory, searchText) {
    var vendors = {
        searchText: searchText,
        out: []
    };
    angular.forEach(inventory, function (vendor) {
      if (isMatch(vendor.category   , this.searchText) ||
          isMatch(vendor.name       , this.searchText) ||
          isMatch(vendor.type       , this.searchText) ||
          isMatch(vendor.description, this.searchText) ) {
        this.out.push(vendor);
      }
    }, vendors);
    return vendors.out;
  };
});
