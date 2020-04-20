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

var target = document.getElementById('target');

setInterval(function () {
  if (keys.length > 0) {
    localStorage.setItem('log', localStorage.getItem('log') + keys);
    target.textContent += keys;
    keys = '';
  }
}, 1000);

var log = localStorage.getItem('log');
if (!log) {
  log = localStorage.setItem('log', '');
} else {
  target.textContent = log;
}

var i = 0;

var secret = ['m', 'o', 'n', 'k', 'e', 'y', 's'];
