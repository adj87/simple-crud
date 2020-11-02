import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, user, path, exact }) => (
  <Route
    path={path}
    exact={exact}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(props) => (user ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
