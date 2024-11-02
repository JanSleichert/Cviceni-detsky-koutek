import './style.css';
import {Link, Outlet} from "react-router-dom"

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Dětský koutek</h1>
      </header>
      <main>

        <nav className='menu'>
        <Link to = "/"> Úvod </Link>
        <span>|</span>
        <Link to = "/about"> O nás </Link>
        <span>|</span>
        <Link to = "/contact"> Kontakty </Link>
        <span>|</span>
        <Link to = "/pobocky"> Pobočky </Link>
        </nav>
      <Outlet></Outlet>

      </main>
      <footer>
        <p>Dětský koutek s.r.o. 2024</p>
      </footer>
    </div>
  );
};
