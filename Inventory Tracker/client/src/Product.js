import React, { Component } from 'react';
import fetchProducts from './fetchProducts';
import Products from './Productz';
 
class ProductView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetchProducts(this.props.dispatch);
    }

    render() {
        console.log(this.props.products);
        if (this.props.products.products.length > 0) {
            return (
                <div>
                    <p>{this.props.products.products[0].id}</p>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
            
    }
}

export default ProductView;