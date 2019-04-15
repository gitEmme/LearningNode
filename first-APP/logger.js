//A module for logging messages
// Let's use a remote logging services to log messages in the cloud

var url = 'http://mylogger.io/log';

// To be able to call this function from the app.js module we need to make it public: module.exports.log = log;
function log(message){
    //Send an HTTP request -> for now let's keep it simple and just log the message in the console
    console.log(message);
}
// IN YOUR MODULE YOU CAN EXPORT A SINGLE FUNCTION OR AN OBJECT
// Export parts of the module you may need to use from outside the module
module.exports.log = log;

// you can also export just the function:
module.exports = log;