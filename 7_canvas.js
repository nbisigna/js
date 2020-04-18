document.body.style.margin = '0';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var clientX = 0;
var clientY = 0;

function draw() {
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(1, 'blue');
  grd.addColorStop(0, 'white');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 500, 100);

  ctx.fillStyle = 'green';
  ctx.fillRect(0, 100, 500, 200);

  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(20, 20, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = 'brown';
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(150, 200);
  ctx.lineTo(150, 200);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.font = '32px Ariel';
  ctx.fillText('Hello World', 70, 50);

  ctx.beginPath();
  ctx.arc(clientX, clientY, 25, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(clientX, clientY, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.moveTo(clientX - 25, clientY);
  ctx.lineTo(clientX + 25, clientY);
  ctx.stroke();

  ctx.moveTo(clientX, clientY + 25);
  ctx.lineTo(clientX, clientY - 25);
  ctx.stroke();
}

window.addEventListener('resize', resize);

function resize() {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  draw();
}

resize();

document.addEventListener('mousemove', position);
function position(e) {
  clientX = e.clientX;
  clientY = e.clientY;
}

requestAnimationFrame(loop);
function loop() {
  draw();
  requestAnimationFrame(loop);
}
