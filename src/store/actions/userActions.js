import { userConstants } from '../constants';
import { alertActions } from './alertActions';
import { userService } from '../../services';



export const userActions = {
    login,
    signup,
    forgotPassword,
    logout
};

function login(user) {
    return dispatch => {
        dispatch(request(user));

        userService.login(user)
            .then(
                resp => {
                    if (resp && resp.message === 'success') {
                        const userData = {
                            email: resp.email,
                            first_name: resp.first_name,
                            last_name: resp.last_name,
                            phone: resp.phone,
                            id: resp.customer_id,
                            sex: resp.sex
                        }
                        // const userToken = resp.token
                        dispatch(success(userData));
                    } else {
                        dispatch(failure('error'));
                        dispatch(alertActions.error('Error'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ).catch(ex => {
                dispatch(failure(ex.toString()));
                dispatch(alertActions.error(ex.toString()));
            })
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function signup(user) {
    return dispatch => {
        dispatch(request(user));

        userService.signup(user)
            .then(
                resp => {
                    if (resp && resp.message === 'success') {
                        dispatch(alertActions.success('Signup successful'));
                        const userData = {
                            email: resp.email,
                            first_name: resp.first_name,
                            last_name: resp.last_name,
                            phone: resp.phone,
                            id: resp.customer_id,
                            sex: resp.sex
                        }
                        // const userToken = resp.token
                        dispatch(success(userData));
                    } else {
                        dispatch(failure('error'));
                        dispatch(alertActions.error('Error'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ).catch(ex => {
                dispatch(failure(ex.toString()));
                dispatch(alertActions.error(ex.toString()));
            })
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(data) { return { type: userConstants.REGISTER_SUCCESS, data } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function forgotPassword(data) {
    return dispatch => {
        dispatch(request(data));

        userService.forgotPassword(data)
            .then(
                resp => {
                    console.log(resp);
                    if (resp && resp.message === 'Success') {
                        dispatch(success());
                        alert('Please check your mail for your new password')
                    } else {
                        dispatch(failure('error'));
                        dispatch(alertActions.error('Error'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            ).catch(ex => {
                dispatch(failure(ex.toString()));
                dispatch(alertActions.error(ex.toString()));
            })
    }; 

    function request(user) { return { type: userConstants.RESET_REQUEST, user } }
    function success() { return { type: userConstants.RESET_SUCCESS } }
    function failure(error) { return { type: userConstants.RESET_FAILURE, error } }
}

function logout() {
    return dispatch => {
        userService.logout()
            .then(() => {
                // const store = configureStore();
                // persistStore(store).purge();
                dispatch(success())
            }
            )
    };

    function success() { return { type: userConstants.LOGOUT_SUCCESS } }
}

