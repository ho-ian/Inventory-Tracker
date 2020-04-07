import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import ProductView from './Product';


function App() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
          <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <ProductView dispatch={dispatch}></ProductView>
        </div>
    );
}

export default connect(null)(App);
