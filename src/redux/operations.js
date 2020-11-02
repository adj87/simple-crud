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

const fetchData = () => (dispatch) => {
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

export default { login, fetchData };
