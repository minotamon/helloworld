var proxyquire = require('proxyquire');
// httprequestがrequireしてるやつのmockを作る
var chai = require("chai");
var sinon = require("sinon");
var stub = sinon.stub();
// var httprequest = require('../lib/httprequest2');
const expect = chai.expect;

describe('GET /proxyquire2', function() {
  let sandbox;
  beforeEach(function () {
    // sandbox = sinon.sandbox.create();
    sandbox = sinon.createSandbox();
  });

  it('sinon test', function(){

    // こうすると、httprequest.httpRequestをモックするようになる
  //  httpMock = sandbox.mock(httprequest);
  //  httpMock.expects('httpRequest')
  //  .once();

    var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
    var httprequest = proxyquire('../lib/httprequest2',{
        'node-fetch': sinon.stub().returns(Promise.resolve({status: 400, body: {pipe: () => {}}}))
      });
    httprequest.httpRequest(url).catch(function(e) {
        console.log(e);
    });
  });

  afterEach(function () {
    sandbox.verify();// リストアすること
    sandbox.restore();// リストアすること
  });
});

