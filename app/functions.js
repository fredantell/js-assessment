if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray: function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak: function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction: function(str) {
      return function(str2) {
        return str + ', ' + str2;
      }
    },

    makeClosures: function(arr, fn) {
      var funcs = [];
      var mkFn = function(el) {
        return function() {
          return fn(el);
        }
      };

      for (var i = 0; i < arr.length; i++) {
        funcs.push(mkFn(arr[i]));
      }
      return funcs;
    },

    partial: function(fn, str1, str2) {
      return function(string) {
        return fn(str1, str2, string);
      };
    },

    useArguments: function() {
      var total = 0;
      for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
      }
      return total;
    },

    callIt: function(fn) {
      var slice = Array.prototype.slice;
      var args = slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    curryIt: function(fn) {
      var func = fn;
      var slice = Array.prototype.slice;
      var args = slice.call(arguments, 1);
      return function() {
        return fn.apply(null, args.concat(slice.call(arguments)));
      };
    }
  };
});
