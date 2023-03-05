const q = require('q');
const qio = require('q-io/http');

qio.read('http://localhost:1337')
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  .catch(function (error) {
    console.error(error.message);
  })
  .done();