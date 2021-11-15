import React from 'react'
import reviews from '../../Home/Review/review.json'

const Review = () => {

    return (
        <>
            <section className="review-area pt-5 bg-light">
                <div className="container">

                    <div className="row pb-4">
                        <div className="mx-auto text-center title-area w-50">
                            <h2 className="pb-2 fw-bold">Customers review</h2>
                            <p>We are always here to expand our helping hand with effective solutions when you need it.</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {
                            reviews.map(review => ( 
                                <div className="col-lg-4 col-md-4 mb-3" key={review.id} >
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{ review.messages }</p>
                                            <div className="d-flex align-items-center">
                                                <img src="images/review/user1.png" className="col-6 review-photo rounded-circle" alt= { review.name } />
                                                <div>
                                                    <h5 className="card-title"> { review.name } </h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        { review.designation }
                                                    </h6>
                                                    <p className="m-0 p-0"> <i class="bi bi-star-fill"></i> { review.rating } </p>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review
