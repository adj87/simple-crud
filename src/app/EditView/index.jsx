import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ButtonsWrapper = styled.div`
  display: flex;
`;

const EditView = () => (
  <>
    <Header />
    <Modal header="Edit user">
      <Input label="User Name" value="yeah" />
      <Input label="Sur Name" value="yeah" />
      <Input label="Email" value="yeah" />
      <ButtonsWrapper>
        <Button onClick={() => console.log('ads')}>Cancel</Button>
        <Button color="secondary" onClick={() => console.log('ads')}>
          Edit
        </Button>
      </ButtonsWrapper>
    </Modal>
  </>
);

export default EditView;
