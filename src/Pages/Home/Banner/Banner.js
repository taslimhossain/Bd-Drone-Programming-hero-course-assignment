import React from 'react'

const Banner = () => {
    return (
        <section className="banner-area bg-primary pt-5">
            <div className="container py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 ltx-drone">
                    <img src="images/d-1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h3 className="text-white fw-normal">Qadron Spark Controller Combo</h3>
                    <h1 className="display-5 fw-bold lh-1 mb-3 my-3 text-white lh-sm">The Ultraportable <br/> Drone for the Best Video</h1>
                    <p className="lead text-light">The ultraportable Copter features high-end flight performance and functionality for limitless exploration</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-outline-light btn-lg px-4 mt-5">View products</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
