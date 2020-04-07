import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './actions';


const fetchProducts = (dispatch) => {
    dispatch(fetchProductsPending());
    fetch('products')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            dispatch(fetchProductsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
}

export default fetchProducts;