var http = require('http');
// https://qiita.com/yshyy/items/ccc7a60458d445715877
// Node.js Stream を使いこなす
// https://qiita.com/masakura/items/5683e8e3e655bfda6756
// node.jsで画像をダウンロードする
// https://code.i-harness.com/ja/q/c26833
http.createServer(function (req, res) {
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
}).listen(3000, '127.0.0.1');
console.log('Server running');

