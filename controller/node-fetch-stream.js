var fetch = require('node-fetch');
var fs = require('fs');
var http = require('http');
var {httpRequest} = require('../lib/httprequest');

async function httpstream(req, res, next) {

  var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
  try {
    await httpRequest(url);
  } catch (e) {
      console.log(e);
  }

  console.log('next2');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

module.exports = httpstream;
