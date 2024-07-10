import React from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './features/dashboard/dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

const container = document.getElementById('root');
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);