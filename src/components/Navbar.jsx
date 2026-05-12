'use client'
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session ,isPending} = authClient.useSession()
    const user = session?.user;
    console.log(user)


    const links=<>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/myproducts">Products</NavLink></li>
                <li><NavLink href="/myprofile">My Profile</NavLink></li>
            </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost text-xl">
      SunCart
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
 { isPending ? <span className="loading loading-spinner loading-lg"></span>


        : user ?   <div className=" flex items-center gap-4">
                <h2>{user && `Hello, ${user.name}` }</h2>
                <Image src={ user?.image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="User Avatar" width={40} height={40}  className=' rounded-[50%] h-10 w-10'/>
                  <button className=' btn btn-primary' onClick={async()=>await authClient.signOut()}> Log Out</button>
            </div>:
                <button className=' btn btn-neutral'><Link href="/login">Login</Link></button>
          }
  </div>
</div>
    );
};

export default Navbar;
