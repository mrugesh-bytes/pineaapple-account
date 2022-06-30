import { createContext } from 'react';

const accessToken: any = localStorage.getItem('accessToken');
const user: any = localStorage.getItem('user');

const AppContext = createContext({
    accessToken: accessToken ? accessToken : '',
    userInfo: user ? JSON.parse(user) : {},
});

export { AppContext };
