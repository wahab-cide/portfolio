"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  const links = [
    { name: "Email", href: "mailto:ac44@williams.edu" },
    { name: "GitHub", href: "https://github.com/wahab-cide" },
    { name: "LinkedIn", href: "https://linkedin.com/in/wahab-cide" },
    { name: "Instagram", href: "https://instagram.com/outhills.studio" },
    { name: "Coursera", href: "https://www.coursera.org/user/30c4b4505b140083c4aa59fa8e4b7448" },
    { name: "YouTube", href: "https://youtube.com/@studio_275?si=pcJzAAX_0iAOzS8S" },
  ];

  return (
    <footer id="contact" className="py-12 px-4 md:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2025. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};