if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
        //This is the original code
      // if (flag) {
      //   function getValue() { return 'a'; }
      // } else {
      //   function getValue() { return 'b'; }
      // }
      //The test asks for a reference equality check to pass
        //so there can only be one fn declared
        //refactored to move logic internal to function
      var getValue = function() {
          return flag ? 'a' : 'b';
      };
      return getValue();
    },

    parseInt : function(num) {
        //always pass the radix, though I think in es6 or strict mode
        //JS now assumes a base 10 radix.
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
        return val1 === val2;
    }
  };
});
