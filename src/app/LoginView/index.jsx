import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import operations from '../../redux/operations';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { defaultCredentials } from '../../constantsAndUtils';

const LoginView = ({ login, history, logout }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: defaultCredentials,
  });

  return (
    <>
      <Header onLogout={logout} />
      <Modal header="sign in" size="xs">
        <form onSubmit={handleSubmit((data) => login(data, history))}>
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

const LoginViewWithRouter = withRouter(LoginView);

export default connect(mapStateToProps, mapDispatchToProps)(LoginViewWithRouter);
