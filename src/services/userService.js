import api from './api';
import db from '../utils/db';
import {getToken, getSession} from '../helpers/auth';
import axios from 'axios';
import {API_DEV_URL, PLATFORM} from '@env';

const baseURL = API_DEV_URL;
const application = PLATFORM;
// const baseURL = API_LOCAL_URL;

export const userService = {
  login,
  signup,
  forgotPassword,
  logout,
  getCustomer,
};

async function login(data) {
  // const token = await getToken()

  // const config = {
  //     headers: {
  //         Authorization: "Bearer " + token,
  //         'Content-Type': 'application/json',
  //     }
  // }

  const url = `${baseURL}/igoeppauth/loginhelper`;
  data.application = application;

  try {
    const resp = await axios.post(url, data);
    if (resp.data && resp.data.message === 'success') {
      const userToken = resp.data.access_token;
      const session = resp.data.loginsession;
      const user = resp.data;
      const userData = {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        id: user.helper_id,
        sex: user.sex,
      };

      await db.set('userToken', userToken);
      await db.set('session', session);
      await db.set('userData', JSON.stringify(userData));

      return resp.data;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status == 404) {
      alert('Incorrect email or password');
    }
    return error;
  }
}

async function signup(data) {
  const url = `${baseURL}/helper/store`;

  try {
    const resp = await axios.post(url, data);
    if (resp.data && resp.data.message === 'success') {
      const userToken = resp.data.access_token;
      const session = resp.data.loginsession;
      const user = resp.data;
      const userData = {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        id: user.helper_id,
        sex: user.sex,
      };
      await db.set('userToken', userToken);
      await db.set('session', session);
      await db.set('userData', JSON.stringify(userData));

      return resp.data;
    }
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status == 409) {
      alert('Email has already been registered');
    }
    return error;
  }
}

async function forgotPassword(data) {
  const url = `${baseURL}/helper/forgetpassword`;

  try {
    const resp = await axios.post(url, data);
    if (resp.data && resp.data.message === 'Success') {
      return resp.data;
    }
  } catch (error) {
    alert('Error sending reset token');
    return error;
  }
}

async function logout() {
  const token = await getToken();
  const session = await getSession();

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  const url = `${baseURL}/auth/igoeppauth/${session}/logouthelper`;

  try {
    const resp = await axios.get(url, config);

    await db.delete('userToken');
    await db.delete('session');
    await db.delete('userData');

    // if (resp.data.message === 'success') {

    // }
  } catch (error) {
    // alert('Error sending reset token')
    return error;
  }

  return;
}

async function getCustomer(id) {
  const token = await getToken();

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  const url = `${baseURL}/auth/customer/${id}`;

  try {
    const resp = await axios.get(url, config);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (error) {
    // alert('Error sending reset token')
    return error;
  }

  return;
}
