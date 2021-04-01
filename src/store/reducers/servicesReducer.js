import { servicesConstants } from '../constants';

const GET_CATEGORIES_REQUEST = servicesConstants.GET_CATEGORIES_REQUEST
const GET_CATEGORIES_SUCCESS = servicesConstants.GET_CATEGORIES_SUCCESS
const GET_CATEGORIES_FAILURE = servicesConstants.GET_CATEGORIES_FAILURE

const GET_SUB_CATEGORIES_REQUEST = servicesConstants.GET_SUB_CATEGORIES_REQUEST
const GET_SUB_CATEGORIES_SUCCESS = servicesConstants.GET_SUB_CATEGORIES_SUCCESS
const GET_SUB_CATEGORIES_FAILURE = servicesConstants.GET_SUB_CATEGORIES_FAILURE



export function servicesReducer(state = {
    loading: false,
    categoriesLoading: false,
    subCategoriesLoading: false,
    categories: [],
    categoryId:null,
    subCategoryId:null,
    subCategories: []
}, action) {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                categoriesLoading: true
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categoriesLoading: false,
                categories: action.data
            } 
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                categoriesLoading: false
            }
        case GET_SUB_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                subCategoriesLoading: true,
            }
        case GET_SUB_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                subCategoriesLoading: false,
                subCategories: action.data
            }
        case GET_SUB_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                subCategoriesLoading: true
            }
        default:
            return state
    }
}
