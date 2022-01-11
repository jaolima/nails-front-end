import * as Cookies from 'js-cookie';

export const setUserCookie = (session) => {
    Cookies.remove('userCookie');
    Cookies.set('userCookie', JSON.stringify(session), { expires: 15, path: '/' });
};

export const getUserCookie = () => {
    const sessionCookie = Cookies.get('userCookie');
    if (sessionCookie === undefined) return null;
    return JSON.parse(sessionCookie);
};

export const removeUserCookie = () => {
    Cookies.remove('userCookie');
};