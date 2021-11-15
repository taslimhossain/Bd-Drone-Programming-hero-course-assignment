import React, { useState } from 'react'
import { useParams } from 'react-router';
import Popup from '../../components/Popup';
import TitleBar from '../../components/TitleBar';
import product from '../Products/products.json'

const Checkout = () => {
    const {id} = useParams();
    const singleProduct = product.find( product => product.id === parseInt(id));

    const [orderData, setOrderData] = useState({});
    const [popup, setPopupData] = useState({'show':false});

    // Checkout field value
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderData }
        newOrderData[field] = value;
        setOrderData(newOrderData);
        setPopupData({'show':false});        
    }

    // Handle order
    const handleOrder = e => {
        e.preventDefault();
        console.log('hi')

        if( !orderData.mobile || !orderData.email ){
            setPopupData({
                'show':true,
                'message': 'Sorry email and mobile number can not be empty'
            });
            return ;   
        }

        setPopupData({
            'show':true,
            'message': 'Order successfully'
        });

        document.getElementById('ordersubmit').reset();
       
    }

    

    return (
        <>
            <TitleBar title="Checkout" />
            <div className="container w-75">
                <div className="row mt-5">
                    <div className="col-md-5">
                        <div>
                            <h2 className="fw-bold mb-2">{singleProduct.title}</h2>
                            <p className="card-text mb-0"> <span className="fw-bold">Range :</span> {singleProduct.range}</p>
                            <p className="card-text  mb-0"><span className="fw-bold">Flight Time:</span> {singleProduct.flightime}</p>
                            <p className="fs-4 fw-bold mb-0 text-primary"> <span className="text-black">Price: </span> {singleProduct.price}$</p>
                            <p className="mt-2">{singleProduct.description}</p>
                            <img src={`/${singleProduct.photo}`} alt={singleProduct.title} className="my-3"/>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <h4 className="mb-3">Billing address</h4>
                        <form onSubmit={handleOrder} id="ordersubmit">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" name="firstname" onChange={handleOnChange} defaultValue='' className="form-control" id="firstName" placeholder="First name"/>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" name="lastname" onChange={handleOnChange} className="form-control" id="lastName" placeholder="Last name" required="" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" onChange={handleOnChange} defaultValue='' className="form-control" id="email" placeholder="you@example.com" required="" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                    <input type="text" name="mobile" onChange={handleOnChange} className="form-control" id="mobile" placeholder="+880-00000000" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" name="address" onChange={handleOnChange} className="form-control" id="address" placeholder="1234 Main St" required="" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2</label>
                                    <input type="text" name="address_2" onChange={handleOnChange}  className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" name="country" id="country" onChange={handleOnChange}  required="">
                                        <option value="">Choose...</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="United States">United States</option>
                                    </select>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" name="state" onChange={handleOnChange}  id="state" required="">
                                    <option value="">Choose...</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="California">California</option>
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" name="zipcode" onChange={handleOnChange}  className="form-control" id="zip" placeholder="" required="" />
                                </div>
                            </div>

                            <button className="w-100 btn btn-primary btn-lg mt-4" type="submit">Order now</button>
                        </form>
                        {popup.show ? <Popup data={popup} /> : '' }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout
