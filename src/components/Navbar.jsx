import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div>
              <div className=" bg-white shadow-md py-5 top-0 sticky z-50">
                <ul className=' flex justify-center items-center gap-5 text-gray-700 font-medium'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">Products</NavLink></li>
                <li><NavLink href="/login">My Profile</NavLink></li>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;