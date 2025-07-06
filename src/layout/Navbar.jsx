import React from 'react';
import { Link } from 'react-router-dom';
<Link to="/posts" className="hover:underline">Posts</Link>


function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between">
      <div className="font-bold text-lg">TaskApp</div>
      <div className="flex gap-4 flex-wrap text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-200 text-black px-3 py-1 rounded">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;




// import { useTheme } from '../context/ThemeContext';

// function Navbar() {
//   const { darkMode, setDarkMode } = useTheme();

//   return (
//     <nav className="...">
//       {/* ...existing links */}
//       <button onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? '☀️ Light' : '🌙 Dark'}
//       </button>
//     </nav>
//   );
// }
