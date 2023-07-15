import React from 'react';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
      <nav className="text-sm">
        <ol className="list-none flex items-center">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <a href={item.url} className="text-gray-500 hover:text-gray-700">
                {item.label}
              </a>
              {index !== items.length - 1 && (
                <span className="text-gray-400 mx-2">&#47;</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };

export default Breadcrumb;
