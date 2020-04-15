import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLoading: true,
            pageNum: 0
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
    }

    async fetchProducts(page = 1) {
        page = page < 1 ? 1 : page;

        await fetch('products?page=' + page)
            .then(res => console.log(res.json()))

            .then(res => {
                this.setState({
                    products: res,
                    isLoading: false,
                    pageNum: page
                })
            });
    }

    previousPage() {
        this.fetchProducts(this.state.pageNum - 1);
    }


    nextPage() {
        this.fetchProducts(this.state.pageNum + 1);
    }

    renderProductTable(products) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>id</th>
                    <th>maker</th>
                    <th>url</th>
                    <th>title</th>
                    <th>img</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <tr key={product.id}>
                        <td></td>
                        <td>{product.id}</td>
                        <td>{product.maker}</td>
                        <td>{product.url}</td>
                        <td>{product.title}</td>
                        <td>{product.img}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>isloading</div>
            );
        }
        else {
            let content = this.renderProductTable(this.state.products);
            return (
                <div>
                    {content}
                    <button onClick={this.previousPage}>Previous Page</button>
                    <button onClick={this.nextPage}>Next Page</button>
                </div>
                
            );
        }
    }
}

export default Products;