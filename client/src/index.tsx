import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NoPage from './pages/NoPage';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/common';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: 'add/product',
        element: <AddProduct />,
      },
      {
        path: 'edit/product/:productId',
        element: <EditProduct />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
