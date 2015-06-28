'use strict';

angular.module('project3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vendors', {
        url: '/vendors',
        templateUrl: 'app/vendors/vendors.html',
        controller: 'VendorsCtrl as ctrl'
      });
  });
