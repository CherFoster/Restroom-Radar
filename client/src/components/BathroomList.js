import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BathroomList({ bathrooms, handleDeleteBathroom, handleEditBathroom }) {
  const [allBathrooms, setAllBathrooms] = useState(bathrooms)
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch('/bathrooms/' + id, {
      method: 'DELETE'
    }).then(() => {
      handleDeleteBathroom(id)
      navigate('/');
    });
  }

  const handleEdit = (id) => {
    fetch('/bathrooms/' + id, {
      method: 'PATCH'
    }).then(() => {
      handleEditBathroom(id)
      navigate('/bathrooms');
    });
  }
  //  I think I am missing the fields for the edit? maybe send out to another component?
  

  useEffect(() => {
    fetch("/bathrooms")
    .then(resp => resp.json())
    .then(data=> setAllBathrooms(data))
  }, [bathrooms])

  return (
    <div className="bathroom-list">
      {allBathrooms.map((bathroom, i) => (
        <div className="bathroom-preview" key={i}>
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

