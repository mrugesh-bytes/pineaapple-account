import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token: any = localStorage.getItem('accessToken');

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
