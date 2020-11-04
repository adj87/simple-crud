import * as yup from 'yup';

const validationSchema = yup.object().shape({
  first_name: yup.string().required('required'),
  last_name: yup.string().required('required'),
  email: yup.string().required('required').email('email type'),
});

export default validationSchema;
