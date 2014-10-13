if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        
        //Either one of these solutions work.  First is more backwards
        //compatible without polyfills.  forEach added in ES5 and IE9
        //Could also cache the length outside of the loop for
        //performance reasons, etc.
        // var total = 0;
        // for (var i = 0; i < arr.length; i++) {
        //     total += arr[i];
        // }
        // return total;

        var total = 0;
        arr.forEach(function(item) {
            total += item;
        });
        return total;

    },

    remove : function(arr, item) {

        //Both answers work
        var newArr = [];
        arr.forEach(function(x) {
            if (x !== item) {
                newArr.push(x);
            }
        });
        return newArr;

        // var len = arr.length;
        // for (var i = 0; i < len; i++) {
        //     if (arr[i] === item) continue;
        //     newArr.push(arr[i]);
        // }
        // return newArr;
    },

    removeWithoutCopy : function(arr, item) {
        //loop through the array modifying in place.
        //increment counter on push
        //do not increment counter on remove because next item will
        //"slide up" to the current index
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--; //undo the increment
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        //lots of ways to do this...
        // arr.splice(0,0,item);
        // return [item].concat(arr);

        // //verbose but works too;
        // var newArr = [item];
        // arr.forEach(function(v) {
        //     newArr.push(v);
        // });

        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var result = arr.reduce(function(pv, cv, i, a) {
            if (item === cv) {pv++}
            return pv;
        });
        return result;
    },

    duplicates : function(arr) {
        var result = arr.reduce(function(pv, cv, i, a) {
            var isDupe = a.indexOf(cv) < i; // if an item has already
            // occurred then its indexOf will be smaller than the
            // current index being tested
            var alreadyInDupeList = pv.indexOf(cv) !== -1;
            if (isDupe && !alreadyInDupeList) {pv.push(cv);}
            return pv;
        }, []); // set accumulator initial value to empty array
        return result;
    },

    square : function(arr) {
        return arr.map(function(v) {
            return Math.pow(v,2);
        });
    },

    findAllOccurrences : function(arr, target) {
        var result = arr.reduce(function(pv, cv, i, a) {
            if (cv === target) {
                pv.push(i);
            }
            return pv;
        }, []);
        return result;
    }
  };
});
