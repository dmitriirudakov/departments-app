import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const rountingMiddleware = routerMiddleware(browserHistory)

const store = createStore(
	rootReducer,
	composeWithDevTools(
		compose(
			applyMiddleware(rountingMiddleware),
			applyMiddleware(thunkMiddleware, sagaMiddleware)
		)
	)
);
sagaMiddleware.run(rootSaga)

export default store;