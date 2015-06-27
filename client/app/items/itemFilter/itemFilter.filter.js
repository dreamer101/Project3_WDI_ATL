'use strict';

angular.module('project3App')
  .filter('itemFilter', function () {
    return function (input) {
      return 'itemFilter filter: ' + input;
    };
  });

'use strict';

angular.module('project3App')
.filter('itemFilter', function () {
  function isMatch(str, pattern) {
    return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
  }

  return function(inventory, searchText) {
    var items = {
        searchText: searchText,
        out: []
    };
    angular.forEach(inventory, function (item) {
      if (isMatch(item.category   , this.searchText) ||
          isMatch(item.name       , this.searchText) ||
          isMatch(item.type       , this.searchText) ||
          isMatch(item.description, this.searchText) ) {
        this.out.push(item);
      }
    }, items);
    return items.out;
  };
});
