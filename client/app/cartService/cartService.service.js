'use strict';

angular.module('project3App')
  .service('cartService', function ($http, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var that = this;

  that.cart = [];

  function findVendorbyId(vendors, id) {
    return _.find(vendors, function(vendor) {
      return vendor._id === id;
    });
  };

    that.getCart = function() {
    var userId = Auth.getCurrentUser()._id;
    return $http.get('/api/users/' + userId + '/cart/');
  };

    that.addVendor = function(vendor) {
    var found = findVendorById(that.cart, vendor._id);
    if (found) {
      found.qty += vendor.qty;
    }
    else {
      that.cart.push(angular.copy(vendor));
    }
  };

  that.removeVendor = function(vendor) {
    var index = that.cart.indexOf(vendor);
    that.cart.splice(index, 1);
  };

  that.getCost = function(vendor) {
    return vendor.qty * vendor.price;
  };

  that.getTotal = function() {
    return _.reduce(that.cart, function(sum, vendor) {
      return sum + that.getCost(vendor);
    }, 0);
  };

  that.clearCart = function() {
    that.cart.length = 0;
  };

  });
