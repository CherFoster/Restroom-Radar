import React, { useState } from 'react';


function Reviews({ reviews, bathroom, user }) {

  let initialState= {content: '' , 
  bathroom_id: bathroom.id,
  user_id: user.id}

  const [newReview, setNewReview] = useState(initialState);

   const [allReviews, setAllReviews] = useState(reviews)

  
  function updatedReviews(str){
    let updateReviews = [...allReviews, str]
    setAllReviews(updateReviews)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = () => {
    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        updatedReviews(data)
        setNewReview(initialState)
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div>
      <h3>REVIEWS:</h3>
      <textarea
        name="content"
        value={newReview.content}
        onChange={handleInputChange}
        placeholder="Write your review here"
      ></textarea>
      <button onClick={handleSubmit} className='btn-primary'>
        Create a Review
      </button>
      <ul>
        {allReviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;



