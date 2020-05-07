// https://w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, s) {
  var d = new Date();
  d.setTime(d.getTime() + s * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
var visits = document.getElementById('visits');
var modal = document.getElementById('modal');
function checkCookie() {
  var cookie = Number(getCookie('user'));
  console.log(cookie);
  if (cookie != '') {
    setCookie('user', cookie + 1, 3600);
    visits.textContent = 3 - cookie;
    if (cookie >= 3) {
      modal.style.display = 'flex';
    }
  } else {
    setCookie('user', 1, 3600);
    visits.textContent = 3;
  }
}
checkCookie();
