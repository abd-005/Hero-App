import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import { Bounce, ToastContainer } from 'react-toastify';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
            <div className="flex flex-col min-h-screen h-auto">
      <Navbar />
      <div className="flex-1 pb-[80px] bg-[#f5f5f5]">
        <Outlet />
      </div>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
        </div>
        
    );
};

export default MainLayout;