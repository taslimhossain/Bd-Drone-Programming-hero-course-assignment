import axios from 'axios';
import React from 'react'
import CircularProgress from '../../../components/CircularProgress';
import { GetOrder } from '../../../hooks/action';
import apiurl from '../../../hooks/apiUrl';
import useAuth from '../../../hooks/useAuth';

const MyOrderDashboard = () => {

    const {user} = useAuth();
    const orders = GetOrder(user.email);
    const url = apiurl();
    const removeOrder = ( id ) => {

        const confirm = window.confirm('Do you want to delete ?');
        if( confirm ){
            axios.delete(`${url}/order/${id}`)
            .then(function (res) {
                if( res.data.acknowledged ){
                    document.getElementById(`order_${id}`).remove();
                    alert('Order has been delete successfully')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }

    return (
        <>
            <h2>My Orders</h2>
            <div className="container mt-3">
                {
                    orders? orders.map( ( order ) => (
                        <div className="row shadow-sm mb-3 p-2" key={order._id} id={`order_${order._id}`}>
                            <div className="col-lg-2 col-md-2">
                                <img src={order?.product?.photo} alt={order?.product?.title} className="img-thumbnail border-0" />
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <h5>Product:</h5>
                                <p className="card-text mb-0"> <span className="fw-bold">Name :</span> {order?.product?.title}</p>
                                <p className="card-text mb-0"> <span className="fw-bold">Price :</span> {order?.product?.price}$</p>

                                <h5 className="my-2">Order status: <span className="text-primary">{order?.status}</span> </h5>
                                <button className="btn btn-danger mt-2" onClick={ () => { removeOrder(order._id) } }>Remove</button>
                            </div>
                        </div>
                    ) ) : <CircularProgress />
                }
            </div>
        </>
    )
}

export default MyOrderDashboard
