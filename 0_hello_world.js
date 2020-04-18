var el = document.createElement('div');
el.innerHTML = '<h1 class="title" >Hello World</h1>';

el.style.height = '50px';
el.style.width = '300px';
el.style.backgroundColor = 'blue';
el.style.borderRadius = '100px';
el.style.color = 'white';
el.style.fontSize = '24px';
el.style.margin = 'auto';
el.style.textAlign = 'center';

el.innerHTML += '<p style="color:black;">' + window.location + '</p>';

document.body.appendChild(el);
