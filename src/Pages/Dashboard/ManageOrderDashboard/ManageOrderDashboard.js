import axios from 'axios';
import React from 'react'
import CircularProgress from '../../../components/CircularProgress';
import { GetOrder } from '../../../hooks/action';
import apiurl from '../../../hooks/apiUrl';

const ManageOrderDashboard = () => {

    const orders = GetOrder();
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

    const updateStatus = ( orderId, orderStatus ) => {
        console.log(orderId, orderStatus);
        axios.put(`${url}/order/${orderId}`, {'status' : orderStatus })
        .then(function (res) {
            
            if( res.data.acknowledged ){
                window.location.reload()
                alert('Order status has been updated.')
            }

        })
        .catch(function (error) {
            console.log(error);
        }); 

    }

    return (
        <>
            <h2>Manage Orders</h2>
            <div className="container mt-3">
                {
                    orders? orders.map( ( order ) => (
                        <div className="row shadow-sm mb-3 p-2" key={order._id} id={`order_${order._id}`}>
                            <div className="col-lg-2 col-md-2">
                                <img src={order?.product?.photo} alt={order?.product?.title} className="img-thumbnail border-0" />
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <h5>Cusromer:</h5>
                                <p className="card-text mb-0"> <span className="fw-bold">Name :</span> {order.firstname}</p>
                                <p className="card-text mb-0">
                                     
                                     <span className="fw-bold">Email :</span> {order?.email}
                                     <span> / </span>
                                     <span className="fw-bold">Phone :</span> {order?.mobile}
                                </p>
                                <p className="card-text mb-0"> <span className="fw-bold">Address :</span> {order?.address_2}</p>
                                <h5 className="my-2">Order status: <span className="text-primary">{order?.status}</span> </h5>
                                <button className="btn btn-danger mt-2" onClick={ () => { removeOrder(order._id) } }>Remove</button>
                                <button className="btn btn-success mt-2 ms-5" onClick={ () => { updateStatus(order._id,  order.status === 'pending' ? 'accepted' : 'pending') } }>{order.status === 'pending' ? 'Accept' : 'Reject'} </button>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <h5>Product:</h5>
                                <p className="card-text mb-0"> <span className="fw-bold">Name :</span> {order?.product?.title}</p>
                                <p className="card-text mb-0"> <span className="fw-bold">Price :</span> {order?.product?.price}$</p>
                                
                            </div>
                        </div>
                    ) ) : <CircularProgress />
                }
            </div>
        </>
    )
}

export default ManageOrderDashboard
