import initialState from './initialState';

const SET_EMPLOYEE_LIST = 'EMPLOYEE::SET_EMPLOYEE_LIST'; 
const ADD_EMPLOYEE = 'EMPLOYEE::ADD_EMPLOYEE';
const REMOVE_EMPLOYEE = 'EMPLOYEE::REMOVE_EMPLOYEE';
const UPDATE_EMPLOYEE = 'EMPLOYEE::UPDATE_EMPLOYEE';
const REMOVE_EMPLOYEE_FROM_DEPARTMENT = 'EMPLOYEE::REMOVE_EMPLOYEE_FROM_DEPARTMENT';

export default (state = initialState.employees, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case SET_EMPLOYEE_LIST:
        return [ ...payload ];
      case ADD_EMPLOYEE:
        return [ ...state, payload ];
      case REMOVE_EMPLOYEE:
        return state.filter(item => item.id !== payload.id);
      case UPDATE_EMPLOYEE:
        return state.map((item) => {
          if(item.id !== payload.id) {
              return item;
          }
          return {
              ...item,
              ...payload
          };    
      });
      case REMOVE_EMPLOYEE_FROM_DEPARTMENT:
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
