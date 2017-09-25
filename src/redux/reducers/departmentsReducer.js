import initialState from './initialState';

export const DEPARTMENTS_FETCH_REQUESTED = 'DEPARTMENTS::FETCH_REQUESTED';
export const DEPARTMENTS_FETCH_SUCCEEDED = 'DEPARTMENTS::FETCH_SUCCEEDED';
export const DEPARTMENTS_FETCH_FAILED = 'DEPARTMENTS::FETCH_FAILED';
export const DEPARTMENT_ADD_SUCCEEDED = 'DEPARTMENT::ADD_SUCCEEDED';
export const DEPARTMENT_REMOVE_SUCCEEDED = 'DEPARTMENT::REMOVE_SUCCEEDED';
export const DEPARTMENT_UPDATE_SUCCEEDED = 'DEPARTMENT::UPDATE_SUCCEEDED';

export default (state = initialState.departments, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case DEPARTMENTS_FETCH_SUCCEEDED:
        return [ ...payload ];
      case DEPARTMENT_ADD_SUCCEEDED:
        return [ ...state, payload ];
      case DEPARTMENT_REMOVE_SUCCEEDED:
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