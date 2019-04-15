var _ = require('underscore'); // by convention we call this module _

// undercore is a Core module --> It doesn't require ./ in front of the module name in the require function
// The way the require function looks for modules is:
// 1 -  Core module
// 2 - File or Folder
// 3 - node_modules folder


var res = _.contains([1,2,3],2);
console.log(res);