import Navbar from '@/components/Navbar';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const Authlayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Authlayout;