var React = require('react');

module.exports = React.createClass({
	addBtnClick: function() {
		this.props.addPerson(this.state.name, this.state.number);
	},
    getInitialState : function() {
        return {
            name : "",
            number : ""
        }
    },
    changeName: function(evt){
        this.setState({
            name:evt.target.value
        })
    },
     changeNumber: function(evt){
        this.setState({
            number:evt.target.value
        })
    },
	render: function(){
		return (
			<p>
				{this.props.name}
				<input
				type="text"
					value={this.state.name}
					onChange = {this.changeName}
				/>
                {this.props.number}
				<input
					type="text"
					value={this.state.number}
					onChange = {this.changeNumber}
				/>
            
				<button onClick={this.addBtnClick}>Add</button>
			</p>
		)
  	}
});