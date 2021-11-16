import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from './../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <header className="header-top pt-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container">
                    <Link className="align-items-center d-flex fs-2 fw-bold navbar-brand text-white" to="/home"><img src="https://bd-drone.web.app/images/dronelogo.png" className="me-2" alt="BD Drone"  width="40" />BD Drone</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/explore" className="nav-link">Explore</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        {
                            user?.email ?
                            <>
                            <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                            <button type="button" onClick={logout} className="btn btn-link text-white">Logout</button>
                            </>
                            :
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        }
                        
                    </ul>
                    {
                        user?.email &&
                        <div className="align-items-center d-flex gap-2">
                            <i className="bi bi-person-circle fs-1"></i>
                            <span className="fs-3 fw-bold text-white">{ user?.displayName }</span> 
                        </div>
                    }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
