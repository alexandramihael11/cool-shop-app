import { ACTIONS } from './UserConstants';

const data = localStorage.getItem('user');
const user = data ? JSON.parse(data) : {};

const initialState = {
    data: user,
    loading: false,
    error: null
};

export function userReducer(state = initialState, action) {
    
    switch (action.type) {
        case ACTIONS.START_LOADING:
            return Object.assign({}, state, {
                loading: true
            });
        case ACTIONS.UPDATE_USER_DATA:
            return Object.assign({}, state, {
                data: action.data,
                loading: false
            });
        case ACTIONS.UPDATE_USER_ERROR:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            })
        default:
            return state
    }
}