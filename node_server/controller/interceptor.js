var fs = require("./fs")
exports.index = function(request, response) {
  console.log('【interceptor:】', request, response)
  fs.write()
}