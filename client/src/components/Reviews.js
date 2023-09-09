import React, {useEfect, useState}  from 'react'
import useFetch from './useFetch'
 

function Reviews() {
    useFetch()
  return (
    <div>
        <h3>REVIEWS:</h3>
        <p>I just want the list of reviews to show here. Need to see full CRUD action on each one!</p>
    </div>
  )
}

export default Reviews