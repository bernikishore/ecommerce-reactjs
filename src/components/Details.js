import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            
                <ProductConsumer>
                    {
                        value => {
                            { console.log(value.detailProduct); }

                            const {id, company, img, info, price , title, inCart, qty} = value.detailProduct;


                            const stockInfo = qty > 0 ? 'In Stock' : 'Out of Stock';

                            return(
                                <div className='container py-5'>
                                    <div className='row'>
                                        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                            <h1>{title}</h1>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-10 mx-auto col-md-6 my-3 text-center'>
                                            <img src={`/img/${img}`} alt={title}/>
                                        </div>
                                        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                            <h2>Model: {title}</h2>

                                            <div className='stock availablity'>
                                                Stock: <span className={qty > 0 ? 'bg-success p-1 text-white' : 'bg-danger p-1 text-white'}>{stockInfo}</span>
                                            </div>

                                            <h3 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                                Made By: <span>{company}</span>
                                            </h3>
                                            <h4 className='text-blue'><strong>Price: <span>$</span>{price}</strong></h4>
                                            <div className='description'>
                                                <strong>Information:</strong>
                                                <p className="text-muted mb-0">
                                                    {info}
                                                </p>
                                            </div>
                                            {/* Buttons */}

                                            <div className='product-actions my-3'>
                                                <Link to='/' className='btn btn-secondary mr-3'>Back to Home</Link>
                                                {
                                                    qty === 0  ?

                                                    '' :

                                                    <button className='btn btn-danger' 
                                                    onClick={()=> {
                                                        value.addToCart(id)
                                                    }} >Add To cart</button>
                                                }
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </ProductConsumer>
            
        )
    }
}
