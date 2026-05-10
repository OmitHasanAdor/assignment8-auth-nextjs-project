import Navbar from '@/components/Navbar';
import React from 'react';

const Authlayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <main>
                {children}
            </main>

        </div>
    );
};

export default Authlayout;