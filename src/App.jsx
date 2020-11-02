import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import routes from './routes';
import store from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {routes.map(({ component, path, exact, authIsRequired }) => {
              if (authIsRequired) {
                return <ProtectedRoute component={component} path={path} exact={exact} />;
              }
              return <Route component={component} path={path} exact={exact} />;
            })}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
