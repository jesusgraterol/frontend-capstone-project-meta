import './not-found.css';
import useNavigateApp from "../../../hooks/navigate-app/navigate-app.hook.jsx";

function NotFound() {
  const navigate =  useNavigateApp();

  return (
    <section id="notFound">
      <article>
        <h2>Not Found</h2>
        <button className="btn primary raised" onClick={() => navigate('')}>Go Home</button>
      </article>
    </section>
  )
}

export default NotFound;
