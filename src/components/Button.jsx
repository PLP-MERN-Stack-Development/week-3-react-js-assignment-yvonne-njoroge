import React from 'react';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

function Button({ children, variant = 'primary', onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
