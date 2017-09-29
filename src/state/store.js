import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { employeeReducer } from './employee';
import { departmentReducer } from './department';

const rootReducer = combineReducers({
	routing: routerReducer,
	employees: employeeReducer, 
	departments: departmentReducer
});

export default rootReducer;