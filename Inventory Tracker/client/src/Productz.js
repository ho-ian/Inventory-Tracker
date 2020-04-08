import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div>
                <p>{this.props.product.title}</p>
                <p>{this.props.product.maker}</p>
                <img src={this.props.product.img}></img>
                <p>{this.props.product.description}</p>
            </div>
        );
    }
}

export default Products;