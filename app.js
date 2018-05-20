// アプリケーションのエントリポイント

"use strict";


var http = require('http');
var express = require('express');
var app = express();


// use でミドルウェア設定
app.use(function (req, res, next) {
  next();
  return res.send('hello world');
});

var server = http.createServer(app);
server.listen('3000');
