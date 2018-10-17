export const logger = store => next => action => {
	console.log('Action', action);
	next(action);
	console.log('State', store.getState());
}


const timeouts = {};

export const debounce = store => next => action => {
	if (!action.meta || !action.meta.debounceTime) {
		next(action);
		return;
	}

 	if (timeouts.hasOwnProperty(action.type)) {
 		clearTimeout(timeouts[action.type]);
    }

	timeouts[action.type] = setTimeout(() => next(action), action.meta.debounceTime);
}


export const saveToLocal = store => next => action => {
	next(action);
	window.localStorage.setItem('app', JSON.stringify(store.getState()))
}

export const thunk = store => next => action => {
	if (typeof action === "function") {
		action(store.dispatch);
		return;
	}

	next(action);
}