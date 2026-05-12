
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
              <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;