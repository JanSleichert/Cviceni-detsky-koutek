import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

export const CentersPage = () => {

    const [center, setCenter] = useState([])

    useEffect(()=>{
        const fetchCenters = async () =>{
          const response = await fetch('http://localhost:4000/api/centers')
          const data = await response.json()
          setCenter(data.data)
        }
        fetchCenters()
        }, [])

    return (
        <div className="body">
      <header>
       
        <h2>Pobočky</h2>
      </header>
      <main>
       
        <h3>Seznam poboček</h3>
    
        <ul>
            {center.map(center =>(
                <li key={center.id}>
                   <Link to={`/pobocky/${center.id}`}> <h4>{center.name}, {center.address}</h4></ Link>
                    
                </li>
            ))}
        </ul>
        
      <Outlet></Outlet>
      </main>
      <footer>
      
      </footer>
    </div>
    )
}