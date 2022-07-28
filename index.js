const port = process.env.PORT || 3000

import { createServer } from 'http';

//create a server object:
createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 8080
/*
console.log("firts run");

const fs = require('fs')
fs.writeFileSync('notes.txt', 'I live in Philadelphia and I gona...')

const validator = require('validator')
console.log(validator.isURL('https/mead.io')) // Print: true
*/