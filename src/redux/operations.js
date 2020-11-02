import Axios from 'axios';
import { setUser } from './actions';

const login = ({ email, password }) => (dispatch) => {
  // 'https://reqres.in/api/login?email=<email>&password=<password>';
  Axios.post(
    `https://reqres.in/api/login?username=<${email}>&password=<${password}>&email=<${email}>`,
  ).then((data) => {
    dispatch(setUser(data));
  });
};

export default { login };
