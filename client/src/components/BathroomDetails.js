import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Reviews from './Reviews';

const BathroomDetails = ({ data, currentUser }) => {
  const [currentBathroom, setCurrentBathroom] = useState(data)
  const { id } = useParams();

  useEffect((currentBathroom) => {
    fetch("/bathrooms/" + id)
    .then(resp => resp.json())
    .then(data=> setCurrentBathroom(data))
  }, [])

  const bathroom = data.find((bathroom) => bathroom.id === parseInt(id));
  // const navigate = useNavigate();

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
