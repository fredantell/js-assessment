if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var files = [];
        var that = this;
        var currentDir = data.dir;
        var targetDir = dirName || 'all';
        var countFiles = currentDir === targetDir || targetDir === 'all';
     
        data.files.forEach(function(v) {
            //there are 4 conditions.  It's a file, but we're not
            //going to count it so skip.  It's a file, we will count
            //it, so push it to the list.  It's an object and we are
            //not counting Files yet which tells us we have not found
            //the subdirectory we are looking for yet.  It's an object
            //and we are counting files, which means that we are already
            //within our target subdir, so from now on we should count all
            //files within this branch.

            //*
            if (typeof v === 'string' && !countFiles) {return;}
            if (typeof v === 'string' && countFiles) {
                files.push(v);
                return;
            }
            if (typeof v === 'object' && !countFiles) {files = files.concat(that.listFiles(v, targetDir));}
            if (typeof v === 'object' && countFiles) {files = files.concat(that.listFiles(v, 'all'))}
            //*/
            
        });
        return files;
    },

    permute: function(arr) {
        var results = [];

        //as a matter of terminology I mean locked to say "which items
        //have we frozen in place" and unlocked to mean "which are
        //still up for being arranged in different orders"
        //as we go deeper into the call stack we're moving items from
        //unlocked to locked in all the different permutations
        var perm = function(locked, unlocked) {

            if (unlocked.length > 1) {
                unlocked.forEach(function(v, i, a) {
                    //note we need to create temp copies of
                    //locked/unlocked.  Otherwise when we climb back
                    //up the stack we'll have mutated and messed up
                    //the values for the next round of recursion
                    var tempUnl = a.slice(); //return a copy of the array
                    var tempLoc = locked.slice();
                    tempLoc.push(v);
                    tempUnl.splice(i, 1);
                    perm(tempLoc, tempUnl);
                });
            } else {
                results.push(locked.concat(unlocked));
            }
        };
        perm([], arr);
        return results;
    }
  };
});
