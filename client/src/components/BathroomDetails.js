import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';

const BathroomDetails = ({ data, currentUser }) => {
  // const [currentBathroom, setCurrentBathroom] = useState({})
  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();

  //to find and store a specific bathroom where the id matches
  const bathroom = data.find((bathroom) => bathroom.id === parseInt(id));
  console.log(id)

  // useEffect(() => {
  //   fetch("/bathrooms/")
  //   .then(resp => resp.json())
  //   .then(data=> setCurrentBathroom(data))
  // }, [])

  console.log(bathroom)

  return (
    <div className="blog-details">
      {!bathroom && <div>Loading...</div>}
      {bathroom && (
        <article>
          <h1>{bathroom.bathroom_name}</h1>
          <p>{bathroom.street_name}</p>
          <p>{bathroom.city} {bathroom.zip_code}</p>
          <hr/>
          <Reviews reviews={bathroom.reviews} bathroom={bathroom} user={currentUser}/>
        </article>
      )}
    </div>
  );
};

export default BathroomDetails;
