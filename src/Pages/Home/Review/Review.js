import React, { useState } from 'react'
import { GetReview } from '../../../hooks/action';
import reviews from '../../Home/Review/review.json'

const Review = () => {
    const [rating, setRating] = useState(0);

    const reviews = GetReview();

    const StarRating = (star) => {
        return (
          <>
            {[...Array(parseInt(star))].map((star) => {
              return (
                <i className="bi bi-star-fill"></i>
              );
            })}
          </>
        );
      };

    return (
        <>
            <section className="review-area py-5 bg-light">
                <div className="container">

                    <div className="row pb-4">
                        <div className="mx-auto text-center title-area w-50">
                            <h2 className="pb-2 fw-bold">Customers review</h2>
                            <p>We are always here to expand our helping hand with effective solutions when you need it.</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {
                            reviews? reviews.map(review => ( 
                                <div className="col-lg-4 col-md-4 mb-3" key={review._id} >
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{ review.description }</p>
                                            <div className="d-flex align-items-center">
                                                <img src={ review.photo } className="col-6 review-photo rounded-circle" alt= { review.name } />
                                                <div>
                                                    <h5 className="card-title"> { review.name } </h5>
                                                    <p className="align-items-center d-flex m-0 p-0 text-primary"> <span className="fs-4 me-2">{ review.star }</span> { StarRating(review.star) } </p>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            )) : <p>Loading...</p>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review
