document.body.style.margin = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.style.width = '100%';
canvas.style.height = '100%';

function draw() {
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, 'white');
  grd.addColorStop(1, 'blue');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 500, 100);

  ctx.fillStyle = 'green';
  ctx.fillRect(0, 100, 500, 100);

  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(20, 20, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = 'brown';
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(150, 200);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.font = '32px Ariel';
  ctx.fillText('Hello World', 70, 50);

  ctx.fillStyle = 'red';
  ctx.fillRect(CX, CY, 10, 10);

  if (direction) dog();
  else dogLeft();
}

document.addEventListener('mousemove', position);

var CX = 0,
  CY = 0;
function position(e) {
  CX = e.clientX;
  CY = e.clientY;
}
var direction = true;
var dogPos = 0;
function walk() {
  if (direction) {
    dogPos += 1;
  } else {
    dogPos -= 1;
  }
  if (dogPos == 80) direction = false;
  if (dogPos == 0) direction = true;
  setTimeout(function () {
    walk();
  }, 50);
}
walk();

function dog() {
  ctx.fillStyle = 'beige';
  ctx.fillRect(100 + dogPos, 85, 20, 10);
  ctx.fillRect(100 + dogPos, 95, 4, 10);
  ctx.fillRect(116 + dogPos, 95, 4, 10);
  ctx.fillRect(124 + dogPos, 77, 8, 6);
  ctx.fillStyle = 'black';
  ctx.fillRect(120 + dogPos, 75, 4, 10);
  ctx.beginPath();
  ctx.moveTo(100 + dogPos, 85);
  ctx.lineTo(95 + dogPos, 85 + tail);
  ctx.closePath();
  ctx.stroke();
}
var tail = 0;
var up = true;
function wagTail() {
  if (up) {
    tail += 1;
  } else {
    tail -= 1;
  }
  if (tail == 5) up = false;
  if (tail == -5) up = true;
  setTimeout(function () {
    wagTail();
  }, 20);
}
wagTail();
function dogLeft() {
  ctx.fillStyle = 'beige';
  ctx.fillRect(100 + dogPos, 85, 20, 10);
  ctx.fillRect(100 + dogPos, 95, 4, 10);
  ctx.fillRect(116 + dogPos, 95, 4, 10);
  ctx.fillRect(88 + dogPos, 77, 8, 6);
  ctx.fillStyle = 'black';
  ctx.fillRect(96 + dogPos, 75, 4, 10);
  ctx.beginPath();
  ctx.moveTo(120 + dogPos, 85);
  ctx.lineTo(125 + dogPos, 85 + tail);
  ctx.closePath();
  ctx.stroke();
}

requestAnimationFrame(loop);
function loop() {
  draw();
  requestAnimationFrame(loop);
}
