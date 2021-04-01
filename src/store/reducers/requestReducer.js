import { requestConstants } from '../constants';

const GET_REQUESTS_REQUEST = requestConstants.GET_REQUESTS_REQUEST
const GET_REQUESTS_SUCCESS = requestConstants.GET_REQUESTS_SUCCESS
const GET_REQUESTS_FAILURE = requestConstants.GET_REQUESTS_FAILURE



export function requestReducer(state = {
    loading: false,
    requestsLoading: false,
    requests: [],
    requestId:null,
}, action) {
    switch (action.type) {
        case GET_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true,
                requestsLoading: true
            }
        case GET_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                requestsLoading: false,
                requests: action.data
            } 
        case GET_REQUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                requestsLoading: false
            }
        default:
            return state
    }
}
