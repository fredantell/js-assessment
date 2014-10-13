if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var promise = $.Deferred();
        promise.resolve(value);
        return promise;
    },

    manipulateRemoteData : function(url) {
        var deferred = $.Deferred();
        var ajax = $.get(url).then(function(data) {
            var ppl = [];
            data.people.forEach(function(obj) {
                ppl.push(obj.name);
            });
            deferred.resolve(ppl.sort());
        });
        return deferred;
    }
  };
});
