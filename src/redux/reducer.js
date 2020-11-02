import actionTypes from './actionTypes';

const initialState = {
  user: null,
  data: null,
  loading: false,
  currentPage: 1,
  totalPages: null,
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };

    case actionTypes.SET_DATA:
      return {
        ...state,
        data: payload,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case actionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case actionTypes.SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
