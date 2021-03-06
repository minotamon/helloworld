var http = require('http');

function httpstream(req, res, next) {
  var fs = require('fs');
  var path = require('path');

  var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
  console.log(url);
  var filename = path.basename(url);

  // output stream
  var outFile = fs.createWriteStream(filename);

  console.log('start');
  var req = http.get(url, function(res) {
      res.pipe(outFile);
      res.on('end', function() {
        outFile.close();
        console.log('end');
        });
      });
  console.log('next');

  // error handler
  req.on('error', function(err) {
      console.log('Error: ' + err.message);
      return;
      });

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}

module.exports = httpstream;
