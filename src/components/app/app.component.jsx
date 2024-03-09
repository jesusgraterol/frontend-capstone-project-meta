import '../../stylesheets/app.css';
import { Outlet } from 'react-router-dom';
import Header from '../header/header.component.jsx';
import Footer from '../footer/footer.component.jsx';


function App() {
  return (
    <div  id="appContainer">

      <Header />

      <main>

        <Outlet />

      </main>

      <Footer />

    </div>
  )
}

export default App;
