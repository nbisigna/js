var target = document.getElementById('target');

var log = localStorage.getItem('log');
if (log) {
  target.textContent = log;
} else {
  log = localStorage.setItem('log', '');
}

document.addEventListener('keypress', onKeyPress);

var keys = '';

function onKeyPress(e) {
  keys += e.key;
  if (secret[i] == e.key) i++;
  else i = 0;
  if (i == 7) {
    localStorage.removeItem('log');
    keys = '';
    target.textContent = '';
  }
}

setInterval(function () {
  if (keys.length > 0) {
    localStorage.setItem('log', localStorage.getItem('log') + keys);
    target.textContent += keys;
    keys = '';
  }
}, 1000);

var i = 0;

var secret = ['m', 'o', 'n', 'k', 'e', 'y', 's'];
