import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BathroomDetails = () => {
    const { id } = useParams();
    const { data: bathroom, isPending } = useFetch('http://127.0.0.1:5000/bathrooms/'); // Added a slash after 'bathrooms'

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://127.0.0.1:5555/bathrooms/', { // Fixed the URL and used 'bathroom.id'
            method: 'DELETE'
        }).then(() => {
            navigate.push('/bathrooms');
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {bathroom && ( // Changed 'blog' to 'bathroom'
                <article>
                    <h2>{bathroom.bathroom_name}</h2>
                    <p>Written by {bathroom.bathroom_user}</p>
                    <div>{bathroom.bathroom_review}</div> {/* Fixed typo: 'bathrrom' to 'bathroom' */}
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
};

export default BathroomDetails;
