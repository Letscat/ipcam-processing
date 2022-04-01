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

      rtspstream = require('node-rtsp-stream')
  Rtsp = new rtspstream({
  name: 'name',
  streamUrl: stream.uri,
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})

      res.end('<html><body>' +
        '<canvas id="canvas" width="200" height="100"></canvas>' +
        
        '</body></html>');

        
        /*
        player = new jsmpeg.Player('ws://localhost:9999', {
          canvas: document.getElementById('canvas') // Canvas should be a canvas DOM element
        })	*/
        
    }).listen(443);
  });
});

//https://wiki.videolan.org/Documentation:WebPlugin/