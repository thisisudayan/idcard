import React from 'react';
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
import App from './App';
import Theme from './features/themes/theme';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/download",
    element: <Theme/>
  },
  {
    path:"/dashboard/:id",
    element: <Dashboard/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);