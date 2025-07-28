"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Research", link: "#research" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8 bg-black/50 backdrop-blur-sm border-b border-neutral-900"
    >
      <div className="max-w-6xl mx-auto flex justify-between md:justify-center items-center">
        {/* Logo/Brand on mobile */}
        <Link href="/" className="text-white text-lg font-light md:hidden">
          WC
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 border-t border-neutral-800 pt-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors text-sm py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};