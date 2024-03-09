import './sidenav.css';
import PropTypes from 'prop-types';
import useNavigateApp from '../../hooks/navigate-app/navigate-app.hook';


/**
 * Sidenav Component
 * ...
 */
function Sidenav({ activeRoute, toggleSidenavVisibility }) {
  const navigate =  useNavigateApp();


  return (
    <aside className="sidenav-container">

      <section>
        
        <header>

          <h2>Menu</h2>

          <span className="flex-separator"></span> 
          
          <button className="icon-btn" onClick={toggleSidenavVisibility}>
            <span className="md-icon">close</span>
          </button>
          
        </header>

        <ul>
          <li>
            <button className="btn" 
                    onClick={() => navigate('')} 
                    disabled={activeRoute === ''}>
              <span className="md-icon" aria-hidden="true">home</span>
              Home
            </button>
          </li>
          <li>
            <button className="btn" 
                    onClick={() => navigate('about')} 
                    disabled={activeRoute === 'about'}>
              <span className="md-icon" aria-hidden="true">store</span>
              About
            </button>
          </li>
          <li>
            <button className="btn" 
                    onClick={() => navigate('menu')} 
                    disabled={activeRoute === 'menu'}>
              <span className="md-icon" aria-hidden="true">restaurant_menu</span>
              Menu
            </button>
          </li>
          <li>
            <button className="btn" 
                    onClick={() => navigate('reservations')} 
                    disabled={activeRoute === 'reservations'}>
              <span className="md-icon" aria-hidden="true">book_online</span>
              Reservations
            </button>
          </li>
          <li>
            <button className="btn" 
                    onClick={() => navigate('online-orders')} 
                    disabled={activeRoute === 'online-orders'}>
              <span className="md-icon" aria-hidden="true">shopping_cart</span>
              Order Online
            </button>
          </li>
          <li>
            <button className="btn" 
                    onClick={() => navigate('auth')} 
                    disabled={activeRoute === 'auth'}>
              <span className="md-icon" aria-hidden="true">login</span>
              Login
            </button>
          </li>
        </ul>

      </section>
      
    </aside>
  );
}
Sidenav.propTypes = {
  activeRoute: PropTypes.string.isRequired,
  toggleSidenavVisibility: PropTypes.func.isRequired,
}



/**
 * Module Exports
 */
export default Sidenav;