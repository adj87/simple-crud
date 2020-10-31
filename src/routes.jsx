import React from 'react';
import ListView from './app/ListView/ListView';

const routes = [
  { path: '/', component: ListView },
  { path: '/login', component: () => <div>Login</div> },
];

export default routes;
