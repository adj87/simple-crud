import React from 'react';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';

const LoginView = () => (
  <>
    <Header />
    <Modal header="sign in">
      <Input label="User" value="yeah" />
      <Input label="Password" value="yeah" />
    </Modal>
  </>
);

export default LoginView;
