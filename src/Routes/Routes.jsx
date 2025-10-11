import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import AppsDetails from '../Pages/AppDetailes';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
       {
        path: '/appsDetails/:detailsId',
        Component: AppsDetails,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;