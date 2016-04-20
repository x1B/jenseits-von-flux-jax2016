import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../actions';

function product(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            };
        default:
            return state;
    }
}

export function productsById(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.reduce((obj, product) => {
                obj[product.id] = product;
                return obj;
            }, {});
        default:
            const { productId } = action;
            if (productId) {
                return {
                    ...state,
                    [productId]: product(state[productId], action)
                };
            }
            return state;
    }
}

export function getProduct(state, id) {
    return state[id];
}

export function getProductsList(state) {
    return Object.keys(state).map(id => getProduct(state, id));
}
