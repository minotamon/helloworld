var httprequest = require('../lib/httprequest');
var chai = require("chai");
var sinon = require("sinon");
const expect = chai.expect;
const httpRequest = httprequest.httpRequest;

describe('GET /helloworld', function() {
  let sandbox;
  beforeEach(function () {
    // sandbox = sinon.sandbox.create();
    sandbox = sinon.createSandbox();
  });

  it('sinon test', function(){

    // こうすると、httprequest.httpRequestをモックするようになる
    httpMock = sandbox.mock(httprequest);
    httpMock.expects('httpRequest')
    .once();

    var url = 'http://cospix.jp/upload/preview/170527071543/170527071552.jpg';
    httprequest.httpRequest(url);
  });

  afterEach(function () {
    sandbox.verify();// リストアすること
    sandbox.restore();// リストアすること
  });
});

