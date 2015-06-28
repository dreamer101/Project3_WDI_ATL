
    // vendorService.getVendors().then(function(json) {
      // that.inventory = json.data;
    // });

  // });




'use strict';

var that = this;
angular.module('project3App')
  .controller('VendorsCtrl', function ($state, vendorService) {

  this.searchText = '';
  this.inventory = vendorService.inventory;
  this.cart = cartService.cart;

  this.addVendor = function(vendor) {
    vendorService.addVendor(Vendor);
  };

  this.removeVendor = function(vendor) {
    vendorService.removeVendor(Vendor);
  };

  this.getCost = function(vendor) {
    return vendorService.getCost(Vendor);
  };

  this.getTotal = function() {
    return vendorService.getTotal();
  };

  this.clearCart = function() {
    return vendorService.clearCart();
  };

  this.goVendor = function (vendor) {
    console.log('goVendor: ' + vendor_id);
    $state.go( 'itemDetail', { vendorId : vendor._id } );
  };
});
