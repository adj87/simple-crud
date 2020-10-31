import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.46);
  backdrop-filter: blur(14px);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredDiv = styled.div`
  background-color: white;
  width: 50%;
  height: 50%;
  border-radius: 5px;
`;

const Modal = ({ children }) => (
  <Background>
    <CenteredDiv>{children}</CenteredDiv>
  </Background>
);

export default Modal;
