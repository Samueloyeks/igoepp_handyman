import { servicesConstants } from '../constants';
import { alertActions } from './alertActions';
import { servicesService } from '../../services';



export const servicesActions = {
    getCategories,
    getSubCategories
};

function getCategories() {
    return dispatch => {
        dispatch(request());

        servicesService.getCategories()
            .then(
                resp => {
                    if (resp.data) {
                        let categories = resp.data;
                        for (var category of categories) {
                            category.value = category.id;
                            category.label = category.cat_name;
                        }
                        dispatch(success(categories));
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

    function request() { return { type: servicesConstants.GET_CATEGORIES_REQUEST } }
    function success(data) { return { type: servicesConstants.GET_CATEGORIES_SUCCESS, data } }
    function failure(error) { return { type: servicesConstants.GET_CATEGORIES_FAILURE, error } }
}


function getSubCategories(id) {
    return dispatch => {
        dispatch(request(id));

        servicesService.getSubCategories(id)
            .then(
                resp => {
                    if (resp.data) {
                        let subCategories = resp.data;
                        for (var subCategory of subCategories) {
                            subCategory.value = subCategory.id;
                            subCategory.label = subCategory.sub_cat_name;
                        }
                        dispatch(success(subCategories));
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

    function request(id) { return { type: servicesConstants.GET_SUB_CATEGORIES_REQUEST, id } }
    function success(data) { return { type: servicesConstants.GET_SUB_CATEGORIES_SUCCESS, data } }
    function failure(error) { return { type: servicesConstants.GET_SUB_CATEGORIES_FAILURE, error } }
}


