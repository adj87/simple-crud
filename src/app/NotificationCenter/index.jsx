import React from 'react';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import operations from '../../redux/operations';

const NotificationCenterBackground = styled.div`
  position: fixed;
  top: 50px;
  right: 15px;
  z-index: 1051;
`;

const Cross = styled.span`
  cursor: pointer;
  color: white;
  &:after {
    content: 'X';
  }
`;
const Notification = styled.div`
  min-width: 250px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  animation: fadeInLeftBig;
  animation-duration: 1s;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return theme.palette.success;
      case 'error':
        return theme.palette.error;

      default:
        return theme.palette.success;
    }
  }};
`;

const NotificationCenter = ({
  notifications = [
    { type: 'success', message: 'Biennnnnn' },
    { type: 'error', message: 'Biennnnnn' },
  ],
}) => {
  return (
    <NotificationCenterBackground>
      {notifications.map((el) => (
        <Notification type={el.type}>
          <span>{el.message}</span>
          <Cross />
        </Notification>
      ))}
    </NotificationCenterBackground>
  );
};

const mapDispatchToProps = { ...operations };
const mapStateToProps = (state) => state;

const NotificationCenterWithTheme = withTheme(NotificationCenter);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenterWithTheme);
