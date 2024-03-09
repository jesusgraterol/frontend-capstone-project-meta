import '../../stylesheets/app.css';
import Header from '../header/header.component.jsx';
import Nav from '../nav/nav.component.jsx';
import Main from '../main/main.component.jsx';
import Footer from '../footer/footer.component.jsx';


function App() {
  return (
    <>
    <span className='md-icon'>home</span>
    <a href='https://music.youtube.com/' target='_blank'>Im a link!</a>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default App;
