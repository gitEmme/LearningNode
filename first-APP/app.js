
/*

// There are Global objects and functions available globally in Node:

console.log();
setTimeout(); // to call a function after a delay
clearTimeout();

setInterval(); // to repaetedly call a function 
clearInterval();

// in Browsers we have the window object which represent the global scope
//window.console.log();
// When you declare a javascript function in browsers that is added to the global scope: window

var sayHello = function(){

}
window.sayHello();

// There's a problem with this: usually we split javascript functions into multiple files
// It is possible that in two file we defined two functions with the same name: the second definition will override the first one
// To avoid this Node uses MODULES: every file in Node is considered a module
// Everything is private inside a module; if you need to use something outside of a module you need to explicitely declare it as public


// all the previously mentioned functions belong to the window object in browsers, but not in Node:
// in Node we don't have the window object

// In NODE we have global object insted
var message = ''; // everythin defined in the app.js file are not scoped to the global object: 
//they are not available outside of this file
console.log(global.message); // that's why we get undefined 
*/

//console.log(module);

/*

// In Node every file is a module and functions and 
// variables defined within that module are scoped to that module: they're not available outside of it

// OUTPUT
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\Martina.Donadi\\Desktop\\first-APP\\app.js',
  loaded: false,
  children: [],
  paths:
   [ 'C:\\Users\\Martina.Donadi\\Desktop\\first-APP\\node_modules',
     'C:\\Users\\Martina.Donadi\\Desktop\\node_modules',
     'C:\\Users\\Martina.Donadi\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules' ] }
*/

// LOAD A MODULE better to use a constant
//const logger = require('./logger'); // /. indicate the current folder: the both models are in the same folder
//logger = 1;
//logger.log('message to log');

// tools like jshint will give you suggestion to debug your code

// if you exported just the function 
const log = require('./logger');
log('message to log');

const path = require('path');
var pathObject = path.parse(__filename);
console.log(pathObject);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

// Template string in ES6 / ES2015 :ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);

// HOW TO WORK WITH FILES IN Node.js
const fs = require('fs');
// almost all operations are offered in sync and async mode: 
//better to use asynch since node is single threaded

// sync method avoid to use
const files = fs.readdirSync('./');
console.log(files);

// async method are better in this case
fs.readdir('./', function(err,res){
  if(err) console.log('Error: ',err);
  else console.log('Results: ',res);
});