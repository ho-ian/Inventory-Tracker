import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions';

const initialState = {
    pending: false,
    products: [],
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                pending: true,
                products: [],
                error: null
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                pending: false,
                products: action.products,
                error: null
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                pending: false,
                products: [],
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}

export default productReducer;