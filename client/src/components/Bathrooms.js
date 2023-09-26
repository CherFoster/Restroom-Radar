import React from "react";
import BathroomList from "./BathroomList";
// import Search from "./Search";

function Bathrooms({data, handleDeleteBathroom, handleEditBathroom}) {
  return(
      <div className="blog">
        {/* <Search/> */}
        {<BathroomList bathrooms={data} handleDeleteBathroom={handleDeleteBathroom} handleEditBathroom={handleEditBathroom}/>}
      </div>
  );
}

export default Bathrooms;
