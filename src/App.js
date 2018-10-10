import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			numA: '',
			numB: '',
			operator: null,
			result: '',
		}
	}

	clear() {
		this.setState({
			numA: '',
			numB: '',
			operator: null,
			result: '',
		});
	}

	setOperator(op) {
		this.setState({operator: op});
	}

	onChangeA(value) {
		this.setState({numA: value})
	}

	onChangeB(value) {
		this.setState({numB: value})
	}

	onNumberPress(value) {
		if (this.state.operator) {
			this.setState({numB: this.state.numB + value});
		} else {
			this.setState({numA: this.state.numA + value});
		}
	}

	calculateResult() {
		if (!this.state.operator) {
			return;
		}

		let numA = parseInt(this.state.numA);
		let numB = parseInt(this.state.numB);
		switch (this.state.operator) {
			case '+':
				this.setState({result: numA + numB});
				return;
			case '-':
				this.setState({result: numA - numB});
				return;
			case '*':
				this.setState({result: numA * numB});
				return;
			case '/':
				this.setState({result: numA / numB});
				return;
		}
	}




	render() {
		const operatorsIds = ['plus','subs','mul'];
		return (
			<div>
				<div className="row">
					<input style={inputStyle} type="text" value={this.state.numA}
					       onChange={(e) => this.onChangeA(e.target.value)}/>
				</div>
				<div className="row">
					<span id="operator" style={operatorStyle}>{this.state.operator}</span>
				</div>
				<div className="row">
					<input  style={inputStyle} type="text" value={this.state.numB}
					       onChange={(e) => this.onChangeB(e.target.value)}/>
				</div>
				<div className="row">
					<input id="result" style={inputStyle} readOnly type="text" value={this.state.result}/>
				</div>
				{['+', '-', '*'].map((v, i) =>
					<div className="row" key={i}>
						{Array(3).fill(null).map((v, j) =>
							<Button id={"btn" + (3 * i + j)} key={j} onClick={() => this.onNumberPress(3 * i + j)}>{3 * i + j}</Button>
						)}
						<Button id={operatorsIds[i]} key={v} onClick={() => this.setOperator(v)}>{v}</Button>
					</div>
				)}
				<div className="row">
					<Button onClick={() => this.onNumberPress(9)}>9</Button>
					<Button onClick={() => this.clear()}>C</Button>
					<Button id="calculate" onClick={() => this.calculateResult()}>=</Button>
					<Button onClick={() => this.setOperator('/')}>/</Button>
				</div>
			</div>
		);
	}
}

let operatorStyle = {width: 60, margin: 2, fontSize: 32, textAlign: "center"};
let inputStyle = {width: 240, margin: 2, fontSize: 32};
let buttonStyle = {height: 60, width: 60, fontSize: 32, margin: 2};

const Button = props => <button style={buttonStyle} onClick={props.onClick}>{props.children}</button>

export default App;
