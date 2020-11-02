import React from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginView = () => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <Header />
      <Modal header="sign in">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input label="User" name="user" ref={register({ required: true })} errors={errors} />
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

export default LoginView;
