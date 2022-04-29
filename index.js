var
  http = require('http'),
  Cam = require('onvif').Cam;

new Cam({
  hostname: '192.168.1.96',
  username: 'admin',
  password: 'admin'
}, function(err) {
  this.absoluteMove({x: 1, y: 1, zoom: 1});
  this.getStreamUri({protocol:'RTSP'}, function(err, stream) { 
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(stream.uri)
        
     
        //SET THE RTSP STREAM ADDRESS HERE
var address = "rtsp://192.168.0.101/mpeg4/1/media.3gp";



    //SET THE DIV'S ID HERE
   



    }).listen(443);
  });
});

//https://wiki.videolan.org/Documentation:WebPlugin/