'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href, children}) => {
    const pathname=usePathname()
    // console.log(pathname,href)
    // const isActive=pathname === href
    return (
        <div>
            <Link href={href} className={` ${pathname === href ? 'border-b-2 border-black pb-1' : ''}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;