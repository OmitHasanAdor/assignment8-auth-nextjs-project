
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;