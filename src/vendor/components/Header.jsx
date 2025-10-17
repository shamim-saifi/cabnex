import React, { useState, useEffect } from 'react';
import { FaBell, FaSignOutAlt, FaUserCircle, FaBars, FaSearch } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import logo from '../../assets/logo/logo-cab.png';

const Header = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('vendorName') || 'Vendor');

  useEffect(() => {
    const storedUsername = localStorage.getItem('vendorName');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('vendorToken');
    localStorage.removeItem('vendorName');
    toast.success('Logged out successfully!');
    navigate('/vendor-login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`bg-white h-[103px] dark:bg-gray-800 border-b border-[#bebebe] p-4 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'md:ml-64' : 'ml-0'
      }`}
    >
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="text-orange-500 cursor-pointer hover:text-gray-800 transition-all duration-200 ease-in-out"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? <FaBarsStaggered className="w-8 h-8" /> : <FaBarsStaggered className="w-7 h-7" />}
        </button>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 w-64"
          />
          <FaSearch className="absolute left-3 w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
      <div className="w-40 cursor-pointer flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2 space-x-4">
        <button className="bg-[#F3F4F6] cursor-pointer p-4 rounded-xl text-orange-500 hover:text-black relative" aria-label="Notifications">
          <FaBell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>
        <button
          onClick={handleLogout}
          className="flex bg-[#F3F4F6] cursor-pointer p-4 rounded-xl text-orange-500 hover:text-black font-medium transition-colors duration-200"
          aria-label="Logout"
        >
          <FaSignOutAlt className="w-5 h-5" />
        </button>
        <div className="relative">
          <button
            onClick={() => setProfileDropdown(!profileDropdown)}
            className="flex bg-[#F3F4F6] cursor-pointer p-4 rounded-xl text-orange-500 hover:text-black items-center space-x-2 focus:outline-none"
            aria-label="Profile menu"
          >
            <FaUserCircle className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <span className="text-gray-700 dark:text-gray-200 font-grotesk font-medium">{username}</span>
          </button>
          {profileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-10">
              <a
                href="/vendor/profile"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;