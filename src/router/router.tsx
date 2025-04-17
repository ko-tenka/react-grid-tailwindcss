import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

// import RouterErrorFallback from './RouterErrorFallback';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);
