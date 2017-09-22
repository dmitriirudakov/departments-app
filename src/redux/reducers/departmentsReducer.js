import initialState from './initialState';

const SET_DEPARTMENT_LIST = 'DEPARTMENT::SET_DEPARTMENT_LIST';
const ADD_DEPARTMENT = 'DEPARTMENT::ADD_DEPARTMENT';
const REMOVE_DEPARTMENT = 'DEPARTMENT::REMOVE_DEPARTMENT';
const UPDATE_DEPARTMENT = 'DEPARTMENT::UPDATE_DEPARTMENT';

export default (state = initialState.departments, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case SET_DEPARTMENT_LIST:
        return [ ...payload ];
      case ADD_DEPARTMENT:
        return [ ...state, payload ];
      case REMOVE_DEPARTMENT:
        return state.filter(item => item.id !== payload.id);
      case UPDATE_DEPARTMENT:
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