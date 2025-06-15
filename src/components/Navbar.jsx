import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white shadow-md">
      <h1 className="text-2xl font-extrabold tracking-wider">Anamika Regmi</h1>
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-200 transition">About</Link>
        {/*<Link to="/projects" className="hover:text-yellow-200 transition">Projects</Link>*/}
        <Link to="/skills" className="hover:text-yellow-200 transition">Skills</Link>
       {/*} <Link to="/contact" className="hover:text-yellow-200 transition">Contact</Link>*/}
        <Link to="/resume" className="hover:text-yellow-200 transition">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
