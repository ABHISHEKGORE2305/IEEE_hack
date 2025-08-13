'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full px-8 py-5 flex justify-between items-center bg-white/90 shadow-md sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#2563eb" />
          <path d="M16 8v16M8 16h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="text-2xl font-extrabold text-blue-700 tracking-tight">DocBook</span>
      </div>

    


      <nav className="flex gap-6 items-center justify-between w-full max-w-4xl" >
        <ul className="hidden md:flex gap-[100px] text-base items-center font-medium" style={{ margin: '0 auto' , marginLeft: '-70px'}}>
          <li><a href="/" className="relative pb-1.5 text-blue-600 border-b-2 border-blue-600">Home</a></li>
          <li><a href="#services" className="relative pb-1.5 text-gray-800/80 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent transition-colors">Our Services</a></li>
          <li><a href="#testimonials" className="relative pb-1.5 text-gray-800/80 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent transition-colors">About Us</a></li>
        </ul>

        <div className="flex gap-4" style={{position: 'absolute', right: '20px'}}>
          <Link href="/login"><button className="px-6 py-2 rounded-full font-semibold text-blue-600 border-2 border-blue-600 bg-transparent hover:bg-blue-50 transition">
            Log In
          </button></Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="px-6 py-2 rounded-full font-semibold text-white bg-blue-600 shadow hover:bg-blue-700 transition outline-none"
            >
              Sign Up
            </button>
            {showDropdown && (
              <ul className="absolute top-full mt-2 w-44 bg-white rounded-xl shadow-lg border z-20" style={{ right: '-16px' }}>
                <li><a href="/doctor_signup" className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors">Doctor SignUp</a></li>
                <li><a href="/signup" className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700 rounded-b-xl transition-colors">Patient SignUp</a></li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
