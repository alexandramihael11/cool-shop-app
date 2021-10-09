import { ACTIONS } from './FavoritesConstants';

export function addToFavorites(payload) {
    return {
        type: ACTIONS.ADD_TO_FAVORITE,
        payload
    }
}

export function removeFromFavorites(payload) {
    return {
        type: ACTIONS.REMOVE_FROM_FAVORITE,
        payload
    }
}