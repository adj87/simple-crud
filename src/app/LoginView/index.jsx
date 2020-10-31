import React from 'react';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginView = () => (
  <>
    <Header />
    <Modal header="sign in">
      <Input label="User" value="yeah" />
      <Input label="Password" value="yeah" />
      <Button onClick={() => console.log('ads')}>Sign in</Button>
    </Modal>
  </>
);

export default LoginView;
