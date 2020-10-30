import React from 'react';
import styled, { withTheme } from 'styled-components';

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-family: RedHat Bold;
  font-size: 40px;

  color: ${({ primaryColor, theme }) => theme.palette.primary[primaryColor]};
`;

const Title = styled.p`
  transform: rotate(-4.52deg);
`;

const Subtitle = styled.span`
  font-family: RedHat Regular;
  font-size: 29px;
  transform: translate(25px, -25px);
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

const Header = () => (
  <>
    <Centered>
      <Title>
        <Span primaryColor="extraLight">Simple </Span>
        <Span primaryColor="contrastText">CRUD</Span>
      </Title>
    </Centered>
    <Centered>
      <Subtitle>built with react</Subtitle>
    </Centered>
  </>
);

export default withTheme(Header);
