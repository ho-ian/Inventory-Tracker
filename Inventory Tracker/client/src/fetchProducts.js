import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './actions';


const fetchProducts = (dispatch) => {
    //dispatch(fetchProductsPending());
    //fetch('products')
    //    .then(res => res.json())
    //    .then(res => {
    //        if (res.error) {
    //            throw (res.error);
    //        }
    //        dispatch(fetchProductsSuccess(res));
    //    })
    //    .catch(error => {
    //        dispatch(fetchProductsError(error));
    //    })
    dispatch(fetchProductsPending());
    dispatch(fetchProductsSuccess([{ 'id': '1234', 'name': 'test' }]));
}

export default fetchProducts;