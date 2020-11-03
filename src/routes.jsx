import ListView from './app/ListView';
import LoginView from './app/LoginView';
import EditView from './app/EditView';
import NotFound from './app/NotFoundView';

const routes = [
  { path: '/login', component: LoginView },
  { path: ['/', '/home'], component: ListView, exact: true, authIsRequired: true },
  {
    path: ['/edit/:id'],
    component: EditView,
    exact: true,
    authIsRequired: true,
  },
  { path: '*', component: NotFound },
];

export default routes;
