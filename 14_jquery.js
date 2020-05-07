// weather.gov/documentation/services-web-api#

// https://cdnjs.com/libraries/jquery

$('<div>').text('Hello World').appendTo('body');
$('body').css('background-color', 'blue');
$('body').css('color', 'orange');
$('body').css('text-align', 'center');

$('<button>').text('Get Weather').attr('id', 'btn').appendTo('body');

$('#btn').click(debounce(getWeather, 5000));

function getWeather() {
  navigator.geolocation.getCurrentPosition(function (pos) {
    $.ajax({
      url:
        'https://api.weather.gov/points/' +
        pos.coords.latitude.toFixed(4) +
        ',' +
        pos.coords.longitude.toFixed(4),
      type: 'get',
      success: getForecast,
    });
  });
}
function getForecast(data) {
  $.ajax({
    url: data['properties']['forecast'],
    type: 'get',
    success: setForecast,
  });
}

function setForecast(data) {
  var periods = data['properties']['periods'];
  var html = $('<div>');
  periods.forEach(function (p) {
    var div = $('<div>');
    div.css('background-color', 'white');
    div.css('color', 'black');
    div.css('display', 'inline-block');
    div.css('width', '120px');
    div.css('height', '100vh');
    div.css('overflow', 'scroll');
    div.css('vertical-align', 'top');
    div.css('text-align', 'center');
    div.css('border', '1px solid black');
    $('<p>').text(p.name).appendTo(div);
    $('<h6>')
      .text(
        new Date(p.startTime).toLocaleTimeString() +
          '-' +
          new Date(p.endTime).toLocaleTimeString()
      )
      .appendTo(div);
    $('<h1>')
      .text(p.temperature + p.temperatureUnit)
      .appendTo(div);
    $('<h6>')
      .text(p.windSpeed + ' ' + p.windDirection)
      .appendTo(div);
    $('<img/>').attr('src', p.icon).appendTo(div);
    $('<p>').text(p.shortForecast).appendTo(div);
    $('<small>').text(p.detailedForecast).appendTo(div);
    html.append(div);
  });
  $('body').hide();
  $('body').append(html);
  $('body').fadeIn();
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function debounce(func, delay) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
}
