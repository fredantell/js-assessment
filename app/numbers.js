if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        //full disclosure I have never touched nor had to touch
        //bitwise operators and needed to look these up

        //The following works by taking the bitwise AND operator
        //and comparing ..00001 (e.g. the number 1) to the argument "num" which
        //has been right shifted until the bit in question is in
        //first position.  If it's also 1 then bitwise AND returns 1
        //otherwise it returns 0.  
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binString = num.toString(2);

        //the tests require specifically 8 bits to be returned
        //and JS will truncate if not all 8 are used, so this
        //loop will prepend 0's until we reach 8 bits
        while (binString.length < 8) {
            binString = '0' + binString;
        } 

        return binString;
    },

    multiply: function(a, b) {
        return parseFloat((a * b).toPrecision(1));
    }
  };
});

