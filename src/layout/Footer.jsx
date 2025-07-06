import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-300 p-4 mt-10">
      &copy; {new Date().getFullYear()} TaskApp. All rights reserved.
    </footer>
  );
}

export default Footer;
