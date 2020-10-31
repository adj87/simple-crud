import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './utils/theme';
import routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ component, path, exact }) => (
            <Route component={component} path={path} exact={exact} />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
