import React from 'react'

const CircularProgress = () => {
    return (
        <div className="drone-loader">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default CircularProgress
