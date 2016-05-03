var React = require('react');
var Person = require('./person.jsx');
var PersonForm = require('./personForm.jsx');

function PersonRecord(name, number) {
    this.name = name;
    this.number = number;
}

module.exports = React.createClass({
	getInitialState : function() {
		return {
			persons: [new PersonRecord("Erty", "555-5555")],
			businesses: [],
		}	
	},

	addPerson: function(name, number) {
		var newPersons = this.state.persons;
		newPersons.push(new PersonRecord(name,number));
		this.setState({
			persons: newPersons
		});
	},
	render: function(){
		return (
			<div>
				{this.state.persons.map(function(person) {
                    console.log(person);
					return <Person name={person.name + " " + person.number} key={person.number}  />
				})}
     			<PersonForm
     				value={this.props.name}
     				addPerson={this.addPerson}/>
      		</div>
		)
  	}
});