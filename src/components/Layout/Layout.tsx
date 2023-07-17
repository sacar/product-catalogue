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
      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default Layout;
