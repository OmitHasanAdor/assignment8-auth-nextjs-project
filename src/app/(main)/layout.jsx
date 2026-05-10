import Navbar from '@/components/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default Mainlayout;