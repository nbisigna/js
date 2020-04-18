var id = document.getElementById('id');
id.textContent += ' id';

var classes = document.getElementsByClassName('class');
classes[0].textContent += ' class';

var tags = document.getElementsByTagName('div');
for (var i = 0; i < tags.length; i++) tags[i].textContent += ' div';

var query = document.querySelector('#id');
query.textContent += ' queried';

var queryAll = document.querySelectorAll('.class');
queryAll[0].textContent += ' queried all';

var names = document.getElementsByName('el');
names[0].textContent += ' by name';
