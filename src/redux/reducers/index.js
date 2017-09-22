import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import employees from './employeesReducer';
import departments from './departmentsReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    router: routerReducer,
    employees, 
    departments
});

export default rootReducer;