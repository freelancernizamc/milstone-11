import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Module66 from './components/Module66';
import Home from './components/Home';
import Module67 from './components/Module67';
import Module68 from './components/Module68';
import Module69 from './components/Module69';
import Module70 from './components/Module70';
import Module71 from './components/Module71';
import Module72 from './components/Module72';
import Module73 from './components/Module73';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/module66',
        element: <Module66 />
      },
      {
        path: '/module67',
        element: <Module67 />
      },
      {
        path: '/module68',
        element: <Module68 />
      },
      {
        path: '/module69',
        element: <Module69 />
      },
      {
        path: '/module70',
        element: <Module70 />
      },
      {
        path: '/module71',
        element: <Module71 />
      },
      {
        path: '/module72',
        element: <Module72 />
      },
      {
        path: '/module73',
        element: <Module73 />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </React.StrictMode>
);