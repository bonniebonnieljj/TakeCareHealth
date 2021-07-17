var http = require('http');
var url = require('url');
var interceptor = require("./controller/interceptor").index

function start(route, handler) {
  function onRequest(request, response) {
    interceptor(request, response)
    var pathname = url.parse(request.url).pathname;
    console.log('Request ' + pathname + ' received.');
    route(handler, pathname, response, request);
  }

  http.createServer(onRequest).listen(8080, '127.0.0.1');
  console.log('Server has started.');
}

exports.start = start;