import React from 'react';
import LoggedIn from '../components/auth/loggedin/LoggedIn';

import Login from '../components/auth/login/Login';

const LoginPage = () => {
    const email = localStorage.getItem('email');
    const accessToken = localStorage.getItem('accessToken');

    return email && accessToken ? <LoggedIn email={email} /> : <Login />;
};

export default LoginPage;
