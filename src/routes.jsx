import React from 'react';
import ListView from './app/ListView';
import LoginView from './app/LoginView';
import EditView from './app/EditView';

const routes = [
  { path: '/login', component: LoginView },
  { path: ['/', '/home'], component: ListView, exact: true },
  { path: ['/', '/edit'], component: EditView, exact: true },
  { path: '*', component: () => <div>404</div> },
];

export default routes;
