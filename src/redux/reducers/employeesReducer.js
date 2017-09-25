import initialState from './initialState';

export const EMPLOYEES_FETCH_REQUESTED = 'EMPLOYEES::FETCH_REQUESTED';
export const EMPLOYEES_FETCH_SUCCEEDED = 'EMPLOYEES::FETCH_SUCCEEDED';
export const EMPLOYEES_FETCH_FAILED = 'EMPLOYEE::FETCH_FAILDER';
export const EMPLOYEE_ADD_SUCCEEDED = 'EMPLOYEE::ADD_SUCCEEDED';
export const EMPLOYEE_REMOVE_SUCCEEDED = 'EMPLOYEE::REMOVE_SUCCEEDED';
export const EMPLOYEE_UPDATE_SUCCEEDED = 'EMPLOYEE::UPDATE_SUCCEEDED';
export const EMPLOYEE_REMOVE_FROM_DEPARTMENT = 'EMPLOYEE::REMOVE_FROM_DEPARTMENT';

export default (state = initialState.employees, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case EMPLOYEES_FETCH_SUCCEEDED:
        return [ ...payload ];
      case EMPLOYEE_ADD_SUCCEEDED:
        return [ ...state, payload ];
      case EMPLOYEE_REMOVE_SUCCEEDED:
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
      case EMPLOYEE_REMOVE_FROM_DEPARTMENT:
        return state.map((item) => {
          if (item.id !== payload.id) {
              return item;
          }
          return {
              ...item,
              ...{ departmentId: null }
          };  
        });
        
      default: return state;
    }
  };
