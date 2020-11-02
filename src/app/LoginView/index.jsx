import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import operations from '../../redux/operations';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginView = ({ login }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <Header />
      <Modal header="sign in">
        <form onSubmit={handleSubmit((data) => login(data))}>
          <Input label="Email" name="email" ref={register({ required: true })} errors={errors} />
          <Input
            label="Password"
            name="password"
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

export default connect(null, mapDispatchToProps)(LoginView);
