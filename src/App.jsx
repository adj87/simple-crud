import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import theme from './utils/theme';
import routes from './routes';

function App() {
  const data = [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
    },
    {
      id: 4,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
    },
    {
      id: 5,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
    },
    {
      id: 6,
      email: 'tracey.ramos@reqres.in',
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {routes.map(({ component, path }) => (
          <Route component={component} path={path} />
        ))}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
