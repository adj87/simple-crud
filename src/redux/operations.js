import Axios from 'axios';
import { setUser, setLoading } from './actions';

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

export default { login };
