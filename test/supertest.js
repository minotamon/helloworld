var request = require('supertest'); // expressのテスト
var app = require('../app_router');
var chai = require("chai");
var sinon = require("sinon");
const expect = chai.expect;

describe('GET /helloworld', function() {
  let sandbox;
  beforeEach(function () {
    // sandbox = sinon.sandbox.create();
    sandbox = sinon.createSandbox();
  });
  it('sinonのテスト', function(){
    const myObject = {
      'hello': 'world'
    };
    sandbox.stub(myObject, 'hello').value('Sinon');
    let expected = 'Sinon';
    expect(expected).to.equal(myObject.hello);
  });
  afterEach(function () {
    sandbox.restore();// リストアすること
  });

  it('returns 200', function(done) {
    request(app)
    .get('/')
    .expect(200, done);
  });
});

