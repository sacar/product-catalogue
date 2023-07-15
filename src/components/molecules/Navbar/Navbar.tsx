import React from 'react';

interface NavbarProps {
  items: string[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white text-xl font-bold">
              Logo
            </a>
          </div>
          <div className="flex">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
