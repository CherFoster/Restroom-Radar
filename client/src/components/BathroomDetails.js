import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Reviews from './Reviews';

const BathroomDetails = ({ data }) => {
  const { id } = useParams();
  const bathroom = data.find((bathroom) => bathroom.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="blog-details">
      {!bathroom && <div>Loading...</div>}
      {bathroom && (
        <article>
          <h1>{bathroom.bathroom_name}</h1>
          <p>HAVE TO FIGURE OUT WHY I AM NOT GETTING BATHROOM INFO</p>
          <Reviews reviews={bathroom.reviews} />
        </article>
      )}
    </div>
  );
};

export default BathroomDetails;
