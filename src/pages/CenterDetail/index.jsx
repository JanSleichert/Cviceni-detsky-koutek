import './style.css';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';



export const CenterDetail = () => {
    const [center, setCenter] = useState()
    const {id} = useParams();
    useEffect(()=>{
            const fetchCenters = async () =>{
          const response = await fetch('http://localhost:4000/api/centers/'+id)
          const data = await response.json()
          setCenter(data.data)
        }
        fetchCenters()
        }, [id])
    


        


    return (
        <div className="bodym">
 <h4>{center?.name}</h4>
 {center?.info} 
 
 <h5>Otevírací hodiny</h5>
 <ul>
    <li>
    ponělí: {center?.open.mon}
    </li>
    <li>
    úterý: {center?.open.tue}
    </li>
    <li>
    středa: {center?.open.wed}
    </li>
    <li>
    čtvrtek: {center?.open.thu}
    </li>
    <li>
    pátek: {center?.open.fri}
    </li>
    <li>
    sobota: {center?.open.sat=== null ? "Zavřeno" : center?.open.sat}
    </li>
    <li>
    neděle: {center?.open.sun === null ? "Zavřeno" : center?.open.sun}
    </li>
</ul>
    </div>
    )
}