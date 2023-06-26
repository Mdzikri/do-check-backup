import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface defaultLayoutProps {
  children: React.ReactNode | JSX.Element;
}

const DefaultLayout: React.FC<defaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[120px]">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
