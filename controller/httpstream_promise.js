// 没
var http = require('http');

function httpRequest(url) {
  return new Promise(function(resolve, reject) {
      var fs = require('fs');
      var path = require('path');
      console.log('start');
      var filename = path.basename(url);
      // output stream
      var outFile = fs.createWriteStream(filename);
      // http.getをpromise化したい
      var req = http.get(url, function(res) {
        res.pipe(outFile);
        if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(res.statusCode);
        }
        res.on('end', function() {
          outFile.close();
          console.log('endd');
          resolve('success');
          });
        });

      req.on('error', function(err) {
        console.log('error');
        reject('erroraa')
        });
      console.log('next');
      req.end();
  });
}

function httpstream(req, res, next) {

  var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
  httpRequest(url).then(function(body) {
    console.log(body);
});

  console.log('next2');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

module.exports = httpstream;
