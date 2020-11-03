import React from 'react';
import styled, { withTheme } from 'styled-components';
import { device } from '../constantsAndUtils';

const Background = styled.div`
  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const CenteredDiv = styled.div`
  animation: backInDown;
  animation-duration: 0.5s;
  background-color: white;
  width: 20%;
  height: auto;
  border-radius: 20px;
  padding: 15px 20px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);

  width: 100%;
  margin: 0.5rem;
  @media ${device.deviceXs} {
    width: ${({ size }) => (size === 'xs' ? '280px' : '350px')};
  }
`;

const Header = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0px 0px 20px 0px;
  text-transform: uppercase;
  font-family: RedHat Bold;
`;

const Modal = ({ children, header, size = 'md' }) => (
  <Background>
    <CenteredDiv size={size}>
      <Header>{header}</Header>
      {children}
    </CenteredDiv>
  </Background>
);

export default withTheme(Modal);
