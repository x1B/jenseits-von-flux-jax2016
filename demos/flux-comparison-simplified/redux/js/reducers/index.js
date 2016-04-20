import { combineReducers } from 'redux';
import { default as cart, getQuantity, getAddedIds } from './cart';
import { productsById, getProduct } from './products';

export function getTotal(state) {
    const { cart, productsById } = state;
    return getAddedIds(cart).reduce((total, id) =>
        total + getProduct(productsById, id).price * getQuantity(cart, id),
        0
    ).toFixed(2);
}

export function getCartProducts(state) {
    const { cart, productsById } = state;

    return getAddedIds(cart).map(id => ({
        ...getProduct(productsById, id),
        quantity: getQuantity(cart, id)
    }));
}

export default combineReducers({
    cart,
    productsById
});
