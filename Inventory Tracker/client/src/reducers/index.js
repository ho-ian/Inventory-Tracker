import counterReducer from './counter';
import productReducer  from './product';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	product: productReducer
});

export default allReducers;