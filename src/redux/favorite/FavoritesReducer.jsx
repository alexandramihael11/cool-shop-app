import { ACTIONS } from './FavoritesConstants';

const initialState = {
    products: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO_FAVORITE:
            {
                const newState = {...state, products: [...state.products, action.payload.product]};
                return newState;
            }
        case ACTIONS.REMOVE_FROM_FAVORITE:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default:
            return state;
    }
}