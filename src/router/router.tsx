import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import TaskPage from '../pages/TaskPage/TaskPage';
import RouterErrorFallback from './RouterErrorFallback';
import GlavList from '../pages/GlavList/GlavList';

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
            <TaskPage />
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
