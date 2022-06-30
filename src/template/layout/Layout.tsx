import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
export default function Layout() {
    return (
        <>
            <Sidebar />
            <Header />
            <Outlet />
        </>
    );
}
