import api from './api';
import db from '../utils/db';
import { getToken, getSession } from '../helpers/auth';
import axios from 'axios';
import {
    API_DEV_URL,
    PLATFORM
} from '@env';



const baseURL = API_DEV_URL;
const application = PLATFORM
// const baseURL = API_LOCAL_URL;


export const requestService = {
    getRequests
};

async function getRequests(id) {
    const token = await getToken()

    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }


    const url = `${baseURL}/auth/hrequest/showrequestbycatidandloc/${id}`;

    try {
        const resp = await axios.get(url,config);
        if (resp.data && resp.status === 200) {
            return resp.data;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}




