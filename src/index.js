import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppConnected} from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from "redux";
import {calculatorReducer} from "./store";
import {Provider} from "react-redux";
import {debounce, logger, saveToLocal, thunk} from "./middlewares";


let staticInitialState = {input1: "", input2: "", result: "", operator: ""};
let localStorageState = JSON.parse(window.localStorage.getItem('app'));
export const initialState = localStorageState || staticInitialState;


const store = createStore(calculatorReducer,
	initialState,
	applyMiddleware(
		debounce,
		logger,
		saveToLocal,
		thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<AppConnected />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
