var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  new Cam({
    hostname: '192.168.1.96',
    username: 'admin',
    password: 'admin'
  }, function(err) {
    this.absoluteMove({x: 1, y: 1, zoom: 1});
    this.getStreamUri({protocol:'RTSP'}, function(err, stream) { 

    });
  });

  //since we are in a request handler function
  //we're using readFile instead of readFileSync
  fs.readFile('index.ejs', 'utf-8', function(err, content) {
    if (err) {
      res.end('error occurred');
      return;
    }
    var uri = stream.uri;  //here you assign temp variable with needed value
  
    var splituri = uri.split('//');
    temp = splituri[0]+ '//admin:admin@'+ splituri[1];
    var renderedHtml = ejs.render(content, {temp: temp});  //get redered HTML code
    res.end(renderedHtml);
  });
}).listen(80);

 
  
