const http = require('http')

http.createServer(function (req,res){
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('
  <!DOCTYPE html>
  <html>
  <head></head>
  <body>Hello World!</body>
  </html>
  ');
}).listen(8080);
