'use strict';

angular.module('project3App')
  .service('vendorService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var that = this;

    that.findVendorById = function(id) {
      var vendorId = parseInt(id);
      return _.find(that.inventory, function(item) {
        return item._id;
      });
    };

  });
