// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

var video = document.getElementById('video');
var Height = document.body.scrollHeight;
var Width = document.body.scrollWidth;

var constraints = {
  audio: true,
  video: {
    width: Width,
    height: Height,
    frameRate: { ideal: 10, max: 15 },
  },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (mediaStream) {
    var video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ': ' + err.message);
  });

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.height = Height;
canvas.width = Width;

document.addEventListener('keypress', function (e) {
  if (e.keyCode == 32) {
    ctx.drawImage(video, 0, 0, Width, Height);
    video.style.display = 'none';
    canvas.style.display = 'block';
  }
  if (canvas.style.display == 'block') {
    if (e.keyCode == 45) {
      video.style.display = 'block';
      canvas.style.display = 'none';
    } else if (e.keyCode == 13) {
      var png = document.getElementById('canvas').toDataURL('image/png');
      var link = document.createElement('a');
      link.setAttribute('href', png);
      link.download = 'Pic';
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      video.style.display = 'block';
      canvas.style.display = 'none';
    }
  }
});
