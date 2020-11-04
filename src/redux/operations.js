import Axios from 'axios';
import * as actions from './actions';
import { delayApiReq, resultsPerPage } from '../constantsAndUtils';

const login = (credentials, history) => (dispatch) => {
  dispatch(actions.setLoading(true));
  Axios.post(`https://reqres.in/api/login?delay=${delayApiReq}`, { ...credentials })
    .then(({ data }) => {
      const user = { email: credentials.email, token: data.token };
      localStorage.setItem('token', data.token);
      dispatch(actions.setLoading(false));
      dispatch(actions.setUser(user));
      history.push('/home');
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(actions.setNotification({ type: 'error', message: error }));
      dispatch(actions.setLoading(false));
    });
};

const fetchUsers = (page) => (dispatch) => {
  dispatch(actions.setLoading(true));
  Axios.get(
    `https://reqres.in/api/users?delay=${delayApiReq}&page=${page}&per_page=${resultsPerPage}`,
  )
    .then(({ data }) => {
      dispatch(actions.setLoading(false));
      dispatch(actions.setCurrentPage(data.page));
      dispatch(actions.setTotalPages(data.total_pages));
      dispatch(actions.setData(data.data));
    })
    .catch(() => {
      dispatch(actions.setLoading(false));
    });
};

const fetchUser = (id, cb, history) => (dispatch) => {
  dispatch(actions.setLoading(true));
  Axios.get(`https://reqres.in/api/users/${id}?delay=${delayApiReq}`)
    .then(({ data }) => {
      dispatch(actions.setLoading(false));
      cb(data.data);
    })
    .catch(() => {
      dispatch(actions.setLoading(false));
      history.push('/not-found');
    });
};

const updateUser = ({ id, ...user }, history) => (dispatch) => {
  dispatch(actions.setLoading(true));
  Axios.put(`https://reqres.in/api/users/${id}?delay=${delayApiReq}`, user)
    .then(({ data }) => {
      dispatch(
        actions.setNotification({ type: 'success', message: `User ${data.first_name} :updated` }),
      );
      dispatch(actions.setLoading(false));
      history.push('/');
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(actions.setNotification({ type: 'error', message: error }));
      dispatch(actions.setLoading(false));
    });
};

const deleteUser = (id, page) => (dispatch) => {
  dispatch(actions.setLoading(true));
  Axios.delete(`https://reqres.in/api/users/${id}?delay=${delayApiReq}`)
    .then(() => {
      dispatch(actions.setNotification({ type: 'success', message: `User ${id} :deleted` }));
      dispatch(actions.setLoading(false));
      // collect data again, but since it's a static rest api, data never changes
      fetchUsers(page)(dispatch);
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(actions.setNotification({ type: 'error', message: error }));
      dispatch(actions.setLoading(false));
    });
};

const setNotification = (notification) => (dispatch) => {
  return dispatch(actions.setNotification(notification));
};

const unsetNotification = (notification) => (dispatch) => {
  return dispatch(actions.unsetNotification(notification));
};

const logout = (history) => (dispatch) => {
  localStorage.removeItem('token');

  dispatch(actions.setUser(null));
  dispatch(actions.unsetNotification()); // delete all notifications

  history.push('/login');
};

export default {
  login,
  fetchUsers,
  fetchUser,
  updateUser,
  setNotification,
  unsetNotification,
  deleteUser,
  logout,
};
