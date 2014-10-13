if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var ticks = Math.abs(end - start);
        var index = start;
        var timeout;
        function counter() {
            console.log(index);
            if (ticks > 0) {
                timeout = setTimeout(counter, 100);
                index++;
                ticks--;
            }
            return;
        }
        counter();

        return {
            cancel: function() {
                timeout && clearTimeout(timeout);
            }
        };
    }
        
    }
});
