import initialState from './initialState';

export const DEPARTMENTS_FETCH_REQUESTED = 'DEPARTMENTS::FETCH_REQUESTED';
export const DEPARTMENTS_FETCH_SUCCEEDED = 'DEPARTMENTS::FETCH_SUCCEEDED';
export const DEPARTMENTS_FETCH_FAILED = 'DEPARTMENTS::FETCH_FAILED';

export const DEPARTMENT_CREATE_REQUESTED = 'DEPARTMENT::CREATE_REQUESTED';
export const DEPARTMENT_CREATE_SUCCEEDED = 'DEPARTMENT::CREATE_SUCCEEDED';
export const DEPARTMENT_CREATE_FAILED = 'DEPARTMENT::CREATE_FAILED';

export const DEPARTMENT_DELETE_REQUESTED = 'DEPARTMENT::DELETE_REQUESTED';
export const DEPARTMENT_DELETE_SUCCEEDED = 'DEPARTMENT::DELETE_SUCCEEDED';
export const DEPARTMENT_DELETE_FAILED = 'DEPARTMENT::DELETE_FAILED';

export const DEPARTMENT_UPDATE_REQUESTED = 'DEPARTMENT::UPDATE_REQUESTED';
export const DEPARTMENT_UPDATE_SUCCEEDED = 'DEPARTMENT::UPDATE_SUCCEEDED';
export const DEPARTMENT_UPDATE_FAILED = 'DEPARTMENT::UPDATE_FAILED';

export default (state = initialState.employees, action = {}) => {
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