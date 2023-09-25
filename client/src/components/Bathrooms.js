import React from "react";
import BathroomList from "./BathroomList";
// import Search from "./Search";

function Bathrooms({data, handleDeleteBathroom}) {
  return(
      <div className="blog">
        {/* <Search/> */}
        {<BathroomList bathrooms={data} handleDeleteBathroom={handleDeleteBathroom}/>}
      </div>
  );
}

export default Bathrooms;
