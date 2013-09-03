if (typeof define !== 'function') { var define = require('amdefine')(module); }


/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals: function() {
      var myObject = {
        name: 'Jory'
      };

      return myObject;
    },

    functions: function(flag) {
      function getValue() {
        if (flag) {
          return 'a';
        } else {
          return 'b';
        }
      }
      return getValue();
    },

    parseInt: function(num, radix) {
      return parseInt(num, radix);
    },

    identity: function(val1, val2) {
      return val1 === val2;
    }
  };
});
