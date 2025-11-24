// style 
import  './TripList.css';

import { useState, useEffect } from "react";

function TripList() {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
         fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(data => setTrips(data));
    }, []);
    console.log(trips);
   

  return (
    <div className='trip-list'>
        <h1 className='main-txt animate__animated animate__flash'><i>Trip List</i></h1>
        <ul>
            {trips.map(trip => (
                <li key={trip.id} className='animate__animated animate__bounce'>
                    <h2><i>{trip.title}</i></h2>
                    <p><i>{trip.price}</i></p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TripList