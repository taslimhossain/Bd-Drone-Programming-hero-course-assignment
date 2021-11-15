import React from 'react'

const TitleBar = ({title}) => {
    return (
        <section className="banner-area bg-primary pt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 fw-bold pt-5 text-center text-light text-uppercase">
                        {title && <h1> {title} </h1> }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TitleBar
