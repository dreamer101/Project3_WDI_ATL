'use strict';

angular.module('project3App')
  .controller('VendorsCtrl', function ($state, vendorService, $http, uiGmapGoogleMapApi) {

    var that = this;
    that.searchText = '';

    vendorService.getVendors().then(function(json) {
      that.inventory = json.data;
    });

    // Do stuff with your $scope.
    that.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    // Note: Some of the directives require at least something to be defined originally!
    that.markers = [];

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });

  });
