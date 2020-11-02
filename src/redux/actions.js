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

export { setLoading, setData, setUser, setCurrentPage, setTotalPages };
