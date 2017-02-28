// JScript with JSON!

// this script is JScript
// https://en.wikipedia.org/wiki/JScript
// intended to be run by Windows Script Host (CScript.exe)
// https://en.wikipedia.org/wiki/Windows_Script_Host

// JScript is implemented as an Active Scripting engine (like VBScript!) and
// can manipulate Automation objects like "Scripting.FileSystemObject",
// "Word.Application", etc.

// JScript is just another dialect of ECMAScript (aka JavaScript) but the
// version that runs under WSH doesn't support modern features such as JSON.
// However, we can use Scripting.FileSystemObject to load Crockford's JSON
// library https://github.com/douglascrockford/JSON-js

// define global fso
var fso = new ActiveXObject("Scripting.FileSystemObject");
// and JSON
includeJS("..\\lib\\json2");

// read and evaluate JS file
function includeJS(filename) {
  var fileStream = fso.openTextFile(filename + ".js");
  var fileData = fileStream.readAll();
  fileStream.Close();
  eval(fileData);
}

// iife (immediately invoked functional expression)
(function () {

  var config = getConfig();

  WScript.Echo(JSON.stringify(config));


  function getConfig() {
    var filename = ".\\config.json";
    var fileStream = fso.openTextFile(filename);
    var fileData = fileStream.readAll();
    fileStream.Close();
    return JSON.parse(fileData);
  }

}());
