import React from 'react'
import ProductCard from '../../Products/ProductCard'
import products from '../../Products/products.json'

const Products = () => {
    const dbproduct = products.slice(0,3)
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
                            dbproduct.map( product => (
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
