import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/app/app.component.jsx';
import Home from './components/pages/home/home.component.jsx';
import About from './components/pages/about/about.component.jsx';
import Menu from './components/pages/menu/menu.component.jsx';
import Reservations from './components/pages/reservations/reservations.component.jsx';
import OnlineOrders from './components/pages/online-orders/online-orders.component.jsx';
import Auth from './components/pages/auth/auth.component.jsx';
import NotFound from './components/pages/not-found/not-found.component';

/**
 * Router Component
 * ...
 */
function Router() {
  const router = createBrowserRouter([
    {
      path: '/frontend-capstone-project-meta/',
      element: <App />,
      children: [
        { index: true, element: <Home />, },
        { path: 'about', element: <About /> },
        { path: 'menu', element: <Menu /> },
        { path: 'reservations', element: <Reservations /> },
        { path: 'online-orders', element: <OnlineOrders /> },
        { path: 'auth', element: <Auth /> },
      ],
      errorElement: <NotFound />,
    }
  ]);

  return <RouterProvider router={router} />;
}




/**
 * Module Exports
 */
export default Router;