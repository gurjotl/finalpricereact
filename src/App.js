import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {subtotal: 0,
					  tax: 0};

	    this.handleChangeSub = this.handleChangeSub.bind(this);
	    this.handleChangeTax = this.handleChangeTax.bind(this);

	    this.finalPrice = React.createRef();
	}

	handleChangeSub(event) {
		this.setState({subtotal: event.target.value});
		this.finalPrice.current.innerHTML = "Final Price: " + (Math.round((event.target.value * (1 + (this.state.tax/100))) * 100) / 100);
	}

	handleChangeTax(event) {
		this.setState({tax: event.target.value});
		this.finalPrice.current.innerHTML = "Final Price: " + (Math.round((this.state.subtotal * (1 + (event.target.value/100))) * 100 ) / 100);
	}

	render() {
	    return (
	      	<div className="App">
		        <header className="App-header">
		        	Final Price Calculator <p>&nbsp;</p> <br/>
		        	<p> Subtotal: <input type="text" value={this.state.subtotal} onChange={this.handleChangeSub}/> <br/> </p>
		        	<p> Tax (%): <input type="text" value={this.state.tax} onChange={this.handleChangeTax}/> <br/> </p>
			        <p ref={this.finalPrice}>Final Price: 0</p>
		        </header>
	      	</div>
	    );
	  }
}

export default App;