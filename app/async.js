if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function($) {
  return {
    async: function(value) {
      var promise = $.Deferred();
      promise.resolve(value);
      return promise;

    },

    manipulateRemoteData: function(url) {

      var promise = $.Deferred();
      $.ajax(url, {
        success: function(res) {
          var names = [];
          for (var i = 0; i < res.people.length; i++) {
            names.push(res.people[i].name);
          }
          names.sort();
          promise.resolve(names);
        }
      });
      return promise;
    }

  };
});
