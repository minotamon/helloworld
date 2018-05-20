var http = require('http');
// https://qiita.com/yshyy/items/ccc7a60458d445715877
http.createServer(function (req, res) {
    var func = new Promise(
      function(resolve, reject) {
      setTimeout(
        function() {
        resolve({"message": "success"});
        }, 3000
        );
      });
    console.log("1");
    // thenはresolveが終わった戻り値をなんかするメソッドを渡す
   // catchはrejectが終わった戻り値をなんかするメソッドを渡す
    func.then(function(data) {
      console.log(data.message);
      }, function(error) {
      console.log(error.message);
      });
    console.log("2");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running');

