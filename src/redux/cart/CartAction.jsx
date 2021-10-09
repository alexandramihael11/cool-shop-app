import { ACTIONS } from './CartConstants';

export function addToCart(payload) {
    return {
        type: ACTIONS.ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: ACTIONS.REMOVE_FROM_CART,
        payload
    }
}