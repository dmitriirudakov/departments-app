import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import employees from './employees';
import departments from './departments';

const rootReducer = combineReducers({
    routing: routerReducer,
    employees, 
    departments
});

export default rootReducer;

export * from './departments';
export * from './employees';
export * from './initialState';