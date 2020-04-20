var video = document.getElementById('video');

var constraints = {
  audio: true,
  video: { width: 1280, height: 720, frameRate: { ideal: 30, max: 60 } },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (mediaStream) {
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
var height =
  window.outerHeight ||
  document.documentElement.scrollHeight ||
  document.body.scrollHeight;
var width =
  window.outerWidth ||
  document.documentElement.scrollWidth ||
  document.body.scrollWidth;

var ratio = 720 / 1280;

var hw = height / width <= ratio;

canvas.height = hw ? height : ratio * width;
canvas.width = hw ? (1 / ratio) * height : width;

document.addEventListener('keypress', function (e) {
  if (e.keyCode == 32) {
    ctx.drawImage(video, 0, 0, width, height);
    video.style.display = 'none';
    canvas.style.display = 'block';
  }
  if (canvas.style.display == 'block') {
    if (e.keyCode == 13) {
      let png = document.getElementById('canvas').toDataURL('image/png');
      let link = document.createElement('a');
      link.setAttribute('href', png);
      link.download = 'Picture';
      let event = new MouseEvent('click');
      link.dispatchEvent(event);
      video.style.display = 'block';
      canvas.style.display = 'none';
    } else if (e.keyCode == 45) {
      video.style.display = 'block';
      canvas.style.display = 'none';
    }
  }
});

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
