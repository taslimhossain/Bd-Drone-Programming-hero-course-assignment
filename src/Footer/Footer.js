import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="footer-area bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

                    <div className="fs-2 fw-bold col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white">
                    <img src="https://bd-drone.web.app/images/dronelogo.png" className="me-2" alt="BD Drone"  width="40" />BD Drone
                    </div>

                    <ul className="nav col-md-4 justify-content-end">

                 
                        <li>
                            <Link to="#" className="fs-5 text-white"><i className="bi bi-facebook"></i></Link>
                        </li>
                        <li className="ms-3">
                            <Link to="#" className="fs-5 text-white"><i className="bi bi-twitter"></i></Link>
                        </li>
                        <li className="ms-3">
                            <Link to="#" className="fs-5 text-white"><i className="bi bi-youtube"></i></Link>
                        </li>
                        <li className="ms-3">
                            <Link to="#" className="fs-5 text-white"><i className="bi bi-google"></i></Link>
                        </li>
                   

                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
