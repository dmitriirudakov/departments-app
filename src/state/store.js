import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { employeeReducer } from './employee';
import { departmentReducer } from './department';

const rootReducer = combineReducers({
	routing: routerReducer,
	employees: employeeReducer, 
	departments: departmentReducer,
	form: formReducer
});

export default rootReducer;