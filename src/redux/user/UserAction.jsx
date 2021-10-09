import { signInWithGoogle, signInWithFacebook, signOut } from '../../apis/firebase/firebase';
import {ACTIONS} from './UserConstants';

const startLoading = () => {
    return {
        type: ACTIONS.START_LOADING
    }
}
const updateUserData = (payload) => {
    return {
        type: ACTIONS.UPDATE_USER_DATA,
        data: payload
    }
}
const updateUserError = (payload) => {
    return {
        type: ACTIONS.UPDATE_USER_ERROR,
        error: payload
    }
}

export function loginUser(props) {
    switch (props) {
        case 'GOOGLE':
            return (dispatch) => {
                dispatch(startLoading());
        
                signInWithGoogle().then(user => {
                    dispatch(updateUserData(user));
                    localStorage.setItem('user', JSON.stringify(user));
                }).catch(error => {
                    dispatch(updateUserError(error));
                });
            }
        case 'FACEBOOK':
            return (dispatch) => {
                dispatch(startLoading());
        
                signInWithFacebook().then(user => {
                    dispatch(updateUserData(user));
                    localStorage.setItem('user', JSON.stringify(user));
                }).catch(error => {
                    dispatch(updateUserError(error));
                });
            }
        default:
            return null
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData({}));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}