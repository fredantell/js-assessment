if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        //either one works
        return fn.bind(obj)();
        //return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(s) {
            return str.concat(', ', s);
        };
    },

    makeClosures : function(arr, fn) {
        //I would probably answer this question one of the first two ways...
        //but I included the last answer as a more direct ability to test
        //how to make a closure
        /*
        var result = [];
        arr.map(function(v) {
            newArr.push(function() {return fn(v);});
        });
        return result;
        //*/

        /*
        return arr.reduce(function(pv, cv, i, a) {
            pv.push(function() {
                return fn(cv);
            });
            return pv;
        }, []);
        //*/

        //Create an IIFE that passes in arr[i] so that value is frozen
        //inside the construct.  The inner function closes over its
        //outer execution context which now includes its own copy of arr[i]
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            var func = (function(num) {
                return function() {
                    return fn(num);
                };
            })(arr[i]);
            result.push(func);
        }
        return result;
        
    },

    partial : function(fn, str1, str2) {
        //return a function that accepts another argument
        return function(str3) {
            return fn(str1, str2, str3);
        };
        
    },

    useArguments : function() {
        var args = Array.prototype.slice.apply(arguments);
        return args.reduce(function(pv, cv) {
            return pv += cv;
        }, 0);
    },

    callIt : function(fn) {
        var func = fn;
        var args = Array.prototype.slice.call(arguments, 1);

        return func.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var func = fn;
        var args = Array.prototype.slice.call(arguments, 1);


        return function() {
            var moreArgs = Array.prototype.slice.apply(arguments);
            return func.apply(null, args.concat(moreArgs));
        };
        
    },

    curryIt : function(fn) {
       //I feel like this problem is a bit weird.  I'd expect curry
        //to be a method on a variadic function.  You'd call curry
        //with an argument and it would return another variadic function.
        //This felt like a cheap way to define a 4 arity function instead.
        //I basically use recursion to continue calling the function until
        //it has accumulated all the arguments it requires. At that point
        //it stops recursing, calls the function with all its
        //arguments and returns the results.  The unit tests always
        //only passed one argument at a time.  This version would work
        //regardless of how many of the arguments you passed at once.
        //Even if you passed more than the 4 args the test function is expecting
        //they would just get ignored and go unused when the function
        //is eventually called.
        var that = this;
        var expArgs = 4;
        var argsSoFar = Array.prototype.slice.apply(arguments);
        
        if (argsSoFar.length < expArgs) {
            return function(x) {
                var moreArgs = Array.prototype.slice.apply(arguments);
                return that.curryIt.apply(that, argsSoFar.concat(moreArgs));
            }
        } else {
            var func = argsSoFar.shift();
            return func.apply(null, argsSoFar);
        }
    }
  };
});
