if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext: function(fn, obj) {
      return fn.apply(obj);
    },

    alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate: function(obj) {
      var arr = [];
      for (var name in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, name)) {
          arr.push(name + ': ' + obj[name]);
        }
      }
      return arr;
    }
  };
});
