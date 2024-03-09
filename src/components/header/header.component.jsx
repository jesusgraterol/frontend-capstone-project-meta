import './header.css';
import useActiveRoute from '../../hooks/active-route/active-route.hook';
import useNavigateApp from '../../hooks/navigate-app/navigate-app.hook';


/**
 * Header Component
 */
function Header() {
  const navigate =  useNavigateApp();
  const activeRoute = useActiveRoute();



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
                /* onClick={toggleSidenavVisibility}  */
                aria-label="Toggle Side Navigation">
          <span className="md-icon" aria-hidden="true">menu</span>
        </button>

      </nav>

    </header>
  )
}

export default Header;
