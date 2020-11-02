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

export { setLoading, setData, setUser };
