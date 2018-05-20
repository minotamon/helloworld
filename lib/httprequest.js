var fetch = require('node-fetch');
var fs = require('fs');


// Promiseのテスト方法
function httpRequest(url) {
  return new Promise(function(resolve, reject) {
 fetch(url)
  .then(res => {
    const dest = fs.createWriteStream('./octocat2.png', {
      autoClose: true,
    });
    if (res.status !== 200) {
      reject('not 200')
    }
    res.body.pipe(dest);
    res.body.on('end', function() {
      console.log('endd');
      resolve('success');
      });
    }).catch(err => {
      console.log(err);
      reject('erroraa')
    });
    console.log('fetchnext');
  });
}

// functionをexportする
// 使う側は、hogehoge.httpRequest
module.exports = {httpRequest};
