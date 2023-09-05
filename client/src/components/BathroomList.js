import React from 'react';
import { Link } from 'react-router-dom';

function BathroomList({ bathrooms }) {
  return (
    <div className="bathroom-list">
      {bathrooms.map((bathroom) => (
        <div className="bathroom-preview" key={bathroom.id}>
          <Link to={`/bathroom/${bathroom.id}`}>
            <h2>{bathroom.bathroom_name}</h2>
            {/* <img src={bathroom.image}/> */}
            <p>Address: {bathroom.street_num} {bathroom.street_name}</p>
            <p>City: {bathroom.city}</p>
            <p>Zip Code: {bathroom.zip_code}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BathroomList;