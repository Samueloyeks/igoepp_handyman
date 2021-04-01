import { combineReducers } from 'redux';

const { userReducer } = require('./userReducer');
const { alertReducer } = require('./alertReducer');
const { servicesReducer } = require('./servicesReducer');
const { requestReducer } = require('./requestReducer');



const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer,
    services: servicesReducer,
    requests:requestReducer
});

export default rootReducer;