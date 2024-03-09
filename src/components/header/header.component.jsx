import './header.css';
import { useState, useEffect } from 'react';
import useActiveRoute from '../../hooks/active-route/active-route.hook.jsx';
import useNavigateApp from '../../hooks/navigate-app/navigate-app.hook.jsx';
import Sidenav from './sidenav.component.jsx';


/**
 * Header Component
 */
function Header() {
  const navigate =  useNavigateApp();
  const activeRoute = useActiveRoute();
  const [ sidenavVisible, setSidenavVisible ] = useState(false);


  // ensure the sidenav is closed whenever the route changes
  useEffect(() => {
      setSidenavVisible(false);
  }, [ activeRoute ]);



  // event handler to toggle the sidenav visibility status
  const toggleSidenavVisibility = () => setSidenavVisible(!sidenavVisible);



  return (
    <header id="mainHeader">

      <img src="logo.png" alt="Little Lemon Logo" />

      <span className="flex-separator"></span>

      <nav>

        {/* Desktop Navigation */}
        <button className="btn" 
                onClick={() => navigate('')} 
                disabled={activeRoute === ''}>
          Home
        </button>
        <button className="btn" 
                onClick={() => navigate('about')} 
                disabled={activeRoute === 'about'}>
          About
        </button>
        <button className="btn" 
                onClick={() => navigate('menu')} 
                disabled={activeRoute === 'menu'}>
          Menu
        </button>
        <button className="btn" 
                onClick={() => navigate('reservations')} 
                disabled={activeRoute === 'reservations'}>
          Reservations
        </button>
        <button className="btn" 
                onClick={() => navigate('online-orders')} 
                disabled={activeRoute === 'online-orders'}>
          Order Online
        </button>
        <button className="btn" 
                onClick={() => navigate('auth')} 
                disabled={activeRoute === 'auth'}>
          Login
        </button>


        {/* Mobile Navigation */}
        <button className="icon-btn primary" 
                onClick={toggleSidenavVisibility}
                aria-label="Toggle Side Navigation">
          <span className="md-icon" aria-hidden="true">menu</span>
        </button>

      </nav>

      {/* Mobile Sidenav */}
      {sidenavVisible && (
        <Sidenav  activeRoute={activeRoute} 
                  toggleSidenavVisibility={toggleSidenavVisibility} />
      )}

    </header>
  )
}

export default Header;
