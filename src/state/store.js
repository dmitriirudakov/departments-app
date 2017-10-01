import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as thunkReducer } from 'redux-saga-thunk';
import { employeeReducer } from './employee';
import { departmentReducer } from './department';

const rootReducer = combineReducers({
	routing: routerReducer,
	employees: employeeReducer, 
	departments: departmentReducer,
	form: formReducer,
	thunk: thunkReducer
});

export default rootReducer;