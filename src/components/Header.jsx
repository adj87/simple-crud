import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';

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

const TitleAndSubtitleWrapper = styled.div`
  cursor: default;
  padding-top: 20px;
`;

const SignOut = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-transform: uppercase;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.extraLight};
  }
`;

const Header = ({ withAnimation = true, onLogout, history }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <TitleAndSubtitleWrapper>
            <Centered withAnimation={withAnimation}>
              <Title>
                <Span primaryColor="extraLight">Simple </Span>
                <Span primaryColor="contrastText">CRUD</Span>
              </Title>
            </Centered>
            <Centered withAnimation={withAnimation}>
              <Subtitle>built with react</Subtitle>
            </Centered>
          </TitleAndSubtitleWrapper>
        </Col>
        <Col xs={2} align="center">
          <SignOut onClick={() => onLogout(history)}>Sign Out</SignOut>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(withTheme(React.memo(Header)));
// use react memo to avoid re-render the component with the css animation when deleting
