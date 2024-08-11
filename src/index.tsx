import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './components/App';
import { AuthBasePage, Login, Register } from './pages/Authentication';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import { authHome, authLogin } from './helpers/routeLoader';
import { Provider } from 'react-redux';
import store from './store';
import Logout from './pages/Logout';

const router = createBrowserRouter([
  {
    element: <AuthBasePage />,
    loader: authLogin,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    loader: authHome,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/transactions',
        element: <Dashboard />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'!) as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
