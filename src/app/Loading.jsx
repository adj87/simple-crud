import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';

const Background = styled.div`
  position: fixed;
  background: #00000047;
  display: ${({ display }) => display};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5000;
`;

const Loading = ({ loading, theme }) => {
  const display = loading ? 'flex' : 'none';

  return (
    <Background display={display}>
      <PacmanLoader
        sizeUnit="px"
        size={40}
        color={theme.palette.secondary.dark}
        loading={loading}
      />
    </Background>
  );
};

const mapStateToProps = ({ loading }) => ({ loading });

const LoadingWithTheme = withTheme(Loading);

export default connect(mapStateToProps, null)(LoadingWithTheme);
