import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;