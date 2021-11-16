import axios from 'axios';
import React from 'react'
import CircularProgress from '../../../components/CircularProgress';
import { GetDrones } from '../../../hooks/action';
import apiurl from '../../../hooks/apiUrl';

const ManageProduct = () => {

    const products = GetDrones();
    const url = apiurl();

    const removeProduct = ( id ) => {

        const confirm = window.confirm('Do you want to delete ?');
        if( confirm ){
            axios.delete(`${url}/product/${id}`)
            .then(function (res) {
                if( res.data.acknowledged ){
                    document.getElementById(`product_${id}`).remove();
                    alert('Your oder submited succeffully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }

    return (
        <>
            <h2>Manage Products</h2>
            <div className="container mt-3">
                {
                    products? products.map( ( product ) => (
                        <div className="row shadow-sm mb-3 p-2" key={product._id} id={`product_${product._id}`}>
                            <div className="col-lg-2 col-md-2">
                                <img src={product.photo} alt={product.title} className="img-thumbnail border-0" />
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <h4>{product.title}</h4>
                                <p className="card-text mb-0"> <span className="fw-bold">Range :</span> {product.range}</p>
                                <p className="card-text"><span className="fw-bold">Flight Time:</span> {product.flightime}</p>
                                <button className="btn btn-danger" onClick={ () => { removeProduct(product._id) } }>Remove</button>
                            </div>
                        </div>
                    ) ) : <CircularProgress />
                }
            </div>
        </>
    )
}

export default ManageProduct
