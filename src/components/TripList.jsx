import './TripList.css';

import { useState } from "react";
import { useFetch } from '../hooks/useFetch';

function TripList() {
    // fetch full list once, then filter on the client
    const { data, isPending, error } = useFetch('/trips');
    const [locationFilter, setLocationFilter] = useState(null);

    const trips = Array.isArray(data?.trips) ? data.trips : [];
    const filteredTrips = locationFilter
        ? trips.filter(t => String(t.location).toLowerCase() === String(locationFilter).toLowerCase())
        : trips;

  return (
    <div className="trip-list">
      <h1 className="main-txt animate__animated animate__flash">
        <i>Trip List</i>
      </h1>
      {isPending && (
        <div className="loading animate__animated animate__heartBeat">
          <i>Loading Trips...</i>
        </div>
      )}
      {error && (
        <div className="error animate__animated animate__shakeX">
          <i>{error}</i>
        </div>
      )}
      {filteredTrips.length > 0 ? (
        <ul>
          {filteredTrips.map((trip) => (
            <li key={trip.id} className="animate__animated animate__bounce">
              <h2>
                <i>{trip.title}</i>
              </h2>
              <p>
                <i>{trip.price}</i>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        !isPending && <div className="no-results"><i>No trips found</i></div>
      )}
      <div className="filters">
        <button
          className="animate__animated animate__rubberBand"
          onClick={() => setLocationFilter(null)}
        >
          All Trips
        </button>
        <button
          className="animate__animated animate__rubberBand"
          onClick={() => setLocationFilter("USA")}
        >
          America Trips
        </button>
      </div>
    </div>
  );
}

export default TripList;