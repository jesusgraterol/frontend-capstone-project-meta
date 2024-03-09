import './home.css';
import { Link } from 'react-router-dom';
import useNavigateApp from '../../../hooks/navigate-app/navigate-app.hook.jsx';



const SPECIALS = [
  { 
    img: 'img/restaurant/02.jpg', 
    name: 'Greek Salad', 
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.', 
    price: '$12.99' 
  },
  { 
    img: 'img/restaurant/03.jpg', 
    name: 'Bruschetta', 
    description: 'Our Bruschetta is made from grilled bread that has been smeared with fresh garlic and seasoned with sal, pepper and olive oil.', 
    price: '$5.99' 
  },
  { 
    img: 'img/restaurant/04.jpg', 
    name: 'Lemon Dessert', 
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', 
    price: '$5.00' 
  },
];


const TESTIMONIALS = [
  { avatar: 'img/testimonials/01.jpg', name: 'John Sung', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."' },
  { avatar: 'img/testimonials/02.jpg', name: 'Sarah Rock', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."' },
  { avatar: 'img/testimonials/03.jpg', name: 'Joselyn Black', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."' },
  { avatar: 'img/testimonials/04.jpg', name: 'Eduardo Gimenez', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."' },
]


function Home() {
  const navigate = useNavigateApp();

  return (
    <section id="homeSection">

      {/* Hero */}
      <div className="hero">
        <span className="home-flex-separator"></span>
        <section className="content">
          {/* Info */}
          <div className="hero-info">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="btn accent" onClick={() => navigate('reservations')}>Reserve a Table</button>
          </div>

          <span className="home-flex-separator"></span>

          {/* Image */}
          <div className="hero-img">
            <img src="img/restaurant/01.jpg" alt="A delicious dish being served" />
          </div>
        </section>
        <span className="home-flex-separator"></span>
      </div>




      {/* Specials */}
      <div className="specials">
        <span className="home-flex-separator"></span>
        <section className="content">

          <header>
            <h2>Specials</h2>

            <span className="flex-separator"></span>

            <button className="btn accent" onClick={() => navigate('menu')}>Online Menu</button>
          </header>
          
          <div className="grid-container">

            {SPECIALS.map((special, index) => (
                <article key={index}>

                  <img src={special.img} alt={special.name} />
    
                  <div className="special-content">
                    <header>
                      <h5>{special.name}</h5>
                      <span className="flex-separator"></span>
                      <p>{special.price}</p>
                    </header>
                    <p>{special.description}</p>

                    
                    <Link className="anchor" to="online-orders">Order a delivery <span className="md-icon">two_wheeler</span></Link>
                  </div>
                
                </article>
            ))}

          </div>

        </section>
        <span className="home-flex-separator"></span>
      </div>




      {/* Testimonials */}
      <div className="testimonials">
        <span className="home-flex-separator"></span>

        <section className="content">

          <h2>Testimonials</h2>

          <div className="grid-container">
              {TESTIMONIALS.map((record, index) => (
                <article key={index}>
                  <img src={record.avatar} alt={record.name}/>
                  <h5>{record.name}</h5>
                  <p>{record.content}</p>
                </article>
              ))}
          </div>

        </section>

        <span className="home-flex-separator"></span>
      </div>




      {/* About */}
      <div className="about">
        <span className="home-flex-separator"></span>
        <section className="content">
          {/* Info */}
          <div className="about-info">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus mollitia expedita, at nam laudantium ea temporibus tempora aliquid assumenda sequi eum saepe vero, aperiam ipsam, fugiat neque explicabo ipsa aut!</p>
          </div>

          <span className="home-flex-separator"></span>

          {/* Image */}
          <div className="about-img">
            <img src="img/restaurant/05.jpg" alt="The chefs discussing best practices" />
          </div>
        </section>
        <span className="home-flex-separator"></span>
      </div>

    </section>
  )
}

export default Home;
