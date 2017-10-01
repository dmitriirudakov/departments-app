import { 
	EMPLOYEES_FETCH_SUCCEEDED,
	EMPLOYEE_CREATE_SUCCEEDED,
	EMPLOYEE_UPDATE_SUCCEEDED,
	EMPLOYEE_DELETE_SUCCEEDED
} from './actions';

const initialState = [];

function employeeReducer(state = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case EMPLOYEES_FETCH_SUCCEEDED:
			return [ ...payload ];
		case EMPLOYEE_CREATE_SUCCEEDED:
			return [ ...state, payload ];
		case EMPLOYEE_DELETE_SUCCEEDED:
			return state.filter(item => item.id !== payload.id);
		case EMPLOYEE_UPDATE_SUCCEEDED:
			return state.map((item) => {
				if(item.id !== payload.id) {
						return item;
				}
				return {
						...item,
						...payload
				};
		});
			
		default: return state;
	}
};

export default employeeReducer;