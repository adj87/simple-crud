import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './utils/theme';
import routes from './routes';
import store from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';
import Loading from './app/Loading';
import NotificationCenter from './app/NotificationCenter';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {routes.map(({ component, path, exact, authIsRequired }) => {
              if (authIsRequired) {
                return (
                  <ProtectedRoute component={component} path={path} exact={exact} key={path} />
                );
              }
              return <Route component={component} path={path} exact={exact} key={path} />;
            })}
          </Switch>
          <Loading />
          <NotificationCenter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
