var proxyquire = require('proxyquire');
// httprequestがrequireしてるやつのmockを作る
var chai = require("chai");
var sinon = require("sinon");
var stub = sinon.stub();
var httprequest = proxyquire('../lib/httprequest',{
  'fetch': sinon.stub().returns(Promise.resolve({status: 400, body: {pipe: () => {}}}))
});
const expect = chai.expect;
const httpRequest = httprequest.httpRequest;

describe('GET /proxyquire', function() {
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
    httprequest.httpRequest(url).catch(function(e) {
        console.log(e);
    });
  });

  afterEach(function () {
    sandbox.verify();// リストアすること
    sandbox.restore();// リストアすること
  });
});

