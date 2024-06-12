import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TestAbstractFactory } from './components/test-abstract-factory/index.tsx';
import { TestFactory } from './components/test-factory/index.tsx';
import { TestSingleton } from './components/test-singleton/index.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/factory',
        element: <TestFactory />,
      },
      {
        path: '/abstract-factory',
        element: <TestAbstractFactory />,
      },
      {
        path: '/singleton',
        element: <TestSingleton />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
