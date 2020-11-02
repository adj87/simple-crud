import actionTypes from './actionTypes';

const setLoading = (loading) => ({
  type: actionTypes.SET_LOADING,
  payload: loading,
});

const setData = (data) => ({
  type: actionTypes.SET_DATA,
  payload: data,
});

const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

const setCurrentPage = (page) => ({
  type: actionTypes.SET_CURRENT_PAGE,
  payload: page,
});

const setTotalPages = (pages) => ({
  type: actionTypes.SET_TOTAL_PAGES,
  payload: pages,
});

const setNotification = (notification) => ({
  type: actionTypes.SET_NOTIFICATION,
  payload: notification,
});

const unsetNotification = (notification) => ({
  type: actionTypes.UNSET_SET_NOTIFICATION,
  payload: notification,
});

export {
  setLoading,
  setData,
  setUser,
  setCurrentPage,
  setTotalPages,
  setNotification,
  unsetNotification,
};
