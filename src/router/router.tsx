import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import RouterErrorFallback from './RouterErrorFallback';
import GlavList from '../pages/GlavList/GlavList';
import Manage from '../pages/Manage/Manage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
            <GlavList />
        ),
        errorElement: <RouterErrorFallback />,
      },
      {
        path: '/work',
        element: (
            
          <Manage />
      ),
        errorElement: <RouterErrorFallback />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);
