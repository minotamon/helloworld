// アプリケーションのエントリポイント

"use strict";


var http = require('http');
var express = require('express');
var app = express();
var router = require('./router');


// use でミドルウェア設定
app.use('/',router);


module.exports = app;

// 単体テスト用。これやっておかないとプロンプトが返ってこない
// mocha時に?になるのは機種依存
if (!module.parent) {
  //  app.listen(3000, '0.0.0.0');
  var server = http.createServer(app);
  server.listen('3000');
}
