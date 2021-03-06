import actionTypes from './actionTypes';

const initialState = {
  user: null,
  data: null,
  loading: false,
  currentPage: 1,
  totalPages: null,
  notifications: [],
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

    case actionTypes.SET_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, payload],
      };

    case actionTypes.UNSET_SET_NOTIFICATION:
      return {
        ...state,
        // if no payload(id, in this case) , delete all notifications
        notifications: payload ? [...state.notifications.filter((el, i) => i !== payload)] : [],
      };

    default:
      return state;
  }
};

export default appReducer;
