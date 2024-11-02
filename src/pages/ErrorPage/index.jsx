import './style.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className="body">
      <header>
       
        <h2>Chyba</h2>
      </header>
      <main>
        <p className='text'>
        Ale ne! Tato stránka bohužel neexistuje.
        <nav className='menuError'>
        <Link to = "/">Zět na hlavní stránku</Link> 
        </nav>
       </p>
      </main>
      <footer>
      
      </footer>
    </div>
    )
}