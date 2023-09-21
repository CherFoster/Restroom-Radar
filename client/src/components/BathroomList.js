import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BathroomList({ bathrooms }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch('/bathrooms/' + id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    });
  }

  const handleEdit = (id) => {
    fetch('/bathrooms/' + id,{
      method: 'PUT'
    }).then(() => {
      navigate('/bathrooms')
    })
  }

  return (
    <div className="bathroom-list">
      {bathrooms.map((bathroom) => (
        <div className="bathroom-preview" key={bathroom.id}>
          <Link to={`/bathrooms/${bathroom.id}`}>
            <h2>{bathroom.bathroom_name}</h2>
            {/* <img src={bathroom.image}/> */}
            <p>Address: {bathroom.street_num} {bathroom.street_name}</p>
            <p>City: {bathroom.city}</p>
            <p>Zip Code: {bathroom.zip_code}</p>
            <button onClick={() => handleEdit(bathroom.id)} className="btn-primary">Edit</button>
            <button onClick={() => handleDelete(bathroom.id)} className="btn-primary">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BathroomList;

