import React from 'react'

const Featured = () => {

    return (
        <div className="about-area py-5">
            <div className="container px-4 py-5" id="hanging-icons">

                <div className="row">
                    <div className="mx-auto text-center title-area w-50">
                        <h2 className="pb-2 fw-bold">Why choose us?</h2>
                        <p>We're about Quality and Trust.</p>
                    </div>
                </div>

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="align-items-center align-items-start col d-flex flex-column">
                        <div className="icon-square text-dark flex-shrink-0 me-3">
                            <i className="bi bi-award-fill fs-1 text-primary"></i>
                        </div>
                        <div className="text-center">
                            <h2>High Quality</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        </div>
                    </div>
                    <div className="align-items-center align-items-start col d-flex flex-column">
                        <div className="icon-square text-dark flex-shrink-0 me-3">
                        <i className="bi bi-check-circle-fill fs-1 text-primary"></i>
                        </div>
                        <div className="text-center">
                        <h2>The Bird’s Eye View</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        
                        </div>
                    </div>
                    <div className="align-items-center align-items-start col d-flex flex-column">
                        <div className="icon-square text-dark flex-shrink-0 me-3">
                        <i className="bi bi-diagram-3 fs-1 text-primary"></i>
                        </div>
                        <div className="text-center">
                        <h2>Photography</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
