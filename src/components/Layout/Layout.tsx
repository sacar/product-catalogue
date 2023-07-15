import React from "react";
import Navbar from "../molecules/Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = ["Home", "About", "Services", "Contact"];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar items={navItems} />
      <main className="flex-grow container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
