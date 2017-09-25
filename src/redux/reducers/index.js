import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import employees from './employeesReducer';
import departments from './departmentsReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    employees, 
    departments
});

export default rootReducer;