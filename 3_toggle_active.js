var links = document.getElementsByClassName('link');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', toggleActive);
}

function toggleActive(e) {
  for (var i = 0; i < links.length; i++) {
    links[i].className = 'link';
  }
  e.target.className += ' active';
}
