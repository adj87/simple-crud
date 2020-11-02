import Axios from 'axios';
import { setUser, setLoading, setData } from './actions';

const login = (credentials, history) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post('https://reqres.in/api/login', { ...credentials })
    .then(({ data }) => {
      const user = { email: credentials.email, token: data.token };
      dispatch(setLoading(false));
      dispatch(setUser(user));
      history.push('/home');
    })
    .catch(() => {
      dispatch(setLoading(false));
      // dispatch();
    });
};

const fetchUsers = () => (dispatch) => {
  dispatch(setLoading(true));
  Axios.get('https://reqres.in/api/users')
    .then(({ data }) => {
      dispatch(setLoading(false));
      dispatch(setData(data.data));
    })
    .catch(() => {
      dispatch(setLoading(false));
      // dispatch();
    });
};

const fetchUser = (id, cb) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.get(`https://reqres.in/api/users/${id}`)
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
  Axios.put(`https://reqres.in/api/users/${id}`, user)
    .then(({ data }) => {
      dispatch(setLoading(false));
      cb(data.data);
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

export default { login, fetchUsers, fetchUser, updateUser };
