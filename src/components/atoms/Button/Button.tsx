import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  type: 'primary' | 'delete' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, label , type }) => {
  const buttonClasses = {
    primary: 'bg-green-500 hover:bg-green-600',
    delete: 'bg-red-500 hover:bg-red-600',
    secondary: 'bg-gray-200 hover:bg-gray-300'
  };

  return (
    <button
      className={`px-4 py-2 text-white font-medium rounded ${
        buttonClasses[type]
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
