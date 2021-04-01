import db from '../utils/db';


export async function getToken() {
    var userToken;

    try {
        userToken = await db.get('userToken');
    } catch (ex) {
        console.log('Error getting token: ' + ex)
    }

    return JSON.parse(userToken);
}

export async function deleteToken() {

    try {
        await db.delete('userToken');
    } catch (ex) {
        console.log('Error deleting token: ' + ex)
    }

    return userToken;
}

export async function getSession() {
    var session;

    try {
        session = await db.get('session');
    } catch (ex) {
        console.log('Error getting session: ' + ex)
    }

    return JSON.parse(session);
}

export async function deleteSession() {

    try {
        await db.delete('session');
    } catch (ex) {
        console.log('Error deleting session: ' + ex)
    }

    return ;
}

export async function getUser() {
    var userData;

    try {
        userData = await db.get('userData');
    } catch (ex) {
        console.log('Error getting user data: ' + ex)
    }

    return JSON.parse(JSON.parse(userData));
}