"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={
          pathname === href ? "border-b-2 border-black pb-1" : undefined
        }
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;