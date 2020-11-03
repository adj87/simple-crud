import React from 'react';
import styled, { withTheme } from 'styled-components';

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ withAnimation }) => {
    const animationType = Math.random() >= 0.5 ? 'bounceInLeft' : 'bounceInRight';
    return withAnimation ? animationType : '';
  }};
  animation-duration: 1s;
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
  font-size: 29px;
  transform: translate(25px, -25px);
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

const Wrapper = styled.div`
  padding-top: 20px;
`;

const Header = ({ withAnimation = true }) => {
  return (
    <Wrapper>
      <Centered withAnimation={withAnimation}>
        <Title>
          <Span primaryColor="extraLight">Simple </Span>
          <Span primaryColor="contrastText">CRUD</Span>
        </Title>
      </Centered>
      <Centered withAnimation={withAnimation}>
        <Subtitle>built with react</Subtitle>
      </Centered>
    </Wrapper>
  );
};

export default withTheme(React.memo(Header));
