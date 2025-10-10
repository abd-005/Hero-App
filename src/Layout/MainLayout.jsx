import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
            <div className="flex flex-col min-h-screen h-auto">
      <Navbar />
      <div className="flex-1 mb-[80px] bg-[#f5f5f5]">
        <Outlet />
      </div>
      Footer
        </div>
    );
};

export default MainLayout;