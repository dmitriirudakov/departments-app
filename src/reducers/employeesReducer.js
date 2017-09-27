import initialState from './initialState';

export const EMPLOYEES_FETCH_REQUESTED = 'EMPLOYEES::FETCH_REQUESTED';
export const EMPLOYEES_FETCH_SUCCEEDED = 'EMPLOYEES::FETCH_SUCCEEDED';
export const EMPLOYEES_FETCH_FAILED = 'EMPLOYEES::FETCH_FAILED';

export const EMPLOYEE_CREATE_REQUESTED = 'EMPLOYEE::CREATE_REQUESTED';
export const EMPLOYEE_CREATE_SUCCEEDED = 'EMPLOYEE::CREATE_SUCCEEDED';
export const EMPLOYEE_CREATE_FAILED = 'EMPLOYEE::CREATE_FAILED';

export const EMPLOYEE_DELETE_REQUESTED = 'EMPLOYEE::DELETE_REQUESTED';
export const EMPLOYEE_DELETE_SUCCEEDED = 'EMPLOYEE::DELETE_SUCCEEDED';
export const EMPLOYEE_DELETE_FAILED = 'EMPLOYEE::DELETE_FAILED';

export const EMPLOYEE_UPDATE_REQUESTED = 'EMPLOYEE::UPDATE_REQUESTED';
export const EMPLOYEE_UPDATE_SUCCEEDED = 'EMPLOYEE::UPDATE_SUCCEEDED';
export const EMPLOYEE_UPDATE_FAILED = 'EMPLOYEE::UPDATE_FAILED';

export default (state = initialState.employees, action = {}) => {
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
