import React from 'react'
import { navLinks } from '../../constants/index'

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 z-50 bg-black/5 backdrop-blur-lg shadow-lg w-full ">
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a 
          href="" 
          className="flex gap-3 items-center group"
        >
          <img 
            src="/images/logo.png" 
            alt="logo" 
            className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
          />
          <p className="text-2xl font-semibold text-white relative transition-colors duration-300 group-hover:text-purple-400">
            Cocktail Oasis
            {/* Underline effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </p>
        </a>

        {/* Nav Links */}
        <ul className="flex gap-8 text-2xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className=" text-2xl relative text-white font-medium transition-colors duration-300 hover:text-purple-400"
              >
                {link.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 hover:w-full"></span>
                {/* Cool underline animation */}
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
