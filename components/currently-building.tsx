"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CurrentlyBuilding() {
  const projects = [
    {
      title: "Loop",
      description: "Revolutionizing urban mobility with sustainable ride-sharing solutions",
      link: "https://looprides.dev",
      role: "Founder & Lead Developer",
    },
    {
      title: "Aquion",
      description: "Hydropanels harvesting clean water from air for African rural villages",
      link: "https://aquion-website.vercel.app",
      role: "Project Lead",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-neutral-300 mb-12"
        >
          Currently Building
        </motion.h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-neutral-800 pl-6 hover:border-neutral-600 transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 mb-2">{project.description}</p>
                  <p className="text-sm text-neutral-500">{project.role}</p>
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors ml-4"
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}