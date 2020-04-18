var links = document.getElementsByClassName('link');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', toggleActive);
}

function toggleActive(e) {
  if (e.target.classList.contains('link')) {
    var links = document.getElementsByClassName('link');
    for (var i = 0; i < links.length; i++) links[i].classList = 'link';
    if (e.target.classList.contains('active')) {
    } else {
      e.target.classList += ' active';
    }
  }
}
