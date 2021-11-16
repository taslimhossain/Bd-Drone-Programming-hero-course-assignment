import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GetDrones } from '../../../hooks/action';
import apiurl from '../../../hooks/apiUrl';
import ProductCard from '../../Products/ProductCard'
import products from '../../Products/products.json'

const Products = () => {

    const products = GetDrones();
    const dbproduct = products.slice(0,6)

    return (
        <>
            <section className="products-area pt-5">
                <div className="container py-5">

                    <div className="row pb-4">
                        <div className="mx-auto text-center title-area w-50">
                            <h2 className="pb-2 fw-bold">Our Product</h2>
                            <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my french owt to do with me up.!</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {
                            dbproduct? dbproduct.map( product => ( 
                                <div className="col-lg-4 col-md-6 mb-4" key={product._id}>
                                    <ProductCard product= {product} />
                                </div>
                            )) :
                            <p>Loading...</p>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
