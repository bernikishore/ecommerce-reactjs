import React, { Component } from 'react';
import {ProductConsumer} from '../context'
export default class Alert extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                         const {alertOpen} = value;
                         const {title} = value.alertProduct;
                        
                         if(!alertOpen) {
                             return null;
                         } else {
                            return(
                                <div className="alert alert-success" role="alert">
                                    Your product {title} was added
                                </div>                                
                            )
                         }
                    }
                }
            </ProductConsumer>
        )
    }
}
