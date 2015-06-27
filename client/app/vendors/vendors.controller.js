'use strict';

var that = this;
angular.module('project3App')
  .controller('VendorsCtrl', function ($state, vendorService) {

    this.searchText = '';

    vendorService.getVendors().then(function(json) {
      that.inventory = json.data;
    });

  });
