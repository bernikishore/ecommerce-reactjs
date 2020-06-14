import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        return (
                <ProductConsumer>
                    {
                        value => {
                            const {id, title, img, price , inCart, qty} = this.props.product;
                            return (
                                <div className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                                    <div className='card'>
                                        <div className='img-container p-5 text-center' onClick={() => value.handleDetail(id)}>
                                            <Link to={`/details/${id}`}> {/* {{ pathname: '/details/'+id}} */}
                                                <img src={`/img/${img}`} alt={title} className='card-img-top'/>
                                            </Link>

                                            <button className='cart-btn mt-3 btn btn-danger' disabled={qty > 0 ? '' : 'disabled'} 
                                                    onClick={() => { 
                                                        value.addToCart(id)
                                                    }}>
                                                { qty > 0 ? 'AddTocart' : 'Out of Stock'}
                                            </button>
                                        </div>
                                        <div className='card-footer d-flex justify-content-between'>
                                            <Link to={`/details/${id}`} className='align-self-center mb-0'>{title}</Link>
                                            <h5 className="text=blue align-self-center mb-0 font-italic"><span className="mr-1">$</span>{price}</h5>
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


Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}