import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    //console.log(product)
    return (
        <div className="card shadow">
            <img src={product.photo} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h2 className="fw-bold">{product.title}</h2>
                <p className="card-text mb-0"> <span className="fw-bold">Range :</span> {product.range}</p>
                <p className="card-text"><span className="fw-bold">Flight Time:</span> {product.flightime}</p>
                <p className="card-text">{product.description}</p>
                <div className="align-items-center d-flex gap-3">
                    <p className="fs-2 fw-bold mb-0 text-primary">{product.price}$</p>
                    <Link to={`checkout/${product._id}`} className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
