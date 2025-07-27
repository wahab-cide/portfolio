"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
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
      className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="flex gap-8">
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
      </div>
    </motion.nav>
  );
};