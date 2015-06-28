// 'use strict';

// angular.module('project3App')
//   .service('vendorService', function ($http) {
//     // AngularJS will instantiate a singleton by calling "new" on this function
//     var that = this;

//     that.findVendorById = function(id) {
//      return $http.get('api/vendors/' + id);
//     };

//     that.getVendors = function() {
//       return $http.get('/api/vendors');
//     };

//   });






'use strict';

angular.module('project3App')
.service('vendorService', function() {

  var that = this;

  that.findVendorById = function(id) {
    var vendorId = parseInt(id);
    return _.find(that.inventory, function(vendor) {
      return vendor._id === parseInt(vendorId);
    });
  };

  that.inventory = [
  {
      username: 'Bruce',
      name: 'Bruce',
      category: 'Photography',
      location: { street: '123 Lakewood', city: 'Atlanta' , state: 'GA' },
      type: 'Parrot',
      description: 'Nice',
      email: 'Bruce@aol.com',
      stars: 0,
      imageFile: ''
    },
    {
      username: 'Larry',
      name: 'Larry',
      category: 'Photography',
      location: { street: '123 Lakewood', city: 'Atlanta' , state: 'GA' },
      type: 'Parrot',
      description: 'Nice',
      email: 'Larry@aol.com',
      stars: 0,
      imageFile: ''
      }
  ];
});
