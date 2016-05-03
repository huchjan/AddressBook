var React = require('react');
var ReactDom = require('react-dom');
var ToDo = require('./ToDo.jsx');

ReactDom.render(
	<div>
		<ToDo />
	</div>,
	document.getElementById('app')
);

