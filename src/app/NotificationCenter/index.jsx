import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import operations from '../../redux/operations';

const NotificationCenterBackground = styled.div`
  position: fixed;
  top: 50px;
  right: 15px;
`;

const Notification = styled.div`
  width: 50px;
  padding: 10px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return 'green';
      case 'info':
        return 'green';

      default:
        break;
    }
  }};
`;

const NotificationCenter = ({ notifications }) => {
  return (
    <NotificationCenterBackground>
      {notifications.map(() => (
        <Notification type="success" />
      ))}
    </NotificationCenterBackground>
  );
};

const mapDispatchToProps = { ...operations };
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCenter);
