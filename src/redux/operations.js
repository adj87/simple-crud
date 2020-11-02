import Axios from 'axios';
import { setUser, setLoading, setData, setCurrentPage, setTotalPages } from './actions';

const delay = 1;

const login = (credentials, history) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`https://reqres.in/api/login?delay=${delay}`, { ...credentials })
    .then(({ data }) => {
      const user = { email: credentials.email, token: data.token };
      dispatch(setLoading(false));
      dispatch(setUser(user));
      history.push('/home');
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

const fetchUsers = (page) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.get(`https://reqres.in/api/users?delay=${delay}&page=${page}&per_page=3`)
    .then(({ data }) => {
      dispatch(setLoading(false));
      dispatch(setCurrentPage(data.page));
      dispatch(setTotalPages(data.total_pages));
      dispatch(setData(data.data));
    })
    .catch(() => {
      dispatch(setLoading(false));
      // dispatch();
    });
};

const fetchUser = (id, cb) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.get(`https://reqres.in/api/users/${id}?delay=${delay}`)
    .then(({ data }) => {
      dispatch(setLoading(false));
      cb(data.data);
    })
    .catch(() => {
      dispatch(setLoading(false));
      // dispatch();
    });
};

const updateUser = ({ id, ...user }, cb) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.put(`https://reqres.in/api/users/${id}?delay=${delay}`, user)
    .then(() => {
      dispatch(setLoading(false));
      cb();
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

export default { login, fetchUsers, fetchUser, updateUser };
