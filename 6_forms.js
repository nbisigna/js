var title = document.getElementById('title');
var body = document.getElementById('body');
var form = document.getElementById('form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  if (title.value.length != 0 && body.value.length != 0) {
    var post = {
      title: title.value,
      body: body.value,
      userId: 1,
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.readyState == 4 && this.status == 201) {
        console.log(JSON.parse(this.response));
      }
    };
    xhttp.open('post', 'https://jsonplaceholder.typicode.com/posts', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(post));
  }
}
