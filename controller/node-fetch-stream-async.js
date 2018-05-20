var fetch = require('node-fetch');
var fs = require('fs');
var http = require('http');

// これだめなやーつー
async function httpRequest(url) {
await fetch(url)
  .then(res => {
    const dest = fs.createWriteStream('./octocat.png', {
      autoClose: true,
    });
    res.body.pipe(dest);
    res.body.on('end', function() {
      console.log('endd');
      });
    }).catch(err => {
      console.log(err);
    });
}

async function httpstream(req, res, next) {

  var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
  await httpRequest(url).then(function(body) {
    console.log(body);
}).catch(err => {
      console.log(err);
    });

  console.log('next2');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

module.exports = httpstream;
