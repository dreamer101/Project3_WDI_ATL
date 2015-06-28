'use strict';

angular.module('project3App')
.controller('VendorsCtrl', function($state, vendorService, cartService) {

  var that = this;

  that.searchText = '';
  that.total = 0;

  that.getInventory = function() {
    vendorService.getVendors().then(function(json) {
      that.inventory = json.data;
    });
  };
  cartService.getCart().then(function(json) {
    that.cart = json.data;
    that.total = cartService.getTotal(that.cart);
  });


that.addVendor = function(vendor) {
    cartService.addVendor(vendor).then(function(json) {
      that.cart = json.data;
      that.total = cartService.getTotal(that.cart);
    }, function(err) {
      console.log('ERROR: addVendor post: ' + JSON.stringify(err));
    });
  };

  that.removeVendor = function(vendor) {
    cartService.removeVendor(vendor).then(function(json) {
      that.cart = json.data;
      that.total = cartService.getTotal(that.cart);
    }, function(err) {
      console.log('ERROR: removeVendor delete: ' + JSON.stringify(err));
    });
  };

  that.getCost = function(vendor) {
    return cartService.getCost(vendor);
  };

  that.clearCart = function() {
    return cartService.clearCart().then(function(json) {
      that.cart = json.data;
      that.total = cartService.getTotal(that.cart);
    }, function(err) {
      console.log('clearCart delete ERROR: ' + JSON.stringify(err));
    });
  };

  that.goVendor = function (vendor) {
    $state.go( 'vendorDetail', { vendorId : vendor._id } );
  };

});












