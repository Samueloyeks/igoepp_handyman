import { requestConstants } from '../constants';
import { alertActions } from './alertActions';
import { requestService } from '../../services';



export const requestActions = {
    getRequests,
};

function getRequests(id) {
    return dispatch => {
        dispatch(request());

        requestService.getRequests(id)
            .then(
                resp => {
                    if (resp) {
                        let requests = resp;
                        dispatch(success(requests));
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

    function request() { return { type: requestConstants.GET_REQUESTS_REQUEST } }
    function success(data) { return { type: requestConstants.GET_REQUESTS_SUCCESS, data } }
    function failure(error) { return { type: requestConstants.GET_REQUESTS_FAILURE, error } }
}



