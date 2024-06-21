import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/review.css'
import AuthDetails from './Authdetails';


function AddReviewForm() {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const navigate= useNavigate();
  let {id}=useParams();
  console.log(id)
  const addReviewToDatabase =async (userId,rating, description) => {
    try {
      const reviewRef = collection(db, `brewery/${id}/review`);
      await addDoc(reviewRef, {
        userId: userId,
        rating: rating || 0,
        description: description,
      });
      console.log('Review added successfully');
      navigate('/search');
    } catch (error) {
      console.error('Error adding review: ', error);
    }
  };
  

  const handleSubmit = (reviewData) => {
    reviewData.preventDefault();
   // Store the review in Firebase
   
  
     const userId = auth.currentUser.uid;
     console.log(rating,description,userId)
    if (userId) {
      addReviewToDatabase(userId,rating, description);
    } else {
      console.log('User not logged in');
     
    }
  };

  return (
    <form onSubmit={handleSubmit} className='brewery-search-container' >
      <h2>Add Review</h2>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Review</button>
      <AuthDetails/>
    </form>
  );
}

export default AddReviewForm;
