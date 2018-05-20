var httprequest = require('../lib/httprequest');
var chai = require("chai");
var sinon = require("sinon");
//var fetch = require('node-fetch');
const expect = chai.expect;
const httpRequest = httprequest.httpRequest;
var proxyquire = require('proxyquire');
// proxyquire('module',{
//   'fetch': {status: 400, body: {pipe: () => {}}}
// });

// わからないこと functionをrequireしているもののmock
describe('GET /fetch', function() {
  let sandbox;
  beforeEach(function () {
    // sandbox = sinon.sandbox.create();
    sandbox = sinon.createSandbox();
  });

  it('sinon test', function(){

    var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
    httprequest.httpRequest(url);
  });

  afterEach(function () {
    sandbox.verify();// リストアすること
    sandbox.restore();// リストアすること
  });
});

