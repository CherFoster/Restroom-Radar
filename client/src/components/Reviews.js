import React, { useState } from 'react';

function Reviews({ reviews }) {
  const [newReview, setNewReview] = useState({
    content: '',
    user_id: '', // You may need to get the user_id from your authentication system
    bathroom_id: '', // You should specify the bathroom_id when creating a review
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = () => {
    // Send a POST request to your backend API to create the review
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, e.g., show a success message
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
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
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;





// import React from 'react';

// function Reviews({ reviews }) {
//   return (
//     <div>
//       <h3>REVIEWS:</h3>
//       <button>Create a Review</button>
//       <ul>
//         {reviews.map((review) => (
//           <li key={review.id}>{review.content}</li>
//         ))}
//       </ul>
//       {/* <button>Delete</button>
//       <button>Edit</button> */}
//     </div>
//   );
// }

// export default Reviews;

// import React from 'react';
// import { useFormik } from 'formik';

// function Reviews({ reviews }) {
//   const handleDelete = (id) => {
//     // Add your delete logic here using the review id
//     console.log(`Deleting review with ID: ${id}`);
//   };

//   const handleEdit = (id) => {
//     // Add your edit logic here using the review id
//     console.log(`Editing review with ID: ${id}`);
//   };

//   const initialValues = {
//     reviewContent: '',
//   };

//   const onSubmit = (values, { resetForm }) => {
//     // Handle the submission of the review content here
//     console.log('Review submitted:', values.reviewContent);
//     resetForm();
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   return (
//     <div className="reviews">
//       <h3>REVIEWS:</h3>
//       <form className="review-form" onSubmit={formik.handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="reviewContent">Add a Review:</label>
//           <input
//             id="reviewContent"
//             name="reviewContent"
//             type="text"
//             className="form-control"
//             onChange={formik.handleChange}
//             value={formik.values.reviewContent}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//       <ul className="review-list">
//         {reviews.map((review) => (
//           <li key={review.id} className="review-item">
//             {review.content}
//             <button onClick={() => handleDelete(review.id)} className="btn btn-danger">Delete</button>
//             <button onClick={() => handleEdit(review.id)} className="btn btn-secondary">Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Reviews;

// {data.map((review) => (
//   <li key={review.id}>
//     <h4>{review.content}</h4>
//   </li>
// ))}