import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Modal, ModalBody } from 'reactstrap';

const ModalHeader = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 15px 0px 0px 0px;
  text-transform: uppercase;
  font-family: RedHat Bold;
`;

const ModalWrapper = ({ children, header, centered = true }) => (
  <Modal isOpen centered={centered} size="sm">
    <ModalHeader>{header}</ModalHeader>
    <ModalBody>{children}</ModalBody>
  </Modal>
);

export default withTheme(ModalWrapper);
