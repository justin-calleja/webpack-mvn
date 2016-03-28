var greeter = require('./greeter');

var greeting = greeter.greet();

if (document) {
  var el = document.createElement('h1');
  el.innerHTML = greeting;
  document.body.appendChild(el);
} else {
  console.log(greeting);
}

