import React from "react";
import BathroomList from "./BathroomList";
import useFetch from './useFetch';
// import Search from "./Search";

function Bathrooms() {
  const {error, isPending, data: bathrooms } = useFetch('/bathrooms')
 

  return(
      <div className="blog">
        {/* <Search/> */}
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { !isPending && <BathroomList bathrooms={bathrooms}/> } 
      </div>
  );
}

export default Bathrooms;