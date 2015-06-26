'use strict';

angular.module('project3App')
  .controller('NavbarCtrl', function ($location, Auth) {
    this.menu = [
      {
      'title': 'Home',
      'link': '/'
      },
      {
      'title': 'Vendors',
      'link': '/vendors'
      }
    ];

    this.isCollapsed = true;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    this.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    this.isActive = function(route) {
      return route === $location.path();
    };
  });
