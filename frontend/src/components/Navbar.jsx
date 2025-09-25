import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="w-full container flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#0F284A]">
          PM Internship
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/internships" className="hover:text-blue-600">
              Internships
            </Link>
          </li>
          <li>
            <Link to="/companies" className="hover:text-blue-600">
              Companies
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-blue-600">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4 ">
          <a
            href="/login"
            className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-[#FF7500] text-white rounded-lg hover:bg-[#0F284A]"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-[#0F284A]">
                Home
              </a>
            </li>
            <li>
              <a href="/internships" className="hover:text-[#0F284A]">
                Internships
              </a>
            </li>
            <li>
              <a href="/companies" className="hover:text-[#0F284A]">
                Companies
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-[#0F284A]">
                Resources
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#0F284A]">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#0F284A]">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block px-4 py-2 text-[#0F284A] border border-blue-600 rounded-lg hover:bg-blue-50"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
