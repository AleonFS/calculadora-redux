import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {calculateResult, changeSymbol, clear, numberClick, operatorClick, updateInput1, updateInput2} from "./store";

class AppNotConnected extends Component {

	render() {
		const operatorsIds = ['plus','subs','mul'];
		return (
			<div>
				<div className="row">
					<input style={inputStyle} type="text" value={this.props.numA}
					       onChange={(e) => this.props.onChangeA(e.target.value)}/>
				</div>
				<div className="row">
					<span id="operator" style={operatorStyle}>{this.props.operator}</span>
				</div>
				<div className="row">
					<input  style={inputStyle} type="text" value={this.props.numB}
					       onChange={(e) => this.props.onChangeB(e.target.value)}/>
				</div>
				<div className="row">
					<input id="result" style={inputStyle} readOnly type="text" value={this.props.result}/>
				</div>
				{['+', '-', '*'].map((v, i) =>
					<div className="row" key={i}>
						{Array(3).fill(null).map((v, j) =>
							<OwnButton id={"btn" + (3 * i + j)} key={j} onClick={() => this.props.onNumberPress(3 * i + j)} title={3 * i + j}/>
						)}
						<OwnButton id={operatorsIds[i]} key={v} onClick={() => this.props.setOperator(v)} title={v}/>
					</div>
				)}
				<div className="row">
					<OwnButton onClick={() => this.props.onNumberPress(9)} title="9"/>
					<OwnButton onClick={() => this.props.clear()} title="C"/>
					<OwnButton id="calculate" onClick={() => this.props.calculateResult()} title="="/>
					<OwnButton onClick={() => this.props.setOperator('/')} title="/"/>
				</div>
				<div className="row">
					<OwnButton onClick={() => this.props.setOperator('%')} title="%"/>
					<OwnButton onClick={() => this.props.changeSymbol()} title="+/-"/>
				</div>
			</div>
		);
	}
}

let operatorStyle = {width: 60, margin: 2, fontSize: 32, textAlign: "center"};
let inputStyle = {width: 240, margin: 2, fontSize: 32};
let buttonStyle = {height: 60, width: 60, fontSize: 32, margin: 2};

const OwnButton = props => <button style={buttonStyle} onClick={props.onClick}>{props.title}</button>


const mapStateToProps = state => ({
	numA: state.input1,
	numB: state.input2,
	result: state.result,
	operator: state.operator
});


const mapDispatchToProps = {
	onChangeA: updateInput1,
	onChangeB: updateInput2,
	setOperator: operatorClick,
	onNumberPress: numberClick,
	clear,
	calculateResult,
	changeSymbol
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(AppNotConnected);
