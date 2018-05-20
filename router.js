var express = require('express');
var router = express.Router();
//var httpstream = require('./controller/httpstream');
//var httpstream = require('./controller/httpstream_promise');
//var httpstream = require('./controller/httpstream_promise_await');
var httpstream = require('./controller/node-fetch-stream');
//var httpstream = require('./controller/node-fetch-stream-async');

router.get('/', httpstream);

module.exports = router;
