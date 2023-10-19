const fs = require('fs');
const http = require('http');
const os = require('os');

const { data, temp1 } = require('./temp1');
const { day1 } = require('./day1');

console.log('Hello Node.js');

// Logging global objects
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

// Blocking vs Non-blocking IO
const content = fs.readFileSync('./day1.js', 'utf8');
console.log(content);

fs.readFile('./day1.js', 'utf8', (err, content) => {
  console.log(content);
});

// Logging the content of the data
console.log(data);

// Creating a server
http
  .createServer((req, res) => {
    switch (req.url) {
      case '/api/temp1':
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.write(JSON.stringify(temp1));
        break;
      case '/api/day1':
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.write(JSON.stringify(day1));
        break;
    }
    res.end();
  })
  .listen(8000);

console.log('Listening on port 3000');
