import React from 'react';
import { SyncLoader } from 'react-spinners';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';

const Background = styled.div`
  position: fixed;
  background: #dad6d68c;
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
      <SyncLoader sizeUnit="px" size={25} color={theme.palette.primary.dark} loading={loading} />
    </Background>
  );
};

const mapStateToProps = ({ loading }) => ({ loading });

const LoadingWithTheme = withTheme(Loading);

export default connect(mapStateToProps, null)(LoadingWithTheme);
