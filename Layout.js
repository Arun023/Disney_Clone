import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './src/components/Header';

const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

export default Layout