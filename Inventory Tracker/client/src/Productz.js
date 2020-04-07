import React from 'react';
import { connect } from 'react-redux';


const Products = props => (
    <div className="Products">
        <p>{props.count}</p>
    </div>
);

export default connect()(Products);