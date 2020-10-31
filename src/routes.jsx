import React from 'react';
import ListView from './app/ListView/ListView';

const routes = [
  { path: '/login', component: () => <div>Login</div> },
  { path: ['/', '/home'], component: ListView, exact: true },
  { path: '*', component: () => <div>404</div> },
];

export default routes;
