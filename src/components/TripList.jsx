// style 
import  './TripList.css';

import { useState } from "react";
import { useFetch,  } from '../hooks/useFetch';

function TripList() {
    // const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState('/trips');
    const { data: trips, isPending, error } = useFetch(url) ;
    console.log(trips);

    // const fetchTrips = useCallback(async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setTrips(data);
    // }, [url]);
    // useEffect(() => {
    //     fetchTrips();
    // }, [fetchTrips]);
    
   

  return (
    <div className='trip-list'>
        <h1 className='main-txt animate__animated animate__flash'><i>Trip List</i></h1>
        {isPending && <div className='loading animate__animated animate__heartBeat'><i>Loading Trips...</i></div>}
        {error && <div className='error animate__animated animate__shakeX'><i>{error}</i></div>}
        <ul>
            {trips && trips.map(trip => (
                <li key={trip.id} className='animate__animated animate__bounce'>
                    <h2><i>{trip.title}</i></h2>
                    <p><i>{trip.price}</i></p>
                </li>
            ))}
        </ul>
        <div className='filters'>
            <button className='animate__animated animate__rubberBand' onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            <button className='animate__animated animate__rubberBand' onClick={() => setUrl('http://localhost:3000/trips?location=USA')}>America Trips</button>
        </div>
    </div>
  )
}

    export default TripList