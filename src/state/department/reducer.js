import {
	DEPARTMENTS_FETCH_SUCCEEDED, 
	DEPARTMENT_CREATE_SUCCEEDED, 
	DEPARTMENT_UPDATE_SUCCEEDED,
	DEPARTMENT_DELETE_SUCCEEDED
} from './actions';

const initialState = [];

function departmentReducer(state = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case DEPARTMENTS_FETCH_SUCCEEDED:
			return [ ...payload ];
		case DEPARTMENT_CREATE_SUCCEEDED:
			return [ ...state, payload ];
		case DEPARTMENT_DELETE_SUCCEEDED:
			return state.filter(item => item.id !== payload.id);
		case DEPARTMENT_UPDATE_SUCCEEDED:
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

export default departmentReducer;