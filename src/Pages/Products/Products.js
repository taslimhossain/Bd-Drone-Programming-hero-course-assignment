import React from 'react'
import CircularProgress from '../../components/CircularProgress'
import TitleBar from '../../components/TitleBar'
import { GetDrones } from '../../hooks/action'
import ProductCard from './ProductCard'


const Products = () => {

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
                        <CircularProgress />
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
