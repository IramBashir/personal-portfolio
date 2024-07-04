// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Iram Bashir</h1>
        <nav className="hidden md:flex space-x-6">
          <Link to={`${process.env.PUBLIC_URL}/`} className="text-white hover:text-blue-200 transition duration-300">Home</Link>
          <Link to={`${process.env.PUBLIC_URL}/about`} className="text-white hover:text-blue-200 transition duration-300">About</Link>
          <Link to={`${process.env.PUBLIC_URL}/projects`} className="text-white hover:text-blue-200 transition duration-300">Projects</Link>
          <Link to={`${process.env.PUBLIC_URL}/contact`} className="text-white hover:text-blue-200 transition duration-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6 transition duration-300" />
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-blue-600 p-4 transition duration-300">
          <ul className="space-y-4">
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`} className="text-white hover:text-blue-200 block transition duration-300">Home</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/about`} className="text-white hover:text-blue-200 block transition duration-300">About</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/projects`} className="text-white hover:text-blue-200 block transition duration-300">Projects</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/contact`} className="text-white hover:text-blue-200 block transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
