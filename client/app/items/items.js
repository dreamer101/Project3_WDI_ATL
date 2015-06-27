'use strict';

angular.module('project3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('items', {
        url: '/items',
        templateUrl: 'app/items/items.html',
        controller: 'ItemsCtrl'
      });
  });