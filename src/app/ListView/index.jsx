import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import List from './List';
import operations from '../../redux/operations';

const ListView = ({ fetchData, data, history }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data && <List data={data} history={history} />}
    </>
  );
};

const mapDispatchToProps = { ...operations };
const mapStateToProps = (state) => ({ ...state });

const LoginViewWithRouter = withRouter(ListView);

export default connect(mapStateToProps, mapDispatchToProps)(LoginViewWithRouter);
