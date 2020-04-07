import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchProducts from './fetchProducts';
import { getProducts, getProductsError, getProductsPending } from './reducers/product';
 
class ProductView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);

        this.state = {
            error: '',
            products: [],
            pending: false
        };
    }

    componentDidMount() {
        fetchProducts(this.props.dispatch);
        console.log("HERE");
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (this.pending === false) return false;
        // more tests
        return true;
    }

    render() {

        if (!this.shouldComponentRender()) console.log("NOTLOADEDYET");

        console.log(this.props.products);
        return (
            <div>
            </div>
        )        
    }
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})
    
export default connect(mapStateToProps)(ProductView );
