if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        //this fn is getting passed a a.SayIt method which references this
        //it's being passed an obj {name: 'Rebecca', greeting: 'Yo'}
        //must use the info in the obj to feed the fn's this
        return fn.call(obj, obj);

        //return fn.bind(obj)(obj);  // this would also work
        
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        //if you want to avoid dredging up the prototype chain,
        //you can use hasOwnProperty either on the object itself or
        //if you're super defensive on the Object.prototype itself
        //alternately you could just use Object.keys and then forEach
        //the resulting array.  Since this test is specifically looking
        //for me to construct an array that has all the own key/value pairs
        //I'm using reduce to build it up.

        //*
        var keys = Object.keys(obj);
        var result = keys.reduce(function(pv, curKey) {
            pv.push(curKey + ': ' + obj[curKey]);
            return pv;
        }, []);
        return result;
        //*/
        
        //showing the expected answer for reference
        /*
        var answer = [];
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) { // or just obj.hasOwnProperty(key)
                answer.push(key + ": " + obj[key]);
            }
        }
        return answer;
        //*/  
            
        
    }
  };
});
