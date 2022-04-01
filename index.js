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
      res.end('<html><body>' + stream.uri+
        '<p></p><embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
        
        '</body></html>');
        
    }).listen(443);
  });
});

//https://wiki.videolan.org/Documentation:WebPlugin/