import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../state';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rountingMiddleware = routerMiddleware(browserHistory);

export const store = createStore(
	rootReducer,
	composeWithDevTools(
		compose(
			applyMiddleware(rountingMiddleware),
			applyMiddleware(thunkMiddleware, sagaMiddleware)
		)
	)
);
export const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(rootSaga);