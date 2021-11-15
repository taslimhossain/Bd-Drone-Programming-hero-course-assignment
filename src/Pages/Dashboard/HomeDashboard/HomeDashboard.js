import React from 'react'
import useAuth from '../../../hooks/useAuth'

const HomeDashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Hello <span className="text-primary fw-bold">{user?.displayName}</span>, Welcome to BD Drone.</h1>
        </div>
    )
}

export default HomeDashboard
