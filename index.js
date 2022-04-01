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

        

      res.end('<html><body>' +
        '<embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
        '<embed type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" name="vlc" width="720" height="780" target="rtsp://192.168.1.96:554/live0.264" />'+
        '</body></html>');
        
    }).listen(443);
  });
});

//https://wiki.videolan.org/Documentation:WebPlugin/