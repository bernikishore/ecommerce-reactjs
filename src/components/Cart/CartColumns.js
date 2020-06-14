import React from 'react'

export default function CartColumns() {
    return (
        <div className="container text-center d-none d-lg-block my-3">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <div className="text-uppercase"><strong>Products</strong></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="text-uppercase"><strong>Name of product</strong></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="text-uppercase"><strong>Price</strong></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="text-uppercase"><strong>Quantity</strong></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="text-uppercase"><strong>Remove</strong></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="text-uppercase"><strong>Total</strong></div>
                </div>
            </div>
        </div>
    )
}
