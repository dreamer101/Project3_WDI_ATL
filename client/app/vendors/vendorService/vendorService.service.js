'use strict';

angular.module('project3App')
  .service('vendorService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var that = this;

    that.findVendorById = function(id) {
     return $http.get('api/vendors/' + id);
    };

    that.getVendors = function() {
      return $http.get('/api/vendors');
    };

  });
