import React from 'react'
import TitleBar from '../../components/TitleBar'
import { GetDrones } from '../../hooks/action'
import ProductCard from './ProductCard'
import products from './products.json'

const Products = () => {
 //   console.log(products)
 const products = GetDrones();
    return (
        <>
            <TitleBar title="Products" />
            <section>
                <div className="container">
                    <div className="row py-5">
                    {
                        products? products.map( product => (
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
