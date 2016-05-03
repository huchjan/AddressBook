var  React = require('react');

function PersonRecord(name, number) {
    this.name = name;
    this.number = number;
}
    
var AddressBook = React.createClass({
                                    
  getInitialState : function() {
		return {
			persons: [],
			input: ""
		}	
	},
    
    addPerson: function() {
		var newItems = this.state.persons;
		newItems.push(this.state.input);
		this.setState({
			items: newItems,
			input: ""
		});
	}                   
})