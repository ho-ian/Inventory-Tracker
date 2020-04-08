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
        var pdlist = this.props.products.products.map(product => (
            <Products product={product}/>));
        if (this.props.products.products.length > 0) {
            return (
                <div>
                    {pdlist}
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