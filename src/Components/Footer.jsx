import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-br bg-teal-700-var  text-white py-1 px-4 z-40 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
   <Link to="/dashboard" className="flex items-center gap-2 text-xl font-bold text-white no-underline">
            <img
              src="/SwasticHMS.png"
              alt="SwastikHMS Logo"
              className="w-12 h-12 object-contain brightness-100 contrast-125 drop-shadow"
            />
            <span className="hidden sm:inline">SwastikHMS</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/about" className="hover:text-teal-300 transition">About</Link>
          <Link to="/services" className="hover:text-teal-300 transition">Services</Link>
          <Link to="/contact" className="hover:text-teal-300 transition">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-teal-300 transition">Privacy</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-lg">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_6px_#22d3ee]"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_6px_#22d3ee]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_6px_#22d3ee]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition hover:drop-shadow-[0_0_6px_#22d3ee]"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white/70 text-center w-full sm:w-auto">
          &copy; {new Date().getFullYear()} SwastikHMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
