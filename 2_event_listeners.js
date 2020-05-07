var btn = document.getElementById('button');

btn.addEventListener('click', randomColor);

function randomColor(e) {
  btn.removeEventListener('click', randomColor);
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var alpha = Math.random();
  var string =
    'rgb(' + red + ', ' + green + ', ' + blue + ', ' + alpha.toFixed(3) + ')';
  document.body.style.backgroundColor = string;
  e.target.textContent = string;
  setTimeout(function () {
    btn.addEventListener('click', randomColor);
  }, 1000);
}
