import { useState } from "react";
import { Link } from "react-router-dom";

import brandLogo from "../assets/images/ecoSmart.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        {/* Navbar */}
        <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-2 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur bg-gray/80 text-green-800 ">

          {/* Logo (external link → <a> au lieu de Link) */}
          <a
              href="https://prebuiltui.com"
              target="_blank"
              rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src={brandLogo}/>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-12">
            <Link to="/" className="hover:text-green-950 transition">
              Home
            </Link>

            <Link to="/contact" className="hover:text-green-950 transition">
              Contact
            </Link>

            <Link to="/about" className="hover:text-green-950 transition">
              About
            </Link>
          </div>

          {/* Mobile button */}
          <button
              onClick={() => setIsOpen(true)}
              className="md:hidden active:scale-90 transition"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
            className={`fixed inset-0 z-100 bg-gray/80 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg text-green-900 transition-transform duration-300 sm:hidden ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setIsOpen(false)}>
            Products
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <button
              onClick={() => setIsOpen(false)}
              className="mt-6 size-10 flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-700 text-white transition"
          >
            ✕
          </button>
        </div>
      </>
  );
}