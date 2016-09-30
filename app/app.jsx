var React = require('react');
var ReactDOM = require('react-dom');

var objOne ={
  name:"andre",
  location:"calling"
}

var objTwo = {
  age:25,
  ...objOne
}
console.log(objTwo);
ReactDOM.render(
  <h1>BoilerPlate app</h1>,
  document.getElementById('app')
);
