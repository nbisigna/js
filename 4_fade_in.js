var title = document.getElementById('title');
function fadeIn(el) {
  if (el.style.opacity == 1) return;
  el.style.opacity = Number(el.style.opacity) + 0.01;
  setTimeout(function () {
    fadeIn(el);
  }, 10);
}
fadeIn(title);
