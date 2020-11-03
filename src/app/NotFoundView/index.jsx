import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const Wrapper404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 20%;
  margin: auto;
`;

const Number = styled.span`
  font-size: 150px;
  font-family: RedHat Bold;
  color: white;
  animation: backInDown;
  animation-duration: 1s;
`;

const Text = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.palette.primary.dark};
  animation: backInUp;
  animation-duration: 1s;
  margin-bottom: 20px;
`;

const NotFound = ({ history }) => (
  <Wrapper404>
    <Number>404</Number>
    <Text>Not Found</Text>
    <Button color="secondary" onClick={() => history.goBack()}>
      Go back
    </Button>
  </Wrapper404>
);

export default withRouter(NotFound);
