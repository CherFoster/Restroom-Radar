import React from "react";
import BathroomList from "./BathroomList";
import useFetch from './useFetch';

//where I want to have the Bathrooms shown... maybe the details of the bathrooms?
function Bathrooms() {
  const {error, isPending, data: bathrooms } = useFetch('http://127.0.0.1:5555/bathrooms')
 

  return(
      <div className="blog">
        <h2>NEED TO HAVE ALL BATHROOM CARDS LISTED HERE!</h2>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { bathrooms && <BathroomList bathrooms={bathrooms}/> } 
      </div>
  );
}

export default Bathrooms;