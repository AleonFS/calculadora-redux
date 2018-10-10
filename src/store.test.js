import {
	calculateResult,
	calculatorReducer,
	clear,
	numberClick,
	operatorClick,
	updateInput1,
	updateInput2
} from "./store";

describe('action creators suite', () => {
	it('should create a valid clear action', () => {
		expect(clear()).toEqual({type: "CLEAR"});
	});

	it('should create a valid calculate result action', () => {
		expect(calculateResult()).toEqual({type: "CALCULATE_RESULT"});
	});

	it('should create a valid calculate result action', () => {
		expect(numberClick(23)).toEqual({type: "NUMBER_CLICK", num: 23});
	});

	it('should create a valid calculate result action', () => {
		expect(operatorClick('+')).toEqual({type: "OPERATOR_CLICK", op: '+'});
	});

	it('should create a valid calculate result action', () => {
		expect(updateInput1("34")).toEqual({type: "UPDATE_INPUT_1", number: "34"});
	});

	it('should create a valid calculate result action', () => {
		expect(updateInput2("676")).toEqual({type: "UPDATE_INPUT_2", number: "676"});
	});
});

describe('reducer suite', () => {
	it('should return a empty state on clear action', () => {
		const initialState = {input1: "23423"};
		expect(calculatorReducer(initialState, clear())).toEqual({});
	});

	it('should calculate valid operation', () => {
		const initialState = {input1: "2", input2: "5", operator: '+'};
		expect(calculatorReducer(initialState, calculateResult())).toEqual(
			{input1: "2", input2: "5", operator: '+', result: 7}
		);
	});

});