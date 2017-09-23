import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middleware = routerMiddleware(browserHistory)

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware))
);

export default store;