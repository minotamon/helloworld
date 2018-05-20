var fetch = require('node-fetch');
var fs = require('fs');


// Promiseのテスト方法
async function httpRequest(url) {
    res = await fetch(url);
  return new Promise(function(resolve, reject) {
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
  });

}

// functionをexportする
// 使う側は、hogehoge.httpRequest
module.exports = {httpRequest};
