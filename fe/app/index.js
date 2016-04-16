var greeter = require('./greeter');

var greeting = greeter.greet();

if (typeof document !== 'undefined') {
  var apiEndpoint = 'http://localhost:8090/api/greetings';
  var el = document.createElement('h1');

  fetch(apiEndpoint + '/webpack').then(function(response) {
    return response.json();
  }).then(function(obj) {
    el.innerHTML = greeting + '<br>' + obj.content + '<br>At ' + obj.time;
    document.body.appendChild(el);
  }).catch(function(err) {
    el.innerHTML = 'oh no…';
    document.body.appendChild(el);
  });
} else {
  console.log(greeting);
}

