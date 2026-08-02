"use client";

import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/myproducts">Products</NavLink>
      </li>
      <li>
        <NavLink href="/myprofile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900"
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={36}
              height={36}
              className="rounded-full ring-2 ring-sky-100"
            />
            <span>
              Sun<span className="text-sky-600">Cart</span>
            </span>
          </Link>
        </div>

        {/* Center links (desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1 text-sm font-medium text-gray-600">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-md text-sky-600" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 sm:flex">
                <Image
                  src={
                    user.image ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="User Avatar"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-sky-100"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>

              {/* Mobile avatar only */}
              <Image
                src={
                  user.image ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="User Avatar"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-sky-100 sm:hidden"
              />

              <button
                className="btn btn-sm rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                onClick={async () => await authClient.signOut()}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="btn btn-sm rounded-xl border-0 bg-gray-900 text-white hover:bg-gray-800"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn btn-sm hidden rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 sm:inline-flex"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;