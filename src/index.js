import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppConnected} from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import {calculatorReducer} from "./store";
import {Provider} from "react-redux";


export const initialState = {input1: "", input2: "", result: "", operator: ""};
const store = createStore(calculatorReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<AppConnected />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
