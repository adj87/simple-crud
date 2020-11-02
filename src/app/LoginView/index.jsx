import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import operations from '../../redux/operations';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../Loading';

const LoginView = ({ login, loading }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { email: 'eve.holt@reqres.in', password: 'cityslicka' },
  });
  return (
    <>
      <Loading loading={loading} />
      <Header />
      <Modal header="sign in">
        <form onSubmit={handleSubmit((data) => login(data))}>
          <Input label="Email" name="email" ref={register({ required: true })} errors={errors} />
          <Input
            label="Password"
            name="password"
            type="password"
            ref={register({ required: true })}
            errors={errors}
          />
          <Button type="submit">Sign in</Button>
        </form>
      </Modal>
    </>
  );
};

const mapDispatchToProps = { ...operations };
const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
