import React from 'react'
import TitleBar from '../../components/TitleBar'
import ProductCard from './ProductCard'
import products from './products.json'

const Products = () => {
 //   console.log(products)
    return (
        <>
            <TitleBar title="Products" />
            <section>
                <div className="container">
                    <div className="row py-5">
                    {
                        products.map( product => (
                            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                                <ProductCard product= {product} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
