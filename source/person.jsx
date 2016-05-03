var React = require('react');

module.exports = React.createClass({

	render: function(){
		var content = this.props.name;
	
		return (
			<div>
				{content}
			</div>
		);
  	}
});