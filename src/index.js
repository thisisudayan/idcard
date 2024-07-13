import React from 'react';
import * as ReactDOM from "react-dom/client";
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './features/dashboard/dashboard';
import App from './App';
import Theme1 from './features/themes/theme1';
import Theme2 from './features/themes/theme2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/download/1",
    element: <Theme1 />
  },
  {
    path: "/download/2",
    element: < Theme2/>
  },
  {
    path: "/dashboard/:id",
    element: <Dashboard />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);