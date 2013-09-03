if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      return arr.reduce(function(a, b) {return a + b;}, 0);
    },

    remove: function(arr, item) {
      var arr2 = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) continue;
        arr2.push(arr[i]);
      }
      return arr2;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      var counter = 0;
      arr.forEach(function(el) {
        if (el === item) {
          counter++;
        }
      });
      return counter;
    },

    duplicates: function(arr) {
      arr = arr.sort();
      var dupArr = [];

      var len = arr.length;
      for (var i = 0; (i + 1) < len; i++) {
        if (arr[i] === arr[i + 1]) {
          dupArr.push(arr[i]);
        }
      }
      return dupArr;
    },

    square: function(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
      }
      return arr;
    },

    findAllOccurrences: function(arr, target) {
      var occ = [];
      var findMatch = function(start) {return arr.indexOf(target, start);};
      var matchPos = findMatch(0);

      while (matchPos !== -1) {
        occ.push(matchPos);
        matchPos = findMatch(matchPos + 1);
      }
      return occ;
    }
  };
});
