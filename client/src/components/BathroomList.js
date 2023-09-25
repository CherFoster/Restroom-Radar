import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditBathroom from './EditBathroom';

function BathroomList({ bathrooms, handleDeleteBathroom }) {
  const [bathroomEdit, setBathroomEdit] = useState(false)
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch('/bathrooms/' + id, {
      method: 'DELETE'
    }).then(() => {
      handleDeleteBathroom(id)
      navigate('/');
    });
  }

  const handleEdit = () => {
    <Link to={
      <EditBathroom/>}/>
  }

  return (
    <div className="bathroom-list">
      {bathrooms.map((bathroom, i) => (
        <div className="bathroom-preview" key={i}>
          <Link to={`/bathrooms/${bathroom.id}`}>
            <h2>{bathroom.bathroom_name}</h2>
            {/* <img src={bathroom.image}/> */}
            <p>Address: {bathroom.street_num} {bathroom.street_name}</p>
            <p>City: {bathroom.city}</p>
            <p>Zip Code: {bathroom.zip_code}</p>
            <button onClick={handleEdit()} className="btn-primary">Edit</button>
            <button onClick={() => handleDelete(bathroom.id)} className="btn-primary">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BathroomList;

