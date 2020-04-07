import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import ProductView from './Product';


function App() {
    const counter = useSelector(state => state.counter);
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

    return (
        <div className="App">

            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <ProductView products={products} dispatch={dispatch} />
        </div>
    );
}

export default connect()(App);
