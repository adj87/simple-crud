import Axios from 'axios';
import { setUser, setLoading } from './actions';

const login = (credentials) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post('https://reqres.in/api/login', { ...credentials })
    .then(({ data }) => {
      dispatch(setLoading(false));
      dispatch(setUser({ email: credentials.email, token: data.token }));
    })
    .catch(() => {
      dispatch(setLoading(false));
      // dispatch();
    });
};

export default { login };
