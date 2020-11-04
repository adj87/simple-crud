import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, user, path, exact }) => {
  const token = localStorage.getItem('token') || user?.token;
  return (
    <Route
      path={path}
      exact={exact}
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
