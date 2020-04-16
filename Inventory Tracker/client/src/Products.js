import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isLoading: true,
            pageNum: 0,
            numItems: 0,
            numPages: 0
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
    }

    async fetchProducts(page = 1) {

        await fetch('products?page=' + page)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res[0].productList,
                    isLoading: false,
                    pageNum: page,
                    numItems: res[0].numItems,
                    numPages: res[0].numPages,
                    pageSize: res[0].pageSize
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
            let firstItem = this.state.pageSize * this.state.pageNum - (this.state.pageSize - 1);
            let lastItem = this.state.pageSize * this.state.pageNum;
            lastItem = lastItem > this.state.numItems ? this.state.numItems : lastItem;
            return (
                <div>
                    <p>Displaying {firstItem} to {lastItem} of {this.state.numItems} items.</p>
                    {content}
                    {(this.state.pageNum == 1) ? null : <button onClick={this.previousPage}>Previous Page</button>}
                    {(this.state.pageNum == this.state.numPages) ? null : < button onClick={this.nextPage}>Next Page</button>}
                </div>
                
            );
        }
    }
}

export default Products;