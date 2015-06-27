

'use strict';

angular.module('project3App')
.service('itemService', function() {

  var that = this;

  that.findItemById = function(id) {
    var itemId = parseInt(id);
    return _.find(that.inventory, function(item) {
      return item._id === parseInt(itemId);
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
