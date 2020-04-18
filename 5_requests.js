function getPosts() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var posts = JSON.parse(this.response);
      console.log(posts);
      setPosts(posts);
    }
  };
  xhttp.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
  xhttp.send();
}

function setPosts(posts) {
  var app = document.getElementById('app');
  var html = '';
  posts.forEach(function (post) {
    html +=
      '<div><div>' +
      post.title +
      '</div><div>' +
      post.body +
      '</div></div><hr>';
  });
  app.innerHTML = html;
}

getPosts();
